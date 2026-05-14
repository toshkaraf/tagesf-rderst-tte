#!/usr/bin/env node
/**
 * Rebuilds the Flutter Geschichtsquiz from ../quiz and copies web output to public/historical-quiz.
 * Requires Flutter on PATH. Run from repo root: npm run sync:historical-quiz
 */
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const appRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const quizRoot = path.resolve(appRoot, '..', 'quiz')
const outDir = path.join(appRoot, 'public', 'historical-quiz')
const buildWeb = path.join(quizRoot, 'build', 'web')

if (!fs.existsSync(path.join(quizRoot, 'pubspec.yaml'))) {
  console.error('Expected Flutter project at:', quizRoot)
  process.exit(1)
}

execSync('flutter pub get', { cwd: quizRoot, stdio: 'inherit' })
execSync('flutter build web --release --base-href /historical-quiz/', { cwd: quizRoot, stdio: 'inherit' })

fs.rmSync(outDir, { recursive: true, force: true })
// Copy entire build output (assets/, canvaskit/, icons/, …) in one tree copy.
fs.cpSync(buildWeb, outDir, { recursive: true })
console.log('Copied to', outDir)
