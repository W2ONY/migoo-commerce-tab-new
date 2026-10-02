# 顶部样式模块契约（ht5–ht9）

页面：Migoo「Best Price」电商 tab（393×852 手机壳，浅蓝/浅紫渐变底）。顶部结构：状态栏 `.sb`（y 0–54）→ 顶栏 `.topbar`（♡🕒 两枚 24px 图标，x 313–337 / 353–377，y 75–99，**必须保持可见可点**）→ **标题区 `.hdr.hmod`（y 102–192，高 90，宽 393，这就是你的画布）** → 金刚区 `.kk`（y 204 起，四张卡片，**不能被推下去**）。

现状（原样）：标题「Best Price for All Purchases」24/600 居中，下面一行三条卖点「Points-free · Save more · Worry less」带线性图标。你的方案可以**彻底改变标题/副标题的排版布局**（两行大字、左对齐、斜切、字号对比、海报块、卡片、云朵道具、手写线、吉祥物…），但标题文字和三条卖点的信息要保留（卖点可改成胶囊 / 一句话 / 标签等形式）。

## 文件
写 `scratchpad/ht/mods/<key>.js`，内容是：
```js
HT_MODS.ht5 = {
  name: '⑤ 海报',                // 面板按钮短标签（≤5 个字，前面带序号圈字）
  desc: '…',                     // 面板说明：一两句话讲构图与微动效（中文）
  css: `...`,                    // 所有选择器以 .phone.ht5 开头（例如 .phone.ht5 .hdr.hmod .ttl{...}），不要全局选择器；关键帧名以 ht5 开头
  html: `...`,                   // 放进 .hdr.hmod 的内容；图片用 {{IMG:assets/icon3d-bags.png}} 占位（可用键见下）
  init(ph){ ...; return ()=>{/* cleanup：清定时器 */}; },   // 挂载后调用；ph 是 .phone 元素；返回 cleanup（可省略）
  play(ph){ ... },               // 用户点标题区时重放一次微动效（2–3s 内结束；循环型微动效可只做轻微强调）
};
```
可用图片键（IMG[key] 为 data URL）：`assets/icon3d-bags.png`、`assets/icon3d-coin.png`、`assets/icon3d-search.png`、`assets/icon3d-calendar.png`（粉彩 3D 图标）、`assets/migoo-mascot.png`（**Migoo 吉祥物透明 PNG，优先用它**）、`assets/migoo-logo.png`（旧 logo，带圆角底）、`assets/figma/chair.png`、`assets/figma/bag.png`、`assets/figma/sneaker.png`、`assets/figma/dress.png`、`assets/figma/skirt.png`（商品图）、`assets/brand-*.png`。全局可用：`TOP.header.title`、`TOP.header.sellingPoints`（数组）、`SPK`（细线星芒 svg）、`AIS`（✦ 渐变星 svg，class ais）、`REDUCED()`（系统减少动态效果）。

## 硬性要求
1. `.hdr.hmod` 的盒高保持 90px（harness 已固定 height:90px；内容可用 absolute 向上溢出到顶栏行 y 54–102 的左侧区域 x < 300，**不得覆盖 ♡🕒**，不得进状态栏 y < 54）。金刚区 `.kk` 顶部必须仍在 y 204。
2. 装饰层 `pointer-events:none`，可点元素才开 auto；不要挡住 ♡🕒。
3. 微动效：进场一次（2–3s 内结束）+ 可选的轻微循环（呼吸/漂浮/光扫，幅度小）；`REDUCED()` 为 true 时不播或静态；所有定时器在 cleanup 里清掉。
4. 配色延续页面的浅蓝 / 淡紫 / 淡粉 + 白，可以大胆用一块饱和一点的渐变海报底或深色大字，但不要深色科技背景、霓虹、密集粒子。字体沿用页面（-apple-system / SF）。
5. 不要引用外部资源；不要改 harness 以外的任何文件；不要用 id 选择器（页面里会多次重渲染）。

## 怎么自测
```
cd /private/tmp/claude-503/-Users-yunzhao-wang-ClaudeCode-MigooReply/2f23c285-fbad-40c6-af78-3aa0c09789f9/scratchpad/ht
python3 -m http.server <你的端口> &      # 每人用不同端口（ht5 用 8151，ht6 8152 … ht9 8155）
```
然后用 Playwright（目录 ../pw 已装，`chromium.launch({channel:'chrome'})`，`newPage({viewport:{width:600,height:900},deviceScaleFactor:2})`）打开 `http://localhost:<端口>/harness.html?mod=ht5`，等待 `window.HT_READY`，截 `#phone` 顶部 0–230px 多帧（进场中 / 结束态 / 点击重放），用 Read 看图自评；检查 `document.querySelector('.kk').getBoundingClientRect().top - phone.top === 204`、`elementFromPoint` 在 ♡（325,87）与 🕒（365,87）上仍是 `.topbar` 内元素、无 pageerror。截图存到 `../ht/shots/<key>_*.png`。做完 kill 掉你的 http.server。
