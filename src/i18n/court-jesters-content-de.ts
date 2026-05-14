import { Slide, QuizBlock } from '../types/session'

export const courtJestersSlidesDE: Slide[] = [
  { id: 'jst1', title: 'Minister schweigt - Narr spricht', content: 'Im Rat herrscht Stille: direkt reden ist riskant, schweigen auch. Der Narr setzt einen Kalauer hinein - und der Saal lacht, als hätten alle gleichzeitig ausgeatmet. Lachen ist hier kein Beiwerk der Audienz, sondern ein Registerwechsel weg von der Zwangspause.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/01-jester-and-power.jpg', title: 'Narr und Macht' }] },
  { id: 'jst2', title: 'Kappe und Marotte - Uniform des Spiels', content: 'Schellen und Stab mit Puppe sind keine reine Farbenpracht. Es signalisiert «jetzt spricht die Maske» - wie beim Schauspieler, nur dass Publikum Krone und Gäste sind, die die Spielregeln kapieren sollen.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/03-cap-bells-marotte.jpg', title: 'Narrenkostüm' }] },
  { id: 'jst3', title: 'Lizenz ohne Unterschrift', content: 'Die «Narrenlizenz» ist notariell nicht fixiert: sie entsteht durch Lachen. Wer lacht, erlaubt zugleich Schärfe. Hört das Lachen auf, liest dieselbe Zeile plötzlich als Beleidigung - und die Kappe rettet nicht mehr.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/02-license-to-speak.jpg', title: 'Lizenz zum Wort' }] },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-1-1-de', text: 'Welche «technische» Hauptfunktion erfüllte der Hofnarr?', type: 'multiple-choice', options: ['Er führte Militärkarten', 'Er löste Spannung und gab ironisches Feedback', 'Er schrieb Gesetze', 'Er kommandierte die Garde'], correctAnswer: 1, explanation: 'Lachen wandelt Peinlichkeit in Spiel.' },
      { id: 'q-jst-1-2-de', text: 'Was meint «Narrenlizenz» im Sinne des Brauchtums?', type: 'multiple-choice', options: ['Königliche Urkunde über Land', 'Das Recht, in Narrengestalt scharf zu sprechen ohne Ministerpflicht', 'Düllgenehmigung', 'Steuerbefreiung'], correctAnswer: 1, explanation: 'Soziale Vereinbarung, kein Paragraf.' },
      { id: 'q-jst-1-3-de', text: 'Was ist eine Marotte?', type: 'multiple-choice', options: ['Lautentyp', 'Stab mit Puppenkopf, Narrenattribut', 'Narrenkrone', 'Weinsorte'], correctAnswer: 1, explanation: 'Requisit des Hofnarren.' }
    ]
  },

  { id: 'jst4', title: 'Zwei Sorten «Toren»', content: 'Den natürlichen Narr hielt man wie eine lebende Metapher des Schicksals; den ernannten Narren ließ man Jahre Witze abliefern und schlug ihn gelegentlich mit einer Pamphletstrafe wie einen Politiker. Eine Hofszene - zwei Welten an Verletzlichkeit.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/04-natural-versus-appointed.jpg', title: 'Narrentypen' }] },
  { id: 'jst5', title: 'Jane Foole in den Büchern', content: 'Bei Heinrich VIII. stehen in den Garderobenbüchern keine Anekdoten, sondern Posten: Stoff, Kleid, Geschenke für eine Hofnarrin. Das ist kein Kuriosum, sondern Stelle: auch der Witz braucht Gesichter, die laut witzeln dürfen.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/05-jane-fool.jpg', title: 'Jane Foole' }] },
  { id: 'jst6', title: 'Will Sommers und die Kasse', content: 'Kassendokumente zeigen Sommers’ Aufzüge mitunter teurer als die vieler kleiner Adeliger - der König zahlte für Lachen bar. Die Legende vom Unterschlupf unter dem Bett vor dem wütenden Heinrich ist Genreklassiker: «schneller verbeugt als der Witz den Kopf kostet».', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/06-will-sommers.jpg', title: 'Will Sommers' }] },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-2-1-de', text: 'Wen stellt die Typologie der Narren oft einander gegenüber?', type: 'multiple-choice', options: ['Nur Kinder', '«Natur-Narr» und ernannten Hofnarren', 'Nur Mönche', 'Nur Bauern'], correctAnswer: 1, explanation: 'Unterschiedlicher Status, unterschiedliches Risiko.' },
      { id: 'q-jst-2-2-de', text: 'Wie hieß die bekannte Hofnarrin bei Heinrich VIII.?', type: 'multiple-choice', options: ['Maria Stuart', 'Jane Foole', 'Elisabeth Tudor', 'Anne Boleyn'], correctAnswer: 1, explanation: 'Zeilen in Garderobenbüchern.' },
      { id: 'q-jst-2-3-de', text: 'Welchen englischen Narren verbinden Lehrbücher am häufigsten mit Heinrich VIII.?', type: 'multiple-choice', options: ['Archibald Armstrong', 'Richard Tarlton', 'Will Sommers', 'Ben Jonson'], correctAnswer: 2, explanation: 'Belegte Hofausgaben.' }
    ]
  },

  { id: 'jst7', title: 'Tarlton und Lärm nach dem Tod', content: 'Richard Tarlton starb 1588, doch Witze zirkulierten noch Jahrzehnte: das Publikum liebte den toten Witzbold mehr als den lebenden Prälaten. Aus diesem Rauschen wird Mythos - und der Name wird zum Synonym elisabethanischen Londoner Witzes.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/07-richard-tarlton.jpg', title: 'Tarlton' }] },
  { id: 'jst8', title: 'Triboulet: «Hinrichtung durch Alter»', content: 'Mündliche Überlieferung: Franz I. soll dem verurteilten Triboulet die Wahl der Hinrichtungsart gelassen haben. Antwort in der Art «ich erbittete, an Altersschwäche zu sterben» sprengt den Saal: statt Galgen Applaus für den Einfall; je nach Version folgt Begnadigung oder Verbannung. Historiker sind vorsichtig - doch die Pointe zeigt die Nahtstelle zwischen Witz und Urteil.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/08-triboulet-francis-i.jpg', title: 'Triboulet' }] },
  { id: 'jst9', title: 'Triboulet und die Königin: Frechheit im Erzählkreis', content: 'In einer anderen Fassung greift der Narr der Königin «zu tief» - von der Wange bis zur populären Version mit Klaps; immer geht es darum, wo Hoflachen endet und Wut beginnt. Kein Protokoll, sondern Volksgedächtnis - doch es zeigt, wozu ein Thron manchmal einen brauchte, der stechen darf.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/08-triboulet-francis-i.jpg', title: 'Grenze des Erlaubten' }] },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-3-1-de', text: 'Mit welcher Epoche verbindet man Richard Tarlton am häufigsten?', type: 'multiple-choice', options: ['Viktorianisches England', 'Elisabethanisches England', 'Stuart-Restauration', 'Normannisches England'], correctAnswer: 1, explanation: 'Theater und Markt im späten 16. Jahrhundert.' },
      { id: 'q-jst-3-2-de', text: 'Bei welchem französischen König ist der Narr Triboulet bekannt?', type: 'multiple-choice', options: ['Ludwig XIV.', 'Franz I.', 'Heinrich IV.', 'Karl VIII.'], correctAnswer: 1, explanation: 'Renaissancehof der ersten Hälfte des 16. Jahrhunderts.' },
      { id: 'q-jst-3-3-de', text: 'Was wählte Triboulet laut Erzähltradition, als man ihn die Hinrichtungsart wählen ließ?', type: 'multiple-choice', options: ['Öffentliche Reue im Nachbarherzogtum', 'Tod durch Altersschwäche', 'Hungertod an einem Tag', 'Verbannung nach Schottland ohne Witze'], correctAnswer: 1, explanation: 'Klassische Anekdote vom schlagfertigen Gegenangebot.' }
    ]
  },

  { id: 'jst10', title: 'Ring und Zölibat', content: 'In der Legende bekommt Triboulet einen Ring und wirft ein: «Dann darf ich meine Schwester heiraten» - Kalauer auf das Klerikerzölibat. Ob wahr, ist nebensächlich; entscheidend ist, dass Tabus der Kirche mit der Narrenhand berührt werden, nicht mit der des Kanzlers.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/09-triboulet-ring-joke.jpg', title: 'Ringlegende' }] },
  { id: 'jst11', title: 'Armstrong gegen Laud', content: 'Der Schotte Archibald Armstrong diente Jakob I. und Karl I., bis ein Pamphlet gegen Erzbischof Laud die Pointe in einen Politikskandal verwandelte: Geldstrafe, Schande, Gunstverlust. Die Zunge war schärfer als die Geduld des Königs gegen Spott über «seinen» Bischof.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/10-archibald-armstrong.jpg', title: 'Armstrong' }] },
  { id: 'jst12', title: 'Bischof und Himmelspforte', content: 'Ein Standardwitz der Hofnarrensatire: «Warum passiert der Prälat den Himmel nicht? Weil die Mitra schneller wuchs als die Seele». Niedriger Hofrang erlaubt Spott über hohen Stand - und das Lachen knallt lauter als fromme Formel.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/11-jester-church-satire.jpg', title: 'Narr und Kirche' }] },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-4-1-de', text: 'Wofür wurde Archibald Armstrong im bekannten politischen Skandal bestraft?', type: 'multiple-choice', options: ['Becherdiebstahl', 'Pamphlet gegen Erzbischof Laud', 'Desertion', 'Weigerung, die Kappe zu tragen'], correctAnswer: 1, explanation: 'Geldstrafe und Verlust der Gunst.' },
      { id: 'q-jst-4-2-de', text: 'Wer wurde in christlichem Europa oft Ziel narrenhafter Satire?', type: 'multiple-choice', options: ['Nur Bauern', 'Häufig hohes Klerusamt und kirchlicher Stand', 'Nur Hofdamen', 'Nur Kinder'], correctAnswer: 1, explanation: 'Die Kirche als Lieblingszielscheibe.' },
      { id: 'q-jst-4-3-de', text: 'Wo «arbeitete» der Hofnarr im Alltag am häufigsten?', type: 'multiple-choice', options: ['Auf dem Schlachtfeld', 'Bei Banketten und Schaustellungen', 'In der Klosterzelle', 'Im Hafen'], correctAnswer: 1, explanation: 'Fest als Bühne für Improvisation.' }
    ]
  },

  { id: 'jst13', title: 'Bankett: Besteck und Zunge', content: 'Das Geschirr klappert - klappert auch der Narr: zwischen zwei Gängen kann er dem Gast dessen Eitelkeit «verkaufen» und dem Gastgeber die Rolle des Mittelpunkts zurückgeben. Lachen ist hier keine Nachspeise, sondern Würze für das, was leise entschieden wird.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/12-banquet-jester.jpg', title: 'Fest und Narr' }] },
  { id: 'jst14', title: 'Skomorochi und Verfolgung', content: 'In Russland jagte die Kirche Skomorochi härter als manche Räuber: Musik, Tanz und Spott in einem Paket erschreckten die Hierarchie mehr als einzelner Fluch an der Schenke - Straßenlachen fragte die Synode nicht.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/13-skomorokh-rus.jpg', title: 'Skomorochi' }] },
  { id: 'jst15', title: '«Domashnie» - nicht mit dem Narren verwechseln', content: '«Domashnie» bei Iwan IV. ist ein Begriff für enge Dienstleute aus Quellen; das ist kein komischer Hofnarr aus dem Theater. Verwechslung macht aus Hofpolitik einen Witz über «Narren am Thron».', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/14-ivan-grozny-fools.jpg', title: 'Hof Iwans IV.' }] },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-5-1-de', text: 'Wie hießen in Russland wandernde Musiker-Satiriker, die die Kirche verurteilte?', type: 'multiple-choice', options: ['Bojaren', 'Skomorochi', 'Strelizen', 'Djaki'], correctAnswer: 1, explanation: 'Eigene kulturelle Schicht.' },
      { id: 'q-jst-5-2-de', text: 'Wie heißt die Gruppe von Vertrauten bei Iwan IV., die man im Alltag oft mit «Narren» verwechselt?', type: 'multiple-choice', options: ['Opritchniki', 'Domashnie', 'Posadniki', 'Strelizen-Häupter'], correctAnswer: 1, explanation: 'Begriff aus Quellen.' },
      { id: 'q-jst-5-3-de', text: 'Wer malte den berühmten nachdenklichen Stanczyk mit Ball?', type: 'multiple-choice', options: ['Repin', 'Jan Matejko', 'Brjullov', 'Raffäl'], correctAnswer: 1, explanation: 'Polnische Historienmalerei des 19. Jahrhunderts.' }
    ]
  },

  { id: 'jst16', title: 'Stanczyk und der Ball Matejkos', content: 'Jan Matejko malte den legendären polnischen Narren mit Ball in der Hand so, als läge eine ganze Provinz in einer Geste des Schweigens. Das Bild des 19. Jahrhunderts machte aus der Figur ein Trauersymbol stärker als trockene Chronik.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/15-stanczyk-matejko.jpg', title: 'Stanczyk' }] },
  { id: 'jst17', title: 'Lears Narr verschwindet', content: 'Bei Shakespeare spricht Lears Narr Wahrheit im Rhythmus des Unsinns und verschwindet dann spurlos von der Bühne - als hätte die Tragödie die Sicherung verloren. Dem Publikum bleibt kein komisches Happy End als Luftloch.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/16-king-lear-fool.jpg', title: 'Lears Narr' }] },
  { id: 'jst18', title: 'Yoricks Schädel', content: '«Wo sind eure Witze?» - Hamlets Frage an den Schädel trifft nicht den Toten, sondern die Lebenden: heutiges Lachen wird morgen ebenfalls Knochen. Literatur tat mehr für das Narrenbild als dutzend vergessener Hofnamen.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/17-yorick-hamlet.jpg', title: 'Yorick' }] },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-6-1-de', text: 'In welchem Shakespeare-Stück begleitet der Narr einen wahnsinnig werdenden König?', type: 'multiple-choice', options: ['«Othello»', '«König Lear»', '«Romeo und Julia»', '«Macbeth»'], correctAnswer: 1, explanation: 'Die Narrrolle ist strukturell tragisch.' },
      { id: 'q-jst-6-2-de', text: 'Wessen Schädel hält Hamlet in der berühmten Szene?', type: 'multiple-choice', options: ['Polonius', 'Den König', 'Den Narren Yorick', 'Rosenkranz'], correctAnswer: 2, explanation: 'Meditation über Tod und Lachen.' },
      { id: 'q-jst-6-3-de', text: 'Wie heißt der Narr in «Wie es euch gefällt»?', type: 'multiple-choice', options: ['Fest', 'Touchstone', 'Lavatch', 'Pistol'], correctAnswer: 1, explanation: 'Komische Ideenführung.' }
    ]
  },

  { id: 'jst19', title: 'Touchstone im Wald', content: 'In «Wie es euch gefällt» stichelt Touchstone in Arden Ehre, Liebe und Rang - unter Schäfchenmaske klingt alles leichter, und die Pointe ist, dass das Publikum sich in der fremden Perücke erkennt.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/18-touchstone-as-you-like-it.jpg', title: 'Touchstone' }] },
  { id: 'jst20', title: 'Dongfang Shuo: Hof-Troll der Han', content: 'Dongfang Shuo am Hof der Han unter Wudi wird in späterer Tradition zum «staatlich geduldeten Troll mit Hirn»: Anekdoten geben ihm Antworten, in denen hinter dem Witz Rat oder ein Ausweg vom Befehl steckt - wörtlich und im Übertragenen.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/19-dongfang-shuo.jpg', title: 'Dongfang Shuo' }] },
  { id: 'jst21', title: 'Nasreddin: ein Satz genügt', content: 'In vielen Fassungen dreht Nasreddin mit einer Antwort die Rangordnung um, ohne Manifest. So ist Lachen kein europäischer Hof - aber derselbe Mechanismus: das Unerlaubte in Fabelgestalt.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/20-nasreddin-hodja.jpg', title: 'Nasreddin' }] },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-7-1-de', text: 'Mit welchem chinesischen Hof verbindet man Dongfang Shuo?', type: 'multiple-choice', options: ['Ming', 'Han unter Wudi', 'Qin Shihuangdi', 'Tang Taizong'], correctAnswer: 1, explanation: 'Frühe Kaiserzeit der Han.' },
      { id: 'q-jst-7-2-de', text: 'Wer ist der Held orientalischer Anekdoten, funktional nah am Volksweisen-Narren?', type: 'multiple-choice', options: ['Zarathustra', 'Nasreddin Hodscha', 'Konfuzius', 'Solon'], correctAnswer: 1, explanation: 'Handlung mit Umkehr des Sinns.' },
      { id: 'q-jst-7-3-de', text: 'Wie heißt Erasmus’ Satire, in der die allegorische Torheit spricht?', type: 'multiple-choice', options: ['«Utopia»', '«Lob der Torheit»', '«Sonnenstadt»', '«Candide»'], correctAnswer: 1, explanation: 'Moriä encomium.' }
    ]
  },

  { id: 'jst22', title: 'Erasmus: Torheit redet selbst', content: 'In «Lob der Torheit» hält die Allegorie Krieg, Ehrgeiz und akademische Wichtigtürei hin - kein Hofalltag, aber derselbe Trick: lachen und gleichzeitig rot werden.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/21-erasmus-praise-of-folly.jpg', title: 'Lob der Torheit' }] },
  { id: 'jst23', title: 'Commedia dell’arte: Masken ohne Krone', content: 'Harlekin springt über Pantalone - der Hofgeist der Stichelei wandert auf den Jahrmarkt: das Publikum zahlt Eintritt statt monarchischer Gnade, die Pointe bleibt.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/22-commedia-dell-arte.jpg', title: 'Commedia dell’arte' }] },
  { id: 'jst24', title: 'Rigoletto: Narr ohne Schild', content: 'Bei Verdi dient Rigoletto dem Herzog und heizt die Menge mit Witzen an, bis der Preis fällt - die Tochter. Hier ist die Kappe kein Schutz, sondern Beruf des Volksverführers: Worte verkauft man für Applaus an Leute, denen man nicht klatschen sollte.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/23-rigoletto-verdi.jpg', title: 'Rigoletto' }] },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-8-1-de', text: 'Mit welcher italienischen Theatertradition verbindet man Masken und Improvisation?', type: 'multiple-choice', options: ['Oper seria', 'Commedia dell’arte', 'No', 'Kabuki'], correctAnswer: 1, explanation: 'Harlekin, Pantalone u. a.' },
      { id: 'q-jst-8-2-de', text: 'Wie heißt der Narr in Verdis Oper über den Herzog von Mantua?', type: 'multiple-choice', options: ['Falstaff', 'Rigoletto', 'Nabucco', 'Otello'], correctAnswer: 1, explanation: 'Tragische Oper von 1851.' },
      { id: 'q-jst-8-3-de', text: 'Welcher spanische Maler ist für Portraits von Hofzwergen bekannt?', type: 'multiple-choice', options: ['Goya', 'Velázquez', 'El Greco', 'Murillo'], correctAnswer: 1, explanation: 'Diptychen und Einzelportraits.' }
    ]
  },

  { id: 'jst25', title: 'Velázquez: Porträt statt Menagerie', content: 'Der Spanier malt Hofmenschen untypischer Größe mit Namen und Haltung - und bricht die Gewohnheit, sie nur als «Thronspektakel» zu sehen.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/24-velazquez-court-dwarf.jpg', title: 'Velázquez' }] },
  { id: 'jst26', title: 'Vom Fest zur Zeitungsbude', content: 'Politische Radierung des 18. Jahrhunderts trägt Schärfe aus dem Saal auf die Straße: der «Narr» trägt jetzt den Namen des Zeichners, und Lachen trifft den Minister vor dem ganzen Quartier.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/25-political-cartoon-jester.jpg', title: 'Politische Karikatur' }] },
  { id: 'jst27', title: 'Clown ohne Thron', content: 'Der Zirkusclown erbte Stürze und Schellen, nicht aber den Thron: das Publikum zahlt Ticket statt «Gnadenerlass», und für den Witz haftet der Künstler, nicht die institutionelle Lizenz des Monarchen.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/26-clown-versus-jester.jpg', title: 'Clown und Narr' }] },
  {
    id: 'q9',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-9-1-de', text: 'Wohin verlagerte sich das Bild des Hofnarren seit dem 18. Jahrhundert oft in der politischen Kultur?', type: 'multiple-choice', options: ['Ins Kloster', 'In Karikatur und öffentliche Satire', 'In Militärreglemente', 'In die Astronomie'], correctAnswer: 1, explanation: 'Zeitung und Stich.' },
      { id: 'q-jst-9-2-de', text: 'Wodurch unterscheidet sich der moderne Zirkusclown prinzipiell vom Hofnarren?', type: 'multiple-choice', options: ['Nur am Kostüm', 'Massenarena ohne Thronkontext und ohne «Lizenz» des Monarchen', 'Clowns sind immer stumm', 'Clowns nutzen nie Musik'], correctAnswer: 1, explanation: 'Wechsel der Institution.' },
      { id: 'q-jst-9-3-de', text: 'Was zeigt die Geschichte über die Grenzen narrenhafter Freiheit?', type: 'multiple-choice', options: ['Narren wurden nie bestraft', 'Bei Tonbruch konnte der Narr bestraft oder verbannt werden', 'Narren waren nur Frauen', 'In Asien gab es keine Narren'], correctAnswer: 1, explanation: 'Risiko, den Mächtigen zu kränken.' }
    ]
  },

  { id: 'jst28', title: 'Wenn der Witz nicht verziehen wird', content: 'Wer zu weit ging, bekam keine Kappe mehr geschenkt, sondern Strafe, Geld oder Verbannung - Erinnerung daran, den Hof nicht als Märchen vom ewig verziehenen Witzbold zu lesen.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/27-jester-punishment.jpg', title: 'Preis der Schärfe' }] },
  { id: 'jst29', title: 'Kappe in der Vitrine', content: 'Heute liegt Narrengewand eher im Museum als am Hals eines Günstlings: wir betrachten es als ehemaliges Machtinstrument und lächeln aus sicherer Distanz.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/28-museum-jester-exhibit.jpg', title: 'Museum' }] },
  { id: 'jst30', title: 'Wer lacht zuletzt', content: 'Der Kurs liefert kein «Spiegel der Macht», sondern eine Praxisfrage: wer setzt den Ton des Lachens, wessen Satz wird morgen «zu viel», und wie trennt man Urkunde von glücklicher Überlieferung? Der Narr verlässt den Hof - die Fragen bleiben im Saal.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/30-jester-legacy.jpg', title: 'Erbe' }] },
  {
    id: 'q10',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-10-1-de', text: 'Wo begegnet man dem Hofnarrenbild heute am häufigsten?', type: 'multiple-choice', options: ['Nur in der Armee', 'In Museen, Theater, Popkultur', 'Nur in der Kirche', 'Nur in Banken'], correctAnswer: 1, explanation: 'Erbe als kulturelles Archiv.' },
      { id: 'q-jst-10-2-de', text: 'Welche Fertigkeit vermittelt das Studium der Narrengeschichte?', type: 'multiple-choice', options: ['Nur Kalligraphie', 'Quelle, Legende und Funktion des Lachens bei der Macht unterscheiden', 'Nur Militärtaktik', 'Nur Buchhaltung'], correctAnswer: 1, explanation: 'Kritisches Lesen der Anekdote.' },
      { id: 'q-jst-10-3-de', text: 'Welche Frage passt als Abschluss einer Narren-Thematik?', type: 'multiple-choice', options: ['Wer erfand das Schießpulver', 'Wer darf heute zuletzt lachen und wo endet Schärfe', 'Wie knüpft man einen Palstek', 'Wie schwer ist die Krone'], correctAnswer: 1, explanation: 'Verbindung von Macht, Lachen und Risiko.' }
    ]
  }
]

