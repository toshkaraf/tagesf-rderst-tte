/**
 * Browser client for Gemini via same-origin /api/gemini proxy (key only on server).
 * Logic aligned with kilaszlo lib/services/gemini_service.dart — German only.
 */

const GEMINI_PATH = '/api/gemini'

async function postGenerateContent(body: Record<string, unknown>): Promise<Response> {
  return fetch(GEMINI_PATH, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
}

async function extractTextFromResponse(response: Response): Promise<string> {
  const bodyText = await response.text()
  if (!response.ok) {
    const isQuota =
      response.status === 429 ||
      bodyText.includes('RESOURCE_EXHAUSTED') ||
      /quota|rate/i.test(bodyText)
    if (isQuota) {
      throw new Error(
        'Das Kontingent der KI ist aufgebraucht. Bitte in 15–20 Sekunden erneut versuchen oder Plan prüfen.'
      )
    }
    throw new Error(`API-Fehler: ${response.status}. Bitte später erneut versuchen.`)
  }
  try {
    const jsonResponse = JSON.parse(bodyText) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>
    }
    const candidates = jsonResponse.candidates
    if (!candidates?.length) return 'Antwort konnte nicht abgerufen werden'
    const parts = candidates[0].content?.parts
    if (!parts?.length) return 'Antwort konnte nicht abgerufen werden'
    const text = parts[0].text
    if (typeof text === 'string' && text.trim()) return text
    return 'Antwort konnte nicht abgerufen werden'
  } catch (e) {
    return `Fehler bei der Verarbeitung der Antwort: ${e}`
  }
}

function looksLikeIntroLine(line: string): boolean {
  const lower = line.toLowerCase().trim()
  if (lower.length > 120) return true
  const introStarts = [
    'okay,',
    'ok,',
    'also,',
    'so,',
    'nun,',
    'hier sind',
    'die folgenden',
    'folgende',
    'die 5 ',
    'genau 5',
    'fünf ',
    '5 interessante'
  ]
  if (introStarts.some(s => lower.startsWith(s))) return true
  if (/^\d+\s*(interessante|titels?|aspekte|fakten)/i.test(lower)) return true
  if (lower.includes('die neugierig machen') || lower.includes('neugierig machen sollen')) return true
  if (lower.includes('im bereich ') && lower.includes('die ')) return true
  return false
}

function cleanBulletLine(line: string): string {
  let text = line.trim()
  while (text.length > 0) {
    const before = text
    if (text.startsWith('*') || text.startsWith('•') || text.startsWith('-')) {
      text = text.slice(1).trim()
    } else if (/^\d+[.)]\s*/.test(text)) {
      text = text.replace(/^\d+[.)]\s*/, '').trim()
    } else break
    if (text === before) break
  }
  while (text.length > 0) {
    const before = text
    if (text.endsWith('*') || text.endsWith('•') || text.endsWith('-')) {
      text = text.slice(0, -1).trim()
    } else break
    if (text === before) break
  }
  return text
}

export async function generateAIResponse(
  topic: string,
  userMessage: string,
  conversationContext: string[] | null
): Promise<string> {
  const styleInstruction =
    `Du antwortest als fesselnder Erzähler zum Thema "${topic}". ` +
    'Der Nutzer wählt einen Aspekt/Fakt – erkläre genau diesen kurz und lebendig. ' +
    'WICHTIG: Beginne deine Antwort immer mit einer kurzen mündlichen Wiederholung oder Umformulierung der Frage des Nutzers ' +
    '(z. B. "Du fragst nach …" oder "Zu deiner Frage, warum … – dazu …"), damit der Nutzer sich erinnert, worum es geht. ' +
    'Danach folgt deine eigentliche Erklärung. ' +
    'Antworte in gesprochener Sprache, als zusammenhängender Text in mehreren Absätzen, ' +
    'ohne nummerierte Listen und Aufzählungen. ' +
    'Länge: maximal 10 Sätze; nur wenn nötig für minimales Erschließen des Themas, bis zu 15 Sätze. Sprachniveau: B2.'

  const promptParts = [styleInstruction, '', 'Auswahl des Nutzers:', userMessage]
  if (conversationContext?.length) {
    promptParts.push('', 'Kontext (vorherige Runden):', ...conversationContext)
  }
  const body = {
    contents: [{ role: 'user', parts: [{ text: promptParts.join('\n') }] }],
    generationConfig: { maxOutputTokens: 1024 }
  }
  try {
    const response = await postGenerateContent(body)
    return await extractTextFromResponse(response)
  } catch (e) {
    return e instanceof Error ? e.message : `Fehler bei der Verbindung: ${e}`
  }
}

export async function generateInitialFactSuggestions(topic: string): Promise<string[]> {
  const prompt =
    `Zum Thema "${topic}": Nenne genau 5 interessante, konkrete Fakten oder Aspekte als kurze Titel ` +
    '(z. B. "Warum die Pyramiden so stabil sind"). ' +
    'Eine Zeile pro Titel, keine Nummerierung, keine Einleitungszeile (kein "Okay, hier sind 5..." o. ä.). Nur die 5 Titel.'
  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: { maxOutputTokens: 400 }
  }
  try {
    const response = await postGenerateContent(body)
    const text = await extractTextFromResponse(response)
    return text
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean)
      .map(cleanBulletLine)
      .filter(line => line && !looksLikeIntroLine(line))
      .slice(0, 5)
  } catch {
    return []
  }
}

export async function generateFollowUpFactSuggestions(
  topic: string,
  userChoice: string,
  lastAiAnswer: string
): Promise<string[]> {
  const excerpt = lastAiAnswer.length > 500 ? `${lastAiAnswer.slice(0, 500)}...` : lastAiAnswer
  const prompt =
    `Thema: "${topic}". Der Nutzer hat gewählt: "${userChoice}". Deine letzte Antwort war (Auszug): "${excerpt}". ` +
    'Nenne genau 5 weitere kurze Titel (eine pro Zeile, keine Nummerierung, keine Einleitungszeile): ' +
    'entweder Vertiefungen zu diesem Fakt oder thematisch nahe Fakten. Nur die 5 Titel.'
  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: { maxOutputTokens: 400 }
  }
  try {
    const response = await postGenerateContent(body)
    const text = await extractTextFromResponse(response)
    return text
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean)
      .map(cleanBulletLine)
      .filter(line => line && !looksLikeIntroLine(line))
      .slice(0, 5)
  } catch {
    return []
  }
}
