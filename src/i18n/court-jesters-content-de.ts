import { Slide, QuizBlock } from '../types/session'

export const courtJestersSlidesDE: Slide[] = [
  { id: 'jst1', title: 'Wozu dem Thron ein Narr', content: 'Der Hofnarr war beim Monarchen ein «Druckventil»: Lachen loeste Spannung in Audienzen und gab der Macht eine Chance, Wahrheit in narrenhafter Huelse zu hoeren. Ein Minister fuerchtete das direkte Wort - der Narr konnte dasselbe als Kalauer formulieren und blieb am Leben.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/01-jester-and-power.jpg', title: 'Narr und Macht' }] },
  { id: 'jst2', title: 'Lizenz zur Wahrheit', content: 'Die «Narrenlizenz» ist kein Gesetzestext, sondern Brauch: Solange der Narr die Kappe traegt, spricht er im Namen der verkehrten Welt. Wer die Grenze ueberschritt, riskierte Pruegel, Verbannung oder Verschwinden - zwischen witzigem Dienst und Beleidigung liegt eine feine Linie.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/02-license-to-speak.jpg', title: 'Lizenz zum Wort' }] },
  { id: 'jst3', title: 'Kappe, Schellen, Marotte', content: 'Das Kostuem war aus der Ferne lesbar: bunter Lappen, Kappe mit «Eselsohren», Schellen, Marotte mit Puppenkopf. Das Bild signalisierte: «Jetzt folgt kein Amtston, sondern Spiel».', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/03-cap-bells-marotte.jpg', title: 'Narrenkostuem' }] },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-1-1-de', text: 'Welche «technische» Hauptfunktion erfuellte der Hofnarr?', type: 'multiple-choice', options: ['Er fuehrte Militaerkarten', 'Er loeste Spannung und gab ironisches Feedback', 'Er schrieb Gesetze', 'Er kommandierte die Garde'], correctAnswer: 1, explanation: 'Spiel und Lachen erlaubten Aussagen, die sonst gefaerhrlich gewesen waeren.' },
      { id: 'q-jst-1-2-de', text: 'Was meint «Narrenlizenz» im Sinne des Brauchtums?', type: 'multiple-choice', options: ['Koenigliche Urkunde ueber Land', 'Das Recht, in Narrengestalt scharf zu sprechen ohne Ministerpflicht', 'Duellgenehmigung', 'Steuerbefreiung'], correctAnswer: 1, explanation: 'Es ist soziale Vereinbarung, kein Paragraf im Kodex.' },
      { id: 'q-jst-1-3-de', text: 'Was ist eine Marotte?', type: 'multiple-choice', options: ['Lautentyp', 'Stab mit Puppenkopf, Narrenattribut', 'Narrenkrone', 'Weinsorte'], correctAnswer: 1, explanation: 'Typisches Requisit des Hofnarren.' }
    ]
  },

  { id: 'jst4', title: 'Natuernarr und ernannter Hofnarr', content: 'Mittelalter und Renaissance unterschieden «natuerliche» Narren und ernannte Hofnarren; beide konnten am Hof sein, doch Status und Risiko unterschieden sich. Der Ernannte war oft Witzbold und Schauspieler; der «Natuernarr» hing tragisch von der Gnade des Herrn ab.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/04-natural-versus-appointed.jpg', title: 'Narrentypen' }] },
  { id: 'jst5', title: 'Weibliche Narren', content: 'Die Geschichte ist nicht nur maennlich: Am Hof Heinrichs VIII. erscheint Jane Foole als «female fool» mit Kleidung und Sold aus der Garderobe. Das erinnert daran, dass die Rolle des Narren auch von Frauen ausgefuellt werden konnte, wenn es dem Koenig passte.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/05-jane-fool.jpg', title: 'Jane Foole' }] },
  { id: 'jst6', title: 'Will Sommers', content: 'Will Sommers ist der bekannteste englische Narr Heinrichs VIII.; Ausgaben fuer Kleidung und «Geschenke» stehen in den Kronenrechnungen. Eine Legende erzaehlt, er habe sich vor dem Zorn des Koenigs unter dem Bett versteckt - und sei nach einer narrenhaften Szene begnadigt worden.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/06-will-sommers.jpg', title: 'Will Sommers' }] },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-2-1-de', text: 'Wen stellt die Typologie der Narren oft einander gegenueber?', type: 'multiple-choice', options: ['Nur Kinder', '«Natuernarr» und ernannten Hofnarren', 'Nur Moenche', 'Nur Bauern'], correctAnswer: 1, explanation: 'Unterschiedliche Status und Risiken.' },
      { id: 'q-jst-2-2-de', text: 'Wie hiess die bekannte Hofnarrin bei Heinrich VIII.?', type: 'multiple-choice', options: ['Maria Stuart', 'Jane Foole', 'Elisabeth Tudor', 'Anne Boleyn'], correctAnswer: 1, explanation: 'Erwaehnungen in Garderobenbuechern.' },
      { id: 'q-jst-2-3-de', text: 'Welchen englischen Narren verbinden Lehrbuecher am haefigsten mit Heinrich VIII.?', type: 'multiple-choice', options: ['Archibald Armstrong', 'Richard Tarlton', 'Will Sommers', 'Ben Jonson'], correctAnswer: 2, explanation: 'Belegte Hofausgaben.' }
    ]
  },

  { id: 'jst7', title: 'Richard Tarlton', content: 'Tarlton ist eine Legende des elisabethanischen Theaters und der Marktplaetze: Man verbindet ihn mit Narrenrollen und satirischem Lied. Anekdoten ueber ihn wuchsen nach seinem Tod; teils wurde er zur Marke des Witzes in Shakespeares Zeit.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/07-richard-tarlton.jpg', title: 'Tarlton' }] },
  { id: 'jst8', title: 'Triboulet und Franz I.', content: 'Triboulet am Hof von Franz I. steht fuer scharfe Zunge: Er witzelte ueber Magnaten und Gaeste, der Koenig lachte zuerst. Es gibt glaubhafte Episoden und spaetere Ausschmueckungen - doch der Name wurde zum Synonym franzoesischen Hofwitzes.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/08-triboulet-francis-i.jpg', title: 'Triboulet' }] },
  { id: 'jst9', title: 'Narr und Ring: eine Legende', content: 'In einer populaeren Fassung erhaelt Triboulet vom Papst einen Ring und witzelt: «Jetzt darf ich meine Schwester heiraten» - Kalauer auf das Zoelibat. Ob wahr, ist weniger wichtig als welche Themen ein Narr unter Lachen beruehren durfte.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/09-triboulet-ring-joke.jpg', title: 'Ringlegende' }] },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-3-1-de', text: 'Mit welcher Epoche verbindet man Richard Tarlton am haefigsten?', type: 'multiple-choice', options: ['Viktorianisches England', 'Elisabethanisches England', 'Stuart-Restauration', 'Normannisches England'], correctAnswer: 1, explanation: 'Theater und Markt im spaeten 16. Jahrhundert.' },
      { id: 'q-jst-3-2-de', text: 'Bei welchem franzoesischen Koenig ist der Narr Triboulet bekannt?', type: 'multiple-choice', options: ['Ludwig XIV.', 'Franz I.', 'Heinrich IV.', 'Karl VIII.'], correctAnswer: 1, explanation: 'Renaissancehof der ersten Haelfte des 16. Jahrhunderts.' },
      { id: 'q-jst-3-3-de', text: 'Worueber ist der Kalauer in der Triboulet-Ringlegende?', type: 'multiple-choice', options: ['Steuern', 'Zoelibat des Klerus', 'Seefahrt', 'Duelle'], correctAnswer: 1, explanation: 'Witz an der Grenze des Erlaubten.' }
    ]
  },

  { id: 'jst10', title: 'Archibald Armstrong', content: 'Der Schotte Armstrong diente Jakob I. und Karl I.; in einem Pamphlet verspottete er Erzbischof Laud - und bezahlte mit Geldstrafe und Schande. Die Lehre: Selbst die «Lizenz» endete, wenn der Narr die politische Stuetze des Regimes traf.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/10-archibald-armstrong.jpg', title: 'Armstrong' }] },
  { id: 'jst11', title: 'Narr und Bischof', content: 'In der englischen Tradition stichelten Narren nicht nur gegen den Monarchen, sondern auch gegen die Kirche - daher Witze, wonach «der Bischof wegen der Mitra nicht durchs Himmelstor passt». Satire auf den Stand ging durch die niedrige Hoffigur - und wirkte lauter als manche Predigt.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/11-jester-church-satire.jpg', title: 'Narr und Kirche' }] },
  { id: 'jst12', title: 'Der Narr beim Bankett', content: 'Die Bankettszene war klassischer Arbeitsplatz: Zwischen Gaengen improvisierte der Narr, parodierte Gaeste und stellte den Gastgeber wieder ins Zentrum. Ein missglueckter Witz konnte in einer Ehrenkultur eskalieren - oefter aber endete er in frostigem Schweigen.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/12-banquet-jester.jpg', title: 'Fest und Narr' }] },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-4-1-de', text: 'Wofuer wurde Archibald Armstrong im bekannten politischen Skandal bestraft?', type: 'multiple-choice', options: ['Becherdiebstahl', 'Pamphlet gegen Erzbischof Laud', 'Desertion', 'Weigerung, die Kappe zu tragen'], correctAnswer: 1, explanation: 'Geldstrafe und Verlust der Gunst.' },
      { id: 'q-jst-4-2-de', text: 'Wer wurde in christlichem Europa oft zum Ziel narrenhafter Satire?', type: 'multiple-choice', options: ['Nur Bauern', 'Haeufig hohes Klerusamt und kirchlicher Stand', 'Nur Hofdamen', 'Nur Kinder'], correctAnswer: 1, explanation: 'Die Kirche als Zielscheibe des Witzes.' },
      { id: 'q-jst-4-3-de', text: 'Wo «arbeitete» der Hofnarr im Alltag am haefigsten?', type: 'multiple-choice', options: ['Auf dem Schlachtfeld', 'Bei Banketten und Schaustellungen', 'In der Klosterzelle', 'Im Hafen'], correctAnswer: 1, explanation: 'Das Fest als Buehne.' }
    ]
  },

  { id: 'jst13', title: 'Skomorochi in Russland', content: 'Skomorochi waren Musiker, Taenzer, satirische Erzaehler; die Kirche verfolgte sie als «teuflisch». Ihr Bild verband sich mit Volkskultur und spaeterer Hoftradition - doch lange lebten «Strassenlachen» und «Hoflachen» unter anderen Regeln.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/13-skomorokh-rus.jpg', title: 'Skomorochi' }] },
  { id: 'jst14', title: '«Domashnie» bei Iwan IV.', content: 'Bei Iwan dem Schrecklichen erscheinen «Domashnie» - Menschen engsten Vertrauens, mitweilen mit ungewoehnlichem Verhalten; in populaerer Erinnerung verwechselt man sie gern mit Narren, doch die Rolle war anders - naeher privilegierter Gefolgschaft. Man trenne Quelle und Anekdote.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/14-ivan-grozny-fools.jpg', title: 'Hof Iwans IV.' }] },
  { id: 'jst15', title: 'Stanczyk auf Matejkos Gemaelde', content: 'Jan Matejko malte den legendaeren polnischen Narren Stanczyk in dem Moment, da er nachdenklich einen Ball haelt: Allegorie des Verlusts Schlesiens. Das Gemaelde des 19. Jahrhunderts machte aus der historischen Figur ein Staatsymbol staerker als jeder Chronistenabsatz.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/15-stanczyk-matejko.jpg', title: 'Stanczyk' }] },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-5-1-de', text: 'Wie hiessen in Russland wandernde Musiker-Satiriker, die die Kirche verurteilte?', type: 'multiple-choice', options: ['Bojaren', 'Skomorochi', 'Strelizen', 'Djaki'], correctAnswer: 1, explanation: 'Eigene kulturelle Schicht.' },
      { id: 'q-jst-5-2-de', text: 'Wie heisst die Gruppe von Vertrauten bei Iwan IV., die man im Alltag oft mit «Narren» verwechselt?', type: 'multiple-choice', options: ['Opritchniki', 'Domashnie', 'Posadniki', 'Strelizen-Haeupter'], correctAnswer: 1, explanation: 'Begriff aus Quellen; nicht mit komischem Hofnarr vermischen.' },
      { id: 'q-jst-5-3-de', text: 'Wer malte den beruehmten nachdenklichen Stanczyk mit Ball?', type: 'multiple-choice', options: ['Repin', 'Jan Matejko', 'Brjullov', 'Raffael'], correctAnswer: 1, explanation: 'Polnische Historienmalerei des 19. Jahrhunderts.' }
    ]
  },

  { id: 'jst16', title: 'Der Narr in «Koenig Lear»', content: 'Bei Shakespeare ist Lears Narr kein Komiker fuer Applaus, sondern Stimme des Schmerzes: Seine «toerten» Repliken entlarven das Wahnsinnsgefuege der Welt. Wenn der Narr von der Buehne verschwindet, bleibt nur Tragoedie - Literatur markiert den Umschlag von Witz zu Katharsis.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/16-king-lear-fool.jpg', title: 'Lears Narr' }] },
  { id: 'jst17', title: 'Yorick und der Schaedel', content: 'Hamlet haelt Yoricks Narrenschaedel: «Wo sind eure Scherze?» - die grosse Szene von Vergaenglichkeit und Erinnerung an Lachen. Der literarische Yorick tat mehr fuer das Narrenbild in der Kultur als mancher lebendige Hofnarr.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/17-yorick-hamlet.jpg', title: 'Yorick' }] },
  { id: 'jst18', title: 'Touchstone und der Ardenwald', content: 'In «Wie es euch gefaellt» wirft Touchstone Kalauer ueber Ehre, Liebe und gesellschaftliche Masken. Der Narr fuehrt das Genre: Das Publikum lacht - und die Regie will, dass es zuletzt ueber sich selbst lacht.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/18-touchstone-as-you-like-it.jpg', title: 'Touchstone' }] },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-6-1-de', text: 'In welchem Shakespeare-Stueck begleitet der Narr einen wahnsinnig werdenden Koenig?', type: 'multiple-choice', options: ['«Othello»', '«Koenig Lear»', '«Romeo und Julia»', '«Macbeth»'], correctAnswer: 1, explanation: 'Die Narrrolle ist strukturell und tragisch.' },
      { id: 'q-jst-6-2-de', text: 'Wessen Schaedel haelt Hamlet in der beruehmten Szene?', type: 'multiple-choice', options: ['Polonius', 'Den Koenig', 'Den Narren Yorick', 'Rosenkranz'], correctAnswer: 2, explanation: 'Meditation ueber Tod und Lachen.' },
      { id: 'q-jst-6-3-de', text: 'Wie heisst der Narr in «Wie es euch gefaellt»?', type: 'multiple-choice', options: ['Fest', 'Touchstone', 'Lavatch', 'Pistol'], correctAnswer: 1, explanation: 'Komische Ideenfuehrung.' }
    ]
  },

  { id: 'jst19', title: 'Dongfang Shuo', content: 'Am Hof der Han unter Wudi erscheint Dongfang Shuo - Witzbold und Hoefling, den man im Volksgedaechtnis gern mit «weiseem Narr» vergleicht: scherzte, konnte aber Rat in eine Fabel packen. Die oestliche Tradition erinnert: Lachen und Weisheit sind nicht immer Feinde.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/19-dongfang-shuo.jpg', title: 'Dongfang Shuo' }] },
  { id: 'jst20', title: 'Nasreddin: Weiser und Witzbold', content: 'Nasreddin Hodscha ist Held Hunderter Anekdoten: Mit einem Satz kippt er die Situation. Man nennt ihn keinen europaeischen Hofnarren, doch die Funktion gleicht der - soziale Kritik in der sicheren Form der Fabel.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/20-nasreddin-hodja.jpg', title: 'Nasreddin' }] },
  { id: 'jst21', title: 'Erasmus: «Lob der Torheit»', content: 'In Erasmus’ Satire spricht die Torheit selbst - von Universitaeten bis zum Krieg. Das ist kein Hofalltag, aber das intellektuelle Pendant: Lachen als Werkzeug moralischer Perspektivverschiebung.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/21-erasmus-praise-of-folly.jpg', title: 'Lob der Torheit' }] },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-7-1-de', text: 'Mit welchem chinesischen Hof verbindet man Dongfang Shuo?', type: 'multiple-choice', options: ['Ming', 'Han unter Wudi', 'Qin Shihuangdi', 'Tang Taizong'], correctAnswer: 1, explanation: 'Fruehe Kaiserzeit der Han.' },
      { id: 'q-jst-7-2-de', text: 'Wer ist der Held orientalischer Anekdoten, funktional nah am Volksweisen-Narren?', type: 'multiple-choice', options: ['Zarathustra', 'Nasreddin Hodscha', 'Konfuzius', 'Solon'], correctAnswer: 1, explanation: 'Handlung mit Umkehr des Sinns.' },
      { id: 'q-jst-7-3-de', text: 'Wie heisst Erasmus’ Satire, in der die allegorische Torheit spricht?', type: 'multiple-choice', options: ['«Utopia»', '«Lob der Torheit»', '«Sonnenstadt»', '«Candide»'], correctAnswer: 1, explanation: 'Moriae encomium.' }
    ]
  },

  { id: 'jst22', title: 'Commedia dell’arte', content: 'In der italienischen Commedia dell’arte trugen Masken wie Harlekin und Pantalone Hof- und Stadtwitz auf wandernde Buehnen. Der Narr verlagerte sich teils «ins Volk» durch Theater - und erhielt ohne Kroennebenmann ein zweites Leben.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/22-commedia-dell-arte.jpg', title: 'Commedia dell’arte' }] },
  { id: 'jst23', title: 'Verdis Rigoletto', content: 'In Verdis Oper dient Rigoletto dem Herzog und spinnt Intrigen, bis die Tragoedie seine Tochter ereilt. Der kulturelle Hofnarr ist hier keine sichere Figur - sondern moralisches Risiko und Rache.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/23-rigoletto-verdi.jpg', title: 'Rigoletto' }] },
  { id: 'jst24', title: 'Velaquez und Hofzwerge', content: 'Velaquez malte spanische Hofzwerge nicht als «Kaefigtiere», sondern mit Portraetwuerde - und doch mischte der Blick der Epoche Spektakel mit Mensch. Malerei zeigt, wie der Hof Naehe in Bild verwandelte.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/24-velazquez-court-dwarf.jpg', title: 'Velaquez' }] },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-8-1-de', text: 'Mit welcher italienischen Theatertradition verbindet man Masken und Improvisation?', type: 'multiple-choice', options: ['Oper seria', 'Commedia dell’arte', 'No', 'Kabuki'], correctAnswer: 1, explanation: 'Harlekin, Pantalone u. a.' },
      { id: 'q-jst-8-2-de', text: 'Wie heisst der Narr in Verdis Oper ueber den Herzog von Mantua?', type: 'multiple-choice', options: ['Falstaff', 'Rigoletto', 'Nabucco', 'Otello'], correctAnswer: 1, explanation: 'Tragische Oper von 1851.' },
      { id: 'q-jst-8-3-de', text: 'Welcher spanische Maler ist fuer Portraits von Hofzwergen bekannt?', type: 'multiple-choice', options: ['Goya', 'Velaquez', 'El Greco', 'Murillo'], correctAnswer: 1, explanation: 'Diptychen und Einzelportraits.' }
    ]
  },

  { id: 'jst25', title: 'Narr in Stich und Zeitung', content: 'Seit dem 18. Jahrhundert wandert politischer Witz in die Karikatur: «John Bull», revolutionaere franzoesische Blaetter - Lachen trifft Minister ohne Kappe, aber mit Signatur des Zeichners. Der Hofstil wurde buergerliche Waffe.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/25-political-cartoon-jester.jpg', title: 'Politische Karikatur' }] },
  { id: 'jst26', title: 'Vom Narren zum Clown', content: 'Der Zirkusclown erbte Schellen und Stuerze, verlor aber den Thronkontext. Heutiges Lachen ist Massenphaenomen; die «Lizenz» des Monarchen zerfaserte in Meinungsfreiheit, Satire und Risiko von Beleidigungsklagen.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/26-clown-versus-jester.jpg', title: 'Clown und Narr' }] },
  { id: 'jst27', title: 'Narr und Strafe', content: 'Die Geschichte kennt Verbannung, Pruegel und Hinrichtungen fuer Ueberschreitung: Der Narr war nicht immer unantastbar. Das hilft, den Hof nicht als «Reich ewiger narrenhafter Freiheit» zu romantisieren.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/27-jester-punishment.jpg', title: 'Preis der Schaerfe' }] },
  {
    id: 'q9',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-9-1-de', text: 'Wohin verlagerte sich das Bild des Hofnarren seit dem 18. Jahrhundert oft in der politischen Kultur?', type: 'multiple-choice', options: ['Ins Kloster', 'In Karikatur und oeffentliche Satire', 'In Militaerreglemente', 'In die Astronomie'], correctAnswer: 1, explanation: 'Zeitung und Stich.' },
      { id: 'q-jst-9-2-de', text: 'Wodurch unterscheidet sich der moderne Zirkusclown prinzipiell vom Hofnarren?', type: 'multiple-choice', options: ['Nur am Kostuem', 'Massenarena ohne Thronkontext und ohne «Lizenz» des Monarchen', 'Clowns sind immer stumm', 'Clowns nutzen nie Musik'], correctAnswer: 1, explanation: 'Wechsel der Institution.' },
      { id: 'q-jst-9-3-de', text: 'Was zeigt die Geschichte ueber die Grenzen narrenhafter Freiheit?', type: 'multiple-choice', options: ['Narren wurden nie bestraft', 'Bei Tonbruch konnte der Narr bestraft oder verbannt werden', 'Narren waren nur Frauen', 'In Asien gab es keine Narren'], correctAnswer: 1, explanation: 'Risiko, den Maechtigen zu kraenken.' }
    ]
  },

  { id: 'jst28', title: 'Der Narr im Museum', content: 'Heute stehen Kappe und Marotte eher im Museum oder auf Festivalplakaten: Das Bild ist Archiv des vergangenen Hofes. Rekonstruktionen und Filme holen den Narr zurueck - aber schon als historische Figur, nicht als lebendigen Beruf.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/28-museum-jester-exhibit.jpg', title: 'Museum' }] },
  { id: 'jst29', title: 'Warum Narren heute noch zaehlen', content: 'Narrengeschichte lehrt, Quelle von Legende zu trennen, Macht von ihrer Maske, Lachen von Grausamkeit. Anekdoten ueber Triboulet oder Sommers sind nicht nur komisch: Sie zeigen, wie Gesellschaften ueber erlaubte Kritik verhandelten.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/29-why-study-jesters.jpg', title: 'Warum erinnern' }] },
  { id: 'jst30', title: 'Fazit: Spiegel und Kappe', content: 'Der Hofnarr war Spiegel der Macht: In ihm spiegelten sich Groesse, Angst und die Grenzen der Geduld. Wenn der Spiegel zerbrach, endete das Lachen vor dem Applaus - und das ist vielleicht die ehrlichste Lehre der Narrengeschichte.', duration: 3, media: [{ type: 'image', url: '/media/court-jesters/30-jester-legacy.jpg', title: 'Bilderbe' }] },
  {
    id: 'q10',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-jst-10-1-de', text: 'Wo begegnet man dem Hofnarrenbild heute am haefigsten?', type: 'multiple-choice', options: ['Nur in der Armee', 'In Museen, Theater, Popkultur', 'Nur in der Kirche', 'Nur in Banken'], correctAnswer: 1, explanation: 'Erbe als kulturelles Archiv.' },
      { id: 'q-jst-10-2-de', text: 'Welche Fertigkeit vermittelt das Studium der Narrengeschichte?', type: 'multiple-choice', options: ['Nur Kalligraphie', 'Quelle, Legende und Funktion des Lachens bei der Macht unterscheiden', 'Nur Militaertaktik', 'Nur Buchhaltung'], correctAnswer: 1, explanation: 'Kritisches Lesen der Anekdote.' },
      { id: 'q-jst-10-3-de', text: 'Welche Metapher schliesst den Kurs ueber den Hofnarren sinnvoll ab?', type: 'multiple-choice', options: ['Der Narr ist Schiffsmotor', 'Der Narr ist Spiegel der Macht in der Kappe', 'Der Narr ist Hauptsteuer', 'Der Narr ist Duengerart'], correctAnswer: 1, explanation: 'Bild von Spiegel und Maske.' }
    ]
  }
]

