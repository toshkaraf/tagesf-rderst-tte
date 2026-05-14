import { Slide, QuizBlock } from '../types/session'

export const ancientBattleTacticsSlidesDE: Slide[] = [
  { id: 'abt1', title: 'Streitwagen im Neuen Reich', content: 'Im Neuen Reich wurden leichte Streitwagen zum Kern der ägyptischen Armee. Die Besatzung schoss aus Distanz und störte so die feindliche Infanterie vor dem Nahkampf. In Hügeln, Wäldern und schwerem Boden war diese Taktik aber deutlich schwächer.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/01-egypt-chariots.jpg', title: 'Ägyptische Streitwagen' }] },
  { id: 'abt2', title: 'Ramses II und Kreisverteidigung', content: 'In der Schlacht bei Kadesch standen die Truppen von Ramses II unter starkem Druck. Die Ägypter bildeten einen dichten Kreis mit Speeren nach aussen, um nicht durchbrochen zu werden. So konnten sie halten, bis Verstärkung eintraf.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/02-kadesh-defense.jpg', title: 'Kadesch' }] },
  { id: 'abt3', title: 'Die Phalanx von Lagasch', content: 'Auf der Geierstele sind Krieger aus Lagasch Schulter an Schulter mit großen Schilden und Speeren dargestellt. Das ist ein sehr frühes Beispiel einer dichten Frontformation für den direkten Stoss. Später entwickelten die Griechen ein ähnliches Prinzip weiter.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/03-lagash-phalanx.jpg', title: 'Lagasch-Formation' }] },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-1-1-de', text: 'Was war die Hauptschwäche ägyptischer Streitwagen?', type: 'multiple-choice', options: ['Zu wenig Pferde', 'Abhängigkeit von ebenem Gelände', 'Zu kurze Bögen', 'Nur Nachtkampf möglich'], correctAnswer: 1, explanation: 'Sie funktionierten am besten auf flachem Boden.' },
      { id: 'q-abt-1-2-de', text: 'Welche Verteidigung nutzten die Ägypter bei Kadesch?', type: 'multiple-choice', options: ['Scheinrückzug', 'Dichter Kreis mit Speeren nach aussen', 'Keilangriff', 'Waldhinterhalt'], correctAnswer: 1, explanation: 'So hielten sie dem Druck stand.' },
      { id: 'q-abt-1-3-de', text: 'Welche Quelle zeigt die frühe Lagasch-Formation?', type: 'multiple-choice', options: ['Rosetta-Stein', 'Geierstele', 'Tacitus', 'Xenophon'], correctAnswer: 1, explanation: 'Die Geierstele zeigt die dichte Front.' }
    ]
  },

  { id: 'abt4', title: 'Hethitischer Durchbruch', content: 'Hethitische Streitwagen waren oft schwerer besetzt und für den Nahstoss gedacht. Nach dem Durchbruch wurde sofort Infanterie nachgeführt, um die Lücke auszunutzen. Das war früh eine Form von Durchbruch und Ausnutzung.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/04-hittite-breakthrough.jpg', title: 'Hethiter' }] },
  { id: 'abt5', title: 'Klassische Hopliten-Phalanx', content: 'Die Hopliten-Phalanx basierte auf dichter Ordnung, Schilddeckung und gemeinsamem Druck nach vorn. Frontal war sie besonders auf ebenem Boden sehr stark. Auf unebenem Gelände und an offenen Flanken war sie jedoch verwundbar.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/05-hoplite-phalanx.jpg', title: 'Hopliten' }] },
  { id: 'abt6', title: 'Marathon und starke Flügel', content: 'Miltiades schwächte das Zentrum absichtlich und verstärkte die Flügel. Die Perser drückten in der Mitte durch und gerieten dadurch tiefer in die Stellung der Griechen. Danach schlossen die Flügel nach innen und umfassten den Gegner.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/06-marathon-miltiades.jpg', title: 'Marathon' }] },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-2-1-de', text: 'Was taten die Hethiter nach dem Streitwagenangriff?', type: 'multiple-choice', options: ['Rückzug', 'Infanterie in die Lücke schicken', 'Belagerung starten', 'Lager bauen'], correctAnswer: 1, explanation: 'Durchbruch wurde sofort ausgenutzt.' },
      { id: 'q-abt-2-2-de', text: 'Stärkste Eigenschaft der Hopliten-Phalanx?', type: 'multiple-choice', options: ['Waldkampf', 'Frontaler Druck im dichten Verband', 'Unsichtbarkeit für Pfeile', 'Unabhängig von Flanken'], correctAnswer: 1, explanation: 'Sie war frontal besonders stark.' },
      { id: 'q-abt-2-3-de', text: 'Was machte Miltiades bei Marathon?', type: 'multiple-choice', options: ['Zentrum verstärken', 'Zentrum schwächen, Flügel verstärken', 'Nur Reiterei einsetzen', 'In die Stadt gehen'], correctAnswer: 1, explanation: 'So gelang die Umfassung.' }
    ]
  },

  { id: 'abt7', title: 'Spartanische Disziplin', content: 'Sparta erfand keine neue Wunderformation, aber perfektionierte Disziplin auf professionellem Niveau. Die Spartiaten lernten von Kindheit an Ordnung, Umformierung und geordneten Rückzug. Darum blieb ihre Formation auch in Krisen stabil.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/07-spartan-discipline.jpg', title: 'Sparta' }] },
  { id: 'abt8', title: 'Philipp II und die Sarissa', content: 'Philipp II verlängerte den Speer zur Sarissa und veränderte damit die Tiefe der Formation. Vordere Reihen hielten Spitzen waagerecht, hintere höher, so entstand ein mehrschichtiger Schutz. Ein direkter Angriff auf die makedonische Phalanx wurde dadurch viel schwerer.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/08-sarissa-reform.jpg', title: 'Sarissa' }] },
  { id: 'abt9', title: 'Der Kavallerieschlag Alexanders', content: 'Alexander machte die schwere Reiterei zum entscheidenden Angriffswaffen. Während die Infanterie den Gegner frontal band, suchte die Reiterei die schwache Nahtstelle im Verband. Ein schneller Stoss dort konnte die ganze feindliche Ordnung brechen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/09-alexander-cavalry.jpg', title: 'Alexanders Reiterei' }] },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-3-1-de', text: 'Worin lag Spartas Hauptstärke?', type: 'multiple-choice', options: ['Elefanten', 'Dauerhafte Disziplin und Ausbildung', 'Riesenflotte', 'Belagerungstürme'], correctAnswer: 1, explanation: 'Sparta war vor allem durch Ordnung stark.' },
      { id: 'q-abt-3-2-de', text: 'Was veränderte die Sarissa?', type: 'multiple-choice', options: ['Machte die Formation kürzer', 'Verstärkte die Frontverteidigung', 'Schaffte Infanterie ab', 'Führte Gürillakrieg ein'], correctAnswer: 1, explanation: 'Die lange Pike erschwerte Frontalangriffe.' },
      { id: 'q-abt-3-3-de', text: 'Wohin schlug Alexander mit der Reiterei?', type: 'multiple-choice', options: ['Ins Schildzentrum', 'In die schwache Nahtstelle', 'Nur auf den Tross', 'Auf eigene Truppen'], correctAnswer: 1, explanation: 'Er suchte den Bruchpunkt im Verband.' }
    ]
  },

  { id: 'abt10', title: 'Hammer und Amboss', content: 'Die makedonische Phalanx war der Amboss und band den Gegner von vorn. Die Reiterei war der Hammer, umging den Feind und traf Flanke oder Rücken. Die Idee war klar, aber die Ausführung brauchte sehr genaue Koordination und Timing.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/10-hammer-anvil.jpg', title: 'Hammer und Amboss' }] },
  { id: 'abt11', title: 'Manipularordnung Roms', content: 'Die Römer gaben den starren Block auf und teilten die Legion in Manipel. Drei Linien konnten sich im Kampf durch Zwischenräume ablösen. Das brachte den Römern besonders auf schwierigem Gelände mehr Flexibilität.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/11-roman-maniples.jpg', title: 'Manipel' }] },
  { id: 'abt12', title: 'Das Pilum als Werkzeug', content: 'Vor dem Nahkampf warf der Legionär das Pilum, um den Gegner zu stören. Die schwere Spitze blieb oft im Schild stecken und machte ihn unhandlich. Danach gingen die Römer schnell mit dem Gladius in den Nahkampf.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/12-pilum.jpg', title: 'Pilum' }] },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-4-1-de', text: 'Wer war im Modell Hammer-und-Amboss der "Hammer"?', type: 'multiple-choice', options: ['Bogenschützen', 'Reiterei', 'Ingenieure', 'Flotte'], correctAnswer: 1, explanation: 'Der Umgehungsstoss kam von der Reiterei.' },
      { id: 'q-abt-4-2-de', text: 'Was war typisch für die manipularische Ordnung?', type: 'multiple-choice', options: ['Keine Reserven', 'Ablaufende Linienrotation', 'Nur Reiterkampf', 'Starre Gesamtfront'], correctAnswer: 1, explanation: 'Manipel ermöglichten flexible Wechsel.' },
      { id: 'q-abt-4-3-de', text: 'Wozu diente das Pilum vor dem Nahkampf?', type: 'multiple-choice', options: ['Signal geben', 'Schild des Gegners unbrauchbar machen', 'Lager anzenden', 'Jagd'], correctAnswer: 1, explanation: 'Der Gegner sollte im Nahkampf schlechter geschützt sein.' }
    ]
  },

  { id: 'abt13', title: 'Zama als Gegentaktik', content: 'Scipio analysierte Hannibals starke Methoden und bereitete eine klare Gegenlösung vor. Gegen die Elefanten liess er Gassen offen, damit der Hauptstoss verpuffte. Danach gingen die Römer unter besseren Bedingungen zum Gegenangriff über.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/13-zama.jpg', title: 'Zama' }] },
  { id: 'abt14', title: 'Kohortenreform des Marius', content: 'Marius ersetzte kleinere Gefechtseinheiten durch grössere Kohorten. Dadurch wurde das Führen der Legion im schwierigen Kampf einfacher und sicherer. Gleichzeitig verfestigte sich das Heer als professionelles System mit langer Dienstzeit.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/14-marian-reform.jpg', title: 'Marius-Reform' }] },
  { id: 'abt15', title: 'Testudo', content: 'In Belagerungen schlossen Legionäre Schilde oben und seitlich zu einem beweglichen Panzer. So sanken Verluste durch Pfeile, Steine und Wurfgeschosse deutlich. Die Formation war langsam, aber beim Anmarsch auf Mauern sehr wirksam.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/15-testudo.jpg', title: 'Testudo' }] },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-5-1-de', text: 'Wie neutralisierte Scipio die Elefanten bei Zama?', type: 'multiple-choice', options: ['Wagen davorstellen', 'Gassen in der Front offen lassen', 'Armee verstecken', 'Nur nachts angreifen'], correctAnswer: 1, explanation: 'Die Elefanten liefen durch offene Korridore.' },
      { id: 'q-abt-5-2-de', text: 'Wirkung der Kohortenreform?', type: 'multiple-choice', options: ['Schlechteres Kommando', 'Einfacheres Führen grösserer Einheiten', 'Disziplin abgeschafft', 'Infanterie ersetzt'], correctAnswer: 1, explanation: 'Kohorten erleichterten die Gefechtsführung.' },
      { id: 'q-abt-5-3-de', text: 'Wo war die Testudo besonders nützlich?', type: 'multiple-choice', options: ['Seeschlacht', 'Belagerung', 'Nur Reiterangriff', 'Hinterhalt'], correctAnswer: 1, explanation: 'Vor allem beim Anmarsch auf Mauern.' }
    ]
  },

  { id: 'abt16', title: 'Römische Feldingenieurkunst', content: 'Die Römer machten Ingenieurarbeit zu einem festen Teil jeder Kampagne. Selbst auf dem Marsch baute die Legion ein befestigtes Lager mit Graben, Wall und Palisade. Das senkte das Risiko von Überraschungsangriffen und stabilisierte das Heer.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/16-roman-camp.jpg', title: 'Römisches Lager' }] },
  { id: 'abt17', title: 'Cannae und Einkesselung', content: 'Bei Cannae hielt Hannibal die Mitte bewusst flexibel und liess sie langsam weichen. Die Römer drangen tief ein und verloren Raum zum Manövrieren. Dann schlossen Flügel und Reiterei den Ring der Einkesselung.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/17-cannae.jpg', title: 'Cannae' }] },
  { id: 'abt18', title: 'Kriegselefanten und Panik', content: 'Kriegselefanten wirkten nicht nur physisch, sondern vor allem psychologisch auf Reiterei und Infanterie. Pferde gerieten oft schon ohne direkten Kontakt in Panik und brachen die Ordnung. Ein verunsicherter Elefant konnte aber genauso die eigenen Reihen zerstören.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/18-war-elephants.jpg', title: 'Kriegselefanten' }] },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-6-1-de', text: 'Was bauten die Römer selbst im Marsch?', type: 'multiple-choice', options: ['Tempel', 'Befestigtes Lager', 'Triumphbogen', 'Theater'], correctAnswer: 1, explanation: 'Das Lager war Standard und Schutz zugleich.' },
      { id: 'q-abt-6-2-de', text: 'Was erreichte Hannibal bei Cannae?', type: 'multiple-choice', options: ['Durchbruch zum Meer', 'Doppelte Einkesselung', 'Rückzug ohne Kampf', 'Unentschieden'], correctAnswer: 1, explanation: 'Cannae gilt als Musterbeispiel der Einkesselung.' },
      { id: 'q-abt-6-3-de', text: 'Warum waren Kriegselefanten riskant?', type: 'multiple-choice', options: ['Sie fürchteten kein Feuer', 'In Panik trafen sie eigene Reihen', 'Sie konnten nicht essen', 'Nur nachts nutzbar'], correctAnswer: 1, explanation: 'Kontrollverlust machte sie für alle gefährlich.' }
    ]
  },

  { id: 'abt19', title: 'Die persischen Unsterblichen', content: 'Die persische Garde der Unsterblichen hielt ihre feste Stärke von 10.000 Soldaten. Ausfälle wurden sofort ersetzt, dadurch blieb der Verband stabil und prestigereich. Solche Elitekräfte wurden oft für den entscheidenden Moment aufgehoben.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/19-immortals.jpg', title: 'Unsterbliche' }] },
  { id: 'abt20', title: 'Persische Bogenschützen', content: 'Das persische Heer setzte stark auf leichte Bogenschützen in lockerer Ordnung. So konnte man beweglich bleiben, Distanz halten und weniger geordnete Gegner ermüden. Gegen eine dichte und entschlossene Phalanx war diese Methode deutlich weniger wirksam.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/20-persian-archers.jpg', title: 'Persische Bogenschützen' }] },
  { id: 'abt21', title: 'Indische Chaturanga', content: 'Die indische Lehre Chaturanga teilte das Heer in vier Hauptteile: Elefanten, Streitwagen, Reiterei und Infanterie. Jede Truppengattung hatte eine eigene taktische Aufgabe und Einsatzweise. Dieses System wirkte später sogar auf die Symbolik des Schachspiels.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/21-chaturanga.jpg', title: 'Chaturanga' }] },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-7-1-de', text: 'Mit welcher festen Zahl waren die Unsterblichen verbunden?', type: 'multiple-choice', options: ['1.000', '10.000', '25.000', '50.000'], correctAnswer: 1, explanation: 'Die Sollstärke war 10.000.' },
      { id: 'q-abt-7-2-de', text: 'Gegen wen war die lockere persische Bogenlinie schwächer?', type: 'multiple-choice', options: ['Ungeordnete Truppen', 'Dichte Phalanx', 'Tross', 'Spaher'], correctAnswer: 1, explanation: 'Eine geschlossene Phalanx reduzierte den Nutzen des Fernkampfs.' },
      { id: 'q-abt-7-3-de', text: 'Wie viele Teile hat Chaturanga?', type: 'multiple-choice', options: ['Zwei', 'Drei', 'Vier', 'Fünf'], correctAnswer: 2, explanation: 'Elefanten, Streitwagen, Reiterei, Infanterie.' }
    ]
  },

  { id: 'abt22', title: 'Maurya: Grösse als Machtfaktor', content: 'In der Maurya-Zeit wurde die reine Grösse des Heeres zu einem strategischen Faktor. Ein Gegner musste mit einer Kraft rechnen, die kaum schnell zu besiegen war. So wirkte Masse nicht nur im Kampf, sondern schon vorher als Abschreckung.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/22-mauryan-army.jpg', title: 'Maurya-Heer' }] },
  { id: 'abt23', title: 'Der parthische Schuss', content: 'Die parthische Reiterei täuschte oft Rückzug vor und lockte den Gegner in die Verfolgung. Im richtigen Moment drehten sich die Reiter im Sattel und schossen rückwärts im Galopp. Diese Methode traf besonders schwere und langsamere Truppen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/23-parthian-shot.jpg', title: 'Parthischer Schuss' }] },
  { id: 'abt24', title: 'Skythische Taktik der verbrannten Erde', content: 'Die Skythen vermieden die große Entscheidungsschlacht auf günstigem Feld für den Feind. Sie wichen in die Steppe aus, nahmen Vieh mit und entzogen dem Gegner Versorgung. Wenn der Feind erschöpft war, griffen sie gezielt seine schwachen Teile an.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/24-scythian-tactics.jpg', title: 'Skythische Taktik' }] },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-8-1-de', text: 'Welche Wirkung hatte die riesige Maurya-Armee?', type: 'multiple-choice', options: ['Nur höhere Steuern', 'Strategische Abschreckung', 'Nur Seekrieg', 'Keine Diplomatie'], correctAnswer: 1, explanation: 'Allein die Grösse wirkte einschüchternd.' },
      { id: 'q-abt-8-2-de', text: 'Was ist der parthische Schuss?', type: 'multiple-choice', options: ['Schuss vom Turm', 'Rückwärts schiessen im Scheinrückzug', 'Salve vom Schiff', 'Nahwurf mit Speer'], correctAnswer: 1, explanation: 'Klassische Reitertaktik der Parther.' },
      { id: 'q-abt-8-3-de', text: 'Kern der skythischen verbrannten Erde?', type: 'multiple-choice', options: ['Festungen stürmen', 'Versorgung entziehen bis zur Erschöpfung', 'Mauerbau', 'Seeblockade'], correctAnswer: 1, explanation: 'Der Gegner sollte ohne Ressourcen zusammenbrechen.' }
    ]
  },

  { id: 'abt25', title: 'Sunzi und Stratagemen', content: 'In der chinesischen Kriegskunst galt der Sieg mit möglichst kleinen Verlusten als Ziel. Täuschung, Aufklärung, Desinformation und Druck auf den Willen des Gegners waren vollwertige Mittel. Das Ideal war, die Kampagne zu gewinnen, ohne eine lange Vernichtungsschlacht zu brauchen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/25-sun-tzu.jpg', title: 'Sunzi' }] },
  { id: 'abt26', title: 'Chinesische Armbrustreihen', content: 'In der Zeit der Streitenden Reiche nutzte China oft Armbrustreihen mit Rotationsprinzip. Eine Linie schoss, die zweite lud nach, die dritte bereitete den Wechsel vor. So entstand fast ein dauernder Bolzenstrom auf die gegnerische Front.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/26-crossbow-lines.jpg', title: 'Armbrustreihen' }] },
  { id: 'abt27', title: 'Numidische leichte Reiterei', content: 'Die Numidier setzten auf Tempo, Beweglichkeit und dauernden Druck auf den Gegner. Sie näherten sich, warfen Speere und zogen sich sofort wieder zurueck. Diese Reiterei war besonders stark beim Ermüden und Verfolgen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/27-numidian-cavalry.jpg', title: 'Numidische Reiter' }] },
  {
    id: 'q9',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-9-1-de', text: 'Welches Ziel betonte Sunzi?', type: 'multiple-choice', options: ['Sieg ohne Aufklärung', 'Sieg mit wenig Verlusten und durch List', 'Nur Nachtangriffe', 'Kein Manöver'], correctAnswer: 1, explanation: 'List und Effizienz standen im Zentrum.' },
      { id: 'q-abt-9-2-de', text: 'Was brachte die Rotation der Armbrustreihen?', type: 'multiple-choice', options: ['Feuerpausen', 'Fast ununterbrochenes Feuer', 'Nur Lagerverteidigung', 'Signal zum Rückzug'], correctAnswer: 1, explanation: 'Wechselnde Reihen hielten den Druck konstant.' },
      { id: 'q-abt-9-3-de', text: 'Wie kämpfte numidische Reiterei?', type: 'multiple-choice', options: ['Frontal mit schwerer Lanze', 'Manöver, Speerwurf, Rückzug', 'Ohne Kampf nur Aufklärung', 'Nur Mauersturm'], correctAnswer: 1, explanation: 'Ihre Stärke war Beweglichkeit.' }
    ]
  },

  { id: 'abt28', title: 'Keltisch-germanischer Keil', content: 'Kelten und Germanen nutzten Lärm, Kriegsschreie und auffällige Wirkung als psychologischen Angriff. Der Keil bündelte die Kraft auf einen Punkt der Front. Wenn der Gegner in den ersten Minuten schwankte, konnte seine Ordnung sehr schnell brechen.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/28-celtic-germanic-wedge.jpg', title: 'Keilangriff' }] },
  { id: 'abt29', title: 'Teutoburger Wald', content: 'Arminius zwang die Römer in enges und bewaldetes Gelände, wo Legionen ihre Ordnung kaum entfalten konnten. Angriffe aus mehreren Hinterhalten unterbrachen ständig jeden Versuch, den Verband neu zu bilden. Dadurch wurden die taktischen Stärken Roms fast ganz neutralisiert.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/29-teutoburg-forest.jpg', title: 'Teutoburger Wald' }] },
  { id: 'abt30', title: 'Japan in der Yayoi-Zeit', content: 'Frühe Kriege in Japan behielten lange Elemente des rituellen Duells zwischen Führern. Mit stärkeren Kontakten zum Kontinent begann der Übergang zu grösserer, organisierter Infanterie. Damit wandelte sich das Kriegsprinzip schrittweise von persönlicher Tapferkeit zu Formation und Gruppenführung.', duration: 3, media: [{ type: 'image', url: '/media/ancient-battle-tactics/30-yayoi-warfare.jpg', title: 'Yayoi-Kriegsführung' }] },
  {
    id: 'q10',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      { id: 'q-abt-10-1-de', text: 'Worauf beruhte die Wirkung des Keils?', type: 'multiple-choice', options: ['Nur schwere Rüstung', 'Psychoschock und Punktangriff', 'Belagerungstechnik', 'Seehilfe'], correctAnswer: 1, explanation: 'Druck auf einen Punkt und Schockeffekt.' },
      { id: 'q-abt-10-2-de', text: 'Warum verloren Legionen im Teutoburger Wald ihre Stärke?', type: 'multiple-choice', options: ['Keine Bögen', 'Wald und Hinterhalte nahmen Ordnung und Raum', 'Schildverbot', 'Hunger in Rom'], correctAnswer: 1, explanation: 'Arminius nahm ihnen Formationsvorteile.' },
      { id: 'q-abt-10-3-de', text: 'Was kennzeichnet den Wandel in der Yayoi-Zeit?', type: 'multiple-choice', options: ['Von Reiterei zu Flotte', 'Von Düllen zu organisierter Infanterie', 'Von Fussvolk zu Elefanten', 'Von Bogen zu Kanonen'], correctAnswer: 1, explanation: 'Der Krieg wurde gruppenorientierter.' }
    ]
  }
]

