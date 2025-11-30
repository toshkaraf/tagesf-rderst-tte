# Projektstruktur Tagesförderstätte

## Übersicht

Dieses Projekt ist eine interaktive Webanwendung für Bildungsstunden mit einem Klienten, der motorisch eingeschränkt ist, aber geistig vollständig. Die Anwendung ist speziell für die Nutzung auf einem Tablet optimiert.

## Technologie-Stack

- **React 18** - Moderne UI-Bibliothek
- **TypeScript** - Typsicherheit
- **Vite** - Schneller Build-Prozess
- **React Router** - Navigation zwischen Seiten
- **Lucide React** - Icons

## Projektstruktur

```
Tagesförderstätte/
├── public/
│   └── media/              # Medien-Dateien (Bilder, Videos, Audio)
│       ├── rome/           # Beispiel: Ordner für Rom-Thema
│       ├── berlin/         # Beispiel: Ordner für Berlin-Thema
│       └── music/          # Beispiel: Audio-Dateien
│
├── src/
│   ├── components/         # Wiederverwendbare Komponenten
│   │   ├── LargeButton.tsx      # Große Buttons für Tablet (80px)
│   │   ├── SlideViewer.tsx      # Anzeige von Präsentationsfolien
│   │   ├── QuizViewer.tsx       # Interaktive Quiz-Komponente
│   │   └── MediaViewer.tsx     # Medien-Player (Bilder, Videos, Audio)
│   │
│   ├── pages/             # Hauptseiten der Anwendung
│   │   ├── HomePage.tsx         # Übersichtsseite mit allen Sitzungen
│   │   └── SessionPage.tsx      # Detailseite für eine Sitzung
│   │
│   ├── types/             # TypeScript-Typdefinitionen
│   │   └── session.ts          # Typen für Sitzungen, Folien, Quiz, Medien
│   │
│   ├── data/              # Daten und Inhalte
│   │   └── sessions.ts         # Alle Sitzungen/Programme
│   │
│   ├── App.tsx            # Hauptkomponente mit Routing
│   ├── main.tsx           # Einstiegspunkt
│   └── index.css          # Globale Styles und CSS-Variablen
│
├── index.html             # HTML-Grundgerüst
├── package.json           # Abhängigkeiten
├── vite.config.ts         # Vite-Konfiguration
├── tsconfig.json          # TypeScript-Konfiguration
├── vercel.json            # Vercel-Deployment-Konfiguration
└── netlify.toml           # Netlify-Deployment-Konfiguration
```

## Wichtige Komponenten

### 1. LargeButton
Große, touch-optimierte Buttons speziell für Tablet-Nutzung:
- Mindesthöhe: 80px
- Schriftgröße: 24px
- Große Touch-Targets für einfache Bedienung

### 2. SlideViewer
Zeigt Präsentationsfolien an:
- Titel und Textinhalt
- Unterstützung für mehrere Absätze
- Anzeige der geschätzten Dauer

### 3. QuizViewer
Interaktive Quiz-Komponente:
- Ja/Nein-Fragen
- Multiple-Choice-Fragen
- Sofortiges Feedback
- Erklärungen nach jeder Antwort
- Punktezählung

### 4. MediaViewer
Medien-Player für verschiedene Formate:
- **Bilder**: JPG, PNG, WebP
- **Videos**: MP4, WebM, YouTube-URLs (wird automatisch als Embed erkannt)
- **Audio**: MP3, OGG, WAV
- Große Controls für Tablet-Bedienung

## Datentypen

### Session (Sitzung)
Eine komplette Unterrichtseinheit:
- Metadaten (Titel, Beschreibung, Kategorie, Typ, Dauer)
- Struktur (Begrüßung, Hauptteil, Interaktiv, Abschluss)
- Folien mit Inhalt und Medien
- Quiz-Block
- Zusätzliche Medien

### Slide (Folie)
Einzelne Präsentationsfolie:
- Titel und Textinhalt
- Optionale Medien (Bilder, Videos, Audio)
- Optionale Fragen für Interaktivität
- Geschätzte Dauer

### MediaItem
Medien-Element:
- Typ (image/video/audio)
- URL (lokal oder extern, z.B. YouTube)
- Titel und Beschreibung
- Optionales Thumbnail

### Question
Frage für Quiz oder Interaktivität:
- Fragetext
- Typ (yes-no/multiple-choice/open)
- Optionale Antwortmöglichkeiten
- Korrekte Antwort
- Erklärung

## Sitzungstypen

1. **presentation** - Klassische Präsentation mit Erzählung
2. **quiz** - Interaktive Quiz-Sitzung
3. **virtual-tour** - Virtuelle Reisen (Städte, Museen, historische Orte)
4. **biography** - Biografien historischer Persönlichkeiten
5. **cultural** - Kulturprogramme (Kunst, Musik, Literatur)
6. **science** - Wissenschaftliche Themen
7. **language** - Sprachthemen (Etymologie, Sprachvergleich)
8. **discussion** - Thematische Diskussionen

## Tablet-Optimierung

