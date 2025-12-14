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

// Export-Funktion für übersetzte Session-Inhalte
export function getTranslatedSessionContent(sessionId: string, language: Language): Partial<Session> | null {
  if (sessionId === 'ritterturniere' && language === 'de') {
    return {
      slides: ritterturniereSlidesDE,
      quiz: ritterturniereFinalQuizDE
    }
  }
  
  return null
}
