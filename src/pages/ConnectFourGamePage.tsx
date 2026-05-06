import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { ArrowLeft, RotateCcw } from 'lucide-react'
import './ConnectFourPage.css'

import type { BotLevel } from '../game/connectFourSettings'
import { readStoredConfig, type ConnectFourConfig } from '../game/connectFourSettings'
import {
  emptyBoard,
  checkWin,
  isBoardFull,
  landingRow
} from '../game/connectFourLogic'
import { chooseBotMove } from '../game/connectFourAI'

const CF_SOUND = {
  move: '/media/sounds/new.mp3',
  win: '/media/sounds/victory.mp3',
  draw: '/media/sounds/quiz.mp3'
} as const

function playSound(url: string) {
  const audio = new Audio(url)
  void audio.play().catch(() => {})
}

function easeIn(t: number): number {
  return t * t
}

function hapticMedium() {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(18)
  }
}

function hapticHeavy() {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate([35, 40, 50])
  }
}

function isCfg(x: unknown): x is ConnectFourConfig {
  if (!x || typeof x !== 'object') return false
  const o = x as Record<string, unknown>
  const mode = o.mode
  const bl = o.botLevel
  return (
    typeof o.rows === 'number' &&
    typeof o.cols === 'number' &&
    (mode === 'twoPlayer' || mode === 'vsBot') &&
    (bl === 'easy' || bl === 'medium' || bl === 'hard')
  )
}

export default function ConnectFourGamePage() {
  const location = useLocation()
  const cfg: ConnectFourConfig | null = isCfg(location.state)
    ? location.state
    : readStoredConfig()

  if (!cfg || cfg.rows < 4 || cfg.cols < 4) {
    return <Navigate to="/connect-four" replace />
  }

  return <ConnectFourGameInner cfg={cfg} />
}

