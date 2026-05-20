import { useCallback, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { goBack } from '../navigation/goBack'
import { ArrowLeft } from 'lucide-react'
import './HistoricalQuizPage.css'

const IFRAME_SRC = `${import.meta.env.BASE_URL}historical-quiz/index.html`

function HistoricalQuizPage() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const leaveQuizPage = useCallback(() => {
    goBack(navigate, '/')
  }, [navigate])

  const requestIframeBack = useCallback(() => {
    const win = iframeRef.current?.contentWindow
    if (!win) {
      leaveQuizPage()
      return
    }
    win.postMessage({ type: 'HISTORY_QUIZ_BACK' }, window.location.origin)
  }, [leaveQuizPage])

  useEffect(() => {
    const origin = window.location.origin

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== origin) return
      if (event.data?.type === 'HISTORY_QUIZ_EXIT') {
        leaveQuizPage()
      }
    }

    const onPopState = () => {
      requestIframeBack()
      window.history.pushState({ historicalQuizEmbed: true }, '')
    }

    window.history.pushState({ historicalQuizEmbed: true }, '')
    window.addEventListener('message', onMessage)
    window.addEventListener('popstate', onPopState)

    return () => {
      window.removeEventListener('message', onMessage)
      window.removeEventListener('popstate', onPopState)
    }
  }, [leaveQuizPage, requestIframeBack])

  return (
    <div className="historical-quiz-page">
      <header className="historical-quiz-appbar">
        <button
          type="button"
          className="historical-quiz-icon-btn"
          onClick={requestIframeBack}
          aria-label={t.common.back}
        >
          <ArrowLeft size={22} aria-hidden />
        </button>
        <div className="historical-quiz-appbar-text">
          <h1 className="historical-quiz-title">{t.activitySelect.tileHistoricalQuiz}</h1>
          <p className="historical-quiz-sub">{t.activitySelect.tileHistoricalQuizSub}</p>
        </div>
      </header>
      <iframe
        ref={iframeRef}
        className="historical-quiz-frame"
        title={t.activitySelect.tileHistoricalQuiz}
        src={IFRAME_SRC}
        allow="autoplay; fullscreen"
      />
    </div>
  )
}

export default HistoricalQuizPage
