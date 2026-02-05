import { Language } from './translations'
import { Session, Slide, QuizBlock } from '../types/session'
import { romeInsulaeSlidesDE, romeInsulaeFinalQuizDE } from './rome-insulae-content-de'
import { philosophyAthensSlidesDE, philosophyAthensFinalQuizDE } from './philosophy-athens-content-de'

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
  { id: 'o8', title: 'Politische Bestechung', content: 'Der makedonische König Philipp II. bestach Richter, damit seine Pferde bei Wagenrennen siegten — 4 Siege in 20 Jahren. Jeder kostete 20 Talente Bestechung. Philipp prägte sogar Münzen mit einem olympischen Streitwagen. Die Olympiade war ein Propagandainstrument, kein Sport.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/philip-chariot.jpg', title: 'Philipps Münze mit Streitwagen' }] },
  { id: 'q2', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-corrupt-1', text: 'In welchem Jahr fand die erste dokumentierte Bestechung statt?', type: 'multiple-choice', options: ['500 v. Chr.', '450 v. Chr.', '388 v. Chr.', '300 v. Chr.'], correctAnswer: 2, explanation: 'Im Jahr 388 v. Chr. bestach der Spartaner Eupolos drei Boxer.' },
    { id: 'q-corrupt-2', text: 'Wie viel kostete die Bestechungsoperation von Kallippos im Pentathlon?', type: 'multiple-choice', options: ['10 Talente', '20 Talente', '30 Talente', '50 Talente'], correctAnswer: 2, explanation: 'Kallippos gab 30 Talente aus, um alle Gegner im Pentathlon zu bestechen.' },
    { id: 'q-corrupt-3', text: 'Wie viele olympische Siege kaufte Philipp II.?', type: 'multiple-choice', options: ['2', '4', '6', '8'], correctAnswer: 1, explanation: 'Philipp II. kaufte 4 Siege bei Wagenrennen in 20 Jahren.' }
  ]},
  { id: 'o9', title: 'Ende der Amateure', content: 'Bis zum 4. Jahrhundert v. Chr. wurden Athleten zu Profis. Sie arbeiteten nicht, trainierten nur. Poleis zahlten ihnen Gehälter — von 1 bis 5 Talente pro Jahr. Die ersten Sportagenten erschienen — Aleipten, die 10% der Preise nahmen. Das olympische Ideal aristokratischer Amateure starb.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/professional-training.jpg', title: 'Professionelles Training' }] },
  { id: 'o10', title: 'Preisgelder', content: 'Formell gab es bei Olympia nur einen Olivenkranz. Aber zu Hause erwarteten die Sieger riesige Preise: Athen zahlte 500 Drachmen (fast ein Talent), Sparta — Steuerbefreiung auf Lebenszeit, Rhodos — 5 Talente bar. Ein Athlet konnte in seiner Karriere 50-100 Talente verdienen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/prize-money.jpg', title: 'Preisgelder' }] },
  { id: 'o11', title: 'Milon von Kroton — der erste Superstar', content: 'Milon gewann 6 olympische Kränze im Ringen (532-516 v. Chr.) plus 7 bei den Pythischen Spielen. In seiner Karriere verdiente er etwa 100 Talente. Besaß ein riesiges Anwesen, hielt eine Söldnerarmee. Starb mit 60 Jahren beim Versuch, einen Baum mit den Händen zu zerreißen. Der erste Sportler-Millionär der Antike.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/milon.jpg', title: 'Milon von Kroton' }] },
  { id: 'o12', title: 'Sportindustrie', content: 'Um Athleten entstand eine ganze Industrie: Trainer (Paidotriben), Ernährungswissenschaftler, Masseure, Aleipten-Agenten. Das Training eines Athleten kostete 5 Talente pro Jahr. Große Poleis unterhielten Sportschulen — Gymnasion. Dies war die erste Sportindustrie der Menschheitsgeschichte.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/sports-industry.jpg', title: 'Sportindustrie' }] },
  { id: 'q3', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-prof-1', text: 'Wie viel zahlten Poleis professionellen Athleten?', type: 'multiple-choice', options: ['100 Drachmen', '1-5 Talente pro Jahr', '10 Talente', '50 Talente'], correctAnswer: 1, explanation: 'Poleis zahlten professionellen Athleten 1 bis 5 Talente pro Jahr.' },
    { id: 'q-prof-2', text: 'Wie viel Preisgeld zahlte Athen dem Olympiasieger?', type: 'multiple-choice', options: ['100 Drachmen', '500 Drachmen', '1 Talent', '5 Talente'], correctAnswer: 1, explanation: 'Athen zahlte 500 Drachmen (fast ein Talent) dem Olympiasieger.' },
    { id: 'q-prof-3', text: 'Wie viele olympische Kränze gewann Milon von Kroton?', type: 'multiple-choice', options: ['3', '4', '6', '10'], correctAnswer: 2, explanation: 'Milon gewann 6 olympische Kränze im Ringen (532-516 v. Chr.).' }
  ]},
  { id: 'o13', title: 'Kräuterdoping', content: 'Athleten verwendeten pflanzliche Stimulanzien: Bilsenkrautextrakt (Halluzinogen), Sesamsamen (Energie), Mutterkornpilze (Ausdauer). Trainer Demetrios verkaufte "geheime Elixiere" für 100 Drachmen — dies war das antike Sportpharmageschäft. Es gab keine Verbote.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/herbal-doping.jpg', title: 'Kräuterdoping' }] },
  { id: 'o14', title: 'Diät für Kraft', content: 'Athleten folgten einer speziellen Diät: 10 kg Fleisch pro Tag (ein normaler Grieche aß 100 g), Wein mit Kräutern, Ziegenmilch. Athlet Astyanax aß einen ganzen Ochsen pro Tag und trank 8 Liter Wein. Die Kosten einer solchen Diät — 2 Talente pro Jahr. Dies war der Vorläufer der Sporternährung.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/athlete-diet.jpg', title: 'Athletendiät' }] },
  { id: 'o15', title: 'Magische Beschwörungen', content: 'Athleten trugen Amulette, brachten Opfer dar, bestellten Flüche gegen Gegner. Gefundene Bleitäfelchen mit Texten: "Mögen Diokles Beine beim Laufen versagen". Magierdienste kosteten 50 bis 500 Drachmen. Psychologisches Doping war ein Massenphänomen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/curse-tablets.jpg', title: 'Fluchtafeln' }] },
  { id: 'o16', title: 'Stimulanzien aus Tieren', content: 'Ringer aßen rohe Stierhoden (Testosteron), Läufer — Hirschherzen (Ausdauer), Boxer tranken Gladiatorenblut (Aggression). Arzt Galen beschrieb diese Praktiken als üblich. Dies war Doping auf Ritualebene, ohne wissenschaftliches Verständnis, aber mit Glauben an die Wirkung.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/animal-stimulants.jpg', title: 'Tierische Stimulanzien' }] },
  { id: 'q4', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-doping-1', text: 'Wie viel kosteten die "geheimen Elixiere" von Trainer Demetrios?', type: 'multiple-choice', options: ['10 Drachmen', '50 Drachmen', '100 Drachmen', '500 Drachmen'], correctAnswer: 2, explanation: 'Geheime Elixiere wurden für 100 Drachmen verkauft — teures Vergnügen.' },
    { id: 'q-doping-2', text: 'Wie viel Fleisch aßen Athleten pro Tag?', type: 'multiple-choice', options: ['1 kg', '5 kg', '10 kg', '20 kg'], correctAnswer: 2, explanation: 'Athleten aßen bis zu 10 kg Fleisch pro Tag, 100-mal mehr als ein normaler Grieche.' },
    { id: 'q-doping-3', text: 'Wie viel kosteten Magierdienste zum Verfluchen eines Gegners?', type: 'multiple-choice', options: ['10 Drachmen', '50-500 Drachmen', '1 Talent', '5 Talente'], correctAnswer: 1, explanation: 'Magierdienste kosteten 50 bis 500 Drachmen je nach Komplexität.' }
  ]},
  { id: 'o17', title: 'Nero und die 267. Olympiade', content: 'Im Jahr 67 n. Chr. nahm Kaiser Nero an der Olympiade teil. Er sang, spielte die Lyra, fuhr einen Streitwagen mit 10 Pferden (statt 4). Fiel vom Streitwagen, aber "gewann" — die Richter hatten Angst. Nero nahm 1.808 Kränze von verschiedenen Wettkämpfen mit. Die Olympiade wurde zur Farce.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/nero-olympics.jpg', title: 'Nero bei Olympia' }] },
  { id: 'o18', title: 'Frau als Trainerin und Tabubruch', content: 'Frauen war es verboten, die Spiele auch nur anzusehen, unter Todesstrafe. Aber 404 v. Chr. verkleidete sich Kallipateira als Trainerin, um den Sieg ihres Sohnes zu sehen. Sie wurde entlarvt. Aber nicht hingerichtet — ihr Vater, Brüder und Sohn waren Olympioniken. Seitdem mussten Trainer nackt sein.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/kallipateira.jpg', title: 'Kallipateira' }] },
  { id: 'o19', title: 'Theagenes von Thasos — 1.400 Siege', content: 'Theagenes (500-476 v. Chr.) gewann Boxen und Pankration bei einer Olympiade. In seiner Karriere errang er 1.400 Siege bei allen Spielen. Nach seinem Tod wurde Theagenes Statue des Mordes beschuldigt (sie fiel auf einen Menschen) und im Meer versenkt. Nach 20 Jahren wurde sie geborgen — eine Hungersnot begann, das Orakel sagte, den Helden zurückzubringen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/theagenes.jpg', title: 'Theagenes von Thasos' }] },
  { id: 'o20', title: 'Dionysios und der erfundene Sieg', content: 'Im Jahr 221 v. Chr. wollte der ägyptische König Ptolemaios IV. durch eine Strohmann — Athlet Dionysios — gewinnen. Dionysios erhielt 100 Talente, weigerte sich aber, im Finale zu verlieren. Gewann ehrlich. Ptolemaios befahl, seine Familie zu töten. Dionysios floh, erschien aber nie wieder bei den Spielen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/dionysios-scandal.jpg', title: 'Dionysios-Skandal' }] },
  { id: 'q5', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-scandal-1', text: 'Wie viele Kränze nahm Nero von der Olympiade mit?', type: 'multiple-choice', options: ['100', '500', '1.000', '1.808'], correctAnswer: 3, explanation: 'Nero nahm 1.808 Kränze von verschiedenen Wettkämpfen dank eingeschüchterter Richter mit.' },
    { id: 'q-scandal-2', text: 'Warum mussten Trainer nach Kallipateira nackt sein?', type: 'multiple-choice', options: ['Tradition', 'Damit Frauen sich nicht als Trainerinnen verkleiden', 'Hitze', 'Religion'], correctAnswer: 1, explanation: 'Nach dem Kallipateira-Skandal mussten Trainer nackt sein.' },
    { id: 'q-scandal-3', text: 'Wie viele Siege errang Theagenes von Thasos?', type: 'multiple-choice', options: ['100', '500', '1.000', '1.400'], correctAnswer: 3, explanation: 'Theagenes errang 1.400 Siege bei allen Spielen in seiner Karriere.' }
  ]},
  { id: 'o21', title: 'Strafen — Haupteinnahmequelle', content: 'Strafen für Verstöße machten 30-40% des Einkommens des Olympischen Komitees von Elis aus. Verspätung zu den Spielen — 1 Talent. Tötung eines Gegners — 5 Talente. Bestechung eines Richters — 6 Talente. Verweigerung der Teilnahme nach Anmeldung — 3 Talente. Das Strafensystem war detailliert ausgearbeitet.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/fines-system.jpg', title: 'Strafensystem' }] },
  { id: 'o22', title: 'Körperliche Strafen', content: 'Für einen Fehlstart wurde ein Läufer direkt im Stadion mit Ruten geschlagen — 39 Schläge. Für eine Schlägerei außerhalb des Wettkampfs — öffentliche Auspeitschung. Für Beleidigung eines Richters — Prügel mit Stöcken. Hellanodiken hatten das Recht, sofort zu bestrafen. Dies war eine harte Show für die Menge.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/corporal-punishment.jpg', title: 'Körperliche Strafe' }] },
  { id: 'o23', title: 'Schandstatuen', content: 'Bis zum 3. Jahrhundert v. Chr. standen am Eingang von Olympia 16 Bronzestatuen des Zeus (Zanes), bezahlt von Strafen für Korruption. Auf dem Sockel standen Name des Verletzers und seine Stadt. Dies war ewige Schande. Aber reiche Poleis zahlten Strafen leicht — das Prestige des Sieges war teurer.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/shame-statues.jpg', title: 'Schandstatuen' }] },
  { id: 'o24', title: 'Lebenslanges Verbot', content: 'Die härteste Strafe — lebenslanges Teilnahmeverbot und Verbot für die ganze Polis. Athen wurde 20 Jahre lang (332-312 v. Chr.) verbannt für die Weigerung, die Strafe zu zahlen. Sparta — 10 Jahre für einen militärischen Angriff während des Waffenstillstands. Aber Politik überwog immer — Verbote wurden vorzeitig aufgehoben.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/lifetime-ban.jpg', title: 'Lebenslanges Verbot' }] },
  { id: 'q6', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-punishment-1', text: 'Welchen Anteil am Einkommen von Elis machten Strafen aus?', type: 'multiple-choice', options: ['10%', '20%', '30-40%', '50%'], correctAnswer: 2, explanation: 'Strafen machten 30-40% des Einkommens des Olympischen Komitees von Elis aus.' },
    { id: 'q-punishment-2', text: 'Wie viele Rutenhiebe gab es für einen Fehlstart?', type: 'multiple-choice', options: ['10', '20', '39', '50'], correctAnswer: 2, explanation: 'Für einen Fehlstart wurde ein Läufer mit 39 Rutenhieben direkt im Stadion geschlagen.' },
    { id: 'q-punishment-3', text: 'Wie viele Jahre wurde Athen verbannt?', type: 'multiple-choice', options: ['5 Jahre', '10 Jahre', '20 Jahre', '30 Jahre'], correctAnswer: 2, explanation: 'Athen wurde 20 Jahre lang (332-312 v. Chr.) verbannt für die Weigerung, die Strafe zu zahlen.' }
  ]},
  { id: 'o25', title: 'Tourismusboom', content: 'Die Olympiade dauerte 5 Tage, aber Touristen kamen für einen Monat. Preise stiegen um das 10-fache. Zeltmiete — 10 Drachmen pro Nacht (Jahresverdienst eines Armen). Essen, Wein, Prostituierte — alles wurde teurer. Elis verdiente am Tourismus 50 Talente pro Olympiade.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/tourism-boom.jpg', title: 'Tourismusboom' }] },
  { id: 'o26', title: 'Opfer als Geschäft', content: 'Haupteinnahmequelle — Opfer. Reiche Poleis opferten 100 Ochsen (Hekatombe) — das sind 10 Talente. Das Fleisch wurde auf dem Markt verkauft. Priester von Elis erhielten 10% von jedem Opfer. Pro Olympiade wurden bis zu 500 Tiere geschlachtet. Religion war Deckmantel für das Fleischgeschäft.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/sacrifices-business.jpg', title: 'Geschäft mit Opfern' }] },
  { id: 'o27', title: 'Statuen und Denkmäler', content: 'Sieger bestellten Statuen bei den besten Bildhauern. Eine Statue von Polyklet kostete 10 Talente, von Phidias — 30 Talente. In 1.000 Jahren wurden in Olympia über 3.000 Statuen aufgestellt. Dies war ein riesiger Markt für Bildhauer. Olympia wurde ein Freilichtmuseum.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/statue-market.jpg', title: 'Statuenmarkt' }] },
  { id: 'o28', title: 'Sponsoring und Werbung', content: 'Reiche Bürger sponserten Athleten für 50% der Preise. Alkibiades von Athen stellte bei Olympia 7 Streitwagen aus (Kosten 70 Talente) und belegte 1., 2. und 4. Platz. Dies war Werbung — er kandidierte als Stratege. Die Olympiade war eine politische Werbeplattform.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/sponsorship.jpg', title: 'Sponsoring' }] },
  { id: 'q7', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-economy-1', text: 'Um wie viel stiegen die Preise während der Olympiade?', type: 'multiple-choice', options: ['2-fach', '5-fach', '10-fach', '20-fach'], correctAnswer: 2, explanation: 'Preise stiegen während der Olympiade um das 10-fache aufgrund des Touristenandrangs.' },
    { id: 'q-economy-2', text: 'Wie viel kostete eine Statue von Phidias?', type: 'multiple-choice', options: ['5 Talente', '10 Talente', '30 Talente', '50 Talente'], correctAnswer: 2, explanation: 'Eine Statue von Phidias kostete 30 Talente — riesige Summe.' },
    { id: 'q-economy-3', text: 'Wie viele Streitwagen stellte Alkibiades bei Olympia aus?', type: 'multiple-choice', options: ['2', '4', '7', '10'], correctAnswer: 2, explanation: 'Alkibiades stellte 7 Streitwagen im Wert von 70 Talenten für Werbung aus.' }
  ]},
  { id: 'o29', title: 'Propaganda durch Sport', content: 'Poleis nutzten die Olympiade für Propaganda. Sparta zeigte militärische Macht, Athen — kulturelle Überlegenheit, Syrakus — Reichtum. Tyrann Gelon von Syrakus erklärte sich nach einem Sieg bei Rennen zum "größten Hellenen". Dies war ein Imagekrieg.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/propaganda.jpg', title: 'Propaganda durch Sport' }] },
  { id: 'o30', title: 'Politische Reden und Manipulationen', content: 'Bei Olympia traten Redner und Philosophen auf. Gorgias rief Griechen auf, sich gegen Persien zu vereinen. Lysias beschuldigte Dionysios von Syrakus der Tyrannei — die Menge zerstörte sein Zelt. Isokrates agitierte für einen panhellenischen Feldzug. Die Olympiade war eine politische Arena, kein Sportfest.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/political-speeches.jpg', title: 'Politische Reden' }] },
  { id: 'o31', title: 'Boykotte und Konflikte', content: 'Im Jahr 420 v. Chr. wurde Sparta für militärische Aktionen während des Waffenstillstands ausgeschlossen. Spartaner Lykophron stellte einen Streitwagen im Namen von Theben aus und gewann. Sparta feierte "seinen" Sieg. Im Jahr 364 v. Chr. kämpfte Elis mit Arkadien direkt während der Spiele. Die Heiligkeit des Waffenstillstands war eine Fiktion.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/boycotts.jpg', title: 'Boykotte und Konflikte' }] },
  { id: 'o32', title: 'Makedonische Hegemonie', content: 'Nach den Eroberungen Alexanders des Großen wurde die Olympiade ein Instrument makedonischer Propaganda. Könige Makedoniens gewannen bei Wagenrennen (indem sie Siege kauften). Lobpreisung des Königs wurde obligatorisch. Bis zum 3. Jahrhundert v. Chr. wurde die Olympiade zu einem politischen Zirkus.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/macedonian-hegemony.jpg', title: 'Makedonische Hegemonie' }] },
  { id: 'q8', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-politics-1', text: 'Wer erklärte sich nach einem olympischen Sieg zum "größten Hellenen"?', type: 'multiple-choice', options: ['Perikles', 'Gelon von Syrakus', 'Philipp II.', 'Nero'], correctAnswer: 1, explanation: 'Tyrann Gelon von Syrakus erklärte sich zum "größten Hellenen" nach einem Sieg.' },
    { id: 'q-politics-2', text: 'In welchem Jahr kämpfte Elis mit Arkadien direkt während der Olympiade?', type: 'multiple-choice', options: ['420 v. Chr.', '400 v. Chr.', '364 v. Chr.', '300 v. Chr.'], correctAnswer: 2, explanation: 'Im Jahr 364 v. Chr. kämpfte Elis mit Arkadien direkt während der Spiele.' },
    { id: 'q-politics-3', text: 'Was zerstörte die Menge nach Lysias Rede?', type: 'multiple-choice', options: ['Tempel', 'Stadion', 'Dionysios Zelt', 'Statuen'], correctAnswer: 2, explanation: 'Die Menge zerstörte das Zelt des Tyrannen Dionysios von Syrakus nach der Anklagerede.' }
  ]},
  { id: 'o33', title: 'Römische Eroberung', content: 'Nach der Eroberung Griechenlands durch Rom (146 v. Chr.) wurde die Olympiade eine römische Show. Kaiser manipulierten Ergebnisse. Tiberius gewann ein Wagenrennen (Absprache). Caligula wollte teilnehmen, wurde aber getötet. Nero verwandelte die Spiele 67 n. Chr. in eine Farce.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/roman-conquest.jpg', title: 'Römische Eroberung' }] },
  { id: 'o34', title: 'Christentum gegen Heidentum', content: 'Kaiser Theodosius I. erließ 393 n. Chr. ein Edikt, das heidnische Kulte verbot. Die Olympischen Spiele wurden offiziell als heidnisches Fest verboten. Der Zeus-Tempel wurde zerstört, Statuen verbrannt oder abtransportiert. Nach 1.170 Jahren Existenz starb die Olympiade.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/christian-ban.jpg', title: 'Christliches Verbot' }] },
  { id: 'o35', title: 'Erdbeben und Vergessen', content: 'Nach dem Verbot wurde Olympia durch Erdbeben 522 und 551 n. Chr. zerstört. Die Flüsse Alpheios und Kladeos wuschen die Ruinen mit Schlamm weg. Der Ort wurde 1.300 Jahre lang vergessen. Erst 1766 entdeckte der englische Archäologe Richard Chandler die ersten Ruinen. Ausgrabungen begannen 1875.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/ruins.jpg', title: 'Ruinen von Olympia' }] },
  { id: 'o36', title: 'Wiederbelebung 1896', content: 'Baron Pierre de Coubertin belebte die Olympischen Spiele 1896 in Athen wieder. Aber er idealisierte die Antike — die echte antike Olympiade war voller Korruption, Doping und Politik. Das moderne Olympische Komitee wiederholte die gleichen Probleme: Bestechung, Doping, politische Boykotte.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/revival-1896.jpg', title: 'Wiederbelebung 1896' }] },
  { id: 'q9', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-decline-1', text: 'Wann wurde Griechenland von Rom erobert?', type: 'multiple-choice', options: ['200 v. Chr.', '146 v. Chr.', '100 v. Chr.', '50 v. Chr.'], correctAnswer: 1, explanation: 'Griechenland wurde 146 v. Chr. von Rom erobert.' },
    { id: 'q-decline-2', text: 'In welchem Jahr verbot Theodosius I. die Olympischen Spiele?', type: 'multiple-choice', options: ['300 n. Chr.', '350 n. Chr.', '393 n. Chr.', '450 n. Chr.'], correctAnswer: 2, explanation: 'Theodosius I. verbot die Olympischen Spiele 393 n. Chr. als heidnischen Kult.' },
    { id: 'q-decline-3', text: 'Wann wurden die Olympischen Spiele wiederbelebt?', type: 'multiple-choice', options: ['1850', '1876', '1896', '1900'], correctAnswer: 2, explanation: 'Baron de Coubertin belebte die Olympischen Spiele 1896 in Athen wieder.' }
  ]},
  { id: 'o37', title: 'Die dunkle Seite des Sports', content: 'Die antike Olympiade zeigte, dass Sport und Korruption untrennbar sind. Wenn die Einsätze hoch sind, betrügen Menschen. Professionalisierung tötete den olympischen Geist. Doping existierte immer. Politik manipuliert Sport. Moderne Spiele wiederholen die gleichen Fehler.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/dark-side.jpg', title: 'Dunkle Seite' }] },
  { id: 'o38', title: 'Ökonomie über Ideale', content: 'Die Olympiade war von Anfang an ein Geschäft. Der heilige Waffenstillstand deckte Kommerz. Opfer — Fleischmarkt. Athleten — professionelle Showmen. Preise — riesige Summen. Moderne Spiele sind auch Geschäft: Übertragungsrechte kosten Milliarden.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/economics-over-ideals.jpg', title: 'Ökonomie über Ideale' }] },
  { id: 'o39', title: 'Politik durch Sport', content: 'Die Olympiade war immer eine politische Plattform. Antikes Griechenland — Propaganda der Poleis. 20. Jahrhundert — Kalter Krieg, Boykotte. 21. Jahrhundert — sportlicher Nationalismus. Die Antike war kein goldenes Zeitalter. Sport und Politik sind untrennbar verbunden.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/politics-through-sport.jpg', title: 'Politik durch Sport' }] },
  { id: 'o40', title: 'Ewige Probleme', content: 'In 2.800 Jahren hat sich nichts geändert. Korruption — IOC und Bestechung für Austragungsrechte. Doping — Skandale bei jeder Olympiade. Professionalisierung — Athleten-Millionäre. Politik — Boykotte und Sanktionen. Die antike Olympiade — Spiegel der Moderne. Geschichte wiederholt sich.', duration: 3, media: [{ type: 'image', url: '/media/ancient-olympics/eternal-problems.jpg', title: 'Ewige Probleme' }] },
  { id: 'q10', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-legacy-1', text: 'Was zeigte die antike Olympiade über Sport?', type: 'multiple-choice', options: ['Sport ist immer sauber', 'Sport und Korruption sind untrennbar', 'Sport ist außerhalb der Politik', 'Es gab kein Doping'], correctAnswer: 1, explanation: 'Die antike Olympiade zeigte, dass Sport und Korruption untrennbar sind.' },
    { id: 'q-legacy-2', text: 'Was war die Olympiade von Anfang an?', type: 'multiple-choice', options: ['Religiöses Fest', 'Geschäft', 'Amateursport', 'Kunst'], correctAnswer: 1, explanation: 'Die Olympiade war von Anfang an ein Geschäft, verdeckt durch Religion.' },
    { id: 'q-legacy-3', text: 'Was wiederholt sich bei modernen Olympischen Spielen?', type: 'multiple-choice', options: ['Nur sauberer Sport', 'Die gleichen Probleme: Korruption, Doping, Politik', 'Amateurismus', 'Keine Probleme'], correctAnswer: 1, explanation: 'Moderne Spiele wiederholen die gleichen Probleme der Antike: Korruption, Doping, Politik.' }
  ]}
]

