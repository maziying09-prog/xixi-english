# 小夕英语 v5.4

## 本版核心修复
- 修复 Android / Android PWA 中“每日闯关”单词点击无声。
- 62 个 WORD_BANK 单词新增本地 MP3，统一 en-US 合成声线与参数。
- 单词按钮改为本地音频优先，系统 speechSynthesis 仅作为兜底。
- 单词播放不再依赖 `cancel() -> 延时 -> speak()`，避免 Android 丢失用户手势/发音请求。
- A-Z 真人字母音频和离线字母歌继续保留。
- Service Worker 缓存版本升级到 v5.4.0。

## GitHub Pages 上传
请覆盖整个 `audio/words/`、`index.html`、`sw.js`，并保留原有 `audio/letters/`、`assets/`、`icons/`。

## 说明
本版单词音频的目标是解决 Android 稳定播放与离线能力，使用统一的本地 en-US 合成声线。后续如需教材级真人单词音频，可在不改代码结构的情况下替换 `audio/words/*.mp3`。
