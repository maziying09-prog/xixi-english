# 小夕英语 v5.1 QA 报告

## 本轮修复

1. **Safari 首页渐变背景丢失**
   - 根因：本地 Tailwind v4 CSS 的渐变方向包含 `in oklab` 色彩插值语法；部分 iOS Safari 会直接丢弃整条 `background-image`，因此紫色/橙色渐变卡片变成白底，而 `text-white` 仍生效，看起来像“颜色丢失”。
   - 修复：在 Tailwind CSS 之后加入 Safari 兼容覆盖，把渐变方向退回传统 `to right / to bottom right / to top right` 写法。

2. **F / L / N 播放成 M / 字母音频缓存错配**
   - v5.0 中“26/26 离线包”写入 `xiaoxi-alphabet-pack-v5.0.0`，但真正 `<audio>` 播放请求被 Service Worker 路由到另一个 `xiaoxi-audio-runtime-v5.0.0` 缓存，两套缓存并不一致，旧音频可能继续被播放。
   - v5.1 让 `/audio/letters/*.mp3` 的缓存检查和实际播放统一使用同一个 Alphabet Pack Cache。
   - 字母 URL 增加 `?v5.1.0`，强制绕过旧版本 URL 缓存。
   - F / L / N 三个文件已重新生成，使用明确字母名：`eff / el / en`，避免与 M 的 `em` 混淆。

3. **缓存版本升级**
   - App / Audio / Alphabet Pack 均升级为 v5.1.0。
   - 激活新 Service Worker 时清理旧 `xiaoxi-*` 缓存。

## 自动检查

- PASS：26 个 `A.mp3`–`Z.mp3` 均存在。
- PASS：F / L / M / N 四个音频文件 SHA-256 均不同。
- PASS：`manifest.webmanifest` 可正常解析。
- PASS：`index.html` 内联 JavaScript 通过 `node --check`。
- PASS：`sw.js` 通过 `node --check`。
- PASS：GitHub Pages 子路径仍使用 `./...` 相对路径。

## 真机需要复验

由于当前环境无法听到 iPhone 扬声器，也无法运行你实际的 iOS Safari 版本，以下项目需要真机确认：

- F / L / N / M 是否分别听成 **eff / el / en / em**。
- 首页紫色、橙色、粉色渐变卡片是否恢复。
- PWA 更新后是否显示 v5.1，而不是旧 v5.0。
