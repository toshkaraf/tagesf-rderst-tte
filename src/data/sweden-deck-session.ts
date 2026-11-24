import { Session } from '../types/session'

// Eigenständige interaktive Präsentation (eigener Stil, siehe public/sweden/index.html und tools/sweden-deck).
// 30 Folien (Deutsch B1), 7 Videos, 9 Mini-Quizze mit je 3 Fragen und ein Abschlusstest mit Prozentergebnis.
export const swedenDeckSessionRU: Session = {
  id: 'sweden-social-engineering',
  title: 'Швеция: от военной державы к образцовому государству',
  description:
    'Как Швеция из грозной военной державы XVII века стала страной консенсуса, прозрачности и «лагома»: солдатские хутора, пасторские проверки грамотности, пакт Зальтшёбадена, государственный индивидуализм, тёмные страницы и конец нейтралитета. Презентация на немецком (B1), видео, 9 мини-викторин по 3 вопроса и итоговый тест с результатом в процентах.',
  type: 'presentation',
  category: 'История',
  duration: 45,
  embedUrl: 'sweden/index.html',
  embedTheme: { bg: '#2C3135', fg: '#F4F5F3', accent: '#D8B04A' },
  structure: {
    greeting: 'Добро пожаловать на занятие о Швеции!',
    mainContent: 'Тридцать слайдов: военная держава, пастор и грамотность, экономика и пакт 1938 года, менталитет, цена консенсуса и вступление в НАТО',
    interactive: 'Девять мини-викторин по три вопроса и итоговый тест на 27 вопросов',
    additional: 'Семь коротких видео (немецкий и английский)',
    closing: 'Итоговый тест с результатом в процентах'
  },
  metadata: {
    created: '2026-11-24',
    updated: '2026-11-24',
    tags: ['история', 'Швеция', 'менталитет', 'социальное государство', 'консенсус', 'немецкий B1'],
    difficulty: 'medium'
  }
}
