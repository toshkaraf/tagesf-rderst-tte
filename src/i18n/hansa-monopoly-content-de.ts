import { Slide, QuizBlock } from '../types/session'

// Deutsche Inhalte (B1–B2): „Hanse – Kartell und Monopol“
// Kompakte Version, damit die deutsche Session wieder nutzbar ist.

export const hansaMonopolySlidesDE: Slide[] = [
  {
    id: 'h1',
    title: 'Die Hanse – Kartell ohne Staat',
    content:
      'Die Hanse war ein Bund von rund 200 Städten in Nord- und Mitteleuropa. Kein König, kein Kaiser – aber gemeinsame Regeln und Preise. Sie kontrollierte Handel mit Fisch, Salz, Wachs, Fellen und Getreide von London bis Nowgorod.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/hansa-main.jpg', title: 'Die Hanse' }]
  },
  {
    id: 'h2',
    title: 'Lübeck – Königin der Hanse',
    content:
      'Lübeck nannte man „Königin der Hanse“. Von hier aus organisierten Kaufleute Blockaden, Handelsverträge und Preise. Für viele Könige war Lübeck gefährlicher als jede fremde Armee, weil die Stadt den Handel ganzer Regionen stoppen konnte.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/lubeck.jpg', title: 'Lübeck' }]
  },
  {
    id: 'h3',
    title: 'Wie funktioniert ein Kartell?',
    content:
      'Hanseatische Kaufleute sprachen Preise untereinander ab. Wer billiger verkaufte, wurde ausgeschlossen – praktisch wirtschaftlich zerstört. Staaten fürchteten nicht die Schwerter der Hanse, sondern ihre Fähigkeit, Handel und Nachschub zu blockieren.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/monopoly.jpg', title: 'Monopol' }]
  },
  {
    id: 'h5',
    title: 'Kontore – geschlossene Handelsviertel',
    content:
      'In Nowgorod, Brügge, London und Bergen richtete die Hanse eigene Kontore ein. Das waren abgeschlossene Viertel mit eigenen Regeln, Gericht und Lagerhäusern. Einheimische Händler hatten dort kaum Chancen – die Hanse kontrollierte den Zugang zu den Waren.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/kontor.jpg', title: 'Kontor' }]
  },
  {
    id: 'h6',
    title: 'Nowgorod – Pelze, Wachs und Honig',
    content:
      'Über das Kontor „Peterhof“ in Nowgorod kaufte die Hanse Pelze, Wachs und Honig aus Russland. Sie zahlte wenig und verkaufte in Westeuropa mit enormen Aufschlägen. Als Iwan III. 1494 den Peterhof schloss, verlor die Hanse Millionen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/novgorod.jpg', title: 'Nowgorod' }]
  },
  {
    id: 'h7',
    title: 'Krieg ohne Schlachten: Blockade Dänemarks',
    content:
      'Als der dänische König Gotland eroberte, antwortete die Hanse mit einer Blockade. Häfen wurden geschlossen, Handel gestoppt. Ohne Getreide und Fisch begann Dänemark zu hungern. Am Ende musste der König im Frieden von Stralsund die Bedingungen der Hanse akzeptieren.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/denmark-war.jpg', title: 'Krieg mit Dänemark' }]
  },
  {
    id: 'h8',
    title: 'Hering – „Öl des Mittelalters“',
    content:
      'Gepökelter Hering war Grundnahrungsmittel in der Fastenzeit. Die Hanse kontrollierte Fanggebiete und Salzlieferungen. Wer ohne Genehmigung fischte oder verkaufte, riskierte, dass seine Schiffe beschlagnahmt wurden. Ohne Hering und Salz standen Städte still.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/herring.jpg', title: 'Hering' }]
  },
  {
    id: 'h10',
    title: 'Brügge – Bank und Börse der Hanse',
    content:
      'Brügge war im späten Mittelalter einer der wichtigsten Finanzplätze Europas. Hanseatische Kaufleute betrieben dort Wechselstuben und Lagerhäuser. Von hier aus wurden Kredite vergeben, Wechsel ausgestellt und Preise für Wolle und Stoffe gemacht.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/bruges.jpg', title: 'Brügge' }]
  },
  {
    id: 'h15',
    title: 'Salz aus Lüneburg – Weißes Gold',
    content:
      'Ohne Salz konnte man Fisch und Fleisch nicht haltbar machen. Die Solequellen von Lüneburg standen praktisch unter Kontrolle der Hanse. Wer Salz wollte, musste mit ihr handeln – damit kontrollierte sie ganze Versorgungsketten von der Mine bis zum Teller.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/salt.jpg', title: 'Salz' }]
  },
  {
    id: 'h22',
    title: 'Niedergang durch neue Konkurrenten',
    content:
      'Im 16. Jahrhundert schoben sich Holland und England mit billigen Schiffen und Atlantikhandel nach vorne. Nach der Entdeckung Amerikas verlagerte sich der wichtigste Handel vom Ostseeraum in den Atlantik. Immer mehr Städte verließen die Hanse – 1669 kamen nur noch neun zum letzten Hansetag.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/decline.jpg', title: 'Niedergang' }]
  },
  {
    id: 'h23',
    title: 'Erbe der Hanse',
    content:
      'Verträge, Schiedsgerichte, Seehandelsrecht – vieles, was die Hanse entwickelte, klingt heute vertraut. Städte wie Lübeck, Hamburg und Bremen blieben reich. Das Wort „Hanse“ lebt weiter, zum Beispiel in „Lufthansa“. Die Idee: Ein wirtschaftlicher Bund ist oft stärker als ein einzelner Staat.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/legacy.jpg', title: 'Erbe' }]
  }
]

