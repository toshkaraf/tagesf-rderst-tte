import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createQuestionHistoryStore, handleQuestionHistoryRequest } from '../server/questionHistoryStore.mjs'

const store = createQuestionHistoryStore('/tmp/tages-question-history.json')

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const mode = typeof req.query.mode === 'string' ? req.query.mode : ''
  const id = typeof req.query.id === 'string' ? req.query.id : undefined
  const body = req.body ?? undefined

  await handleQuestionHistoryRequest(req, res, store, {
    queryMode: mode,
    queryId: id,
    body
  })
}
