import { Session } from '../types/session'

// Eigenständige interaktive Präsentation (eigener Stil, siehe public/richelieu/index.html und tools/richelieu-deck).
// 30 Folien (Deutsch B1), 7 Videos, 9 Mini-Quizze mit je 3 Fragen und ein Abschlusstest mit Prozentergebnis.
export const richelieuDeckSessionRU: Session = {
  id: 'richelieu-architect-state',
  title: 'Кардинал Ришелье: архитектор современного государства',
  description:
    'Великий политик, дельный администратор, прогрессивный деятель и патриот: проверяем четыре титула кардинала Ришелье. Презентация на немецком (B1), видео, 9 мини-викторин по 3 вопроса и итоговый тест с результатом в процентах.',
  type: 'presentation',
  category: 'История',
  duration: 45,
  embedUrl: 'richelieu/index.html',
  embedTheme: { bg: '#2A0A12', fg: '#F6EFE3', accent: '#C9A227' },
  structure: {
    greeting: 'Добро пожаловать на занятие о кардинале Ришелье!',
    mainContent: 'Тридцать слайдов: смерть и голова кардинала, политика, администрация, религия и налоги',
    interactive: 'Девять мини-викторин по три вопроса и итоговый тест на 27 вопросов',
    additional: 'Семь коротких видео (немецкий и английский)',
    closing: 'Итоговый тест с результатом в процентах'
  },
  metadata: {
    created: '2026-11-17',
    updated: '2026-11-17',
    tags: ['история', 'Ришелье', 'Франция', 'XVII век', 'государство', 'немецкий B1'],
    difficulty: 'medium'
  }
}
