import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { ArrowLeft, RotateCcw } from 'lucide-react'
import './ConnectFourPage.css'

const ROWS = 6
const COLS = 7

/** Те же файлы, что на слайдах и в викторине (public/media/sounds) */
const CF_SOUND = {
  move: '/media/sounds/new.mp3',
  win: '/media/sounds/victory.mp3',
  draw: '/media/sounds/quiz.mp3'
} as const

function playSound(url: string) {
  const audio = new Audio(url)
  void audio.play().catch(() => {})
}

function emptyBoard(): number[][] {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0))
}

function landingRow(board: number[][], col: number): number | null {
  for (let row = ROWS - 1; row >= 0; row--) {
    if (board[row][col] === 0) return row
  }
  return null
}

function countAlong(
  board: number[][],
  row: number,
  col: number,
  dr: number,
  dc: number,
  player: number
): number {
  let n = 0
  let r = row + dr
  let c = col + dc
  while (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === player) {
    n++
    r += dr
    c += dc
  }
  return n
}

function checkWin(board: number[][], row: number, col: number, player: number): boolean {
  const dirs: [number, number][] = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1]
  ]
  for (const [dr, dc] of dirs) {
    const len =
      1 +
      countAlong(board, row, col, dr, dc, player) +
      countAlong(board, row, col, -dr, -dc, player)
    if (len >= 4) return true
  }
  return false
}

function isBoardFull(board: number[][]): boolean {
  for (let c = 0; c < COLS; c++) {
    if (board[0][c] === 0) return false
  }
  return true
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

export default function ConnectFourPage() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const [board, setBoard] = useState<number[][]>(() => emptyBoard())
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1)
  const [winner, setWinner] = useState<1 | 2 | null>(null)
  const [boardFull, setBoardFull] = useState(false)

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
    setBoard(emptyBoard())
    setCurrentPlayer(1)
    setWinner(null)
    setBoardFull(false)
  }, [stopAnimation])

  useEffect(() => () => stopAnimation(), [stopAnimation])

  const commitMove = useCallback((row: number, col: number, player: 1 | 2) => {
    setBoard(prev => {
      const next = prev.map(r => [...r])
      next[row][col] = player
      const won = checkWin(next, row, col, player)
      const full = isBoardFull(next)

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
  }, [])

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

  const onColumnClick = (col: number) => {
    if (animating || winner || boardFull) return
    const row = landingRow(board, col)
    if (row === null) return
    runFallAnimation(col, row, currentPlayer)
  }

  const statusText = () => {
    if (winner === 1) return t.connectFour.won1
    if (winner === 2) return t.connectFour.won2
    if (boardFull) return t.connectFour.draw
    return currentPlayer === 1 ? t.connectFour.turn1 : t.connectFour.turn2
  }

  const centerPercent = (): number => {
    if (fallCol === null || fallTargetRow === null || fallPlayer === null) return 0
    const tr = fallTargetRow
    const e = fallT
    const centerRow = 0.5 * (1 - e) + (tr + 0.5) * e
    return (centerRow / ROWS) * 100
  }

  return (
    <div className="connect-four-page">
      <header className="cf-appbar">
        <button type="button" className="cf-icon-btn" onClick={() => navigate('/')} aria-label={t.common.back}>
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
                  disabled={animating || !!winner || boardFull}
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
                        : `cf-col-ball-p${animating && fallPlayer != null ? fallPlayer : currentPlayer}`
                    }`}
                    onClick={() => onColumnClick(col)}
                    disabled={animating || !!winner || boardFull}
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
                  {t.connectFour.player2}
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
