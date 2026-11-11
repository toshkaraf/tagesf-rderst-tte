require('fs').mkdirSync(__dirname + '/out', { recursive: true });
const pptxgen = require('pptxgenjs');
const fs = require('fs');
const SK = process.env.PPTX_SKILL_DIR; // directory of the pptx skill (contains scripts/apply_theme.js)
const { applyTheme } = require(SK + '/scripts/apply_theme.js');
const IMG = '' + __dirname + '/img/';
const J = JSON.parse(fs.readFileSync(__dirname + '/slides.json', 'utf8'));
const slides = J.slides.map(s => ({ ...s, part: J.parts[s.p], url: s.vid ? 'https://www.youtube.com/watch?v=' + s.vid : null, vlabel: s.vtitle }));
const yt = {}, ytTitle = {}, photo = {}, credit = {};
for (const s of slides) { if (s.vid) { yt[s.n] = s.vid; ytTitle[s.vid] = s.vtitle; } else if (s.img) { photo[s.n] = s.img; credit[s.img] = s.credit; } }
const THEME = {
  name: 'Kardinal Richelieu', headFontFace: 'Cambria', bodyFontFace: 'Calibri',
  colors: { dk1: '2A0A12', lt1: 'FFFFFF', dk2: '5A1426', lt2: 'F6EFE3', accent1: 'C9A227', accent2: '8C2F39', accent3: '7A6A5A', accent4: 'E0B84A', accent5: '5A1426', accent6: 'D8C3A5', hlink: 'B8861B', folHlink: '8C6A1B' },
};
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.title = 'Kardinal Richelieu: Architekt des modernen Staates';
const C = pres.SchemeColor;

pres.defineSlideMaster({
  title: 'CONTENT', background: { color: 'FFFFFF' },
  objects: [{ rect: { x: 0, y: 0, w: 6.45, h: 5.625, fill: { color: 'F6EFE3' } } }],
});
pres.defineSlideMaster({ title: 'DARK', background: { color: '2A0A12' } });

// title slide
{
  const s = pres.addSlide({ masterName: 'DARK' });
  s.addImage({ path: IMG + 'title_t.jpg', x: 5.9, y: 0.7, w: 3.7, h: 3.9, altText: 'Kardinal Richelieu' });
  s.addText('Kardinal Richelieu', { x: 0.6, y: 1.2, w: 5, h: 0.9, fontSize: 38, bold: true, color: C.background1, margin: 0, isTextBox: true, objectName: 'Titel' });
  s.addText('Architekt des modernen Staates', { x: 0.6, y: 2.1, w: 5, h: 0.6, fontSize: 24, color: 'C9A227', margin: 0, isTextBox: true });
  s.addText('30 Folien · einfaches Deutsch (B1) · Geschichte', { x: 0.6, y: 3.0, w: 5, h: 0.4, fontSize: 14, color: 'EBDDC3', margin: 0, isTextBox: true });
  s.addText('Gemälde: Philippe de Champaigne / Wikimedia Commons', { x: 5.9, y: 4.65, w: 3.7, h: 0.25, fontSize: 10, color: 'D8C3A5', margin: 0, isTextBox: true });
  s.addNotes('Titelfolie. Gemälde: Philippe de Champaigne (gemeinfrei), Wikimedia Commons.');
}