function ConnectFourGameInner({ cfg }: { cfg: ConnectFourConfig }) {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const ROWS = cfg.rows
  const COLS = cfg.cols
  const isVsBot = cfg.mode === 'vsBot'

  const [board, setBoard] = useState<number[][]>(() => emptyBoard(ROWS, COLS))
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1)
  const [winner, setWinner] = useState<1 | 2 | null>(null)
  const [boardFull, setBoardFull] = useState(false)
  const [botThinking, setBotThinking] = useState(false)

  const [animating, setAnimating] = useState(false)
  const [fallCol, setFallCol] = useState<number | null>(null)
  const [fallTargetRow, setFallTargetRow] = useState<number | null>(null)
  const [fallPlayer, setFallPlayer] = useState<1 | 2 | null>(null)
  const [fallT, setFallT] = useState(0)

  const rafRef = useRef<number | null>(null)
  const animRunRef = useRef<{ start: number; duration: number } | null>(null)

  const stopAnimation = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    animRunRef.current = null
    setAnimating(false)
    setFallCol(null)
    setFallTargetRow(null)
    setFallPlayer(null)
    setFallT(0)
  }, [])

  const resetGame = useCallback(() => {
    stopAnimation()
    setBoard(emptyBoard(ROWS, COLS))
    setCurrentPlayer(1)
    setWinner(null)
    setBoardFull(false)
    setBotThinking(false)
  }, [stopAnimation, ROWS, COLS])

  useEffect(() => () => stopAnimation(), [stopAnimation])

  const commitMove = useCallback(
    (row: number, col: number, player: 1 | 2) => {
      setBoard(prev => {
        const next = prev.map(r => [...r])
        next[row][col] = player
        const won = checkWin(next, row, col, player, ROWS, COLS)
        const full = isBoardFull(next, COLS)

        Promise.resolve().then(() => {
          if (won) {
            setWinner(player)
            playSound(CF_SOUND.win)
            hapticHeavy()
          } else if (full) {
            setBoardFull(true)
            playSound(CF_SOUND.draw)
            hapticMedium()
          } else {
            setCurrentPlayer(player === 1 ? 2 : 1)
            playSound(CF_SOUND.move)
            hapticMedium()
          }
        })

        return next
      })
    },
    [ROWS, COLS]
  )

  const runFallAnimation = useCallback(
    (col: number, targetRow: number, player: 1 | 2) => {
      stopAnimation()
      const duration = 240 + targetRow * 42
      setAnimating(true)
      setFallCol(col)
      setFallTargetRow(targetRow)
      setFallPlayer(player)
      setFallT(0)
      animRunRef.current = { start: performance.now(), duration }

      const tick = (now: number) => {
        const run = animRunRef.current
        if (!run) return
        const elapsed = now - run.start
        const raw = Math.min(1, elapsed / run.duration)
        setFallT(easeIn(raw))
        if (raw < 1) {
          rafRef.current = requestAnimationFrame(tick)
        } else {
          rafRef.current = null
          animRunRef.current = null
          commitMove(targetRow, col, player)
          setAnimating(false)
          setFallCol(null)
          setFallTargetRow(null)
          setFallPlayer(null)
          setFallT(0)
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    },
    [commitMove, stopAnimation]
  )

  useEffect(() => {
    if (!isVsBot) return
    if (currentPlayer !== 2 || winner || boardFull || animating) {
      setBotThinking(false)
      return
    }

    let cancelled = false
    setBotThinking(true)
    const level: BotLevel = cfg.botLevel
    const botDelayMs = level === 'hard' ? 320 : level === 'medium' ? 420 : 500

    const timer = window.setTimeout(() => {
      if (cancelled) return
      const col = chooseBotMove(board, ROWS, COLS, level)
      if (cancelled) return
      setBotThinking(false)
      if (col === null) return
      const row = landingRow(board, col)
      if (row === null) return
      runFallAnimation(col, row, 2)
    }, botDelayMs)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
      setBotThinking(false)
    }
  }, [isVsBot, currentPlayer, winner, boardFull, animating, board, ROWS, COLS, cfg.botLevel, runFallAnimation])

  const humanMoveLocked = animating || !!winner || boardFull || (isVsBot && currentPlayer === 2)

  const onColumnClick = (col: number) => {
    if (humanMoveLocked) return
    const row = landingRow(board, col)
    if (row === null) return
    runFallAnimation(col, row, currentPlayer)
  }

  const labelPlayer2 = isVsBot ? t.connectFour.playerComputer : t.connectFour.player2

  const statusText = () => {
    if (botThinking && isVsBot && !winner && !boardFull) return t.connectFour.computerThinking
    if (winner === 1) return t.connectFour.won1
    if (winner === 2) return isVsBot ? t.connectFour.computerWon : t.connectFour.won2
    if (boardFull) return t.connectFour.draw
    if (currentPlayer === 2 && isVsBot) return t.connectFour.turnComputer
    return currentPlayer === 1 ? t.connectFour.turn1 : t.connectFour.turn2
  }

  const centerPercent = (): number => {
    if (fallCol === null || fallTargetRow === null || fallPlayer === null) return 0
    const tr = fallTargetRow
    const e = fallT
    const centerRow = 0.5 * (1 - e) + (tr + 0.5) * e
    return (centerRow / ROWS) * 100
  }

  const pageVars = {
    '--cf-cols': String(COLS),
    '--cf-rows': String(ROWS)
  } as CSSProperties

  return (
    <div className="connect-four-page connect-four-game" style={pageVars}>
      <header className="cf-appbar">
        <button
          type="button"
          className="cf-icon-btn"
          onClick={() => navigate('/connect-four')}
          aria-label={t.connectFour.backToSetup}
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="cf-title">{t.connectFour.title}</h1>
        <button type="button" className="cf-icon-btn" onClick={resetGame} aria-label={t.connectFour.newGame}>
          <RotateCcw size={22} />
        </button>
      </header>

      <div className="cf-safe">
        <div className="cf-play-area">
          <div className="cf-board-wrap">
            <div className="cf-board-stack">
              <div className="cf-board">
                {Array.from({ length: COLS }, (_, col) => (
                  <button
                    key={col}
                    type="button"
                    className="cf-column"
                    onClick={() => onColumnClick(col)}
                    disabled={humanMoveLocked}
                    aria-label={`Column ${col + 1}`}
                  >
                    <div className="cf-column-inner">
                      {Array.from({ length: ROWS }, (_, rowIdx) => {
                        const row = rowIdx
                        const v = board[row][col]
                        const hideDuringFall =
                          animating && fallCol === col && fallTargetRow === row && v === 0
                        const showVal = hideDuringFall ? 0 : v
                        return (
                          <div key={row} className="cf-cell">
                            <div className="cf-hole">
                              {showVal !== 0 && (
                                <span className={`cf-disc cf-disc-p${showVal}`} />
                              )}
                            </div>
                          </div>
                        )
                      })}

                      {animating && fallCol === col && fallPlayer != null && (
                        <div
                          className="cf-fall-layer"
                          aria-hidden
                          style={{ '--cf-center-y': `${centerPercent()}%` } as CSSProperties}
                        >
                          <span className={`cf-disc cf-falling cf-disc-p${fallPlayer}`} />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="cf-column-buttons" role="group" aria-label={t.connectFour.columnButtons}>
                {Array.from({ length: COLS }, (_, col) => (
                  <div key={`slot-${col}`} className="cf-col-ball-slot">
                    <button
                      type="button"
                      className={`cf-col-ball ${
                        winner || boardFull
                          ? 'cf-col-ball-ended'
                          : `cf-col-ball-p${
                              botThinking ? 2 : animating && fallPlayer != null ? fallPlayer : currentPlayer
                            }`
                      }`}
                      onClick={() => onColumnClick(col)}
                      disabled={humanMoveLocked}
                      aria-label={`${t.connectFour.columnPick} ${col + 1}`}
                    >
                      {col + 1}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="cf-sidebar">
            <div className="cf-status">
              <div className="cf-badges">
                <span
                  className={`cf-badge cf-p1 ${
                    !winner && !boardFull && currentPlayer === 1 ? 'cf-active' : ''
                  } ${winner === 1 ? 'cf-won' : ''}`}
                >
                  {t.connectFour.player1}
                </span>
                <span
                  className={`cf-badge cf-p2 ${
                    !winner && !boardFull && currentPlayer === 2 ? 'cf-active' : ''
                  } ${winner === 2 ? 'cf-won' : ''}`}
                >
                  {labelPlayer2}
                </span>
              </div>
              <p className="cf-status-text">{statusText()}</p>
              <button type="button" className="cf-again-btn" onClick={resetGame}>
                {t.connectFour.again}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
