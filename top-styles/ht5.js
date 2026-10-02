HT_MODS.ht5 = {
  name: "⑤ 海报",
  desc: "标题区变成一张活动主视觉：蓝→紫→粉渐变海报块，白色大字两行（「Best Price」斜切特大 + 「for All Purchases」小一号），底部三枚半透明胶囊卖点；购物袋与金币 3D 道具探出海报边缘、错相位慢速漂浮，进场时荧光笔划过「Price」、一道柔光从左扫到右，点击重放。",
  css: `
.phone.ht5 .hdr.hmod{overflow:visible}
.phone.ht5 .hdr.hmod .ht5-pst{position:absolute;left:16px;right:16px;top:4px;height:86px;border-radius:16px;isolation:isolate}
.phone.ht5 .hdr.hmod .ht5-bg{position:absolute;inset:0;border-radius:16px;overflow:hidden;pointer-events:none;z-index:0;
  background:
    radial-gradient(120px 70px at 92% 8%,rgba(255,255,255,.42) 0%,rgba(255,255,255,0) 70%),
    radial-gradient(160px 90px at 18% 112%,rgba(255,255,255,.18) 0%,rgba(255,255,255,0) 70%),
    radial-gradient(90px 60px at 62% -10%,rgba(255,214,245,.55) 0%,rgba(255,214,245,0) 70%),
    linear-gradient(112deg,#4F7BFF 0%,#6F86FF 30%,#A98BFF 62%,#D9A7EE 84%,#FFC4DD 100%);
  box-shadow:0 14px 28px -14px rgba(79,123,255,.6),0 3px 8px -3px rgba(110,100,230,.28),inset 0 1px 0 rgba(255,255,255,.35)}
.phone.ht5 .hdr.hmod .ht5-bg::before{content:"";position:absolute;inset:0;background:
    linear-gradient(180deg,rgba(255,255,255,0) 55%,rgba(60,40,160,.16) 100%)}
.phone.ht5 .hdr.hmod .ht5-bg::after{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.7) 40%,rgba(255,255,255,0) 90%)}
.phone.ht5 .hdr.hmod .ht5-ring{position:absolute;right:-30px;top:-62px;width:150px;height:150px;border-radius:50%;border:12px solid rgba(255,255,255,.11);box-sizing:border-box}
.phone.ht5 .hdr.hmod .ht5-ring2{position:absolute;left:170px;bottom:-72px;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.22) 0%,rgba(255,255,255,0) 70%)}
.phone.ht5 .hdr.hmod .ht5-sw{position:absolute;top:-30%;bottom:-30%;left:0;width:130px;opacity:0;pointer-events:none;
  background:linear-gradient(100deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.16) 30%,rgba(255,255,255,.6) 50%,rgba(255,255,255,.16) 70%,rgba(255,255,255,0) 100%);
  transform:translateX(-180px) skewX(-18deg)}
.phone.ht5 .hdr.hmod .ht5-star{position:absolute;color:#fff;pointer-events:none;z-index:1}
.phone.ht5 .hdr.hmod .ht5-star svg{display:block;width:100%;height:100%;fill:currentColor}
.phone.ht5 .hdr.hmod .ht5-s1{width:14px;height:14px;left:204px;top:9px;opacity:.9}
.phone.ht5 .hdr.hmod .ht5-s2{width:8px;height:8px;left:195px;top:31px;opacity:.6}
.phone.ht5 .hdr.hmod .ht5-s3{width:10px;height:10px;left:294px;top:57px;opacity:.75}

.phone.ht5 .hdr.hmod .ht5-ttl{position:absolute;left:14px;top:4px;z-index:2;color:#fff;pointer-events:none}
.phone.ht5 .hdr.hmod .ht5-b{display:block;font-size:30px;line-height:32px;font-weight:800;letter-spacing:-1px;white-space:nowrap;
  transform:skewX(-6deg);transform-origin:0 100%;text-shadow:0 2px 12px rgba(40,50,170,.28)}
.phone.ht5 .hdr.hmod .ht5-mk{position:relative;display:inline-block;isolation:isolate}
.phone.ht5 .hdr.hmod .ht5-mk::before{content:"";position:absolute;left:-5px;right:-7px;top:9px;bottom:1px;border-radius:7px 9px 8px 10px;z-index:-1;
  background:linear-gradient(90deg,rgba(255,255,255,.30),rgba(255,255,255,.16));transform:skewX(-10deg) scaleX(0);transform-origin:0 50%}
.phone.ht5 .hdr.hmod .ht5-s{display:block;margin-top:1px;font-size:13.5px;line-height:16px;font-weight:600;letter-spacing:.1px;color:rgba(255,255,255,.94);white-space:nowrap;
  transform:skewX(-6deg);transform-origin:0 100%}
.phone.ht5 .hdr.hmod .ht5-s::after{content:"";display:inline-block;width:22px;height:1px;margin:0 0 4px 8px;background:rgba(255,255,255,.55);vertical-align:middle}

.phone.ht5 .hdr.hmod .ht5-pills{position:absolute;left:14px;bottom:6px;display:flex;gap:6px;z-index:2;pointer-events:none}
.phone.ht5 .hdr.hmod .ht5-pills span{display:block;height:21px;line-height:19px;padding:0 9px;border-radius:11px;box-sizing:border-box;
  background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.42);color:#fff;font-size:10.5px;font-weight:600;letter-spacing:.1px;white-space:nowrap;
  -webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);box-shadow:0 1px 3px rgba(40,50,170,.12)}

.phone.ht5 .hdr.hmod .ht5-props{position:absolute;inset:0;pointer-events:none;z-index:3}
.phone.ht5 .hdr.hmod .ht5-p{position:absolute}
.phone.ht5 .hdr.hmod .ht5-p img{display:block;width:100%;height:auto;filter:drop-shadow(0 10px 12px rgba(50,40,140,.3))}
.phone.ht5 .hdr.hmod .ht5-p1{right:0;bottom:-2px;width:58px}
.phone.ht5 .hdr.hmod .ht5-p2{left:226px;top:-10px;width:41px}
.phone.ht5 .hdr.hmod .ht5-p2 img{filter:drop-shadow(0 8px 10px rgba(50,40,140,.28))}

/* 初始隐藏（进场前） */
.phone.ht5 .hdr.hmod .ht5-pst:not(.go):not(.done) .ht5-bg,
.phone.ht5 .hdr.hmod .ht5-pst:not(.go):not(.done) .ht5-b,
.phone.ht5 .hdr.hmod .ht5-pst:not(.go):not(.done) .ht5-s,
.phone.ht5 .hdr.hmod .ht5-pst:not(.go):not(.done) .ht5-pills span,
.phone.ht5 .hdr.hmod .ht5-pst:not(.go):not(.done) .ht5-p,
.phone.ht5 .hdr.hmod .ht5-pst:not(.go):not(.done) .ht5-star{opacity:0}
.phone.ht5 .hdr.hmod .ht5-pst.done .ht5-mk::before{transform:skewX(-10deg) scaleX(1)}

/* 进场 */
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-bg{animation:ht5In .55s cubic-bezier(.2,.8,.2,1) both}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-b{animation:ht5SlideL .6s cubic-bezier(.2,.8,.2,1) .12s both}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-s{animation:ht5SlideL .55s cubic-bezier(.2,.8,.2,1) .26s both}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-mk::before{animation:ht5Mark .5s cubic-bezier(.3,.7,.2,1) .42s both}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-pills span{animation:ht5Pop .5s cubic-bezier(.2,.9,.3,1.3) both}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-pills span:nth-child(1){animation-delay:.42s}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-pills span:nth-child(2){animation-delay:.5s}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-pills span:nth-child(3){animation-delay:.58s}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-p1{animation:ht5Rise .7s cubic-bezier(.2,.9,.3,1.25) .3s both}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-p2{animation:ht5Rise .7s cubic-bezier(.2,.9,.3,1.25) .45s both}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-star{animation:ht5Twinkle 2.8s ease-in-out .8s infinite,ht5Fade .4s ease .7s both}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-s2{animation-delay:1.9s,.8s}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-s3{animation-delay:1.2s,.9s}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-sw{animation:ht5Sweep 1.2s cubic-bezier(.45,0,.2,1) .5s both}
.phone.ht5 .hdr.hmod .ht5-pst.go .ht5-b{text-shadow:0 2px 12px rgba(40,50,170,.28)}

/* 循环漂浮（道具图自身） */
.phone.ht5 .hdr.hmod .ht5-p1 img{animation:ht5FloatA 4.4s ease-in-out infinite}
.phone.ht5 .hdr.hmod .ht5-p2 img{animation:ht5FloatB 3.6s ease-in-out -1.4s infinite}

@keyframes ht5In{0%{opacity:0;transform:translateY(8px) scale(.985)}100%{opacity:1;transform:none}}
@keyframes ht5SlideL{0%{opacity:0;transform:skewX(-6deg) translateX(-16px)}100%{opacity:1;transform:skewX(-6deg) translateX(0)}}
@keyframes ht5Mark{0%{transform:skewX(-10deg) scaleX(0)}100%{transform:skewX(-10deg) scaleX(1)}}
@keyframes ht5Pop{0%{opacity:0;transform:translateY(8px) scale(.85)}100%{opacity:1;transform:none}}
@keyframes ht5Rise{0%{opacity:0;transform:translateY(16px) scale(.82)}100%{opacity:1;transform:none}}
@keyframes ht5Fade{0%{opacity:0}100%{opacity:1}}
@keyframes ht5Twinkle{0%,100%{transform:scale(1) rotate(0)}50%{transform:scale(.72) rotate(18deg)}}
@keyframes ht5Sweep{0%{opacity:0;transform:translateX(-180px) skewX(-18deg)}10%{opacity:1}90%{opacity:1}100%{opacity:0;transform:translateX(430px) skewX(-18deg)}}
@keyframes ht5FloatA{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-5px) rotate(1deg)}}
@keyframes ht5FloatB{0%,100%{transform:translateY(0) rotate(5deg)}50%{transform:translateY(-4px) rotate(-3deg)}}

@media (prefers-reduced-motion:reduce){
  .phone.ht5 .hdr.hmod .ht5-pst *,.phone.ht5 .hdr.hmod .ht5-pst *::before{animation:none!important}
  .phone.ht5 .hdr.hmod .ht5-pst .ht5-mk::before{transform:skewX(-10deg) scaleX(1)}
}
`,
  html: `
<div class="ht5-pst">
  <div class="ht5-bg">
    <i class="ht5-ring"></i><i class="ht5-ring2"></i>
    <i class="ht5-sw"></i>
  </div>
  <i class="ht5-star ht5-s1"><svg viewBox="0 0 24 24"><path d="M12 1.5l2.1 7.6 7.6 2.1-7.6 2.1L12 21l-2.1-7.7-7.6-2.1 7.6-2.1z"/></svg></i>
  <i class="ht5-star ht5-s2"><svg viewBox="0 0 24 24"><path d="M12 1.5l2.1 7.6 7.6 2.1-7.6 2.1L12 21l-2.1-7.7-7.6-2.1 7.6-2.1z"/></svg></i>
  <i class="ht5-star ht5-s3"><svg viewBox="0 0 24 24"><path d="M12 1.5l2.1 7.6 7.6 2.1-7.6 2.1L12 21l-2.1-7.7-7.6-2.1 7.6-2.1z"/></svg></i>
  <h1 class="ht5-ttl"><span class="ht5-b">Best <span class="ht5-mk">Price</span></span><span class="ht5-s">for All Purchases</span></h1>
  <div class="ht5-pills"><span>Points-free</span><span>Save more</span><span>Worry less</span></div>
  <div class="ht5-props">
    <i class="ht5-p ht5-p2"><img src="{{IMG:assets/icon3d-coin.png}}" alt=""></i>
    <i class="ht5-p ht5-p1"><img src="{{IMG:assets/icon3d-bags.png}}" alt=""></i>
  </div>
</div>`,
  init(ph) {
    const root = ph.querySelector(".hdr.hmod .ht5-pst");
    const timers = [];
    if (!root) return () => {};
    if (REDUCED()) {
      root.classList.add("done");
    } else {
      timers.push(setTimeout(() => root.classList.add("go"), 40));
    }
    return () => {
      timers.forEach(clearTimeout);
    };
  },
  play(ph) {
    const root = ph.querySelector(".hdr.hmod .ht5-pst");
    if (!root || REDUCED()) return;
    root.classList.remove("go");
    void root.offsetWidth;
    root.classList.add("go");
  },
};
