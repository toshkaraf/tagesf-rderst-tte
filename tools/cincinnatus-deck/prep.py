# Crops img/raw_* (Wikimedia Commons thumbnails) into 3:4 arch frames (img/p<N>_c.jpg, title_t.jpg) and writes credits into slides.json.
# Portraits keep the top (faces); focus per slide can be set in FOCUS as (fx, fy) in 0..1.
import json, glob, os
from PIL import Image
D = os.path.dirname(os.path.abspath(__file__)) + '/'
IMG = D + 'img/'
AR = 0.75
CREDIT = {
 'p2': 'Rudy Hertzog (Statue von Foyatier, CC BY-SA 4.0)',
 'p3': 'Cesare Maccari (Gemälde, gemeinfrei)',
 'p4': 'Juan Antonio de Ribera (Gemälde, gemeinfrei)',
 'p6': 'Rabax63 (Trajanssäule, CC BY-SA 4.0)',
 'p7': 'Unbekannt (Zeichnung, gemeinfrei)',
 'p8': 'Gilbert Stuart (Gemälde, gemeinfrei)',
 'p9': 'John Ward Dunsmore (Gemälde, gemeinfrei)',
 'p11': 'CaptJayRuffins (Foto, CC BY-SA 4.0)',
 'p12': 'Ramon Elorriaga (Gemälde, gemeinfrei)',
 'p13': 'Unbekannt (Bild von 1858, gemeinfrei)',
 'p14': 'Fratelli Alinari (Foto 1866, gemeinfrei)',
 'p16': 'Giovanni Fattori (Gemälde, gemeinfrei)',
 'p17': 'Unbekannt (Grafik, gemeinfrei)',
 'p19': 'Thomas Jones Barker (Stich, gemeinfrei)',
 'p20': 'Unbekannt (Foto, gemeinfrei)',
 'p21': 'Moheen Reeyad (Foto, CC BY-SA 4.0)',
 'p22': 'World Economic Forum (Foto 1992, CC BY-SA 2.0)',
 'p24': 'Mark Hillary (Mandela-Statue, CC BY 2.0)',
 'p25': 'South Africa The Good News (Foto, CC BY 2.0)',
 'p26': 'José Luiz (Foto, gemeinfrei)',
 'p27': 'Maciej Szczepańczyk (Foto, CC BY 3.0)',
 'p29': 'Unbekannt (Statuette, CC0)',
 'p30': 'Chris Light (Foto, gemeinfrei)',
}
TITLE_CREDIT = 'Giovanni Francesco Romanelli (Gemälde, CC BY 2.5)'
FOCUS = {}  # e.g. {'p6': (0.3, 0.5)}
def crop(src, dst, fx=0.5, fy=None):
    im = Image.open(src).convert('RGB'); w, h = im.size; ar = w / h
    if ar > AR:
        nw = round(h * AR); x = round((w - nw) * fx); im = im.crop((x, 0, x + nw, h))
    else:
        nh = round(w / AR); fy = 0.12 if fy is None else fy; y = round((h - nh) * fy); im = im.crop((0, y, w, y + nh))
    im.thumbnail((900, 1200)); im.save(dst, quality=88)
J = json.load(open(D + 'slides.json'))
for s in J['slides']:
    k = 'p%d' % s['n']
    f = glob.glob(IMG + 'raw_' + k + '.*')
    if s.get('vid') or not f: continue
    fx, fy = FOCUS.get(k, (0.5, None))
    crop(f[0], IMG + k + '_c.jpg', fx, fy); s['credit'] = CREDIT[k]
J['titleCredit'] = TITLE_CREDIT
f = glob.glob(IMG + 'raw_title.*')
if f: crop(f[0], IMG + 'title_t.jpg', *FOCUS.get('title', (0.5, None)))
json.dump(J, open(D + 'slides.json', 'w'), ensure_ascii=False, indent=1)
print('done', len(glob.glob(IMG + 'p*_c.jpg')))
