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
  },
  'alexander-empire': {
    de: {
      title: 'Alexander der Große: Der Preis des Imperiums',
      description: 'Die wirtschaftlichen und logistischen Aspekte von Alexanders Eroberungen: von der Finanzierung der Armee bis zum Zusammenbruch des Imperiums',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über Alexander den Großen!',
        mainContent: 'Studium der Ökonomie der Eroberungen, der Logistik einer 50.000-Mann-Armee und des finanziellen Zusammenbruchs nach dem Tod',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Betrachtung von Bildern über Alexanders Feldzüge',
        closing: 'Zusammenfassung und Schlussfolgerungen'
      }
    },
    ru: {
      title: 'Александр Македонский: цена империи',
      description: 'Экономические и логистические аспекты завоеваний Александра Великого: от финансирования армии до коллапса империи',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие об Александре Македонском!',
        mainContent: 'Изучение экономики завоеваний, логистики армии в 50,000 человек и финансового коллапса после смерти',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Просмотр изображений о походах Александра',
        closing: 'Подведение итогов и выводы'
      }
    }
  },
  'ancient-olympics': {
    de: {
      title: 'Olympische Spiele: Korruption und Doping in der Antike',
      description: 'Die dunkle Seite des antiken Sports: Bestechung von Schiedsrichtern, Professionalisierung, Doping und politische Manipulationen bei den antiken Olympischen Spielen',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über die antiken Olympischen Spiele!',
        mainContent: 'Studium von Korruption, Doping und Professionalisierung des Sports im antiken Griechenland',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Betrachtung von Bildern über die antiken Olympiaden',
        closing: 'Zusammenfassung und Schlussfolgerungen'
      }
    },
    ru: {
      title: 'Олимпийские игры: коррупция и допинг в античности',
      description: 'Темная сторона античного спорта: подкуп судей, профессионализация, допинг и политические манипуляции на древних Олимпийских играх',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие об античных Олимпийских играх!',
        mainContent: 'Изучение коррупции, допинга и профессионализации спорта в Древней Греции',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Просмотр изображений об античных Олимпиадах',
        closing: 'Подведение итогов и выводы'
      }
    }
  },
  'mongol-empire': {
    de: {
      title: 'Das Mongolische Reich: Mythen über die Anzahl und Ökonomie der Eroberungen',
      description: 'Entlarvung der Mythen über Millionen Mongolen und Studium der realen Ökonomie, Logistik und Gründe für den Erfolg des größten kontinentalen Imperiums der Geschichte',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über das Mongolische Reich!',
        mainContent: 'Studium der Mythen über die Anzahl, der realen Ökonomie der Eroberungen und der Gründe für den Zusammenbruch des Imperiums',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Betrachtung von Bildern über mongolische Eroberungen',
        closing: 'Zusammenfassung und Schlussfolgerungen'
      }
    },
    ru: {
      title: 'Монгольская империя: мифы о численности и экономика завоеваний',
      description: 'Развенчание мифов о миллионах монголов и изучение реальной экономики, логистики и причин успеха самой большой континентальной империи в истории',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о Монгольской империи!',
        mainContent: 'Изучение мифов о численности, реальной экономики завоеваний и причин распада империи',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Просмотр изображений о монгольских завоеваниях',
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



