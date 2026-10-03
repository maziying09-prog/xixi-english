# 小夕英语 v5.3

本版重点：
- A–Z 26 个字母全部从用户提供的同一份真人连续录音 `English_alphabet.ogg` 切分。
- 不再混用旧 TTS 或不同声线。
- 每个字母按相邻字母中心点切分，保留自然前后静音，避免 F /f/、M /m/、N /n/ 等尾音被硬切。
- 导出统一为 44.1 kHz、mono、128 kbps MP3。
- 首页“安装到桌面”和“Hello，小夕”卡片增加元素级 inline 背景色/渐变，避免 Safari/PWA 样式链路异常。
- Service Worker/字母音频版本升级到 v5.3.0，避免命中旧音频缓存。

## 部署
请用本版完整目录覆盖 GitHub Pages 仓库中的：
- `audio/`
- `assets/`
- `icons/`
- `index.html`
- `manifest.webmanifest`
- `sw.js`

部署后建议删除旧桌面 PWA，再用 Safari/Chrome 从网页重新添加到主屏幕。
