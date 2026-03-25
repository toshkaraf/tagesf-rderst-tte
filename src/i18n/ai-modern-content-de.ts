import { Slide, QuizBlock } from '../types/session'

// Deutsche Inhalte (B2) für: Moderne KI – Fähigkeiten und Grenzen

export const aiModernSlidesDE: Slide[] = [
  {
    id: 'am1',
    title: 'Was ist heutige „moderne KI“?',
    content:
      'Damit meint man meist große neuronale Netze: Modelle wie ChatGPT, Bildgeneratoren, Empfehlungsalgorithmen. Wichtig: Es ist kein „digitales Gehirn“, sondern komplexe Statistik über riesige Datenmengen.',
    duration: 3
  },
  {
    id: 'am2',
    title: 'Wo wir täglich KI treffen',
    content:
      'Filme und Musik-Empfehlungen, Werbung, Spam-Filter, Übersetzer, Textvorschläge, Navi, Gesichtserkennung, Kamerafilter. Auch wer „nie KI nutzt“, lebt schon lange mit ihr.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-modern/everyday-ai.jpg', title: 'KI im Alltag' }]
  },
  {
    id: 'am3',
    title: 'Worin sich ChatGPT von „Suche“ unterscheidet',
    content:
      'Eine Suchmaschine liefert Links. ChatGPT erzeugt wahrscheinlichen Fließtext aus dem Trainingskorpus. Es „weiß“ Fakten nicht – es setzt Text fort. Darum kann es gut erklären und trotzdem mit Überzeugung falsch liegen – sogenannte Halluzinationen.',
    duration: 3
  },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-am-1-1-de',
        text: 'Was steckt meist hinter „moderner KI“?',
        type: 'multiple-choice',
        options: ['Ein einzelner Supercomputer', 'Große neuronale Modelle auf vielen Daten', 'Ein Regelprogramm', 'Ein Staubsaugerroboter'],
        correctAnswer: 1,
        explanation: 'Vor allem große neuronale Netze.'
      },
      {
        id: 'q-am-1-2-de',
        text: 'Was macht ChatGPT grundsätzlich anders als eine Suchmaschine?',
        type: 'multiple-choice',
        options: ['Es speichert alle Chats', 'Es liefert nur Links', 'Es erzeugt neuen Text nach Wahrscheinlichkeiten', 'Es läuft nur offline'],
        correctAnswer: 2,
        explanation: 'Es generiert Text, sucht nicht nur fertige Antworten.'
      },
      {
        id: 'q-am-1-3-de',
        text: 'Was sind „Halluzinationen“ bei KI?',
        type: 'multiple-choice',
        options: ['Codefehler', 'Serverausfall', 'Plausible, aber erfundene Antworten', 'Computertäume'],
        correctAnswer: 2,
        explanation: 'Das Modell erfindet überzeugend klingende Unwahrheiten.'
      }
    ]
  },
  {
    id: 'am4',
    title: 'Wie neuronale Netze funktionieren (kurz)',
    content:
      'Ein Netz hat viele Schichten einfacher „Neuronen“. Jedes gewichtet Eingaben und wendet eine einfache Funktion an. Hunderte Millionen solcher Schritte ergeben Bild- und Texterkennung. Die Magie liegt in Menge und Daten.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-modern/neural-net.jpg', title: 'Schema Neuronales Netz' }]
  },
  {
    id: 'am5',
    title: 'Lernen aus Beispielen',
    content:
      'Die KI „liest“ nicht wie ein Mensch: Sie sieht Milliarden Text- und Bildfragmente und passt Parameter an, um das nächste Token besser vorherzusagen. Fehler und Vorurteile in den Daten übernimmt das Modell mit.',
    duration: 3
  },
  {
    id: 'am6',
    title: 'Liebenswerter Fakt: Was Training kostet',
    content:
      'Das Trainieren eines großen Modells kann Zehnmillionen-Beträge und so viel Strom kosten wie eine Kleinstadt in wenigen Tagen. Deshalb bauen vor allem große Firmen und Konsortien die größten Modelle.',
    duration: 3
  },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-am-2-1-de',
        text: 'Worauf lernen heutige neuronale Netze?',
        type: 'multiple-choice',
        options: ['Auf ein paar Büchern', 'Auf Milliarden Beispielen', 'Nur auf Mathe', 'Im „Schlaf“ des Servers'],
        correctAnswer: 1,
        explanation: 'Umfang der Daten ist entscheidend.'
      },
      {
        id: 'q-am-2-2-de',
        text: 'Was passiert bei Voreingenommenheit in den Trainingsdaten?',
        type: 'multiple-choice',
        options: ['Das Modell korrigiert automatisch', 'Nichts', 'Das Modell übernimmt und verstärkt sie', 'Es stoppt'],
        correctAnswer: 2,
        explanation: 'Bias in den Daten → Bias im Modell.'
      },
      {
        id: 'q-am-2-3-de',
        text: 'Warum bauen meist große Firmen solche Modelle?',
        type: 'multiple-choice',
        options: ['Aus Langeweile', 'Weil es sehr teuer und energieintensiv ist', 'Weil der Algorithmus geheim sein muss', 'Kleine dürfen nicht'],
        correctAnswer: 1,
        explanation: 'Kosten für Rechner und Daten sind enorm.'
      }
    ]
  },
  {
    id: 'am7',
    title: 'Stärken: Text und Code',
    content:
      'Ideen, E-Mail-Entwürfe, Lebensläufe, Erklärungen, Codebeispiele, Refaktorisierung – die KI beschleunigt vieles. Sie kennt aber weder interne Firmenpolitik noch Verantwortung. Menschliche Prüfung bleibt Pflicht.',
    duration: 3
  },
  {
    id: 'am8',
    title: 'Stärken: Bilder und Video',
    content:
      'Bildgeneratoren mischen Stile, liefern Illustrationen, Cover, Logos. Sie können aber Elemente aus Trainingswerken übernehmen und bei Details irren – etwa zu viele Finger oder falsche Anatomie.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-modern/image-gen.jpg', title: 'KI-generiertes Bild' }]
  },
  {
    id: 'am9',
    title: 'Humor: „Zwölf Finger – besonders talentiert“',
    content:
      'Künstler scherzen: „Zwölf Finger sind kein Fehler, das ist zeitgenössische Kunst.“ Eigentlich zeigt es: Das Modell ahmt den Stil gut nach – die Körperstruktur nicht immer.',
    duration: 3
  },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-am-3-1-de',
        text: 'Wo ist Text-KI besonders stark?',
        type: 'multiple-choice',
        options: ['Elektrik im Haus prüfen', 'Entwürfe und Code-Beispiele', 'PC reparieren', 'Kochen'],
        correctAnswer: 1,
        explanation: 'Text und Code – nicht physische Aufgaben.'
      },
      {
        id: 'q-am-3-2-de',
        text: 'Typisches „lustiges“ Problem von Bildgeneratoren?',
        type: 'multiple-choice',
        options: ['Nur Schwarzweiß', 'Nur Katzen', 'Falsche Fingeranzahl', 'Keine Kreise'],
        correctAnswer: 2,
        explanation: 'Finger und Kleindetails sind schwach.'
      },
      {
        id: 'q-am-3-3-de',
        text: 'Soll man Chat-Antworten der KI prüfen?',
        type: 'multiple-choice',
        options: ['Nein, sie hat immer recht', 'Nur bei Langeweile', 'Ja, der Mensch trägt die Verantwortung', 'Ein zweites KI soll prüfen'],
        correctAnswer: 2,
        explanation: 'Verantwortung bleibt beim Menschen.'
      }
    ]
  },
  {
    id: 'am10',
    title: 'Grenzen: „Sinn“ und Erfahrung',
    content:
      'Die KI imitiert Sinn gut, hat aber keinen eigenen Körper, keine Emotionen, kein echtes Erleben. Sie „weiß“ nicht, was Schmerz oder Freude ist – sie verknüpft Wörter statistisch. Darum gibt es logisch klingende, aber absurde Ratschläge.',
    duration: 3
  },
  {
    id: 'am11',
    title: 'Grenzen: Aktualität von Fakten',
    content:
      'Modelle kennen Daten nur bis zu einem Stichtag und verpassen Ereignisse von gestern. Selbst mit Internetzugang bauen sie Antworten probabilistisch und verwechseln Quellen oder fassen falsch zusammen.',
    duration: 3
  },
  {
    id: 'am12',
    title: 'Humor: „Die KI weiß alles“ – außer von gestern',
    content:
      '„KI weiß alles!“ – bis man fragt, wer gestern Abend das Spiel gewann. Manchmal ist der Nachbar auf dem Sofa informierter als ein Milliarden-Parameter-Modell.',
    duration: 3
  },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-am-4-1-de',
        text: 'Hat KI eigenes Lebenserleben?',
        type: 'multiple-choice',
        options: ['Ja, virtuell', 'Nur große Modelle', 'Nein, nur Statistik über Daten', 'Alles fühlt sie übers Internet'],
        correctAnswer: 2,
        explanation: 'Kein Körper, kein Erleben – nur Daten.'
      },
      {
        id: 'q-am-4-2-de',
        text: 'Warum kann KI bei aktuellen News irren?',
        type: 'multiple-choice',
        options: ['Aus Faulheit', 'Sie ignoriert News grundsätzlich', 'Trainings-Stichtag und Quellen', 'Sie wird durch Benachrichtigungen gestört'],
        correctAnswer: 2,
        explanation: 'Stichtag und Informationszugang.'
      },
      {
        id: 'q-am-4-3-de',
        text: 'Was bedeutet ein schöner, aber absurder Ratschlag der KI?',
        type: 'multiple-choice',
        options: ['KI scherzt', 'KI ist böse', 'Statistik ohne echtes Verstehen', 'Computer müde'],
        correctAnswer: 2,
        explanation: 'Folgen werden nicht „verstanden“.'
      }
    ]
  },
  {
    id: 'am13',
    title: 'Risiken: Halluzinationen und blindes Vertrauen',
    content:
      'Die Gefahr ist oft nicht der böse Roboter, sondern der Mensch, der jeder Antwort glaubt. KI erfindet Quellen, Zitate, Urteile. In Medizin, Finanzen, Recht: ohne Prüfung tabu.',
    duration: 3
  },
  {
    id: 'am14',
    title: 'Risiken: Datenschutz',
    content:
      'Alles, was Sie in einen öffentlichen KI-Dienst tippen, kann für Training oder Analyse genutzt werden. Keine Passwörter, keine Geheimdokumente, keine Kundendaten hineingeben.',
    duration: 3
  },
  {
    id: 'am15',
    title: 'Liebenswerter Fakt: Anwalt und fingierte Urteile',
    content:
      '2023 nutzte ein US-Anwalt ChatGPT für eine Klage. Das Modell erfand nicht existierende Gerichtsentscheide. Der Richter prüfte – und bestrafte den Anwalt mit einer Geldstrafe. Lehrbuchbeispiel für falschen Umgang mit KI.',
    duration: 3
  },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-am-5-1-de',
        text: 'Hauptgefahr bei ernstem KI-Einsatz?',
        type: 'multiple-choice',
        options: ['Zu langsam', 'Zu ehrlich', 'Blindes Vertrauen in Halluzinationen', 'Zu teuer'],
        correctAnswer: 2,
        explanation: 'Ohne Prüfung glauben ist riskant.'
      },
      {
        id: 'q-am-5-2-de',
        text: 'Was gehört nicht in einen öffentlichen KI-Chat?',
        type: 'multiple-choice',
        options: ['Gedichtentwürfe', 'Geschenkideen', 'Passwörter und vertrauliche Dokumente', 'Leselisten'],
        correctAnswer: 2,
        explanation: 'Sensible Daten nie hinein.'
      },
      {
        id: 'q-am-5-3-de',
        text: 'Was lehrt der Fall mit dem Anwalt?',
        type: 'multiple-choice',
        options: [
          'Mehr der KI vertrauen',
          'Richter mögen keine Technik',
          'Jura lässt sich nicht prüfen',
          'Fakten und Zitate verifizieren'
        ],
        correctAnswer: 3,
        explanation: 'Jede KI-Aussage gegenprüfen.'
      }
    ]
  },
  {
    id: 'am16',
    title: 'KI und Arbeit: Routine automatisieren',
    content:
      'Standard-Mails, Berichte, Präsentationsrohentwürfe, erste Datenanalysen – die KI übernimmt Wiederholbares. So bleibt Zeit für schwierige Entscheidungen und Menschenkontakt – wenn die Organisation passt.',
    duration: 3
  },
  {
    id: 'am17',
    title: 'KI und Arbeit: sich wandelnde Berufe',
    content:
      'Marketing, Programmierung, Design, Übersetzung, Jura – die KI „streicht“ Berufe nicht weg, sie verändert Werkzeuge. Wert wandert von reiner Tipp-Arbeit zu Aufgaben formulieren, Qualität prüfen und Komplexes erklären.',
    duration: 3
  },
  {
    id: 'am18',
    title: 'Humor: „KI nimmt Ihren Job – oder der Praktikant mit KI“',
    content:
      'Scherz: „KI raubt Ihnen nicht den Job – aber der Kollege, der KI nutzt.“ Dazu: Wer kritisch denkt und nicht nur kopiert, gewinnt.',
    duration: 3
  },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-am-6-1-de',
        text: 'Was kann KI am Arbeitsplatz besonders gut?',
        type: 'multiple-choice',
        options: ['Strategische Entscheidungen', 'Den Chef ersetzen', 'Routine automatisieren', 'Firmenfeste organisieren'],
        correctAnswer: 2,
        explanation: 'Vorlagen und wiederkehrende Aufgaben.'
      },
      {
        id: 'q-am-6-2-de',
        text: 'Wie verändert sich die Rolle von Fachleuten?',
        type: 'multiple-choice',
        options: ['Nur noch Knopf drücken', 'Noch mehr von Hand tippen', 'Mehr Prompt und Prüfung', 'KI meiden'],
        correctAnswer: 2,
        explanation: 'Fragen stellen und Ergebnis prüfen.'
      },
      {
        id: 'q-am-6-3-de',
        text: 'Wer nimmt Ihren Job laut Witz?',
        type: 'multiple-choice',
        options: ['Die KI selbst', 'Der Staubsaugerroboter', 'Der Mensch mit KI-Kompetenz', 'Niemand'],
        correctAnswer: 2,
        explanation: 'Umgang mit KI wird zum Vorteil.'
      }
    ]
  },
  {
    id: 'am19',
    title: 'KI in Bildung: Hilfe und Risiken',
    content:
      'Komplexes einfach erklären, Übungen erzeugen, Tests vorbereiten – möglich. Aber Plagiate und Trugbild von Verstand: „Text da – also weiß ich’s.“ Klare Regeln für ehrliche Nutzung nötigen.',
    duration: 3
  },
  {
    id: 'am20',
    title: 'Liebenswerter Fakt: KI-Tutor rund um die Uhr',
    content:
      'Einige Schulen testen KI-Tutoren, die nachts Fragen beantworten. Studierende stellen der KI mehr „peinliche“ Fragen als dem Professor – Anonymität senkt die Angst vor dummem Aussehen.',
    duration: 3
  },
  {
    id: 'am21',
    title: 'KI und Kreativität: Co-Autor, nicht Autor',
    content:
      'Musik, Verse, Plots, Bilder – die KI liefert Varianten und Impulse. Sie hat keine eigene Biografie, kein echtes Leid. Kunst entsteht, wenn der Mensch KI als Werkzeug nutzt, nicht als Ersatz für sich selbst.',
    duration: 3
  },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-am-7-1-de',
        text: 'Wobei hilft KI im Unterricht?',
        type: 'multiple-choice',
        options: [
          'Sie speichert alle Schulbücher',
          'Erklären und üben 24/7',
          'Sie ersetzt alle Lehrer',
          'Sie schreibt Prüfungen mit'
        ],
        correctAnswer: 1,
        explanation: 'Immer verfügbar, kann umschreiben und üben.'
      },
      {
        id: 'q-am-7-2-de',
        text: 'Unerwarteter Effekt von KI-Tutoren?',
        type: 'multiple-choice',
        options: [
          'Niemand lernt mehr',
          'Mehr „unbequeme“ Fragen',
          'Vergessen alles',
          'Lehrer sind beleidigt'
        ],
        correctAnswer: 1,
        explanation: 'Weniger Scham vor „einfachen“ Fragen.'
      },
      {
        id: 'q-am-7-3-de',
        text: 'Welche Rolle soll die KI in der Kunst spielen?',
        type: 'multiple-choice',
        options: ['Alleiniger Autor', 'Zensor', 'Co-Autor und Ideengeber', 'Kritiker'],
        correctAnswer: 2,
        explanation: 'Werkzeug, nicht Ersatz-Person.'
      }
    ]
  },
  {
    id: 'am22',
    title: 'Ethik und Regulierung',
    content:
      'Staaten diskutieren KI-Gesetze: Transparenz, Verbot riskanter Anwendungen (Social Scoring, Massenüberwachung), Urheberrecht. Regeln hinken der Technik hinterher – ohne sie steigen die Risiken.',
    duration: 3
  },
  {
    id: 'am23',
    title: 'Humor: „40 Seiten AGB – hat niemand gelesen, auch nicht die KI“',
    content:
      'Nutzer klicken „Akzeptieren“ ohne Lesen. KI trainiert auf Texten, die niemand zu Ende liest. Wer versteht die Bedingungen wirklich? Offene Frage.',
    duration: 3
  },
  {
    id: 'am24',
    title: 'Fazit: Vernunft im Umgang mit KI',
    content:
      'Als Assistent nutzen, nicht als Orakel. Nicht blind vertrauen, keine Geheimnisse preisgeben, Verzerrungen in Daten bedenken. Prompts lernen und kritisch denken – der beste „Schutz“ gegen KI-Fehler.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-modern/summary.jpg', title: 'Fazit' }]
  },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-am-8-1-de',
        text: 'Warum KI regulieren?',
        type: 'multiple-choice',
        options: ['Technik verbieten', 'Alles bremsen', 'Gefährliche Nutzung begrenzen, Menschen schützen', 'Nur Formalität'],
        correctAnswer: 2,
        explanation: 'Risiken und Missbrauch begrenzen.'
      },
      {
        id: 'q-am-8-2-de',
        text: 'Kernregel für sinnvollen KI-Einsatz?',
        type: 'multiple-choice',
        options: ['Allem glauben', 'Gar nicht nutzen', 'Als Helfer nutzen und prüfen', 'Nur Wetter fragen'],
        correctAnswer: 2,
        explanation: 'Mensch bleibt verantwortlich.'
      },
      {
        id: 'q-am-8-3-de',
        text: 'Was ist ein „Antivirus“ gegen KI-Fehler?',
        type: 'multiple-choice',
        options: ['Neuer Chatbot', 'Ein Antivirusprogramm', 'Kritisches Denken des Menschen', 'Backup'],
        correctAnswer: 2,
        explanation: 'Prüfen und Quellen vergleichen.'
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
        id: 'q-am-9-1-de',
        text: 'Warum „halluziniert“ KI manchmal?',
        type: 'multiple-choice',
        options: ['Server schläft', 'Absicht fürs Lachen', 'Sie setzt Text wahrscheinlich fort, ohne zu wissen', 'Ein Virus'],
        correctAnswer: 2,
        explanation: 'Kein Unterschied zwischen Wissen und Raten.'
      },
      {
        id: 'q-am-9-2-de',
        text: 'Wichtige Passwörter in KI speichern?',
        type: 'multiple-choice',
        options: ['Ja, praktisch', 'Nur eines', 'Nur wenn kompliziert', 'Nein, unsicher'],
        correctAnswer: 3,
        explanation: 'Nicht an externe Dienste geben.'
      },
      {
        id: 'q-am-9-3-de',
        text: 'Wie wirkt KI auf Berufe?',
        type: 'multiple-choice',
        options: ['Alle rausgeworfen', 'Nichts ändert sich', 'Werkzeuge und Aufgaben wandeln sich', 'Nur neue Chefs'],
        correctAnswer: 2,
        explanation: 'Transformation, kein sofortiges Verschwinden.'
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
        id: 'q-am-10-1-de',
        text: 'Was kann moderne KI nicht?',
        type: 'multiple-choice',
        options: ['Text erzeugen', 'Bilder erzeugen', 'Eigenes Erleben und Gefühle haben', 'Sprachen übersetzen'],
        correctAnswer: 2,
        explanation: 'Kein Bewusstsein, kein echtes Erleben.'
      },
      {
        id: 'q-am-10-2-de',
        text: 'Beste Metapher für KI in der Kunst?',
        type: 'multiple-choice',
        options: ['Künstler komplett ersetzen', 'Pinsel in der Hand des Künstlers', 'Oberzensor', 'Zufälliger Zuschauer'],
        correctAnswer: 1,
        explanation: 'Instrument, keine Biografie.'
      },
      {
        id: 'q-am-10-3-de',
        text: 'Einfacher Rat für sicheren KI‑Umgang?',
        type: 'multiple-choice',
        options: ['Nichts fragen', 'Immer glauben', 'Keine Geheimnisse, Fakten prüfen', 'Nur KAPLOCK'],
        correctAnswer: 2,
        explanation: 'Datenschutz und Verifikation.'
      }
    ]
  }
]

