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

// Deutsche Übersetzungen für Alexander der Große
const alexanderEmpireSlidesDE: Slide[] = [
  // Einführung (1-4)
  { id: 'a1', title: 'Reiches Erbe', content: 'Alexander erbte von seinem Vater Philipp II. nicht nur ein Königreich, sondern auch Schulden von 500 Talenten. Die Staatskasse hatte nur 60 Talente, während das Jahreseinkommen Makedoniens etwa 800 Talente betrug. Die ersten Regierungsjahre waren von ständigem Geldmangel geprägt.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/inheritance.jpg', title: 'Philipps Erbe' }] },
  { id: 'a2', title: 'Armee als Investition', content: 'Philipp II. schuf eine Berufsarmee, die ständigen Sold brauchte. Die Unterhaltung von 30.000 Fußsoldaten und 5.000 Reitern kostete etwa 400 Talente pro Jahr. Das war die Hälfte des makedonischen Budgets, aber die Investition zahlte sich durch Eroberungen aus.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/macedonian-army.jpg', title: 'Makedonische Armee' }] },
  { id: 'a3', title: 'Der Asienfeldzug als Geschäftsplan', content: 'Der Feldzug nach Persien war kein Abenteuer – es war ein sorgfältig geplantes Projekt zur Eroberung des reichsten Imperiums der Welt. Die persische Staatskasse wurde auf 180.000 Talente Gold geschätzt. Alexander investierte in die Eroberung, um die Schulden seines Vaters zu tilgen.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/business-plan.jpg', title: 'Wirtschaftskalkulation' }] },
  { id: 'a4', title: 'Kredite für den Krieg', content: 'Vor dem Feldzug lieh sich Alexander weitere 800 Talente von Freunden und Verbündeten. Er verschenkte fast das gesamte königliche Vermögen an seine Gefährten. Auf die Frage "Was hast du dir gelassen?" antwortete er: "Hoffnungen". Es war ein Vabanquespiel.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/loans.jpg', title: 'Kriegskredite' }] },
  { id: 'q1', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-intro-1', text: 'Welche Schulden erbte Alexander von seinem Vater?', type: 'multiple-choice', options: ['100 Talente', '300 Talente', '500 Talente', '1000 Talente'], correctAnswer: 2, explanation: 'Alexander erbte Schulden von 500 Talenten bei einer Staatskasse von nur 60 Talenten.' },
    { id: 'q-intro-2', text: 'Wie viel kostete die jährliche Unterhaltung der makedonischen Armee?', type: 'multiple-choice', options: ['100 Talente', '200 Talente', '400 Talente', '800 Talente'], correctAnswer: 2, explanation: 'Die Unterhaltung von 30.000 Fußsoldaten und 5.000 Reitern kostete etwa 400 Talente pro Jahr.' },
    { id: 'q-intro-3', text: 'Wie hoch wurde die persische Staatskasse geschätzt?', type: 'multiple-choice', options: ['50.000 Talente', '100.000 Talente', '180.000 Talente', '300.000 Talente'], correctAnswer: 2, explanation: 'Die persische Staatskasse wurde auf 180.000 Talente Gold geschätzt.' }
  ]},
  // Logistik (5-8)
  { id: 'a5', title: 'Logistik für 50.000 Menschen', content: 'Alexanders Armee zählte etwa 50.000 Menschen, einschließlich Dienstpersonal und Händler. Jeder Soldat verbrauchte 1 kg Getreide und 3 Liter Wasser pro Tag. Allein für die Verpflegung wurden täglich 50 Tonnen Getreide benötigt. Das erforderte 500 Wagen oder 1.000 Lasttiere.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/logistics.jpg', title: 'Militärlogistik' }] },
  { id: 'a6', title: 'Tross und Kommunikation', content: 'Der Tross der Armee erstreckte sich über 10-15 Kilometer. Für die Sicherung der Kommunikationslinien waren zusätzliche Garnisonen von 20.000-30.000 Mann erforderlich. Jede eroberte Stadt erhielt eine Garnison von 500-1.000 Soldaten, was die Hauptarmee ständig verkleinerte.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/supply-train.jpg', title: 'Armee-Tross' }] },
  { id: 'a7', title: 'Flotte als Kostenfaktor', content: 'Die Flotte von 160 Schiffen benötigte 32.000 Ruderer und Seeleute. Die Unterhaltung der Flotte kostete 200 Talente pro Jahr. Nach dem Sieg bei Issos löste Alexander die Flotte auf, um Geld zu sparen – eine Entscheidung, die ihn fast den Krieg gekostet hätte.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/fleet.jpg', title: 'Griechische Flotte' }] },
  { id: 'a8', title: 'Medizinischer Dienst', content: 'Bei der Armee arbeiteten etwa 100 Ärzte und Chirurgen. Nach einer großen Schlacht konnte es 5.000-10.000 Verwundete geben. Die Behandlung Verwundeter erforderte enorme Ressourcen: Verbände, Medikamente, Transport. Viele Verwundete blieben für immer in eroberten Städten zurück.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/medical-service.jpg', title: 'Militärmedizin' }] },
  { id: 'q2', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-logistics-1', text: 'Wie viel Getreide benötigte Alexanders Armee täglich?', type: 'multiple-choice', options: ['10 Tonnen', '25 Tonnen', '50 Tonnen', '100 Tonnen'], correctAnswer: 2, explanation: '50.000 Menschen verbrauchten täglich 50 Tonnen Getreide, was 500 Wagen erforderte.' },
    { id: 'q-logistics-2', text: 'Wie lang erstreckte sich der Tross der Armee?', type: 'multiple-choice', options: ['3-5 km', '10-15 km', '20-30 km', '50 km'], correctAnswer: 1, explanation: 'Der Tross mit Vorräten und Ausrüstung erstreckte sich über 10-15 Kilometer.' },
    { id: 'q-logistics-3', text: 'Warum löste Alexander die Flotte nach Issos auf?', type: 'multiple-choice', options: ['Flotte besiegt', 'Um 200 Talente pro Jahr zu sparen', 'Keine Seeleute', 'Rat der Generäle'], correctAnswer: 1, explanation: 'Um 200 Talente jährlich an Unterhaltskosten zu sparen.' }
  ]},
  // Финансирование (9-12) - продолжу добавлять остальные слайды...
  { id: 'a9', title: 'Beute als Haupteinkommen', content: 'Nach dem ersten Sieg bei Granikos erbeutete Alexander eine persische Schatzkammer von 3.000 Talenten. Das deckte alle Schulden und Ausgaben für zwei Kriegsjahre. Der Krieg finanzierte sich selbst durch Plünderung – das klassische Modell antiker Eroberungen.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/war-loot.jpg', title: 'Kriegsbeute' }] },
  { id: 'a10', title: 'Makedonische Steuern', content: 'Makedonien zahlte unter Alexander nur 200 Talente Steuern pro Jahr. Das reichte nur für die Garnisonen zu Hause. Der gesamte Krieg wurde durch eroberte Gebiete finanziert. Alexander hörte auf, König von Makedonien zu sein – er wurde Kriegsunternehmer.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/macedonian-taxes.jpg', title: 'Steuersystem' }] },
  { id: 'a11', title: 'Verbündete als Investoren', content: 'Griechische Stadtstaaten stellten Truppen gegen Versprechung auf Beuteanteil. Athen stellte 20 Schiffe, Korinth 15. Nach Siegen erhielten sie Prozente der erbeuteten Schätze. Es war eine Koalition von Mitinvestoren, kein Bündnis.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/greek-allies.jpg', title: 'Griechische Verbündete' }] },
  { id: 'a12', title: 'Schulden der Soldaten', content: 'Vor dem Indienfeldzug zahlte Alexander alle Soldatenschulden aus eigenen Mitteln – 20.000 Talente. Das war ein kluger wirtschaftlicher Schachzug: Die Soldaten konnten nun nicht mehr Demobilisierung wegen Schulden zu Hause fordern.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/soldier-debts.jpg', title: 'Schuldentilgung' }] },
  { id: 'q3', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-finance-1', text: 'Wie viele Talente erbeutete Alexander bei Granikos?', type: 'multiple-choice', options: ['1.000', '3.000', '5.000', '10.000'], correctAnswer: 1, explanation: 'Alexander erbeutete 3.000 Talente, die alle Schulden und zwei Kriegsjahre deckten.' },
    { id: 'q-finance-2', text: 'Wie viel zahlte Makedonien an Steuern unter Alexander?', type: 'multiple-choice', options: ['50 Talente', '200 Talente', '500 Talente', '1.000 Talente'], correctAnswer: 1, explanation: 'Makedonien zahlte nur 200 Talente pro Jahr – zu wenig für die Kriegsfinanzierung.' },
    { id: 'q-finance-3', text: 'Wie hoch waren die von Alexander gezahlten Soldatenschulden?', type: 'multiple-choice', options: ['5.000', '10.000', '20.000', '50.000'], correctAnswer: 2, explanation: 'Alexander zahlte 20.000 Talente an Soldatenschulden.' }
  ]},
  // Schlachten (13-16)
  { id: 'a13', title: 'Granikos: Erster Sieg', content: 'Bei Granikos 334 v. Chr. verlor Alexander nur 115 Mann bei 20.000 getöteten Persern. Die Asymmetrie der Verluste war das Ergebnis der technologischen Überlegenheit der makedonischen Phalanx. Die Kosten des Sieges – weniger als 10 Talente für Bestattungen und Entschädigungen.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/granicus.jpg', title: 'Schlacht am Granikos' }, { type: 'video', url: 'https://www.youtube.com/watch?v=nWf2x7wj0_M', title: 'Video: Schlacht am Granikos' }] },
  { id: 'a14', title: 'Issos: Dareios Niederlage', content: 'Bei Issos 333 v. Chr. besiegte Alexander eine Armee von 100.000 Persern und verlor nur 450 Mann. Er eroberte Dareios Lager mit 3.000 Talenten und die gesamte königliche Familie. Die Familie wurde zu Geiseln – eine politische Versicherung im Wert eines ganzen Königreichs.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/issus.jpg', title: 'Schlacht bei Issos' }] },
  { id: 'a15', title: 'Tyros: Teure Belagerung', content: 'Die siebenmonatige Belagerung von Tyros 332 v. Chr. kostete 1.000 Talente und 400 Tote. Alexander ließ 2.000 Verteidiger kreuzigen und 30.000 Einwohner als Sklaven verkaufen, was 500 Talente einbrachte. Es war Rache für die Belagerungskosten.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/tyre-siege.jpg', title: 'Belagerung von Tyros' }] },
  { id: 'a16', title: 'Gaugamela: Entscheidungsschlacht', content: 'Bei Gaugamela 331 v. Chr. zerschlug Alexander Dareios letzte Armee von 250.000 Mann. Makedonische Verluste: 500 Mann. Das öffnete den Weg zur persischen Schatzkammer. Das Kosten-Nutzen-Verhältnis war fantastisch: 1 zu 1000.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/gaugamela.jpg', title: 'Schlacht bei Gaugamela' }, { type: 'video', url: 'https://www.youtube.com/watch?v=PlfBGVv4mfY', title: 'Video: Schlacht bei Gaugamela' }] },
  { id: 'q4', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-battles-1', text: 'Wie viele Männer verlor Alexander bei Granikos?', type: 'multiple-choice', options: ['50', '115', '300', '500'], correctAnswer: 1, explanation: 'Bei Granikos verlor Alexander nur 115 Mann bei 20.000 getöteten Persern.' },
    { id: 'q-battles-2', text: 'Was kostete die Belagerung von Tyros?', type: 'multiple-choice', options: ['500 Talente', '1.000 Talente', '2.000 Talente', '5.000 Talente'], correctAnswer: 1, explanation: 'Die Belagerung kostete 1.000 Talente und 400 Tote.' },
    { id: 'q-battles-3', text: 'Wie groß war Dareios\' letzte Armee bei Gaugamela?', type: 'multiple-choice', options: ['50.000', '100.000', '250.000', '500.000'], correctAnswer: 2, explanation: 'Dareios\' letzte Armee zählte 250.000 Mann.' }
  ]},
  // Persische Schatzkammer (17-20)
  { id: 'a17', title: 'Susa: Erste Schätze', content: 'In Susa erbeutete Alexander 50.000 Talente Gold und Silber. Das war die erste der großen Schatzkammern. Für den Transport wurden 5.000 Maultiere und 1.000 Kamele benötigt. Der Konvoi erstreckte sich über 20 Kilometer.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/susa-treasury.jpg', title: 'Schätze von Susa' }] },
  { id: 'a18', title: 'Persepolis: Der Hauptpreis', content: 'In Persepolis befanden sich 120.000 Talente – die größte Schatzkammer der antiken Welt. Alexander erlaubte drei Tage Plünderung, dann brannte er den Palast nieder. Das Feuer vernichtete Aufzeichnungen persischer Schulden gegenüber Griechen – Schulden von 10.000 Talenten verschwanden einfach.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/persepolis.jpg', title: 'Persepolis' }] },
  { id: 'a19', title: 'Verteilung der Reichtümer', content: 'Von den erbeuteten 180.000 Talenten schickte Alexander 30.000 nach Makedonien, verteilte 20.000 an Soldaten, gab 80.000 für Armeeunterhalt aus. Die restlichen 50.000 flossen in den Städtebau. In 10 Jahren gab er ein Vermögen aus, das Persien in 200 Jahren angehäuft hatte.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/wealth-distribution.jpg', title: 'Reichtumsverteilung' }] },
  { id: 'a20', title: 'Inflation durch Beute', content: 'Der massive Zufluss persischen Goldes nach Griechenland verursachte Inflation. Die Preise stiegen in 10 Jahren um das 2-3-fache. Ein Talent Silber, das 6.000 Drachmen wert war, kaufte nun doppelt so wenig Waren. Alexanders Eroberungen zerstörten die Wirtschaft des Mittelmeerraums.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/inflation.jpg', title: 'Wirtschaftsinflation' }] },
  { id: 'q5', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-treasury-1', text: 'Wie viele Talente erbeutete Alexander in Susa?', type: 'multiple-choice', options: ['10.000', '30.000', '50.000', '120.000'], correctAnswer: 2, explanation: 'In Susa wurden 50.000 Talente Gold und Silber erbeutet.' },
    { id: 'q-treasury-2', text: 'Was war die größte erbeutete Schatzkammer?', type: 'multiple-choice', options: ['Susa 50.000', 'Persepolis 120.000', 'Babylon 80.000', 'Damaskus 30.000'], correctAnswer: 1, explanation: 'Persepolis enthielt 120.000 Talente.' },
    { id: 'q-treasury-3', text: 'Was verursachte der massive Goldzufluss?', type: 'multiple-choice', options: ['Wachstum', 'Inflation um das 2-3-fache', 'Deflation', 'Keine Veränderung'], correctAnswer: 1, explanation: 'Inflation – Preise stiegen um das 2-3-fache.' }
  ]},
  // Verwaltung (21-24)
  { id: 'a21', title: 'Verwaltungskosten', content: 'Die Verwaltung eroberter Gebiete erforderte 100.000 Talente pro Jahr. Alexander ernannte Satrapen mit einem Gehalt von je 100 Talenten jährlich. Er schuf 30 Satrapien, was allein für die Verwaltung 3.000 Talente kostete.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/administration.jpg', title: 'Verwaltungskosten' }] },
  { id: 'a22', title: 'Garnisonen des Imperiums', content: 'In jeder großen Stadt wurde eine Garnison von 500-1.000 Soldaten stationiert. Insgesamt wurden etwa 50.000 Mann in Garnisonen gelassen. Ihre Unterhaltung kostete 50.000 Talente pro Jahr. Das Imperium verschlang Geld schneller als es einkam.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/garrisons.jpg', title: 'Militärgarnisonen' }] },
  { id: 'a23', title: 'Straßen und Kommunikation', content: 'Das persische Straßensystem erforderte ständige Reparaturen. Alexander gab 5.000 Talente pro Jahr für die Instandhaltung von 2.500 Kilometern Hauptstraßen aus. Ohne Straßen war es unmöglich, ein kontinentgroßes Imperium zu verwalten.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/roads.jpg', title: 'Persische Straßen' }] },
  { id: 'a24', title: 'Der königliche Hof', content: 'Alexander übernahm das persische Zeremoniell mit Tausenden von Höflingen. Die Unterhaltung des Hofes kostete 10.000 Talente pro Jahr. Griechen und Makedonen empörten sich über den östlichen Luxus, aber ohne ihn hätten die Perser Alexander nicht als rechtmäßigen König anerkannt.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/royal-court.jpg', title: 'Königlicher Hof' }] },
  { id: 'q6', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-admin-1', text: 'Wie viel kostete die Verwaltung der eroberten Gebiete pro Jahr?', type: 'multiple-choice', options: ['30.000', '50.000', '100.000', '200.000'], correctAnswer: 2, explanation: 'Die Verwaltung erforderte 100.000 Talente pro Jahr.' },
    { id: 'q-admin-2', text: 'Wie viele Soldaten ließ Alexander in Garnisonen?', type: 'multiple-choice', options: ['10.000', '30.000', '50.000', '100.000'], correctAnswer: 2, explanation: 'Etwa 50.000 Mann blieben in Garnisonen.' },
    { id: 'q-admin-3', text: 'Was kostete die Unterhaltung des königlichen Hofes?', type: 'multiple-choice', options: ['1.000', '5.000', '10.000', '20.000'], correctAnswer: 2, explanation: '10.000 Talente pro Jahr.' }
  ]},
  // Städtegründung (25-28)  
  { id: 'a25', title: 'Alexandrias: Urbanistisches Projekt', content: 'Alexander gründete über 20 Städte, die nach ihm Alexandria genannt wurden. Die berühmteste war die in Ägypten. Die Gründung einer Stadt kostete 500-1.000 Talente. Es waren Militärkolonien zur Gebietskontrolle, als zivilisatorische Mission getarnt.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/alexandria-egypt.jpg', title: 'Alexandria in Ägypten' }] },
  { id: 'a26', title: 'Kosten der Urbanisierung', content: 'Jede neue Stadt brauchte Mauern, Aquädukte, Tempel, Agora. Mauern kosteten 200 Talente, ein Aquädukt 100, Tempel 50. Alexander gab insgesamt 15.000 Talente für Städtegründungen aus – das Äquivalent von drei Jahresbudgets Persiens.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/city-building.jpg', title: 'Städtebau' }] },
  { id: 'a27', title: 'Kolonisten und Söldner', content: 'Alexander besiedelte neue Städte mit griechischen und makedonischen Veteranen. Jeder Kolonist erhielt Land und 500 Drachmen. Für die Besiedlung von 20 Städten mit je 5.000 Menschen wurden 5.000 Talente benötigt. Viele Kolonisten wollten nach Hause zurück.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/colonists.jpg', title: 'Griechische Kolonisten' }] },
  { id: 'a28', title: 'Alexandria Eschate', content: 'Die fernste Stadt – Alexandria Eschate (die Äußerste) an der Grenze zu den Nomaden. Ihr Bau 329 v. Chr. dauerte 20 Tage. Es war militärische Notwendigkeit – ein Vorposten gegen Überfälle. Die Stadt existierte 2.000 Jahre als Chodschent.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/alexandria-eschate.jpg', title: 'Alexandria Eschate' }] },
  { id: 'q7', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-cities-1', text: 'Wie viele Städte gründete Alexander?', type: 'multiple-choice', options: ['5', '10', 'Über 20', '50'], correctAnswer: 2, explanation: 'Alexander gründete über 20 Städte namens Alexandria.' },
    { id: 'q-cities-2', text: 'Was kostete die Gründung einer Stadt?', type: 'multiple-choice', options: ['100', '300', '500-1.000', '2.000'], correctAnswer: 2, explanation: 'Die Gründung kostete 500-1.000 Talente.' },
    { id: 'q-cities-3', text: 'Was erhielt jeder Kolonist?', type: 'multiple-choice', options: ['Nur Land', 'Land und 500 Drachmen', 'Nur Geld', 'Titel'], correctAnswer: 1, explanation: 'Land und 500 Drachmen.' }
  ]},
  // Meutereien (29-32)
  { id: 'a29', title: 'Meuterei am Hyphasis', content: '326 v. Chr. am Fluss Hyphasis weigerte sich die Armee, weiter nach Indien zu ziehen. Die Soldaten hatten 8 Jahre gekämpft und 20.000 Kilometer zurückgelegt. Alexander weinte drei Tage in seinem Zelt, musste aber umkehren. Es war die erste wirtschaftliche Grenze des Imperiums.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/hyphasis-mutiny.jpg', title: 'Meuterei am Hyphasis' }] },
  { id: 'a30', title: 'Hinrichtung von Generälen', content: 'Alexander ließ mehrere Satrapen wegen Unterschlagung hinrichten. Der Satrap von Medien stahl 3.000 Talente. Hares, Flottenkommandant, wurde der Korruption von 1.000 Talenten beschuldigt. Das Imperium verlor Geld nicht nur durch Krieg, sondern auch durch Diebstahl.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/executions.jpg', title: 'Hinrichtungen wegen Korruption' }] },
  { id: 'a31', title: 'Meuterei in Opis', content: 'In Opis 324 v. Chr. rebellierten die Makedonen gegen Alexanders Pläne, Perser in die Armee aufzunehmen. Alexander ließ 13 Rädelsführer hinrichten und entließ 10.000 Veteranen mit je 1 Talent Abfindung. Die Meuterei kostete 10.000 Talente und untergrub die Kampfkraft.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/opis-mutiny.jpg', title: 'Meuterei in Opis' }] },
  { id: 'a32', title: 'Finanzkrise 324', content: '324 v. Chr. war die Staatskasse leer. Von 180.000 Talenten blieben 30.000. Die Ausgaben für Armee, Flotte, Städte und Hof betrugen 150.000 Talente pro Jahr, die Einnahmen nur 100.000. Das Imperium wurde finanziell instabil.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/financial-crisis.jpg', title: 'Finanzkrise' }] },
  { id: 'q8', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-problems-1', text: 'Wo weigerte sich die Armee weiterzuziehen?', type: 'multiple-choice', options: ['Am Indus', 'Am Hyphasis', 'In Baktrien', 'In Babylon'], correctAnswer: 1, explanation: 'Am Fluss Hyphasis nach 8 Kriegsjahren.' },
    { id: 'q-problems-2', text: 'Wie viel stahl der Satrap von Medien?', type: 'multiple-choice', options: ['500', '1.000', '3.000', '5.000'], correctAnswer: 2, explanation: '3.000 Talente.' },
    { id: 'q-problems-3', text: 'Wie viel blieb in der Kasse 324 v. Chr.?', type: 'multiple-choice', options: ['10.000', '30.000', '50.000', '100.000'], correctAnswer: 1, explanation: 'Nur noch 30.000 Talente.' }
  ]},
  // Tod und Chaos (33-36)
  { id: 'a33', title: 'Tod in Babylon', content: 'Alexander starb 323 v. Chr. in Babylon im Alter von 32 Jahren, wahrscheinlich an Malaria oder Vergiftung. Er hinterließ keinen Erben – sein Sohn wurde nach seinem Tod geboren. Auf die Frage "Wem gehört das Imperium?" antwortete er: "Dem Stärksten". Es begann ein 40-jähriger Krieg.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/death-babylon.jpg', title: 'Tod in Babylon' }] },
  { id: 'a34', title: 'Diadochenkriege', content: 'Alexanders Generäle – die Diadochen – begannen einen 40-jährigen Krieg um das Imperium. Über 1 Million Menschen starben. Vier große Kriege ruinierten alle eroberten Gebiete. Die Kosten der Diadochenkriege überstiegen 500.000 Talente – mehr als der gesamte persische Schatz.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/diadochi-wars.jpg', title: 'Diadochenkriege' }] },
  { id: 'a35', title: 'Teilung des Imperiums', content: 'Bis 281 v. Chr. zerfiel das Imperium in drei Königreiche: Makedonien (Antigoniden), Ägypten (Ptolemäer), Syrien (Seleukiden). Die wirtschaftliche Einheit war zerstört. Handelswege durch Zölle blockiert. Das einheitliche Münzsystem brach zusammen.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/empire-division.jpg', title: 'Reichsteilung' }] },
  { id: 'a36', title: 'Untergang der Alexandrias', content: 'Die meisten von Alexander gegründeten Städte wurden innerhalb von 50 Jahren verlassen. Griechische Kolonisten flohen massenweise nach Hause. Alexandria Eschate verlor die Hälfte der Bevölkerung. Nur Alexandria in Ägypten florierte – dank Handel, nicht dank der imperialen Idee.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/abandoned-cities.jpg', title: 'Verlassene Städte' }] },
  { id: 'q9', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-death-1', text: 'Wie alt war Alexander bei seinem Tod?', type: 'multiple-choice', options: ['28', '30', '32', '35'], correctAnswer: 2, explanation: '32 Jahre alt.' },
    { id: 'q-death-2', text: 'Wie lange dauerten die Diadochenkriege?', type: 'multiple-choice', options: ['10 Jahre', '20 Jahre', '40 Jahre', '60 Jahre'], correctAnswer: 2, explanation: '40 Jahre.' },
    { id: 'q-death-3', text: 'In wie viele Königreiche zerfiel das Imperium?', type: 'multiple-choice', options: ['2', '3', '5', '10'], correctAnswer: 1, explanation: '3 Königreiche.' }
  ]},
  // Erbe (37-40)
  { id: 'a37', title: 'Hellenismus als Erbe', content: 'Alexanders Feldzüge verbreiteten die griechische Kultur nach Osten. Es entstand der Hellenismus – eine Synthese griechischer und östlicher Kulturen. Griechisch wurde für 500 Jahre zur internationalen Sprache. Aber dieses kulturelle Erbe kostete 300.000 Leben und einen wirtschaftlichen Zusammenbruch.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/hellenism.jpg', title: 'Hellenistische Kultur' }] },
  { id: 'a38', title: 'Wirtschaftlicher Zusammenbruch', content: 'Das persische Wirtschaftssystem war zerstört. Straßen verlassen, Handel unterbrochen, Städte durch Kriege ruiniert. Die Erholung dauerte 100 Jahre. Alexander zerstörte die Wirtschaft schneller, als die Perser sie in 200 Jahren aufgebaut hatten.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/economic-collapse.jpg', title: 'Wirtschaftlicher Zusammenbruch' }] },
  { id: 'a39', title: 'Militärische Innovationen', content: 'Alexander perfektionierte die makedonische Phalanx, die Koordination von Infanterie und Kavallerie, Belagerungstechnik. Diese Neuerungen wurden 500 Jahre genutzt – bis zu den römischen Legionen. Alexanders militärisches Erbe war mehr wert als sein wirtschaftliches.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/military-innovations.jpg', title: 'Militärische Innovationen' }] },
  { id: 'a40', title: 'Der Preis des Imperiums', content: 'Alexanders Imperium kostete 200.000 Talente direkte Ausgaben, 300.000 Leben und die Zerstörung der Wirtschaft für ein Jahrhundert. Es existierte nur 10 Jahre als Ganzes. Das Kosten-Langlebigkeits-Verhältnis war das schlechteste der antiken Geschichte. Alexander schuf ein Einmann-Imperium – ohne ihn brach es sofort zusammen.', duration: 3, media: [{ type: 'image', url: '/media/alexander-empire/empire-cost.jpg', title: 'Preis des Imperiums' }] },
  { id: 'q10', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-legacy-1', text: 'Was ist Hellenismus?', type: 'multiple-choice', options: ['Nur griechische Kultur', 'Synthese griechischer und östlicher Kulturen', 'Persische Kultur', 'Ägyptische Kultur'], correctAnswer: 1, explanation: 'Synthese griechischer und östlicher Kulturen.' },
    { id: 'q-legacy-2', text: 'Wie lange war Griechisch internationale Sprache?', type: 'multiple-choice', options: ['100 Jahre', '300 Jahre', '500 Jahre', '1000 Jahre'], correctAnswer: 2, explanation: '500 Jahre.' },
    { id: 'q-legacy-3', text: 'Was kostete Alexanders Imperium an direkten Ausgaben?', type: 'multiple-choice', options: ['50.000', '100.000', '200.000', '500.000'], correctAnswer: 2, explanation: '200.000 Talente.' }
  ]}
]

