import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { themeCategories, type KiThemeCategory, type KiSubcategory, type KiTopic } from '../ki/theme/themeData.gen'
import {
  categoryLabel,
  categoryDescription,
  subcategoryLabel,
  topicLabel,
  topicDescription
} from '../ki/themeLabels'
import { generateSubtopicsForTopic } from '../ki/subtopicsGenerator'
import {
  generateAIResponse,
  generateFollowUpFactSuggestions,
  generateInitialFactSuggestions
} from '../ki/geminiClient'
import { introPhrasesDe } from '../ki/introPhrasesDe'
import './KiPage.css'

const COOLDOWN_MS = 30_000

type ChatMessage = {
  id: string
  text: string
  isUser: boolean
  suggestedResponses?: string[]
}

function uid() {
  return crypto.randomUUID()
}

function categoryColor(id: string): string {
  const colors: Record<string, string> = {
    history: '#8B4513',
    science: '#1ABC9C',
    technology: '#9B59B6',
    philosophy: '#E67E22',
    literature: '#E74C3C',
    psychology: '#3498DB',
    economics: '#27AE60',
    politics: '#2C3E50',
    arts: '#F39C12',
    nature: '#16A085',
    sports: '#C0392B'
  }
  return colors[id] ?? '#3498DB'
}

