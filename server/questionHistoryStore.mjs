import fs from 'node:fs'
import path from 'node:path'

import { canShowFromOutcome, emptyState, normalizeState } from './questionHistoryCore.mjs'
import { createSupabaseQuestionHistoryStore, isSupabaseConfigured } from './questionHistorySupabase.mjs'

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function readState(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    const parsed = JSON.parse(raw)
    return normalizeState(parsed)
  } catch {
    return emptyState()
  }
}

function writeState(filePath, state) {
  ensureDir(path.dirname(filePath))
  fs.writeFileSync(filePath, JSON.stringify(normalizeState(state), null, 2) + '\n', 'utf8')
}

export function createFileQuestionHistoryStore(filePath) {
  return {
    async canShowQuestion(questionId) {
      const state = readState(filePath)
      return canShowFromOutcome(state.outcomes[String(questionId)])
    },

    async markAnswered(questionId, isCorrect) {
      const state = readState(filePath)
      state.outcomes[String(questionId)] = {
        c: !!isCorrect,
        t: Date.now()
      }
      writeState(filePath, state)
    },

    async filterAvailable(questionIds) {
      const state = readState(filePath)
      return questionIds.filter((id) => canShowFromOutcome(state.outcomes[String(id)]))
    },

    async takeNextFactDisplayIndex(questionId, factCount) {
      if (!Number.isFinite(factCount) || factCount <= 0) return 0
      const state = readState(filePath)
      const key = String(questionId)
      const counter = Number(state.factCounters[key] || 0)
      const displayIndex = ((counter % factCount) + factCount) % factCount
      state.factCounters[key] = counter + 1
      writeState(filePath, state)
      return displayIndex
    },

    async clearAll() {
      writeState(filePath, emptyState())
    }
  }
}

export function createQuestionHistoryStore(filePath) {
  if (isSupabaseConfigured()) {
    return createSupabaseQuestionHistoryStore()
  }
  return createFileQuestionHistoryStore(filePath)
}

export async function readJsonBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const text = Buffer.concat(chunks).toString('utf8')
  if (!text.trim()) return {}
  return JSON.parse(text)
}

export async function handleQuestionHistoryRequest(req, res, store, { queryMode, queryId, body }) {
  const mode = queryMode ?? ''
  try {
    if (req.method === 'GET' && mode === 'can-show') {
      const id = Number(queryId)
      const canShow = Number.isFinite(id) ? await store.canShowQuestion(id) : true
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ canShow }))
      return
    }
    if (req.method === 'POST' && mode === 'mark') {
      const payload = body ?? (await readJsonBody(req))
      await store.markAnswered(Number(payload.questionId), !!payload.isCorrect)
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ ok: true }))
      return
    }
    if (req.method === 'POST' && mode === 'filter') {
      const payload = body ?? (await readJsonBody(req))
      const ids = Array.isArray(payload.questionIds)
        ? payload.questionIds.map((x) => Number(x)).filter((x) => Number.isFinite(x))
        : []
      const availableIds = await store.filterAvailable(ids)
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ availableIds }))
      return
    }
    if (req.method === 'POST' && mode === 'fact-index') {
      const payload = body ?? (await readJsonBody(req))
      const index = await store.takeNextFactDisplayIndex(
        Number(payload.questionId),
        Number(payload.factCount)
      )
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ index }))
      return
    }
    if (req.method === 'POST' && mode === 'clear') {
      await store.clearAll()
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
}

export function installQuestionHistoryMiddleware(middlewares, store) {
  middlewares.use(async (req, res, next) => {
    const url = req.url || ''
    if (!url.startsWith('/api/question-history')) return next()

    const reqUrl = new URL(url, 'http://localhost')
    const mode = reqUrl.searchParams.get('mode') ?? ''
    const legacyPath = reqUrl.pathname.replace(/\/$/, '')

    let resolvedMode = mode
    if (!resolvedMode) {
      if (legacyPath.endsWith('/can-show')) resolvedMode = 'can-show'
      else if (legacyPath.endsWith('/mark')) resolvedMode = 'mark'
      else if (legacyPath.endsWith('/filter')) resolvedMode = 'filter'
      else if (legacyPath.endsWith('/fact-index')) resolvedMode = 'fact-index'
      else if (legacyPath.endsWith('/clear')) resolvedMode = 'clear'
    }

    await handleQuestionHistoryRequest(req, res, store, {
      queryMode: resolvedMode,
      queryId: reqUrl.searchParams.get('id')
    })
  })
}
