# v5.4 QA Report

- PASS: 62/62 Daily Challenge word MP3 files generated.
- PASS: all 62 word files have unique SHA-256 hashes.
- PASS: representative MP3 decode/probe checks passed.
- PASS: `speakWord()` routes exact WORD_BANK vocabulary to local `./audio/words/*.mp3` first.
- PASS: Android word playback no longer uses `cancel() -> 110 ms delay -> speechSynthesis.speak()` as the primary path.
- PASS: system SpeechSynthesis remains only as fallback for sentences/feedback phrases or local-file failure.
- PASS: Service Worker cache version bumped to v5.4.0.
- PASS: inline JavaScript and `sw.js` passed `node --check`.

## Manual Android checks still required
1. Open Daily Challenge in Chrome.
2. Tap the speaker for several words (Dog, Apple, Ice cream, Three, Shoes).
3. Confirm each tap produces sound.
4. Install/add to home screen and repeat.
5. After each tested word has been loaded once, turn off network and verify those cached words still play.

## Audio-quality note
The 62 new word files use one fixed local en-US synthesized voice for consistency and Android reliability. They are not mixed-gender and do not depend on the phone TTS engine.
