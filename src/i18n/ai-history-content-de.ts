import { Slide, QuizBlock } from '../types/session'

// Deutsche Inhalte (B2) für: Geschichte der Künstlichen Intelligenz

export const aiHistorySlidesDE: Slide[] = [
  {
    id: 'ai1',
    title: '1950: Der Turing-Test',
    content:
      'Alan Turing schlug ein Kriterium für „Intelligenz“ einer Maschine vor: Wenn ein Mensch im Schriftverkehr sie nicht von einem Menschen unterscheiden kann, hat die Maschine den Test bestanden. Der Aufsatz hieß sinngemäß „Kann eine Maschine denken?“ Turing formulierte die Frage so um, um nicht streiten zu müssen, ob es „Bewusstsein“ gibt. Die Philosophen streiten bis heute.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-history/turing.jpg', title: 'Alan Turing' }]
  },
  {
    id: 'ai2',
    title: '1956: Dartmouth – Geburtsstunde des Begriffs „KI“',
    content:
      'Eine Sommertagung am Dartmouth College (USA) brachte McCarthy, Minsky, Newell und Simon zusammen. John McCarthy prägte den Begriff „artificial intelligence“. Die Teilnehmer versprachen, „das Denkproblem in einem Sommer zu lösen“. Das gelang nicht. Aber sie gaben einem ganzen Forschungsfeld seinen Namen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-history/dartmouth.jpg', title: 'Dartmouth 1956' }]
  },
  {
    id: 'ai3',
    title: 'Liebenswerter Fakt: Wer sagte „KI“ zuerst?',
    content:
      'McCarthy 1956. Die Idee einer „denkenden Maschine“ ist jedoch älter. In den 1950ern füllten Computer ganze Säle, kosteten Millionen und leisteten weniger als ein heutiger Taschenrechner. Eine Stunde Rechenzeit bei IBM kostete damals rund 600 Dollar (nach dem Geldwert jener Zeit).',
    duration: 3
  },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ai-1-1-de',
        text: 'Wer schlug den Turing-Test vor?',
        type: 'multiple-choice',
        options: ['McCarthy', 'Turing', 'Minsky', 'Newell'],
        correctAnswer: 1,
        explanation: 'Alan Turing im Jahr 1950.'
      },
      {
        id: 'q-ai-1-2-de',
        text: 'Wo entstand der Begriff „künstliche Intelligenz“?',
        type: 'multiple-choice',
        options: ['Oxford', 'MIT', 'Dartmouth', 'Stanford'],
        correctAnswer: 2,
        explanation: 'Dartmouth-Konferenz 1956.'
      },
      {
        id: 'q-ai-1-3-de',
        text: 'Was tat das Programm „Logic Theorist“?',
        type: 'multiple-choice',
        options: ['Schachspielen', 'Sätze und Theoreme beweisen', 'Texte übersetzen', 'Sprache erkennen'],
        correctAnswer: 1,
        explanation: 'Es bewies mathematische Theoreme.'
      }
    ]
  },
  {
    id: 'ai5',
    title: 'Humor: „Die Maschine denkt – prüfen Sie die Steckdose“',
    content:
      '1960er: Forscher: „Unsere Maschine denkt!“ Kollege: „Sie hat nur 10 000 Befehle ausgeführt.“ Forscher: „Und Sie – 10 Milliarden Neuronen. Wo liegt der Unterschied?“ Kollege: „Ich zahle den Strom selbst.“ Früher Skeptizismus über „echtes Denken“.',
    duration: 3
  },
  {
    id: 'ai6',
    title: 'ELIZA (1966): der erste „Chatbot“',
    content:
      'Joseph Weizenbaum programmierte ELIZA – sie spielte eine Psychotherapeutin und paraphrasierte („Ich fühle Traurigkeit“ → „Warum fühlen Sie Traurigkeit?“). Menschen glaubten, eine verständnisvolle Intelligenz rede mit ihnen. Weizenbaum war entsetzt und wurde zu einem Kritiker der KI.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-history/eliza.jpg', title: 'ELIZA' }]
  },
  {
    id: 'ai7',
    title: 'Historische Anekdote: Sekretärin und ELIZA',
    content:
      'Weizenbaums Sekretärin bat ihn, das Büro zu verlassen, während sie „mit ELIZA spricht“. Er erkannte: Menschen projizieren Fähigkeiten auf Maschinen, die sie nicht haben. Später schrieb er: „Sogar ich glaubte an ELIZA – obwohl ich sie gebaut hatte.“ Die Illusion von Verstehen.',
    duration: 3
  },
  {
    id: 'ai8',
    title: '1968: „2001“ – HAL 9000',
    content:
      'Kubrick zeigte HAL, einen Computer, der Astronauten tötet. HAL wurde zum Symbol der KI-Angst. Gerücht: IBM sei HAL mit Buchstaben um eins verschoben (H→I, A→B, L→M). Zufall oder Andeutung? IBM dementiert.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-history/hal9000.jpg', title: 'HAL 9000' }]
  },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ai-2-1-de',
        text: 'Was tat ELIZA?',
        type: 'multiple-choice',
        options: ['Schachspielen', 'Eine Psychotherapeutin nachahmen', 'Texte übersetzen', 'Raketen steuern'],
        correctAnswer: 1,
        explanation: 'Sie paraphrasierte im Stil einer Therapeutin.'
      },
      {
        id: 'q-ai-2-2-de',
        text: 'Warum erschreckte Weizenbaum über ELIZA?',
        type: 'multiple-choice',
        options: ['Sie fiel aus', 'Menschen glaubten an ihren „Verstand“', 'Sie war zu teuer', 'Sie verlor beim Schach'],
        correctAnswer: 1,
        explanation: 'Menschen sprachen der Maschine Verstehen zu.'
      },
      {
        id: 'q-ai-2-3-de',
        text: 'Was ist HAL 9000?',
        type: 'multiple-choice',
        options: ['Ein realer IBM-Computer', 'Eine fiktive KI aus „2001“', 'Der erste Übersetzer', 'Ein Schachprogramm'],
        correctAnswer: 1,
        explanation: 'Der Computer aus Kubricks Film.'
      }
    ]
  },
  {
    id: 'ai9',
    title: 'Der erste „KI-Winter“ (1970er)',
    content:
      'Die Finanzierung der KI brach ein. Versprechen wie „in zehn Jahren echte KI“ erfüllten sich nicht. Übersetzung, Spracherkennung – Rückschläge. Der Lighthill-Bericht (UK) ließ britische Fördermittel austrocknen. „Winter“ steht metaphorisch für eingefrorenes Geld und weniger Aufmerksamkeit.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-history/ai-winter.jpg', title: 'KI-Winter' }]
  },
  {
    id: 'ai10',
    title: '1970er: Expertensysteme',
    content:
      'Statt „allgemeiner KI“ – schmale Systeme. MYCIN (1972) stellte Diagnosen anhand von Blutwerten – oft besser als junge Ärzte. DENDRAL analysierte chemische Strukturen. Erfolg – doch innen lauter Wenn-Dann-Regeln. Kein „Denken“, sondern eine Wissensbasis.',
    duration: 3
  },
  {
    id: 'ai11',
    title: '1980er: Boom und zweiter Winter',
    content:
      'Japan startete das Projekt „Fünfte Generation“ – zehn Jahre, rund 400 Mio. Dollar. USA und Europa reagierten. Ergebnis: Enttäuschung. Neuronale Netze waren schwach, Expertensysteme skalierten schlecht. Gegen 1990 folgte ein zweiter Winter.',
    duration: 3
  },
  {
    id: 'ai12',
    title: 'Humor: „KI – in 20 Jahren. Immer.“',
    content:
      'Branchenwitz: „KI kommt in 20 Jahren“ – man sagte es 1960, 1980, 2000. Stets „in 20 Jahren“. Bis 2012 wirklich so. Dann brach Deep Learning auf. In den 1990ern glaubte fast niemand daran.',
    duration: 3
  },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ai-3-1-de',
        text: 'Was ist ein „KI-Winter“?',
        type: 'multiple-choice',
        options: ['Kälte in Rechenzentren', 'Rückgang von Finanzierung und Interesse', 'Name eines Supercomputers', 'Eine Winterkonferenz'],
        correctAnswer: 1,
        explanation: 'Phase mit weniger Förderung und Erwartungen.'
      },
      {
        id: 'q-ai-3-2-de',
        text: 'Was tat MYCIN?',
        type: 'multiple-choice',
        options: ['Schachspielen', 'Diagnosen anhand von Blutwerten', 'Texte übersetzen', 'Autofahren'],
        correctAnswer: 1,
        explanation: 'Ein medizinisches Expertensystem.'
      },
      {
        id: 'q-ai-3-3-de',
        text: 'Welches Projekt scheiterte in den 1980ern?',
        type: 'multiple-choice',
        options: ['ARPANET', 'Fünfte Generation (Japan)', 'Apollo', 'Windows'],
        correctAnswer: 1,
        explanation: 'Das japanische KI-Projekt der fünften Generation.'
      }
    ]
  },
  {
    id: 'ai13',
    title: '1997: Deep Blue besiegte Kasparow',
    content:
      'IBMs Deep Blue gewann das Match gegen Garri Kasparow 3,5:2,5. Schach galt als „Gipfel des Denkens“. Kasparow beschuldigte IBM des Betrugs (menschliche Hilfe). Untersuchungen fanden nichts. Die KI wirkte nicht mehr nur wie Science-Fiction.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-history/deep-blue.jpg', title: 'Deep Blue' }]
  },
  {
    id: 'ai14',
    title: 'Historische Anekdote: Zug 37',
    content:
      '1996 machte Deep Blue in der ersten Partie einen Zug, den Experten „menschlich“ nannten – nicht der stärkste, aber fein. Kasparow mutmaßte: „Da sitzt ein Großmeister.“ Es war Zufall. Die Maschine „bluffte“ ohne Absicht.',
    duration: 3
  },
  {
    id: 'ai15',
    title: 'Liebenswerter Fakt: der „smarte“ Kühlschrank',
    content:
      'In den 2000ern brachten LG und Samsung „smarte“ Kühlschränke mit Bildschirm und Internet – Preis über 8000 Dollar. Flop. Wozu ein Display am Kühlschrank? Frühe KI löste oft Probleme, die niemand hatte. Lehre: Technik ersetzt keine echte Nachfrage.',
    duration: 3
  },
  {
    id: 'ai16',
    title: '2000er: KI war „unsichtbar“',
    content:
      'KI steckte überall: Suchmaschinen, Empfehlungen, Spam-Filter, Autokorrektur. Man merkte es kaum – um HAL gab es keine „Person“. Google, Amazon, Netflix – innen KI-Algorithmen. Unspektakulär, aber wirksam.',
    duration: 3
  },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ai-4-1-de',
        text: 'Wen schlug Deep Blue 1997?',
        type: 'multiple-choice',
        options: ['Bobby Fischer', 'Kasparow', 'Karpow', 'Topalow'],
        correctAnswer: 1,
        explanation: 'Garri Kasparow verlor das Match.'
      },
      {
        id: 'q-ai-4-2-de',
        text: 'Warum scheiterten „smarte“ Kühlschränke?',
        type: 'multiple-choice',
        options: ['Sie fielen oft aus', 'Es fehlte ein klarer Nutzen', 'Sie waren zu billig', 'Sie wurden verboten'],
        correctAnswer: 1,
        explanation: 'Technik ohne echten Bedarf.'
      },
      {
        id: 'q-ai-4-3-de',
        text: 'Wo „steckte“ die KI in den 2000ern?',
        type: 'multiple-choice',
        options: ['Nur in Laboren', 'In Suche, Empfehlungen, Filtern', 'Nur in Militärsystemen', 'Nirgends'],
        correctAnswer: 1,
        explanation: 'Google, Netflix, Spam-Filter und mehr.'
      }
    ]
  },
  {
    id: 'ai17',
    title: '2012: Durchbruch beim Deep Learning',
    content:
      'AlexNet – ein neuronales Netz – dominierte den Wettbewerb ImageNet. Der Fehler halbierte sich. Alle stiegen auf Deep Learning um. Daten plus GPUs plus Algorithmen – Erfolgsformel. Beginn eines zweiten KI-Frühlings.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-history/alexnet.jpg', title: 'AlexNet' }]
  },
  {
    id: 'ai18',
    title: '2016: AlphaGo und Go',
    content:
      'Go galt als schwieriger als Schach – mehr Varianten als Atome im Universum. AlphaGo (DeepMind) schlug Weltklasse-Profi Lee Sedol 4:1 mit neuronalen Netzen und Reinforcement Learning. Die Welt sah: KI erreichte auch „intuitive“ Spiele.',
    duration: 3
  },
  {
    id: 'ai19',
    title: 'Humor: „Go – die letzte Bastion“',
    content:
      'Vor 2016: „Schach – Maschine. Go – Kunst, Intuition, Mensch.“ Nach AlphaGo: „Und jetzt?“ Antwort: „Händeschütteln und lächeln.“ Das kann die KI noch schlechter – aber vielleicht nicht mehr lange.',
    duration: 3
  },
  {
    id: 'ai20',
    title: '2022: ChatGPT und Massen-KI',
    content:
      'OpenAI veröffentlichte ChatGPT – einen Chatbot für fast jedes Thema. Innerhalb von zwei Monaten rund 100 Millionen Nutzer. Texte, Code, Übersetzungen, Aufsätze. Schulen verbieten, Firmen integrieren. KI wurde „für alle“ greifbar.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-history/chatgpt.jpg', title: 'ChatGPT' }]
  },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ai-5-1-de',
        text: 'Was löste 2012 die Sackgasse?',
        type: 'multiple-choice',
        options: ['Quantencomputer', 'Deep Learning (neuronale Netze)', 'Neue Programmiersprache', 'Mehr Geld allein'],
        correctAnswer: 1,
        explanation: 'AlexNet und neuronale Netze.'
      },
      {
        id: 'q-ai-5-2-de',
        text: 'Welches Spiel spielte AlphaGo?',
        type: 'multiple-choice',
        options: ['Schach', 'Go', 'Poker', 'Scrabble'],
        correctAnswer: 1,
        explanation: 'Go – das ostasiatische Brettspiel.'
      },
      {
        id: 'q-ai-5-3-de',
        text: 'Wann kam ChatGPT?',
        type: 'multiple-choice',
        options: ['2019', '2020', '2022', '2024'],
        correctAnswer: 2,
        explanation: 'November 2022.'
      }
    ]
  },
  {
    id: 'ai21',
    title: 'Zyklen: Winter – Frühling',
    content:
      'Die KI erlebte mindestens zwei Winter (1970er, 1990er). Ursachen: überzogene Versprechen, zu wenig Rechenleistung und Daten. Jeder Frühling brachte eine neue Methode: Expertensysteme, neuronale Netze, Big Data. Geschichte wiederholt sich – mit neuer Technik.',
    duration: 3
  },
  {
    id: 'ai22',
    title: 'Turing und Verfolgung',
    content:
      'Turing war schwul. 1952 verurteilte man ihn, man bot „Behandlung“ mit Hormonen an. 1954 nahm er sich mit Zyanid das Leben. Erst 2013 begnadigte die Königin ihn posthum. Tragödie: Der Codeknacker der Enigma fiel Urteil und Vorurteil zum Opfer.',
    duration: 3
  },
  {
    id: 'ai23',
    title: 'Humor: „Die Maschine denkt – der Mensch… auch?“',
    content:
      'Philosoph: „Die Maschine denkt nicht, sie rechnet.“ Ingenieur: „Und Sie?“ Philosoph: „Ich reflektiere.“ Ingenieur: „Auch nur erregte Neuronen. Nur anders komplex.“ Philosoph: „Aber ich habe Bewusstsein!“ Ingenieur: „Beweisen Sie es.“ Pause.',
    duration: 3
  },
  {
    id: 'ai24',
    title: 'Ethik von Anfang an',
    content:
      'Asimov formulierte die Robotergesetze (1942). Weizenbaum warnte vor KI-Risiken (1970er). Heute: Debatten über Verzerrungen (Bias), Datenschutz und Arbeitswelt. KI-Ethik ist kein Mode-Wort – sie ist alt.',
    duration: 3
  },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ai-6-1-de',
        text: 'Wie viele „Winter“ erlebte die KI mindestens?',
        type: 'multiple-choice',
        options: ['Einen', 'Mindestens zwei', 'Fünf', 'Keinen'],
        correctAnswer: 1,
        explanation: '1970er und 1990er.'
      },
      {
        id: 'q-ai-6-2-de',
        text: 'Was geschah mit Turing in den 1950ern?',
        type: 'multiple-choice',
        options: ['Nobelpreis', 'Verurteilung wegen Homosexualität', 'Er baute den ersten PC', 'Er zog in die USA'],
        correctAnswer: 1,
        explanation: 'Verurteilung und „Behandlung“.'
      },
      {
        id: 'q-ai-6-3-de',
        text: 'Wer formulierte die Robotergesetze?',
        type: 'multiple-choice',
        options: ['Turing', 'Asimov', 'Clarke', 'Heinlein'],
        correctAnswer: 1,
        explanation: 'Isaac Asimov 1942.'
      }
    ]
  },
  {
    id: 'ai25',
    title: 'Frank Rosenblatt und das Perzeptron (1958)',
    content:
      'Rosenblatt baute das Perzeptron – Vorläufer neuronaler Netze. Es erkannte einfache Formen. Die New York Times schrieb von einem „Keim einer Maschine, die gehen, sprechen und denken kann“. Später zeigte Marvin Minsky Grenzen auf – das Interesse an neuronalen Netzen sank für Jahrzehnte.',
    duration: 3
  },
  {
    id: 'ai26',
    title: 'Liebenswerter Fakt: der Lighthill-Bericht',
    content:
      '1973: James Lighthill lieferte Großbritannien einen Bericht. Fazit: KI überbewertet, wenig praktischer Nutzen. Folge: drastische Kürzung der Förderung. Britische KI stockte. Ein Bericht – Jahre Verzögerung.',
    duration: 3
  },
  {
    id: 'ai27',
    title: 'Japanischer Kochroboter und „französische Küche“',
    content:
      '1982: japanisches Projekt eines Kochroboters nach Rezepten. Flop – „Karotten schneiden“ braucht Tausende Regeln. Was der Mensch „automatisch“ tut, ist für die Maschine extrem schwer. „Gesunder Menschenverstand“ bleibt eine Kernschwierigkeit der KI.',
    duration: 3
  },
  {
    id: 'ai28',
    title: 'Humor: „Taschenrechner plus Papagei“',
    content:
      'Frage der 1960er: „Was ist KI?“ Skeptiker: „Ein Taschenrechner, der ‚Hallo‘ sagt.“ Heutige KI: „Ein Taschenrechner, der Wikipedia nachplappert – und manchmal lügt.“ Fortschritt ja – die Metapher trifft trotzdem noch.',
    duration: 3
  },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ai-7-1-de',
        text: 'Wer schuf das Perzeptron?',
        type: 'multiple-choice',
        options: ['Turing', 'Rosenblatt', 'McCarthy', 'Minsky'],
        correctAnswer: 1,
        explanation: 'Frank Rosenblatt, 1958.'
      },
      {
        id: 'q-ai-7-2-de',
        text: 'Was bewirkte der Lighthill-Bericht?',
        type: 'multiple-choice',
        options: ['Er pries die KI', 'Er kürzte britische Förderung stark', 'Er erfand die erste KI', 'Nichts'],
        correctAnswer: 1,
        explanation: 'Kritischer Bericht 1973.'
      },
      {
        id: 'q-ai-7-3-de',
        text: 'Warum scheiterte der Kochroboter?',
        type: 'multiple-choice',
        options: ['Geld fehlte', 'Alltagswissen ist zu komplex', 'Japan gab auf', 'Verbot'],
        correctAnswer: 1,
        explanation: 'Einfache Handlungen brauchen riesige Regelmengen.'
      }
    ]
  },
  {
    id: 'ai29',
    title: 'Fazit: Von Versprechen zur Wirklichkeit',
    content:
      'Die KI ging von „bald“ zu „schon da“. Der Turing-Test ist sinnphilosophisch unklar – aber Chatbots täuschen Menschen. Geschichte der KI: Hoffnung und Ernüchterung im Wechsel. Doch jede Phase hinterließ Werkzeuge: von Expertensystemen bis GPT.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-history/summary.jpg', title: 'Fazit' }]
  },
  {
    id: 'ai30',
    title: 'Schluss: Was kommt danach?',
    content:
      'Geschichte der KI ist Vorgeschichte. Jetzt beginnt breite Anwendung. Offen: Kontrolle, Arbeit, Bildung, Sicherheit. Lehre: kurzfristig nicht überschätzen, langfristig nicht unterschätzen. Die KI verändert die Welt – aber nicht so schnell, wie manche fürchten.',
    duration: 3,
    media: [{ type: 'image', url: '/media/ai-history/future.jpg', title: 'Zukunft' }]
  },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ai-8-1-de',
        text: 'Ist der Turing-Test heute „bestanden“?',
        type: 'multiple-choice',
        options: [
          'Ja, vollständig',
          'Sinnhaft nein, aber Bots täuschen oft',
          'Er war nie relevant',
          'Nur beim Schach'
        ],
        correctAnswer: 1,
        explanation: 'Chatbots täuschen, „verstehen“ aber nicht im menschlichen Sinn.'
      },
      {
        id: 'q-ai-8-2-de',
        text: 'Hauptlektion aus der KI-Geschichte?',
        type: 'multiple-choice',
        options: [
          'Alles scheiterte',
          'Wechsel aus Hoffnung und Ernüchterung',
          'Die KI kann schon alles',
          'KI ist Mythos'
        ],
        correctAnswer: 1,
        explanation: 'Zyklen – mit trotzdem echtem Fortschritt.'
      },
      {
        id: 'q-ai-8-3-de',
        text: 'Was sollte man mit KI vermeiden?',
        type: 'multiple-choice',
        options: ['Sie zu nutzen', 'Sie kurzfristig zu überschätzen', 'Sie zu studieren', 'Zu investieren'],
        correctAnswer: 1,
        explanation: 'Weder über- noch unterschätzen.'
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
        id: 'q-ai-9-1-de',
        text: 'In welchem Jahr war die Dartmouth-Tagung?',
        type: 'multiple-choice',
        options: ['1950', '1956', '1966', '1976'],
        correctAnswer: 1,
        explanation: '1956 – Geburt des Begriffs KI.'
      },
      {
        id: 'q-ai-9-2-de',
        text: 'Wen oder was spielte ELIZA nach?',
        type: 'multiple-choice',
        options: ['Schachgroßmeister', 'Übersetzer', 'Psychotherapeut', 'Fahrer'],
        correctAnswer: 2,
        explanation: 'Therapie im Rogers-Stil.'
      },
      {
        id: 'q-ai-9-3-de',
        text: '1997: wer gewann – Deep Blue oder Kasparow?',
        type: 'multiple-choice',
        options: ['Kasparow', 'Deep Blue', 'Remis', 'Kein Match'],
        correctAnswer: 1,
        explanation: 'Deep Blue gewann 3,5:2,5.'
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
        id: 'q-ai-10-1-de',
        text: 'Warum scheiterten „smarte“ Kühlschränke?',
        type: 'multiple-choice',
        options: ['Zu teuer allein', 'Kein klarer Nutzen', 'Zu defekt', 'Verboten'],
        correctAnswer: 1,
        explanation: 'Technik ohne Bedarf.'
      },
      {
        id: 'q-ai-10-2-de',
        text: 'Welches Spiel galt als „schwerer als Schach“?',
        type: 'multiple-choice',
        options: ['Dame', 'Go', 'Poker', 'Scrabble'],
        correctAnswer: 1,
        explanation: 'Go – gewaltige Zahl von Varianten.'
      },
      {
        id: 'q-ai-10-3-de',
        text: 'Wer verfasste den kritischen KI-Bericht 1973?',
        type: 'multiple-choice',
        options: ['Turing', 'McCarthy', 'Lighthill', 'Minsky'],
        correctAnswer: 2,
        explanation: 'Der Lighthill-Bericht in Großbritannien.'
      }
    ]
  }
]

