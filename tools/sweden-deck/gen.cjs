// Web deck generator: "Schweden: Kriegsmacht und Musterstaat" -> public/sweden/index.html
// Style: Nordic granite + falu red + snow, rectangular offset frames, Trebuchet headings / Georgia body, Nordic-cross title.
const fs = require('fs');
const IMG = __dirname + '/img/';
const S = JSON.parse(fs.readFileSync(__dirname + '/slides.json', 'utf8'));
const V = JSON.parse(fs.readFileSync(__dirname + '/videos.json', 'utf8'));
const Q = require('../common/quiz.cjs');
const QUIZ = JSON.parse(fs.readFileSync(__dirname + '/quiz.json', 'utf8'));
const C = { ink: '#2C3135', red: '#A3302B', straw: '#D8B04A', snow: '#F4F5F3', slate: '#5F7C8C', stone: '#7C8387' };
const QTHEME = { bg: C.ink, fg: C.snow, accent: C.straw, btn: '#3A4147', btnHover: '#4C565E' };
const uri = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(IMG + f).toString('base64');
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const out = [], ends = {}, missing = [];
out.push(`<section class="s dark title" data-i="0">
 <div class="xv"></div><div class="xh"></div>
 <div class="tl"><div class="kick">THEMATISCHE PRÄSENTATION · GESCHICHTE</div>
 <h1>Schweden: Kriegsmacht und Musterstaat</h1>
 <p class="sub">Wie ein Volk Konsens, Transparenz und Zurückhaltung lernte</p>
 <p class="meta">30 Folien · einfaches Deutsch (B1)<br>Tippen: nächste Folie · Video-Folien spielen direkt im Vortrag</p></div>
 <div class="tframe">${fs.existsSync(IMG + 'title_t.jpg') ? `<img src="${uri('title_t.jpg')}" alt="Schweden">` : ''}</div>
 <div class="cap tcap">Bild: ${esc(S.titleCredit || '')}</div></section>`);
