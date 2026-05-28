import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createQuestionHistoryStore } from '../server/questionHistoryStore.mjs'

const store = createQuestionHistoryStore('/tmp/tages-question-history.json')

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const mode = typeof req.query.mode === 'string' ? req.query.mode : ''
  try {
    if (req.method === 'GET' && mode === 'can-show') {
      const id = Number(req.query.id)
      const canShow = Number.isFinite(id) ? store.canShowQuestion(id) : true
      res.status(200).json({ canShow })
      return
    }
    if (req.method === 'POST' && mode === 'mark') {
      const body = req.body ?? {}
      store.markAnswered(Number(body.questionId), !!body.isCorrect)
      res.status(200).json({ ok: true })
      return
    }
    if (req.method === 'POST' && mode === 'filter') {
      const body = req.body ?? {}
      const ids = Array.isArray(body.questionIds)
        ? body.questionIds.map((x: unknown) => Number(x)).filter((x: number) => Number.isFinite(x))
        : []
      res.status(200).json({ availableIds: store.filterAvailable(ids) })
      return
    }
    if (req.method === 'POST' && mode === 'fact-index') {
      const body = req.body ?? {}
      const index = store.takeNextFactDisplayIndex(Number(body.questionId), Number(body.factCount))
      res.status(200).json({ index })
      return
    }
    if (req.method === 'POST' && mode === 'clear') {
      store.clearAll()
      res.status(200).json({ ok: true })
      return
    }
    res.status(405).setHeader('Allow', 'GET, POST').send('Method Not Allowed')
  } catch (e) {
    res
      .status(500)
      .setHeader('Content-Type', 'application/json')
      .send(JSON.stringify({ error: e instanceof Error ? e.message : 'history api error' }))
  }
}
