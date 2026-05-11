import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function createGeminiMiddleware(getKey: () => string | undefined) {
  return async (req, res, next) => {
    const url = req.url || ''
    if (!url.startsWith('/api/gemini')) return next()
    if (req.method !== 'POST') {
      res.statusCode = 405
      res.setHeader('Allow', 'POST')
      res.end('Method Not Allowed')
      return
    }
    const chunks: Buffer[] = []
    for await (const ch of req) chunks.push(ch as Buffer)
    const bodyStr = Buffer.concat(chunks).toString('utf8')
    const apiKey = getKey()?.trim()
    if (!apiKey) {
      res.statusCode = 503
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'GEMINI_API_KEY is not set (server / .env)' }))
      return
    }
    try {
      const r = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey
          },
          body: bodyStr
        }
      )
      const text = await r.text()
      res.statusCode = r.status
      res.setHeader('Content-Type', r.headers.get('content-type') || 'application/json')
      res.end(text)
    } catch (e) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: e instanceof Error ? e.message : 'Gemini proxy error' }))
    }
  }
}

function geminiProxyPlugin(getKey: () => string | undefined): Plugin {
  const mw = createGeminiMiddleware(getKey)
  return {
    name: 'gemini-proxy',
    configureServer(server) {
      server.middlewares.use(mw)
    },
    configurePreviewServer(server) {
      server.middlewares.use(mw)
    }
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const getKey = () => env.GEMINI_API_KEY || process.env.GEMINI_API_KEY

  return {
    plugins: [react(), geminiProxyPlugin(getKey)],
    server: {
      port: 3000,
      host: true,
      open: true,
      strictPort: false
    },
    build: {
      outDir: 'dist',
      sourcemap: true
    }
  }
})
