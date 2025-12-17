import { Language } from './translations'
import { Session, Slide, QuizBlock } from '../types/session'

// Deutsche Übersetzungen (B2-Niveau) für die Turnier-Session
const ritterturniereSlidesDE: Slide[] = [
  {
    id: 't1',
    title: 'Eine französische Erfindung',
    content: 'Um das Jahr 1066 wurden in Frankreich die ersten Turniere organisiert. Man wollte damit die Ritter für den Kampf trainieren, ohne einen echten Krieg zu führen. Die ersten Turniere waren große Kämpfe zwischen Rittergruppen auf Feldern, die mehrere Quadratkilometer groß waren.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/early-tournament.jpg',
        title: 'Frühe Turniere'
      }
    ]
  },
  {
    id: 't2',
    title: 'Gefährliche Kämpfe',
    content: 'Im 12. Jahrhundert starb etwa jeder zehnte Teilnehmer bei einem Turnier. Graf Gottfried von Preuilly hatte die Turniere als sichere Alternative zum Krieg erfunden. Aber die ersten Turniere waren fast genauso gefährlich wie echte Kriege.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/accident.jpg',
        title: 'Gefahr bei Turnieren'
      }
    ]
  },
  {
    id: 't3',
    title: 'Die Kirche war dagegen',
    content: 'Papst Innozenz II. verbot 1130 alle Turniere. Wer trotzdem mitmachte, konnte aus der Kirche ausgeschlossen werden. Tote Ritter bekamen keine christliche Beerdigung. Die Kirche sah in Turnieren ein gefährliches Spiel, das die Ritter von den Kreuzzügen abhielt.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/history.jpg',
        title: 'Kirchliche Verbote'
      }
    ]
  },
  {
    id: 't4',
    title: 'Geld verdienen mit Gefangenen',
    content: 'Besiegte Ritter mussten Lösegeld zahlen: ihr Pferd, ihre Rüstung und dazu noch Geld. Professionelle Turnierkämpfer konnten damit sehr reich werden. Eine erfolgreiche Turnier-Saison brachte so viel Geld wie ein ganzes Landgut in einem Jahr.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/tournament-business.jpg',
        title: 'Turnier als Geschäft'
      }
    ]
  },
  {
    id: 't5',
    title: 'Eine erfolgreiche Partnerschaft',
    content: 'William Marshal und Roger de Gaugi bildeten ein Team. In zwei Jahren nahmen sie 103 Ritter gefangen. Sie führten genau Buch über alle ihre Gewinne - wie ein modernes Unternehmen.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/william-marshal.jpg',
        title: 'William Marshal'
      }
    ]
  },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-origins-1',
        text: 'Warum gab die Kirche getöteten Turnierkämpfern keine christliche Beerdigung?',
        type: 'multiple-choice',
        options: [
          'Sie sah Turniere als gefährliches Spiel und Sünde',
          'Die Ritter zahlten keine Steuern an die Kirche',
          'Turniere fanden am Sonntag statt',
          'Die Kirche hatte Angst vor Konkurrenz'
        ],
        correctAnswer: 0,
        explanation: 'Papst Innozenz II. hielt Turniere für ein gefährliches Spiel. Er wollte, dass die Ritter stattdessen in die Kreuzzüge gingen.'
      },
      {
        id: 'q-origins-2',
        text: 'Wie viele Ritter nahmen William Marshal und sein Partner in zwei Jahren gefangen?',
        type: 'multiple-choice',
        options: ['50', '103', '200', '25'],
        correctAnswer: 1,
        explanation: 'In zwei Jahren nahmen sie 103 Ritter gefangen und verdienten damit sehr viel Geld.'
      },
      {
        id: 'q-origins-3',
        text: 'Wie viele Teilnehmer starben im 12. Jahrhundert bei Turnieren?',
        type: 'multiple-choice',
        options: ['Etwa 1%', 'Etwa 5%', 'Etwa 10%', 'Etwa 20%'],
        correctAnswer: 2,
        explanation: 'Im 12. Jahrhundert starb ungefähr jeder zehnte Teilnehmer - das sind etwa 10%.'
      }
    ]
  },
  {
    id: 't6',
    title: 'Verbot in England',
    content: 'Ab den 1130er Jahren verboten englische Könige Turniere. Sie hatten Angst, dass die Adeligen die Turniere für geheime Treffen nutzen könnten. Erst 1194 erlaubte König Richard Löwenherz Turniere wieder - aber nur mit Lizenz und gegen eine Gebühr.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/richard-lionheart.jpg',
        title: 'Verbot in England'
      }
    ]
  },
  {
    id: 't7',
    title: 'Hohe Gebühren',
    content: 'Richard legte fest: Grafen zahlten 20 Mark, Barone 10 Mark, Ritter 4 Mark. Das war sehr viel Geld. Ein normaler Ritter verdiente in einem ganzen Jahr nur etwa 15 bis 20 Mark.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/medieval-coins.jpg',
        title: 'Gebühren für Turniere'
      }
    ]
  },
  {
    id: 't8',
    title: 'Sogar Könige starben',
    content: 'Der französische König Heinrich II. starb 1559 bei einem Turnier. Ein Stück der Lanze ging durch das Visier seines Helms und traf sein Auge. Er lebte noch 10 Tage und starb dann.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/henry-ii-death.jpg',
        title: 'Tod eines Königs'
      }
    ]
  },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-econ-1',
        text: 'Wie viel musste ein Graf für die Teilnahme an einem Turnier zahlen?',
        type: 'multiple-choice',
        options: ['4 Mark', '10 Mark', '20 Mark', '50 Mark'],
        correctAnswer: 2,
        explanation: 'Grafen zahlten 20 Mark - das war so viel wie ein Ritter in einem ganzen Jahr verdiente.'
      },
      {
        id: 'q-econ-2',
        text: 'Welcher König starb 1559 bei einem Turnier?',
        type: 'multiple-choice',
        options: [
          'Der englische König Richard',
          'Der französische König Heinrich II.',
          'Der deutsche Kaiser',
          'William Marshal'
        ],
        correctAnswer: 1,
        explanation: 'Der französische König Heinrich II. starb durch ein Stück einer Lanze, das durch sein Visier ging.'
      },
      {
        id: 'q-econ-3',
        text: 'Wer lieh den Rittern Geld für die Teilnahme an Turnieren?',
        type: 'multiple-choice',
        options: [
          'Die Kirche',
          'Italienische Bankiers aus der Lombardei',
          'Die königliche Kasse',
          'Die Ritter selbst'
        ],
        correctAnswer: 1,
        explanation: 'Italienische Bankiers aus der Lombardei gaben den Rittern Kredite. Als Sicherheit nahmen sie Land.'
      }
    ]
  },
  {
    id: 't9',
    title: 'Tjost: Duell zu zweit',
    content: 'Der Tjost ist die bekannteste Form des Turniers. Zwei Ritter auf Pferden kämpfen mit Lanzen gegeneinander. Diese Form entwickelte sich im 14. Jahrhundert. Sie war sicherer und spektakulärer als die großen Kämpfe zwischen vielen Rittern.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/joust.jpg',
        title: 'Tjost'
      }
    ]
  },
  {
    id: 't10',
    title: 'Buhurt: Kampf von vielen',
    content: 'Der Buhurt war ein Kampf zwischen zwei Gruppen. Dutzende Ritter kämpften gleichzeitig auf einem großen Feld. Diese Form war am ähnlichsten zu einem echten Krieg. Die Ritter nahmen ihre Gegner gefangen.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/buhurt.jpg',
        title: 'Buhurt'
      }
    ]
  },
  {
    id: 't11',
    title: 'Kampf zu Fuß',
    content: 'Ab dem 14. Jahrhundert kämpften Ritter auch zu Fuß. Sie benutzten Schwerter, Äxte oder Keulen. Man brauchte dafür sehr viel Kraft. Die Rüstungen wogen bis zu 30 Kilogramm, und die Kämpfer mussten bis zur Erschöpfung kämpfen.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/melle.jpg',
        title: 'Kampf zu Fuß'
      }
    ]
  },
  {
    id: 't12',
    title: 'Pas d\'armes: Verteidigung eines Ortes',
    content: 'Bei einem Pas d\'armes verteidigte ein Ritter eine Brücke oder einen Weg. Er forderte alle anderen zum Kampf auf, die dort vorbeikommen wollten. Diese Form war sehr beliebt, weil man damit seinen Mut zeigen konnte.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/pas-darmes.jpg',
        title: 'Pas d\'armes'
      }
    ]
  },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-types-1',
        text: 'Welche Turnierform war einem echten Krieg am ähnlichsten?',
        type: 'multiple-choice',
        options: ['Tjost', 'Buhurt', 'Kampf zu Fuß', 'Pas d\'armes'],
        correctAnswer: 1,
        explanation: 'Der Buhurt - ein Kampf zwischen vielen Rittern gleichzeitig - war einem echten Krieg am ähnlichsten.'
      },
      {
        id: 'q-types-2',
        text: 'Wann entwickelte sich der Tjost als eigene Turnierform?',
        type: 'multiple-choice',
        options: [
          'Im 11. Jahrhundert',
          'Im 12. Jahrhundert',
          'Im 14. Jahrhundert',
          'Im 16. Jahrhundert'
        ],
        correctAnswer: 2,
        explanation: 'Der Tjost entwickelte sich im 14. Jahrhundert als sicherere Alternative zu den großen Kämpfen.'
      },
      {
        id: 'q-types-3',
        text: 'Was bedeutet "Pas d\'armes"?',
        type: 'multiple-choice',
        options: [
          'Kampf von vielen',
          'Durchgang der Waffen',
          'Duell zu Pferd',
          'Kampf zu Fuß'
        ],
        correctAnswer: 1,
        explanation: 'Pas d\'armes bedeutet "Durchgang der Waffen" - ein Ritter verteidigte einen Durchgang gegen alle.'
      }
    ]
  },
  {
    id: 't13',
    title: 'Schwere Rüstungen',
    content: 'Rüstungen für Turniere waren 30 bis 50 Prozent schwerer als Rüstungen für den Krieg. Sie wogen bis zu 40 oder 50 Kilogramm. In so einer Rüstung konnte sich ein Ritter kaum noch bewegen. Ohne Hilfe konnte er nicht einmal aufstehen.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/armor.jpg',
        title: 'Turnier-Rüstung'
      }
    ]
  },
  {
    id: 't14',
    title: 'Besondere Helme',
    content: 'Der Turnierhelm "Krötenkopf" hatte eine besondere Form. Die Lanze sollte abrutschen und nicht stecken bleiben. Der Helm war fest mit dem Brustpanzer verbunden. So konnte ein Treffer den Hals nicht verletzen. Aber man konnte fast nichts sehen - nur durch einen schmalen Schlitz.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/frog-helm.jpg',
        title: 'Helm "Krötenkopf"'
      }
    ]
  },
  {
    id: 't15',
    title: 'Stumpfe Lanzen',
    content: 'Die Turnierlanze hatte eine stumpfe Spitze mit drei Zacken - die "Kronenspitze". Sie konnte keine Rüstung durchbohren. Die Lanzen waren innen hohl. So zerbrachen sie bei einem Treffer in viele Stücke - das sah sehr spektakulär aus.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/lance.jpg',
        title: 'Turnierlanze'
      }
    ]
  },
  {
    id: 't16',
    title: 'Die Barriere',
    content: 'Im 15. Jahrhundert baute man eine Holzbarriere zwischen die Ritter. Das war eine wichtige Neuerung. Die Pferde konnten nicht mehr zusammenstoßen. Die Ritter konnten sich jetzt auf das genaue Treffen konzentrieren.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/barrier.jpg',
        title: 'Barriere beim Turnier'
      }
    ]
  },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-equip-1',
        text: 'Warum waren die Turnierlanzen innen hohl?',
        type: 'multiple-choice',
        options: [
          'Damit sie leichter waren',
          'Damit sie bei einem Treffer spektakulär zerbrachen',
          'Um dort Geld zu verstecken',
          'Für bessere Balance'
        ],
        correctAnswer: 1,
        explanation: 'Die hohlen Lanzen zerbrachen bei einem Treffer in viele Stücke. Das sah sehr beeindruckend aus.'
      },
      {
        id: 'q-equip-2',
        text: 'Wie schwer waren Turnier-Rüstungen?',
        type: 'multiple-choice',
        options: [
          '20-25 Kilogramm',
          '30-35 Kilogramm',
          '40-50 Kilogramm',
          '60-70 Kilogramm'
        ],
        correctAnswer: 2,
        explanation: 'Turnier-Rüstungen wogen 40 bis 50 Kilogramm. Das war viel schwerer als Rüstungen für den Krieg.'
      },
      {
        id: 'q-equip-3',
        text: 'Wann kam die Barriere beim Tjost?',
        type: 'multiple-choice',
        options: [
          'Im 12. Jahrhundert',
          'Im 13. Jahrhundert',
          'Im 15. Jahrhundert',
          'Im 16. Jahrhundert'
        ],
        correctAnswer: 2,
        explanation: 'Die Holzbarriere kam im 15. Jahrhundert. Sie machte die Turniere sicherer.'
      }
    ]
  },
  {
    id: 't17',
    title: 'Punkte sammeln',
    content: 'Es gab ein Punktesystem: Ein Treffer am Kopf brachte 3 Punkte, am Körper 2 Punkte, am Schild 1 Punkt. Für eine zerbrochene Lanze gab es Bonuspunkte. Wer seinen Gegner vom Pferd warf, hatte automatisch gewonnen.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/scoring.jpg',
        title: 'Punktesystem'
      }
    ]
  },
  {
    id: 't18',
    title: 'Die Schiedsrichter',
    content: 'Die Schiedsrichter waren Herolde - Experten für Wappen. Sie konnten jeden Ritter an seinem Wappen erkennen. Sie schrieben genau auf, was bei jedem Kampf passierte.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/heralds.jpg',
        title: 'Herolde'
      }
    ]
  },
  {
    id: 't19',
    title: 'Spionage bei Turnieren',
    content: 'Militärführer nutzten Turniere auch für Spionage. Sie beobachteten die Kampftechnik ihrer Gegner und studierten ihre Taktik. Viele militärische Bündnisse entstanden durch Eindrücke von Turnieren.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/espionage.jpg',
        title: 'Spionage bei Turnieren'
      }
    ]
  },
  {
    id: 't20',
    title: 'Politik und Macht',
    content: 'Große Turniere waren auch politische Ereignisse. Könige zeigten damit ihre Macht und führten politische Gespräche. Das "Feld des Goldtuchs" 1520 zwischen Heinrich VIII. und Franz I. kostete ein Vermögen und dauerte 17 Tage.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/field-of-cloth-of-gold.jpg',
        title: 'Feld des Goldtuchs'
      }
    ]
  },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-politics-1',
        text: 'Warum schauten Militärführer bei Turnieren zu?',
        type: 'multiple-choice',
        options: [
          'Nur zur Unterhaltung',
          'Für Spionage - sie studierten die Technik ihrer Gegner',
          'Um Wetten abzuschließen',
          'Um eine Frau zu finden'
        ],
        correctAnswer: 1,
        explanation: 'Turniere waren wichtig für militärische Informationen. Führer beobachteten die Technik ihrer Gegner.'
      },
      {
        id: 'q-politics-2',
        text: 'Wie lange dauerte das Turnier "Feld des Goldtuchs" im Jahr 1520?',
        type: 'multiple-choice',
        options: [
          '3 Tage',
          '7 Tage',
          '17 Tage',
          '30 Tage'
        ],
        correctAnswer: 2,
        explanation: 'Das "Feld des Goldtuchs" zwischen Heinrich VIII. und Franz I. dauerte 17 Tage.'
      },
      {
        id: 'q-politics-3',
        text: 'Wer waren die Schiedsrichter bei Turnieren?',
        type: 'multiple-choice',
        options: [
          'Priester',
          'Herolde - Experten für Wappen',
          'Könige',
          'Die ältesten Ritter'
        ],
        correctAnswer: 1,
        explanation: 'Die Schiedsrichter waren Herolde. Sie kannten alle Wappen und schrieben alles genau auf.'
      }
    ]
  },
  {
    id: 't21',
    title: 'Kredite von Bankiers',
    content: 'Italienische Bankiers aus der Lombardei gaben Rittern Kredite für Turniere. Als Sicherheit nahmen sie Land. Ein Verlust beim Turnier konnte zum Ruin führen. Viele Ritter verloren so ihr Familienland.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/bankers.jpg',
        title: 'Kredite für Turniere'
      }
    ]
  },
  {
    id: 't22',
    title: 'Ein großes Geschäft',
    content: 'Um Turniere herum entstand eine ganze Industrie: Waffenschmiede, Sattler, Sänger, Essensverkäufer, Prostituierte. Ein großes Turnier zog bis zu 10.000 Zuschauer an. Die Stadt konnte damit viel Geld verdienen.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/festival.jpg',
        title: 'Geschäfte bei Turnieren'
      }
    ]
  },
  {
    id: 't23',
    title: 'Sehr teure Ausrüstung',
    content: 'Eine komplette Turnier-Ausrüstung kostete so viel wie 15 bis 20 Kriegspferde. Ein einzelner Turnierhelm kostete so viel wie ein Bauer in einem ganzen Jahr verdiente.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/expensive-armor.jpg',
        title: 'Teure Ausrüstung'
      }
    ]
  },
  {
    id: 't24',
    title: 'Training an der Quintana',
    content: 'Die Quintana war eine drehbare Zielscheibe mit einem Gegengewicht. Wenn der Ritter nicht genau in die Mitte traf, schlug ihn das Gegengewicht. Das trainierte Genauigkeit und schnelle Reaktionen.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/training.jpg',
        title: 'Training an der Quintana'
      }
    ]
  },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-econ-4',
        text: 'Was passierte mit einem Ritter, der sein Lösegeld nicht zahlen konnte?',
        type: 'multiple-choice',
        options: [
          'Nichts Schlimmes',
          'Er verlor sein Land und seine Familie wurde ruiniert',
          'Er musste ein Jahr ins Gefängnis',
          'Er musste die Stadt verlassen'
        ],
        correctAnswer: 1,
        explanation: 'Ein Verlust beim Turnier konnte zur Katastrophe werden. Viele Familien verloren ihr ganzes Land.'
      },
      {
        id: 'q-econ-5',
        text: 'Wie viel kostete eine komplette Turnier-Ausrüstung?',
        type: 'multiple-choice',
        options: [
          'So viel wie 5 Kriegspferde',
          'So viel wie 10 Kriegspferde',
          'So viel wie 15-20 Kriegspferde',
          'So viel wie 50 Kriegspferde'
        ],
        correctAnswer: 2,
        explanation: 'Eine komplette Turnier-Ausrüstung kostete so viel wie 15 bis 20 Kriegspferde.'
      },
      {
        id: 'q-econ-6',
        text: 'Wie viele Zuschauer kamen zu einem großen Turnier?',
        type: 'multiple-choice',
        options: [
          'Bis zu 1.000',
          'Bis zu 5.000',
          'Bis zu 10.000',
          'Bis zu 50.000'
        ],
        correctAnswer: 2,
        explanation: 'Ein großes Turnier konnte bis zu 10.000 Zuschauer anziehen.'
      }
    ]
  },
  {
    id: 't25',
    title: 'Die Rolle der Frauen',
    content: 'Frauen waren nicht nur Zuschauerinnen. Sie wählten den Sieger, wenn es keinen klaren Gewinner gab. Sie überreichten die Preise. Ihre Meinung konnte das Ergebnis ändern. Das gab ihnen viel soziale Macht.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/crowd.jpg',
        title: 'Rolle der Frauen'
      }
    ]
  },
  {
    id: 't26',
    title: 'Höfische Liebe',
    content: 'Nach der Idee der höfischen Liebe kämpfte ein Ritter im Namen einer Dame. Diese Dame war oft mit einem anderen Mann verheiratet. Das schuf ein komplexes System von sozialen Beziehungen und Intrigen.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/courtly-love.jpg',
        title: 'Höfische Liebe'
      }
    ]
  },
  {
    id: 't27',
    title: 'Mäntel über der Rüstung',
    content: 'Ritter trugen Stoffmäntel über der Rüstung - aber nicht nur zur Dekoration. Die Mäntel sollten verhindern, dass sich das Metall in der Sonne zu stark erhitzte. An heißen Tagen konnte die Temperatur in der Rüstung ohne Mantel auf 50 bis 60 Grad steigen.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/heraldic-coat.jpg',
        title: 'Mantel mit Wappen'
      }
    ]
  },
  {
    id: 't28',
    title: 'Bücher mit Wappen',
    content: 'Herolde schrieben Bücher mit den Wappen aller Teilnehmer. Diese Bücher sind heute eine wichtige Quelle für die Forschung über mittelalterliche Wappen und über die Geschichte adeliger Familien.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/heraldic-book.jpg',
        title: 'Buch mit Wappen'
      }
    ]
  },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-culture-1',
        text: 'Warum trugen Ritter Stoffmäntel über der Rüstung?',
        type: 'multiple-choice',
        options: [
          'Nur zur Dekoration',
          'Damit sich das Metall in der Sonne nicht zu stark erhitzte',
          'Um Rost zu verstecken',
          'Es war einfach Mode'
        ],
        correctAnswer: 1,
        explanation: 'Die Mäntel schützten vor Überhitzung. Ohne Mantel konnte es in der Rüstung 50 bis 60 Grad heiß werden.'
      },
      {
        id: 'q-culture-2',
        text: 'Was machten die Herolde bei Turnieren?',
        type: 'multiple-choice',
        options: [
          'Sie sagten nur die Namen an',
          'Sie schrieben Bücher mit allen Wappen der Teilnehmer',
          'Sie verkauften Eintrittskarten',
          'Sie kontrollierten die Ordnung'
        ],
        correctAnswer: 1,
        explanation: 'Herolde schrieben detaillierte Bücher mit Wappen. Diese Bücher sind heute wichtig für die Forschung.'
      },
      {
        id: 'q-culture-3',
        text: 'Welche Rolle spielten Frauen bei Turnieren?',
        type: 'multiple-choice',
        options: [
          'Sie durften nur zuschauen',
          'Sie wählten den Sieger bei unklaren Fällen und gaben die Preise',
          'Sie bereiteten das Essen zu',
          'Sie durften nicht zu Turnieren kommen'
        ],
        correctAnswer: 1,
        explanation: 'Frauen wählten den Sieger, wenn es keinen klaren Gewinner gab. Das gab ihnen viel Macht.'
      }
    ]
  },
  {
    id: 't29',
    title: 'Ärzte bei Turnieren',
    content: 'Die Ärzte bei Turnieren waren spezialisiert auf Verrenkungen, Blutstillung und auf das Entfernen von Splittern aus den Rüstungen. Die häufigste Verletzung war eine Gehirnerschütterung.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/medieval-medicine.jpg',
        title: 'Medizinische Hilfe'
      }
    ]
  },
  {
    id: 't30',
    title: 'Tod durch Hitze',
    content: 'Viele Ritter starben nicht durch Wunden, sondern durch einen Hitzschlag. In der vollen Rüstung unter der Sommersonne verlor ein Ritter bis zu 5 Liter Flüssigkeit pro Stunde aktiven Kampfes.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/heat-death.jpg',
        title: 'Hitzschlag'
      }
    ]
  },
  {
    id: 't31',
    title: 'Langzeitschäden',
    content: 'Professionelle Turnierkämpfer hatten mit 40 Jahren viele gebrochene Knochen, Arthritis und chronische Schmerzen. Viele litten auch an den Folgen wiederholter Gehirnerschütterungen.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/chronic-injuries.jpg',
        title: 'Chronische Schäden'
      }
    ]
  },
  {
    id: 't32',
    title: 'Von arm zu reich',
    content: 'William Marshal begann seine Karriere als armer jüngerer Sohn ohne eigenes Land. Dank seiner Turniersiege wurde er Regent von England und einer der reichsten Menschen des Königreichs. Er besaß Land in England, Irland, Normandie und Wales.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/william-marshal.jpg',
        title: 'William Marshal'
      }
    ]
  },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-safety-1',
        text: 'Was war die häufigste Verletzung bei Turnieren?',
        type: 'multiple-choice',
        options: ['Armbruch', 'Gehirnerschütterung', 'Beinbruch', 'Schnittwunden'],
        correctAnswer: 1,
        explanation: 'Gehirnerschütterungen waren am häufigsten, durch starke Schläge auf den Helm.'
      },
      {
        id: 'q-safety-2',
        text: 'Woran starben viele Ritter außer an Wunden?',
        type: 'multiple-choice',
        options: [
          'An Vergiftung',
          'An Hitzschlag',
          'An Infektionen',
          'An Altersschwäche'
        ],
        correctAnswer: 1,
        explanation: 'Viele Ritter starben an Hitzschlag. In der Rüstung unter der Sonne verloren sie bis zu 5 Liter Flüssigkeit pro Stunde.'
      },
      {
        id: 'q-safety-3',
        text: 'Welche Gesundheitsprobleme hatten professionelle Kämpfer mit 40 Jahren?',
        type: 'multiple-choice',
        options: [
          'Sie waren reich und gesund',
          'Viele Knochenbrüche, Arthritis und chronische Schmerzen',
          'Nur großen Ruhm',
          'Nichts Besonderes'
        ],
        correctAnswer: 1,
        explanation: 'Mit 40 Jahren hatten Turnierkämpfer viele Knochenbrüche, Arthritis und Folgen von Gehirnerschütterungen.'
      }
    ]
  },
  {
    id: 't33',
    title: 'Das Ende durch Schusswaffen',
    content: 'Ende des 16. Jahrhunderts machte die Entwicklung von Schusswaffen die schwere Kavallerie nutzlos. Turniere verloren ihre militärische Bedeutung und wurden nur noch zeremonielle Veranstaltungen.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/firearms.jpg',
        title: 'Revolution der Schusswaffen'
      }
    ]
  },
  {
    id: 't34',
    title: 'Sehr teure Veranstaltungen',
    content: 'Ein großes Turnier kostete so viel wie das Jahresbudget einer mittleren Stadt. Die Organisation des Turniers "Feld des Goldtuchs" kostete so viel wie mehrere Tonnen Gold.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/expensive-tournament.jpg',
        title: 'Kosten von Turnieren'
      }
    ]
  },
  {
    id: 't35',
    title: 'Romantische Geschichten',
    content: 'Romane über König Artus und die Ritter der Tafelrunde schufen ein idealisiertes Bild von Turnieren. Die Realität war viel blutiger. Diese literarische Tradition beeinflusst unser Bild vom Rittertum mehr als historische Fakten.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/history.png',
        title: 'Literarische Tradition'
      }
    ]
  },
  {
    id: 't36',
    title: 'Das letzte echte Turnier',
    content: 'Das letzte große Turnier im mittelalterlichen Stil fand 1559 statt. Bei diesem Turnier starb der französische König Heinrich II. Danach gab es Turniere nur noch als Theater-Aufführungen.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/last-tournament.jpg',
        title: 'Das letzte Turnier'
      }
    ]
  },
  {
    id: 'q9',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-decline-1',
        text: 'Was machte Turniere Ende des 16. Jahrhunderts nutzlos?',
        type: 'multiple-choice',
        options: [
          'Verbote der Kirche',
          'Die Entwicklung von Schusswaffen',
          'Es gab kein Geld mehr',
          'Die Zuschauer hatten kein Interesse mehr'
        ],
        correctAnswer: 1,
        explanation: 'Schusswaffen machten die schwere Kavallerie nutzlos. Damit verloren Turniere ihre militärische Bedeutung.'
      },
      {
        id: 'q-decline-2',
        text: 'Wann fand das letzte große mittelalterliche Turnier statt?',
        type: 'multiple-choice',
        options: [
          '1459',
          '1520',
          '1559',
          '1600'
        ],
        correctAnswer: 2,
        explanation: 'Das letzte große Turnier fand 1559 statt. Bei diesem Turnier starb Heinrich II.'
      },
      {
        id: 'q-decline-3',
        text: 'Wie viel kostete die Organisation des "Feldes des Goldtuchs"?',
        type: 'multiple-choice',
        options: [
          'So viel wie ein Monatsbudget der Stadt',
          'So viel wie ein Jahresbudget der Stadt',
          'So viel wie mehrere Tonnen Gold',
          'Es war ganz billig'
        ],
        correctAnswer: 2,
        explanation: 'Die Organisation kostete so viel wie mehrere Tonnen Gold - ein enormer Betrag.'
      }
    ]
  },
  {
    id: 't37',
    title: 'Moderne Rekonstruktionen',
    content: 'Im 21. Jahrhundert entstand die Bewegung des historischen Fechtens (HEMA). Sie studiert mittelalterliche Kampftechniken. Moderne "Ritter" studieren historische Texte und rekonstruieren Turniere so authentisch wie möglich.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/tournament-video.jpg',
        title: 'Moderne Rekonstruktionen'
      }
    ]
  },
  {
    id: 't38',
    title: 'Behurt: Vollkontakt-Sport',
    content: 'Moderner Behurt ist ein internationaler Sport mit Vollkontakt-Kämpfen in Rüstungen. Er ist den mittelalterlichen Buhurten sehr ähnlich. Teams aus verschiedenen Ländern kämpfen nach historischen Regeln.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/modern-buhurt.jpg',
        title: 'Moderner Behurt'
      }
    ]
  },
  {
    id: 't39',
    title: 'Archäologie von Turnieren',
    content: 'Archäologen finden alte Turnierplätze an bestimmten Merkmalen: Viele Rüstungsteile, Pferdeknochen und Münzen an einem Ort. Einige Funde widersprechen den romantischen Vorstellungen von Turnieren.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/archaeology.jpg',
        title: 'Archäologie von Turnieren'
      }
    ]
  },
  {
    id: 't40',
    title: 'Kulturelles Erbe',
    content: 'Turniere hinterließen Spuren in der Sprache (Turnier, Jury, Ritterlichkeit), im Sport (Springreiten, Rodeo) und in der Populärkultur. Unser modernes Bild vom Mittelalter ist stark durch Bilder von Turnieren geprägt.',
    duration: 3,
    media: [
      {
        type: 'image',
        url: '/media/tournaments/intro.jpg',
        title: 'Kulturelles Erbe'
      }
    ]
  },
  {
    id: 'q10',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-legacy-1',
        text: 'Was studiert die HEMA-Bewegung?',
        type: 'multiple-choice',
        options: [
          'Modernes Fechten',
          'Mittelalterliche Kampftechniken nach historischen Texten',
          'Japanische Kampfkunst',
          'Olympisches Fechten'
        ],
        correctAnswer: 1,
        explanation: 'HEMA (Historical European Martial Arts) studiert mittelalterliche Kampftechniken.'
      },
      {
        id: 'q-legacy-2',
        text: 'Was ist moderner Behurt?',
        type: 'multiple-choice',
        options: [
          'Eine historische Rekonstruktion',
          'Ein internationaler Sport mit Vollkontakt-Kämpfen in Rüstungen',
          'Eine Museums-Ausstellung',
          'Ein Computerspiel'
        ],
        correctAnswer: 1,
        explanation: 'Moderner Behurt ist ein internationaler Sport mit Vollkontakt-Kämpfen in Rüstungen nach historischen Regeln.'
      },
      {
        id: 'q-legacy-3',
        text: 'Wie finden Archäologen alte Turnierplätze?',
        type: 'multiple-choice',
        options: [
          'Nach schriftlichen Quellen',
          'An vielen Rüstungsteilen, Pferdeknochen und Münzen',
          'An Resten von Tribünen',
          'An Zeichnungen auf alten Karten'
        ],
        correctAnswer: 1,
        explanation: 'Archäologen finden Turnierplätze an bestimmten Merkmalen: Rüstungsteile, Pferdeknochen und Münzen.'
      }
    ]
  }
]

