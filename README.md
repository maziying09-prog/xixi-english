# 小夕英语 v5.0 移动端稳定版

本版针对 iPhone Safari / 主屏幕 PWA 的实际问题重构：

- 核心 UI 资源全部本地化：不再依赖 Tailwind CDN、FontAwesome CDN、Google Fonts。
- Service Worker 安装只缓存轻量 App Shell，音频不会阻塞首次安装。
- A–Z 音频在进入“字母营”后逐个校验并缓存，页面显示 0/26 → 26/26 状态。
- 字母歌和其他音频采用运行时缓存，第一次成功播放后即可离线复用。
- 跟读不再调用 `webkitSpeechRecognition` / Web Speech Recognition。
- 跟读改用 `getUserMedia + MediaRecorder`：点击开始，再点一次停止；停止时立即释放麦克风轨道，可回放自己的录音。
- 页面跳转时会主动停止录音并释放麦克风。
- HTML 导航采用 network-first，避免发布新版后长期卡在旧 Service Worker 页面。

## 本地测试

```powershell
cd "你的\xiaoxi_english_v5_0"
python -m http.server 8083
```

打开：`http://localhost:8083/`

## iPhone 测试顺序

1. Safari 正常打开网页。
2. 进入“字母营”，等待提示变成“26/26”。
3. 随机点 A / E / H / R / W / Z，确认都能发音。
4. 关闭网络，再次点上述字母确认离线播放。
5. 进入每日闯关的跟读步骤，允许麦克风。
6. 点麦克风开始录音，再点一次结束；确认 iOS 顶部麦克风指示很快熄灭。
7. 点 ▶ 回放录音，再切换页面，确认不会残留录音状态。

## 发布注意

当前包中 `audio/alphabet_song.mp3` 是你提供的商业音乐文件。若部署到公开互联网，请先确认你拥有公开传播/分发授权；仅家庭私用则可保留本地版本。
