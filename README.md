# 小夕英语 v6.0 · Let’s Go 1 Unit 1–8 全课程版

## 课程结构

本版本沿用 v5.8 的分层学习结构，并按用户截图扩展到 Unit 1–8。

- Unit 1 · Things for School：16 个核心词
- Unit 2 · Animals：10 个核心动物词 + 对应复数
- Unit 3 · Colors and Shapes：10 个颜色 + 8 个形状
- Unit 4 · Food：8 个可数食物 + 8 个教材中按整体学习的食物
- Unit 5 · Happy Birthday：10 个玩具 + 8 个描述词
- Unit 6 · Outdoors：4 个自然物 + 4 个位置词；自然物保留复数
- Unit 7 · At the Store：8 个商店物品 + 对应复数
- Unit 8 · Family：8 个家庭成员 + 6 个描述人物的词

总核心词条：108。

## 学习规则

- 单词本只显示词本体，例如 `pencil = 铅笔`、`cat = 猫`。
- 有 a/an 的名词在每日闯关中额外显示短语层，例如 `pencil → a pencil`。
- 教材同时教授复数的词，在同一词条中显示 plural 层，例如 `cat → a cat → cats`。
- 颜色、形容词、方位词、家庭称呼等不会被强行添加 a/an；每日闯关会显示对应儿童化提示。
- Android Range/206 音频兼容逻辑继续保留。

## 教材音频来源映射（来自用户上传的 Let’s Go 1 Audio CD）

- Unit 1：沿用此前已验证的 Unit 1 切片
- Unit 2 Animals：CD2 Track 57 / Track 63
- Unit 3 Colors and Shapes：CD1 Track 25 / Track 31
- Unit 4 Food：CD2 Track 38 / Track 44
- Unit 5 Happy Birthday：CD2 Track 05 / Track 09
- Unit 6 Outdoors：CD2 Track 21 / Track 25
- Unit 7 At the Store：CD1 Track 43 / Track 49
- Unit 8 Family：CD1 Track 60 / Track 65

音频目录：
- `audio/words/`：词本体
- `audio/phrases/`：a/an + 名词短语
- `audio/plurals/`：教材提供的复数形式

## 部署

建议把解压后的整个目录覆盖 GitHub Pages 仓库根目录，至少更新：

`index.html`、`sw.js`、`audio/words/`、`audio/phrases/`、`audio/plurals/`、`assets/`、`icons/`。

Service Worker 与音频版本已升级到 `v6.0.0`。

> 版权提示：教材音频来自用户提供的 Oxford/Let’s Go 配套资源。用于个人/家庭学习与公开网络再分发是不同使用场景；公开部署前请确认相应授权。
