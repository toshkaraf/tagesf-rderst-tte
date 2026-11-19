# Crops img/raw_* (Wikimedia Commons thumbnails) into 3:4 arch frames (img/p<N>_c.jpg, title_t.jpg) and writes credits into slides.json.
# Portraits keep the top (faces); focus per slide can be set in FOCUS as (fx, fy) in 0..1.
import json, glob, os
from PIL import Image
D = os.path.dirname(os.path.abspath(__file__)) + '/'
IMG = D + 'img/'
AR = 0.75
CREDIT = {
 "p2": "Rudy Hertzog (Statue von Foyatier, CC BY-SA 4.0) / Wikimedia Commons",
 "p3": "Cesare Maccari (Gemälde, gemeinfrei) / Wikimedia Commons",
 "p4": "Filarete (Bronzeplakette, 15. Jh.) / The Met, Open Access",
 "p6": "Augustin Pajou (Zeichnung) / The Met, Open Access",
 "p7": "Römische Togastatue, 1. Jh. n. Chr. / The Met, Open Access",
 "p8": "Gilbert Stuart (Gemälde, ab 1795) / The Met, Open Access",
 "p9": "John Ward Dunsmore (Gemälde, gemeinfrei) / Wikimedia Commons",
 "p11": "Unbekannt (Druck, 1850–1880) / Library of Congress",
 "p12": "Unbekannt (Druck, 1899) / Library of Congress",
 "p13": "Unbekannt (Foto, 1908–1948) / Library of Congress",
 "p14": "Unbekannt (Foto, um 1861) / Library of Congress",
 "p16": "Juan Llorens (Bilderbogen, 1862) / The Met, Open Access",
 "p17": "Unbekannt (Grafik, um 1860) / Library of Congress",
 "p19": "Unbekannt (Foto, 1869) / Library of Congress",
 "p20": "Unbekannt (Foto, gemeinfrei) / Wikimedia Commons",
 "p21": "Plakat, 1965–1980 / Library of Congress",
 "p22": "World Economic Forum (Foto 1992, CC BY-SA 2.0) / Wikimedia Commons",
 "p24": "Unbekannt (Foto, 1994) / Library of Congress",
 "p25": "Unbekannt (Foto, 1991) / Library of Congress",
 "p26": "Römische Porträtbüste, 1. Jh. v. Chr. / The Met, Open Access",
 "p27": "Pierre Charles L'Enfant (Abzeichen, um 1783) / The Met, Open Access",
 "p29": "Leendert van der Cooghen (Radierung, 1666) / The Met, Open Access",
 "p30": "Alexander Lawson (Stich, 1799) / The Met, Open Access"
}
TITLE_CREDIT = 'Foto, 2016 / Library of Congress'
FOCUS = {}  # e.g. {'p6': (0.3, 0.5)}
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
    s['ar'] = crop(f[0], IMG + k + '_c.jpg', fx, fy, 0.75, 1.6); s['credit'] = CREDIT[k]
J['titleCredit'] = TITLE_CREDIT
f = glob.glob(IMG + 'raw_title.*')
if f: crop(f[0], IMG + 'title_t.jpg', *FOCUS.get('title', (0.5, None)))
json.dump(J, open(D + 'slides.json', 'w'), ensure_ascii=False, indent=1)
print('done', len(glob.glob(IMG + 'p*_c.jpg')))