export const aiModernFinalQuizDE: QuizBlock = {
  id: 'quiz-ai-modern-de',
  title: 'Abschlussquiz: Moderne KI – Fähigkeiten und Grenzen',
  questions: [
    {
      id: 'q-am-1-1-de',
      text: 'Was steckt meist hinter „moderner KI“?',
      type: 'multiple-choice',
      options: ['Ein Supercomputer', 'Große neuronale Modelle auf vielen Daten', 'Regelprogramm', 'Staubsaugerroboter'],
      correctAnswer: 1,
      explanation: 'Große neuronale Netze.'
    },
    {
      id: 'q-am-1-2-de',
      text: 'Was macht ChatGPT anders als eine Suche?',
      type: 'multiple-choice',
      options: ['Speichert alle Chats', 'Nur Links', 'Erzeugt Text nach Wahrscheinlichkeiten', 'Nur offline'],
      correctAnswer: 2,
      explanation: 'Textgenerierung statt nur Trefferliste.'
    },
    {
      id: 'q-am-2-1-de',
      text: 'Worauf lernen neuronale Netze?',
      type: 'multiple-choice',
      options: ['Wenige Bücher', 'Milliarden Beispielen', 'Nur Mathe', 'Server-Schlaf'],
      correctAnswer: 1,
      explanation: 'Sehr viele Daten.'
    },
    {
      id: 'q-am-2-2-de',
      text: 'Voreingenommenheit in Trainingsdaten?',
      type: 'multiple-choice',
      options: ['Wird korrigiert', 'Nichts', 'Wird übernommen und verstärkt', 'Stoppt das Modell'],
      correctAnswer: 2,
      explanation: 'Bias bleibt im Modell.'
    },
    {
      id: 'q-am-3-2-de',
      text: 'Typisches Limit bei Bildgeneratoren?',
      type: 'multiple-choice',
      options: ['Nur SW', 'Nur Katzen', 'Fingeranzahl', 'Kein Kreis'],
      correctAnswer: 2,
      explanation: 'Oft Probleme mit Fingern.'
    },
    {
      id: 'q-am-4-1-de',
      text: 'Eigenes Erleben bei KI?',
      type: 'multiple-choice',
      options: ['Virtuell', 'Nur große Modelle', 'Nein, nur Statistik', 'Fühlt übers Netz'],
      correctAnswer: 2,
      explanation: 'Kein Körper, kein Erleben.'
    },
    {
      id: 'q-am-5-1-de',
      text: 'Hauptgefahr bei ernstem Einsatz?',
      type: 'multiple-choice',
      options: ['Langsam', 'Zu ehrlich', 'Blindes Vertrauen in Halluzinationen', 'Zu teuer'],
      correctAnswer: 2,
      explanation: 'Prüfung nötig.'
    },
    {
      id: 'q-am-5-2-de',
      text: 'Was nicht in öffentliche KI?',
      type: 'multiple-choice',
      options: ['Verse', 'Geschenkideen', 'Passwörter und Geheimdokumente', 'Leselisten'],
      correctAnswer: 2,
      explanation: 'Vertrauliches tabu.'
    },
    {
      id: 'q-am-6-1-de',
      text: 'KI am Arbeitsplatz am besten für?',
      type: 'multiple-choice',
      options: ['Strategie', 'Chef ersetzen', 'Routine', 'Partys'],
      correctAnswer: 2,
      explanation: 'Wiederholbare Aufgaben.'
    },
    {
      id: 'q-am-6-3-de',
      text: 'Wer nimmt den Job (Witz)?',
      type: 'multiple-choice',
      options: ['KI', 'Staubsauger', 'Mensch mit KI', 'Niemand'],
      correctAnswer: 2,
      explanation: 'KI-Kenntnis zählt.'
    },
    {
      id: 'q-am-7-1-de',
      text: 'Nutzen in Bildung?',
      type: 'multiple-choice',
      options: ['Speichert Bücher', 'Erklären 24/7', 'Ersetzt Lehrer', 'Schreibt Prüfungen mit'],
      correctAnswer: 1,
      explanation: 'Verfügbarkeit und Üben.'
    },
    {
      id: 'q-am-7-3-de',
      text: 'Rolle in der Kunst?',
      type: 'multiple-choice',
      options: ['Alleinautor', 'Zensor', 'Co-Autor', 'Kritiker'],
      correctAnswer: 2,
      explanation: 'Werkzeug und Impuls.'
    },
    {
      id: 'q-am-8-1-de',
      text: 'Warum regulieren?',
      type: 'multiple-choice',
      options: ['Verbieten', 'Bremsen', 'Schutz und Grenzen', 'Formalität'],
      correctAnswer: 2,
      explanation: 'Risiken begrenzen.'
    },
    {
      id: 'q-am-8-3-de',
      text: 'Schutz vor Fehlern?',
      type: 'multiple-choice',
      options: ['Neuer Bot', 'Antivirus-Software', 'Kritisches Denken', 'Backup'],
      correctAnswer: 2,
      explanation: 'Mensch prüft.'
    },
    {
      id: 'q-am-9-1-de',
      text: 'Warum Halluzinationen?',
      type: 'multiple-choice',
      options: ['Server', 'Witz', 'Wahrscheinlichkeit statt Wissen', 'Virus'],
      correctAnswer: 2,
      explanation: 'Kein echtes Wissen.'
    },
    {
      id: 'q-am-9-2-de',
      text: 'Passwörter in KI?',
      type: 'multiple-choice',
      options: ['Ja', 'Eines', 'Wenn schwer', 'Nein'],
      correctAnswer: 3,
      explanation: 'Unsicher.'
    },
    {
      id: 'q-am-10-1-de',
      text: 'Was kann KI nicht?',
      type: 'multiple-choice',
      options: ['Text', 'Bild', 'Eigenes Fühlen', 'Übersetzen'],
      correctAnswer: 2,
      explanation: 'Kein Bewusstsein.'
    },
    {
      id: 'q-am-10-3-de',
      text: 'Sicherer Umgang?',
      type: 'multiple-choice',
      options: ['Nicht fragen', 'Immer glauben', 'Geheimnisse schützen, Fakten prüfen', 'KAPLOCK'],
      correctAnswer: 2,
      explanation: 'Verifikation.'
    }
  ]
}
