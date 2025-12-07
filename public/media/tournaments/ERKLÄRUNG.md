# Warum ich keine echten Bilder herunterladen kann

## Das Problem

Ich kann keine echten Bilder von mittelalterlichen Turnieren direkt aus dem Internet herunterladen, weil:

1. **Anti-Bot-Schutz**: Die meisten Bildquellen (Pixabay, Unsplash, Wikimedia Commons CDN) blockieren automatische Downloads ohne:
   - API-Keys
   - Authentifizierung
   - Spezielle User-Agent-Header
   - Browser-Session

2. **403 Forbidden Fehler**: Wenn ich versuche, Bilder direkt herunterzuladen, bekomme ich meistens:
   - `403 Forbidden` - Server blockiert den Zugriff
   - `404 Not Found` - Die URLs existieren nicht oder sind veraltet

3. **Keine direkten Download-URLs**: 
   - Google Images zeigt keine direkten Download-Links
   - Wikimedia Commons erfordert spezielle URLs, die ich nicht kenne
   - Pixabay/Unsplash benötigen API-Zugriff für automatische Downloads

4. **Rechtliche Einschränkungen**: 
   - Viele Bilder sind urheberrechtlich geschützt
   - Selbst für persönliche Nutzung sollte man die richtigen Quellen verwenden

## Lösung: Manuelles Herunterladen

Die beste Lösung ist, die Bilder manuell herunterzuladen:

### Empfohlene Quellen:

1. **Wikimedia Commons** (kostenlos, Public Domain/CC):
   - https://commons.wikimedia.org/wiki/Category:Medieval_tournaments
   - Suche nach: "jousting", "medieval tournament", "knight tournament"

2. **Google Images** (mit Filter "Nutzungsrechte"):
   - https://www.google.com/imghp
   - Suche nach den Begriffen aus `docs/MEDIA_SOURCES.md`
   - Filter: "Nutzungsrechte" → "Zur Wiederverwendung und Modifikation"

3. **Pixabay** (kostenlos):
   - https://pixabay.com/images/search/medieval%20tournament/
   - Direkter Download möglich

4. **Unsplash** (kostenlos):
   - https://unsplash.com/s/photos/medieval-tournament
   - Direkter Download möglich

### Anleitung:

1. Öffnen Sie eine der oben genannten Quellen
2. Suchen Sie nach dem entsprechenden Begriff (z.B. "medieval jousting")
3. Wählen Sie ein passendes Bild aus
4. Laden Sie es herunter
5. Benennen Sie es um in den entsprechenden Dateinamen (z.B. `joust.jpg`)
6. Speichern Sie es in `public/media/tournaments/`

### Benötigte Dateien:

- `joust.jpg` - Mittelalterliches Tjost/Turnier
- `buhurt.jpg` - Massenschlacht
- `melle.jpg` - Schwertkampf
- `armor.jpg` - Rüstung
- `lance.jpg` - Lanze
- `barrier.jpg` - Turnierbarriere
- `crowd.jpg` - Zuschauer
- `festival.jpg` - Fest
- `early-tournament.jpg` - Frühes Turnier
- `accident.jpg` - Unfall
- `field-of-cloth-of-gold.jpg` - Feld des Goldtuchs
- `william-marshal.jpg` - William Marshal
- `training.jpg` - Training
- `tournament-video.jpg` - Video-Thumbnail

## Alternative: Browser-Erweiterung

Sie können auch eine Browser-Erweiterung wie "Image Downloader" verwenden, um Bilder von Webseiten direkt herunterzuladen.


