import { Slide, QuizBlock } from '../types/session'

// Deutsche Inhalte (B1–B2) für:
// „Университеты: бунты и привилегии“ / „Universitäten: Aufstände und Privilegien“

export const universitiesRiotsSlidesDE: Slide[] = [
  {
    id: 'u1',
    title: 'Mittelalterliche Universität – nicht Bibliothek, sondern Kampfzone',
    content:
      'Filme zeigen Universitäten als ruhige Orte des Lernens. Im 13.–15. Jahrhundert waren sie oft Schauplatz von Massenschlägereien. Studenten griffen Bürger an, plünderten Läden und fühlten sich unantastbar. Grund waren Privilegien: Die städtischen Gerichte durften sie nicht bestrafen – nur der Bischof.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/university-main.jpg', title: 'Mittelalterliche Uni' }]
  },
  {
    id: 'u2',
    title: 'Studenten – privilegierte Kleriker',
    content:
      'Ein Student galt rechtlich als Kleriker, also als Geistlicher. Er zahlte keine städtischen Steuern und unterstand nicht der Stadt, sondern der Kirche. Nur kirchliche Gerichte durften ihn verurteilen – und die Urteile waren oft mild. Viele Studenten verhielten sich deshalb wie eine unangreifbare Kaste.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/privileges.jpg', title: 'Privilegien' }]
  },
  {
    id: 'u3',
    title: 'Paris: Studenten gegen Bürger',
    content:
      'Die Universität Paris hatte im Hochmittelalter bis zu 20.000 Studenten – eine eigene „Studentenstadt“ in der Stadt. Sie bezahlten Wein, Essen und Miete oft nicht, mit dem Argument: „Wir sind Kleriker.“ Die Bürger ertrugen das eine Zeit lang, dann flogen Fäuste und Steine. Die Krone stellte sich dennoch häufig auf die Seite der Universität – sie brauchte gebildete Beamte.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/paris.jpg', title: 'Paris' }]
  },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-u-1-1-de',
        text: 'Welchen rechtlichen Status hatten viele Studenten?',
        type: 'multiple-choice',
        options: ['Bauern', 'Kleriker (Geistliche)', 'Ritter', 'Händler'],
        correctAnswer: 1,
        explanation: 'Als Kleriker genossen sie Schutz und Sonderrechte der Kirche.'
      },
      {
        id: 'q-u-1-2-de',
        text: 'Wer durfte Studenten in der Regel verurteilen?',
        type: 'multiple-choice',
        options: ['Der Stadtrat', 'Der König', 'Nur der Bischof', 'Niemand'],
        correctAnswer: 2,
        explanation: 'Die kirchliche Gerichtsbarkeit führte zu milderen Strafen.'
      },
      {
        id: 'q-u-1-3-de',
        text: 'Wie viele Studenten hatte Paris ungefähr in der Blütezeit?',
        type: 'multiple-choice',
        options: ['1.000', '5.000', '20.000', '50.000'],
        correctAnswer: 2,
        explanation: 'Etwa 20.000 Studenten machten die Stadt zu einem Spannungsfeld.'
      }
    ]
  },
  {
    id: 'u4',
    title: 'Humor: „Einen Bürger erschlagen? Beichten und weiterstudieren“',
    content:
      'Ein betrunkener Student erschlägt im Streit einen Wirt. Die Stadt will ihn verhaften, die Universität ruft: „Kleriker – unsere Angelegenheit.“ Vor dem Bischof gibt es eine Buße, vielleicht eine Geldstrafe – und der Student kehrt in die Vorlesung zurück. Für die Bürger wirkt „akademische Freiheit“ wie ein Freifahrtschein für Gewalt.',
    duration: 3
  },
  {
    id: 'u5',
    title: 'Oxford: Das Scholastika-Massaker (1355)',
    content:
      '1355 eskalierte ein Streit in einer Taverne in Oxford zum Blutbad. Studenten und Bürger griffen sich mit Waffen an; am Ende waren etwa 93 Menschen tot, die meisten Studenten. König Eduard III. stellte sich klar auf die Seite der Universität. Die Bürger mussten jährlich einen Sühneumzug machen und eine Geldstrafe zahlen – fast 470 Jahre lang.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/oxford-riot.jpg', title: 'Massaker in Oxford' }]
  },
  {
    id: 'u6',
    title: 'Die Universität regiert die Stadt',
    content:
      'Nach dem Blutbad erhielt die Universität von Oxford die Kontrolle über Lebensmittelpreise, Mieten für Studenten und Märkte. Der Bürgermeister musste der Universität den Treueid leisten. Praktisch wurde die Stadt dem Studium untergeordnet: Wissen als Machtinstrument gegen die eigenen Bürger.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/oxford-power.jpg', title: 'Macht der Universität' }]
  },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-u-2-1-de',
        text: 'Wann ereignete sich das Scholastika-Massaker in Oxford?',
        type: 'multiple-choice',
        options: ['1200', '1300', '1355', '1400'],
        correctAnswer: 2,
        explanation: 'Der Konflikt eskalierte im Jahr 1355.'
      },
      {
        id: 'q-u-2-2-de',
        text: 'Wie lange mussten die Bürger Oxfords Sühne leisten?',
        type: 'multiple-choice',
        options: ['10 Jahre', '50 Jahre', '100 Jahre', 'Fast 470 Jahre'],
        correctAnswer: 3,
        explanation: 'Bis ins 19. Jahrhundert hinein.'
      },
      {
        id: 'q-u-2-3-de',
        text: 'Wer kontrollierte nach dem Konflikt Märkte und Preise?',
        type: 'multiple-choice',
        options: ['Die Stadt', 'Die Universität', 'Die Kirche allein', 'Die Zünfte'],
        correctAnswer: 1,
        explanation: 'Die Universität nutzte den Sieg, um ökonomische Macht zu sichern.'
      }
    ]
  },
  {
    id: 'u7',
    title: 'Bologna: „Nationen“ als Studentenbanden',
    content:
      'Die Universität Bologna (gegründet 1088) gilt als älteste Europas. Studenten schlossen sich dort in „Nationen“ nach Herkunft zusammen – Italiener, Franzosen, Deutsche, Spanier. Diese Gruppen agierten oft wie Banden, die sich nicht nur im Hörsaal, sondern auch mit Fäusten auf der Straße bekämpften.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/bologna.jpg', title: 'Bologna' }]
  },
  {
    id: 'u8',
    title: 'Prag: Vertreibung der „deutschen Nation“ (1409)',
    content:
      '1409 eskalierte in Prag ein Konflikt zwischen tschechischen und deutschen Studenten und Professoren. König Wenzel IV. stellte sich auf die Seite der Tschechen. Rund 2.000 Deutsche verließen die Stadt und gründeten später die Universität Leipzig. Prag verlor damit einen großen Teil seiner Studenten – Nationalismus an der Uni hatte realen Preis.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/prague.jpg', title: 'Prag' }]
  },
  {
    id: 'u9',
    title: 'Humor: „Nation“ = Prügelgruppe mit Immatrikulationsliste',
    content:
      'Student: „Ich gehöre zur deutschen Nation.“ Professor: „Ihr lernt also gemeinsam?“ Student: „Wir lernen und prügeln uns mit den Franzosen.“ Professor: „Warum?“ Student: „Weil sie Franzosen sind.“ Nationalgefühl im Mittelalter: oft mehr Faust als Argument.',
    duration: 3
  },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-u-3-1-de',
        text: 'Welche Universität gilt als älteste Europas?',
        type: 'multiple-choice',
        options: ['Paris', 'Oxford', 'Bologna (1088)', 'Prag'],
        correctAnswer: 2,
        explanation: 'Bologna wurde 1088 gegründet.'
      },
      {
        id: 'q-u-3-2-de',
        text: 'Was bezeichnete „Nation“ an mittelalterlichen Unis?',
        type: 'multiple-choice',
        options: ['Einen Staat', 'Eine Gruppe von Studenten nach Herkunft', 'Einen Fachbereich', 'Eine Religion'],
        correctAnswer: 1,
        explanation: 'Nationen waren Gruppen von Studenten aus derselben Region.'
      },
      {
        id: 'q-u-3-3-de',
        text: 'Was war eine Folge des Konflikts in Prag 1409?',
        type: 'multiple-choice',
        options: [
          'Gründung der Uni Prag',
          'Gründung der Uni Leipzig durch ausgewanderte Deutsche',
          'Schließung aller Unis',
          'Nichts passierte'
        ],
        correctAnswer: 1,
        explanation: 'Deutsche Gelehrte gründeten in Leipzig eine neue Universität.'
      }
    ]
  },
  {
    id: 'u10',
    title: 'Steuerprivilegien: wir zahlen nicht',
    content:
      'Universitäten und Studenten waren oft von städtischen Steuern befreit. Professoren und Studenten zahlten keine Marktgebühren, keine Durchgangszölle und weniger Abgaben auf Wohnraum. Die Last blieb an den Bürgern hängen. Kein Wunder, dass viele Einwohner ihre „Bildungsnachbarn“ hassten.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/tax-exemption.jpg', title: 'Steuervorteile' }]
  },
  {
    id: 'u11',
    title: 'Kontrolle über Märkte',
    content:
      'In manchen Städten legten Universitäten die Preise für Brot, Wein, Mieten und Schreibmaterial fest. Bürger mussten Studenten günstig beliefern, sonst drohten Strafen. Die Universität wurde zum Monopolisten, die Stadt zum billigen Lieferanten – Bildung als knallhartes Geschäftsmodell.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/market-control.jpg', title: 'Marktkontrolle' }]
  },
  {
    id: 'u12',
    title: 'Cessatio – Streik als Waffe',
    content:
      'Bei Konflikten mit der Stadt konnten Universitäten zur „cessatio“ aufrufen: Professoren und Studenten verließen geschlossen den Ort. Der Stadt entgingen Einnahmen von tausenden jungen Konsumenten und künftigen Beamten. Oft knickten die Städte ein und erfüllten die Forderungen der Universität.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/strike.jpg', title: 'Universitätsstreik' }]
  },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-u-4-1-de',
        text: 'Wer zahlte die meisten städtischen Steuern?',
        type: 'multiple-choice',
        options: ['Studenten', 'Professoren', 'Bürger', 'Kleriker'],
        correctAnswer: 2,
        explanation: 'Studenten und Kleriker waren oft befreit – Bürger mussten mehr tragen.'
      },
      {
        id: 'q-u-4-2-de',
        text: 'Was ist eine „cessatio“?',
        type: 'multiple-choice',
        options: ['Ein Examen', 'Ein Universitätsstreik', 'Ein Feiertag', 'Eine Bibliothek'],
        correctAnswer: 1,
        explanation: 'Bei einer cessatio verließen Uniangehörige die Stadt.'
      },
      {
        id: 'q-u-4-3-de',
        text: 'Wer diktierte in manchen Städten die Preise?',
        type: 'multiple-choice',
        options: ['Nur die Zünfte', 'Nur der König', 'Die Universität', 'Niemand'],
        correctAnswer: 2,
        explanation: 'Die Uni nutzte ihre Sonderstellung zur Marktkontrolle.'
      }
    ]
  },
  {
    id: 'u13',
    title: 'Humor: „Ohne Studenten stirbt die Stadt – also schweig“',
    content:
      'Bürgermeister: „Wir müssen studentische Gewalt bestrafen.“ Universität: „Dann ziehen wir weg.“ Ein Jahr später: leere Wirtshäuser, leere Mietwohnungen, leere Kassen. Bürgermeister: „Kehren Sie zurück, wir entschuldigen uns.“ Universität: „Ab jetzt legen wir die Regeln fest.“ Die Stadt als Geisel der Alma Mater.',
    duration: 3
  },
  {
    id: 'u14',
    title: 'Cambridge 1381 – Wut auf die Uni',
    content:
      'Im englischen Bauernaufstand von 1381 entlud sich der Hass der Bürger von Cambridge gegen die Universität. Sie plünderten Kollegien, verbrannten Urkunden und Bücher. Nach der Niederschlagung des Aufstands stellte die Krone die alte Ordnung wieder her – die Privilegien der Universität überlebten, die Bürger wurden bestraft.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/cambridge-riot.jpg', title: 'Aufstand in Cambridge' }]
  },
  {
    id: 'u15',
    title: 'Bettelstudenten und Vaganten',
    content:
      'Viele Studenten waren arm. Sie bettelten auf der Straße oder lebten von Gelegenheitsjobs. Einige wurden zu Straßenräubern. „Vaganten“ – wandernde Studenten – waren zugleich Dichter, Musiker und Kleinkriminelle. Die Kirche schützte sie oft trotzdem als Kleriker.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/vagrants.jpg', title: 'Vaganten' }]
  },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-u-5-1-de',
        text: 'Mit welchem Ereignis ist Cambridge 1381 verbunden?',
        type: 'multiple-choice',
        options: [
          'Gründung der Uni',
          'Bau neuer Hörsäle',
          'Bauernaufstand und Angriff auf die Uni',
          'Ein Erdbeben'
        ],
        correctAnswer: 2,
        explanation: 'Der Aufstand richtete sich auch gegen die Universität.'
      },
      {
        id: 'q-u-5-2-de',
        text: 'Wer waren Vaganten?',
        type: 'multiple-choice',
        options: ['Professoren', 'Wandernde Studenten, oft arme Dichter und Räuber', 'Könige', 'Mönche'],
        correctAnswer: 1,
        explanation: 'Vaganten verbanden Bildung, Armut und Kriminalität.'
      },
      {
        id: 'q-u-5-3-de',
        text: 'Wie reagierte die Krone nach Aufständen gegen die Uni?',
        type: 'multiple-choice',
        options: [
          'Sie bestrafte die Universität',
          'Sie schaffte Privilegien ab',
          'Sie stellte Privilegien wieder her und bestrafte Bürger',
          'Sie tat nichts'
        ],
        correctAnswer: 2,
        explanation: 'Die Krone brauchte die Uni für ausgebildete Beamte.'
      }
    ]
  },
  {
    id: 'u16',
    title: 'Uni und Kirche – Bündnis der Macht',
    content:
      'Universitäten waren Werkzeuge der Kirche. Sie bildeten Priester, Theologen und Kirchenjuristen aus. Im Gegenzug schützte die Kirche die akademischen Privilegien gegen Städte und weltliche Herrscher. Wissen und Religion verstärkten sich gegenseitig als Machtfaktoren.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/church-alliance.jpg', title: 'Bündnis mit der Kirche' }]
  },
  {
    id: 'u17',
    title: 'Könige – angewiesen auf Gelehrte',
    content:
      'Könige brauchten Juristen, Diplomaten und gebildete Berater. Universitäten lieferten diese Experten. Deshalb verteidigten Herrscher die Unis häufig gegen Beschwerden der Städte. Das Wohl der Bürger war zweitrangig – wichtig war ein funktionierender Staatsapparat.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/royal-support.jpg', title: 'Königliche Unterstützung' }]
  },
  {
    id: 'u18',
    title: 'Humor: „Student gegen Bürger – Schuld hat der Bürger“',
    content:
      'Ein Student stiehlt Brot, der Bäcker schlägt zurück. Die Stadt sagt: „Notwehr.“ Die Universität sagt: „Angriff auf einen Kleriker.“ Urteil: hohe Geldstrafe für den Bäcker. Botschaft: Akademische Robe schützt besser als jede Rüstung.',
    duration: 3
  },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-u-6-1-de',
        text: 'Warum schützte die Kirche die Universitäten?',
        type: 'multiple-choice',
        options: ['Aus reiner Nächstenliebe', 'Wegen der Einnahmen', 'Weil sie dort Personal ausbildete', 'Weil sie Angst hatte'],
        correctAnswer: 2,
        explanation: 'Universitäten lieferten Priester und Juristen für die Kirche.'
      },
      {
        id: 'q-u-6-2-de',
        text: 'Warum verteidigten Könige die Unis?',
        type: 'multiple-choice',
        options: [
          'Weil Studenten reich waren',
          'Weil Städte es wollten',
          'Weil sie gebildete Beamte brauchten',
          'Weil sie ruhig waren'
        ],
        correctAnswer: 2,
        explanation: 'Staaten ohne Fachleute funktionieren schlecht.'
      },
      {
        id: 'q-u-6-3-de',
        text: 'Wer trug bei Konflikten oft die Schuld?',
        type: 'multiple-choice',
        options: ['Student', 'Bürger', 'Professor', 'König'],
        correctAnswer: 1,
        explanation: 'Rechtlich war der Bürger meist der Unterlegene.'
      }
    ]
  },
  {
    id: 'u19',
    title: 'Akademische Freiheit – ohne Verantwortung',
    content:
      'Universitäten erkämpften „akademische Freiheit“: Sie durften Inhalte bestimmen und sich weitgehend selbst verwalten. Im Mittelalter bedeutete das oft auch Freiheit von Verantwortung. Gewalt, Korruption und Steuerprivilegien wurden unter dem Schutz dieser Freiheit geduldet.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/academic-freedom.jpg', title: 'Akademische Freiheit' }]
  },
  {
    id: 'u20',
    title: 'Fakultäten im Streit: Theologen vs. Juristen',
    content:
      'Innerhalb der Universitäten stritten sich Fakultäten um Status und Einfluss. Theologen galten als „höchstes Fach“ und sahen auf Juristen und Mediziner herab. Juristen verdienten als königliche Berater gut, was Neid auslöste. Sitzungen von Fakultäten endeten nicht selten in Schreiduellen – manchmal sogar in Prügeleien.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/faculty-conflict.jpg', title: 'Fakultätskonflikte' }]
  },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-u-7-1-de',
        text: 'Was bedeutete „akademische Freiheit“ damals oft praktisch?',
        type: 'multiple-choice',
        options: ['Recht auf Forschung UND Verantwortung', 'Nur Freiheit ohne Verantwortung', 'Nur Verantwortung', 'Gar nichts'],
        correctAnswer: 1,
        explanation: 'Privilegien wurden selten mit echter Kontrolle verbunden.'
      },
      {
        id: 'q-u-7-2-de',
        text: 'Welche Fakultät hatte den höchsten Status?',
        type: 'multiple-choice',
        options: ['Jura', 'Medizin', 'Theologie', 'Arithmetik'],
        correctAnswer: 2,
        explanation: 'Theologie galt als „Königin der Wissenschaften“.'
      },
      {
        id: 'q-u-7-3-de',
        text: 'Warum wurden Juristen oft beneidet?',
        type: 'multiple-choice',
        options: ['Sie arbeiteten wenig', 'Sie verdienten gut bei Königen und Fürsten', 'Sie hatten keine Prüfungen', 'Sie lebten im Luxus'],
        correctAnswer: 1,
        explanation: 'Juristen wurden im Staatsdienst gut bezahlt.'
      }
    ]
  },
  {
    id: 'u21',
    title: 'Humor: „Theologe lehrt Ewiges, Jurist verdient Geld“',
    content:
      'Theologe: „Ich studiere Gott – das Wichtigste.“ Jurist: „Ich studiere Gesetze – der König zahlt gut.“ Theologe: „Geld ist Sünde.“ Jurist: „Dann überlasse es mir, ich trage die Sünde.“ Konkurrenz der Fakultäten in einem Dialog.',
    duration: 3
  },
  {
    id: 'u22',
    title: 'Prüfungen als Einnahmequelle',
    content:
      'Prüfungen kosteten Gebühren: für Zulassung, Prüfung und Ausstellung des Diploms. Wer nicht zahlen konnte, bestand oft nicht – egal wie gut er vorbereitet war. Reiche Familien kauften ihren Söhnen den Weg durch das Studium, arme blieben hängen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/exams.jpg', title: 'Prüfungen' }]
  },
  {
    id: 'u23',
    title: 'Diplome zu verkaufen',
    content:
      'Wohlhabende Studenten konnten Professoren direkt bezahlen, um ein Diplom zu erhalten, auch ohne große Leistung. Korruption war bekannt, aber geduldet – die Universität brachte der Kirche und dem Staat Geld und Personal. Der Titel war Ware, Wissen nur optional.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/diplomas.jpg', title: 'Diplome' }]
  },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-u-8-1-de',
        text: 'Wie wurden Prüfungen oft finanziert?',
        type: 'multiple-choice',
        options: ['Durch den Staat', 'Durch die Kirche', 'Durch Prüfungsgebühren der Studenten', 'Gar nicht'],
        correctAnswer: 2,
        explanation: 'Studierende zahlten für nahezu jeden Schritt.'
      },
      {
        id: 'q-u-8-2-de',
        text: 'War es möglich, ein Diplom zu kaufen?',
        type: 'multiple-choice',
        options: ['Nein, nie', 'Ja, mit Geld und Beziehungen', 'Nur beim König', 'Nur in Rom'],
        correctAnswer: 1,
        explanation: 'Korruption machte Abschlüsse zur Ware.'
      },
      {
        id: 'q-u-8-3-de',
        text: 'Wer hatte bessere Chancen auf Bildung?',
        type: 'multiple-choice',
        options: ['Arme Bauern', 'Nur Reiche und Begünstigte', 'Alle gleich', 'Nur Mönche'],
        correctAnswer: 1,
        explanation: 'Bildung war ein klassisches Privileg der Oberschicht.'
      }
    ]
  },
  {
    id: 'u24',
    title: 'Reformation – Ende des Monopols',
    content:
      'Im 16. Jahrhundert brachte die Reformation eine Spaltung der Kirche. Protestanten gründeten eigene Universitäten. Der Bildungsmarkt wurde vielfältiger. Staaten übernahmen mehr Kontrolle, die Kirche verlor ihr Monopol. Privilegien wurden beschnitten, und Studenten mussten sich stärker an weltliche Gesetze halten.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/reformation.jpg', title: 'Reformation' }]
  },
  {
    id: 'u25',
    title: 'Erbe: Autonomie der Universitäten',
    content:
      'Trotz aller Exzesse überlebte eine Idee: Universitäten brauchen Autonomie, um frei lehren zu können. Moderne Unis haben Selbstverwaltung und akademische Freiheit, sind aber an Gesetze und Gleichberechtigung gebunden. Die Vorstellung vom Campus als „besonderem Ort“ stammt direkt aus dem Mittelalter – nur die Regeln sind heute anders.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/autonomy.jpg', title: 'Autonomie' }]
  },
  {
    id: 'u26',
    title: 'Humor: „Mittelalterstudent vs. Heute“',
    content:
      'Mittelalterlicher Student: „Ich prügle Bürger, zahle keine Steuern und komme damit durch.“ Moderner Student: „Ich schwänze Vorlesungen und binge Serien.“ Mittelalterlicher Student: „Anfänger.“ Fortschritt heißt nicht, dass alle Probleme verschwunden sind – nur die Formen haben sich geändert.',
    duration: 3
  },
  {
    id: 'q9',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-u-9-1-de',
        text: 'Was zerstörte das Bildungsmonopol der katholischen Universitäten?',
        type: 'multiple-choice',
        options: ['Die Pest', 'Die Reformation', 'Ein Krieg', 'Ein Erdbeben'],
        correctAnswer: 1,
        explanation: 'Protestantische Unis schufen Konkurrenz.'
      },
      {
        id: 'q-u-9-2-de',
        text: 'Was blieb als zentrales Erbe der mittelalterlichen Unis?',
        type: 'multiple-choice',
        options: ['Gewalt', 'Steuerfreiheit', 'Autonomie und akademische Freiheit', 'Leibeigenschaft'],
        correctAnswer: 2,
        explanation: 'Autonomie wurde modernisiert, aber nicht abgeschafft.'
      },
      {
        id: 'q-u-9-3-de',
        text: 'Wer kontrolliert moderne Universitäten rechtlich?',
        type: 'multiple-choice',
        options: ['Nur die Kirche', 'Nur die Stadt', 'Der Staat (Gesetze)', 'Niemand'],
        correctAnswer: 2,
        explanation: 'Autonomie existiert innerhalb eines gesetzlichen Rahmens.'
      }
    ]
  },
  {
    id: 'u27',
    title: 'Fazit: Privilegien erzeugen Gewalt',
    content:
      'Mittelalterliche Universitäten waren keine reinen „Tempel des Wissens“, sondern Zentren von Macht und manchmal Terror. Sonderrechte, Steuerbefreiungen und eigene Gerichtsbarkeit machten Studenten unantastbar – und damit gefährlich. Wenn es keine Konsequenzen gibt, explodieren Konflikte.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/summary.jpg', title: 'Fazit' }]
  },
  {
    id: 'u28',
    title: 'Vergleich mit heute',
    content:
      'Heute genießen Universitäten noch Autonomie, aber innerhalb klarer Gesetze. Studentische Proteste finden meist friedlich statt, nicht mit Schwertern. Dennoch lebt die Idee vom „besonderen Raum“ weiter: Campus als Ort, an dem neue Ideen getestet und auch Grenzen ausgetestet werden.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/modern-comparison.jpg', title: 'Vergleich' }]
  },
  {
    id: 'u29',
    title: 'Schluss: Wissen = Macht, Macht braucht Regeln',
    content:
      'Mittelalterliche Universitäten zeigen: Wissen erzeugt Macht – aber ohne Verantwortung wird daraus Tyrannei. Erst als Staaten die Kontrolle übernahmen und Privilegien begrenzten, endete die Gewalt. Moderne Debatten über akademische Freiheit wiederholen dieses Spannungsfeld in neuer Form.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/conclusion.jpg', title: 'Schluss' }]
  },
  {
    id: 'u30',
    title: 'Finale: Universitäten ohne Romantik',
    content:
      'Wenn wir an Universitäten denken, sehen wir oft Bibliotheken und stille Höfe. Die Geschichte zeigt die dunkle Seite: Schlägereien, Korruption, Ungerechtigkeit. Gerade dieser unromantische Blick hilft zu verstehen, wie heutige Hochschulen wurden, was sie sind – und warum Regeln so wichtig sind.',
    duration: 3,
    media: [{ type: 'image', url: '/media/universities-riots/final.jpg', title: 'Finale' }]
  }
]

