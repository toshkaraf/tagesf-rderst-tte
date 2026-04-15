import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const out = path.join(__dirname, '../public/media/caesar-anecdotes/IMAGE_LIST.html')

const rows = [
  ['01-pirate-ransom.jpg', 'Lösegeld / Piraten, antikes Mittelmeer', 'Выкуп: пираты, античное море', 'ancient Mediterranean pirates ship', 'pirate ship ancient rome', 'roman ship sea'],
  ['02-pirate-crucifixion.jpg', 'Römische Marine / symbolische Szene (Museum)', 'Римский флот / казнь (символика)', 'Roman navy trireme ancient', 'Roman trireme relief', 'ancient rome ship'],
  ['03-pirate-silence.jpg', 'Piratendeck / antike Seeleute', 'Палуба корабля, моряки', 'ancient ship deck sailors', 'galley ship deck', 'ship deck ancient'],
  ['04-alps-first-village.jpg', 'Alpendorf / römische Straße', 'Альпийская деревня, римская дорога', 'Roman road Alps village', 'Alpine Roman road', 'mountain village europe'],
  ['05-alexander-statue-tears.jpg', 'Alexander der Große Büste Museum', 'Александр Македонский статуя', 'Alexander the Great bust statue', 'Alexander the Great Louvre', 'alexander statue'],
  ['06-laurel-baldness.jpg', 'Caesar-Büste mit Lorbeer', 'Цезарь бюст лавровый венок', 'Julius Caesar bust laurel wreath', 'Julius Caesar marble bust', 'caesar bust'],
  ['07-triumph-soldiers-song.jpg', 'Römischer Triumphzug Relief', 'Римский триумф рельеф', 'Roman triumph procession relief', 'Roman triumph arch relief', 'roman soldiers'],
  ['08-caesar-hairstyle-wreath.jpg', 'Römischer Senat / Toga (histor. Gemälde)', 'Римский сенат, тога', 'Roman senate toga painting', 'Curia Julia ancient rome', 'roman senate'],
  ['09-storm-ship-caesar.jpg', 'Kleines Boot, Sturm', 'Лодка, шторм', 'small ancient boat storm sea', 'Mediterranean storm boat', 'fishing boat storm'],
  ['10-africa-embrace.jpg', 'Römische Landung Nordafrika', 'Римляне, Африка, десант', 'Roman legion North Africa landing', 'Roman army Africa ancient', 'roman legion'],
  ['11-alexandria-swim-documents.jpg', 'Hafen Alexandria Antike', 'Александрия гавань', 'ancient Alexandria harbor Egypt', 'Alexandria ancient Egypt harbor', 'egypt harbor ancient'],
  ['12-alesia-double-siege.jpg', 'Alesia Belagerung Karte', 'Алезия осада', 'Alesia siege fortifications map', 'Siege of Alesia', 'ancient fortress'],
  ['13-sulla-letters.jpg', 'Sulla Büste', 'Сулла бюст', 'Lucius Cornelius Sulla bust', 'Sulla Roman bust', 'roman general bust'],
  ['14-debts-politics.jpg', 'Römische Denare / Münzen', 'Римские монеты', 'Roman denarii coins silver', 'Roman republic coins', 'roman coins'],
  ['15-lupercalia-crown.jpg', 'Lupercalia / römisches Fest', 'Луперкалии', 'Lupercalia Roman festival painting', 'Lupercalia ancient rome', 'roman festival'],
  ['16-pontius-aquila.jpg', 'Forum Romanum Versammlung', 'Римский форум', 'Roman forum comitium assembly', 'Roman tribune forum', 'ancient rome forum'],
  ['17-pompey-blame.jpg', 'Pompeius der Große Büste', 'Помпей бюст', 'Pompey the Great bust statue', 'Pompeius Magnus bust', 'roman bust'],
  ['18-veni-vidi-vici.jpg', 'Zela / Pontus Feldzug', 'Зела Понт', 'Battle of Zela Pharnaces', 'Pharnaces Pontus', 'ancient battle map'],
  ['19-envy-reply.jpg', 'Römische Senatoren Debatte', 'Римские сенаторы', 'Roman senators debate forum', 'Roman senate debate', 'ancient debate'],
  ['20-bad-poet-coins.jpg', 'Haufen römischer Münzen', 'Римские монеты', 'Roman coins scattered table', 'Roman sestertius pile', 'roman coins'],
  ['21-cicero-speech.jpg', 'Cicero Büste / Redner', 'Цицерон бюст', 'Cicero bust statue orator', 'Marcus Tullius Cicero bust', 'cicero statue'],
  ['22-asparagus-myrrh.jpg', 'Römisches Bankett Fresko', 'Римский пир', 'Roman banquet fresco Pompeii', 'Roman symposium food fresco', 'ancient feast'],
  ['23-ides-march-spurinna.jpg', 'Caesar Idus März (Gemälde)', 'Иды марта убийство', 'Ides of March Caesar assassination painting', 'Assassination of Julius Caesar', 'caesar death painting'],
  ['24-sudden-death.jpg', 'Römischer Dolch Pugio', 'Пугион', 'Roman pugio dagger ancient', 'Roman military dagger', 'ancient dagger'],
  ['25-death-toga-fall.jpg', 'Toga sterbend (Malerei)', 'Тога смерть', 'Death of Caesar toga painting', 'Caesar assassination toga', 'roman toga'],
  ['26-caesar-will-people.jpg', 'Römisches Forum Menge', 'Форум толпа', 'Roman forum crowd ancient', 'Roman plebs forum', 'ancient crowd'],
  ['27-seven-secretaries.jpg', 'Römische Schreiber / Schriftrollen', 'Писцы свитки', 'Roman scribes writing scrolls', 'ancient Roman scriba', 'scribe ancient'],
  ['28-epilepsy.jpg', 'Antiker Arzt / Medizin (Symbolik)', 'Античная медицина', 'ancient Roman medicine physician', 'Asclepius staff ancient', 'roman physician'],
  ['29-superstition.jpg', 'Römische Auguren / Vogelschau', 'Аугуры птицы', 'Roman augury birds auspices', 'Roman haruspex ritual', 'augury ancient'],
  ['30-cleopatra-carpet.jpg', 'Cleopatra und Caesar (Gemälde)', 'Клеопатра Цезарь', 'Cleopatra Caesar painting', 'Cleopatra meeting Caesar', 'cleopatra egypt']
]

