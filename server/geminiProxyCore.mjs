/**
 * Shared Gemini forwarder: reads GEMINI_API_KEY from process.env only (never from client).
 */
import { getGeminiGenerateContentUrl } from './geminiConfig.mjs'

export async function readRequestBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  return Buffer.concat(chunks).toString('utf8')
}

export async function forwardGeminiGenerateContent(bodyString, getApiKey = () => process.env.GEMINI_API_KEY) {
  const raw = typeof getApiKey === 'function' ? getApiKey() : process.env.GEMINI_API_KEY
  const apiKey = raw != null ? String(raw).trim() : ''
  if (!apiKey) {
    const err = new Error('GEMINI_API_KEY is not set')
    err.statusCode = 503
    throw err
  }
  const res = await fetch(getGeminiGenerateContentUrl(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey.trim()
    },
    body: bodyString
  })
  const text = await res.text()
  return { status: res.status, text, contentType: res.headers.get('content-type') || 'application/json' }
}

export function installGeminiProxyMiddleware(middlewares, getApiKey) {
  const resolveKey = typeof getApiKey === 'function' ? getApiKey : () => process.env.GEMINI_API_KEY
  middlewares.use(async (req, res, next) => {
    const url = req.url || ''
    if (!url.startsWith('/api/gemini')) return next()
    if (req.method !== 'POST') {
      res.statusCode = 405
      res.setHeader('Allow', 'POST')
      res.end('Method Not Allowed')
      return
    }
    try {
      const body = await readRequestBody(req)
      const { status, text, contentType } = await forwardGeminiGenerateContent(body, resolveKey)
      res.statusCode = status
      res.setHeader('Content-Type', contentType)
      res.end(text)
    } catch (e) {
      const code = e.statusCode || 500
      res.statusCode = code
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: e.message || 'Gemini proxy error' }))
    }
  })
}