// Deutsche Übersetzungen für Mongolische Reich (gekürzte Version - первые 8 Folien als Beispiel)
const mongolEmpireSlidesDE: Slide[] = [
  { id: 'm1', title: 'Mythos über Millionen', content: 'Europäische Chronisten schrieben von "Millionen" Mongolen, aber die reale Armee Dschingis Khans zählte 20.000-30.000 Reiter. Bei der Invasion in Europa 1241 waren es nur 50.000 Mongolen. Der Mythos über die Anzahl wurde von verängstigten Europäern geschaffen.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/myth-millions.jpg', title: 'Mythos über Millionen Mongolen' }] },
  { id: 'm2', title: 'Angst als Propaganda', content: 'Europäische Mönche übertrieben die Anzahl um das 10-100-fache, um Niederlagen zu rechtfertigen. "500.000 Mongolen" waren tatsächlich 50.000. Angst schuf den Mythos unbesiegbarer Horden. Die Realität war einfacher: Mongolen siegten durch Organisation, nicht durch Anzahl.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/fear-propaganda.jpg', title: 'Europäische Angst vor Mongolen' }] },
  { id: 'm3', title: 'Reale Anzahl', content: 'Unter Dschingis Khan zählte die mongolische Armee 95.000 Mann (129 Tumen). Bei der Invasion in Europa — 50.000. Bei der Eroberung Chinas — 100.000. Es gab nie "Millionen". Mongolen siegten durch Qualität, nicht Quantität.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/real-numbers.jpg', title: 'Reale Armeestärke' }] },
  { id: 'm4', title: 'Warum der Mythos lebt', content: 'Der Mythos über Millionen ist bequem: Er rechtfertigt europäische Niederlagen. Leichter zu sagen "wir waren weniger" als mongolische Taktiküberlegenheit anzuerkennen. Historiker wiederholen diese Zahlen bis heute, ohne Quellen zu prüfen.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/myth-persists.jpg', title: 'Beständigkeit des Mythos' }] },
  { id: 'q1', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-myth-1', text: 'Wie viele Reiter hatte Dschingis Khans Armee?', type: 'multiple-choice', options: ['100.000', '500.000', '20.000-30.000', '1.000.000'], correctAnswer: 2, explanation: 'Die reale Armee hatte 20.000-30.000 Reiter, nicht Millionen.' },
    { id: 'q-myth-2', text: 'Wie viele Mongolen fielen 1241 in Europa ein?', type: 'multiple-choice', options: ['100.000', '200.000', '50.000', '500.000'], correctAnswer: 2, explanation: 'Nur 50.000 Mongolen fielen ein, nicht Hunderttausende.' },
    { id: 'q-myth-3', text: 'Warum übertrieben Europäer die Anzahl?', type: 'multiple-choice', options: ['Sie sahen mehr', 'Um Niederlagen zu rechtfertigen', 'Zählfehler', 'Mongolen täuschten'], correctAnswer: 1, explanation: 'Europäische Chronisten übertrieben um das 10-100-fache, um Niederlagen zu rechtfertigen.' }
  ]},
  { id: 'm5', title: 'Pferde als Nahrung', content: 'Ein mongolischer Reiter führte 3-5 Pferde mit. Eines zum Reiten, die anderen — Nahrungsreserve. Auf dem Feldzug tranken Mongolen Stutenmilch (Kumys) und aßen Pferdefleisch. Ein Pferd = 200 kg Fleisch. Das löste das Versorgungsproblem in der Steppe.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/horses-food.jpg', title: 'Pferde als Proviant' }] },
  { id: 'm6', title: 'Mobilität — Schlüssel zum Sieg', content: 'Mongolen legten 100-150 km pro Tag zurück. Europäische Armee — 20-30 km. Mongolen erschienen dort, wo man sie nicht erwartete. Geschwindigkeit war ihre Hauptwaffe. In 3 Tagen legten Mongolen zurück, wofür Europäer 2 Wochen brauchten.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/mobility.jpg', title: 'Mongolische Mobilität' }] },
  { id: 'm7', title: 'Versorgung ohne Tross', content: 'Mongolen zogen keine Trosse mit. Alles Notwendige wurde auf Pferden transportiert: Jurten, Waffen, Nahrung. Ein Reiter = 5 Pferde = 1 Tonne Fracht. Das ermöglichte schnelleres Vorrücken als jede Armee der Welt. Tross — Schwäche, die Mongolen nicht hatten.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/no-supply-train.jpg', title: 'Armee ohne Tross' }] },
  { id: 'm8', title: 'Ausdauer mongolischer Pferde', content: 'Mongolische Pferde weideten selbst, brauchten kein Getreide. Sie überlebten den Winter, gruben Schnee mit Hufen auf. Europäische Pferde brauchten Hafer und Heu — sie konnten in der Steppe nicht gefüttert werden. Das gab Mongolen enormen Vorteil.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/mongolian-horses.jpg', title: 'Mongolische Pferde' }] },
  { id: 'q2', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-logistics-1', text: 'Wie viele Pferde führte ein mongolischer Reiter?', type: 'multiple-choice', options: ['1', '2', '3-5', '10'], correctAnswer: 2, explanation: 'Ein mongolischer Reiter führte 3-5 Pferde: eines zum Reiten, andere als Nahrungsreserve.' },
    { id: 'q-logistics-2', text: 'Wie viele Kilometer pro Tag legten Mongolen zurück?', type: 'multiple-choice', options: ['20-30 km', '50-70 km', '100-150 km', '200 km'], correctAnswer: 2, explanation: 'Mongolen legten 100-150 km pro Tag dank Mobilität und fehlendem Tross zurück.' },
    { id: 'q-logistics-3', text: 'Warum waren mongolische Pferde besser als europäische?', type: 'multiple-choice', options: ['Sie waren schneller', 'Sie weideten selbst und brauchten kein Getreide', 'Sie waren größer', 'Sie waren billiger'], correctAnswer: 1, explanation: 'Mongolische Pferde weideten selbst und überlebten den Winter, indem sie Schnee mit Hufen aufgruben.' }
  ]},
  { id: 'm9', title: 'Beute als Haupteinnahmequelle', content: 'Mongolen hatten kein Geld für Krieg. Sie finanzierten Feldzüge durch Plünderung. Nach Einnahme einer Stadt nahmen sie alles Gold, Silber, Juwelen. Eine große Stadt gab 100.000-500.000 Talente. Der Krieg finanzierte sich selbst.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/loot-income.jpg', title: 'Beute als Einkommen' }] },
  { id: 'm10', title: 'Steuern vs Plünderung', content: 'Mongolen verstanden schnell: Steuern sind profitabler als Plünderung. Eine geplünderte Stadt gibt Geld einmal. Steuern — jedes Jahr. Deshalb bewahrten sie Städte und Handwerker. Ökonomie wichtiger als Rache.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/taxes-vs-loot.jpg', title: 'Steuern oder Plünderung' }] },
  { id: 'm11', title: 'Warum nicht alle zerstören', content: 'Mongolen zerstörten nur die, die Widerstand leisteten. Sich ergebende Städte zahlten Steuern und lebten ruhig. Alle zu zerstören war wirtschaftlich unprofitabel. Tote zahlen keine Steuern. Lebende — Einkommensquelle.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/why-not-destroy.jpg', title: 'Warum Städte bewahrt wurden' }] },
  { id: 'm12', title: 'Handwerker als Wert', content: 'Mongolen töteten Handwerker nicht. Sie wurden nach Mongolei gebracht oder in eroberten Städten gelassen. Ein Handwerker produzierte Waren für 10 Talente pro Jahr. Ihn zu töten — 10 Talente jährlich verlieren. Ökonomie diktierte Politik.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/craftsmen-value.jpg', title: 'Handwerker als Wert' }] },
  { id: 'q3', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-economy-1', text: 'Wie finanzierten Mongolen Feldzüge?', type: 'multiple-choice', options: ['Mit Steuern', 'Durch Plünderung eroberter Städte', 'Durch Handel', 'Durch Kredite'], correctAnswer: 1, explanation: 'Mongolen finanzierten Feldzüge durch Plünderung — Krieg finanzierte sich selbst.' },
    { id: 'q-economy-2', text: 'Was ist profitabler: Steuern oder Plünderung?', type: 'multiple-choice', options: ['Plünderung — mehr Geld sofort', 'Steuern — Geld jedes Jahr', 'Gleich', 'Hängt von der Stadt ab'], correctAnswer: 1, explanation: 'Steuern sind profitabler — sie geben Geld jedes Jahr, Plünderung nur einmal.' },
    { id: 'q-economy-3', text: 'Warum bewahrten Mongolen Handwerker?', type: 'multiple-choice', options: ['Aus Mitleid', 'Handwerker produzierte Waren für 10 Talente pro Jahr', 'Sie wurden für Bau gebraucht', 'Aus religiösen Gründen'], correctAnswer: 1, explanation: 'Handwerker produzierte Waren für 10 Talente pro Jahr — ihn zu töten bedeutete Einkommen zu verlieren.' }
  ]},
  { id: 'm13', title: 'Dezimalsystem', content: 'Die mongolische Armee teilte sich in Zehner, Hunderter, Tausender, Tumen (10.000). Jeder Kommandeur war für seine Ebene verantwortlich. Desertion wurde mit Tod der ganzen Zehn bestraft. Kollektive Verantwortung sicherte Disziplin.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/decimal-system.jpg', title: 'Dezimale Organisation' }] },
  { id: 'm14', title: 'Taktik des Scheinrückzugs', content: 'Mongolen taten so, als wären sie besiegt und zogen sich zurück. Feinde verfolgten sie und verloren Formation. Dann drehten Mongolen um und zerstörten zersplitterte Einheiten. Diese Taktik funktionierte gegen jeden Gegner. Europäer kannten solchen Betrug nicht.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/feigned-retreat.jpg', title: 'Scheinrückzug' }] },
  { id: 'm15', title: 'Aufklärung und Spionage', content: 'Mongolen wussten alles über den Feind vor der Schlacht. Händler-Spione sammelten Informationen über Anzahl, Befestigungen, Vorräte. Für gute Aufklärung zahlte man Gold. Schlechte Aufklärung kostete Leben. Information war wichtiger als Anzahl.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/intelligence.jpg', title: 'Aufklärung und Spionage' }] },
  { id: 'm16', title: 'Koordination auf Distanz', content: 'Mongolen koordinierten Armeeaktionen auf 1.000 km Entfernung. Signalfeuer, Boten, Fahnen — alles funktionierte wie am Schnürchen. Europäische Armeen konnten sich nicht einmal auf 50 km koordinieren. Organisation besiegte Anzahl.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/coordination.jpg', title: 'Armeekoordination' }] },
  { id: 'q4', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-tactics-1', text: 'Wie teilte sich die mongolische Armee?', type: 'multiple-choice', options: ['Nach Stämmen', 'Dezimalsystem: Zehner, Hunderter, Tausender', 'Nach Clans', 'Zufällig'], correctAnswer: 1, explanation: 'Die mongolische Armee teilte sich in Zehner, Hunderter, Tausender, Tumen (10.000).' },
    { id: 'q-tactics-2', text: 'Was ist Taktik des Scheinrückzugs?', type: 'multiple-choice', options: ['Echtes Fliehen', 'Vorgetäuschter Rückzug mit nachfolgendem Angriff', 'Belagerung', 'Verhandlungen'], correctAnswer: 1, explanation: 'Mongolen taten so, als wären sie besiegt, zogen sich zurück, dann drehten um und zerstörten Verfolger.' },
    { id: 'q-tactics-3', text: 'Wie erhielten Mongolen Informationen über den Feind?', type: 'multiple-choice', options: ['Nur im Kampf', 'Händler-Spione sammelten Informationen vorher', 'Von Überläufern', 'Erhielten nicht'], correctAnswer: 1, explanation: 'Händler-Spione sammelten Informationen über Anzahl, Befestigungen und Vorräte vor der Schlacht.' }
  ]},
  { id: 'm17', title: 'Sicherheit der Handelswege', content: 'Mongolen schufen Pax Mongolica — Sicherheit auf 10.000 km von China bis Europa. Händler zahlten 3-5% Zoll und reisten ohne Angst. Vor Mongolen kostete Plünderung 50-100% der Ware. Mongolen machten Handel profitabel.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/safe-trade.jpg', title: 'Sicherer Handel' }] },
  { id: 'm18', title: 'Yam-Post als Geschäft', content: 'Mongolen schufen ein System von Yam-Stationen alle 30-40 km. Ein Bote konnte 300 km pro Tag zurücklegen, Pferde wechselnd. Das kostete 50.000 Talente pro Jahr, brachte aber 200.000 Talente durch Handelskontrolle. Post zahlte sich 4-fach aus.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/yam-post.jpg', title: 'Yam-Post' }] },
  { id: 'm19', title: 'Seidenstraße unter Kontrolle', content: 'Mongolen kontrollierten die gesamte Seidenstraße. Zoll von Karawane — 5%. Pro Jahr passierten 10.000 Karawanen zu je 100 Talenten. Einkommen — 50.000 Talente pro Jahr. Handelskontrolle war profitabler als Eroberungen.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/silk-road.jpg', title: 'Seidenstraße' }] },
  { id: 'm20', title: 'Kulturaustausch', content: 'Pax Mongolica ermöglichte Technologietransfer. Chinesisches Schießpulver kam durch Mongolen nach Europa. Arabische Mathematik — nach China. Europäische Handwerker — nach Asien. Mongolen waren Brücke zwischen Zivilisationen.', duration: 3, media: [
    { type: 'image', url: '/media/mongol-empire/cultural-exchange.jpg', title: 'Kulturaustausch' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=DZ0K9TSS0xk', title: 'Pax Mongolica: Frieden und Handel' }
  ]},
  { id: 'q5', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-pax-1', text: 'Was ist Pax Mongolica?', type: 'multiple-choice', options: ['Krieg der Mongolen', 'Sicherheit der Handelswege auf 10.000 km', 'Mongolische Religion', 'Steuersystem'], correctAnswer: 1, explanation: 'Pax Mongolica — Sicherheit der Handelswege von China bis Europa, geschaffen von Mongolen.' },
    { id: 'q-pax-2', text: 'Wie viel kostete Yam-Post und wie viel brachte sie?', type: 'multiple-choice', options: ['Kostete 10.000, brachte 20.000', 'Kostete 50.000, brachte 200.000', 'Kostete 100.000, brachte 50.000', 'Brachte nichts'], correctAnswer: 1, explanation: 'Yam-Post kostete 50.000 Talente pro Jahr, brachte aber 200.000 durch Handelskontrolle.' },
    { id: 'q-pax-3', text: 'Welchen Zollprozentsatz nahmen Mongolen von Karawanen?', type: 'multiple-choice', options: ['1%', '3-5%', '10%', '20%'], correctAnswer: 1, explanation: 'Mongolen nahmen 3-5% Zoll von Karawanen — viel weniger als Plünderung vor ihnen (50-100%).' }
  ]},
  { id: 'm21', title: 'Papiergeld', content: 'Mongolen führten als erste weltweit Papiergeld im Reichsmaßstab ein. Banknote kostete so viel, wie darauf stand. Fälschung wurde mit Tod bestraft. Dies vereinfachte Handel über riesige Entfernungen. Chinesische Händler zahlten mit Papier, erhielten Silber.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/paper-money.jpg', title: 'Papiergeld' }] },
  { id: 'm22', title: 'Kredite und Banken', content: 'Mongolen schufen Kreditsystem für Händler. Ein Händler konnte Kredit in China nehmen und in Europa zurückzahlen. Zins — 10-15% pro Jahr. Dies stimulierte Handel. Muslimische Banker verwalteten Finanzen des Imperiums.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/banking.jpg', title: 'Bankensystem' }] },
  { id: 'm23', title: 'Einheitliche Währung', content: 'Im Imperium wurde einheitliche Währung verwendet — Silberbarren (Yasak). 1 Yasak = 50 Gramm Silber. Dies vereinfachte Handel zwischen China, Zentralasien und Europa. Vor Mongolen hatte jede Region ihre Währung.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/unified-currency.jpg', title: 'Einheitliche Währung' }] },
  { id: 'm24', title: 'Steuersystem', content: 'Mongolen führten einheitliche Steuer ein — 10% vom Einkommen. Bauern zahlten mit Getreide, Handwerker — mit Waren, Händler — mit Geld. Steuer war fest und vorhersagbar. Das war besser als Willkür lokaler Herrscher.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/tax-system.jpg', title: 'Steuersystem' }] },
  { id: 'q6', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-finance-1', text: 'Wer führte als erste Papiergeld im Reichsmaßstab ein?', type: 'multiple-choice', options: ['Chinesen', 'Araber', 'Mongolen', 'Europäer'], correctAnswer: 2, explanation: 'Mongolen führten als erste weltweit Papiergeld im Reichsmaßstab ein.' },
    { id: 'q-finance-2', text: 'Welchen Kreditzins nahmen mongolische Banker?', type: 'multiple-choice', options: ['5%', '10-15%', '20%', '50%'], correctAnswer: 1, explanation: 'Mongolische Banker nahmen 10-15% jährlich für Kredite an Händler.' },
    { id: 'q-finance-3', text: 'Wie war die einheitliche Steuer im Mongolischen Imperium?', type: 'multiple-choice', options: ['5%', '10%', '20%', '30%'], correctAnswer: 1, explanation: 'Mongolen führten einheitliche Steuer 10% vom Einkommen ein — fest und vorhersagbar.' }
  ]},
  { id: 'm25', title: 'China: teuerste Eroberung', content: 'Eroberung Chinas kostete Mongolen 20 Jahre und 200.000 Leben. China hatte 100 Millionen Bevölkerung und Festungen. Aber Einkommen aus China betrug 500.000 Talente pro Jahr. Eroberung zahlte sich in 5 Jahren aus. China wurde Hauptquelle des Reichtums.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/china-conquest.jpg', title: 'Eroberung Chinas' }] },
  { id: 'm26', title: 'Russland: schnelle Unterwerfung', content: 'Russland wurde in 3 Jahren erobert (1237-1240). Zersplitterung half Mongolen. Jeder Fürst kämpfte allein. Mongolen schlugen sie nacheinander. Vereintes Russland hätte länger widerstehen können. Teile und herrsche funktionierte perfekt.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/russia-conquest.jpg', title: 'Eroberung Russlands' }] },
  { id: 'm27', title: 'Europa: Stopp an der Grenze', content: 'Mongolen schlugen Ungarn und Polen 1241, gingen aber nicht weiter. Grund: Tod Khans Ögedei. Mongolen kehrten zurück, um neuen Khan zu wählen. Europa wurde durch Zufall gerettet, nicht durch militärische Stärke.', duration: 3, media: [
    { type: 'image', url: '/media/mongol-empire/europe-stop.jpg', title: 'Stopp in Europa' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=rquMERg5KO4', title: 'Mongolischer Angriff auf Europa' }
  ]},
  { id: 'm28', title: 'Naher Osten: Plünderung Bagdads', content: '1258 nahmen Mongolen Bagdad — größte Stadt der Welt (1 Million Einwohner). Töteten 200.000-800.000 Menschen. Plünderten Bibliotheken, verbrannten Bücher. Einkommen aus Plünderung — 1.000.000 Talente. Dies war Höhepunkt mongolischer Grausamkeit.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/baghdad-sack.jpg', title: 'Plünderung Bagdads' }] },
  { id: 'q7', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-conquest-1', text: 'Wie viele Jahre kostete Eroberung Chinas?', type: 'multiple-choice', options: ['5 Jahre', '10 Jahre', '20 Jahre', '50 Jahre'], correctAnswer: 2, explanation: 'Eroberung Chinas kostete Mongolen 20 Jahre und 200.000 Leben.' },
    { id: 'q-conquest-2', text: 'In wie vielen Jahren eroberten Mongolen Russland?', type: 'multiple-choice', options: ['1 Jahr', '3 Jahre', '10 Jahre', '20 Jahre'], correctAnswer: 1, explanation: 'Russland wurde in 3 Jahren erobert (1237-1240) dank Zersplitterung.' },
    { id: 'q-conquest-3', text: 'Warum stoppten Mongolen in Europa?', type: 'multiple-choice', options: ['Europäer siegten', 'Tod Khans Ögedei — zurück zur Wahl neuen Khans', 'Nicht genug Kräfte', 'Vorräte gingen aus'], correctAnswer: 1, explanation: 'Mongolen stoppten wegen Tod Khans Ögedei — kehrten zurück, um neuen Khan zu wählen.' }
  ]},
  { id: 'm29', title: 'Ökonomie des Zusammenbruchs', content: 'Imperium brach nicht wegen militärischer Niederlagen zusammen, sondern wegen Ökonomie. Unterhalt von Armee, Post, Verwaltung kostete 500.000 Talente pro Jahr. Einnahmen — 400.000. Defizit wuchs. Bis 1360 war Imperium bankrott.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/economic-collapse.jpg', title: 'Ökonomischer Zusammenbruch' }] },
  { id: 'm30', title: 'Teilung des Erbes', content: 'Nach Dschingis Khans Tod teilte sich Imperium in 4 Ulus: Goldene Horde, Ilkhanat, Tschagatai-Ulus, Yuan. Jeder Khan wollte mehr Macht. Kriege zwischen Ulus kosteten mehr, als sie brachten. Einheit war wirtschaftlich unprofitabel.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/empire-division.jpg', title: 'Teilung des Imperiums' }] },
  { id: 'm31', title: 'Aufstände und Unabhängigkeit', content: 'Eroberte Völker rebellierten, als Mongolen schwächer wurden. China vertrieb Mongolen 1368. Russland hörte auf, Tribut zu zahlen 1480. Persien stellte Unabhängigkeit wieder her. Mongolen konnten Imperium nicht mit Gewalt halten.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/rebellions.jpg', title: 'Aufstände der Völker' }] },
  { id: 'm32', title: 'Schwarzer Tod', content: 'Pest der 1340er tötete 30-50% der Bevölkerung des Imperiums. Handel stoppte. Steuern fielen um das 2-fache. Yam-Post funktionierte nicht mehr. Imperium verlor ökonomische Basis. Pest beschleunigte Zusammenbruch um 50 Jahre.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/black-death.jpg', title: 'Schwarzer Tod' }] },
  { id: 'q8', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-collapse-1', text: 'Warum brach Mongolische Imperium zusammen?', type: 'multiple-choice', options: ['Militärische Niederlagen', 'Ökonomie: Ausgaben 500.000, Einnahmen 400.000', 'Aufstände', 'Pest'], correctAnswer: 1, explanation: 'Imperium brach wegen Ökonomie zusammen: Ausgaben überstiegen Einnahmen, Defizit wuchs.' },
    { id: 'q-collapse-2', text: 'In wie viele Ulus teilte sich Imperium?', type: 'multiple-choice', options: ['2', '3', '4', '5'], correctAnswer: 2, explanation: 'Imperium teilte sich in 4 Ulus: Goldene Horde, Ilkhanat, Tschagatai-Ulus, Yuan.' },
    { id: 'q-collapse-3', text: 'Wie viel Prozent der Bevölkerung tötete Pest?', type: 'multiple-choice', options: ['10-20%', '30-50%', '60-70%', '80-90%'], correctAnswer: 1, explanation: 'Pest tötete 30-50% der Bevölkerung des Imperiums, zerstörte ökonomische Basis.' }
  ]},
  { id: 'm33', title: 'Technologietransfer', content: 'Mongolen übertrugen China Technologien aus Europa: Kanonen, Mechanismen, Architektur. Europa — aus China: Schießpulver, Kompass, Papier. Ohne Mongolen wäre Schießpulver 200 Jahre später nach Europa gekommen. Mongolen beschleunigten Entwicklung der Zivilisationen.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/technology-transfer.jpg', title: 'Technologietransfer' }] },
  { id: 'm34', title: 'Genetisches Erbe', content: 'Genetische Studien zeigen: 0,5% der Bevölkerung Eurasiens — Nachkommen Dschingis Khans. Das sind 16 Millionen Menschen. Khan hatte viele Frauen und Kinder. Seine Gene verbreiteten sich durch Eroberungen. Genetik bestätigt Geschichte.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/genetic-legacy.jpg', title: 'Genetisches Erbe' }] },
  { id: 'm35', title: 'Einfluss auf Russland', content: 'Mongolisches Joch änderte Russland für immer. Moskau wurde Zentrum dank Tributsammlung für Mongolen. Russen übernahmen Despotismus, Zentralisierung, militärische Organisation. Ohne Mongolen wäre Russland ein anderes Land gewesen.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/russia-influence.jpg', title: 'Einfluss auf Russland' }] },
  { id: 'm36', title: 'Ende des Mythos über Anzahl', content: 'Moderne Historiker bestätigen: Mongolen waren wenige, aber effektiv. Organisation, Taktik, Mobilität — das ist Geheimnis des Erfolgs. Mythos über Millionen rechtfertigte Niederlagen. Realität: Qualität besiegte Quantität.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/myth-debunked.jpg', title: 'Ende des Mythos' }] },
  { id: 'q9', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-legacy-1', text: 'Was übertrugen Mongolen Europa aus China?', type: 'multiple-choice', options: ['Nur Gold', 'Schießpulver, Kompass, Papier', 'Nur Seide', 'Nichts'], correctAnswer: 1, explanation: 'Mongolen übertrugen Europa Schießpulver, Kompass und Papier aus China.' },
    { id: 'q-legacy-2', text: 'Wie viele Menschen sind Nachkommen Dschingis Khans?', type: 'multiple-choice', options: ['1 Million', '5 Millionen', '16 Millionen', '100 Millionen'], correctAnswer: 2, explanation: 'Genetische Studien zeigen: 16 Millionen Menschen — Nachkommen Dschingis Khans.' },
    { id: 'q-legacy-3', text: 'Wie änderten Mongolen Russland?', type: 'multiple-choice', options: ['Gar nicht', 'Moskau wurde Zentrum dank Tributsammlung', 'Nur zerstört', 'Kultur gebracht'], correctAnswer: 1, explanation: 'Moskau wurde Zentrum dank Tributsammlung für Mongolen, Russen übernahmen Zentralisierung.' }
  ]},
  { id: 'm37', title: 'Mythen vs Realität', content: 'Mythos: Millionen Mongolen. Realität: Zehntausende. Mythos: Sieg durch Anzahl. Realität: Sieg durch Organisation. Mythos: nur Zerstörung. Realität: Schaffung von Handelswegen. Geschichte der Mongolen — Geschichte der Effizienz, nicht Grausamkeit.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/myths-reality.jpg', title: 'Mythen und Realität' }] },
  { id: 'm38', title: 'Ökonomie als Basis', content: 'Mongolisches Imperium hielt auf Ökonomie, nicht auf Gewalt. Steuern wichtiger als Plünderung. Handel wichtiger als Krieg. Als Ökonomie zusammenbrach, zerfiel Imperium. Militärische Macht ohne Ökonomie ist kurzlebig.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/economics-foundation.jpg', title: 'Ökonomie als Basis' }] },
  { id: 'm39', title: 'Lektionen für Moderne', content: 'Mongolen zeigten: Organisation wichtiger als Anzahl. Mobilität wichtiger als Stärke. Information wichtiger als Waffen. Ökonomie wichtiger als Ideologie. Diese Prinzipien funktionieren auch heute. Mongolen waren erste Globalisten.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/modern-lessons.jpg', title: 'Lektionen für Moderne' }] },
  { id: 'm40', title: 'Größtes Imperium', content: 'Mongolisches Imperium war größtes kontinentales Imperium der Geschichte: 24 Millionen qkm. Größer als Römisches, Britisches oder Russisches. Geschaffen in 50 Jahren. Zerfiel in 100. Ökonomie hielt dem Maßstab nicht stand.', duration: 3, media: [{ type: 'image', url: '/media/mongol-empire/largest-empire.jpg', title: 'Größtes Imperium' }] },
  { id: 'q10', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-conclusion-1', text: 'Was wichtiger für Mongolen: Anzahl oder Organisation?', type: 'multiple-choice', options: ['Anzahl', 'Organisation', 'Gleich', 'Hängt von Situation ab'], correctAnswer: 1, explanation: 'Organisation war wichtiger als Anzahl — Mongolen siegten durch Qualität, nicht Quantität.' },
    { id: 'q-conclusion-2', text: 'Worauf basierte Mongolische Imperium?', type: 'multiple-choice', options: ['Nur auf Gewalt', 'Auf Ökonomie', 'Auf Religion', 'Auf Ideologie'], correctAnswer: 1, explanation: 'Imperium basierte auf Ökonomie — als sie zusammenbrach, zerfiel Imperium.' },
    { id: 'q-conclusion-3', text: 'Welche Größe hatte Mongolische Imperium?', type: 'multiple-choice', options: ['10 Mio qkm', '24 Mio qkm', '50 Mio qkm', '100 Mio qkm'], correctAnswer: 1, explanation: 'Mongolisches Imperium war 24 Millionen qkm — größtes kontinentales Imperium der Geschichte.' }
  ]}
]

