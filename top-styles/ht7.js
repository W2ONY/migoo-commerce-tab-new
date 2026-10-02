// ht7 ⑦ 卡片 —— 「卡片 + 手写」：浅色圆角卡 + 左上叠放商品小图 + 手写笔触自绘 + 右下 Try now 胶囊
HT_MODS.ht7 = {
  name: '⑦ 卡片',
  desc: '标题区做成一张浅色圆角卡：左上两张倾斜叠放的商品小图探出卡顶，右侧「Best Price / for All Purchases」左对齐两行，一条蓝紫手写笔触从图片下方掠到标题下自己画出来，卖点一行小灰字，右下黑色胶囊 Try now。进场时两张图依次落位、笔触自绘；之后小图轻微漂浮、卡面偶有一道微光；点击重放。',
  css: `
.phone.ht7 .hdr.hmod{overflow:visible}
.phone.ht7 .hdr.hmod .ht7-card{position:absolute;left:16px;right:16px;top:0;height:90px;border-radius:18px;
  background:linear-gradient(135deg,#FFFFFF 0%,#F7F8FF 55%,#F3EEFF 100%);
  box-shadow:0 10px 26px rgba(79,91,213,.12),0 1px 2px rgba(8,16,33,.05),inset 0 0 0 1px rgba(255,255,255,.9);
  pointer-events:none}
.phone.ht7 .hdr.hmod .ht7-card::before{content:"";position:absolute;inset:0;border-radius:18px;pointer-events:none;
  background:radial-gradient(150px 90px at 92% 12%,rgba(123,97,255,.14),rgba(123,97,255,0) 70%),radial-gradient(120px 80px at 6% 100%,rgba(255,170,210,.16),rgba(255,170,210,0) 70%)}
.phone.ht7 .hdr.hmod .ht7-card::after{content:"";position:absolute;inset:0;border-radius:18px;pointer-events:none;
  background:linear-gradient(105deg,rgba(255,255,255,0) 42%,rgba(255,255,255,.75) 50%,rgba(255,255,255,0) 58%);
  background-size:260% 100%;background-position:120% 0;background-repeat:no-repeat;opacity:.9}
.phone.ht7.ht7-go .hdr.hmod .ht7-card::after{animation:ht7shine 7s linear 2.2s infinite}

/* 叠放商品小图 */
.phone.ht7 .hdr.hmod .ht7-pics{position:absolute;left:12px;top:-14px;width:96px;height:66px;pointer-events:none}
.phone.ht7 .hdr.hmod .ht7-pic{position:absolute;width:50px;height:50px;transform-origin:50% 60%}
.phone.ht7 .hdr.hmod .ht7-pic.a{left:0;top:0;transform:rotate(-9deg);z-index:1}
.phone.ht7 .hdr.hmod .ht7-pic.b{left:34px;top:11px;transform:rotate(7deg);z-index:2}
.phone.ht7 .hdr.hmod .ht7-pf{position:absolute;inset:0;background:#fff;border-radius:11px;padding:3px;
  box-shadow:0 6px 14px rgba(8,16,33,.16),0 1px 2px rgba(8,16,33,.08)}
.phone.ht7 .hdr.hmod .ht7-pf i{display:block;position:relative;width:44px;height:44px;border-radius:8px;overflow:hidden;background:#EEF0F6}
.phone.ht7 .hdr.hmod .ht7-pf img{position:absolute;display:block;width:175%;height:175%;object-fit:cover}
.phone.ht7 .hdr.hmod .ht7-pic.a img{width:165%;height:165%;left:-27%;top:-40%}
.phone.ht7 .hdr.hmod .ht7-pic.b img{left:-35%;top:-42%}
.phone.ht7 .hdr.hmod .ht7-spk{position:absolute;left:84px;top:4px;width:14px;height:14px;color:#6E7CFF;z-index:3}
.phone.ht7 .hdr.hmod .ht7-spk svg{width:14px;height:14px;display:block}

/* 右上淡色小标签 */
.phone.ht7 .hdr.hmod .ht7-tag{position:absolute;right:10px;top:6px;height:19px;padding:0 7px;border-radius:999px;
  display:flex;align-items:center;gap:3px;font-size:9.5px;line-height:19px;font-weight:600;letter-spacing:.1px;
  color:#4F5BD5;background:rgba(91,108,255,.10);white-space:nowrap}
.phone.ht7 .hdr.hmod .ht7-tag svg{width:9px;height:9px;display:block}

/* 标题两行 */
.phone.ht7 .hdr.hmod .ht7-t1{position:absolute;left:108px;top:6px;margin:0;font-size:26px;line-height:30px;font-weight:800;
  letter-spacing:-.8px;color:#081021;white-space:nowrap}
.phone.ht7 .hdr.hmod .ht7-t2{position:absolute;left:109px;top:36px;font-size:14px;line-height:18px;font-weight:600;
  letter-spacing:-.2px;color:#3C4356;white-space:nowrap}

/* 手写笔触 */
.phone.ht7 .hdr.hmod .ht7-ink{position:absolute;left:0;top:0;width:361px;height:90px;pointer-events:none;overflow:visible}
.phone.ht7 .hdr.hmod .ht7-ink path{fill:none;stroke:url(#ht7g);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;
  stroke-dasharray:300;stroke-dashoffset:0}

/* 卖点一行 */
.phone.ht7 .hdr.hmod .ht7-sell{position:absolute;left:18px;top:70px;font-size:11px;line-height:14px;font-weight:500;
  color:#6B7280;letter-spacing:-.1px;white-space:nowrap}
.phone.ht7 .hdr.hmod .ht7-sell i{font-style:normal;color:#B3B9FF;margin:0 5px}

/* 右下胶囊按钮 */
.phone.ht7 .hdr.hmod .ht7-btn{position:absolute;right:26px;bottom:10px;height:28px;padding:0 11px 0 13px;border:0;border-radius:999px;
  background:#0B1222;color:#fff;font-size:11.5px;line-height:28px;font-weight:600;font-family:inherit;letter-spacing:.1px;white-space:nowrap;
  display:flex;align-items:center;gap:5px;cursor:pointer;pointer-events:auto;
  box-shadow:0 5px 12px rgba(8,16,33,.22);transition:transform .16s ease,box-shadow .16s ease;-webkit-tap-highlight-color:transparent}
.phone.ht7 .hdr.hmod .ht7-btn svg{width:11px;height:11px;display:block;transition:transform .2s ease}
.phone.ht7 .hdr.hmod .ht7-btn.ht7-press,.phone.ht7 .hdr.hmod .ht7-btn:active{transform:scale(.94);box-shadow:0 2px 6px rgba(8,16,33,.2)}
.phone.ht7 .hdr.hmod .ht7-btn.ht7-press svg{transform:translateX(2px)}

/* ===== 进场动画（仅 .ht7-go 时播放；REDUCED 时不加该类即为静态终态） ===== */
.phone.ht7.ht7-go .hdr.hmod .ht7-card{animation:ht7card .55s cubic-bezier(.2,.8,.2,1) both}
.phone.ht7.ht7-go .hdr.hmod .ht7-pic.a{animation:ht7picA .62s cubic-bezier(.2,.9,.3,1.18) .12s both}
.phone.ht7.ht7-go .hdr.hmod .ht7-pic.b{animation:ht7picB .62s cubic-bezier(.2,.9,.3,1.18) .3s both}
.phone.ht7.ht7-go .hdr.hmod .ht7-pf{animation:ht7float 3.8s ease-in-out 1.2s infinite}
.phone.ht7.ht7-go .hdr.hmod .ht7-pic.b .ht7-pf{animation-delay:1.9s;animation-duration:4.4s}
.phone.ht7.ht7-go .hdr.hmod .ht7-spk{animation:ht7spk 2.6s ease-in-out .9s infinite}
.phone.ht7.ht7-go .hdr.hmod .ht7-t1{animation:ht7rise .5s cubic-bezier(.2,.8,.2,1) .2s both}
.phone.ht7.ht7-go .hdr.hmod .ht7-t2{animation:ht7rise .5s cubic-bezier(.2,.8,.2,1) .32s both}
.phone.ht7.ht7-go .hdr.hmod .ht7-tag{animation:ht7pop .45s cubic-bezier(.2,.9,.3,1.2) .45s both}
.phone.ht7.ht7-go .hdr.hmod .ht7-ink path{animation:ht7draw 1.2s cubic-bezier(.4,0,.2,1) .55s both}
.phone.ht7.ht7-go .hdr.hmod .ht7-sell{animation:ht7rise .5s cubic-bezier(.2,.8,.2,1) 1.0s both}
.phone.ht7.ht7-go .hdr.hmod .ht7-btn{animation:ht7pop .5s cubic-bezier(.2,.9,.3,1.2) .75s backwards}

@keyframes ht7card{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}
@keyframes ht7picA{from{opacity:0;transform:translate(-16px,-20px) rotate(-24deg)}to{opacity:1;transform:rotate(-9deg)}}
@keyframes ht7picB{from{opacity:0;transform:translate(14px,-18px) rotate(22deg)}to{opacity:1;transform:rotate(7deg)}}
@keyframes ht7rise{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}
@keyframes ht7pop{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:none}}
@keyframes ht7draw{from{stroke-dashoffset:300}to{stroke-dashoffset:0}}
@keyframes ht7float{0%,100%{transform:translateY(0)}50%{transform:translateY(-1.6px)}}
@keyframes ht7spk{0%,100%{opacity:.35;transform:scale(.8) rotate(0)}50%{opacity:1;transform:scale(1) rotate(12deg)}}
@keyframes ht7shine{0%{background-position:120% 0}18%{background-position:-60% 0}100%{background-position:-60% 0}}
`,
  html: (function(){
    var sp = (typeof TOP!=='undefined' && TOP.header && TOP.header.sellingPoints) ? TOP.header.sellingPoints : ['Points-free','Save more','Worry less'];
    var sell = sp.map(function(s){return '<span>'+s+'</span>';}).join('<i>·</i>');
    var star = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 .8l1.9 5.3 5.3 1.9-5.3 1.9L8 15.2l-1.9-5.3L.8 8l5.3-1.9z" fill="currentColor"/></svg>';
    return ''+
'<div class="ht7-card" aria-hidden="true">'+
  '<svg class="ht7-ink" viewBox="0 0 361 90" aria-hidden="true">'+
    '<defs><linearGradient id="ht7g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5B6CFF"/><stop offset="1" stop-color="#A97BFF"/></linearGradient></defs>'+
    '<path d="M38 56 C52 70 78 68 102 62 C126 56 148 63 174 60 C200 57 216 53 234 55 C244 57 242 64 230 63"/>'+
  '</svg>'+
  '<div class="ht7-pics">'+
    '<div class="ht7-pic a"><div class="ht7-pf"><i><img src="{{IMG:assets/figma/chair.png}}" alt=""></i></div></div>'+
    '<div class="ht7-pic b"><div class="ht7-pf"><i><img src="{{IMG:assets/figma/bag.png}}" alt=""></i></div></div>'+
    '<span class="ht7-spk">'+star+'</span>'+
  '</div>'+
  '<span class="ht7-tag">'+star+'Best Price for you</span>'+
  '<h1 class="ht7-t1">Best Price</h1>'+
  '<div class="ht7-t2">for All Purchases</div>'+
  '<div class="ht7-sell">'+sell+'</div>'+
'</div>'+
'<button type="button" class="ht7-btn" aria-label="Try now">Try now<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 6h8M6.5 2.5 10 6l-3.5 3.5"/></svg></button>';
  })(),
  init: function(ph){
    var slot = ph.querySelector('.hdr.hmod');
    var btn = slot && slot.querySelector('.ht7-btn');
    var timers = [];
    var onDown = function(){ btn.classList.add('ht7-press'); };
    var onUp = function(){ timers.push(setTimeout(function(){ btn.classList.remove('ht7-press'); }, 160)); };
    var onClick = function(e){
      e.stopPropagation();                      // 按钮不触发标题区重放
      btn.classList.add('ht7-press');
      timers.push(setTimeout(function(){ btn.classList.remove('ht7-press'); }, 220));
      if (typeof window.openFocus === 'function') { try { window.openFocus(ph); } catch(_){} }
    };
    if (btn){
      btn.addEventListener('pointerdown', onDown);
      btn.addEventListener('pointerup', onUp);
      btn.addEventListener('pointercancel', onUp);
      btn.addEventListener('click', onClick);
    }
    ph.classList.remove('ht7-go');
    var raf = 0;
    if (!(typeof REDUCED === 'function' && REDUCED())) {
      raf = requestAnimationFrame(function(){ ph.classList.add('ht7-go'); });
    }
    return function(){
      timers.forEach(clearTimeout); if (raf) cancelAnimationFrame(raf);
      if (btn){ btn.removeEventListener('pointerdown', onDown); btn.removeEventListener('pointerup', onUp);
        btn.removeEventListener('pointercancel', onUp); btn.removeEventListener('click', onClick); }
      ph.classList.remove('ht7-go');
    };
  },
  play: function(ph){
    if (typeof REDUCED === 'function' && REDUCED()) return;
    ph.classList.remove('ht7-go');
    void ph.offsetWidth;                         // 强制 reflow 以重启 CSS 动画
    ph.classList.add('ht7-go');
  }
};