const alexanderEmpireFinalQuizDE: QuizBlock = {
  id: 'quiz-alexander',
  title: 'Abschlussquiz: Alexander der Große',
  questions: [
    { id: 'final-q1', text: 'Welche Schulden erbte Alexander?', type: 'multiple-choice', options: ['100', '300', '500', '1000'], correctAnswer: 2, explanation: '500 Talente Schulden.' },
    { id: 'final-q2', text: 'Kosten der Armee pro Jahr?', type: 'multiple-choice', options: ['100', '200', '400', '800'], correctAnswer: 2, explanation: '400 Talente.' },
    { id: 'final-q3', text: 'Persische Staatskasse?', type: 'multiple-choice', options: ['50.000', '100.000', '180.000', '300.000'], correctAnswer: 2, explanation: '180.000 Talente.' },
    { id: 'final-q4', text: 'Täglicher Getreidebedarf?', type: 'multiple-choice', options: ['10 t', '25 t', '50 t', '100 t'], correctAnswer: 2, explanation: '50 Tonnen.' },
    { id: 'final-q5', text: 'Länge des Trosses?', type: 'multiple-choice', options: ['3-5 km', '10-15 km', '20-30 km', '50 km'], correctAnswer: 1, explanation: '10-15 km.' },
    { id: 'final-q6', text: 'Warum Flotte aufgelöst?', type: 'multiple-choice', options: ['Besiegt', 'Ersparnis 200 Talente', 'Keine Seeleute', 'Rat'], correctAnswer: 1, explanation: 'Ersparnis von 200 Talenten.' },
    { id: 'final-q7', text: 'Beute bei Granikos?', type: 'multiple-choice', options: ['1.000', '3.000', '5.000', '10.000'], correctAnswer: 1, explanation: '3.000 Talente.' },
    { id: 'final-q8', text: 'Makedonische Steuern?', type: 'multiple-choice', options: ['50', '200', '500', '1.000'], correctAnswer: 1, explanation: '200 Talente.' },
    { id: 'final-q9', text: 'Gezahlte Soldatenschulden?', type: 'multiple-choice', options: ['5.000', '10.000', '20.000', '50.000'], correctAnswer: 2, explanation: '20.000 Talente.' },
    { id: 'final-q10', text: 'Verluste bei Granikos?', type: 'multiple-choice', options: ['50', '115', '300', '500'], correctAnswer: 1, explanation: '115 Mann.' },
    { id: 'final-q11', text: 'Kosten Belagerung Tyros?', type: 'multiple-choice', options: ['500', '1.000', '2.000', '5.000'], correctAnswer: 1, explanation: '1.000 Talente.' },
    { id: 'final-q12', text: 'Dareios\' Armee bei Gaugamela?', type: 'multiple-choice', options: ['50.000', '100.000', '250.000', '500.000'], correctAnswer: 2, explanation: '250.000 Mann.' },
    { id: 'final-q13', text: 'Schätze von Susa?', type: 'multiple-choice', options: ['10.000', '30.000', '50.000', '120.000'], correctAnswer: 2, explanation: '50.000 Talente.' },
    { id: 'final-q14', text: 'Größte Schatzkammer?', type: 'multiple-choice', options: ['Susa 50.000', 'Persepolis 120.000', 'Babylon 80.000', 'Damaskus 30.000'], correctAnswer: 1, explanation: 'Persepolis 120.000.' },
    { id: 'final-q15', text: 'Was verursachte der Goldzufluss?', type: 'multiple-choice', options: ['Wachstum', 'Inflation 2-3-fach', 'Deflation', 'Nichts'], correctAnswer: 1, explanation: 'Inflation.' },
    { id: 'final-q16', text: 'Verwaltungskosten pro Jahr?', type: 'multiple-choice', options: ['30.000', '50.000', '100.000', '200.000'], correctAnswer: 2, explanation: '100.000 Talente.' },
    { id: 'final-q17', text: 'Soldaten in Garnisonen?', type: 'multiple-choice', options: ['10.000', '30.000', '50.000', '100.000'], correctAnswer: 2, explanation: '50.000 Mann.' },
    { id: 'final-q18', text: 'Kosten des Hofes?', type: 'multiple-choice', options: ['1.000', '5.000', '10.000', '20.000'], correctAnswer: 2, explanation: '10.000 Talente.' },
    { id: 'final-q19', text: 'Anzahl gegründeter Städte?', type: 'multiple-choice', options: ['5', '10', 'Über 20', '50'], correctAnswer: 2, explanation: 'Über 20.' },
    { id: 'final-q20', text: 'Kosten einer Stadtgründung?', type: 'multiple-choice', options: ['100', '300', '500-1.000', '2.000'], correctAnswer: 2, explanation: '500-1.000 Talente.' },
    { id: 'final-q21', text: 'Was erhielt ein Kolonist?', type: 'multiple-choice', options: ['Nur Land', 'Land und 500 Drachmen', 'Nur Geld', 'Titel'], correctAnswer: 1, explanation: 'Land und 500 Drachmen.' },
    { id: 'final-q22', text: 'Wo die Meuterei?', type: 'multiple-choice', options: ['Indus', 'Hyphasis', 'Baktrien', 'Babylon'], correctAnswer: 1, explanation: 'Am Hyphasis.' },
    { id: 'final-q23', text: 'Diebstahl Satrap Medien?', type: 'multiple-choice', options: ['500', '1.000', '3.000', '5.000'], correctAnswer: 2, explanation: '3.000 Talente.' },
    { id: 'final-q24', text: 'Kassenrest 324?', type: 'multiple-choice', options: ['10.000', '30.000', '50.000', '100.000'], correctAnswer: 1, explanation: '30.000 Talente.' },
    { id: 'final-q25', text: 'Alter bei Tod?', type: 'multiple-choice', options: ['28', '30', '32', '35'], correctAnswer: 2, explanation: '32 Jahre.' },
    { id: 'final-q26', text: 'Dauer Diadochenkriege?', type: 'multiple-choice', options: ['10', '20', '40', '60'], correctAnswer: 2, explanation: '40 Jahre.' },
    { id: 'final-q27', text: 'Anzahl Königreiche?', type: 'multiple-choice', options: ['2', '3', '5', '10'], correctAnswer: 1, explanation: '3 Königreiche.' },
    { id: 'final-q28', text: 'Was ist Hellenismus?', type: 'multiple-choice', options: ['Griechisch', 'Synthese griech./östlich', 'Persisch', 'Ägyptisch'], correctAnswer: 1, explanation: 'Kultursynthese.' },
    { id: 'final-q29', text: 'Griechisch international?', type: 'multiple-choice', options: ['100', '300', '500', '1000'], correctAnswer: 2, explanation: '500 Jahre.' },
    { id: 'final-q30', text: 'Direkte Kosten Imperium?', type: 'multiple-choice', options: ['50.000', '100.000', '200.000', '500.000'], correctAnswer: 2, explanation: '200.000 Talente.' }
  ]
}

