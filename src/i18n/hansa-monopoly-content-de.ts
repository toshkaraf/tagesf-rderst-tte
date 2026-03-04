import { Slide, QuizBlock } from '../types/session'

// Deutsche Inhalte (B1–B2) für:
// „Ганза: картель и монополия“ / „Hanse: Kartell und Monopol“

export const hansaMonopolySlidesDE: Slide[] = [
  {
    id: 'h1',
    title: 'Die Hanse – Kartell ohne Staat',
    content:
      'Die Hanse (Hanseatic League) war ein Bund von rund 200 Städten in Nord­europa (13.–17. Jh.). Kein König, kein Kaiser – aber ein Kartell. Sie kontrollierte Handel von London bis Nowgorod: Fisch, Felle, Wachs, Getreide, Holz, Bernstein. Ohne Armee, aber mit Blockaden – der erste transnationale Wirtschaftskartell der Geschichte.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/hansa-main.jpg', title: 'Hanse' }]
  },
  {
    id: 'h2',
    title: 'Lübeck – Hauptstadt des Handelsimperiums',
    content:
      'Lübeck in Norddeutschland war die „Königin der Hanse“. Gegründet 1143, beherrschte die Stadt wichtige Ostsee­wege. Hier trafen sich die Kaufleute, beschlossen Blockaden und Preise. Mit rund 25.000 Einwohnern war Lübeck riesig und reicher als viele Könige – ein Stadtstaat, der ganze Länder unter Druck setzen konnte.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/lubeck.jpg', title: 'Lübeck' }]
  },
  {
    id: 'h3',
    title: 'Wie funktionierte das Monopol?',
    content:
      'Die Hanse kontrollierte Hering, Salz, Wachs, Felle, Getreide, Holz und Bernstein. Kaufleute verabredeten Mindestpreise – wer billiger verkaufte, wurde ausgeschlossen und wirtschaftlich zerstört. Für ungehorsame Städte drohte Blockade: Niemand durfte mehr mit ihnen handeln. Für Könige war das tödlicher als eine Schlacht.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/monopoly.jpg', title: 'Monopol' }]
  },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-h-1-1-de',
        text: 'Was war die Hanse vor allem?',
        type: 'multiple-choice',
        options: ['Ein Staat', 'Ein Handelskartell von Städten', 'Ein Ritterorden', 'Ein Klosterbund'],
        correctAnswer: 1,
        explanation: 'Die Hanse war ein Bund von Städten mit gemeinsamem Handel und Preisen – ein Kartell.'
      },
      {
        id: 'q-h-1-2-de',
        text: 'Welche Stadt galt als „Königin der Hanse“?',
        type: 'multiple-choice',
        options: ['Hamburg', 'Lübeck', 'Berlin', 'Köln'],
        correctAnswer: 1,
        explanation: 'Lübeck war Zentrum und Symbol der Hanse.'
      },
      {
        id: 'q-h-1-3-de',
        text: 'Wie bestrafte die Hanse ungehorsame Partner?',
        type: 'multiple-choice',
        options: ['Mit Armeen', 'Mit Blockaden', 'Mit Kirchenstrafen', 'Mit hohen Zöllen'],
        correctAnswer: 1,
        explanation: 'Blockaden – niemand durfte mehr mit der Stadt handeln.'
      }
    ]
  },
  {
    id: 'h4',
    title: 'Humor: „Tritt bei – oder verhungere“',
    content:
      'Eine Stadt weigert sich, der Hanse beizutreten. Die Antwort: Handelsboykott. Häfen verweigern die Aufnahme, Kaufleute drehen sich weg. Nach einem Hungerjahr klopfen die Ratsherren an die Tür der Hanse: „Wir möchten gerne Mitglied werden.“ Antwort: „Gerne – plus Aufnahmegebühr und Strafe.“ Freiwilliger Zwang.',
    duration: 3
  },
  {
    id: 'h5',
    title: 'Kontore – Büros im Ausland',
    content:
      'Die Hanse richtete in fremden Städten Kontore ein – abgeschlossene Handelshöfe. Vier Hauptkontore lagen in Nowgorod, Brügge, London und Bergen. Dort gab es eigene Lager, Gericht, Wachmannschaften und sogar eigene Kirchen. Einheimische Händler hatten kaum Zugang – die Hanse kontrollierte den Handel „an der Quelle“.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/kontor.jpg', title: 'Kontor' }]
  },
  {
    id: 'h6',
    title: 'Nowgorod: „Peterhof“ – Hof des heiligen Petrus',
    content:
      'Seit dem 12. Jahrhundert kaufte die Hanse in Nowgorod Felle, Wachs und Honig. Das Kontor „Peterhof“ war von Mauern umgeben; Russen durften nicht hinein. Deutsche Kaufleute lebten getrennt und handelten nur untereinander. 1494 ließ Iwan III. den Peterhof schließen und die Waren beschlagnahmen – ein schwerer Schlag für die Hanse.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/novgorod.jpg', title: 'Nowgorod' }]
  },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-h-2-1-de',
        text: 'Was war ein hanseatisches Kontor?',
        type: 'multiple-choice',
        options: ['Ein Kriegsschiff', 'Ein Handelsviertel der Hanse in einer fremden Stadt', 'Eine Steuer', 'Ein Kloster'],
        correctAnswer: 1,
        explanation: 'Kontore waren geschlossene Handelshöfe mit eigenen Regeln.'
      },
      {
        id: 'q-h-2-2-de',
        text: 'Wie hieß das Kontor in Nowgorod?',
        type: 'multiple-choice',
        options: ['Kreml', 'Peterhof', 'Markt', 'Zwinger'],
        correctAnswer: 1,
        explanation: 'Der „Peterhof“ war der Hof des heiligen Petrus.'
      },
      {
        id: 'q-h-2-3-de',
        text: 'Was geschah 1494 mit dem Peterhof?',
        type: 'multiple-choice',
        options: [
          'Er wurde vergrößert',
          'Er wurde von Piraten zerstört',
          'Iwan III. schloss ihn und konfiszierte die Waren',
          'Er brannte zufällig ab'
        ],
        correctAnswer: 2,
        explanation: 'Der Zar beendete damit den hanseatischen Handel in Russland.'
      }
    ]
  },
  {
    id: 'h7',
    title: 'Krieg mit Dänemark – die Macht der Blockade',
    content:
      '1361 eroberte der dänische König Waldemar IV. die Insel Gotland – einen wichtigen Hansehafen. Die Hanse reagierte mit Krieg ohne Landfeldzug: Mit Schiffen blockierte sie die dänischen Häfen (1362–1370). Handel und Zölle brachen ein, das Land hungerte. Im Frieden von Stralsund musste Dänemark kapitulieren und Privilegien der Hanse anerkennen.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/denmark-war.jpg', title: 'Krieg mit Dänemark' }]
  },
  {
    id: 'h8',
    title: 'Hering – „Öl des Mittelalters“',
    content:
      'Gepökelter Hering war das Fastenessen Europas: billig, eiweißreich, haltbar. Die Hanse kontrollierte Fangplätze an Nord- und Ostsee und besaß Salz für die Konservierung. Wer ohne ihre Erlaubnis fischte, riskierte Beschlagnahme seiner Schiffe. Für viele Länder war hanseatischer Hering so wichtig wie heute Öl.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/herring.jpg', title: 'Hering' }]
  },
  {
    id: 'h9',
    title: 'Humor: „Ohne Hanse kein Fisch, kein Fleisch“',
    content:
      'Der englische König beschwert sich: „Euer Hering ist zu teuer!“ Hanseatische Kaufleute: „Dann kaufen Sie nicht.“ Ein Monat Blockade – das Volk hungert. König: „Gut, wir zahlen euren Preis.“ Hanse: „Sehr gut. Wenn Sie Rabatt wollen, treten Sie der Hanse bei.“ Monopol schmeckt besser als jeder Fisch.',
    duration: 3
  },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-h-3-1-de',
        text: 'Wann blockierte die Hanse Dänemark?',
        type: 'multiple-choice',
        options: ['1200–1210', '1362–1370', '1400–1410', '1500–1510'],
        correctAnswer: 1,
        explanation: 'Die Blockade dauerte von 1362 bis 1370.'
      },
      {
        id: 'q-h-3-2-de',
        text: 'Was ist der Frieden von Stralsund (1370)?',
        type: 'multiple-choice',
        options: [
          'Ein Abkommen zwischen Papst und Kaiser',
          'Kapitulaton Dänemarks vor der Hanse',
          'Vertrag mit Nowgorod',
          'Friedensschluss im Hundertjährigen Krieg'
        ],
        correctAnswer: 1,
        explanation: 'Dänemark musste hanseatische Forderungen akzeptieren.'
      },
      {
        id: 'q-h-3-3-de',
        text: 'Warum war Hering so wichtig?',
        type: 'multiple-choice',
        options: ['Es war Luxusware', 'Es war Fastennahrung und lange haltbar', 'Es war selten', 'Er wurde als Geld benutzt'],
        correctAnswer: 1,
        explanation: 'Hering war billige, haltbare Fastenspeise – Alltagsspeise für Millionen.'
      }
    ]
  },
  {
    id: 'h10',
    title: 'Brügge – Finanzzentrum der Hanse',
    content:
      'Brügge in Flandern war die „Venedig des Nordens“. Seit dem 13. Jahrhundert trafen sich hier hanseatische Kaufleute mit italienischen Bankiers. Brügge war Drehscheibe für Tuch, Gold und Kredite. Als der Hafen versandete, verlagerte sich der Handel nach Antwerpen – der goldene Hanse­zeitraum dort war vorbei.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/bruges.jpg', title: 'Brügge' }]
  },
  {
    id: 'h11',
    title: 'Der Stalhof in London – Festung der Hanse',
    content:
      'Das Londoner Kontor hieß „Steelyard“ (Stalhof). Ein ummauertes Viertel an der Themse mit eigenen Speichern, Wohnhäusern und Kai. Deutsche Händler exportierten Wolle und importierten Wein und Metall. Die englischen Könige gewährten ihnen Steuerfreiheit – Engländer mussten zahlen. Das ärgerte London, aber niemand wollte eine Blockade riskieren.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/steelyard.jpg', title: 'Stalhof' }]
  },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-h-4-1-de',
        text: 'Wie nannte man Brügge im Mittelalter?',
        type: 'multiple-choice',
        options: ['Rom des Nordens', 'Venedig des Nordens', 'Paris des Nordens', 'London des Nordens'],
        correctAnswer: 1,
        explanation: 'Brügge war reich und von Kanälen durchzogen – wie Venedig.'
      },
      {
        id: 'q-h-4-2-de',
        text: 'Wie hieß das hanseatische Viertel in London?',
        type: 'multiple-choice',
        options: ['Goldhof', 'Steelyard (Stalhof)', 'Silberhof', 'Salzhof'],
        correctAnswer: 1,
        explanation: 'Der Steelyard war das geschlossene Viertel der Hanse an der Themse.'
      },
      {
        id: 'q-h-4-3-de',
        text: 'Warum waren die Londoner Bürger wütend auf die Hanse?',
        type: 'multiple-choice',
        options: [
          'Wegen der Religion',
          'Weil hanseatische Händler keine Zölle zahlten',
          'Wegen der Sprache',
          'Weil sie keine Häuser bauten'
        ],
        correctAnswer: 1,
        explanation: 'Steuerprivilegien der Hanse bedeuteten höhere Lasten für Einheimische.'
      }
    ]
  },
  {
    id: 'h12',
    title: 'Bergen – Monopol auf Stockfisch',
    content:
      'Im norwegischen Bergen betrieb die Hanse seit dem 14. Jahrhundert ein großes Kontor. Dort kontrollierte sie Fang und Export von getrocknetem Kabeljau („Stockfisch“) – der Standardproviant für Seeleute und Armeen. Norweger fischten, die Hanse kaufte billig und verkaufte teuer. Viele Kaufleute lebten dort ihr ganzes Leben – wie Mönche des Handels.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/bergen.jpg', title: 'Bergen' }]
  },
  {
    id: 'h13',
    title: 'Humor: „Mönche, die Geld zählen“',
    content:
      'In den Statuten der Kontore stand: kein Glücksspiel, kein Alkoholmissbrauch, keine Frauen. Die Kirche lobte: „Wie fromme Mönche!“ In Wirklichkeit tranken viele, spielten heimlich und hielten Geliebte – aber die Bücher wurden sauber geführt. Fromm oder nicht: Die Kasse musste stimmen.',
    duration: 3
  },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-h-5-1-de',
        text: 'Welches Produkt kontrollierte die Hanse in Bergen?',
        type: 'multiple-choice',
        options: ['Gold', 'Getrockneten Kabeljau (Stockfisch)', 'Wein', 'Getreide'],
        correctAnswer: 1,
        explanation: 'Stockfisch war Grundnahrung für Seeleute – und Hanseware.'
      },
      {
        id: 'q-h-5-2-de',
        text: 'Wie sollten die Kaufleute offiziell leben?',
        type: 'multiple-choice',
        options: ['Luxuriös', 'Ask­tisch wie Mönche', 'Wie Bauern', 'Wie Ritter'],
        correctAnswer: 1,
        explanation: 'Regeln forderten strenges Leben – die Realität war oft anders.'
      },
      {
        id: 'q-h-5-3-de',
        text: 'Wie viele Hauptkontore hatte die Hanse?',
        type: 'multiple-choice',
        options: ['Zwei', 'Vier', 'Zehn', 'Zwanzig'],
        correctAnswer: 1,
        explanation: 'Nowgorod, Brügge, London und Bergen.'
      }
    ]
  },
  {
    id: 'h14',
    title: 'Piraten und die „Vitalienbrüder“',
    content:
      'In den 1390er Jahren griffen die Piratenbande der „Vitalienbrüder“ hanseatische Schiffe an. Einige Hansestädte wie Rostock unterstützten sie heimlich, um eigene Vorteile zu haben. Lübeck organisierte schließlich eine Strafexpedition und zerstörte die Piratenstützpunkte – und bestrafte auch die untreuen Handelspartner.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/pirates.jpg', title: 'Piraten' }]
  },
  {
    id: 'h15',
    title: 'Salz – Kontrolle über die Konservierung',
    content:
      'Salz war im Mittelalter das wichtigste Konservierungsmittel für Fisch und Fleisch. Die Salinen von Lüneburg standen faktisch unter hanseatischer Kontrolle. Wer kein Salz der Hanse kaufte, konnte seine Lebensmittel nicht haltbar machen. „Weißes Gold“ gab dem Kartell die Macht über die Ernährung großer Teile Europas.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/salt.jpg', title: 'Salz' }]
  },
  {
    id: 'h16',
    title: 'Wachs und Felle aus dem Osten',
    content:
      'In Nowgorod und Pskow kaufte die Hanse Wachs für Kerzen und kostbare Felle von Zobel und Marder. In Westeuropa waren diese Waren extrem teuer. Die Hanse fungierte als Zwischenhändler mit Aufschlägen von 200–300 %. Als Iwan III. das Nowgoroder Kontor schloss, brach dieses Geschäft plötzlich weg.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/wax-furs.jpg', title: 'Wachs und Felle' }]
  },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-h-6-1-de',
        text: 'Wer waren die Vitalienbrüder?',
        type: 'multiple-choice',
        options: ['Mönche', 'Piraten', 'Könige', 'Bauern'],
        correctAnswer: 1,
        explanation: 'Sie überfielen Schiffe und wurden zeitweise von Städten unterstützt.'
      },
      {
        id: 'q-h-6-2-de',
        text: 'Woher stammte das hanseatische Salz?',
        type: 'multiple-choice',
        options: ['Aus dem Meer', 'Aus den Salinen von Lüneburg', 'Aus Afrika', 'Aus Italien'],
        correctAnswer: 1,
        explanation: 'Lüneburg lieferte das „weiße Gold“ der Hanse.'
      },
      {
        id: 'q-h-6-3-de',
        text: 'Wie hoch waren die Aufschläge auf Felle aus dem Osten?',
        type: 'multiple-choice',
        options: ['10 %', '50 %', '200–300 %', '1000 %'],
        correctAnswer: 2,
        explanation: 'Die Hanse verdiente an der Preisdifferenz zwischen Ost und West.'
      }
    ]
  },
  {
    id: 'h17',
    title: 'Humor: „Wenn möglich, verkaufen wir auch Luft“',
    content:
      'Kaufmann: „Was kontrolliert die Hanse noch?“ Antwort: „Fisch, Salz, Wachs, Felle, Getreide, Bernstein…“ Kaufmann: „Und die Luft?“ Hanse: „Noch nicht – uns fehlt die Technik. Aber wir arbeiten daran.“ Mittelalterliche Version eines Mega-Konzerns.',
    duration: 3
  },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-h-7-1-de',
        text: 'Welche Waren kamen aus Nowgorod?',
        type: 'multiple-choice',
        options: ['Gold', 'Wachs und Felle', 'Wein', 'Gewürze'],
        correctAnswer: 1,
        explanation: 'Wachs und Felle waren die wichtigsten Exportgüter.'
      },
      {
        id: 'q-h-7-2-de',
        text: 'Warum verlor die Hanse den Handel im Osten?',
        type: 'multiple-choice',
        options: [
          'Wegen der Pest',
          'Wegen eines Vulkanausbruchs',
          'Weil Iwan III. das Kontor schloss',
          'Weil die Felle ausgingen'
        ],
        correctAnswer: 2,
        explanation: 'Die Schließung des Kontors kappte den Zugang zu diesen Waren.'
      },
      {
        id: 'q-h-7-3-de',
        text: 'Warum war Salz so wichtig?',
        type: 'multiple-choice',
        options: ['Für Kerzen', 'Für den Bau', 'Für die Konservierung von Lebensmitteln', 'Für Münzen'],
        correctAnswer: 2,
        explanation: 'Ohne Salz verdarben Fisch und Fleisch schnell.'
      }
    ]
  },
  {
    id: 'h18',
    title: 'Blockade von Brügge – Stadt in der Zange',
    content:
      'In den 1450er Jahren führte Brügge neue Steuern für Hansekaufleute ein. Die Antwort war klassisch: Blockade. Die Händler reisten ab, der Hafen leerte sich, Einnahmen brachen ein. Nach zwei Jahren gab die Stadt nach und nahm die Steuern zurück – die Hanse kehrte zurück. Lektion: Greife kein Kartell an, von dem du abhängst.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/blockade.jpg', title: 'Blockade' }]
  },
  {
    id: 'h19',
    title: 'Bernstein – Gold der Ostsee',
    content:
      'An den Küsten der Ostsee, vor allem in Preußen, wurde Bernstein gesammelt. Die Hanse kontrollierte den Handel. Bernstein wurde zu Schmuck, „Medizin“ und Weihrauch verarbeitet. Illegale Sammler wurden hart bestraft, teils sogar mit dem Tod. Bis ins 16. Jahrhundert blieb Bernstein praktisch Monopolware.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/amber.jpg', title: 'Bernstein' }]
  },
  {
    id: 'h20',
    title: 'Hanse und Deutscher Orden – Bündnis der Monopolisten',
    content:
      'Der Deutsche Orden herrschte in Preußen und kontrollierte Land und Bauern. Die Hanse kontrollierte Schiffe und Märkte. Zusammen beherrschten sie Getreide- und Bernsteinausfuhr. Als der Orden im 15. Jahrhundert schwächer wurde, löste sich die Hanse ohne Sentimentalität von ihrem alten Partner.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/teutonic.jpg', title: 'Deutscher Orden' }]
  },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-h-8-1-de',
        text: 'Wie bestrafte die Hanse Brügge für neue Steuern?',
        type: 'multiple-choice',
        options: ['Mit einer Flotte', 'Mit einer Blockade', 'Mit einem Prozess', 'Mit einem Kreuzzug'],
        correctAnswer: 1,
        explanation: 'Blockade – die Stadt verlor Handel und musste nachgeben.'
      },
      {
        id: 'q-h-8-2-de',
        text: 'Woher kam der Bernstein der Hanse hauptsächlich?',
        type: 'multiple-choice',
        options: ['Aus Afrika', 'Aus Preußen an der Ostsee', 'Aus Italien', 'Aus Spanien'],
        correctAnswer: 1,
        explanation: 'Die baltischen Küsten waren das Zentrum des Bernsteins.'
      },
      {
        id: 'q-h-8-3-de',
        text: 'Mit wem arbeitete die Hanse in Preußen zusammen?',
        type: 'multiple-choice',
        options: ['Mit dem Papst', 'Mit dem Deutschen Orden', 'Mit Bauern', 'Mit Piraten'],
        correctAnswer: 1,
        explanation: 'Der Deutsche Orden kontrollierte Land, die Hanse den Handel.'
      }
    ]
  },
  {
    id: 'h21',
    title: 'Humor: „Willst du handeln? Zahl der Hanse“',
    content:
      'Ein Händler versucht, im Hafen ohne Hanse-Lizenz Fisch zu verkaufen. Hansekaufmann: „Hast du ein Siegel?“ Händler: „Nein, aber gute Ware.“ Hanse: „Dann ist sie jetzt unsere Ware.“ Händler: „Ich bin freier Mann!“ Hanse: „Heute warst du freier Mann, morgen bist du freier Bettler.“ Freier Markt auf hanseatisch.',
    duration: 3
  },
  {
    id: 'q9',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-h-9-1-de',
        text: 'Welche Strafe drohte bei illegalem Bernsteinabbau?',
        type: 'multiple-choice',
        options: ['Eine kleine Geldstrafe', 'Nichts', 'Gefängnis', 'Sogar die Todesstrafe'],
        correctAnswer: 3,
        explanation: 'Bernstein war so wertvoll, dass Verstöße hart bestraft wurden.'
      },
      {
        id: 'q-h-9-2-de',
        text: 'Warum löste sich die Hanse vom Deutschen Orden?',
        type: 'multiple-choice',
        options: ['Religiöser Streit', 'Der Orden wurde schwach und war wirtschaftlich weniger nützlich', 'Krieg', 'Pest'],
        correctAnswer: 1,
        explanation: 'Das Bündnis war rein ökonomisch – wird es unprofitabel, endet es.'
      },
      {
        id: 'q-h-9-3-de',
        text: 'Was war die „Waffe“ der Hanse im Hafen?',
        type: 'multiple-choice',
        options: ['Schwerter', 'Lizenzsystem und Konfiskation', 'Predigten', 'Feuer'],
        correctAnswer: 1,
        explanation: 'Ohne hanseatisches Siegel durfte niemand legal handeln.'
      }
    ]
  },
  {
    id: 'h22',
    title: 'Niedergang – neue Konkurrenten',
    content:
      'Im 16. Jahrhundert traten neue Spieler auf: die Niederländer mit billigen Schiffen und die Engländer mit starken Flotten. Nach der Entdeckung Amerikas verlagerte sich der Haupt­handel in den Atlantik. Die Ostsee verlor an Bedeutung, viele Städte traten aus der Hanse aus. 1669 kamen nur noch neun Städte zum letzten Hansetag.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/decline.jpg', title: 'Niedergang' }]
  },
  {
    id: 'h23',
    title: 'Erbe der Hanse',
    content:
      'Die Hanse schuf Standards: Handelsverträge, Schiedsgerichte, See­handelsrecht. Städte wie Lübeck, Hamburg und Bremen blieben reich und nannten sich „Freie Hansestädte“. Die Fluggesellschaft Lufthansa trägt den Namen als moderne Erinnerung. In manchem ähnelt die EU einer neuen Hanse: ein Wirtschaftsverbund ohne Kaiserkrone.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/legacy.jpg', title: 'Erbe' }]
  },
  {
    id: 'h24',
    title: 'Humor: „Die Hanse starb, Lufthansa fliegt weiter“',
    content:
      'Hanse im 17. Jahrhundert: „Wir verlieren die Ostsee, die Konkurrenz ist zu stark, wir schließen.“ 20. Jahrhundert: „Neuer Plan: Wir fliegen einfach über alle hinweg.“ Lufthansa: „Gleicher Name, neue Transportmittel.“ Monopole sterben nicht – sie wechseln Branche.',
    duration: 3
  },
  {
    id: 'q10',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-h-10-1-de',
        text: 'Warum verlor die Hanse im 16. Jahrhundert Macht?',
        type: 'multiple-choice',
        options: [
          'Wegen eines Vulkans',
          'Wegen neuer Konkurrenten und Atlantikhandel',
          'Wegen des Klimas',
          'Wegen der Reformation'
        ],
        correctAnswer: 1,
        explanation: 'Niederländer und Engländer dominierten den Atlantik.'
      },
      {
        id: 'q-h-10-2-de',
        text: 'Wann fand der letzte Hansetag statt?',
        type: 'multiple-choice',
        options: ['1500', '1600', '1669', '1700'],
        correctAnswer: 2,
        explanation: '1669 waren nur noch neun Städte vertreten – von einst rund 200.'
      },
      {
        id: 'q-h-10-3-de',
        text: 'Was trägt heute den Namen „Hanse“ weiter?',
        type: 'multiple-choice',
        options: ['Eine Bank', 'Die Fluggesellschaft Lufthansa', 'Ein Orden', 'Ein Schloss'],
        correctAnswer: 1,
        explanation: 'Lufthansa erinnert bewusst an die hanseatischen Wurzeln.'
      }
    ]
  },
  {
    id: 'h25',
    title: 'Fazit: Kartell gegen Könige',
    content:
      'Die Hanse war ein transnationales Kartell, das ohne eigene Armee Dänemark besiegen, England blockieren und die Ostsee dominieren konnte. Sie bündelte die Marktmacht von Fisch, Salz, Wachs, Fellen und Getreide. Könige fürchteten ihre Blockaden mehr als Schlachten. Wirtschaft besiegt Schwerter.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/summary.jpg', title: 'Zusammenfassung' }]
  },
  {
    id: 'h26',
    title: 'Vergleich: Hanse und moderne Kartelle',
    content:
      'Die Hanse kontrollierte Preise und Mengen – wie heute OPEC beim Öl. Sie schloss Konkurrenten aus – wie moderne Sanktionen. Der Unterschied: Damals war es ein Städtebund, heute sind es Staaten oder Konzerne. Aber das Prinzip bleibt: Wer den Markt kontrolliert, hat Macht.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/comparison.jpg', title: 'Vergleich' }]
  },
  {
    id: 'h27',
    title: 'Ökonomische Lehren der Hanse',
    content:
      'Monopole sind bequem für die Eigentümer, aber schlecht für Kunden. Blockaden können Kriege ersetzen, sind aber genauso zerstörerisch. Kartelle funktionieren nur, solange es keine starken Konkurrenten und neuen Märkte gibt. Die globale Expansion nach Amerika zerstörte das alte Ostsee­kartell.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/lessons.jpg', title: 'Lehren' }]
  },
  {
    id: 'h28',
    title: 'Humor: „Die OPEC des Mittelalters“',
    content:
      'OPEC: „Wir kontrollieren Öl.“ Hanse (aus dem 15. Jh.): „Wir kontrollierten Hering, Salz und Bernstein – Öl ist etwas für Anfänger.“ OPEC: „Aber ihr seid zusammengebrochen.“ Hanse: „Nach 400 Jahren. Mal sehen, wie lange ihr durchhaltet.“ Historischer Schlagabtausch.',
    duration: 3
  },
  {
    id: 'h29',
    title: 'Handel als Waffe',
    content:
      'Die Hanse zeigt: Handel kann Grenzen verschieben, ohne dass ein Schwert gezogen wird. Blockaden zerstören Staatsfinanzen, Monopole entscheiden, wer reich und wer arm ist. Vier Jahrhunderte lang nutzte die Hanse Handel als politisches Werkzeug – und schrieb damit ein frühes Kapitel der Globalisierung.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/conclusion.jpg', title: 'Handel als Waffe' }]
  },
  {
    id: 'h30',
    title: 'Schluss: Monopole ändern nur die Form',
    content:
      'Die Hanse war ein mittelalterliches Kartell. Heute heißen die Akteure OPEC, globale Tech-Konzerne oder Logistikriesen. Die Form der Macht hat sich gewandelt – vom Hering zum Datenstrom –, aber das Grundprinzip bleibt: Wer den Markt beherrscht, beherrscht die Politik. Wer die Hanse versteht, versteht auch viele Konflikte der Gegenwart.',
    duration: 3,
    media: [{ type: 'image', url: '/media/hansa-monopoly/final.jpg', title: 'Finale' }]
  }
]

