# v5.7 Unit 1 QA Report

## 自动检查
- PASS：Unit 1 词表 16 个
- PASS：`audio/words/` 16/16 个词本体 MP3 存在并可由 ffprobe 解析
- PASS：`audio/phrases/` 16/16 个 a/an 短语 MP3 存在并可由 ffprobe 解析
- PASS：word 与 phrase 使用独立目录和独立播放路径
- PASS：单词本点击调用 `speakWord(item.word)`，不会拼接中文或 a/an
- PASS：每日闯关包含 word + phrase 两层显示及两个独立播放按钮
- PASS：`an eraser` 单独处理
- PASS：主 JavaScript `node --check` 通过
- PASS：Service Worker `node --check` 通过
- PASS：manifest JSON 可解析
- PASS：保留 Android Range/206 音频处理
- PASS：缓存版本升级为 v5.7.0

## 需要真人复听
word 音频由 Oxford `a/an + noun` 原始片段按波形边界去掉冠词。请重点复听：
- pencil / a pencil
- ruler / a ruler
- eraser / an eraser
- marker / a marker
- wastebasket / a wastebasket

确认 word 版没有残留明显 a/an，同时没有切掉名词首辅音。
