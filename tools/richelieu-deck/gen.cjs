const fs = require('fs');
const IMG = '' + __dirname + '/img/';
const D = JSON.parse(fs.readFileSync(__dirname + '/data.json', 'utf8'));
const uri = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(IMG + f).toString('base64');
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const px = (pt) => (pt * 100 / 72).toFixed(1) + 'px';
const out = [];
let idx = 0;
out.push(`<section class="s dark" data-i="0">
 <img class="abs" style="left:590px;top:70px;width:370px;height:390px;object-fit:cover" src="${uri('title_t.jpg')}" alt="Kardinal Richelieu">
 <div class="abs" style="left:60px;top:120px;width:500px"><h1 style="font-size:${px(38)};color:#fff">Kardinal Richelieu</h1>
 <p style="font-size:${px(24)};color:#C9A227;margin:10px 0 0">Architekt des modernen Staates</p>
 <p style="font-size:${px(14)};color:#EBDDC3;margin:30px 0 0">30 Folien · einfaches Deutsch (B1)<br>Tippen: nächste Folie, Video-Folien spielen direkt im Vortrag</p></div>
 <div class="abs cap" style="left:590px;top:465px;color:#D8C3A5">Gemälde: Philippe de Champaigne / Wikimedia Commons</div></section>`);