export const universitiesRiotsFinalQuizDE: QuizBlock = {
  id: 'quiz-universities-riots-de',
  title: 'Abschlussquiz: Universitäten – Aufstände und Privilegien',
  questions: [
    {
      id: 'final-u-de-1',
      text: 'Warum konnten Studenten sich oft wie „unangreifbar“ verhalten?',
      type: 'multiple-choice',
      options: [
        'Weil sie reich waren',
        'Weil sie als Kleriker galten und Sonderrechte hatten',
        'Weil sie bewaffnet waren',
        'Weil Städte ängstlich waren'
      ],
      correctAnswer: 1,
      explanation: 'Klerikerstatus und eigene Gerichtsbarkeit schützten sie.'
    },
    {
      id: 'final-u-de-2',
      text: 'Was war die häufigste Reaktion der Krone auf Konflikte zwischen Bürgern und Universitäten?',
      type: 'multiple-choice',
      options: [
        'Sie schloss die Unis',
        'Sie stellte sich auf die Seite der Bürger',
        'Sie verteidigte meist die Universitäten',
        'Sie ignorierte alles'
      ],
      correctAnswer: 2,
      explanation: 'Gelehrte waren für die Verwaltung wichtiger als zufriedene Bürger.'
    },
    {
      id: 'final-u-de-3',
      text: 'Was beschreibt die „cessatio“?',
      type: 'multiple-choice',
      options: [
        'Eine Prüfungsform',
        'Einen Streik, bei dem die Uni die Stadt verlässt',
        'Eine religiöse Feier',
        'Ein Bauprojekt'
      ],
      correctAnswer: 1,
      explanation: 'Die Stadt sollte ökonomisch unter Druck gesetzt werden.'
    },
    {
      id: 'final-u-de-4',
      text: 'Warum hassten viele Bürger die Universitäten?',
      type: 'multiple-choice',
      options: [
        'Wegen der Architektur',
        'Wegen Lärm und Gewalt',
        'Wegen Steuerbefreiungen und wirtschaftlicher Dominanz',
        'Weil sie Bücher mochten'
      ],
      correctAnswer: 2,
      explanation: 'Bürger zahlten Steuern und litten, während Unis Privilegien genossen.'
    },
    {
      id: 'final-u-de-5',
      text: 'Was änderte sich mit der Reformation im Bildungsbereich?',
      type: 'multiple-choice',
      options: [
        'Es gab keine Unis mehr',
        'Nur eine Super-Uni blieb übrig',
        'Protestanten gründeten eigene Unis, das Monopol brach',
        'Nur Klosterschulen blieben'
      ],
      correctAnswer: 2,
      explanation: 'Bildung wurde konfessionell vielfältiger.'
    },
    {
      id: 'final-u-de-6',
      text: 'Welches zentrale Erbe der mittelalterlichen Unis existiert heute noch?',
      type: 'multiple-choice',
      options: ['Gewalt', 'Steuerfreiheit', 'Autonomie und akademische Freiheit', 'Leibeigenschaft'],
      correctAnswer: 2,
      explanation: 'Autonomie blieb, wurde aber demokratisch eingehegt.'
    },
    {
      id: 'final-u-de-7',
      text: 'Welche zentrale Gefahr zeigen die mittelalterlichen Universitäten?',
      type: 'multiple-choice',
      options: [
        'Dass Wissen nutzlos ist',
        'Dass Macht ohne Verantwortung in Gewalt umschlagen kann',
        'Dass Bürger gefährlich sind',
        'Dass Bildung Armut erzeugt'
      ],
      correctAnswer: 1,
      explanation: 'Privilegien ohne Kontrolle führten zu massiven Missbräuchen.'
    }
  ]
}

