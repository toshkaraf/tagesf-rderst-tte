import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const out = path.join(__dirname, '../public/media/alexander-anecdotes/IMAGE_LIST.html')

const rows = [
  ['01-philip-falls-sword.jpg', 'Philipp II. Bankett / Alexander Jugend (histor. Gemälde)', 'Филипп II пир Александр меч', 'Alexander the Great Philip of Macedon banquet sword', 'Alexander Philip Macedon mosaic', 'ancient greek banquet'],
  ['02-attalus-toast.jpg', 'Antikes Symposion / Weinkelch (Museum)', 'Античный пир чаша тост', 'ancient Greek symposium drinking cup', 'symposium Greek vase', 'greek banquet ancient'],
  ['03-egypt-beard.jpg', 'Nil / Sphinx / ägyptische Landschaft (frei)', 'Египет Нил Сфинкс', 'Nile Egypt Sphinx ancient', 'Egypt Sphinx Giza', 'egypt desert'],
  ['04-cyrus-statue-tears.jpg', 'Kyros der Große Relief / Statue (Museum)', 'Кир Великий статуя рельеф', 'Cyrus the Great statue relief', 'Cyrus cylinder British Museum', 'persian king statue'],
  ['05-diogenes-sun.jpg', 'Diogenes Tonne / Alexander (Gemälle Parhasios-Stil)', 'Диоген бочка Александр', 'Diogenes barrel Alexander painting', 'Diogenes and Alexander', 'diogenes philosopher'],
  ['06-anaximenes-oath.jpg', 'Antike Stadt Brand / Belagerung (histor. Darstellung)', 'античный город осада огонь', 'ancient city siege fire painting', 'Alexander siege Miletus', 'ancient city ruins'],
  ['07-not-steal-victory.jpg', 'Makedonische Phalanx / Nachtlager (Rekonstruktion)', 'македонская фаланга ночь', 'Macedonian phalanx camp night', 'Alexander army camp', 'ancient army camp'],
  ['08-gaugamela-night-parminio.jpg', 'Schlacht Gaugamela Karte / Panorama', 'Гавгамелы битва', 'Battle of Gaugamela map', 'Gaugamela Alexander', 'ancient battle'],
  ['09-gordian-knot.jpg', 'Gordium / Knoten-Symbolik / Schwert (Illustration)', 'Гордиев узел меч', 'Gordian knot sword Alexander', 'Gordium Alexander', 'sword knot'],
  ['10-hope-perdiccas.jpg', 'Makedonische Münzen / Gold (Museum)', 'македонские монеты золото', 'Macedonian gold coins ancient', 'Alexander coin tetradrachm', 'ancient greek coins'],
  ['11-beggar-city.jpg', 'Antike Stadt Agora / Polis (Rekonstruktion)', 'полис древняя греция город', 'ancient Greek polis city agora', 'Greek city reconstruction', 'ancient city greece'],
  ['12-ask-more.jpg', 'Makedonischer Soldat / Zelt (histor. Illustration)', 'македонский солдат палатка', 'Macedonian soldier ancient Greek', 'Alexander soldier helmet', 'ancient soldier'],
  ['13-sick-list-desert.jpg', 'Wüstenmarsch / Karawane antik (Stock)', 'пустыня поход армия', 'ancient army desert march', 'Alexander Gedrosia desert', 'desert march ancient'],
  ['14-coward-name-alexander.jpg', 'Makedonische Rüstung / Helm', 'македонский шлем доспехи', 'Macedonian helmet ancient', 'Greek hoplite helmet', 'ancient helmet'],
  ['15-physician-letter-poison.jpg', 'Antiker Arzt / Schriftrolle (Museum)', 'античный врач свиток', 'ancient Greek physician scroll', 'Hippocrates manuscript', 'ancient medicine'],
  ['16-sentry-cloak.jpg', 'Nachtwache / Fackel / römisches Lager (ähnliche Ästhetik)', 'ночной караул факел лагерь', 'ancient sentry torch camp', 'Roman camp night watch', 'torch night ancient'],
  ['17-gymnosophists-india.jpg', 'Indische Asketen / Miniatur / Felskunst', 'индийские философы аскеты', 'Indian ascetics ancient painting', 'Gymnosophists India', 'india meditation ancient'],
  ['18-sage-life-death.jpg', 'Indischer Weiser / Gespräch (histor. Malerei)', 'индийский мудрец', 'Indian sage philosopher ancient', 'Alexander Indian philosophers', 'indian sage'],
  ['19-diogenes-good-evil.jpg', 'Diogenes Philosoph (Statue / Stich)', 'Диоген философ', 'Diogenes philosopher statue', 'Diogenes Sinope', 'diogenes'],
  ['20-homer-casket-darius.jpg', 'Ilias Handschrift / antiker Kodex + Goldschmuck', 'Илиада рукопись золото', 'Iliad manuscript ancient gold', 'Homer Iliad codex', 'ancient book gold'],
  ['21-hephaestion-sisygambis.jpg', 'Hephaistion / Alexander Mosaike', 'Гефестион Александр мозаика', 'Hephaestion Alexander mosaic', 'Alexander Hephaestion', 'alexander mosaic'],
  ['22-zeus-son-ammon.jpg', 'Siwa Ammon-Tempel / Oase Ägypten', 'Сива Амон храм Египет', 'Temple of Amun Siwa Egypt', 'Oracle of Ammon Alexander', 'egypt temple desert'],
  ['23-persepolis-fire.jpg', 'Persepolis Ruinen / Palast (Foto)', 'Персеполь дворец руины', 'Persepolis palace ruins fire', 'Persepolis Iran', 'persepolis'],
  ['24-strongest-successor.jpg', 'Diadochen / Karte Nachfolgekriege', 'диадохи карта войны', 'Wars of the Diadochi map', 'Diadochi ancient map', 'ancient map battle'],
  ['25-last-nod-soldiers.jpg', 'Makedonische Phalanx Abschied (Illustration)', 'македонцы прощание', 'Macedonian soldiers farewell', 'Alexander army mourning', 'ancient soldiers'],
  ['26-not-ill-dying.jpg', 'Sterbendes Alexander-Mosaik / Fresko (Kopie)', 'Александр умирает мозаика', 'Alexander the Great death mosaic', 'Alexander death Babylon', 'alexander death'],
  ['27-sleep-before-gaugamela.jpg', 'Feldlager vor Schlacht / Dareios (histor. Gemälde)', 'Дарий лагерь битва', 'Darius III camp ancient', 'Gaugamela Darius', 'ancient persian camp'],
  ['28-body-scent-plutarch.jpg', 'Alexander Büste / Marmor (Museum)', 'Александр Македонский бюст', 'Alexander the Great bust marble', 'Alexander bust museum', 'alexander the great statue'],
  ['29-bucephalus-shadow.jpg', 'Alexander und Bukephalas (Mosaik / Gemälde)', 'Буцефал Александр конь', 'Alexander Bucephalus horse mosaic', 'Bucephalus Alexander', 'ancient horse mosaic'],
  ['30-mirror-negotiations.jpg', 'Antiker Bronzespiegel / persische Gesandte (Rekonstruktion)', 'зеркало античное персы', 'ancient bronze mirror Greek', 'Persian embassy ancient', 'ancient mirror']
]

