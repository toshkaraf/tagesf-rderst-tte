import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Gauge, PauseCircle, PlayCircle, RotateCcw, Sparkles } from 'lucide-react'
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
const THINKING_IMAGE = '/media/ki/thinking_woman_de.png'
const WAITING_VIDEO = '/media/ki/waiting_bg.mp4'
const SPEECH_RATE_KEY = 'ki-speech-rate'
const DEFAULT_SPEECH_RATE = 0.53
const FOLLOW_UP_PROMPT = 'Wenn du möchtest, wähle jetzt einen der nächsten Aspekte auf den grünen Schaltflächen.'
const SPEECH_RATES = [0.45, 0.53, 0.7, 0.9, 1.1]

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
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const waitingIntroTimerRef = useRef<number | null>(null)
  const currentPhraseRef = useRef<string | null>(null)
  const lastSpokenMessageIdRef = useRef<string | null>(null)
  const speechQueueRef = useRef<string[]>([])
  const manuallyStoppedRef = useRef(false)

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
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [isAnswerPlaybackPending, setIsAnswerPlaybackPending] = useState(false)
  const [currentMessageId, setCurrentMessageId] = useState<string | null>(null)
  const [showWaitingVideo, setShowWaitingVideo] = useState(false)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [speechRate, setSpeechRate] = useState(() => {
    const raw = window.localStorage.getItem(SPEECH_RATE_KEY)
    const parsed = raw ? Number(raw) : DEFAULT_SPEECH_RATE
    return Number.isFinite(parsed) ? parsed : DEFAULT_SPEECH_RATE
  })

  const inChat = messages.length > 0
  const cooldownLeftSec =
    cooldownUntil && Date.now() < cooldownUntil ? Math.ceil((cooldownUntil - Date.now()) / 1000) : 0
  const last = messages[messages.length - 1]
  const hasUserMessages = messages.some(m => m.isUser)
  const isLastAI = Boolean(last && !last.isUser)
  const lastSuggestions = last && !last.isUser ? last.suggestedResponses ?? [] : []
  const shouldShowWaiting =
    hasUserMessages && (loading || isAnswerPlaybackPending || (isLastAI && isSpeaking && !isAudioPlaying))
  const shouldShowAnswerVideo = hasUserMessages && isLastAI && isAudioPlaying
  const showSuggestions =
    inChat &&
    isLastAI &&
    lastSuggestions.length > 0 &&
    !loading &&
    !(hasUserMessages && (isSpeaking || isAnswerPlaybackPending))

  const setRateLimit = useCallback(() => {
    setCooldownUntil(Date.now() + COOLDOWN_MS)
  }, [])

  const isRateLimitError = (msg: string) =>
    msg.includes('429') || msg.includes('Kontingent') || msg.includes('überlastet')

  const clearWaitingTimer = useCallback(() => {
    if (waitingIntroTimerRef.current !== null) {
      window.clearTimeout(waitingIntroTimerRef.current)
      waitingIntroTimerRef.current = null
    }
  }, [])

  const cancelSpeech = useCallback((clearQueue = true) => {
    manuallyStoppedRef.current = true
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    if (clearQueue) {
      speechQueueRef.current = []
      currentPhraseRef.current = null
      setCurrentMessageId(null)
    }
    setIsSpeaking(false)
    setIsAudioPlaying(false)
    setIsAnswerPlaybackPending(false)
  }, [])

  const speakNextInQueue = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      setIsSpeaking(false)
      setIsAudioPlaying(false)
      setIsAnswerPlaybackPending(false)
      return
    }

    if (speechQueueRef.current.length === 0) {
      currentPhraseRef.current = null
      setIsSpeaking(false)
      setIsAudioPlaying(false)
      setIsAnswerPlaybackPending(false)
      return
    }

    const phrase = speechQueueRef.current.shift()
    if (!phrase) return

    currentPhraseRef.current = phrase
    manuallyStoppedRef.current = false
    const utterance = new SpeechSynthesisUtterance(phrase)
    utterance.lang = 'de-DE'
    utterance.rate = speechRate
    utterance.pitch = 1
    utterance.volume = 1
    utterance.onstart = () => {
      setIsSpeaking(true)
      setIsAudioPlaying(true)
      setIsAnswerPlaybackPending(false)
    }
    utterance.onend = () => {
      if (manuallyStoppedRef.current) return
      setIsAudioPlaying(false)
      currentPhraseRef.current = null
      speakNextInQueue()
    }
    utterance.onerror = () => {
      if (manuallyStoppedRef.current) return
      setIsAudioPlaying(false)
      currentPhraseRef.current = null
      speakNextInQueue()
    }

    window.speechSynthesis.speak(utterance)
  }, [speechRate])

  const startAutoSpeak = useCallback(
    (messageId: string, text: string) => {
      if (messageId === lastSpokenMessageIdRef.current) return
      lastSpokenMessageIdRef.current = messageId
      setCurrentMessageId(messageId)
      currentPhraseRef.current = null
      speechQueueRef.current = [text, FOLLOW_UP_PROMPT].filter(Boolean)
      if ('speechSynthesis' in window) {
        manuallyStoppedRef.current = true
        window.speechSynthesis.cancel()
        manuallyStoppedRef.current = false
        setIsSpeaking(true)
        speakNextInQueue()
      } else {
        setIsSpeaking(false)
        setIsAudioPlaying(false)
        setIsAnswerPlaybackPending(false)
      }
    },
    [speakNextInQueue]
  )

  const startVideoFromRandomPosition = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    const duration = Number.isFinite(video.duration) ? video.duration : 0
    const minStart = 10
    const maxStart = Math.min(360, Math.max(0, Math.floor(duration - 5)))
    if (maxStart > minStart) {
      video.currentTime = minStart + Math.floor(Math.random() * (maxStart - minStart + 1))
    } else {
      video.currentTime = 0
    }
    void video.play().catch(() => undefined)
  }, [])

  const resetFlow = useCallback(() => {
    cancelSpeech()
    clearWaitingTimer()
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
    lastSpokenMessageIdRef.current = null
    setShowWaitingVideo(false)
  }, [cancelSpeech, clearWaitingTimer])

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
      cancelSpeech()
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
    [cancelSpeech, cooldownLeftSec, cooldownUntil, setRateLimit]
  )

  const sendUserChoice = useCallback(
    async (userText: string, history: ChatMessage[], appendUserMessage = true) => {
      if (!chatFullTopicName) return
      if (cooldownUntil && Date.now() < cooldownUntil) {
        setError(
          `Der KI-Dienst ist vorübergehend überlastet (429). Bitte versuche es in ${cooldownLeftSec}s erneut.`
        )
        return
      }
      cancelSpeech()
      setLastUserText(userText)
      setLoading(true)
      setError(null)
      setIsAnswerPlaybackPending(true)
      if (appendUserMessage) {
        setMessages(prev => [...prev, { id: uid(), text: userText, isUser: true }])
      }
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
        const aiMsg: ChatMessage = {
          id: uid(),
          text: aiText,
          isUser: false,
          suggestedResponses: suggestions.length ? suggestions : undefined
        }
        setMessages(prev => [...prev, aiMsg])
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e)
        setError(msg)
        if (isRateLimitError(msg)) setRateLimit()
        setIsAnswerPlaybackPending(false)
      } finally {
        setLoading(false)
      }
    },
    [cancelSpeech, chatFullTopicName, cooldownLeftSec, cooldownUntil, setRateLimit]
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
    void sendUserChoice(t, messages, false)
  }

  const playPauseLastAiMessage = () => {
    const lastAIMessage = [...messages].reverse().find(m => !m.isUser)
    if (!lastAIMessage) return

    if (isSpeaking && currentMessageId === lastAIMessage.id) {
      cancelSpeech(false)
      return
    }

    if (!isSpeaking && currentMessageId === lastAIMessage.id && (currentPhraseRef.current || speechQueueRef.current.length)) {
      manuallyStoppedRef.current = false
      setIsSpeaking(true)
      if (currentPhraseRef.current) {
        speechQueueRef.current = [currentPhraseRef.current, ...speechQueueRef.current]
        currentPhraseRef.current = null
      }
      speakNextInQueue()
      return
    }

    lastSpokenMessageIdRef.current = null
    startAutoSpeak(lastAIMessage.id, lastAIMessage.text)
  }

  const repeatLastAiMessage = () => {
    const lastAIMessage = [...messages].reverse().find(m => !m.isUser)
    if (!lastAIMessage) return
    cancelSpeech()
    lastSpokenMessageIdRef.current = null
    window.setTimeout(() => startAutoSpeak(lastAIMessage.id, lastAIMessage.text), 0)
  }

  const cycleSpeechRate = () => {
    const currentIdx = SPEECH_RATES.findIndex(rate => Math.abs(rate - speechRate) < 0.01)
    const next = SPEECH_RATES[(currentIdx + 1) % SPEECH_RATES.length]
    setSpeechRate(next)
    window.localStorage.setItem(SPEECH_RATE_KEY, String(next))
  }

  const headerTitle = () => {
    if (inChat) return chatFullTopicName || 'KI-Gespräch'
    if (parentTopic) return topicLabel(parentTopic)
    if (subcategory) return subcategoryLabel(subcategory)
    if (category) return categoryLabel(category)
    return 'KI-LASZLO'
  }

  const headerColor = category?.id ? categoryColor(category.id) : '#3498DB'

  useEffect(() => {
    return () => {
      cancelSpeech()
      clearWaitingTimer()
    }
  }, [cancelSpeech, clearWaitingTimer])

  useEffect(() => {
    if (!last || last.isUser || last.id === lastSpokenMessageIdRef.current) return
    if (hasUserMessages) setIsAnswerPlaybackPending(true)
    const timer = window.setTimeout(() => {
      startAutoSpeak(last.id, last.text)
    }, 1000)
    return () => window.clearTimeout(timer)
  }, [hasUserMessages, last?.id, last?.isUser, last?.text, startAutoSpeak])

  useEffect(() => {
    const visualActive = shouldShowWaiting || shouldShowAnswerVideo
    if (!visualActive) {
      clearWaitingTimer()
      setShowWaitingVideo(false)
      videoRef.current?.pause()
      return
    }

    if (shouldShowWaiting) {
      setShowWaitingVideo(false)
      clearWaitingTimer()
      waitingIntroTimerRef.current = window.setTimeout(() => {
        setShowWaitingVideo(true)
      }, 2000)
    } else {
      clearWaitingTimer()
      setShowWaitingVideo(true)
    }

    startVideoFromRandomPosition()
    return clearWaitingTimer
  }, [clearWaitingTimer, shouldShowAnswerVideo, shouldShowWaiting, startVideoFromRandomPosition])

  const renderBackgroundVideo = (className: string) => (
    <video
      ref={videoRef}
      className={`ki-bg-video ${className}`}
      src={WAITING_VIDEO}
      muted
      loop
      playsInline
      preload="auto"
      onLoadedMetadata={() => {
        setIsVideoReady(true)
        startVideoFromRandomPosition()
      }}
      onError={() => setIsVideoReady(false)}
    />
  )

  return (
    <div className={`ki-page ${inChat ? 'ki-page-chat' : ''}`}>
      <header className="ki-header" style={{ background: headerColor }}>
        <button type="button" className="ki-back" onClick={goBack} aria-label="Zurück">
          <ArrowLeft size={22} />
        </button>
        <h1 className="ki-header-title">{headerTitle()}</h1>
        {inChat && (
          <div className="ki-header-actions" aria-label="Sprachausgabe">
            <button type="button" className="ki-icon-action" onClick={cycleSpeechRate} title="Sprechtempo">
              <Gauge size={18} />
              <span>{speechRate.toFixed(2)}</span>
            </button>
            <button
              type="button"
              className="ki-icon-action"
              onClick={playPauseLastAiMessage}
              title={isSpeaking ? 'Pause' : 'Vorlesen'}
            >
              {isSpeaking ? <PauseCircle size={22} /> : <PlayCircle size={22} />}
            </button>
            <button type="button" className="ki-icon-action" onClick={repeatLastAiMessage} title="Wiederholen">
              <RotateCcw size={20} />
            </button>
          </div>
        )}
      </header>

      <main className={`ki-main ${inChat ? 'ki-main-chat' : ''}`}>
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
            {loading ? (
              <div className="ki-waiting">
                <div className="ki-spinner" aria-hidden />
                <p>Einen Moment! Ich bereite die ersten Aspekte vor.</p>
              </div>
            ) : (
              <ul className="ki-tile-list">
                {subtopics.map(st => (
                  <li key={st.id}>
                    <button type="button" className="ki-suggest-tile" onClick={() => void startNewChat(st, parentTopic)}>
                      <span className="ki-tile-title">{st.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
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

            {!error && shouldShowWaiting && (
              <div className="ki-chat-stage ki-waiting-screen">
                {renderBackgroundVideo(`ki-waiting-video ${showWaitingVideo && isVideoReady ? 'visible' : ''}`)}
                <div className={`ki-thinking-panel ${showWaitingVideo && isVideoReady ? 'hidden' : ''}`}>
                  <img src={THINKING_IMAGE} alt="Einen Moment! Ich denke über die Antwort nach." />
                  <div className="ki-thinking-fallback">
                    <div className="ki-spinner" aria-hidden />
                  </div>
                </div>
              </div>
            )}

            {!error && shouldShowAnswerVideo && (
              <div className="ki-chat-stage ki-answer-screen">
                <div className="ki-answer-video-wrap">
                  {renderBackgroundVideo('ki-answer-video')}
                </div>
                <div className="ki-voice-panel" aria-label="KI spricht">
                  <div className="ki-voice-wave" aria-hidden>
                    {Array.from({ length: 12 }).map((_, idx) => (
                      <span key={idx} style={{ animationDelay: `${idx * 0.06}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {!error && !shouldShowWaiting && !shouldShowAnswerVideo && loading && (
              <div className="ki-waiting">
                <div className="ki-spinner" aria-hidden />
                <p>Einen Moment! Ich denke über die Antwort nach.</p>
              </div>
            )}

            {!error && showSuggestions && last?.suggestedResponses && (
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
