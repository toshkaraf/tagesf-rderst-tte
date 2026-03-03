import { Slide, QuizBlock } from '../types/session'

// Deutsche Inhalte (B1–B2) für:
// „Чёрная смерть: экономический переворот“ / „Schwarzer Tod: Wirtschaftliche Revolution“

export const blackDeathEconomySlidesDE: Slide[] = [
  {
    id: 'bd1',
    title: 'Der Schwarze Tod – ein Drittel Europas verschwindet',
    content:
      'Zwischen 1347 und 1353 tötete die Pest 75–200 Millionen Menschen. Europa verlor etwa 30–60 % seiner Bevölkerung. Ganze Dörfer verschwanden, Städte leerten sich. Noch wichtiger: Die Wirtschaft wurde auf den Kopf gestellt – Arbeitskräftemangel, steigende Löhne und das Ende des Feudalismus.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/plague-main.jpg', title: 'Schwarzer Tod' }]
  },
  {
    id: 'bd2',
    title: 'Vor der Pest: billige Arbeit, viele Menschen',
    content:
      'Im frühen 14. Jahrhundert war Europa überbevölkert: Viele Menschen, wenig Land, Hungerkrisen. Arbeitskraft war billig; Bauern arbeiteten oft nur für Essen. Die Grundherren bestimmten alles. Die Pest änderte das Verhältnis: plötzlich viel Land, aber wenige Menschen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/before-plague.jpg', title: 'Vor der Pest' }]
  },
  {
    id: 'bd3',
    title: 'Nach der Pest: Arbeitskräftemangel',
    content:
      'Nach der ersten Welle wuchsen Gras auf Feldern und Häuser verfielen – es fehlten Hände. Wer überlebt hatte, konnte Bedingungen stellen: „Zahl mir mehr, sonst arbeite ich beim Nachbarn.“ Ohne Arbeitskräfte war Land wertlos. Macht wanderte von den Herren zu den Arbeitern.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/after-plague.jpg', title: 'Nach der Pest' }]
  },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-bd-1-1-de',
        text: 'Wie viele Menschen starben ungefähr am Schwarzen Tod?',
        type: 'multiple-choice',
        options: ['10 Mio.', '30 Mio.', '75–200 Mio.', '500 Mio.'],
        correctAnswer: 2,
        explanation: 'Schätzungen liegen zwischen 75 und 200 Millionen Toten.'
      },
      {
        id: 'q-bd-1-2-de',
        text: 'Wie veränderte sich die Wirtschaft nach der Pest?',
        type: 'multiple-choice',
        options: [
          'Es passierte nichts',
          'Es gab zu viele Arbeiter',
          'Arbeitskräfte wurden knapp, Löhne stiegen',
          'Land wurde knapp'
        ],
        correctAnswer: 2,
        explanation: 'Weniger Menschen bedeuteten höhere Löhne und mehr Verhandlungsmacht.'
      },
      {
        id: 'q-bd-1-3-de',
        text: 'Was wurde plötzlich „Gold“ der Wirtschaft?',
        type: 'multiple-choice',
        options: ['Land', 'Arbeitskraft', 'Waffen', 'Gold selbst'],
        correctAnswer: 1,
        explanation: 'Arbeitskraft wurde wertvoller als Land.'
      }
    ]
  },
  {
    id: 'bd4',
    title: 'Humor: „Der Herr wird arm, der Bauer reich“',
    content:
      'Vor der Pest: Grundherr – „Arbeite für mich oder verhungere.“ Bauer – „Ja, Herr.“ Nach der Pest: Bauer – „Zahl dreifachen Lohn, sonst gehe ich.“ Herr – „Das ist Erpressung!“ Bauer – „Nein, das ist der Arbeitsmarkt.“ Die Welt stand Kopf.',
    duration: 3
  },
  {
    id: 'bd5',
    title: 'Löhne steigen um das Drei- bis Vierfache',
    content:
      'Vor der Pest: vielleicht 2 Pennies pro Tag. Danach 6–8 Pennies. Löhne stiegen drei- bis vierfach. Viele Grundherren konnten das nicht bezahlen. Bauern suchten sich einfach den bestzahlenden Herrn aus – zum ersten Mal entstand ein „Arbeitsmarkt“.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/wages.jpg', title: 'Lohnanstieg' }]
  },
  {
    id: 'bd6',
    title: 'England: Statut der Arbeiter (1351)',
    content:
      'Der englische Staat versuchte, das Rad zurückzudrehen. 1351 legte das „Statute of Labourers“ fest: Löhne dürfen nicht höher sein als vor der Pest. Wer mehr verlangte, sollte bestraft werden. Das Gesetz funktionierte schlecht: Es gab zu wenige Arbeiter, Nachfrage war stärker als Paragraphen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/statute-laborers.jpg', title: 'Statut der Arbeiter' }]
  },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-bd-2-1-de',
        text: 'Um wie viel stiegen die Löhne nach der Pest ungefähr?',
        type: 'multiple-choice',
        options: ['Sie sanken', 'Sie blieben gleich', '3–4 mal höher', '10 mal höher'],
        correctAnswer: 2,
        explanation: 'Weniger Arbeiter bedeuteten viel höhere Löhne.'
      },
      {
        id: 'q-bd-2-2-de',
        text: 'Was versuchte das englische „Statute of Labourers“?',
        type: 'multiple-choice',
        options: [
          'Steuern zu senken',
          'Löhne auf Vorkrisenniveau festzufrieren',
          'Neue Felder zu öffnen',
          'Sklaverei einzuführen'
        ],
        correctAnswer: 1,
        explanation: 'Das Gesetz sollte hohe Löhne verbieten.'
      },
      {
        id: 'q-bd-2-3-de',
        text: 'Warum funktionierte das Gesetz schlecht?',
        type: 'multiple-choice',
        options: ['Weil niemand davon wusste', 'Weil es zu viele Arbeiter gab', 'Weil Arbeiter knapp und begehrt waren', 'Weil der König dagegen war'],
        correctAnswer: 2,
        explanation: 'Hohe Nachfrage nach Arbeitern setzte sich gegen Verbote durch.'
      }
    ]
  },
  {
    id: 'bd7',
    title: 'Bauern laufen ihren Herren davon',
    content:
      'Leibeigene Bauern waren eigentlich an das Land gebunden. Nach der Pest flohen viele einfach zu Grundherren, die besser zahlten. Beschwerden der Adeligen halfen wenig – niemand konnte Zehntausende Flüchtige einfangen. Die Leibeigenschaft begann zu bröckeln.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/peasants-flee.jpg', title: 'Fliehende Bauern' }]
  },
  {
    id: 'bd8',
    title: 'Frankreich: Der Aufstand der Jacquerie (1358)',
    content:
      '1358 erhoben sich französische Bauern in der „Jacquerie“. Adlige wollten Abgaben erhöhen und alte Pflichten zurückbringen. Bauern antworteten mit Gewalt: Sie verbrannten Burgen und töteten Adlige. Der Aufstand wurde brutal niedergeschlagen – aber die Botschaft war klar: Die Zeit der absoluten Herrschaft war vorbei.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/jacquerie.jpg', title: 'Jacquerie' }]
  },
  {
    id: 'bd9',
    title: 'Humor: „Herr ohne Bauern – reicher Bettler im Schloss“',
    content:
      'Herr: „Ich habe 1000 Hektar Land, ein Schloss, einen Titel.“ Nachbar: „Und wie viele Bauern?“ Herr: „Die meisten sind an der Pest gestorben.“ Nachbar: „Dann bist du ein armer Mann mit großem Haus.“ Ohne Arbeitskräfte ist selbst ein Schloss nur teurer Stein.',
    duration: 3
  },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-bd-3-1-de',
        text: 'Warum flohen viele Bauern von ihren Höfen?',
        type: 'multiple-choice',
        options: ['Aus Langeweile', 'Weil woanders mehr Lohn gezahlt wurde', 'Wegen des Wetters', 'Wegen Kriegen'],
        correctAnswer: 1,
        explanation: 'Sie suchten bessere Bedingungen – ein neuer Arbeitsmarkt entstand.'
      },
      {
        id: 'q-bd-3-2-de',
        text: 'Wann kam es zur Jacquerie in Frankreich?',
        type: 'multiple-choice',
        options: ['1300', '1358', '1400', '1500'],
        correctAnswer: 1,
        explanation: 'Die Jacquerie fand 1358 statt.'
      },
      {
        id: 'q-bd-3-3-de',
        text: 'Wogegen richteten sich die Bauernaufstände?',
        type: 'multiple-choice',
        options: ['Gegen neue Steuern und alte Pflichten', 'Gegen Märkte', 'Gegen Kirchen', 'Gegen Nachbarn'],
        correctAnswer: 0,
        explanation: 'Bauern wehrten sich gegen Versuche, die alte Ordnung komplett zurückzubringen.'
      }
    ]
  },
  {
    id: 'bd10',
    title: 'England: Bauernaufstand unter Wat Tyler (1381)',
    content:
      '1381 erhob sich in England ein gewaltiger Bauernaufstand. Auslöser war eine Kopfsteuer: Arm und Reich sollten gleich viel zahlen. Zehntausende zogen nach London, angeführt von Wat Tyler. Sie forderten die Abschaffung der Leibeigenschaft, niedrigere Steuern und Strafe für korrupte Beamte.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/wat-tyler.jpg', title: 'Wat Tyler' }]
  },
  {
    id: 'bd11',
    title: '„Als Adam pflügte…“ – Gleichheitsidee',
    content:
      'Der Priester John Ball unterstützte den Aufstand mit radikalen Predigten: „Als Adam pflügte und Eva spann, wer war dann ein Edelmann?“ Seine Botschaft: Gott schuf alle Menschen gleich. Für das 14. Jahrhundert war das eine gefährliche Idee. Ball wurde hingerichtet, aber seine Worte lebten weiter.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/john-ball.jpg', title: 'John Ball' }]
  },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-bd-4-1-de',
        text: 'Wann fand der Aufstand unter Wat Tyler statt?',
        type: 'multiple-choice',
        options: ['1300', '1358', '1381', '1400'],
        correctAnswer: 2,
        explanation: 'Der englische Bauernaufstand war 1381.'
      },
      {
        id: 'q-bd-4-2-de',
        text: 'Was kritisierte John Ball mit seinem Satz über Adam und Eva?',
        type: 'multiple-choice',
        options: [
          'Die Landwirtschaft',
          'Die Idee, dass Adlige „besser“ sind',
          'Die Kirche',
          'Die Stadt'
        ],
        correctAnswer: 1,
        explanation: 'Er stellte die natürliche Ungleichheit in Frage.'
      },
      {
        id: 'q-bd-4-3-de',
        text: 'Was forderten die Aufständischen in England?',
        type: 'multiple-choice',
        options: [
          'Mehr Kriege',
          'Abschaffung der Leibeigenschaft und niedrigere Steuern',
          'Neue Burgen',
          'Mehr Feiertage'
        ],
        correctAnswer: 1,
        explanation: 'Sie kämpften für Freiheit und Entlastung der Armen.'
      }
    ]
  },
  {
    id: 'bd12',
    title: 'Humor: „Der König versprach – der König log“',
    content:
      'Der junge König Richard II. versprach den Aufständischen in London Reformen, um sie zu beruhigen. Nachdem sie nach Hause gegangen waren, ließ er die Anführer verhaften und hinrichten. Mittelalterliche Politik: erst zusagen, dann Köpfe rollen lassen.',
    duration: 3
  },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-bd-5-1-de',
        text: 'Was geschah mit Wat Tyler?',
        type: 'multiple-choice',
        options: ['Er wurde König', 'Er wurde getötet', 'Er floh ins Ausland', 'Er wurde Priester'],
        correctAnswer: 1,
        explanation: 'Er wurde während Verhandlungen erstochen.'
      },
      {
        id: 'q-bd-5-2-de',
        text: 'Hielt der König seine Versprechen?',
        type: 'multiple-choice',
        options: ['Ja', 'Nein, er brach sie schnell', 'Teilweise', 'Unklar'],
        correctAnswer: 1,
        explanation: 'Die Reformzusagen wurden zurückgenommen, die Führung hingerichtet.'
      },
      {
        id: 'q-bd-5-3-de',
        text: 'Was passierte langfristig mit der Leibeigenschaft?',
        type: 'multiple-choice',
        options: ['Sie wurde sofort abgeschafft', 'Sie verschwand langsam', 'Sie wurde stärker', 'Sie blieb unverändert'],
        correctAnswer: 1,
        explanation: 'Ökonomische Kräfte lösten sie Schritt für Schritt auf.'
      }
    ]
  },
  {
    id: 'bd13',
    title: 'Sinkende Bodenpreise, steigende Pachten',
    content:
      'Vor der Pest war Land teuer: Viele wollten es pachten. Danach war Land im Überfluss vorhanden, Menschen aber selten – der Preis für Boden fiel. Grundherren begannen, Land zu verpachten statt unbezahlte Frondienste zu verlangen. Bauern wurden zu Pächtern, nicht zu Leibeigenen – ein Schritt zum Kapitalismus.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/land-prices.jpg', title: 'Bodenpreise' }]
  },
  {
    id: 'bd14',
    title: 'Städte wachsen, Dörfer sterben',
    content:
      'Viele Bauern zogen in die Städte: Dort gab es höhere Löhne, mehr Freiheit und kein Leibeigentum. Städte wurden reich und mächtig, während manche Dörfer ausstarben. Die Urbanisierung beschleunigte das Ende des Mittelalters und den Beginn der Neuzeit.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/urbanization.jpg', title: 'Urbanisierung' }]
  },
  {
    id: 'bd15',
    title: 'Handwerker bestimmen die Preise',
    content:
      'Vor der Pest gab es viele Handwerker und viel Konkurrenz. Nach der Pest waren viele gestorben – wer überlebte, hatte eine Art Monopol. Löhne für Schmiede, Zimmerleute und Steinmetze stiegen stark. Handwerksgilden kontrollierten nun nicht nur Qualität, sondern auch die Politik der Städte.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/craftsmen.jpg', title: 'Handwerker' }]
  },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-bd-6-1-de',
        text: 'Was passierte mit Bodenpreisen nach der Pest?',
        type: 'multiple-choice',
        options: ['Sie stiegen', 'Sie fielen', 'Sie blieben gleich', 'Es gab keinen Boden mehr'],
        correctAnswer: 1,
        explanation: 'Viel Land, aber wenig Pächter – der Preis sank.'
      },
      {
        id: 'q-bd-6-2-de',
        text: 'Wohin zogen viele Bauern?',
        type: 'multiple-choice',
        options: ['In die Berge', 'In die Städte', 'Ins Ausland', 'In Klöster'],
        correctAnswer: 1,
        explanation: 'Städte boten Löhne und Freiheit.'
      },
      {
        id: 'q-bd-6-3-de',
        text: 'Wer wurde nach der Pest politisch einflussreicher?',
        type: 'multiple-choice',
        options: ['Grundherren', 'Handwerker und Gilden', 'Bauern', 'Mönche'],
        correctAnswer: 1,
        explanation: 'Gilden kontrollierten viele Städte.'
      }
    ]
  },
  {
    id: 'bd16',
    title: 'Humor: „Mein Großvater war Leibeigener, ich bin Pächter“',
    content:
      'Großvater: „Ich arbeitete umsonst für den Herrn.“ Enkel: „Ich zahle Pacht und behalte den Rest.“ Großvater: „Wie ist das möglich?“ Enkel: „Die Pest hat die Regeln geändert.“ Großvater: „Schade, dass ich zu früh geboren bin.“ Der Schwarze Tod als grausamer „Aufzug“ nach oben.',
    duration: 3
  },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-bd-7-1-de',
        text: 'Was ersetzte vielerorts Frondienste?',
        type: 'multiple-choice',
        options: ['Sklaverei', 'Geldpacht', 'Mehr Kriege', 'Kirchenarbeit'],
        correctAnswer: 1,
        explanation: 'Bauern zahlten Pacht, statt umsonst zu arbeiten.'
      },
      {
        id: 'q-bd-7-2-de',
        text: 'Wer kontrollierte viele Städte nach der Pest?',
        type: 'multiple-choice',
        options: ['Könige', 'Gilden der Handwerker', 'Bauern', 'Bischöfe'],
        correctAnswer: 1,
        explanation: 'Gilden wurden zur politischen Kraft.'
      },
      {
        id: 'q-bd-7-3-de',
        text: 'Was beschleunigte die Urbanisierung?',
        type: 'multiple-choice',
        options: ['Mehr Kriege', 'Höhere Löhne in Städten', 'Strengere Gesetze', 'Wetter'],
        correctAnswer: 1,
        explanation: 'Städte zogen Menschen mit Löhnen und Freiheit an.'
      }
    ]
  },
  {
    id: 'bd17',
    title: 'Die Kirche verliert Autorität',
    content:
      'Die Pest galt als Strafe Gottes – aber Gebete halfen nicht. Priester starben wie alle anderen. Viele Menschen verloren Vertrauen in die Kirche. Häresien breiteten sich aus, und etwa 150 Jahre später führte die Reformation zu einer Spaltung der westlichen Christenheit.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/church-decline.jpg', title: 'Niedergang der Kirche' }]
  },
  {
    id: 'bd18',
    title: 'Juden als Sündenböcke',
    content:
      'Weil niemand die Ursache der Seuche verstand, suchte man Schuldige. In vielen Städten Europas wurden Juden beschuldigt, Brunnen vergiftet zu haben. Es kam zu Pogromen in Deutschland, Frankreich und Spanien. Tatsächlich starben Juden genauso an der Pest – aber die Angst brauchte Sündenböcke.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/jews.jpg', title: 'Jüdische Gemeinden' }]
  },
  {
    id: 'bd19',
    title: 'Flagellanten – Selbstgeißelung als „Lösung“',
    content:
      'Flagellanten zogen in Prozessionen durch Städte und schlugen sich öffentlich mit Peitschen blutig. Sie glaubten, Gott damit zu besänftigen. Die Kirche sah diese unkontrollierbare Bewegung als Gefahr und verbot sie. Die Flagellanten verschwanden, aber die Panik blieb.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/flagellants.jpg', title: 'Flagellanten' }]
  },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-bd-8-1-de',
        text: 'Warum verlor die Kirche an Autorität?',
        type: 'multiple-choice',
        options: [
          'Weil sie zu reich war',
          'Weil ihre Gebete die Pest nicht stoppten',
          'Weil sie keine Steuern zahlte',
          'Weil sie keine Schulen baute'
        ],
        correctAnswer: 1,
        explanation: 'Die Kirche konnte das zentrale Problem nicht lösen.'
      },
      {
        id: 'q-bd-8-2-de',
        text: 'Wer wurde oft für die Pest verantwortlich gemacht?',
        type: 'multiple-choice',
        options: ['Könige', 'Bauern', 'Juden', 'Mönche'],
        correctAnswer: 2,
        explanation: 'Juden wurden zu Sündenböcken und Opfer von Pogromen.'
      },
      {
        id: 'q-bd-8-3-de',
        text: 'Was taten Flagellanten?',
        type: 'multiple-choice',
        options: [
          'Sie predigten nur',
          'Sie handelten mit Heilmitteln',
          'Sie geißelten sich selbst als Buße',
          'Sie waren Ärzte'
        ],
        correctAnswer: 2,
        explanation: 'Sie hofften, durch Leiden Gottes Zorn zu mindern.'
      }
    ]
  },
  {
    id: 'bd20',
    title: 'Humor: „Die Pest – bester Gewerkschafter der Geschichte“',
    content:
      'Moderner Gewerkschafter: „Wir kämpfen für 5 % mehr Lohn.“ Arbeitgeber: „Auf keinen Fall.“ Schwarzer Tod: „Ich habe ein Drittel der Arbeiter entfernt, die Löhne stiegen um 300 %.“ Gewerkschafter: „Wie hast du das geschafft?“ Pest: „Angebot und Nachfrage.“ Zynischer Wirtschaftskurs.',
    duration: 3
  },
  {
    id: 'q9',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-bd-9-1-de',
        text: 'Was war eine indirekte Folge der Pest für die Religion?',
        type: 'multiple-choice',
        options: ['Stärkung des Papstes', 'Schwächung der Kirche und Weg zur Reformation', 'Ende aller Klöster', 'Mehr Kreuzzüge'],
        correctAnswer: 1,
        explanation: 'Vertrauensverlust bereitete den Boden für spätere Reformen.'
      },
      {
        id: 'q-bd-9-2-de',
        text: 'Was beschreibt der Begriff „Sündenbock“ in diesem Kontext?',
        type: 'multiple-choice',
        options: [
          'Ein medizinischer Fachbegriff',
          'Jemand, dem man die Schuld gibt, obwohl er unschuldig ist',
          'Ein Beruf',
          'Eine Krankheit'
        ],
        correctAnswer: 1,
        explanation: 'Jüdische Gemeinden wurden fälschlich verantwortlich gemacht.'
      },
      {
        id: 'q-bd-9-3-de',
        text: 'Warum verbot die Kirche die Flagellanten?',
        type: 'multiple-choice',
        options: [
          'Weil sie zu laut waren',
          'Weil sie zu viel Geld hatten',
          'Weil sie der Kontrolle der Kirche entglitten',
          'Weil sie nur singen wollten'
        ],
        correctAnswer: 2,
        explanation: 'Unkontrollierbare religiöse Bewegungen sind für Hierarchien gefährlich.'
      }
    ]
  },
  {
    id: 'bd21',
    title: 'Technik statt Menschen',
    content:
      'Hohe Löhne machten Arbeit teuer. Eine Antwort darauf waren technische Lösungen: mehr Wind- und Wassermühlen, raffiniertere Mechanik. Man spricht manchmal von einer „ersten kleinen industriellen Revolution“ im Spätmittelalter – aus reiner Not geboren.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/technology.jpg', title: 'Technik' }]
  },
  {
    id: 'bd22',
    title: 'Schafe statt Bauern – die Einhegungen',
    content:
      'In England rechneten einige Grundherren: Schafe brauchen keinen Lohn und bringen Geld durch Wolle. Felder wurden in Weiden umgewandelt, Bauern von ihrem Land vertrieben – die berühmten „Enclosures“ (Einhegungen) begannen. O-Ton Frühkapitalismus: Tiere lohnen sich mehr als Menschen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/sheep.jpg', title: 'Schafe' }]
  },
  {
    id: 'bd23',
    title: 'Erbschaften – unerwartete Gewinner',
    content:
      'Die Pest zerriss Familien. Überlebende Erben konnten plötzlich ganze Höfe, Häuser oder Werkstätten übernehmen. Jüngere Söhne, die früher leer ausgingen, wurden Besitzer. Auch Frauen erbten häufiger. So entstand langsam ein neuer Mittelstand.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/inheritance.jpg', title: 'Erbschaft' }]
  },
  {
    id: 'q10',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-bd-10-1-de',
        text: 'Warum investierten Grundherren in Technik?',
        type: 'multiple-choice',
        options: [
          'Weil sie Technik liebten',
          'Weil Arbeit billig war',
          'Weil Arbeit teuer und knapp war',
          'Weil Bauern Technik wollten'
        ],
        correctAnswer: 2,
        explanation: 'Maschinen sollten teure Arbeitskraft ersetzen.'
      },
      {
        id: 'q-bd-10-2-de',
        text: 'Was geschah bei den „Enclosures“ in England?',
        type: 'multiple-choice',
        options: [
          'Bauern bekamen Land geschenkt',
          'Felder wurden eingezäunt, Bauern vertrieben, Schafe gezüchtet',
          'Städte wurden kleiner',
          'Kirchen wurden verkauft'
        ],
        correctAnswer: 1,
        explanation: 'Ackerland wurde in Weideland für Schafe verwandelt.'
      },
      {
        id: 'q-bd-10-3-de',
        text: 'Wer profitierte manchmal unerwartet von Erbschaften?',
        type: 'multiple-choice',
        options: ['Nur Könige', 'Jüngere Söhne und Frauen', 'Nur Mönche', 'Niemand'],
        correctAnswer: 1,
        explanation: 'Die Pest veränderte Verteilungen und ermöglichte Aufstieg.'
      }
    ]
  },
  {
    id: 'bd24',
    title: 'Humor: „Schaf schlägt Arbeiter“',
    content:
      'Herr: „Der Bauer will 6 Pennies pro Tag.“ Berater: „Zu teuer.“ Herr: „Was kostet ein Schaf?“ Berater: „Gras, Wasser – und es beschwert sich nicht.“ Herr: „Vertreib die Bauern, hol die Schafe.“ Früher Kapitalismus in einem Satz.',
    duration: 3
  },
  {
    id: 'q11',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-bd-11-1-de',
        text: 'Was sind „Enclosures“?',
        type: 'multiple-choice',
        options: [
          'Ein Steuersystem',
          'Ein Zaunsystem für bessere Gärten',
          'Einhegung von Feldern und Vertreibung von Bauern',
          'Religiöse Rituale'
        ],
        correctAnswer: 2,
        explanation: 'Es handelte sich um die Einhegung von Land für Weiden.'
      },
      {
        id: 'q-bd-11-2-de',
        text: 'Was passierte mit vielen vertriebenen Bauern?',
        type: 'multiple-choice',
        options: ['Sie wurden Ritter', 'Sie wanderten in Städte ab', 'Sie wurden Mönche', 'Sie wurden reich'],
        correctAnswer: 1,
        explanation: 'Sie suchten Lohnarbeit in Städten.'
      },
      {
        id: 'q-bd-11-3-de',
        text: 'Warum waren Schafe für manche Herren „attraktiv“?',
        type: 'multiple-choice',
        options: [
          'Weil sie hübsch sind',
          'Weil Wolle Gewinne brachte und keine Löhne gezahlt werden mussten',
          'Weil sie beten konnten',
          'Weil sie lesen konnten'
        ],
        correctAnswer: 1,
        explanation: 'Reine Kosten-Nutzen-Rechnung ohne Moral.'
      }
    ]
  },
  {
    id: 'bd25',
    title: 'Das Ende des Feudalismus',
    content:
      'Die Pest beschleunigte das Ende der feudalen Ordnung. Leibeigenschaft löste sich auf, Bauern wurden Pächter oder Lohnarbeiter. Grundherren wurden zu kapitalistischen Landbesitzern. Ein Arbeitsmarkt entstand: Löhne wurden von Angebot und Nachfrage bestimmt – Feudalismus wandelte sich in frühen Kapitalismus.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/end-feudalism.jpg', title: 'Ende des Feudalismus' }]
  },
  {
    id: 'bd26',
    title: 'Steigender Lebensstandard der Überlebenden',
    content:
      'Paradox: Für viele Überlebende wurde das Leben besser. Löhne stiegen, Nahrungsmittel wurden relativ billiger. Arbeiter konnten sich Fleisch leisten, nicht nur Brot. Wohnraum wurde günstiger, Kleidung erschwinglicher. Der Schwarze Tod war eine brutale Umverteilung von Reichtum – nach oben, aber auch zu manchen unten.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/living-standards.jpg', title: 'Lebensstandard' }]
  },
  {
    id: 'bd27',
    title: 'Langfristige Folgen',
    content:
      'Der Schwarze Tod veränderte Europa dauerhaft: Ein Mittelstand entstand, Städte wurden Machtzentren, Technik entwickelte sich schneller. Die Krise der Kirche ebnete den Weg für Reformation, neue Ideen und schließlich Renaissance. In gewisser Weise war die Pest ein finsterer Motor des Wandels.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/long-term.jpg', title: 'Langfristige Folgen' }]
  },
  {
    id: 'q12',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-bd-12-1-de',
        text: 'Welches System wurde durch die Pest geschwächt?',
        type: 'multiple-choice',
        options: ['Kapitalismus', 'Feudalismus', 'Demokratie', 'Sklaverei'],
        correctAnswer: 1,
        explanation: 'Der Feudalismus verlor seine wirtschaftliche Basis.'
      },
      {
        id: 'q-bd-12-2-de',
        text: 'Wie änderte sich der Lebensstandard vieler Überlebender?',
        type: 'multiple-choice',
        options: ['Er sank stark', 'Er blieb gleich', 'Er stieg', 'Er verschwand'],
        correctAnswer: 2,
        explanation: 'Weniger Menschen teilten sich mehr Ressourcen.'
      },
      {
        id: 'q-bd-12-3-de',
        text: 'Was entstand langfristig nach der Pest?',
        type: 'multiple-choice',
        options: ['Ein stärkerer Adel', 'Ein Mittelstand und ein Arbeitsmarkt', 'Weniger Handel', 'Weniger Städte'],
        correctAnswer: 1,
        explanation: 'Ein neuer Mittelstand und Lohnarbeit entstanden.'
      }
    ]
  },
  {
    id: 'bd28',
    title: 'Humor: „Die Pest tötete Menschen, gebar den Kapitalismus“',
    content:
      'Pest: „Ich habe ein Drittel Europas getötet.“ Geschichte: „Du Monster.“ Pest: „Dafür habe ich Kapitalismus, Mittelstand und Renaissance mit angeschoben.“ Geschichte: „Das macht es nicht besser – aber erklärt viel.“ Zynische, aber ehrliche Perspektive.',
    duration: 3
  },
  {
    id: 'bd29',
    title: 'Bilanz: Tragödie mit ökonomischen Folgen',
    content:
      'Der Schwarze Tod war die größte Katastrophe des Mittelalters. Doch wirtschaftlich bedeutete er: Arbeitskräftemangel, dreifache Löhne, Bauernaufstände, Ende der Leibeigenschaft und langsame Geburt des Kapitalismus. Feudalismus starb, eine neue Epoche begann.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/summary.jpg', title: 'Bilanz' }]
  },
  {
    id: 'bd30',
    title: 'Schluss: Ökonomie schlägt Ideologie',
    content:
      'Gesetze versuchten, Löhne zu deckeln – der Markt setzte sich durch. Die Kirche verlor Glanz – wirtschaftliche Realität war stärker. Adlige wollten ihre Macht halten – Kapitalismus kam trotzdem. Der Schwarze Tod zeigt: Am Ende dominieren oft ökonomische Kräfte über Dogmen und Tradition.',
    duration: 3,
    media: [{ type: 'image', url: '/media/black-death-economy/conclusion.jpg', title: 'Schluss' }]
  }
]

