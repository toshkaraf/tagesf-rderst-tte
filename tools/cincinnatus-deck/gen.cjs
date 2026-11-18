// Web deck generator: "Macht, die man zurückgibt" -> public/cincinnatus/index.html
// Style: Roman marble + laurel green + terracotta, arch-shaped image frames, Palatino/Segoe type.
const fs = require('fs');
const IMG = __dirname + '/img/';
const S = JSON.parse(fs.readFileSync(__dirname + '/slides.json', 'utf8'));
const V = JSON.parse(fs.readFileSync(__dirname + '/videos.json', 'utf8'));
const Q = require('../common/quiz.cjs');
const QUIZ = JSON.parse(fs.readFileSync(__dirname + '/quiz.json', 'utf8'));
const C = { ink: '#1E2B24', laurel: '#3F5B3A', terra: '#B4532A', terraLight: '#E08B5B', marble: '#F3F0E8', stone: '#7B7767' };
const QTHEME = { bg: C.ink, fg: C.marble, accent: C.terraLight, btn: '#2F4A3A', btnHover: '#3F6049' };
const uri = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(IMG + f).toString('base64');
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const out = [], ends = {}, missing = [];
out.push(`<section class="s dark title" data-i="0">
 <div class="tl"><div class="kick">THEMATISCHE PRÄSENTATION · GESCHICHTE</div>
 <h1>Macht, die man zurückgibt</h1><div class="rule"></div>
 <p class="sub">Cincinnatus, Washington, Garibaldi, Mandela</p>
 <p class="meta">30 Folien · einfaches Deutsch (B1)<br>Tippen: nächste Folie · Video-Folien spielen direkt im Vortrag</p></div>
 <div class="arch big">${fs.existsSync(IMG + 'title_t.jpg') ? `<img src="${uri('title_t.jpg')}" alt="Cincinnatus">` : ''}</div>
 <div class="cap tcap">Bild: ${esc(S.titleCredit || '')} / Wikimedia Commons</div></section>`);