// Deutsches Abschluss-Quiz (B2-Niveau) mit allen 30 Fragen
const ritterturniereFinalQuizDE: QuizBlock = {
  id: 'quiz-tournaments',
  title: 'Abschlussquiz: Ritterturniere',
  questions: [
    {
      id: 'final-q1',
      text: 'Warum gab die Kirche getöteten Turnierkämpfern keine christliche Beerdigung?',
      type: 'multiple-choice',
      options: [
        'Sie sah Turniere als gefährliches Spiel und Sünde',
        'Die Ritter zahlten keine Steuern an die Kirche',
        'Turniere fanden am Sonntag statt',
        'Die Kirche hatte Angst vor Konkurrenz'
      ],
      correctAnswer: 0,
      explanation: 'Papst Innozenz II. hielt Turniere für ein gefährliches Spiel.'
    },
    {
      id: 'final-q2',
      text: 'Wie viele Ritter nahmen William Marshal und sein Partner in zwei Jahren gefangen?',
      type: 'multiple-choice',
      options: ['50', '103', '200', '25'],
      correctAnswer: 1,
      explanation: 'In zwei Jahren nahmen sie 103 Ritter gefangen.'
    },
    {
      id: 'final-q3',
      text: 'Wie viele Teilnehmer starben im 12. Jahrhundert bei Turnieren?',
      type: 'multiple-choice',
      options: ['Etwa 1%', 'Etwa 5%', 'Etwa 10%', 'Etwa 20%'],
      correctAnswer: 2,
      explanation: 'Ungefähr jeder Zehnte starb.'
    },
    {
      id: 'final-q4',
      text: 'Wie viel musste ein Graf für die Teilnahme zahlen?',
      type: 'multiple-choice',
      options: ['4 Mark', '10 Mark', '20 Mark', '50 Mark'],
      correctAnswer: 2,
      explanation: 'Grafen zahlten 20 Mark - sehr viel Geld.'
    },
    {
      id: 'final-q5',
      text: 'Welcher König starb 1559 bei einem Turnier?',
      type: 'multiple-choice',
      options: [
        'Der englische König Richard',
        'Der französische König Heinrich II.',
        'Der deutsche Kaiser',
        'William Marshal'
      ],
      correctAnswer: 1,
      explanation: 'Der französische König Heinrich II. starb durch ein Stück einer Lanze.'
    },
    {
      id: 'final-q6',
      text: 'Wer lieh den Rittern Geld für Turniere?',
      type: 'multiple-choice',
      options: [
        'Die Kirche',
        'Italienische Bankiers',
        'Die königliche Kasse',
        'Die Ritter selbst'
      ],
      correctAnswer: 1,
      explanation: 'Italienische Bankiers gaben Kredite.'
    },
    {
      id: 'final-q7',
      text: 'Welche Form war einem echten Krieg am ähnlichsten?',
      type: 'multiple-choice',
      options: ['Tjost', 'Buhurt', 'Kampf zu Fuß', 'Pas d\'armes'],
      correctAnswer: 1,
      explanation: 'Buhurt - Kampf von vielen.'
    },
    {
      id: 'final-q8',
      text: 'Wann entwickelte sich der Tjost?',
      type: 'multiple-choice',
      options: ['Im 11. Jh.', 'Im 12. Jh.', 'Im 14. Jh.', 'Im 16. Jh.'],
      correctAnswer: 2,
      explanation: 'Der Tjost entwickelte sich im 14. Jahrhundert.'
    },
    {
      id: 'final-q9',
      text: 'Was bedeutet "Pas d\'armes"?',
      type: 'multiple-choice',
      options: [
        'Kampf von vielen',
        'Durchgang der Waffen',
        'Duell zu Pferd',
        'Kampf zu Fuß'
      ],
      correctAnswer: 1,
      explanation: 'Pas d\'armes - "Durchgang der Waffen".'
    },
    {
      id: 'final-q10',
      text: 'Warum waren die Lanzen innen hohl?',
      type: 'multiple-choice',
      options: [
        'Damit sie leichter waren',
        'Damit sie spektakulär zerbrachen',
        'Für Geld',
        'Für Balance'
      ],
      correctAnswer: 1,
      explanation: 'Für spektakuläres Zerbrechen.'
    },
    {
      id: 'final-q11',
      text: 'Wie schwer waren Turnier-Rüstungen?',
      type: 'multiple-choice',
      options: ['20-25 kg', '30-35 kg', '40-50 kg', '60-70 kg'],
      correctAnswer: 2,
      explanation: '40 bis 50 Kilogramm.'
    },
    {
      id: 'final-q12',
      text: 'Wann kam die Barriere beim Tjost?',
      type: 'multiple-choice',
      options: ['Im 12. Jh.', 'Im 13. Jh.', 'Im 15. Jh.', 'Im 16. Jh.'],
      correctAnswer: 2,
      explanation: 'Die Barriere kam im 15. Jahrhundert.'
    },
    {
      id: 'final-q13',
      text: 'Warum schauten Militärführer bei Turnieren zu?',
      type: 'multiple-choice',
      options: [
        'Zur Unterhaltung',
        'Für Spionage',
        'Für Wetten',
        'Um eine Frau zu finden'
      ],
      correctAnswer: 1,
      explanation: 'Für Spionage und militärische Informationen.'
    },
    {
      id: 'final-q14',
      text: 'Wie lange dauerte das "Feld des Goldtuchs"?',
      type: 'multiple-choice',
      options: ['3 Tage', '7 Tage', '17 Tage', '30 Tage'],
      correctAnswer: 2,
      explanation: 'Das Turnier dauerte 17 Tage.'
    },
    {
      id: 'final-q15',
      text: 'Wer waren die Schiedsrichter?',
      type: 'multiple-choice',
      options: [
        'Priester',
        'Herolde',
        'Könige',
        'Älteste Ritter'
      ],
      correctAnswer: 1,
      explanation: 'Herolde - Experten für Wappen.'
    },
    {
      id: 'final-q16',
      text: 'Was passierte mit einem Ritter, der nicht zahlen konnte?',
      type: 'multiple-choice',
      options: [
        'Nichts',
        'Er verlor sein Land',
        'Gefängnis',
        'Verbannung'
      ],
      correctAnswer: 1,
      explanation: 'Er verlor sein Land und seine Familie wurde ruiniert.'
    },
    {
      id: 'final-q17',
      text: 'Was kostete eine Turnier-Ausrüstung?',
      type: 'multiple-choice',
      options: [
        'Wie 5 Pferde',
        'Wie 10 Pferde',
        'Wie 15-20 Pferde',
        'Wie 50 Pferde'
      ],
      correctAnswer: 2,
      explanation: 'So viel wie 15 bis 20 Pferde.'
    },
    {
      id: 'final-q18',
      text: 'Wie viele Zuschauer kamen zu großen Turnieren?',
      type: 'multiple-choice',
      options: ['Bis 1.000', 'Bis 5.000', 'Bis 10.000', 'Bis 50.000'],
      correctAnswer: 2,
      explanation: 'Bis zu 10.000 Zuschauer.'
    },
    {
      id: 'final-q19',
      text: 'Warum trugen Ritter Mäntel über der Rüstung?',
      type: 'multiple-choice',
      options: [
        'Zur Dekoration',
        'Gegen Überhitzung',
        'Rost verstecken',
        'Es war Mode'
      ],
      correctAnswer: 1,
      explanation: 'Schutz vor Hitze bis 50-60 Grad.'
    },
    {
      id: 'final-q20',
      text: 'Was machten die Herolde?',
      type: 'multiple-choice',
      options: [
        'Nur Namen ansagen',
        'Bücher mit Wappen schreiben',
        'Tickets verkaufen',
        'Ordnung kontrollieren'
      ],
      correctAnswer: 1,
      explanation: 'Sie schrieben Bücher mit Wappen.'
    },
    {
      id: 'final-q21',
      text: 'Welche Rolle spielten Frauen?',
      type: 'multiple-choice',
      options: [
        'Nur zuschauen',
        'Sieger wählen und Preise geben',
        'Essen zubereiten',
        'Nicht zugelassen'
      ],
      correctAnswer: 1,
      explanation: 'Sie hatten viel soziale Macht.'
    },
    {
      id: 'final-q22',
      text: 'Häufigste Verletzung?',
      type: 'multiple-choice',
      options: ['Armbruch', 'Gehirnerschütterung', 'Beinbruch', 'Schnittwunden'],
      correctAnswer: 1,
      explanation: 'Gehirnerschütterung durch Helmschläge.'
    },
    {
      id: 'final-q23',
      text: 'Woran starben Ritter außer an Wunden?',
      type: 'multiple-choice',
      options: [
        'Vergiftung',
        'Hitzschlag',
        'Infektionen',
        'Altersschwäche'
      ],
      correctAnswer: 1,
      explanation: 'An Hitzschlag in der Rüstung.'
    },
    {
      id: 'final-q24',
      text: 'Was hatten Kämpfer mit 40 Jahren?',
      type: 'multiple-choice',
      options: [
        'Gesundheit',
        'Knochenbrüche und Arthritis',
        'Nur Ruhm',
        'Nichts'
      ],
      correctAnswer: 1,
      explanation: 'Viele Knochenbrüche, Arthritis, Schmerzen.'
    },
    {
      id: 'final-q25',
      text: 'Was machte Turniere nutzlos?',
      type: 'multiple-choice',
      options: [
        'Kirchenverbote',
        'Schusswaffen',
        'Geldmangel',
        'Kein Interesse'
      ],
      correctAnswer: 1,
      explanation: 'Entwicklung von Schusswaffen.'
    },
    {
      id: 'final-q26',
      text: 'Wann war das letzte große Turnier?',
      type: 'multiple-choice',
      options: ['1459', '1520', '1559', '1600'],
      correctAnswer: 2,
      explanation: 'Im Jahr 1559 starb Heinrich II.'
    },
    {
      id: 'final-q27',
      text: 'Was kostete das "Feld des Goldtuchs"?',
      type: 'multiple-choice',
      options: [
        'Monatsbudget',
        'Jahresbudget',
        'Mehrere Tonnen Gold',
        'Ganz billig'
      ],
      correctAnswer: 2,
      explanation: 'So viel wie mehrere Tonnen Gold.'
    },
    {
      id: 'final-q28',
      text: 'Was studiert HEMA?',
      type: 'multiple-choice',
      options: [
        'Modernes Fechten',
        'Mittelalterliche Techniken',
        'Japanische Kunst',
        'Olympisches Fechten'
      ],
      correctAnswer: 1,
      explanation: 'Mittelalterliche Kampftechniken.'
    },
    {
      id: 'final-q29',
      text: 'Was ist moderner Behurt?',
      type: 'multiple-choice',
      options: [
        'Rekonstruktion',
        'Sport mit Vollkontakt in Rüstungen',
        'Ausstellung',
        'Spiel'
      ],
      correctAnswer: 1,
      explanation: 'Internationaler Vollkontakt-Sport.'
    },
    {
      id: 'final-q30',
      text: 'Wie finden Archäologen Turnierplätze?',
      type: 'multiple-choice',
      options: [
        'Nach Quellen',
        'An Rüstungen, Knochen, Münzen',
        'Nach Tribünen',
        'Nach Karten'
      ],
      correctAnswer: 1,
      explanation: 'An Rüstungsteilen, Knochen und Münzen.'
    }
  ]
}