export const aiHistoryFinalQuizDE: QuizBlock = {
  id: 'quiz-ai-history-de',
  title: 'Abschlussquiz: Geschichte der Künstlichen Intelligenz',
  questions: [
    {
      id: 'q-ai-1-1-de',
      text: 'Wer schlug den Turing-Test vor?',
      type: 'multiple-choice',
      options: ['McCarthy', 'Turing', 'Minsky', 'Newell'],
      correctAnswer: 1,
      explanation: 'Alan Turing 1950.'
    },
    {
      id: 'q-ai-2-1-de',
      text: 'Was tat ELIZA?',
      type: 'multiple-choice',
      options: ['Schachspielen', 'Eine Psychotherapeutin nachahmen', 'Texte übersetzen', 'Raketen steuern'],
      correctAnswer: 1,
      explanation: 'Paraphrasieren im Therapeutenstil.'
    },
    {
      id: 'q-ai-3-1-de',
      text: 'Was ist ein „KI-Winter“?',
      type: 'multiple-choice',
      options: ['Kälte in Rechenzentren', 'Rückgang von Finanzierung und Interesse', 'Supercomputer-Name', 'Winterkonferenz'],
      correctAnswer: 1,
      explanation: 'Weniger Förderung und Interesse.'
    },
    {
      id: 'q-ai-4-1-de',
      text: 'Wen schlug Deep Blue 1997?',
      type: 'multiple-choice',
      options: ['Bobby Fischer', 'Kasparow', 'Karpow', 'Topalow'],
      correctAnswer: 1,
      explanation: 'Garri Kasparow.'
    },
    {
      id: 'q-ai-5-1-de',
      text: 'Was löste 2012 die Sackgasse?',
      type: 'multiple-choice',
      options: ['Quantencomputer', 'Deep Learning', 'Neue Sprache', 'Mehr Geld'],
      correctAnswer: 1,
      explanation: 'AlexNet und neuronale Netze.'
    },
    {
      id: 'q-ai-6-1-de',
      text: 'Wie viele „Winter“ erlebte die KI mindestens?',
      type: 'multiple-choice',
      options: ['Einen', 'Mindestens zwei', 'Fünf', 'Keinen'],
      correctAnswer: 1,
      explanation: '1970er und 1990er.'
    },
    {
      id: 'q-ai-7-1-de',
      text: 'Wer schuf das Perzeptron?',
      type: 'multiple-choice',
      options: ['Turing', 'Rosenblatt', 'McCarthy', 'Minsky'],
      correctAnswer: 1,
      explanation: 'Frank Rosenblatt, 1958.'
    },
    {
      id: 'q-ai-8-1-de',
      text: 'Ist der Turing-Test heute „bestanden“?',
      type: 'multiple-choice',
      options: ['Ja, vollständig', 'Sinnhaft nein, aber Bots täuschen oft', 'Nie relevant', 'Nur beim Schach'],
      correctAnswer: 1,
      explanation: 'Chatbots täuschen Menschen.'
    },
    {
      id: 'q-ai-9-1-de',
      text: 'In welchem Jahr war die Dartmouth-Tagung?',
      type: 'multiple-choice',
      options: ['1950', '1956', '1966', '1976'],
      correctAnswer: 1,
      explanation: '1956.'
    },
    {
      id: 'q-ai-10-1-de',
      text: 'Warum scheiterten „smarte“ Kühlschränke?',
      type: 'multiple-choice',
      options: ['Zu teuer', 'Kein klarer Nutzen', 'Zu defekt', 'Verboten'],
      correctAnswer: 1,
      explanation: 'Technik ohne Bedarf.'
    },
    {
      id: 'q-ai-1-2-de',
      text: 'Wo entstand der Begriff „künstliche Intelligenz“?',
      type: 'multiple-choice',
      options: ['Oxford', 'MIT', 'Dartmouth', 'Stanford'],
      correctAnswer: 2,
      explanation: 'Dartmouth 1956.'
    },
    {
      id: 'q-ai-2-2-de',
      text: 'Warum erschreckte Weizenbaum über ELIZA?',
      type: 'multiple-choice',
      options: ['Sie fiel aus', 'Menschen glaubten an ihren „Verstand“', 'Zu teuer', 'Schachniederlage'],
      correctAnswer: 1,
      explanation: 'Zuschreibung von Verstehen.'
    },
    {
      id: 'q-ai-3-2-de',
      text: 'Was tat MYCIN?',
      type: 'multiple-choice',
      options: ['Schach', 'Diagnosen anhand von Blut', 'Übersetzen', 'Autofahren'],
      correctAnswer: 1,
      explanation: 'Expertensystem.'
    },
    {
      id: 'q-ai-4-2-de',
      text: 'Warum scheiterten „smarte“ Kühlschränke?',
      type: 'multiple-choice',
      options: ['Defekte', 'Kein Bedarf', 'Zu billig', 'Verbot'],
      correctAnswer: 1,
      explanation: 'Kein klarer Nutzen.'
    },
    {
      id: 'q-ai-5-2-de',
      text: 'Welches Spiel spielte AlphaGo?',
      type: 'multiple-choice',
      options: ['Schach', 'Go', 'Poker', 'Scrabble'],
      correctAnswer: 1,
      explanation: 'Go.'
    },
    {
      id: 'q-ai-6-2-de',
      text: 'Was geschah mit Turing in den 1950ern?',
      type: 'multiple-choice',
      options: ['Nobelpreis', 'Verurteilung wegen Homosexualität', 'Erster PC', 'USA'],
      correctAnswer: 1,
      explanation: 'Verurteilung.'
    },
    {
      id: 'q-ai-7-2-de',
      text: 'Was bewirkte der Lighthill-Bericht?',
      type: 'multiple-choice',
      options: ['Lob für KI', 'Kürzung britischer Mittel', 'Erste KI', 'Nichts'],
      correctAnswer: 1,
      explanation: 'Kritik 1973.'
    },
    {
      id: 'q-ai-8-2-de',
      text: 'Hauptlektion aus der KI-Geschichte?',
      type: 'multiple-choice',
      options: ['Alles scheiterte', 'Wechsel aus Hoffnung und Ernüchterung', 'KI kann schon alles', 'KI ist Mythos'],
      correctAnswer: 1,
      explanation: 'Zyklen mit Fortschritt.'
    },
    {
      id: 'q-ai-9-2-de',
      text: 'Wen oder was spielte ELIZA nach?',
      type: 'multiple-choice',
      options: ['Schachspieler', 'Übersetzer', 'Psychotherapeut', 'Fahrer'],
      correctAnswer: 2,
      explanation: 'Therapeut.'
    },
    {
      id: 'q-ai-10-2-de',
      text: 'Welches Spiel galt als „schwerer als Schach“?',
      type: 'multiple-choice',
      options: ['Dame', 'Go', 'Poker', 'Scrabble'],
      correctAnswer: 1,
      explanation: 'Go.'
    },
    {
      id: 'q-ai-1-3-de',
      text: 'Was tat der „Logic Theorist“?',
      type: 'multiple-choice',
      options: ['Schach', 'Theoreme beweisen', 'Übersetzen', 'Sprache erkennen'],
      correctAnswer: 1,
      explanation: 'Theoreme beweisen.'
    },
    {
      id: 'q-ai-2-3-de',
      text: 'Was ist HAL 9000?',
      type: 'multiple-choice',
      options: ['IBM-Computer', 'KI aus „2001“', 'Übersetzer', 'Schachprogramm'],
      correctAnswer: 1,
      explanation: 'Kubricks Film.'
    },
    {
      id: 'q-ai-3-3-de',
      text: 'Welches Projekt scheiterte in den 1980ern?',
      type: 'multiple-choice',
      options: ['ARPANET', 'Fünfte Generation', 'Apollo', 'Windows'],
      correctAnswer: 1,
      explanation: 'Japanisches Projekt.'
    },
    {
      id: 'q-ai-4-3-de',
      text: 'Wo „steckte“ die KI in den 2000ern?',
      type: 'multiple-choice',
      options: ['Nur Labore', 'Suche, Empfehlungen, Filter', 'Nur Militär', 'Nirgends'],
      correctAnswer: 1,
      explanation: 'Google, Netflix usw.'
    },
    {
      id: 'q-ai-5-3-de',
      text: 'Wann kam ChatGPT?',
      type: 'multiple-choice',
      options: ['2019', '2020', '2022', '2024'],
      correctAnswer: 2,
      explanation: '2022.'
    },
    {
      id: 'q-ai-6-3-de',
      text: 'Wer formulierte die Robotergesetze?',
      type: 'multiple-choice',
      options: ['Turing', 'Asimov', 'Clarke', 'Heinlein'],
      correctAnswer: 1,
      explanation: 'Asimov.'
    },
    {
      id: 'q-ai-7-3-de',
      text: 'Warum scheiterte der Kochroboter?',
      type: 'multiple-choice',
      options: ['Kein Geld', 'Alltagswissen zu schwer', 'Japan brach ab', 'Verbot'],
      correctAnswer: 1,
      explanation: 'Einfache Handlungen = viele Regeln.'
    },
    {
      id: 'q-ai-8-3-de',
      text: 'Was sollte man mit KI vermeiden?',
      type: 'multiple-choice',
      options: ['Nutzung', 'Kurzfristige Überschätzung', 'Studium', 'Investition'],
      correctAnswer: 1,
      explanation: 'Nicht über- oder unterschätzen.'
    },
    {
      id: 'q-ai-9-3-de',
      text: '1997: wer gewann?',
      type: 'multiple-choice',
      options: ['Kasparow', 'Deep Blue', 'Remis', 'Kein Match'],
      correctAnswer: 1,
      explanation: 'Deep Blue.'
    },
    {
      id: 'q-ai-10-3-de',
      text: 'Wer verfasste den kritischen Bericht 1973?',
      type: 'multiple-choice',
      options: ['Turing', 'McCarthy', 'Lighthill', 'Minsky'],
      correctAnswer: 2,
      explanation: 'Lighthill.'
    }
  ]
}
