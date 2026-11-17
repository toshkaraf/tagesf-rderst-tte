# Richelieu deck – build sources
- `slides.json` – 30 German (B1) slides: texts, image key (`img`), credit, video id (`vid`, `vtitle`).
- `build.cjs` – pptxgenjs build (`node build.cjs`; `EMBED=1 node build.cjs` for the video-slide variant). `gen.cjs` – web deck (`public/richelieu/index.html`).
- `prep.py` – crops `img/raw_*` (Wikimedia Commons) into `img/p<N>_c.jpg`. `img/ytc_<id>.jpg` – YouTube thumbnails (480x270).
- Android app: `android-richelieu/` (same WebView shell as `android-presentation/`).
- Setup as in `../humanoid-deck/README.md` (PPTX_SKILL_DIR, NODE_PATH with pptxgenjs, ANDROID_HOME).
