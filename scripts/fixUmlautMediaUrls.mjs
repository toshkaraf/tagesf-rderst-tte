#!/usr/bin/env node
/**
 * One-off fixes: restore ASCII in /media/... paths and proper names (Caerphilly, Cannae, …)
 * after German digraph normalization touched filenames.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const i18n = path.join(__dirname, '..', 'src', 'i18n')

const pairs = [
  ['plagü', 'plague'],
  ['pragü', 'prague'],
  ['virtü', 'virtue'],
  ['thermä', 'thermae'],
  ['Cärphilly', 'Caerphilly'],
  ['cärphilly', 'caerphilly'],
  ['Cärnarfon', 'Caernarfon'],
  ['cärnarfon', 'caernarfon'],
  ['Cärnarfons', 'Caernarfons'],
  ['Cannä', 'Cannae'],
  ['cannä', 'cannae'],
  ['blüstones', 'bluestones'],
  ['archäoastronomy', 'archaeoastronomy'],
  ['cäsar-egypt', 'caesar-egypt'],
  ['cäsarion', 'caesarion'],
  ['arsinö', 'arsinoe'],
  ['hephästion', 'hephaestion'],
  ['Süton', 'Sueton'],
]

const files = [
  'black-death-economy-content-de.ts',
  'universities-riots-content-de.ts',
  'philosophy-athens-content-de.ts',
  'rome-insulae-content-de.ts',
  'castle-warfare-content-de.ts',
  'ancient-battle-tactics-content-de.ts',
  'stonehenge-astronomy-content-de.ts',
  'cleopatra-economist-content-de.ts',
  'alexander-anecdotes-content-de.ts',
  'sessionTranslations.ts',
]

for (const name of files) {
  const fp = path.join(i18n, name)
  if (!fs.existsSync(fp)) continue
  let c = fs.readFileSync(fp, 'utf8')
  const orig = c
  for (const [a, b] of pairs) {
    c = c.split(a).join(b)
  }
  if (c !== orig) {
    fs.writeFileSync(fp, c, 'utf8')
    console.log('updated', name)
  }
}
console.log('Done.')
