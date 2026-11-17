# crops raw_*.{jpg,png} to slide aspect (clamped), writes <key>_c.jpg and ytc_ thumbs; updates slides.json img/credit/ar
import json,glob,os,re,sys
from PIL import Image
sys.argv=['x']
exec(open('/tmp/claude-0/-home-user-tagesf-rderst-tte/cb1e23b3-7c0f-511c-917d-165085f7a611/scratchpad/r/dl.py').read().split('def get')[0].split('M={')[0].replace('from PIL import Image',''))
src=open('/tmp/claude-0/-home-user-tagesf-rderst-tte/cb1e23b3-7c0f-511c-917d-165085f7a611/scratchpad/r/dl.py').read()
ns={}; exec('M={'+src.split('M={')[1].split('def get')[0],ns); M=ns['M']
D=os.path.dirname(os.path.abspath(__file__))+'/img/'
def crop(k,ar_min=0.75,ar_max=1.5):
    f=[p for p in glob.glob(D+'raw_'+k+'.*')]
    if not f: return None
    im=Image.open(f[0]).convert('RGB'); w,h=im.size; ar=w/h; t=min(max(ar,ar_min),ar_max)
    if ar>t: nw=round(h*t); x=(w-nw)//2; im=im.crop((x,0,x+nw,h))
    elif ar<t: nh=round(w/t); y=0 if t<1 else (h-nh)//2; im=im.crop((0,y,w,y+nh))   # portraits: keep the top (faces)
    im.thumbnail((900,900)); im.save(D+k+'_c.jpg',quality=88); return round(im.size[0]/im.size[1],3)
if os.path.exists(D+'raw_title.jpg'):
    im=Image.open(D+'raw_title.jpg').convert('RGB'); w,h=im.size; t=3.7/3.9
    nw=round(h*t)
    if nw<=w: x=(w-nw)//2; im=im.crop((x,0,x+nw,h))
    else: im=im.crop((0,0,w,round(w/t)))
    im.thumbnail((800,800)); im.save(D+'title_t.jpg',quality=88)
J=json.load(open(os.path.dirname(D[:-1])+'/slides.json'))
for s in J['slides']:
    k='p%d'%s['n']
    if s.get('vid') or k not in M: continue
    ar=crop(k)
    if ar: s['img']=k; s['credit']=M[k][1]; s['ar']=ar
json.dump(J,open(os.path.dirname(D[:-1])+'/slides.json','w'),ensure_ascii=False,indent=1)
print([ (s['n'],s.get('ar')) for s in J['slides'] if s.get('img')])
