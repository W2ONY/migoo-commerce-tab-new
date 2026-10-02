HT_MODS.ht8 = {
  name: "⑧ 吉祥物",
  desc: "左侧两行左对齐大字（「Best Price」蓝紫渐变 + 手绘波浪线，「for All Purchases」深灰），下方三枚利益点胶囊；右侧大号 Migoo 吉祥物坐在淡紫圆底上、探进顶栏行，头顶弹出「Hi!」气泡。微动效：标题从左淡入、波浪线画出、胶囊依次浮现；吉祥物回弹落位后缓慢漂浮并偶尔歪头挥手，气泡弹出 2s 后淡出，点击标题区重放。",
  css: `
.phone.ht8 .hdr.hmod{--ht8g:linear-gradient(92deg,#3D6BFF 0%,#7A5CFF 55%,#C45CFF 100%)}
.phone.ht8 .hdr.hmod .ht8{position:absolute;inset:0;overflow:visible}
.phone.ht8 .hdr.hmod .ht8-t{position:absolute;left:16px;top:0;margin:0;padding:0;display:block;font:inherit;letter-spacing:0;text-align:left;text-wrap:initial;white-space:nowrap}
.phone.ht8 .hdr.hmod .ht8-l1{display:block;font-size:32px;line-height:36px;font-weight:800;letter-spacing:-1px;background:var(--ht8g);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;padding-right:6px;animation:ht8inL .6s cubic-bezier(.2,.7,.2,1) .05s both}
.phone.ht8 .hdr.hmod .ht8-l2{display:block;margin-top:2px;font-size:20px;line-height:24px;font-weight:600;letter-spacing:-.4px;color:#2A2E3B;animation:ht8inL .6s cubic-bezier(.2,.7,.2,1) .17s both}
.phone.ht8 .hdr.hmod .ht8-u{position:absolute;left:17px;top:31px;width:154px;height:11px;pointer-events:none;overflow:visible}
.phone.ht8 .hdr.hmod .ht8-u path{fill:none;stroke:#8A5CFF;stroke-width:2.4;stroke-linecap:round;stroke-dasharray:172;stroke-dashoffset:172;animation:ht8draw .7s ease-out .55s forwards}
.phone.ht8 .hdr.hmod .ht8-p{position:absolute;left:16px;top:66px;display:flex;gap:6px;white-space:nowrap}
.phone.ht8 .hdr.hmod .ht8-p span{display:inline-flex;align-items:center;gap:5px;height:20px;padding:0 9px 0 7px;border-radius:999px;background:rgba(255,255,255,.8);border:1px solid rgba(96,84,255,.14);font-size:11.5px;line-height:20px;font-weight:500;color:#444857;letter-spacing:-.1px;box-shadow:0 1px 2px rgba(60,50,160,.06);animation:ht8inU .5s cubic-bezier(.2,.7,.2,1) both}
.phone.ht8 .hdr.hmod .ht8-p span::before{content:"";width:6px;height:6px;border-radius:50%;background:#3D6BFF;flex:none}
.phone.ht8 .hdr.hmod .ht8-p span:nth-child(1){animation-delay:.36s}
.phone.ht8 .hdr.hmod .ht8-p span:nth-child(2){animation-delay:.46s}
.phone.ht8 .hdr.hmod .ht8-p span:nth-child(2)::before{background:#7A5CFF}
.phone.ht8 .hdr.hmod .ht8-p span:nth-child(3){animation-delay:.56s}
.phone.ht8 .hdr.hmod .ht8-p span:nth-child(3)::before{background:#C45CFF}
.phone.ht8 .hdr.hmod .ht8-m{position:absolute;left:222px;top:-18px;width:76px;height:76px;cursor:pointer;animation:ht8pop .75s cubic-bezier(.34,1.56,.64,1) .22s both}
.phone.ht8 .hdr.hmod .ht8-mf{position:absolute;inset:0;animation:ht8float 3.6s ease-in-out 1.1s infinite}
.phone.ht8 .hdr.hmod .ht8-mt{position:absolute;inset:0;transform-origin:50% 82%;animation:ht8tilt 7.5s ease-in-out 2.6s infinite}
.phone.ht8 .hdr.hmod .ht8-ring{position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 36% 28%,#F7F2FF 0%,#EAE1FF 52%,#DCD0FF 100%);box-shadow:0 12px 26px -10px rgba(110,80,255,.42),inset 0 -2px 6px rgba(140,110,255,.14)}
.phone.ht8 .hdr.hmod .ht8-m img{position:absolute;left:50%;top:50%;width:54px;height:54px;margin:-26px 0 0 -27px;object-fit:contain;filter:drop-shadow(0 5px 8px rgba(90,60,220,.22));pointer-events:none;opacity:0;transition:opacity .2s}
.phone.ht8 .hdr.hmod .ht8-m.ht8-ready img{opacity:1}
.phone.ht8 .hdr.hmod .ht8-hi{position:absolute;left:231px;top:-44px;height:22px;padding:0 9px;border-radius:11px;background:#fff;box-shadow:0 4px 12px rgba(80,60,200,.2);transform-origin:72% 115%;pointer-events:none;animation:ht8hi 2.25s ease-out .7s both}
.phone.ht8 .hdr.hmod .ht8-hi b{display:block;font-size:12.5px;line-height:22px;font-weight:800;letter-spacing:-.2px;background:var(--ht8g);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}
.phone.ht8 .hdr.hmod .ht8-hi::after{content:"";position:absolute;right:8px;bottom:-3px;width:8px;height:8px;background:#fff;border-radius:1px;transform:rotate(45deg)}
.phone.ht8 .hdr.hmod .ht8-s{position:absolute;color:#8E7CFF;pointer-events:none;animation:ht8twk 2.6s ease-in-out infinite}
.phone.ht8 .hdr.hmod .ht8-s svg{width:100%;height:100%;display:block}
.phone.ht8 .hdr.hmod .ht8-s1{left:206px;top:-14px;width:13px;height:13px;animation-delay:1.3s}
.phone.ht8 .hdr.hmod .ht8-s2{left:299px;top:50px;width:9px;height:9px;color:#C45CFF;animation-delay:2.1s}
.phone.ht8 .hdr.hmod .ht8-m.ht8-wave .ht8-mt{animation:ht8wave .9s ease-in-out 0s 1}
.phone.ht8 .hdr.hmod .ht8-halo{position:absolute;left:208px;top:-32px;width:104px;height:104px;border-radius:50%;background:radial-gradient(circle,rgba(190,140,255,.26) 0%,rgba(190,140,255,.1) 40%,rgba(190,140,255,0) 68%);pointer-events:none;animation:ht8halo 4.2s ease-in-out 1.2s infinite}
@keyframes ht8halo{0%,100%{transform:scale(.94);opacity:.8}50%{transform:scale(1.06);opacity:1}}
@keyframes ht8inL{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:none}}
@keyframes ht8inU{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}
@keyframes ht8draw{to{stroke-dashoffset:0}}
@keyframes ht8pop{from{opacity:0;transform:scale(.55) translateY(10px)}to{opacity:1;transform:none}}
@keyframes ht8float{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
@keyframes ht8tilt{0%,68%{transform:rotate(0)}72%{transform:rotate(-8deg)}77%{transform:rotate(7deg)}82%{transform:rotate(-5deg)}87%,100%{transform:rotate(0)}}
@keyframes ht8wave{0%{transform:rotate(0)}22%{transform:rotate(-9deg)}48%{transform:rotate(8deg)}72%{transform:rotate(-5deg)}100%{transform:rotate(0)}}
@keyframes ht8hi{0%{opacity:0;transform:scale(0)}15%{opacity:1;transform:scale(1.14)}24%{transform:scale(1)}81%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.86) translateY(-3px)}}
@keyframes ht8twk{0%,100%{opacity:.25;transform:scale(.75) rotate(0)}50%{opacity:1;transform:scale(1.05) rotate(18deg)}}
.phone.ht8.ht8-static .hdr.hmod *{animation:none!important}
.phone.ht8.ht8-static .hdr.hmod .ht8-l1,.phone.ht8.ht8-static .hdr.hmod .ht8-l2,.phone.ht8.ht8-static .hdr.hmod .ht8-p span,.phone.ht8.ht8-static .hdr.hmod .ht8-m,.phone.ht8.ht8-static .hdr.hmod .ht8-hi{opacity:1;transform:none}
.phone.ht8.ht8-static .hdr.hmod .ht8-u path{stroke-dashoffset:0}
.phone.ht8.ht8-static .hdr.hmod .ht8-s{opacity:.7}
`,
  html: `<div class="ht8">
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><linearGradient x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3D6BFF"/><stop offset=".6" stop-color="#8A5CFF"/><stop offset="1" stop-color="#C45CFF"/></linearGradient></defs></svg>
  <h1 class="ht8-t"><span class="ht8-l1 ht8-rep">Best Price</span><span class="ht8-l2 ht8-rep">for All Purchases</span></h1>
  <svg class="ht8-u" viewBox="0 0 154 11" aria-hidden="true"><path class="ht8-rep" d="M2 7.5C28 2.5 52 9.5 78 5.5S128 2 152 5"/></svg>
  <div class="ht8-p"><span class="ht8-rep">Points-free</span><span class="ht8-rep">Save more</span><span class="ht8-rep">Worry less</span></div>
  <i class="ht8-s ht8-s1" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 2.5c.7 5.4 3.9 8.6 9.5 9.5-5.6.9-8.8 4.1-9.5 9.5-.7-5.4-3.9-8.6-9.5-9.5 5.6-.9 8.8-4.1 9.5-9.5Z"/></svg></i>
  <i class="ht8-s ht8-s2" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5c.7 5.4 3.9 8.6 9.5 9.5-5.6.9-8.8 4.1-9.5 9.5-.7-5.4-3.9-8.6-9.5-9.5 5.6-.9 8.8-4.1 9.5-9.5Z"/></svg></i>
  <i class="ht8-halo" aria-hidden="true"></i>
  <div class="ht8-m ht8-rep" role="img" aria-label="Migoo"><div class="ht8-mf"><div class="ht8-mt"><i class="ht8-ring"></i><img src="{{IMG:assets/migoo-logo.png}}" alt=""></div></div></div>
  <div class="ht8-hi ht8-rep" aria-hidden="true"><b>Hi!</b></div>
</div>`,
  // 吉祥物 PNG 自带不透明白底：从四角泛洪把外部白色置透明（眼白被彩环包住，不受影响），结果缓存复用
  _prep(src, cb) {
    const me = HT_MODS.ht8;
    if (me._cut) {
      cb(me._cut);
      return null;
    }
    const im = new Image();
    im.onload = () => {
      try {
        const w = im.naturalWidth,
          h = im.naturalHeight;
        const c = document.createElement("canvas");
        c.width = w;
        c.height = h;
        const x = c.getContext("2d");
        x.drawImage(im, 0, 0);
        const d = x.getImageData(0, 0, w, h),
          a = d.data,
          n = w * h;
        const seen = new Uint8Array(n),
          st = [0, w - 1, (h - 1) * w, n - 1];
        const bg = [0, 1, 2].map((k) =>
          Math.round(
            (a[k] +
              a[(w - 1) * 4 + k] +
              a[(h - 1) * w * 4 + k] +
              a[(n - 1) * 4 + k]) /
              4,
          ),
        );
        const dist = (i) =>
          Math.max(
            Math.abs(a[i * 4] - bg[0]),
            Math.abs(a[i * 4 + 1] - bg[1]),
            Math.abs(a[i * 4 + 2] - bg[2]),
          );
        const isW = (i) => dist(i) < 24;
        while (st.length) {
          const i = st.pop();
          if (seen[i] || !isW(i)) continue;
          seen[i] = 1;
          a[i * 4 + 3] = 0;
          const px = i % w,
            py = (i / w) | 0;
          if (px > 0) st.push(i - 1);
          if (px < w - 1) st.push(i + 1);
          if (py > 0) st.push(i - w);
          if (py < h - 1) st.push(i + w);
        }
        for (let i = 0; i < n; i++) {
          if (seen[i]) continue;
          const px = i % w,
            py = (i / w) | 0;
          const nb =
            (px > 0 && seen[i - 1]) ||
            (px < w - 1 && seen[i + 1]) ||
            (py > 0 && seen[i - w]) ||
            (py < h - 1 && seen[i + w]);
          if (!nb) continue;
          const dd = dist(i);
          if (dd < 96) a[i * 4 + 3] = Math.round((255 * dd) / 96);
        }
        x.putImageData(d, 0, 0);
        me._cut = c.toDataURL("image/png");
        cb(me._cut);
      } catch (e) {
        cb(null);
      }
    };
    im.onerror = () => cb(null);
    im.src = src;
    return im;
  },
  init(ph) {
    const timers = [];
    if (REDUCED()) ph.classList.add("ht8-static");
    ph.__ht8timers = timers;
    // 波浪线渐变：不用静态 id（页面会多次重渲染 / 多实例同屏），每次挂载生成唯一 id 再 inline 引用
    const ug = ph.querySelector(".hdr.hmod .ht8 linearGradient"),
      up = ph.querySelector(".hdr.hmod .ht8-u path");
    if (ug && up) {
      const uid =
        "ht8ug" +
        Math.random().toString(36).slice(2, 7) +
        Date.now().toString(36).slice(-3);
      ug.setAttribute("id", uid);
      up.style.stroke = "url(#" + uid + ")";
    }
    const m = ph.querySelector(".hdr.hmod .ht8-m"),
      img = m && m.querySelector("img");
    let im = null;
    if (img) {
      im = HT_MODS.ht8._prep(img.getAttribute("src"), (url) => {
        if (url) img.src = url;
        m.classList.add("ht8-ready");
      });
    }
    return () => {
      timers.forEach(clearTimeout);
      timers.length = 0;
      ph.classList.remove("ht8-static");
      if (up) up.style.stroke = "";
      if (im) {
        im.onload = null;
        im.onerror = null;
      }
    };
  },
  play(ph) {
    if (REDUCED()) return;
    const hdr = ph.querySelector(".hdr.hmod");
    if (!hdr) return;
    const els = hdr.querySelectorAll(".ht8-rep");
    els.forEach((e) => {
      e.style.animation = "none";
    });
    void hdr.offsetWidth;
    els.forEach((e) => {
      e.style.animation = "";
    });
    const m = hdr.querySelector(".ht8-m");
    if (m) {
      m.classList.remove("ht8-wave");
      void m.offsetWidth;
      m.classList.add("ht8-wave");
      const t = setTimeout(() => m.classList.remove("ht8-wave"), 950);
      (ph.__ht8timers || []).push(t);
    }
  },
};