idx = 1;
for (const d of D.slides) {
  const myIdx = idx++;
  const ytid = D.yt[d.n] || (d.url && (d.url.match(/v=([\w-]+)/) || [])[1]);
  let right = '';
  const X = 680, W = 275;
  if (D.photo[d.n] && !D.yt[d.n]) {
    const p = D.photo[d.n];
    const ph = Math.min(360, W / d.ar), py = 50 + (360 - ph) / 2;
    right = `<img class="abs" style="left:${X}px;top:${py}px;width:${W}px;height:${ph}px;object-fit:cover" src="${uri(p + '_c.jpg')}" alt="${esc(d.motif)}">
    <div class="abs cap" style="left:${X}px;top:418px;width:${W}px">Bild: ${esc(D.credit[p])} / Wikimedia Commons</div>`;
  } else if (D.yt[d.n]) {
    const h = W * 9 / 16;
    right = `<div class="abs thumb" style="left:${X}px;top:90px;width:${W}px;height:${h}px" data-go="${myIdx + 1}"><img src="${uri('ytc_' + ytid + '.jpg')}" alt="${esc(d.motif)}"><span class="play"></span></div>`;
    right += `<div class="abs cap it" style="left:${X}px;top:${90 + h + 10}px;width:${W}px">${esc(d.motif)}</div>`;
  } else {
    right = `<div class="abs card" style="left:${X}px;top:90px;width:${W}px;height:290px"><b>${String(d.n).padStart(2, '0')}</b><i>${esc(d.motif)}</i></div>
    <div class="abs cap" style="left:${X}px;top:390px;width:${W}px;text-align:center">Bildmotiv (Platzhalter)</div>`;
  }
  let link = '';
  if (d.url) {
    const title = D.ytTitle[ytid] || d.vlabel;
    const ly = D.photo[d.n] && !D.yt[d.n] ? 465 : (D.yt[d.n] ? 390 : 440);
    link = `<div class="abs vl" style="left:${X}px;top:${ly}px;width:${W}px"><a href="#" data-go="${myIdx + 1}">▶ Video ansehen (nächste Folie)</a><br><a class="yt" target="_blank" rel="noopener" href="${esc(d.url)}">${esc(title)}</a></div>`;
  }
  out.push(`<section class="s content" data-i="${myIdx}">
 <div class="panel"></div>
 <div class="abs cat">${esc(d.cat)}</div>
 <h2 class="abs ttl">${esc(d.title)}</h2>
 <p class="abs body" style="font-size:${px(d.fs)}">${esc(d.text)}</p>
 <div class="abs cnt">${String(d.n).padStart(2, '0')} / 30</div>
 ${right}${link}</section>`);
  if (d.url) {
    const vi = idx++;
    out.push(`<section class="s dark video" data-i="${vi}" data-vid="${ytid}" data-url="${esc(d.url)}"><div class="vwrap"></div></section>`);
  }
}
const total = idx;
const html = `<!doctype html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#2A0A12"><title>Kardinal Richelieu</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%;background:#14050a;overflow:hidden;font-family:Calibri,Carlito,'Segoe UI',Roboto,Arial,sans-serif;-webkit-tap-highlight-color:transparent}
#stage{position:absolute;left:50%;top:50%;width:1000px;height:562.5px;transform-origin:0 0;background:#fff;overflow:hidden}
.s{position:absolute;inset:0;display:none;background:#fff}.s.on{display:block}
.s.dark{background:#2A0A12}
.abs{position:absolute}
.panel{position:absolute;left:0;top:0;width:645px;height:562.5px;background:#F6EFE3}
.cat{left:45px;top:30px;width:590px;font-size:16.7px;font-weight:700;letter-spacing:2px;color:#8C6A1B}
.ttl{left:45px;top:60px;width:590px;height:120px;font:700 38.9px/1.2 Cambria,'Noto Serif',Georgia,serif;color:#5A1426;overflow:hidden}
.body{left:45px;top:185px;width:590px;line-height:1.2;color:#2A0A12}
.cnt{left:45px;top:535px;font-size:13.9px;color:#7A6A5A}
.cap{font-size:13.9px;color:#7A6A5A}.it{font-size:15px;font-style:italic}
h1{font:700 52px/1.15 Cambria,'Noto Serif',Georgia,serif}
.thumb{cursor:pointer;border-radius:4px;overflow:hidden}.thumb img{width:100%;height:100%;object-fit:cover;display:block}
.play{position:absolute;left:50%;top:50%;width:70px;height:70px;margin:-35px 0 0 -35px;border:2px solid #fff;border-radius:50%;background:rgba(11,31,51,.7)}
.play:after{content:"";position:absolute;left:27px;top:19px;border-left:26px solid #fff;border-top:16px solid transparent;border-bottom:16px solid transparent}
.card{background:#5A1426;border-radius:15px;text-align:center;padding:25px;color:#F6EFE3}
.card b{display:block;font:700 75px Cambria,Georgia,serif;color:#C9A227;margin-bottom:16px}.card i{font-size:18px}
.vl{font-size:18px;line-height:1.3}.vl a{color:#C9A227;font-weight:700}.vl a.yt{color:#7A6A5A;font-weight:400;font-size:15px}
.vwrap,.vwrap iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
#bar{position:fixed;left:0;right:0;bottom:0;display:flex;gap:6px;justify-content:center;align-items:center;padding:6px calc(8px + env(safe-area-inset-right)) calc(6px + env(safe-area-inset-bottom)) 8px;background:rgba(5,13,22,.82);z-index:5;color:#eadfce;font-size:14px}
#bar button,#bar a{background:#5A1426;color:#fff;border:0;border-radius:8px;min-width:46px;height:38px;font-size:18px;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;padding:0 12px}
#bar a{font-size:14px;display:none}#bar.v a{display:inline-flex}
#pos{min-width:56px;text-align:center}
</style></head><body>
<div id="stage">
${out.join('\n')}
</div>
<div id="bar"><button id="first" aria-label="Anfang">⏮</button><button id="prev" aria-label="Zurück">◀</button><span id="pos"></span><button id="next" aria-label="Weiter">▶</button><a id="yta" target="_blank" rel="noopener">YouTube</a><button id="fs" aria-label="Vollbild">⛶</button></div>
<script>
(function(){
var secs=[].slice.call(document.querySelectorAll('.s')),N=secs.length,cur=0,stage=document.getElementById('stage'),bar=document.getElementById('bar'),pos=document.getElementById('pos'),yta=document.getElementById('yta');
function fit(){var bh=bar.offsetHeight,w=innerWidth,h=innerHeight-bh,sc=Math.min(w/1000,h/562.5);stage.style.transform='scale('+sc+')';stage.style.marginLeft=(-500*sc)+'px';stage.style.marginTop=(-281.25*sc-bh/2)+'px';stage.style.left='50%';stage.style.top='50%'}
function show(i){i=Math.max(0,Math.min(N-1,i));secs.forEach(function(s){s.classList.remove('on');var w=s.querySelector('.vwrap');if(w)w.innerHTML=''});
cur=i;var s=secs[i];s.classList.add('on');pos.textContent=(i+1)+' / '+N;
var v=s.getAttribute('data-vid');bar.className=v?'v':'';
if(v){var f=document.createElement('iframe');f.src='https://www.youtube.com/embed/'+v+'?autoplay=1&playsinline=1&rel=0';f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';f.setAttribute('allowfullscreen','');f.referrerPolicy='strict-origin-when-cross-origin';s.querySelector('.vwrap').appendChild(f);yta.href=s.getAttribute('data-url')}
try{history.replaceState(null,'','#'+(i+1))}catch(e){}}
document.addEventListener('click',function(e){var g=e.target.closest('[data-go]');if(g){e.preventDefault();show(+g.getAttribute('data-go'))}});
document.getElementById('next').onclick=function(){show(cur+1)};document.getElementById('prev').onclick=function(){show(cur-1)};document.getElementById('first').onclick=function(){show(0)};
document.getElementById('fs').onclick=function(){var d=document.documentElement;if(document.fullscreenElement){document.exitFullscreen()}else if(d.requestFullscreen){d.requestFullscreen().catch(function(){})}};
document.addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' ')show(cur+1);else if(e.key==='ArrowLeft'||e.key==='PageUp')show(cur-1);else if(e.key==='Home')show(0);else if(e.key==='End')show(N-1)});
var tx=null,ty=null;stage.addEventListener('touchstart',function(e){tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
stage.addEventListener('touchend',function(e){if(tx===null)return;var dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;tx=null;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5){show(cur+(dx<0?1:-1))}},{passive:true});
addEventListener('resize',fit);addEventListener('orientationchange',fit);
window.__back=function(){if(cur>0){show(cur-1);return true}return false};var h=parseInt((location.hash||'').slice(1),10);fit();show(isNaN(h)?0:h-1);setTimeout(fit,100)})();
</script></body></html>`;
fs.mkdirSync(__dirname + '/../../public/richelieu', { recursive: true });
fs.writeFileSync(__dirname + '/../../public/richelieu/index.html', html);
console.log('slides', total, 'bytes', html.length);
