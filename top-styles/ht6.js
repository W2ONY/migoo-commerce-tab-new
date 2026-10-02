/* ht6 · ⑥ 云朵 —— 「云朵道具」：一朵白云托着四枚 3D 道具，标题压云，胶囊骑在云下沿 */
HT_MODS.ht6 = {
  name: "⑥ 云朵",
  desc: "标题区后面一朵双层白云（淡紫后云 + 纯白前云，柔和投影），袋子 / 金币 / 放大镜 / 日历四枚 3D 道具错落摆在云的四角，左上袋子与右上金币探进顶栏行；标题两行（28 / 24 字号对比）居中压云，三条卖点做成三枚带色点的小胶囊骑在云下沿。进场时云先淡入放大，道具依次弹入，标题上浮、胶囊逐枚亮起、星芒闪一下（约 1.7s）；之后道具各自以不同周期轻微漂浮摆动，云整体 6s 一次呼吸。点击标题区重放进场。",

  css: `
.phone.ht6 .hdr.hmod{overflow:visible}
.phone.ht6 .hdr.hmod .hx{position:absolute;inset:0;pointer-events:none}
.phone.ht6 .hdr.hmod .hx *{pointer-events:none}

/* ---------- 云：后云（淡紫，厚度）+ 前云（纯白，整体投影） ---------- */
.phone.ht6 .hdr.hmod .cloud{position:absolute;left:22px;top:-20px;width:350px;height:112px;transform-origin:50% 70%}
.phone.ht6 .hdr.hmod .cloud .cl{position:absolute;inset:0;transform-origin:50% 70%}
.phone.ht6 .hdr.hmod .cloud .b{position:absolute;display:block;border-radius:50%;background:#fff}
.phone.ht6 .hdr.hmod .cloud .b0{left:10px;top:48px;width:330px;height:56px;border-radius:28px}   /* 底条：下沿平直 */
.phone.ht6 .hdr.hmod .cloud .b1{left:0;top:34px;width:62px;height:58px}                          /* 左小 */
.phone.ht6 .hdr.hmod .cloud .b2{left:28px;top:4px;width:98px;height:86px}                        /* 左鼓包：顶到 -16 */
.phone.ht6 .hdr.hmod .cloud .b3{left:104px;top:0;width:128px;height:106px}                       /* 中鼓包 */
.phone.ht6 .hdr.hmod .cloud .b4{left:206px;top:24px;width:104px;height:84px}                     /* 右鼓包：顶 = +4，离 ♡🕒 留空 */
.phone.ht6 .hdr.hmod .cloud .b5{left:288px;top:46px;width:62px;height:58px}                      /* 右小 */
.phone.ht6 .hdr.hmod .cloud .bs{left:10px;top:48px;width:330px;height:56px;border-radius:28px;background:linear-gradient(180deg,rgba(255,255,255,0) 28%,rgba(214,214,250,.6) 100%)}   /* 云底压暗：体积感 */
.phone.ht6 .hdr.hmod .cloud.back{z-index:0;transform:translate(-10px,12px) scale(1.045)}
.phone.ht6 .hdr.hmod .cloud.back .b{background:#D3D2FF;opacity:.78}
.phone.ht6 .hdr.hmod .cloud.front{z-index:1;filter:drop-shadow(0 10px 18px rgba(96,104,196,.18)) drop-shadow(0 2px 4px rgba(96,104,196,.08))}

/* ---------- 四枚 3D 道具：外层 .pp 负责进场弹入，内层 img 负责循环漂浮 ---------- */
.phone.ht6 .hdr.hmod .pp{position:absolute;z-index:2;transform-origin:50% 100%}
.phone.ht6 .hdr.hmod .pp img{display:block;width:100%;height:auto;filter:drop-shadow(0 6px 8px rgba(80,70,160,.22))}
.phone.ht6 .hdr.hmod .p1{left:12px;top:-34px;width:56px}            /* 袋子：左上，探进顶栏行（y 68–135） */
.phone.ht6 .hdr.hmod .p2{left:232px;top:-40px;width:46px}           /* 金币：右上，x<300，坐在中/右鼓包之间，离 ♡ 35px；基础顶边 y=62，漂浮峰值 ≥ 59，不贴状态栏 */
.phone.ht6 .hdr.hmod .p3{left:14px;top:36px;width:42px}             /* 放大镜：左下，上移略缩，手柄尖端离胶囊 ≥4px */
.phone.ht6 .hdr.hmod .p4{right:20px;top:32px;width:40px}            /* 日历：右下，♡🕒 之下，上移略缩，底角离胶囊 ≥4px */

/* ---------- 星芒点缀 ---------- */
.phone.ht6 .hdr.hmod .sp{position:absolute;z-index:2;width:12px;height:12px;color:#8B7CFF;opacity:0}
.phone.ht6 .hdr.hmod .sp svg{width:100%;height:100%;display:block}
.phone.ht6 .hdr.hmod .s1{left:80px;top:-32px;width:14px;height:14px}
.phone.ht6 .hdr.hmod .s2{left:212px;top:-40px;width:12px;height:12px;color:#FFB84D}

/* ---------- 标题：两行居中压在云上 ---------- */
.phone.ht6 .hdr.hmod .ttl{position:absolute;z-index:3;left:0;right:0;top:6px;margin:0;text-align:center;font-size:26px;line-height:29px;font-weight:700;color:#0E1330;letter-spacing:-.6px}
.phone.ht6 .hdr.hmod .ttl span{display:block}
.phone.ht6 .hdr.hmod .ttl .l1{font-size:28px;line-height:31px;font-weight:800;letter-spacing:-.8px}
.phone.ht6 .hdr.hmod .ttl .l2{font-size:24px;line-height:27px;font-weight:700;letter-spacing:-.5px}

/* ---------- 卖点：三枚小胶囊骑在云下沿 ---------- */
.phone.ht6 .hdr.hmod .pills{position:absolute;z-index:3;left:0;right:0;top:74px;display:flex;justify-content:center;gap:4px}
.phone.ht6 .hdr.hmod .pl{display:inline-flex;align-items:center;gap:5px;height:20px;padding:0 8px 0 6px;border-radius:10px;background:rgba(255,255,255,.96);border:1px solid rgba(120,110,220,.14);box-shadow:0 1px 2px rgba(80,80,160,.08);font-size:11px;line-height:18px;font-weight:600;color:#4B4F6B;letter-spacing:0;white-space:nowrap}
.phone.ht6 .hdr.hmod .pl .d{width:6px;height:6px;border-radius:50%;display:block}
.phone.ht6 .hdr.hmod .pl .d1{background:#FF9A6C}
.phone.ht6 .hdr.hmod .pl .d2{background:#FFC53D}
.phone.ht6 .hdr.hmod .pl .d3{background:#A98BFF}

/* ---------- 初始隐藏（进场前 / 重放前）；静态模式直接全显 ---------- */
.phone.ht6 .hdr.hmod .hx .cloud,
.phone.ht6 .hdr.hmod .hx .pp,
.phone.ht6 .hdr.hmod .hx .ttl span,
.phone.ht6 .hdr.hmod .hx .pl{opacity:0}
.phone.ht6 .hdr.hmod .hx.static .cloud,
.phone.ht6 .hdr.hmod .hx.static .pp,
.phone.ht6 .hdr.hmod .hx.static .ttl span,
.phone.ht6 .hdr.hmod .hx.static .pl{opacity:1}
.phone.ht6 .hdr.hmod .hx.static .sp{opacity:.55}

/* ---------- 进场（一次，约 1.7s 结束） ---------- */
.phone.ht6 .hdr.hmod .hx.in .cloud.front{animation:ht6CloudIn .7s cubic-bezier(.2,.8,.2,1) both}
.phone.ht6 .hdr.hmod .hx.in .cloud.back{animation:ht6CloudInBack .8s cubic-bezier(.2,.8,.2,1) .06s both}   /* 后云专属关键帧：终值即基础偏移，动画结束后双层云仍成立 */
.phone.ht6 .hdr.hmod .hx.in .pp{animation:ht6Pop .62s cubic-bezier(.34,1.56,.64,1) both}
.phone.ht6 .hdr.hmod .hx.in .p1{animation-delay:.30s}
.phone.ht6 .hdr.hmod .hx.in .p2{animation-delay:.46s}
.phone.ht6 .hdr.hmod .hx.in .p3{animation-delay:.62s}
.phone.ht6 .hdr.hmod .hx.in .p4{animation-delay:.78s}
.phone.ht6 .hdr.hmod .hx.in .ttl span{animation:ht6Rise .5s cubic-bezier(.2,.7,.2,1) both}
.phone.ht6 .hdr.hmod .hx.in .ttl .l1{animation-delay:.18s}
.phone.ht6 .hdr.hmod .hx.in .ttl .l2{animation-delay:.30s}
.phone.ht6 .hdr.hmod .hx.in .pl{animation:ht6Rise .45s cubic-bezier(.2,.7,.2,1) both}
.phone.ht6 .hdr.hmod .hx.in .pl:nth-child(1){animation-delay:.90s}
.phone.ht6 .hdr.hmod .hx.in .pl:nth-child(2){animation-delay:1.00s}
.phone.ht6 .hdr.hmod .hx.in .pl:nth-child(3){animation-delay:1.10s}
.phone.ht6 .hdr.hmod .hx.in .s1{animation:ht6Spark 1.3s ease-in-out 1.05s both}
.phone.ht6 .hdr.hmod .hx.in .s2{animation:ht6Spark 1.1s ease-in-out 1.25s both}

/* ---------- 循环：道具漂浮（不同周期 + 负延迟错相位）、云呼吸 ---------- */
.phone.ht6 .hdr.hmod .hx.in .p1 img{animation:ht6FloatA 3.6s ease-in-out -0.4s infinite}
.phone.ht6 .hdr.hmod .hx.in .p2 img{animation:ht6FloatC 4.2s ease-in-out -1.7s infinite}   /* 金币幅度更小，离状态栏留余量 */
.phone.ht6 .hdr.hmod .hx.in .p3 img{animation:ht6FloatB 3.9s ease-in-out -2.6s infinite}
.phone.ht6 .hdr.hmod .hx.in .p4 img{animation:ht6FloatA 4.6s ease-in-out -0.9s infinite}
.phone.ht6 .hdr.hmod .hx.in .cloud.front .cl{animation:ht6Breath 6s ease-in-out infinite}
.phone.ht6 .hdr.hmod .hx.in .cloud.back .cl{animation:ht6Breath 6s ease-in-out -3s infinite}

@keyframes ht6CloudIn{from{opacity:0;transform:translateY(8px) scale(.88)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes ht6CloudInBack{from{opacity:0;transform:translate(-10px,20px) scale(.92)}to{opacity:1;transform:translate(-10px,12px) scale(1.045)}}
@keyframes ht6Pop{from{opacity:0;transform:translateY(16px) scale(.25)}60%{opacity:1}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes ht6Rise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes ht6Spark{0%{opacity:0;transform:scale(.4) rotate(0deg)}45%{opacity:1;transform:scale(1.15) rotate(25deg)}100%{opacity:.55;transform:scale(1) rotate(40deg)}}
@keyframes ht6FloatA{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-4px) rotate(3deg)}}
@keyframes ht6FloatB{0%,100%{transform:translateY(0) rotate(3deg)}50%{transform:translateY(-3px) rotate(-3deg)}}
@keyframes ht6FloatC{0%,100%{transform:translateY(0) rotate(2deg)}50%{transform:translateY(-2px) rotate(-2deg)}}
@keyframes ht6Breath{0%,100%{transform:scale(1)}50%{transform:scale(1.02)}}

/* 系统「减少动态效果」：一律静态 */
@media (prefers-reduced-motion:reduce){
  .phone.ht6 .hdr.hmod .hx *{animation:none!important}
  .phone.ht6 .hdr.hmod .hx .cloud,.phone.ht6 .hdr.hmod .hx .pp,.phone.ht6 .hdr.hmod .hx .ttl span,.phone.ht6 .hdr.hmod .hx .pl{opacity:1}
  .phone.ht6 .hdr.hmod .hx .sp{opacity:.55}
}
`,

  html: (function () {
    var spk = typeof SPK !== "undefined" ? SPK : "";
    var blobs =
      '<i class="b b0"></i><i class="b b1"></i><i class="b b2"></i><i class="b b3"></i><i class="b b4"></i><i class="b b5"></i>';
    return (
      "" +
      '<div class="hx">' +
      '<div class="cloud back"><div class="cl">' +
      blobs +
      "</div></div>" +
      '<div class="cloud front"><div class="cl">' +
      blobs +
      '<i class="b bs"></i>' +
      "</div></div>" +
      '<div class="pp p1"><img src="{{IMG:assets/icon3d-bags.png}}" alt=""></div>' +
      '<div class="pp p2"><img src="{{IMG:assets/icon3d-coin.png}}" alt=""></div>' +
      '<div class="pp p3"><img src="{{IMG:assets/icon3d-search.png}}" alt=""></div>' +
      '<div class="pp p4"><img src="{{IMG:assets/icon3d-calendar.png}}" alt=""></div>' +
      '<span class="sp s1">' +
      spk +
      "</span>" +
      '<span class="sp s2">' +
      spk +
      "</span>" +
      '<h1 class="ttl"><span class="l1">Best Price</span><span class="l2">for All Purchases</span></h1>' +
      '<div class="pills">' +
      '<span class="pl"><i class="d d1"></i>Points-free</span>' +
      '<span class="pl"><i class="d d2"></i>Save more</span>' +
      '<span class="pl"><i class="d d3"></i>Worry less</span>' +
      "</div>" +
      "</div>"
    );
  })(),

  init: function (ph) {
    var hx = ph.querySelector(".hdr.hmod .hx");
    if (!hx) return null;
    var t = null;
    if (typeof REDUCED === "function" && REDUCED()) {
      hx.classList.add("static");
    } else {
      t = setTimeout(function () {
        hx.classList.add("in");
      }, 30);
    }
    return function () {
      if (t) clearTimeout(t);
    };
  },

  play: function (ph) {
    var hx = ph.querySelector(".hdr.hmod .hx");
    if (!hx) return;
    if (typeof REDUCED === "function" && REDUCED()) return;
    hx.classList.remove("in");
    void hx.offsetWidth; // 强制回流，让进场关键帧从头重放
    hx.classList.add("in");
  },
};
