import { Slide, QuizBlock } from '../types/session'

// Deutsche Inhalte (B1–B2): „Kreuzzüge – finanzieller Ruin“
// Hinweis: Dies ist zunächst eine kompakte Version, damit die deutsche
// Session wieder funktioniert. Wir können sie später bei Bedarf erweitern.

export const crusadesFinanceSlidesDE: Slide[] = [
  {
    id: 'cr1',
    title: 'Kreuzzüge – kein Ruhm, sondern Ruin',
    content:
      'Filme zeigen Kreuzzüge als Heldentaten im Namen des Glaubens. In Wirklichkeit waren sie für viele Ritter ein finanzielles Selbstmordprojekt. Ein Feldzug kostete 5–10 Jahreseinkommen und viele kamen nie zurück – oder kehrten als Bettler heim.',
    duration: 3,
    media: [{ type: 'image', url: '/media/crusades-finance/crusader-main.jpg', title: 'Kreuzritter' }]
  },
  {
    id: 'cr2',
    title: 'Was kostete ein Kreuzzug?',
    content:
      'Ausrüstung, Rüstung, Pferd, Schiffspassage und Vorräte: Für einen Ritter bedeutete das mehrere hundert Pfund Silber. Für einen durchschnittlichen Adligen entsprach das 5–10 Jahreseinkommen. Ökonomisch war ein Kreuzzug so riskant wie heute ein Haus zu verkaufen, um in ein einziges Start-up zu investieren.',
    duration: 3,
    media: [{ type: 'image', url: '/media/crusades-finance/cost.jpg', title: 'Kosten des Kreuzzugs' }]
  },
  {
    id: 'cr3',
    title: 'Verkauf und Verpfändung von Land',
    content:
      'Um das Geld zusammenzubekommen, verkauften oder verpfändeten Ritter ihr Land weit unter Wert. Käufer – oft Bischöfe und Klöster – wussten: Viele Kreuzfahrer kehren nicht zurück. So verlor der Adel Grundbesitz, während die Kirche still und leise riesige Ländereien sammelte.',
    duration: 3,
    media: [{ type: 'image', url: '/media/crusades-finance/land-sale.jpg', title: 'Landverkauf' }]
  },
  {
    id: 'cr5',
    title: 'Schuldenfalle: Kredite mit 30–50 % Zinsen',
    content:
      'Wer kein Land verkaufen wollte, nahm Kredite auf. Italienische und jüdische Geldverleiher verlangten 30–50 % Zinsen pro Jahr. Ein Feldzug dauerte mehrere Jahre – die Schulden explodierten. Viele Ritter verloren nach der Rückkehr alles an ihre Gläubiger.',
    duration: 3,
    media: [{ type: 'image', url: '/media/crusades-finance/debt.jpg', title: 'Schulden' }]
  },
  {
    id: 'cr7',
    title: 'Venedig – Reederei und Bank zugleich',
    content:
      'Venedig stellte Schiffe für ganze Heere. Der Preis war extrem hoch. Als Kreuzfahrer die vereinbarte Summe nicht zahlen konnten, verwandelte Venedig den „heiligen“ Krieg in ein Geschäft: Wer zahlt nicht, muss Städte für die Serenissima erobern.',
    duration: 3,
    media: [{ type: 'image', url: '/media/crusades-finance/venice.jpg', title: 'Venedig' }]
  },
  {
    id: 'cr8',
    title: 'Plünderung von Konstantinopel 1204',
    content:
      'Statt nach Jerusalem zogen Kreuzfahrer 1204 gegen Konstantinopel – die Hauptstadt des christlichen Byzanz. Drei Tage lang plünderten sie Paläste, Kirchen und Schätze. Venedig erhielt Häfen, Inseln und Gold. Für das „Heilige Land“ blieb kaum etwas übrig.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/crusades-finance/constantinople-sack.jpg',
        title: 'Plünderung von Konstantinopel'
      }
    ]
  },
  {
    id: 'cr12',
    title: 'Templer – Mönche und Bankiers',
    content:
      'Der Templerorden schützte nicht nur Pilger, sondern verwahrte auch ihr Geld. Man zahlte in Paris ein und bekam in Akkon oder Jerusalem einen Scheck. So wurden die Templer zu einer der reichsten Banken Europas – bis ein verschuldeter König sie vernichten ließ.',
    duration: 3,
    media: [{ type: 'image', url: '/media/crusades-finance/templars.jpg', title: 'Templer' }]
  },
  {
    id: 'cr15',
    title: 'Saladinszehnt – Steuer für den „heiligen Krieg“',
    content:
      'Nach dem Sieg Saladins über Jerusalem führten Könige in England und Frankreich den „Saladinszehnt“ ein: 10 % auf Einkommen und Besitz. Für einfache Leute war das eine harte Sondersteuer, für die Herrscher eine Möglichkeit, den Krieg von der Bevölkerung finanzieren zu lassen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/crusades-finance/saladin-tithe.jpg', title: 'Saladinszehnt' }]
  },
  {
    id: 'cr18',
    title: 'Kinderkreuzzug – Glaube als Geschäft',
    content:
      '1212 brachen Tausende Kinder nach Süden auf, überzeugt, dass Gott ihnen das Meer öffnen würde. In Wirklichkeit organisierten Betrüger Schiffe und verkauften viele Kinder als Sklaven in Nordafrika. Der „fromme“ Eifer wurde eiskalt in Profit verwandelt.',
    duration: 3,
    media: [{ type: 'image', url: '/media/crusades-finance/childrens-crusade.jpg', title: 'Kinderkreuzzug' }]
  },
  {
    id: 'cr26',
    title: 'Wer gewann am meisten?',
    content:
      'Verlierer: verarmte Ritter, ausgeblutete Königreiche und zerstörte Städte. Gewinner: Kirche mit neuen Ländereien und Ablasshandel, Handelsstädte wie Venedig und Genua sowie frühe Bankiers. Kreuzzüge wirkten wie ein gigantischer Umverteilungsmechanismus von unten nach oben.',
    duration: 3,
    media: [{ type: 'image', url: '/media/crusades-finance/church-wealth.jpg', title: 'Reichtum der Kirche' }]
  },
  {
    id: 'cr30',
    title: 'Fazit: Geld wichtiger als Ideologie',
    content:
      'Offiziell kämpfte man „für Gott und das Heilige Grab“. In der Praxis entschieden Kredite, Transportverträge und Schulden, wohin Heere zogen und wen sie plünderten. Die Kreuzzüge zeigen brutal: Ohne Geld gibt es keinen „heiligen Krieg“, und am Ende gewinnen meist nicht die Frommen, sondern die Finanzierer.',
    duration: 3,
    media: [{ type: 'image', url: '/media/crusades-finance/conclusion.jpg', title: 'Schluss' }]
  }
]