### Große Elemente
- Buttons: Mindesthöhe 80px
- Schrift: 24px für Buttons, 22px für Text
- Abstände: 24px zwischen Elementen
- Karten: Padding 32px

### Touch-Optimierung
- Große Touch-Targets
- Visuelles Feedback bei Berührung
- Keine Doppelklick-Erfordernisse
- Große Video- und Audio-Controls

### Navigation
- Große "Zurück" und "Weiter" Buttons
- Fortschrittsanzeige
- Klare visuelle Hierarchie

## Hinzufügen neuer Sitzungen

1. Öffnen Sie `src/data/sessions.ts`
2. Fügen Sie ein neues `Session`-Objekt hinzu:

```typescript
{
  id: 'eindeutige-id',
  title: 'Titel der Sitzung',
  description: 'Beschreibung',
  type: 'presentation', // oder anderer Typ
  category: 'Kategorie',
  duration: 60, // Minuten
  slides: [
    {
      id: 'slide-1',
      title: 'Folientitel',
      content: 'Inhalt der Folie...',
      media: [
        {
          type: 'image',
          url: '/media/theme/bild.jpg',
          title: 'Bildtitel'
        }
      ]
    }
  ],
  quiz: {
    id: 'quiz-1',
    title: 'Quiz-Titel',
    questions: [...]
  },
  structure: {
    greeting: 'Begrüßungstext',
    mainContent: 'Hauptinhalt',
    interactive: 'Interaktiver Teil',
    closing: 'Abschluss'
  },
  metadata: {
    created: '2024-01-01',
    tags: ['Tag1', 'Tag2'],
    difficulty: 'medium'
  }
}
```

3. Die Sitzung erscheint automatisch auf der Startseite

## Medien hinzufügen

### Lokale Dateien
1. Erstellen Sie einen Ordner in `public/media/` (z.B. `public/media/rome/`)
2. Laden Sie Ihre Dateien hoch
3. Verwenden Sie den Pfad in der Sitzung: `/media/rome/bild.jpg`

### Externe Videos (YouTube)
1. Verwenden Sie die YouTube-URL direkt:
```typescript
{
  type: 'video',
  url: 'https://www.youtube.com/watch?v=VIDEO_ID',
  title: 'Video-Titel'
}
```
2. Die Komponente erkennt automatisch YouTube-URLs und zeigt sie als Embed an

### Unterstützte Formate
- **Bilder**: JPG, PNG, WebP
- **Videos**: MP4, WebM, YouTube-URLs
- **Audio**: MP3, OGG, WAV

## Struktur einer 60-Minuten-Sitzung

1. **Begrüßung** (5-7 Minuten)
   - Begrüßung, kurzer Dialog
   - Ankündigung des Themas
   - Strukturüberblick

2. **Hauptteil** (30-40 Minuten)
   - Interaktive Präsentation
   - Verwendung von Medien
   - Ja/Nein-Fragen während des Vortrags

3. **Interaktiver Block** (15-20 Minuten)
   - Quiz zur Vertiefung
   - Diskussion

4. **Zusätzliches Element** (10-15 Minuten)
   - Musikstück
   - Video
   - Virtuelle Exkursion

5. **Abschluss** (5 Minuten)
   - Zusammenfassung
   - Ankündigung des nächsten Themas

## Deployment

### Vercel (empfohlen)
1. Registrieren Sie sich auf [vercel.com](https://vercel.com)
2. Verbinden Sie das GitHub-Repository
3. Vercel erkennt automatisch die Einstellungen

### Netlify
1. Registrieren Sie sich auf [netlify.com](https://netlify.com)
2. Verbinden Sie das Repository
3. Build-Kommando: `npm run build`
4. Publish-Verzeichnis: `dist`

## Entwicklung

### Installation
```bash
npm install
```

### Entwicklungsserver
```bash
npm run dev
```
Öffnet auf `http://localhost:3000`

### Produktions-Build
```bash
npm run build
```
Erstellt optimierte Dateien in `dist/`

## Besondere Features

### Automatische YouTube-Erkennung
Die `MediaViewer`-Komponente erkennt automatisch YouTube-URLs und konvertiert sie in Embed-Format.

### Responsive Design
Die Anwendung passt sich automatisch an verschiedene Bildschirmgrößen an, bleibt aber für Tablets optimiert.

### Barrierefreiheit
- Große Elemente für einfache Bedienung
- Kontrastreiche Farben
- Klare Navigation
- Visuelles Feedback

## Nächste Schritte

1. Fügen Sie Ihre ersten Sitzungen in `src/data/sessions.ts` hinzu
2. Laden Sie Medien-Dateien in `public/media/` hoch
3. Testen Sie die Anwendung auf einem Tablet
4. Passen Sie die Inhalte an die Bedürfnisse Ihres Klienten an

## Unterstützung

Bei Fragen zur Struktur oder zum Hinzufügen neuer Features, konsultieren Sie:
- `README.md` - Vollständige Dokumentation
- `PROJECT_STRUCTURE.md` - Detaillierte Architektur
- `QUICKSTART.md` - Schnellstart-Anleitung