// Deutsche Übersetzungen für Spartaner
const spartanTerrorSlidesDE: Slide[] = [
  { id: 's1', title: 'Mythos über edle Krieger', content: 'Hollywood schuf den Mythos von Spartanern als edlen Verteidigern der Freiheit. Realität: Sparta war ein totalitärer Sklavenstaat. Spartiaten machten 5% der Bevölkerung aus, besaßen aber 100% der Macht. Die restlichen 95% — Sklaven-Heloten und abhängige Perioiken.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/sparta-myth.jpg', title: 'Mythos über Sparta' }] },
  { id: 's2', title: '300 Spartaner: Wahrheit und Fiktion', content: 'Schlacht bei Thermopylen (480 v. Chr.) — nicht nur 300 Spartaner. Mit ihnen waren 7.000 Griechen. Spartaner blieben als letzte auf Befehl von König Leonidas. Es war Taktik der Verzögerung, kein heroisches Opfer. Perser umgingen Position und töteten alle.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/thermopylae-reality.jpg', title: 'Thermopylen: Realität' }] },
  { id: 's3', title: 'Sparta: militarisiertester Staat', content: 'Sparta war der einzige Polis, wo Armee nicht Werkzeug, sondern Ziel der Existenz war. Das ganze Leben der Krieg untergeordnet. Kinder ab 7 Jahren in Kasernen. Erwachsene bis 60 in Armee. Frauen — nur zur Geburt von Kriegern. Es war ein Militärlager, kein Staat.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/militarized-state.jpg', title: 'Militarisierter Staat' }] },
  { id: 's4', title: 'Warum der Mythos lebt', content: 'Mythos über edle Spartaner ist bequem: Er rechtfertigt Militarismus und Totalitarismus. Leichter, "Krieger" zu bewundern, als Terrorsystem anzuerkennen. Moderne Neonazis nutzen Spartas Symbole. Realität ist unbequem — Mythos ist angenehmer.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/myth-persists.jpg', title: 'Beständigkeit des Mythos' }] },
  { id: 'q1', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-myth-1', text: 'Wie viel Prozent der Bevölkerung machten Spartiaten aus?', type: 'multiple-choice', options: ['20%', '10%', '5%', '50%'], correctAnswer: 2, explanation: 'Spartiaten machten nur 5% der Bevölkerung aus, besaßen aber 100% der Macht.' },
    { id: 'q-myth-2', text: 'Wie viele Griechen waren mit 300 Spartanern bei Thermopylen?', type: 'multiple-choice', options: ['1.000', '3.000', '7.000', '10.000'], correctAnswer: 2, explanation: 'Mit 300 Spartanern waren 7.000 andere Griechen — Schlacht war nicht nur spartanisch.' },
    { id: 'q-myth-3', text: 'Warum lebt der Mythos über edle Spartaner?', type: 'multiple-choice', options: ['Es ist wahr', 'Mythos ist bequem — rechtfertigt Militarismus', 'Historiker bestätigen', 'Spartaner waren edel'], correctAnswer: 1, explanation: 'Mythos ist bequem zur Rechtfertigung von Militarismus — Realität ist unbequem.' }
  ]},
  { id: 's5', title: 'Drei Klassen: Spartiaten, Perioiken, Heloten', content: 'Spartanische Gesellschaft teilte sich in drei Klassen. Spartiaten (5%) — vollwertige Bürger-Krieger. Perioiken (15%) — frei, aber ohne politische Rechte, Handwerker und Händler. Heloten (80%) — Sklaven, Eigentum des Staates. Heloten bearbeiteten Land, ernährten Spartiaten.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/social-structure.jpg', title: 'Soziale Struktur' }] },
  { id: 's6', title: 'Heloten: Eigentum des Staates', content: 'Heloten gehörten nicht einzelnen Spartiaten — sie waren Eigentum des ganzen Staates. Spartiat erhielt Landstück mit Heloten, konnte sie aber nicht verkaufen oder ohne Erlaubnis töten. Tötung von Heloten ohne Grund wurde bestraft. Aber Staat konnte sie massenhaft töten — Krypteia.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/helots-property.jpg', title: 'Heloten als Eigentum' }] },
  { id: 's7', title: 'Perioiken: frei ohne Rechte', content: 'Perioiken waren freie Menschen, aber ohne politische Rechte. Sie betrieben Handwerk und Handel — Spartiaten war dies verboten. Perioiken zahlten Steuern und dienten in Armee, nahmen aber nicht an Regierung teil. Sie machten 15% der Bevölkerung aus — Mittelklasse ohne Macht.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/perioikoi.jpg', title: 'Perioiken' }] },
  { id: 's8', title: 'Spartiaten: Krieger ohne Arbeit', content: 'Spartiaten arbeiteten nicht — es war verboten. Sie kämpften und trainierten nur. Land bearbeiteten Heloten, Handwerk führten Perioiken. Spartiat erhielt Landstück mit Heloten — das reichte zum Leben. Arbeit galt als Schande. Krieger — einziger Beruf.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/spartiates-warriors.jpg', title: 'Spartiaten-Krieger' }] },
  { id: 'q2', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-social-1', text: 'Wie viel Prozent der Bevölkerung machten Heloten aus?', type: 'multiple-choice', options: ['50%', '60%', '80%', '90%'], correctAnswer: 2, explanation: 'Heloten machten 80% der Bevölkerung aus — Mehrheit waren Sklaven.' },
    { id: 'q-social-2', text: 'Wem gehörten Heloten?', type: 'multiple-choice', options: ['Einzelnen Spartiaten', 'Ganzem Staat', 'Perioiken', 'Niemandem'], correctAnswer: 1, explanation: 'Heloten waren Eigentum des ganzen Staates, nicht einzelner Spartiaten.' },
    { id: 'q-social-3', text: 'Womit beschäftigten sich Perioiken?', type: 'multiple-choice', options: ['Kämpften', 'Handwerk und Handel', 'Bearbeiteten Land', 'Nichts'], correctAnswer: 1, explanation: 'Perioiken betrieben Handwerk und Handel — Spartiaten war dies verboten.' }
  ]},
  { id: 's9', title: 'Krypteia: nächtliche Morde', content: 'Krypteia — systematischer Terror gegen Heloten. Junge Spartiaten (18-20 Jahre) gingen nachts auf Felder und töteten "verdächtige" Heloten. Verdächtig = stark, klug, potenziell gefährlich. Ziel: Heloten in Angst halten und Führer vernichten. Es war Initiation und Terror gleichzeitig.', duration: 3, media: [
    { type: 'image', url: '/media/spartan-terror/krypteia.jpg', title: 'Krypteia' }
  ]},
  { id: 's10', title: 'Initiation durch Mord', content: 'Krypteia war obligatorische Initiation für junge Spartiaten. Heloten töten = Bereitschaft zum Krieg beweisen. Die, die sich weigerten oder nicht töten konnten, verloren Bürgerschaft. Tötung unschuldiger Person war Norm — es lehrte Grausamkeit. Sparta erzog Mörder, keine Verteidiger.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/initiation-murder.jpg', title: 'Initiation durch Mord' }] },
  { id: 's11', title: 'Massenmorde an Heloten', content: '424 v. Chr. erklärten Spartaner: Heloten, die im Krieg kämpften, erhalten Freiheit. 2.000 beste Heloten traten vor. Alle wurden getötet. Es war Falle — stärkste und mutigste vernichten. Sparta fürchtete Helotenaufstand mehr als äußere Feinde.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/mass-killing.jpg', title: 'Massenmord an Heloten' }] },
  { id: 's12', title: 'Terror als Regierungssystem', content: 'Krypteia war kein Zufall, sondern System. Jährlich wurden Hunderte Heloten getötet. Es hielt 80% der Bevölkerung in ständiger Angst. Heloten konnten nicht aufstehen — sie wurden präventiv getötet. Terror ersetzte Gesetze. Sparta regierte durch Angst, nicht Gerechtigkeit.', duration: 3, media: [
    { type: 'image', url: '/media/spartan-terror/terror-system.jpg', title: 'Terror als System' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=4zWNebr3iSc', title: 'Terror als Regierungssystem' }
  ] },
  { id: 'q3', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-krypteia-1', text: 'Was ist Krypteia?', type: 'multiple-choice', options: ['Militärische Übungen', 'Systematischer Terror gegen Heloten', 'Religiöse Riten', 'Handelswege'], correctAnswer: 1, explanation: 'Krypteia — systematischer Terror: junge Spartiaten töteten nachts "verdächtige" Heloten.' },
    { id: 'q-krypteia-2', text: 'Wie viele Heloten wurden in Falle 424 v. Chr. getötet?', type: 'multiple-choice', options: ['500', '1.000', '2.000', '5.000'], correctAnswer: 2, explanation: '424 v. Chr. töteten Spartaner 2.000 beste Heloten, die für versprochene Freiheit hervortraten.' },
    { id: 'q-krypteia-3', text: 'Warum fürchteten Spartaner Heloten?', type: 'multiple-choice', options: ['Es waren wenige', 'Sie machten 80% aus — fürchteten Aufstand', 'Sie waren stärker', 'Fürchteten nicht'], correctAnswer: 1, explanation: 'Heloten machten 80% der Bevölkerung aus — Spartaner fürchteten Aufstand mehr als äußere Feinde.' }
  ]},
  { id: 's13', title: 'Agoge: System ab 7 Jahren', content: 'Jungen verließen Haus mit 7 Jahren und lebten in Kasernen bis 30. Agoge — System militärischer Erziehung. Hunger, Kälte, Schläge — Norm. Kinder wurden für kleinste Vergehen geschlagen. Sterblichkeit war hoch. Ziel: Überleben nur stärkste und grausamste.', duration: 3, media: [
    { type: 'image', url: '/media/spartan-terror/agoge-system.jpg', title: 'Agoge' }
  ]},
  { id: 's14', title: 'Diebstahl als Training', content: 'In Agoge stahlen sie Essen — es wurde ermutigt. Aber wenn erwischt — brutal geschlagen. Nicht für Diebstahl, sondern für Ungeschicklichkeit. Fähigkeit zu stehlen = Fähigkeit, im Krieg zu überleben. Kinder wurden gezwungen zu hungern, um Essen mit Gewalt zu beschaffen zu lernen. Es war Vorbereitung zum Plündern.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/theft-training.jpg', title: 'Diebstahl als Training' }] },
  { id: 's15', title: 'Kämpfe von Kindern bis zum Tod', content: 'Kinder wurden gezwungen, bis zum Blut am Altar der Artemis zu kämpfen. Sieger erhielt Ehre, Verlierer — Schande. Tod im Kampf war üblich. Eltern freuten sich, wenn Sohn im Kampf starb — es war Ehre. Tod im Kampf = Beweis des Mutes.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/children-battles.jpg', title: 'Kinderkämpfe' }] },
  { id: 's16', title: 'Verbannung der Schwachen', content: 'Schwache Kinder wurden von Klippe geworfen. Es ist kein Mythos — Archäologen fanden Überreste in Schlucht. Kind mit Defekt = nutzlos für Krieg. Sparta verschwendete keine Ressourcen an Schwache. Überlebten nur physisch Perfekte. Es war Eugenik 2.500 Jahre vor Nazis.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/weak-children.jpg', title: 'Verbannung der Schwachen' }] },
  { id: 'q4', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-agoge-1', text: 'Ab welchem Alter gingen Jungen in Agoge?', type: 'multiple-choice', options: ['5 Jahre', '7 Jahre', '10 Jahre', '12 Jahre'], correctAnswer: 1, explanation: 'Jungen verließen Haus mit 7 Jahren und lebten in Kasernen bis 30 Jahre.' },
    { id: 'q-agoge-2', text: 'Warum wurde Diebstahl in Agoge ermutigt?', type: 'multiple-choice', options: ['Es war lustig', 'Fähigkeit zu stehlen = Fähigkeit, im Krieg zu überleben', 'Nicht genug Essen', 'Wurde nicht ermutigt'], correctAnswer: 1, explanation: 'Diebstahl wurde als Überlebenstraining ermutigt — Fähigkeit, Essen mit Gewalt zu beschaffen.' },
    { id: 'q-agoge-3', text: 'Was geschah mit schwachen Kindern?', type: 'multiple-choice', options: ['Wurden behandelt', 'Von Klippe geworfen', 'An Perioiken gegeben', 'Zu Hause gelassen'], correctAnswer: 1, explanation: 'Schwache Kinder wurden von Klippe geworfen — Spartaner verschwendeten keine Ressourcen an Kriegsnutzlose.' }
  ]},
  { id: 's17', title: 'Frauen: Eigentum des Staates', content: 'Frauen in Sparta waren freier als in Athen, aber trotzdem Eigentum. Ihr Ziel — Krieger gebären. Ehe auf Befehl des Staates. Mann ging mit 20 in Armee, kehrte mit 30 zurück. Frau gebar Kinder von anderen Männern, wenn Mann im Krieg war. Kinder = Eigentum des Staates.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/spartan-women.jpg', title: 'Spartanische Frauen' }] },
  { id: 's18', title: 'Physische Vorbereitung von Frauen', content: 'Frauen trainierten physisch — das war einzigartig für Griechenland. Laufen, Ringen, Diskuswerfen. Ziel: starke Kinder gebären. Schwache Mutter = schwacher Krieger. Frauen nahmen nackt an Wettkämpfen teil. Aber es war keine Freiheit — es war Vorbereitung zur Geburt.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/women-training.jpg', title: 'Frauentraining' }] },
  { id: 's19', title: 'Macht von Frauen: Mythos und Realität', content: 'Frauen verwalteten Haushalt, während Männer kämpften. Sie besaßen Land — 40% des Landes gehörte Frauen. Aber politische Macht gab es nicht. Macht = Vermögensverwaltung, nicht Regierung. Frauen waren Manager, nicht Herrscher.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/women-power.jpg', title: 'Macht von Frauen' }] },
  { id: 's20', title: 'Geburt als Pflicht', content: 'Frau, die keine Kinder gebar, verlor Status. Kinderlosigkeit = Verrat am Staat. Frauen gebaren bis 40. Vielkinder wurde ermutigt. Aber Kinder gehörten nicht Mutter — sie gehörten Sparta. Mutter war Inkubator für Krieger.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/childbirth-duty.jpg', title: 'Geburt als Pflicht' }] },
  { id: 'q5', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-women-1', text: 'Wie viel Prozent des Landes gehörte Frauen in Sparta?', type: 'multiple-choice', options: ['10%', '20%', '40%', '60%'], correctAnswer: 2, explanation: '40% des Landes gehörte Frauen — sie verwalteten Haushalt, während Männer kämpften.' },
    { id: 'q-women-2', text: 'Warum trainierten Frauen physisch?', type: 'multiple-choice', options: ['Für Schönheit', 'Um starke Kinder zu gebären', 'Für Wettkämpfe', 'Trainierten nicht'], correctAnswer: 1, explanation: 'Frauen trainierten, um starke Kinder zu gebären — schwache Mutter = schwacher Krieger.' },
    { id: 'q-women-3', text: 'Wem gehörten Kinder in Sparta?', type: 'multiple-choice', options: ['Eltern', 'Staat', 'Mutter', 'Vater'], correctAnswer: 1, explanation: 'Kinder gehörten Staat, nicht Eltern — Mutter war Inkubator für Krieger.' }
  ]},
  { id: 's21', title: 'Phalanx: Tod in Formation', content: 'Spartanische Phalanx — 8 Reihen Speere. Erste Reihe starb zuerst. Rückzug = Schande und Tod. Spartiate konnte nicht aufgeben — eigene würden ihn töten. Phalanx hielt durch Disziplin und Angst. Ein Schwacher = Tod aller. Kollektive Verantwortung zwang, bis zum Tod zu kämpfen.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/phalanx.jpg', title: 'Spartanische Phalanx' }] },
  { id: 's22', title: 'Schild: Schande zu verlieren', content: 'Spartiate kehrte mit Schild oder auf Schild zurück. Ohne Schild zurückkehren = Schande fürs Leben. Mutter tötete Sohn, der ohne Schild zurückkehrte. Schild schützte nicht nur Besitzer, sondern auch Nachbarn in Formation. Schildverlust = Verrat an Kameraden. Tod besser als Schande.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/shield-shame.jpg', title: 'Schild und Schande' }] },
  { id: 's23', title: 'Dienst bis 60 Jahre', content: 'Spartiat diente in Armee von 20 bis 60 — 40 Jahre Dienst. Mit 20 trat er in Syssitien (gemeinsame Tische) ein und lebte in Kasernen. Haus besuchte selten. Ganzes Leben = Armee. Mit 60 konnte er gehen, blieb aber Reservist. Keine Rente — nur Land mit Heloten.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/service-60.jpg', title: 'Dienst bis 60 Jahre' }] },
  { id: 's24', title: 'Syssitien: gemeinsame Tische', content: 'Spartiaten aßen zusammen in Syssitien — gemeinsamen Kantinen zu je 15 Personen. Essen war karg: schwarze Suppe, Brot, Wein. Jeder Spartiat brachte monatlich Produkte vom Grundstück: Gerste, Wein, Käse, Feigen. Nicht gebracht — Verlust der Bürgerschaft. Syssitien schufen Einheit und Kontrolle.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/syssitia.jpg', title: 'Syssitien' }] },
  { id: 'q6', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-military-1', text: 'Wie viele Jahre diente Spartiat in Armee?', type: 'multiple-choice', options: ['20 Jahre', '30 Jahre', '40 Jahre', '50 Jahre'], correctAnswer: 2, explanation: 'Spartiat diente von 20 bis 60 — 40 Jahre Dienst, ganzes Leben in Armee.' },
    { id: 'q-military-2', text: 'Was bedeutete es, ohne Schild zurückzukehren?', type: 'multiple-choice', options: ['Nichts', 'Schande fürs Leben', 'Geldstrafe', 'Kurzer Urlaub'], correctAnswer: 1, explanation: 'Ohne Schild zurückkehren = Schande fürs Leben, Mutter konnte Sohn dafür töten.' },
    { id: 'q-military-3', text: 'Was sind Syssitien?', type: 'multiple-choice', options: ['Militärische Einheiten', 'Gemeinsame Tische, wo Spartiaten aßen', 'Religiöse Riten', 'Handelsgilden'], correctAnswer: 1, explanation: 'Syssitien — gemeinsame Kantinen, wo Spartiaten zusammen aßen zu je 15 Personen.' }
  ]},
  { id: 's25', title: 'Land: Grundlage der Ökonomie', content: 'Jeder Spartiat erhielt Landstück (Kleros) mit Heloten. Grundstück gab genug für Leben und Beiträge zu Syssitien. Land wurde nicht verkauft — es wurde vererbt. Bis 4. Jahrhundert v. Chr. konzentrierte sich Land bei wenigen — Mehrheit der Spartiaten verarmte und verlor Bürgerschaft.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/land-economy.jpg', title: 'Land als Grundlage' }] },
  { id: 's26', title: 'Heloten: kostenlose Arbeit', content: 'Heloten bearbeiteten Land und gaben 50% Ernte an Spartiaten. Andere 50% — für sich zum Essen. Spartiat arbeitete nicht — Heloten ernährten ihn. Ein Grundstück mit 10 Heloten ernährte Spartiatenfamilie. Heloten arbeiteten kostenlos — es war Ökonomie der Sklaverei. Heute wie 10 kostenlose Arbeiter zu haben.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/helots-labor.jpg', title: 'Arbeit der Heloten' }] },
  { id: 's27', title: 'Eisengeld: Isolation', content: 'Sparta nutzte Eisenstäbe statt Münzen — sie konnten nicht im Ausland verwendet werden. Ziel: Isolation vom Handel. Spartiaten war Handel verboten. Perioiken führten Handel, aber Spartiaten konnten keinen Reichtum anhäufen. Eisengeld = Kontrolle über Ökonomie. Heute wie Verbot auf Währung.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/iron-money.jpg', title: 'Eisengeld' }] },
  { id: 's28', title: 'Verarmung der Spartiaten', content: 'Bis 4. Jahrhundert v. Chr. fiel Anzahl der Spartiaten von 8.000 auf 1.000. Grund: Verarmung. Land konzentrierte sich bei Reichen. Arme konnten Beiträge zu Syssitien nicht leisten — verloren Bürgerschaft. Sparta starb aus: nicht genug Krieger. Ökonomie tötete Militärstaat.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/poverty.jpg', title: 'Verarmung' }] },
  { id: 'q7', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-economy-1', text: 'Wie viel Ernte gaben Heloten an Spartiaten?', type: 'multiple-choice', options: ['25%', '50%', '75%', '100%'], correctAnswer: 1, explanation: 'Heloten gaben 50% Ernte an Spartiaten, andere 50% ließen für sich.' },
    { id: 'q-economy-2', text: 'Warum nutzte Sparta Eisengeld?', type: 'multiple-choice', options: ['Es war billiger', 'Zur Isolation vom Handel', 'Viel Eisen vorhanden', 'Es war schön'], correctAnswer: 1, explanation: 'Eisengeld wurde zur Isolation genutzt — konnte nicht im Ausland verwendet werden.' },
    { id: 'q-economy-3', text: 'Wie viele Spartiaten gab es bis 4. Jahrhundert?', type: 'multiple-choice', options: ['8.000', '5.000', '2.000', '1.000'], correctAnswer: 3, explanation: 'Anzahl fiel von 8.000 auf 1.000 wegen Verarmung und Verlust der Bürgerschaft.' }
  ]},
  { id: 's29', title: 'Zwei Könige: Machtteilung', content: 'In Sparta gab es zwei Könige gleichzeitig — aus zwei Dynastien. Einer kämpfte, anderer regierte zu Hause. Es verhinderte Tyrannei. Aber Könige waren Militärführer, nicht absolute Herrscher. Echte Macht war bei Gerusie (Rat der Ältesten) und Ephoren (Aufseher).', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/two-kings.jpg', title: 'Zwei Könige' }] },
  { id: 's30', title: 'Ephoren: Aufseher', content: 'Ephoren (5 Personen) wurden auf Jahr gewählt und hatten enorme Macht. Sie kontrollierten Könige, konnten sie richten und hinrichten. Ephoren erklärten Krypteia und verwalteten Heloten. Sie waren Hauptaufseher des Terrors. Macht der Ephoren = Kontrolle über ganze Gesellschaft.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/ephors.jpg', title: 'Ephoren' }] },
  { id: 's31', title: 'Apella: Versammlung ohne Macht', content: 'Apella — Versammlung aller Spartiaten. Aber hatte keine echte Macht. Gewählt wurde durch Geschrei — wer lauter, hat recht. Entscheidungen traf Gerusie, Apella billigte nur. Keine Demokratie — Schein der Teilnahme. Echte Macht = Gerusie und Ephoren.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/apella.jpg', title: 'Apella' }] },
  { id: 's32', title: 'Gerusie: Rat der Ältesten', content: 'Gerusie — 28 Älteste über 60 + 2 Könige = 30 Personen. Sie trafen alle Entscheidungen. Wurden auf Lebenszeit gewählt. Gerusie = Oligarchie. Älteste waren konservativ und grausam. Sie unterstützten Krypteia und Terror. Macht der Alten über Junge.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/gerousia.jpg', title: 'Gerusie' }] },
  { id: 'q8', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-politics-1', text: 'Wie viele Könige gab es in Sparta?', type: 'multiple-choice', options: ['1', '2', '3', '4'], correctAnswer: 1, explanation: 'In Sparta gab es zwei Könige gleichzeitig aus zwei Dynastien — verhinderte Tyrannei.' },
    { id: 'q-politics-2', text: 'Wer erklärte Krypteia?', type: 'multiple-choice', options: ['Könige', 'Ephoren', 'Gerusie', 'Apella'], correctAnswer: 1, explanation: 'Ephoren erklärten Krypteia und verwalteten Terror gegen Heloten.' },
    { id: 'q-politics-3', text: 'Wie viele Personen waren in Gerusie?', type: 'multiple-choice', options: ['20', '28', '30', '50'], correctAnswer: 2, explanation: 'Gerusie bestand aus 28 Ältesten über 60 + 2 Könige = 30 Personen.' }
  ]},
  { id: 's33', title: 'Schlacht bei Leuktra: Ende des Mythos', content: '371 v. Chr. schlugen Thebaner Spartaner bei Leuktra. Sparta verlor 400 Spartiaten von 700 — mehr als Hälfte der Armee. Es war Ende militärischer Überlegenheit. Thebaner nutzten neue Taktik — spartanische Phalanx war veraltet. Mythos der Unbesiegbarkeit brach zusammen.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/leuctra.jpg', title: 'Schlacht bei Leuktra' }] },
  { id: 's34', title: 'Helotenaufstand', content: '464 v. Chr. zerstörte Erdbeben Sparta. Heloten rebellierten — 10 Jahre Krieg. Spartaner konnten Aufstand nicht selbst niederschlagen — baten Athen um Hilfe. Athen half, wurde dann aber Feind. Aufstand zeigte: Heloten können siegen. Sparta fürchtete sie mehr als Feinde.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/helot-rebellion.jpg', title: 'Helotenaufstand' }] },
  { id: 's35', title: 'Aussterben der Spartiaten', content: 'Bis 3. Jahrhundert v. Chr. blieben 700 Spartiaten. Grund: Kriege, Verarmung, Verlust der Bürgerschaft. Nicht genug Krieger für Phalanx. Sparta heuerte Söldner an — Ironie: Militärstaat ohne Krieger. Bis 192 v. Chr. verlor Sparta Unabhängigkeit.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/extinction.jpg', title: 'Aussterben' }] },
  { id: 's36', title: 'Römische Eroberung', content: '146 v. Chr. eroberte Rom Griechenland. Sparta wurde römische Provinz. Römer bewahrten "spartanische" Traditionen als Touristenattraktion. Jungen wurden für Zuschauer geschlagen. Es war Farce — echtes Sparta starb. Rom verwandelte Terror in Show.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/roman-conquest.jpg', title: 'Römische Eroberung' }] },
  { id: 'q9', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-decline-1', text: 'In welchem Jahr schlugen Thebaner Spartaner bei Leuktra?', type: 'multiple-choice', options: ['400 v. Chr.', '371 v. Chr.', '350 v. Chr.', '300 v. Chr.'], correctAnswer: 1, explanation: '371 v. Chr. schlugen Thebaner Spartaner — Ende militärischer Überlegenheit.' },
    { id: 'q-decline-2', text: 'Wie viele Jahre dauerte Helotenaufstand nach Erdbeben?', type: 'multiple-choice', options: ['3 Jahre', '5 Jahre', '10 Jahre', '15 Jahre'], correctAnswer: 2, explanation: 'Helotenaufstand dauerte 10 Jahre (464-454 v. Chr.) — Spartaner konnten nicht selbst niederschlagen.' },
    { id: 'q-decline-3', text: 'Wie viele Spartiaten blieben bis 3. Jahrhundert?', type: 'multiple-choice', options: ['2.000', '1.000', '700', '500'], correctAnswer: 2, explanation: 'Bis 3. Jahrhundert v. Chr. blieben 700 Spartiaten — Militärstaat ohne Krieger.' }
  ]},
  { id: 's37', title: 'Sparta und Nazismus', content: 'Nazis bewunderten Sparta. Hitler nannte Agoge Ideal der Erziehung. SS nutzten spartanische Symbole. Krypteia = Vorbild des Holocaust. Verbannung schwacher Kinder = nazistische Eugenik. Sparta war Modell für Drittes Reich. Terror und Rassismus — gemeinsames Erbe.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/nazism.jpg', title: 'Sparta und Nazismus' }] },
  { id: 's38', title: 'Mythos in Popkultur', content: 'Hollywood schuf Mythos von "300 Spartanern" als Verteidigern der Freiheit. Realität: Sie verteidigten Sklavenstaat. Spartaner waren keine Helden — sie waren Terroristen. Mythos ist bequem zur Rechtfertigung von Militarismus. Realität ist unbequem — sie wird verborgen.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/pop-culture.jpg', title: 'Mythos in Kultur' }] },
  { id: 's39', title: 'Lektionen von Sparta', content: 'Sparta zeigte: Totalitarismus tötet Gesellschaft. Terror schafft keine Stärke — er schafft Angst. Militärstaat ist zum Aussterben verurteilt. Ökonomie der Sklaverei ist ineffizient. Sparta starb nicht von äußeren Feinden, sondern von inneren Widersprüchen. Terror tötete Terroristen.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/lessons.jpg', title: 'Lektionen von Sparta' }] },
  { id: 's40', title: 'Realität vs Mythos', content: 'Mythos: edle Verteidiger der Freiheit. Realität: totalitärer Sklavenstaat. Mythos: militärische Überlegenheit. Realität: Aussterben und Niederlagen. Mythos: ideale Gesellschaft. Realität: Terror und Grausamkeit. Geschichte Spartas — Warnung, kein Beispiel.', duration: 3, media: [{ type: 'image', url: '/media/spartan-terror/reality-myth.jpg', title: 'Realität vs Mythos' }] },
  { id: 'q10', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-legacy-1', text: 'Warum bewunderten Nazis Sparta?', type: 'multiple-choice', options: ['Für Demokratie', 'Agoge = Ideal der Erziehung, Krypteia = Vorbild des Terrors', 'Für Handel', 'Für Kunst'], correctAnswer: 1, explanation: 'Nazis bewunderten Agoge und Krypteia — Sparta war Modell für Drittes Reich.' },
    { id: 'q-legacy-2', text: 'Warum starb Sparta aus?', type: 'multiple-choice', options: ['Von äußeren Feinden', 'Von inneren Widersprüchen: Terror tötete Gesellschaft', 'Von Krankheiten', 'Von Erdbeben'], correctAnswer: 1, explanation: 'Sparta starb von inneren Widersprüchen — Terror und Ökonomie der Sklaverei töteten Staat.' },
    { id: 'q-legacy-3', text: 'Was ist Geschichte Spartas?', type: 'multiple-choice', options: ['Beispiel zum Nachahmen', 'Warnung vor Totalitarismus', 'Mythos über Helden', 'Erfolgreiches Modell'], correctAnswer: 1, explanation: 'Geschichte Spartas — Warnung vor Folgen von Totalitarismus und Terror, kein Beispiel.' }
  ]}
]

