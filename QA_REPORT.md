# v6.0 QA Report

## 数据结构

- PASS：Unit 1–8 共 8 个单元
- PASS：核心词条总数 108
- PASS：Unit 1 = 16
- PASS：Unit 2 = 10
- PASS：Unit 3 = 18
- PASS：Unit 4 = 16
- PASS：Unit 5 = 18
- PASS：Unit 6 = 8
- PASS：Unit 7 = 8
- PASS：Unit 8 = 14
- PASS：单词本仍只显示 `word` 本体
- PASS：短语与复数作为同一词条的学习层，不重复生成单词本条目

## 音频

- PASS：所有 108 个核心词都有 `audio/words/` 可播放文件
- PASS：所有带 phrase 的词都有 `audio/phrases/` 文件
- PASS：所有带 plural 的词都有 `audio/plurals/` 文件
- PASS：实际被课程引用的去重音频共 186 个
- PASS：186/186 均通过 ffprobe 解码
- PASS：引用音频时长范围约 0.68–1.54 s
- PASS：Android Range / 206 Service Worker 处理保留
- PASS：音频版本更新为 v6.0.0

## 音轨映射

- U3 Colors：CD1 Track 25
- U3 Shapes：CD1 Track 31
- U4 Countable Food：CD2 Track 38
- U4 Other Food：CD2 Track 44
- U5 Toys：CD2 Track 05
- U5 Descriptions：CD2 Track 09
- U6 Nature：CD2 Track 21
- U6 Prepositions：CD2 Track 25
- U7 Writing Supplies：CD1 Track 43
- U7 Electronics：CD1 Track 49
- U8 Family：CD1 Track 60
- U8 Descriptions：CD1 Track 65

## 代码静态检查

- PASS：主 inline JavaScript 通过 `node --check`
- PASS：`sw.js` 通过 `node --check`
- PASS：`manifest.webmanifest` JSON 解析通过
- PASS：Service Worker cache 版本为 v6.0.0

## 需要真机人工试听的项目

自动化可以确认文件完整、切片长度和编码，但无法替代孩子/成人对语音自然度的听感判断。上线后建议抽查：

- U3：oval / rectangle / purple
- U4：milkshake / sandwich / ice cream
- U5：yo-yo / jump rope / square
- U6：puddle / under / by
- U7：pencil case / cell phone / video game / CDs
- U8：grandmother / baby brother / handsome

重点确认：不夹带编号、前一词/后一词，a/an 未被误切，以及 plural 尾音完整。
