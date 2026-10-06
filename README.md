# 小夕英语 v5.5 Android 音频 Range 修复版

本版针对 Android Chrome / PWA 中“只有点击声、单词 MP3 无声”的问题修复：

- Service Worker 正确支持 MP3 `Range: bytes=...` 请求。
- 不再尝试将 HTTP 206 Partial Content 写入 Cache API。
- 首次 Range 请求会先拉取完整 MP3、缓存完整 200 响应，再返回正确的 206 字节区间。
- 每日闯关使用持久化 `<audio>` 元素播放，不再每次 `new Audio()`。
- 单词播放时移除点击提示音，避免掩盖真实播放故障。
- 单词音频继续保持本地优先，TTS 只做失败兜底。
- 缓存版本升级到 v5.5.0。

部署 GitHub Pages 时请整体覆盖 `index.html`、`sw.js`、`audio/`、`assets/`、`icons/`。