const spartanTerrorFinalQuizDE: QuizBlock = {
  id: 'quiz-spartans',
  title: 'Abschlussquiz: Spartaner',
  questions: [
    { id: 'final-q1', text: 'Wie viel Prozent der Bevölkerung machten Spartiaten aus?', type: 'multiple-choice', options: ['20%', '10%', '5%', '50%'], correctAnswer: 2, explanation: 'Spartiaten machten nur 5% der Bevölkerung aus.' },
    { id: 'final-q2', text: 'Wie viele Griechen waren mit 300 Spartanern bei Thermopylen?', type: 'multiple-choice', options: ['1.000', '3.000', '7.000', '10.000'], correctAnswer: 2, explanation: 'Mit 300 Spartanern waren 7.000 andere Griechen.' },
    { id: 'final-q3', text: 'Warum lebt der Mythos über edle Spartaner?', type: 'multiple-choice', options: ['Es ist wahr', 'Mythos ist bequem — rechtfertigt Militarismus', 'Historiker bestätigen', 'Spartaner waren edel'], correctAnswer: 1, explanation: 'Mythos ist bequem zur Rechtfertigung von Militarismus — Realität ist unbequem.' },
    { id: 'final-q4', text: 'Wie viel Prozent der Bevölkerung machten Heloten aus?', type: 'multiple-choice', options: ['50%', '60%', '80%', '90%'], correctAnswer: 2, explanation: 'Heloten machten 80% der Bevölkerung aus — Mehrheit waren Sklaven.' },
    { id: 'final-q5', text: 'Wem gehörten Heloten?', type: 'multiple-choice', options: ['Einzelnen Spartiaten', 'Ganzem Staat', 'Perioiken', 'Niemandem'], correctAnswer: 1, explanation: 'Heloten waren Eigentum des ganzen Staates.' },
    { id: 'final-q6', text: 'Was ist Krypteia?', type: 'multiple-choice', options: ['Militärische Übungen', 'Systematischer Terror gegen Heloten', 'Religiöse Riten', 'Handelswege'], correctAnswer: 1, explanation: 'Krypteia — systematischer Terror: junge Spartiaten töteten nachts Heloten.' },
    { id: 'final-q7', text: 'Wie viele Heloten wurden in Falle 424 getötet?', type: 'multiple-choice', options: ['500', '1.000', '2.000', '5.000'], correctAnswer: 2, explanation: '424 v. Chr. töteten Spartaner 2.000 beste Heloten.' },
    { id: 'final-q8', text: 'Ab welchem Alter gingen Jungen in Agoge?', type: 'multiple-choice', options: ['5 Jahre', '7 Jahre', '10 Jahre', '12 Jahre'], correctAnswer: 1, explanation: 'Jungen verließen Haus mit 7 Jahren.' },
    { id: 'final-q9', text: 'Warum wurde Diebstahl in Agoge ermutigt?', type: 'multiple-choice', options: ['Es war lustig', 'Fähigkeit zu stehlen = Fähigkeit, im Krieg zu überleben', 'Nicht genug Essen', 'Wurde nicht ermutigt'], correctAnswer: 1, explanation: 'Diebstahl wurde als Überlebenstraining ermutigt.' },
    { id: 'final-q10', text: 'Was geschah mit schwachen Kindern?', type: 'multiple-choice', options: ['Wurden behandelt', 'Von Klippe geworfen', 'An Perioiken gegeben', 'Zu Hause gelassen'], correctAnswer: 1, explanation: 'Schwache Kinder wurden von Klippe geworfen — spartanische Eugenik.' },
    { id: 'final-q11', text: 'Wie viel Prozent des Landes gehörte Frauen?', type: 'multiple-choice', options: ['10%', '20%', '40%', '60%'], correctAnswer: 2, explanation: '40% des Landes gehörte Frauen.' },
    { id: 'final-q12', text: 'Warum trainierten Frauen?', type: 'multiple-choice', options: ['Für Schönheit', 'Um starke Kinder zu gebären', 'Für Wettkämpfe', 'Trainierten nicht'], correctAnswer: 1, explanation: 'Frauen trainierten, um starke Kinder zu gebären.' },
    { id: 'final-q13', text: 'Wie viele Jahre diente Spartiat?', type: 'multiple-choice', options: ['20 Jahre', '30 Jahre', '40 Jahre', '50 Jahre'], correctAnswer: 2, explanation: 'Spartiat diente von 20 bis 60 — 40 Jahre Dienst.' },
    { id: 'final-q14', text: 'Was bedeutete es, ohne Schild zurückzukehren?', type: 'multiple-choice', options: ['Nichts', 'Schande fürs Leben', 'Geldstrafe', 'Kurzer Urlaub'], correctAnswer: 1, explanation: 'Ohne Schild zurückkehren = Schande fürs Leben.' },
    { id: 'final-q15', text: 'Wie viel Ernte gaben Heloten?', type: 'multiple-choice', options: ['25%', '50%', '75%', '100%'], correctAnswer: 1, explanation: 'Heloten gaben 50% Ernte an Spartiaten.' },
    { id: 'final-q16', text: 'Warum nutzten sie Eisengeld?', type: 'multiple-choice', options: ['Es war billiger', 'Zur Isolation vom Handel', 'Viel Eisen vorhanden', 'Es war schön'], correctAnswer: 1, explanation: 'Eisengeld wurde zur Isolation genutzt.' },
    { id: 'final-q17', text: 'Wie viele Spartiaten gab es bis 4. Jahrhundert?', type: 'multiple-choice', options: ['8.000', '5.000', '2.000', '1.000'], correctAnswer: 3, explanation: 'Anzahl fiel von 8.000 auf 1.000.' },
    { id: 'final-q18', text: 'Wie viele Könige gab es in Sparta?', type: 'multiple-choice', options: ['1', '2', '3', '4'], correctAnswer: 1, explanation: 'In Sparta gab es zwei Könige gleichzeitig.' },
    { id: 'final-q19', text: 'Wer erklärte Krypteia?', type: 'multiple-choice', options: ['Könige', 'Ephoren', 'Gerusie', 'Apella'], correctAnswer: 1, explanation: 'Ephoren erklärten Krypteia und verwalteten Terror.' },
    { id: 'final-q20', text: 'In welchem Jahr schlugen Thebaner Spartaner?', type: 'multiple-choice', options: ['400 v. Chr.', '371 v. Chr.', '350 v. Chr.', '300 v. Chr.'], correctAnswer: 1, explanation: '371 v. Chr. bei Leuktra — Ende der Überlegenheit.' },
    { id: 'final-q21', text: 'Wie viele Jahre dauerte Helotenaufstand?', type: 'multiple-choice', options: ['3 Jahre', '5 Jahre', '10 Jahre', '15 Jahre'], correctAnswer: 2, explanation: 'Aufstand dauerte 10 Jahre (464-454 v. Chr.).' },
    { id: 'final-q22', text: 'Wie viele Spartiaten blieben bis 3. Jahrhundert?', type: 'multiple-choice', options: ['2.000', '1.000', '700', '500'], correctAnswer: 2, explanation: 'Bis 3. Jahrhundert v. Chr. blieben 700 Spartiaten.' },
    { id: 'final-q23', text: 'Warum bewunderten Nazis Sparta?', type: 'multiple-choice', options: ['Für Demokratie', 'Agoge = Ideal, Krypteia = Vorbild des Terrors', 'Für Handel', 'Für Kunst'], correctAnswer: 1, explanation: 'Nazis bewunderten Agoge und Krypteia — Modell für Drittes Reich.' },
    { id: 'final-q24', text: 'Warum starb Sparta aus?', type: 'multiple-choice', options: ['Von äußeren Feinden', 'Von inneren Widersprüchen', 'Von Krankheiten', 'Von Erdbeben'], correctAnswer: 1, explanation: 'Sparta starb von inneren Widersprüchen — Terror tötete Gesellschaft.' },
    { id: 'final-q25', text: 'Was ist Geschichte Spartas?', type: 'multiple-choice', options: ['Beispiel zum Nachahmen', 'Warnung vor Totalitarismus', 'Mythos über Helden', 'Erfolgreiches Modell'], correctAnswer: 1, explanation: 'Geschichte Spartas — Warnung, kein Beispiel.' },
    { id: 'final-q26', text: 'Was sind Syssitien?', type: 'multiple-choice', options: ['Militärische Einheiten', 'Gemeinsame Tische', 'Religiöse Riten', 'Handelsgilden'], correctAnswer: 1, explanation: 'Syssitien — gemeinsame Kantinen, wo Spartiaten aßen.' },
    { id: 'final-q27', text: 'Wem gehörten Kinder?', type: 'multiple-choice', options: ['Eltern', 'Staat', 'Mutter', 'Vater'], correctAnswer: 1, explanation: 'Kinder gehörten Staat, nicht Eltern.' },
    { id: 'final-q28', text: 'Wie viele Personen in Gerusie?', type: 'multiple-choice', options: ['20', '28', '30', '50'], correctAnswer: 2, explanation: 'Gerusie: 28 Älteste + 2 Könige = 30 Personen.' },
    { id: 'final-q29', text: 'Womit beschäftigten sich Perioiken?', type: 'multiple-choice', options: ['Kämpften', 'Handwerk und Handel', 'Bearbeiteten Land', 'Nichts'], correctAnswer: 1, explanation: 'Perioiken betrieben Handwerk und Handel.' },
    { id: 'final-q30', text: 'Warum fürchteten Spartaner Heloten?', type: 'multiple-choice', options: ['Es waren wenige', 'Sie machten 80% aus — fürchteten Aufstand', 'Sie waren stärker', 'Fürchteten nicht'], correctAnswer: 1, explanation: 'Heloten machten 80% der Bevölkerung aus — Spartaner fürchteten Aufstand.' }
  ]
}

