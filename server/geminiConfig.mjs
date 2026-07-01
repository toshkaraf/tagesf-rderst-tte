/** Default model: gemini-2.0-flash was shut down 2026-06-01. Override via GEMINI_MODEL. */
const DEFAULT_GEMINI_MODEL = 'gemini-2.5-flash'

export function getGeminiModel() {
  const fromEnv = process.env.GEMINI_MODEL?.trim()
  return fromEnv || DEFAULT_GEMINI_MODEL
}

export function getGeminiGenerateContentUrl(model = getGeminiModel()) {
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`
}