function enc(s) {
  return encodeURIComponent(s)
}

const items = rows
  .map((r, i) => {
    const [fn, de, ru, g, w, p] = r
    const id = `cae${i}`
    const gHref = `https://www.google.com/search?q=${enc(g)}&tbm=isch`
    const wHref = `https://commons.wikimedia.org/w/index.php?search=${enc(w)}`
    const pHref = `https://pixabay.com/images/search/${enc(p).replace(/%20/g, '+')}/`
    return `            <div class="image-item"><div class="image-header"><input type="checkbox" class="checkbox" id="${id}"><div class="image-number">${i + 1}</div><label for="${id}" class="image-filename">${fn}</label></div><div class="image-description"><strong>DE:</strong> ${de}<br><strong>RU:</strong> ${ru}</div><div class="search-terms"><strong>Suche / поиск:</strong> "${g}"</div><div class="search-links"><a class="search-link" target="_blank" rel="noopener" href="${gHref}">Google</a><a class="search-link" target="_blank" rel="noopener" href="${wHref}">Wikimedia</a><a class="search-link" target="_blank" rel="noopener" href="${pHref}">Pixabay</a></div></div>`
  })
  .join('\n')

const html = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bildliste: Caesar — 30 Geschichten / Цезарь</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #4a0f18 0%, #7a1f2e 45%, #1a0a0c 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: #fffef8;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #6d1f2e 0%, #4a0f18 100%);
            color: #fff8e1;
            padding: 40px;
            text-align: center;
        }
        .header h1 { font-size: 2.05em; margin-bottom: 10px; }
        .header p { font-size: 1.02em; opacity: 0.92; }
        .stats {
            display: flex;
            justify-content: space-around;
            padding: 18px 20px;
            background: #efebe9;
            border-bottom: 2px solid #d7ccc8;
        }
        .stat-item { text-align: center; }
        .stat-number { font-size: 1.8em; font-weight: bold; color: #4a0f18; }
        .stat-label { color: #6d4c41; margin-top: 4px; font-size: 0.9em; }
        .instructions {
            padding: 24px 36px;
            background: #efebe9;
            border-left: 5px solid #6d1f2e;
            margin: 20px 36px;
            border-radius: 10px;
        }
        .instructions h2 { color: #4a0f18; margin-bottom: 10px; font-size: 1.3em; }
        .instructions ul { list-style-position: inside; color: #4e342e; font-size: 0.95em; }
        .instructions li { margin: 6px 0; }
        .content { padding: 10px 36px 30px; }
        .section-title {
            font-size: 1.6em;
            color: #4a0f18;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 3px solid #8d4e5c;
        }
        .image-item {
            background: #faf6ef;
            border: 2px solid #d7ccc8;
            border-radius: 10px;
            padding: 16px;
            margin-bottom: 12px;
            transition: all 0.25s ease;
        }
        .image-item:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
            transform: translateY(-1px);
        }
        .image-item.checked { background: #dcedc8; border-color: #689f38; }
        .image-header { display: flex; align-items: center; margin-bottom: 8px; }
        .checkbox { width: 22px; height: 22px; margin-right: 14px; cursor: pointer; }
        .image-number {
            background: #6d1f2e;
            color: white;
            width: 32px; height: 32px;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-weight: bold; margin-right: 12px; font-size: 0.95em;
        }
        .image-filename { font-size: 1.05em; font-weight: bold; color: #212529; flex: 1; }
        .image-description { color: #495057; margin-bottom: 8px; margin-left: 70px; font-size: 0.95em; }
        .search-terms {
            background: white;
            padding: 8px 12px;
            border-radius: 6px;
            margin-left: 70px;
            border: 1px solid #bcaaa4;
            font-size: 0.9em;
        }
        .search-terms strong { color: #6d1f2e; }
        .search-links { margin-left: 70px; margin-top: 8px; }
        .search-link {
            display: inline-block;
            padding: 4px 12px;
            background: #6d1f2e;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-right: 8px; margin-top: 4px;
            font-size: 0.85em;
            transition: background 0.25s ease;
        }
        .search-link:hover { background: #4a0f18; }
        .progress-bar {
            position: fixed;
            top: 0; left: 0; right: 0;
            height: 5px;
            background: #d7ccc8;
            z-index: 1000;
        }
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #8d4e5c, #c9a227);
            width: 0%;
            transition: width 0.25s ease;
        }
        .action-buttons {
            position: fixed;
            bottom: 26px; right: 26px;
            display: flex; gap: 10px;
        }
        .action-btn {
            padding: 12px 20px;
            border: none;
            border-radius: 10px;
            font-size: 0.95em;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.25s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }
        .reset-btn { background: #c62828; color: white; }
        .reset-btn:hover { background: #b71c1c; transform: scale(1.04); }
        .save-btn { background: #558b2f; color: white; }
        .save-btn:hover { background: #33691e; transform: scale(1.04); }
    </style>
</head>
<body>
    <div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>
    <div class="container">
        <div class="header">
            <h1>Caesar: 30 Geschichten / Цезарь: 30 историй</h1>
            <p>30 JPG · public/media/caesar-anecdotes/ · Session «caesar-anecdotes» (RU/DE) · Quiz-Folien ohne Bild</p>
        </div>
        <div class="stats">
            <div class="stat-item"><div class="stat-number" id="totalImages">0</div><div class="stat-label">Gesamt / всего</div></div>
            <div class="stat-item"><div class="stat-number" id="checkedImages">0</div><div class="stat-label">Erledigt / готово</div></div>
            <div class="stat-item"><div class="stat-number" id="remainingImages">0</div><div class="stat-label">Offen / осталось</div></div>
            <div class="stat-item"><div class="stat-number" id="progressPercent">0%</div><div class="stat-label">Fortschritt</div></div>
        </div>
        <div class="instructions">
            <h2>Anleitung / Инструкция</h2>
            <ul>
                <li><strong>Dateiname exakt:</strong> wie in der Liste → <code>public/media/caesar-anecdotes/</code></li>
                <li><strong>Format:</strong> JPG (oder PNG umbenennen), ideal ≥ 1200×800 px.</li>
                <li><strong>Lizenz:</strong> Public Domain oder CC — Quelle notieren (viele Caesar-Gemälde sind urheberrechtlich jung).</li>
                <li><strong>Quiz-Folien (q1–q10):</strong> keine Medien in der App — nur diese 30 Bilder.</li>
            </ul>
        </div>
        <div class="content">
            <h2 class="section-title">Bilder / Изображения</h2>

${items}
        </div>
    </div>

    <div class="action-buttons">
        <button class="action-btn reset-btn" type="button" onclick="resetProgress()">Zurücksetzen</button>
        <button class="action-btn save-btn" type="button" onclick="saveProgress()">Speichern</button>
    </div>

    <script>
        const STORAGE_KEY = 'caesarAnecdotesImageProgress';
        function updateStats() {
            const checkboxes = document.querySelectorAll('.checkbox');
            const total = checkboxes.length;
            const checked = document.querySelectorAll('.checkbox:checked').length;
            document.getElementById('totalImages').textContent = total;
            document.getElementById('checkedImages').textContent = checked;
            document.getElementById('remainingImages').textContent = total - checked;
            const percent = total === 0 ? 0 : Math.round((checked / total) * 100);
            document.getElementById('progressPercent').textContent = percent + '%';
            document.getElementById('progressFill').style.width = percent + '%';
        }
        function saveProgress() {
            const checkboxes = document.querySelectorAll('.checkbox');
            localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(checkboxes).map(cb => cb.checked)));
        }
        function loadProgress() {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (!saved) return;
            const progress = JSON.parse(saved);
            document.querySelectorAll('.checkbox').forEach((cb, index) => {
                if (progress[index]) {
                    cb.checked = true;
                    cb.closest('.image-item').classList.add('checked');
                }
            });
        }
        function resetProgress() {
            if (!confirm('Fortschritt für caesar-anecdotes Bilder löschen? / Сбросить прогресс?')) return;
            localStorage.removeItem(STORAGE_KEY);
            document.querySelectorAll('.checkbox').forEach(cb => {
                cb.checked = false;
                cb.closest('.image-item').classList.remove('checked');
            });
            updateStats();
        }
        window.addEventListener('DOMContentLoaded', () => {
            loadProgress();
            document.querySelectorAll('.checkbox').forEach(cb => {
                cb.addEventListener('change', () => {
                    if (cb.checked) cb.closest('.image-item').classList.add('checked');
                    else cb.closest('.image-item').classList.remove('checked');
                    updateStats();
                    saveProgress();
                });
            });
            updateStats();
        });
    </script>
</body>
</html>
`

fs.writeFileSync(out, html, 'utf8')
console.log('Wrote', out)