// Deutsche Übersetzungen für 3D-Druck
const threeDPrintingSlidesDE: Slide[] = [
  { id: 'p1', title: '3D-Druck: Revolution der Produktion', content: '3D-Druck ist die schichtweise Herstellung von Objekten aus einem digitalen Modell. Statt Material aus einem Block zu schneiden, wächst das Objekt Schicht für Schicht. Das erste Patent wurde 1986 erteilt. Heute kosten 3D-Drucker von 200 Euro (für zu Hause) bis 500.000 Euro (industriell). Das verändert die Produktion.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/3d-printing-revolution.jpg', title: 'Revolution des 3D-Drucks' }] },
  { id: 'p2', title: 'Prinzip des schichtweisen Drucks', content: 'Ein 3D-Drucker liest ein digitales Modell (STL-Datei) und erstellt das Objekt Schicht für Schicht. Schichtdicke: 0,1-0,3 mm für Kunststoff, 0,01-0,05 mm für Metall. Eine Schicht = eine Druckzeile. Die Schichten werden verklebt oder verschmolzen. Einfaches Objekt = 100-500 Schichten, komplexes = 10.000+ Schichten.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/layer-by-layer.jpg', title: 'Schichtweiser Druck' }] },
  { id: 'p3', title: 'Vom Prototyp zur Produktion', content: 'Früher wurde 3D-Druck nur für Prototypen verwendet — kosteten 10.000-50.000 Euro pro Modell. Heute kann man fertige Produkte drucken. Handprothese: 50 Euro statt 5.000 Euro. Flugzeugteil: 1.000 Euro statt 10.000 Euro. 3D-Druck ist 50-90% günstiger als traditionelle Produktion.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/prototype-to-production.jpg', title: 'Vom Prototyp zur Produktion' }] },
  { id: 'p4', title: 'Geschwindigkeit und Präzision', content: '3D-Druck ist langsamer als traditionelle Produktion: einfaches Objekt = 1-3 Stunden, komplexes = 10-24 Stunden. Aber die Präzision ist höher: bis zu 0,01 mm. Traditionelle Produktion: Präzision 0,1-0,5 mm. Für Medizin und Luftfahrt ist Präzision kritisch — 3D-Druck gewinnt.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/speed-precision.jpg', title: 'Geschwindigkeit und Präzision' }] },
  { id: 'q1', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-intro-1', text: 'In welchem Jahr wurde das erste Patent für 3D-Druck erteilt?', type: 'multiple-choice', options: ['1976', '1986', '1996', '2006'], correctAnswer: 1, explanation: 'Das erste Patent wurde 1986 erteilt.' },
    { id: 'q-intro-2', text: 'Wie viel kostet ein Heim-3D-Drucker?', type: 'multiple-choice', options: ['50 Euro', '200 Euro', '1.000 Euro', '5.000 Euro'], correctAnswer: 1, explanation: 'Heim-3D-Drucker kosten ab 200 Euro.' },
    { id: 'q-intro-3', text: 'Um wie viel Prozent ist 3D-Druck günstiger als traditionelle Produktion?', type: 'multiple-choice', options: ['10-20%', '30-50%', '50-90%', '100%'], correctAnswer: 2, explanation: '3D-Druck ist 50-90% günstiger als traditionelle Produktion.' }
  ]},
  { id: 'p5', title: 'Geschichte: Von Stereolithographie', content: 'Erste Methode — Stereolithographie (SLA): Ultraviolett härtet flüssiges Harz Schicht für Schicht. Erfunden von Charles Hull 1984. Erster kommerzieller Drucker kostete 100.000 Dollar (heute = 250.000 Euro). Nur große Unternehmen nutzten ihn. Heute SLA-Drucker = 200-2.000 Euro.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/stereolithography-history.jpg', title: 'Geschichte der Stereolithographie' }] },
  { id: 'p6', title: 'FDM: Zugänglichkeit für alle', content: 'FDM (Fused Deposition Modeling) — beliebteste Methode. Kunststoffdraht schmilzt und wird durch Düse gedrückt. Erfunden von Scott Crump 1988. Erste Drucker kosteten 20.000-50.000 Dollar. Heute FDM-Drucker = 200-1.000 Euro. Das machte 3D-Druck zugänglich.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/fdm-accessibility.jpg', title: 'FDM-Zugänglichkeit' }] },
  { id: 'p7', title: 'Revolution 2009', content: '2009 liefen Schlüsselpatente für FDM ab. Günstige Drucker erschienen: RepRap (Selbstbau) für 500 Euro. MakerBot (fertig) für 1.500 Euro. Vor 2009 kosteten Drucker mindestens 20.000 Euro. Patentfreiheit senkte Preis um das 40-fache. Das war der Beginn der Heim-3D-Druck-Ära.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/2009-revolution.jpg', title: 'Revolution 2009' }] },
  { id: 'p8', title: 'Marktwachstum', content: '2010 betrug der 3D-Druck-Markt 1,3 Milliarden Dollar. 2023 = 18 Milliarden Dollar. Wachstum um das 14-fache in 13 Jahren. Erwartet: 2028 = 50 Milliarden Dollar. Medizin = 30% des Markts, Luftfahrt = 20%, Autos = 15%. 3D-Druck wird Massentechnologie.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/market-growth.jpg', title: 'Marktwachstum' }] },
  { id: 'q2', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-history-1', text: 'Wer erfand Stereolithographie?', type: 'multiple-choice', options: ['Scott Crump', 'Charles Hull', 'Elon Musk', 'Steve Jobs'], correctAnswer: 1, explanation: 'Charles Hull erfand Stereolithographie 1984.' },
    { id: 'q-history-2', text: 'Warum wurden Drucker 2009 günstiger?', type: 'multiple-choice', options: ['Neue Technologien', 'FDM-Patente liefen ab', 'Wettbewerb', 'Krise'], correctAnswer: 1, explanation: '2009 liefen Schlüsselpatente für FDM ab, was den Preis um das 40-fache senkte.' },
    { id: 'q-history-3', text: 'Wie groß war der 3D-Druck-Markt 2023?', type: 'multiple-choice', options: ['5 Milliarden', '18 Milliarden', '30 Milliarden', '50 Milliarden'], correctAnswer: 1, explanation: '2023 betrug der 3D-Druck-Markt 18 Milliarden Dollar.' }
  ]},
  { id: 'p9', title: 'FDM: Kunststoffdraht', content: 'FDM nutzt Kunststoffdraht (PLA, ABS, PETG). Draht schmilzt bei 200-250°C und wird durch 0,4-mm-Düse gedrückt. Geschwindigkeit: 50-100 mm/s. Präzision: 0,1-0,3 mm. Materialkosten: 20-30 Euro pro Kilogramm. Einfaches Objekt = 50-100 Gramm Kunststoff = 1-3 Euro. Das ist die günstigste Methode.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/fdm-filament.jpg', title: 'FDM-Kunststoffdraht' }] },
  { id: 'p10', title: 'SLA: Ultraviolett und Harz', content: 'SLA nutzt flüssiges Harz, das unter Ultraviolett aushärtet. Laser oder Projektor zeichnet Schicht für Schicht. Präzision: 0,01-0,05 mm — 10-mal höher als FDM. Harzkosten: 50-100 Euro pro Liter. Objekt = 10-50 ml Harz = 0,5-5 Euro. SLA teurer, aber präziser — für Schmuck und Medizin.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/sla-resin.jpg', title: 'SLA-Harz' }] },
  { id: 'p11', title: 'SLS: Metall und Pulver', content: 'SLS (Selective Laser Sintering) nutzt Metall- oder Kunststoffpulver. Laser schmilzt Pulver Schicht für Schicht. Temperatur: 1.000-1.500°C. Kann Titan, Edelstahl, Aluminium drucken. Präzision: 0,05-0,1 mm. Kosten: 100-500 Euro pro Kilogramm Pulver. Drucker = 100.000-500.000 Euro. Das ist für Industrie.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/sls-metal.jpg', title: 'SLS-Metall' }] },
  { id: 'p12', title: 'Methodenvergleich', content: 'FDM: günstig (200-1.000 Euro), langsam (1-3 Stunden), Präzision 0,1-0,3 mm. SLA: teurer (500-5.000 Euro), schneller (30 Min-2 Stunden), Präzision 0,01-0,05 mm. SLS: sehr teuer (100.000+ Euro), schnell (1-2 Stunden), Präzision 0,05-0,1 mm, aber nur Metall. Wahl hängt von Aufgabe und Budget ab.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/methods-comparison.jpg', title: 'Methodenvergleich' }] },
  { id: 'q3', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-tech-1', text: 'Welche Präzision hat FDM-Druck?', type: 'multiple-choice', options: ['0,01-0,05 mm', '0,1-0,3 mm', '0,5-1 mm', '1-2 mm'], correctAnswer: 1, explanation: 'FDM hat Präzision von 0,1-0,3 mm.' },
    { id: 'q-tech-2', text: 'Wie viel kostet ein Kilogramm Kunststoff für FDM?', type: 'multiple-choice', options: ['5-10 Euro', '20-30 Euro', '50-100 Euro', '200-500 Euro'], correctAnswer: 1, explanation: 'Kunststoff für FDM kostet 20-30 Euro pro Kilogramm.' },
    { id: 'q-tech-3', text: 'Welche Methode ist am präzisesten?', type: 'multiple-choice', options: ['FDM', 'SLA', 'SLS', 'Alle gleich'], correctAnswer: 1, explanation: 'SLA ist am präzisesten: 0,01-0,05 mm, 10-mal höher als FDM.' }
  ]},
  { id: 'p13', title: 'PLA: Ökologischer Kunststoff', content: 'PLA (Polylactid) — beliebtestes Material. Hergestellt aus Mais oder Zuckerrohr. Schmilzt bei 180-220°C. Nicht toxisch, biologisch abbaubar. Kosten: 20-25 Euro pro Kilogramm. Festigkeit: mittel. Für Spielzeug, Prototypen, Haushaltsgegenstände. Nicht für hohe Temperaturen (verformt sich bei 60°C).', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/pla-plastic.jpg', title: 'PLA-Kunststoff' }] },
  { id: 'p14', title: 'ABS: Fest und hitzebeständig', content: 'ABS (Acrylnitril-Butadien-Styrol) — fester als PLA. Hält 80-100°C aus. Wird in Autos, Elektronik verwendet. Kosten: 25-35 Euro pro Kilogramm. Toxisch beim Drucken (Belüftung nötig). Festigkeit 2-mal höher als PLA. Für funktionale Teile, nicht für Spielzeug (toxisch).', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/abs-strong.jpg', title: 'ABS fest' }] },
  { id: 'p15', title: 'Metalle: Titan und Edelstahl', content: 'Metallischer 3D-Druck nutzt Titan-, Edelstahl-, Aluminiumpulver. Titan: 500-1.000 Euro pro Kilogramm Pulver. Edelstahl: 50-100 Euro. Aluminium: 30-50 Euro. Festigkeit = Guss oder höher. Für Luftfahrt, Medizin (Implantate), Autos. Flugzeugteil aus Titan: 5.000-10.000 Euro statt 50.000 Euro traditionell.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/metal-titanium.jpg', title: 'Metalle Titan' }] },
  { id: 'p16', title: 'Biomaterialien: Für Organe', content: 'Biodruck nutzt Bio-Tinte — lebende Zellen in Gel. Zellen werden Schicht für Schicht gedruckt, bilden Gewebe. Kosten: 1.000-5.000 Euro pro Milliliter Bio-Tinte. Zellen vom Patienten (autolog) oder Spender. Drucken Knorpel, Haut, Gefäße. Vollständige Organe — in Entwicklung. Herz aus Biodrucker = noch unmöglich, aber Knorpel = Realität.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/bio-materials.jpg', title: 'Biomaterialien' }] },
  { id: 'q4', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-materials-1', text: 'Woraus wird PLA hergestellt?', type: 'multiple-choice', options: ['Erdöl', 'Mais oder Zuckerrohr', 'Holz', 'Metall'], correctAnswer: 1, explanation: 'PLA wird aus Mais oder Zuckerrohr hergestellt — ökologisches Material.' },
    { id: 'q-materials-2', text: 'Wie viel kostet ein Kilogramm Titanpulver?', type: 'multiple-choice', options: ['50-100 Euro', '200-300 Euro', '500-1.000 Euro', '2.000-5.000 Euro'], correctAnswer: 2, explanation: 'Titanpulver kostet 500-1.000 Euro pro Kilogramm.' },
    { id: 'q-materials-3', text: 'Was kann man jetzt mit Biodrucker drucken?', type: 'multiple-choice', options: ['Vollständige Organe', 'Knorpel und Haut', 'Nur Prothesen', 'Nichts'], correctAnswer: 1, explanation: 'Biodrucker kann Knorpel, Haut, Gefäße drucken, aber nicht vollständige Organe (in Entwicklung).' }
  ]},
  { id: 'p17', title: 'Spielzeug: Personalisierung', content: '3D-Druck ermöglicht einzigartiges Spielzeug. Figurencharakter: 5-10 Euro statt 20-50 Euro im Laden. Kann auf Bestellung gedruckt werden: Name des Kindes auf Spielzeug, Lieblingsfarbe, Größe. Druckzeit: 2-4 Stunden. Material: 1-2 Euro. Das ist günstiger als Massenproduktion für kleine Serien.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/toys-personalization.jpg', title: 'Spielzeug-Personalisierung' }] },
  { id: 'p18', title: 'Prototypen: Schnelle Prüfung', content: 'Prototyp eines Teils zum Testen: 1-2 Tage statt 2-4 Wochen traditionell. Kosten: 50-200 Euro statt 1.000-5.000 Euro. Kann Form, Größe, Funktionalität vor Massenproduktion prüfen. Fehler im Prototyp = Verlust 100 Euro. Fehler in Produktion = Verlust 100.000 Euro. 3D-Druck spart Geld.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/prototypes-testing.jpg', title: 'Prototypen-Test' }] },
  { id: 'p19', title: 'Kleine Serien: Vorteilhaft', content: 'Für Serien von 1-100 Stück ist 3D-Druck vorteilhafter als traditionelle Produktion. Gießen erfordert Form: 5.000-50.000 Euro. 3D-Druck ohne Form: 10-50 Euro pro Stück. Bei Serie von 10 Stück: Gießen = 500-5.000 Euro pro Stück (mit Form), 3D-Druck = 10-50 Euro. Ersparnis: 90-99%. Für große Serien (1.000+) ist Gießen vorteilhafter.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/small-batches.jpg', title: 'Kleine Serien' }] },
  { id: 'p20', title: 'Anpassung: Jeder ist einzigartig', content: '3D-Druck ermöglicht Anpassung jedes Objekts. Brille nach Gesichtsform: 200 Euro statt 500 Euro. Handprothese für bestimmte Person: 500 Euro statt 5.000 Euro. Schuhe nach Fuß: 100 Euro statt 300 Euro. Massenproduktion kann das nicht — nur 3D-Druck. Personalisierung = Zukunft.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/customization.jpg', title: 'Anpassung' }] },
  { id: 'q5', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-toys-1', text: 'Wie viel kostet eine gedruckte Figurenfigur?', type: 'multiple-choice', options: ['1-2 Euro', '5-10 Euro', '20-50 Euro', '100+ Euro'], correctAnswer: 1, explanation: 'Gedruckte Figur kostet 5-10 Euro statt 20-50 Euro im Laden.' },
    { id: 'q-toys-2', text: 'Für welche Serien ist 3D-Druck vorteilhafter als Gießen?', type: 'multiple-choice', options: ['1-100 Stück', '100-1.000 Stück', '1.000-10.000 Stück', 'Immer'], correctAnswer: 0, explanation: 'Für Serien von 1-100 Stück ist 3D-Druck vorteilhafter, da keine teure Form nötig ist.' },
    { id: 'q-toys-3', text: 'Wie viel kostet eine Handprothese, gedruckt auf 3D-Drucker?', type: 'multiple-choice', options: ['50 Euro', '500 Euro', '5.000 Euro', '50.000 Euro'], correctAnswer: 1, explanation: '3D-gedruckte Handprothese kostet 500 Euro statt 5.000 Euro traditionell.' }
  ]},
  { id: 'p21', title: 'Luftfahrt: Leichte Teile', content: 'In Luftfahrt zählt jedes Gramm = Geld. Flugzeugteil: traditionell = 10 kg, 3D-Druck = 5 kg (optimierte Struktur). Kraftstoffersparnis: 1 kg = 1.000 Euro pro Jahr pro Flugzeug. Teil aus Titan: traditionell = 50.000 Euro, 3D-Druck = 10.000 Euro. Boeing und Airbus nutzen 3D-Druck für 1.000+ Teile.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/aerospace-lightweight.jpg', title: 'Luftfahrt leichte Teile' }] },
  { id: 'p22', title: 'Autos: Anpassung', content: 'BMW druckt 1 Million Teile pro Jahr auf 3D-Druckern. Teil für altes Modell: traditionell = 500 Euro (Form nötig), 3D-Druck = 50 Euro (ohne Form). Für seltene Modelle einziger Weg. Porsche druckt Ersatzteile für klassische Autos: 200-1.000 Euro statt 2.000-10.000 Euro. 3D-Druck rettet alte Autos.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/cars-customization.jpg', title: 'Autos Anpassung' }] },
  { id: 'p23', title: 'Architektur: Gebäudemodelle', content: 'Architekten drucken Gebäudemodelle für Präsentationen. Hausmodell: traditionell = 5.000-20.000 Euro (Handarbeit), 3D-Druck = 500-2.000 Euro. Zeit: 2 Wochen statt 2 Tage. Kann Kunden vor Bau zeigen. Fehler im Modell = Verlust 500 Euro. Fehler im Gebäude = Verlust 500.000+ Euro. 3D-Druck verhindert Fehler.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/architecture-models.jpg', title: 'Architektur-Modelle' }] },
  { id: 'p24', title: 'Werkzeuge: Vor Ort', content: 'Im Werk brach Werkzeug. Auf Lieferung warten = 2-4 Wochen, Stillstand = 10.000-50.000 Euro pro Tag. Vor Ort drucken = 2-4 Stunden, Kosten = 50-200 Euro. Ersparnis: 100.000-1.000.000 Euro. NASA druckt Werkzeuge auf ISS: Lieferung von Erde = 10.000 Dollar pro Kilogramm, Druck vor Ort = 100 Dollar. Weltraum braucht 3D-Druck.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/tools-on-site.jpg', title: 'Werkzeuge vor Ort' }] },
  { id: 'q6', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-industry-1', text: 'Wie viele Teile druckt BMW pro Jahr?', type: 'multiple-choice', options: ['10.000', '100.000', '1 Million', '10 Millionen'], correctAnswer: 2, explanation: 'BMW druckt 1 Million Teile pro Jahr auf 3D-Druckern.' },
    { id: 'q-industry-2', text: 'Wie viel kostet Lieferung eines Kilogramms zur ISS?', type: 'multiple-choice', options: ['100 Dollar', '1.000 Dollar', '10.000 Dollar', '100.000 Dollar'], correctAnswer: 2, explanation: 'Lieferung zur ISS kostet 10.000 Dollar pro Kilogramm — daher druckt NASA Werkzeuge vor Ort.' },
    { id: 'q-industry-3', text: 'Um wie viel Prozent leichter ist Flugzeugteil bei 3D-Druck?', type: 'multiple-choice', options: ['10%', '30%', '50%', '70%'], correctAnswer: 2, explanation: '3D-gedrucktes Flugzeugteil ist 50% leichter dank optimierter Struktur.' }
  ]},
  { id: 'p25', title: 'Prothesen: Zugänglichkeit', content: 'Traditionelle Handprothese: 5.000-50.000 Euro. 3D-gedruckt: 50-500 Euro. Unterschied um das 10-100-fache. In Afrika retten 3D-gedruckte Prothesen Leben: traditionelle unzugänglich. Beinprothese: traditionell = 10.000-30.000 Euro, 3D-gedruckt = 200-1.000 Euro. Kinder wachsen schnell — neue Prothese alle 1-2 Jahre nötig. 3D-Druck macht das zugänglich.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/prosthetics-accessibility.jpg', title: 'Prothesen-Zugänglichkeit' }] },
  { id: 'p26', title: 'Implantate: Genaue Form', content: 'Hüftgelenkimplantat: traditionell = Standardgrößen, 3D-Druck = genaue Form für Patient. Präzision: 0,01 mm. Kosten: 5.000-10.000 Euro (gleich). Aber 3D-gedrucktes wächst besser an — genaue Form = weniger Abstoßung. Schädelimplantat: traditionell = 20.000 Euro, 3D-Druck = 5.000-10.000 Euro. Ersparnis + Präzision.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/implants-precision.jpg', title: 'Implantat-Präzision' }] },
  { id: 'p27', title: 'Zahnmedizin: Kronen und Brücken', content: 'Zahnkrone: traditionell = 500-1.000 Euro, 3D-Druck = 200-500 Euro. Zeit: 2 Wochen statt 2 Tage. Kann direkt in Klinik drucken. Brücke aus 3-5 Zähnen: traditionell = 2.000-5.000 Euro, 3D-Druck = 500-1.500 Euro. Material: Keramik oder Metall. Präzision: 0,01 mm — perfekte Passung. 3D-Druck verändert Zahnmedizin.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/dentistry-crowns.jpg', title: 'Zahnmedizin-Kronen' }] },
  { id: 'p28', title: 'Chirurgie: Modelle für Planung', content: 'Chirurg druckt Organmodell des Patienten vor Operation. Herzmodell: 200-500 Euro. Planung auf Modell = weniger Fehler. Operationszeit: -30-50%. Komplikationen: -20-40%. Ersparnis: 10.000-50.000 Euro pro Operation (weniger Zeit = weniger Kosten). Lebermodell für Resektion: 300-800 Euro, spart aber 20.000+ Euro.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/surgery-planning.jpg', title: 'Chirurgie-Planung' }] },
  { id: 'q7', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-medicine-1', text: 'Wie viel kostet 3D-gedruckte Handprothese?', type: 'multiple-choice', options: ['50-500 Euro', '1.000-2.000 Euro', '5.000-10.000 Euro', '20.000+ Euro'], correctAnswer: 0, explanation: '3D-gedruckte Handprothese kostet 50-500 Euro statt 5.000-50.000 Euro traditionell.' },
    { id: 'q-medicine-2', text: 'Um wie viel Prozent verkürzt sich Operationszeit mit 3D-Modell?', type: 'multiple-choice', options: ['10-20%', '30-50%', '60-80%', '90-100%'], correctAnswer: 1, explanation: 'Planung auf 3D-Modell verkürzt Operationszeit um 30-50%.' },
    { id: 'q-medicine-3', text: 'Wie viel kostet 3D-gedruckte Zahnkrone?', type: 'multiple-choice', options: ['50-100 Euro', '200-500 Euro', '1.000-2.000 Euro', '5.000+ Euro'], correctAnswer: 1, explanation: '3D-gedruckte Krone kostet 200-500 Euro statt 500-1.000 Euro traditionell.' }
  ]},
  { id: 'p29', title: 'Biodruck: Wie es funktioniert', content: 'Biodrucker druckt lebende Zellen Schicht für Schicht. Zellen in Gel (Hydrogel) — Nährmedium. Zellschicht = 0,1-0,5 mm. Organ = 100-1.000 Schichten. Nach Druck wachsen Zellen und bilden Gewebe. Wachstumszeit: 2-4 Wochen. Drucken jetzt Knorpel, Haut, Gefäße. Vollständige Organe (Herz, Niere) — in Entwicklung, erste Tierversuche.', duration: 3, media: [
    { type: 'image', url: '/media/3d-printing-organs/bioprinting-how.jpg', title: 'Biodruck wie es funktioniert' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=ZZ8DWdxLrGQ', title: 'FÄKT: Organe aus dem 3D-Drucker (Innsbruck)' }
  ] },
  { id: 'p30', title: 'Knorpel: Bereits Realität', content: 'Knorpel im Knie wird aus Zellen des Patienten gedruckt. Zellen aus gesundem Knorpel (Biopsie). Drucken Form, implantieren. Zeit: 2-3 Wochen Wachstum im Labor. Kosten: 10.000-30.000 Euro (experimentell). Traditioneller Knorpelersatz: 5.000-15.000 Euro, aber Spender-Material. Eigene Zellen = keine Abstoßung. Das ist die Zukunft der Medizin.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/cartilage-reality.jpg', title: 'Knorpel Realität' }] },
  { id: 'p31', title: 'Haut: Für Verbrennungen', content: 'Haut für Verbrennungen wird aus Zellen des Patienten gedruckt. Zellen von unverletzter Stelle nehmen, vermehren, Hautblatt drucken. Größe: bis 100 qcm auf einmal. Zeit: 2-3 Wochen. Kosten: 5.000-20.000 Euro (experimentell). Traditionelle Hauttransplantation: 10.000-50.000 Euro, aber Spender-Haut. Eigene Haut = perfekte Kompatibilität. Noch in klinischen Versuchen.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/skin-burns.jpg', title: 'Haut Verbrennungen' }] },
  { id: 'p32', title: 'Organe: Zukunft', content: 'Vollständige Organe (Herz, Niere, Leber) werden noch nicht für Menschen gedruckt. Probleme: Gefäßnetz (Blutgefäße), Ernährung der Zellen im Organ, Größe (Organ = Tausende Schichten). Erste Erfolge: Mini-Organe zum Testen von Medikamenten (Organoide). Mini-Niere: 1-2 mm, für Forschung. Vollständige Niere: in Entwicklung, erste Tierversuche in 5-10 Jahren.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/organs-future.jpg', title: 'Organe Zukunft' }] },
  { id: 'q8', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-bio-1', text: 'Was kann man jetzt mit Biodrucker drucken?', type: 'multiple-choice', options: ['Vollständige Organe', 'Knorpel, Haut, Gefäße', 'Nur Prothesen', 'Nichts'], correctAnswer: 1, explanation: 'Biodrucker kann Knorpel, Haut, Gefäße drucken, aber nicht vollständige Organe (in Entwicklung).' },
    { id: 'q-bio-2', text: 'Wie viel kostet experimenteller Knorpeldruck?', type: 'multiple-choice', options: ['1.000-5.000 Euro', '10.000-30.000 Euro', '50.000-100.000 Euro', '100.000+ Euro'], correctAnswer: 1, explanation: 'Experimenteller Knorpeldruck kostet 10.000-30.000 Euro.' },
    { id: 'q-bio-3', text: 'Wann werden erste Versuche mit vollständigen Organen am Menschen erwartet?', type: 'multiple-choice', options: ['1-2 Jahre', '5-10 Jahre', '20-30 Jahre', 'Niemals'], correctAnswer: 1, explanation: 'Erste Versuche am Menschen werden in 5-10 Jahren erwartet.' }
  ]},
  { id: 'p33', title: 'Druckerkosten', content: 'Heim-FDM-Drucker: 200-1.000 Euro. Professioneller SLA: 2.000-10.000 Euro. Industrieller SLS: 100.000-500.000 Euro. Biodrucker: 50.000-500.000 Euro. Preise fallen: 2010 kostete professioneller Drucker = 50.000 Euro, heute = 5.000 Euro. Fall um das 10-fache in 13 Jahren. Zugänglichkeit wächst.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/printer-costs.jpg', title: 'Druckerkosten' }] },
  { id: 'p34', title: 'Materialersparnis', content: 'Traditionelle Produktion: 30-50% Material wird Abfall (Abschnitte, Späne). 3D-Druck: 5-10% Abfall. Ersparnis: 20-40% Material. Für teure Materialien (Titan, Gold) kritisch. Titan: 500 Euro/kg. Ersparnis 30% = 150 Euro pro Kilogramm. Bei großer Produktion = Millionen Euro pro Jahr. 3D-Druck ist umweltfreundlicher.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/material-savings.jpg', title: 'Materialersparnis' }] },
  { id: 'p35', title: 'Zugänglichkeit: Von Elite zu Massen', content: '2010 war 3D-Druck = nur für große Unternehmen (Drucker 50.000+ Euro). 2023 = für alle (Drucker 200+ Euro). Anzahl Heim-Drucker: 2010 = 10.000, 2023 = 10 Millionen. Wachstum um das 1.000-fache. Online-Druckservices: Datei hochladen, Objekt in 2-5 Tagen erhalten. Kosten: 10-100 Euro pro Objekt. 3D-Druck wurde massentauglich.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/accessibility-masses.jpg', title: 'Zugänglichkeit für Massen' }] },
  { id: 'p36', title: 'Online-Märkte für Modelle', content: 'Thingiverse, MyMiniFactory — Märkte für 3D-Modelle. Modell: kostenlos oder 1-50 Euro. Herunterladen, zu Hause drucken. Millionen Modelle verfügbar. Designer erhält 50-70% vom Verkauf. Verdienst: 100-10.000 Euro pro Monat für beliebte Designer. Modellmarkt = 500 Millionen Dollar pro Jahr. 3D-Druck schuf neue Wirtschaft.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/online-markets.jpg', title: 'Online-Märkte' }] },
  { id: 'q9', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-economy-1', text: 'Wie viel kostet Heim-FDM-Drucker?', type: 'multiple-choice', options: ['50-100 Euro', '200-1.000 Euro', '2.000-5.000 Euro', '10.000+ Euro'], correctAnswer: 1, explanation: 'Heim-FDM-Drucker kostet 200-1.000 Euro.' },
    { id: 'q-economy-2', text: 'Um wie viel Prozent weniger Abfall bei 3D-Druck?', type: 'multiple-choice', options: ['10-20%', '20-40%', '50-70%', '80-90%'], correctAnswer: 1, explanation: '3D-Druck gibt 5-10% Abfall statt 30-50% bei traditioneller Produktion — Ersparnis 20-40%.' },
    { id: 'q-economy-3', text: 'Wie groß ist der 3D-Modellmarkt?', type: 'multiple-choice', options: ['50 Millionen', '500 Millionen', '5 Milliarden', '50 Milliarden'], correctAnswer: 1, explanation: '3D-Modellmarkt beträgt 500 Millionen Dollar pro Jahr.' }
  ]},
  { id: 'p37', title: 'Personalisierte Medizin', content: 'Zukunft: Jedes Implantat und jede Prothese für bestimmten Patienten. Körperscan → Modell → Druck. Zeit: 1-2 Wochen statt 2-4 Monate. Kosten: gleich oder niedriger. Präzision: perfekt. Abstoßung: minimal. Personalisierte Medikamente: Tablette für Genom des Patienten. 3D-Druck macht Medizin individuell.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/personalized-medicine.jpg', title: 'Personalisierte Medizin' }] },
  { id: 'p38', title: 'Ethik: Wem gehört das Design?', content: '3D-Druck schafft Urheberrechtsprobleme. Kopie von Spielzeug gedruckt = Verletzung? Ersatzteil für Auto gedruckt = legal? Organ-Design = wem gehört es? Patent auf Form = wie schützen? Modellpiraterie: Millionen Downloads ohne Bezahlung. Designer verlieren Geld. Neue Gesetze nötig. 3D-Druck erfordert neue Ethik.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/ethics-copyright.jpg', title: 'Ethik Urheberrecht' }] },
  { id: 'p39', title: 'Sicherheit: Waffen und Drogen', content: '3D-Druck kann Waffen drucken (Pistole aus Kunststoff). In den meisten Ländern verboten, aber schwer zu kontrollieren. Drogen: Drucken von Tabletten mit genauer Dosierung. Kontrolle = schwierig. Andererseits: Prothesen für Kinder in armen Ländern. Medizinische Instrumente in abgelegenen Gebieten. 3D-Druck = Werkzeug, hängt von Nutzung ab.', duration: 3, media: [{ type: 'image', url: '/media/3d-printing-organs/safety-weapons.jpg', title: 'Sicherheit Waffen' }] },
  { id: 'p40', title: 'Zukunft: Alles drucken?', content: 'Jetzt drucken: Kunststoff, Metall, Keramik, lebende Zellen. In Entwicklung: Essen (Fleisch aus Zellen), Häuser (Beton-Druck), Elektronik (Schaltungen). Haus auf 3D-Drucker: 50.000 Euro statt 200.000 Euro. Zeit: 1-2 Wochen statt 3-6 Monate. Essen aus Drucker: noch teuer (100+ Euro pro Portion), aber Zukunft. 3D-Druck verändert alles.', duration: 3, media: [
    { type: 'image', url: '/media/3d-printing-organs/future-everything.jpg', title: 'Zukunft alles' },
    { type: 'video', url: 'https://www.youtube.com/watch?v=5OPWah7ebds', title: 'Zukunft des 3D-Drucks' }
  ] },
  { id: 'q10', title: 'Quiz', content: '', duration: 2, questions: [
    { id: 'q-future-1', text: 'Was kann man in Zukunft drucken?', type: 'multiple-choice', options: ['Nur Kunststoff', 'Kunststoff, Metall, Essen, Häuser', 'Nur Organe', 'Nichts Neues'], correctAnswer: 1, explanation: 'In Zukunft kann man Essen, Häuser, Elektronik drucken — 3D-Druck erweitert Möglichkeiten.' },
    { id: 'q-future-2', text: 'Wie viel kostet Haus auf 3D-Drucker?', type: 'multiple-choice', options: ['20.000 Euro', '50.000 Euro', '100.000 Euro', '200.000+ Euro'], correctAnswer: 1, explanation: 'Haus auf 3D-Drucker kostet 50.000 Euro statt 200.000 Euro traditionell.' },
    { id: 'q-future-3', text: 'Was ist Hauptproblem der Ethik bei 3D-Druck?', type: 'multiple-choice', options: ['Kosten', 'Urheberrecht und Sicherheit', 'Geschwindigkeit', 'Präzision'], correctAnswer: 1, explanation: 'Hauptprobleme: Urheberrecht (Kopieren von Designs) und Sicherheit (Waffen, Drogen).' }
  ]}
]