let idx = 1;
for (const d of S.slides) {
  const myIdx = idx++;
  const hasVid = !!d.vid;
  let right;
  if (hasVid) {
    const v = V[d.vid];
    right = `<div class="thumb" data-go="+1"><img src="${uri('ytc_' + d.vid + '.jpg')}" alt="${esc(d.motif)}"><span class="play"></span></div>
    <div class="vl"><a href="#" data-go="+1">▶ Video ansehen (nächste Folie)</a><br><a class="yt" target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=${d.vid}">${esc(v.title + ' (' + v.channel + ')')}</a></div>`;
  } else if (fs.existsSync(IMG + 'p' + d.n + '_c.jpg')) {
    const h = Math.min(420, Math.round(320 / (d.ar || 0.75))), top = Math.round(262 - h / 2);
    right = `<div class="frame" style="height:${h}px;top:${top}px"><img src="${uri('p' + d.n + '_c.jpg')}" alt="${esc(d.motif)}" style="object-position:${d.pos || 'center 25%'}"></div>
    <div class="cap" style="top:${top + h + 20}px">Bild: ${esc(d.credit)}</div>`;
  } else {
    missing.push(d.n);
    right = `<div class="frame card"><b class="${d.cat.length > 6 ? 'sm' : ''}">${esc(d.cat)}</b><i>${esc(d.motif)}</i></div><div class="cap" style="top:480px">Bildmotiv (Platzhalter)</div>`;
  }
  out.push(`<section class="s content" data-i="${myIdx}">
 <div class="redbar"></div>
 <div class="tx"><div class="cat">${esc(d.cat)}</div><h2>${esc(d.title)}</h2><div class="rule"></div><p>${esc(d.text)}</p></div>
 <div class="part">${esc(S.parts[d.p])}</div><div class="cnt">${String(d.n).padStart(2, '0')} / 30</div>
 <div class="rp">${right}</div>
 <div class="prog"><i style="width:${(d.n / 30 * 100).toFixed(1)}%"></i></div></section>`);
  if (hasVid) {
    const vi = idx++;
    out.push(`<section class="s dark video" data-i="${vi}" data-vid="${d.vid}" data-url="https://www.youtube.com/watch?v=${d.vid}"><div class="vwrap"></div></section>`);
  }
  ends[d.n] = out.length;
}
const total = out.length;
const html = `<!doctype html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="${C.ink}"><title>Schweden: Kriegsmacht und Musterstaat</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--ink:${C.ink};--red:${C.red};--straw:${C.straw};--snow:${C.snow};--stone:${C.stone};--head:'Trebuchet MS','Segoe UI','Noto Sans','Helvetica Neue',Arial,sans-serif;--body:Georgia,'Noto Serif','Times New Roman',serif}
html,body{height:100%;background:#0f1713;overflow:hidden;font-family:var(--sans);-webkit-tap-highlight-color:transparent}
#stage{position:absolute;left:50%;top:50%;width:1000px;height:562.5px;transform-origin:0 0;background:var(--snow);overflow:hidden}
.s{position:absolute;inset:0;display:none;background:var(--snow)}.s.on{display:block}
.s.dark{background:var(--ink);color:var(--snow)}
.content .rp{position:absolute;left:620px;top:0;width:380px;height:562.5px;background:var(--ink)}
.redbar{position:absolute;left:0;top:0;width:14px;height:562.5px;background:var(--red)}
.frame{position:absolute;left:30px;width:320px;overflow:hidden;background:#3a4147;box-shadow:10px 10px 0 var(--red)}
.frame img{width:100%;height:100%;object-fit:cover;display:block}
.frame.card{top:90px;height:300px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px;color:#E9E4D6}.frame.card b{font:700 56px/1.1 var(--head);color:#D8B04A}.frame.card b.sm{font-size:30px;letter-spacing:2px}.frame.card i{font-size:17px;margin-top:14px}
.rp .cap{position:absolute;left:30px;width:320px;font-size:12.5px;line-height:1.3;color:#AAB2B7}
.thumb{position:absolute;left:30px;top:150px;width:320px;height:180px;overflow:hidden;cursor:pointer;background:#000;box-shadow:10px 10px 0 var(--red)}
.thumb img{width:100%;height:100%;object-fit:cover;display:block}
.play{position:absolute;left:50%;top:50%;width:64px;height:64px;margin:-32px 0 0 -32px;border:2px solid #fff;border-radius:50%;background:rgba(44,49,53,.72)}
.play:after{content:"";position:absolute;left:24px;top:16px;border-left:23px solid #fff;border-top:15px solid transparent;border-bottom:15px solid transparent}
.vl{position:absolute;left:30px;top:370px;width:320px;font-size:16px;line-height:1.35;color:#E9E4D6}.vl a{color:#D8B04A;font-weight:700;text-decoration:none}.vl a.yt{color:#AAB2B7;font-weight:400;font-size:13px}
.tx{position:absolute;left:56px;top:46px;width:530px;height:450px;display:flex;flex-direction:column}
.cat{align-self:flex-start;font:700 13px var(--head);letter-spacing:2.5px;color:var(--red);padding-left:16px;position:relative}
.cat:before{content:"";position:absolute;left:0;top:2px;width:9px;height:9px;background:var(--red)}
.tx h2{margin-top:16px;font:700 34px/1.15 var(--head);color:var(--ink)}
.rule{width:100%;height:2px;background:#C9CED0;margin:20px 0}
.tx p{font:20px/1.5 var(--body);color:#2c3135}
.part{position:absolute;left:56px;top:515px;font:12.5px var(--head);letter-spacing:.5px;color:var(--stone)}
.cnt{position:absolute;left:520px;top:513px;font:700 15px var(--head);color:var(--red)}
.prog{position:absolute;left:0;top:0;right:0;height:5px;background:#DADFE0}.prog i{display:block;height:100%;background:var(--red)}
.title .xv{position:absolute;left:560px;top:0;width:12px;height:562.5px;background:var(--straw)}
.title .xh{position:absolute;left:0;top:420px;width:1000px;height:12px;background:var(--straw)}
.title .tl{position:absolute;left:56px;top:64px;width:480px}
.kick{font:700 12.5px var(--head);letter-spacing:3px;color:var(--straw)}
h1{margin-top:20px;font:700 44px/1.1 var(--head);color:var(--snow)}
.sub{margin-top:22px;font:italic 21px/1.35 var(--body);color:#D5DADC}
.meta{margin-top:34px;font:14px/1.5 var(--head);color:#9AA3A8}
.tframe{position:absolute;left:640px;top:60px;width:300px;height:320px;overflow:hidden;background:#3a4147;box-shadow:10px 10px 0 var(--red)}
.tframe img{width:100%;height:100%;object-fit:cover;display:block}
.tcap{position:absolute;left:640px;top:450px;width:310px;font-size:12.5px;color:#9AA3A8}
.vwrap,.vwrap iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
#bar{position:fixed;left:0;right:0;bottom:0;display:flex;gap:6px;justify-content:center;align-items:center;padding:6px calc(8px + env(safe-area-inset-right)) calc(6px + env(safe-area-inset-bottom)) 8px;background:rgba(10,18,14,.88);z-index:5;color:#E9E4D6;font-size:14px}
#bar button,#bar a{background:#4A545B;color:#fff;border:0;border-radius:8px;min-width:46px;height:38px;font-size:18px;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;padding:0 12px}
#bar .nav{min-width:92px;height:76px;font-size:36px;border-radius:14px}
#bar .corner{position:absolute;left:calc(8px + env(safe-area-inset-left));bottom:calc(6px + env(safe-area-inset-bottom));display:flex;gap:6px}
#bar a{font-size:14px;display:none;position:absolute;right:calc(8px + env(safe-area-inset-right));bottom:calc(6px + env(safe-area-inset-bottom))}#bar.v a{display:inline-flex}
#pos{min-width:56px;text-align:center}
${Q.css(QTHEME)}
.qq,.qres .big,.qh,.qb{font-family:var(--head)}
</style></head><body>
<div id="stage">
${Q.inject(out, ends, QUIZ, QTHEME).join('\n')}
</div>
<div id="bar"><div class="corner"><button id="first" aria-label="Anfang">⏮</button><button id="fs" aria-label="Vollbild">⛶</button></div><button id="prev" class="nav" aria-label="Zurück">◀</button><span id="pos"></span><button id="next" class="nav" aria-label="Weiter">▶</button><a id="yta" target="_blank" rel="noopener">YouTube</a></div>
<script>
(function(){
var secs=[].slice.call(document.querySelectorAll('.s')),N=secs.length,cur=0,stage=document.getElementById('stage'),bar=document.getElementById('bar'),pos=document.getElementById('pos'),yta=document.getElementById('yta');
function fit(){var bh=bar.offsetHeight,w=innerWidth,h=innerHeight-bh,sc=Math.min(w/1000,h/562.5);stage.style.transform='scale('+sc+')';stage.style.marginLeft=(-500*sc)+'px';stage.style.marginTop=(-281.25*sc-bh/2)+'px';stage.style.left='50%';stage.style.top='50%'}
function show(i){i=Math.max(0,Math.min(N-1,i));secs.forEach(function(s){s.classList.remove('on');var w=s.querySelector('.vwrap');if(w)w.innerHTML=''});
cur=i;var s=secs[i];s.classList.add('on');pos.textContent=(i+1)+' / '+N;if(window.__onShow)window.__onShow(s,i);
var v=s.getAttribute('data-vid');bar.className=v?'v':'';
if(v){var f=document.createElement('iframe');f.src='https://www.youtube.com/embed/'+v+'?autoplay=1&playsinline=1&rel=0';f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';f.setAttribute('allowfullscreen','');f.referrerPolicy='strict-origin-when-cross-origin';s.querySelector('.vwrap').appendChild(f);yta.href=s.getAttribute('data-url')}
try{history.replaceState(null,'','#'+(i+1))}catch(e){}}
document.addEventListener('click',function(e){var g=e.target.closest('[data-go]');if(g){e.preventDefault();var v=g.getAttribute('data-go');show(v.charAt(0)==='+'?cur+1:+v)}});
document.getElementById('next').onclick=function(){show(cur+1)};document.getElementById('prev').onclick=function(){show(cur-1)};document.getElementById('first').onclick=function(){show(0)};
document.getElementById('fs').onclick=function(){var d=document.documentElement;if(document.fullscreenElement){document.exitFullscreen()}else if(d.requestFullscreen){d.requestFullscreen().catch(function(){})}};
document.addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' ')show(cur+1);else if(e.key==='ArrowLeft'||e.key==='PageUp')show(cur-1);else if(e.key==='Home')show(0);else if(e.key==='End')show(N-1)});
var tx=null,ty=null;stage.addEventListener('touchstart',function(e){tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
stage.addEventListener('touchend',function(e){if(tx===null)return;var dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;tx=null;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5){show(cur+(dx<0?1:-1))}},{passive:true});
window.__deck={show:show,cur:function(){return cur},n:function(){return N}};
${Q.js}
addEventListener('resize',fit);addEventListener('orientationchange',fit);
window.__back=function(){if(cur>0){show(cur-1);return true}return false};var h=parseInt((location.hash||'').slice(1),10);fit();show(isNaN(h)?0:h-1);setTimeout(fit,100)})();
</script></body></html>`;
fs.mkdirSync(__dirname + '/../../public/sweden', { recursive: true });
fs.writeFileSync(__dirname + '/../../public/sweden/index.html', html);
console.log('missing images:', missing.join(',') || 'none'); console.log('sections', total, 'bytes', html.length);
