#!/usr/bin/env node
/**
 * Serves ./dist with the same Gemini proxy as Vite dev/preview.
 * Use after `npm run build` when you need API routes on one origin (no leaked keys in the bundle).
 * Loads optional project root `.env` (KEY=value) if variables are not already set.
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { readRequestBody, forwardGeminiGenerateContent } from './geminiProxyCore.mjs'
import { createQuestionHistoryStore, readJsonBody } from './questionHistoryStore.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.join(__dirname, '..', '.env')
try {
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
      const t = line.trim()
      if (!t || t.startsWith('#')) continue
      const eq = t.indexOf('=')
      if (eq === -1) continue
      const key = t.slice(0, eq).trim()
      let val = t.slice(eq + 1).trim()
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1)
      }
      if (!process.env[key]) process.env[key] = val
    }
  }
} catch {
  /* ignore .env parse errors */
}

const root = path.join(__dirname, '..', 'dist')
const port = Number(process.env.PORT || 4173)
const historyStore = createQuestionHistoryStore(
  path.join(__dirname, '..', 'server-data', 'question-history.json')
)

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.woff2': 'font/woff2',
  '.map': 'application/json'
}

const server = http.createServer(async (req, res) => {
  const rawUrl = req.url || '/'
  if (rawUrl.startsWith('/api/gemini/') && req.method === 'POST') {
    try {
      const body = await readRequestBody(req)
      const { status, text, contentType } = await forwardGeminiGenerateContent(body, () => process.env.GEMINI_API_KEY)
      res.writeHead(status, { 'Content-Type': contentType })
      res.end(text)
    } catch (e) {
      const code = e.statusCode || 500
      res.writeHead(code, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: e.message || 'Gemini proxy error' }))
    }
    return
  }
  if (rawUrl.startsWith('/api/question-history/')) {
    try {
      if (req.method === 'GET' && rawUrl.startsWith('/api/question-history/can-show')) {
        const reqUrl = new URL(rawUrl, 'http://localhost')
        const id = Number(reqUrl.searchParams.get('id'))
        const canShow = Number.isFinite(id) ? historyStore.canShowQuestion(id) : true
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ canShow }))
        return
      }
      if (req.method === 'POST' && rawUrl.startsWith('/api/question-history/mark')) {
        const body = await readJsonBody(req)
        historyStore.markAnswered(Number(body.questionId), !!body.isCorrect)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ ok: true }))
        return
      }
      if (req.method === 'POST' && rawUrl.startsWith('/api/question-history/filter')) {
        const body = await readJsonBody(req)
        const ids = Array.isArray(body.questionIds)
          ? body.questionIds.map((x) => Number(x)).filter((x) => Number.isFinite(x))
          : []
        const availableIds = historyStore.filterAvailable(ids)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ availableIds }))
        return
      }
      if (req.method === 'POST' && rawUrl.startsWith('/api/question-history/fact-index')) {
        const body = await readJsonBody(req)
        const index = historyStore.takeNextFactDisplayIndex(Number(body.questionId), Number(body.factCount))
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ index }))
        return
      }
      if (req.method === 'POST' && rawUrl.startsWith('/api/question-history/clear')) {
        historyStore.clearAll()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ ok: true }))
        return
      }
      res.writeHead(405, { Allow: 'GET, POST' })
      res.end('Method Not Allowed')
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: e instanceof Error ? e.message : 'history api error' }))
    }
    return
  }

  const url = rawUrl.split('?')[0] || '/'
  let file = path.join(root, url === '/' ? 'index.html' : path.normalize(url))
  if (!file.startsWith(root)) {
    res.writeHead(403)
    res.end()
    return
  }
  fs.stat(file, (err, st) => {
    if (!err && st.isFile()) {
      const ext = path.extname(file)
      res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' })
      fs.createReadStream(file).pipe(res)
      return
    }
    const fallback = path.join(root, 'index.html')
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    fs.createReadStream(fallback).pipe(res)
  })
})

server.listen(port, () => {
  console.log(`dist + Gemini proxy: http://localhost:${port}`)
  console.log('Set GEMINI_API_KEY in the environment before starting.')
})