export default function KiPage() {
  const navigate = useNavigate()
  const [showPicker, setShowPicker] = useState(false)
  const [category, setCategory] = useState<KiThemeCategory | null>(null)
  const [subcategory, setSubcategory] = useState<KiSubcategory | null>(null)
  const [parentTopic, setParentTopic] = useState<KiTopic | null>(null)
  const [subtopics, setSubtopics] = useState<KiTopic[]>([])
  const [chatFullTopicName, setChatFullTopicName] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [cooldownUntil, setCooldownUntil] = useState<number | null>(null)
  const [lastUserText, setLastUserText] = useState<string | null>(null)

  const inChat = messages.length > 0
  const cooldownLeftSec =
    cooldownUntil && Date.now() < cooldownUntil ? Math.ceil((cooldownUntil - Date.now()) / 1000) : 0

  const setRateLimit = useCallback(() => {
    setCooldownUntil(Date.now() + COOLDOWN_MS)
  }, [])

  const isRateLimitError = (msg: string) =>
    msg.includes('429') || msg.includes('Kontingent') || msg.includes('überlastet')

  const resetFlow = useCallback(() => {
    setShowPicker(false)
    setCategory(null)
    setSubcategory(null)
    setParentTopic(null)
    setSubtopics([])
    setChatFullTopicName('')
    setMessages([])
    setError(null)
    setLoading(false)
    setLastUserText(null)
  }, [])

  const goBack = useCallback(() => {
    if (inChat) {
      resetFlow()
      return
    }
    if (parentTopic) {
      setParentTopic(null)
      setSubtopics([])
      return
    }
    if (subcategory) {
      setSubcategory(null)
      return
    }
    if (category) {
      setCategory(null)
      return
    }
    if (showPicker) {
      setShowPicker(false)
      return
    }
    navigate('/')
  }, [category, inChat, navigate, parentTopic, resetFlow, showPicker, subcategory])

  const startNewChat = useCallback(
    async (subtopic: KiTopic, parent: KiTopic) => {
      if (cooldownUntil && Date.now() < cooldownUntil) {
        setError(
          `Der KI-Dienst ist vorübergehend überlastet (429). Bitte versuche es in ${cooldownLeftSec}s erneut.`
        )
        return
      }
      setLoading(true)
      setError(null)
      const parentName = topicLabel(parent)
      const subName = topicLabel(subtopic)
      const fullTopicName = `${parentName} - ${subName}`
      try {
        const intro = introPhrasesDe[Math.floor(Math.random() * introPhrasesDe.length)]
        let suggestions: string[] = []
        try {
          suggestions = await generateInitialFactSuggestions(fullTopicName)
        } catch (e) {
          const m = e instanceof Error ? e.message : String(e)
          if (isRateLimitError(m)) setRateLimit()
          throw e
        }
        setChatFullTopicName(fullTopicName)
        setParentTopic(parent)
        setMessages([
          {
            id: uid(),
            text: intro,
            isUser: false,
            suggestedResponses: suggestions
          }
        ])
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e)
        setError(msg)
        if (isRateLimitError(msg)) setRateLimit()
      } finally {
        setLoading(false)
      }
    },
    [cooldownLeftSec, cooldownUntil, setRateLimit]
  )

  const sendUserChoice = useCallback(
    async (userText: string, history: ChatMessage[]) => {
      if (!chatFullTopicName) return
      if (cooldownUntil && Date.now() < cooldownUntil) {
        setError(
          `Der KI-Dienst ist vorübergehend überlastet (429). Bitte versuche es in ${cooldownLeftSec}s erneut.`
        )
        return
      }
      setLastUserText(userText)
      setLoading(true)
      setError(null)
      const contextLines: string[] = []
      const start = Math.max(0, history.length - 6)
      for (let i = start; i < history.length; i++) {
        const m = history[i]
        contextLines.push(`${m.isUser ? 'Nutzer' : 'Assistent'}: ${m.text}`)
      }
      try {
        const aiText = await generateAIResponse(
          chatFullTopicName,
          userText,
          contextLines.length ? contextLines : null
        )
        if (isRateLimitError(aiText)) setRateLimit()
        const excerpt = aiText.length > 500 ? `${aiText.slice(0, 500)}...` : aiText
        let suggestions: string[] = []
        try {
          suggestions = await generateFollowUpFactSuggestions(chatFullTopicName, userText, excerpt)
        } catch {
          suggestions = []
        }
        const userMsg: ChatMessage = { id: uid(), text: userText, isUser: true }
        const aiMsg: ChatMessage = {
          id: uid(),
          text: aiText,
          isUser: false,
          suggestedResponses: suggestions.length ? suggestions : undefined
        }
        setMessages(prev => [...prev, userMsg, aiMsg])
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e)
        setError(msg)
        if (isRateLimitError(msg)) setRateLimit()
      } finally {
        setLoading(false)
      }
    },
    [chatFullTopicName, cooldownLeftSec, cooldownUntil, setRateLimit]
  )

  const onPickSuggestion = (label: string) => {
    void sendUserChoice(label, messages)
  }

  const openTopicSubtopics = (topic: KiTopic) => {
    const list = generateSubtopicsForTopic(topic.id, topic.name)
    setSubtopics(list)
    setParentTopic(topic)
  }

  const retry = () => {
    const t = lastUserText
    if (!t || !messages.length) return
    setError(null)
    void sendUserChoice(t, messages)
  }

  const headerTitle = () => {
    if (inChat) return chatFullTopicName || 'KI-Gespräch'
    if (parentTopic) return topicLabel(parentTopic)
    if (subcategory) return subcategoryLabel(subcategory)
    if (category) return categoryLabel(category)
    return 'KI-LASZLO'
  }

  const headerColor = category?.id ? categoryColor(category.id) : '#3498DB'

  const last = messages[messages.length - 1]
  const showSuggestions = inChat && last && !last.isUser && (last.suggestedResponses?.length ?? 0) > 0 && !loading

  return (
    <div className="ki-page">
      <header className="ki-header" style={{ background: headerColor }}>
        <button type="button" className="ki-back" onClick={goBack} aria-label="Zurück">
          <ArrowLeft size={22} />
        </button>
        <h1 className="ki-header-title">{headerTitle()}</h1>
      </header>

      <main className="ki-main">
        {!inChat && !showPicker && (
          <section className="ki-home">
            <div className="ki-hero">
              <Sparkles className="ki-hero-icon" size={40} aria-hidden />
              <h2>KI-LASZLO</h2>
              <p>
                Wähle ein interessantes Thema und beginne ein fesselndes Gespräch mit KI. Geschichte,
                Wissenschaft, Technik, Philosophie, Literatur und mehr.
              </p>
            </div>
            <button type="button" className="ki-primary-btn" onClick={() => setShowPicker(true)}>
              Thema wählen
            </button>
          </section>
        )}

        {!inChat && showPicker && !category && (
          <section className="ki-list-section">
            <h2 className="ki-section-title">Bereich wählen</h2>
            <ul className="ki-tile-list">
              {themeCategories.map(c => (
                <li key={c.id}>
                  <button
                    type="button"
                    className="ki-category-tile"
                    style={{ background: `linear-gradient(135deg, ${categoryColor(c.id)}, ${categoryColor(c.id)}cc)` }}
                    onClick={() => setCategory(c)}
                  >
                    <span className="ki-tile-title">{categoryLabel(c)}</span>
                    <span className="ki-tile-desc">{categoryDescription(c)}</span>
                    <span className="ki-tile-meta">{c.subcategories.length} Unterkategorien</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {!inChat && category && !subcategory && (
          <section className="ki-list-section">
            <h2 className="ki-section-title">{categoryLabel(category)}</h2>
            <ul className="ki-tile-list">
              {category.subcategories.map(s => (
                <li key={s.id}>
                  <button type="button" className="ki-subcat-tile" onClick={() => setSubcategory(s)}>
                    <span className="ki-tile-title">{subcategoryLabel(s)}</span>
                    <span className="ki-tile-meta">{s.topics.length} Themen</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {!inChat && category && subcategory && !parentTopic && (
          <section className="ki-list-section">
            <h2 className="ki-section-title">{subcategoryLabel(subcategory)}</h2>
            <ul className="ki-tile-list">
              {subcategory.topics.map(t => (
                <li key={t.id}>
                  <button type="button" className="ki-topic-tile" onClick={() => openTopicSubtopics(t)}>
                    <span className="ki-tile-title">{topicLabel(t)}</span>
                    {topicDescription(t) ? (
                      <span className="ki-tile-desc">{topicDescription(t)}</span>
                    ) : null}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {!inChat && parentTopic && subtopics.length > 0 && (
          <section className="ki-list-section">
            <h2 className="ki-section-title">{topicLabel(parentTopic)}</h2>
            <p className="ki-hint">Wähle einen Aspekt — die KI erzählt mehr dazu.</p>
            <ul className="ki-tile-list">
              {subtopics.map(st => (
                <li key={st.id}>
                  <button type="button" className="ki-suggest-tile" onClick={() => void startNewChat(st, parentTopic)}>
                    <span className="ki-tile-title">{st.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {inChat && (
          <section className="ki-chat">
            {error && (
              <div className="ki-error" role="alert">
                <p>{error}</p>
                {lastUserText && (
                  <button type="button" className="ki-retry" onClick={retry} disabled={cooldownLeftSec > 0}>
                    {cooldownLeftSec > 0 ? `Erneut versuchen (${cooldownLeftSec}s)` : 'Erneut versuchen'}
                  </button>
                )}
              </div>
            )}

            {loading && (
              <div className="ki-waiting">
                <div className="ki-spinner" aria-hidden />
                <p>Einen Moment! Ich denke über die Antwort nach.</p>
              </div>
            )}

            {showSuggestions && last?.suggestedResponses && (
              <ul className="ki-suggestions">
                {last.suggestedResponses.map(s => (
                  <li key={s}>
                    <button type="button" className="ki-suggest-btn" onClick={() => onPickSuggestion(s)}>
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </main>
    </div>
  )
}
