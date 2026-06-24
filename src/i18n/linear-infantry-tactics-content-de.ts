import { Slide, QuizBlock } from '../types/session'

export const linearInfantryTacticsSlidesDE: Slide[] = [
  { id: 'lit1', title: "Warum überhaupt die Linie?", content: "Die Linie brachte maximal viele Läufe gleichzeitig nach vorn. Je mehr Menschen zugleich feuern konnten, desto stärker war die Wirkung.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/01-why-line-formation.jpg', title: "Linienformation" }] },

  { id: 'lit2', title: "Warum man sich nicht versteckte", content: "Feldschlacht hieß: Position halten und die Ordnung des Gegners brechen — nicht sich verstecken. Deckung half dem Einzelnen, aber nicht immer der Armee.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/02-why-not-hide.jpg', title: "Offenes Schlachtfeld" }] },

  { id: 'lit3', title: "Warum man sich nicht auflöste", content: "Aufgelöste Ordnung war schwer zu führen. In Rauch und Lärm verloren Gruppen einander und handelten nicht mehr als eine Einheit.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/03-why-not-skirmish-order.jpg', title: "Kontrollverlust" }] },

    {
      id: 'q1',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-lit-1-1-de', text: "Warum bildete die Infanterie eine Linie?", type: 'multiple-choice', options: ["Um sich hinter Schildern zu verstecken","Um maximal viele Läufe gleichzeitig nach vorn zu bringen","Um schneller über das Feld zu rennen","Damit jeder für sich kämpfte"], correctAnswer: 1, explanation: "Die Linie maximierte gleichzeitiges Feuer — der Kern der Musketentaktik." },
      { id: 'q-lit-1-2-de', text: "Warum half Deckung der Armee nicht immer?", type: 'multiple-choice', options: ["Soldaten fürchteten den Wald","Man musste Position halten und die Ordnung des Feindes brechen","Deckung war kriegsrechtlich verboten","Musketen durften nicht aus Deckung feuern"], correctAnswer: 1, explanation: "Feldschlacht = Position und gegnerische Ordnung, nicht persönliches Verstecken." },
      { id: 'q-lit-1-3-de', text: "Was war gefährlich an aufgelöster Ordnung?", type: 'multiple-choice', options: ["Man lief zu schnell","Gruppen verloren einander und handelten nicht mehr einheitlich","Aufgelöste Ordnung gab mehr Salven","Offiziere wurden unsichtbar"], correctAnswer: 1, explanation: "Ohne Verbindung zerfielen Truppen und verloren die Führung." }
      ]
    },

  { id: 'lit4', title: "Warum dichter Aufmarsch kein Wahnsinn war", content: "Ja, auf eine dichte Masse trifft man leichter. Wichtiger waren aber Ordnung, Kontrolle und die Masse des gemeinsamen Feuers — nicht Unauffälligkeit.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/04-dense-formation-logic.jpg', title: "Dichte Formation" }] },

  { id: 'lit5', title: "Warum der Musketier alles bestimmte", content: "Die Muskete war schwer, langsam und ungenau. Ihre Kraft lag nicht beim Einzelnen, sondern in der Reihe.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/05-musket-dictated-tactics.jpg', title: "Muskete und Reihe" }] },

  { id: 'lit6', title: "Warum Salvenfeuer?", content: "Eine Salve traf und schockierte zugleich. Ein Schuss fiel kaum auf — Hunderte zugleich zerstörten Rhythmus, Gehör und Nerven des Gegners.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/06-why-volley-fire.jpg', title: "Salvenfeuer" }] },

    {
      id: 'q2',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-lit-2-1-de', text: "Warum war dichter Aufmarsch kein Wahnsinn?", type: 'multiple-choice', options: ["Der Feind konnte nicht schießen","Ordnung, Kontrolle und Feuermasse waren wichtiger als Unsichtbarkeit","Dichte machte unverwundbar","Musketen waren zu präzise für Einzelschüsse"], correctAnswer: 1, explanation: "Man opferte individuellen Schutz für kollektives Feuer und Führung." },
      { id: 'q-lit-2-2-de', text: "Wo lag die Stärke der Muskete?", type: 'multiple-choice', options: ["Beim einzelnen Scharfschützen","In der Reihe, die gemeinsam feuerte","Nur in der Festung","Nur nachts"], correctAnswer: 1, explanation: "Schwer, langsam, ungenau — die Kraft lag in der Masse." },
      { id: 'q-lit-2-3-de', text: "Warum Salven statt Einzelschüsse?", type: 'multiple-choice', options: ["Um Fahnen zu sparen","Salve = Wirkung und Schock; Hunderte Schüsse brachen die Nerven","Musketen konnten nur synchron feuern","Damit Offiziere ruhen konnten"], correctAnswer: 1, explanation: "Gleichzeitige Salve traf Körper und Moral." }
      ]
    },

  { id: 'lit7', title: "Warum nicht «wer will, wann will»?", content: "Ungeordnetes Feuer fraß Pulver und zerstörte den Kampfrhythmus. Der kommandierte Feuerstoß hielt Tempo, Dichte und Munitionskontrolle.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/07-commanded-volley-not-individual.jpg', title: "Kommandierte Salve" }] },

  { id: 'lit8', title: "Warum näher heranlassen?", content: "Auf große Distanz war ein Schuss oft fast umsonst. Erfahrene Truppen hielten aus, bis die erste Salve wirklich gefährlich wurde.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/08-hold-fire-until-close.jpg', title: "Feuer aus der Nähe" }] },

  { id: 'lit9', title: "Warum nicht liegend?", content: "Die Muskete wurde von vorn geladen — eine lange Bewegungsfolge. Liegend oder in tiefer Hocke ging das viel zu langsam.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/09-why-not-prone-loading.jpg', title: "Laden im Stehen" }] },

    {
      id: 'q3',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-lit-3-1-de', text: "Warum kein «wer will, wann will»-Feuer?", type: 'multiple-choice', options: ["Pulver war zu billig","Ungeordnetes Feuer fraß Pulver und zerstörte den Rhythmus","Soldaten konnten nicht nachladen","Der Feind hörte Einzelschüsse nicht"], correctAnswer: 1, explanation: "Kommandierte Salve hielt Tempo, Dichte und Munitionskontrolle." },
      { id: 'q-lit-3-2-de', text: "Warum ließ man den Feind näher heran?", type: 'multiple-choice', options: ["Auf Distanz war Schuss oft fast umsonst","Näher konnte man Speere werfen","Weit weg sah man die Fahne nicht","Pulver wirkte nur im Nahbereich"], correctAnswer: 0, explanation: "Erste Salve aus der Nähe sollte wirklich gefährlich sein." },
      { id: 'q-lit-3-3-de', text: "Warum nicht liegend schießen?", type: 'multiple-choice', options: ["Uniformen hinderten","Laden von vorn brauchte lange Bewegungen — liegend zu langsam","Liegend sah man den Offizier nicht","Liegend war per Reglement verboten"], correctAnswer: 1, explanation: "Musketen wurden im Stehen von vorn geladen." }
      ]
    },

  { id: 'lit10', title: "Warum Schulter an Schulter?", content: "So blieb die Ausrichtung, und man verlor den Nachbarn nicht. In der Linienschlacht kämpfte man als Teil einer lebenden Feuerwand.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/10-shoulder-to-shoulder.jpg', title: "Schulter an Schulter" }] },

  { id: 'lit11', title: "Wozu zweite und dritte Reihe?", content: "Sie stützten die Ordnung, ersetzten Ausfälle und ermöglichten durchlaufendes Feuer in verschiedenen Schießsystemen.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/11-second-third-rank.jpg', title: "Tiefe der Formation" }] },

  { id: 'lit12', title: "Warum die Linien dünner wurden", content: "Früher bis zu zehn Reihen, später dünner: bessere Musketen und Ausbildung erlaubten mehr Front bei weniger Tiefe.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/12-thinning-lines-over-time.jpg', title: "Dünnere Linien" }] },

    {
      id: 'q4',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-lit-4-1-de', text: "Warum Schulter an Schulter?", type: 'multiple-choice', options: ["Zum Wärmen im Winter","Ausrichtung halten und Nachbarn nicht verlieren","Musketen verstecken","Weil Bajonette zu lang waren"], correctAnswer: 1, explanation: "Man war Teil einer Feuerwand, kein Einzelkämpfer." },
      { id: 'q-lit-4-2-de', text: "Wozu zweite und dritte Reihe?", type: 'multiple-choice', options: ["Nur für Parade","Stützen, Ausfälle ersetzen, Feuerkontinuität","Nur für Offiziere","Hintere Reihen feuerten nie"], correctAnswer: 1, explanation: "Tiefe gab Stabilität und verschiedene Feuersysteme." },
      { id: 'q-lit-4-3-de', text: "Warum wurden Linien dünner?", type: 'multiple-choice', options: ["Weniger Soldaten","Bessere Musketen und Ausbildung — mehr Front, weniger Tiefe","Piken verschwanden sofort","Rauch störte nicht mehr"], correctAnswer: 1, explanation: "Von bis zu zehn Reihen zu dünneren Linien." }
      ]
    },

  { id: 'lit13', title: "Was ist ein Gegenmarsch?", content: "Vordere Reihen feuern und treten zum Nachladen zurück; die nächsten rücken nach. So sollte das Feuer stetiger werden.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/13-countermarch-system.jpg', title: "Gegenmarsch" }] },

  { id: 'lit14', title: "Warum Rauch fast eine Waffe war", content: "Schwarzpulver legte das Feld schnell in Nebel. Nach einigen Salven sah man wenig — man orientierte sich an Linie, Fahnen und Mündungsfeuer.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/14-smoke-as-weapon.jpg', title: "Schlachtrauch" }] },

  { id: 'lit15', title: "Warum helle Uniformen nützlich waren", content: "Nicht der Schönheit wegen. In Rauch und Chaos halfen helle Farben und Fahnen, Freund von Feind zu unterscheiden.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/15-bright-uniforms-recognition.jpg', title: "Helle Uniformen" }] },

    {
      id: 'q5',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-lit-5-1-de', text: "Was ist Gegenmarsch?", type: 'multiple-choice', options: ["Flucht der hinteren Reihen","Vorne feuern, zurück zum Laden; nächste rücken nach","Kavallerieangriff in die Flanke","Nur eine Reihe"], correctAnswer: 1, explanation: "System für stetigeres Feuer durch Reihenwechsel." },
      { id: 'q-lit-5-2-de', text: "Warum war Rauch «fast eine Waffe»?", type: 'multiple-choice', options: ["Rauch vergiftete","Nach Salven kaum Sicht — Orientierung an Fahnen und Mündungsfeuer","Rauch löschte gegnerisches Pulver","Rauch war nur nachts giftig"], correctAnswer: 1, explanation: "Schwarzpulver machte das Feld schnell blind." },
      { id: 'q-lit-5-3-de', text: "Wozu helle Uniformen?", type: 'multiple-choice', options: ["Nur Parade","In Rauch und Chaos Freund von Feind unterscheiden","Um sich im Gras zu verstecken","Weil Farbe billig wurde"], correctAnswer: 1, explanation: "Erkennbarkeit wichtiger als Tarnung." }
      ]
    },

  { id: 'lit16', title: "Wozu Trommeln und Trompeten?", content: "Die Stimme des Offiziers ging im Lärm unter. Musikalische Signale ersetzten die Verbindung: formieren, vorwärts, halt, umformieren.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/16-drums-and-trumpets.jpg', title: "Kampfsignale" }] },

  { id: 'lit17', title: "Warum Offiziere sichtbar waren", content: "Heute wirkt das wie Selbstmord — damals musste der Offizier auffallen. Er sollte Ordnung halten, befehlen und die Leute führen.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/17-visible-officers.jpg', title: "Sichtbarer Offizier" }] },

  { id: 'lit18', title: "Warum die Fahne so wichtig war", content: "Kein Parade-Symbol, sondern Sammelpunkt. Solange man die eigene Fahne sah, existierte das Regiment als Körper.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/18-regimental-colour-rally.jpg', title: "Regimentsfahne" }] },

    {
      id: 'q6',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-lit-6-1-de', text: "Wozu Trommeln und Trompeten?", type: 'multiple-choice', options: ["Unterhaltung","Stimme ging unter — musikalische Signale ersetzten Verbindung","Pferde erschrecken","Nur Zapfenstreich"], correctAnswer: 1, explanation: "Formieren, vorwärts, halt — alles über Signale." },
      { id: 'q-lit-6-2-de', text: "Warum musste der Offizier sichtbar sein?", type: 'multiple-choice', options: ["Damit nur er getroffen wurde","Ordnung halten, befehlen, führen — nicht verstecken","Offiziere trugen keine Waffen","Kirchenvorschrift"], correctAnswer: 1, explanation: "Der Offizier war das sichtbare Zentrum der Führung." },
      { id: 'q-lit-6-3-de', text: "Warum war die Fahne so wichtig?", type: 'multiple-choice', options: ["Moderegel","Sammelpunkt — solange Fahne sichtbar, existiert das Regiment","Fahne schützte vor Kugeln","Ohne Fahne kein Schuss"], correctAnswer: 1, explanation: "Kein Parade-Schmuck, sondern Orientierung im Chaos." }
      ]
    },

  { id: 'lit19', title: "Warum Drill entscheidend war", content: "Im Gefecht lähmen Angst, Lärm und Müdigkeit. Drill ersetzte Denken durch Automatismus — die Hände taten das Richtige.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/19-drill-automatism.jpg', title: "Exerzieren" }] },

  { id: 'lit20', title: "Strafe als Haltemittel", content: "Armeen stützten sich auch auf harte Disziplin und körperliche Strafe. Allein reichte das nicht — ohne Übung und Kollektivfähigkeit zerbräche die Ordnung.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/20-discipline-and-punishment.jpg', title: "Disziplin" }] },

  { id: 'lit21', title: "Warum man nicht sofort floh", content: "Im Glied war man mit den Nachbarn verbunden. Oft war es schlimmer, als Erster die Linie zu brechen und allein vor dem Feind zu stehen.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/21-psychology-of-the-line.jpg', title: "Psychologie der Linie" }] },

    {
      id: 'q7',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-lit-7-1-de', text: "Wozu Drill?", type: 'multiple-choice', options: ["Schönes Marschieren","Angst und Lärm lähmen — Drill ersetzt Denken durch Automatismus","Pulver sparen","Nur für unbewaffnete Rekruten"], correctAnswer: 1, explanation: "Hände handelten nach Gewohnheit, wenn der Kopf versagte." },
      { id: 'q-lit-7-2-de', text: "Rolle harter Disziplin?", type: 'multiple-choice', options: ["Allein reichte ohne Drill","Half, aber ohne Übung zerbräche die Ordnung trotzdem","Strafen waren verboten","Disziplin ersetzte Fahnen"], correctAnswer: 1, explanation: "Strafe plus Kollektivfähigkeit, nicht statt dessen." },
      { id: 'q-lit-7-3-de', text: "Warum flohen Soldaten nicht sofort?", type: 'multiple-choice', options: ["Man war festgebunden","Als Erster die Linie zu brechen war oft schlimmer als Sterben","Rennen im Waffenrock unmöglich","Flucht wurde nicht bestraft"], correctAnswer: 1, explanation: "Psychologische Bindung an Nachbarn hielt im Glied." }
      ]
    },

  { id: 'lit22', title: "Warum die Linie langsam vorrückte", content: "Schnelle Bewegung zerstörte die Ausrichtung — und damit wurde die Armee aus Waffe zur Masse.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/22-slow-advance.jpg', title: "Langsamer Vormarsch" }] },

  { id: 'lit23', title: "Warum Wald und unebenes Gelände störten", content: "Linienschlacht liebte ebene Felder. Im Gelände riss die Ordnung, Abstände kollabierten, die Führung sank.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/23-terrain-breaks-formation.jpg', title: "Gelände und Ordnung" }] },

  { id: 'lit24', title: "Taktik der «einfachen Bewegungen»", content: "Linienkrieg setzte auf wenige klare Befehle, nicht Improvisation. Je einfacher der Befehl, desto eher führten ihn Tausende gleichzeitig aus.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/24-simple-movements-tactics.jpg', title: "Einfache Befehle" }] },

    {
      id: 'q8',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-lit-8-1-de', text: "Warum langsamer Vormarsch?", type: 'multiple-choice', options: ["Faulheit","Schnelle Bewegung zerstörte Ausrichtung — Armee wurde zur Masse","Musketen nicht tragbar im Lauf","Offiziere verboten schnellen Schritt"], correctAnswer: 1, explanation: "Ohne Ausrichtung keine Linienwaffe." },
      { id: 'q-lit-8-2-de', text: "Warum störten Wald und Gelände?", type: 'multiple-choice', options: ["Bäume brachen Musketen","Ordnung riss, Abstände kollabierten, Führung sank","Im Wald kein Pulver","Dort war Kavallerie stärker"], correctAnswer: 1, explanation: "Linienschlacht brauchte ebene offene Felder." },
      { id: 'q-lit-8-3-de', text: "Warum «einfache Bewegungen»?", type: 'multiple-choice', options: ["Soldaten ungebildet","Einfache Befehle führen Tausende eher gleichzeitig aus","Komplexe Manöver verbot die Kirche","Improvisation gewann immer"], correctAnswer: 1, explanation: "Wenige klare Befehle statt Improvisation für die Masse." }
      ]
    },

  { id: 'lit25', title: "Wo bleibt die Kavallerie?", content: "Reitergewalt war ein Hauptgrund, zusammenzubleiben. Zerstreute Infanterie wurde niedergemacht — geschlossene Ordnung konnte mit Feuer und Klinge standhalten.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/25-cavalry-threat-infantry.jpg', title: "Kavalleriebedrohung" }] },

  { id: 'lit26', title: "Warum man noch Pikeniere hielt", content: "Im 17. Jh. löste die Muskete noch nicht alles. Pikeniere schützten vor Nahkampf und Reitern, bis der Bajonett jeden Schützen auch zum Stoßkämpfer machte.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/26-pike-and-shot.jpg', title: "Pike und Schuss" }] },

  { id: 'lit27', title: "Was der Bajonett veränderte", content: "Mit zuverlässigem Bajonett wurde die Infanterie einheitlicher. Derselbe Soldat konnte schießen und im Nahkampf halten — die Pike verschwand.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/27-bayonet-revolution.jpg', title: "Bajonett" }] },

    {
      id: 'q9',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-lit-9-1-de', text: "Warum zusammenbleiben wegen Kavallerie?", type: 'multiple-choice', options: ["Reiter griffen Infanterie nie an","Zerstreute Infanterie wurde niedergemacht — geschlossene Ordnung konnte standhalten","Pferde fürchteten Musketen in der Ferne","Kavallerie nur nachts"], correctAnswer: 1, explanation: "Reitergewalt war Hauptgrund für geschlossenen Aufmarsch." },
      { id: 'q-lit-9-2-de', text: "Warum noch Pikeniere im 17. Jh.?", type: 'multiple-choice', options: ["Piken waren modischer","Schutz vor Nahkampf, bis Bajonett den Schützen vervollständigte","Musketen schossen im 17. Jh. nicht","Piken nur Parade"], correctAnswer: 1, explanation: "Pike und Schuss — die Muskete löste noch nicht alles." },
      { id: 'q-lit-9-3-de', text: "Was änderte der zuverlässige Bajonett?", type: 'multiple-choice', options: ["Infanterie schoss nicht mehr","Ein Soldat schoss und kämpfte nah — Pike verschwand","Bajonett ersetzte Fahnen","Linien wurden 20 Reihen tief"], correctAnswer: 1, explanation: "Einheitlichere Infanterie: Schütze und Stoßkämpfer in einer Person." }
      ]
    },

  { id: 'lit28', title: "Warum Fehlschüsse das System nicht brachen", content: "Fehlschüsse waren normal, besonders bei Nässe. Deshalb die Linie: wenn ein Teil versagte, rettete die Masse den Effekt der Salve.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/28-misfires-mass-volley.jpg', title: "Fehlschüsse und Salve" }] },

  { id: 'lit29', title: "Warum selten langer Nahkampf?", content: "Nach guten Salven brach eine Seite oft moralisch ein, bevor es zum langen Händekampf kam. Bajonett war wichtig — moralischer Zusammenbruch wichtiger.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/29-moral-collapse-not-melee.jpg', title: "Moralischer Bruch" }] },

  { id: 'lit30', title: "Die Logik des Linienkriegs", content: "Linienschlacht wirkt nur aus Sicht präziser Waffen und Funk absurd. Im 17. Jh. war sie ein rationeller Weg, ungenaue Musketen, Rauch, Angst und Masse steuerbar zu machen.", duration: 3, media: [{ type: 'image', url: '/media/linear-infantry-tactics/30-linear-warfare-logic.jpg', title: "Logik der Linie" }] },

    {
      id: 'q10',
      title: 'Quiz',
      content: '',
      duration: 2,
      questions: [
      { id: 'q-lit-10-1-de', text: "Warum brachen Fehlschüsse das Salvensystem nicht?", type: 'multiple-choice', options: ["Fehlschüsse gab es nicht","Masse der Läufe rettete den Salveneffekt","Nachbar schoss doppelt","Fehlschuss = Sieg"], correctAnswer: 1, explanation: "Genau deshalb die Linie — Masse kompensierte Ausfälle." },
      { id: 'q-lit-10-2-de', text: "Warum selten langer Nahkampf?", type: 'multiple-choice', options: ["Bajonette zu kurz","Nach Salven brach oft die Moral vor dem Händekampf","Nahkampf verboten","Soldaten konnten nicht kämpfen"], correctAnswer: 1, explanation: "Moralischer Zusammenbruch wichtiger als lange Hauerei." },
      { id: 'q-lit-10-3-de', text: "Hauptlogik des Linienkriegs im 17. Jh.?", type: 'multiple-choice', options: ["Laune der Könige","Ungenaue Musketen, Rauch, Angst und Masse steuerbar machen","Linie schwächer als aufgelöste Ordnung","Brauchte Funk"], correctAnswer: 1, explanation: "Absurd nur aus Sicht moderner Präzision und Verbindung." }
      ]
    }
]

export const linearInfantryTacticsFinalQuizDE: QuizBlock = {
  id: 'quiz-linear-infantry-tactics-de',
  title: 'Abschlussquiz: Linieninfanterie-Taktik',
  questions: [
    { id: 'q-lit-f-1-de', text: "Warum bildete die Infanterie eine Linie?", type: 'multiple-choice', options: ["Um sich hinter Schildern zu verstecken","Um maximal viele Läufe gleichzeitig nach vorn zu bringen","Um schneller über das Feld zu rennen","Damit jeder für sich kämpfte"], correctAnswer: 1, explanation: "Die Linie maximierte gleichzeitiges Feuer — der Kern der Musketentaktik." },
    { id: 'q-lit-f-2-de', text: "Warum half Deckung der Armee nicht immer?", type: 'multiple-choice', options: ["Soldaten fürchteten den Wald","Man musste Position halten und die Ordnung des Feindes brechen","Deckung war kriegsrechtlich verboten","Musketen durften nicht aus Deckung feuern"], correctAnswer: 1, explanation: "Feldschlacht = Position und gegnerische Ordnung, nicht persönliches Verstecken." },
    { id: 'q-lit-f-3-de', text: "Was war gefährlich an aufgelöster Ordnung?", type: 'multiple-choice', options: ["Man lief zu schnell","Gruppen verloren einander und handelten nicht mehr einheitlich","Aufgelöste Ordnung gab mehr Salven","Offiziere wurden unsichtbar"], correctAnswer: 1, explanation: "Ohne Verbindung zerfielen Truppen und verloren die Führung." },
    { id: 'q-lit-f-4-de', text: "Warum war dichter Aufmarsch kein Wahnsinn?", type: 'multiple-choice', options: ["Der Feind konnte nicht schießen","Ordnung, Kontrolle und Feuermasse waren wichtiger als Unsichtbarkeit","Dichte machte unverwundbar","Musketen waren zu präzise für Einzelschüsse"], correctAnswer: 1, explanation: "Man opferte individuellen Schutz für kollektives Feuer und Führung." },
    { id: 'q-lit-f-5-de', text: "Wo lag die Stärke der Muskete?", type: 'multiple-choice', options: ["Beim einzelnen Scharfschützen","In der Reihe, die gemeinsam feuerte","Nur in der Festung","Nur nachts"], correctAnswer: 1, explanation: "Schwer, langsam, ungenau — die Kraft lag in der Masse." },
    { id: 'q-lit-f-6-de', text: "Warum Salven statt Einzelschüsse?", type: 'multiple-choice', options: ["Um Fahnen zu sparen","Salve = Wirkung und Schock; Hunderte Schüsse brachen die Nerven","Musketen konnten nur synchron feuern","Damit Offiziere ruhen konnten"], correctAnswer: 1, explanation: "Gleichzeitige Salve traf Körper und Moral." },
    { id: 'q-lit-f-7-de', text: "Warum kein «wer will, wann will»-Feuer?", type: 'multiple-choice', options: ["Pulver war zu billig","Ungeordnetes Feuer fraß Pulver und zerstörte den Rhythmus","Soldaten konnten nicht nachladen","Der Feind hörte Einzelschüsse nicht"], correctAnswer: 1, explanation: "Kommandierte Salve hielt Tempo, Dichte und Munitionskontrolle." },
    { id: 'q-lit-f-8-de', text: "Warum ließ man den Feind näher heran?", type: 'multiple-choice', options: ["Auf Distanz war Schuss oft fast umsonst","Näher konnte man Speere werfen","Weit weg sah man die Fahne nicht","Pulver wirkte nur im Nahbereich"], correctAnswer: 0, explanation: "Erste Salve aus der Nähe sollte wirklich gefährlich sein." },
    { id: 'q-lit-f-9-de', text: "Warum nicht liegend schießen?", type: 'multiple-choice', options: ["Uniformen hinderten","Laden von vorn brauchte lange Bewegungen — liegend zu langsam","Liegend sah man den Offizier nicht","Liegend war per Reglement verboten"], correctAnswer: 1, explanation: "Musketen wurden im Stehen von vorn geladen." },
    { id: 'q-lit-f-10-de', text: "Warum Schulter an Schulter?", type: 'multiple-choice', options: ["Zum Wärmen im Winter","Ausrichtung halten und Nachbarn nicht verlieren","Musketen verstecken","Weil Bajonette zu lang waren"], correctAnswer: 1, explanation: "Man war Teil einer Feuerwand, kein Einzelkämpfer." },
    { id: 'q-lit-f-11-de', text: "Wozu zweite und dritte Reihe?", type: 'multiple-choice', options: ["Nur für Parade","Stützen, Ausfälle ersetzen, Feuerkontinuität","Nur für Offiziere","Hintere Reihen feuerten nie"], correctAnswer: 1, explanation: "Tiefe gab Stabilität und verschiedene Feuersysteme." },
    { id: 'q-lit-f-12-de', text: "Warum wurden Linien dünner?", type: 'multiple-choice', options: ["Weniger Soldaten","Bessere Musketen und Ausbildung — mehr Front, weniger Tiefe","Piken verschwanden sofort","Rauch störte nicht mehr"], correctAnswer: 1, explanation: "Von bis zu zehn Reihen zu dünneren Linien." },
    { id: 'q-lit-f-13-de', text: "Was ist Gegenmarsch?", type: 'multiple-choice', options: ["Flucht der hinteren Reihen","Vorne feuern, zurück zum Laden; nächste rücken nach","Kavallerieangriff in die Flanke","Nur eine Reihe"], correctAnswer: 1, explanation: "System für stetigeres Feuer durch Reihenwechsel." },
    { id: 'q-lit-f-14-de', text: "Warum war Rauch «fast eine Waffe»?", type: 'multiple-choice', options: ["Rauch vergiftete","Nach Salven kaum Sicht — Orientierung an Fahnen und Mündungsfeuer","Rauch löschte gegnerisches Pulver","Rauch war nur nachts giftig"], correctAnswer: 1, explanation: "Schwarzpulver machte das Feld schnell blind." },
    { id: 'q-lit-f-15-de', text: "Wozu helle Uniformen?", type: 'multiple-choice', options: ["Nur Parade","In Rauch und Chaos Freund von Feind unterscheiden","Um sich im Gras zu verstecken","Weil Farbe billig wurde"], correctAnswer: 1, explanation: "Erkennbarkeit wichtiger als Tarnung." },
    { id: 'q-lit-f-16-de', text: "Wozu Trommeln und Trompeten?", type: 'multiple-choice', options: ["Unterhaltung","Stimme ging unter — musikalische Signale ersetzten Verbindung","Pferde erschrecken","Nur Zapfenstreich"], correctAnswer: 1, explanation: "Formieren, vorwärts, halt — alles über Signale." },
    { id: 'q-lit-f-17-de', text: "Warum musste der Offizier sichtbar sein?", type: 'multiple-choice', options: ["Damit nur er getroffen wurde","Ordnung halten, befehlen, führen — nicht verstecken","Offiziere trugen keine Waffen","Kirchenvorschrift"], correctAnswer: 1, explanation: "Der Offizier war das sichtbare Zentrum der Führung." },
    { id: 'q-lit-f-18-de', text: "Warum war die Fahne so wichtig?", type: 'multiple-choice', options: ["Moderegel","Sammelpunkt — solange Fahne sichtbar, existiert das Regiment","Fahne schützte vor Kugeln","Ohne Fahne kein Schuss"], correctAnswer: 1, explanation: "Kein Parade-Schmuck, sondern Orientierung im Chaos." },
    { id: 'q-lit-f-19-de', text: "Wozu Drill?", type: 'multiple-choice', options: ["Schönes Marschieren","Angst und Lärm lähmen — Drill ersetzt Denken durch Automatismus","Pulver sparen","Nur für unbewaffnete Rekruten"], correctAnswer: 1, explanation: "Hände handelten nach Gewohnheit, wenn der Kopf versagte." },
    { id: 'q-lit-f-20-de', text: "Rolle harter Disziplin?", type: 'multiple-choice', options: ["Allein reichte ohne Drill","Half, aber ohne Übung zerbräche die Ordnung trotzdem","Strafen waren verboten","Disziplin ersetzte Fahnen"], correctAnswer: 1, explanation: "Strafe plus Kollektivfähigkeit, nicht statt dessen." },
    { id: 'q-lit-f-21-de', text: "Warum flohen Soldaten nicht sofort?", type: 'multiple-choice', options: ["Man war festgebunden","Als Erster die Linie zu brechen war oft schlimmer als Sterben","Rennen im Waffenrock unmöglich","Flucht wurde nicht bestraft"], correctAnswer: 1, explanation: "Psychologische Bindung an Nachbarn hielt im Glied." },
    { id: 'q-lit-f-22-de', text: "Warum langsamer Vormarsch?", type: 'multiple-choice', options: ["Faulheit","Schnelle Bewegung zerstörte Ausrichtung — Armee wurde zur Masse","Musketen nicht tragbar im Lauf","Offiziere verboten schnellen Schritt"], correctAnswer: 1, explanation: "Ohne Ausrichtung keine Linienwaffe." },
    { id: 'q-lit-f-23-de', text: "Warum störten Wald und Gelände?", type: 'multiple-choice', options: ["Bäume brachen Musketen","Ordnung riss, Abstände kollabierten, Führung sank","Im Wald kein Pulver","Dort war Kavallerie stärker"], correctAnswer: 1, explanation: "Linienschlacht brauchte ebene offene Felder." },
    { id: 'q-lit-f-24-de', text: "Warum «einfache Bewegungen»?", type: 'multiple-choice', options: ["Soldaten ungebildet","Einfache Befehle führen Tausende eher gleichzeitig aus","Komplexe Manöver verbot die Kirche","Improvisation gewann immer"], correctAnswer: 1, explanation: "Wenige klare Befehle statt Improvisation für die Masse." },
    { id: 'q-lit-f-25-de', text: "Warum zusammenbleiben wegen Kavallerie?", type: 'multiple-choice', options: ["Reiter griffen Infanterie nie an","Zerstreute Infanterie wurde niedergemacht — geschlossene Ordnung konnte standhalten","Pferde fürchteten Musketen in der Ferne","Kavallerie nur nachts"], correctAnswer: 1, explanation: "Reitergewalt war Hauptgrund für geschlossenen Aufmarsch." },
    { id: 'q-lit-f-26-de', text: "Warum noch Pikeniere im 17. Jh.?", type: 'multiple-choice', options: ["Piken waren modischer","Schutz vor Nahkampf, bis Bajonett den Schützen vervollständigte","Musketen schossen im 17. Jh. nicht","Piken nur Parade"], correctAnswer: 1, explanation: "Pike und Schuss — die Muskete löste noch nicht alles." },
    { id: 'q-lit-f-27-de', text: "Was änderte der zuverlässige Bajonett?", type: 'multiple-choice', options: ["Infanterie schoss nicht mehr","Ein Soldat schoss und kämpfte nah — Pike verschwand","Bajonett ersetzte Fahnen","Linien wurden 20 Reihen tief"], correctAnswer: 1, explanation: "Einheitlichere Infanterie: Schütze und Stoßkämpfer in einer Person." },
    { id: 'q-lit-f-28-de', text: "Warum brachen Fehlschüsse das Salvensystem nicht?", type: 'multiple-choice', options: ["Fehlschüsse gab es nicht","Masse der Läufe rettete den Salveneffekt","Nachbar schoss doppelt","Fehlschuss = Sieg"], correctAnswer: 1, explanation: "Genau deshalb die Linie — Masse kompensierte Ausfälle." },
    { id: 'q-lit-f-29-de', text: "Warum selten langer Nahkampf?", type: 'multiple-choice', options: ["Bajonette zu kurz","Nach Salven brach oft die Moral vor dem Händekampf","Nahkampf verboten","Soldaten konnten nicht kämpfen"], correctAnswer: 1, explanation: "Moralischer Zusammenbruch wichtiger als lange Hauerei." },
    { id: 'q-lit-f-30-de', text: "Hauptlogik des Linienkriegs im 17. Jh.?", type: 'multiple-choice', options: ["Laune der Könige","Ungenaue Musketen, Rauch, Angst und Masse steuerbar machen","Linie schwächer als aufgelöste Ordnung","Brauchte Funk"], correctAnswer: 1, explanation: "Absurd nur aus Sicht moderner Präzision und Verbindung." }
  ]
}
