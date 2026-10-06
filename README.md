# 小夕英语 v5.7 Unit 1

本版本把 Let’s Go 1 Unit 1 拆成“单词本体”和“a/an 数量短语”两层学习。

## Unit 1 词表
pencil, pen, bag, book, desk, chair, ruler, eraser, map, marker, globe, table, board, wastebasket, poster, crayon

## 两套音频
- `audio/words/`：词本体，用于单词本、听词、跟读、拼写，例如 `pencil`
- `audio/phrases/`：Oxford 原始名词短语，用于 a/an 教学，例如 `a pencil` / `an eraser`

短语音频来自用户提供的 Let’s Go 1 CD1 Track 08 / Track 14；word 音频在同一原始片段上重新裁切，去掉开头冠词，并保留短前后静音。

## 学习逻辑
- 单词本：只显示 `pencil / 铅笔`，点击只播放 `pencil`
- 每日闯关：先学 `pencil / 铅笔`，再学 `a pencil / 一支铅笔`
- `a/an` 用儿童化解释：可先理解成“一个 / 一只 / 一支 / 一张 / 一块”，不要求孩子记“不定冠词”术语
- `eraser` 使用 `an eraser`

## 部署
保持项目根目录结构，整包覆盖 GitHub Pages 仓库后重新部署。Service Worker 缓存版本已升级到 v5.7.0。
