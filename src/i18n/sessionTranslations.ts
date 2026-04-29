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
  'ancient-battle-tactics': {
    de: {
      title: 'Geschichte antiker Schlachtordnungen und Taktiken',
      description:
        '30 Folien zu Schluesselmethoden der antiken Kriegsfuehrung: von Aegypten und Griechenland bis Rom, Persien, Indien und China.',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung ueber antike Schlachtordnungen!',
        mainContent:
          'Wir analysieren 30 taktische Beispiele und sehen, wie Formation, Tempo, Disziplin und Gelaende den Kampf entschieden',
        interactive: 'Diskussionen waehrend der Folien und Fragen nach den Bloecken',
        additional: 'Bildauswahl ueber IMAGE_LIST.html',
        closing: 'Fazit: Antike Taktik war ein Zusammenspiel aus Ordnung, Timing und Psychologie'
      }
    },
    ru: {
      title: 'История боевых построений и тактик древнего мира',
      description:
        '30 слайдов о ключевых тактиках древности: Египет, Греция, Македония, Рим, Персия, Индия, Китай и степные народы.',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о боевых построениях древнего мира!',
        mainContent:
          'Разберем 30 тактических примеров: как строи, дисциплина, рельеф и координация решали исход боя',
        interactive: 'Обсуждение по ходу слайдов и вопросы после блоков',
        additional: 'Иллюстрации подбираются по файлу IMAGE_LIST.html',
        closing: 'Итог: военная тактика древности строилась на сочетании строя, темпа и психологии'
      }
    }
  },
  'medieval-battle-tactics': {
    de: {
      title: 'Mittelalterliche Schlachtordnung und Taktik',
      description:
        '30 Folien zu Formation, Ritterkampf, Fernkampf, Schweizer Pike, Mongolen, Belagerung und Spaetmittelalter in Europa und der Steppe.',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung ueber mittelalterliche Schlachtordnung!',
        mainContent:
          'Wir gehen 30 Beispiele durch: Schildwand, Reiterkeil, Fernkampf, Hussiten und Pulver gegen Burgen',
        interactive: 'Zehn Mini-Quizzes und ein Abschlussquiz mit 30 Fragen (Deutsch B2)',
        additional: 'Bildauswahl ueber IMAGE_LIST.html und IMAGE_LIST.md; Folientexte und Quiz in Deutsch B2',
        closing:
          'Fazit: Mittelalterlicher Kampf verband Linie, Gelaende und Psychologie; Pulververaenderung brach die Festungslogik'
      }
    },
    ru: {
      title: 'Средневековые боевые построения и тактики',
      description:
        '30 слайдов о строе, кавалерии, лучниках, швейцарцах, монголах, осаде и позднесредневековой тактике в Европе и степи.',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о средневековых боевых построениях и тактике!',
        mainContent:
          'Разберём тридцать примеров: щитовые стены, рыцарский клин, лучники, пики, монгольская координация и осадная техника',
        interactive: '10 мини-викторин по ходу занятия и итоговая викторина на 30 вопросов',
        additional: 'Иллюстрации по файлам IMAGE_LIST.html и IMAGE_LIST.md',
        closing: 'Итог: средневековый бой сочетал строй, рельеф, дисциплину и психологию; порох переломил роль замка'
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
  'vikings-trade': {
    de: {
      title: 'Wikinger: Sklavenhandel und Silber',
      description: 'Sklaven — Hauptware der Wikinger, wirtschaftliche Gründe der Raubzüge, Silberwege von Bagdad nach Skandinavien',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über Wikinger!',
        mainContent: 'Wir betrachten Sklavenhandel, Silber und die Wirtschaft der Wikinger — das, worüber Filme schweigen',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Bilder von Wikingern, Handelswegkarten, Artefakte',
        closing: 'Zusammenfassung'
      }
    },
    ru: {
      title: 'Викинги: работорговля и серебро',
      description: 'Рабы — главный товар викингов, экономические причины набегов, серебряные пути от Багдада до Скандинавии',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о викингах!',
        mainContent: 'Изучаем работорговлю, серебро и экономику викингов — то, о чём молчат фильмы',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Изображения викингов, карты торговых путей, артефакты',
        closing: 'Подведение итогов'
      }
    }
  },
  'crusades-finance': {
    de: {
      title: 'Kreuzzüge: Finanzielle Ruinierung',
      description: 'Wie wurden Kreuzzüge finanziert, Landverkäufe, Venedig plünderte Konstantinopel für Geld, Schulden und Bankrotte der Kreuzfahrer',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über Kreuzzüge!',
        mainContent: 'Wir untersuchen die Wirtschaft der Kreuzzüge — das, worüber Lehrbücher schweigen',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Bilder von Kreuzfahrern, Karten, Dokumente, Münzen',
        closing: 'Zusammenfassung'
      }
    },
    ru: {
      title: 'Крестовые походы: финансовое разорение',
      description: 'Как финансировались походы, продажа земель, Венеция разграбила Константинополь за деньги, долги и банкротства крестоносцев',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о крестовых походах!',
        mainContent: 'Изучаем экономику крестовых походов — то, о чём молчат учебники',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Изображения крестоносцев, карты, документы, монеты',
        closing: 'Подведение итогов'
      }
    }
  },
  'hansa-monopoly': {
    de: {
      title: 'Hanse: Kartell und Monopol',
      description: 'Wie der Handelsbund Preise kontrollierte, Kriege um Monopole, Stadtblockaden, wirtschaftliche Herrschaft der Ostsee',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über die Hanse!',
        mainContent: 'Wir studieren das erste Kartell Europas — ein Handelsimperium ohne Armee',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Bilder von Hansestädten, Karten, Dokumente, Siegel',
        closing: 'Zusammenfassung'
      }
    },
    ru: {
      title: 'Ганза: картель и монополия',
      description: 'Как торговый союз контролировал цены, войны за монополию, блокады городов, экономическое господство Балтики',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о Ганзе!',
        mainContent: 'Изучаем первый картель Европы — торговую империю без армии',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Изображения городов Ганзы, карты, документы, печати',
        closing: 'Подведение итогов'
      }
    }
  },
  'black-death-economy': {
    de: {
      title: 'Schwarzer Tod: Wirtschaftlicher Umbruch',
      description: 'Arbeitermangel, Löhne stiegen um das Dreifache, Bauernaufstände wegen Lohnstopps, Ende des Feudalismus',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über den Schwarzen Tod!',
        mainContent: 'Wir untersuchen die wirtschaftlichen Folgen der Pest — was Europa für immer veränderte',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Bilder der Pest, Dokumente, Lohngrafiken, Karten',
        closing: 'Zusammenfassung'
      }
    },
    ru: {
      title: 'Чёрная смерть: экономический переворот',
      description: 'Дефицит рабочих, рост зарплат в 3 раза, крестьянские восстания из-за попыток заморозить зарплаты, конец феодализма',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о Чёрной смерти!',
        mainContent: 'Изучаем экономические последствия чумы — то, что изменило Европу навсегда',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Изображения чумы, документы, графики зарплат, карты',
        closing: 'Подведение итогов'
      }
    }
  },
  'universities-riots': {
    de: {
      title: 'Universitäten: Aufstände und Privilegien',
      description: 'Studentengewalt, Massenschlägereien, wirtschaftliche Privilegien der Universitäten, Konflikte mit Bürgern, akademische Autonomie',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über Universitäten!',
        mainContent: 'Wir untersuchen die dunkle Seite mittelalterlicher Universitäten — Gewalt, Privilegien und Macht',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Bilder von Universitäten, Dokumente, Karten, Siegel',
        closing: 'Zusammenfassung'
      }
    },
    ru: {
      title: 'Университеты: бунты и привилегии',
      description: 'Студенческое насилие, массовые драки, экономические привилегии университетов, конфликты с горожанами, академическая автономия',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие об университетах!',
        mainContent: 'Изучаем темную сторону средневековых университетов — насилие, привилегии и власть',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Изображения университетов, документы, карты, печати',
        closing: 'Подведение итогов'
      }
    }
  },
  'castle-warfare': {
    de: {
      title: 'Burgen: Kriegsarchitektur und Ruin',
      description: 'Baukosten = Königreichsbudget, Belagerungskrieg — Preis monatelangen Wartens, wie Burgen die Besitzer ruinierten',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über Burgen!',
        mainContent: 'Wir betrachten Baukosten, Belagerungskrieg und die Wirtschaft mittelalterlicher Burgen',
        interactive: 'Fragen und Abschlussquiz',
        additional: 'Bilder von Burgen, Pläne, Rekonstruktionen',
        closing: 'Zusammenfassung'
      }
    },
    ru: {
      title: 'Замки: военная архитектура и разорение',
      description: 'Стоимость строительства = бюджет королевства, осадная война — цена месяцев ожидания, как замки разоряли владельцев',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о замках!',
        mainContent: 'Изучаем стоимость строительства, осадную войну и экономику средневековых замков',
        interactive: 'Вопросы и итоговая викторина',
        additional: 'Изображения замков, планы, реконструкции',
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
  },
  'ai-history': {
    de: {
      title: 'Geschichte der Künstlichen Intelligenz',
      description: 'Von logischen Maschinen bis zu neuronalen Netzen – Schlüsselmomente, kluge Anekdoten und liebenswerte Fakten',
      category: 'Wissenschaft',
      structure: {
        greeting: 'Willkommen zur Sitzung über die Geschichte der KI!',
        mainContent: 'Wir verfolgen den Weg von Turing und der Dartmouth‑Konferenz über ELIZA und Deep Blue bis zu AlphaGo und ChatGPT',
        interactive: 'Fragen, Zwischen‑Quizze und Abschlussquiz',
        additional: 'Historische Fotos, Diagramme und humorvolle Geschichten',
        closing: 'Zusammenfassung und Diskussion: Was lernen wir aus 70 Jahren KI‑Geschichte?'
      }
    },
    ru: {
      title: 'История искусственного интеллекта',
      description: 'От «логических машин» до нейросетей — ключевые вехи, умные анекдоты и любопытные факты',
      category: 'Наука',
      structure: {
        greeting: 'Добро пожаловать на занятие об истории ИИ!',
        mainContent: 'Проследим путь от Тьюринга и Дартмута до ELIZA, Deep Blue, AlphaGo и ChatGPT',
        interactive: 'Вопросы, промежуточные викторины и итоговый тест',
        additional: 'Исторические фото, схемы и забавные истории',
        closing: 'Подведение итогов: какие уроки даёт нам история ИИ'
      }
    }
  },
  'alexander-anecdotes': {
    de: {
      title: 'Alexander der Große: dreißig schlaue Geschichten',
      description:
        'Episoden aus dem Leben Alexanders III. nach Plutarch, Arrian, Diodor, Curtius Rufus u.a. — Witz, Stolz und List; mit Zwischenquizzen und Abschlusstest.',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Alexander-Sitzung!',
        mainContent:
          'Dreißig kurze Geschichten — vom Fest Philipps bis zum Spiegel vor den Gesandten — und die Frage, was Überlieferung, was literarische Pointe ist',
        interactive: 'Zehn Mini-Quizze (je drei Fragen) und ein Abschlusstest mit 30 Fragen',
        additional: 'Pro Erzählfolie ein Bild; Dateinamen siehe IMAGE_LIST.html',
        closing:
          'Fazit: antike Autoren formten Alexanders Bild — Fakt, Gerücht und Kunstgriff zu unterscheiden bleibt nützlich'
      }
    },
    ru: {
      title: 'Александр Македонский: тридцать остроумных историй',
      description:
        'Эпизоды из жизни Александра III по Плутарху, Арриану, Диодору, Курцию Руфу и др.: остроумие, дерзость и характер — с промежуточными викторинами и итоговым тестом.',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие об Александре Македонском!',
        mainContent:
          'Тридцать коротких историй — от пира Филиппа до зеркала перед послами — и обсуждение, что в них достоверно, а что литературная полировка',
        interactive: 'Десять мини-викторин по три вопроса и финальный тест на 30 вопросов',
        additional: 'На каждом сюжетном слайде — иллюстрация; подбор по IMAGE_LIST.html',
        closing:
          'Итог: античные авторы создали образ Александра — различать факт, слух и художественный штрих полезно всегда'
      }
    }
  },
  'caesar-anecdotes': {
    de: {
      title: 'Caesar: dreißig schlaue Geschichten',
      description:
        'Episoden aus dem Leben Gaius Iulius Caesars nach Sueton, Plutarch, Cicero u.a. — Witz, Mut und Charakter; mit Zwischenquizzen und Abschlusstest.',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Caesar-Sitzung!',
        mainContent:
          'Dreißig kurze Geschichten — von der Piratengefangenschaft bis zu den Iden des März — und die Frage, was Überlieferung, was literarische Pointe ist',
        interactive: 'Zehn Mini-Quizze (je drei Fragen) und ein Abschlusstest mit 30 Fragen',
        additional: 'Pro Erzählfolie ein Bild; Dateinamen siehe IMAGE_LIST.html',
        closing:
          'Fazit: antike Autoren formten Caesars Bild — Fakt, Gerücht und Kunstgriff zu unterscheiden bleibt nützlich'
      }
    },
    ru: {
      title: 'Цезарь: тридцать остроумных историй',
      description:
        'Эпизоды из жизни Гая Юлия Цезаря по Светонию, Плутарху, Цицерону и др.: остроумие, дерзость и характер — с промежуточными викторинами и итоговым тестом.',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о Цезаре!',
        mainContent:
          'Тридцать коротких историй — от пиратского плена до мартовских ид — и обсуждение, что в них достоверно, а что литературная полировка',
        interactive: 'Десять мини-викторин по три вопроса и финальный тест на 30 вопросов',
        additional: 'На каждом сюжетном слайде — иллюстрация; подбор по IMAGE_LIST.html',
        closing:
          'Итог: античные авторы создали образ Цезаря — различать факт, слух и художественный штрих полезно всегда'
      }
    }
  },
  'napoleon-anecdotes': {
    de: {
      title: 'Napoleon: dreißig schlaue Geschichten',
      description:
        'Episoden zu Charakter, Armee, Witz, Joséphine, Politik, Niederlagen und Alltag — von der Krönung bis St. Helena; mit Zwischenquizzen und Abschlusstest.',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Napoleon-Sitzung!',
        mainContent:
          'Dreißig kurze Geschichten — von Größe und Laplace bis Waterloo und letzte Worte — und die Frage, was Überlieferung, was Anekdote ist',
        interactive: 'Zehn Mini-Quizze (je drei Fragen) und ein Abschlusstest mit 30 Fragen',
        additional: 'Pro Erzählfolie ein Bild; Dateinamen siehe IMAGE_LIST.html',
        closing:
          'Fazit: Napoleons Bild entstand aus Chroniken, Memoiren und Anekdoten — Ebenen der Glaubwürdigkeit zu unterscheiden bleibt nützlich'
      }
    },
    ru: {
      title: 'Наполеон: тридцать остроумных историй',
      description:
        'Эпизоды о характере, армии, остроумии, Жозефине, политике, поражениях и быте: от коронации до Святой Елены — с промежуточными викторинами и итоговым тестом.',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о Наполеоне!',
        mainContent:
          'Тридцать коротких историй — от роста и Лапласа до Ватерлоо и последних слов — и обсуждение, где факт, где литература и где устная традиция',
        interactive: 'Десять мини-викторин по три вопроса и финальный тест на 30 вопросов',
        additional: 'На каждом сюжетном слайде — иллюстрация; подбор по IMAGE_LIST.html',
        closing:
          'Итог: образ Наполеона сложился из хроник, мемуаров и анекдотов — различать уровни достоверности полезно всегда'
      }
    }
  },
  'writing-control': {
    de: {
      title: 'Schrift: Kontrolle und Macht',
      description:
        'Wie Schrift Elite und Staat diente – vom sumerischen Tontafelbuch bis zu Kaiserprüfungen und Leseverboten; echte Geschichten und Dokumente, keine erfundenen «Witze».',
      category: 'Geschichte',
      structure: {
        greeting: 'Willkommen zur Sitzung über Schrift und Macht!',
        mainContent:
          'Wir verfolgen, wer Zeichen beherrschte, wer «mündlich» blieb und wie Aufzeichnungen Zugang zu Ressourcen und Bedeutungen öffneten oder verschlossen',
        interactive: 'Zwischenquizze und Abschlusstest mit 30 Fragen',
        additional: 'Auf jedem Folienbild eine Illustration; Bilderliste unter IMAGE_LIST.html',
        closing:
          'Fazit: Alphabetisierung ist kein neutrales Handwerk, sondern ein Feld der Auseinandersetzung um Kontrolle'
      }
    },
    ru: {
      title: 'Письменность: контроль и власть',
      description:
        'Как письмо служило элите и государству: от шумерских табличек до имперских экзаменов и запретов; реальные истории и документы, а не выдуманные «анекдоты».',
      category: 'История',
      structure: {
        greeting: 'Добро пожаловать на занятие о письменности и власти!',
        mainContent:
          'Проследим, кто владел знаками, кто оставался «у устной» правды и как записи открывали или закрывали доступ к ресурсам и смыслам',
        interactive: 'Промежуточные викторины и итоговый тест из 30 вопросов',
        additional: 'На каждом слайде — иллюстрация; подбор по списку IMAGE_LIST.html',
        closing: 'Итог: грамотность — не нейтральный навык, а поле борьбы за контроль'
      }
    }
  },
  'ai-modern': {
    de: {
      title: 'Moderne KI: Fähigkeiten und Grenzen',
      description: 'Was heutige KI wirklich kann, wo sie scheitert und wie sie Arbeit, Bildung und Kreativität verändert',
      category: 'Wissenschaft',
      structure: {
        greeting: 'Willkommen zur Sitzung über moderne KI!',
        mainContent: 'Wir besprechen ChatGPT, Bildgeneratoren, reale Anwendungsfälle, Risiken und sinnvolle Einsatzregeln',
        interactive: 'Diskussionen, Mini‑Umfragen und Quiz‑Blöcke',
        additional: 'Beispiele für Prompts, typische Fehler und komische KI‑Pannen',
        closing: 'Zusammenfassung: Wie nutzen wir KI als Werkzeug – nicht als Orakel?'
      }
    },
    ru: {
      title: 'Современный ИИ: возможности и ограничения',
      description: 'Что реально умеет ИИ сегодня, где он ошибается и как меняет работу, образование и творчество',
      category: 'Наука',
      structure: {
        greeting: 'Добро пожаловать на занятие о современном ИИ!',
        mainContent: 'Обсудим ChatGPT, генерацию изображений, реальные кейсы, риски и правила разумного использования',
        interactive: 'Обсуждения, мини‑голосования и блоки викторин',
        additional: 'Примеры запросов, типичные ошибки и забавные провалы ИИ',
        closing: 'Подведение итогов: как использовать ИИ как инструмент, а не «оракул»'
      }
    }
  }
}

export function getTranslatedSession(sessionId: string, language: Language) {
  const translations = sessionTranslations[sessionId]
  if (!translations) return null
  return translations[language]
}



