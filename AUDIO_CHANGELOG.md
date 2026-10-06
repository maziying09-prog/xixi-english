# v6.2 Audio Changelog

All instructional short MP3 files under `audio/words`, `audio/phrases`, and `audio/plurals` were re-encoded for Android compatibility.

Profile:
- MP3 / libmp3lame
- 44.1 kHz
- mono
- CBR 128 kbps
- ID3 metadata stripped
- 80 ms leading silence
- 120 ms trailing silence
- cache-busting version: v6.2.0

Originally reported problematic words: yo-yo, long, milkshake, milk, mother, young. Their matching phrase audio, where present, was also re-encoded.
