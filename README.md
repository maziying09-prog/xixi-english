# 小夕英语 v5.1 · GitHub Pages / iOS 修复版

本版在 v5.0 基础上修复两类真机问题：

- iOS Safari 部分版本不支持 Tailwind v4 的 `in oklab` 渐变插值语法，导致首页渐变背景丢失；v5.1 加入传统渐变方向兼容层。
- v5.0 的字母离线包缓存与实际播放缓存不是同一个缓存，可能出现 26/26 显示正常但播放旧/错误字母音频；v5.1 已统一缓存，并给字母音频 URL 加版本号。
- F / L / N 已重新生成明确的 `eff / el / en` 本地音频。

## GitHub Pages 更新方法

把本目录中的所有文件和文件夹上传覆盖仓库根目录，尤其不要漏掉：

- `assets/`
- `audio/`
- `icons/`
- `index.html`
- `sw.js`
- `manifest.webmanifest`

提交后等待 GitHub Pages 完成部署，再在 iPhone Safari 中打开网站。

如果手机仍显示旧版，先删除旧桌面 PWA，然后 Safari → 设置/网站数据中清理该站点数据，再重新访问并添加到主屏幕。
