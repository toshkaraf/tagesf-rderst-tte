import { Slide, QuizBlock } from '../types/session'

export const ancientComicHistorySlidesDE: Slide[] = [
  {
    id: 'ach1',
    title: 'Die komischsten Fälle der alten Geschichte',
    content:
      'Wir glauben oft, die Antike sei nur Toga und tiefe Gedanken. Manchmal aber bestraften Herrscher das Meer, machten Pferde zu Beamten und verloren Schlachten wegen einer Henne. Willkommen in der Geschichte, die wirklich passieren durfte.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/01-antiquity-comedy-intro.jpg', title: 'Antike und Humor' }]
  },
  {
    id: 'ach2',
    title: 'Ein Pferd in der Politik',
    content:
      'Der römische Kaiser Caligula vergötterte sein Pferd Incitatus: Marmorstall, Diener, goldener Futtertrog. Der Überlieferung nach wollte er es sogar zum Konsul machen - damit in der Regierung wenigstens jemand wirklich integer arbeitete, vermutlich.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/02-caligula-incitatus-horse.jpg', title: 'Incitatus' }]
  },
  {
    id: 'ach3',
    title: 'Roms bester Beamter',
    content:
      'Das Pferd nahm nie Schmiergeld, hielt keine plumpen Reden und schwieg in allen Sitzungen. Wenn man es recht bedenkt: genau so einen Politiker hat Rom verpasst.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/03-roman-senate-consul-art.jpg', title: 'Rom und Macht' }]
  },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ach-1-1-de',
        text: 'Worum geht es in dieser Einheit in erster Linie?',
        type: 'multiple-choice',
        options: [
          'Nur um Kriege des 5. Jahrhunderts v. Chr.',
          'Um komische und absurde Episoden aus der alten Geschichte',
          'Nur um ägyptische Religion',
          'Nur um Mathematik'
        ],
        correctAnswer: 1,
        explanation: 'Pointierte Geschichten aus der Antike, oft mit Anekdotencharakter.'
      },
      {
        id: 'q-ach-1-2-de',
        text: 'Wie hieß Caligulas Pferd in dieser Erzählung?',
        type: 'multiple-choice',
        options: ['Bukephalos', 'Incitatus', 'Pegasos', 'Rosinante'],
        correctAnswer: 1,
        explanation: 'Incitatus ist der berühmte «Lieblingshengst» in der römischen Tradition.'
      },
      {
        id: 'q-ach-1-3-de',
        text: 'Was ist beim «Konsul-Pferd» wichtig zu bedenken?',
        type: 'multiple-choice',
        options: [
          'Es gibt einen lückenlosen Senatsbeschluss ohne Diskussion',
          'Es ist vor allem Legende und Spott der Überlieferer, kein Sitzungsprotokoll',
          'Das Pferd wurde zweimal Volkstribun',
          'Sueton und die Kasse schweigen völlig'
        ],
        correctAnswer: 1,
        explanation: 'Historiker sind kritisch; hier dient die Story als Metapher von Macht und Absurdität.'
      }
    ]
  },

  {
    id: 'ach4',
    title: 'Xerxes erklärt dem Wasser den Krieg',
    content:
      'Der persische Großkönig ließ eine gewaltige Brücke über den Hellespont bauen; ein Sturm riss sie nieder. Xerxes wurde so wütend, dass er das Meer auspeitschen ließ - dreihundert Hiebe - und Ketten ins Wasser werfen ließ, um die «ungehorsame» Flut zu fesseln.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/04-xerxes-hellespont-bridge.jpg', title: 'Hellespont' }]
  },
  {
    id: 'ach5',
    title: 'Das Meer schweigt',
    content:
      'Die Soldaten prügelten ernsthaft auf die Wellen ein und beschimpften das Meer laut, wie befohlen. Das Meer entschuldigte sich nicht. Trotzdem baute man die Brücke neu - das Wasser hatte eben «Ordnungshalber» Prügel bekommen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/05-xerxes-whip-sea.jpg', title: 'Meer und Ketten' }]
  },
  {
    id: 'ach6',
    title: 'Die heiligen Hennen wussten es besser',
    content:
      '249 v. Chr. prüften die Römer vor der Seeschlacht ein Omen an heiligen Hennen: fressen sie, spricht das für Glück; sonst lieber heim. Die Tiere wollten nicht. Admiral Pulcher soll geärgert gehabt haben: «Wollen sie nicht fressen, sollen sie trinken!» - und über Bord warfen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/06-roman-sacred-chickens-augury.jpg', title: 'Augurium' }]
  },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ach-2-1-de',
        text: 'Wer «bestraft» in diesen Geschichten den Hellespont?',
        type: 'multiple-choice',
        options: ['Alexander der Große', 'Xerxes', 'Hannibal', 'Gaius Iulius Caesar'],
        correctAnswer: 1,
        explanation: 'Persischer König in Herodots Erzählung und späterer Tradition.'
      },
      {
        id: 'q-ach-2-2-de',
        text: 'Was taten die Krieger mit dem Meer laut Story?',
        type: 'multiple-choice',
        options: ['Sie badeten', 'Sie peitschten und fluchten laut', 'Sie fingen Triumphfisch', 'Sie bauten einen Marmorturm'],
        correctAnswer: 1,
        explanation: 'Symbolische Bestrafung der Natur nach Brückenverlust.'
      },
      {
        id: 'q-ach-2-3-de',
        text: 'Wie heißt das Verfahren mit den «heiligen Hennen» hier?',
        type: 'multiple-choice',
        options: ['Bücherverbrennung', 'Vogelaugurium vor der Schlacht', 'Federnsteuer', 'Olympische Disziplin'],
        correctAnswer: 1,
        explanation: 'Römisches Vorzeichenwesen am Verhalten der Hühner.'
      }
    ]
  },

  {
    id: 'ach7',
    title: 'Die Hennen hatten recht',
    content:
      'Die Römer verloren die Schlacht völlig. Später stand Pulcher vor Gericht und musste erklären, warum er heilige Vögel ertränkte statt sie zu befolgen. Die Hennen hatten im Grab recht.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/07-naval-battle-drepana-rome.jpg', title: 'Seeschlacht' }]
  },
  {
    id: 'ach8',
    title: 'Diogenes und die gerupfte Henne',
    content:
      'Platon definierte den Menschen genial als «zweifußiges Federloses». Diogenes rupfte eine lebende Henne, stürmte zum «Unterricht» und verkündete feierlich: «Da ist dein Mensch!»',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/08-diogenes-plucked-chicken.jpg', title: 'Diogenes' }]
  },
  {
    id: 'ach9',
    title: 'Ende der Theorie',
    content:
      'Platon musste die Definition eilig ergänzen: «mit breiten Nägeln». Diogenes gewann den Streit mit einer unglücklichen Henne - vielleicht das beste Argument der griechischen Geistesgeschichte.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/09-plato-academy-ancient-greek.jpg', title: 'Platon' }]
  },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ach-3-1-de',
        text: 'Wer ertränkte in der Anekdote die «nicht fressenden» heiligen Hennen?',
        type: 'multiple-choice',
        options: ['Scipio Africanus', 'Publius Claudius Pulcher', 'Perikles', 'Cato der Ältere'],
        correctAnswer: 1,
        explanation: 'Admiral in der Niederlage bei Drepana (249 v. Chr.).'
      },
      {
        id: 'q-ach-3-2-de',
        text: 'Was tat Diogenes mit der Henne gegen Platons Definition?',
        type: 'multiple-choice',
        options: ['Er ließ sie frei', 'Er rupfte sie und brachte sie als «Menschen»', 'Er schenkte sie dem König', 'Er kochte Suppe'],
        correctAnswer: 1,
        explanation: 'Kynische Reductio ad absurdum.'
      },
      {
        id: 'q-ach-3-3-de',
        text: 'Was ergänzte Platon nach dem Eklat?',
        type: 'multiple-choice',
        options: ['«mit Flügeln»', '«mit flachen Nägeln»', '«mit breiten Nägeln»', '«ohne Kopf»'],
        correctAnswer: 2,
        explanation: 'So lautet die verbreitete Fassung der Pointe.'
      }
    ]
  },

  {
    id: 'ach10',
    title: 'Diogenes und Alexander',
    content:
      'Als Alexander dem Großen zum Sonnenbadenden Diogenes sagte: «Wünsche, was du willst!», antwortete der Philosoph knapp: «Tritt beiseite, du versperrst mir die Sonne.» Alexander soll geäußert haben: «Wäre ich nicht Alexander, wollte ich Diogenes sein.»',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/10-diogenes-alexander-barrel.jpg', title: 'Begegnung' }]
  },
  {
    id: 'ach11',
    title: 'Die schwierigste Frage',
    content:
      'Man fragte: «Diogenes, wo lebt man am besten?» Antwort: «Überall, wo Reiche erröten.» Das ist zweieinhalb Jahrtausende her und klingt wie ein Tweet von heute.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/11-ancient-athens-agora-crowd.jpg', title: 'Stadt und Menge' }]
  },
  {
    id: 'ach12',
    title: 'Kohl und Könige',
    content:
      'Ein reicher Beamter belehrte: «Wüsstest du schmeicheln, müsstest du keinen Kohl waschen.» Diogenes kühl: «Wüsstest du Kohl waschen, müsstest du nicht schmeicheln.» Treffer. K. o.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/12-diogenes-cynic-philosopher.jpg', title: 'Kyniker' }]
  },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ach-4-1-de',
        text: 'Was bat Diogenes Alexander in der berühmten Szene?',
        type: 'multiple-choice',
        options: ['Geld fürs Haus', 'Nicht die Sonne zu verdecken', 'den Makedonenthron', 'ein Schiff nach Athen'],
        correctAnswer: 1,
        explanation: 'Lakonischer Bruch mit der Gnade des Mächtigen.'
      },
      {
        id: 'q-ach-4-2-de',
        text: 'Wo lebt man laut Diogenes «am besten»?',
        type: 'multiple-choice',
        options: ['Nur in Sparta', 'Überall, wo Reiche erröten', 'Nur in Babylon', 'Nur in der Höhle'],
        correctAnswer: 1,
        explanation: 'Satire auf Heuchelei und Scham der Reichen.'
      },
      {
        id: 'q-ach-4-3-de',
        text: 'Worum geht die Kohl-Pointe?',
        type: 'multiple-choice',
        options: [
          'Um Landwirtschaft',
          'Um ehrliche Arbeit statt Schmeichelei',
          'Um Gemüsesteuer',
          'Um die Olympischen Spiele'
        ],
        correctAnswer: 1,
        explanation: 'Umkehr des Arguments des Gegenübers.'
      }
    ]
  },

  {
    id: 'ach13',
    title: 'Diogenes sucht mit der Laterne',
    content:
      'Am hellichten Tag ging Diogenes mit brennender Laterne über den Markt. «Was suchst du?» - «Einen Menschen.» Menschen standen herum - einen Menschen gab es nicht.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/13-diogenes-lantern.jpg', title: 'Laterne' }]
  },
  {
    id: 'ach14',
    title: 'Katzen in der Schlacht',
    content:
      'Kambyses II. soll gewusst haben, dass Ägypter Katzen verehren. Der Legende nach trugen Krieger Schilde mit Katzen - die Gegner schossen nicht, um die Tiere nicht zu treffen. Die Schlacht wurde mit Sanftmut «gewonnen».',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/14-ancient-egyptian-cat-sacred.jpg', title: 'Heilige Katze' }]
  },
  {
    id: 'ach15',
    title: 'Diokletian und der Eid des Pferdes',
    content:
      '298 n. Chr. vor Alexandria schwor Diokletian, zu töten, bis Blut die Knie seines Pferdes erreiche. Das Tier stolperte in der Stadt sofort - Blut an den Knien! Diokletian wertete es als göttliches Zeichen und verschonte die Stadt.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/15-diocletian-roman-emperor.jpg', title: 'Diokletian' }]
  },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ach-5-1-de',
        text: 'Was suchte Diogenes tagsüber mit der Laterne?',
        type: 'multiple-choice',
        options: ['Geldbeutel', 'einen Menschen', 'einen Hund', 'Schlüssel zum Pithos'],
        correctAnswer: 1,
        explanation: 'Berühmte Anekdote der Kyniker.'
      },
      {
        id: 'q-ach-5-2-de',
        text: 'Welches Mittel schreibt die Legende Kambyses gegen die Ägypter zu?',
        type: 'multiple-choice',
        options: ['Giftpfeile', 'Schilde mit Katzen, damit nicht geschossen wird', 'Nilhochwasser', 'Brotverbot'],
        correctAnswer: 1,
        explanation: 'Heiligkeit der Tiere als «taktischer» Faktor in der Erzählung.'
      },
      {
        id: 'q-ach-5-3-de',
        text: 'Bis zu welchem Zeichen gelobte Diokletian in der Alexandria-Anekdote Blut?',
        type: 'multiple-choice',
        options: [
          'Bis Sonnenuntergang',
          'Bis Blut die Pferdeknie erreicht',
          'Genau sieben Tage',
          'Bis die Glocken verstummen'
        ],
        correctAnswer: 1,
        explanation: 'Stolperndes Pferd stoppt das Massaker in der Pointe.'
      }
    ]
  },

  {
    id: 'ach16',
    title: 'Ein Pferd rettet die Stadt',
    content:
      'Alexandria errichtete einer Legende nach ein Standbild dieses Pferdes - nicht für Diokletian, für das Pferd. Denn es war wirklich der Held des Tages.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/16-alexandria-egypt-antique.jpg', title: 'Alexandria' }]
  },
  {
    id: 'ach17',
    title: 'Pythagoras fürchtete Bohnen',
    content:
      'Der große Mathematiker meinte, Bohnen bergen Seelen Verstorbener und dürften nie gegessen werden. Als er vor Feinden floh, erreichte er ein Bohnenfeld - und blieb stehen. Die Feinde fingen ihn.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/17-pythagoras-philosopher.jpg', title: 'Pythagoras' }]
  },
  {
    id: 'ach18',
    title: 'Die Bohnen schlugen den Mathematiker',
    content:
      'Vielleicht der einzige Fall, in dem «Bohnen töten»: nicht als Waffe, sondern als Tabu stärker als die Todesangst. Der Lehrsatz überdauerte den Lehrer - nicht aber Pythagoras in dieser Fassung.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/18-bean-field-mediterranean.jpg', title: 'Bohnenfeld' }]
  },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ach-6-1-de',
        text: 'Wem errichtete die pointierte Version in Alexandria ein Denkmal?',
        type: 'multiple-choice',
        options: ['der Katze', 'dem Pferd', 'Diokletian', 'dem Nil'],
        correctAnswer: 1,
        explanation: 'Held der Anekdote ist das Tier.'
      },
      {
        id: 'q-ach-6-2-de',
        text: 'Wovor fürchtete sich Pythagoras in der Geschichte?',
        type: 'multiple-choice',
        options: ['Wein', 'Bohnen', 'Fisch', 'Honig'],
        correctAnswer: 1,
        explanation: 'Berühmtes pythagoreisches Speiseverbot in der Tradition.'
      },
      {
        id: 'q-ach-6-3-de',
        text: 'Warum blieb Pythagoras vor dem Feld stehen?',
        type: 'multiple-choice',
        options: [
          'Er schlief ein',
          'Er wollte das Tabu nicht brechen und das Bohnenfeld nicht betreten',
          'Er wartete auf einen Freund',
          'Er suchte vierblättriges Kleeblatt'
        ],
        correctAnswer: 1,
        explanation: 'Tabu stärker als die Flucht - Erzähllogik der Pointe.'
      }
    ]
  },

  {
    id: 'ach19',
    title: 'Mark Anton auf dem Forum',
    content:
      'Der Feldherr kam nach einer wilden Nacht zur Rede vor dem Volk - und wurde mitten im Wort schlecht. Er musste stoppen und erbrach vor ganz Rom. Die Senatoren schwiegen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/19-mark-antony-roman.jpg', title: 'Mark Anton' }]
  },
  {
    id: 'ach20',
    title: 'Römische Latrinen - Gesprächsort',
    content:
      'Öffentliche Latrinen waren oft mehrplätzig - ohne Trennwände. Man plauderte, verhandelte, schloss Geschäfte ab. Manch einer ging ärmer hinein und kam reicher heraus - jedenfalls in der Pointe.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/20-roman-forum-latrine.jpg', title: 'Latrine' }]
  },
  {
    id: 'ach21',
    title: 'Pompeius klaut den Triumph',
    content:
      'Crassus schlug Spartacus und seine Armee. Pompeius fing die letzten Flüchtigen auf und schrieb nach Rom: «Ich habe den Krieg gewonnen.» Crassus kochte ein Leben lang; Pompeius feierte gelassen Triumph.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/21-pompey-crassus-spartacus.jpg', title: 'Triumph und PR' }]
  },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ach-7-1-de',
        text: 'Was geschah mit Mark Anton auf dem Forum in dieser Anekdote?',
        type: 'multiple-choice',
        options: [
          'Er erklärte Parthien den Krieg',
          'Ihm wurde übel und er erbrach vor dem Volk',
          'Er schlief auf der Tribüne',
          'Er heiratete Fulvia'
        ],
        correctAnswer: 1,
        explanation: 'Grober Körperkontrast zur öffentlichen Pose.'
      },
      {
        id: 'q-ach-7-2-de',
        text: 'Wie werden viele römische öffentliche Latrinen hier beschrieben?',
        type: 'multiple-choice',
        options: [
          'Nur einzeln und lautlos',
          'Als Ort von Gesprächen und sogar Geschäften',
          'Nur für Senatoren',
          'Nur nachts'
        ],
        correctAnswer: 1,
        explanation: 'Soziale Funktion öffentlicher Räume.'
      },
      {
        id: 'q-ach-7-3-de',
        text: 'Wer brach den Aufstand des Spartacus im Kern?',
        type: 'multiple-choice',
        options: ['allein Pompeius', 'Crassus', 'Cicero', 'der junge Octavian'],
        correctAnswer: 1,
        explanation: 'Pompeius räumte Reste auf und beanspruchte den Lorbeer.'
      }
    ]
  },

  {
    id: 'ach22',
    title: 'Claudius - der ungeschickteste Kaiser',
    content:
      'Claudius war klug, aber so tollpatschig, dass er bei Zeremonien stürzte, bei Gastmahl einnickte und einmal zu seinem eigenen Triumph zu spät kam. Rom liebte ihn - und grinste ein wenig.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/22-emperor-claudius.jpg', title: 'Claudius' }]
  },
  {
    id: 'ach23',
    title: 'Valentinian starb vor Wut',
    content:
      'Als «barbarische» Gesandte Kaiser Valentinian I. im Jahr 375 frech anredeten, schrie dieser immer lauter - und starb plötzlich an einem Gefäßriss mitten in den Verhandlungen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/23-valentinian-i-roman-emperor.jpg', title: 'Valentinian I.' }]
  },
  {
    id: 'ach24',
    title: 'Die Gesandten im Schock',
    content:
      'Das Gespräch endete ohne Ergebnis. Die Gesandten gingen lebend weg. Einziges Opfer war der Gastgeber. Diplomatie - riskanter Beruf.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/24-ancient-roman-embassy.jpg', title: 'Gesandte' }]
  },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ach-8-1-de',
        text: 'Wie wird Claudius in der Einheit charakterisiert?',
        type: 'multiple-choice',
        options: [
          'Nur als unbesiegter Feldherr',
          'Klug, aber ungeschickt und im Alltag komisch',
          'Grausamer Tyrann ohne Humor',
          'Kind auf dem Thron'
        ],
        correctAnswer: 1,
        explanation: 'Suetonische Linie: Körper und Peinlichkeit als Motiv.'
      },
      {
        id: 'q-ach-8-2-de',
        text: 'Woran starb Valentinian I. in der Erzählung bei den Gesprächen?',
        type: 'multiple-choice',
        options: [
          'an Gesandtengift',
          'an einem Gefäßriss in Wut',
          'an der Lanze der Garde',
          'im Schlaf dreißig Jahre später'
        ],
        correctAnswer: 1,
        explanation: 'Die Wut tötet den Mächtigen - ironische Pointe.'
      },
      {
        id: 'q-ach-8-3-de',
        text: 'Wer war in der Verhandlungsanekdote das «Opfer»?',
        type: 'multiple-choice',
        options: ['die Gesandten', 'der Kaiser-Gastgeber', 'die Stadt', 'die Prätorianer'],
        correctAnswer: 1,
        explanation: 'Der Starke stirbt, die anderen bleiben heil.'
      }
    ]
  },

  {
    id: 'ach25',
    title: 'Krokodil als Haustier',
    content:
      'Pharao Amenophis III. hielt ein zahmes Krokodil: man fütterte es mit Fleisch, schmückte es mit Gold und führte es zu Festen. Die Gäste lächelten und bewegten sich nicht zu schnell.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/25-amenhotep-iii-crocodile.jpg', title: 'Krokodil' }]
  },
  {
    id: 'ach26',
    title: 'Ägypter rasierten die Augenbrauen vor Trauer',
    content:
      'Starb einer die Katze, schnitt die Familie die Brauen ab zum Zeichen der Trauer. Hatte das Haus auch noch Mäuseplage, ging man monatelang ohne Brauen - Pointe über Alltag und Ritus.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/26-egyptian-cat-mourning-art.jpg', title: 'Katze und Trauer' }]
  },
  {
    id: 'ach27',
    title: 'Alexander weint am Rand der Welt',
    content:
      'Alexander hatte halbe Welt erobert und erreichte den Indus. Da setzte er sich und weinte - weil nichts mehr zu erobern war. Seine Feldherren, die endlich heimwollten, blicken mit einem unaussprechlichen Gesichtsausdruck.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/27-alexander-indus-river.jpg', title: 'Am Indus' }]
  },
  {
    id: 'q9',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ach-9-1-de',
        text: 'Welcher Pharao wird mit dem «Hauskrokodil» genannt?',
        type: 'multiple-choice',
        options: ['Tutanchamun', 'Amenophis III.', 'Echnaton', 'Cheops'],
        correctAnswer: 1,
        explanation: '18. Dynastie, prunkvoller Hof in der Erzählung.'
      },
      {
        id: 'q-ach-9-2-de',
        text: 'Was taten Ägypter beim Tod der Katze laut Folie?',
        type: 'multiple-choice',
        options: ['Kuchen backen', 'Augenbrauen abrasieren', 'Pyramide bauen', 'Teppiche verkaufen'],
        correctAnswer: 1,
        explanation: 'Trauerritual in der pointierten Darstellung.'
      },
      {
        id: 'q-ach-9-3-de',
        text: 'Warum weint Alexander in der Anekdote am «Ozean»?',
        type: 'multiple-choice',
        options: [
          'Er verlor sein Lieblingspferd',
          'Weil ihm «nichts mehr zu erobern bleibt»',
          'Vor Hochzeitsfreude',
          'Vor Wüstenhitze'
        ],
        correctAnswer: 1,
        explanation: 'Ironie des unstillbaren Eroberers.'
      }
    ]
  },

  {
    id: 'ach28',
    title: 'Heraklit und der Mist',
    content:
      'Heraklit litt schwer an Wassersucht und fragte Ärzte nach Heilung. Die Antwort blieb vage. Da grub er sich in Mist ein - nach seiner Lehre sollte Wärme die Krankheit «austrocknen». Es half nicht.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/28-heraclitus-philosopher.jpg', title: 'Heraklit' }]
  },
  {
    id: 'ach29',
    title: 'Spartanischer Humor',
    content:
      'Als Philipp II. Sparta drohte: «Wenn ich in euer Land komme, zerstöre ich alles!», antworteten die Spartaner mit einem Wort: «Wenn.» Philipp zog nicht los.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/29-spartan-warriors-laconic.jpg', title: 'Sparta' }]
  },
  {
    id: 'ach30',
    title: 'Hauptfazit',
    content:
      'Die Alten waren klug, mutig und groß. Manchmal bestraften sie das Meer, ertränkten weissagende Hennen und verloren Kriege wegen Bohnen. Geschichte ist nicht nur Lehrbuch - sie ist auch die beste Komödie aller Zeiten.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ancient-comic-history/30-ancient-history-comedy-books.jpg', title: 'Geschichte und Lachen' }]
  },
  {
    id: 'q10',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ach-10-1-de',
        text: 'Wohin grub sich Heraklit laut Folie zur Kur?',
        type: 'multiple-choice',
        options: ['in Sahara-Sand', 'in Mist', 'in Honig', 'in Weinfässer'],
        correctAnswer: 1,
        explanation: 'Anekdote über Philosophie und «trockene» Hitze.'
      },
      {
        id: 'q-ach-10-2-de',
        text: 'Mit welchem einen Wort antworteten die Spartaner auf Philipps Drohung?',
        type: 'multiple-choice',
        options: ['«Niemals»', '«Wenn»', '«Morgen»', '«Bitte»'],
        correctAnswer: 1,
        explanation: 'Lakonismus als Genre.'
      },
      {
        id: 'q-ach-10-3-de',
        text: 'Welches Fazit formuliert die letzte Folie?',
        type: 'multiple-choice',
        options: [
          'Geschichte ist komplett erfunden',
          'Die Antike ist nicht nur Großtat, sondern auch komische, menschliche Momente',
          'Man sollte Anekdoten verbieten',
          'Alle Philosophen waren gleich'
        ],
        correctAnswer: 1,
        explanation: 'Verbindung von Größe und Absurdität im Erzählen.'
      }
    ]
  }
]

