export type ConnectFourMode = 'twoPlayer' | 'vsBot'
export type BotLevel = 'easy' | 'medium' | 'hard'

export interface ConnectFourConfig {
  rows: number
  cols: number
  mode: ConnectFourMode
  botLevel: BotLevel
}

export const CONNECT_FOUR_LS_KEY = 'connectFourConfig'

/** Классика — 7×6; популярные варианты и укороченные партии для планшетов */
export const BOARD_COL_OPTIONS = [5, 6, 7, 8, 9, 10, 11, 12] as const
export const BOARD_ROW_OPTIONS = [4, 5, 6, 7, 8, 10] as const

function snapCol(cols: number): number {
  if ((BOARD_COL_OPTIONS as readonly number[]).includes(cols)) return cols
  return BOARD_COL_OPTIONS.reduce((best, x) =>
    Math.abs(x - cols) < Math.abs(best - cols) ? x : best
  , 7)
}

function snapRow(rows: number): number {
  if ((BOARD_ROW_OPTIONS as readonly number[]).includes(rows)) return rows
  return BOARD_ROW_OPTIONS.reduce((best, x) =>
    Math.abs(x - rows) < Math.abs(best - rows) ? x : best
  , 6)
}

export function normalizeDims(cols: number, rows: number): Pick<ConnectFourConfig, 'cols' | 'rows'> {
  return { cols: snapCol(cols), rows: snapRow(rows) }
}

export function readStoredConfig(): ConnectFourConfig | null {
  try {
    const raw = sessionStorage.getItem(CONNECT_FOUR_LS_KEY)
    if (!raw) return null
    const o = JSON.parse(raw) as Partial<ConnectFourConfig>
    if (typeof o.rows !== 'number' || typeof o.cols !== 'number') return null
    const { cols, rows } = normalizeDims(o.cols, o.rows)
    const mode =
      o.mode === 'vsBot' || o.mode === 'twoPlayer' ? o.mode : 'twoPlayer'
    const botLevel =
      o.botLevel === 'easy' || o.botLevel === 'medium' || o.botLevel === 'hard'
        ? o.botLevel
        : 'medium'
    return { cols, rows, mode, botLevel }
  } catch {
    return null
  }
}

export function writeStoredConfig(c: ConnectFourConfig) {
  try {
    sessionStorage.setItem(CONNECT_FOUR_LS_KEY, JSON.stringify(c))
  } catch {
    /* ignore */
  }
}
