import { Language } from './translations'
import { Session } from '../types/session'

// Переводы для всего контента sessions (слайды, вопросы, викторины)
// Это большая структура данных, поэтому создаем отдельный файл

export function getTranslatedSessionContent(sessionId: string, language: Language): Partial<Session> | null {
  // Пока возвращаем null - переводы будут добавляться постепенно
  // Для быстрого старта используем немецкий как основной язык
  // Русские тексты будут в исходных данных sessions.ts
  return null
}

// В будущем здесь будут полные переводы всех слайдов и викторин
// Для начала программа работает с немецким интерфейсом
// и русским контентом (который можно перевести позже)
