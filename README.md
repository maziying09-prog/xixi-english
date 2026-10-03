# 小夕英语 v5.2

本版修复两类问题：

1. **26 个字母音频全部重做**：A-Z 全部使用同一固定 `en-us+f3` 声线、相同速度/音调/音量，按英文字母名称（letter name）发音，不混用男/女声，也不复用旧音频。
2. **首页背景色硬修复**：两个关键首页卡片改成原生 sRGB `linear-gradient(...)` + solid color fallback，不再依赖 Tailwind 的 OKLab/OKLCH 渐变变量。

部署到 GitHub Pages 时，请至少覆盖：`index.html`、`sw.js`、`assets/`、`audio/`、`icons/`、`manifest.webmanifest`。

为了彻底绕过旧缓存，本版使用 v5.2 cache key；更新后建议删除旧桌面 PWA，再从 Safari/Chrome 重新打开并安装一次。
