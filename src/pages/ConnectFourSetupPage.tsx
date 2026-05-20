import { FormEvent, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGoBack } from '../navigation/goBack'
import { useLanguage } from '../i18n/LanguageContext'
import { ArrowLeft } from 'lucide-react'
import {
  BOARD_COL_OPTIONS,
  BOARD_ROW_OPTIONS,
  DEFAULT_CONNECT_FOUR_CONFIG,
  type BotLevel,
  type ConnectFourConfig,
  type ConnectFourMode,
  writeStoredConfig
} from '../game/connectFourSettings'
import './ConnectFourSetupPage.css'

const BOT_LEVELS: BotLevel[] = ['easy', 'medium', 'hard']

export default function ConnectFourSetupPage() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const goBack = useGoBack('/')
  const baseId = useId()

  const [cols, setCols] = useState(DEFAULT_CONNECT_FOUR_CONFIG.cols)
  const [rows, setRows] = useState(DEFAULT_CONNECT_FOUR_CONFIG.rows)
  const [mode, setMode] = useState<ConnectFourMode>(DEFAULT_CONNECT_FOUR_CONFIG.mode)
  const [botLevel, setBotLevel] = useState<BotLevel>(DEFAULT_CONNECT_FOUR_CONFIG.botLevel)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const cfg: ConnectFourConfig = { cols, rows, mode, botLevel }
    writeStoredConfig(cfg)
    navigate('/connect-four/play', { state: cfg })
  }

  const botLabel = (level: BotLevel) => {
    if (level === 'easy') return t.connectFour.botEasy
    if (level === 'medium') return t.connectFour.botMedium
    return t.connectFour.botHard
  }

  return (
    <div className="cf-setup-page">
      <header className="cf-setup-appbar">
        <button type="button" className="cf-setup-icon-btn" onClick={goBack} aria-label={t.common.back}>
          <ArrowLeft size={24} />
        </button>
        <h1 className="cf-setup-title">{t.connectFour.title}</h1>
      </header>

      <main className="cf-setup-main">
        <div className="cf-setup-panel">
          <h2>{t.connectFour.setupTitle}</h2>
          <p className="cf-setup-sub">{t.connectFour.setupSubtitle}</p>

          <form className="cf-setup-form" onSubmit={onSubmit}>
            <div className="cf-setup-field">
              <div className="cf-setup-field-label" id={`${baseId}-cols`}>
                {t.connectFour.colsLabel}
              </div>
              <div
                className="cf-setup-chip-grid"
                role="group"
                aria-labelledby={`${baseId}-cols`}
              >
                {BOARD_COL_OPTIONS.map(c => (
                  <button
                    key={c}
                    type="button"
                    className={`cf-setup-chip${cols === c ? ' cf-setup-chip--active' : ''}`}
                    onClick={() => setCols(c)}
                    aria-pressed={cols === c}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="cf-setup-field">
              <div className="cf-setup-field-label" id={`${baseId}-rows`}>
                {t.connectFour.rowsLabel}
              </div>
              <div
                className="cf-setup-chip-grid"
                role="group"
                aria-labelledby={`${baseId}-rows`}
              >
                {BOARD_ROW_OPTIONS.map(r => (
                  <button
                    key={r}
                    type="button"
                    className={`cf-setup-chip${rows === r ? ' cf-setup-chip--active' : ''}`}
                    onClick={() => setRows(r)}
                    aria-pressed={rows === r}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="cf-setup-field">
              <div className="cf-setup-field-label" id={`${baseId}-mode`}>
                {t.connectFour.modeLabel}
              </div>
              <div
                className="cf-setup-option-row cf-setup-option-row--2"
                role="group"
                aria-labelledby={`${baseId}-mode`}
              >
                <button
                  type="button"
                  className={`cf-setup-option-btn${mode === 'twoPlayer' ? ' cf-setup-option-btn--active' : ''}`}
                  onClick={() => setMode('twoPlayer')}
                  aria-pressed={mode === 'twoPlayer'}
                >
                  {t.connectFour.modeTwoPlayer}
                </button>
                <button
                  type="button"
                  className={`cf-setup-option-btn${mode === 'vsBot' ? ' cf-setup-option-btn--active' : ''}`}
                  onClick={() => setMode('vsBot')}
                  aria-pressed={mode === 'vsBot'}
                >
                  {t.connectFour.modeVsBot}
                </button>
              </div>
            </div>

            {mode === 'vsBot' && (
              <div className="cf-setup-field">
                <div className="cf-setup-field-label" id={`${baseId}-bot`}>
                  {t.connectFour.botLevelLabel}
                </div>
                <div
                  className="cf-setup-option-row cf-setup-option-row--3"
                  role="group"
                  aria-labelledby={`${baseId}-bot`}
                >
                  {BOT_LEVELS.map(level => (
                    <button
                      key={level}
                      type="button"
                      className={`cf-setup-option-btn${botLevel === level ? ' cf-setup-option-btn--active' : ''}`}
                      onClick={() => setBotLevel(level)}
                      aria-pressed={botLevel === level}
                    >
                      {botLabel(level)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button type="submit" className="cf-setup-submit">
              {t.connectFour.startGame}
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