export const courtJestersFinalQuizDE: QuizBlock = {
  id: 'quiz-court-jesters-de',
  title: 'Abschlussquiz: Hofnarren (Niveau B2)',
  questions: [
    { id: 'q-jst-f-1-de', text: 'Welche «technische» Hauptfunktion erfuellte der Hofnarr?', type: 'multiple-choice', options: ['Er fuehrte Militaerkarten', 'Er loeste Spannung und gab ironisches Feedback', 'Er schrieb Gesetze', 'Er kommandierte die Garde'], correctAnswer: 1, explanation: 'Spiel und Lachen erlaubten Aussagen, die sonst gefaerhrlich gewesen waeren.' },
    { id: 'q-jst-f-2-de', text: 'Was meint «Narrenlizenz» im Sinne des Brauchtums?', type: 'multiple-choice', options: ['Koenigliche Urkunde ueber Land', 'Das Recht, in Narrengestalt scharf zu sprechen ohne Ministerpflicht', 'Duellgenehmigung', 'Steuerbefreiung'], correctAnswer: 1, explanation: 'Es ist soziale Vereinbarung, kein Paragraf im Kodex.' },
    { id: 'q-jst-f-3-de', text: 'Was ist eine Marotte?', type: 'multiple-choice', options: ['Lautentyp', 'Stab mit Puppenkopf, Narrenattribut', 'Narrenkrone', 'Weinsorte'], correctAnswer: 1, explanation: 'Typisches Requisit des Hofnarren.' },
    { id: 'q-jst-f-4-de', text: 'Wen stellt die Typologie der Narren oft einander gegenueber?', type: 'multiple-choice', options: ['Nur Kinder', '«Natuernarr» und ernannten Hofnarren', 'Nur Moenche', 'Nur Bauern'], correctAnswer: 1, explanation: 'Unterschiedliche Status und Risiken.' },
    { id: 'q-jst-f-5-de', text: 'Wie hiess die bekannte Hofnarrin bei Heinrich VIII.?', type: 'multiple-choice', options: ['Maria Stuart', 'Jane Foole', 'Elisabeth Tudor', 'Anne Boleyn'], correctAnswer: 1, explanation: 'Erwaehnungen in Garderobenbuechern.' },
    { id: 'q-jst-f-6-de', text: 'Welchen englischen Narren verbinden Lehrbuecher am haefigsten mit Heinrich VIII.?', type: 'multiple-choice', options: ['Archibald Armstrong', 'Richard Tarlton', 'Will Sommers', 'Ben Jonson'], correctAnswer: 2, explanation: 'Belegte Hofausgaben.' },
    { id: 'q-jst-f-7-de', text: 'Mit welcher Epoche verbindet man Richard Tarlton am haefigsten?', type: 'multiple-choice', options: ['Viktorianisches England', 'Elisabethanisches England', 'Stuart-Restauration', 'Normannisches England'], correctAnswer: 1, explanation: 'Theater und Markt im spaeten 16. Jahrhundert.' },
    { id: 'q-jst-f-8-de', text: 'Bei welchem franzoesischen Koenig ist der Narr Triboulet bekannt?', type: 'multiple-choice', options: ['Ludwig XIV.', 'Franz I.', 'Heinrich IV.', 'Karl VIII.'], correctAnswer: 1, explanation: 'Renaissancehof der ersten Haelfte des 16. Jahrhunderts.' },
    { id: 'q-jst-f-9-de', text: 'Worueber ist der Kalauer in der Triboulet-Ringlegende?', type: 'multiple-choice', options: ['Steuern', 'Zoelibat des Klerus', 'Seefahrt', 'Duelle'], correctAnswer: 1, explanation: 'Witz an der Grenze des Erlaubten.' },
    { id: 'q-jst-f-10-de', text: 'Wofuer wurde Archibald Armstrong im bekannten politischen Skandal bestraft?', type: 'multiple-choice', options: ['Becherdiebstahl', 'Pamphlet gegen Erzbischof Laud', 'Desertion', 'Weigerung, die Kappe zu tragen'], correctAnswer: 1, explanation: 'Geldstrafe und Verlust der Gunst.' },
    { id: 'q-jst-f-11-de', text: 'Wer wurde in christlichem Europa oft zum Ziel narrenhafter Satire?', type: 'multiple-choice', options: ['Nur Bauern', 'Haeufig hohes Klerusamt und kirchlicher Stand', 'Nur Hofdamen', 'Nur Kinder'], correctAnswer: 1, explanation: 'Die Kirche als Zielscheibe des Witzes.' },
    { id: 'q-jst-f-12-de', text: 'Wo «arbeitete» der Hofnarr im Alltag am haefigsten?', type: 'multiple-choice', options: ['Auf dem Schlachtfeld', 'Bei Banketten und Schaustellungen', 'In der Klosterzelle', 'Im Hafen'], correctAnswer: 1, explanation: 'Das Fest als Buehne.' },
    { id: 'q-jst-f-13-de', text: 'Wie hiessen in Russland wandernde Musiker-Satiriker, die die Kirche verurteilte?', type: 'multiple-choice', options: ['Bojaren', 'Skomorochi', 'Strelizen', 'Djaki'], correctAnswer: 1, explanation: 'Eigene kulturelle Schicht.' },
    { id: 'q-jst-f-14-de', text: 'Wie heisst die Gruppe von Vertrauten bei Iwan IV., die man im Alltag oft mit «Narren» verwechselt?', type: 'multiple-choice', options: ['Opritchniki', 'Domashnie', 'Posadniki', 'Strelizen-Haeupter'], correctAnswer: 1, explanation: 'Begriff aus Quellen; nicht mit komischem Hofnarr vermischen.' },
    { id: 'q-jst-f-15-de', text: 'Wer malte den beruehmten nachdenklichen Stanczyk mit Ball?', type: 'multiple-choice', options: ['Repin', 'Jan Matejko', 'Brjullov', 'Raffael'], correctAnswer: 1, explanation: 'Polnische Historienmalerei des 19. Jahrhunderts.' },
    { id: 'q-jst-f-16-de', text: 'In welchem Shakespeare-Stueck begleitet der Narr einen wahnsinnig werdenden Koenig?', type: 'multiple-choice', options: ['«Othello»', '«Koenig Lear»', '«Romeo und Julia»', '«Macbeth»'], correctAnswer: 1, explanation: 'Die Narrrolle ist strukturell und tragisch.' },
    { id: 'q-jst-f-17-de', text: 'Wessen Schaedel haelt Hamlet in der beruehmten Szene?', type: 'multiple-choice', options: ['Polonius', 'Den Koenig', 'Den Narren Yorick', 'Rosenkranz'], correctAnswer: 2, explanation: 'Meditation ueber Tod und Lachen.' },
    { id: 'q-jst-f-18-de', text: 'Wie heisst der Narr in «Wie es euch gefaellt»?', type: 'multiple-choice', options: ['Fest', 'Touchstone', 'Lavatch', 'Pistol'], correctAnswer: 1, explanation: 'Komische Ideenfuehrung.' },
    { id: 'q-jst-f-19-de', text: 'Mit welchem chinesischen Hof verbindet man Dongfang Shuo?', type: 'multiple-choice', options: ['Ming', 'Han unter Wudi', 'Qin Shihuangdi', 'Tang Taizong'], correctAnswer: 1, explanation: 'Fruehe Kaiserzeit der Han.' },
    { id: 'q-jst-f-20-de', text: 'Wer ist der Held orientalischer Anekdoten, funktional nah am Volksweisen-Narren?', type: 'multiple-choice', options: ['Zarathustra', 'Nasreddin Hodscha', 'Konfuzius', 'Solon'], correctAnswer: 1, explanation: 'Handlung mit Umkehr des Sinns.' },
    { id: 'q-jst-f-21-de', text: 'Wie heisst Erasmus’ Satire, in der die allegorische Torheit spricht?', type: 'multiple-choice', options: ['«Utopia»', '«Lob der Torheit»', '«Sonnenstadt»', '«Candide»'], correctAnswer: 1, explanation: 'Moriae encomium.' },
    { id: 'q-jst-f-22-de', text: 'Mit welcher italienischen Theatertradition verbindet man Masken und Improvisation?', type: 'multiple-choice', options: ['Oper seria', 'Commedia dell’arte', 'No', 'Kabuki'], correctAnswer: 1, explanation: 'Harlekin, Pantalone u. a.' },
    { id: 'q-jst-f-23-de', text: 'Wie heisst der Narr in Verdis Oper ueber den Herzog von Mantua?', type: 'multiple-choice', options: ['Falstaff', 'Rigoletto', 'Nabucco', 'Otello'], correctAnswer: 1, explanation: 'Tragische Oper von 1851.' },
    { id: 'q-jst-f-24-de', text: 'Welcher spanische Maler ist fuer Portraits von Hofzwergen bekannt?', type: 'multiple-choice', options: ['Goya', 'Velaquez', 'El Greco', 'Murillo'], correctAnswer: 1, explanation: 'Diptychen und Einzelportraits.' },
    { id: 'q-jst-f-25-de', text: 'Wohin verlagerte sich das Bild des Hofnarren seit dem 18. Jahrhundert oft in der politischen Kultur?', type: 'multiple-choice', options: ['Ins Kloster', 'In Karikatur und oeffentliche Satire', 'In Militaerreglemente', 'In die Astronomie'], correctAnswer: 1, explanation: 'Zeitung und Stich.' },
    { id: 'q-jst-f-26-de', text: 'Wodurch unterscheidet sich der moderne Zirkusclown prinzipiell vom Hofnarren?', type: 'multiple-choice', options: ['Nur am Kostuem', 'Massenarena ohne Thronkontext und ohne «Lizenz» des Monarchen', 'Clowns sind immer stumm', 'Clowns nutzen nie Musik'], correctAnswer: 1, explanation: 'Wechsel der Institution.' },
    { id: 'q-jst-f-27-de', text: 'Was zeigt die Geschichte ueber die Grenzen narrenhafter Freiheit?', type: 'multiple-choice', options: ['Narren wurden nie bestraft', 'Bei Tonbruch konnte der Narr bestraft oder verbannt werden', 'Narren waren nur Frauen', 'In Asien gab es keine Narren'], correctAnswer: 1, explanation: 'Risiko, den Maechtigen zu kraenken.' },
    { id: 'q-jst-f-28-de', text: 'Wo begegnet man dem Hofnarrenbild heute am haefigsten?', type: 'multiple-choice', options: ['Nur in der Armee', 'In Museen, Theater, Popkultur', 'Nur in der Kirche', 'Nur in Banken'], correctAnswer: 1, explanation: 'Erbe als kulturelles Archiv.' },
    { id: 'q-jst-f-29-de', text: 'Welche Fertigkeit vermittelt das Studium der Narrengeschichte?', type: 'multiple-choice', options: ['Nur Kalligraphie', 'Quelle, Legende und Funktion des Lachens bei der Macht unterscheiden', 'Nur Militaertaktik', 'Nur Buchhaltung'], correctAnswer: 1, explanation: 'Kritisches Lesen der Anekdote.' },
    { id: 'q-jst-f-30-de', text: 'Welche Metapher schliesst den Kurs ueber den Hofnarren sinnvoll ab?', type: 'multiple-choice', options: ['Der Narr ist Schiffsmotor', 'Der Narr ist Spiegel der Macht in der Kappe', 'Der Narr ist Hauptsteuer', 'Der Narr ist Duengerart'], correctAnswer: 1, explanation: 'Bild von Spiegel und Maske.' }
  ]
}
