# 小夕英语 v5.8 · Unit 1 + Unit 2 Animals

## 课程结构

### Unit 1 · Things for School（16词）
pencil, pen, bag, book, desk, chair, ruler, eraser, map, marker, globe, table, board, wastebasket, poster, crayon

### Unit 2 · Animals（10个核心动物概念）
cat, dog, bird, rabbit, frog, monkey, lion, bear, giraffe, elephant

截图中同时包含这 10 个词的复数形式，因此本版本不把复数重复做成 10 个新的单词本条目，而是在同一词条中增加 plural 字段：
- cat → a cat → cats
- dog → a dog → dogs
- ...
- elephant → an elephant → elephants

## 音频结构
Unit 2 全部来自用户提供的 Let’s Go 1 Class Audio CD2：
- CD2 Track 57：a cat, a dog, a bird, a rabbit, a frog + plurals
- CD2 Track 63：a monkey, a lion, a bear, a giraffe, an elephant + plurals

目录：
- `audio/words/`：词本体，例如 `cat`
- `audio/phrases/`：单数 a/an 短语，例如 `a cat` / `an elephant`
- `audio/plurals/`：复数，例如 `cats` / `elephants`

Unit 1 继续沿用 v5.7 的 Oxford 音频。

## 学习逻辑
- 单词本：只显示词本体，不把 a/an 或复数当成独立单词。
- 每日闯关：先学 `cat = 猫`，再学 `a cat = 一只猫`；Unit 2 额外显示 `cats = 多只猫`。
- `an elephant` 单独使用 an。
- Android Range/206 音频处理保留。

## 部署
整包覆盖 GitHub Pages 仓库根目录，至少更新：
`index.html`、`sw.js`、`audio/words/`、`audio/phrases/`、`audio/plurals/`。
Service Worker/音频版本已升级到 v5.8.0。
