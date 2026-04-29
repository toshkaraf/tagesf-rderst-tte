import { Slide, QuizBlock } from '../types/session'

export const medievalBattleTacticsSlidesDE: Slide[] = [
  { id: 'mbt1', title: 'Schildwand ohne Aristoteles', content: 'Bei germanischen und skandinavischen Staemmen war "Schild an Schild" ein Ueberlebensprinzip. Die skandinavische Skjaldborg erinnert an die Phalanx, dahinter standen oft Bogenschuetzen mit Wurfwaffen. Der Verband war viele Male staerker auf Verteidigung als auf tiefen Vorstoss.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/01-shield-wall-barbarian.jpg', title: 'Schildwand' }] },
  { id: 'mbt2', title: 'Svinfylking - Keil der Wikinger', content: 'Svinfylking ist ein angreifender Keil mit den besten Kaempfern an der Spitze. Ziel: eine Schutzrichtung durchstossen und dann den Nahkampf gewinnen. Aehnlich der makedonischen Idee, aber zu Fuss und mit weniger Verbindung zu anderen Truppenteilen.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/02-svinfylking.jpg', title: 'Keil' }] },
  { id: 'mbt3', title: 'Hastings 1066: Mauer gegen Reiterei', content: 'Die englische Schildmauer auf dem Senlac-Huegel hielt lange stand. Entscheidend war nicht der Durchbruch, sondern Disziplin: Teile der Fusskraefte verfolgten scheinbar fliehende Normannen und oeffneten die Front. Der Scheinrueckzug funktioniert schon lange in der Militaergeschichte.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/03-hastings.jpg', title: 'Hastings' }] },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-mbt-1-1-de', text: 'Was ist die Skjaldborg dem Prinzip nach am naechsten?', type: 'multiple-choice', options: ['Reiterkeil', 'Dichte Schildfront', 'Lockerer Bogenschuetzenverband', 'Belagerungswall'], correctAnswer: 1, explanation: 'Es geht um einen geschlossenen Frontverband.' },
      { id: 'q-mbt-1-2-de', text: 'Was passiert nach dem Durchbruch mit Svinfylking?', type: 'multiple-choice', options: ['Rueckzug ins Lager', 'Wechsel zum freien Nahkampf vor dem Verband', 'Palisadenbau', 'Belagerung'], correctAnswer: 1, explanation: 'Nach dem Riss wird aus der Linie ein Nahkampf.' },
      { id: 'q-mbt-1-3-de', text: 'Warum brach die englische Linie bei Hastings?', type: 'multiple-choice', options: ['Reiter durchs Zentrum', 'Verfolgung und Aufloesen der Ordnung', 'Speermangel', 'Mongolen'], correctAnswer: 1, explanation: 'Disziplinverlust oeffnete die Front.' }
    ]
  },

  { id: 'mbt4', title: 'Hird - Profikern', content: 'Die Hird der skandinavischen Herrscher ist keine Jahresmiliz, sondern fest bezahlte Krieger mit dauerhafter Ausbildung. Funktionell wie Legion oder Hetairoi: sie halten die Linie, wenn die Masse wankt.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/04-hird.jpg', title: 'Hird' }] },
  { id: 'mbt5', title: 'Ritterkeil: Masse und Tempo', content: 'Schwerer Reiter und Schlachtross erzeugen auf dem Galopp enorme Wucht; ein geschlossener kleiner Keil kann schlecht geuebte Infanterie umwerfen. Chronisten beschreiben fruehe frankische Erfolge wie eine kaum zu bremsende Welle.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/05-knight-charge.jpg', title: 'Ritterkeil' }] },
  { id: 'mbt6', title: 'Frontal statt Flanke', content: 'Alexander schlug oft in die Naht zwischen Verbaenden; spaete Ritter traten haeufig direkt an: Anlauf, Lanze, Durchbruch. Feudale Buende hatten selten die Signale fuer komplexe Flankenmanoever - Frontalangriff braucht vor allem Tempo und Mut.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/06-knight-frontal-flank.jpg', title: 'Frontalangriff' }] },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-mbt-2-1-de', text: 'Was ist die Hird?', type: 'multiple-choice', options: ['Saisonmiliz', 'Staendige Soldgard', 'Wikingerflotte', 'Kaufmannsgilde'], correctAnswer: 1, explanation: 'Professionelles Kernkontingent.' },
      { id: 'q-mbt-2-2-de', text: 'Wirkung eines schweren Ritterkeils auf lose Infanterie?', type: 'multiple-choice', options: ['Schwaeche gegen Bogen', 'Die Wucht bricht die Linie', 'Immer freiwilliger Rueckzug', 'Lanzen durchschlagen nie'], correctAnswer: 1, explanation: 'Masse und Geschwindigkeit erzeugen den Bruch.' },
      { id: 'q-mbt-2-3-de', text: 'Warum griffen spaete Ritter oft frontal an?', type: 'multiple-choice', options: ['Flankenverbot der Kirche', 'Kaum Koordination fuer komplexe Manoever', 'Pferde ohne Wendung', 'Feind immer Ruecken'], correctAnswer: 1, explanation: 'Ohne klare Fuehrung ist Frontal einfacher.' }
    ]
  },

  { id: 'mbt7', title: 'Courtrai 1302', content: 'Flaemische Pikeniere und Geldarten stehen dicht auf sumpfigem Boden. Franzoesische Ritter stecken fest und werden zu Fuss bekaempft. Die goldenen Sporen wurden zum Symbol - Pikendisziplin schlug die Reiterei.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/07-courtrai.jpg', title: 'Courtrai' }] },
  { id: 'mbt8', title: 'Abgestiegene Ritter', content: 'Nach Niederlagen gegen Eidgenossen und Flaeminger setzen Kommandanten Ritter gezielt zu Fuss in die erste Linie: Panzer, Erfahrung, Moral plus Infanterieordnung. Bei Azincourt half das wenig gegen Schlamm und Pfeilregen.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/08-dismounted-knights.jpg', title: 'Abgestiegene Ritter' }] },
  { id: 'mbt9', title: 'Englischer Langbogen', content: 'Langer Eibenbogen mit hohem Zug ist schneller als die Armbrust, braucht aber Training von Kindheit an. Skelettfunde spaeter Langbogenschuetzen zeigen typische Belastungsspuren - der Koerper passt sich dem Werkzeug an.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/09-longbow.jpg', title: 'Langbogen' }] },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-mbt-3-1-de', text: 'Was entschied Courtrai?', type: 'multiple-choice', options: ['Gebirgsstuetzpunkt', 'Dichter Pikenverband auf Morast', 'Flotte', 'Belagerung von Paris'], correctAnswer: 1, explanation: 'Morast und Pikendichte stoppten die Reiterei.' },
      { id: 'q-mbt-3-2-de', text: 'Warum setzte man spaeter abgestiegene Ritter ein?', type: 'multiple-choice', options: ['Futter sparen', 'Ordnung der Fusslinie mit Elitekaempfern', 'Kirchenverbot fuer Pferde', 'Schwimmen'], correctAnswer: 1, explanation: 'Kompromiss Panzerung plus Formation.' },
      { id: 'q-mbt-3-3-de', text: 'Besonderheit der Ausbildung englischer Bogenschuetzen?', type: 'multiple-choice', options: ['Zwei Wochen Kurs', 'Langjahrig ab Kindheit', 'Nur Adel', 'Trainingsverbot'], correctAnswer: 1, explanation: 'Der Bogen braucht jahrelange Uebung.' }
    ]
  },

  { id: 'mbt10', title: 'Crecy 1346: Regen und Sehnen', content: 'Starker Regen vor der Schlacht. Englaender schuetzten Bogen sehnen - genuesische Armbrustschuetzen taten das nicht immer. Nasse Sehnen und Fehlzuende schwaechen den Armbrustsalven vor dem Reiterangriff.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/10-crecy.jpg', title: 'Crecy' }] },
  { id: 'mbt11', title: 'Mongolischer Kompositbogen', content: 'Kurzer starker Bogen aus Holz, Knochen und Sehnen eignet sich fuer den Sattel. Grosse Reichweite und hohe Schussfolge im Galopp; parthischer Rueckwaertsschuss lebt in der Steppe weiter.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/11-mongol-bow.jpg', title: 'Mongolenbogen' }] },
  { id: 'mbt12', title: 'Armbrust und Pavise', content: 'Schwere Bolzen durchschlagen oft dort, wo der Bogen nachlaesst, aber Nachladen dauert. Paarweise mit Pavise traeger: einer schiesst, einer deckt - fruehe Feuergruppe.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/12-crossbow.jpg', title: 'Armbrust' }] },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-mbt-4-1-de', text: 'Was schwaechte die genuesischen Armbrueste bei Crecy?', type: 'multiple-choice', options: ['Keine Bolzen', 'Nasse Sehnen und Fehlschuesse nach Regen', 'Desertation', 'Keine Schilde'], correctAnswer: 1, explanation: 'Feuchtigkeit stoerte die Sehnen.' },
      { id: 'q-mbt-4-2-de', text: 'Staerke des mongolischen Bogens im Feld?', type: 'multiple-choice', options: ['Nur Schmuck', 'Kraft und Handhabung im Galopp', 'Ohne Schuetzen nutzbar', 'Nur Belagerung'], correctAnswer: 1, explanation: 'Er ist fuer Reiterschuetzen gebaut.' },
      { id: 'q-mbt-4-3-de', text: 'Ausgleich fuer langsame Armbrust?', type: 'multiple-choice', options: ['Ohne Ruestung kaempfen', 'Paararbeit mit Schildtraeger', 'Blindes Salvenfeuer', 'Nur Nacht'], correctAnswer: 1, explanation: 'Die Pavise schuetzt beim Nachladen.' }
    ]
  },

  { id: 'mbt13', title: 'Schweizer Gewalthaufen', content: 'Dichter Block mit 4-5 m langen Piken aehnelt antiker Phalanx, aber die Eidgenossen gehen selbst schnell vor. Mehrere Haufe im Staffelprinzip - Tempo ersetzt Feldgeschuetz.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/13-swiss-pike.jpg', title: 'Gewalthaufen' }] },
  { id: 'mbt14', title: 'Morgarten 1315', content: 'Bauern locken oesterreichische Ritter in eine enge Felsschlucht am See: kein Manoever, kein Schwung. Steine von oben, Hellebarden von unten - schwere Reiterei wird zur Zielscheibe.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/14-morgarten.jpg', title: 'Morgarten' }] },
  { id: 'mbt15', title: 'Hellebarde gegen Ritter', content: 'Axt, Spitze und Haken auf langem Schaft: runterziehen, zerschlaegen, stechen. Spezialwerkzeug gegen Panzerreiterei - aehnlich wie das Pilum eine spezielle Antwort auf eine Waffenfrage.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/15-halberd.jpg', title: 'Hellebarde' }] },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-mbt-5-1-de', text: 'Unterschied zur wartenden Phalanx?', type: 'multiple-choice', options: ['Weniger Piken', 'Aggressiver Vorstoss', 'Nur Reiterei', 'Keine Disziplin'], correctAnswer: 1, explanation: 'Die Schweizer setzen das Tempo.' },
      { id: 'q-mbt-5-2-de', text: 'Warum scheiterten die Ritter bei Morgarten?', type: 'multiple-choice', options: ['Ohne Lanzen', 'Engtal ohne Raum fuer Keil und Wendung', 'Ueberlauf', 'Seeschlacht'], correctAnswer: 1, explanation: 'Gelaende neutralisierte die Reiterei.' },
      { id: 'q-mbt-5-3-de', text: 'Drei Rollen der Hellebarde?', type: 'multiple-choice', options: ['Nur Gebet', 'Haken, Hieb, Stoss', 'Nur Wurf', 'Hornzeichen'], correctAnswer: 1, explanation: 'Allround gegen berittenen Panzer.' }
    ]
  },

  { id: 'mbt16', title: 'Keine Gefangenen', content: 'Schweizer nehmen selten Ritter gefangen - Lohn waere hoch, aber Eskorte bindet Kaempfer. Ein fliehender Feind ist verwundbarer als einer, der auf Gnade hofft. Der Ruf selbst wird zur Waffe.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/16-no-prisoners.jpg', title: 'Keine Gefangenen' }] },
  { id: 'mbt17', title: 'Tuemen und Signale', content: 'Das mongolische Heer teilt sich in Zehner, Hunderter, Tausender und Tuemen zu etwa 10 000. Fahnen, Trommeln und Hoerner ermoeglichen schnelle Verlegung grosser Teile zwischen den Fluegeln.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/17-tumen.jpg', title: 'Tuemen' }] },
  { id: 'mbt18', title: 'Scheinrueckzug', content: 'Gefaehlter Rueckzug bricht Ritterpsychologie: Verfolger lockern die Ordnung und geraten in den Kessel. Bei Liegnitz erfuhr eine Koalition genau das; die Idee ist alt wie Marathon.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/18-feigned-retreat.jpg', title: 'Scheinrueckzug' }] },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-mbt-6-1-de', text: 'Pragmatischer Grund fuer wenige Rittergefangene?', type: 'multiple-choice', options: ['Papstverbot', 'Eskorte entzieht Kaempfer der Schlacht', 'Unkenntnis von Loesegeld', 'Ritter ergeben sich nie'], correctAnswer: 1, explanation: 'Kampfkraft ist knapp.' },
      { id: 'q-mbt-6-2-de', text: 'Staerke eines Tuemen?', type: 'multiple-choice', options: ['1.000', '10.000', '50.000', '100'], correctAnswer: 1, explanation: 'Ein Tuemen ist eine Zehntausender-Einheit.' },
      { id: 'q-mbt-6-3-de', text: 'Wirkung des mongolischen Scheinrueckzugs?', type: 'multiple-choice', options: ['Feind ruht immer', 'Verfolgung zerstoert die Ordnung und oeffnet Umzingelung', 'Mongolenpferde zuerst muede', 'Kein Schuss mehr'], correctAnswer: 1, explanation: 'Die Falle braucht gelockerten Verband.' }
    ]
  },

  { id: 'mbt19', title: 'Mohi 1241', content: 'Bela IV steht zahlenmaessig ueberlegen hinter der Sajo. Subedei ueberquert nachts weiter flussabwaerts und schlaegt bei Daemmerung in den Ruecken, waehrend die Front den Fluss deckt. Verluste sind massiv.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/19-mohi.jpg', title: 'Mohi' }] },
  { id: 'mbt20', title: 'Goldene Bruecke', content: 'Bei Einkesselung lassen Mongolen oft eine Ausgangsspur offen: Sichtbare Flucht verwandelt verteidigende Ordnung in Flucht und macht den Feind verwundbarer als ein kompakter Block. Panik wirkt weiter als ein ehrenhafter Kampf.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/20-golden-bridge.jpg', title: 'Ausbruchkorridor' }] },
  { id: 'mbt21', title: 'Burg als Waffe', content: 'Wilhelm der Eroberer verteilt Burgen als Knoten - kleine Garnisonen halten ganze Regionen fest. Wie roemische Marschlager, aber permanent und aus Stein.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/21-norman-castle.jpg', title: 'Normannenburg' }] },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-mbt-7-1-de', text: 'Schluesselzug Subedeis bei Mohi?', type: 'multiple-choice', options: ['Massensturm auf Bruecke', 'Nachtuebergang und Rueckenschlag', 'Kein Kampf', 'Seeblockade'], correctAnswer: 1, explanation: 'Umgehung brach die Verteidigung.' },
      { id: 'q-mbt-7-2-de', text: 'Zweck der goldenen Bruecke?', type: 'multiple-choice', options: ['Humanitaet', 'Flucht provozieren und Ordnung aufloesen', 'Handel mit Feind', 'Wasser'], correctAnswer: 1, explanation: 'Fliehen ist leichter zu jagen als halten.' },
      { id: 'q-mbt-7-3-de', text: 'Netz normannischer Burgen?', type: 'multiple-choice', options: ['Nur Wohnung', 'Kontrollknoten gegen Aufstaende', 'Getreide fuer Kloester', 'Schutz vor Fischern'], correctAnswer: 1, explanation: 'Burgen sichern Herrschaft im Land.' }
    ]
  },

  { id: 'mbt22', title: 'Trebuchet', content: 'Grosse Trebuchets des 13. Jahrhunderts werfen Steine weit genug fuer Turmbeschuss. Edward I. bei Stirling setzte eine so gewaltige Maschine auf, dass die Verteidiger vor dem ersten Schuss kapitulierten - reine Einschuechterung.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/22-trebuchet.jpg', title: 'Trebuchet' }] },
  { id: 'mbt23', title: 'Griechisches Feuer', content: 'Byzantinisches Feuer aus Schiffsiphonen brennt auf dem Wasser; Rezeptur ist verloren. Wasser kann die Flammen paradox verstaerken. Es rettete Konstantinopel gegen arabische Flottenangriffe.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/23-greek-fire.jpg', title: 'Griechisches Feuer' }] },
  { id: 'mbt24', title: 'Unterwuehlung', content: 'Stollen unter den Turm, Stuetzen, Brand - der Graben bricht ein. Verteidiger hoeren Vibrationen auf Trommelfell oder im Wasser; Gegenstollen kaempft unter der Erde.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/24-undermining.jpg', title: 'Mine' }] },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-mbt-8-1-de', text: 'Rolle des Riesen-Trebuchets bei Stirling?', type: 'multiple-choice', options: ['Passt nicht ins Feld', 'Psychologischer Druck vor dem ersten Schuss', 'Papstverbot', 'Reitereisersatz'], correctAnswer: 1, explanation: 'Einschuechterung kann die Belagerung beenden.' },
      { id: 'q-mbt-8-2-de', text: 'Besonderheit des griechischen Feuers?', type: 'multiple-choice', options: ['Nur Land', 'Brennt auf Wasser anders als normales Feuer', 'Nur Kirchenlicht', 'Keine Flotte'], correctAnswer: 1, explanation: 'Wasser loescht es nicht zuverlaessig.' },
      { id: 'q-mbt-8-3-de', text: 'Wie fand man feindliche Minen?', type: 'multiple-choice', options: ['Nur Geruch', 'Vibration auf Membran oder Wasser', 'Gar nicht', 'Voegel'], correctAnswer: 1, explanation: 'Einfache Schwingungsmessung.' }
    ]
  },

  { id: 'mbt25', title: 'Englische Linie im Hundertjaehrigen Krieg', content: 'Bogenschuetzen in Winkelstellung, abgestiegene schwere Krieger im Zentrum, vorn Pfaehle gegen Reiterei. Der Gegner geht frontal in Pfeile oder umgeht - und trifft wieder Bogen. Franzosen waehlten oft den direkten Weg und verloren.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/25-agincourt-tactics.jpg', title: 'Azincourt' }] },
  { id: 'mbt26', title: 'Janitscharen', content: 'Osmanische Janitscharen sind eine der ersten grossen stehenden Fussregimenter Europas nach der Antike: Devshirme, Kasernen, einheitliche Ausruestung. Bei Nikopolis erledigen sie den Rest nach dem Bruch der Kreuzritterfront.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/26-janissaries.jpg', title: 'Janitscharen' }] },
  { id: 'mbt27', title: 'Terzio', content: 'Spanisches Terzio verbindet Pikeniere und Arkebusiere: Salve, Rueckzug der Schuetzen hinter die Pike, Halten der Nahkampflinie. Feuer deckt das Herankommen - ein Prinzip bis in die Neuzeit.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/27-tercio.jpg', title: 'Terzio' }] },
  {
    id: 'q9',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-mbt-9-1-de', text: 'Typisch vorn bei der englischen Linie?', type: 'multiple-choice', options: ['Nur Reiter', 'Pfaehle gegen Kavallerie, Fluegelbogenschuetzen', 'Ein grosser Keil', 'Nur Schleudern'], correctAnswer: 1, explanation: 'Pfahl und Bogen sichern die Front.' },
      { id: 'q-mbt-9-2-de', text: 'Was ist das Besondere an Janitscharen?', type: 'multiple-choice', options: ['Nur Flotte', 'Stehende Profiinfanterie nach der Antike', 'Reiterschuetzen ohne Stand', 'Ohne Waffen'], correctAnswer: 1, explanation: 'Staendige Ausbildung und Bewaffnung.' },
      { id: 'q-mbt-9-3-de', text: 'Kern der Terzio?', type: 'multiple-choice', options: ['Nur Reiterei', 'Piken plus Feuerwaffen im gleichen Verband', 'Nur Belagerungstuerme', 'Flotte plus Land'], correctAnswer: 1, explanation: 'Feuer und Spiesse halten gemeinsam.' }
    ]
  },

  { id: 'mbt28', title: 'Wagenburg', content: 'Hussiten unter Zizka ketten Wagen zu einem befestigten Lager: darin Boegen, Armbrueste, fruehe Handrohre. Reiterei prallt ab und wird aus kurzer Distanz beschossen. Zizka fuehrte blind und verlor keine Schlacht.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/28-wagenburg.jpg', title: 'Wagenburg' }] },
  { id: 'mbt29', title: 'Wiederkehrende Lehren', content: 'Pikenstoppen Reiterei - immer wieder vergessen und neu entdeckt. Fernkampf vor dem Nahkampf kannten Parther und Englaender. Scheinrueckzug bricht Ordnung - von Marathon bis zur Steppe. Die Technik wechselt, die Logik bleibt.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/29-repeated-tactics.jpg', title: 'Wiederholungen' }] },
  { id: 'mbt30', title: 'Pulver und Burgen', content: 'Gute Ruestung widersteht Kugeln noch lange nicht ueberall, aber Belagerungsgeschuetze des 15./16. Jahrhunderts sprengen Mauern in Stunden statt Jahren. Ohne haltbare Festungen bricht das feudale Verteidigungsmodell - und mit ihm vieles vom Ritterkrieg.', duration: 3, media: [{ type: 'image', url: '/media/medieval-battle-tactics/30-gunpowder-castles.jpg', title: 'Pulver' }] },
  {
    id: 'q10',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-mbt-10-1-de', text: 'Was ist eine Wagenburg?', type: 'multiple-choice', options: ['Segelschiff', 'Verschanztes Wagenlager', 'Ritterorden', 'Stadtmauer'], correctAnswer: 1, explanation: 'Mobile Hussitenfestung.' },
      { id: 'q-mbt-10-2-de', text: 'Fazit der Folie zur Wiederholung?', type: 'multiple-choice', options: ['Alles unwiederbringlich vergessen', 'Prinzipien bleiben, Technik wechselt', 'Nur China kannte Taktik', 'Mittelalter ohne Flanken'], correctAnswer: 1, explanation: 'Zyklen der Militaerlehre.' },
      { id: 'q-mbt-10-3-de', text: 'Was brachte Pulver zuerst ins Wanken?', type: 'multiple-choice', options: ['Duellkodex', 'Die lange Festungsdominanz der Burgen', 'Kompass', 'Devshirme'], correctAnswer: 1, explanation: 'Schnelles Mauerdurchschlagen aendert Strategie.' }
    ]
  }
]

