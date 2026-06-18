import { Slide, QuizBlock } from '../types/session'

const img = (file: string, title: string) => ({
  type: 'image' as const,
  url: `/media/medieval-noble-titles/${file}`,
  title
})

export const medievalNobleTitlesSlidesDE: Slide[] = [
  {
    id: 'ntl1',
    title: 'Adeliger — freier Diener',
    content:
      'Heute ist Freiheit ein selbstverständliches Recht. Im Mittelalter war es dagegen ein großes Privileg, niemandem zu gehören. Ein Adeliger war ursprünglich eine persönlich freie Person: Sie «arbeitete» nicht im üblichen Sinn, sondern diente ihrem Lehnsherrn — meist mit der Waffe in der Hand.',
    duration: 3,
    media: [img('01-noble-free-servant.jpg', 'Freier Diener')]
  },
  {
    id: 'ntl2',
    title: 'Aber es gab auch «unfreie» Adelige',
    content:
      'In Deutschland gab es ein Phänomen, das alle Vorstellungen sprengte: die Ministerialen. Das waren Ritter und Verwalter, die Waffen trugen, kämpften und Burgen besaßen — juristisch aber «unfrei» blieben, faktisch also Leibeigene des Königs oder des Bischofs.',
    duration: 3,
    media: [img('02-noble-serf-knights.jpg', 'Ministerialen')]
  },
  {
    id: 'ntl3',
    title: 'Ritter: Soldat, kein Romantiker',
    content:
      'Das Wort «Ritter» (englisch knight, von altenglisch cniht — Knappe, Diener, oder deutsch Ritter — Reiter) hatte zuerst nichts mit Turnieren und «schönen Damen» zu tun. Es bezeichnete einen schwerbewaffneten, berittenen Berufskrieger, der in einem Ritus als fähig für den Offiziersdienst anerkannt wurde.',
    duration: 3,
    media: [img('03-knight-soldier-not-romantic.jpg', 'Ritter als Soldat')]
  },
  {
    id: 'q1',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ntl-1-1-de',
        text: 'Wer war der Adelige im Mittelalter ursprünglich?',
        type: 'multiple-choice',
        options: [
          'Ein unabhängiger Handwerker',
          'Eine persönlich freie Person, die dem Lehnsherrn diente — oft mit Waffe',
          'Ein rechtloser Bauer',
          'Nur ein Kirchenbeamter'
        ],
        correctAnswer: 1,
        explanation:
          'Adel bedeutete: frei sein und dienen — nicht «arbeiten» im modernen Sinn des Wortes.'
      },
      {
        id: 'q-ntl-1-2-de',
        text: 'Wer waren die Ministerialen im mittelalterlichen Deutschland?',
        type: 'multiple-choice',
        options: [
          'Unbewaffnete Mönche',
          'Ritter und Verwalter, die juristisch «unfrei» waren',
          'Nur die Söhne des Königs',
          'Kaufleute aus Italien'
        ],
        correctAnswer: 1,
        explanation:
          'Sie kämpften und hatten Burgen, blieben aber formell Leibeigene des Königs oder des Bischofs.'
      },
      {
        id: 'q-ntl-1-3-de',
        text: 'Was bedeutete das Wort «Ritter» ursprünglich?',
        type: 'multiple-choice',
        options: [
          'Ein Hofdichter',
          'Ein schwerbewaffneter, berittener Berufskrieger',
          'Ein Turnierorganisator für Damen',
          'Ein unbewaffneter Richter'
        ],
        correctAnswer: 1,
        explanation: 'Knight, cniht, Ritter — Knappe, Diener, Reiter. Die Romantik kam erst später.'
      }
    ]
  },
  {
    id: 'ntl4',
    title: 'Bachelor-Ritter und Banneret',
    content:
      'Ein Bachelor-Ritter ist ein einfacher Ritter ohne eigenes Banner — auch wenn er selbst Diener hatte. Ein Banneret darf im Kampf sein eigenes Banner (Feldzeichen) tragen. Das war kein Prestige-Spiel, sondern eine echte Aufgabe: Es gab keine Funkgeräte, und das Banner zeigte den Soldaten in der Hitze der Schlacht, wohin sie laufen sollten.',
    duration: 3,
    media: [img('04-knight-bachelor-banneret.jpg', 'Banner und Bachelor')]
  },
  {
    id: 'ntl5',
    title: 'Woher kommen die Titel?',
    content:
      'Graf, Herzog, Baron — wir kennen diese Wörter aus Dumas-Romanen wie schöne Märchentitel. Im frühen Mittelalter war alles aber streng zweckmäßig: Es waren Namen für konkrete Ämter und militärische Aufgaben.',
    duration: 3,
    media: [img('05-where-titles-came-from.jpg', 'Praktische Titel')]
  },
  {
    id: 'ntl6',
    title: 'Baron: ein Mann mit Land',
    content:
      'Das Wort «Baron» stammt vom altfranzösischen und spätlateinischen baro — «Mann», «Söldner». Ein Baron ist Inhaber eines Lehens, einer Baronie: Land, das er direkt vom König erhielt, nicht von einem anderen Vasallen.',
    duration: 3,
    media: [img('06-baron-landholder.jpg', 'Baron und Baronie')]
  },
  {
    id: 'q2',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ntl-2-1-de',
        text: 'Warum durfte ein Banneret sein eigenes Banner tragen?',
        type: 'multiple-choice',
        options: [
          'Nur wegen der Schönheit bei Paraden',
          'Damit die Soldaten im Kampf einen Orientierungspunkt hatten',
          'Um auf dem Markt zu handeln',
          'Um Bauern zu richten'
        ],
        correctAnswer: 1,
        explanation:
          'Ohne Funkgeräte war das Banner in der Schlacht der Anker, an dem sich die Truppen orientierten.'
      },
      {
        id: 'q-ntl-2-2-de',
        text: 'Was waren Graf, Herzog und Baron im frühen Mittelalter?',
        type: 'multiple-choice',
        options: [
          'Märchennamen ohne Funktion',
          'Bezeichnungen für konkrete Ämter und militärische Aufgaben',
          'Nur Kirchenämter',
          'Namen von Städten'
        ],
        correctAnswer: 1,
        explanation:
          'Die Titel begannen als praktische Ämter — nicht als «schöne» Romanbezeichnungen.'
      },
      {
        id: 'q-ntl-2-3-de',
        text: 'Wer ist ein Baron im Feudalsystem?',
        type: 'multiple-choice',
        options: [
          'Inhaber eines Lehens direkt vom König',
          'Ein landloser Bauer',
          'Nur ein Stadtbürgermeister',
          'Der gesetzliche Erbe eines Vizegrafen'
        ],
        correctAnswer: 0,
        explanation:
          'Der Baron hält eine Baronie, die er nicht von einem anderen Vasallen, sondern vom König erhält.'
      }
    ]
  },
  {
    id: 'ntl7',
    title: 'Warum Barone Königen Forderungen stellten',
    content:
      'Wenn wir die Geschichte lesen — etwa die Magna Carta — wundern wir uns: Warum stellten «Barone», die unterste Stufe der Elite, dem König Bedingungen? Damals bedeutete Baron vor allem keinen Titel, sondern einen Status: «direkter königlicher Vasall». Nur direkte Vasallen durften dem Monarchen Forderungen stellen.',
    duration: 3,
    media: [img('07-barons-dictated-to-kings.jpg', 'Barone und König')]
  },
  {
    id: 'ntl8',
    title: 'Graf: der alte «Buchhalter»',
    content:
      'Graf (englisch count, lateinisch comes — Gefährte des Kaisers) bezeichnete zuerst den königlichen Statthalter einer Region. Grob gesagt: ein Beamter, der Steuern eintrieb und vor Ort als Richter fungierte.',
    duration: 3,
    media: [img('08-count-ancient-accountant.jpg', 'Graf als Statthalter')]
  },
  {
    id: 'ntl9',
    title: 'Englische Besonderheit: Earl',
    content:
      'In England heißen Grafen nicht Count, sondern Earl — vom skandinavischen jarl, einem Stammes- oder Heerführer. Interessant: Die Ehefrauen nennt man Countess, weil es kein weibliches Wort für jarl gab.',
    duration: 3,
    media: [img('09-english-earl-anomaly.jpg', 'Earl und Countess')]
  },
  {
    id: 'q3',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ntl-3-1-de',
        text: 'Warum stellten die «Barone» dem König in der Magna Carta Bedingungen?',
        type: 'multiple-choice',
        options: [
          'Weil Baron der niedrigste Adelstitel war',
          'Weil Baron damals der Status eines direkten königlichen Vasallen war',
          'Weil der König ein Bauer war',
          'Weil nur Barone Ritter sein durften'
        ],
        correctAnswer: 1,
        explanation: 'Nur direkte Vasallen hatten das Recht, dem Monarchen Forderungen zu stellen.'
      },
      {
        id: 'q-ntl-3-2-de',
        text: 'Wer war der Graf (comes) ursprünglich?',
        type: 'multiple-choice',
        options: [
          'Ein Hofdichter',
          'Ein königlicher Statthalter, Steuereintreiber und Richter',
          'Nur ein Flottenkommandant',
          'Ein Mönch-Schreiber'
        ],
        correctAnswer: 1,
        explanation: 'Comes — «Gefährte des Kaisers» — war in der Praxis ein regionaler Verwaltungsbeamter.'
      },
      {
        id: 'q-ntl-3-3-de',
        text: 'Was ist besonders am englischen Earl?',
        type: 'multiple-choice',
        options: [
          'Earl stammt vom skandinavischen jarl',
          'Earl steht immer unter dem Baron',
          'Earl ist nur ein weiblicher Titel',
          'Ein Earl hat keine Ehefrau'
        ],
        correctAnswer: 0,
        explanation:
          'In England sagt man Earl statt Count; die Ehefrau heißt Countess, weil es kein weibliches jarl gab.'
      }
    ]
  },
  {
    id: 'ntl10',
    title: 'Die Vielfalt der Grafen',
    content:
      'Mit der Zeit «vermehrten» sich die «Buchhalter». Der Pfalzgraf verwaltete den Königspfalz. Der Landgraf eine Provinz. Der Burggraf befehligte eine befestigte Stadt. Alle standen im Staatsdienst.',
    duration: 3,
    media: [img('10-variety-of-counts.jpg', 'Verschiedene Grafenämter')]
  },
  {
    id: 'ntl11',
    title: 'Markgraf: Grenzwächter mit Sonderrechten',
    content:
      'Marquis oder Markgraf leitet sich von «Mark» (march) ab — so nannte man gefährliche Grenzgebiete. Der Statthalter einer solchen Mark hatte mehr Truppen und Befugnisse als ein normaler Graf, weil er ständig Angriffe der Nachbarn abwehren musste.',
    duration: 3,
    media: [img('11-marquis-border-guard.jpg', 'Markgraf an der Grenze')]
  },
  {
    id: 'ntl12',
    title: 'Vizegraf: der Stellvertreter',
    content:
      'Vizegraf (englisch viscount, lateinisch vice-comes) heißt wörtlich «Stellvertreter des Grafen». Er führte die Amtsgeschäfte, während der Graf am Hof weilte oder im Krieg war.',
    duration: 3,
    media: [img('12-viscount-deputy.jpg', 'Vizegraf')]
  },
  {
    id: 'q4',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ntl-4-1-de',
        text: 'Wer ist ein Burggraf?',
        type: 'multiple-choice',
        options: [
          'Verwalter des Königspfalz',
          'Kommandant einer befestigten Stadt',
          'Eintreiber von Hafenzöllen',
          'Sohn eines Herzogs ohne Titel'
        ],
        correctAnswer: 1,
        explanation: 'Der Burggraf war der «Kommandant» einer befestigten Stadt.'
      },
      {
        id: 'q-ntl-4-2-de',
        text: 'Woher kommt das Wort Marquis oder Markgraf?',
        type: 'multiple-choice',
        options: [
          'Vom Markt — der Handelsplatz',
          'Von der «Mark» — einem gefährlichen Grenzgebiet',
          'Vom Heiligen Markus',
          'Vom französischen «marier» — heiraten'
        ],
        correctAnswer: 1,
        explanation:
          'March bedeutet Grenzmark; dort brauchte man besondere Truppen und weitreichende Befugnisse.'
      },
      {
        id: 'q-ntl-4-3-de',
        text: 'Wer war der Vizegraf ursprünglich?',
        type: 'multiple-choice',
        options: [
          'Der Stellvertreter des Grafen (vice-comes)',
          'Der Sohn des Königs',
          'Das Oberhaupt der Kirche',
          'Der Kapitän eines Handelsschiffs'
        ],
        correctAnswer: 0,
        explanation: 'Er übernahm die Pflichten des Grafen, solange dieser am Hof oder im Feld war.'
      }
    ]
  },
  {
    id: 'ntl13',
    title: 'Herzog: eine ganz andere Kategorie',
    content:
      'Der Herzog (lateinisch dux — Heerführer; englisch duke) war kein ernannter Beamter. Er war ein alter germanischer Stammesführer. Um diese Autoritäten zu besänftigen, mussten die Könige ihnen den höchsten Rang geben.',
    duration: 3,
    media: [img('13-duke-different-breed.jpg', 'Herzog als Stammesführer')]
  },
  {
    id: 'ntl14',
    title: 'Herzöge fast wie Könige',
    content:
      'Herzöge regierten riesige Gebiete — oft mit eigenen Völkern wie Bayern oder Sachsen — und waren weitgehend ihre eigenen Herren. Der erste englische Herzog war der Sohn Eduards III. im Jahr 1337; vorher gab es diesen Titel in England nicht.',
    duration: 3,
    media: [img('14-dukes-almost-kings.jpg', 'Herzog und Territorium')]
  },
  {
    id: 'ntl15',
    title: 'Prinz: der Erste unter Gleichen',
    content:
      'Prinz (lateinisch princeps — der Erste) bedeutete zuerst nicht «Sohn des Königs». In Rom so nannte man den Kaiser; im Mittelalter jeden unabhängigen Herrscher, dem niemand Befehle geben konnte.',
    duration: 3,
    media: [img('15-prince-first-among-equals.jpg', 'Prinz als Souverän')]
  },
  {
    id: 'q5',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ntl-5-1-de',
        text: 'Wodurch unterschied sich der Herzog ursprünglich vom Grafen?',
        type: 'multiple-choice',
        options: [
          'Herzog war Beamter, Graf war Stammesführer',
          'Herzog war ein alter Stammesführer, nicht nur ein Beamter',
          'Der Herzog stand immer unter dem Baron',
          'Herzöge gab es nur in Frankreich'
        ],
        correctAnswer: 1,
        explanation:
          'Dux bedeutet Heerführer; Könige sicherten sich die Loyalität dieser Männer mit hohem Rang.'
      },
      {
        id: 'q-ntl-5-2-de',
        text: 'Wann gab es den ersten englischen Herzog?',
        type: 'multiple-choice',
        options: ['1066', '1337 — Sohn Eduards III.', '1611', 'Nie'],
        correctAnswer: 1,
        explanation: 'Vor 1337 existierte der Titel Herzog in England nicht.'
      },
      {
        id: 'q-ntl-5-3-de',
        text: 'Wen nannte man im Mittelalter «Prinz»?',
        type: 'multiple-choice',
        options: [
          'Nur den Sohn des Königs',
          'Jeden unabhängigen Souverän, dem niemand Befehle gab',
          'Nur den Bischof',
          'Nur einen landlosen Ritter'
        ],
        correctAnswer: 1,
        explanation:
          'Princeps — «der Erste»: im Mittelalter jeder Herrscher, der niemandem unterstand.'
      }
    ]
  },
  {
    id: 'ntl16',
    title: 'Warum Prinzen nicht von Geburt an Ritter sind',
    content:
      'Im Mittelalter waren Geburt (Adel) und Rittertum (Beruf) zwei verschiedene Dinge. Sogar Königssöhne wurden nur als Adelige geboren. Um Ritter zu werden, brauchten sie militärische Ausbildung und die Weihe.',
    duration: 3,
    media: [img('16-welsh-princes-not-knights.jpg', 'Geburt und Rittertum')]
  },
  {
    id: 'ntl17',
    title: 'Knappe: Waffenträger mit Ambitionen',
    content:
      'Knappe (lateinisch scutarius — Schildträger, französisch écuyer) war der Waffenträger eines Ritters. Die Ritterweihe wurde sehr teuer; viele reiche Grundbesitzer blieben ihr ganzes Leben lang Knappe — und machten daraus den Status eines adeligen Landholders.',
    duration: 3,
    media: [img('17-squire-ambitious-page.jpg', 'Knappe')]
  },
  {
    id: 'ntl18',
    title: 'Yeomen: frei, aber nicht adelig',
    content:
      'In England gab es die Yeomen — freie Bauern mit eigenem Land. Sie dienten nicht wie Ritter einem Lehnsherrn, bewirtschafteten aber selbstständig ihr Feld, waren unabhängig und mussten einen Langbogen für die Landesverteidigung besitzen.',
    duration: 3,
    media: [img('18-yeomen-free-not-noble.jpg', 'Yeomen mit Langbogen')]
  },
  {
    id: 'q6',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ntl-6-1-de',
        text: 'Warum war ein Prinz nicht automatisch Ritter?',
        type: 'multiple-choice',
        options: [
          'Das Gesetz verbot es',
          'Adel durch Geburt und Rittertum als Beruf waren getrennt — Weihe nötig',
          'Prinzen konnten nicht reiten',
          'Ritter nahmen keine Adeligen auf'
        ],
        correctAnswer: 1,
        explanation:
          'Auch der Sohn eines Königs wurde adelig geboren, aber erst durch Ausbildung und Weihe zum Ritter.'
      },
      {
        id: 'q-ntl-6-2-de',
        text: 'Wer war ein Knappe ursprünglich?',
        type: 'multiple-choice',
        options: [
          'Ein königlicher Richter',
          'Der Waffen- und Schildträger eines Ritters',
          'Ein Mönch',
          'Ein Kaufmann aus Flandern'
        ],
        correctAnswer: 1,
        explanation:
          'Scutarius — Schildträger; viele blieben lebenslang Knappe, weil die Ritterweihe zu teuer war.'
      },
      {
        id: 'q-ntl-6-3-de',
        text: 'Wodurch unterschieden sich Yeomen vom Adel?',
        type: 'multiple-choice',
        options: [
          'Yeomen waren Sklaven',
          'Freie Bauern mit Land und Langbogen, aber ohne Adelstitel',
          'Sie dienten nur in der Kirche',
          'Sie hatten kein Land'
        ],
        correctAnswer: 1,
        explanation:
          'Sie bewirtschafteten eigenes Land, waren frei und mussten zur Landesverteidigung einen Langbogen haben.'
      }
    ]
  },
  {
    id: 'ntl19',
    title: 'Wie Ämter zu Titeln wurden',
    content:
      'Im frühen Mittelalter wurde das Amt eines Grafen oder Vizegrafen einer Person persönlich übertragen. Die Beamten merkten schnell: Warum sollte man ein so einträgliches Amt an den König zurückgeben? Sie begannen, ihre Posten an die Söhne weiterzugeben.',
    duration: 3,
    media: [img('19-offices-became-titles.jpg', 'Erbliche Ämter')]
  },
  {
    id: 'ntl20',
    title: 'Die «Privatisierung» des Staates',
    content:
      'Die Könige mussten sich fügen. Grafschaften, Baronien und Marken wurden erbliche Besitztümer. Das Amt eines Beamten wurde endgültig zu privatem Eigentum — vererbbar oder als Mitgift für die Tochter.',
    duration: 3,
    media: [img('20-privatization-of-state.jpg', 'Erbliche Herrschaften')]
  },
  {
    id: 'ntl21',
    title: 'Titel ohne Arbeit',
    content:
      'Mit dem Absolutismus schufen die Könige neue Verwaltungsapparate und stehende Heere. Die alten Feudalherren waren überflüssig. Der Graf sammelte keine Steuern mehr, der Herzog führte kein Stammesheer in den Krieg. Das Amt wurde zum bloßen Ehrentitel.',
    duration: 3,
    media: [img('21-title-without-work.jpg', 'Titel ohne Funktion')]
  },
  {
    id: 'q7',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ntl-7-1-de',
        text: 'Wie wurden Ämter zu erblichen Titeln?',
        type: 'multiple-choice',
        options: [
          'Der König verbot die Vererbung',
          'Beamte gaben ihre Posten an die Söhne weiter',
          'Die Kirche benannte alles um',
          'Bauern wählten neue Namen'
        ],
        correctAnswer: 1,
        explanation: 'Grafen und Vizegrafen «privatisierten» ihre Ämter und gaben sie nicht mehr an den König zurück.'
      },
      {
        id: 'q-ntl-7-2-de',
        text: 'Was geschah mit Grafschaften und Baronien?',
        type: 'multiple-choice',
        options: [
          'Sie verschwanden über Nacht',
          'Sie wurden erbliche Besitztümer — vererbbar oder als Mitgift',
          'Sie gingen nur an die Kirche',
          'Man wählte sie nur für eine Amtszeit'
        ],
        correctAnswer: 1,
        explanation: 'Das Amt wurde zum Familienbesitz.'
      },
      {
        id: 'q-ntl-7-3-de',
        text: 'Warum wurde der Titel beim Absolutismus «nur noch Rang»?',
        type: 'multiple-choice',
        options: [
          'Könige schafften alle Titel ab',
          'Neue Beamte und Armeen ersetzten alte Feudalherren — die Funktionen fielen weg',
          'Der Adel gab sein Land auf',
          'Titel wurden nur noch für Frauen vergeben'
        ],
        correctAnswer: 1,
        explanation:
          'Der Graf sammelte keine Steuern mehr, der Herzog führte kein Heer — übrig blieb nur der Name.'
      }
    ]
  },
  {
    id: 'ntl22',
    title: 'Englischer Peer: was bedeutet das?',
    content:
      'Peer (lateinisch par — gleich) ist ein Mitglied der höchsten britischen Aristokratie. Warum «gleich»? Der König erkannte die oberste Elite — Herzöge, Marquesses, Grafen, Vizegrafen und Barone — als seinesgleichen in Ehre an, mit dem Recht, sich gegenseitig zu richten.',
    duration: 3,
    media: [img('22-english-peer-meaning.jpg', 'Peer und Parlament')]
  },
  {
    id: 'ntl23',
    title: 'Die Hierarchie der britischen Elite',
    content:
      'Die Ordnung wurde fest: ganz oben der Herzog, dann Marquess, Earl, Viscount und Baron. Darunter stehen Baronets und Ritter — sie sind adelig, aber keine Peers und kamen nicht ins House of Lords.',
    duration: 3,
    media: [img('23-british-nobility-hierarchy.jpg', 'Hierarchie der Elite')]
  },
  {
    id: 'ntl24',
    title: 'Baronet: der käufliche Titel',
    content:
      'König Jakob I. erfand 1611 den Baronet, um reichen Leuten Titel zu verkaufen und den Krieg in Irland zu finanzieren. Der Titel ist erblich und berechtigt zur Anrede «Sir», macht den Inhaber aber nicht zum Peer.',
    duration: 3,
    media: [img('24-baronet-bought-title.jpg', 'Baronet Jakobs I.')]
  },
  {
    id: 'q8',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ntl-8-1-de',
        text: 'Warum heißt der Peer «gleich» (par)?',
        type: 'multiple-choice',
        options: [
          'Weil er den Bauern gleichgestellt war',
          'Weil der König die oberste Elite als seinesgleichen in Ehre anerkannte',
          'Weil alle Peers gleich arm waren',
          'Weil es die Übersetzung von «Parliament» ist'
        ],
        correctAnswer: 1,
        explanation:
          'Peers — von Herzog bis Baron — galten dem König in Ehrenfragen als «Gleiche».'
      },
      {
        id: 'q-ntl-8-2-de',
        text: 'Wer von diesen ist ein Peer in Großbritannien?',
        type: 'multiple-choice',
        options: ['Baronet', 'Earl (Graf)', 'Ritter ohne Titel', 'Yeoman'],
        correctAnswer: 1,
        explanation: 'Baronets und Ritter sind adelig, aber keine Peers und nicht im House of Lords.'
      },
      {
        id: 'q-ntl-8-3-de',
        text: 'Warum schuf Jakob I. 1611 den Baronet?',
        type: 'multiple-choice',
        options: [
          'Um nur Krieger zu belohnen',
          'Um Titel zu verkaufen und Geld für den Irland-Krieg zu sammeln',
          'Um alle Herzöge zu ersetzen',
          'Auf Verlangen des Parlaments'
        ],
        correctAnswer: 1,
        explanation: 'Baronet — erblich mit «Sir», aber kein Sitz im House of Lords.'
      }
    ]
  },
  {
    id: 'ntl25',
    title: 'Lord: ein Sammelwort',
    content:
      '«Lord» (altenglisch hlāford — Brot-Herr, «Hüter des Brotes») ist kein Titel, sondern eine höfliche Anrede für Barone, Vizegrafen, Grafen und Marquesses — sowie für die Söhne von Herzögen. Ein eigenständiger Titel «Lord» existiert nicht.',
    duration: 3,
    media: [img('25-lord-collective-word.jpg', 'Anrede «Lord»')]
  },
  {
    id: 'ntl26',
    title: 'Rang innerhalb desselben Titels',
    content:
      'Sind zwei Grafen gleichrangig? Nicht unbedingt. Wer seinen Titel 1400 erhielt, steht über dem von 1600. Es gilt als besonders prestigeträchtig, einen alten Titel zu haben — selbst einen baronischen — statt eines neu geschaffenen Herzogstitels.',
    duration: 3,
    media: [img('26-seniority-within-title.jpg', 'Rang der Titel')]
  },
  {
    id: 'ntl27',
    title: 'Frühe Neuzeit: Titelsinflation',
    content:
      'Zur Zeit der «Drei Musketiere» wurde alles zur Schaustellerei des Ehrgeizes. Land und Titel passten längst nicht mehr zusammen. Jemand konnte Marquis heißen, weil der Großvater ein Papier vom König kaufte — während ein Intendant ohne Adel die echte Macht in der Provinz hatte.',
    duration: 3,
    media: [img('27-early-modern-title-inflation.jpg', 'Titelsinflation')]
  },
  {
    id: 'q9',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ntl-9-1-de',
        text: 'Was ist «Lord»?',
        type: 'multiple-choice',
        options: [
          'Ein eigenständiger Höchsttitel',
          'Eine höfliche Anrede, kein eigener Titel',
          'Nur ein Titel für Königssöhne',
          'Ein anderes Wort für Bauer'
        ],
        correctAnswer: 1,
        explanation:
          'Hlāford — «Brot-Herr»; so spricht man Barone, Grafen und Söhne von Herzögen an.'
      },
      {
        id: 'q-ntl-9-2-de',
        text: 'Wie bestimmt man den Rang zweier Grafen?',
        type: 'multiple-choice',
        options: [
          'Nach der Körpergröße',
          'Nach dem Datum der Titelschöpfung — älter ist höher',
          'Nach der Zahl der Burgen',
          'Alphabetisch nach dem Nachnamen'
        ],
        correctAnswer: 1,
        explanation:
          'Ein alter Baronentitel kann prestigeträchtiger sein als ein frisch geschaffener Herzogstitel.'
      },
      {
        id: 'q-ntl-9-3-de',
        text: 'Was bedeutet «Titelsinflation» in der Frühen Neuzeit?',
        type: 'multiple-choice',
        options: [
          'Titel wurden seltener',
          'Titel verloren an Wert: Land und Macht stimmten nicht mehr — Intendanten regierten',
          'Der König verbot alle Marquis-Titel',
          'Titel gab es nur noch für Frauen'
        ],
        correctAnswer: 1,
        explanation:
          'Im 17. Jahrhundert war der Titel oft nur Papier und Eitelkeit, nicht echte Herrschaft.'
      }
    ]
  },
  {
    id: 'ntl28',
    title: 'Die berühmte Verwirrung bei Dumas',
    content:
      'Athos ist Graf de la Fère, Porthos Baron du Vallon. Im Frankreich des 17. Jahrhunderts sagte das vor allem etwas über Abstammung und Hofprivilegien aus — und Porthos konnte als «nur» Baron reicher sein als der Graf Athos.',
    duration: 3,
    media: [img('28-duma-famous-confusion.jpg', 'Athos und Porthos')]
  },
  {
    id: 'ntl29',
    title: 'Vom Zweck zur Ästhetik',
    content:
      'Die Geschichte der Titel zeigt, wie Praktisches zum Luxus wird. Der blutbefleckte Kommandant an der Grenzfestung — der Markgraf — wurde innerhalb weniger Jahrhunderte zum pudrigen Marquis auf hohen Absätzen.',
    duration: 3,
    media: [img('29-function-to-aesthetics.jpg', 'Funktion und Luxus')]
  },
  {
    id: 'ntl30',
    title: 'Das historische Paradox',
    content:
      'Die alten Grafen und Barone würden ihre «verweichlichten» Nachkommen nicht verstehen. Im Mittelalter war ein Titel vor allem Arbeit: richten, Korn eintreiben, kämpfen, eine Garnison befehligen. Adelig zu sein hieß von Anfang an, hart für den König zu arbeiten.',
    duration: 3,
    media: [img('30-noble-title-paradox.jpg', 'Titel als Arbeit')]
  },
  {
    id: 'q10',
    title: 'Quiz',
    content: '',
    duration: 2,
    questions: [
      {
        id: 'q-ntl-10-1-de',
        text: 'Was zeigt das Beispiel von Athos und Porthos bei Dumas?',
        type: 'multiple-choice',
        options: [
          'Ein Baron ist immer ärmer als ein Graf',
          'Titel bedeutet nicht automatisch Reichtum und echte Macht',
          'Grafen gab es in Frankreich nicht',
          'Dumas schrieb eine Dokumentation'
        ],
        correctAnswer: 1,
        explanation:
          'Im 17. Jahrhundert sagte der Titel etwas über Abstammung aus — Porthos konnte reicher sein als Athos.'
      },
      {
        id: 'q-ntl-10-2-de',
        text: 'Wie wird die Entwicklung des Markgrafen beschrieben?',
        type: 'multiple-choice',
        options: [
          'Vom Dichter zum Mönch',
          'Vom Grenzkommandanten zum pudrigen Marquis',
          'Vom Bauer zum König in einem Jahr',
          'Er blieb unverändert'
        ],
        correctAnswer: 1,
        explanation:
          'Die praktische Grenzfunktion wurde mit der Zeit zu Luxus und Hofetikette.'
      },
      {
        id: 'q-ntl-10-3-de',
        text: 'Was ist das historische Paradox der Titel?',
        type: 'multiple-choice',
        options: [
          'Mittelalterliche Titel waren von Anfang an nur Dekoration',
          'Ursprünglich war ein Titel Arbeit: richten, Korn, Krieg, Garnison',
          'Adelige dienten dem König nie',
          'Barone waren immer ärmer als Bauern'
        ],
        correctAnswer: 1,
        explanation:
          'Adelig zu sein hieß, schwer für den König zu arbeiten — nicht nur einen schönen Namen zu tragen.'
      }
    ]
  }
]

const quizQuestionsDE = medievalNobleTitlesSlidesDE.filter(
  (s): s is Slide & { questions: NonNullable<Slide['questions']> } =>
    !!s.questions && s.questions.length > 0
).flatMap(s => s.questions)

export const medievalNobleTitlesFinalQuizDE: QuizBlock = {
  id: 'quiz-medieval-noble-titles-de',
  title: 'Abschlussquiz: Adelstitel im Mittelalter',
  questions: quizQuestionsDE.map((q, i) => ({
    ...q,
    id: `q-ntl-f-${i + 1}-de`
  }))
}
