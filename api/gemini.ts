/**
 * Vercel Serverless Function: forwards POST /api/gemini to Gemini (key from env only).
 */
import type { VercelRequest, VercelResponse } from '@vercel/node'

const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).setHeader('Allow', 'POST').send('Method Not Allowed')
    return
  }

  const apiKey = process.env.GEMINI_API_KEY?.trim()
  if (!apiKey) {
    res.status(503).setHeader('Content-Type', 'application/json').send(JSON.stringify({ error: 'GEMINI_API_KEY is not set' }))
    return
  }

  const bodyStr =
    req.body === undefined || req.body === null
      ? '{}'
      : typeof req.body === 'string'
        ? req.body
        : JSON.stringify(req.body)

  try {
    const r = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: bodyStr
    })
    const text = await r.text()
    const ct = r.headers.get('content-type') || 'application/json'
    res.status(r.status).setHeader('Content-Type', ct).send(text)
  } catch (e) {
    res
      .status(500)
      .setHeader('Content-Type', 'application/json')
      .send(JSON.stringify({ error: e instanceof Error ? e.message : 'Gemini proxy error' }))
  }
}
