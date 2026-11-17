import { useGoBack } from '../navigation/goBack'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import type { Session } from '../types/session'
import './EmbeddedDeckPage.css'

/**
 * Full-screen host for a standalone interactive deck (own HTML in /public, own visual style).
 * New decks only need `embedUrl` (+ optional `embedTheme`) on their Session – see docs/NEW_DECK_GUIDE.md.
 */
function EmbeddedDeckPage({ session }: { session: Session }) {
  const { t } = useLanguage()
  const goBack = useGoBack('/topics')
  const theme = session.embedTheme ?? { bg: '#1b2838', fg: '#ffffff', accent: '#ff7a1a' }
  const src = `${import.meta.env.BASE_URL}${session.embedUrl}`

  return (
    <div
      className="embedded-deck-page"
      style={{ ['--deck-bg' as string]: theme.bg, ['--deck-fg' as string]: theme.fg, ['--deck-accent' as string]: theme.accent }}
    >
      <header className="embedded-deck-appbar">
        <button type="button" className="embedded-deck-back" onClick={goBack} aria-label={t.common.back}>
          <ArrowLeft size={22} aria-hidden />
        </button>
        <h1 className="embedded-deck-title">{session.title}</h1>
      </header>
      <iframe
        className="embedded-deck-frame"
        title={session.title}
        src={src}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default EmbeddedDeckPage