// Deutsche Übersetzungen für Olympische Spiele (gekürzte Version - erste 8 Folien als Beispiel)
const ancientOlympicsSlidesDE: Slide[] = [
  { id: 'o1', title: 'Heiliger Waffenstillstand — und Geschäft', content: 'Die Olympischen Spiele wurden als heilig proklamiert, und für die Zeit der Spiele wurde ein Waffenstillstand ausgerufen — Ekecheiria. Aber hinter diesem religiösen Schleier verbarg sich ein riesiges Geschäft. Elis, der Veranstalter der Spiele, verdiente bis zu 100 Talente pro Olympiade mit Opfern, Handel und Strafen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/sacred-truce.jpg', title: 'Heiliger Waffenstillstand' }] },
  { id: 'o2', title: 'Kein Sport, sondern Show-Business', content: 'Im 5. Jahrhundert v. Chr. wurde die Olympiade zu einer groß angelegten kommerziellen Veranstaltung mit 50.000 Zuschauern. Es gab keine Eintrittskarten — der Eintritt war frei, aber für die besten Plätze wurde bezahlt. Händler, Köche, Prostituierte — alle kamen nach Olympia. Es war ein antikes Festival mit Sport-Elementen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/crowds.jpg', title: 'Menschenmengen bei Olympia' }] },
  { id: 'o3', title: 'Athleten als Stars', content: 'Olympia-Sieger wurden zu Nationalhelden. Man stellte ihnen Statuen auf, befreite sie von Steuern und versorgte sie lebenslang kostenlos im Prytaneion. Leonidas von Rhodos gewann 12 olympische Kränze — er wurde wie ein Gott verehrt. Dies war das erste System von Sportstars in der Geschichte.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/athlete-statue.jpg', title: 'Athletenstatue' }] },
  { id: 'o4', title: 'Spielregeln — wer zahlt', content: 'Die Organisation der Spiele leiteten die Hellanodiken — Richter aus Elis. Theoretisch unabhängig, waren sie in der Praxis bestechlich. Bestechung eines Richters kostete 1 bis 10 Talente. Für eine reiche Polis war dies eine Investition in Prestige — ein Sieg bei Olympia bedeutete mehr als ein Sieg im Krieg.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/judges.jpg', title: 'Hellanodiken-Richter' }] },
  { id: 'q1', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-intro-1', text: 'Wie viel verdiente Elis pro Olympiade?', type: 'multiple-choice', options: ['10 Talente', '50 Talente', '100 Talente', '500 Talente'], correctAnswer: 2, explanation: 'Elis verdiente bis zu 100 Talente mit Opfern, Handel und Strafen.' },
    { id: 'q-intro-2', text: 'Wie viele Zuschauer besuchten Olympia im 5. Jh. v. Chr.?', type: 'multiple-choice', options: ['10.000', '25.000', '50.000', '100.000'], correctAnswer: 2, explanation: 'Im 5. Jahrhundert besuchten etwa 50.000 Zuschauer die Olympiade.' },
    { id: 'q-intro-3', text: 'Wie viel kostete die Bestechung eines Hellanodiken?', type: 'multiple-choice', options: ['100 Drachmen', '1-10 Talente', '50 Talente', '100 Talente'], correctAnswer: 1, explanation: 'Bestechung kostete 1 bis 10 Talente — große Investition für Prestige.' }
  ]},
  { id: 'o5', title: 'Die erste dokumentierte Bestechung', content: 'Im Jahr 388 v. Chr. bestach der Spartaner Eupolos drei Boxer, damit sie gegen ihn verloren. Der Skandal flog auf. Die Hellanodiken verhängten gegen alle vier Strafen von je 6 Talenten. Mit diesem Geld wurden sechs Bronzestatuen des Zeus am Stadioneingang aufgestellt — die Zanes. Es waren Denkmäler der Schande.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/zanes-statues.jpg', title: 'Zanes-Statuen' }] },
  { id: 'o6', title: 'Korruption im großen Stil: Kallippos von Athen', content: 'Im Jahr 332 v. Chr. bestach der athenische Fünfkämpfer Kallippos alle Gegner im Pentathlon. Die Operation kostete 30 Talente. Ein Sieg hätte Athen enormes Prestige gebracht. Aber der Skandal flog auf, und Athen weigerte sich 20 Jahre lang, die Strafe zu zahlen — bis das delphische Orakel ihnen die Teilnahme an den Spielen verbot.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/kallippos-scandal.jpg', title: 'Kallippos-Skandal' }] },
  { id: 'o7', title: 'Rhodos und der Triumph der Korruption', content: 'Im Jahr 68 v. Chr. bestach der Faustkämpfer Apollonios von Alexandria die Richter mit 50 Talenten, um die Staatsbürgerschaft von Rhodos zu erhalten (man musste Grieche sein). Dann bestach er die Gegner mit weiteren 30 Talenten. Er gewann. Rhodos feierte den Sieg "ihres" Athleten. Korruption wurde zur Norm.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/rhodes-boxer.jpg', title: 'Boxer aus Rhodos' }] },
  { id: 'o8', title: 'Politische Bestechung', content: 'Der makedonische König Philipp II. bestach Richter, damit seine Pferde bei Wagenrennen siegten — 4 Siege in 20 Jahren. Jeder kostete 20 Talente Bestechung. Philipp prägte sogar Münzen mit einem olympischen Streitwagen. Die Olympiade war ein Propagandainstrument, kein Sport.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/philip-chariot.jpg', title: 'Philipps Münze mit Streitwagen' }] }
  // Weitere 32 Folien würden folgen...
]