function enc(s) {
  return encodeURIComponent(s)
}

const items = rows
  .map((r, i) => {
    const [fn, de, ru, g, w, p] = r
    const id = `ale${i}`
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
    <title>Bildliste: Alexander — 30 Geschichten / Александр</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1a237e 0%, #283593 45%, #0d1642 100%);
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
            background: linear-gradient(135deg, #3949ab 0%, #1a237e 100%);
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
            background: #e8eaf6;
            border-bottom: 2px solid #c5cae9;
        }
        .stat-item { text-align: center; }
        .stat-number { font-size: 1.8em; font-weight: bold; color: #1a237e; }
        .stat-label { color: #5c6bc0; margin-top: 4px; font-size: 0.9em; }
        .instructions {
            padding: 24px 36px;
            background: #e8eaf6;
            border-left: 5px solid #3949ab;
            margin: 20px 36px;
            border-radius: 10px;
        }
        .instructions h2 { color: #1a237e; margin-bottom: 10px; font-size: 1.3em; }
        .instructions ul { list-style-position: inside; color: #283593; font-size: 0.95em; }
        .instructions li { margin: 6px 0; }
        .content { padding: 10px 36px 30px; }
        .section-title {
            font-size: 1.6em;
            color: #1a237e;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 3px solid #5c6bc0;
        }
        .image-item {
            background: #fafafa;
            border: 2px solid #c5cae9;
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
            background: #3949ab;
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
            border: 1px solid #9fa8da;
            font-size: 0.9em;
        }
        .search-terms strong { color: #3949ab; }
        .search-links { margin-left: 70px; margin-top: 8px; }
        .search-link {
            display: inline-block;
            padding: 4px 12px;
            background: #3949ab;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-right: 8px; margin-top: 4px;
            font-size: 0.85em;
            transition: background 0.25s ease;
        }
        .search-link:hover { background: #1a237e; }
        .progress-bar {
            position: fixed;
            top: 0; left: 0; right: 0;
            height: 5px;
            background: #c5cae9;
            z-index: 1000;
        }
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #5c6bc0, #7986cb);
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
            <h1>Alexander: 30 Geschichten / Александр: 30 историй</h1>
            <p>30 JPG · public/media/alexander-anecdotes/ · Session «alexander-anecdotes» (RU/DE) · Quiz-Folien ohne Bild</p>
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
                <li><strong>Dateiname exakt:</strong> wie in der Liste → <code>public/media/alexander-anecdotes/</code></li>
                <li><strong>Format:</strong> JPG (oder PNG umbenennen), ideal ≥ 1200×800 px.</li>
                <li><strong>Lizenz:</strong> Public Domain oder CC — Quelle notieren.</li>
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
        const STORAGE_KEY = 'alexanderAnecdotesImageProgress';
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
            if (!confirm('Fortschritt für alexander-anecdotes Bilder löschen? / Сбросить прогресс?')) return;
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
