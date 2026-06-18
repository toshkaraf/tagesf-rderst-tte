import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { BookOpen, Gamepad2, ScrollText, Sparkles } from 'lucide-react'
import './ActivitySelectPage.css'

function ActivitySelectPage() {
  const { t } = useLanguage()

  return (
    <div className="activity-select-page">
      <header className="activity-select-header">
        <h1 className="activity-select-title">{t.activitySelect.title}</h1>
      </header>
      <main className="activity-select-main">
        <ul className="activity-tiles" role="list">
          <li>
            <Link to="/connect-four" className="activity-tile activity-tile--game">
              <span className="activity-tile-icon" aria-hidden>
                <Gamepad2 size={36} strokeWidth={2.25} />
              </span>
              <span className="activity-tile-text">
                <span className="activity-tile-label">{t.activitySelect.tileConnectFour}</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/topics" className="activity-tile activity-tile--topics">
              <span className="activity-tile-icon" aria-hidden>
                <BookOpen size={36} strokeWidth={2.25} />
              </span>
              <span className="activity-tile-text">
                <span className="activity-tile-label">{t.activitySelect.tileTopics}</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/ki" className="activity-tile activity-tile--ki">
              <span className="activity-tile-icon" aria-hidden>
                <Sparkles size={36} strokeWidth={2.25} />
              </span>
              <span className="activity-tile-text">
                <span className="activity-tile-label">{t.activitySelect.tileKi}</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/historical-quiz" className="activity-tile activity-tile--history-quiz">
              <span className="activity-tile-icon" aria-hidden>
                <ScrollText size={36} strokeWidth={2.25} />
              </span>
              <span className="activity-tile-text">
                <span className="activity-tile-label">{t.activitySelect.tileHistoricalQuiz}</span>
              </span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="activity-tile activity-tile--placeholder"
              aria-disabled="true"
            >
              <span className="activity-tile-visual" aria-hidden>
                <img
                  src="/media/activity-icons/quiz-wheel.webp"
                  alt=""
                  className="activity-tile-image"
                  loading="eager"
                />
              </span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="activity-tile activity-tile--placeholder"
              aria-disabled="true"
            >
              <span className="activity-tile-visual" aria-hidden>
                <img
                  src="/media/activity-icons/ki-quiz.webp"
                  alt=""
                  className="activity-tile-image"
                  loading="eager"
                />
              </span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="activity-tile activity-tile--placeholder"
              aria-disabled="true"
            >
              <span className="activity-tile-visual" aria-hidden>
                <img
                  src="/media/activity-icons/quiz-menu.webp"
                  alt=""
                  className="activity-tile-image"
                  loading="eager"
                />
              </span>
            </button>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default ActivitySelectPage
