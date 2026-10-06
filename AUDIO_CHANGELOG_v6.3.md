# v6.3 Audio Mapping Fix

Rebuilt directly from the original Let's Go CD tracks:

- `audio/words/mother.mp3` — CD1 Track 60, mother segment (~18.24 s)
- `audio/words/young.mp3` — CD1 Track 65, young segment (~17.59 s)
- `audio/words/long.mp3` — CD2 Track 09, long segment (~24.22 s)
- `audio/words/milk.mp3` — CD2 Track 44, milk segment (~29.34 s)
- `audio/words/milkshake.mp3` — CD2 Track 38, word-only segment from the milkshake phrase
- `audio/words/yo_yo.mp3` — CD2 Track 05, word-only segment from the yo-yo phrase
- `audio/phrases/milkshake.mp3` — CD2 Track 38, full phrase
- `audio/phrases/yo_yo.mp3` — CD2 Track 05, full phrase

The previous v6.2 packaged files were objectively cross-correlated against the source CDs. `mother`, `young`, `long`, and `yo_yo` were confirmed to contain audio from wrong source timestamps. v6.3 regenerates them from the intended source positions.
