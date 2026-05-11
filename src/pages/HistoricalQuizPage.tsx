import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { ArrowLeft } from 'lucide-react'
import './HistoricalQuizPage.css'

const IFRAME_SRC = `${import.meta.env.BASE_URL}historical-quiz/index.html`

function HistoricalQuizPage() {
  const { t } = useLanguage()
  const navigate = useNavigate()

  return (
    <div className="historical-quiz-page">
      <header className="historical-quiz-appbar">
        <button
          type="button"
          className="historical-quiz-icon-btn"
          onClick={() => navigate('/')}
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
        className="historical-quiz-frame"
        title={t.activitySelect.tileHistoricalQuiz}
        src={IFRAME_SRC}
        allow="autoplay; fullscreen"
      />
    </div>
  )
}

export default HistoricalQuizPage
