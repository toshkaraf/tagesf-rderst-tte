import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const out = path.join(__dirname, '../public/media/napoleon-anecdotes/IMAGE_LIST.html')

const rows = [
  ['01-height-state-secret.jpg', 'Napoleon Größe Karikatur Gillray / Garde', 'Наполеон рост, карикатура Гилрей, гвардия', 'Napoleon Gillray caricature height', 'James Gillray Napoleon', 'napoleon caricature'],
  ['02-self-coronation.jpg', 'Krönung Notre-Dame Napoleon Krone Papst', 'Коронация Нотр-Дам Наполеон корона', 'Napoleon coronation 1804 Notre Dame crown', 'Jacques-Louis David coronation Napoleon', 'napoleon coronation'],
  ['03-laplace-exam.jpg', 'Laplace Mathematiker Portrait', 'Лаплас математик портрет', 'Pierre-Simon Laplace mathematician portrait', 'Pierre Simon Laplace', 'laplace portrait'],
  ['04-impossible-not-french.jpg', 'Napoleon Marschall Befehl Feldzug', 'Наполеон маршал приказ', 'Napoleon marshals council war map', 'Napoleon military council', 'napoleon marshals'],
  ['05-mirror-audience.jpg', 'Napoleon Spiegel Uniform General', 'Наполеон зеркало униформа', 'Napoleon mirror uniform painting', 'Napoleon portrait mirror', 'napoleon uniform'],
  ['06-petit-caporal.jpg', 'Napoleon bei Soldaten Lagerfeuer', 'Наполеон солдаты костёр', 'Napoleon soldiers campfire camp', 'Napoleon army camp painting', 'napoleon soldiers'],
  ['07-names-parade.jpg', 'Napoleon Parade Soldaten Revue', 'Наполеон парад смотр солдат', 'Napoleon military parade soldiers review', 'Napoleon reviewing troops', 'napoleon parade'],
  ['08-sentry-password.jpg', 'Napoleon Wache Nacht Zelt', 'Наполеон часовой ночь палатка', 'Napoleon sentry guard night camp', 'Napoleon bivouac guard', 'napoleon camp night'],
  ['09-marshal-baton-sack.jpg', 'Marschallstab Napoleon Marschälle', 'Маршальский жезл Наполеон', 'Napoleon marshal baton', 'French marshal baton napoleonic', 'marshal baton'],
  ['10-remember-you.jpg', 'Napoleon Soldat Blick ernst', 'Наполеон солдат взгляд', 'Napoleon soldier stern look painting', 'Napoleon and soldier', 'napoleon soldier'],
  ['11-breakfast-decision.jpg', 'Napoleon Schreibtisch Papiere Diplomatie', 'Наполеон стол бумаги дипломатия', 'Napoleon desk documents diplomacy', 'Napoleon study Tuileries', 'napoleon desk'],
  ['12-pamphlet-critic.jpg', 'Napoleon liest Zeitung Paris', 'Наполеон читает газету', 'Napoleon reading newspaper satire', 'Napoleon reading letter', 'napoleon reading'],
  ['13-fear-boredom.jpg', 'St Helena Napoleon Langeweile', 'Святая Елена Наполеон скука', 'Napoleon St Helena exile bored', 'Longwood House Napoleon', 'saint helena napoleon'],
  ['14-talleyrand-silk.jpg', 'Talleyrand Portrait Diplomat', 'Талейран портрет', 'Charles Maurice de Talleyrand portrait', 'Talleyrand Perigord portrait', 'talleyrand portrait'],
  ['15-luck-ready.jpg', 'Napoleon Schlacht Pferd', 'Наполеон битва конь', 'Napoleon battle horse painting', 'Napoleon on horseback battle', 'napoleon battle'],
  ['16-egypt-jealousy.jpg', 'Ägyptenfeldzug Napoleon Pyramiden', 'Египетский поход Наполеон', 'Napoleon Egypt campaign pyramids', 'Napoleon Egyptian campaign', 'napoleon egypt'],
  ['17-ball-too-long.jpg', 'Napoleon Ball Hof Damen', 'Наполеон бал двор', 'Napoleon imperial ball court ladies', 'Napoleon court ball painting', 'napoleon ball'],
  ['18-divorce-josephine.jpg', 'Scheidung Joséphine Napoleon Tränen', 'Развод Жозефина Наполеон', 'Napoleon Joséphine divorce ceremony', 'Napoleon Josephine divorce', 'josephine napoleon'],
  ['19-revolution-over.jpg', 'Napoleon Konsul Senat', 'Наполеон консул сенат', 'Napoleon consul senate revolution', 'Napoleon coup 18 brumaire', 'napoleon consul'],
  ['20-civil-code.jpg', 'Code Napoleon Gesetzbuch Bücher', 'Кодекс Наполеона книги', 'Code Napoleon civil law books', 'Napoleonic code manuscript', 'code napoleon'],
  ['21-first-servant-state.jpg', 'Napoleon Rede Staat', 'Наполеон речь государство', 'Napoleon speech state servant', 'Napoleon Tuileries throne', 'napoleon emperor'],
  ['22-censorship-theater.jpg', 'Paris Theater Napoleon Zeit', 'Париж театр Наполеон', 'Paris theater Napoleon era comedy', 'Odéon theater Paris napoleonic', 'paris theater 1800'],
  ['23-moscow-fire.jpg', 'Moskau Brand 1812 Napoleon', 'Москва пожар 1812 Наполеон', 'Moscow fire 1812 Napoleon', 'Burning of Moscow 1812', 'moscow fire 1812'],
  ['24-waterloo-fifteen.jpg', 'Schlacht Waterloo 1815', 'Битва Ватерлоо 1815', 'Battle of Waterloo 1815 painting', 'Waterloo battle panorama', 'waterloo battle'],
  ['25-chess-lowe.jpg', 'Napoleon Schach St Helena Lowe', 'Наполеон шахматы Святая Елена', 'Napoleon chess St Helena Lowe', 'Napoleon playing chess exile', 'napoleon chess'],
  ['26-memoirs-propaganda.jpg', 'Las Cases Napoleon Memoiren', 'Лас-Каз мемуары Наполеон', 'Las Cases Napoleon memoirs dictation', 'Memorial de Sainte-Helene', 'las cases napoleon'],
  ['27-bath-cabinet.jpg', 'Napoleon Badewanne historisch', 'Наполеон ванна', 'Napoleon bath tub historical', 'Napoleon bathtub Malmaison', 'antique bathtub portrait'],
  ['28-speed-reading.jpg', 'Napoleon Bücher Bibliothek', 'Наполеон книги библиотека', 'Napoleon books library reading', 'Napoleon study books', 'napoleon library'],
  ['29-snuff-uniform.jpg', 'Napoleon weißer Uniform Schnupftabak', 'Наполеон белый мундир табак', 'Napoleon white coat uniform snuff', 'Napoleon colonel uniform', 'napoleon uniform white'],
  ['30-last-words.jpg', 'Napoleon Sterbebett St Helena', 'Наполеон смерть кровать', 'Napoleon deathbed St Helena', 'Napoleon last days Longwood', 'napoleon death painting']
]

