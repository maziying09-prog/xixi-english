# v6.1 音频修复 QA

## 本次针对用户反馈重切
- yo-yo：重新从 CD2 Track 05 提取 phrase，并重新裁出 word-only 版本
- long：重新从 CD2 Track 09 第 3 个描述词提取，增加首尾余量
- milkshake：重新从 CD2 Track 38 提取 phrase，并重新裁出 word-only 版本
- milk：重新从 CD2 Track 44 第 6 个词提取，增加首尾余量
- mother：重新从 CD1 Track 60 第 7 个家庭词提取，增加首尾余量
- young：重新从 CD1 Track 65 第 6 个描述词提取，增加首尾余量

## 同步范围
- 单词本：使用 `audio/words/`，上述 6 个词均已更新
- 每日闯关：同一 word 文件同步更新；yo-yo / milkshake 的 `audio/phrases/` 也同步重切
- Service Worker / 音频查询版本更新到 `v6.1.0`，避免命中 v6.0 旧缓存

## 静态检查
- PASS：修复音频均可由 ffprobe 解码
- PASS：主 inline JavaScript 通过 `node --check`
- PASS：`sw.js` 通过 `node --check`
- PASS：manifest JSON 可解析

## 真机建议重点试听
- yo-yo / a yo-yo
- milkshake / a milkshake
- long
- milk
- mother
- young
