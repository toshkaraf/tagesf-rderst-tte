import { Slide } from '../types/session'

const media = (n: number, file: string, title: string) => ({
  type: 'image' as const,
  url: `/media/american-court-disorder/${String(n).padStart(2, '0')}-${file}.jpg`,
  title
})

export const americanCourtDisorderSlidesDE: Slide[] = [
  {
    id: 'acd1',
    title: 'Über das Buch',
    content:
      'Das Buch «Disorder in the American Courts» (deutsch oft: «Chaos in amerikanischen Gerichten») erscheint regelmäßig neu und wird ergänzt. Darin stehen echte Sätze aus amerikanischen Gerichtssälen — Wort für Wort von Gerichtsstenografen aufgeschrieben.',
    duration: 3,
    media: [media(1, 'book-disorder-american-courts', 'Das Buch')]
  },
  {
    id: 'acd2',
    title: '36 Fuß und 2 Zoll',
    content:
      '— Wie weit waren Sie in diesem Moment vom Unfallort entfernt?\n— 36 Fuß und 2¼ Zoll.\n— Das kann nicht sein. Wie können Sie das so genau sagen?\n— Ich wusste, dass irgendein Dummkopf das fragen würde. Deshalb habe ich gemessen.',
    duration: 3,
    media: [media(2, 'court-witness-measurement', 'Zeuge')]
  },
  {
    id: 'acd3',
    title: 'Geburtsdatum',
    content: '— Ihr Geburtsdatum?\n— 15. Juli.\n— Welches Jahr?\n— Jedes Jahr.',
    duration: 3,
    media: [media(3, 'court-birthday-question', 'Geburtsdatum')]
  },
  {
    id: 'acd4',
    title: 'Wo bin ich, Doris?',
    content:
      '— Was sagte Ihr Mann als Erstes, als er an diesem Morgen aufwachte?\n— Er fragte: «Wo bin ich, Doris?»\n— Und warum hat Sie das beunruhigt?\n— Ich heiße Susan.',
    duration: 3,
    media: [media(4, 'court-husband-doris', 'Morgen')]
  },
  {
    id: 'acd5',
    title: 'Drei Kinder',
    content:
      '— Sie hatte drei Kinder, richtig?\n— Ja.\n— Wie viele davon waren Jungen?\n— Keinen.\n— Und Mädchen?',
    duration: 3,
    media: [media(5, 'court-three-children', 'Kinder')]
  },
  {
    id: 'acd6',
    title: 'Sexuell aktiv',
    content: '— Sind Sie sexuell aktiv?\n— Nein, ich liege meistens nur.',
    duration: 3,
    media: [media(6, 'court-witness-lying', 'Zeuge')]
  },
  {
    id: 'acd7',
    title: 'Kopf über den Schultern',
    content:
      '— Konnten Sie ihn von Ihrem Standort aus sehen?\n— Ich konnte seinen Kopf sehen.\n— Und wo war sein Kopf?\n— Direkt über seinen Schultern.',
    duration: 3,
    media: [media(7, 'court-head-shoulders', 'Sicht')]
  },
  {
    id: 'acd8',
    title: 'Erste Ehe',
    content:
      '— Warum endete Ihre erste Ehe?\n— Wegen eines Todes.\n— Wessen Tod?',
    duration: 3,
    media: [media(8, 'court-marriage-death', 'Ehe')]
  },
  {
    id: 'acd9',
    title: 'Tod im Schlaf',
    content:
      '— Doktor, stimmt es, dass ein Mensch, der im Schlaf stirbt, es erst am nächsten Morgen merkt?\n— Haben Sie die Anwaltsprüfung wirklich bestanden?',
    duration: 3,
    media: [media(9, 'court-doctor-bar-exam', 'Doktor')]
  },
  {
    id: 'acd10',
    title: 'Meilenstein 499',
    content:
      '— Wo liegt der Unfallort?\n— In der Nähe des Meilensteins 499.\n— Und wo ist der Meilenstein 499?\n— Irgendwo zwischen Meilenstein 498 und Meilenstein 500.',
    duration: 3,
    media: [media(10, 'court-mile-marker', 'Meilenstein')]
  },
  {
    id: 'acd11',
    title: 'Myasthenia und Gedächtnis',
    content:
      '— Beeinflusst diese Myasthenia gravis (Muskelschwäche) Ihr Gedächtnis?\n— Ja.\n— Wie genau?\n— Ich vergesse.\n— Sie vergessen? Können Sie ein Beispiel nennen, was Sie vergessen haben?',
    duration: 3,
    media: [media(11, 'court-memory-forget', 'Gedächtnis')]
  },
  {
    id: 'acd12',
    title: 'Hat er Sie getötet?',
    content: '— Hat er Sie getötet?',
    duration: 3,
    media: [media(12, 'court-did-he-kill-you', 'Frage')]
  },
  {
    id: 'acd13',
    title: 'Beschreiben Sie es',
    content:
      '— Sie wissen nicht, was es war, und Sie wissen nicht, wie es aussieht — aber könnten Sie es trotzdem beschreiben?',
    duration: 3,
    media: [media(13, 'court-describe-unknown', 'Beschreibung')]
  },
  {
    id: 'acd14',
    title: 'Das ganze Leben in der Stadt',
    content: '— Haben Sie Ihr ganzes Leben in dieser Stadt gelebt?\n— Noch nicht.',
    duration: 3,
    media: [media(14, 'court-lived-city', 'Stadt')]
  },
  {
    id: 'acd15',
    title: 'Abstand zwischen den Autos',
    content: '— Wie weit standen die Autos beim Zusammenstoß voneinander entfernt?',
    duration: 3,
    media: [media(15, 'court-cars-collision', 'Unfall')]
  },
  {
    id: 'acd16',
    title: 'Bis Sie gingen',
    content: '— Sie waren dort, bis Sie gingen, nicht wahr?',
    duration: 3,
    media: [media(16, 'court-until-you-left', 'Anwesenheit')]
  },
  {
    id: 'acd17',
    title: 'Vor oder nach dem Tod',
    content:
      '— Kannten Sie den Verstorbenen?\n— Ja, Sir.\n— Vor oder nach seinem Tod?',
    duration: 3,
    media: [media(17, 'court-knew-deceased', 'Verstorbener')]
  },
  {
    id: 'acd18',
    title: 'Klug und ehrlich',
    content:
      '— Ich nehme an, Sie sind ein kluger und ehrlicher Mensch...\n— Danke. Wäre ich nicht unter Eid, hätte ich Ihnen dasselbe Kompliment gegeben.',
    duration: 3,
    media: [media(18, 'court-honest-man-compliment', 'Kompliment')]
  },
  {
    id: 'acd19',
    title: 'Gehirn im Glas',
    content:
      '— Doktor, haben Sie vor der Obduktion den Puls geprüft?\n— Nein.\n— Den Blutdruck?\n— Nein.\n— Ob er atmete?\n— Nein.\n— War der Patient dann vielleicht lebendig, als Sie begannen?\n— Nein.\n— Warum sind Sie so sicher?\n— Weil sein Gehirn in einem Glas auf meinem Schreibtisch lag.\n— Verstehe... Konnte der Patient trotzdem noch leben?\n— Ja. Vielleicht lebte er noch und arbeitete sogar als Anwalt.',
    duration: 3,
    media: [media(19, 'court-autopsy-brains-jar', 'Obduktion')]
  }
]
