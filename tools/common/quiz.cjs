// Reusable quiz module for the web/APK decks (see QUIZ_README.md).
// Usage in a deck's gen.cjs:
//   const Q = require('../common/quiz.cjs');
//   ... while building sections push to `out` and set ends[slideNo] = out.length after the slide's last section ...
//   const all = Q.inject(out, ends, JSON.parse(fs.readFileSync(__dirname + '/quiz.json', 'utf8')), THEME);
//   html: <style>${Q.css(THEME)}</style> ... <script> core ...; ${Q.js} </script>   (core must expose window.__deck and call window.__onShow)
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// theme: { bg, fg, accent, btn, btnHover, ok, bad }
exports.css = (t) => {
  t = Object.assign({ ok: '#2e9e5b', bad: '#c0392b' }, t);
  return `
.s.quiz,.s.final{background:${t.bg};color:${t.fg}}
.qh{position:absolute;left:60px;top:34px;font-size:17px;font-weight:700;letter-spacing:2px;color:${t.accent}}
.qq{position:absolute;left:60px;top:80px;width:880px;font:700 36px/1.25 Cambria,'Noto Serif',Georgia,serif}
.qa{position:absolute;left:60px;top:250px;width:880px;display:grid;grid-template-columns:1fr 1fr;gap:18px}
.qb{min-height:96px;padding:12px 18px;font:600 21px/1.25 Calibri,Carlito,'Segoe UI',Roboto,Arial,sans-serif;text-align:left;color:${t.fg};background:${t.btn};border:2px solid ${t.accent};border-radius:12px;cursor:pointer;transition:background .15s}
.qb:hover{background:${t.btnHover}}
.qb.ok{background:${t.ok};border-color:${t.ok};color:#fff}
.qb.bad{background:${t.bad};border-color:${t.bad};color:#fff}
.qb:disabled{cursor:default}
.qres{position:absolute;left:0;right:0;top:90px;text-align:center}
.qres .big{font:700 110px Cambria,Georgia,serif;color:${t.accent}}
.qres p{font-size:26px;margin-top:6px}
.qbar{margin:26px auto 0;width:560px;height:18px;border-radius:9px;background:rgba(255,255,255,.18);overflow:hidden}
.qbar i{display:block;height:100%;background:${t.ok}}
.qres .qb{display:inline-block;min-height:0;margin:30px 10px 0;padding:12px 26px;text-align:center}
`;
};
function qsection(q, i, n, label) {
  const html = q.a.map((a, k) => `<button class="qb" data-k="${k}">${esc(a)}</button>`);
  // deterministic placement of the correct answer: rotates through positions (q.a[0] is always the correct one in quiz.json)
  const pos = i % 4;
  const order = q.a.map((_, k) => k).filter((k) => k !== 0);
  order.splice(pos, 0, 0);
  return `<section class="s quiz" data-correct="${order.indexOf(0)}"><div class="qh">${esc(label)} · FRAGE ${i + 1} / ${n}</div><h2 class="qq">${esc(q.q)}</h2><div class="qa">${order.map((k) => `<button class="qb" data-k="${k}">${esc(q.a[k])}</button>`).join('')}</div></section>`;
}
exports.inject = (out, ends, quiz, theme) => {
  const byAfter = {};
  for (const g of quiz.groups) byAfter[g.after] = g;
  const insertAt = {}; // out index (exclusive end) -> html[]
  for (const g of quiz.groups) {
    const at = ends[g.after];
    if (at === undefined) throw new Error('quiz: no slide ' + g.after);
    insertAt[at] = g.q.map((q, i) => qsection(q, i, g.q.length, 'QUIZ'));
  }
  const res = [];
  out.forEach((h, i) => {
    res.push(h);
    if (insertAt[i + 1]) res.push(...insertAt[i + 1]);
  });
  const all = quiz.groups.flatMap((g) => g.q);
  res.push(`<section class="s final" data-total="${all.length}"><div class="qh" id="fh"></div><h2 class="qq" id="fq"></h2><div class="qa" id="fa"></div><div class="qres" id="fr" style="display:none"></div><script type="application/json" id="fdata">${JSON.stringify(all).replace(/</g, '\\u003c')}</script></section>`);
  return res;
};
exports.js = `
(function(){
var D=window.__deck,T=null,ac=null;
function clr(){if(T){clearTimeout(T);T=null}}
function snd(ok){try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();if(ac.state==='suspended')ac.resume();var t=ac.currentTime,ns=ok?[523.25,659.25,783.99,1046.5]:[196,147];
ns.forEach(function(f,i){var o=ac.createOscillator(),g=ac.createGain(),s=t+i*(ok?0.11:0.18);o.type=ok?'sine':'triangle';o.frequency.value=f;g.gain.setValueAtTime(0.0001,s);g.gain.exponentialRampToValueAtTime(0.25,s+0.02);g.gain.exponentialRampToValueAtTime(0.0001,s+(ok?0.4:0.32));o.connect(g);g.connect(ac.destination);o.start(s);o.stop(s+0.45)})}catch(e){}}
function mark(btns,pick,right){btns.forEach(function(b){b.disabled=true});right.classList.add('ok');if(pick!==right)pick.classList.add('bad')}
function reset(sec){[].forEach.call(sec.querySelectorAll('.qb'),function(b){b.disabled=false;b.classList.remove('ok','bad')})}
// per-group quiz questions
document.addEventListener('click',function(e){var b=e.target.closest('.s.quiz .qb');if(!b||b.disabled)return;var sec=b.closest('.s.quiz'),btns=[].slice.call(sec.querySelectorAll('.qb')),right=btns[+sec.getAttribute('data-correct')];
mark(btns,b,right);snd(b===right);clr();var at=D.cur();T=setTimeout(function(){T=null;if(D.cur()===at)D.show(at+1)},2000)});
// final test
var Q=null,order,i,score,fsec=document.querySelector('.s.final');
function shuffle(a){for(var k=a.length-1;k>0;k--){var j=Math.floor(Math.random()*(k+1)),t=a[k];a[k]=a[j];a[j]=t}return a}
function start(){if(!Q)Q=JSON.parse(document.getElementById('fdata').textContent);order=shuffle(Q.map(function(_,k){return k}));i=0;score=0;document.getElementById('fr').style.display='none';['fq','fa'].forEach(function(id){document.getElementById(id).style.display=''});render()}
function render(){var q=Q[order[i]],opts=shuffle(q.a.map(function(t,k){return{t:t,ok:k===0}})),fa=document.getElementById('fa');
document.getElementById('fh').textContent='ABSCHLUSSTEST · FRAGE '+(i+1)+' / '+Q.length;document.getElementById('fq').textContent=q.q;fa.innerHTML='';
opts.forEach(function(o){var b=document.createElement('button');b.className='qb';b.textContent=o.t;b.setAttribute('data-ok',o.ok?'1':'0');b.onclick=function(){pickF(b)};fa.appendChild(b)})}
function pickF(b){var btns=[].slice.call(document.querySelectorAll('#fa .qb')),right=btns.filter(function(x){return x.getAttribute('data-ok')==='1'})[0];if(btns[0].disabled)return;
mark(btns,b,right);var ok=b===right;snd(ok);if(ok)score++;clr();T=setTimeout(function(){T=null;if(D.cur()!==D.n()-1)return;i++;if(i<Q.length)render();else result()},2000)}
function result(){var p=Math.round(score*100/Q.length),r=document.getElementById('fr');['fq','fa'].forEach(function(id){document.getElementById(id).style.display='none'});document.getElementById('fh').textContent='ABSCHLUSSTEST · ERGEBNIS';
r.style.display='block';r.innerHTML='<div class="big">'+p+' %</div><p>'+score+' von '+Q.length+' Fragen richtig</p><div class="qbar"><i style="width:'+p+'%"></i></div><button class="qb" id="again">Test wiederholen</button><button class="qb" id="home">Zur ersten Folie</button>';
document.getElementById('again').onclick=start;document.getElementById('home').onclick=function(){D.show(0)}}
window.__onShow=function(s){clr();if(s.classList.contains('quiz'))reset(s);else if(s.classList.contains('final'))start()};
})();
`;
