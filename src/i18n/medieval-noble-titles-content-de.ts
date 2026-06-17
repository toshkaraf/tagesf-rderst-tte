import { Slide, QuizBlock } from '../types/session'

export const medievalNobleTitlesSlidesDE: Slide[] = [
  { id: 'ntl1', title: "Adeliger — freier Diener", content: "Heute ist Freiheit selbstverständlich — im Mittelalter war ein niemandem Gehörender ein Privileg. Der Adelige war ursprünglich eine persönlich freie Person, die nicht «arbeitet», sondern ihrem Lehnsherrn dient — meist mit Waffe in der Hand.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/01-noble-free-servant.jpg', title: "Freier Diener" }] },

  { id: 'ntl2', title: "Aber auch adelige «Unfreie»", content: "Im mittelalterlichen Deutschland gab es Ministerialen: Ritter und Verwalter mit Waffen, Schlössern und Kriegsdienst — juristisch aber «unfrei», faktisch Leibeigene des Königs oder Bischofs.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/02-noble-serf-knights.jpg', title: "Ministerialen" }] },

  { id: 'ntl3', title: "Ritter: Soldat, kein Romantiker", content: "«Ritter» (engl. knight, ahd. cniht — Diener, Junge) hatte zuerst nichts mit Turnieren und Damen zu tun. Es war ein schwerbewaffneter Berufsreiter, der für Offiziersdienst zugelassen wurde.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/03-knight-soldier-not-romantic.jpg', title: "Ritter als Soldat" }] },

    {
      id: 'q1',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-ntl-1-1-de', text: "Wer war der Adelige im Mittelalter ursprünglich?", type: 'multiple-choice', options: ["Unabhängiger Handwerker","Persönlich freier Diener des Lehnsherrn, oft mit Waffe","Rechtlose*r Bauer","Nur Kirchenbeamte*r"], correctAnswer: 1, explanation: "Adel = frei und dienend — nicht «arbeiten» im modernen Sinn." },
      { id: 'q-ntl-1-2-de', text: "Wer waren Ministerialen?", type: 'multiple-choice', options: ["Waffenlose Mönche","Ritter/Verwalter, juristisch «unfrei»","Nur Königssöhne","Italienische Kaufleute"], correctAnswer: 1, explanation: "Sie kämpften und hatten Burgen, blieben aber Leibeigene des Herrn." },
      { id: 'q-ntl-1-3-de', text: "Was bedeutete «Ritter» ursprünglich?", type: 'multiple-choice', options: ["Hofdichter","Schwerbewaffneter Berufsreiter","Turnierorganisator für Damen","Richter ohne Waffe"], correctAnswer: 1, explanation: "Knight/cniht/Ritter — Diener, Junge, Reiter; Romantik kam später." }
      ]
    },

  { id: 'ntl4', title: "Bachelor und Banneret", content: "Ein Bachelor ist ein einfacher Ritter (mit Dienern). Ein Banneret darf im Kampf sein eigenes Banner tragen — nicht Schau, sondern Funktion: ohne Funk dient es als Orientierung für die Soldaten.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/04-knight-bachelor-banneret.jpg', title: "Banner und Bachelor" }] },

  { id: 'ntl5', title: "Woher kommen die Titel?", content: "Graf, Herzog, Baron — klingt nach Dumas-Roman. Frühmittelalterlich war alles utilitaristisch: konkrete Amtstitel und militärische Funktionen.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/05-where-titles-came-from.jpg', title: "Utilitaristische Titel" }] },

  { id: 'ntl6', title: "Baron: Mann mit Land", content: "Baron kommt von lat. baro — «Mann», «Söldner». Ein Baron hält eine Baronie (Lehen) direkt vom König, nicht von einem anderen Vasallen.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/06-baron-landholder.jpg', title: "Baron und Baronie" }] },

    {
      id: 'q2',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-ntl-2-1-de', text: "Wozu durfte ein Banneret sein Banner tragen?", type: 'multiple-choice', options: ["Nur für Paradeschönheit","Als Orientierung für Soldaten im Kampf","Für Markthandel","Um Bauern zu richten"], correctAnswer: 1, explanation: "Ohne Funk war das Banner der Anker in der Schlacht." },
      { id: 'q-ntl-2-2-de', text: "Was waren Graf/Herzog/Baron frühmittelalterlich?", type: 'multiple-choice', options: ["Märchennamen ohne Funktion","Konkrete Ämter und militärische Funktionen","Nur Kirchenämter","Stadtnamen"], correctAnswer: 1, explanation: "Titel begannen utilitaristisch, nicht als Roman-Schmuck." },
      { id: 'q-ntl-2-3-de', text: "Wer ist ein Baron im Feudalsinn?", type: 'multiple-choice', options: ["Lehenshalter direkt vom König","Landloser Bauer","Nur Stadtbürgermeister","Gesetzlicher Erbe eines Vizegrafen"], correctAnswer: 0, explanation: "Baron = Baronie direkt vom König, nicht vom Vasallen." }
      ]
    },

  { id: 'ntl7', title: "Warum Barone Könige diktierten", content: "Bei Magna Carta wundern wir uns über «Barone». Damals bedeutete Baron: direkter königlicher Vasall — nur sie durften dem Monarchen Forderungen stellen.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/07-barons-dictated-to-kings.jpg', title: "Barone und König" }] },

  { id: 'ntl8', title: "Graf: alter Buchhalter", content: "Graf (engl. count, lat. comes — Gefährte des Kaisers) war zuerst königlicher Statthalter: Steuerer, Richter, Verwalter einer Region.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/08-count-ancient-accountant.jpg', title: "Graf als Statthalter" }] },

  { id: 'ntl9', title: "Englische Anomalie: Earl", content: "In England heißt der Graf Earl — von skandinav. jarl, Stammesführer. Die Ehefrau heißt Countess, weil es kein weibliches jarl gab.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/09-english-earl-anomaly.jpg', title: "Earl und Countess" }] },

    {
      id: 'q3',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-ntl-3-1-de', text: "Warum diktierten «Barone» dem König in der Magna Carta?", type: 'multiple-choice', options: ["Weil Baron der niedrigste Titel war","Weil Baron damals direkter königlicher Vasall mit Status war","Weil der König Bauer war","Weil nur Barone Ritter waren"], correctAnswer: 1, explanation: "Nur direkte Vasallen durften Forderungen stellen." },
      { id: 'q-ntl-3-2-de', text: "Wer war der Graf (comes) ursprünglich?", type: 'multiple-choice', options: ["Hofdichter","Königlicher Statthalter, Steuerer, Richter","Nur Flottenkommandant","Mönch-Schreiber"], correctAnswer: 1, explanation: "Comes = «Gefährte des Kaisers», regionaler Beamter." },
      { id: 'q-ntl-3-3-de', text: "Was ist besonders am englischen Earl?", type: 'multiple-choice', options: ["Earl kommt von skandinav. jarl","Earl steht immer unter dem Baron","Earl ist nur ein Frauentitel","Earl hat keine Ehefrau"], correctAnswer: 0, explanation: "Earl statt Count; Ehefrau heißt Countess — kein weibl. jarl." }
      ]
    },

  { id: 'ntl10', title: "Vielfalt der Grafen", content: "Pfalzgraf — Verwalter des Königspfalz. Landgraf — Provinzstatthalter. Burggraf — Kommandant einer befestigten Stadt. Alle im Staatsdienst.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/10-variety-of-counts.jpg', title: "Grafenarten" }] },

  { id: 'ntl11', title: "Markgraf: Grenzer mit Extra-Power", content: "Markgraf/Marquis von «Mark» — gefährliche Grenzmark. Der Statthalter hatte mehr Truppen und Befugnisse als ein normaler Graf.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/11-marquis-border-guard.jpg', title: "Markgraf an der Grenze" }] },

  { id: 'ntl12', title: "Vizegraf: einfach der Stellvertreter", content: "Vizegraf (viscount, lat. vice-comes) — «Stellvertreter des Grafen», der dessen Pflichten übernahm, während der Graf am Hof oder im Krieg war.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/12-viscount-deputy.jpg', title: "Vizegraf" }] },

    {
      id: 'q4',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-ntl-4-1-de', text: "Wer ist ein Burggraf?", type: 'multiple-choice', options: ["Verwalter des Pfalz","Kommandant einer befestigten Stadt","Meeressteuerer","Herzogssohn ohne Titel"], correctAnswer: 1, explanation: "Burggraf = «Stadt-Kommandant» mit Befestigung." },
      { id: 'q-ntl-4-2-de', text: "Wovon kommt «Markgraf/Marquis»?", type: 'multiple-choice', options: ["Vom Markt — Handelsplatz","Von der «Mark» — gefährlicher Grenzland","Vom Heiligen Markus","Vom franz. «marier» — heiraten"], correctAnswer: 1, explanation: "March = Grenzmark mit Extra-Truppen und Befugnissen." },
      { id: 'q-ntl-4-3-de', text: "Wer war der Vizegraf ursprünglich?", type: 'multiple-choice', options: ["Stellvertreter des Grafen (vice-comes)","Sohn des Königs","Kirchenoberhaupt","Handelsschiff-Kapitän"], correctAnswer: 0, explanation: "Er übernahm, während der Graf am Hof oder im Krieg war." }
      ]
    },

  { id: 'ntl13', title: "Herzog: ganz andere Kategorie", content: "Herzog (lat. dux — Heerführer) war kein ernannter Beamter, sondern alter germanischer Stammesführer. Könige kauften Loyalität mit höchstem Status.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/13-duke-different-breed.jpg', title: "Herzog als Führer" }] },

  { id: 'ntl14', title: "Herzöge fast wie Könige", content: "Herzöge regierten riesige Gebiete (Bayern, Sachsen) weitgehend selbst. Erster englischer Herzog: Sohn Eduards III., 1337 — vorher gab es den Titel in England nicht.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/14-dukes-almost-kings.jpg', title: "Herzog und Territorium" }] },

  { id: 'ntl15', title: "Prinz: erster unter Gleichen", content: "Prinz (lat. princeps — der Erste) hieß zuerst nicht «Sohn des Königs». In Rom der Kaiser; im Mittelalter jeder unabhängige Souverän.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/15-prince-first-among-equals.jpg', title: "Prinz als Souverän" }] },

    {
      id: 'q5',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-ntl-5-1-de', text: "Wie unterschied sich der Herzog vom Grafen?", type: 'multiple-choice', options: ["Herzog = Beamter, Graf = Stammesführer","Herzog = alter Stammesführer, nicht nur Beamter","Herzog stand immer unter dem Baron","Herzog gab es nur in Frankreich"], correctAnswer: 1, explanation: "Dux = Heerführer; Könige kauften Loyalität mit Rang." },
      { id: 'q-ntl-5-2-de', text: "Wann gab es den ersten englischen Herzog?", type: 'multiple-choice', options: ["1066","1337 — Sohn Eduards III.","1611","Nie"], correctAnswer: 1, explanation: "Vor 1337 existierte der Titel in England nicht." },
      { id: 'q-ntl-5-3-de', text: "Wen nannte man im Mittelalter «Prinz»?", type: 'multiple-choice', options: ["Nur den Königssohn","Jeden unabhängigen Souverän","Nur den Bischof","Nur landlosen Ritter"], correctAnswer: 1, explanation: "Princeps = «Erster» — Souverän, dem niemand befiehlt." }
      ]
    },

  { id: 'ntl16', title: "Warum Walisische Prinzen keine Ritter sind", content: "Adel (Geburt) und Rittertum (Beruf) waren getrennt. Selbst Königssöhne wurden adelig geboren — Ritter wurden sie erst durch Ausbildung und Weihe.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/16-welsh-princes-not-knights.jpg', title: "Geburt und Rittertum" }] },

  { id: 'ntl17', title: "Squaire: Page mit Anspruch", content: "Squaire (lat. scutarius — Schildträger) — Waffenknecht eines Ritters. Ritterung wurde teuer; viele reiche Grundbesitzer blieben lebenslang Squaire.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/17-squire-ambitious-page.jpg', title: "Squaire" }] },

  { id: 'ntl18', title: "Yeomen: frei, aber nicht adelig", content: "In England Yeomen — freie Bauern mit Land. Sie pflügten, waren unabhängig und mussten einen Langbogen für die Landesverteidigung haben.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/18-yeomen-free-not-noble.jpg', title: "Yeomen mit Langbogen" }] },

    {
      id: 'q6',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-ntl-6-1-de', text: "Warum ist ein Prinz nicht automatisch Ritter?", type: 'multiple-choice', options: ["Gesetz verbot es","Geburt (Adel) und Rittertum (Beruf) sind getrennt","Prinzen konnten nicht reiten","Ritter nahmen keine Adeligen"], correctAnswer: 1, explanation: "Auch Königssöhne brauchten Ausbildung und Weihe." },
      { id: 'q-ntl-6-2-de', text: "Wer war ein Squaire ursprünglich?", type: 'multiple-choice', options: ["Königlicher Richter","Waffenknecht (Schildträger) eines Ritters","Mönch","Kaufmann aus Flandern"], correctAnswer: 1, explanation: "Scutarius — viele blieben lebenslang Squaire wegen der Kosten." },
      { id: 'q-ntl-6-3-de', text: "Wie unterschieden sich Yeomen vom Adel?", type: 'multiple-choice', options: ["Yeomen waren Sklaven","Freie Bauern mit Land und Langbogen, aber nicht adelig","Nur Kirchendienst","Ohne Land"], correctAnswer: 1, explanation: "Sie pflügten eigenes Land und waren zur Landesverteidigung verpflichtet." }
      ]
    },

  { id: 'ntl19', title: "Wie Ämter zu Titeln wurden", content: "Früh wurden Graf- oder Vizegrafposten persönlich vergeben. Beamte übergaben sie bald an Söhne — warum dem König das Amt zurückgeben?", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/19-offices-became-titles.jpg', title: "Erbbare Ämter" }] },

  { id: 'ntl20', title: "Privatisierung des Staates", content: "Könige akzeptierten es: Grafschaften, Baronien, Marken wurden Erbbesitz — übertragbar oder als Mitgift.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/20-privatization-of-state.jpg', title: "Erbliche Herrschaften" }] },

  { id: 'ntl21', title: "Titel ohne Arbeit", content: "Mit dem Absolutismus kamen neue Beamte und stehende Heere. Alte Feudale waren überflüssig — der Graf sammelte keine Steuern mehr, der Herzog führte kein Stammesheer.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/21-title-without-work.jpg', title: "Titel ohne Funktion" }] },

    {
      id: 'q7',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-ntl-7-1-de', text: "Wie wurden Ämter zu Titeln?", type: 'multiple-choice', options: ["König verbot Erbe","Beamte gaben Posten an Söhne weiter","Kirche benannte alles um","Bauern wählten Namen"], correctAnswer: 1, explanation: "Grafen/Vizegrafen «privatisierten» ihre Sitze." },
      { id: 'q-ntl-7-2-de', text: "Was geschah mit Grafschaften und Baronien?", type: 'multiple-choice', options: ["Sie verschwanden über Nacht","Wurden Erbbesitz — vererbbar oder als Mitgift","Gingen nur an die Kirche","Wurden nur gewählt"], correctAnswer: 1, explanation: "Amt wurde Familien-Eigentum." },
      { id: 'q-ntl-7-3-de', text: "Warum wurde der Titel «nur noch Rang» beim Absolutismus?", type: 'multiple-choice', options: ["Könige schafften alle Titel ab","Neue Beamte/Heere ersetzten alte Feudale — Funktionen weg","Adel gab Land auf","Titel nur für Frauen"], correctAnswer: 1, explanation: "Graf sammelte keine Steuern mehr — nur noch der Name blieb." }
      ]
    },

  { id: 'ntl22', title: "Englischer Peer: was heißt das?", content: "Peer (lat. par — gleich) — Mitglied der höchsten britischen Aristokratie. Der König erkannte sie als seinesgleichen in Ehre, mit Recht, sich gegenseitig zu richten.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/22-english-peer-meaning.jpg', title: "Peer und Parlament" }] },

  { id: 'ntl23', title: "Hierarchie der britischen Elite", content: "Oben: Herzog, Marquess, Earl, Viscount, Baron. Darunter Baronets und Ritter — adelig, aber keine Peers, kein House of Lords.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/23-british-nobility-hierarchy.jpg', title: "Adels-Hierarchie" }] },

  { id: 'ntl24', title: "Baronet: gekaufter Titel", content: "König Jakob I. erfand 1611 den Baronet — verkauft an Reiche für den Irland-Krieg. Erblich mit «Sir», aber kein Peer.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/24-baronet-bought-title.jpg', title: "Baronet Jakobs I." }] },

    {
      id: 'q8',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-ntl-8-1-de', text: "Warum heißt der Peer «gleich» (par)?", type: 'multiple-choice', options: ["Gleich den Bauern","König erkannte höchste Elite als seinesgleichen in Ehre","Alle Peers gleich arm","Übersetzung von «Parliament»"], correctAnswer: 1, explanation: "Herzöge bis Barone — «Peers» mit besonderem Ehrenrang." },
      { id: 'q-ntl-8-2-de', text: "Wer ist Peer in Großbritannien?", type: 'multiple-choice', options: ["Baronet","Earl (Graf)","Ritter ohne Titel","Yeoman"], correctAnswer: 1, explanation: "Baronets und Ritter — adelig, aber keine Peers." },
      { id: 'q-ntl-8-3-de', text: "Warum schuf Jakob I. 1611 Baronets?", type: 'multiple-choice', options: ["Nur für Krieger","Titelsverkauf für Geld — Irland-Krieg","Ersatz aller Herzöge","Parlamentsauftrag"], correctAnswer: 1, explanation: "Erblich mit «Sir», aber kein Peer." }
      ]
    },

  { id: 'ntl25', title: "Lord: Sammelwort", content: "Lord (ahd. hlāford — Brot-Hüter) ist kein Titel, sondern Anrede für Barone bis Marquess und für Herzogssöhne. Ein Titel «Lord» existiert nicht.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/25-lord-collective-word.jpg', title: "Anrede «Lord»" }] },

  { id: 'ntl26', title: "Seniorität innerhalb eines Titels", content: "Zwei Earls gleich? Nein — wer 1400 den Titel bekam, steht über dem von 1600. Ein alter Baronentitel kann prestigeträchtiger sein als ein neuer Herzogstitel.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/26-seniority-within-title.jpg', title: "Titelseniorenität" }] },

  { id: 'ntl27', title: "Frühe Neuzeit: Titelsinflation", content: "Zur Musketeier-Zeit: Titelmarkt und Eitelkeit. Land passte nicht zum Rang — ein Marquis-Titel konnte eine Papierurkunde sein, während ein Intendant regierte.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/27-early-modern-title-inflation.jpg', title: "Titelsinflation" }] },

    {
      id: 'q9',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-ntl-9-1-de', text: "«Lord» ist…", type: 'multiple-choice', options: ["Ein eigenständiger Höchsttitel","Höfliche Anrede, kein eigener Titel","Nur Titel für Königssöhne","Synonym für Bauer"], correctAnswer: 1, explanation: "Hlāford — Anrede für Barone bis Marquess und Herzogssöhne." },
      { id: 'q-ntl-9-2-de', text: "Wie wird Seniorität zweier Earls bestimmt?", type: 'multiple-choice', options: ["Nach Körpergröße","Nach Datum der Titelschöpfung — älter = höher","Nach Burgenzahl","Alphabetisch"], correctAnswer: 1, explanation: "Alter Baronentitel kann prestigeträchtiger sein als neuer Herzogstitel." },
      { id: 'q-ntl-9-3-de', text: "Was ist «Titelsinflation» in der Frühen Neuzeit?", type: 'multiple-choice', options: ["Titel wurden seltener","Rang ohne Land/Macht — Intendanten regierten","König verbot Marquis","Nur Frauentitel"], correctAnswer: 1, explanation: "XVII. Jh.: oft Papier und Eitelkeit statt echter Gewalt." }
      ]
    },

  { id: 'ntl28', title: "Dumas’ berühmte Verwechslung", content: "Athos — Graf, Porthos — Baron. Im Frankreich des 17. Jh. bedeutete das vor allem Abstammung und Hofprivilegien — Porthos konnte reicher sein als Athos.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/28-duma-famous-confusion.jpg', title: "Athos und Porthos" }] },

  { id: 'ntl29', title: "Vom Funktionalen zum Ästhetischen", content: "Titelgeschichte: Praktisches wird Luxus. Der blutige Markgraf an der Grenze wird zum pudrigen Marquis auf Absätzen.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/29-function-to-aesthetics.jpg', title: "Funktion und Luxus" }] },

  { id: 'ntl30', title: "Das historische Paradox", content: "Alte Grafen und Barone würden ihre verweichlichten Nachfahren nicht verstehen. Im Mittelalter war ein Titel vor allem Arbeit: richten, Korn eintreiben, kämpfen, Garnison führen.", duration: 3, media: [{ type: 'image', url: '/media/medieval-noble-titles/30-noble-title-paradox.jpg', title: "Titel als Arbeit" }] },

    {
      id: 'q10',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-ntl-10-1-de', text: "Was zeigt Athos und Porthos bei Dumas?", type: 'multiple-choice', options: ["Baron immer ärmer als Graf","Titel ≠ Reichtum und echte Macht","Grafen gab es in Frankreich nicht","Dumas schrieb Dokumentation"], correctAnswer: 1, explanation: "Titel = Abstammung; Porthos konnte reicher sein." },
      { id: 'q-ntl-10-2-de', text: "Wie wird die Markgraf-Evolution beschrieben?", type: 'multiple-choice', options: ["Vom Dichter zum Mönch","Vom Grenzkommandanten zum pudrigen Marquis","Vom Bauer zum König in einem Jahr","Unverändert"], correctAnswer: 1, explanation: "Praktische Grenzfunktion wurde Luxus und Etikette." },
      { id: 'q-ntl-10-3-de', text: "Was ist das historische Paradox der Titel?", type: 'multiple-choice', options: ["Titel waren von Anfang an dekorativ","Titel war Arbeit: richten, Korn, Krieg, Garnison","Adel diente nie dem König","Barone immer ärmer als Bauern"], correctAnswer: 1, explanation: "Adel bedeutete harte Arbeit für den König — nicht nur Glanz." }
      ]
    }
]

export const medievalNobleTitlesFinalQuizDE: QuizBlock = {
  id: 'quiz-medieval-noble-titles-de',
  title: 'Abschlussquiz: Adelstitel im Mittelalter',
  questions: [
    { id: 'q-ntl-f-1-de', text: "Wer war der Adelige im Mittelalter ursprünglich?", type: 'multiple-choice', options: ["Unabhängiger Handwerker","Persönlich freier Diener des Lehnsherrn, oft mit Waffe","Rechtlose*r Bauer","Nur Kirchenbeamte*r"], correctAnswer: 1, explanation: "Adel = frei und dienend — nicht «arbeiten» im modernen Sinn." },
    { id: 'q-ntl-f-2-de', text: "Wer waren Ministerialen?", type: 'multiple-choice', options: ["Waffenlose Mönche","Ritter/Verwalter, juristisch «unfrei»","Nur Königssöhne","Italienische Kaufleute"], correctAnswer: 1, explanation: "Sie kämpften und hatten Burgen, blieben aber Leibeigene des Herrn." },
    { id: 'q-ntl-f-3-de', text: "Was bedeutete «Ritter» ursprünglich?", type: 'multiple-choice', options: ["Hofdichter","Schwerbewaffneter Berufsreiter","Turnierorganisator für Damen","Richter ohne Waffe"], correctAnswer: 1, explanation: "Knight/cniht/Ritter — Diener, Junge, Reiter; Romantik kam später." },
    { id: 'q-ntl-f-4-de', text: "Wozu durfte ein Banneret sein Banner tragen?", type: 'multiple-choice', options: ["Nur für Paradeschönheit","Als Orientierung für Soldaten im Kampf","Für Markthandel","Um Bauern zu richten"], correctAnswer: 1, explanation: "Ohne Funk war das Banner der Anker in der Schlacht." },
    { id: 'q-ntl-f-5-de', text: "Was waren Graf/Herzog/Baron frühmittelalterlich?", type: 'multiple-choice', options: ["Märchennamen ohne Funktion","Konkrete Ämter und militärische Funktionen","Nur Kirchenämter","Stadtnamen"], correctAnswer: 1, explanation: "Titel begannen utilitaristisch, nicht als Roman-Schmuck." },
    { id: 'q-ntl-f-6-de', text: "Wer ist ein Baron im Feudalsinn?", type: 'multiple-choice', options: ["Lehenshalter direkt vom König","Landloser Bauer","Nur Stadtbürgermeister","Gesetzlicher Erbe eines Vizegrafen"], correctAnswer: 0, explanation: "Baron = Baronie direkt vom König, nicht vom Vasallen." },
    { id: 'q-ntl-f-7-de', text: "Warum diktierten «Barone» dem König in der Magna Carta?", type: 'multiple-choice', options: ["Weil Baron der niedrigste Titel war","Weil Baron damals direkter königlicher Vasall mit Status war","Weil der König Bauer war","Weil nur Barone Ritter waren"], correctAnswer: 1, explanation: "Nur direkte Vasallen durften Forderungen stellen." },
    { id: 'q-ntl-f-8-de', text: "Wer war der Graf (comes) ursprünglich?", type: 'multiple-choice', options: ["Hofdichter","Königlicher Statthalter, Steuerer, Richter","Nur Flottenkommandant","Mönch-Schreiber"], correctAnswer: 1, explanation: "Comes = «Gefährte des Kaisers», regionaler Beamter." },
    { id: 'q-ntl-f-9-de', text: "Was ist besonders am englischen Earl?", type: 'multiple-choice', options: ["Earl kommt von skandinav. jarl","Earl steht immer unter dem Baron","Earl ist nur ein Frauentitel","Earl hat keine Ehefrau"], correctAnswer: 0, explanation: "Earl statt Count; Ehefrau heißt Countess — kein weibl. jarl." },
    { id: 'q-ntl-f-10-de', text: "Wer ist ein Burggraf?", type: 'multiple-choice', options: ["Verwalter des Pfalz","Kommandant einer befestigten Stadt","Meeressteuerer","Herzogssohn ohne Titel"], correctAnswer: 1, explanation: "Burggraf = «Stadt-Kommandant» mit Befestigung." },
    { id: 'q-ntl-f-11-de', text: "Wovon kommt «Markgraf/Marquis»?", type: 'multiple-choice', options: ["Vom Markt — Handelsplatz","Von der «Mark» — gefährlicher Grenzland","Vom Heiligen Markus","Vom franz. «marier» — heiraten"], correctAnswer: 1, explanation: "March = Grenzmark mit Extra-Truppen und Befugnissen." },
    { id: 'q-ntl-f-12-de', text: "Wer war der Vizegraf ursprünglich?", type: 'multiple-choice', options: ["Stellvertreter des Grafen (vice-comes)","Sohn des Königs","Kirchenoberhaupt","Handelsschiff-Kapitän"], correctAnswer: 0, explanation: "Er übernahm, während der Graf am Hof oder im Krieg war." },
    { id: 'q-ntl-f-13-de', text: "Wie unterschied sich der Herzog vom Grafen?", type: 'multiple-choice', options: ["Herzog = Beamter, Graf = Stammesführer","Herzog = alter Stammesführer, nicht nur Beamter","Herzog stand immer unter dem Baron","Herzog gab es nur in Frankreich"], correctAnswer: 1, explanation: "Dux = Heerführer; Könige kauften Loyalität mit Rang." },
    { id: 'q-ntl-f-14-de', text: "Wann gab es den ersten englischen Herzog?", type: 'multiple-choice', options: ["1066","1337 — Sohn Eduards III.","1611","Nie"], correctAnswer: 1, explanation: "Vor 1337 existierte der Titel in England nicht." },
    { id: 'q-ntl-f-15-de', text: "Wen nannte man im Mittelalter «Prinz»?", type: 'multiple-choice', options: ["Nur den Königssohn","Jeden unabhängigen Souverän","Nur den Bischof","Nur landlosen Ritter"], correctAnswer: 1, explanation: "Princeps = «Erster» — Souverän, dem niemand befiehlt." },
    { id: 'q-ntl-f-16-de', text: "Warum ist ein Prinz nicht automatisch Ritter?", type: 'multiple-choice', options: ["Gesetz verbot es","Geburt (Adel) und Rittertum (Beruf) sind getrennt","Prinzen konnten nicht reiten","Ritter nahmen keine Adeligen"], correctAnswer: 1, explanation: "Auch Königssöhne brauchten Ausbildung und Weihe." },
    { id: 'q-ntl-f-17-de', text: "Wer war ein Squaire ursprünglich?", type: 'multiple-choice', options: ["Königlicher Richter","Waffenknecht (Schildträger) eines Ritters","Mönch","Kaufmann aus Flandern"], correctAnswer: 1, explanation: "Scutarius — viele blieben lebenslang Squaire wegen der Kosten." },
    { id: 'q-ntl-f-18-de', text: "Wie unterschieden sich Yeomen vom Adel?", type: 'multiple-choice', options: ["Yeomen waren Sklaven","Freie Bauern mit Land und Langbogen, aber nicht adelig","Nur Kirchendienst","Ohne Land"], correctAnswer: 1, explanation: "Sie pflügten eigenes Land und waren zur Landesverteidigung verpflichtet." },
    { id: 'q-ntl-f-19-de', text: "Wie wurden Ämter zu Titeln?", type: 'multiple-choice', options: ["König verbot Erbe","Beamte gaben Posten an Söhne weiter","Kirche benannte alles um","Bauern wählten Namen"], correctAnswer: 1, explanation: "Grafen/Vizegrafen «privatisierten» ihre Sitze." },
    { id: 'q-ntl-f-20-de', text: "Was geschah mit Grafschaften und Baronien?", type: 'multiple-choice', options: ["Sie verschwanden über Nacht","Wurden Erbbesitz — vererbbar oder als Mitgift","Gingen nur an die Kirche","Wurden nur gewählt"], correctAnswer: 1, explanation: "Amt wurde Familien-Eigentum." },
    { id: 'q-ntl-f-21-de', text: "Warum wurde der Titel «nur noch Rang» beim Absolutismus?", type: 'multiple-choice', options: ["Könige schafften alle Titel ab","Neue Beamte/Heere ersetzten alte Feudale — Funktionen weg","Adel gab Land auf","Titel nur für Frauen"], correctAnswer: 1, explanation: "Graf sammelte keine Steuern mehr — nur noch der Name blieb." },
    { id: 'q-ntl-f-22-de', text: "Warum heißt der Peer «gleich» (par)?", type: 'multiple-choice', options: ["Gleich den Bauern","König erkannte höchste Elite als seinesgleichen in Ehre","Alle Peers gleich arm","Übersetzung von «Parliament»"], correctAnswer: 1, explanation: "Herzöge bis Barone — «Peers» mit besonderem Ehrenrang." },
    { id: 'q-ntl-f-23-de', text: "Wer ist Peer in Großbritannien?", type: 'multiple-choice', options: ["Baronet","Earl (Graf)","Ritter ohne Titel","Yeoman"], correctAnswer: 1, explanation: "Baronets und Ritter — adelig, aber keine Peers." },
    { id: 'q-ntl-f-24-de', text: "Warum schuf Jakob I. 1611 Baronets?", type: 'multiple-choice', options: ["Nur für Krieger","Titelsverkauf für Geld — Irland-Krieg","Ersatz aller Herzöge","Parlamentsauftrag"], correctAnswer: 1, explanation: "Erblich mit «Sir», aber kein Peer." },
    { id: 'q-ntl-f-25-de', text: "«Lord» ist…", type: 'multiple-choice', options: ["Ein eigenständiger Höchsttitel","Höfliche Anrede, kein eigener Titel","Nur Titel für Königssöhne","Synonym für Bauer"], correctAnswer: 1, explanation: "Hlāford — Anrede für Barone bis Marquess und Herzogssöhne." },
    { id: 'q-ntl-f-26-de', text: "Wie wird Seniorität zweier Earls bestimmt?", type: 'multiple-choice', options: ["Nach Körpergröße","Nach Datum der Titelschöpfung — älter = höher","Nach Burgenzahl","Alphabetisch"], correctAnswer: 1, explanation: "Alter Baronentitel kann prestigeträchtiger sein als neuer Herzogstitel." },
    { id: 'q-ntl-f-27-de', text: "Was ist «Titelsinflation» in der Frühen Neuzeit?", type: 'multiple-choice', options: ["Titel wurden seltener","Rang ohne Land/Macht — Intendanten regierten","König verbot Marquis","Nur Frauentitel"], correctAnswer: 1, explanation: "XVII. Jh.: oft Papier und Eitelkeit statt echter Gewalt." },
    { id: 'q-ntl-f-28-de', text: "Was zeigt Athos und Porthos bei Dumas?", type: 'multiple-choice', options: ["Baron immer ärmer als Graf","Titel ≠ Reichtum und echte Macht","Grafen gab es in Frankreich nicht","Dumas schrieb Dokumentation"], correctAnswer: 1, explanation: "Titel = Abstammung; Porthos konnte reicher sein." },
    { id: 'q-ntl-f-29-de', text: "Wie wird die Markgraf-Evolution beschrieben?", type: 'multiple-choice', options: ["Vom Dichter zum Mönch","Vom Grenzkommandanten zum pudrigen Marquis","Vom Bauer zum König in einem Jahr","Unverändert"], correctAnswer: 1, explanation: "Praktische Grenzfunktion wurde Luxus und Etikette." },
    { id: 'q-ntl-f-30-de', text: "Was ist das historische Paradox der Titel?", type: 'multiple-choice', options: ["Titel waren von Anfang an dekorativ","Titel war Arbeit: richten, Korn, Krieg, Garnison","Adel diente nie dem König","Barone immer ärmer als Bauern"], correctAnswer: 1, explanation: "Adel bedeutete harte Arbeit für den König — nicht nur Glanz." }
  ]
}
