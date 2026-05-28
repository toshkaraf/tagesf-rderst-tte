import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { createQuestionHistoryStore, installQuestionHistoryMiddleware } from './server/questionHistoryStore.mjs'
import { installGeminiProxyMiddleware } from './server/geminiProxyCore.mjs'

function geminiProxyPlugin(getKey: () => string | undefined): Plugin {
  const historyStore = createQuestionHistoryStore('./server-data/question-history.json')
  return {
    name: 'gemini-proxy',
    configureServer(server) {
      installGeminiProxyMiddleware(server.middlewares, getKey)
      installQuestionHistoryMiddleware(server.middlewares, historyStore)
    },
    configurePreviewServer(server) {
      installGeminiProxyMiddleware(server.middlewares, getKey)
      installQuestionHistoryMiddleware(server.middlewares, historyStore)
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
