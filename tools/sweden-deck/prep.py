# Crops img/raw_* (Wikimedia Commons thumbnails) into 3:4 arch frames (img/p<N>_c.jpg, title_t.jpg) and writes credits into slides.json.
# Portraits keep the top (faces); focus per slide can be set in FOCUS as (fx, fy) in 0..1.
import json, glob, os
from PIL import Image
D = os.path.dirname(os.path.abspath(__file__)) + '/'
IMG = D + 'img/'
AR = 0.75
CREDIT = {
 "p2": "Sebastian Dadler (Medaille, 1632) / The Met, Open Access",
 "p3": "Carl Svante Hallbeck (Bild von 1877, gemeinfrei) / Wikimedia Commons",
 "p4": "Bengt Oberger (Foto, CC BY-SA 4.0) / Wikimedia Commons",
 "p6": "Unbekannt (Druck, 1810) / Library of Congress",
 "p7": "Unbekannt (Stereofoto, 1905) / Library of Congress",
 "p8": "Anders Montan (Gemälde, gemeinfrei) / Wikimedia Commons",
 "p10": "Svenska kyrkan (Kirchenbuch, gemeinfrei) / Wikimedia Commons",
 "p11": "Carl Fredrik Brander (Gemälde, gemeinfrei) / Wikimedia Commons",
 "p12": "Frihetstidens utskott (Druck, 18. Jh., gemeinfrei) / Wikimedia Commons",
 "p13": "Unbekannt (Foto, gemeinfrei) / Wikimedia Commons",
 "p14": "Foto, 1942 / Library of Congress",
 "p16": "Elias Martin (Zeichnung, 18. Jh.) / The Met, Open Access",
 "p17": "Unbekannt (Stereofoto, 1905) / Library of Congress",
 "p18": "Jan de Meyere (Foto 1935, gemeinfrei) / Wikimedia Commons",
 "p19": "W. G. Collingwood (Gemälde, gemeinfrei) / Wikimedia Commons",
 "p21": "Unbekannt (Stereofoto, 1901) / Library of Congress",
 "p22": "Oiving (Foto, CC BY-SA 3.0) / Wikimedia Commons",
 "p23": "Vilhelm Hammershøi (Gemälde, gemeinfrei) / Wikimedia Commons",
 "p24": "Unbekannt (Foto, 1905) / Library of Congress",
 "p25": "Edvard Munch (Gemälde, gemeinfrei) / Wikimedia Commons",
 "p27": "Foto, 1942 / Library of Congress",
 "p28": "Frankie Fouganthin (Foto, CC BY-SA 4.0) / Wikimedia Commons",
 "p30": "Foto, 2021 / Library of Congress"
}
TITLE_CREDIT = 'Unbekannt (Stereofoto, 1903) / Library of Congress'
FOCUS = {}
LEFT_HALF = {'p24', 'p7', 'p17', 'p21', 'title'}  # stereograph: use only the left frame  # e.g. {'p6': (0.3, 0.5)}
def crop(src, dst, fx=0.5, fy=None, lo=AR, hi=AR):
    # clamps the aspect ratio into [lo, hi]; the deck shows tall images in an arch, wide ones in a landscape frame
    im = Image.open(src).convert('RGB'); w, h = im.size; ar = w / h
    t = min(max(ar, lo), hi)
    if ar > t:
        nw = round(h * t); x = round((w - nw) * fx); im = im.crop((x, 0, x + nw, h))
    elif ar < t:
        nh = round(w / t); fy = 0.12 if fy is None else fy; y = round((h - nh) * fy); im = im.crop((0, y, w, y + nh))
    im.thumbnail((900, 1200)); im.save(dst, quality=88); return round(im.size[0] / im.size[1], 3)
J = json.load(open(D + 'slides.json'))
for s in J['slides']:
    k = 'p%d' % s['n']
    f = glob.glob(IMG + 'raw_' + k + '.*')
    if s.get('vid') or not f: continue
    fx, fy = FOCUS.get(k, (0.5, None))
    if k in LEFT_HALF:
        _im = Image.open(f[0]); _im.crop((round(_im.size[0] * 0.07), round(_im.size[1] * 0.07), round(_im.size[0] * 0.49), round(_im.size[1] * 0.95))).save(IMG + '_half.jpg'); f = [IMG + '_half.jpg']
    s['ar'] = crop(f[0], IMG + k + '_c.jpg', fx, fy, 0.75, 1.6); s['credit'] = CREDIT[k]
J['titleCredit'] = TITLE_CREDIT
f = glob.glob(IMG + 'raw_title.*')
if f and 'title' in LEFT_HALF:
    _im = Image.open(f[0]); _im.crop((round(_im.size[0] * 0.07), round(_im.size[1] * 0.07), round(_im.size[0] * 0.49), round(_im.size[1] * 0.95))).save(IMG + '_half.jpg'); f = [IMG + '_half.jpg']
if f: crop(f[0], IMG + 'title_t.jpg', *FOCUS.get('title', (0.5, None)))
json.dump(J, open(D + 'slides.json', 'w'), ensure_ascii=False, indent=1)
print('done', len(glob.glob(IMG + 'p*_c.jpg')))
