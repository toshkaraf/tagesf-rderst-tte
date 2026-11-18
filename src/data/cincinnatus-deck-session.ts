import { Session } from '../types/session'

// Eigenständige interaktive Präsentation (eigener Stil, siehe public/cincinnatus/index.html und tools/cincinnatus-deck).
// 30 Folien (Deutsch B1), 7 Videos, 9 Mini-Quizze mit je 3 Fragen und ein Abschlusstest mit Prozentergebnis.
export const cincinnatusDeckSessionRU: Session = {
  id: 'cincinnatus-power-returned',
  title: 'Власть, которую возвращают: Цинциннат, Вашингтон, Гарибальди, Мандела',
  description:
    'Как диктатор Цинциннат оставил плуг, спас Рим за 16 дней и вернулся на поле — и чем на него похожи Вашингтон, Гарибальди и Мандела. Презентация на немецком (B1), видео, 9 мини-викторин по 3 вопроса и итоговый тест с результатом в процентах.',
  type: 'presentation',
  category: 'История',
  duration: 45,
  embedUrl: 'cincinnatus/index.html',
  embedTheme: { bg: '#1E2B24', fg: '#F3F0E8', accent: '#E08B5B' },
  structure: {
    greeting: 'Добро пожаловать на занятие о людях, которые отдали власть!',
    mainContent: 'Тридцать слайдов: Цинциннат, Джордж Вашингтон, Гарибальди, Нельсон Мандела и общий вывод',
    interactive: 'Девять мини-викторин по три вопроса и итоговый тест на 27 вопросов',
    additional: 'Семь коротких видео (немецкий и английский)',
    closing: 'Итоговый тест с результатом в процентах'
  },
  metadata: {
    created: '2026-11-18',
    updated: '2026-11-18',
    tags: ['история', 'Цинциннат', 'Вашингтон', 'Гарибальди', 'Мандела', 'диктатор', 'немецкий B1'],
    difficulty: 'medium'
  }
}