const threeDPrintingFinalQuizDE: QuizBlock = {
  id: 'quiz-3d-printing',
  title: 'Abschlussquiz: 3D-Druck',
  questions: [
    { id: 'final-q1', text: 'In welchem Jahr wurde das erste Patent für 3D-Druck erteilt?', type: 'multiple-choice', options: ['1976', '1986', '1996', '2006'], correctAnswer: 1, explanation: 'Erstes Patent wurde 1986 erteilt.' },
    { id: 'final-q2', text: 'Wie viel kostet ein Heim-3D-Drucker?', type: 'multiple-choice', options: ['50 Euro', '200 Euro', '1.000 Euro', '5.000 Euro'], correctAnswer: 1, explanation: 'Heim-Drucker kosten ab 200 Euro.' },
    { id: 'final-q3', text: 'Um wie viel Prozent ist 3D-Druck günstiger als traditionelle Produktion?', type: 'multiple-choice', options: ['10-20%', '30-50%', '50-90%', '100%'], correctAnswer: 2, explanation: '3D-Druck ist 50-90% günstiger.' },
    { id: 'final-q4', text: 'Wer erfand Stereolithographie?', type: 'multiple-choice', options: ['Scott Crump', 'Charles Hull', 'Elon Musk', 'Steve Jobs'], correctAnswer: 1, explanation: 'Charles Hull erfand Stereolithographie 1984.' },
    { id: 'final-q5', text: 'Warum wurden Drucker 2009 günstiger?', type: 'multiple-choice', options: ['Neue Technologien', 'FDM-Patente liefen ab', 'Wettbewerb', 'Krise'], correctAnswer: 1, explanation: 'FDM-Patente liefen ab, Preis fiel um das 40-fache.' },
    { id: 'final-q6', text: 'Welche Präzision hat FDM-Druck?', type: 'multiple-choice', options: ['0,01-0,05 mm', '0,1-0,3 mm', '0,5-1 mm', '1-2 mm'], correctAnswer: 1, explanation: 'FDM hat Präzision von 0,1-0,3 mm.' },
    { id: 'final-q7', text: 'Woraus wird PLA hergestellt?', type: 'multiple-choice', options: ['Erdöl', 'Mais oder Zuckerrohr', 'Holz', 'Metall'], correctAnswer: 1, explanation: 'PLA wird aus Mais oder Zuckerrohr hergestellt.' },
    { id: 'final-q8', text: 'Wie viel kostet ein Kilogramm Titanpulver?', type: 'multiple-choice', options: ['50-100 Euro', '200-300 Euro', '500-1.000 Euro', '2.000-5.000 Euro'], correctAnswer: 2, explanation: 'Titanpulver kostet 500-1.000 Euro pro Kilogramm.' },
    { id: 'final-q9', text: 'Wie viel kostet eine gedruckte Figurenfigur?', type: 'multiple-choice', options: ['1-2 Euro', '5-10 Euro', '20-50 Euro', '100+ Euro'], correctAnswer: 1, explanation: 'Gedruckte Figur kostet 5-10 Euro.' },
    { id: 'final-q10', text: 'Wie viel kostet 3D-gedruckte Handprothese?', type: 'multiple-choice', options: ['50-500 Euro', '1.000-2.000 Euro', '5.000-10.000 Euro', '20.000+ Euro'], correctAnswer: 0, explanation: '3D-gedruckte Prothese kostet 50-500 Euro statt 5.000-50.000 Euro.' },
    { id: 'final-q11', text: 'Wie viele Teile druckt BMW pro Jahr?', type: 'multiple-choice', options: ['10.000', '100.000', '1 Million', '10 Millionen'], correctAnswer: 2, explanation: 'BMW druckt 1 Million Teile pro Jahr.' },
    { id: 'final-q12', text: 'Wie viel kostet Lieferung eines Kilogramms zur ISS?', type: 'multiple-choice', options: ['100 Dollar', '1.000 Dollar', '10.000 Dollar', '100.000 Dollar'], correctAnswer: 2, explanation: 'Lieferung zur ISS kostet 10.000 Dollar pro Kilogramm.' },
    { id: 'final-q13', text: 'Um wie viel Prozent leichter ist Flugzeugteil bei 3D-Druck?', type: 'multiple-choice', options: ['10%', '30%', '50%', '70%'], correctAnswer: 2, explanation: '3D-gedrucktes Teil ist 50% leichter.' },
    { id: 'final-q14', text: 'Um wie viel Prozent verkürzt sich Operationszeit mit 3D-Modell?', type: 'multiple-choice', options: ['10-20%', '30-50%', '60-80%', '90-100%'], correctAnswer: 1, explanation: 'Operationszeit verkürzt sich um 30-50%.' },
    { id: 'final-q15', text: 'Was kann man jetzt mit Biodrucker drucken?', type: 'multiple-choice', options: ['Vollständige Organe', 'Knorpel, Haut, Gefäße', 'Nur Prothesen', 'Nichts'], correctAnswer: 1, explanation: 'Biodrucker kann Knorpel, Haut, Gefäße drucken.' },
    { id: 'final-q16', text: 'Wie viel kostet experimenteller Knorpeldruck?', type: 'multiple-choice', options: ['1.000-5.000 Euro', '10.000-30.000 Euro', '50.000-100.000 Euro', '100.000+ Euro'], correctAnswer: 1, explanation: 'Experimenteller Knorpeldruck kostet 10.000-30.000 Euro.' },
    { id: 'final-q17', text: 'Um wie viel Prozent weniger Abfall bei 3D-Druck?', type: 'multiple-choice', options: ['10-20%', '20-40%', '50-70%', '80-90%'], correctAnswer: 1, explanation: 'Materialersparnis 20-40% im Vergleich zu traditioneller Produktion.' },
    { id: 'final-q18', text: 'Wie groß ist der 3D-Modellmarkt?', type: 'multiple-choice', options: ['50 Millionen', '500 Millionen', '5 Milliarden', '50 Milliarden'], correctAnswer: 1, explanation: '3D-Modellmarkt beträgt 500 Millionen Dollar pro Jahr.' },
    { id: 'final-q19', text: 'Wie viel kostet Haus auf 3D-Drucker?', type: 'multiple-choice', options: ['20.000 Euro', '50.000 Euro', '100.000 Euro', '200.000+ Euro'], correctAnswer: 1, explanation: 'Haus auf 3D-Drucker kostet 50.000 Euro statt 200.000 Euro.' },
    { id: 'final-q20', text: 'Was ist Hauptproblem der Ethik bei 3D-Druck?', type: 'multiple-choice', options: ['Kosten', 'Urheberrecht und Sicherheit', 'Geschwindigkeit', 'Präzision'], correctAnswer: 1, explanation: 'Hauptprobleme: Urheberrecht und Sicherheit (Waffen, Drogen).' },
    { id: 'final-q21', text: 'Wie groß war der 3D-Druck-Markt 2023?', type: 'multiple-choice', options: ['5 Milliarden', '18 Milliarden', '30 Milliarden', '50 Milliarden'], correctAnswer: 1, explanation: 'Markt betrug 18 Milliarden Dollar 2023.' },
    { id: 'final-q22', text: 'Wie viel kostet ein Kilogramm Kunststoff für FDM?', type: 'multiple-choice', options: ['5-10 Euro', '20-30 Euro', '50-100 Euro', '200-500 Euro'], correctAnswer: 1, explanation: 'Kunststoff für FDM kostet 20-30 Euro pro Kilogramm.' },
    { id: 'final-q23', text: 'Welche Methode ist am präzisesten?', type: 'multiple-choice', options: ['FDM', 'SLA', 'SLS', 'Alle gleich'], correctAnswer: 1, explanation: 'SLA ist am präzisesten: 0,01-0,05 mm.' },
    { id: 'final-q24', text: 'Für welche Serien ist 3D-Druck vorteilhafter als Gießen?', type: 'multiple-choice', options: ['1-100 Stück', '100-1.000 Stück', '1.000-10.000 Stück', 'Immer'], correctAnswer: 0, explanation: 'Für Serien von 1-100 Stück ist 3D-Druck vorteilhafter.' },
    { id: 'final-q25', text: 'Wie viel kostet 3D-gedruckte Zahnkrone?', type: 'multiple-choice', options: ['50-100 Euro', '200-500 Euro', '1.000-2.000 Euro', '5.000+ Euro'], correctAnswer: 1, explanation: '3D-gedruckte Krone kostet 200-500 Euro.' },
    { id: 'final-q26', text: 'Wann werden erste Versuche mit vollständigen Organen am Menschen erwartet?', type: 'multiple-choice', options: ['1-2 Jahre', '5-10 Jahre', '20-30 Jahre', 'Niemals'], correctAnswer: 1, explanation: 'Erste Versuche werden in 5-10 Jahren erwartet.' },
    { id: 'final-q27', text: 'Wie viel kostet Heim-FDM-Drucker?', type: 'multiple-choice', options: ['50-100 Euro', '200-1.000 Euro', '2.000-5.000 Euro', '10.000+ Euro'], correctAnswer: 1, explanation: 'Heim-FDM-Drucker kostet 200-1.000 Euro.' },
    { id: 'final-q28', text: 'Was kann man in Zukunft drucken?', type: 'multiple-choice', options: ['Nur Kunststoff', 'Kunststoff, Metall, Essen, Häuser', 'Nur Organe', 'Nichts Neues'], correctAnswer: 1, explanation: 'In Zukunft kann man Essen, Häuser, Elektronik drucken.' },
    { id: 'final-q29', text: 'Um wie viel Prozent leichter ist Flugzeugteil?', type: 'multiple-choice', options: ['10%', '30%', '50%', '70%'], correctAnswer: 2, explanation: '3D-gedrucktes Teil ist 50% leichter.' },
    { id: 'final-q30', text: 'Wie viel kostet experimenteller Knorpeldruck?', type: 'multiple-choice', options: ['1.000-5.000 Euro', '10.000-30.000 Euro', '50.000-100.000 Euro', '100.000+ Euro'], correctAnswer: 1, explanation: 'Experimenteller Knorpeldruck kostet 10.000-30.000 Euro.' }
  ]
}

