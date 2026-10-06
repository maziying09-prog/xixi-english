# 小夕英语 v6.2 Android 音频兼容 QA

## 本次问题
电脑端可播放，但部分 Android 手机/平板点击 `yo-yo / long / milkshake / milk / mother / young` 无声音。

## 修复
- 将 `audio/words/`、`audio/phrases/`、`audio/plurals/` 下全部 189 个教学 MP3 统一重新编码。
- 统一参数：MP3 / libmp3lame / 44.1 kHz / mono / CBR 128 kbps。
- 移除原始 CD 继承的 ID3 title/date/track 元数据。
- 每段增加约 80 ms 前置静音和 120 ms 尾部静音，降低短音频在移动解码器上的起止裁切风险。
- WORD_AUDIO_VERSION 升级为 `v6.2.0`。
- Service Worker APP/AUDIO/Alphabet cache 版本升级为 `v6.2.0`。
- Android Range/206 处理逻辑保留。

## 自动检查
- 189/189 教学 MP3 均可被 ffprobe 解析。
- 所有重编码文件首部直接以 MP3 frame sync 开始，不再含 ID3 标签。
- 主页面 JavaScript `node --check` 通过。
- `sw.js` `node --check` 通过。
- 问题词及正常对照词均为 44.1 kHz / mono / 128 kbps。

## 重点真机复验
请在 Android Chrome（先不要用旧桌面 PWA）试听：
`yo-yo, long, milkshake, milk, mother, young`。
若网页端正常，再重新添加到桌面。
