# v5.2 QA 报告

- PASS：A-Z 26 个字母 MP3 全部重新生成。
- PASS：26 个音频 SHA-256 全部不同，没有误复制/串音文件。
- PASS：全部使用同一个固定 `en-us+f3` 声线、相同速度/音调/音量。
- PASS：直接以大写字母 A-Z 作为 TTS 输入，eSpeak 的字母名音素检查通过；重点核对 A/F/L/M/N/W/Z。
- PASS：首页安装卡改为原生橙色 sRGB 渐变，并提供 #f97316 纯色 fallback。
- PASS：首页主卡改为原生靛蓝→紫色 sRGB 渐变，并提供 #4f46e5 纯色 fallback。
- PASS：页面与 Service Worker 均升级到 v5.2，避免命中 v5.1 旧缓存。
- PASS：内联 JavaScript 与 Service Worker 语法检查通过。

限制：当前环境可以验证文件、音素映射、缓存版本和代码，但不能替代 iPhone/Android 真机扬声器的人耳听音。