for (const d of slides) if (yt[d.n] && (!d.url || d.url.indexOf(yt[d.n]) < 0)) { d.url = 'https://www.youtube.com/watch?v=' + yt[d.n]; d.vlabel = ytTitle[yt[d.n]]; }
let lastPart = null;
let idx = 1;
for (const d of slides) {
  idx++;
  const opts = { masterName: 'CONTENT' };
  if (d.part !== lastPart) { pres.addSection({ title: d.part }); lastPart = d.part; }
  opts.sectionTitle = d.part;
  const s = pres.addSlide(opts);
  s.addText(d.cat, { x: 0.45, y: 0.3, w: 5.9, h: 0.3, fontSize: 12, bold: true, color: '8C6A1B', charSpacing: 2, margin: 0, isTextBox: true, objectName: 'Kategorie' });
  s.addText(d.title, { x: 0.45, y: 0.6, w: 5.9, h: 1.2, fontSize: 28, bold: true, fontFace: 'Cambria', color: C.text2, valign: 'top', margin: 0, isTextBox: true, objectName: 'Titel', fit: 'shrink' });
  let fs = 32;
  while (fs > 16 && Math.ceil(d.text.length * fs * 0.56 / 72 / 5.9) * fs * 1.2 / 72 > 3.3) fs--;
  console.log(d.n, fs); d.fs = fs;
  s.addText(d.text, { x: 0.45, y: 1.85, w: 5.9, h: 3.45, fontSize: fs, color: C.text1, valign: 'top', margin: 0, isTextBox: true, objectName: 'Text' });
  s.addText(String(d.n).padStart(2, '0') + ' / 30', { x: 0.45, y: 5.35, w: 1.5, h: 0.2, fontSize: 10, color: '7A6A5A', margin: 0, isTextBox: true });

  let ytid = yt[d.n] || (d.url && (d.url.match(/v=([\w-]+)/) || [])[1]);
  let note = 'Bildmotiv: ' + d.motif;
  const X = 6.8, W = 2.75;
  if (photo[d.n] && !yt[d.n]) {
    const p = photo[d.n];
    const ph = Math.min(3.6, W / d.ar), py = 0.5 + (3.6 - ph) / 2;
    s.addImage({ path: IMG + p + '_c.jpg', x: X, y: py, w: W, h: ph, altText: d.motif, objectName: 'Foto' });
    s.addText('Bild: ' + credit[p] + ' / Wikimedia Commons', { x: X, y: py + ph + 0.08, w: W, h: 0.4, valign: 'top', fontSize: 10, color: '7A6A5A', margin: 0, isTextBox: true });
    note += ' | Bild: ' + credit[p] + ', Wikimedia Commons (Lizenz/Urheber vor Veröffentlichung prüfen).';
  } else if (yt[d.n]) {
    const h = W * 9 / 16;
    if (false) {
      const cover = 'data:image/jpeg;base64,' + require('fs').readFileSync(IMG + 'ytc_' + yt[d.n] + '.jpg').toString('base64');
      s.addMedia({ type: 'online', link: 'https://www.youtube.com/embed/' + yt[d.n], x: X, y: 0.9, w: W, h, cover, objectName: 'Video' });
    } else {
      s.addImage({ path: IMG + 'ytc_' + yt[d.n] + '.jpg', x: X, y: 0.9, w: W, h, altText: d.motif, hyperlink: { slide: idx + 1, tooltip: 'Video auf der nächsten Folie' }, objectName: 'Video-Vorschau' });
      s.addShape(pres.ShapeType.ellipse, { x: X + W / 2 - 0.35, y: 0.9 + h / 2 - 0.35, w: 0.7, h: 0.7, fill: { color: '2A0A12', transparency: 25 }, line: { color: 'FFFFFF', width: 2 }, objectName: 'Play-Kreis', hyperlink: { slide: idx + 1 } });
      s.addShape(pres.ShapeType.triangle, { x: X + W / 2 - 0.1, y: 0.9 + h / 2 - 0.16, w: 0.28, h: 0.32, rotate: 90, fill: { color: 'FFFFFF' }, line: { color: 'FFFFFF', width: 0 }, objectName: 'Play-Dreieck', hyperlink: { slide: idx + 1 } });

    }
    if (false) s.addText(d.motif, { x: X, y: 0.9 + h + 0.1, w: W, h: 0.6, fontSize: 11, italic: true, color: '7A6A5A', margin: 0, valign: 'top', isTextBox: true });
  } else {
    s.addShape(pres.ShapeType.roundRect, { x: X, y: 0.9, w: W, h: 2.9, rectRadius: 0.15, fill: { color: '5A1426' }, line: { color: '5A1426', width: 0 }, objectName: 'Bildplatzhalter' });
    s.addText(String(d.n).padStart(2, '0'), { x: X, y: 1.05, w: W, h: 0.9, fontSize: 54, bold: true, fontFace: 'Cambria', color: 'C9A227', align: 'center', margin: 0, isTextBox: true });
    s.addText(d.motif, { x: X + 0.25, y: 2.05, w: W - 0.5, h: 1.6, fontSize: 13, italic: true, color: 'F6EFE3', align: 'center', valign: 'top', margin: 0, isTextBox: true });
    s.addText('Bildmotiv (Platzhalter)', { x: X, y: 3.9, w: W, h: 0.25, fontSize: 10, color: '7A6A5A', align: 'center', margin: 0, isTextBox: true });
  }
  if (d.url) {
    const title = ytTitle[ytid] || d.vlabel;
    const by = photo[d.n] ? 4.65 : (yt[d.n] ? 3.9 : 4.4);
    s.addText([{ text: '▶ Video ansehen (nächste Folie)', options: { hyperlink: { slide: idx + 1 }, bold: true, color: C.accent1, underline: { style: 'sng' }, breakLine: true } }, { text: title, options: { fontSize: 11, color: C.accent3, hyperlink: { url: d.url, tooltip: 'Auf YouTube öffnen' } } }],
      { x: X, y: by, w: W, h: 0.55, fontSize: 13, margin: 0, valign: 'top', isTextBox: true, objectName: 'Video-Link' });
    note += ' | Video: ' + d.url + ' (' + title + '). ';
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
const OUT = process.env.EMBED ? __dirname + '/out/Richelieu_Videofolien.pptx' : __dirname + '/out/Richelieu_gross.pptx';
(async () => {
  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log('ok');
})();