export const medievalBattleTacticsFinalQuizDE: QuizBlock = {
  id: 'quiz-medieval-battle-tactics-de',
  title: 'Abschlussquiz: mittelalterliche Schlachtordnung',
  questions: [
    { id: 'q-mbt-f-1-de', text: 'Was ist die Skjaldborg dem Prinzip nach am naechsten?', type: 'multiple-choice', options: ['Reiterkeil', 'Dichte Schildfront', 'Lockerer Bogenschuetzenverband', 'Belagerungswall'], correctAnswer: 1, explanation: 'Es geht um einen geschlossenen Frontverband.' },
    { id: 'q-mbt-f-2-de', text: 'Was passiert nach dem Durchbruch mit Svinfylking?', type: 'multiple-choice', options: ['Rueckzug ins Lager', 'Wechsel zum freien Nahkampf vor dem Verband', 'Palisadenbau', 'Belagerung'], correctAnswer: 1, explanation: 'Nach dem Riss wird aus der Linie ein Nahkampf.' },
    { id: 'q-mbt-f-3-de', text: 'Warum brach die englische Linie bei Hastings?', type: 'multiple-choice', options: ['Reiter durchs Zentrum', 'Verfolgung und Aufloesen der Ordnung', 'Speermangel', 'Mongolen'], correctAnswer: 1, explanation: 'Disziplinverlust oeffnete die Front.' },
    { id: 'q-mbt-f-4-de', text: 'Was ist die Hird?', type: 'multiple-choice', options: ['Saisonmiliz', 'Staendige Soldgard', 'Wikingerflotte', 'Kaufmannsgilde'], correctAnswer: 1, explanation: 'Professionelles Kernkontingent.' },
    { id: 'q-mbt-f-5-de', text: 'Wirkung eines schweren Ritterkeils auf lose Infanterie?', type: 'multiple-choice', options: ['Schwaeche gegen Bogen', 'Die Wucht bricht die Linie', 'Immer freiwilliger Rueckzug', 'Lanzen durchschlagen nie'], correctAnswer: 1, explanation: 'Masse und Geschwindigkeit erzeugen den Bruch.' },
    { id: 'q-mbt-f-6-de', text: 'Warum griffen spaete Ritter oft frontal an?', type: 'multiple-choice', options: ['Flankenverbot der Kirche', 'Kaum Koordination fuer komplexe Manoever', 'Pferde ohne Wendung', 'Feind immer Ruecken'], correctAnswer: 1, explanation: 'Ohne klare Fuehrung ist Frontal einfacher.' },
    { id: 'q-mbt-f-7-de', text: 'Was entschied Courtrai?', type: 'multiple-choice', options: ['Gebirgsstuetzpunkt', 'Dichter Pikenverband auf Morast', 'Flotte', 'Belagerung von Paris'], correctAnswer: 1, explanation: 'Morast und Pikendichte stoppten die Reiterei.' },
    { id: 'q-mbt-f-8-de', text: 'Warum setzte man spaeter abgestiegene Ritter ein?', type: 'multiple-choice', options: ['Futter sparen', 'Ordnung der Fusslinie mit Elitekaempfern', 'Kirchenverbot fuer Pferde', 'Schwimmen'], correctAnswer: 1, explanation: 'Kompromiss Panzerung plus Formation.' },
    { id: 'q-mbt-f-9-de', text: 'Besonderheit der Ausbildung englischer Bogenschuetzen?', type: 'multiple-choice', options: ['Zwei Wochen Kurs', 'Langjahrig ab Kindheit', 'Nur Adel', 'Trainingsverbot'], correctAnswer: 1, explanation: 'Der Bogen braucht jahrelange Uebung.' },
    { id: 'q-mbt-f-10-de', text: 'Was schwaechte die genuesischen Armbrueste bei Crecy?', type: 'multiple-choice', options: ['Keine Bolzen', 'Nasse Sehnen und Fehlschuesse nach Regen', 'Desertation', 'Keine Schilde'], correctAnswer: 1, explanation: 'Feuchtigkeit stoerte die Sehnen.' },
    { id: 'q-mbt-f-11-de', text: 'Staerke des mongolischen Bogens im Feld?', type: 'multiple-choice', options: ['Nur Schmuck', 'Kraft und Handhabung im Galopp', 'Ohne Schuetzen nutzbar', 'Nur Belagerung'], correctAnswer: 1, explanation: 'Er ist fuer Reiterschuetzen gebaut.' },
    { id: 'q-mbt-f-12-de', text: 'Ausgleich fuer langsame Armbrust?', type: 'multiple-choice', options: ['Ohne Ruestung kaempfen', 'Paararbeit mit Schildtraeger', 'Blindes Salvenfeuer', 'Nur Nacht'], correctAnswer: 1, explanation: 'Die Pavise schuetzt beim Nachladen.' },
    { id: 'q-mbt-f-13-de', text: 'Unterschied zur wartenden Phalanx?', type: 'multiple-choice', options: ['Weniger Piken', 'Aggressiver Vorstoss', 'Nur Reiterei', 'Keine Disziplin'], correctAnswer: 1, explanation: 'Die Schweizer setzen das Tempo.' },
    { id: 'q-mbt-f-14-de', text: 'Warum scheiterten die Ritter bei Morgarten?', type: 'multiple-choice', options: ['Ohne Lanzen', 'Engtal ohne Raum fuer Keil und Wendung', 'Ueberlauf', 'Seeschlacht'], correctAnswer: 1, explanation: 'Gelaende neutralisierte die Reiterei.' },
    { id: 'q-mbt-f-15-de', text: 'Drei Rollen der Hellebarde?', type: 'multiple-choice', options: ['Nur Gebet', 'Haken, Hieb, Stoss', 'Nur Wurf', 'Hornzeichen'], correctAnswer: 1, explanation: 'Allround gegen berittenen Panzer.' },
    { id: 'q-mbt-f-16-de', text: 'Pragmatischer Grund fuer wenige Rittergefangene?', type: 'multiple-choice', options: ['Papstverbot', 'Eskorte entzieht Kaempfer der Schlacht', 'Unkenntnis von Loesegeld', 'Ritter ergeben sich nie'], correctAnswer: 1, explanation: 'Kampfkraft ist knapp.' },
    { id: 'q-mbt-f-17-de', text: 'Staerke eines Tuemen?', type: 'multiple-choice', options: ['1.000', '10.000', '50.000', '100'], correctAnswer: 1, explanation: 'Ein Tuemen ist eine Zehntausender-Einheit.' },
    { id: 'q-mbt-f-18-de', text: 'Wirkung des mongolischen Scheinrueckzugs?', type: 'multiple-choice', options: ['Feind ruht immer', 'Verfolgung zerstoert die Ordnung und oeffnet Umzingelung', 'Mongolenpferde zuerst muede', 'Kein Schuss mehr'], correctAnswer: 1, explanation: 'Die Falle braucht gelockerten Verband.' },
    { id: 'q-mbt-f-19-de', text: 'Schluesselzug Subedeis bei Mohi?', type: 'multiple-choice', options: ['Massensturm auf Bruecke', 'Nachtuebergang und Rueckenschlag', 'Kein Kampf', 'Seeblockade'], correctAnswer: 1, explanation: 'Umgehung brach die Verteidigung.' },
    { id: 'q-mbt-f-20-de', text: 'Zweck der goldenen Bruecke?', type: 'multiple-choice', options: ['Humanitaet', 'Flucht provozieren und Ordnung aufloesen', 'Handel mit Feind', 'Wasser'], correctAnswer: 1, explanation: 'Fliehen ist leichter zu jagen als halten.' },
    { id: 'q-mbt-f-21-de', text: 'Netz normannischer Burgen?', type: 'multiple-choice', options: ['Nur Wohnung', 'Kontrollknoten gegen Aufstaende', 'Getreide fuer Kloester', 'Schutz vor Fischern'], correctAnswer: 1, explanation: 'Burgen sichern Herrschaft im Land.' },
    { id: 'q-mbt-f-22-de', text: 'Rolle des Riesen-Trebuchets bei Stirling?', type: 'multiple-choice', options: ['Passt nicht ins Feld', 'Psychologischer Druck vor dem ersten Schuss', 'Papstverbot', 'Reitereisersatz'], correctAnswer: 1, explanation: 'Einschuechterung kann die Belagerung beenden.' },
    { id: 'q-mbt-f-23-de', text: 'Besonderheit des griechischen Feuers?', type: 'multiple-choice', options: ['Nur Land', 'Brennt auf Wasser anders als normales Feuer', 'Nur Kirchenlicht', 'Keine Flotte'], correctAnswer: 1, explanation: 'Wasser loescht es nicht zuverlaessig.' },
    { id: 'q-mbt-f-24-de', text: 'Wie fand man feindliche Minen?', type: 'multiple-choice', options: ['Nur Geruch', 'Vibration auf Membran oder Wasser', 'Gar nicht', 'Voegel'], correctAnswer: 1, explanation: 'Einfache Schwingungsmessung.' },
    { id: 'q-mbt-f-25-de', text: 'Typisch vorn bei der englischen Linie?', type: 'multiple-choice', options: ['Nur Reiter', 'Pfaehle gegen Kavallerie, Fluegelbogenschuetzen', 'Ein grosser Keil', 'Nur Schleudern'], correctAnswer: 1, explanation: 'Pfahl und Bogen sichern die Front.' },
    { id: 'q-mbt-f-26-de', text: 'Was ist das Besondere an Janitscharen?', type: 'multiple-choice', options: ['Nur Flotte', 'Stehende Profiinfanterie nach der Antike', 'Reiterschuetzen ohne Stand', 'Ohne Waffen'], correctAnswer: 1, explanation: 'Staendige Ausbildung und Bewaffnung.' },
    { id: 'q-mbt-f-27-de', text: 'Kern der Terzio?', type: 'multiple-choice', options: ['Nur Reiterei', 'Piken plus Feuerwaffen im gleichen Verband', 'Nur Belagerungstuerme', 'Flotte plus Land'], correctAnswer: 1, explanation: 'Feuer und Spiesse halten gemeinsam.' },
    { id: 'q-mbt-f-28-de', text: 'Was ist eine Wagenburg?', type: 'multiple-choice', options: ['Segelschiff', 'Verschanztes Wagenlager', 'Ritterorden', 'Stadtmauer'], correctAnswer: 1, explanation: 'Mobile Hussitenfestung.' },
    { id: 'q-mbt-f-29-de', text: 'Fazit der Folie zur Wiederholung?', type: 'multiple-choice', options: ['Alles unwiederbringlich vergessen', 'Prinzipien bleiben, Technik wechselt', 'Nur China kannte Taktik', 'Mittelalter ohne Flanken'], correctAnswer: 1, explanation: 'Zyklen der Militaerlehre.' },
    { id: 'q-mbt-f-30-de', text: 'Was brachte Pulver zuerst ins Wanken?', type: 'multiple-choice', options: ['Duellkodex', 'Die lange Festungsdominanz der Burgen', 'Kompass', 'Devshirme'], correctAnswer: 1, explanation: 'Schnelles Mauerdurchschlagen aendert Strategie.' }
  ]
}
