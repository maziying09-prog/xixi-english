# v5.3 QA Report

## Audio
- Source: single uploaded file `English_alphabet.ogg`
- Source duration: 24.242 s
- 26/26 letter MP3 files regenerated from that one source
- All 26 SHA-256 hashes unique: True
- Export: MP3 128 kbps, 44.1 kHz, mono
- Segmentation: midpoint between adjacent letter utterance centers; preserves natural tails/silence
- F duration: 0.89 s
- L duration: 0.941 s
- M duration: 0.905 s
- N duration: 0.914 s
- X duration: 0.935 s

## UI
- Critical home cards now have direct inline sRGB solid fallback + linear-gradient
- Version strings/cache keys bumped to v5.3

## Remaining manual checks
- Listen on target iPhone/Android speaker for F/M and L/N distinction
- Verify home card colors in Safari and installed PWA
- Verify offline A–Z after cache reaches 26/26