export const crusadesFinanceFinalQuizDE: QuizBlock = {
  id: 'quiz-crusades-finance',
  title: 'Abschlussquiz: Kreuzzüge – finanzieller Ruin',
  questions: [
    {
      id: 'final-cr-de-1',
      text: 'Wie teuer war ein Kreuzzug für einen durchschnittlichen Ritter?',
      type: 'multiple-choice',
      options: ['Ein Monatseinkommen', 'Ein Jahreseinkommen', '5–10 Jahreseinkommen', 'Fast nichts'],
      correctAnswer: 2,
      explanation: 'Ausrüstung, Reise und Versorgung verschlangen mehrere Jahreseinkommen.'
    },
    {
      id: 'final-cr-de-2',
      text: 'Wer kaufte viele Güter der Kreuzfahrer weit unter Wert?',
      type: 'multiple-choice',
      options: ['Bauern', 'Stadtbewohner', 'Kirche und Klöster', 'Muslimische Händler'],
      correctAnswer: 2,
      explanation: 'Bischöfe und Klöster nutzten die Notlage und vergrößerten ihren Besitz.'
    },
    {
      id: 'final-cr-de-3',
      text: 'Welche Rolle spielte Venedig bei den Kreuzzügen?',
      type: 'multiple-choice',
      options: [
        'Nur religiöser Partner',
        'Reederei und Finanzier, die am Transport verdiente',
        'Feind der Kreuzfahrer',
        'Neutrale Beobachter'
      ],
      correctAnswer: 1,
      explanation: 'Venedig stellte Schiffe und nutzte Zahlungsprobleme, um politische Ziele durchzusetzen.'
    },
    {
      id: 'final-cr-de-4',
      text: 'Was geschah 1204 in Konstantinopel?',
      type: 'multiple-choice',
      options: [
        'Die Stadt wurde befreit',
        'Es fand ein Konzil statt',
        'Sie wurde von Kreuzfahrern geplündert',
        'Nichts Besonderes'
      ],
      correctAnswer: 2,
      explanation: 'Kreuzfahrer plünderten eine christliche Hauptstadt, um Schulden zu bezahlen.'
    },
    {
      id: 'final-cr-de-5',
      text: 'Wie funktionierte das „Bankensystem“ der Templer?',
      type: 'multiple-choice',
      options: [
        'Nur Bargeld in Truhen',
        'Sie stellten Schecks zwischen verschiedenen Städten aus',
        'Sie verliehen nur Naturalien',
        'Sie tauschten nur Münzen'
      ],
      correctAnswer: 1,
      explanation: 'Man zahlte an einem Ort ein und bekam anderswo Geld – ein Vorläufer moderner Überweisungen.'
    },
    {
      id: 'final-cr-de-6',
      text: 'Was war der „Saladinszehnt“?',
      type: 'multiple-choice',
      options: [
        'Ein Geschenk an Saladin',
        'Eine 10-%-Steuer zur Finanzierung des Kreuzzugs',
        'Eine neue Münze',
        'Eine Art von Strafe'
      ],
      correctAnswer: 1,
      explanation: 'Die 10-%-Steuer auf Einkommen und Besitz sollte den Dritten Kreuzzug finanzieren.'
    },
    {
      id: 'final-cr-de-7',
      text: 'Was zeigt der Kinderkreuzzug von 1212 am deutlichsten?',
      type: 'multiple-choice',
      options: [
        'Mut der Kinder',
        'Militärische Stärke',
        'Wie leicht Glaube für Geschäfte missbraucht werden kann',
        'Erfolg der Kirche'
      ],
      correctAnswer: 2,
      explanation: 'Fanatischer Glaube wurde von Menschenhändlern in bares Geld verwandelt.'
    },
    {
      id: 'final-cr-de-8',
      text: 'Wer profitierte am meisten langfristig von den Kreuzzügen?',
      type: 'multiple-choice',
      options: ['Ritter', 'Einfache Bauern', 'Kirche und Handelsstädte', 'Muslimische Bauern'],
      correctAnswer: 2,
      explanation: 'Kirche, Venedig, Genua und Bankiers gewannen an Macht und Reichtum.'
    },
    {
      id: 'final-cr-de-9',
      text: 'Was ist die wichtigste ökonomische Lehre aus den Kreuzzügen?',
      type: 'multiple-choice',
      options: [
        'Ideologie ist wichtiger als Geld',
        'Ohne stabile Finanzen gibt es keinen langen Krieg',
        'Schulden sind harmlos',
        'Glaube schützt vor Bankrott'
      ],
      correctAnswer: 1,
      explanation: 'Finanzierung, Kredite und Schulden entschieden über Erfolg oder Scheitern.'
    },
    {
      id: 'final-cr-de-10',
      text: 'Warum sprechen Historiker manchmal von „finanziellem Selbstmord“?',
      type: 'multiple-choice',
      options: [
        'Weil Soldaten schlecht ausgebildet waren',
        'Weil die meisten Ritter ihr Vermögen verloren',
        'Weil niemand kämpfen wollte',
        'Weil die Reisen zu kurz waren'
      ],
      correctAnswer: 1,
      explanation: 'Viele Adlige verkauften oder verpfändeten alles für einen einzigen Feldzug.'
    }
  ]
}

