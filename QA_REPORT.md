# v5.5 QA Report

## Root cause addressed
Android Chrome/PWA commonly requests MP3 media with HTTP Range headers. v5.4 routed every `/audio/` request through a cache helper that attempted `cache.put()` for any `response.ok`, including HTTP 206 Partial Content. Cache API cannot safely store 206 partial responses, so the Service Worker fetch handler could reject while the WebAudio click SFX still worked.

## Fixes
- Added Range-aware audio handler.
- 206 responses are never written to Cache API.
- Full 200 MP3 is cached and range slices are served locally as 206 responses.
- Persistent `#wordAudioPlayer` is used for vocabulary playback.
- Word click SFX removed from the playback path.
- Cache namespace bumped to v5.5.0.

## Static checks
- Main HTML JavaScript syntax checked with Node.
- Service Worker syntax checked with Node.
- Word audio files remain present and ffprobe-readable.
