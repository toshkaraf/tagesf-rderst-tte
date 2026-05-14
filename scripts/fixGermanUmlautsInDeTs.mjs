#!/usr/bin/env node
/**
 * Replaces German ASCII digraphs (ae, oe, ue) with ä, ö, ü in *-content-de.ts
 * and fixes known ASCII spans in sessionTranslations.ts (German de blocks).
 * Uses the same protection rules as quiz/tools/fixGermanUmlautsInJson.mjs.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcRoot = path.join(__dirname, '..', 'src', 'i18n')

/** Substrings that must survive ae→ä / ue→ü (identifiers, Latin names, route segments). Longest first. */
const PROTECT_LITERALS = [
  'caesarAnecdotesFinalQuizDE',
  'caesarAnecdotesSlidesDE',
  'quiz-caesar-anecdotes-de',
  'caesar-anecdotes',
  'romeInsulaeFinalQuizDE',
  'romeInsulaeSlidesDE',
  'rome-insulae',
  'quiz-rome-insulae',
  'Sueton',
]

const PROTECT_PHRASES = [
  /\b(feuer|feuers|neue|neuen|neues|neuer|neuere|neuem|teuer|teuerste|teuersten|abenteuer|abenteuern|abenteuerlichem|quer|querstra|quelle|quellen|quellenkritik|quellenkritisch|quellenlage|steuer|steuern|steuerbasis|steuersystem|steuerstrukturen|steuerbefreiungen|steuerorganisation|steuerstabilit|bauer|bauern|mauer|mauern|stadtmauer|stadtmauern|festungsmauer|verteidigungsmauern|virtuell|virtuellen|sexuelle|sexueller|dauer|dauern|dauerte|dauerten|dauerhaft|dauerhafte|dauerinstitution|ausdauer|ausdauerleistung|frauen|frauenfest|frauenk|frauenrollen|ehefrauen|homosexuellen|naturvorgaenge|naturerklaerung|urinationsteuer|einfaelle|aufrechtzuerhalten|aufzuerstehen|anzuerkennen|wiederaufzubauen|zuschauer|zuschauern|zuschauerinnen|zuschauerplatz|zufaelligkeit|zuerst|zunaechst|zurueck|berquert|berquerte|berquerten|berquerung|durchqueren|durchquerte|statuetten|statuette|statuen|elfenbeinstatue|elfenbeinstatuette|tempelstatuen|tempelstatue|tterstatuen|tterstatue|heldenstatuen|freiheitsstatue|holzstatue|kalksteinstatue|weihestatuen|bildhauer|bildhauerei|bildhauers|augenbraue|augenbrauen|blauem|blaue|blueten|ausbauen|bauen|megabauer|schoepfung|schoener|weiss|weisse|rituelle|rituellem|rituelles|ritueller|rituellen|rituell|spirituelle|spiritueller|spirituellen|spirituell|Statue|statue)\b/gi,
  /\b(poesie|poeten|poetisch|poetische|poetischen|poetischer|poetik|poetica|liebespoesie)\b/gi,
  /\b(true|blue|queue|technique|techniques)\b/gi,
  /\b(duell|Duell|duells|Duells)\b/gi,
  /\b(caerphilly|Caerphilly|caernarfon|Caernarfon|cannae|Cannae)\b/gi,
  /\b(Insulae|insulae)\b/g,
  /\b(Tabernae|tabernae|Popinae|popinae)\b/g,
]

let protectCounter = 0
const protectMap = new Map()

function protectPhrases(s) {
  let out = s
  protectCounter = 0
  protectMap.clear()
  for (const re of PROTECT_PHRASES) {
    out = out.replace(re, (m) => {
      const token = `\uE000${protectCounter++}\uE001`
      protectMap.set(token, m)
      return token
    })
  }
  return out
}

function unprotectPhrases(s) {
  let out = s
  for (const [token, original] of protectMap) {
    out = out.split(token).join(original)
  }
  return out
}

function protectLiterals(s) {
  let out = s
  const tuples = []
  PROTECT_LITERALS.forEach((lit, i) => {
    const tok = `\uE012${i}\uE013`
    if (!out.includes(lit)) return
    tuples.push([tok, lit])
    out = out.split(lit).join(tok)
  })
  return { out, tuples }
}

function unprotectLiterals(s, tuples) {
  let o = s
  for (const [tok, lit] of tuples) {
    o = o.split(tok).join(lit)
  }
  return o
}

