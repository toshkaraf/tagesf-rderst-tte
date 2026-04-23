import { Slide, QuizBlock } from '../types/session'

export const ancientBattleTacticsSlidesDE: Slide[] = [
  { id: 'abt1', title: 'Streitwagen im Neuen Reich', content: 'Im Neuen Reich wurden leichte Streitwagen zum Kern der aegyptischen Armee. Die Besatzung schoss aus Distanz und stoerte so die feindliche Infanterie vor dem Nahkampf. In Huegeln, Waeldern und schwerem Boden war diese Taktik aber deutlich schwaecher.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/01-egypt-chariots.jpg', title: 'Aegyptische Streitwagen' }] },
  { id: 'abt2', title: 'Ramses II und Kreisverteidigung', content: 'In der Schlacht bei Kadesch standen die Truppen von Ramses II unter starkem Druck. Die Aegypter bildeten einen dichten Kreis mit Speeren nach aussen, um nicht durchbrochen zu werden. So konnten sie halten, bis Verstaerkung eintraf.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/02-kadesh-defense.jpg', title: 'Kadesch' }] },
  { id: 'abt3', title: 'Die Phalanx von Lagasch', content: 'Auf der Geierstele sind Krieger aus Lagasch Schulter an Schulter mit grossen Schilden und Speeren dargestellt. Das ist ein sehr fruehes Beispiel einer dichten Frontformation fuer den direkten Stoss. Spaeter entwickelten die Griechen ein aehnliches Prinzip weiter.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/03-lagash-phalanx.jpg', title: 'Lagasch-Formation' }] },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-1-1-de', text: 'Was war die Hauptschwaeche aegyptischer Streitwagen?', type: 'multiple-choice', options: ['Zu wenig Pferde', 'Abhaengigkeit von ebenem Gelaende', 'Zu kurze Boegen', 'Nur Nachtkampf moeglich'], correctAnswer: 1, explanation: 'Sie funktionierten am besten auf flachem Boden.' },
      { id: 'q-abt-1-2-de', text: 'Welche Verteidigung nutzten die Aegypter bei Kadesch?', type: 'multiple-choice', options: ['Scheinrueckzug', 'Dichter Kreis mit Speeren nach aussen', 'Keilangriff', 'Waldhinterhalt'], correctAnswer: 1, explanation: 'So hielten sie dem Druck stand.' },
      { id: 'q-abt-1-3-de', text: 'Welche Quelle zeigt die fruehe Lagasch-Formation?', type: 'multiple-choice', options: ['Rosetta-Stein', 'Geierstele', 'Tacitus', 'Xenophon'], correctAnswer: 1, explanation: 'Die Geierstele zeigt die dichte Front.' }
    ]
  },

  { id: 'abt4', title: 'Hethitischer Durchbruch', content: 'Hethitische Streitwagen waren oft schwerer besetzt und fuer den Nahstoss gedacht. Nach dem Durchbruch wurde sofort Infanterie nachgefuehrt, um die Luecke auszunutzen. Das war frueh eine Form von Durchbruch und Ausnutzung.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/04-hittite-breakthrough.jpg', title: 'Hethiter' }] },
  { id: 'abt5', title: 'Klassische Hopliten-Phalanx', content: 'Die Hopliten-Phalanx basierte auf dichter Ordnung, Schilddeckung und gemeinsamem Druck nach vorn. Frontal war sie besonders auf ebenem Boden sehr stark. Auf unebenem Gelaende und an offenen Flanken war sie jedoch verwundbar.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/05-hoplite-phalanx.jpg', title: 'Hopliten' }] },
  { id: 'abt6', title: 'Marathon und starke Fluegel', content: 'Miltiades schwaechte das Zentrum absichtlich und verstaerkte die Fluegel. Die Perser drueckten in der Mitte durch und gerieten dadurch tiefer in die Stellung der Griechen. Danach schlossen die Fluegel nach innen und umfassten den Gegner.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/06-marathon-miltiades.jpg', title: 'Marathon' }] },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-2-1-de', text: 'Was taten die Hethiter nach dem Streitwagenangriff?', type: 'multiple-choice', options: ['Rueckzug', 'Infanterie in die Luecke schicken', 'Belagerung starten', 'Lager bauen'], correctAnswer: 1, explanation: 'Durchbruch wurde sofort ausgenutzt.' },
      { id: 'q-abt-2-2-de', text: 'Staerkste Eigenschaft der Hopliten-Phalanx?', type: 'multiple-choice', options: ['Waldkampf', 'Frontaler Druck im dichten Verband', 'Unsichtbarkeit fuer Pfeile', 'Unabhaengig von Flanken'], correctAnswer: 1, explanation: 'Sie war frontal besonders stark.' },
      { id: 'q-abt-2-3-de', text: 'Was machte Miltiades bei Marathon?', type: 'multiple-choice', options: ['Zentrum verstaerken', 'Zentrum schwaechen, Fluegel verstaerken', 'Nur Reiterei einsetzen', 'In die Stadt gehen'], correctAnswer: 1, explanation: 'So gelang die Umfassung.' }
    ]
  },

  { id: 'abt7', title: 'Spartanische Disziplin', content: 'Sparta erfand keine neue Wunderformation, aber perfektionierte Disziplin auf professionellem Niveau. Die Spartiaten lernten von Kindheit an Ordnung, Umformierung und geordneten Rueckzug. Darum blieb ihre Formation auch in Krisen stabil.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/07-spartan-discipline.jpg', title: 'Sparta' }] },
  { id: 'abt8', title: 'Philipp II und die Sarissa', content: 'Philipp II verlaengerte den Speer zur Sarissa und veraenderte damit die Tiefe der Formation. Vordere Reihen hielten Spitzen waagerecht, hintere hoeher, so entstand ein mehrschichtiger Schutz. Ein direkter Angriff auf die makedonische Phalanx wurde dadurch viel schwerer.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/08-sarissa-reform.jpg', title: 'Sarissa' }] },
  { id: 'abt9', title: 'Der Kavallerieschlag Alexanders', content: 'Alexander machte die schwere Reiterei zum entscheidenden Angriffswaffen. Waehrend die Infanterie den Gegner frontal band, suchte die Reiterei die schwache Nahtstelle im Verband. Ein schneller Stoss dort konnte die ganze feindliche Ordnung brechen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/09-alexander-cavalry.jpg', title: 'Alexanders Reiterei' }] },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-3-1-de', text: 'Worin lag Spartas Hauptstaerke?', type: 'multiple-choice', options: ['Elefanten', 'Dauerhafte Disziplin und Ausbildung', 'Riesenflotte', 'Belagerungstuerme'], correctAnswer: 1, explanation: 'Sparta war vor allem durch Ordnung stark.' },
      { id: 'q-abt-3-2-de', text: 'Was veraenderte die Sarissa?', type: 'multiple-choice', options: ['Machte die Formation kuerzer', 'Verstaerkte die Frontverteidigung', 'Schaffte Infanterie ab', 'Fuehrte Guerillakrieg ein'], correctAnswer: 1, explanation: 'Die lange Pike erschwerte Frontalangriffe.' },
      { id: 'q-abt-3-3-de', text: 'Wohin schlug Alexander mit der Reiterei?', type: 'multiple-choice', options: ['Ins Schildzentrum', 'In die schwache Nahtstelle', 'Nur auf den Tross', 'Auf eigene Truppen'], correctAnswer: 1, explanation: 'Er suchte den Bruchpunkt im Verband.' }
    ]
  },

  { id: 'abt10', title: 'Hammer und Amboss', content: 'Die makedonische Phalanx war der Amboss und band den Gegner von vorn. Die Reiterei war der Hammer, umging den Feind und traf Flanke oder Ruecken. Die Idee war klar, aber die Ausfuehrung brauchte sehr genaue Koordination und Timing.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/10-hammer-anvil.jpg', title: 'Hammer und Amboss' }] },
  { id: 'abt11', title: 'Manipularordnung Roms', content: 'Die Roemer gaben den starren Block auf und teilten die Legion in Manipel. Drei Linien konnten sich im Kampf durch Zwischenraeume abloesen. Das brachte den Roemern besonders auf schwierigem Gelaende mehr Flexibilitaet.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/11-roman-maniples.jpg', title: 'Manipel' }] },
  { id: 'abt12', title: 'Das Pilum als Werkzeug', content: 'Vor dem Nahkampf warf der Legionaer das Pilum, um den Gegner zu stoeren. Die schwere Spitze blieb oft im Schild stecken und machte ihn unhandlich. Danach gingen die Roemer schnell mit dem Gladius in den Nahkampf.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/12-pilum.jpg', title: 'Pilum' }] },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-4-1-de', text: 'Wer war im Modell Hammer-und-Amboss der "Hammer"?', type: 'multiple-choice', options: ['Bogenschuetzen', 'Reiterei', 'Ingenieure', 'Flotte'], correctAnswer: 1, explanation: 'Der Umgehungsstoss kam von der Reiterei.' },
      { id: 'q-abt-4-2-de', text: 'Was war typisch fuer die manipularische Ordnung?', type: 'multiple-choice', options: ['Keine Reserven', 'Ablaufende Linienrotation', 'Nur Reiterkampf', 'Starre Gesamtfront'], correctAnswer: 1, explanation: 'Manipel ermoeglichten flexible Wechsel.' },
      { id: 'q-abt-4-3-de', text: 'Wozu diente das Pilum vor dem Nahkampf?', type: 'multiple-choice', options: ['Signal geben', 'Schild des Gegners unbrauchbar machen', 'Lager anzenden', 'Jagd'], correctAnswer: 1, explanation: 'Der Gegner sollte im Nahkampf schlechter geschuetzt sein.' }
    ]
  },

  { id: 'abt13', title: 'Zama als Gegentaktik', content: 'Scipio analysierte Hannibals starke Methoden und bereitete eine klare Gegenloesung vor. Gegen die Elefanten liess er Gassen offen, damit der Hauptstoss verpuffte. Danach gingen die Roemer unter besseren Bedingungen zum Gegenangriff ueber.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/13-zama.jpg', title: 'Zama' }] },
  { id: 'abt14', title: 'Kohortenreform des Marius', content: 'Marius ersetzte kleinere Gefechtseinheiten durch groessere Kohorten. Dadurch wurde das Fuehren der Legion im schwierigen Kampf einfacher und sicherer. Gleichzeitig verfestigte sich das Heer als professionelles System mit langer Dienstzeit.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/14-marian-reform.jpg', title: 'Marius-Reform' }] },
  { id: 'abt15', title: 'Testudo', content: 'In Belagerungen schlossen Legionaere Schilde oben und seitlich zu einem beweglichen Panzer. So sanken Verluste durch Pfeile, Steine und Wurfgeschosse deutlich. Die Formation war langsam, aber beim Anmarsch auf Mauern sehr wirksam.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/15-testudo.jpg', title: 'Testudo' }] },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-5-1-de', text: 'Wie neutralisierte Scipio die Elefanten bei Zama?', type: 'multiple-choice', options: ['Wagen davorstellen', 'Gassen in der Front offen lassen', 'Armee verstecken', 'Nur nachts angreifen'], correctAnswer: 1, explanation: 'Die Elefanten liefen durch offene Korridore.' },
      { id: 'q-abt-5-2-de', text: 'Wirkung der Kohortenreform?', type: 'multiple-choice', options: ['Schlechteres Kommando', 'Einfacheres Fuehren groesserer Einheiten', 'Disziplin abgeschafft', 'Infanterie ersetzt'], correctAnswer: 1, explanation: 'Kohorten erleichterten die Gefechtsfuehrung.' },
      { id: 'q-abt-5-3-de', text: 'Wo war die Testudo besonders nuetzlich?', type: 'multiple-choice', options: ['Seeschlacht', 'Belagerung', 'Nur Reiterangriff', 'Hinterhalt'], correctAnswer: 1, explanation: 'Vor allem beim Anmarsch auf Mauern.' }
    ]
  },

  { id: 'abt16', title: 'Roemische Feldingenieurkunst', content: 'Die Roemer machten Ingenieurarbeit zu einem festen Teil jeder Kampagne. Selbst auf dem Marsch baute die Legion ein befestigtes Lager mit Graben, Wall und Palisade. Das senkte das Risiko von Ueberraschungsangriffen und stabilisierte das Heer.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/16-roman-camp.jpg', title: 'Roemisches Lager' }] },
  { id: 'abt17', title: 'Cannae und Einkesselung', content: 'Bei Cannae hielt Hannibal die Mitte bewusst flexibel und liess sie langsam weichen. Die Roemer drangen tief ein und verloren Raum zum Manoevrieren. Dann schlossen Fluegel und Reiterei den Ring der Einkesselung.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/17-cannae.jpg', title: 'Cannae' }] },
  { id: 'abt18', title: 'Kriegselefanten und Panik', content: 'Kriegselefanten wirkten nicht nur physisch, sondern vor allem psychologisch auf Reiterei und Infanterie. Pferde gerieten oft schon ohne direkten Kontakt in Panik und brachen die Ordnung. Ein verunsicherter Elefant konnte aber genauso die eigenen Reihen zerstoeren.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/18-war-elephants.jpg', title: 'Kriegselefanten' }] },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-6-1-de', text: 'Was bauten die Roemer selbst im Marsch?', type: 'multiple-choice', options: ['Tempel', 'Befestigtes Lager', 'Triumphbogen', 'Theater'], correctAnswer: 1, explanation: 'Das Lager war Standard und Schutz zugleich.' },
      { id: 'q-abt-6-2-de', text: 'Was erreichte Hannibal bei Cannae?', type: 'multiple-choice', options: ['Durchbruch zum Meer', 'Doppelte Einkesselung', 'Rueckzug ohne Kampf', 'Unentschieden'], correctAnswer: 1, explanation: 'Cannae gilt als Musterbeispiel der Einkesselung.' },
      { id: 'q-abt-6-3-de', text: 'Warum waren Kriegselefanten riskant?', type: 'multiple-choice', options: ['Sie fuerchteten kein Feuer', 'In Panik trafen sie eigene Reihen', 'Sie konnten nicht essen', 'Nur nachts nutzbar'], correctAnswer: 1, explanation: 'Kontrollverlust machte sie fuer alle gefaehrlich.' }
    ]
  },

  { id: 'abt19', title: 'Die persischen Unsterblichen', content: 'Die persische Garde der Unsterblichen hielt ihre feste Staerke von 10.000 Soldaten. Ausfaelle wurden sofort ersetzt, dadurch blieb der Verband stabil und prestigereich. Solche Elitekraefte wurden oft fuer den entscheidenden Moment aufgehoben.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/19-immortals.jpg', title: 'Unsterbliche' }] },
  { id: 'abt20', title: 'Persische Bogenschuetzen', content: 'Das persische Heer setzte stark auf leichte Bogenschuetzen in lockerer Ordnung. So konnte man beweglich bleiben, Distanz halten und weniger geordnete Gegner ermueden. Gegen eine dichte und entschlossene Phalanx war diese Methode deutlich weniger wirksam.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/20-persian-archers.jpg', title: 'Persische Bogenschuetzen' }] },
  { id: 'abt21', title: 'Indische Chaturanga', content: 'Die indische Lehre Chaturanga teilte das Heer in vier Hauptteile: Elefanten, Streitwagen, Reiterei und Infanterie. Jede Truppengattung hatte eine eigene taktische Aufgabe und Einsatzweise. Dieses System wirkte spaeter sogar auf die Symbolik des Schachspiels.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/21-chaturanga.jpg', title: 'Chaturanga' }] },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-7-1-de', text: 'Mit welcher festen Zahl waren die Unsterblichen verbunden?', type: 'multiple-choice', options: ['1.000', '10.000', '25.000', '50.000'], correctAnswer: 1, explanation: 'Die Sollstaerke war 10.000.' },
      { id: 'q-abt-7-2-de', text: 'Gegen wen war die lockere persische Bogenlinie schwaecher?', type: 'multiple-choice', options: ['Ungeordnete Truppen', 'Dichte Phalanx', 'Tross', 'Spaher'], correctAnswer: 1, explanation: 'Eine geschlossene Phalanx reduzierte den Nutzen des Fernkampfs.' },
      { id: 'q-abt-7-3-de', text: 'Wie viele Teile hat Chaturanga?', type: 'multiple-choice', options: ['Zwei', 'Drei', 'Vier', 'Fuenf'], correctAnswer: 2, explanation: 'Elefanten, Streitwagen, Reiterei, Infanterie.' }
    ]
  },

  { id: 'abt22', title: 'Maurya: Groesse als Machtfaktor', content: 'In der Maurya-Zeit wurde die reine Groesse des Heeres zu einem strategischen Faktor. Ein Gegner musste mit einer Kraft rechnen, die kaum schnell zu besiegen war. So wirkte Masse nicht nur im Kampf, sondern schon vorher als Abschreckung.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/22-mauryan-army.jpg', title: 'Maurya-Heer' }] },
  { id: 'abt23', title: 'Der parthische Schuss', content: 'Die parthische Reiterei taeuschte oft Rueckzug vor und lockte den Gegner in die Verfolgung. Im richtigen Moment drehten sich die Reiter im Sattel und schossen rueckwaerts im Galopp. Diese Methode traf besonders schwere und langsamere Truppen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/23-parthian-shot.jpg', title: 'Parthischer Schuss' }] },
  { id: 'abt24', title: 'Skythische Taktik der verbrannten Erde', content: 'Die Skythen vermieden die grosse Entscheidungsschlacht auf guenstigem Feld fuer den Feind. Sie wichen in die Steppe aus, nahmen Vieh mit und entzogen dem Gegner Versorgung. Wenn der Feind erschoepft war, griffen sie gezielt seine schwachen Teile an.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/24-scythian-tactics.jpg', title: 'Skythische Taktik' }] },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-8-1-de', text: 'Welche Wirkung hatte die riesige Maurya-Armee?', type: 'multiple-choice', options: ['Nur hoehere Steuern', 'Strategische Abschreckung', 'Nur Seekrieg', 'Keine Diplomatie'], correctAnswer: 1, explanation: 'Allein die Groesse wirkte einschuechternd.' },
      { id: 'q-abt-8-2-de', text: 'Was ist der parthische Schuss?', type: 'multiple-choice', options: ['Schuss vom Turm', 'Rueckwaerts schiessen im Scheinrueckzug', 'Salve vom Schiff', 'Nahwurf mit Speer'], correctAnswer: 1, explanation: 'Klassische Reitertaktik der Parther.' },
      { id: 'q-abt-8-3-de', text: 'Kern der skythischen verbrannten Erde?', type: 'multiple-choice', options: ['Festungen stuermen', 'Versorgung entziehen bis zur Erschoepfung', 'Mauerbau', 'Seeblockade'], correctAnswer: 1, explanation: 'Der Gegner sollte ohne Ressourcen zusammenbrechen.' }
    ]
  },

  { id: 'abt25', title: 'Sunzi und Stratagemen', content: 'In der chinesischen Kriegskunst galt der Sieg mit moeglichst kleinen Verlusten als Ziel. Taeuschung, Aufklaerung, Desinformation und Druck auf den Willen des Gegners waren vollwertige Mittel. Das Ideal war, die Kampagne zu gewinnen, ohne eine lange Vernichtungsschlacht zu brauchen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/25-sun-tzu.jpg', title: 'Sunzi' }] },
  { id: 'abt26', title: 'Chinesische Armbrustreihen', content: 'In der Zeit der Streitenden Reiche nutzte China oft Armbrustreihen mit Rotationsprinzip. Eine Linie schoss, die zweite lud nach, die dritte bereitete den Wechsel vor. So entstand fast ein dauernder Bolzenstrom auf die gegnerische Front.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/26-crossbow-lines.jpg', title: 'Armbrustreihen' }] },
  { id: 'abt27', title: 'Numidische leichte Reiterei', content: 'Die Numidier setzten auf Tempo, Beweglichkeit und dauernden Druck auf den Gegner. Sie naeherten sich, warfen Speere und zogen sich sofort wieder zurueck. Diese Reiterei war besonders stark beim Ermueden und Verfolgen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/27-numidian-cavalry.jpg', title: 'Numidische Reiter' }] },
  {
    id: 'q9',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-9-1-de', text: 'Welches Ziel betonte Sunzi?', type: 'multiple-choice', options: ['Sieg ohne Aufklaerung', 'Sieg mit wenig Verlusten und durch List', 'Nur Nachtangriffe', 'Kein Manoever'], correctAnswer: 1, explanation: 'List und Effizienz standen im Zentrum.' },
      { id: 'q-abt-9-2-de', text: 'Was brachte die Rotation der Armbrustreihen?', type: 'multiple-choice', options: ['Feuerpausen', 'Fast ununterbrochenes Feuer', 'Nur Lagerverteidigung', 'Signal zum Rueckzug'], correctAnswer: 1, explanation: 'Wechselnde Reihen hielten den Druck konstant.' },
      { id: 'q-abt-9-3-de', text: 'Wie kaempfte numidische Reiterei?', type: 'multiple-choice', options: ['Frontal mit schwerer Lanze', 'Manoever, Speerwurf, Rueckzug', 'Ohne Kampf nur Aufklaerung', 'Nur Mauersturm'], correctAnswer: 1, explanation: 'Ihre Staerke war Beweglichkeit.' }
    ]
  },

  { id: 'abt28', title: 'Keltisch-germanischer Keil', content: 'Kelten und Germanen nutzten Laerm, Kriegsschreie und auffaellige Wirkung als psychologischen Angriff. Der Keil buendelte die Kraft auf einen Punkt der Front. Wenn der Gegner in den ersten Minuten schwankte, konnte seine Ordnung sehr schnell brechen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/28-celtic-germanic-wedge.jpg', title: 'Keilangriff' }] },
  { id: 'abt29', title: 'Teutoburger Wald', content: 'Arminius zwang die Roemer in enges und bewaldetes Gelaende, wo Legionen ihre Ordnung kaum entfalten konnten. Angriffe aus mehreren Hinterhalten unterbrachen staendig jeden Versuch, den Verband neu zu bilden. Dadurch wurden die taktischen Staerken Roms fast ganz neutralisiert.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/29-teutoburg-forest.jpg', title: 'Teutoburger Wald' }] },
  { id: 'abt30', title: 'Japan in der Yayoi-Zeit', content: 'Fruehe Kriege in Japan behielten lange Elemente des rituellen Duells zwischen Fuehrern. Mit staerkeren Kontakten zum Kontinent begann der Uebergang zu groesserer, organisierter Infanterie. Damit wandelte sich das Kriegsprinzip schrittweise von persoenlicher Tapferkeit zu Formation und Gruppenfuehrung.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/30-yayoi-warfare.jpg', title: 'Yayoi-Kriegsfuehrung' }] },
  {
    id: 'q10',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-10-1-de', text: 'Worauf beruhte die Wirkung des Keils?', type: 'multiple-choice', options: ['Nur schwere Ruestung', 'Psychoschock und Punktangriff', 'Belagerungstechnik', 'Seehilfe'], correctAnswer: 1, explanation: 'Druck auf einen Punkt und Schockeffekt.' },
      { id: 'q-abt-10-2-de', text: 'Warum verloren Legionen im Teutoburger Wald ihre Staerke?', type: 'multiple-choice', options: ['Keine Boegen', 'Wald und Hinterhalte nahmen Ordnung und Raum', 'Schildverbot', 'Hunger in Rom'], correctAnswer: 1, explanation: 'Arminius nahm ihnen Formationsvorteile.' },
      { id: 'q-abt-10-3-de', text: 'Was kennzeichnet den Wandel in der Yayoi-Zeit?', type: 'multiple-choice', options: ['Von Reiterei zu Flotte', 'Von Duellen zu organisierter Infanterie', 'Von Fussvolk zu Elefanten', 'Von Bogen zu Kanonen'], correctAnswer: 1, explanation: 'Der Krieg wurde gruppenorientierter.' }
    ]
  }
]

