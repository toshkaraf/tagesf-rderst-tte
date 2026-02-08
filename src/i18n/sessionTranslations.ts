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
  },
  'spartan-terror': {
    de: {
      title: 'Spartaner: Staatsterror und Mythen über Krieger',
      description: 'Die Realität der spartanischen Gesellschaft: Krypteia als systematischer Terror, Ökonomie des Sklavenstaates, Erziehung von Kriegern und Entlarvung der Mythen über "edle" Spartaner',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über Spartaner!',
        mainContent: 'Studium des realen Sparta: Krypteia, Agoge, soziale Struktur und Ökonomie des Sklavenstaates',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Betrachtung von Bildern und Videos über die spartanische Gesellschaft',
        closing: 'Zusammenfassung und Entlarvung der Mythen'
      }
    },
    ru: {
      title: 'Спартанцы: государственный террор и мифы о воинах',
      description: 'Реальность спартанского общества: криптии как систематический террор, экономика рабовладельческого государства, воспитание воинов и развенчание мифов о "благородных" спартанцах',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о спартанцах!',
        mainContent: 'Изучение реальной Спарты: криптии, агоге, социальная структура и экономика рабовладельческого государства',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Просмотр изображений и видео о спартанском обществе',
        closing: 'Подведение итогов и развенчание мифов'
      }
    }
  },
  '3d-printing-organs': {
    de: {
      title: '3D-Druck: Von Spielzeug bis zu menschlichen Organen',
      description: 'Schichtweise Drucktechnologie: von einfachen Spielzeugen bis zur Bioprinting von Organen. Anwendung in Medizin, Industrie und Alltag. Ökonomie und Zugänglichkeit der Technologie',
      category: 'Technologie',
      structure: {
        greeting: 'Willkommen zur Sitzung über 3D-Druck!',
        mainContent: 'Studium der schichtweisen Drucktechnologie: von Geschichte bis Bioprinting von Organen, Anwendung in Medizin und Industrie',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Betrachtung von Bildern und Beispielen des 3D-Drucks',
        closing: 'Zusammenfassung und Diskussion über die Zukunft der Technologie'
      }
    },
    ru: {
      title: '3D-печать: от игрушек до человеческих органов',
      description: 'Технология послойной печати: от простых игрушек до биопечати органов. Применение в медицине, промышленности и повседневной жизни. Экономика и доступность технологии',
      category: 'Технологии',
      structure: {
        greeting: 'Добро пожаловать на занятие о 3D-печати!',
        mainContent: 'Изучение технологии послойной печати: от истории до биопечати органов, применение в медицине и промышленности',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Просмотр изображений и примеров 3D-печати',
        closing: 'Подведение итогов и обсуждение будущего технологии'
      }
    }
  },
  'philosophy-athens': {
    de: {
      title: 'Philosophie als Geschäft: Die Schulen Athens',
      description: 'Die philosophischen Schulen Athens: wirtschaftliche Seite der Bildung, Konkurrenz, Honorare und interessante Momente aus dem Leben antiker Weiser',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über die philosophischen Schulen Athens!',
        mainContent: 'Wir betrachten die wirtschaftliche Seite der antiken Philosophie, die Konkurrenz der Schulen und lebendige Geschichten',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Bilder von Schulen, Philosophen und antiken Szenen',
        closing: 'Zusammenfassung'
      }
    },
    ru: {
      title: 'Философия как бизнес: школы Афин',
      description: 'Философские школы Афин: экономическая сторона образования, конкуренция, гонорары и интересные моменты из жизни античных мудрецов',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о философских школах Афин!',
        mainContent: 'Изучаем экономическую сторону античной философии, конкуренцию школ и живые истории',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Изображения школ, философов и античных сцен',
        closing: 'Подведение итогов'
      }
    }
  },
  'stonehenge-astronomy': {
    de: {
      title: 'Stonehenge: Astronomie und Macht',
      description: 'Astronomische Präzision ohne Werkzeuge, soziale Organisation des Megaprojekts — wer hatte die Macht, solche Bauten zu koordinieren',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über Stonehenge!',
        mainContent: 'Wir betrachten Astronomie, Bau und Macht im neolithischen Britannien',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Bilder von Stonehenge, Schemata und Rekonstruktionen',
        closing: 'Zusammenfassung'
      }
    },
    ru: {
      title: 'Стоунхендж: астрономия и власть',
      description: 'Астрономическая точность без инструментов, социальная организация мегапроекта, кто имел власть координировать такие стройки',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о Стоунхендже!',
        mainContent: 'Изучаем астрономию, строительство и власть в неолитической Британии',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Изображения Стоунхенджа, схемы и реконструкции',
        closing: 'Подведение итогов'
      }
    }
  },
  'cleopatra-economist': {
    de: {
      title: 'Kleopatra: Politikerin und Ökonomin',
      description: 'Finanzierung der Armeen Caesars und Antonius\', Wirtschaftspolitik Ägyptens, Handelskontrolle — die echte Politik hinter der Romantik',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über Kleopatra!',
        mainContent: 'Wir betrachten die wirtschaftliche Seite ihrer Herrschaft: Finanzen, Handel und politische Bündnisse',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Bilder von Ägypten, Kleopatra und antiken Szenen',
        closing: 'Zusammenfassung'
      }
    },
    ru: {
      title: 'Клеопатра: политик и экономист',
      description: 'Финансирование армий Цезаря и Антония, экономическая политика Египта, контроль торговли — реальная политика за романтикой',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о Клеопатре!',
        mainContent: 'Изучаем экономическую сторону правления: финансы, торговлю и политические союзы',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Изображения Египта, Клеопатры и античных сцен',
        closing: 'Подведение итогов'
      }
    }
  },
  'rome-insulae': {
    de: {
      title: 'Alltag in Rom: Insulae und Armut',
      description: 'Die Realität der römischen Stadt: Mietskasernen, Elend, soziale Ungleichheit — was Filme nicht zeigen',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über den Alltag im alten Rom!',
        mainContent: 'Wir betrachten das Leben in den Insulae, die Armut der Plebejer und das soziale Gefälle',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Bilder von Insulae, Alltagsszenen und Überresten',
        closing: 'Zusammenfassung und Bezug zur heutigen Stadtarmut'
      }
    },
    ru: {
      title: 'Повседневная жизнь в Риме: инсулы и нищета',
      description: 'Реальность римского города: доходные трущобы, нищета, социальное неравенство — то, о чём молчат фильмы',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о повседневной жизни в Древнем Риме!',
        mainContent: 'Изучаем жизнь в инсулах, нищету плебса и социальный разрыв',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Изображения инсул, бытовых сцен и сохранившихся остатков',
        closing: 'Подведение итогов и связь с современной городской бедностью'
      }
    }
  },
  'google-earth': {
    de: {
      title: 'Google Earth: Unsere Erde aus dem All',
      description: 'Praktische Sitzung: Wir lernen, die Erde mit Google Earth zu erkunden und interessante Orte auf der Karte zu finden',
      category: 'Geografie',
      structure: {
        greeting: 'Willkommen zur Sitzung mit Google Earth!',
        mainContent: 'Kurze Einführung in das Werkzeug Google Earth und seine Einsatzmöglichkeiten im Unterricht',
        interactive: 'Praxisaufgabe: Finde spannende Orte auf dem Planeten',
        additional: 'Wir arbeiten direkt im Browser mit Google Earth',
        closing: 'Wir besprechen die gefundenen Orte und Eindrücke'
      }
    },
    ru: {
      title: 'Google Earth: наша планета из космоса',
      description: 'Практическое занятие: учимся исследовать Землю с помощью Google Earth и находим интересные точки на карте',
      category: 'География',
      structure: {
        greeting: 'Добро пожаловать на занятие Google Earth!',
        mainContent: 'Краткое знакомство с инструментом Google Earth и его возможностями для обучения',
        interactive: 'Практическое задание: найти интересные места на планете',
        additional: 'Работаем прямо в браузере с помощью Google Earth',
        closing: 'Обсуждаем найденные места и впечатления'
      }
    }
  }
}

export function getTranslatedSession(sessionId: string, language: Language) {
  const translations = sessionTranslations[sessionId]
  if (!translations) return null
  return translations[language]
}