export const hansaMonopolyFinalQuizDE: QuizBlock = {
  id: 'quiz-hansa-monopoly',
  title: 'Abschlussquiz: Hanse – Kartell und Monopol',
  questions: [
    {
      id: 'final-h-de-1',
      text: 'Was war die Hanse in erster Linie?',
      type: 'multiple-choice',
      options: ['Ein Königreich', 'Ein Städtebund und Handelskartell', 'Ein Ritterorden', 'Ein Klosterbund'],
      correctAnswer: 1,
      explanation: 'Die Hanse war ein Bund von Städten, die gemeinsam Handel und Preise organisierten.'
    },
    {
      id: 'final-h-de-2',
      text: 'Warum war Lübeck so wichtig für die Hanse?',
      type: 'multiple-choice',
      options: [
        'Es war die einzige Hafenstadt',
        'Dort saßen die wichtigsten Kaufleute und Entscheidungen',
        'Dort stand der Papstpalast',
        'Dort gab es Goldminen'
      ],
      correctAnswer: 1,
      explanation: 'In Lübeck trafen sich die führenden Kaufleute und legten die Politik der Hanse fest.'
    },
    {
      id: 'final-h-de-3',
      text: 'Was ist ein „Kontor“?',
      type: 'multiple-choice',
      options: [
        'Ein Kriegsschiff',
        'Ein befestigtes Handelsviertel der Hanse im Ausland',
        'Eine Steuer',
        'Ein mittelalterlicher Computer'
      ],
      correctAnswer: 1,
      explanation: 'Kontore waren geschlossene Viertel mit eigenen Regeln und Lagern.'
    },
    {
      id: 'final-h-de-4',
      text: 'Warum nannte man Hering „Öl des Mittelalters“?',
      type: 'multiple-choice',
      options: [
        'Weil er gekocht wurde',
        'Weil alle ihn hassten',
        'Weil er billig war und lange haltbar – Grundnahrungsmittel',
        'Weil er selten war'
      ],
      correctAnswer: 2,
      explanation: 'Gepökelter Hering war in der Fastenzeit ein zentrales Lebensmittel.'
    },
    {
      id: 'final-h-de-5',
      text: 'Wie setzte die Hanse ihre Interessen gegenüber Königen durch?',
      type: 'multiple-choice',
      options: ['Mit großen Armeen', 'Mit Kreuzzügen', 'Mit Blockaden und Handelsboykott', 'Mit Predigten'],
      correctAnswer: 2,
      explanation: 'Sie nutzte Blockaden: kein Handel, keine Zölle, kein Essen – der Druck war enorm.'
    },
    {
      id: 'final-h-de-6',
      text: 'Welcher Rohstoff aus Lüneburg war für die Hanse besonders wichtig?',
      type: 'multiple-choice',
      options: ['Gold', 'Eisen', 'Salz', 'Wein'],
      correctAnswer: 2,
      explanation: 'Salz war für Konservierung unersetzlich – ohne Salz keine haltbare Nahrung.'
    },
    {
      id: 'final-h-de-7',
      text: 'Warum verlor die Hanse im 16. Jahrhundert an Bedeutung?',
      type: 'multiple-choice',
      options: [
        'Wegen der Pest',
        'Wegen Religionskriegen',
        'Wegen neuer Konkurrenten und Atlantikhandel',
        'Weil niemand mehr Fisch mochte'
      ],
      correctAnswer: 2,
      explanation:
        'Holländer und Engländer dominierten mit neuen Routen und billigen Schiffen den Atlantikhandel.'
    },
    {
      id: 'final-h-de-8',
      text: 'Was ist eine wichtige Lehre aus der Geschichte der Hanse?',
      type: 'multiple-choice',
      options: [
        'Nur Religion zählt',
        'Wirtschaftliche Bündnisse können mächtiger sein als Armeen',
        'Städte sind unwichtig',
        'Monopole sind immer stabil'
      ],
      correctAnswer: 1,
      explanation:
        'Die Hanse zeigt, dass koordinierter Handel Macht über ganze Königreiche geben kann – ganz ohne eigene Armee.'
    },
    {
      id: 'final-h-de-9',
      text: 'Was verband die Hanse mit modernen Kartellen wie OPEC?',
      type: 'multiple-choice',
      options: [
        'Sie handelten alle mit Öl',
        'Sie bestimmten Angebot und Preise eines wichtigen Gutes',
        'Sie waren Demokratien',
        'Sie hatten gemeinsame Armeen'
      ],
      correctAnswer: 1,
      explanation: 'Sowohl die Hanse als auch OPEC regulieren Mengen und Preise zentral über ein Bündnis.'
    },
    {
      id: 'final-h-de-10',
      text: 'Warum gilt die Hanse als Vorläufer der Globalisierung?',
      type: 'multiple-choice',
      options: [
        'Weil sie Flugzeuge nutzte',
        'Weil sie nur lokal handelte',
        'Weil sie ein dichtes Netz von Städten und Handelswegen über Ländergrenzen schuf',
        'Weil sie nichts mit Handel zu tun hatte'
      ],
      correctAnswer: 2,
      explanation: 'Die Hanse verband viele Regionen in einem gemeinsamen Wirtschaftsraum – ähnlich wie heutige Handelsblöcke.'
    }
  ]
}

