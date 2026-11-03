# Humanoide Roboter deck – build sources

- `source_texts.md` – slide texts (German B1) from the user's docx, converted with pandoc.
- `build.js` – pptxgenjs build (`node build.js` = deck with links; `EMBED=1 node build.js` = deck with full-slide video slides). Also writes `data.json`.
- `gen.js` – generates the web deck `public/humanoid-robots/index.html` from `data.json`.
- `img/` – cropped photos (`*_c.jpg`, `w<N>_c.jpg`) and YouTube thumbnails (`ytc_<id>.jpg`).
- Video ids per slide live in `build.js` (`yt` map, `ytTitle`, parsed URLs for slides 4/13).
- Android app: `android-presentation/` (WebView + WebViewAssetLoader; `app/src/main/assets/index.html` = copy of the web deck).

Setup in a fresh container: `npm install pptxgenjs playwright` here (or use preinstalled), set `PPTX_SKILL_DIR` to the pptx skill dir for `build.js`.
Android build: install Android cmdline-tools (dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip), `sdkmanager "platforms;android-34" "build-tools;34.0.0"`, then `cd android-presentation && ANDROID_HOME=... gradle assembleDebug`.
After changing slides: `node gen.js`, copy `public/humanoid-robots/index.html` to `android-presentation/app/src/main/assets/index.html` and `Humanoide_Roboter_web.html`, rebuild APK.