function enc(s) {
  return encodeURIComponent(s)
}

const items = rows
  .map((r, i) => {
    const [fn, de, ru, g, w, p] = r
    const id = `nap${i}`
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
    <title>Bildliste: Napoleon — 30 Geschichten / Наполеон</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0d1642 0%, #1a237e 45%, #0a0e1a 100%);
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
            background: linear-gradient(135deg, #1a237e 0%, #0d1642 100%);
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
        .stat-label { color: #3949ab; margin-top: 4px; font-size: 0.9em; }
        .instructions {
            padding: 24px 36px;
            background: #e8eaf6;
            border-left: 5px solid #c9a227;
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
            border-bottom: 3px solid #c9a227;
        }
        .image-item {
            background: #faf6ef;
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
        .image-item.checked { background: #e8f5e9; border-color: #43a047; }
        .image-header { display: flex; align-items: center; margin-bottom: 8px; }
        .checkbox { width: 22px; height: 22px; margin-right: 14px; cursor: pointer; }
        .image-number {
            background: #1a237e;
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
        .search-terms strong { color: #1a237e; }
        .search-links { margin-left: 70px; margin-top: 8px; }
        .search-link {
            display: inline-block;
            padding: 4px 12px;
            background: #1a237e;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-right: 8px; margin-top: 4px;
            font-size: 0.85em;
            transition: background 0.25s ease;
        }
        .search-link:hover { background: #0d1642; }
        .progress-bar {
            position: fixed;
            top: 0; left: 0; right: 0;
            height: 5px;
            background: #c5cae9;
            z-index: 1000;
        }
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #c9a227, #ffd54f);
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
            <h1>Napoleon: 30 Geschichten / Наполеон: 30 историй</h1>
            <p>30 JPG · public/media/napoleon-anecdotes/ · Session «napoleon-anecdotes» (RU/DE) · Quiz-Folien ohne Bild</p>
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
                <li><strong>Dateiname exakt:</strong> wie in der Liste → <code>public/media/napoleon-anecdotes/</code></li>
                <li><strong>Format:</strong> JPG (oder PNG umbenennen), ideal ≥ 1200×800 px.</li>
                <li><strong>Lizenz:</strong> Public Domain oder CC — Quelle notieren (viele Gemälde des 19. Jh. sind gemeinfrei).</li>
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
        const STORAGE_KEY = 'napoleonAnecdotesImageProgress';
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
            if (!confirm('Fortschritt für napoleon-anecdotes Bilder löschen? / Сбросить прогресс?')) return;
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

fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, html, 'utf8')
console.log('Wrote', out)
