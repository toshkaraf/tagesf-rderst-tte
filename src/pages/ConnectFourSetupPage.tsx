import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { ArrowLeft } from 'lucide-react'
import {
  BOARD_COL_OPTIONS,
  BOARD_ROW_OPTIONS,
  type BotLevel,
  type ConnectFourConfig,
  type ConnectFourMode,
  writeStoredConfig
} from '../game/connectFourSettings'
import './ConnectFourSetupPage.css'

const DEFAULT: ConnectFourConfig = {
  cols: 7,
  rows: 6,
  mode: 'twoPlayer',
  botLevel: 'medium'
}

export default function ConnectFourSetupPage() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [cols, setCols] = useState(DEFAULT.cols)
  const [rows, setRows] = useState(DEFAULT.rows)
  const [mode, setMode] = useState<ConnectFourMode>('twoPlayer')
  const [botLevel, setBotLevel] = useState<BotLevel>('medium')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const cfg: ConnectFourConfig = { cols, rows, mode, botLevel }
    writeStoredConfig(cfg)
    navigate('/connect-four/play', { state: cfg })
  }

  return (
    <div className="cf-setup-page">
      <header className="cf-setup-appbar">
        <button type="button" className="cf-setup-icon-btn" onClick={() => navigate('/')} aria-label={t.common.back}>
          <ArrowLeft size={24} />
        </button>
        <h1 className="cf-setup-title">{t.connectFour.title}</h1>
      </header>

      <main className="cf-setup-main">
        <div className="cf-setup-panel">
          <h2>{t.connectFour.setupTitle}</h2>
          <p className="cf-setup-sub">{t.connectFour.setupSubtitle}</p>

          <form className="cf-setup-form" onSubmit={onSubmit}>
            <label className="cf-setup-field">
              <span>{t.connectFour.colsLabel}</span>
              <select value={cols} onChange={e => setCols(Number(e.target.value))} name="cols">
                {BOARD_COL_OPTIONS.map(c => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label className="cf-setup-field">
              <span>{t.connectFour.rowsLabel}</span>
              <select value={rows} onChange={e => setRows(Number(e.target.value))} name="rows">
                {BOARD_ROW_OPTIONS.map(r => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>

            <label className="cf-setup-field">
              <span>{t.connectFour.modeLabel}</span>
              <select
                value={mode}
                onChange={e => setMode(e.target.value as ConnectFourMode)}
                name="mode"
              >
                <option value="twoPlayer">{t.connectFour.modeTwoPlayer}</option>
                <option value="vsBot">{t.connectFour.modeVsBot}</option>
              </select>
            </label>

            {mode === 'vsBot' && (
              <label className="cf-setup-field">
                <span>{t.connectFour.botLevelLabel}</span>
                <select
                  value={botLevel}
                  onChange={e => setBotLevel(e.target.value as BotLevel)}
                  name="botLevel"
                >
                  <option value="easy">{t.connectFour.botEasy}</option>
                  <option value="medium">{t.connectFour.botMedium}</option>
                  <option value="hard">{t.connectFour.botHard}</option>
                </select>
              </label>
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
