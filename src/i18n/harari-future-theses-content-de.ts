import { Slide, QuizBlock } from '../types/session'

export const harariFutureThesesSlidesDE: Slide[] = [
  { id: 'hrf1', title: "Wer ist Harari?", content: "Yuval Noah Harari ist Historiker, kein Futurist — obwohl man ihn meist als Autor über die Zukunft liest. Seine Bücher wurden über 45 Millionen Mal verkauft, und fast jedes löst neue Debatten über Mensch, Technologie und Macht aus.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/01-yuval-harari-portrait.jpg', title: "Yuval Noah Harari" }] },

  { id: 'hrf2', title: "Warum er manche nervt", content: "Harari kann komplexe Prozesse in eine starke Formel pressen. Deshalb lieben ihn manche als Denker — und kritisieren ihn als jemanden, der die Welt zu schön vereinfacht.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/02-harari-one-formula.jpg', title: "Eine starke Formel" }] },

  { id: 'hrf3', title: "Das sind keine Prophezeiungen", content: "Harari selbst betont: Das sind keine Vorhersagen, sondern Warnungen. Er sagt nicht «so wird es sein», sondern «so könnte es werden, wenn sich nichts ändert».", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/03-harari-warnings-not-prophecies.jpg', title: "Warnungen, keine Prophezeiungen" }] },

    {
      id: 'q1',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-hrf-1-1-de', text: "Wen nennt Harari in dieser Einheit?", type: 'multiple-choice', options: ["Einen Futuristen","Einen Historiker, keinen Futuristen","Einen Politiker","Einen Berufsviologen"], correctAnswer: 1, explanation: "Er ist Historiker, wird aber oft als Zukunftsautor gelesen." },
      { id: 'q-hrf-1-2-de', text: "Warum wird Harari gelobt und kritisiert?", type: 'multiple-choice', options: ["Weil er nur Kurztexte schreibt","Weil er Komplexes in eine starke Formel presst","Weil er keine Interviews gibt","Weil er nicht übersetzt wird"], correctAnswer: 1, explanation: "Klare Formeln faszinieren und vereinfachen zugleich." },
      { id: 'q-hrf-1-3-de', text: "Wie beschreibt Harari seine Thesen selbst?", type: 'multiple-choice', options: ["Als sichere Prophezeiungen","Als Warnungen, nicht als Vorhersagen","Als Naturgesetze","Als Parteiprogramm"], correctAnswer: 1, explanation: "«So könnte es werden, wenn sich nichts ändert»." }
      ]
    },

  { id: 'hrf4', title: "These 1: Die «nutzlose Klasse»", content: "Eine der harten Thesen: Die neue Tech-Revolution könnte eine «nutzlose Klasse» schaffen — nicht nur Arbeitslose, sondern Menschen, die das System für überflüssig hält.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/04-useless-class-thesis.jpg', title: "«Nutzlose Klasse»" }] },

  { id: 'hrf5', title: "Keine normale Arbeitslosigkeit", content: "Früher verlor man einen Beruf und lernte einen neuen. Harari fürchtet: Algorithmen und Maschinen verdrängen Menschen gleichzeitig aus zu vielen Bereichen — Umschulung reicht dann nicht mehr.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/05-retraining-not-enough.jpg', title: "Umschulung reicht nicht" }] },

  { id: 'hrf6', title: "Die düsterste Formulierung", content: "Auf die Frage, was man mit dieser Klasse tun solle, antwortete Harari provokant: Bisher sei das Beste Drogen und Computerspiele. Zynisch — und deshalb so treffend.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/06-drugs-and-video-games-quote.jpg', title: "Provokante Antwort" }] },

    {
      id: 'q2',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-hrf-2-1-de', text: "Was ist Hararis «nutzlose Klasse»?", type: 'multiple-choice', options: ["Menschen ohne Smartphone","Menschen, die das System für überflüssig hält","Nur Rentner","Nur Beamte"], correctAnswer: 1, explanation: "Nicht nur ohne Job — sondern systemisch unnütz." },
      { id: 'q-hrf-2-2-de', text: "Worin unterscheidet sich die neue Arbeitslosigkeit?", type: 'multiple-choice', options: ["Sie dauert einen Tag","Umschulung hilft vielleicht nicht mehr","Sie betrifft nur Bauern","Sie löst nur Steuerpolitik"], correctAnswer: 1, explanation: "Algorithmen verdrängen aus zu vielen Bereichen gleichzeitig." },
      { id: 'q-hrf-2-3-de', text: "Was schlug Harari provokant für diese Klasse vor?", type: 'multiple-choice', options: ["Pflichtdienst","Drogen und Computerspiele","Internetsperre","Umzug auf einen anderen Planeten"], correctAnswer: 1, explanation: "Zynisch formuliert — deshalb so hart." }
      ]
    },

  { id: 'hrf7', title: "These 2: Die Frage des Jahrhunderts ändert sich", content: "Zweihundert Jahre lang fragte die Welt: Wie geben wir Menschen Arbeit? Harari meint: Im 21. Jahrhundert könnte die Frage lauten: Wozu braucht man Menschen überhaupt — und warum so viele?", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/07-why-people-needed-question.jpg', title: "Neue Jahrhundertfrage" }] },

  { id: 'hrf8', title: "Warum das die Welt aufbricht", content: "Schule, Rente, Staat, Sozialsysteme — all das basiert auf der Idee, dass der Mensch dem System nützt. Wenn diese Idee bricht, bricht der alte Gesellschaftsvertrag.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/08-social-contract-cracks.jpg', title: "Riss im Vertrag" }] },

  { id: 'hrf9', title: "These 3: Menschen sind «hackbar»", content: "Harari sagt: Der Mensch ist kein Black Box mehr. Wenn Algorithmen Schwächen, Reaktionen und Wünsche lesen, können sie uns nicht nur verstehen, sondern auch lenken.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/09-hackable-humans.jpg', title: "«Hackbare» Menschen" }] },

    {
      id: 'q3',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-hrf-3-1-de', text: "Welche neue Frage könnte das 21. Jahrhundert stellen?", type: 'multiple-choice', options: ["Wie bauen wir mehr Fabriken?","Wozu braucht man Menschen überhaupt?","Wie bringen wir Monarchie zurück?","Wie schaffen wir die Schule ab?"], correctAnswer: 1, explanation: "Nicht nur Arbeit — sondern der Sinn vieler Menschen." },
      { id: 'q-hrf-3-2-de', text: "Was bricht, wenn «der Mensch nützt dem System» schwächer wird?", type: 'multiple-choice', options: ["Nur private Firmen","Der alte Gesellschaftsvertrag","Nur Sport","Nur Museen"], correctAnswer: 1, explanation: "Schule, Rente und Garantien basieren darauf." },
      { id: 'q-hrf-3-3-de', text: "Was bedeutet «hackbar» in dieser Einheit?", type: 'multiple-choice', options: ["Man kann Menschen nicht behandeln","Algorithmen können uns lesen und lenken","Menschen essen keinen Zucker mehr","Menschen leben nur offline"], correctAnswer: 1, explanation: "Der Mensch ist kein Black Box mehr." }
      ]
    },

  { id: 'hrf10', title: "Algorithmen kennen uns besser als wir selbst", content: "Hararis beunruhigende Frage: Was passiert mit der Demokratie, wenn Plattformen unsere politischen Gefühle besser kennen als wir? Wer vorhersagbar ist, lässt sich leise steuern.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/10-algorithms-know-better.jpg', title: "Algorithmen und Demokratie" }] },

  { id: 'hrf11', title: "Der Mensch als Datensatz", content: "Der alte Humanismus sah im Menschen ein inneres Geheimnis. Harari zeigt ein anderes Bild: Der Mensch wird zum Strom aus Biometrie, Gewohnheiten, Klicks und Reaktionen.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/11-human-data-stream.jpg', title: "Datenstrom" }] },

  { id: 'hrf12', title: "Wer Daten liest, herrscht", content: "Wer den Menschen entschlüsseln kann, gewinnt eine neue Macht — nicht nur über Körper oder Stimme, sondern über Aufmerksamkeit, Entscheidungen und innere Impulse.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/12-data-readers-power.jpg', title: "Macht durch Daten" }] },

    {
      id: 'q4',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-hrf-4-1-de', text: "Welche Frage verbindet Harari mit Demokratie?", type: 'multiple-choice', options: ["Wer baut mehr Straßen?","Was, wenn Plattformen uns besser kennen als wir selbst?","Wie schaffen wir Wahlen ab?","Wie verbieten wir Telefone?"], correctAnswer: 1, explanation: "Vorhersagbare Menschen lassen sich leise steuern." },
      { id: 'q-hrf-4-2-de', text: "Wie wird der Mensch im Datenzeitalter beschrieben?", type: 'multiple-choice', options: ["Als reine Seele ohne Spuren","Als Strom aus Biometrie, Gewohnheiten und Klicks","Nur als Genom","Nur als Stimme"], correctAnswer: 1, explanation: "Ein anderes Bild als der alte Humanismus." },
      { id: 'q-hrf-4-3-de', text: "Welche Macht gibt das «Lesen» des Menschen?", type: 'multiple-choice', options: ["Nur über den Körper","Über Aufmerksamkeit, Wahl und Impulse","Nur über das Wetter","Nur über Architektur"], correctAnswer: 1, explanation: "Macht durch Entschlüsselung von Menschendaten." }
      ]
    },

  { id: 'hrf13', title: "These 4: Eine neue Religion aus Daten", content: "Harari meint: Die einflussreichsten Glaubenssysteme des 21. Jahrhunderts könnten aus Technologie kommen. Er nennt es «Dataismus» — Glaube an Daten als höchste Quelle von Sinn und Entscheidung.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/13-dataism-new-religion.jpg', title: "Dataismus" }] },

  { id: 'hrf14', title: "Was ist Dataismus?", content: "Wenn alles Daten sind, hat Autorität, wer sie am besten verarbeitet. In dieser Welt kennen nicht Gewissen oder Gott dich am besten — sondern ein Rechensystem.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/14-what-is-dataism.jpg', title: "Autorität der Daten" }] },

  { id: 'hrf15', title: "Warum es wie Religion wirkt", content: "Beim Dataismus gibt es auch eine höchste Instanz, eine Sprache der Wahrheit und ein Heilsversprechen durch das richtige System — nur dass statt Offenbarung der Algorithmus spricht.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/15-dataism-like-religion.jpg', title: "Algorithmus statt Offenbarung" }] },

    {
      id: 'q5',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-hrf-5-1-de', text: "Wie nennt Harari den Glauben an Daten als höchste Quelle?", type: 'multiple-choice', options: ["Humanismus 2.0","Dataismus","Technokratie","Digitalismus"], correctAnswer: 1, explanation: "Dataismus — «neue Religion» aus Technologie." },
      { id: 'q-hrf-5-2-de', text: "Wer kennt dich in der Dataismus-Welt am besten?", type: 'multiple-choice', options: ["Das Gewissen","Ein Rechensystem","Ein zufälliger Nachbar","Nur die Eltern"], correctAnswer: 1, explanation: "Autorität hat, wer Daten am besten verarbeitet." },
      { id: 'q-hrf-5-3-de', text: "Woran erinnert Dataismus laut Folien an Religion?", type: 'multiple-choice', options: ["Nur am Bücherverbot","An höchste Instanz, Wahrheitssprache und Heilsversprechen","An Fastenpflicht","An Wissenschaftsverbot"], correctAnswer: 1, explanation: "Statt Offenbarung spricht der Algorithmus." }
      ]
    },

  { id: 'hrf16', title: "These 5: Zucker ist gefährlicher als Schießpulver", content: "Eine berühmte Harari-Formel: «Zucker ist heute gefährlicher als Schießpulver.» Sie zeigt, wie sich die Welt verändert hat: Immer öfter töten nicht alte Katastrophen, sondern Krankheiten des Überflusses.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/16-sugar-deadlier-gunpowder.jpg', title: "Zucker und Schießpulver" }] },

  { id: 'hrf17', title: "Wir haben die Art der Bedrohung gewechselt", content: "Harari meint: Krieg, Hunger und Seuchen sind nicht endgültig besiegt, aber oft zurückgedrängt. Vorn stehen Alterung, Diabetes, Überernährung und innere Krisen.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/17-abundance-threats.jpg', title: "Neue Bedrohungen" }] },

  { id: 'hrf18', title: "Ein historischer Umbruch", content: "Jahrtausende fürchtete man leere Speicher, Pest und Schwert. Heute kommt Gefahr oft nicht aus Mangel, sondern aus Überfluss.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/18-scarcity-to-abundance.jpg', title: "Vom Mangel zum Überfluss" }] },

    {
      id: 'q6',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-hrf-6-1-de', text: "Welche berühmte Zucker-Formel zitiert Harari?", type: 'multiple-choice', options: ["«Zucker ist gesünder als Wasser»","«Zucker ist heute gefährlicher als Schießpulver»","«Zucker ist der beste Freund»","«Zucker ersetzt Öl»"], correctAnswer: 1, explanation: "Sie markiert den Wechsel der Bedrohungsart." },
      { id: 'q-hrf-6-2-de', text: "Welche Gefahren rücken nach vorn?", type: 'multiple-choice', options: ["Nur Krieg und Schwert","Alterung, Diabetes, Überernährung und innere Krisen","Nur Hunger","Nur Pest"], correctAnswer: 1, explanation: "Alte Katastrophen sind oft zurückgedrängt, nicht verschwunden." },
      { id: 'q-hrf-6-3-de', text: "Worin unterscheidet sich Gefahr aus Überfluss?", type: 'multiple-choice', options: ["Sie ist immer schneller","Früher fürchtete man Mangel, heute öfter Überfluss","Sie betrifft nur Kinder","Man kann sie nicht messen"], correctAnswer: 1, explanation: "Leere Speicher und Pest weichen Krankheiten des Überflusses." }
      ]
    },

  { id: 'hrf19', title: "These 6: Biologische Spaltung der Menschheit", content: "Eine düstere Harari-Prognose: Reiche verbessern sich und ihre Kinder per Biotech — Arme bleiben außen vor. Ungleichheit wird dann nicht nur sozial, sondern biologisch.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/19-biological-division.jpg', title: "Biologische Spaltung" }] },

  { id: 'hrf20', title: "Nicht Klassen, sondern fast neue Arten", content: "Wenn manche Intelligenz, Gesundheit und Körper stärken können und andere nicht, wird die Kluft fast artenartig. Nicht «Elite und Masse», sondern verschiedene Stufen des Menschseins.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/20-almost-new-species.jpg', title: "Fast neue Arten" }] },

  { id: 'hrf21', title: "Warum diese Prognose besonders erschreckt", content: "Klassenungleichheit lässt sich politisch bestreiten. Biologische Ungleichheit wirkt, als hätte die Natur selbst den neuen Vertrag unterschrieben.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/21-biological-inequality-fear.jpg', title: "Angst vor biologischer Kluft" }] },

    {
      id: 'q7',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-hrf-7-1-de', text: "Welche düstere Biotech-Prognose gibt Harari?", type: 'multiple-choice', options: ["Alle werden gleich","Reiche verbessern sich, Arme bleiben außen vor","Biotech verschwindet","Der Staat verbietet Medizin"], correctAnswer: 1, explanation: "Ungleichheit könnte biologisch werden." },
      { id: 'q-hrf-7-2-de', text: "Warum sind «fast neue Arten» schlimmer als Elite und Masse?", type: 'multiple-choice', options: ["Es ist nur Mode","Kluft in Intelligenz, Gesundheit und Körper wird fast artenartig","Es betrifft nur Sport","Es ist schon vollständig Realität"], correctAnswer: 1, explanation: "Verschiedene Stufen des Menschseins, nicht nur Klasse." },
      { id: 'q-hrf-7-3-de', text: "Warum ist biologische Ungleichheit besonders erschreckend?", type: 'multiple-choice', options: ["Man sieht sie nicht","Sie wirkt, als hätte die Natur sie selbst bestätigt","Sie dauert einen Tag","Man kann sie in einer Woche per Gesetz abschaffen"], correctAnswer: 1, explanation: "Politisch viel schwerer anzugreifen." }
      ]
    },

  { id: 'hrf22', title: "These 7: Freier Wille in Frage", content: "Harari greift ein Fundament der liberalen Welt an: die freie Person. Die Wissenschaft sieht biochemische Prozesse — keine «Kommandeur-Seele», die frei wählt.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/22-free-will-questioned.jpg', title: "Freier Wille in Frage" }] },

  { id: 'hrf23', title: "Dann wackelt das moralische System", content: "Recht, Politik und Ethik beruhen oft auf freier Wahl. Wenn das nur eine schöne, ungenaue Metapher ist, muss vieles neu gedacht werden.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/23-moral-system-shakes.jpg', title: "Moralisches System" }] },

  { id: 'hrf24', title: "Kein Angriff auf Freiheit, sondern Sorge", content: "Harari freut sich nicht über den Zerfall alter Ideen. Sein Gedanke ist gravierender: Vielleicht baut die Zivilisation auf einem Menschenbild, das die Wissenschaft immer schlechter bestätigt.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/24-civilization-fragile-image.jpg', title: "Zerbrechliches Menschenbild" }] },

    {
      id: 'q8',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-hrf-8-1-de', text: "Welches Fundament der liberalen Welt greift Harari an?", type: 'multiple-choice', options: ["Freie Person und freier Wille","Urlaubsrecht","Wissenschaftsverbot","Monarchieliebe"], correctAnswer: 1, explanation: "Wissenschaft sieht Biochemie, keine «Kommandeur-Seele»." },
      { id: 'q-hrf-8-2-de', text: "Was wackelt, wenn freie Wahl nur Metapher ist?", type: 'multiple-choice', options: ["Nur Sport","Recht, Politik und Ethik","Nur Architektur","Nur Kino"], correctAnswer: 1, explanation: "Vieles beruht auf Glauben an freie Entscheidung." },
      { id: 'q-hrf-8-3-de', text: "Wie wird Hararis Haltung in den Folien beschrieben?", type: 'multiple-choice', options: ["Er freut sich über Ideenzerfall","Er sorgt sich: Zivilisation baut auf einem schwächer bestätigten Menschenbild","Er lehnt Wissenschaft ab","Er hält alles für entschieden"], correctAnswer: 1, explanation: "Kein Angriff um des Angriffs willen — Sorge um die Zukunft." }
      ]
    },

  { id: 'hrf25', title: "These 8: Die Welt lebt von kollektiven Fiktionen", content: "Kernaussage von Sapiens: Menschen eroberten die Erde nicht mit Kraft, sondern mit gemeinsamem Glauben an Abstraktionen. Geld, Nationen, Firmen, Menschenrechte und Götter existieren, weil Millionen daran glauben.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/25-collective-fictions-sapiens.jpg', title: "Kollektive Fiktionen" }] },

  { id: 'hrf26', title: "Das Geheimnis des Homo sapiens", content: "Der Wolf vertraut dem Rudel, der Mensch Flagge, Bank, Gericht, Firma und Papier mit Siegel. Diese gemeinsame Erfindung ermöglicht Millionen Fremden die Zusammenarbeit.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/26-homo-sapiens-imagination.jpg', title: "Geheimnis des Homo sapiens" }] },

  { id: 'hrf27', title: "Warum diese Idee viele ärgert", content: "Sie stellt Nebeneinander, was wir trennen: Wenn Geld, Menschenrechte und Religion auf gemeinsamem Glauben beruhen, wird die Grenze zwischen «Heiligem» und «sozialem Mythos» gefährlich dünn.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/27-sacred-vs-social-myth.jpg', title: "Heiliges und Mythos" }] },

    {
      id: 'q9',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-hrf-9-1-de', text: "Worauf beruht die Welt laut Sapiens/Harari?", type: 'multiple-choice', options: ["Nur auf Waffengewalt","Auf kollektiven Fiktionen und gemeinsamem Glauben","Nur auf Gold in Kellern","Nur auf Verwandtschaft"], correctAnswer: 1, explanation: "Geld, Nationen, Rechte — weil Millionen glauben." },
      { id: 'q-hrf-9-2-de', text: "Was ist das «Geheimnis» des Homo sapiens hier?", type: 'multiple-choice', options: ["Körperkraft","Vertrauen in Flagge, Bank, Gericht und Papier mit Siegel","Alleinleben","Verweigerung von Kooperation"], correctAnswer: 1, explanation: "Gemeinsame Erfindung verbindet Millionen Fremde." },
      { id: 'q-hrf-9-3-de', text: "Warum ärgert die Fiktionsthese viele?", type: 'multiple-choice', options: ["Sie ist zu kurz","Sie stellt Geld, Rechte und Religion als Formen gemeinsamen Glaubens nebeneinander","Sie löscht Geschichte","Sie verbietet Streit"], correctAnswer: 1, explanation: "Grenze zwischen Heiligem und sozialem Mythos wird dünn." }
      ]
    },

  { id: 'hrf28', title: "Fiktion heißt nicht Unsinn", content: "Harari sagt nicht, alles Kollektive sei Lüge und Müll. Er meint: Gerade solche gemeinsamen Fiktionen machen große Zivilisation möglich.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/28-fiction-enables-civilization.jpg', title: "Fiktion und Zivilisation" }] },

  { id: 'hrf29', title: "Was alle Thesen verbindet", content: "Fast alle Harari-Ideen teilen einen Nerv: Technologie wächst schneller als unsere Weisheit. Wir können Daten sammeln, Körper verändern und Netze bauen — aber noch nicht, den Menschen darin zu bewahren.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/29-technology-vs-wisdom.jpg', title: "Technologie und Weisheit" }] },

  { id: 'hrf30', title: "Die große Weggabelung", content: "Harari lässt uns nicht mit einer Antwort, sondern mit einer beunruhigenden Frage: Wenn das keine Prophezeiung, sondern eine Warnung ist, bleibt Zeit zu entscheiden — ob Mensch, Markt, Staat oder Algorithmus die Zukunft steuert.", duration: 3, media: [{ type: 'image', url: '/media/harari-future-theses/30-harari-future-crossroads.jpg', title: "Weggabelung der Zukunft" }] },

    {
      id: 'q10',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-hrf-10-1-de', text: "Kollektive Fiktion ist für Harari…", type: 'multiple-choice', options: ["Immer Lüge und Müll","Das, was große Zivilisation möglich macht","Nur Kindermärchen","Nur Feindpropaganda"], correctAnswer: 1, explanation: "Fiktion heißt nicht Unsinn." },
      { id: 'q-hrf-10-2-de', text: "Was verbindet fast alle Harari-Thesen?", type: 'multiple-choice', options: ["Technologie-Hass","Technologie wächst schneller als Weisheit","Glaube ans Ende der Geschichte","Datenverweigerung"], correctAnswer: 1, explanation: "Wir verändern die Welt schneller, als wir den Menschen schützen." },
      { id: 'q-hrf-10-3-de', text: "Womit endet die Einheit bei Harari?", type: 'multiple-choice', options: ["Mit fertiger Antwort","Mit der Frage: Wer steuert die Zukunft?","Mit dem Appell, nichts zu ändern","Mit Beweis der Unvermeidlichkeit"], correctAnswer: 1, explanation: "Mensch, Markt, Staat oder Algorithmus — Wahl bleibt." }
      ]
    }
]

export const harariFutureThesesFinalQuizDE: QuizBlock = {
  id: 'quiz-harari-future-theses-de',
  title: 'Abschlussquiz: Hararis Thesen über die Zukunft',
  questions: [
    { id: 'q-hrf-f-1-de', text: "Wen nennt Harari in dieser Einheit?", type: 'multiple-choice', options: ["Einen Futuristen","Einen Historiker, keinen Futuristen","Einen Politiker","Einen Berufsviologen"], correctAnswer: 1, explanation: "Er ist Historiker, wird aber oft als Zukunftsautor gelesen." },
    { id: 'q-hrf-f-2-de', text: "Warum wird Harari gelobt und kritisiert?", type: 'multiple-choice', options: ["Weil er nur Kurztexte schreibt","Weil er Komplexes in eine starke Formel presst","Weil er keine Interviews gibt","Weil er nicht übersetzt wird"], correctAnswer: 1, explanation: "Klare Formeln faszinieren und vereinfachen zugleich." },
    { id: 'q-hrf-f-3-de', text: "Wie beschreibt Harari seine Thesen selbst?", type: 'multiple-choice', options: ["Als sichere Prophezeiungen","Als Warnungen, nicht als Vorhersagen","Als Naturgesetze","Als Parteiprogramm"], correctAnswer: 1, explanation: "«So könnte es werden, wenn sich nichts ändert»." },
    { id: 'q-hrf-f-4-de', text: "Was ist Hararis «nutzlose Klasse»?", type: 'multiple-choice', options: ["Menschen ohne Smartphone","Menschen, die das System für überflüssig hält","Nur Rentner","Nur Beamte"], correctAnswer: 1, explanation: "Nicht nur ohne Job — sondern systemisch unnütz." },
    { id: 'q-hrf-f-5-de', text: "Worin unterscheidet sich die neue Arbeitslosigkeit?", type: 'multiple-choice', options: ["Sie dauert einen Tag","Umschulung hilft vielleicht nicht mehr","Sie betrifft nur Bauern","Sie löst nur Steuerpolitik"], correctAnswer: 1, explanation: "Algorithmen verdrängen aus zu vielen Bereichen gleichzeitig." },
    { id: 'q-hrf-f-6-de', text: "Was schlug Harari provokant für diese Klasse vor?", type: 'multiple-choice', options: ["Pflichtdienst","Drogen und Computerspiele","Internetsperre","Umzug auf einen anderen Planeten"], correctAnswer: 1, explanation: "Zynisch formuliert — deshalb so hart." },
    { id: 'q-hrf-f-7-de', text: "Welche neue Frage könnte das 21. Jahrhundert stellen?", type: 'multiple-choice', options: ["Wie bauen wir mehr Fabriken?","Wozu braucht man Menschen überhaupt?","Wie bringen wir Monarchie zurück?","Wie schaffen wir die Schule ab?"], correctAnswer: 1, explanation: "Nicht nur Arbeit — sondern der Sinn vieler Menschen." },
    { id: 'q-hrf-f-8-de', text: "Was bricht, wenn «der Mensch nützt dem System» schwächer wird?", type: 'multiple-choice', options: ["Nur private Firmen","Der alte Gesellschaftsvertrag","Nur Sport","Nur Museen"], correctAnswer: 1, explanation: "Schule, Rente und Garantien basieren darauf." },
    { id: 'q-hrf-f-9-de', text: "Was bedeutet «hackbar» in dieser Einheit?", type: 'multiple-choice', options: ["Man kann Menschen nicht behandeln","Algorithmen können uns lesen und lenken","Menschen essen keinen Zucker mehr","Menschen leben nur offline"], correctAnswer: 1, explanation: "Der Mensch ist kein Black Box mehr." },
    { id: 'q-hrf-f-10-de', text: "Welche Frage verbindet Harari mit Demokratie?", type: 'multiple-choice', options: ["Wer baut mehr Straßen?","Was, wenn Plattformen uns besser kennen als wir selbst?","Wie schaffen wir Wahlen ab?","Wie verbieten wir Telefone?"], correctAnswer: 1, explanation: "Vorhersagbare Menschen lassen sich leise steuern." },
    { id: 'q-hrf-f-11-de', text: "Wie wird der Mensch im Datenzeitalter beschrieben?", type: 'multiple-choice', options: ["Als reine Seele ohne Spuren","Als Strom aus Biometrie, Gewohnheiten und Klicks","Nur als Genom","Nur als Stimme"], correctAnswer: 1, explanation: "Ein anderes Bild als der alte Humanismus." },
    { id: 'q-hrf-f-12-de', text: "Welche Macht gibt das «Lesen» des Menschen?", type: 'multiple-choice', options: ["Nur über den Körper","Über Aufmerksamkeit, Wahl und Impulse","Nur über das Wetter","Nur über Architektur"], correctAnswer: 1, explanation: "Macht durch Entschlüsselung von Menschendaten." },
    { id: 'q-hrf-f-13-de', text: "Wie nennt Harari den Glauben an Daten als höchste Quelle?", type: 'multiple-choice', options: ["Humanismus 2.0","Dataismus","Technokratie","Digitalismus"], correctAnswer: 1, explanation: "Dataismus — «neue Religion» aus Technologie." },
    { id: 'q-hrf-f-14-de', text: "Wer kennt dich in der Dataismus-Welt am besten?", type: 'multiple-choice', options: ["Das Gewissen","Ein Rechensystem","Ein zufälliger Nachbar","Nur die Eltern"], correctAnswer: 1, explanation: "Autorität hat, wer Daten am besten verarbeitet." },
    { id: 'q-hrf-f-15-de', text: "Woran erinnert Dataismus laut Folien an Religion?", type: 'multiple-choice', options: ["Nur am Bücherverbot","An höchste Instanz, Wahrheitssprache und Heilsversprechen","An Fastenpflicht","An Wissenschaftsverbot"], correctAnswer: 1, explanation: "Statt Offenbarung spricht der Algorithmus." },
    { id: 'q-hrf-f-16-de', text: "Welche berühmte Zucker-Formel zitiert Harari?", type: 'multiple-choice', options: ["«Zucker ist gesünder als Wasser»","«Zucker ist heute gefährlicher als Schießpulver»","«Zucker ist der beste Freund»","«Zucker ersetzt Öl»"], correctAnswer: 1, explanation: "Sie markiert den Wechsel der Bedrohungsart." },
    { id: 'q-hrf-f-17-de', text: "Welche Gefahren rücken nach vorn?", type: 'multiple-choice', options: ["Nur Krieg und Schwert","Alterung, Diabetes, Überernährung und innere Krisen","Nur Hunger","Nur Pest"], correctAnswer: 1, explanation: "Alte Katastrophen sind oft zurückgedrängt, nicht verschwunden." },
    { id: 'q-hrf-f-18-de', text: "Worin unterscheidet sich Gefahr aus Überfluss?", type: 'multiple-choice', options: ["Sie ist immer schneller","Früher fürchtete man Mangel, heute öfter Überfluss","Sie betrifft nur Kinder","Man kann sie nicht messen"], correctAnswer: 1, explanation: "Leere Speicher und Pest weichen Krankheiten des Überflusses." },
    { id: 'q-hrf-f-19-de', text: "Welche düstere Biotech-Prognose gibt Harari?", type: 'multiple-choice', options: ["Alle werden gleich","Reiche verbessern sich, Arme bleiben außen vor","Biotech verschwindet","Der Staat verbietet Medizin"], correctAnswer: 1, explanation: "Ungleichheit könnte biologisch werden." },
    { id: 'q-hrf-f-20-de', text: "Warum sind «fast neue Arten» schlimmer als Elite und Masse?", type: 'multiple-choice', options: ["Es ist nur Mode","Kluft in Intelligenz, Gesundheit und Körper wird fast artenartig","Es betrifft nur Sport","Es ist schon vollständig Realität"], correctAnswer: 1, explanation: "Verschiedene Stufen des Menschseins, nicht nur Klasse." },
    { id: 'q-hrf-f-21-de', text: "Warum ist biologische Ungleichheit besonders erschreckend?", type: 'multiple-choice', options: ["Man sieht sie nicht","Sie wirkt, als hätte die Natur sie selbst bestätigt","Sie dauert einen Tag","Man kann sie in einer Woche per Gesetz abschaffen"], correctAnswer: 1, explanation: "Politisch viel schwerer anzugreifen." },
    { id: 'q-hrf-f-22-de', text: "Welches Fundament der liberalen Welt greift Harari an?", type: 'multiple-choice', options: ["Freie Person und freier Wille","Urlaubsrecht","Wissenschaftsverbot","Monarchieliebe"], correctAnswer: 1, explanation: "Wissenschaft sieht Biochemie, keine «Kommandeur-Seele»." },
    { id: 'q-hrf-f-23-de', text: "Was wackelt, wenn freie Wahl nur Metapher ist?", type: 'multiple-choice', options: ["Nur Sport","Recht, Politik und Ethik","Nur Architektur","Nur Kino"], correctAnswer: 1, explanation: "Vieles beruht auf Glauben an freie Entscheidung." },
    { id: 'q-hrf-f-24-de', text: "Wie wird Hararis Haltung in den Folien beschrieben?", type: 'multiple-choice', options: ["Er freut sich über Ideenzerfall","Er sorgt sich: Zivilisation baut auf einem schwächer bestätigten Menschenbild","Er lehnt Wissenschaft ab","Er hält alles für entschieden"], correctAnswer: 1, explanation: "Kein Angriff um des Angriffs willen — Sorge um die Zukunft." },
    { id: 'q-hrf-f-25-de', text: "Worauf beruht die Welt laut Sapiens/Harari?", type: 'multiple-choice', options: ["Nur auf Waffengewalt","Auf kollektiven Fiktionen und gemeinsamem Glauben","Nur auf Gold in Kellern","Nur auf Verwandtschaft"], correctAnswer: 1, explanation: "Geld, Nationen, Rechte — weil Millionen glauben." },
    { id: 'q-hrf-f-26-de', text: "Was ist das «Geheimnis» des Homo sapiens hier?", type: 'multiple-choice', options: ["Körperkraft","Vertrauen in Flagge, Bank, Gericht und Papier mit Siegel","Alleinleben","Verweigerung von Kooperation"], correctAnswer: 1, explanation: "Gemeinsame Erfindung verbindet Millionen Fremde." },
    { id: 'q-hrf-f-27-de', text: "Warum ärgert die Fiktionsthese viele?", type: 'multiple-choice', options: ["Sie ist zu kurz","Sie stellt Geld, Rechte und Religion als Formen gemeinsamen Glaubens nebeneinander","Sie löscht Geschichte","Sie verbietet Streit"], correctAnswer: 1, explanation: "Grenze zwischen Heiligem und sozialem Mythos wird dünn." },
    { id: 'q-hrf-f-28-de', text: "Kollektive Fiktion ist für Harari…", type: 'multiple-choice', options: ["Immer Lüge und Müll","Das, was große Zivilisation möglich macht","Nur Kindermärchen","Nur Feindpropaganda"], correctAnswer: 1, explanation: "Fiktion heißt nicht Unsinn." },
    { id: 'q-hrf-f-29-de', text: "Was verbindet fast alle Harari-Thesen?", type: 'multiple-choice', options: ["Technologie-Hass","Technologie wächst schneller als Weisheit","Glaube ans Ende der Geschichte","Datenverweigerung"], correctAnswer: 1, explanation: "Wir verändern die Welt schneller, als wir den Menschen schützen." },
    { id: 'q-hrf-f-30-de', text: "Womit endet die Einheit bei Harari?", type: 'multiple-choice', options: ["Mit fertiger Antwort","Mit der Frage: Wer steuert die Zukunft?","Mit dem Appell, nichts zu ändern","Mit Beweis der Unvermeidlichkeit"], correctAnswer: 1, explanation: "Mensch, Markt, Staat oder Algorithmus — Wahl bleibt." }
  ]
}
