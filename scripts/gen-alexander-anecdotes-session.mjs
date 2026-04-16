import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { blockQuizRU, blockQuizDE } from './alexander-quiz-blocks.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const stories = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'alexander-anecdotes-data.json'), 'utf8')
).stories

function quizQuestions(block) {
  return blockQuizRU[block - 1]
}

function quizQuestionsDe(block) {
  return blockQuizDE[block - 1]
}

const mixed = []
for (let i = 1; i <= 3; i++) for (let b = 1; b <= 10; b++) mixed.push(`q-ale-${b}-${i}`)

const questionBank = {}
for (let b = 1; b <= 10; b++) {
  quizQuestions(b).forEach((q) => {
    questionBank[q.id] = q
  })
}

const finalQuestions = mixed.map((id) => ({ ...questionBank[id] }))

const questionBankDe = {}
for (let b = 1; b <= 10; b++) {
  quizQuestionsDe(b).forEach((q) => {
    const base = q.id.replace(/-de$/, '')
    questionBankDe[base] = q
  })
}
const finalQuestionsDe = mixed.map((id) => ({ ...questionBankDe[id] }))

function qsToTs(arr, indent) {
  return (
    '[\n' +
    arr
      .map(
        (q) =>
          `${indent}{ id: '${q.id}', text: ${JSON.stringify(q.text)}, type: 'multiple-choice', options: ${JSON.stringify(q.options)}, correctAnswer: ${q.correctAnswer}, explanation: ${JSON.stringify(q.explanation)} }`
      )
      .join(',\n') +
    '\n' +
    indent +
    ']'
  )
}

function slideRu(i) {
  const st = stories[i]
  return `    { id: 'al${i + 1}', title: ${JSON.stringify(st.tRu)}, content: ${JSON.stringify(st.ru)}, duration: 3, media: [{ type: 'image', url: '/media/alexander-anecdotes/${st.f}', title: ${JSON.stringify(st.tRu)} }] },`
}

function slideDe(i) {
  const st = stories[i]
  return `  { id: 'al${i + 1}', title: ${JSON.stringify(st.tDe)}, content: ${JSON.stringify(st.de)}, duration: 3, media: [{ type: 'image', url: '/media/alexander-anecdotes/${st.f}', title: ${JSON.stringify(st.tDe)} }] },`
}

let slidesRu = ''
for (let b = 0; b < 10; b++) {
  for (let k = 0; k < 3; k++) {
    slidesRu += slideRu(b * 3 + k) + '\n'
  }
  slidesRu += `    { id: 'q${b + 1}', title: 'Викторина', content: '', duration: 2, questions: ${qsToTs(quizQuestions(b + 1), '      ')} },\n`
}

let slidesDe = ''
for (let b = 0; b < 10; b++) {
  for (let k = 0; k < 3; k++) {
    slidesDe += slideDe(b * 3 + k) + '\n'
  }
  slidesDe += `  { id: 'q${b + 1}', title: 'Quiz', content: '', duration: 2, questions: ${qsToTs(quizQuestionsDe(b + 1), '    ')} },\n`
}

const finalQuizRu = `  quiz: {
    id: 'quiz-alexander-anecdotes',
    title: 'Итоговая викторина: Александр Македонский — тридцать историй',
    questions: ${qsToTs(finalQuestions, '      ')}
  },`

const finalQuizDe = `export const alexanderAnecdotesFinalQuizDE: QuizBlock = {
  id: 'quiz-alexander-anecdotes-de',
  title: 'Abschlussquiz: Alexander der Große — dreißig Geschichten',
  questions: ${qsToTs(finalQuestionsDe, '  ')}
}
`

const headerRu = `// Сессия: Александр Македонский — тридцать историй (анекдоты из античных источников)
import { Session } from '../types/session'

export const alexanderAnecdotesSessionRU: Session = {
  id: 'alexander-anecdotes',
  title: 'Александр Македонский: тридцать остроумных историй',
  description:
    'Эпизоды из жизни Александра III, переданные Плутархом, Аррианом, Диодором, Курцием Руфом и другими: остроумие, дерзость и характер — с промежуточными викторинами и итоговым тестом.',
  type: 'presentation',
  category: 'История',
  duration: 90,
  structure: {
    greeting: 'Добро пожаловать на занятие об Александре Македонском!',
    mainContent: 'Тридцать коротких историй — от пира Филиппа до зеркала перед послами — и обсуждение, что в них достоверно, а что литературная полировка',
    interactive: 'Десять мини-викторин по три вопроса и финальный тест на 30 вопросов',
    additional: 'На каждом сюжетном слайде — иллюстрация; подбор по IMAGE_LIST.html',
    closing: 'Итог: античные авторы создали образ Александра — различать факт, слух и художественный штрих полезно всегда'
  },
  slides: [
`

const footerRu = `  ],
${finalQuizRu}
  metadata: {
    created: '2026-04-15',
    tags: ['Александр Македонский', 'античность', 'анекдот', 'история', 'эллинизм'],
    difficulty: 'medium'
  }
}
`

fs.writeFileSync(path.join(root, 'src/data/alexander-anecdotes-session.ts'), headerRu + slidesRu + footerRu, 'utf8')

const headerDe = `import { QuizBlock, Slide } from '../types/session'

// Deutsch B2: Alexander der Große — dreißig Geschichten

export const alexanderAnecdotesSlidesDE: Slide[] = [
`

const footerDe = `]

${finalQuizDe}
`

fs.writeFileSync(path.join(root, 'src/i18n/alexander-anecdotes-content-de.ts'), headerDe + slidesDe + footerDe, 'utf8')

console.log('Regenerated alexander-anecdotes session files.')
