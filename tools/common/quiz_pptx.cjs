// PowerPoint quiz builder (see QUIZ_README.md). Branching via hidden feedback slides, auto-advance (advTm) and autoplay audio are
// added by post(); everything else is plain pptxgenjs.
//   per question: 1 visible question slide + 4 hidden feedback slides (one per answer button). Buttons link to the feedback slides,
//   feedback slides auto-advance after 2 s to the next VISIBLE slide (= next question / next content slide).
const path = require('path');
const COL = { ok: '2E9E5B', bad: 'C0392B' };
exports.sounds = { ok: path.join(__dirname, 'ok.wav'), bad: path.join(__dirname, 'bad.wav') };
exports.feedback = []; // { no, ok } filled while building; consumed by post()

// deterministic order: q.a[0] is correct; it is placed at position i % 4
function order(q, i) { const o = q.a.map((_, k) => k).filter((k) => k !== 0); o.splice(i % 4, 0, 0); return o; }

// adds the question blocks; startNo = number of the first slide added; returns number of slides added
exports.addQuestions = (pres, startNo, questions, o) => {
  const T = o.theme; let no = startNo;
  const pos = [[0.6, 2.75], [5.1, 2.75], [0.6, 4.0], [5.1, 4.0]];
  questions.forEach((q, qi) => {
    const ord = order(q, qi); const base = no; // question slide number; feedback slides base+1..base+4 (button k -> base+1+k)
    const draw = (s, fb) => {
      s.addText(`${o.label} · FRAGE ${qi + 1} / ${questions.length}`, { x: 0.6, y: 0.3, w: 8.8, h: 0.3, fontSize: 13, bold: true, color: T.accent, charSpacing: 2, margin: 0, isTextBox: true });
      s.addText(q.q, { x: 0.6, y: 0.8, w: 8.8, h: 1.7, fontSize: 28, bold: true, fontFace: 'Cambria', color: T.fg, valign: 'top', margin: 0, isTextBox: true, fit: 'shrink' });
      ord.forEach((ai, k) => {
        let fill = T.btn, line = T.accent;
        if (fb) { if (ai === 0) { fill = COL.ok; line = COL.ok; } else if (k === fb.k) { fill = COL.bad; line = COL.bad; } }
        const opts = { x: pos[k][0], y: pos[k][1], w: 4.3, h: 1.0, rectRadius: 0.12, fill: { color: fill }, line: { color: line, width: 2 }, objectName: 'Antwort ' + (k + 1) };
        s.addShape(pres.ShapeType.roundRect, opts);
        s.addText(q.a[ai], { x: pos[k][0] + 0.15, y: pos[k][1], w: 4.0, h: 1.0, fontSize: 16, bold: true, color: 'FFFFFF', valign: 'middle', margin: 0, isTextBox: true, fit: 'shrink' });
        // invisible click layer on top (a fully transparent FILLED shape is still clickable; text boxes with links would be underlined)
        if (!fb) s.addShape(pres.ShapeType.roundRect, { x: pos[k][0], y: pos[k][1], w: 4.3, h: 1.0, rectRadius: 0.12, fill: { color: 'FFFFFF', transparency: 100 }, line: { color: 'FFFFFF', transparency: 100, width: 0 }, hyperlink: { slide: base + 1 + k, tooltip: 'Antwort wählen' }, objectName: 'Klick ' + (k + 1) });
      });
    };
    const sq = pres.addSlide({ masterName: o.masterName, sectionTitle: o.section }); draw(sq, null); sq.addNotes('Richtige Antwort: ' + q.a[0]); no++;
    ord.forEach((ai, k) => {
      const f = pres.addSlide({ masterName: o.masterName, sectionTitle: o.section }); f.hidden = true; draw(f, { k });
      f.addMedia({ type: 'audio', path: ai === 0 ? exports.sounds.ok : exports.sounds.bad, x: 10.3, y: 5.2, w: 0.3, h: 0.3 });
      exports.feedback.push({ no, ok: ai === 0 }); no++;
    });
  });
  return no - startNo;
};

// post-process the saved pptx: audio autoplay + 2 s auto-advance on feedback slides
exports.post = async (file) => {
  const JSZip = require('jszip'); const fs = require('fs');
  const zip = await JSZip.loadAsync(fs.readFileSync(file));
  for (const f of exports.feedback) {
    const name = `ppt/slides/slide${f.no}.xml`; let x = await zip.file(name).async('string');
    const sp = (x.match(/<p:cNvPr id="(\d+)" name="Media/) || [])[1]; if (!sp) throw new Error('no media on slide ' + f.no);
    x = x.replace('<a:videoFile', '<a:audioFile');
    const timing = '<p:timing><p:tnLst><p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"><p:childTnLst><p:seq concurrent="1" nextAc="seek"><p:cTn id="2" dur="indefinite" nodeType="mainSeq"><p:childTnLst>' +
      '<p:par><p:cTn id="3" fill="hold"><p:stCondLst><p:cond delay="indefinite"/><p:cond evt="onBegin" delay="0"><p:tn val="2"/></p:cond></p:stCondLst><p:childTnLst>' +
      '<p:par><p:cTn id="4" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>' +
      `<p:par><p:cTn id="5" presetID="1" presetClass="mediacall" presetSubtype="0" fill="hold" nodeType="afterEffect"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst><p:cmd type="call" cmd="playFrom(0.0)"><p:cBhvr><p:cTn id="6" dur="1" fill="hold"/><p:tgtEl><p:spTgt spid="${sp}"/></p:tgtEl></p:cBhvr></p:cmd></p:childTnLst></p:cTn></p:par>` +
      '</p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn>' +
      '<p:prevCondLst><p:cond evt="onPrev" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:prevCondLst><p:nextCondLst><p:cond evt="onNext" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:nextCondLst></p:seq>' +
      `<p:audio><p:cMediaNode vol="80000"><p:cTn id="7" fill="hold" display="0"><p:stCondLst><p:cond delay="indefinite"/></p:stCondLst><p:endCondLst><p:cond evt="onStopAudio" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:endCondLst></p:cTn><p:tgtEl><p:spTgt spid="${sp}"/></p:tgtEl></p:cMediaNode></p:audio>` +
      '</p:childTnLst></p:cTn></p:par></p:tnLst></p:timing>';
    x = x.replace('</p:clrMapOvr>', '</p:clrMapOvr><p:transition advTm="2000"/>' + timing);
    zip.file(name, x);
  }
  fs.writeFileSync(file, await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
};
