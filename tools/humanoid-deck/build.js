require('fs').mkdirSync(__dirname + '/out', { recursive: true });
const pptxgen = require('pptxgenjs');
const fs = require('fs');
const SK = process.env.PPTX_SKILL_DIR; // directory of the pptx skill (contains scripts/apply_theme.js)
const { applyTheme } = require(SK + '/scripts/apply_theme.js');
const IMG = '' + __dirname + '/img/';
const md = fs.readFileSync(__dirname + '/source_texts.md', 'utf8');

// parse
const slides = [];
let part = '';
for (const blk of md.split(/\n(?=#{1,2} \*\*)/)) {
  const h = blk.match(/^(#{1,2}) \*\*(.+?)\*\*/);
  if (!h) continue;
  if (h[1] === '#') { part = h[2].replace(/\s*\(Folien.*\)/, ''); continue; }
  const m = h[2].match(/^Folie (\d+): (.+)$/);
  if (!m) continue;
  const flat = blk.replace(/\n(?!\n)/g, ' ');
  const g = (re) => (flat.match(re) || [])[1];
  const vid = flat.match(/\*\*Video-Empfehlung: \[\[(.+?)\]\{\.underline\}\]\((.+?)\)/);
  slides.push({
    n: +m[1], title: m[2].replace(/--/g,'–'), part,
    cat: g(/\*\*Kategorie: (.+?)\*\*/),
    text: g(/\*\*Kernaussage \(B1\):\*\* (.+?)\s+\*\*Platzhalter/),
    motif: g(/\*\*Platzhalter für Bildmotiv:\*\* \*(.+?)\*/),
    vlabel: vid && vid[1].replace(/\\</g, '<').replace(/\s+/g, ' '),
    url: vid && vid[2],
  });
}
slides.find(x => x.n === 6).url = null; slides.find(x => x.n === 6).vlabel = null;
if (slides.length !== 30) throw new Error('parsed ' + slides.length);

const photo = { 1: 'valkyrie', 2: 'leonardo', 3: 'asimo', 4: 'atlas_old', 13: 'optimus' };
for (const n of [6,14,15,16,17,19,21,22,23,26,28,29,30]) photo[n] = 'w' + n;
const yt = { 20: '93Is26tQ07o', 21: 'rruX0RrnRcw', 22: 'ZQ4Sqihq_kQ', 23: 'QSnv7bEbrac', 25: 'tckyf12vLE4', 26: 'OO-yrowDiAo', 27: 'uw4CrEWjO2Y', 28: 'f3c4mQty_so', 29: 'KRyqxhB38JY', 30: 'U1JJN1tEvJw', 5: '29ECwExc-_M', 7: 'wyNPzyUtwI0', 8: '4rg2sB6ELtk', 10: 'tF4DML7FIWk', 11: 'fn3KWM1kuAw', 24: 'lS_z60kjVEk' };
const ytTitle = { '93Is26tQ07o': 'Simulate Robot Fleets in Digital Twins (NVIDIA Omniverse)', 'rruX0RrnRcw': 'Unitree Humanoid Withstands Kicks and Shoves', 'ZQ4Sqihq_kQ': 'Humanoid Robot Can Swap Its Own Battery Pack (CNET)', 'QSnv7bEbrac': 'How Robots Build Maps (LiDAR + SLAM Explained)', 'tckyf12vLE4': 'San Francisco company debuts laundry-folding robot (KTVU)', 'OO-yrowDiAo': 'Meet Abi, the humanoid robot in care homes (Reuters)', 'uw4CrEWjO2Y': 'Rentable humanoid robots (CBS Texas)', 'f3c4mQty_so': 'I Tried the First Humanoid Home Robot (WSJ)', 'KRyqxhB38JY': 'Battery Life Doubled from 4 to 8 Hours (The Neuron)', 'U1JJN1tEvJw': 'Will humans and robots work together soon? (CGTN)', '29ECwExc-_M': 'All New Atlas | Boston Dynamics', 'wyNPzyUtwI0': 'Humanoid robots fight in cage match in Shanghai (Al Jazeera)', '4rg2sB6ELtk': 'First Human VS. Robot Fight in History', 'tF4DML7FIWk': 'Atlas | Partners in Parkour', 'fn3KWM1kuAw': 'Do You Love Me? | Boston Dynamics', 'lS_z60kjVEk': 'NEO is Starting to Learn on Its Own (1X)', '-e1_QhJ1EhQ': 'Atlas Gets a Grip | Boston Dynamics', 'eCNVet_wXGA': 'Tesla Optimus Is Learning Everyday Tasks!' };
const credit = { valkyrie: 'Valkyrie (NASA)', leonardo: 'Leonardos Roboter, Nachbau', asimo: 'Honda ASIMO', atlas_old: 'Atlas (Boston Dynamics)', optimus: 'Tesla Optimus' };
for (const n of [6,14,15,16,17,19,21,22,23,26,28,29,30]) credit['w' + n] = 'Illustrationsfoto';

const THEME = {
  name: 'Humanoide Roboter', headFontFace: 'Cambria', bodyFontFace: 'Calibri',
  colors: { dk1: '0B1F33', lt1: 'FFFFFF', dk2: '12304D', lt2: 'EAF1F7', accent1: 'FF7A1A', accent2: '1FA2A6', accent3: '5B7C99', accent4: 'F2B134', accent5: '3A6EA5', accent6: '8FB8D8', hlink: 'FF7A1A', folHlink: 'C9651A' },
};
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.title = 'Humanoide Roboter: Geschichte und Gegenwart';
const C = pres.SchemeColor;

pres.defineSlideMaster({
  title: 'CONTENT', background: { color: 'FFFFFF' },
  objects: [{ rect: { x: 0, y: 0, w: 6.45, h: 5.625, fill: { color: 'EAF1F7' } } }],
});
pres.defineSlideMaster({ title: 'DARK', background: { color: '0B1F33' } });

// title slide
{
  const s = pres.addSlide({ masterName: 'DARK' });
  s.addImage({ path: IMG + 'valkyrie_t.jpg', x: 5.9, y: 0.7, w: 3.7, h: 3.9, altText: 'Humanoider Roboter Valkyrie' });
  s.addText('Humanoide Roboter', { x: 0.6, y: 1.2, w: 5, h: 0.9, fontSize: 38, bold: true, color: C.background1, margin: 0, isTextBox: true, objectName: 'Titel' });
  s.addText('Geschichte und Gegenwart', { x: 0.6, y: 2.1, w: 5, h: 0.6, fontSize: 24, color: 'FF7A1A', margin: 0, isTextBox: true });
  s.addText('Kurzversion · 30 Folien · einfaches Deutsch (B1)', { x: 0.6, y: 3.0, w: 5, h: 0.4, fontSize: 14, color: 'CADCFC', margin: 0, isTextBox: true });
  s.addText('Foto: NASA / Wikimedia Commons', { x: 5.9, y: 4.65, w: 3.7, h: 0.25, fontSize: 10, color: '8FB8D8', margin: 0, isTextBox: true });
  s.addNotes('Titelfolie. Foto: Valkyrie (NASA), Wikimedia Commons. Lizenz bitte vor Veröffentlichung prüfen.');
}

for (const d of slides) if (yt[d.n] && !d.url) { d.url = 'https://www.youtube.com/watch?v=' + yt[d.n]; d.vlabel = ytTitle[yt[d.n]]; }
let lastPart = null;
let idx = 1;
for (const d of slides) {
  idx++;
  const opts = { masterName: 'CONTENT' };
  if (d.part !== lastPart) { pres.addSection({ title: d.part }); lastPart = d.part; }
  opts.sectionTitle = d.part;
  const s = pres.addSlide(opts);
  s.addText(d.cat, { x: 0.45, y: 0.3, w: 5.9, h: 0.3, fontSize: 12, bold: true, color: 'C9651A', charSpacing: 2, margin: 0, isTextBox: true, objectName: 'Kategorie' });
  s.addText(d.title, { x: 0.45, y: 0.6, w: 5.9, h: 1.2, fontSize: 28, bold: true, fontFace: 'Cambria', color: C.text2, valign: 'top', margin: 0, isTextBox: true, objectName: 'Titel', fit: 'shrink' });
  let fs = 32;
  while (fs > 16 && Math.ceil(d.text.length * fs * 0.56 / 72 / 5.9) * fs * 1.2 / 72 > 3.3) fs--;
  console.log(d.n, fs); d.fs = fs;
  s.addText(d.text, { x: 0.45, y: 1.85, w: 5.9, h: 3.45, fontSize: fs, color: C.text1, valign: 'top', margin: 0, isTextBox: true, objectName: 'Text' });
  s.addText(String(d.n).padStart(2, '0') + ' / 30', { x: 0.45, y: 5.35, w: 1.5, h: 0.2, fontSize: 10, color: '5B7C99', margin: 0, isTextBox: true });

  let ytid = yt[d.n] || (d.url && (d.url.match(/v=([\w-]+)/) || [])[1]);
  let note = 'Bildmotiv: ' + d.motif;
  const X = 6.8, W = 2.75;
  if (photo[d.n] && !yt[d.n]) {
    const p = photo[d.n];
    s.addImage({ path: IMG + p + '_c.jpg', x: X, y: 0.5, w: W, h: 3.6, altText: d.motif, objectName: 'Foto' });
    s.addText('Foto: ' + credit[p] + ' / Wikimedia Commons', { x: X, y: 4.18, w: W, h: 0.22, fontSize: 10, color: '5B7C99', margin: 0, isTextBox: true });
    note += ' | Foto: ' + credit[p] + ', Wikimedia Commons (Lizenz vor Veröffentlichung prüfen).';
  } else if (yt[d.n]) {
    const h = W * 9 / 16;
    if (false) {
      const cover = 'data:image/jpeg;base64,' + require('fs').readFileSync(IMG + 'ytc_' + yt[d.n] + '.jpg').toString('base64');
      s.addMedia({ type: 'online', link: 'https://www.youtube.com/embed/' + yt[d.n], x: X, y: 0.9, w: W, h, cover, objectName: 'Video' });
    } else {
      s.addImage({ path: IMG + 'ytc_' + yt[d.n] + '.jpg', x: X, y: 0.9, w: W, h, altText: d.motif, hyperlink: { slide: idx + 1, tooltip: 'Video auf der nächsten Folie' }, objectName: 'Video-Vorschau' });
      s.addShape(pres.ShapeType.ellipse, { x: X + W / 2 - 0.35, y: 0.9 + h / 2 - 0.35, w: 0.7, h: 0.7, fill: { color: '0B1F33', transparency: 25 }, line: { color: 'FFFFFF', width: 2 }, objectName: 'Play-Kreis', hyperlink: { slide: idx + 1 } });
      s.addShape(pres.ShapeType.triangle, { x: X + W / 2 - 0.1, y: 0.9 + h / 2 - 0.16, w: 0.28, h: 0.32, rotate: 90, fill: { color: 'FFFFFF' }, line: { color: 'FFFFFF', width: 0 }, objectName: 'Play-Dreieck', hyperlink: { slide: idx + 1 } });

    }
    if (d.n < 20 || d.n === 24) s.addText(d.motif, { x: X, y: 0.9 + h + 0.1, w: W, h: 0.6, fontSize: 11, italic: true, color: '5B7C99', margin: 0, valign: 'top', isTextBox: true });
  } else {
    s.addShape(pres.ShapeType.roundRect, { x: X, y: 0.9, w: W, h: 2.9, rectRadius: 0.15, fill: { color: '12304D' }, line: { color: '12304D', width: 0 }, objectName: 'Bildplatzhalter' });
    s.addText(String(d.n).padStart(2, '0'), { x: X, y: 1.05, w: W, h: 0.9, fontSize: 54, bold: true, fontFace: 'Cambria', color: 'FF7A1A', align: 'center', margin: 0, isTextBox: true });
    s.addText(d.motif, { x: X + 0.25, y: 2.05, w: W - 0.5, h: 1.6, fontSize: 13, italic: true, color: 'EAF1F7', align: 'center', valign: 'top', margin: 0, isTextBox: true });
    s.addText('Bildmotiv (Platzhalter)', { x: X, y: 3.9, w: W, h: 0.25, fontSize: 10, color: '5B7C99', align: 'center', margin: 0, isTextBox: true });
  }
  if (d.url) {
    const title = ytTitle[ytid] || d.vlabel;
    const by = photo[d.n] ? 4.45 : (yt[d.n] ? 3.9 : 4.4);
    s.addText([{ text: '▶ Video ansehen (nächste Folie)', options: { hyperlink: { slide: idx + 1 }, bold: true, color: C.accent1, underline: { style: 'sng' }, breakLine: true } }, { text: title, options: { fontSize: 11, color: C.accent3, hyperlink: { url: d.url, tooltip: 'Auf YouTube öffnen' } } }],
      { x: X, y: by, w: W, h: 0.55, fontSize: 13, margin: 0, valign: 'top', isTextBox: true, objectName: 'Video-Link' });
    note += ' | Video: ' + d.url + ' (' + title + '). Im Original-Dokument angegeben als: ' + d.vlabel;
  }
  s.addNotes(note);
  if (d.url) {
    idx++;
    const v = pres.addSlide({ masterName: 'DARK', sectionTitle: d.part });
    const cover = 'data:image/jpeg;base64,' + require('fs').readFileSync(IMG + 'ytc_' + ytid + '.jpg').toString('base64');
    v.addMedia({ type: 'online', link: 'https://www.youtube.com/embed/' + ytid, x: 0, y: 0, w: 10, h: 5.625, cover, objectName: 'Video' });
    v.addNotes('Video zu Folie ' + d.n + ': ' + d.url + ' (' + (ytTitle[ytid] || d.vlabel) + '). Falls es nicht abspielt: Link öffnen.');
  }
}
require('fs').writeFileSync(__dirname + '/data.json', JSON.stringify({ slides, photo, yt, ytTitle, credit }, null, 1));
const OUT = process.env.EMBED ? __dirname + '/out/Humanoide_Roboter_Videofolien.pptx' : __dirname + '/out/Humanoide_Roboter_gross.pptx';
(async () => {
  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log('ok');
})();
