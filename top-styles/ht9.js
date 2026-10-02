HT_MODS.ht9 = (function () {
  const SP = (window.TOP && TOP.header && TOP.header.sellingPoints) || [
    "Points-free",
    "Save more",
    "Worry less",
  ];
  const CK =
    '<svg class="ht9-ck" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="7"/><path d="M4.2 7.3l1.9 1.9 3.9-4.2" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const tags = SP.map((t) => `<span class="ht9-tag">${CK}${t}</span>`).join("");
  return {
    name: "⑨ 大字",
    desc: "海报式字体排印：标题拆成「BEST / PRICE」两行超大全大写字（蓝紫渐变实心 + 描边 hollow 字），PRICE 下衬一条淡粉荧光笔触，大字压在淡紫几何色块上，右侧 3D 购物袋踩着淡粉光圈；三条卖点变成「✓」小标签。进场两行大字依次自下滑入、笔触从左画出、标签逐枚亮起（约 1.5s），点击重放；循环只保留色块与道具的极轻漂浮。",
    css: `
.phone.ht9 .hdr.hmod{overflow:visible}
.phone.ht9 .hdr.hmod .ht9-wrap{position:absolute;left:0;top:0;width:393px;height:90px;pointer-events:none;font-family:var(--font-ui)}
/* 几何色块（装饰层，z 0） */
.phone.ht9 .hdr.hmod .ht9-blobf{position:absolute;pointer-events:none;z-index:0}
.phone.ht9 .hdr.hmod .ht9-blob{display:block}
.phone.ht9 .hdr.hmod .ht9-blobf-a{left:92px;top:-24px;animation:ht9float 7s ease-in-out infinite}
.phone.ht9 .hdr.hmod .ht9-blobf-a .ht9-blob{width:56px;height:56px;border-radius:14px;background:linear-gradient(135deg,#ECE6FF,#DAD1FF);transform:rotate(12deg)}
.phone.ht9 .hdr.hmod .ht9-blobf-b{left:130px;top:-14px;animation:ht9float 5.5s ease-in-out 1s infinite}
.phone.ht9 .hdr.hmod .ht9-blobf-b .ht9-blob{width:11px;height:11px;border-radius:50%;background:#FFC9DD}
.phone.ht9 .hdr.hmod .ht9-blobf-c{right:8px;top:6px;animation:ht9float 8s ease-in-out .5s infinite}
.phone.ht9 .hdr.hmod .ht9-blobf-c .ht9-blob{width:88px;height:88px;border-radius:50%;background:radial-gradient(circle at 50% 45%,#FFE3EE 0%,#FFEDF4 48%,rgba(255,237,244,0) 72%)}
/* 大字（z 1） */
.phone.ht9 .hdr.hmod .ht9-ttl{position:absolute;left:16px;top:-13px;z-index:1;display:flex;flex-direction:column;align-items:flex-start}
.phone.ht9 .hdr.hmod .ht9-l1,.phone.ht9 .hdr.hmod .ht9-l2{display:block;font-size:42px;line-height:38px;font-weight:800;letter-spacing:-1.4px;text-transform:uppercase;white-space:nowrap}
.phone.ht9 .hdr.hmod .ht9-l1{background:linear-gradient(95deg,#5856FF 0%,#3F7BFF 55%,#2FA6FF 100%);-webkit-background-clip:text;background-clip:text;color:transparent;padding-right:2px}
.phone.ht9 .hdr.hmod .ht9-row{display:flex;align-items:baseline;gap:9px;position:relative;margin-top:0}
.phone.ht9 .hdr.hmod .ht9-l2{position:relative;z-index:1;color:transparent;-webkit-text-stroke:1.6px #121E44;padding-right:2px}
.phone.ht9 .hdr.hmod .ht9-stroke{position:absolute;left:-3px;bottom:8px;width:126px;height:12px;z-index:0;overflow:visible}
.phone.ht9 .hdr.hmod .ht9-stroke path{fill:none;stroke:#FFC6DB;stroke-width:9;stroke-opacity:.95;stroke-linecap:round;stroke-dasharray:1 1.5;stroke-dashoffset:0}
.phone.ht9 .hdr.hmod .ht9-sub{position:relative;z-index:1;font-size:13px;line-height:16px;font-weight:600;color:#3E4E7A;letter-spacing:.1px;white-space:nowrap}
/* 3D 道具（z 1） */
.phone.ht9 .hdr.hmod .ht9-propf{position:absolute;right:18px;top:6px;width:74px;height:74px;z-index:1;pointer-events:none;animation:ht9float 5s ease-in-out .3s infinite}
.phone.ht9 .hdr.hmod .ht9-prop{display:block;width:74px;height:74px;object-fit:contain;filter:drop-shadow(0 8px 14px rgba(60,70,160,.18))}
/* 标签（z 1） */
.phone.ht9 .hdr.hmod .ht9-tags{position:absolute;left:16px;top:70px;z-index:1;display:flex;gap:6px;white-space:nowrap}
.phone.ht9 .hdr.hmod .ht9-tag{display:inline-flex;align-items:center;gap:4px;height:20px;padding:0 8px 0 5px;border-radius:10px;font-size:11.5px;line-height:20px;font-weight:600;letter-spacing:-.1px;color:#1B2650;background:#EEF0FF;border:1px solid rgba(84,96,255,.26);box-sizing:border-box}
.phone.ht9 .hdr.hmod .ht9-ck{width:12px;height:12px;display:block;flex-shrink:0}
.phone.ht9 .hdr.hmod .ht9-ck circle{fill:#3F6FFF}
/* ---- 进场（.ht9-on 触发；默认即终态） ---- */
.phone.ht9 .hdr.hmod.ht9-on .ht9-l1{animation:ht9up .4s cubic-bezier(.2,.7,.2,1) 0s both}
.phone.ht9 .hdr.hmod.ht9-on .ht9-l2{animation:ht9up .4s cubic-bezier(.2,.7,.2,1) .15s both}
.phone.ht9 .hdr.hmod.ht9-on .ht9-stroke path{animation:ht9draw .5s cubic-bezier(.3,.6,.2,1) .38s both}
.phone.ht9 .hdr.hmod.ht9-on .ht9-sub{animation:ht9fade .35s ease-out .5s both}
.phone.ht9 .hdr.hmod.ht9-on .ht9-prop{animation:ht9pop .5s cubic-bezier(.2,.8,.25,1.15) .45s both}
.phone.ht9 .hdr.hmod.ht9-on .ht9-blob{animation:ht9fade .5s ease-out .1s both}
.phone.ht9 .hdr.hmod.ht9-on .ht9-tag{animation:ht9fade .3s ease-out .55s both,ht9tag .32s ease-out both}
.phone.ht9 .hdr.hmod.ht9-on .ht9-tag:nth-child(1){animation-delay:.55s,.85s}
.phone.ht9 .hdr.hmod.ht9-on .ht9-tag:nth-child(2){animation-delay:.6s,1s}
.phone.ht9 .hdr.hmod.ht9-on .ht9-tag:nth-child(3){animation-delay:.65s,1.15s}
.phone.ht9 .hdr.hmod.ht9-on .ht9-tag .ht9-ck circle{animation:ht9ck .3s ease-out both}
.phone.ht9 .hdr.hmod.ht9-on .ht9-tag:nth-child(1) .ht9-ck circle{animation-delay:.85s}
.phone.ht9 .hdr.hmod.ht9-on .ht9-tag:nth-child(2) .ht9-ck circle{animation-delay:1s}
.phone.ht9 .hdr.hmod.ht9-on .ht9-tag:nth-child(3) .ht9-ck circle{animation-delay:1.15s}
/* 系统减少动态效果：全静态 */
.phone.ht9 .hdr.hmod.ht9-rm *{animation:none!important}
@keyframes ht9up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@keyframes ht9fade{from{opacity:0}to{opacity:1}}
@keyframes ht9draw{from{stroke-dashoffset:1.08}to{stroke-dashoffset:0}}
@keyframes ht9pop{from{opacity:0;transform:translateY(10px) scale(.82)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes ht9tag{0%{background:#FFFFFF;color:#98A1B6;border-color:rgba(20,30,70,.09);transform:scale(1)}55%{transform:scale(1.07)}100%{background:#EEF0FF;color:#1B2650;border-color:rgba(84,96,255,.26);transform:scale(1)}}
@keyframes ht9ck{from{fill:#CBD1DE}to{fill:#3F6FFF}}
@keyframes ht9float{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
`,
    html: `<div class="ht9-wrap">
  <span class="ht9-blobf ht9-blobf-c"><i class="ht9-blob"></i></span>
  <span class="ht9-blobf ht9-blobf-a"><i class="ht9-blob"></i></span>
  <span class="ht9-blobf ht9-blobf-b"><i class="ht9-blob"></i></span>
  <div class="ht9-ttl">
    <span class="ht9-l1">Best</span>
    <span class="ht9-row">
      <svg class="ht9-stroke" viewBox="0 0 126 12" aria-hidden="true"><path pathLength="1" d="M4 9 C 32 5, 84 2, 122 4"/></svg>
      <span class="ht9-l2">Price</span>
      <span class="ht9-sub">for All Purchases</span>
    </span>
  </div>
  <span class="ht9-propf"><img class="ht9-prop" src="{{IMG:assets/icon3d-bags.png}}" alt=""></span>
  <div class="ht9-tags">${tags}</div>
</div>`,
    init(ph) {
      const hm = ph.querySelector(".hdr.hmod");
      if (!hm) return null;
      hm.classList.remove("ht9-on", "ht9-rm");
      let raf = 0;
      if (REDUCED()) {
        hm.classList.add("ht9-rm");
      } else {
        raf = requestAnimationFrame(() => hm.classList.add("ht9-on"));
      }
      return () => {
        if (raf) cancelAnimationFrame(raf);
        hm.classList.remove("ht9-on");
      };
    },
    play(ph) {
      const hm = ph.querySelector(".hdr.hmod");
      if (!hm || REDUCED()) return;
      hm.classList.remove("ht9-on");
      void hm.offsetWidth;
      hm.classList.add("ht9-on");
    },
  };
})();
