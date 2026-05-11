import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { Gamepad2, BookOpen, Sparkles } from 'lucide-react'
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
                <span className="activity-tile-sub">{t.activitySelect.tileConnectFourSub}</span>
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
                <span className="activity-tile-sub">{t.activitySelect.tileTopicsSub}</span>
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
                <span className="activity-tile-sub">{t.activitySelect.tileKiSub}</span>
              </span>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default ActivitySelectPage