// Deutsche Übersetzungen (B2-Niveau) für die Sieben Weltwunder
const sevenWondersSlidesDE: Slide[] = [
  // Einführung (1-4)
  {
    id: 'w1',
    title: 'Die Liste aus Alexandria',
    content: 'Die klassische Liste der Sieben Weltwunder entstand im 3. Jahrhundert v. Chr. in Alexandria. Sie war ein antiker Reiseführer für wohlhabende Touristen im Mittelmeerraum. Die Liste spiegelte die griechische kulturelle Vorherrschaft wider – alle Wunder befanden sich in der den Griechen bekannten Welt.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/ancient-list.jpg', title: 'Antike Liste' }]
  },
  {
    id: 'w2',
    title: 'Ein politisches Instrument',
    content: 'Jedes "Weltwunder" entstand nicht aus ästhetischen Gründen, sondern als Demonstration politischer Macht. Diese Bauwerke kosteten so viel wie die Unterhaltung einer Armee über mehrere Jahre. Herrscher nutzten sie als Propaganda ihrer Größe.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/political-power.jpg', title: 'Demonstration der Macht' }]
  },
  {
    id: 'w3',
    title: 'Tourismus in der Antike',
    content: 'Wohlhabende Griechen und Römer reisten extra, um diese Wunder zu sehen. Es gab Reiseführer, Führer und eine Souvenir-Industrie. Der Besuch aller sieben Wunder galt als Zeichen von Bildung und Reichtum.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/ancient-tourism.jpg', title: 'Antiker Tourismus' }]
  },
  {
    id: 'w4',
    title: 'Nur eines blieb erhalten',
    content: 'Von den sieben Weltwundern steht heute nur noch die Cheops-Pyramide. Die anderen sechs wurden durch Erdbeben, Kriege zerstört oder als Baumaterial abgebaut. Das zeigt die Vergänglichkeit selbst der größten Bauwerke.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/only-one-left.jpg', title: 'Das einzig erhaltene' }]
  },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-intro-1',
        text: 'Wann und wo entstand die klassische Liste der Sieben Weltwunder?',
        type: 'multiple-choice',
        options: [
          'Im 1. Jahrhundert in Rom',
          'Im 3. Jahrhundert v. Chr. in Alexandria',
          'Im 5. Jahrhundert v. Chr. in Athen',
          'Im 1. Jahrhundert v. Chr. in Babylon'
        ],
        correctAnswer: 1,
        explanation: 'Die Liste entstand im 3. Jahrhundert v. Chr. in Alexandria als Reiseführer für wohlhabende Touristen.'
      },
      {
        id: 'q-intro-2',
        text: 'Wozu wurden die "Weltwunder" hauptsächlich gebaut?',
        type: 'multiple-choice',
        options: [
          'Für Schönheit und Kunst',
          'Zur Demonstration politischer Macht',
          'Für religiöse Zwecke',
          'Zur Unterhaltung des Volkes'
        ],
        correctAnswer: 1,
        explanation: 'Jedes Weltwunder wurde als Demonstration politischer Macht und als Propaganda für die Größe des Herrschers gebaut.'
      },
      {
        id: 'q-intro-3',
        text: 'Wie viele der Sieben Weltwunder sind bis heute erhalten?',
        type: 'multiple-choice',
        options: [
          'Alle sieben',
          'Fünf',
          'Drei',
          'Nur eines – die Cheops-Pyramide'
        ],
        correctAnswer: 3,
        explanation: 'Nur die Cheops-Pyramide ist erhalten geblieben. Die anderen wurden durch Erdbeben, Kriege zerstört oder abgebaut.'
      }
    ]
  },
  // Cheops-Pyramide (5-8)
  {
    id: 'w5',
    title: 'Das älteste Weltwunder',
    content: 'Die Cheops-Pyramide wurde um 2560 v. Chr. erbaut und war 3800 Jahre lang das höchste Bauwerk der Welt. Ihre Höhe beträgt 146,5 Meter, was einem modernen 48-stöckigen Gebäude entspricht.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/pyramid-giza.jpg', title: 'Cheops-Pyramide' }]
  },
  {
    id: 'w6',
    title: 'Das Ausmaß des Baus',
    content: 'Die Pyramide besteht aus 2,3 Millionen Steinblöcken mit einem Gewicht von jeweils 2,5-15 Tonnen. Das Gesamtgewicht des Bauwerks beträgt etwa 6 Millionen Tonnen. Der Transport und die Installation einer solchen Menge Stein erforderte unglaubliche Logistik.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/pyramid-construction.jpg', title: 'Bauausmaß' }]
  },
  {
    id: 'w7',
    title: 'Die Arbeitskraft',
    content: 'Etwa 100.000 Menschen arbeiteten 20 Jahre lang am Bau. Es waren keine Sklaven, sondern bezahlte Arbeiter, die Lohn, Essen und medizinische Versorgung erhielten. Archäologen fanden Reste von Arbeitersiedlungen mit Bäckereien und Krankenhäusern.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/pyramid-workers.jpg', title: 'Pyramidenarbeiter' }]
  },
  {
    id: 'w8',
    title: 'Die Projektkosten',
    content: 'Nach heutigen Schätzungen hätte der Bau der Cheops-Pyramide 5 Milliarden Dollar gekostet. Es war ein Projekt, das die Ressourcen ganz Ägyptens über zwei Jahrzehnte mobilisierte.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/pyramid-cost.jpg', title: 'Kosten des Megaprojekts' }]
  },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-pyramid-1',
        text: 'Wie lange war die Cheops-Pyramide das höchste Bauwerk der Welt?',
        type: 'multiple-choice',
        options: ['1000 Jahre', '2000 Jahre', '3800 Jahre', '5000 Jahre'],
        correctAnswer: 2,
        explanation: 'Die Pyramide war 3800 Jahre lang das höchste Bauwerk – bis zum 19. Jahrhundert.'
      },
      {
        id: 'q-pyramid-2',
        text: 'Aus wie vielen Steinblöcken besteht die Cheops-Pyramide?',
        type: 'multiple-choice',
        options: ['500.000 Blöcken', '1 Million Blöcken', '2,3 Millionen Blöcken', '5 Millionen Blöcken'],
        correctAnswer: 2,
        explanation: 'Die Pyramide besteht aus 2,3 Millionen Steinblöcken mit einem Gewicht von jeweils 2,5-15 Tonnen.'
      },
      {
        id: 'q-pyramid-3',
        text: 'Wer baute die Cheops-Pyramide?',
        type: 'multiple-choice',
        options: ['Sklaven', 'Kriegsgefangene', 'Bezahlte Arbeiter, die Lohn erhielten', 'Ausländer'],
        correctAnswer: 2,
        explanation: 'Es waren bezahlte Arbeiter, die Lohn, Essen und medizinische Versorgung erhielten.'
      }
    ]
  },
  // Hängende Gärten (9-12)
  {
    id: 'w9',
    title: 'Hängende Gärten: Legende oder Realität?',
    content: 'Die Hängenden Gärten der Semiramis in Babylon sind das einzige Weltwunder, dessen Existenz archäologisch nicht bewiesen ist. Es gibt weder Ruinen noch zuverlässige historische Aufzeichnungen. Möglicherweise gab es eine Verwechslung mit anderen Gärten.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/hanging-gardens.jpg', title: 'Hängende Gärten' }]
  },
  {
    id: 'w10',
    title: 'Eine ingenieurtechnische Aufgabe',
    content: 'Falls die Gärten existierten, waren sie eine unglaubliche Ingenieurleistung: eine mehrstöckige Konstruktion von 25 Metern Höhe mit einem System zum Hochpumpen von Wasser aus dem Euphrat. Im trockenen Klima Babylons erforderte die Pflege der Gärten die ständige Arbeit hunderter Menschen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/gardens-engineering.jpg', title: 'Ingenieurtechnische Lösung' }]
  },
  {
    id: 'w11',
    title: 'Unterhaltskosten',
    content: 'Das tägliche Hochpumpen von Wasser auf 25 Meter Höhe zur Bewässerung eines Hektars Gärten erforderte die Arbeit von 50-100 Menschen mit Wasserrädern. Die jährlichen Unterhaltskosten der Gärten entsprachen dem Budget einer kleinen Stadt.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/gardens-maintenance.jpg', title: 'Gartenpflege' }]
  },
  {
    id: 'w12',
    title: 'Ein politisches Symbol',
    content: 'Der Legende nach ließ König Nebukadnezar II. die Gärten für seine medische Frau bauen, die sich nach den grünen Bergen ihrer Heimat sehnte. In Wirklichkeit waren sie ein Symbol für Babylons Macht über die Natur und benachbarte Völker.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/gardens-politics.jpg', title: 'Politische Symbolik' }]
  },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-gardens-1',
        text: 'Was ist an den Hängenden Gärten der Semiramis unter den Sieben Weltwundern einzigartig?',
        type: 'multiple-choice',
        options: [
          'Das älteste Weltwunder',
          'Das einzige Weltwunder, dessen Existenz nicht bewiesen ist',
          'Das höchste Bauwerk',
          'Das einzig erhaltene'
        ],
        correctAnswer: 1,
        explanation: 'Die Existenz der Hängenden Gärten ist archäologisch nicht bewiesen – es gibt weder Ruinen noch zuverlässige Aufzeichnungen.'
      },
      {
        id: 'q-gardens-2',
        text: 'Wie viele Menschen wurden für die tägliche Bewässerung der Gärten benötigt?',
        type: 'multiple-choice',
        options: ['10-20 Menschen', '50-100 Menschen', '200-300 Menschen', '1000 Menschen'],
        correctAnswer: 1,
        explanation: 'Das tägliche Hochpumpen von Wasser erforderte die Arbeit von 50-100 Menschen mit Wasserhebeanlagen.'
      },
      {
        id: 'q-gardens-3',
        text: 'Welchem Budget entsprachen die jährlichen Unterhaltskosten der Gärten?',
        type: 'multiple-choice',
        options: [
          'Dem Monatsgehalt eines Beamten',
          'Dem Budget einer kleinen Stadt',
          'Der Jahresernte eines Feldes',
          'Den Kosten eines Hauses'
        ],
        correctAnswer: 1,
        explanation: 'Die jährlichen Unterhaltskosten der Gärten entsprachen dem Budget einer kleinen Stadt.'
      }
    ]
  },
  // Zeus-Statue (13-16)
  {
    id: 'w13',
    title: 'Zeus-Statue: Gold und Elfenbein',
    content: 'Die Zeus-Statue in Olympia wurde um 435 v. Chr. von Phidias geschaffen. Die Höhe der Statue betrug 13 Meter. Der Körper war mit Elfenbeinplatten bedeckt, Kleidung und Schmuck mit über 200 Kilogramm Gold.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/zeus-statue.jpg', title: 'Zeus-Statue' }]
  },
  {
    id: 'w14',
    title: 'Die Chryselephantine-Technik',
    content: 'Die Chryselephantine-Technik (Gold + Elfenbein) erforderte die Stoßzähne hunderter Elefanten aus Afrika. Der Transport von Elfenbein kostete ein Vermögen. Jeder Stoßzahn kostete so viel wie das Jahreseinkommen eines Handwerkers.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/chryselephantine.jpg', title: 'Gold und Elfenbein' }]
  },
  {
    id: 'w15',
    title: 'Projektfinanzierung',
    content: 'Die Statue wurde aus der Kriegsbeute nach dem Sieg über die Perser finanziert. Die Kosten für Materialien und Phidias\' Arbeit betrugen etwa 400-500 Talente – das Jahreseinkommen von 10.000 Arbeitern.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/zeus-financing.jpg', title: 'Kriegsbeute' }]
  },
  {
    id: 'w16',
    title: 'Das Schicksal der Statue',
    content: 'Im 5. Jahrhundert n. Chr. wurde die Statue nach Konstantinopel gebracht, wo sie 475 bei einem Brand umkam. Das Gold war schon früher entfernt worden – in der Zeit der Christianisierung galt die Statue als heidnisches Götzenbild.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/zeus-fate.jpg', title: 'Zerstörung der Statue' }]
  },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-zeus-1',
        text: 'Wie viel wog das Gold auf der Zeus-Statue?',
        type: 'multiple-choice',
        options: ['50 Kilogramm', '100 Kilogramm', 'Über 200 Kilogramm', '500 Kilogramm'],
        correctAnswer: 2,
        explanation: 'Kleidung und Schmuck der Statue waren mit über 200 Kilogramm Gold bedeckt.'
      },
      {
        id: 'q-zeus-2',
        text: 'Woher kam das Geld für den Bau der Zeus-Statue?',
        type: 'multiple-choice',
        options: [
          'Aus Steuern der Bürger',
          'Aus der Kriegsbeute nach dem Sieg über die Perser',
          'Reiche Bürger spendeten',
          'Geliehen von anderen Städten'
        ],
        correctAnswer: 1,
        explanation: 'Die Statue wurde aus der Kriegsbeute nach dem Sieg über das Persische Reich finanziert.'
      },
      {
        id: 'q-zeus-3',
        text: 'Wann und wie kam die Zeus-Statue um?',
        type: 'multiple-choice',
        options: [
          'Durch ein Erdbeben in Olympia zerstört',
          'Bei einem Brand in Konstantinopel im 5. Jahrhundert umgekommen',
          'Zu Münzen eingeschmolzen',
          'Beim Transport versunken'
        ],
        correctAnswer: 1,
        explanation: 'Im 5. Jahrhundert wurde die Statue nach Konstantinopel gebracht, wo sie 475 bei einem Brand umkam.'
      }
    ]
  },
  // Artemis-Tempel (17-20)
  {
    id: 'w17',
    title: 'Artemis-Tempel: Sieben Mal abgebrannt',
    content: 'Der Artemis-Tempel in Ephesos war einer der größten der Antike – 115 Meter lang, mit 127 Säulen von 18 Metern Höhe. Sein Bau dauerte 120 Jahre und kostete so viel wie die Unterhaltung einer Flotte von 100 Schiffen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/artemis-temple.jpg', title: 'Artemis-Tempel' }]
  },
  {
    id: 'w18',
    title: 'Herostratos: Ruhm durch Brandstiftung',
    content: 'Im Jahr 356 v. Chr. zündete Herostratos den Tempel an, um seinen Namen unsterblich zu machen. Er wurde hingerichtet und sein Name verboten, aber gerade wegen des Verbots blieb er in der Geschichte. "Herostratischer Ruhm" wurde zum geflügelten Wort.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/herostratus.jpg', title: 'Herostrat-Brand' }]
  },
  {
    id: 'w19',
    title: 'Der Tempel als Bank',
    content: 'Der Artemis-Tempel funktionierte als größte Bank Kleinasiens. Hier wurden Einlagen aufbewahrt und Kredite vergeben. Die Priester kontrollierten Finanzgeschäfte, die mit einer modernen Zentralbank vergleichbar waren.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/artemis-bank.jpg', title: 'Tempel-Bank' }]
  },
  {
    id: 'w20',
    title: 'Goten und Plünderung',
    content: 'Im Jahr 262 plünderten die Goten den Tempel und nahmen alle Wertgegenstände mit. Im 4. Jahrhundert schloss Kaiser Theodosius den Tempel endgültig als heidnisches Heiligtum. Der Marmor wurde für Kirchen und Dämme verwendet.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/artemis-destruction.jpg', title: 'Tempelplünderung' }]
  },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-artemis-1',
        text: 'Wie lange dauerte der Bau des Artemis-Tempels?',
        type: 'multiple-choice',
        options: ['20 Jahre', '50 Jahre', '120 Jahre', '200 Jahre'],
        correctAnswer: 2,
        explanation: 'Der Bau des Artemis-Tempels dauerte 120 Jahre.'
      },
      {
        id: 'q-artemis-2',
        text: 'Warum zündete Herostratos den Artemis-Tempel an?',
        type: 'multiple-choice',
        options: [
          'Aus Rache an den Priestern',
          'Um seinen Namen unsterblich zu machen',
          'Auf Befehl des Königs',
          'Aus Versehen'
        ],
        correctAnswer: 1,
        explanation: 'Herostratos zündete den Tempel 356 v. Chr. an, um seinen Namen für die Ewigkeit zu verewigen.'
      },
      {
        id: 'q-artemis-3',
        text: 'Welche zusätzliche Funktion erfüllte der Artemis-Tempel?',
        type: 'multiple-choice',
        options: ['Militärfestung', 'Größte Bank Kleinasiens', 'Gefängnis', 'Bibliothek'],
        correctAnswer: 1,
        explanation: 'Der Tempel funktionierte als größte Bank – hier wurden Einlagen aufbewahrt und Kredite vergeben.'
      }
    ]
  },
  // Mausoleum (21-24)
  {
    id: 'w21',
    title: 'Mausoleum in Halikarnassos',
    content: 'Das Mausoleum war das Grabmal von König Mausolos, erbaut 353 v. Chr. Die Höhe betrug 45 Meter, was es zu einem der höchsten Gebäude der Antike machte. Der Name "Mausoleum" stammt von Mausolos.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/mausoleum.jpg', title: 'Mausoleum' }]
  },
  {
    id: 'w22',
    title: 'Familienprojekt',
    content: 'Am Mausoleum arbeiteten vier der besten Bildhauer Griechenlands – Skopas, Leochares, Bryaxis und Timotheos. Jeder war für eine Seite des Gebäudes verantwortlich. Die Baukosten entsprachen dem Zehn-Jahres-Einkommen der gesamten Region Karien.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/mausoleum-artists.jpg', title: 'Vier Meister' }]
  },
  {
    id: 'w23',
    title: 'Die Auftraggeberin Ehefrau',
    content: 'Nach Mausolos\' Tod setzte seine Frau und Schwester Artemisia II. den Bau fort. Sie regierte Karien und unterdrückte Aufstände brutal. Das Mausoleum war weniger ein Denkmal der Liebe als ein Symbol dynastischer Macht.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/artemisia.jpg', title: 'Königin Artemisia' }]
  },
  {
    id: 'w24',
    title: 'Zerlegung für eine Festung',
    content: 'Das Mausoleum stand 1800 Jahre und überlebte mehrere Erdbeben. 1494 bauten die Johanniter es ab und verwendeten den Marmor für den Bau der Festung St. Peter. Teile der Skulpturen befinden sich heute im Britischen Museum.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/mausoleum-stones.jpg', title: 'Zerlegung für Steine' }]
  },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-mausoleum-1',
        text: 'Von wessen Namen stammt das Wort "Mausoleum"?',
        type: 'multiple-choice',
        options: [
          'Vom Namen des Architekten',
          'Vom Namen des Königs Mausolos',
          'Vom Namen der Stadt',
          'Vom griechischen Wort "Grab"'
        ],
        correctAnswer: 1,
        explanation: 'Das Wort "Mausoleum" stammt vom Namen des karischen Königs Mausolos.'
      },
      {
        id: 'q-mausoleum-2',
        text: 'Wer setzte den Bau des Mausoleums nach Mausolos\' Tod fort?',
        type: 'multiple-choice',
        options: [
          'Sein Sohn',
          'Sein Bruder',
          'Seine Frau und Schwester Artemisia II.',
          'Alexander der Große'
        ],
        correctAnswer: 2,
        explanation: 'Nach Mausolos\' Tod setzte seine Frau und Schwester Artemisia II. den Bau fort.'
      },
      {
        id: 'q-mausoleum-3',
        text: 'Wer baute das Mausoleum ab und wofür?',
        type: 'multiple-choice',
        options: [
          'Römer für ein Theater',
          'Einheimische für Häuser',
          'Johanniter für eine Festung',
          'Türken für eine Moschee'
        ],
        correctAnswer: 2,
        explanation: '1494 bauten die Johanniter das Mausoleum für den Bau einer Festung ab.'
      }
    ]
  },
  // Koloss von Rhodos (25-28)
  {
    id: 'w25',
    title: 'Koloss von Rhodos: Bronze-Gigant',
    content: 'Der Koloss von Rhodos war eine 33 Meter hohe Bronzestatue des Gottes Helios, erbaut 280 v. Chr. Das Gewicht der Statue betrug etwa 13 Tonnen Bronze. Sie war ein Siegesdenkmal von Rhodos über die Belagerung durch Demetrios Poliorketes.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/colossus-rhodes.jpg', title: 'Koloss von Rhodos' }]
  },
  {
    id: 'w26',
    title: 'Finanzierung aus Kriegsbeute',
    content: 'Die Statue wurde mit Geld aus dem Verkauf von Belagerungsmaschinen gebaut, die die Armee des Demetrios zurückgelassen hatte. Die Belagerungstürme waren so wertvoll, dass ihr Verkauf das gesamte Projekt finanzierte. Militärtechnologie war wertvoller als Gold.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/siege-equipment.jpg', title: 'Belagerungstechnik' }]
  },
  {
    id: 'w27',
    title: 'Bautechnologie',
    content: 'Die Statue wurde 12 Jahre lang gebaut. Der Bildhauer Chares baute sie von unten nach oben und schüttete zur Arbeit in der Höhe Erde drum herum auf. Innen gab es ein Eisengerüst, außen Bronzeplatten. Nach Fertigstellung wurde die Erde entfernt.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/colossus-construction.jpg', title: 'Bau des Koloss' }]
  },
  {
    id: 'w28',
    title: '56 Jahre stand er, 800 Jahre lag er',
    content: 'Der Koloss stand nur 56 Jahre und stürzte 226 v. Chr. durch ein Erdbeben ein. Die Trümmer lagen 800 Jahre auf dem Boden – ein Orakel verbot, die Statue wieder aufzubauen. 654 verkauften Araber die Bronzetrümmer als Altmetall.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/colossus-ruins.jpg', title: 'Koloss-Trümmer' }]
  },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-colossus-1',
        text: 'Wie hoch war der Koloss von Rhodos?',
        type: 'multiple-choice',
        options: ['20 Meter', '33 Meter', '50 Meter', '100 Meter'],
        correctAnswer: 1,
        explanation: 'Der Koloss von Rhodos war 33 Meter hoch und wog etwa 13 Tonnen Bronze.'
      },
      {
        id: 'q-colossus-2',
        text: 'Woher kam das Geld für den Bau des Koloss?',
        type: 'multiple-choice',
        options: [
          'Aus Steuern',
          'Aus dem Verkauf feindlicher Belagerungsmaschinen',
          'Geschenk des ägyptischen Königs',
          'Gesammelt von Bürgern'
        ],
        correctAnswer: 1,
        explanation: 'Die Statue wurde mit Geld aus dem Verkauf der Belagerungstechnik gebaut, die Demetrios\' Armee zurückgelassen hatte.'
      },
      {
        id: 'q-colossus-3',
        text: 'Wie lange stand der Koloss bis zum Erdbeben?',
        type: 'multiple-choice',
        options: ['20 Jahre', '56 Jahre', '100 Jahre', '500 Jahre'],
        correctAnswer: 1,
        explanation: 'Der Koloss stand nur 56 Jahre und stürzte 226 v. Chr. durch ein Erdbeben ein.'
      }
    ]
  },
  // Leuchtturm von Alexandria (29-32)
  {
    id: 'w29',
    title: 'Leuchtturm von Alexandria: Wolkenkratzer der Antike',
    content: 'Der Pharos-Leuchtturm in Alexandria war 120-140 Meter hoch und nach den Pyramiden das zweithöchste Bauwerk der Antike. Er wurde um 280 v. Chr. unter Ptolemaios II. erbaut. Das Licht des Leuchtturms war 50 Kilometer weit sichtbar.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/pharos-lighthouse.jpg', title: 'Leuchtturm von Alexandria' }]
  },
  {
    id: 'w30',
    title: 'Funktion und Technologie',
    content: 'Der Leuchtturm diente nicht nur der Navigation, sondern auch als militärischer Beobachtungsposten. Auf der Spitze brannte viel Holz, und ein Spiegelsystem verstärkte das Licht. Tagsüber war der Rauch weithin sichtbar.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/pharos-technology.jpg', title: 'Leuchtturm-Technologie' }]
  },
  {
    id: 'w31',
    title: 'Unterhaltskosten',
    content: 'Der Leuchtturm erforderte die ständige Arbeit dutzender Menschen. Täglich wurden Tonnen Holz benötigt, Wartung der Spiegel, Reparaturen. Die jährlichen Unterhaltskosten entsprachen dem Sold von 500 Soldaten.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/pharos-maintenance.jpg', title: 'Leuchtturm-Wartung' }]
  },
  {
    id: 'w32',
    title: 'Allmähliche Zerstörung',
    content: 'Der Leuchtturm überlebte mehrere Erdbeben im 10.-14. Jahrhundert und verlor dabei an Höhe. 1480 verwendete Sultan Kait-bey seine Steine für den Bau einer Festung. Teile des Fundaments wurden in den 1990er Jahren unter Wasser entdeckt.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/pharos-destruction.jpg', title: 'Leuchtturm-Zerstörung' }]
  },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-pharos-1',
        text: 'Wie hoch war der Leuchtturm von Alexandria?',
        type: 'multiple-choice',
        options: ['50-60 Meter', '80-90 Meter', '120-140 Meter', '200 Meter'],
        correctAnswer: 2,
        explanation: 'Der Pharos-Leuchtturm war 120-140 Meter hoch – das zweithöchste Bauwerk nach den Pyramiden.'
      },
      {
        id: 'q-pharos-2',
        text: 'Aus welcher Entfernung war das Licht des Leuchtturms sichtbar?',
        type: 'multiple-choice',
        options: ['10 Kilometer', '25 Kilometer', '50 Kilometer', '100 Kilometer'],
        correctAnswer: 2,
        explanation: 'Das Licht des Leuchtturms war 50 Kilometer weit sichtbar dank des Spiegelsystems.'
      },
      {
        id: 'q-pharos-3',
        text: 'Welchem Sold entsprachen die jährlichen Unterhaltskosten des Leuchtturms?',
        type: 'multiple-choice',
        options: [
          'Dem Sold von 50 Soldaten',
          'Dem Sold von 500 Soldaten',
          'Dem Sold von 5000 Soldaten',
          'Leuchtturm brauchte keine Wartung'
        ],
        correctAnswer: 1,
        explanation: 'Die jährlichen Unterhaltskosten entsprachen dem Sold von 500 Soldaten.'
      }
    ]
  },
  // Ökonomie der Zerstörung (33-36)
  {
    id: 'w33',
    title: 'Ökonomie der Zerstörung',
    content: 'Die meisten Weltwunder wurden nicht durch Naturkatastrophen zerstört, sondern aus wirtschaftlichen Gründen. Marmor und Bronze waren teuer – es war billiger, ein antikes Weltwunder abzubauen als neue Materialien aus der Ferne heranzuschaffen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/economics-destruction.jpg', title: 'Ökonomie der Zerstörung' }]
  },
  {
    id: 'w34',
    title: 'Weltwunder als Steinbrüche',
    content: 'Für mittelalterliche Baumeister waren antike Ruinen fertige Steinbrüche mit bearbeitetem Stein. Der Steintransport aus einem Steinbruch kostete 3-5 Mal mehr als der Abbau eines antiken Tempels.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/quarry-ruins.jpg', title: 'Ruinen als Steinbrüche' }]
  },
  {
    id: 'w35',
    title: 'Metall wertvoller als Geschichte',
    content: 'Bronzestatuen wurden als Erstes eingeschmolzen – Bronze war zu wertvoll. Eine Tonne Bronze kostete so viel wie 10 Tonnen Weizen oder die Jahresversorgung einer kleinen Soldateneinheit.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/bronze-value.jpg', title: 'Bronzewert' }]
  },
  {
    id: 'w36',
    title: 'Religiöse Intoleranz',
    content: 'Die Christianisierung des Römischen Reiches beschleunigte die Zerstörung der Weltwunder. Heidnische Tempel und Statuen galten als Götzenbilder. Kaiser Theodosius I. erließ Dekrete zur Schließung heidnischer Heiligtümer und Zerstörung von Götterbildern.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/religious-destruction.jpg', title: 'Religiöse Zerstörung' }]
  },
  {
    id: 'q9',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-destruction-1',
        text: 'Warum wurden die meisten Weltwunder zerstört?',
        type: 'multiple-choice',
        options: [
          'Nur durch Erdbeben',
          'Durch Kriege',
          'Aus wirtschaftlichen Gründen – Materialien waren teuer',
          'Durch schlechte Bauqualität'
        ],
        correctAnswer: 2,
        explanation: 'Der Hauptgrund war die Wirtschaft. Ein antikes Bauwerk abzubauen war billiger als neue Materialien herbeizuschaffen.'
      },
      {
        id: 'q-destruction-2',
        text: 'Um wie viel teurer war der Steintransport als der Abbau antiker Ruinen?',
        type: 'multiple-choice',
        options: ['2-mal', '3-5-mal', '10-mal', 'Gleich teuer'],
        correctAnswer: 1,
        explanation: 'Der Steintransport kostete 3-5 Mal mehr als der Abbau antiker Ruinen.'
      },
      {
        id: 'q-destruction-3',
        text: 'Was beschleunigte die Zerstörung heidnischer Weltwunder?',
        type: 'multiple-choice',
        options: [
          'Barbareneinfälle',
          'Christianisierung des Römischen Reiches',
          'Wirtschaftlicher Niedergang',
          'Klimawandel'
        ],
        correctAnswer: 1,
        explanation: 'Die Christianisierung beschleunigte die Zerstörung – heidnische Tempel und Statuen galten als Götzenbilder.'
      }
    ]
  },
  // Erbe und Schlussfolgerungen (37-40)
  {
    id: 'w37',
    title: 'Vergleich mit der Moderne',
    content: 'Rechnet man die Kosten der Weltwunder in heutige Preise um, hätte jedes 1-5 Milliarden Dollar gekostet. Das entspricht den Kosten eines modernen Wolkenkratzers oder großen Stadions.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/modern-comparison.jpg', title: 'Vergleich mit der Moderne' }]
  },
  {
    id: 'w38',
    title: 'Die sozialen Kosten',
    content: 'Der Bau jedes Weltwunders erforderte die Mobilisierung der Ressourcen ganzer Regionen. Während eine Pyramide oder ein Tempel gebaut wurde, floss weniger Geld in Infrastruktur, Bildung und Wohlstand des Volkes.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/social-cost.jpg', title: 'Soziale Kosten' }]
  },
  {
    id: 'w39',
    title: 'Technologische Durchbrüche',
    content: 'Die Weltwunder stimulierten die Entwicklung von Technologien: Hebelsysteme, Flaschenzüge, Hebevorrichtungen. Die ingenieurtechnischen Lösungen, die für diese Projekte entwickelt wurden, wurden jahrhundertelang genutzt.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/technology-progress.jpg', title: 'Technologischer Fortschritt' }]
  },
  {
    id: 'w40',
    title: 'Kulturelles Erbe',
    content: 'Die Sieben Weltwunder wurden zu einem kulturellen Archetyp – einem Symbol für Größe und Ambitionen der Menschheit. Sie inspirierten die Schaffung der "Neuen Sieben Weltwunder" im 21. Jahrhundert und prägen weiterhin unser Verständnis von Monumentalität.',
    duration: 3,
    media: [{ type: 'image', url: '/media/seven-wonders/cultural-legacy.jpg', title: 'Kulturelles Erbe' }]
  },
  {
    id: 'q10',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-legacy-1',
        text: 'Wie viel hätte jedes Weltwunder in heutigen Preisen gekostet?',
        type: 'multiple-choice',
        options: [
          '100-500 Millionen Dollar',
          '1-5 Milliarden Dollar',
          '10-50 Milliarden Dollar',
          '100 Milliarden Dollar'
        ],
        correctAnswer: 1,
        explanation: 'Jedes Weltwunder hätte in heutigen Preisen 1-5 Milliarden Dollar gekostet.'
      },
      {
        id: 'q-legacy-2',
        text: 'Welchen Nutzen brachten die Weltwunder für die Technologie?',
        type: 'multiple-choice',
        options: [
          'Keinen Nutzen',
          'Stimulierten die Entwicklung ingenieurtechnischer Technologien',
          'Nur architektonisches Wissen',
          'Nur künstlerische Techniken'
        ],
        correctAnswer: 1,
        explanation: 'Die Weltwunder stimulierten die Entwicklung von Hebelsystemen, Flaschenzügen und Hebevorrichtungen.'
      },
      {
        id: 'q-legacy-3',
        text: 'Was symbolisieren die Sieben Weltwunder für die moderne Kultur?',
        type: 'multiple-choice',
        options: [
          'Nur antike Denkmäler',
          'Symbol für Größe und Ambitionen der Menschheit',
          'Beispiel ineffizienter Projekte',
          'Nichts Besonderes'
        ],
        correctAnswer: 1,
        explanation: 'Die Sieben Weltwunder wurden zu einem kulturellen Archetyp – einem Symbol für Größe und Ambitionen der Menschheit.'
      }
    ]
  }
]

