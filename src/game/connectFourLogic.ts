/** «4 в ряд»: линии из ровно 4 фишек. Поле произвольное (мин. 4×4). */

const LINE_LEN = 4

const DIRS: [number, number][] = [
  [0, 1],
  [1, 0],
  [1, 1],
  [1, -1]
]

export function emptyBoard(rows: number, cols: number): number[][] {
  return Array.from({ length: rows }, () => Array(cols).fill(0))
}

export function landingRow(board: number[][], col: number): number | null {
  const rows = board.length
  for (let row = rows - 1; row >= 0; row--) {
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
  player: number,
  rows: number,
  cols: number
): number {
  let n = 0
  let r = row + dr
  let c = col + dc
  while (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === player) {
    n++
    r += dr
    c += dc
  }
  return n
}

export function checkWin(
  board: number[][],
  row: number,
  col: number,
  player: number,
  rows: number,
  cols: number
): boolean {
  for (const [dr, dc] of DIRS) {
    const len =
      1 +
      countAlong(board, row, col, dr, dc, player, rows, cols) +
      countAlong(board, row, col, -dr, -dc, player, rows, cols)
    if (len >= LINE_LEN) return true
  }
  return false
}

/** Все клетки непрерывной линии ≥4 через (row,col); отсортированы вдоль линии (концы — крайние фишки). */
export function findWinningLine(
  board: number[][],
  rows: number,
  cols: number,
  row: number,
  col: number,
  player: number
): [number, number][] | null {
  for (const [dr, dc] of DIRS) {
    const cells: [number, number][] = [[row, col]]
    let r = row - dr
    let c = col - dc
    while (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === player) {
      cells.push([r, c])
      r -= dr
      c -= dc
    }
    r = row + dr
    c = col + dc
    while (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === player) {
      cells.push([r, c])
      r += dr
      c += dc
    }
    if (cells.length < LINE_LEN) continue

    const seen = new Map<string, [number, number]>()
    for (const p of cells) {
      seen.set(`${p[0]},${p[1]}`, p)
    }
    const uniq = [...seen.values()]
    uniq.sort((a, b) => a[0] * dr + a[1] * dc - (b[0] * dr + b[1] * dc))
    return uniq
  }
  return null
}

export function isBoardFull(board: number[][], cols: number): boolean {
  for (let c = 0; c < cols; c++) {
    if (board[0][c] === 0) return false
  }
  return true
}

export function copyBoard(board: number[][]): number[][] {
  return board.map(row => [...row])
}

export function cloneApplyMove(board: number[][], col: number, player: number): number[][] | null {
  const row = landingRow(board, col)
  if (row === null) return null
  const next = copyBoard(board)
  next[row][col] = player
  return next
}

export function validColumns(board: number[][], cols: number): number[] {
  const out: number[] = []
  for (let c = 0; c < cols; c++) {
    if (landingRow(board, c) !== null) out.push(c)
  }
  return out
}
