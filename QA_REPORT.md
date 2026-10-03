# v5.0 QA 报告

## 已完成的静态/资源检查

- PASS：页面标题为 `v5.0`。
- PASS：`index.html` 中没有 `http://` / `https://` 外部资源依赖。
- PASS：Tailwind CSS 已编译为本地 `assets/tailwind.css`。
- PASS：FontAwesome CSS / webfonts 已本地化。
- PASS：A–Z 共 26 个本地 MP3 文件均存在，并通过 ffprobe 解码检查。
- PASS：字母歌 MP3 存在并通过 ffprobe 解码检查。
- PASS：`webkitSpeechRecognition` / `SpeechRecognition` API 已从实际代码中移除。
- PASS：跟读使用 `getUserMedia + MediaRecorder`，停止录音后显式 `track.stop()` 释放麦克风。
- PASS：页面切换会调用 `stopVoiceRecord(true)`，避免麦克风残留。
- PASS：进入字母营会执行 `ensureAlphabetPack()`，逐个校验/缓存 A–Z，并显示 0/26 → 26/26。
- PASS：Service Worker 的安装列表不再包含字母歌和 26 个字母 MP3，避免慢网络下音频阻塞 SW 安装。
- PASS：HTML 导航采用 network-first，降低新版发布后仍长期显示旧页面的概率。
- PASS：主内联 JavaScript 通过 `node --check`。
- PASS：`sw.js` 通过 `node --check`。
- PASS：manifest JSON 可解析。
- PASS：本地 HTTP 服务下 `/`、SW、manifest、CSS、A/Z 音频和字母歌均返回 HTTP 200。

## 本环境不能替代的真机测试

本环境没有可用的 iPhone/iPad 真机，因此以下项目必须在你的 iPhone 上人工确认：

1. Safari 首次授权麦克风后，录音开始/停止是否正常。
2. 停止录音后 iOS 顶部麦克风指示是否及时熄灭。
3. “添加到主屏幕”后的 standalone PWA 是否仍能正常录音/释放。
4. 字母营等待到 `26/26` 后断网，随机点击 A/E/H/R/W/Z 是否全部发音。
5. 公开部署入口在你的常用网络环境下是否可达；该问题与网页资源本地化是两件事。

## 重要版权提示

`audio/alphabet_song.mp3` 来自你提供的商业歌曲文件。若将本项目部署为公开网站，请先确认你拥有公开传播/分发授权；家庭私用版可保留。
