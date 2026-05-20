import { Slide, QuizBlock } from '../types/session'

export const coldWarEspionageSlidesDE: Slide[] = [
  { id: 'cwe1', title: "Kalte Kriegsspionage: Irrtümer und Pannen", content: "Der Kalte Krieg war nicht nur Raketen und Ideologie, sondern auch eine seltsame Kriegsführung aus Wanzen, Verstecken, Tunneln, verkleideten Geräten und verrückten Experimenten. Je tiefer man in echte CIA- und KGB-Geschichten blickt, desto stärker wirkt die Epoche wie ein Stück Schwarzer Komödie von Ingenieuren und Paranoikern.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/01-cold-war-espionage-intro.jpg', title: "Kalte Krieg und Spionage" }] },

  { id: 'cwe2', title: "Das hölzerne Wappen, das mithörte", content: "1945 schenkten sowjetische Schüler dem US-Botschafter in Moskau ein kunstvoll geschnitztes hölzernes US-Wappen. Der Anblick war so gelungen, dass man es in der Residenz als Zeichen der Freundschaft aufhängte.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/02-great-seal-bug-gift.jpg', title: "Geschenk-Wappen" }] },

  { id: 'cwe3', title: "The Thing in der Wand", content: "Im Inneren saß bereits eine raffinierte Wanze, später bekannt als «The Thing». Jahre lang hingen die Amerikaner freiwillig ein sowjetisches Abhörgerät an der Wand — einer der elegantesten Tricks des Kalten Krieges.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/03-great-seal-bug-device.jpg', title: "Wanze The Thing" }] },

    {
      id: 'q1',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-cwe-1-1-de', text: "Worum geht es in dieser Einheit vor allem?", type: 'multiple-choice', options: ["Nur um das Raumfahrtrennen","Um konkrete, fast filmreife Spionage-Episoden des Kalten Krieges","Nur um moderne Cyber-Spionage","Nur um den Zweiten Weltkrieg"], correctAnswer: 1, explanation: "Wanzen, Tunnel, Gadgets und Pannen von CIA und KGB." },
      { id: 'q-cwe-1-2-de', text: "Wie hieß die Wanze im hölzernen Wappen?", type: 'multiple-choice', options: ["Red October","The Thing","Golden Eye","Black Box"], correctAnswer: 1, explanation: "The Thing — die berühmte passive Wanze im Geschenk von 1945." },
      { id: 'q-cwe-1-3-de', text: "Was machten die Amerikaner mit dem geschenkten Wappen?", type: 'multiple-choice', options: ["Verbrannten es sofort","Hängten es in der Residenz an die Wand","Gaben es am selben Tag ins Museum","Schenkten es nach einer Woche zurück"], correctAnswer: 1, explanation: "Das Wappen hing an der Wand, während die Wanze aktiv war." }
      ]
    },

  { id: 'cwe4', title: "Auch ein Ziegel konnte spionieren", content: "Die Abhörproblematik in Moskau beschränkte sich nicht auf Geschenke. In der US-Botschaft fand man eingebaute Wanzen, teils direkt in Bauelementen wie Ziegelsteinen versteckt.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/04-bugged-brick-embassy.jpg', title: "Wanze im Ziegel" }] },

  { id: 'cwe5', title: "Wenn man der Wand misstraut", content: "Besonders unangenehm: Man misstraut nicht nur dem Raum, sondern der Wand selbst. In Moskau konnte selbst eine Renovierung wie eine Spionageoperation wirken.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/05-embassy-construction-moscow.jpg', title: "Botschaft Moskau" }] },

  { id: 'cwe6', title: "Die Schreibmaschine, die mehr tippte", content: "In der US-Botschaft gelang es dem KGB, modifizierte IBM-Selectric-Maschinen einzuschleusen. Sie druckten normal, übertrugen aber parallel, welche Tasten gedrückt wurden.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/06-ibm-selectric-bug.jpg', title: "IBM Selectric" }] },

    {
      id: 'q2',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-cwe-2-1-de', text: "Wo fand man Wanzen in Ziegelsteinen?", type: 'multiple-choice', options: ["Im Kreml","In der US-Botschaft in Moskau","In der UNO in Genf","In London"], correctAnswer: 1, explanation: "Eingebaut in Bauelemente der Botschaft." },
      { id: 'q-cwe-2-2-de', text: "Welche Schreibmaschinen wurden manipuliert?", type: 'multiple-choice', options: ["Remington","IBM Selectric","Olivetti","Nur Underwood"], correctAnswer: 1, explanation: "Selectric-Maschinen übertrugen Tastendrücke." },
      { id: 'q-cwe-2-3-de', text: "Was war die manipulierte Schreibmaschine praktisch?", type: 'multiple-choice', options: ["Ein Diskettenvirus","Ein Hardware-Keylogger","Eine eingebaute Kamera","Ein Radioempfänger"], correctAnswer: 1, explanation: "Sie meldete Tastenanschläge beim normalen Tippen." }
      ]
    },

  { id: 'cwe7', title: "Hardware-Keylogger", content: "Das war praktisch ein Hardware-Keylogger lange vor der Computerära. Jemand tippte ein Geheimdokument — und die Maschine verriet den Inhalt durch die Tastenfolge.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/07-typewriter-embassy.jpg', title: "Maschine in der Botschaft" }] },

  { id: 'cwe8', title: "Der Berliner Spionagetunnel", content: "CIA und britischer Geheimdienst gruben unter Berlin einen geheimen Tunnel, um sowjetische Leitungen anzuzapfen. Die Operation war riesig, teuer und technisch beeindruckend — fast ein Spionagekunstwerk.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/08-berlin-spy-tunnel.jpg', title: "Spionagetunnel" }] },

  { id: 'cwe9', title: "Der Tunnel, den man schon kannte", content: "Der Haken: Die Sowjetunion wusste durch einen Agenten im britischen Dienst schon vorher Bescheid. Eine Seite grub heroisch — die andere wusste bereits, wie das teure Drama enden würde.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/09-tunnel-map-berlin.jpg', title: "Berlin und Tunnel" }] },

    {
      id: 'q3',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-cwe-3-1-de', text: "Was tat die Selectric zusätzlich zum Drucken?", type: 'multiple-choice', options: ["Druckte doppelt","Übertrug Informationen über gedrückte Tasten","Schickte selbstständig Faxe","Wechselte die Sprache"], correctAnswer: 1, explanation: "Geheime Übertragung der Tastenfolge." },
      { id: 'q-cwe-3-2-de', text: "Wozu grub man den Tunnel unter Berlin?", type: 'multiple-choice', options: ["Für die U-Bahn","Um sowjetische Fernmeldeleitungen anzuzapfen","Für Touristen","Für die Wasserversorgung"], correctAnswer: 1, explanation: "CIA- und britische Abhöraktion." },
      { id: 'q-cwe-3-3-de', text: "Warum ist der Tunnel nicht nur ein westlicher Erfolg?", type: 'multiple-choice', options: ["Er wurde geflutet","Die Sowjets wussten vorher durch einen Agenten Bescheid","Er wurde nicht fertiggestellt","Innen lagen keine Kabel"], correctAnswer: 1, explanation: "Warnung durch Agent im britischen Dienst." }
      ]
    },

  { id: 'cwe10', title: "Die Spionkatze Acoustic Kitty", content: "In den 1960ern versuchte die CIA wirklich, eine Katze zum Abhörgerät zu machen. Mikrofon und Sender wurden implantiert, damit das Tier angeblich Zielpersonen näherkommt und Gespräche aufzeichnet.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/10-acoustic-kitty-cia.jpg', title: "Acoustic Kitty" }] },

  { id: 'cwe11', title: "Die Katze liest keinen Einsatzplan", content: "Das Problem war grundlegend: Eine Katze bleibt eine Katte. Das Projekt wurde teuer und fast nutzlos, weil kein Tier Operationsplan, Budget und Weltlage respektieren muss.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/11-cat-spy-experiment.jpg', title: "Katze und Mikrofon" }] },

  { id: 'cwe12', title: "Tauben mit Kameras", content: "Nach der Katze wirkt die Taube fast vernünftig. Die CIA trainierte Brieftauben, mit kleinen Kameras sensible Objekte zu fotografieren.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/12-pigeon-camera-spy.jpg', title: "Spionagetaube" }] },

    {
      id: 'q4',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-cwe-4-1-de', text: "Wie hieß das CIA-Projekt mit der Katze?", type: 'multiple-choice', options: ["Project Felix","Acoustic Kitty","Silent Paws","CatWire"], correctAnswer: 1, explanation: "Acoustic Kitty — Mikrofon in der Katze." },
      { id: 'q-cwe-4-2-de', text: "Warum scheiterte Acoustic Kitty?", type: 'multiple-choice', options: ["Die Katze verriet die CIA","Die Katze folgte keinem Einsatzplan","Das Mikrofon war immer zu laut","Der Kongress verbot es vor Start"], correctAnswer: 1, explanation: "Ein Tier verhält sich nicht wie ein Agent." },
      { id: 'q-cwe-4-3-de', text: "Wen nutzte man zusätzlich für Luftbilder?", type: 'multiple-choice', options: ["Hunde","Tauben mit Kameras","Pferde","Fische"], correctAnswer: 1, explanation: "CIA trainierte Brieftauben." }
      ]
    },

  { id: 'cwe13', title: "Fliegen ohne Befehl", content: "Klingt verrückt, aber Vögel können zumindest ohne Befehl fliegen. Manchmal ist der seltsamste Spionageplan der Versuch, ihn für normal zu verkaufen.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/13-cia-pigeon-training.jpg', title: "Taubentraining" }] },

  { id: 'cwe14', title: "Insectothopter — fast eine Libelle", content: "In den 1970ern entwickelte die CIA den winzigen Insectothopter: ein mechanisches «Insekt» mit Mikrofon. Die Idee: ans Fenster fliegen, schweben, zuhören.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/14-insectothopter-dragonfly.jpg', title: "Insectothopter" }] },

  { id: 'cwe15', title: "Gescheitert am Wind", content: "In der Praxis war das Gerät im Wind schwer zu steuern und im Feld zu unzuverlässig. Ein kluges Projekt, das gegen normales Wetter verlor.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/15-miniature-spy-drone.jpg', title: "Mini-Spion-Drohne" }] },

    {
      id: 'q5',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-cwe-5-1-de', text: "Vorteil der Taube gegenüber der Katze?", type: 'multiple-choice', options: ["Sie ist billiger","Sie kann ohne Befehl fliegen","Sie ist leise","Sie braucht keine Kamera"], correctAnswer: 1, explanation: "Vögel fliegen von selbst — anders als die Katze." },
      { id: 'q-cwe-5-2-de', text: "Wie hieß das CIA-«Insekten»-Gerät?", type: 'multiple-choice', options: ["Dragonfly X","Insectothopter","Mosquito-1","BugFly"], correctAnswer: 1, explanation: "Insectothopter — mechanisches Insekt mit Mikrofon." },
      { id: 'q-cwe-5-3-de', text: "Warum scheiterte Insectothopter im Feld?", type: 'multiple-choice', options: ["Vögel fraßen es","Schwer steuerbar bei Wind","Keine Batterien","Gesetzliches Verbot"], correctAnswer: 1, explanation: "Wind machte es unzuverlässig." }
      ]
    },

  { id: 'cwe16', title: "Operation Tamarisk: Spionage per Müll", content: "Westliche Militärmissionen in der DDR sammelten weggeworfene sowjetische Papiere und anderen Abfall nach Übungen und Truppenbewegungen. Manchmal zählte sogar Toilettenpapier-Rohmaterial, wenn darauf noch brauchbare Spuren standen.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/16-operation-tamarisk-trash.jpg', title: "Müllaufklärung" }] },

  { id: 'cwe17', title: "Qualifiziert im Fremdmüll wühlen", content: "Klingt unheroisch, galt aber als sehr nützlich. Manchmal sieht Aufklärung nicht wie James Bond aus, sondern wie professionelles Wühlen in fremdem Müll.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/17-military-waste-intelligence.jpg', title: "Militärabfall" }] },

  { id: 'cwe18', title: "Glienicker Brücke — Tauschbühne", content: "Die Glienicker Brücke zwischen Potsdam und West-Berlin wurde berühmt für Agententausch. Einer der größten fand am 11. Juni 1985 statt — die Brücke wurde zur Bühne der Spionagediplomatie.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/18-glienicke-bridge-exchange.jpg', title: "Glienicker Brücke" }] },

    {
      id: 'q6',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-cwe-6-1-de', text: "Was sammelte Operation Tamarisk?", type: 'multiple-choice', options: ["Nur Waffen","Weggeworfene sowjetische Papiere und Müll nach Übungen","Nur Landkarten","Nur Radios"], correctAnswer: 1, explanation: "Aufklärung über Abfälle und Dokumente." },
      { id: 'q-cwe-6-2-de', text: "Wie wird Tamarisk in den Folien beschrieben?", type: 'multiple-choice', options: ["Als Fehlschlag","Als nützliches «Wühlen im Müll»","Als Pressewitz","Als Mythos"], correctAnswer: 1, explanation: "Die Operation galt als sehr nützlich." },
      { id: 'q-cwe-6-3-de', text: "Wo fanden berühmte Agententausche statt?", type: 'multiple-choice', options: ["Am Eiffelturm","An der Glienicker Brücke","Am Weißen Haus","In Stockholm"], correctAnswer: 1, explanation: "Brücke zwischen Potsdam und West-Berlin." }
      ]
    },

  { id: 'cwe19', title: "Agenten auf der weißen Linie", content: "Statt Keller-Treffen: fast offizieller Tausch mitten auf der Brücke. Spione, die man jahrelang jagte, gingen einander auf der weißen Linie entgegen.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/19-spy-swap-bridge.jpg', title: "Agententausch" }] },

  { id: 'cwe20', title: "Der bulgarische Regenschirm", content: "1978 wurde der bulgarische Dissident Georgi Markow in London tödlich vergiftet. Berühmt wurde die Version eines Geräts, das wie ein Regenschirm wirkte und eine giftige Mikrokügelchen einbrachte.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/20-bulgarian-umbrella.jpg', title: "Bulgarischer Regenschirm" }] },

  { id: 'cwe21', title: "Eine Legende, die blieb", content: "Später hieß es, die Operation sei komplexer als die «einsame Regenschirm»-Legende — doch das Bild blieb. Manchmal klingt echte Spionagegeschichte zu filmisch, um wahr zu wirken.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/21-georgi-markov-london.jpg', title: "Georgi Markow" }] },

    {
      id: 'q7',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-cwe-7-1-de', text: "Was ist besonders am Tausch auf der Glienicker Brücke?", type: 'multiple-choice', options: ["Er lief nur nachts im Tunnel","Fast theatralischer Tausch mitten auf der Brücke","Nur Geldtausch","Nur Waffentausch"], correctAnswer: 1, explanation: "Agenten auf der weißen Linie." },
      { id: 'q-cwe-7-2-de', text: "Wer wurde 1978 in London vergiftet?", type: 'multiple-choice', options: ["Tschechow","Georgi Markow","Solschenizyn","Pasternak"], correctAnswer: 1, explanation: "Der bulgarische Dissident Georgi Markow." },
      { id: 'q-cwe-7-3-de', text: "Womit hängt die «bulgarische Regenschirm»-Legende zusammen?", type: 'multiple-choice', options: ["Mit Vergiftung über ein regenschirmähnliches Gerät","Mit Regen in Sofia","Mit einem 007-Film","Mit Haarfarbe"], correctAnswer: 1, explanation: "Version einer Giftmikrokügelchen." }
      ]
    },

  { id: 'cwe22', title: "Der Lippenstift-Pistole", content: "Unter den Geräten der Epoche war auch die «lipstick pistol»: eine Einzelschusswaffe, getarnt als Lippenstifttube. Man nannte sie sogar «Kuss des Todes».", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/22-lipstick-pistol.jpg', title: "Lippenstift-Pistole" }] },

  { id: 'cwe23', title: "Kosmetik als Waffe", content: "Die Essenz der Epoche: Alltägliches Aussehen, gefährliche Funktion. Der Kalte Krieg liebte es, Normales in Bedrohliches zu verwandeln.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/23-spy-gadget-disguise.jpg', title: "Spionage-Gadget" }] },

  { id: 'cwe24', title: "Der «Hundehaufen»-Sender", content: "Die CIA entwickelte den Sender T-1151, getarnt als Hundekot oder anderes Tier. Man konnte ihn fallen lassen und als Such-, Funk- oder Evakuierungsmarkierung nutzen.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/24-dog-poop-transmitter.jpg', title: "Sender-Tarnung" }] },

    {
      id: 'q8',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-cwe-8-1-de', text: "Was ist die «lipstick pistol»?", type: 'multiple-choice', options: ["Giftlippenstift","Einzelschusswaffe als Lippenstift getarnt","Lippenstift der KGB-Marke","Eine Kamera"], correctAnswer: 1, explanation: "«Kuss des Todes» — Waffe im Tübchen." },
      { id: 'q-cwe-8-2-de', text: "Woraus tarnte man den Sender T-1151?", type: 'multiple-choice', options: ["Einen Stein","Hundekot","Einen Briefkasten","Einen Blumentopf"], correctAnswer: 1, explanation: "Markierung, die wie Kot aussieht." },
      { id: 'q-cwe-8-3-de', text: "Warum die Tarnung als «Haufen»?", type: 'multiple-choice', options: ["Wegen des Geruchs","Niemand untersucht das genau","Er ist leichter","Modernisierungsvorschrift"], correctAnswer: 1, explanation: "Absurde Tarnung = gute Tarnung." }
      ]
    },

  { id: 'cwe25', title: "Niemand untersucht den Haufen", content: "Vielleicht das demütig-praktischste Gerät der Epoche: hässlich, absurd — und deshalb nützlich. Kaum jemand untersucht einen verdächtigen Haufen auf der Straße genau.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/25-spy-rescue-beacon.jpg', title: "Rettungsmarkierung" }] },

  { id: 'cwe26', title: "Das «Moskauer Signal»", content: "In der US-Botschaft in Moskau registrierte man gerichtete elektromagnetische Strahlung, später «Moskauer Signal» genannt. Man beschichtete sogar Fenster, um sich zu schützen.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/26-moscow-signal-embassy.jpg', title: "Moskauer Signal" }] },

  { id: 'cwe27', title: "Abhören, bestrahlen oder beides?", content: "Die genaue Bedeutung blieb umstritten — die Situation wirkt schon allein deshalb beunruhigend. Man sitzt in der Botschaft und weiß nicht: Wird man belauscht, bestrahlt oder beides zugleich?", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/27-embassy-microwave.jpg', title: "Botschaft und Strahlung" }] },

    {
      id: 'q9',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-cwe-9-1-de', text: "Was war das «Moskauer Signal»?", type: 'multiple-choice', options: ["Radio «Stimme Amerikas»","Gerichtete Strahlung in der US-Botschaft Moskau","U-Bahn-Signal","Deckname eines Spions"], correctAnswer: 1, explanation: "EM-Strahlung in der Botschaft." },
      { id: 'q-cwe-9-2-de', text: "Was tat man mit den Fenstern wegen des Signals?", type: 'multiple-choice', options: ["Übermalte sie","Trug spezielle Beschichtungen auf","Zerschlug sie","Schloss sie für immer"], correctAnswer: 1, explanation: "Schutz vor der Strahlung." },
      { id: 'q-cwe-9-3-de', text: "Wie hieß der geschützte Raum in der Botschaft?", type: 'multiple-choice', options: ["Kokon","«Blase»","Bunker-2","Tresor"], correctAnswer: 1, explanation: "«Blase» für Gespräche in der Botschaft." }
      ]
    },

  { id: 'cwe28', title: "Botschaft in der Botschaft — die «Blase»", content: "Aus Angst vor Wanzen besprach man Wichtiges in einer speziellen Schutzkonstruktion — der «Blase». Innerhalb der eigenen Botschaft brauchte man ein zweites, kleines sicheres Zimmer.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/28-embassy-bubble-room.jpg', title: "Schutz-«Blase»" }] },

  { id: 'cwe29', title: "Tresor für das Gespräch", content: "Die «Blase» zeigt die Nervosität der Epoche. Braucht man einen Tresor nicht für Dokumente, sondern für das Gespräch selbst, ist normale Diplomatie längst vorbei.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/29-secure-room-diplomacy.jpg', title: "Sicherer Raum" }] },

  { id: 'cwe30', title: "Fakten seltsamer als Fiktion", content: "Das Erstaunlichste: Die besten echten Spionagegeschichten sind oft seltsamer als Erfindung. Wanze im Wappen, Tunnel, Katze mit Mikrofon, Kot-Sender und verräterische Schreibmaschine — keine Drehbuchideen, sondern Fakten der Epoche.", duration: 3, media: [{ type: 'image', url: '/media/cold-war-espionage/30-cold-war-espionage-legacy.jpg', title: "Erbe der Epoche" }] },

    {
      id: 'q10',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-cwe-10-1-de', text: "Wozu diente die «Blase»?", type: 'multiple-choice', options: ["Für Geschirr","Für Gespräche im geschützten Raum","Für Pressekonferenzen","Für Sport"], correctAnswer: 1, explanation: "Tresor fürs Gespräch, nicht fürs Papier." },
      { id: 'q-cwe-10-2-de', text: "Was zeigt die «Blase» über die Epoche?", type: 'multiple-choice', options: ["Volles Vertrauen in die Wände","Extreme Paranoia wegen Abhörung","Fehlende Technik","Nur 1970er-Ästhetik"], correctAnswer: 1, explanation: "Diplomatie unter ständiger Angst vor Wanzen." },
      { id: 'q-cwe-10-3-de', text: "Hauptaussage der letzten Folie?", type: 'multiple-choice', options: ["Alles ist Filmfiktion","Echte Spionage ist oft seltsamer als Erfindung","Es gab keine Spione","Nur das KGB irrte sich"], correctAnswer: 1, explanation: "Wanze, Tunnel, Katze, Maschine — echte Fakten." }
      ]
    }
]

export const coldWarEspionageFinalQuizDE: QuizBlock = {
  id: 'quiz-cold-war-espionage-de',
  title: 'Abschlussquiz: Spionage im Kalten Krieg',
  questions: [
    { id: 'q-cwe-f-1-de', text: "Worum geht es in dieser Einheit vor allem?", type: 'multiple-choice', options: ["Nur um das Raumfahrtrennen","Um konkrete, fast filmreife Spionage-Episoden des Kalten Krieges","Nur um moderne Cyber-Spionage","Nur um den Zweiten Weltkrieg"], correctAnswer: 1, explanation: "Wanzen, Tunnel, Gadgets und Pannen von CIA und KGB." },
    { id: 'q-cwe-f-2-de', text: "Wie hieß die Wanze im hölzernen Wappen?", type: 'multiple-choice', options: ["Red October","The Thing","Golden Eye","Black Box"], correctAnswer: 1, explanation: "The Thing — die berühmte passive Wanze im Geschenk von 1945." },
    { id: 'q-cwe-f-3-de', text: "Was machten die Amerikaner mit dem geschenkten Wappen?", type: 'multiple-choice', options: ["Verbrannten es sofort","Hängten es in der Residenz an die Wand","Gaben es am selben Tag ins Museum","Schenkten es nach einer Woche zurück"], correctAnswer: 1, explanation: "Das Wappen hing an der Wand, während die Wanze aktiv war." },
    { id: 'q-cwe-f-4-de', text: "Wo fand man Wanzen in Ziegelsteinen?", type: 'multiple-choice', options: ["Im Kreml","In der US-Botschaft in Moskau","In der UNO in Genf","In London"], correctAnswer: 1, explanation: "Eingebaut in Bauelemente der Botschaft." },
    { id: 'q-cwe-f-5-de', text: "Welche Schreibmaschinen wurden manipuliert?", type: 'multiple-choice', options: ["Remington","IBM Selectric","Olivetti","Nur Underwood"], correctAnswer: 1, explanation: "Selectric-Maschinen übertrugen Tastendrücke." },
    { id: 'q-cwe-f-6-de', text: "Was war die manipulierte Schreibmaschine praktisch?", type: 'multiple-choice', options: ["Ein Diskettenvirus","Ein Hardware-Keylogger","Eine eingebaute Kamera","Ein Radioempfänger"], correctAnswer: 1, explanation: "Sie meldete Tastenanschläge beim normalen Tippen." },
    { id: 'q-cwe-f-7-de', text: "Was tat die Selectric zusätzlich zum Drucken?", type: 'multiple-choice', options: ["Druckte doppelt","Übertrug Informationen über gedrückte Tasten","Schickte selbstständig Faxe","Wechselte die Sprache"], correctAnswer: 1, explanation: "Geheime Übertragung der Tastenfolge." },
    { id: 'q-cwe-f-8-de', text: "Wozu grub man den Tunnel unter Berlin?", type: 'multiple-choice', options: ["Für die U-Bahn","Um sowjetische Fernmeldeleitungen anzuzapfen","Für Touristen","Für die Wasserversorgung"], correctAnswer: 1, explanation: "CIA- und britische Abhöraktion." },
    { id: 'q-cwe-f-9-de', text: "Warum ist der Tunnel nicht nur ein westlicher Erfolg?", type: 'multiple-choice', options: ["Er wurde geflutet","Die Sowjets wussten vorher durch einen Agenten Bescheid","Er wurde nicht fertiggestellt","Innen lagen keine Kabel"], correctAnswer: 1, explanation: "Warnung durch Agent im britischen Dienst." },
    { id: 'q-cwe-f-10-de', text: "Wie hieß das CIA-Projekt mit der Katze?", type: 'multiple-choice', options: ["Project Felix","Acoustic Kitty","Silent Paws","CatWire"], correctAnswer: 1, explanation: "Acoustic Kitty — Mikrofon in der Katze." },
    { id: 'q-cwe-f-11-de', text: "Warum scheiterte Acoustic Kitty?", type: 'multiple-choice', options: ["Die Katze verriet die CIA","Die Katze folgte keinem Einsatzplan","Das Mikrofon war immer zu laut","Der Kongress verbot es vor Start"], correctAnswer: 1, explanation: "Ein Tier verhält sich nicht wie ein Agent." },
    { id: 'q-cwe-f-12-de', text: "Wen nutzte man zusätzlich für Luftbilder?", type: 'multiple-choice', options: ["Hunde","Tauben mit Kameras","Pferde","Fische"], correctAnswer: 1, explanation: "CIA trainierte Brieftauben." },
    { id: 'q-cwe-f-13-de', text: "Vorteil der Taube gegenüber der Katze?", type: 'multiple-choice', options: ["Sie ist billiger","Sie kann ohne Befehl fliegen","Sie ist leise","Sie braucht keine Kamera"], correctAnswer: 1, explanation: "Vögel fliegen von selbst — anders als die Katze." },
    { id: 'q-cwe-f-14-de', text: "Wie hieß das CIA-«Insekten»-Gerät?", type: 'multiple-choice', options: ["Dragonfly X","Insectothopter","Mosquito-1","BugFly"], correctAnswer: 1, explanation: "Insectothopter — mechanisches Insekt mit Mikrofon." },
    { id: 'q-cwe-f-15-de', text: "Warum scheiterte Insectothopter im Feld?", type: 'multiple-choice', options: ["Vögel fraßen es","Schwer steuerbar bei Wind","Keine Batterien","Gesetzliches Verbot"], correctAnswer: 1, explanation: "Wind machte es unzuverlässig." },
    { id: 'q-cwe-f-16-de', text: "Was sammelte Operation Tamarisk?", type: 'multiple-choice', options: ["Nur Waffen","Weggeworfene sowjetische Papiere und Müll nach Übungen","Nur Landkarten","Nur Radios"], correctAnswer: 1, explanation: "Aufklärung über Abfälle und Dokumente." },
    { id: 'q-cwe-f-17-de', text: "Wie wird Tamarisk in den Folien beschrieben?", type: 'multiple-choice', options: ["Als Fehlschlag","Als nützliches «Wühlen im Müll»","Als Pressewitz","Als Mythos"], correctAnswer: 1, explanation: "Die Operation galt als sehr nützlich." },
    { id: 'q-cwe-f-18-de', text: "Wo fanden berühmte Agententausche statt?", type: 'multiple-choice', options: ["Am Eiffelturm","An der Glienicker Brücke","Am Weißen Haus","In Stockholm"], correctAnswer: 1, explanation: "Brücke zwischen Potsdam und West-Berlin." },
    { id: 'q-cwe-f-19-de', text: "Was ist besonders am Tausch auf der Glienicker Brücke?", type: 'multiple-choice', options: ["Er lief nur nachts im Tunnel","Fast theatralischer Tausch mitten auf der Brücke","Nur Geldtausch","Nur Waffentausch"], correctAnswer: 1, explanation: "Agenten auf der weißen Linie." },
    { id: 'q-cwe-f-20-de', text: "Wer wurde 1978 in London vergiftet?", type: 'multiple-choice', options: ["Tschechow","Georgi Markow","Solschenizyn","Pasternak"], correctAnswer: 1, explanation: "Der bulgarische Dissident Georgi Markow." },
    { id: 'q-cwe-f-21-de', text: "Womit hängt die «bulgarische Regenschirm»-Legende zusammen?", type: 'multiple-choice', options: ["Mit Vergiftung über ein regenschirmähnliches Gerät","Mit Regen in Sofia","Mit einem 007-Film","Mit Haarfarbe"], correctAnswer: 1, explanation: "Version einer Giftmikrokügelchen." },
    { id: 'q-cwe-f-22-de', text: "Was ist die «lipstick pistol»?", type: 'multiple-choice', options: ["Giftlippenstift","Einzelschusswaffe als Lippenstift getarnt","Lippenstift der KGB-Marke","Eine Kamera"], correctAnswer: 1, explanation: "«Kuss des Todes» — Waffe im Tübchen." },
    { id: 'q-cwe-f-23-de', text: "Woraus tarnte man den Sender T-1151?", type: 'multiple-choice', options: ["Einen Stein","Hundekot","Einen Briefkasten","Einen Blumentopf"], correctAnswer: 1, explanation: "Markierung, die wie Kot aussieht." },
    { id: 'q-cwe-f-24-de', text: "Warum die Tarnung als «Haufen»?", type: 'multiple-choice', options: ["Wegen des Geruchs","Niemand untersucht das genau","Er ist leichter","Modernisierungsvorschrift"], correctAnswer: 1, explanation: "Absurde Tarnung = gute Tarnung." },
    { id: 'q-cwe-f-25-de', text: "Was war das «Moskauer Signal»?", type: 'multiple-choice', options: ["Radio «Stimme Amerikas»","Gerichtete Strahlung in der US-Botschaft Moskau","U-Bahn-Signal","Deckname eines Spions"], correctAnswer: 1, explanation: "EM-Strahlung in der Botschaft." },
    { id: 'q-cwe-f-26-de', text: "Was tat man mit den Fenstern wegen des Signals?", type: 'multiple-choice', options: ["Übermalte sie","Trug spezielle Beschichtungen auf","Zerschlug sie","Schloss sie für immer"], correctAnswer: 1, explanation: "Schutz vor der Strahlung." },
    { id: 'q-cwe-f-27-de', text: "Wie hieß der geschützte Raum in der Botschaft?", type: 'multiple-choice', options: ["Kokon","«Blase»","Bunker-2","Tresor"], correctAnswer: 1, explanation: "«Blase» für Gespräche in der Botschaft." },
    { id: 'q-cwe-f-28-de', text: "Wozu diente die «Blase»?", type: 'multiple-choice', options: ["Für Geschirr","Für Gespräche im geschützten Raum","Für Pressekonferenzen","Für Sport"], correctAnswer: 1, explanation: "Tresor fürs Gespräch, nicht fürs Papier." },
    { id: 'q-cwe-f-29-de', text: "Was zeigt die «Blase» über die Epoche?", type: 'multiple-choice', options: ["Volles Vertrauen in die Wände","Extreme Paranoia wegen Abhörung","Fehlende Technik","Nur 1970er-Ästhetik"], correctAnswer: 1, explanation: "Diplomatie unter ständiger Angst vor Wanzen." },
    { id: 'q-cwe-f-30-de', text: "Hauptaussage der letzten Folie?", type: 'multiple-choice', options: ["Alles ist Filmfiktion","Echte Spionage ist oft seltsamer als Erfindung","Es gab keine Spione","Nur das KGB irrte sich"], correctAnswer: 1, explanation: "Wanze, Tunnel, Katze, Maschine — echte Fakten." }
  ]
}
