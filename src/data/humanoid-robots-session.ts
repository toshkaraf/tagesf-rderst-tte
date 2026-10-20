// Sitzung: Humanoide Roboter – Geschichte und Gegenwart (Kurzversion, B1-Deutsch)
import { Session } from '../types/session'

export const humanoidRobotsSession: Session = {
  id: 'humanoid-robots',
  title: 'Humanoide Roboter: Geschichte und Gegenwart',
  description: '30 Folien in einfachem Deutsch (B1): von Leonardos Roboter-Ritter bis zu Haushaltsrobotern – mit Videos und Quiz.',
  type: 'presentation',
  category: 'Technologie',
  duration: 90,
  structure: {
    greeting: 'Willkommen zur Sitzung über humanoide Roboter!',
    mainContent: 'Geschichte, Sport, Industrie, Künstliche Intelligenz und Haushaltsroboter in 30 Folien',
    interactive: 'Quizfragen nach jeweils drei Folien und ein Abschlussquiz',
    additional: 'Video-Empfehlungen zum Anklicken direkt in den Folien',
    closing: 'Fazit: Mensch und Roboter als Team'
  },
  slides: [
    { id: "hr1", title: "Die Evolution der humanoiden Roboter", content: "Humanoide Roboter faszinieren die Menschheit seit vielen Jahrhunderten. Heute entwickeln sie sich dank künstlicher Intelligenz schneller als jemals zuvor.", duration: 3 },
    { id: "hr2", title: "Leonardos Roboter-Ritter (1495)", content: "Schon im 15. Jahrhundert entwarf Leonardo da Vinci einen mechanischen Ritter mit Seilzügen und Rollen. Diese historische Zeichnung gilt heute als der erste Entwurf eines humanoiden Roboters.", duration: 3 },
    { id: "hr3", title: "Pioniere: WABOT-1 und Honda ASIMO", content: "Nach dem ersten zweibeinigen Roboter WABOT-1 aus Japan demonstrierte Honda mit ASIMO Jahre später erstmals flüssiges Gehen. Diese frühen Modelle begeisterten Millionen Menschen weltweit für die moderne Robotik.", duration: 3 },
    { id: "hrq1", title: 'Quiz', content: '', duration: 2, questions: [
      { id: "q-hr-1-1", text: "Wer entwarf im 15. Jahrhundert einen mechanischen Ritter?", type: 'multiple-choice', options: ["Honda", "Tesla", "Boston Dynamics", "Leonardo da Vinci"], correctAnswer: 3, explanation: "Leonardo da Vinci zeichnete 1495 einen mechanischen Ritter." },
      { id: "q-hr-1-2", text: "Was zeigte der Roboter ASIMO zum ersten Mal flüssig?", type: 'multiple-choice', options: ["Tanzen", "Gehen", "Boxen", "Kochen"], correctAnswer: 1, explanation: "Honda ASIMO demonstrierte erstmals flüssiges Gehen." },
      { id: "q-hr-1-3", text: "Aus welchem Land kam der erste zweibeinige Roboter WABOT-1?", type: 'multiple-choice', options: ["China", "Deutschland", "USA", "Japan"], correctAnswer: 3, explanation: "WABOT-1 kam aus Japan." }
    ]},
    { id: "hr4", title: "Boston Dynamics Atlas: Hydraulische Kraft (2013)", content: "Die Ingenieure von Boston Dynamics bauten einen extrem robusten Roboter für raues Gelände. Seine kraftvollen Hydraulik-Muskeln ermöglichten erstaunlich dynamische Sprünge.\n[▶ Boston Dynamics: Farewell to HD Atlas (< 5 Min.)](https://www.youtube.com/watch?v=-e1_QhJ1EhQ)", duration: 3 },
    { id: "hr5", title: "Der neue vollelektrische Atlas (2024–2026)", content: "Der neue Atlas besitzt moderne Elektromotoren und kann seine Gelenke um 360 Grad rotieren. Dadurch bewegt er sich viel leiser, geschmeidiger und energieeffizienter als früher.\n[▶ Boston Dynamics: An Electric New Era for Atlas (< 5 Min.)](https://www.youtube.com/watch?v=29ECwExc-_M)", duration: 3 },
    { id: "hr6", title: "Roboter-Wettkämpfe: Olympia und RoboCup", content: "In Peking messen sich Humanoide bereits in sportlichen Disziplinen wie dem Sprint, während beim RoboCup autonome Teams Fußball spielen. Das ehrgeizige Ziel ist ein Sieg gegen menschliche Fußball-Weltmeister bis zum Jahr 2050.\n[▶ Beijing Humanoid Robot Games: Sprint Competition (< 5 Min.)](https://www.youtube.com/watch?v=wyNPzyUtwI0)", duration: 3 },
    { id: "hrq2", title: 'Quiz', content: '', duration: 2, questions: [
      { id: "q-hr-2-1", text: "Welche Art von Kraft nutzte der erste Atlas (2013)?", type: 'multiple-choice', options: ["Hydraulik", "Solarenergie", "Dampf", "Wind"], correctAnswer: 0, explanation: "Der erste Atlas hatte kraftvolle Hydraulik-Muskeln." },
      { id: "q-hr-2-2", text: "Was kann der neue elektrische Atlas mit seinen Gelenken tun?", type: 'multiple-choice', options: ["Sie abnehmen", "Sie um 360 Grad drehen", "Sie nur beugen", "Sie verlängern"], correctAnswer: 1, explanation: "Die Gelenke rotieren um 360 Grad." },
      { id: "q-hr-2-3", text: "Bis wann wollen RoboCup-Teams gegen menschliche Fußball-Weltmeister gewinnen?", type: 'multiple-choice', options: ["2100", "2024", "2030", "2050"], correctAnswer: 3, explanation: "Das Ziel ist ein Sieg bis zum Jahr 2050." }
    ]},
    { id: "hr7", title: "URKL: Professionelles Roboter-Boxen im Ring", content: "In neuen Kampfsportligen wie der URKL treten humanoide Roboter in einem echten Boxring gegeneinander an. Fällt ein Roboter zu Boden, muss er innerhalb weniger Sekunden selbstständig aufstehen.\n[▶ URKL: Humanoid Robot Boxing Match (< 5 Min.)](https://www.youtube.com/shorts/wyNPzyUtwI0)", duration: 3 },
    { id: "hr8", title: "Mensch gegen Maschine: Duelle im Ring", content: "Erste Schaukämpfe zwischen menschlichen Sportlern und humanoiden Robotern erregten weltweites Aufsehen. Schnelle Schutzsensoren und Softwarealgorithmen verhindern dabei gefährliche Verletzungen.\n[▶ First Human vs Humanoid Robot Fight (< 5 Min.)](https://www.youtube.com/watch?v=4rg2sB6ELtk)", duration: 3 },
    { id: "hr9", title: "Laufdynamik: Sprints und Halbmarathons", content: "Moderne Humanoide erreichen beachtliche Sprintgeschwindigkeiten und meistern in China sogar Laufstrecken von über 21 Kilometern. Elastische Sehnen und schnelle Motoren dämpfen dabei die starken Stöße auf dem harten Asphalt ab.", duration: 3 },
    { id: "hrq3", title: 'Quiz', content: '', duration: 2, questions: [
      { id: "q-hr-3-1", text: "Was muss ein Kampfroboter in der URKL nach einem Sturz tun?", type: 'multiple-choice', options: ["Den Ring verlassen", "Aufgeben", "Selbstständig aufstehen", "Warten auf Hilfe"], correctAnswer: 2, explanation: "Er muss innerhalb weniger Sekunden selbstständig aufstehen." },
      { id: "q-hr-3-2", text: "Was verhindert gefährliche Verletzungen bei Schaukämpfen Mensch gegen Roboter?", type: 'multiple-choice', options: ["Ein Zaun", "Nichts", "Schnelle Schutzsensoren und Software", "Dicke Handschuhe"], correctAnswer: 2, explanation: "Sensoren und Algorithmen schützen die Sportler." },
      { id: "q-hr-3-3", text: "Wie lang sind die Laufstrecken in China, die Humanoide meistern?", type: 'multiple-choice', options: ["Nur 100 Meter", "5 Kilometer", "Über 200 Kilometer", "Über 21 Kilometer"], correctAnswer: 3, explanation: "Humanoide laufen sogar Halbmarathons von über 21 Kilometern." }
    ]},
    { id: "hr10", title: "Parkour und Rückwärtssaltos", content: "Hochentwickelte Algorithmen erlauben es Robotern, über Holzkisten und schmale Balken zu springen. Nach einem Salto in der Luft berechnet der Bordcomputer die Landung in Echtzeit.\n[▶ Boston Dynamics: Atlas Parkour (< 5 Min.)](https://www.youtube.com/watch?v=tF4DML7FIWk)", duration: 3 },
    { id: "hr11", title: "Synchrontanz und Rhythmusgefühl", content: "Dank präziser Bewegungssteuerung können mehrere humanoide Roboter synchron zur Musik tanzen. Diese Choreografien beweisen die erstaunliche Geschmeidigkeit und Balance moderner Maschinen.\n[▶ Boston Dynamics: Do You Love Me? (< 5 Min.)](https://www.youtube.com/watch?v=fn3KWM1kuAw)", duration: 3 },
    { id: "hr12", title: "Dunkelfabriken: Roboter bauen Roboter", content: "In hochmodernen Werken wie in Liuzhou bauen humanoide Roboter bereits Tag und Nacht selbstständig neue Roboter zusammen. Für diese Maschinen wird in den sogenannten Dunkelfabriken überhaupt kein Licht mehr benötigt.", duration: 3 },
    { id: "hrq4", title: 'Quiz', content: '', duration: 2, questions: [
      { id: "q-hr-4-1", text: "Was berechnet der Bordcomputer nach einem Salto?", type: 'multiple-choice', options: ["Die Musik", "Den Preis", "Das Wetter", "Die Landung"], correctAnswer: 3, explanation: "Er berechnet die Landung in Echtzeit." },
      { id: "q-hr-4-2", text: "Wozu können mehrere Roboter synchron tanzen?", type: 'multiple-choice', options: ["Zum Essen", "Zum Schlafen", "Zum Lesen", "Zur Musik"], correctAnswer: 3, explanation: "Präzise Bewegungssteuerung erlaubt Synchrontanz zur Musik." },
      { id: "q-hr-4-3", text: "Warum brauchen Dunkelfabriken kein Licht?", type: 'multiple-choice', options: ["Roboter brauchen kein Licht", "Es gibt keinen Strom", "Die Fenster sind groß", "Menschen arbeiten nachts"], correctAnswer: 0, explanation: "Die Roboter arbeiten selbstständig, Licht wird nicht benötigt." }
    ]},
    { id: "hr13", title: "Tesla Optimus auf dem Montageband", content: "In den Werken von Tesla wird der Roboter Optimus für wiederkehrende Aufgaben in der Produktion trainiert. Er sortiert schwere Batteriezellen und lernt direkt aus den Videos menschlicher Arbeiter.\n[▶ Tesla Optimus: Autonomous Task Handling in Factory (< 5 Min.)](https://www.youtube.com/watch?v=eCNVet_wXGA)", duration: 3 },
    { id: "hr14", title: "Qualitätskontrolle mit Computer Vision", content: "Roboter prüfen frisch produzierte Karosserieteile mit Kameras und Laserstrahlen auf Fehler. Sie entdecken winzige Kratzer im Lack schneller und gründlicher als das menschliche Auge.", duration: 3 },
    { id: "hr15", title: "Figure 02 und Schwerlasttransport", content: "Fortschrittliche Roboter wie Figure 02 platzieren bei Autobauern schwere Bauteile mit höchster Präzision in Schweißvorrichtungen. Sie nutzen beim Transport durch die Werkshallen dieselben Wege und Treppen, die ursprünglich für Menschen gebaut wurden.", duration: 3 },
    { id: "hrq5", title: 'Quiz', content: '', duration: 2, questions: [
      { id: "q-hr-5-1", text: "Was lernt Tesla Optimus aus Videos?", type: 'multiple-choice', options: ["Von Tieren", "Von Büchern", "Von Autos", "Von menschlichen Arbeitern"], correctAnswer: 3, explanation: "Optimus lernt direkt aus Videos menschlicher Arbeiter." },
      { id: "q-hr-5-2", text: "Wie prüfen Roboter Karosserieteile auf Fehler?", type: 'multiple-choice', options: ["Mit Kameras und Laserstrahlen", "Mit den Händen", "Mit Wasser", "Gar nicht"], correctAnswer: 0, explanation: "Sie nutzen Kameras und Laser." },
      { id: "q-hr-5-3", text: "Was platziert Figure 02 bei Autobauern?", type: 'multiple-choice', options: ["Kleidung", "Schwere Bauteile", "Blumen", "Reifen von Fahrrädern"], correctAnswer: 1, explanation: "Figure 02 setzt schwere Bauteile präzise in Schweißvorrichtungen." }
    ]},
    { id: "hr16", title: "Autonomes Laden und Akkuwechsel", content: "Wenn die Batterie leer wird, laufen Fabrikroboter selbständig zu ihrer Ladestation zurück. Einige Industrieroboter können ihre Akkus sogar in wenigen Minuten gegenseitig austauschen.", duration: 3 },
    { id: "hr17", title: "Globaler Wettbewerb in der Fertigung", content: "Länder wie China, die USA und Deutschland investieren Milliarden in die heimische Roboterindustrie. Die Automatisierung gilt als wichtigster Schlüssel zur Bewältigung des Arbeitskräftemangels.", duration: 3 },
    { id: "hr18", title: "Das Gehirn: Multimodale KI-Modelle", content: "Moderne Humanoide werden von Modellen gesteuert, die Sprache, Kameras und Sensoren kombinieren. Dadurch verstehen sie normale Sprachbefehle und planen Handlungen eigenständig im Raum.", duration: 3 },
    { id: "hrq6", title: 'Quiz', content: '', duration: 2, questions: [
      { id: "q-hr-6-1", text: "Was machen Fabrikroboter, wenn die Batterie leer ist?", type: 'multiple-choice', options: ["Sie laufen selbst zur Ladestation", "Sie bleiben stehen", "Sie werden ausgeschaltet", "Sie rufen einen Techniker"], correctAnswer: 0, explanation: "Sie laufen selbständig zurück zur Ladestation." },
      { id: "q-hr-6-2", text: "In welchen Ländern wird viel in Robotik investiert?", type: 'multiple-choice', options: ["In keinem Land", "China, USA und Deutschland", "Nur in Island", "Nur in Spanien"], correctAnswer: 1, explanation: "China, USA und Deutschland investieren Milliarden." },
      { id: "q-hr-6-3", text: "Was kombinieren multimodale KI-Modelle?", type: 'multiple-choice', options: ["Nur Text", "Nur Strom", "Sprache, Kameras und Sensoren", "Nur Musik"], correctAnswer: 2, explanation: "Sie verbinden Sprache, Kameras und Sensoren." }
    ]},
    { id: "hr19", title: "Taktile Hände und Feingefühl", content: "Bionische Hände besitzen heute bis zu zwanzig bewegliche Gelenke und weiche Drucksensoren. Damit kann ein Roboter ein zerbrechliches Ei sicher halten, ohne die Schale einzudrücken.", duration: 3 },
    { id: "hr20", title: "Lernen im digitalen Zwilling", content: "In Computersimulationen wie NVIDIA Isaac Sim trainieren Roboter Millionen Aufgaben im Zeitraffer. Was die KI virtuell gelernt hat, funktioniert anschließend sofort in der echten Welt.", duration: 3 },
    { id: "hr21", title: "Balance und nachgiebige Gelenke", content: "Spezielle Kraftsensoren und schnelle Algorithmen lassen Roboter selbst bei Stößen oder auf glattem Eis das Gleichgewicht halten. Bei direktem Kontakt mit Menschen stoppen die Gelenke sofort nachgiebig, um Unfälle in Wohnungen zu vermeiden.", duration: 3 },
    { id: "hrq7", title: 'Quiz', content: '', duration: 2, questions: [
      { id: "q-hr-7-1", text: "Wie viele bewegliche Gelenke hat eine bionische Hand heute?", type: 'multiple-choice', options: ["Hundert", "Bis zu zwanzig", "Eins", "Drei"], correctAnswer: 1, explanation: "Moderne Hände haben bis zu zwanzig Gelenke." },
      { id: "q-hr-7-2", text: "Wo trainieren Roboter in Simulationen wie NVIDIA Isaac Sim?", type: 'multiple-choice', options: ["Im Schwimmbad", "Im Kino", "Im digitalen Zwilling", "Im Wald"], correctAnswer: 2, explanation: "Sie lernen im digitalen Zwilling im Zeitraffer." },
      { id: "q-hr-7-3", text: "Was passiert bei direktem Kontakt mit Menschen?", type: 'multiple-choice', options: ["Der Roboter schlägt zu", "Der Roboter rennt weg", "Nichts", "Die Gelenke stoppen nachgiebig"], correctAnswer: 3, explanation: "Die Gelenke geben nach, um Unfälle zu vermeiden." }
    ]},
    { id: "hr22", title: "Kompakte Aktuatoren und Akkus", content: "Anstelle von schweren Ölschläuchen nutzen moderne Roboter kompakte Elektromotoren und effiziente Festkörperakkus für mehrstündige Einsätze. Beim Abbremsen speisen diese Antriebe wie bei einem Elektroauto Energie zurück in den Speicher.", duration: 3 },
    { id: "hr23", title: "3D-Sehen mit LiDAR und Kameras", content: "Durch die Kombination von Tiefenkameras und Laserscannern baut der Roboter eine Echtzeit-Karte auf. Er erkennt bewegte Hindernisse sofort und läuft sicher an Menschen und Haustieren vorbei.", duration: 3 },
    { id: "hr24", title: "1X NEO: Der Traum vom Roboter-Butler", content: "Technologieunternehmen wie 1X entwickeln leise, textilgekleidete Roboter, die den Menschen im privaten Wohnbereich sicher unterstützen. Sie sollen als Roboter-Butler den Alltag spürbar erleichtern und bei schweren Routinetätigkeiten helfen.\n[▶ 1X NEO: The Robot That Lives With You (< 5 Min.)](https://www.youtube.com/watch?v=lS_z60kjVEk)", duration: 3 },
    { id: "hrq8", title: 'Quiz', content: '', duration: 2, questions: [
      { id: "q-hr-8-1", text: "Was speisen Antriebe beim Abbremsen zurück?", type: 'multiple-choice', options: ["Öl", "Daten", "Energie in den Speicher", "Wasser"], correctAnswer: 2, explanation: "Wie bei einem Elektroauto wird Energie zurückgespeist." },
      { id: "q-hr-8-2", text: "Was baut der Roboter aus Tiefenkameras und Laserscannern?", type: 'multiple-choice', options: ["Ein Haus", "Ein Auto", "Ein Bild", "Eine Echtzeit-Karte"], correctAnswer: 3, explanation: "Er erstellt eine Echtzeit-Karte seiner Umgebung." },
      { id: "q-hr-8-3", text: "Was ist 1X NEO?", type: 'multiple-choice', options: ["Ein Roboter-Butler für zu Hause", "Ein Rennauto", "Ein Smartphone", "Ein Fußballspieler"], correctAnswer: 0, explanation: "1X entwickelt Roboter für den privaten Wohnbereich." }
    ]},
    { id: "hr25", title: "Hausarbeiten und erschwingliche Modelle", content: "Durch maschinelles Lernen meistern Roboter wie der günstige Unitree G1 alltägliche Aufgaben wie das Zusammenfalten von Wäsche. Sinkende Preise unter 16.000 Dollar machen diese Helfer zunehmend auch für Privathaushalte und Entwickler bezahlbar.", duration: 3 },
    { id: "hr26", title: "Unterstützung für Senioren und Pflege", content: "In alternden Gesellschaften können Roboter älteren Menschen beim Aufstehen und Gehen helfen. Sie erinnern verlässlich an wichtige Medikamente und rufen im Notfall sofort ärztliche Hilfe.", duration: 3 },
    { id: "hr27", title: "Marktprognosen und Mietmodelle (RaaS)", content: "Bis 2030 könnten über 500.000 humanoide Roboter im Einsatz sein, von denen viele monatlich gemietet statt gekauft werden. Der Hersteller kümmert sich bei diesem Dienstleistungsmodell um alle Software-Updates und Reparaturen.", duration: 3 },
    { id: "hrq9", title: 'Quiz', content: '', duration: 2, questions: [
      { id: "q-hr-9-1", text: "Welche Aufgabe meistert der Unitree G1?", type: 'multiple-choice', options: ["Flugzeuge bauen", "Brücken planen", "Filme drehen", "Wäsche zusammenfalten"], correctAnswer: 3, explanation: "Der Unitree G1 faltet zum Beispiel Wäsche." },
      { id: "q-hr-9-2", text: "Wie können Roboter älteren Menschen helfen?", type: 'multiple-choice', options: ["Beim Aufstehen und Gehen", "Beim Singen", "Beim Autofahren", "Beim Fliegen"], correctAnswer: 0, explanation: "Sie helfen beim Aufstehen und Gehen und erinnern an Medikamente." },
      { id: "q-hr-9-3", text: "Was bedeutet das Mietmodell (RaaS)?", type: 'multiple-choice', options: ["Der Roboter wird versteigert", "Der Roboter wird monatlich gemietet", "Der Roboter ist gratis", "Der Roboter wird verschenkt"], correctAnswer: 1, explanation: "Viele Roboter werden monatlich gemietet statt gekauft." }
    ]},
    { id: "hr28", title: "Datenschutz und ethische Regeln", content: "Da Haushaltsroboter Kameras und Mikrofone besitzen, müssen persönliche Daten streng geschützt werden. Internationale Richtlinien stellen sicher, dass alle Aufnahmen privat auf dem Gerät bleiben.", duration: 3 },
    { id: "hr29", title: "Aktuelle Hürden: Akkulaufzeit und Preis", content: "Vor dem endgültigen Massendurchbruch müssen die Produktionskosten weiter fallen und die Akkulaufzeit steigen. Experten sind zuversichtlich, dass diese Herausforderungen schon bald gelöst werden.", duration: 3 },
    { id: "hr30", title: "Die Zukunft: Mensch und Roboter als Team", content: "Humanoide Roboter entwickeln sich rasant von Laborversuchen zu verlässlichen Partnern für Arbeit und Alltag. Sie werden uns schwere Lasten abnehmen und unser Zusammenleben nachhaltig verändern.", duration: 3 },
    { id: "hrq10", title: 'Quiz', content: '', duration: 2, questions: [
      { id: "q-hr-10-1", text: "Warum ist Datenschutz bei Haushaltsrobotern wichtig?", type: 'multiple-choice', options: ["Sie sind sehr schwer", "Sie sind laut", "Sie sind blau", "Sie haben Kameras und Mikrofone"], correctAnswer: 3, explanation: "Kameras und Mikrofone erfordern strengen Datenschutz." },
      { id: "q-hr-10-2", text: "Was muss vor dem Massendurchbruch besser werden?", type: 'multiple-choice', options: ["Akkulaufzeit und Preis", "Die Farbe", "Der Name", "Das Wetter"], correctAnswer: 0, explanation: "Kosten müssen fallen, die Akkulaufzeit muss steigen." },
      { id: "q-hr-10-3", text: "Wie sieht die Zukunft laut Fazit aus?", type: 'multiple-choice', options: ["Keine Technik", "Mensch und Roboter als Team", "Roboter ohne Menschen", "Nur Menschen"], correctAnswer: 1, explanation: "Roboter werden verlässliche Partner für Arbeit und Alltag." }
    ]}
  ],
  quiz: {
    id: 'quiz-humanoid-robots',
    title: 'Abschlussquiz: Humanoide Roboter',
    questions: [
      { id: "final-hr-1", text: "Wer entwarf 1495 einen mechanischen Ritter?", type: 'multiple-choice', options: ["Elon Musk", "Newton", "Leonardo da Vinci", "Honda"], correctAnswer: 2, explanation: "Leonardo da Vinci." },
      { id: "final-hr-2", text: "Welcher Roboter springt Salto und macht Parkour?", type: 'multiple-choice', options: ["Roomba", "Siri", "WABOT-1", "Atlas"], correctAnswer: 3, explanation: "Boston Dynamics Atlas." },
      { id: "final-hr-3", text: "Wo spielen autonome Roboter-Teams Fußball?", type: 'multiple-choice', options: ["RoboCup", "Tour de France", "Wimbledon", "Super Bowl"], correctAnswer: 0, explanation: "Beim RoboCup." },
      { id: "final-hr-4", text: "Was sind Dunkelfabriken?", type: 'multiple-choice', options: ["Fabriken unter Wasser", "Fabriken, in denen Roboter ohne Licht arbeiten", "Fabriken ohne Dach", "Fabriken für Kerzen"], correctAnswer: 1, explanation: "Roboter brauchen dort kein Licht." },
      { id: "final-hr-5", text: "Welcher Roboter sortiert Batteriezellen bei Tesla?", type: 'multiple-choice', options: ["NEO", "Figure 02", "Optimus", "ASIMO"], correctAnswer: 2, explanation: "Tesla Optimus." },
      { id: "final-hr-6", text: "Wie hält eine taktile Hand ein Ei?", type: 'multiple-choice', options: ["Mit Magneten", "Mit Kleber", "Gar nicht", "Mit weichen Drucksensoren"], correctAnswer: 3, explanation: "Weiche Drucksensoren und viele Gelenke." },
      { id: "final-hr-7", text: "Wofür nutzt man den digitalen Zwilling?", type: 'multiple-choice', options: ["Zum Training in Simulationen", "Zum Kochen", "Zum Reisen", "Zum Malen"], correctAnswer: 0, explanation: "Roboter lernen virtuell im Zeitraffer." },
      { id: "final-hr-8", text: "Was erleichtert der Roboter-Butler 1X NEO?", type: 'multiple-choice', options: ["Den Bergbau", "Den Alltag zu Hause", "Den Straßenbau", "Das Fliegen"], correctAnswer: 1, explanation: "Er unterstützt im privaten Wohnbereich." },
      { id: "final-hr-9", text: "Wie viele Roboter könnten bis 2030 im Einsatz sein?", type: 'multiple-choice', options: ["Etwa 1.000", "Keine", "Über 500.000", "Genau 10"], correctAnswer: 2, explanation: "Prognose: über 500.000 humanoide Roboter." },
      { id: "final-hr-10", text: "Was ist das Fazit der Präsentation?", type: 'multiple-choice', options: ["Roboter ersetzen alle Hobbys", "Roboter sind nutzlos", "Roboter sind verboten", "Mensch und Roboter arbeiten als Team"], correctAnswer: 3, explanation: "Mensch und Roboter als Team." }
    ]
  },
  metadata: {
    created: '2026-10-20',
    tags: ['Roboter', 'Humanoide', 'Künstliche Intelligenz', 'Technologie', 'B1'],
    difficulty: 'easy'
  }
}