const sevenWondersFinalQuizDE: QuizBlock = {
  id: 'quiz-seven-wonders',
  title: 'Abschlussquiz: Die Sieben Weltwunder',
  questions: [
    {
      id: 'final-q1',
      text: 'Wann und wo entstand die klassische Liste der Sieben Weltwunder?',
      type: 'multiple-choice',
      options: [
        'Im 1. Jahrhundert in Rom',
        'Im 3. Jahrhundert v. Chr. in Alexandria',
        'Im 5. Jahrhundert v. Chr. in Athen',
        'Im 1. Jahrhundert v. Chr. in Babylon'
      ],
      correctAnswer: 1,
      explanation: 'Die Liste entstand im 3. Jahrhundert v. Chr. in Alexandria.'
    },
    {
      id: 'final-q2',
      text: 'Wozu wurden die "Weltwunder" hauptsächlich gebaut?',
      type: 'multiple-choice',
      options: [
        'Für Schönheit',
        'Zur Demonstration politischer Macht',
        'Für Religion',
        'Zur Unterhaltung'
      ],
      correctAnswer: 1,
      explanation: 'Zur Demonstration politischer Macht.'
    },
    {
      id: 'final-q3',
      text: 'Wie viele Weltwunder sind bis heute erhalten?',
      type: 'multiple-choice',
      options: ['Alle', 'Fünf', 'Drei', 'Nur die Cheops-Pyramide'],
      correctAnswer: 3,
      explanation: 'Nur die Cheops-Pyramide.'
    },
    {
      id: 'final-q4',
      text: 'Wie lange war die Cheops-Pyramide das höchste Bauwerk?',
      type: 'multiple-choice',
      options: ['1000 Jahre', '2000 Jahre', '3800 Jahre', '5000 Jahre'],
      correctAnswer: 2,
      explanation: '3800 Jahre – bis zum 19. Jahrhundert.'
    },
    {
      id: 'final-q5',
      text: 'Aus wie vielen Blöcken besteht die Cheops-Pyramide?',
      type: 'multiple-choice',
      options: ['500.000', '1 Million', '2,3 Millionen', '5 Millionen'],
      correctAnswer: 2,
      explanation: '2,3 Millionen Steinblöcke.'
    },
    {
      id: 'final-q6',
      text: 'Wer baute die Cheops-Pyramide?',
      type: 'multiple-choice',
      options: ['Sklaven', 'Kriegsgefangene', 'Bezahlte Arbeiter', 'Ausländer'],
      correctAnswer: 2,
      explanation: 'Bezahlte Arbeiter, die Lohn erhielten.'
    },
    {
      id: 'final-q7',
      text: 'Was ist an den Hängenden Gärten der Semiramis einzigartig?',
      type: 'multiple-choice',
      options: [
        'Das älteste',
        'Existenz nicht bewiesen',
        'Das höchste',
        'Erhalten geblieben'
      ],
      correctAnswer: 1,
      explanation: 'Existenz ist archäologisch nicht bewiesen.'
    },
    {
      id: 'final-q8',
      text: 'Wie viele Menschen wurden für die Bewässerung der Gärten benötigt?',
      type: 'multiple-choice',
      options: ['10-20', '50-100', '200-300', '1000'],
      correctAnswer: 1,
      explanation: '50-100 Menschen täglich.'
    },
    {
      id: 'final-q9',
      text: 'Welchem Budget entsprachen die Unterhaltskosten der Gärten?',
      type: 'multiple-choice',
      options: [
        'Gehalt eines Beamten',
        'Budget einer Stadt',
        'Ernte eines Feldes',
        'Kosten eines Hauses'
      ],
      correctAnswer: 1,
      explanation: 'Budget einer kleinen Stadt.'
    },
    {
      id: 'final-q10',
      text: 'Wie viel wog das Gold auf der Zeus-Statue?',
      type: 'multiple-choice',
      options: ['50 kg', '100 kg', 'Über 200 kg', '500 kg'],
      correctAnswer: 2,
      explanation: 'Über 200 Kilogramm Gold.'
    },
    {
      id: 'final-q11',
      text: 'Woher kam das Geld für die Zeus-Statue?',
      type: 'multiple-choice',
      options: ['Steuern', 'Kriegsbeute', 'Spenden', 'Kredit'],
      correctAnswer: 1,
      explanation: 'Aus Kriegsbeute nach dem Sieg über die Perser.'
    },
    {
      id: 'final-q12',
      text: 'Wie kam die Zeus-Statue um?',
      type: 'multiple-choice',
      options: [
        'Erdbeben',
        'Brand in Konstantinopel',
        'Eingeschmolzen',
        'Versunken'
      ],
      correctAnswer: 1,
      explanation: 'Bei einem Brand in Konstantinopel im 5. Jahrhundert.'
    },
    {
      id: 'final-q13',
      text: 'Wie lange dauerte der Bau des Artemis-Tempels?',
      type: 'multiple-choice',
      options: ['20 Jahre', '50 Jahre', '120 Jahre', '200 Jahre'],
      correctAnswer: 2,
      explanation: '120 Jahre Bauzeit.'
    },
    {
      id: 'final-q14',
      text: 'Warum zündete Herostratos den Tempel an?',
      type: 'multiple-choice',
      options: ['Rache', 'Um berühmt zu werden', 'Befehl', 'Versehen'],
      correctAnswer: 1,
      explanation: 'Um seinen Namen unsterblich zu machen.'
    },
    {
      id: 'final-q15',
      text: 'Welche Funktion erfüllte der Artemis-Tempel?',
      type: 'multiple-choice',
      options: ['Festung', 'Bank', 'Gefängnis', 'Bibliothek'],
      correctAnswer: 1,
      explanation: 'Größte Bank Kleinasiens.'
    },
    {
      id: 'final-q16',
      text: 'Von wessen Namen stammt das Wort "Mausoleum"?',
      type: 'multiple-choice',
      options: ['Architekt', 'König Mausolos', 'Stadt', 'Griechisches Wort'],
      correctAnswer: 1,
      explanation: 'Vom Namen des Königs Mausolos.'
    },
    {
      id: 'final-q17',
      text: 'Wer setzte den Bau des Mausoleums fort?',
      type: 'multiple-choice',
      options: ['Sohn', 'Bruder', 'Frau Artemisia II.', 'Alexander'],
      correctAnswer: 2,
      explanation: 'Frau und Schwester Artemisia II.'
    },
    {
      id: 'final-q18',
      text: 'Wer baute das Mausoleum ab?',
      type: 'multiple-choice',
      options: ['Römer', 'Einheimische', 'Johanniter', 'Türken'],
      correctAnswer: 2,
      explanation: 'Johanniter für eine Festung.'
    },
    {
      id: 'final-q19',
      text: 'Wie hoch war der Koloss von Rhodos?',
      type: 'multiple-choice',
      options: ['20 m', '33 m', '50 m', '100 m'],
      correctAnswer: 1,
      explanation: '33 Meter Höhe.'
    },
    {
      id: 'final-q20',
      text: 'Woher kam das Geld für den Koloss?',
      type: 'multiple-choice',
      options: ['Steuern', 'Verkauf feindlicher Belagerungsmaschinen', 'Geschenk', 'Sammlung'],
      correctAnswer: 1,
      explanation: 'Vom Verkauf der feindlichen Belagerungstechnik.'
    },
    {
      id: 'final-q21',
      text: 'Wie lange stand der Koloss?',
      type: 'multiple-choice',
      options: ['20 Jahre', '56 Jahre', '100 Jahre', '500 Jahre'],
      correctAnswer: 1,
      explanation: 'Nur 56 Jahre bis zum Erdbeben.'
    },
    {
      id: 'final-q22',
      text: 'Höhe des Leuchtturms von Alexandria?',
      type: 'multiple-choice',
      options: ['50-60 m', '80-90 m', '120-140 m', '200 m'],
      correctAnswer: 2,
      explanation: '120-140 Meter.'
    },
    {
      id: 'final-q23',
      text: 'Aus welcher Entfernung war das Leuchtturmlicht sichtbar?',
      type: 'multiple-choice',
      options: ['10 km', '25 km', '50 km', '100 km'],
      correctAnswer: 2,
      explanation: '50 Kilometer.'
    },
    {
      id: 'final-q24',
      text: 'Unterhaltskosten des Leuchtturms pro Jahr?',
      type: 'multiple-choice',
      options: [
        'Sold von 50 Soldaten',
        'Sold von 500 Soldaten',
        'Sold von 5000 Soldaten',
        'Brauchte keine Wartung'
      ],
      correctAnswer: 1,
      explanation: 'Sold von 500 Soldaten.'
    },
    {
      id: 'final-q25',
      text: 'Warum wurden die Weltwunder zerstört?',
      type: 'multiple-choice',
      options: [
        'Erdbeben',
        'Kriege',
        'Wirtschaftliche Gründe',
        'Schlechte Qualität'
      ],
      correctAnswer: 2,
      explanation: 'Aus wirtschaftlichen Gründen – Materialien waren wertvoll.'
    },
    {
      id: 'final-q26',
      text: 'Um wie viel teurer war Steintransport als Abbau?',
      type: 'multiple-choice',
      options: ['2-mal', '3-5-mal', '10-mal', 'Gleich'],
      correctAnswer: 1,
      explanation: '3-5 Mal teurer.'
    },
    {
      id: 'final-q27',
      text: 'Was beschleunigte die Zerstörung heidnischer Weltwunder?',
      type: 'multiple-choice',
      options: [
        'Barbaren',
        'Christianisierung',
        'Wirtschaftsniederg ang',
        'Klima'
      ],
      correctAnswer: 1,
      explanation: 'Christianisierung des Römischen Reiches.'
    },
    {
      id: 'final-q28',
      text: 'Wie viel hätte jedes Weltwunder heute gekostet?',
      type: 'multiple-choice',
      options: [
        '100-500 Mio.',
        '1-5 Mrd.',
        '10-50 Mrd.',
        '100 Mrd.'
      ],
      correctAnswer: 1,
      explanation: '1-5 Milliarden Dollar.'
    },
    {
      id: 'final-q29',
      text: 'Welchen Nutzen brachten die Weltwunder für die Technologie?',
      type: 'multiple-choice',
      options: [
        'Keinen',
        'Entwicklung ingenieurtechnischer Technologien',
        'Nur Architektur',
        'Nur Kunst'
      ],
      correctAnswer: 1,
      explanation: 'Stimulierten ingenieurtechnische Technologien.'
    },
    {
      id: 'final-q30',
      text: 'Was symbolisieren die Sieben Weltwunder für die Moderne?',
      type: 'multiple-choice',
      options: [
        'Antike Denkmäler',
        'Symbol für Größe der Menschheit',
        'Ineffiziente Projekte',
        'Nichts'
      ],
      correctAnswer: 1,
      explanation: 'Symbol für Größe und Ambitionen der Menschheit.'
    }
  ]
}

// Export-Funktion für übersetzte Session-Inhalte
export function getTranslatedSessionContent(sessionId: string, language: Language): Partial<Session> | null {
  if (sessionId === 'ritterturniere' && language === 'de') {
    return {
      slides: ritterturniereSlidesDE,
      quiz: ritterturniereFinalQuizDE
    }
  }
  
  if (sessionId === 'seven-wonders' && language === 'de') {
    return {
      slides: sevenWondersSlidesDE,
      quiz: sevenWondersFinalQuizDE
    }
  }
  
  return null
}
