#!/usr/bin/env node
/**
 * Rebuilds the Flutter Geschichtsquiz and copies web output to public/historical-quiz.
 * Quiz path: ./quiz (monorepo), else ../quiz, else QUIZ_ROOT. Requires Flutter on PATH.
 * Run from repo root: npm run sync:historical-quiz
 */
import { execSync, spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const appRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
/** Monorepo: quiz/ inside this repo. Override with QUIZ_ROOT. Legacy: sibling ../quiz */
const quizRoot = process.env.QUIZ_ROOT
  ? path.resolve(process.env.QUIZ_ROOT)
  : fs.existsSync(path.join(appRoot, 'quiz', 'pubspec.yaml'))
    ? path.join(appRoot, 'quiz')
    : path.resolve(appRoot, '..', 'quiz')
const outDir = path.join(appRoot, 'public', 'historical-quiz')
const buildWeb = path.join(quizRoot, 'build', 'web')

if (!fs.existsSync(path.join(quizRoot, 'pubspec.yaml'))) {
  console.error('Expected Flutter project at:', quizRoot)
  process.exit(1)
}

execSync('flutter pub get', { cwd: quizRoot, stdio: 'inherit' })
execSync('flutter build web --release --base-href /historical-quiz/', { cwd: quizRoot, stdio: 'inherit' })

fs.rmSync(outDir, { recursive: true, force: true })
// Large Flutter web trees: fs.cpSync has crashed Node on some Windows setups; robocopy is reliable.
if (process.platform === 'win32') {
  const r = spawnSync(
    'robocopy',
    [buildWeb, outDir, '/E', '/NFL', '/NDL', '/NJH', '/NJS'],
    { stdio: 'inherit' },
  )
  const code = r.status ?? 1
  if (code >= 8 || r.error) {
    console.error('robocopy failed:', r.error ?? 'exit ' + code)
    process.exit(1)
  }
} else {
  fs.cpSync(buildWeb, outDir, { recursive: true })
}
console.log('Copied to', outDir)
