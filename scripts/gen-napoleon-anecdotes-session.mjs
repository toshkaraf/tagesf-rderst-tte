import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { blockQuizRU, blockQuizDE } from './napoleon-quiz-blocks.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const stories = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'napoleon-anecdotes-data.json'), 'utf8')
).stories

function quizQuestions(block) {
  return blockQuizRU[block - 1]
}

function quizQuestionsDe(block) {
  return blockQuizDE[block - 1]
}

const mixed = []
for (let i = 1; i <= 3; i++) for (let b = 1; b <= 10; b++) mixed.push(`q-nap-${b}-${i}`)

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
  return `    { id: 'np${i + 1}', title: ${JSON.stringify(st.tRu)}, content: ${JSON.stringify(st.ru)}, duration: 3, media: [{ type: 'image', url: '/media/napoleon-anecdotes/${st.f}', title: ${JSON.stringify(st.tRu)} }] },`
}

function slideDe(i) {
  const st = stories[i]
  return `  { id: 'np${i + 1}', title: ${JSON.stringify(st.tDe)}, content: ${JSON.stringify(st.de)}, duration: 3, media: [{ type: 'image', url: '/media/napoleon-anecdotes/${st.f}', title: ${JSON.stringify(st.tDe)} }] },`
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
    id: 'quiz-napoleon-anecdotes',
    title: 'Итоговая викторина: Наполеон — тридцать историй',
    questions: ${qsToTs(finalQuestions, '      ')}
  },`

const finalQuizDe = `export const napoleonAnecdotesFinalQuizDE: QuizBlock = {
  id: 'quiz-napoleon-anecdotes-de',
  title: 'Abschlussquiz: Napoleon — dreißig Geschichten',
  questions: ${qsToTs(finalQuestionsDe, '  ')}
}
`

const headerRu = `// Сессия: Наполеон Бонапарт — тридцать историй (анекдоты и бытовые легенды)
import { Session } from '../types/session'

export const napoleonAnecdotesSessionRU: Session = {
  id: 'napoleon-anecdotes',
  title: 'Наполеон: тридцать остроумных историй',
  description:
    'Эпизоды о характере, армии, остроумии, Жозефине, политике, поражениях и быте: от коронации до Святой Елены — с промежуточными викторинами и итоговым тестом.',
  type: 'presentation',
  category: 'История',
  duration: 90,
  structure: {
    greeting: 'Добро пожаловать на занятие о Наполеоне!',
    mainContent: 'Тридцать коротких историй — от роста и Лапласа до Ватерлоо и последних слов — и обсуждение, где факт, где литература и где устная традиция',
    interactive: 'Десять мини-викторин по три вопроса и финальный тест на 30 вопросов',
    additional: 'На каждом сюжетном слайде — иллюстрация; подбор по IMAGE_LIST.html',
    closing: 'Итог: образ Наполеона сложился из хроник, мемуаров и анекдотов — различать уровни достоверности полезно всегда'
  },
  slides: [
`

const footerRu = `  ],
${finalQuizRu}
  metadata: {
    created: '2026-04-21',
    tags: ['Наполеон', 'Франция', 'анекдот', 'история', 'Наполеоновские войны'],
    difficulty: 'medium'
  }
}
`

fs.writeFileSync(path.join(root, 'src/data/napoleon-anecdotes-session.ts'), headerRu + slidesRu + footerRu, 'utf8')

const headerDe = `import { QuizBlock, Slide } from '../types/session'

// Deutsch B2: Napoleon Bonaparte — dreißig Geschichten

export const napoleonAnecdotesSlidesDE: Slide[] = [
`

const footerDe = `]

${finalQuizDe}
`

fs.writeFileSync(path.join(root, 'src/i18n/napoleon-anecdotes-content-de.ts'), headerDe + slidesDe + footerDe, 'utf8')

console.log('Regenerated napoleon-anecdotes session files.')