export const hansaMonopolyFinalQuizDE: QuizBlock = {
  id: 'quiz-hansa-monopoly-de',
  title: 'Abschlussquiz: Hanse – Kartell und Monopol',
  questions: [
    { id: 'q-h-1-1-de', text: 'Was war die Hanse vor allem?', type: 'multiple-choice', options: ['Ein Staat', 'Ein Handelskartell von Städten', 'Ein Ritterorden', 'Ein Klosterbund'], correctAnswer: 1, explanation: 'Die Hanse war ein Bund von Städten mit gemeinsamem Handel und Preisen – ein Kartell.' },
    { id: 'q-h-2-1-de', text: 'Was war ein hanseatisches Kontor?', type: 'multiple-choice', options: ['Ein Kriegsschiff', 'Ein Handelsviertel der Hanse in einer fremden Stadt', 'Eine Steuer', 'Ein Kloster'], correctAnswer: 1, explanation: 'Kontore waren geschlossene Handelshöfe mit eigenen Regeln.' },
    { id: 'q-h-3-1-de', text: 'Wann blockierte die Hanse Dänemark?', type: 'multiple-choice', options: ['1200–1210', '1362–1370', '1400–1410', '1500–1510'], correctAnswer: 1, explanation: 'Die Blockade dauerte von 1362 bis 1370.' },
    { id: 'q-h-4-1-de', text: 'Wie nannte man Brügge im Mittelalter?', type: 'multiple-choice', options: ['Rom des Nordens', 'Venedig des Nordens', 'Paris des Nordens', 'London des Nordens'], correctAnswer: 1, explanation: 'Brügge war reich und von Kanälen durchzogen – wie Venedig.' },
    { id: 'q-h-5-1-de', text: 'Welches Produkt kontrollierte die Hanse in Bergen?', type: 'multiple-choice', options: ['Gold', 'Getrockneten Kabeljau (Stockfisch)', 'Wein', 'Getreide'], correctAnswer: 1, explanation: 'Stockfisch war Grundnahrung für Seeleute – und Hanseware.' },
    { id: 'q-h-6-1-de', text: 'Wer waren die Vitalienbrüder?', type: 'multiple-choice', options: ['Mönche', 'Piraten', 'Könige', 'Bauern'], correctAnswer: 1, explanation: 'Sie überfielen Schiffe und wurden zeitweise von Städten unterstützt.' },
    { id: 'q-h-7-1-de', text: 'Welche Waren kamen aus Nowgorod?', type: 'multiple-choice', options: ['Gold', 'Wachs und Felle', 'Wein', 'Gewürze'], correctAnswer: 1, explanation: 'Wachs und Felle waren die wichtigsten Exportgüter.' },
    { id: 'q-h-8-1-de', text: 'Wie bestrafte die Hanse Brügge für neue Steuern?', type: 'multiple-choice', options: ['Mit einer Flotte', 'Mit einer Blockade', 'Mit einem Prozess', 'Mit einem Kreuzzug'], correctAnswer: 1, explanation: 'Blockade – die Stadt verlor Handel und musste nachgeben.' },
    { id: 'q-h-9-1-de', text: 'Welche Strafe drohte bei illegalem Bernsteinabbau?', type: 'multiple-choice', options: ['Eine kleine Geldstrafe', 'Nichts', 'Gefängnis', 'Sogar die Todesstrafe'], correctAnswer: 3, explanation: 'Bernstein war so wertvoll, dass Verstöße hart bestraft wurden.' },
    { id: 'q-h-10-1-de', text: 'Warum verlor die Hanse im 16. Jahrhundert Macht?', type: 'multiple-choice', options: ['Wegen eines Vulkans', 'Wegen neuer Konkurrenten und Atlantikhandel', 'Wegen des Klimas', 'Wegen der Reformation'], correctAnswer: 1, explanation: 'Niederländer und Engländer dominierten den Atlantik.' },
    { id: 'q-h-1-2-de', text: 'Welche Stadt galt als „Königin der Hanse“?', type: 'multiple-choice', options: ['Hamburg', 'Lübeck', 'Berlin', 'Köln'], correctAnswer: 1, explanation: 'Lübeck war Zentrum und Symbol der Hanse.' },
    { id: 'q-h-2-2-de', text: 'Wie hieß das Kontor in Nowgorod?', type: 'multiple-choice', options: ['Kreml', 'Peterhof', 'Markt', 'Zwinger'], correctAnswer: 1, explanation: 'Der „Peterhof“ war der Hof des heiligen Petrus.' },
    { id: 'q-h-3-2-de', text: 'Was ist der Frieden von Stralsund (1370)?', type: 'multiple-choice', options: ['Ein Abkommen zwischen Papst und Kaiser', 'Kapitulaton Dänemarks vor der Hanse', 'Vertrag mit Nowgorod', 'Friedensschluss im Hundertjährigen Krieg'], correctAnswer: 1, explanation: 'Dänemark musste hanseatische Forderungen akzeptieren.' },
    { id: 'q-h-4-2-de', text: 'Wie hieß das hanseatische Viertel in London?', type: 'multiple-choice', options: ['Goldhof', 'Steelyard (Stalhof)', 'Silberhof', 'Salzhof'], correctAnswer: 1, explanation: 'Der Steelyard war das geschlossene Viertel der Hanse an der Themse.' },
    { id: 'q-h-5-2-de', text: 'Wie sollten die Kaufleute offiziell leben?', type: 'multiple-choice', options: ['Luxuriös', 'Ask­tisch wie Mönche', 'Wie Bauern', 'Wie Ritter'], correctAnswer: 1, explanation: 'Regeln forderten strenges Leben – die Realität war oft anders.' },
    { id: 'q-h-6-2-de', text: 'Woher stammte das hanseatische Salz?', type: 'multiple-choice', options: ['Aus dem Meer', 'Aus den Salinen von Lüneburg', 'Aus Afrika', 'Aus Italien'], correctAnswer: 1, explanation: 'Lüneburg lieferte das „weiße Gold“ der Hanse.' },
    { id: 'q-h-7-2-de', text: 'Warum verlor die Hanse den Handel im Osten?', type: 'multiple-choice', options: ['Wegen der Pest', 'Wegen eines Vulkanausbruchs', 'Weil Iwan III. das Kontor schloss', 'Weil die Felle ausgingen'], correctAnswer: 2, explanation: 'Die Schließung des Kontors kappte den Zugang zu diesen Waren.' },
    { id: 'q-h-8-2-de', text: 'Woher kam der Bernstein der Hanse hauptsächlich?', type: 'multiple-choice', options: ['Aus Afrika', 'Aus Preußen an der Ostsee', 'Aus Italien', 'Aus Spanien'], correctAnswer: 1, explanation: 'Die baltischen Küsten waren das Zentrum des Bernsteins.' },
    { id: 'q-h-9-2-de', text: 'Warum löste sich die Hanse vom Deutschen Orden?', type: 'multiple-choice', options: ['Religiöser Streit', 'Der Orden wurde schwach und war wirtschaftlich weniger nützlich', 'Krieg', 'Pest'], correctAnswer: 1, explanation: 'Das Bündnis war rein ökonomisch – wird es unprofitabel, endet es.' },
    { id: 'q-h-10-2-de', text: 'Wann fand der letzte Hansetag statt?', type: 'multiple-choice', options: ['1500', '1600', '1669', '1700'], correctAnswer: 2, explanation: '1669 waren nur noch neun Städte vertreten – von einst rund 200.' },
    { id: 'q-h-1-3-de', text: 'Wie bestrafte die Hanse ungehorsame Partner?', type: 'multiple-choice', options: ['Mit Armeen', 'Mit Blockaden', 'Mit Kirchenstrafen', 'Mit hohen Zöllen'], correctAnswer: 1, explanation: 'Blockaden – niemand durfte mehr mit der Stadt handeln.' },
    { id: 'q-h-2-3-de', text: 'Was geschah 1494 mit dem Peterhof?', type: 'multiple-choice', options: ['Er wurde vergrößert', 'Er wurde von Piraten zerstört', 'Iwan III. schloss ihn und konfiszierte die Waren', 'Er brannte zufällig ab'], correctAnswer: 2, explanation: 'Der Zar beendete damit den hanseatischen Handel in Russland.' },
    { id: 'q-h-3-3-de', text: 'Warum war Hering so wichtig?', type: 'multiple-choice', options: ['Es war Luxusware', 'Es war Fastennahrung und lange haltbar', 'Es war selten', 'Er wurde als Geld benutzt'], correctAnswer: 1, explanation: 'Hering war billige, haltbare Fastenspeise – Alltagsspeise für Millionen.' },
    { id: 'q-h-4-3-de', text: 'Warum waren die Londoner Bürger wütend auf die Hanse?', type: 'multiple-choice', options: ['Wegen der Religion', 'Weil hanseatische Händler keine Zölle zahlten', 'Wegen der Sprache', 'Weil sie keine Häuser bauten'], correctAnswer: 1, explanation: 'Steuerprivilegien der Hanse bedeuteten höhere Lasten für Einheimische.' },
    { id: 'q-h-5-3-de', text: 'Wie viele Hauptkontore hatte die Hanse?', type: 'multiple-choice', options: ['Zwei', 'Vier', 'Zehn', 'Zwanzig'], correctAnswer: 1, explanation: 'Nowgorod, Brügge, London und Bergen.' },
    { id: 'q-h-6-3-de', text: 'Wie hoch waren die Aufschläge auf Felle aus dem Osten?', type: 'multiple-choice', options: ['10 %', '50 %', '200–300 %', '1000 %'], correctAnswer: 2, explanation: 'Die Hanse verdiente an der Preisdifferenz zwischen Ost und West.' },
    { id: 'q-h-7-3-de', text: 'Warum war Salz so wichtig?', type: 'multiple-choice', options: ['Für Kerzen', 'Für den Bau', 'Für die Konservierung von Lebensmitteln', 'Für Münzen'], correctAnswer: 2, explanation: 'Ohne Salz verdarben Fisch und Fleisch schnell.' },
    { id: 'q-h-8-3-de', text: 'Mit wem arbeitete die Hanse in Preußen zusammen?', type: 'multiple-choice', options: ['Mit dem Papst', 'Mit dem Deutschen Orden', 'Mit Bauern', 'Mit Piraten'], correctAnswer: 1, explanation: 'Der Deutsche Orden kontrollierte Land, die Hanse den Handel.' },
    { id: 'q-h-9-3-de', text: 'Was war die „Waffe“ der Hanse im Hafen?', type: 'multiple-choice', options: ['Schwerter', 'Lizenzsystem und Konfiskation', 'Predigten', 'Feuer'], correctAnswer: 1, explanation: 'Ohne hanseatisches Siegel durfte niemand legal handeln.' },
    { id: 'q-h-10-3-de', text: 'Was trägt heute den Namen „Hanse“ weiter?', type: 'multiple-choice', options: ['Eine Bank', 'Die Fluggesellschaft Lufthansa', 'Ein Orden', 'Ein Schloss'], correctAnswer: 1, explanation: 'Lufthansa erinnert bewusst an die hanseatischen Wurzeln.' }
  ]
}

