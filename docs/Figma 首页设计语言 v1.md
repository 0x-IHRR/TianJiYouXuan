# Figma 首页设计语言 v1

## 结论

当前推荐路线成立：用「无元素背景母版」保存首页空间气质，用「真实 HTML 组件」定点覆盖导航、标题、影片区、入口和页脚，再用轻量动效层做静帧电影感。

这条路线避免两个问题：

- 不把文字、按钮、Logo 烙进背景图，后续可维护、可响应式、可 SEO。
- 不让 Codex 只凭截图猜设计细节，减少实现时普通化、组件化痕迹过重的问题。

## Figma 真源

Figma 文件：

https://www.figma.com/design/69ly8C0WaohOPYhmHJ43ZG

关键节点：

- `1:2` `Approved Sketch / Continuous Space Homepage`
  - 原始确认草图。
  - 用于对照文字、导航、入口和页脚的大致位置。
- `8:2` `Hybrid Homepage / Clean Background Master`
  - 无文字、无导航、无按钮、无图标的纯背景母版。
  - 用于真实网页背景层。
- `14:2` `Hybrid Homepage / Component Placement Guides v2 measured from sketch`
  - 组件定位参考层。
  - 基于原始草图 `864x1821` 坐标重新测量，不再从早期结构稿缩放。
  - 用于把真实 HTML 组件覆盖到背景对应位置。
- `12:3` `TJ Homepage Design Language / Board`
  - 首页设计语言板。
  - 用于 Codex 读取设计系统、动效边界和实现规则。
- `5:2` `Structured Homepage / Code Source`
  - 早期结构稿。
  - 只作为语义参考，不再单独作为视觉真源。

## 本地资产

素材沉淀区：

`images/草图/homepage-pc-clean-background-v1.png`

前端可引用区：

`web/public/media/homepage-clean-background-v1.png`

说明：

- `images/` 当前被 `.gitignore` 忽略，适合沉淀设计过程资产。
- `web/public/media/` 中的背景图用于真实代码引用，需要纳入版本管理。

## 设计语言

### 核心原则

1. 首页像一个连续空间，不像分段落地页。
2. 背景不承担信息，信息全部由 HTML 组件承担。
3. 动效像空气和光，不像软件官网特效。
4. 申请会员是结果，不是首页一上来就催促。
5. 缺素材宁可留白，不用假数据填满。

### 色彩系统

- `#F4E8D6` plaster / 背景灰泥
- `#FFF7E8` warm light / 暖光
- `#2E241B` ink / 主文字
- `#4A2F1D` walnut / 木色
- `#B48345` brass / 引导线
- `#0B0907` film black / 影片暗部
- `#DED1BE` mist / 边界与雾化
- `#4B5A38` moss / 植物暗绿

### 字体策略

- 中文标题：`Noto Serif SC` 优先，落地代码使用中文衬线字体栈兜底。
- 正文与短句：仍以中文衬线为主，保持克制和信任感。
- 英文字体：只用于内部 guide 或必要技术标签，生产 UI 尽量中文优先。
- 字距：保持 `0`，不使用负字距。

### 动效语言

- 背景底图不动。
- 光影层：20-36s 慢速漂移，透明度约 0.08-0.18。
- 影片层：6-12s 极慢 loop 或亮度呼吸，像视频停帧。
- 景深层：鼠标或滚动位移 2-8px，不做炫技。
- 文字层：进入时 `blur(8px) -> blur(0)`，`opacity 0 -> 1`，约 900-1200ms。
- `prefers-reduced-motion` 下保留静态清晰版。

## 实现顺序

1. 以 `web/public/media/homepage-clean-background-v1.png` 替换当前首页视觉底层。
2. 根据原始草图 `1:2` 和定位层 `14:2` 定点重建真实组件。
3. 先做 PC 首页高保真版本，不急着扩展更多子页面。
4. 加入光影层、影片静帧层、景深层和语义组件层。
5. 再处理移动端裁切策略，避免一开始为了响应式牺牲 PC 气质。
6. 使用浏览器截图对照 Figma，修正位置、字号、留白和动效强度。

## 是否漏步骤

还需要补的步骤不是方向层面的，而是执行层面的：

- 明确首页 PC 首版的裁切基准：建议以 `1440px` 宽作为设计实现基准。
- 明确移动端策略：不是压缩整张图，而是重新裁切背景焦点。
- 明确影片洞口内容：首版可用品牌影片静帧或极慢 loop，避免明显播放按钮。
- 明确真实 Logo、社媒链接、备案和联系方式缺口：缺失时隐藏，不填 mock。
- 实现后必须做截图对照：不能只靠代码编译通过判断视觉完成。
