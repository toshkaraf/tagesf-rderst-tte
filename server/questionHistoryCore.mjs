export const MONTHS_COOLDOWN_AFTER_CORRECT = 1
export const WEEK_COOLDOWN_DAYS = 7

export function addCalendarMonths(d, monthsToAdd) {
  let totalMonth = d.getMonth() + 1 + monthsToAdd
  let year = d.getFullYear()
  while (totalMonth > 12) {
    totalMonth -= 12
    year += 1
  }
  while (totalMonth < 1) {
    totalMonth += 12
    year -= 1
  }
  const lastDay = new Date(year, totalMonth, 0).getDate()
  const day = Math.min(d.getDate(), lastDay)
  return new Date(
    year,
    totalMonth - 1,
    day,
    d.getHours(),
    d.getMinutes(),
    d.getSeconds(),
    d.getMilliseconds()
  )
}

export function emptyState() {
  return { outcomes: {}, factCounters: {} }
}

export function canShowFromOutcome(raw) {
  if (!raw || typeof raw !== 'object') return true
  const wasCorrect = raw.c === true || raw.c === 'true'
  const atMillis = Number(raw.t)
  if (!Number.isFinite(atMillis)) return true
  const answeredAt = new Date(atMillis)
  const now = new Date()
  if (wasCorrect) {
    const eligibleAfter = addCalendarMonths(answeredAt, MONTHS_COOLDOWN_AFTER_CORRECT)
    return now >= eligibleAfter
  }
  const elapsedMs = now.getTime() - answeredAt.getTime()
  return elapsedMs >= WEEK_COOLDOWN_DAYS * 24 * 60 * 60 * 1000
}

export function normalizeState(state) {
  const outcomes =
    state?.outcomes && typeof state.outcomes === 'object' ? { ...state.outcomes } : {}
  const factCounters =
    state?.factCounters && typeof state.factCounters === 'object'
      ? { ...state.factCounters }
      : {}
  return { outcomes, factCounters }
}