export const ancientComicHistoryFinalQuizDE: QuizBlock = {
  id: 'quiz-ancient-comic-history-de',
  title: 'Abschlussquiz: komische Antike',
  questions: [
    {
      id: 'q-ach-f-1-de',
      text: 'Worum geht es in dieser Einheit in erster Linie?',
      type: 'multiple-choice',
      options: [
        'Nur um Kriege des 5. Jahrhunderts v. Chr.',
        'Um komische und absurde Episoden aus der alten Geschichte',
        'Nur um ägyptische Religion',
        'Nur um Mathematik'
      ],
      correctAnswer: 1,
      explanation: 'Pointierte Geschichten aus der Antike, oft mit Anekdotencharakter.'
    },
    {
      id: 'q-ach-f-2-de',
      text: 'Wie hieß Caligulas Pferd in dieser Erzählung?',
      type: 'multiple-choice',
      options: ['Bukephalos', 'Incitatus', 'Pegasos', 'Rosinante'],
      correctAnswer: 1,
      explanation: 'Incitatus ist der berühmte «Lieblingshengst» in der römischen Tradition.'
    },
    {
      id: 'q-ach-f-3-de',
      text: 'Was ist beim «Konsul-Pferd» wichtig zu bedenken?',
      type: 'multiple-choice',
      options: [
        'Es gibt einen lückenlosen Senatsbeschluss ohne Diskussion',
        'Es ist vor allem Legende und Spott der Überlieferer, kein Sitzungsprotokoll',
        'Das Pferd wurde zweimal Volkstribun',
        'Sueton und die Kasse schweigen völlig'
      ],
      correctAnswer: 1,
      explanation: 'Historiker sind kritisch; hier dient die Story als Metapher von Macht und Absurdität.'
    },
    {
      id: 'q-ach-f-4-de',
      text: 'Wer «bestraft» in diesen Geschichten den Hellespont?',
      type: 'multiple-choice',
      options: ['Alexander der Große', 'Xerxes', 'Hannibal', 'Gaius Iulius Caesar'],
      correctAnswer: 1,
      explanation: 'Persischer König in Herodots Erzählung und späterer Tradition.'
    },
    {
      id: 'q-ach-f-5-de',
      text: 'Was taten die Krieger mit dem Meer laut Story?',
      type: 'multiple-choice',
      options: ['Sie badeten', 'Sie peitschten und fluchten laut', 'Sie fingen Triumphfisch', 'Sie bauten einen Marmorturm'],
      correctAnswer: 1,
      explanation: 'Symbolische Bestrafung der Natur nach Brückenverlust.'
    },
    {
      id: 'q-ach-f-6-de',
      text: 'Wie heißt das Verfahren mit den «heiligen Hennen» hier?',
      type: 'multiple-choice',
      options: ['Bücherverbrennung', 'Vogelaugurium vor der Schlacht', 'Federnsteuer', 'Olympische Disziplin'],
      correctAnswer: 1,
      explanation: 'Römisches Vorzeichenwesen am Verhalten der Hühner.'
    },
    {
      id: 'q-ach-f-7-de',
      text: 'Wer ertränkte in der Anekdote die «nicht fressenden» heiligen Hennen?',
      type: 'multiple-choice',
      options: ['Scipio Africanus', 'Publius Claudius Pulcher', 'Perikles', 'Cato der Ältere'],
      correctAnswer: 1,
      explanation: 'Admiral in der Niederlage bei Drepana (249 v. Chr.).'
    },
    {
      id: 'q-ach-f-8-de',
      text: 'Was tat Diogenes mit der Henne gegen Platons Definition?',
      type: 'multiple-choice',
      options: ['Er ließ sie frei', 'Er rupfte sie und brachte sie als «Menschen»', 'Er schenkte sie dem König', 'Er kochte Suppe'],
      correctAnswer: 1,
      explanation: 'Kynische Reductio ad absurdum.'
    },
    {
      id: 'q-ach-f-9-de',
      text: 'Was ergänzte Platon nach dem Eklat?',
      type: 'multiple-choice',
      options: ['«mit Flügeln»', '«mit flachen Nägeln»', '«mit breiten Nägeln»', '«ohne Kopf»'],
      correctAnswer: 2,
      explanation: 'So lautet die verbreitete Fassung der Pointe.'
    },
    {
      id: 'q-ach-f-10-de',
      text: 'Was bat Diogenes Alexander in der berühmten Szene?',
      type: 'multiple-choice',
      options: ['Geld fürs Haus', 'Nicht die Sonne zu verdecken', 'den Makedonenthron', 'ein Schiff nach Athen'],
      correctAnswer: 1,
      explanation: 'Lakonischer Bruch mit der Gnade des Mächtigen.'
    },
    {
      id: 'q-ach-f-11-de',
      text: 'Wo lebt man laut Diogenes «am besten»?',
      type: 'multiple-choice',
      options: ['Nur in Sparta', 'Überall, wo Reiche erröten', 'Nur in Babylon', 'Nur in der Höhle'],
      correctAnswer: 1,
      explanation: 'Satire auf Heuchelei und Scham der Reichen.'
    },
    {
      id: 'q-ach-f-12-de',
      text: 'Worum geht die Kohl-Pointe?',
      type: 'multiple-choice',
      options: ['Um Landwirtschaft', 'Um ehrliche Arbeit statt Schmeichelei', 'Um Gemüsesteuer', 'Um die Olympischen Spiele'],
      correctAnswer: 1,
      explanation: 'Umkehr des Arguments des Gegenübers.'
    },
    {
      id: 'q-ach-f-13-de',
      text: 'Was suchte Diogenes tagsüber mit der Laterne?',
      type: 'multiple-choice',
      options: ['Geldbeutel', 'einen Menschen', 'einen Hund', 'Schlüssel zum Pithos'],
      correctAnswer: 1,
      explanation: 'Berühmte Anekdote der Kyniker.'
    },
    {
      id: 'q-ach-f-14-de',
      text: 'Welches Mittel schreibt die Legende Kambyses gegen die Ägypter zu?',
      type: 'multiple-choice',
      options: ['Giftpfeile', 'Schilde mit Katzen, damit nicht geschossen wird', 'Nilhochwasser', 'Brotverbot'],
      correctAnswer: 1,
      explanation: 'Heiligkeit der Tiere als «taktischer» Faktor in der Erzählung.'
    },
    {
      id: 'q-ach-f-15-de',
      text: 'Bis zu welchem Zeichen gelobte Diokletian in der Alexandria-Anekdote Blut?',
      type: 'multiple-choice',
      options: [
        'Bis Sonnenuntergang',
        'Bis Blut die Pferdeknie erreicht',
        'Genau sieben Tage',
        'Bis die Glocken verstummen'
      ],
      correctAnswer: 1,
      explanation: 'Stolperndes Pferd stoppt das Massaker in der Pointe.'
    },
    {
      id: 'q-ach-f-16-de',
      text: 'Wem errichtete die pointierte Version in Alexandria ein Denkmal?',
      type: 'multiple-choice',
      options: ['der Katze', 'dem Pferd', 'Diokletian', 'dem Nil'],
      correctAnswer: 1,
      explanation: 'Held der Anekdote ist das Tier.'
    },
    {
      id: 'q-ach-f-17-de',
      text: 'Wovor fürchtete sich Pythagoras in der Geschichte?',
      type: 'multiple-choice',
      options: ['Wein', 'Bohnen', 'Fisch', 'Honig'],
      correctAnswer: 1,
      explanation: 'Berühmtes pythagoreisches Speiseverbot in der Tradition.'
    },
    {
      id: 'q-ach-f-18-de',
      text: 'Warum blieb Pythagoras vor dem Feld stehen?',
      type: 'multiple-choice',
      options: [
        'Er schlief ein',
        'Er wollte das Tabu nicht brechen und das Bohnenfeld nicht betreten',
        'Er wartete auf einen Freund',
        'Er suchte vierblättriges Kleeblatt'
      ],
      correctAnswer: 1,
      explanation: 'Tabu stärker als die Flucht - Erzähllogik der Pointe.'
    },
    {
      id: 'q-ach-f-19-de',
      text: 'Was geschah mit Mark Anton auf dem Forum in dieser Anekdote?',
      type: 'multiple-choice',
      options: [
        'Er erklärte Parthien den Krieg',
        'Ihm wurde übel und er erbrach vor dem Volk',
        'Er schlief auf der Tribüne',
        'Er heiratete Fulvia'
      ],
      correctAnswer: 1,
      explanation: 'Grober Körperkontrast zur öffentlichen Pose.'
    },
    {
      id: 'q-ach-f-20-de',
      text: 'Wie werden viele römische öffentliche Latrinen hier beschrieben?',
      type: 'multiple-choice',
      options: [
        'Nur einzeln und lautlos',
        'Als Ort von Gesprächen und sogar Geschäften',
        'Nur für Senatoren',
        'Nur nachts'
      ],
      correctAnswer: 1,
      explanation: 'Soziale Funktion öffentlicher Räume.'
    },
    {
      id: 'q-ach-f-21-de',
      text: 'Wer brach den Aufstand des Spartacus im Kern?',
      type: 'multiple-choice',
      options: ['allein Pompeius', 'Crassus', 'Cicero', 'der junge Octavian'],
      correctAnswer: 1,
      explanation: 'Pompeius räumte Reste auf und beanspruchte den Lorbeer.'
    },
    {
      id: 'q-ach-f-22-de',
      text: 'Wie wird Claudius in der Einheit charakterisiert?',
      type: 'multiple-choice',
      options: [
        'Nur als unbesiegter Feldherr',
        'Klug, aber ungeschickt und im Alltag komisch',
        'Grausamer Tyrann ohne Humor',
        'Kind auf dem Thron'
      ],
      correctAnswer: 1,
      explanation: 'Suetonische Linie: Körper und Peinlichkeit als Motiv.'
    },
    {
      id: 'q-ach-f-23-de',
      text: 'Woran starb Valentinian I. in der Erzählung bei den Gesprächen?',
      type: 'multiple-choice',
      options: [
        'an Gesandtengift',
        'an einem Gefäßriss in Wut',
        'an der Lanze der Garde',
        'im Schlaf dreißig Jahre später'
      ],
      correctAnswer: 1,
      explanation: 'Die Wut tötet den Mächtigen - ironische Pointe.'
    },
    {
      id: 'q-ach-f-24-de',
      text: 'Wer war in der Verhandlungsanekdote das «Opfer»?',
      type: 'multiple-choice',
      options: ['die Gesandten', 'der Kaiser-Gastgeber', 'die Stadt', 'die Prätorianer'],
      correctAnswer: 1,
      explanation: 'Der Starke stirbt, die anderen bleiben heil.'
    },
    {
      id: 'q-ach-f-25-de',
      text: 'Welcher Pharao wird mit dem «Hauskrokodil» genannt?',
      type: 'multiple-choice',
      options: ['Tutanchamun', 'Amenophis III.', 'Echnaton', 'Cheops'],
      correctAnswer: 1,
      explanation: '18. Dynastie, prunkvoller Hof in der Erzählung.'
    },
    {
      id: 'q-ach-f-26-de',
      text: 'Was taten Ägypter beim Tod der Katze laut Folie?',
      type: 'multiple-choice',
      options: ['Kuchen backen', 'Augenbrauen abrasieren', 'Pyramide bauen', 'Teppiche verkaufen'],
      correctAnswer: 1,
      explanation: 'Trauerritual in der pointierten Darstellung.'
    },
    {
      id: 'q-ach-f-27-de',
      text: 'Warum weint Alexander in der Anekdote am «Ozean»?',
      type: 'multiple-choice',
      options: [
        'Er verlor sein Lieblingspferd',
        'Weil ihm «nichts mehr zu erobern bleibt»',
        'Vor Hochzeitsfreude',
        'Vor Wüstenhitze'
      ],
      correctAnswer: 1,
      explanation: 'Ironie des unstillbaren Eroberers.'
    },
    {
      id: 'q-ach-f-28-de',
      text: 'Wohin grub sich Heraklit laut Folie zur Kur?',
      type: 'multiple-choice',
      options: ['in Sahara-Sand', 'in Mist', 'in Honig', 'in Weinfässer'],
      correctAnswer: 1,
      explanation: 'Anekdote über Philosophie und «trockene» Hitze.'
    },
    {
      id: 'q-ach-f-29-de',
      text: 'Mit welchem einen Wort antworteten die Spartaner auf Philipps Drohung?',
      type: 'multiple-choice',
      options: ['«Niemals»', '«Wenn»', '«Morgen»', '«Bitte»'],
      correctAnswer: 1,
      explanation: 'Lakonismus als Genre.'
    },
    {
      id: 'q-ach-f-30-de',
      text: 'Welches Fazit formuliert die letzte Folie?',
      type: 'multiple-choice',
      options: [
        'Geschichte ist komplett erfunden',
        'Die Antike ist nicht nur Großtat, sondern auch komische, menschliche Momente',
        'Man sollte Anekdoten verbieten',
        'Alle Philosophen waren gleich'
      ],
      correctAnswer: 1,
      explanation: 'Verbindung von Größe und Absurdität im Erzählen.'
    }
  ]
}