export const blackDeathEconomyFinalQuizDE: QuizBlock = {
  id: 'quiz-black-death-economy-de',
  title: 'Abschlussquiz: Schwarzer Tod – wirtschaftliche Revolution',
  questions: [
    {
      id: 'final-bd-de-1',
      text: 'Welcher Faktor veränderte die Wirtschaft nach der Pest am stärksten?',
      type: 'multiple-choice',
      options: ['Mehr Land', 'Weniger Menschen, Arbeitskräftemangel', 'Mehr Kriege', 'Mehr Kirchen'],
      correctAnswer: 1,
      explanation: 'Weniger Menschen machten Arbeit knapp und wertvoll.'
    },
    {
      id: 'final-bd-de-2',
      text: 'Was versuchte das englische „Statute of Labourers“?',
      type: 'multiple-choice',
      options: [
        'Löhne zu erhöhen',
        'Löhne zu senken',
        'Löhne auf altem Niveau festzufrieren',
        'Steuern abzuschaffen'
      ],
      correctAnswer: 2,
      explanation: 'Das Gesetz wollte die alte Ordnung retten – es scheiterte weitgehend.'
    },
    {
      id: 'final-bd-de-3',
      text: 'Warum verloren Grundherren Macht?',
      type: 'multiple-choice',
      options: [
        'Weil sie ärmer wurden',
        'Weil Bauern fliehen und bessere Bedingungen suchen konnten',
        'Weil sie zum König gingen',
        'Weil sie alle starben'
      ],
      correctAnswer: 1,
      explanation: 'Bauern hatten plötzlich Wahlmöglichkeiten.'
    },
    {
      id: 'final-bd-de-4',
      text: 'Welche Rolle spielten Bauernaufstände wie Jacquerie und Wat Tyler?',
      type: 'multiple-choice',
      options: [
        'Sie hatten keinen Effekt',
        'Sie zeigten, dass alte Strukturen nicht mehr akzeptiert wurden',
        'Sie stärkten den Adel',
        'Sie wurden sofort vergessen'
      ],
      correctAnswer: 1,
      explanation: 'Sie machten deutlich, dass Zwangsarbeit nicht mehr selbstverständlich war.'
    },
    {
      id: 'final-bd-de-5',
      text: 'Warum sank die Autorität der Kirche?',
      type: 'multiple-choice',
      options: [
        'Weil sie zu reich war',
        'Weil sie die Pest nicht erklären oder stoppen konnte',
        'Weil sie neue Kirchen baute',
        'Weil sie zu viel predigte'
      ],
      correctAnswer: 1,
      explanation: 'Wenn eine Institution in der größten Krise versagt, verliert sie Ansehen.'
    },
    {
      id: 'final-bd-de-6',
      text: 'Was sagen Pogrome gegen Juden über die Gesellschaft aus?',
      type: 'multiple-choice',
      options: [
        'Sie waren rational',
        'Sie zeigen, wie Angst und Unwissen Minderheiten gefährlich machen',
        'Sie lösten die Pest',
        'Sie waren medizinisch sinnvoll'
      ],
      correctAnswer: 1,
      explanation: 'Jüdische Gemeinden wurden Opfer von Angst, nicht von Fakten.'
    },
    {
      id: 'final-bd-de-7',
      text: 'Was war eine typische wirtschaftliche Antwort auf hohe Löhne?',
      type: 'multiple-choice',
      options: ['Mehr Feste', 'Mehr Technik und Maschinen', 'Mehr Gebet', 'Mehr Burgen'],
      correctAnswer: 1,
      explanation: 'Investition in Technik sollte teure menschliche Arbeit ersetzen.'
    },
    {
      id: 'final-bd-de-8',
      text: 'Was kennzeichnet die „Enclosures“ in England?',
      type: 'multiple-choice',
      options: [
        'Schutz der Bauern',
        'Verwandlung von Feldern in Weiden für Schafe',
        'Stärkung der Leibeigenschaft',
        'Ende des Handels'
      ],
      correctAnswer: 1,
      explanation: 'Ackerland wurde eingezäunt, Bauern vertrieben.'
    },
    {
      id: 'final-bd-de-9',
      text: 'Welche neue soziale Gruppe entstand nach der Pest?',
      type: 'multiple-choice',
      options: ['Nur Adlige', 'Ein Mittelstand aus Erben, Händlern und Handwerkern', 'Nur Mönche', 'Keine neue Gruppe'],
      correctAnswer: 1,
      explanation: 'Erbschaften und neue Chancen schufen einen Mittelstand.'
    },
    {
      id: 'final-bd-de-10',
      text: 'Was ist die wichtigste Lehre aus dem Schwarzen Tod für die Wirtschaftsgeschichte?',
      type: 'multiple-choice',
      options: [
        'Religion bestimmt alles',
        'Zufall ist wichtiger als Strukturen',
        'Ökonomische Kräfte (Angebot/Nachfrage) können ganze Systeme umformen',
        'Kriege sind das Wichtigste'
      ],
      correctAnswer: 2,
      explanation: 'Die Pest war ein Schock, der ökonomische Grundstrukturen veränderte.'
    }
  ]
}