let idx = 1;
for (const d of S.slides) {
  const myIdx = idx++;
  const hasVid = !!d.vid;
  let left;
  if (hasVid) {
    const v = V[d.vid];
    left = `<div class="thumb" data-go="+1"><img src="${uri('ytc_' + d.vid + '.jpg')}" alt="${esc(d.motif)}"><span class="play"></span></div>
    <div class="vl"><a href="#" data-go="+1">▶ Video ansehen (nächste Folie)</a><br><a class="yt" target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=${d.vid}">${esc(v.title + ' (' + v.channel + ')')}</a></div>`;
  } else {
    if (fs.existsSync(IMG + 'p' + d.n + '_c.jpg')) left = `<div class="arch"><img src="${uri('p' + d.n + '_c.jpg')}" alt="${esc(d.motif)}" style="object-position:${d.pos || 'center 25%'}"></div>
    <div class="cap">Bild: ${esc(d.credit)} / Wikimedia Commons</div>`;
    else { missing.push(d.n); left = `<div class="arch card"><b>${String(d.n).padStart(2, '0')}</b><i>${esc(d.motif)}</i></div><div class="cap">Bildmotiv (Platzhalter)</div>`; }
  }
  out.push(`<section class="s content" data-i="${myIdx}">
 <div class="lp">${left}</div>
 <div class="rp"><div class="cat">${esc(d.cat)}</div><h2>${esc(d.title)}</h2><div class="rule"></div><p>${esc(d.text)}</p></div>
 <div class="part">${esc(S.parts[d.p])}</div><div class="cnt">${String(d.n).padStart(2, '0')} / 30</div>
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
<meta name="theme-color" content="${C.ink}"><title>Macht, die man zurückgibt</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--ink:${C.ink};--laurel:${C.laurel};--terra:${C.terra};--marble:${C.marble};--stone:${C.stone};--serif:'Palatino Linotype','Book Antiqua',Palatino,'URW Palladio L','Noto Serif',Georgia,serif;--sans:'Segoe UI','Noto Sans','Helvetica Neue',Roboto,Arial,sans-serif}
html,body{height:100%;background:#0f1713;overflow:hidden;font-family:var(--sans);-webkit-tap-highlight-color:transparent}
#stage{position:absolute;left:50%;top:50%;width:1000px;height:562.5px;transform-origin:0 0;background:var(--marble);overflow:hidden}
.s{position:absolute;inset:0;display:none;background:var(--marble)}.s.on{display:block}
.s.dark{background:var(--ink);color:var(--marble)}
.content .lp{position:absolute;left:0;top:0;width:390px;height:562.5px;background:var(--ink)}
.arch{position:absolute;left:45px;top:55px;width:300px;height:400px;border-radius:150px 150px 6px 6px;overflow:hidden;border:3px solid var(--terra);background:#2a3a31}
.arch.card{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px;color:#E9E4D6}.arch.card b{font:700 64px var(--serif);color:#E08B5B}.arch.card i{font-size:17px;margin-top:14px}
.arch img{width:100%;height:100%;object-fit:cover;display:block}
.lp .cap{position:absolute;left:45px;top:468px;width:300px;font-size:12.5px;line-height:1.3;color:#B9B5A4}
.thumb{position:absolute;left:45px;top:150px;width:300px;height:169px;border-radius:6px;overflow:hidden;border:3px solid var(--terra);cursor:pointer;background:#000}
.thumb img{width:100%;height:100%;object-fit:cover;display:block}
.play{position:absolute;left:50%;top:50%;width:64px;height:64px;margin:-32px 0 0 -32px;border:2px solid #fff;border-radius:50%;background:rgba(30,43,36,.72)}
.play:after{content:"";position:absolute;left:24px;top:16px;border-left:23px solid #fff;border-top:15px solid transparent;border-bottom:15px solid transparent}
.vl{position:absolute;left:45px;top:340px;width:300px;font-size:16px;line-height:1.35;color:#E9E4D6}.vl a{color:var(--terraLight,#E08B5B);font-weight:700;text-decoration:none}.vl a.yt{color:#B9B5A4;font-weight:400;font-size:13px}
.rp{position:absolute;left:435px;top:48px;width:520px;height:440px;display:flex;flex-direction:column}
.cat{align-self:flex-start;background:var(--terra);color:#fff;font-size:13px;font-weight:700;letter-spacing:2px;padding:5px 12px;border-radius:3px}
.rp h2{margin-top:18px;font:700 34px/1.16 var(--serif);color:var(--ink)}
.rule{width:70px;height:4px;background:var(--laurel);margin:18px 0}
.rp p{font-size:19.5px;line-height:1.5;color:#26332c}
.part{position:absolute;left:435px;top:515px;font-size:12.5px;letter-spacing:.5px;color:var(--stone)}
.cnt{position:absolute;right:45px;top:513px;font:700 15px var(--serif);color:var(--laurel)}
.prog{position:absolute;left:390px;right:0;bottom:0;height:6px;background:#DDD7C6}.prog i{display:block;height:100%;background:var(--terra)}
.title .tl{position:absolute;left:60px;top:105px;width:520px}
.kick{font-size:13px;letter-spacing:3px;color:#E08B5B;font-weight:700}
h1{margin-top:20px;font:700 60px/1.08 var(--serif);color:var(--marble)}
.title .rule{background:var(--terra);width:110px;margin:26px 0}
.sub{font:italic 24px/1.3 var(--serif);color:#D8D2BE}
.meta{margin-top:34px;font-size:14px;line-height:1.5;color:#9FA894}
.arch.big{left:640px;top:60px;width:300px;height:400px;border-color:#E08B5B}
.tcap{position:absolute;left:640px;top:472px;width:300px;font-size:12.5px;color:#9FA894}
.vwrap,.vwrap iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
#bar{position:fixed;left:0;right:0;bottom:0;display:flex;gap:6px;justify-content:center;align-items:center;padding:6px calc(8px + env(safe-area-inset-right)) calc(6px + env(safe-area-inset-bottom)) 8px;background:rgba(10,18,14,.88);z-index:5;color:#E9E4D6;font-size:14px}
#bar button,#bar a{background:${C.laurel};color:#fff;border:0;border-radius:8px;min-width:46px;height:38px;font-size:18px;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;padding:0 12px}
#bar a{font-size:14px;display:none}#bar.v a{display:inline-flex}
#pos{min-width:56px;text-align:center}
${Q.css(QTHEME)}
.qq,.qres .big,.qh{font-family:var(--serif)}.qh{font-family:var(--sans)}.qb{font-family:var(--sans)}
</style></head><body>
<div id="stage">
${Q.inject(out, ends, QUIZ, QTHEME).join('\n')}
</div>
<div id="bar"><button id="first" aria-label="Anfang">⏮</button><button id="prev" aria-label="Zurück">◀</button><span id="pos"></span><button id="next" aria-label="Weiter">▶</button><a id="yta" target="_blank" rel="noopener">YouTube</a><button id="fs" aria-label="Vollbild">⛶</button></div>
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
fs.mkdirSync(__dirname + '/../../public/cincinnatus', { recursive: true });
fs.writeFileSync(__dirname + '/../../public/cincinnatus/index.html', html);
console.log('missing images:', missing.join(',') || 'none'); console.log('sections', total, 'bytes', html.length);
