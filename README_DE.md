# Tagesförderstätte - Interaktive Sitzungen

Webanwendung zur Durchführung interaktiver Bildungsveranstaltungen mit Unterstützung für Präsentationen, Quizze, Videos, Audio und andere Medieninhalte.

## Funktionen

- 🎯 **Vielfältige Sitzungsformate**: Präsentationen, Quizze, virtuelle Reisen, Biografien, Kulturprogramme
- 📱 **Responsives Design**: optimiert für Tablets mit großen Buttons
- 🎬 **Medienunterstützung**: Videos, Audio, Bilder
- ⏱️ **Strukturierte Sitzungen**: 60-minütige Sitzungen mit klarer Struktur
- 🎨 **Modernes UI**: schöne und intuitive Benutzeroberfläche
- 🌐 **Mehrsprachigkeit**: Deutsch (Standard) / Russisch mit Sprachumschalter

## Installation und Start

### Voraussetzungen

- Node.js 18+
- npm oder yarn

### Installation der Abhängigkeiten

```bash
npm install
```

### Entwicklungsserver starten

```bash
npm run dev
```

Die Anwendung öffnet sich automatisch auf `http://localhost:3000`

## Sprachumschaltung

In der oberen rechten Ecke befindet sich eine Schaltfläche zum Umschalten zwischen Deutsch (Standard) und Russisch.

## Projektstruktur

```
Tagesförderstätte/
├── src/
│   ├── components/      # React-Komponenten
│   ├── pages/           # Anwendungsseiten
│   ├── data/            # Sitzungsdaten
│   ├── i18n/            # Übersetzungen (Deutsch/Russisch)
│   └── types/           # TypeScript-Typen
├── public/
│   └── media/           # Medien-Dateien
└── package.json
```

## Lizenz

Private Nutzung
