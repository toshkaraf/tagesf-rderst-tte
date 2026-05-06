import type { BotLevel } from './connectFourSettings'
import {
  cloneApplyMove,
  validColumns,
  checkWin,
  isBoardFull,
  landingRow
} from './connectFourLogic'

const AI = 2
const HUMAN = 1

function scoreWindow(
  a: number,
  b: number,
  c: number,
  d: number,
  piece: typeof AI | typeof HUMAN
): number {
  const opp: typeof AI | typeof HUMAN = piece === AI ? HUMAN : AI
  const w = [a, b, c, d]
  const my = w.filter(x => x === piece).length
  const ot = w.filter(x => x === opp).length
  const emp = w.filter(x => x === 0).length
  if (my === 4) return 1_000_000
  if (ot === 4) return -1_000_000
  if (my === 3 && emp === 1) return 65_536
  if (ot === 3 && emp === 1) return -32_768
  if (my === 2 && emp === 2) return 96
  if (ot === 2 && emp === 2) return -48
  return my * 3
}

export function scorePosition(
  board: number[][],
  rows: number,
  cols: number,
  piece: typeof AI | typeof HUMAN = AI
): number {
  let score = 0
  const mid = (cols - 1) / 2
  for (let c = 0; c < cols; c++) {
    const ones = board.filter(r => r[c] === piece).length
    score += ones * (3 - Math.abs(c - mid)) * 2
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      score += scoreWindow(board[r][c], board[r][c + 1], board[r][c + 2], board[r][c + 3], piece)
    }
  }

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r <= rows - 4; r++) {
      score += scoreWindow(board[r][c], board[r + 1][c], board[r + 2][c], board[r + 3][c], piece)
    }
  }

  for (let r = 0; r <= rows - 4; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      score += scoreWindow(board[r][c], board[r + 1][c + 1], board[r + 2][c + 2], board[r + 3][c + 3], piece)
    }
  }

  for (let r = 0; r <= rows - 4; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      score += scoreWindow(board[r][c + 3], board[r + 1][c + 2], board[r + 2][c + 1], board[r + 3][c], piece)
    }
  }

  return score
}

function orderedMoves(board: number[][], cols: number): number[] {
  const m = validColumns(board, cols)
  const mid = (cols - 1) / 2
  return [...m].sort((a, b) => Math.abs(a - mid) - Math.abs(b - mid))
}

function depthForDifficulty(level: BotLevel, rows: number, cols: number): number {
  const cells = rows * cols
  if (level === 'easy') return 2
  if (level === 'medium') {
    if (cells <= 42) return 5
    if (cells <= 56) return 4
    return 3
  }
  if (cells <= 42) return 7
  if (cells <= 63) return 6
  if (cells <= 80) return 5
  return 4
}

function minimax(
  board: number[][],
  depth: number,
  alphaIn: number,
  betaIn: number,
  maximizing: boolean,
  rows: number,
  cols: number,
  lastRow: number,
  lastCol: number,
  lastPlayer: number
): number {
  if (lastRow >= 0 && checkWin(board, lastRow, lastCol, lastPlayer, rows, cols)) {
    if (lastPlayer === AI) return 10_000_000 + depth
    return -10_000_000 - depth
  }
  if (isBoardFull(board, cols)) return 0
  if (depth === 0) {
    return scorePosition(board, rows, cols, AI) - scorePosition(board, rows, cols, HUMAN)
  }

  const moves = orderedMoves(board, cols)

  if (maximizing) {
    let v = -Infinity
    let alpha = alphaIn
    for (const col of moves) {
      const rowPlaced = landingRow(board, col)
      if (rowPlaced === null) continue
      const nb = cloneApplyMove(board, col, AI)
      if (!nb) continue
      const sc = minimax(nb, depth - 1, alpha, betaIn, false, rows, cols, rowPlaced, col, AI)
      v = Math.max(v, sc)
      alpha = Math.max(alpha, sc)
      if (alpha >= betaIn) break
    }
    return v === -Infinity ? 0 : v
  }

  let v = Infinity
  let beta = betaIn
  for (const col of moves) {
    const rowPlaced = landingRow(board, col)
    if (rowPlaced === null) continue
    const nb = cloneApplyMove(board, col, HUMAN)
    if (!nb) continue
    const sc = minimax(nb, depth - 1, alphaIn, beta, true, rows, cols, rowPlaced, col, HUMAN)
    v = Math.min(v, sc)
    beta = Math.min(beta, sc)
    if (alphaIn >= beta) break
  }
  return v === Infinity ? 0 : v
}

function pickEasy(board: number[][], cols: number): number {
  const colsValid = validColumns(board, cols)
  if (!colsValid.length) return 0
  const r = Math.random()
  if (r > 0.35) {
    const mid = (cols - 1) / 2
    const sorted = [...colsValid].sort((a, b) => Math.abs(a - mid) - Math.abs(b - mid))
    const pickNear = sorted.slice(0, Math.min(3, sorted.length))
    return pickNear[Math.floor(Math.random() * pickNear.length)]!
  }
  return colsValid[Math.floor(Math.random() * colsValid.length)]!
}

function instantWinOrBlock(
  board: number[][],
  rows: number,
  cols: number
): number | null {
  const moves = validColumns(board, cols)
  for (const col of moves) {
    const rr = landingRow(board, col)
    if (rr === null) continue
    const nb = cloneApplyMove(board, col, AI)
    if (nb && checkWin(nb, rr, col, AI, rows, cols)) return col
  }
  for (const col of moves) {
    const rr = landingRow(board, col)
    if (rr === null) continue
    const nb = cloneApplyMove(board, col, HUMAN)
    if (nb && checkWin(nb, rr, col, HUMAN, rows, cols)) return col
  }
  return null
}

export function chooseBotMove(
  board: number[][],
  rows: number,
  cols: number,
  level: BotLevel
): number | null {
  const moves = validColumns(board, cols)
  if (!moves.length) return null
  if (level === 'easy') return pickEasy(board, cols)

  const quick = instantWinOrBlock(board, rows, cols)
  if (quick !== null) return quick

  const depth = depthForDifficulty(level, rows, cols)
  let bestCol = orderedMoves(board, cols)[0]!
  let best = -Infinity

  for (const col of orderedMoves(board, cols)) {
    const rowPlaced = landingRow(board, col)
    if (rowPlaced === null) continue
    const nb = cloneApplyMove(board, col, AI)
    if (!nb) continue
    let sc = minimax(nb, depth - 1, -Infinity, Infinity, false, rows, cols, rowPlaced, col, AI)
    sc += ((cols - 1) / 2 - Math.abs(col - (cols - 1) / 2)) * 0.01
    if (sc > best) {
      best = sc
      bestCol = col
    }
  }
  return bestCol
}
