import { Language } from './translations'

export interface SessionTranslations {
  title: string
  description: string
  category: string
  structure: {
    greeting?: string
    mainContent: string
    interactive?: string
    additional?: string
    closing?: string
  }
}

export const sessionTranslations: Record<string, Record<Language, SessionTranslations>> = {
  'romische-kaiser': {
    de: {
      title: 'Römische Kaiser: von Augustus bis Nero',
      description: 'Interaktive Reise durch die Geschichte des Römischen Reiches durch Biografien großer Kaiser',
      category: 'Geschichte',
      structure: {
        greeting: 'Heute reisen wir ins antike Rom und lernen die großen Kaiser kennen',
        mainContent: 'Erzählung über das Leben und die Herrschaft der römischen Kaiser',
        interactive: 'Quiz zur Festigung des Materials',
        additional: 'Betrachtung von Bildern antiker römischer Denkmäler',
        closing: 'Zusammenfassung und Ankündigung des nächsten Themas'
      }
    },
    ru: {
      title: 'Римские императоры: от Августа до Нерона',
      description: 'Интерактивное путешествие по истории Римской империи через биографии великих императоров',
      category: 'История',
      structure: {
        greeting: 'Сегодня мы отправимся в Древний Рим и познакомимся с великими императорами',
        mainContent: 'Рассказ о жизни и правлении римских императоров',
        interactive: 'Викторина на закрепление материала',
        additional: 'Просмотр изображений древнеримских памятников',
        closing: 'Подведение итогов и анонс следующей темы'
      }
    }
  },
  'berlin-1920': {
    de: {
      title: 'Berlin in den 1920er Jahren: Die Goldenen Zwanziger',
      description: 'Virtuelle Reise durch Berlin zur Zeit der Weimarer Republik',
      category: 'Geschichte',
      structure: {
        greeting: 'Heute reisen wir nach Berlin in die 1920er Jahre',
        mainContent: 'Exkursion durch das kulturelle Leben Berlins',
        interactive: 'Quiz "Erkenne den Ort am Foto"',
        additional: 'Anhören von Musik der Epoche',
        closing: 'Diskussion über den Einfluss der Epoche auf die Moderne'
      }
    },
    ru: {
      title: 'Берлин в 1920-е годы: Золотые двадцатые',
      description: 'Виртуальное путешествие по Берлину эпохи Веймарской республики',
      category: 'История',
      structure: {
        greeting: 'Сегодня мы отправимся в Берлин 1920-х годов',
        mainContent: 'Экскурсия по культурной жизни Берлина',
        interactive: 'Викторина "Узнай место по фотографии"',
        additional: 'Прослушивание музыки эпохи',
        closing: 'Обсуждение влияния эпохи на современность'
      }
    }
  },
  'ritterturniere': {
    de: {
      title: 'Ritterturniere: Blut, Geld und Politik',
      description: 'Eintauchen in die Welt mittelalterlicher Turniere durch überraschende Fakten über Geld, Todesfälle und politische Intrigen',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über Ritterturniere!',
        mainContent: 'Studium der Geschichte der Turniere, ihrer Regeln, Ziele und Folgen',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Betrachtung von Bildern über Ritterturniere',
        closing: 'Zusammenfassung und Schlussfolgerungen'
      }
    },
    ru: {
      title: 'Рыцарские турниры: кровь, деньги и политика',
      description: 'Погружение в мир средневековых турниров через неожиданные факты о деньгах, смертях и политических интригах',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о рыцарских турнирах!',
        mainContent: 'Изучение истории турниров, их правил, целей и последствий',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Просмотр изображений о рыцарских турнирах',
        closing: 'Подведение итогов и выводы'
      }
    }
  },
  'seven-wonders': {
    de: {
      title: 'Die Sieben Weltwunder: Ökonomie der Megaprojekte',
      description: 'Eintauchen in die wirtschaftlichen, politischen und sozialen Aspekte des Baus und der Zerstörung der antiken Weltwunder',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über die Sieben Weltwunder!',
        mainContent: 'Studium der Ökonomie antiker Megaprojekte, der Baukosten und Gründe für ihr Verschwinden',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Betrachtung von Bildern der antiken Weltwunder',
        closing: 'Zusammenfassung und Schlussfolgerungen'
      }
    },
    ru: {
      title: 'Семь чудес света: экономика мегапроектов',
      description: 'Погружение в экономические, политические и социальные аспекты строительства и разрушения древних чудес света',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о семи чудесах света!',
        mainContent: 'Изучение экономики мегапроектов древности, стоимости строительства и причин исчезновения',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Просмотр изображений древних чудес',
        closing: 'Подведение итогов и выводы'
      }
    }
  }
}

export function getTranslatedSession(sessionId: string, language: Language) {
  const translations = sessionTranslations[sessionId]
  if (!translations) return null
  return translations[language]
}



