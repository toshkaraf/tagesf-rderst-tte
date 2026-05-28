import fs from 'node:fs'
import path from 'node:path'

const MONTHS_COOLDOWN_AFTER_CORRECT = 1
const WEEK_COOLDOWN_DAYS = 7

function addCalendarMonths(d, monthsToAdd) {
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

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function readState(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed === 'object') return parsed
  } catch {
    /* ignore */
  }
  return { outcomes: {}, factCounters: {} }
}

function writeState(filePath, state) {
  ensureDir(path.dirname(filePath))
  fs.writeFileSync(filePath, JSON.stringify(state, null, 2) + '\n', 'utf8')
}

export function createQuestionHistoryStore(filePath) {
  function canShowQuestion(questionId) {
    const state = readState(filePath)
    const key = String(questionId)
    const raw = state.outcomes?.[key]
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

  function markAnswered(questionId, isCorrect) {
    const state = readState(filePath)
    if (!state.outcomes || typeof state.outcomes !== 'object') state.outcomes = {}
    state.outcomes[String(questionId)] = {
      c: !!isCorrect,
      t: Date.now()
    }
    writeState(filePath, state)
  }

  function filterAvailable(questionIds) {
    return questionIds.filter((id) => canShowQuestion(id))
  }

  function takeNextFactDisplayIndex(questionId, factCount) {
    if (!Number.isFinite(factCount) || factCount <= 0) return 0
    const state = readState(filePath)
    if (!state.factCounters || typeof state.factCounters !== 'object') state.factCounters = {}
    const key = String(questionId)
    const counter = Number(state.factCounters[key] || 0)
    const displayIndex = ((counter % factCount) + factCount) % factCount
    state.factCounters[key] = counter + 1
    writeState(filePath, state)
    return displayIndex
  }

  function clearAll() {
    writeState(filePath, { outcomes: {}, factCounters: {} })
  }

  return {
    canShowQuestion,
    markAnswered,
    filterAvailable,
    takeNextFactDisplayIndex,
    clearAll
  }
}

export async function readJsonBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const text = Buffer.concat(chunks).toString('utf8')
  if (!text.trim()) return {}
  return JSON.parse(text)
}

export function installQuestionHistoryMiddleware(middlewares, store) {
  middlewares.use(async (req, res, next) => {
    const url = req.url || ''
    if (!url.startsWith('/api/question-history')) return next()
    try {
      if (req.method === 'GET' && url.startsWith('/api/question-history/can-show')) {
        const reqUrl = new URL(url, 'http://localhost')
        const id = Number(reqUrl.searchParams.get('id'))
        const canShow = Number.isFinite(id) ? store.canShowQuestion(id) : true
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ canShow }))
        return
      }
      if (req.method === 'POST' && url.startsWith('/api/question-history/mark')) {
        const body = await readJsonBody(req)
        store.markAnswered(Number(body.questionId), !!body.isCorrect)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ ok: true }))
        return
      }
      if (req.method === 'POST' && url.startsWith('/api/question-history/filter')) {
        const body = await readJsonBody(req)
        const ids = Array.isArray(body.questionIds)
          ? body.questionIds.map((x) => Number(x)).filter((x) => Number.isFinite(x))
          : []
        const availableIds = store.filterAvailable(ids)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ availableIds }))
        return
      }
      if (req.method === 'POST' && url.startsWith('/api/question-history/fact-index')) {
        const body = await readJsonBody(req)
        const index = store.takeNextFactDisplayIndex(Number(body.questionId), Number(body.factCount))
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ index }))
        return
      }
      if (req.method === 'POST' && url.startsWith('/api/question-history/clear')) {
        store.clearAll()
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ ok: true }))
        return
      }
      res.statusCode = 405
      res.setHeader('Allow', 'GET, POST')
      res.end('Method Not Allowed')
    } catch (e) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: e instanceof Error ? e.message : 'history api error' }))
    }
  })
}