export const ancientBattleTacticsFinalQuizDE: QuizBlock = {
  id: 'quiz-ancient-battle-tactics-de',
  title: 'Abschlussquiz: Schlachtordnungen der Antike',
  questions: [
    { id: 'q-abt-f-1-de', text: 'Hauptschwäche ägyptischer Streitwagen?', type: 'multiple-choice', options: ['Pferdemangel', 'Abhängigkeit von ebenem Boden', 'Kurze Bögen', 'Nur Nachtkampf'], correctAnswer: 1, explanation: 'Sie waren vor allem auf flachem Gelände stark.' },
    { id: 'q-abt-f-2-de', text: 'Verteidigung bei Kadesch?', type: 'multiple-choice', options: ['Scheinrückzug', 'Dichter Speerkreis', 'Keil', 'Waldhinterhalt'], correctAnswer: 1, explanation: 'Der Kreis stabilisierte die Front.' },
    { id: 'q-abt-f-3-de', text: 'Quelle der Lagasch-Formation?', type: 'multiple-choice', options: ['Rosetta', 'Geierstele', 'Tacitus', 'Xenophon'], correctAnswer: 1, explanation: 'Die Geierstele zeigt die Formation.' },
    { id: 'q-abt-f-4-de', text: 'Hethitische Folge nach dem Wagenangriff?', type: 'multiple-choice', options: ['Rückzug', 'Infanterie nachführen', 'Belagern', 'Lager bauen'], correctAnswer: 1, explanation: 'Durchbruch wurde sofort ausgenutzt.' },
    { id: 'q-abt-f-5-de', text: 'Stärke der Hopliten-Phalanx?', type: 'multiple-choice', options: ['Waldkampf', 'Frontaldruck', 'Unsichtbar für Pfeile', 'Flankenunabhängig'], correctAnswer: 1, explanation: 'Frontal war sie stark.' },
    { id: 'q-abt-f-6-de', text: 'Miltiades bei Marathon?', type: 'multiple-choice', options: ['Zentrum stärken', 'Zentrum schwächen, Flügel stärken', 'Nur Reiter', 'In Stadt bleiben'], correctAnswer: 1, explanation: 'Das ermöglichte die Umfassung.' },
    { id: 'q-abt-f-7-de', text: 'Spartas wichtigste Stärke?', type: 'multiple-choice', options: ['Elefanten', 'Disziplin und Ausbildung', 'Flotte', 'Belagerungstürme'], correctAnswer: 1, explanation: 'Strenge Ausbildung war zentral.' },
    { id: 'q-abt-f-8-de', text: 'Wirkung der Sarissa?', type: 'multiple-choice', options: ['Kürzere Formation', 'Starke Frontbarriere', 'Infanterie weg', 'Gürilla'], correctAnswer: 1, explanation: 'Die Front wurde schwerer anzugreifen.' },
    { id: 'q-abt-f-9-de', text: 'Alexanders Reiterschlag traf meist ...', type: 'multiple-choice', options: ['Schildzentrum', 'Nahtstelle im Verband', 'Nur Tross', 'Eigene Linien'], correctAnswer: 1, explanation: 'Er suchte den schwachen Verbindungspunkt.' },
    { id: 'q-abt-f-10-de', text: 'Im Modell Hammer-und-Amboss war der Hammer ...', type: 'multiple-choice', options: ['Bogenschützen', 'Reiterei', 'Ingenieure', 'Flotte'], correctAnswer: 1, explanation: 'Die Reiterei setzte den Umgehungsstoss.' },
    { id: 'q-abt-f-11-de', text: 'Kern der manipularischen Ordnung?', type: 'multiple-choice', options: ['Keine Reserven', 'Rotierende Linien', 'Nur Reiterkampf', 'Starre Front'], correctAnswer: 1, explanation: 'Linien konnten sich im Kampf ablösen.' },
    { id: 'q-abt-f-12-de', text: 'Pilum vor Nahkampf - warum?', type: 'multiple-choice', options: ['Signal', 'Schild unbrauchbar machen', 'Lagerbrand', 'Jagd'], correctAnswer: 1, explanation: 'Der Gegner verlor Schildvorteil.' },
    { id: 'q-abt-f-13-de', text: 'Scipios Lösung gegen Elefanten?', type: 'multiple-choice', options: ['Wagenfront', 'Offene Gassen', 'Verstecken', 'Nachtangriff'], correctAnswer: 1, explanation: 'Die Elefanten wurden durchgeleitet.' },
    { id: 'q-abt-f-14-de', text: 'Kohortenreform - Effekt?', type: 'multiple-choice', options: ['Schlechteres Kommando', 'Einfacheres Führen', 'Keine Disziplin', 'Infanterie ersetzt'], correctAnswer: 1, explanation: 'Grössere Einheiten waren leichter zu steuern.' },
    { id: 'q-abt-f-15-de', text: 'Testudo war besonders für ...', type: 'multiple-choice', options: ['Seeschlacht', 'Belagerung', 'Reitersturm', 'Hinterhalt'], correctAnswer: 1, explanation: 'Sie schütze beim Maueranlauf.' },
    { id: 'q-abt-f-16-de', text: 'Römer bauten auf Marsch regelmässig ...', type: 'multiple-choice', options: ['Tempel', 'Befestigte Lager', 'Bogen', 'Theater'], correctAnswer: 1, explanation: 'Das Lager war Standard.' },
    { id: 'q-abt-f-17-de', text: 'Cannae steht für ...', type: 'multiple-choice', options: ['Seesieg', 'Doppelte Einkesselung', 'Rückzug', 'Unentschieden'], correctAnswer: 1, explanation: 'Ein Klassiker der Umfassung.' },
    { id: 'q-abt-f-18-de', text: 'Risiko bei Kriegselefanten?', type: 'multiple-choice', options: ['Feuerfest', 'In Panik gegen eigene Truppen', 'Kein Futter', 'Nur nachts einsetzbar'], correctAnswer: 1, explanation: 'Kontrollverlust machte sie gefährlich.' },
    { id: 'q-abt-f-19-de', text: 'Zahl der Unsterblichen?', type: 'multiple-choice', options: ['1.000', '10.000', '25.000', '50.000'], correctAnswer: 1, explanation: 'Die Sollstärke blieb konstant.' },
    { id: 'q-abt-f-20-de', text: 'Persische lockere Bogenordnung war schwächer gegen ...', type: 'multiple-choice', options: ['Ungeordnete Gegner', 'Dichte Phalanx', 'Tross', 'Späher'], correctAnswer: 1, explanation: 'Geschlossene Formationen minderten den Effekt.' },
    { id: 'q-abt-f-21-de', text: 'Chaturanga hat wie viele Teile?', type: 'multiple-choice', options: ['2', '3', '4', '5'], correctAnswer: 2, explanation: 'Vier Truppengattungen.' },
    { id: 'q-abt-f-22-de', text: 'Grösse der Maurya-Armee wirkte als ...', type: 'multiple-choice', options: ['Nur Steuerlast', 'Abschreckung', 'Nur Seekrieg', 'Diplomatieverzicht'], correctAnswer: 1, explanation: 'Masse konnte schon vor dem Kampf wirken.' },
    { id: 'q-abt-f-23-de', text: 'Parthischer Schuss bedeutet ...', type: 'multiple-choice', options: ['Turmschuss', 'Rückwärtsschuss beim Scheinrückzug', 'Schiffssalve', 'Speerwurf im Nahkampf'], correctAnswer: 1, explanation: 'Typische Reitertaktik der Parther.' },
    { id: 'q-abt-f-24-de', text: 'Verbrannte Erde der Skythen?', type: 'multiple-choice', options: ['Festungssturm', 'Versorgung entziehen bis Erschöpfung', 'Mauerbau', 'Seeblockade'], correctAnswer: 1, explanation: 'Der Gegner sollte ausgehungert werden.' },
    { id: 'q-abt-f-25-de', text: 'Sunzi betonte ...', type: 'multiple-choice', options: ['Sieg ohne Aufklärung', 'Sieg mit List und geringen Verlusten', 'Nur Nachtkampf', 'Kein Manöver'], correctAnswer: 1, explanation: 'Effizienz und Tauschung waren zentral.' },
    { id: 'q-abt-f-26-de', text: 'Rotation der Armbrustreihen brachte ...', type: 'multiple-choice', options: ['Pausen', 'Nahezu Dauerfeuer', 'Nur Lagerverteidigung', 'Rückzugssignal'], correctAnswer: 1, explanation: 'Ein Teil schoss, ein Teil lud nach.' },
    { id: 'q-abt-f-27-de', text: 'Numidische Reiterei kämpfte vor allem mit ...', type: 'multiple-choice', options: ['Frontalstoss', 'Manöver und Speerwurf', 'Mauersturm', 'Nur Aufklärung'], correctAnswer: 1, explanation: 'Ihre Stärke war Beweglichkeit.' },
    { id: 'q-abt-f-28-de', text: 'Wirkung des germanisch-keltischen Keils?', type: 'multiple-choice', options: ['Nur Rüstung', 'Psychodruck plus Punktangriff', 'Belagerung', 'Seehilfe'], correctAnswer: 1, explanation: 'Er zielte auf schnellen Frontbruch.' },
    { id: 'q-abt-f-29-de', text: 'Warum verloren Legionen im Teutoburger Wald ihre Vorteile?', type: 'multiple-choice', options: ['Keine Bögen', 'Wald und Hinterhalte störten die Formation', 'Schildverbot', 'Hunger in Rom'], correctAnswer: 1, explanation: 'Arminius neutralisierte Ordnung und Raum.' },
    { id: 'q-abt-f-30-de', text: 'Yayoi-Wandel in Japan bedeutete ...', type: 'multiple-choice', options: ['Reiterei zu Flotte', 'Düllkultur zu organisierter Infanterie', 'Fussvolk zu Elefanten', 'Bogen zu Kanonen'], correctAnswer: 1, explanation: 'Kampf wurde strukturierter und massenhafter.' }
  ]
}
