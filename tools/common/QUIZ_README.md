# Quiz module (web / APK decks)
Reusable multiple-choice quiz for the WebView decks (`tools/common/quiz.cjs`).
- `quiz.json` per deck: `{ "groups": [ { "after": <slide no>, "q": [ { "q": "...", "a": ["RICHTIG", "falsch", "falsch", "falsch"] } ] } ] }`. **The first answer is always the correct one**; the module places it at rotating positions (in-deck) or shuffles (final test).
- After the last page of slide `after` (incl. its video page) the group's questions are inserted, one page per question (4 buttons).
  Click: success sound + green for the correct answer; wrong pick = red + correct green; after 2 s auto-advance (next question, or the next slide after the last question).
- After all slides: final test with all questions shuffled (answers shuffled too), result in % with retry button.
- Sounds are synthesised with WebAudio (no files). Colors come from the deck theme: `{bg, fg, accent, btn, btnHover}`.
- Wire-up: see header comment of `quiz.cjs` and `tools/richelieu-deck/gen.cjs` (core JS must expose `window.__deck` and call `window.__onShow(section)`; play buttons use `data-go="+1"` = next page so insertions don't break links).
- pptx variants don't contain the quiz (sound/highlight needs the web runtime).