export const ancientBattleTacticsFinalQuizDE: QuizBlock = {
  id: 'quiz-ancient-battle-tactics-de',
  title: 'Abschlussquiz: Schlachtordnungen der Antike',
  questions: [
    { id: 'q-abt-f-1-de', text: 'Hauptschwaeche aegyptischer Streitwagen?', type: 'multiple-choice', options: ['Pferdemangel', 'Abhaengigkeit von ebenem Boden', 'Kurze Boegen', 'Nur Nachtkampf'], correctAnswer: 1, explanation: 'Sie waren vor allem auf flachem Gelaende stark.' },
    { id: 'q-abt-f-2-de', text: 'Verteidigung bei Kadesch?', type: 'multiple-choice', options: ['Scheinrueckzug', 'Dichter Speerkreis', 'Keil', 'Waldhinterhalt'], correctAnswer: 1, explanation: 'Der Kreis stabilisierte die Front.' },
    { id: 'q-abt-f-3-de', text: 'Quelle der Lagasch-Formation?', type: 'multiple-choice', options: ['Rosetta', 'Geierstele', 'Tacitus', 'Xenophon'], correctAnswer: 1, explanation: 'Die Geierstele zeigt die Formation.' },
    { id: 'q-abt-f-4-de', text: 'Hethitische Folge nach dem Wagenangriff?', type: 'multiple-choice', options: ['Rueckzug', 'Infanterie nachfuehren', 'Belagern', 'Lager bauen'], correctAnswer: 1, explanation: 'Durchbruch wurde sofort ausgenutzt.' },
    { id: 'q-abt-f-5-de', text: 'Staerke der Hopliten-Phalanx?', type: 'multiple-choice', options: ['Waldkampf', 'Frontaldruck', 'Unsichtbar fuer Pfeile', 'Flankenunabhaengig'], correctAnswer: 1, explanation: 'Frontal war sie stark.' },
    { id: 'q-abt-f-6-de', text: 'Miltiades bei Marathon?', type: 'multiple-choice', options: ['Zentrum staerken', 'Zentrum schwaechen, Fluegel staerken', 'Nur Reiter', 'In Stadt bleiben'], correctAnswer: 1, explanation: 'Das ermöglichte die Umfassung.' },
    { id: 'q-abt-f-7-de', text: 'Spartas wichtigste Staerke?', type: 'multiple-choice', options: ['Elefanten', 'Disziplin und Ausbildung', 'Flotte', 'Belagerungstuerme'], correctAnswer: 1, explanation: 'Strenge Ausbildung war zentral.' },
    { id: 'q-abt-f-8-de', text: 'Wirkung der Sarissa?', type: 'multiple-choice', options: ['Kuerzere Formation', 'Starke Frontbarriere', 'Infanterie weg', 'Guerilla'], correctAnswer: 1, explanation: 'Die Front wurde schwerer anzugreifen.' },
    { id: 'q-abt-f-9-de', text: 'Alexanders Reiterschlag traf meist ...', type: 'multiple-choice', options: ['Schildzentrum', 'Nahtstelle im Verband', 'Nur Tross', 'Eigene Linien'], correctAnswer: 1, explanation: 'Er suchte den schwachen Verbindungspunkt.' },
    { id: 'q-abt-f-10-de', text: 'Im Modell Hammer-und-Amboss war der Hammer ...', type: 'multiple-choice', options: ['Bogenschuetzen', 'Reiterei', 'Ingenieure', 'Flotte'], correctAnswer: 1, explanation: 'Die Reiterei setzte den Umgehungsstoss.' },
    { id: 'q-abt-f-11-de', text: 'Kern der manipularischen Ordnung?', type: 'multiple-choice', options: ['Keine Reserven', 'Rotierende Linien', 'Nur Reiterkampf', 'Starre Front'], correctAnswer: 1, explanation: 'Linien konnten sich im Kampf abloesen.' },
    { id: 'q-abt-f-12-de', text: 'Pilum vor Nahkampf - warum?', type: 'multiple-choice', options: ['Signal', 'Schild unbrauchbar machen', 'Lagerbrand', 'Jagd'], correctAnswer: 1, explanation: 'Der Gegner verlor Schildvorteil.' },
    { id: 'q-abt-f-13-de', text: 'Scipios Loesung gegen Elefanten?', type: 'multiple-choice', options: ['Wagenfront', 'Offene Gassen', 'Verstecken', 'Nachtangriff'], correctAnswer: 1, explanation: 'Die Elefanten wurden durchgeleitet.' },
    { id: 'q-abt-f-14-de', text: 'Kohortenreform - Effekt?', type: 'multiple-choice', options: ['Schlechteres Kommando', 'Einfacheres Führen', 'Keine Disziplin', 'Infanterie ersetzt'], correctAnswer: 1, explanation: 'Groessere Einheiten waren leichter zu steuern.' },
    { id: 'q-abt-f-15-de', text: 'Testudo war besonders fuer ...', type: 'multiple-choice', options: ['Seeschlacht', 'Belagerung', 'Reitersturm', 'Hinterhalt'], correctAnswer: 1, explanation: 'Sie schuetze beim Maueranlauf.' },
    { id: 'q-abt-f-16-de', text: 'Roemer bauten auf Marsch regelmaessig ...', type: 'multiple-choice', options: ['Tempel', 'Befestigte Lager', 'Bogen', 'Theater'], correctAnswer: 1, explanation: 'Das Lager war Standard.' },
    { id: 'q-abt-f-17-de', text: 'Cannae steht fuer ...', type: 'multiple-choice', options: ['Seesieg', 'Doppelte Einkesselung', 'Rueckzug', 'Unentschieden'], correctAnswer: 1, explanation: 'Ein Klassiker der Umfassung.' },
    { id: 'q-abt-f-18-de', text: 'Risiko bei Kriegselefanten?', type: 'multiple-choice', options: ['Feuerfest', 'In Panik gegen eigene Truppen', 'Kein Futter', 'Nur nachts einsetzbar'], correctAnswer: 1, explanation: 'Kontrollverlust machte sie gefaehrlich.' },
    { id: 'q-abt-f-19-de', text: 'Zahl der Unsterblichen?', type: 'multiple-choice', options: ['1.000', '10.000', '25.000', '50.000'], correctAnswer: 1, explanation: 'Die Sollstaerke blieb konstant.' },
    { id: 'q-abt-f-20-de', text: 'Persische lockere Bogenordnung war schwaecher gegen ...', type: 'multiple-choice', options: ['Ungeordnete Gegner', 'Dichte Phalanx', 'Tross', 'Spaeher'], correctAnswer: 1, explanation: 'Geschlossene Formationen minderten den Effekt.' },
    { id: 'q-abt-f-21-de', text: 'Chaturanga hat wie viele Teile?', type: 'multiple-choice', options: ['2', '3', '4', '5'], correctAnswer: 2, explanation: 'Vier Truppengattungen.' },
    { id: 'q-abt-f-22-de', text: 'Groesse der Maurya-Armee wirkte als ...', type: 'multiple-choice', options: ['Nur Steuerlast', 'Abschreckung', 'Nur Seekrieg', 'Diplomatieverzicht'], correctAnswer: 1, explanation: 'Masse konnte schon vor dem Kampf wirken.' },
    { id: 'q-abt-f-23-de', text: 'Parthischer Schuss bedeutet ...', type: 'multiple-choice', options: ['Turmschuss', 'Rueckwaertsschuss beim Scheinrueckzug', 'Schiffssalve', 'Speerwurf im Nahkampf'], correctAnswer: 1, explanation: 'Typische Reitertaktik der Parther.' },
    { id: 'q-abt-f-24-de', text: 'Verbrannte Erde der Skythen?', type: 'multiple-choice', options: ['Festungssturm', 'Versorgung entziehen bis Erschoepfung', 'Mauerbau', 'Seeblockade'], correctAnswer: 1, explanation: 'Der Gegner sollte ausgehungert werden.' },
    { id: 'q-abt-f-25-de', text: 'Sunzi betonte ...', type: 'multiple-choice', options: ['Sieg ohne Aufklaerung', 'Sieg mit List und geringen Verlusten', 'Nur Nachtkampf', 'Kein Manoever'], correctAnswer: 1, explanation: 'Effizienz und Tauschung waren zentral.' },
    { id: 'q-abt-f-26-de', text: 'Rotation der Armbrustreihen brachte ...', type: 'multiple-choice', options: ['Pausen', 'Nahezu Dauerfeuer', 'Nur Lagerverteidigung', 'Rueckzugssignal'], correctAnswer: 1, explanation: 'Ein Teil schoss, ein Teil lud nach.' },
    { id: 'q-abt-f-27-de', text: 'Numidische Reiterei kaempfte vor allem mit ...', type: 'multiple-choice', options: ['Frontalstoss', 'Manoever und Speerwurf', 'Mauersturm', 'Nur Aufklaerung'], correctAnswer: 1, explanation: 'Ihre Staerke war Beweglichkeit.' },
    { id: 'q-abt-f-28-de', text: 'Wirkung des germanisch-keltischen Keils?', type: 'multiple-choice', options: ['Nur Ruestung', 'Psychodruck plus Punktangriff', 'Belagerung', 'Seehilfe'], correctAnswer: 1, explanation: 'Er zielte auf schnellen Frontbruch.' },
    { id: 'q-abt-f-29-de', text: 'Warum verloren Legionen im Teutoburger Wald ihre Vorteile?', type: 'multiple-choice', options: ['Keine Boegen', 'Wald und Hinterhalte stoerten die Formation', 'Schildverbot', 'Hunger in Rom'], correctAnswer: 1, explanation: 'Arminius neutralisierte Ordnung und Raum.' },
    { id: 'q-abt-f-30-de', text: 'Yayoi-Wandel in Japan bedeutete ...', type: 'multiple-choice', options: ['Reiterei zu Flotte', 'Duellkultur zu organisierter Infanterie', 'Fussvolk zu Elefanten', 'Bogen zu Kanonen'], correctAnswer: 1, explanation: 'Kampf wurde strukturierter und massenhafter.' }
  ]
}
