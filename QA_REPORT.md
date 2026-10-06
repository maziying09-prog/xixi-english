# v5.8 Unit 1 + Unit 2 QA Report

## 数据
- PASS：Unit 1 = 16 个词
- PASS：Unit 2 Animals = 10 个核心动物词
- PASS：总词条 = 26
- PASS：Unit 2 每个词都有 `word / phrase / plural`
- PASS：elephant 使用 `an elephant`

## Unit 2 音频
- PASS：10/10 `audio/words/*.mp3` 存在且 ffprobe 可解析
- PASS：10/10 `audio/phrases/*.mp3` 存在且 ffprobe 可解析
- PASS：10/10 `audio/plurals/*.mp3` 存在且 ffprobe 可解析
- PASS：统一转换为 MP3 / 44.1 kHz / mono
- PASS：词本体、a/an 短语、复数使用三套独立文件
- PASS：CD2 Track 57 / Track 63 源时间信息写入 `UNIT2_SOURCE.json`

## Web/PWA
- PASS：主 JavaScript `node --check`
- PASS：Service Worker `node --check`
- PASS：manifest JSON 可解析
- PASS：Service Worker 缓存升级为 v5.8.0
- PASS：保留 Android Range/206 音频处理
- PASS：单词本新增 Unit 2 分类筛选
- PASS：单词本点击仍只播放词本体
- PASS：每日闯关 Unit 2 会显示 word → a/an phrase → plural 三层

## 建议人工复听
重点检查以下三组边界是否自然：
- cat / a cat / cats
- giraffe / a giraffe / giraffes
- elephant / an elephant / elephants

word 音频由 Oxford 的 a/an + noun 原始片段去除冠词后得到，真人复听仍是最终确认标准。
