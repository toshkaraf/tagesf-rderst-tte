import { canShowFromOutcome, emptyState, normalizeState } from './questionHistoryCore.mjs'

const TABLE = 'quiz_user_history'
const ROW_ID = 'default'

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL?.trim().replace(/\/$/, '')
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()
  if (!url || !key) return null
  return { url, key }
}

async function supabaseRequest(path, { method = 'GET', body, prefer } = {}) {
  const cfg = getSupabaseConfig()
  if (!cfg) throw new Error('Supabase is not configured')

  const headers = {
    apikey: cfg.key,
    Authorization: `Bearer ${cfg.key}`,
    'Content-Type': 'application/json'
  }
  if (prefer) headers.Prefer = prefer

  const res = await fetch(`${cfg.url}/rest/v1/${path}`, {
    method,
    headers,
    body: body != null ? JSON.stringify(body) : undefined
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Supabase ${method} ${path} failed (${res.status}): ${text}`)
  }

  if (res.status === 204) return null
  const text = await res.text()
  if (!text) return null
  return JSON.parse(text)
}

async function loadState() {
  const rows = await supabaseRequest(
    `${TABLE}?select=outcomes,fact_counters&id=eq.${encodeURIComponent(ROW_ID)}&limit=1`
  )
  if (!Array.isArray(rows) || rows.length === 0) return emptyState()
  return normalizeState({
    outcomes: rows[0].outcomes,
    factCounters: rows[0].fact_counters
  })
}

async function saveState(state) {
  const normalized = normalizeState(state)
  await supabaseRequest(`${TABLE}?on_conflict=id`, {
    method: 'POST',
    prefer: 'resolution=merge-duplicates,return=minimal',
    body: {
      id: ROW_ID,
      outcomes: normalized.outcomes,
      fact_counters: normalized.factCounters,
      updated_at: new Date().toISOString()
    }
  })
}

export function isSupabaseConfigured() {
  return getSupabaseConfig() != null
}

export function createSupabaseQuestionHistoryStore() {
  return {
    async canShowQuestion(questionId) {
      const state = await loadState()
      const raw = state.outcomes[String(questionId)]
      return canShowFromOutcome(raw)
    },

    async markAnswered(questionId, isCorrect) {
      const state = await loadState()
      state.outcomes[String(questionId)] = {
        c: !!isCorrect,
        t: Date.now()
      }
      await saveState(state)
    },

    async filterAvailable(questionIds) {
      const state = await loadState()
      return questionIds.filter((id) => canShowFromOutcome(state.outcomes[String(id)]))
    },

    async takeNextFactDisplayIndex(questionId, factCount) {
      if (!Number.isFinite(factCount) || factCount <= 0) return 0
      const state = await loadState()
      const key = String(questionId)
      const counter = Number(state.factCounters[key] || 0)
      const displayIndex = ((counter % factCount) + factCount) % factCount
      state.factCounters[key] = counter + 1
      await saveState(state)
      return displayIndex
    },

    async clearAll() {
      await saveState(emptyState())
    }
  }
}