export const courtJestersFinalQuizDE: QuizBlock = {
  id: 'quiz-court-jesters-de',
  title: 'Abschlussquiz: Hofnarren (Niveau B2)',
  questions: [
    { id: 'q-jst-f-1-de', text: 'Welche «technische» Hauptfunktion erfüllte der Hofnarr?', type: 'multiple-choice', options: ['Er führte Militärkarten', 'Er löste Spannung und gab ironisches Feedback', 'Er schrieb Gesetze', 'Er kommandierte die Garde'], correctAnswer: 1, explanation: 'Lachen wandelt Peinlichkeit in Spiel.' },
    { id: 'q-jst-f-2-de', text: 'Was meint «Narrenlizenz» im Sinne des Brauchtums?', type: 'multiple-choice', options: ['Königliche Urkunde über Land', 'Das Recht, in Narrengestalt scharf zu sprechen ohne Ministerpflicht', 'Düllgenehmigung', 'Steuerbefreiung'], correctAnswer: 1, explanation: 'Soziale Vereinbarung, kein Paragraf.' },
    { id: 'q-jst-f-3-de', text: 'Was ist eine Marotte?', type: 'multiple-choice', options: ['Lautentyp', 'Stab mit Puppenkopf, Narrenattribut', 'Narrenkrone', 'Weinsorte'], correctAnswer: 1, explanation: 'Requisit des Hofnarren.' },
    { id: 'q-jst-f-4-de', text: 'Wen stellt die Typologie der Narren oft einander gegenüber?', type: 'multiple-choice', options: ['Nur Kinder', '«Natur-Narr» und ernannten Hofnarren', 'Nur Mönche', 'Nur Bauern'], correctAnswer: 1, explanation: 'Unterschiedlicher Status, unterschiedliches Risiko.' },
    { id: 'q-jst-f-5-de', text: 'Wie hieß die bekannte Hofnarrin bei Heinrich VIII.?', type: 'multiple-choice', options: ['Maria Stuart', 'Jane Foole', 'Elisabeth Tudor', 'Anne Boleyn'], correctAnswer: 1, explanation: 'Zeilen in Garderobenbüchern.' },
    { id: 'q-jst-f-6-de', text: 'Welchen englischen Narren verbinden Lehrbücher am häufigsten mit Heinrich VIII.?', type: 'multiple-choice', options: ['Archibald Armstrong', 'Richard Tarlton', 'Will Sommers', 'Ben Jonson'], correctAnswer: 2, explanation: 'Belegte Hofausgaben.' },
    { id: 'q-jst-f-7-de', text: 'Mit welcher Epoche verbindet man Richard Tarlton am häufigsten?', type: 'multiple-choice', options: ['Viktorianisches England', 'Elisabethanisches England', 'Stuart-Restauration', 'Normannisches England'], correctAnswer: 1, explanation: 'Theater und Markt im späten 16. Jahrhundert.' },
    { id: 'q-jst-f-8-de', text: 'Bei welchem französischen König ist der Narr Triboulet bekannt?', type: 'multiple-choice', options: ['Ludwig XIV.', 'Franz I.', 'Heinrich IV.', 'Karl VIII.'], correctAnswer: 1, explanation: 'Renaissancehof der ersten Hälfte des 16. Jahrhunderts.' },
    { id: 'q-jst-f-9-de', text: 'Was wählte Triboulet laut Erzähltradition, als man ihn die Hinrichtungsart wählen ließ?', type: 'multiple-choice', options: ['Öffentliche Reue im Nachbarherzogtum', 'Tod durch Altersschwäche', 'Hungertod an einem Tag', 'Verbannung nach Schottland ohne Witze'], correctAnswer: 1, explanation: 'Klassische Anekdote vom schlagfertigen Gegenangebot.' },
    { id: 'q-jst-f-10-de', text: 'Wofür wurde Archibald Armstrong im bekannten politischen Skandal bestraft?', type: 'multiple-choice', options: ['Becherdiebstahl', 'Pamphlet gegen Erzbischof Laud', 'Desertion', 'Weigerung, die Kappe zu tragen'], correctAnswer: 1, explanation: 'Geldstrafe und Verlust der Gunst.' },
    { id: 'q-jst-f-11-de', text: 'Wer wurde in christlichem Europa oft Ziel narrenhafter Satire?', type: 'multiple-choice', options: ['Nur Bauern', 'Häufig hohes Klerusamt und kirchlicher Stand', 'Nur Hofdamen', 'Nur Kinder'], correctAnswer: 1, explanation: 'Die Kirche als Lieblingszielscheibe.' },
    { id: 'q-jst-f-12-de', text: 'Wo «arbeitete» der Hofnarr im Alltag am häufigsten?', type: 'multiple-choice', options: ['Auf dem Schlachtfeld', 'Bei Banketten und Schaustellungen', 'In der Klosterzelle', 'Im Hafen'], correctAnswer: 1, explanation: 'Fest als Bühne für Improvisation.' },
    { id: 'q-jst-f-13-de', text: 'Wie hießen in Russland wandernde Musiker-Satiriker, die die Kirche verurteilte?', type: 'multiple-choice', options: ['Bojaren', 'Skomorochi', 'Strelizen', 'Djaki'], correctAnswer: 1, explanation: 'Eigene kulturelle Schicht.' },
    { id: 'q-jst-f-14-de', text: 'Wie heißt die Gruppe von Vertrauten bei Iwan IV., die man im Alltag oft mit «Narren» verwechselt?', type: 'multiple-choice', options: ['Opritchniki', 'Domashnie', 'Posadniki', 'Strelizen-Häupter'], correctAnswer: 1, explanation: 'Begriff aus Quellen.' },
    { id: 'q-jst-f-15-de', text: 'Wer malte den berühmten nachdenklichen Stanczyk mit Ball?', type: 'multiple-choice', options: ['Repin', 'Jan Matejko', 'Brjullov', 'Raffäl'], correctAnswer: 1, explanation: 'Polnische Historienmalerei des 19. Jahrhunderts.' },
    { id: 'q-jst-f-16-de', text: 'In welchem Shakespeare-Stück begleitet der Narr einen wahnsinnig werdenden König?', type: 'multiple-choice', options: ['«Othello»', '«König Lear»', '«Romeo und Julia»', '«Macbeth»'], correctAnswer: 1, explanation: 'Die Narrrolle ist strukturell tragisch.' },
    { id: 'q-jst-f-17-de', text: 'Wessen Schädel hält Hamlet in der berühmten Szene?', type: 'multiple-choice', options: ['Polonius', 'Den König', 'Den Narren Yorick', 'Rosenkranz'], correctAnswer: 2, explanation: 'Meditation über Tod und Lachen.' },
    { id: 'q-jst-f-18-de', text: 'Wie heißt der Narr in «Wie es euch gefällt»?', type: 'multiple-choice', options: ['Fest', 'Touchstone', 'Lavatch', 'Pistol'], correctAnswer: 1, explanation: 'Komische Ideenführung.' },
    { id: 'q-jst-f-19-de', text: 'Mit welchem chinesischen Hof verbindet man Dongfang Shuo?', type: 'multiple-choice', options: ['Ming', 'Han unter Wudi', 'Qin Shihuangdi', 'Tang Taizong'], correctAnswer: 1, explanation: 'Frühe Kaiserzeit der Han.' },
    { id: 'q-jst-f-20-de', text: 'Wer ist der Held orientalischer Anekdoten, funktional nah am Volksweisen-Narren?', type: 'multiple-choice', options: ['Zarathustra', 'Nasreddin Hodscha', 'Konfuzius', 'Solon'], correctAnswer: 1, explanation: 'Handlung mit Umkehr des Sinns.' },
    { id: 'q-jst-f-21-de', text: 'Wie heißt Erasmus’ Satire, in der die allegorische Torheit spricht?', type: 'multiple-choice', options: ['«Utopia»', '«Lob der Torheit»', '«Sonnenstadt»', '«Candide»'], correctAnswer: 1, explanation: 'Moriä encomium.' },
    { id: 'q-jst-f-22-de', text: 'Mit welcher italienischen Theatertradition verbindet man Masken und Improvisation?', type: 'multiple-choice', options: ['Oper seria', 'Commedia dell’arte', 'No', 'Kabuki'], correctAnswer: 1, explanation: 'Harlekin, Pantalone u. a.' },
    { id: 'q-jst-f-23-de', text: 'Wie heißt der Narr in Verdis Oper über den Herzog von Mantua?', type: 'multiple-choice', options: ['Falstaff', 'Rigoletto', 'Nabucco', 'Otello'], correctAnswer: 1, explanation: 'Tragische Oper von 1851.' },
    { id: 'q-jst-f-24-de', text: 'Welcher spanische Maler ist für Portraits von Hofzwergen bekannt?', type: 'multiple-choice', options: ['Goya', 'Velázquez', 'El Greco', 'Murillo'], correctAnswer: 1, explanation: 'Diptychen und Einzelportraits.' },
    { id: 'q-jst-f-25-de', text: 'Wohin verlagerte sich das Bild des Hofnarren seit dem 18. Jahrhundert oft in der politischen Kultur?', type: 'multiple-choice', options: ['Ins Kloster', 'In Karikatur und öffentliche Satire', 'In Militärreglemente', 'In die Astronomie'], correctAnswer: 1, explanation: 'Zeitung und Stich.' },
    { id: 'q-jst-f-26-de', text: 'Wodurch unterscheidet sich der moderne Zirkusclown prinzipiell vom Hofnarren?', type: 'multiple-choice', options: ['Nur am Kostüm', 'Massenarena ohne Thronkontext und ohne «Lizenz» des Monarchen', 'Clowns sind immer stumm', 'Clowns nutzen nie Musik'], correctAnswer: 1, explanation: 'Wechsel der Institution.' },
    { id: 'q-jst-f-27-de', text: 'Was zeigt die Geschichte über die Grenzen narrenhafter Freiheit?', type: 'multiple-choice', options: ['Narren wurden nie bestraft', 'Bei Tonbruch konnte der Narr bestraft oder verbannt werden', 'Narren waren nur Frauen', 'In Asien gab es keine Narren'], correctAnswer: 1, explanation: 'Risiko, den Mächtigen zu kränken.' },
    { id: 'q-jst-f-28-de', text: 'Wo begegnet man dem Hofnarrenbild heute am häufigsten?', type: 'multiple-choice', options: ['Nur in der Armee', 'In Museen, Theater, Popkultur', 'Nur in der Kirche', 'Nur in Banken'], correctAnswer: 1, explanation: 'Erbe als kulturelles Archiv.' },
    { id: 'q-jst-f-29-de', text: 'Welche Fertigkeit vermittelt das Studium der Narrengeschichte?', type: 'multiple-choice', options: ['Nur Kalligraphie', 'Quelle, Legende und Funktion des Lachens bei der Macht unterscheiden', 'Nur Militärtaktik', 'Nur Buchhaltung'], correctAnswer: 1, explanation: 'Kritisches Lesen der Anekdote.' },
    { id: 'q-jst-f-30-de', text: 'Welche Frage passt als Abschluss einer Narren-Thematik?', type: 'multiple-choice', options: ['Wer erfand das Schießpulver', 'Wer darf heute zuletzt lachen und wo endet Schärfe', 'Wie knüpft man einen Palstek', 'Wie schwer ist die Krone'], correctAnswer: 1, explanation: 'Verbindung von Macht, Lachen und Risiko.' }
  ]
}