function fixGrossAndStrasse(s) {
  let o = s
  o = o.replace(/strasse\b/g, 'straße').replace(/Strasse\b/g, 'Straße')
  o = o.replace(/\b(G|g)ross(es|en|em|er|e)\b/g, (_, g, e) => {
    const p = g === 'G' ? 'Gro' : 'gro'
    const suf = { e: 'ße', es: 'ßes', en: 'ßen', em: 'ßem', er: 'ßer' }
    return p + suf[e]
  })
  o = o.replace(/\b(G|g)ross\b/g, (_, g) => (g === 'G' ? 'Gro' : 'gro') + 'ß')
  o = o.replace(
    /\b(G|g)ross(?=[a-zA-ZäöüÄÖÜ])(?!i)/g,
    (_, g) => (g === 'G' ? 'Gro' : 'gro') + 'ß',
  )
  return o
}

/** Keep asset paths ASCII — filenames must not be run through ae/oe/ue rules. */
function protectMediaPaths(s) {
  const parts = []
  let o = s.replace(/\/media\/[^'"\s]+\.(jpg|jpeg|png|webp|gif|svg)/gi, (m) => {
    const t = `\uE006${parts.length}\uE007`
    parts.push(m)
    return t
  })
  return { o, parts }
}

function unprotectMediaPaths(s, parts) {
  let o = s
  for (let i = 0; i < parts.length; i++) {
    o = o.split(`\uE006${i}\uE007`).join(parts[i])
  }
  return o
}

function fixGermanDigraphs(s) {
  const { out: withLit, tuples: litTuples } = protectLiterals(s)
  const { o: withPlaceholders, parts: mediaParts } = protectMediaPaths(withLit)
  let o = protectPhrases(withPlaceholders)

  o = o.replace(/\bhiess\b/g, 'hieß').replace(/\bHiess\b/g, 'Hieß')

  o = o.replace(/ae/g, 'ä').replace(/Ae/g, 'Ä').replace(/AE/g, 'Ä')
  o = o.replace(/oe/g, 'ö').replace(/Oe/g, 'Ö').replace(/OE/g, 'Ö')

  o = o.replace(/(?<![aeiouäöüAEIOUÄÖÜqQ])ue/g, 'ü')
  o = o.replace(/(?<![aeiouäöüAEIOUÄÖÜqQ])Ue/g, 'Ü')
  o = o.replace(/(?<![aeiouäöüAEIOUÄÖÜqQ])UE/g, 'Ü')

  o = unprotectPhrases(o)

  const POST = [
    [/\bpösie\b/gi, 'poesie'],
    [/\bpötisch\b/gi, 'poetisch'],
    [/\bpötische\b/gi, 'poetische'],
    [/\bpötischen\b/gi, 'poetischen'],
    [/\bpötischer\b/gi, 'poetischer'],
    [/\bpötik\b/gi, 'poetik'],
    [/\bpötica\b/gi, 'poetica'],
    [/\bPöteten\b/g, 'Poeten'],
    [/\bpöteten\b/g, 'poeten'],
    [/ritüllem\b/g, 'rituellem'],
    [/ritülles\b/g, 'rituelles'],
    [/ritülle\b/g, 'rituelle'],
    [/ritüller\b/g, 'ritueller'],
    [/ritüllen\b/g, 'rituellen'],
    [/ritüll\b/g, 'rituell'],
    [/spiritüllen\b/g, 'spirituellen'],
    [/spiritüller\b/g, 'spiritueller'],
    [/spiritüll\b/g, 'spirituell'],
    [/Statütten/g, 'Statuetten'],
    [/statütten/g, 'statuetten'],
    [/Statün/g, 'Statuen'],
    [/statün/g, 'statuen'],
    [/Statü/g, 'Statue'],
    [/statü/g, 'statue'],
  ]
  for (const [re, rep] of POST) {
    o = o.replace(re, rep)
  }
  o = fixGrossAndStrasse(o)
  o = unprotectMediaPaths(o, mediaParts)
  o = unprotectLiterals(o, litTuples)
  return o
}

function walkDeFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('-content-de.ts'))
    .map((f) => path.join(dir, f))
}

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8')
  const next = fixGermanDigraphs(raw)
  if (next !== raw) {
    fs.writeFileSync(filePath, next, 'utf8')
    console.log('updated', path.relative(path.join(__dirname, '..'), filePath))
  } else {
    console.log('unchanged', path.basename(filePath))
  }
}

for (const fp of walkDeFiles(srcRoot)) {
  processFile(fp)
}

const sessionTranslationsPath = path.join(srcRoot, 'sessionTranslations.ts')
const stRaw = fs.readFileSync(sessionTranslationsPath, 'utf8')
const stNext = fixGermanDigraphs(stRaw)
if (stNext !== stRaw) {
  fs.writeFileSync(sessionTranslationsPath, stNext, 'utf8')
  console.log('updated', 'src/i18n/sessionTranslations.ts')
} else {
  console.log('unchanged sessionTranslations.ts')
}

console.log('Done.')
