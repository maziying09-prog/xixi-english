# v5.6 Unit 1 QA Report

## Automated checks

- Unit 1 word count: **16**
- Local word MP3 count: **16**
- Source mapping: CD1 Track 08 = first 8 school-supply words; CD1 Track 14 = second 8 classroom-object words.
- Wordbook click handler now calls `speakWord(item.word)` rather than mixing English + Chinese.
- New storage namespace prevents stale 62-word state from affecting Unit 1.
- Service Worker/cache version bumped to v5.6.0.

## Extracted audio files

- `bag.mp3` — 1.097s, mp3, 44100 Hz, 1 ch
- `board.mp3` — 0.914s, mp3, 44100 Hz, 1 ch
- `book.mp3` — 0.862s, mp3, 44100 Hz, 1 ch
- `chair.mp3` — 0.967s, mp3, 44100 Hz, 1 ch
- `crayon.mp3` — 1.306s, mp3, 44100 Hz, 1 ch
- `desk.mp3` — 1.123s, mp3, 44100 Hz, 1 ch
- `eraser.mp3` — 1.097s, mp3, 44100 Hz, 1 ch
- `globe.mp3` — 0.993s, mp3, 44100 Hz, 1 ch
- `map.mp3` — 0.836s, mp3, 44100 Hz, 1 ch
- `marker.mp3` — 1.123s, mp3, 44100 Hz, 1 ch
- `pen.mp3` — 0.940s, mp3, 44100 Hz, 1 ch
- `pencil.mp3` — 1.176s, mp3, 44100 Hz, 1 ch
- `poster.mp3` — 1.097s, mp3, 44100 Hz, 1 ch
- `ruler.mp3` — 1.071s, mp3, 44100 Hz, 1 ch
- `table.mp3` — 1.123s, mp3, 44100 Hz, 1 ch
- `wastebasket.mp3` — 1.541s, mp3, 44100 Hz, 1 ch

## Manual checks still required

- Listen to all 16 clips on a real phone and confirm each cut starts/ends naturally.
- Verify Android Chrome and installed PWA both play every word.
- Verify Wordbook and Daily Challenge play the same local clip for each word.