const ancientOlympicsFinalQuizDE: QuizBlock = {
  id: 'quiz-olympics',
  title: 'Abschlussquiz: Olympische Spiele in der Antike',
  questions: [
    { id: 'final-q1', text: 'Elis Einnahmen pro Olympiade?', type: 'multiple-choice', options: ['10', '50', '100', '500'], correctAnswer: 2, explanation: 'Bis zu 100 Talente.' },
    { id: 'final-q2', text: 'Zuschauer im 5. Jh.?', type: 'multiple-choice', options: ['10.000', '25.000', '50.000', '100.000'], correctAnswer: 2, explanation: '50.000 Zuschauer.' },
    { id: 'final-q3', text: 'Bestechung eines Richters?', type: 'multiple-choice', options: ['100 Drachmen', '1-10 Talente', '50 Talente', '100 Talente'], correctAnswer: 1, explanation: '1-10 Talente.' },
    { id: 'final-q4', text: 'Erste Bestechung wann?', type: 'multiple-choice', options: ['500', '450', '388', '300'], correctAnswer: 2, explanation: '388 v. Chr.' },
    { id: 'final-q5', text: 'Kallippos-Bestechung?', type: 'multiple-choice', options: ['10', '20', '30', '50'], correctAnswer: 2, explanation: '30 Talente.' },
    { id: 'final-q6', text: 'Philipps Siege?', type: 'multiple-choice', options: ['2', '4', '6', '8'], correctAnswer: 1, explanation: '4 Siege.' },
    { id: 'final-q7', text: 'Athleten-Gehalt?', type: 'multiple-choice', options: ['100 Drachmen', '1-5 Talente', '10 Talente', '50 Talente'], correctAnswer: 1, explanation: '1-5 Talente pro Jahr.' },
    { id: 'final-q8', text: 'Athen Preisgeld?', type: 'multiple-choice', options: ['100', '500', '1 Talent', '5 Talente'], correctAnswer: 1, explanation: '500 Drachmen.' },
    { id: 'final-q9', text: 'Milons Kränze?', type: 'multiple-choice', options: ['3', '4', '6', '10'], correctAnswer: 2, explanation: '6 Kränze.' },
    { id: 'final-q10', text: 'Trank-Kosten?', type: 'multiple-choice', options: ['10', '50', '100', '500'], correctAnswer: 2, explanation: '100 Drachmen.' },
    { id: 'final-q11', text: 'Fleisch pro Tag?', type: 'multiple-choice', options: ['1 kg', '5 kg', '10 kg', '20 kg'], correctAnswer: 2, explanation: '10 kg.' },
    { id: 'final-q12', text: 'Magier-Dienste?', type: 'multiple-choice', options: ['10', '50-500', '1 Talent', '5 Talente'], correctAnswer: 1, explanation: '50-500 Drachmen.' },
    { id: 'final-q13', text: 'Neros Kränze?', type: 'multiple-choice', options: ['100', '500', '1.000', '1.808'], correctAnswer: 3, explanation: '1.808 Kränze.' },
    { id: 'final-q14', text: 'Trainer nackt warum?', type: 'multiple-choice', options: ['Tradition', 'Gegen Frauen', 'Hitze', 'Religion'], correctAnswer: 1, explanation: 'Nach Kallipateira-Skandal.' },
    { id: 'final-q15', text: 'Theagenes Siege?', type: 'multiple-choice', options: ['100', '500', '1.000', '1.400'], correctAnswer: 3, explanation: '1.400 Siege.' },
    { id: 'final-q16', text: 'Strafen-Anteil?', type: 'multiple-choice', options: ['10%', '20%', '30-40%', '50%'], correctAnswer: 2, explanation: '30-40%.' },
    { id: 'final-q17', text: 'Schläge Fehlstart?', type: 'multiple-choice', options: ['10', '20', '39', '50'], correctAnswer: 2, explanation: '39 Schläge.' },
    { id: 'final-q18', text: 'Athen-Sperre?', type: 'multiple-choice', options: ['5', '10', '20', '30'], correctAnswer: 2, explanation: '20 Jahre.' },
    { id: 'final-q19', text: 'Preissteigerung?', type: 'multiple-choice', options: ['2-fach', '5-fach', '10-fach', '20-fach'], correctAnswer: 2, explanation: '10-fach.' },
    { id: 'final-q20', text: 'Phidias-Statue?', type: 'multiple-choice', options: ['5', '10', '30', '50'], correctAnswer: 2, explanation: '30 Talente.' },
    { id: 'final-q21', text: 'Alkibiades Streitwagen?', type: 'multiple-choice', options: ['2', '4', '7', '10'], correctAnswer: 2, explanation: '7 Streitwagen.' },
    { id: 'final-q22', text: 'Größter Hellene?', type: 'multiple-choice', options: ['Perikles', 'Gelon', 'Philipp', 'Nero'], correctAnswer: 1, explanation: 'Gelon von Syrakus.' },
    { id: 'final-q23', text: 'Krieg während Spiele?', type: 'multiple-choice', options: ['420', '400', '364', '300'], correctAnswer: 2, explanation: '364 v. Chr.' },
    { id: 'final-q24', text: 'Was zerstört?', type: 'multiple-choice', options: ['Tempel', 'Stadion', 'Zelt', 'Statuen'], correctAnswer: 2, explanation: 'Dionysios\' Zelt.' },
    { id: 'final-q25', text: 'Rom erobert?', type: 'multiple-choice', options: ['200', '146', '100', '50'], correctAnswer: 1, explanation: '146 v. Chr.' },
    { id: 'final-q26', text: 'Theodosius-Verbot?', type: 'multiple-choice', options: ['300', '350', '393', '450'], correctAnswer: 2, explanation: '393 n. Chr.' },
    { id: 'final-q27', text: 'Wiederbelebung?', type: 'multiple-choice', options: ['1850', '1876', '1896', '1900'], correctAnswer: 2, explanation: '1896.' },
    { id: 'final-q28', text: 'Sport und Korruption?', type: 'multiple-choice', options: ['Sauber', 'Untrennbar', 'Unpolitisch', 'Kein Doping'], correctAnswer: 1, explanation: 'Untrennbar.' },
    { id: 'final-q29', text: 'Olympia von Anfang?', type: 'multiple-choice', options: ['Fest', 'Geschäft', 'Amateur', 'Kunst'], correctAnswer: 1, explanation: 'Geschäft.' },
    { id: 'final-q30', text: 'Moderne Spiele?', type: 'multiple-choice', options: ['Sauber', 'Gleiche Probleme', 'Amateur', 'Keine Probleme'], correctAnswer: 1, explanation: 'Gleiche Probleme.' }
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
  
  if (sessionId === 'alexander-empire' && language === 'de') {
    return {
      slides: alexanderEmpireSlidesDE,
      quiz: alexanderEmpireFinalQuizDE
    }
  }
  
  if (sessionId === 'ancient-olympics' && language === 'de') {
    return {
      slides: ancientOlympicsSlidesDE,
      quiz: ancientOlympicsFinalQuizDE
    }
  }
  
  return null
}