const mongolEmpireFinalQuizDE: QuizBlock = {
  id: 'quiz-mongols',
  title: 'Abschlussquiz: Mongolische Reich',
  questions: [
    { id: 'final-q1', text: 'Wie viele Reiter hatte Dschingis Khans Armee?', type: 'multiple-choice', options: ['100.000', '500.000', '20.000-30.000', '1.000.000'], correctAnswer: 2, explanation: '20.000-30.000 Reiter, nicht Millionen.' },
    { id: 'final-q2', text: 'Wie viele Mongolen fielen in Europa ein?', type: 'multiple-choice', options: ['100.000', '200.000', '50.000', '500.000'], correctAnswer: 2, explanation: '50.000 Mongolen, nicht Hunderttausende.' },
    { id: 'final-q3', text: 'Warum übertrieben sie die Anzahl?', type: 'multiple-choice', options: ['Fehler', 'Um Niederlagen zu rechtfertigen', 'Mongolen täuschten', 'Nicht übertrieben'], correctAnswer: 1, explanation: 'Um europäische Niederlagen zu rechtfertigen.' },
    { id: 'final-q4', text: 'Wie viele Pferde führte Reiter?', type: 'multiple-choice', options: ['1', '2', '3-5', '10'], correctAnswer: 2, explanation: '3-5 Pferde: eines zum Reiten, andere als Nahrung.' },
    { id: 'final-q5', text: 'Wie viele km pro Tag?', type: 'multiple-choice', options: ['20-30', '50-70', '100-150', '200'], correctAnswer: 2, explanation: '100-150 km pro Tag dank Mobilität.' },
    { id: 'final-q6', text: 'Wie wurden Feldzüge finanziert?', type: 'multiple-choice', options: ['Steuern', 'Plünderung', 'Handel', 'Kredite'], correctAnswer: 1, explanation: 'Durch Plünderung eroberter Städte.' },
    { id: 'final-q7', text: 'Was ist profitabler: Steuern oder Plünderung?', type: 'multiple-choice', options: ['Plünderung', 'Steuern jährlich', 'Gleich', 'Hängt ab'], correctAnswer: 1, explanation: 'Steuern profitabler — Geld jedes Jahr.' },
    { id: 'final-q8', text: 'Warum Handwerker erhalten?', type: 'multiple-choice', options: ['Mitleid', 'Produzierten 10 Talente jährlich', 'Für Bau nötig', 'Religion'], correctAnswer: 1, explanation: 'Handwerker produzierte Waren für 10 Talente jährlich.' },
    { id: 'final-q9', text: 'Wie war Armee geteilt?', type: 'multiple-choice', options: ['Nach Stämmen', 'Dezimalsystem', 'Nach Clans', 'Zufällig'], correctAnswer: 1, explanation: 'Dezimalsystem: Zehner, Hunderter, Tausender.' },
    { id: 'final-q10', text: 'Was ist Scheinrückzug?', type: 'multiple-choice', options: ['Flucht', 'Vorgetäuschter Rückzug mit Angriff', 'Belagerung', 'Verhandlungen'], correctAnswer: 1, explanation: 'Vorgetäuschter Rückzug mit nachfolgendem Angriff.' },
    { id: 'final-q11', text: 'Wie erhielten sie Informationen?', type: 'multiple-choice', options: ['Im Kampf', 'Händler-Spione', 'Überläufer', 'Erhielten nicht'], correctAnswer: 1, explanation: 'Händler-Spione sammelten Informationen vorher.' },
    { id: 'final-q12', text: 'Was ist Pax Mongolica?', type: 'multiple-choice', options: ['Krieg', 'Handelssicherheit auf 10.000 km', 'Religion', 'Steuern'], correctAnswer: 1, explanation: 'Sicherheit der Handelswege von China bis Europa.' },
    { id: 'final-q13', text: 'Was kostete Yam-Post?', type: 'multiple-choice', options: ['10.000', '50.000', '100.000', '200.000'], correctAnswer: 1, explanation: '50.000 Talente jährlich, brachte aber 200.000.' },
    { id: 'final-q14', text: 'Zollprozentsatz von Karawanen?', type: 'multiple-choice', options: ['1%', '3-5%', '10%', '20%'], correctAnswer: 1, explanation: '3-5% Zoll — viel weniger als Plünderung.' },
    { id: 'final-q15', text: 'Wer führte Papiergeld ein?', type: 'multiple-choice', options: ['Chinesen', 'Araber', 'Mongolen', 'Europäer'], correctAnswer: 2, explanation: 'Mongolen führten erstmals Papiergeld im Reichsmaßstab ein.' },
    { id: 'final-q16', text: 'Kreditzins?', type: 'multiple-choice', options: ['5%', '10-15%', '20%', '50%'], correctAnswer: 1, explanation: '10-15% jährlich für Kredite.' },
    { id: 'final-q17', text: 'Einheitliche Steuer?', type: 'multiple-choice', options: ['5%', '10%', '20%', '30%'], correctAnswer: 1, explanation: '10% vom Einkommen — feste Steuer.' },
    { id: 'final-q18', text: 'Wie viele Jahre Eroberung Chinas?', type: 'multiple-choice', options: ['5', '10', '20', '50'], correctAnswer: 2, explanation: '20 Jahre und 200.000 Leben.' },
    { id: 'final-q19', text: 'Wie viele Jahre Eroberung Russlands?', type: 'multiple-choice', options: ['1', '3', '10', '20'], correctAnswer: 1, explanation: '3 Jahre (1237-1240).' },
    { id: 'final-q20', text: 'Warum stoppten in Europa?', type: 'multiple-choice', options: ['Besiegt', 'Tod Ögedeis', 'Keine Kräfte', 'Vorräte'], correctAnswer: 1, explanation: 'Tod Khans Ögedei — zurück zur Khanwahl.' },
    { id: 'final-q21', text: 'Warum zerfiel Imperium?', type: 'multiple-choice', options: ['Niederlagen', 'Ökonomie: Ausgaben 500.000, Einnahmen 400.000', 'Aufstände', 'Pest'], correctAnswer: 1, explanation: 'Ökonomie: Budgetdefizit.' },
    { id: 'final-q22', text: 'In wie viele Ulus geteilt?', type: 'multiple-choice', options: ['2', '3', '4', '5'], correctAnswer: 2, explanation: '4 Ulus: Goldene Horde, Ilkhanat, Tschagatai, Yuan.' },
    { id: 'final-q23', text: 'Wie viel Prozent tötete Pest?', type: 'multiple-choice', options: ['10-20%', '30-50%', '60-70%', '80-90%'], correctAnswer: 1, explanation: '30-50% der Bevölkerung.' },
    { id: 'final-q24', text: 'Was gaben sie Europa?', type: 'multiple-choice', options: ['Gold', 'Schießpulver, Kompass, Papier', 'Seide', 'Nichts'], correctAnswer: 1, explanation: 'Schießpulver, Kompass, Papier aus China.' },
    { id: 'final-q25', text: 'Nachkommen Dschingis Khans?', type: 'multiple-choice', options: ['1 Mio', '5 Mio', '16 Mio', '100 Mio'], correctAnswer: 2, explanation: '16 Millionen Menschen.' },
    { id: 'final-q26', text: 'Wie änderten sie Russland?', type: 'multiple-choice', options: ['Gar nicht', 'Moskau wurde Zentrum', 'Nur zerstört', 'Kultur'], correctAnswer: 1, explanation: 'Moskau wurde Zentrum durch Tributsammlung.' },
    { id: 'final-q27', text: 'Was wichtiger: Anzahl oder Organisation?', type: 'multiple-choice', options: ['Anzahl', 'Organisation', 'Gleich', 'Hängt ab'], correctAnswer: 1, explanation: 'Organisation wichtiger als Anzahl.' },
    { id: 'final-q28', text: 'Worauf basierte Imperium?', type: 'multiple-choice', options: ['Kraft', 'Ökonomie', 'Religion', 'Ideologie'], correctAnswer: 1, explanation: 'Auf Ökonomie — als sie zusammenbrach, zerfiel Imperium.' },
    { id: 'final-q29', text: 'Größe des Imperiums?', type: 'multiple-choice', options: ['10 Mio', '24 Mio', '50 Mio', '100 Mio'], correctAnswer: 1, explanation: '24 Millionen qkm — größtes kontinentales Imperium.' },
    { id: 'final-q30', text: 'Wie viele Jahre wurde Imperium geschaffen?', type: 'multiple-choice', options: ['10', '25', '50', '100'], correctAnswer: 2, explanation: 'In 50 Jahren geschaffen, in 100 zerfallen.' }
  ]
}

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
  
  if (sessionId === 'mongol-empire' && language === 'de') {
    return {
      slides: mongolEmpireSlidesDE,
      quiz: mongolEmpireFinalQuizDE
    }
  }
  
  if (sessionId === 'spartan-terror' && language === 'de') {
    return {
      slides: spartanTerrorSlidesDE,
      quiz: spartanTerrorFinalQuizDE
    }
  }
  
  if (sessionId === '3d-printing-organs' && language === 'de') {
    return {
      slides: threeDPrintingSlidesDE,
      quiz: threeDPrintingFinalQuizDE
    }
  }
  
  if (sessionId === 'rome-insulae' && language === 'de') {
    return {
      slides: romeInsulaeSlidesDE,
      quiz: romeInsulaeFinalQuizDE
    }
  }
  
  if (sessionId === 'philosophy-athens' && language === 'de') {
    return {
      slides: philosophyAthensSlidesDE,
      quiz: philosophyAthensFinalQuizDE
    }
  }
  
  return null
}
