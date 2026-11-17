# Neue Themen-Präsentation mit Quiz (eigener Stil pro Präsentation)

Seit „Kardinal Richelieu“ ist jede neue Präsentation eine **eigenständige Web-Präsentation mit eigenem Stil**
(Farben, Schriften, Layout) – nicht mehr das generische Folien-Layout. Sie erscheint im Bereich
„Тематические презентации с викториной“ (`/topics`) und läuft dort genauso wie in der APK.

## Bestandteile
| Was | Wo |
|---|---|
| Quellen der Präsentation (Texte, Bilder, Videos, Build-Skripte) | `tools/<name>-deck/` (Vorlage: `tools/richelieu-deck/`) |
| Quiz-Modul (3 Fragen pro Folien-Gruppe + Abschlusstest mit %) | `tools/common/quiz.cjs`, Beschreibung `tools/common/QUIZ_README.md` |
| Fertige Web-Präsentation (eine HTML-Datei) | `public/<name>/index.html` (`node gen.cjs` im Deck-Ordner) |
| Eintrag in der Themenliste | `src/data/<name>-deck-session.ts` + Import/Eintrag in `src/data/sessions.ts` + DE/RU-Titel in `src/i18n/sessionTranslations.ts` |
| Seite im Web-App | `src/pages/EmbeddedDeckPage.tsx` (Vollbild-iframe, App-Leiste im Deck-Stil) |

## Neuen Eintrag anlegen
```ts
export const myDeckSessionRU: Session = {
  id: 'my-deck', title: '…', description: '…', type: 'presentation', category: 'История', duration: 45,
  embedUrl: 'my-deck/index.html',                       // Datei in public/my-deck/
  embedTheme: { bg: '#2A0A12', fg: '#F6EFE3', accent: '#C9A227' },  // Farben der App-Leiste = Stil des Decks
  structure: { mainContent: '…' },
  metadata: { created: '2026-11-17', tags: [], difficulty: 'medium' }   // neuestes Datum = ganz oben in der Liste
}
```
Die Liste wird nach `metadata.created` absteigend sortiert – die neueste Präsentation steht oben.

## Regeln für jede neue Präsentation
1. **Eigener Stil**: eigene Farbpalette/Schrift/Master (Beispiel Richelieu: Burgund `#2A0A12`/`#5A1426`, Gold `#C9A227`, Creme `#F6EFE3`, Cambria + Calibri). Nicht den Stil einer früheren Präsentation kopieren.
2. 30 Folien in einfachem Deutsch (B1), Bilder gemeinfrei/CC0 mit Quellenangabe, Videos ≤ 3 Min., Deutsch/Englisch/ohne Sprache, `embeddable=true` (per YouTube Data API prüfen).
3. Quiz: `quiz.json` (richtige Antwort immer an erster Stelle), je 3 Fragen nach 3–4 Folien + Abschlusstest (Zufallsreihenfolge, Ergebnis in %).
4. Prüfen: `npm run build`, dann `/topics` öffnen – neue Präsentation steht oben, Quiz-Ablauf (grün/rot, 2 s, Weiterleitung) testen.
