/* ============================================================
   15分钟医疗圈 · 网页交互
   原生 JS，无依赖，双击离线可用
   - 滚动淡入揭示（块级）
   - 滚动进度轴（右侧）
   - 导航当前章节高亮 / 数字滚动 / 问题链点亮
   - 三层视差滚动（背景慢 / 中景中 / 前景快）
   ============================================================ */
(function () {
  'use strict';
  var container = document.getElementById('app');
  if (!container) return;

  /* ---------- 1. 通用 IntersectionObserver 工具 ---------- */
  function onEnter(sel, fn, margin) {
    var nodes = document.querySelectorAll(sel);
    if (!nodes.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) fn(e.target);
      });
    }, { threshold: .12, rootMargin: margin || '0px 0px -12% 0px' });
    nodes.forEach(function (n) { io.observe(n); });
    // 已滚动到视口内的立即触发
    nodes.forEach(function (n) {
      var r = n.getBoundingClientRect();
      if (r.top < innerHeight * .85 && r.bottom > 0) fn(n);
    });
  }

  /* 淡入揭示：正文块 / 引导句 / 结论句 / 封面 / 标题页 / 任意 data-reveal */
  onEnter('[data-reveal],.cover,.titlepage', function (el) {
    el.classList.add('in');
  }, '0px 0px -12% 0px');

  /* ---------- 2. 数字便签滚动（.sticky .sv） ---------- */
  /* 未计数的先归零，避免"先显示终值、进视口又跳回 0"的闪动 */
  document.querySelectorAll('.sticky .sv').forEach(function (v) {
    if (v.getAttribute('data-counted')) return;
    var pre0 = v.getAttribute('data-pre') || '';
    var suf0 = v.getAttribute('data-suf') || '';
    var dc0 = (v.getAttribute('data-dec') || '').replace('.', '').length;
    v.textContent = pre0 + (0).toLocaleString('en-US', {
      minimumFractionDigits: dc0, maximumFractionDigits: dc0
    }) + suf0;
  });
  onEnter('.sticky', function (card) {
    var v = card.querySelector('.sv');
    if (!v || v.getAttribute('data-counted')) return;
    v.setAttribute('data-counted', '1');
    var target = parseFloat(v.getAttribute('data-val'));
    if (isNaN(target)) return;
    /* data-dec=".00" 表示两位小数、".1" 表示一位 —— 数点后面的位数，不是数串长 */
    var decimals = (v.getAttribute('data-dec') || '').replace('.', '').length;
    var suf = v.getAttribute('data-suf') || '';
    var pre = v.getAttribute('data-pre') || '';
    var dur = 1250, t0 = null;
    function fmt(x) {
      return x.toLocaleString('en-US', {
        minimumFractionDigits: decimals, maximumFractionDigits: decimals
      });
    }
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      var e = 1 - Math.pow(1 - p, 3); // easeOutCubic
      v.textContent = pre + fmt(target * e) + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });

  /* ---------- 3. 开篇问题链：随滚动逐条点亮 ---------- */
  onEnter('.ques-chain .qq', function (q) {
    q.classList.add('in');
  });

  /* ---------- 4+5. 当前章节：右侧进度轴 + 顶部导航高亮 ----------
     章节高度动辄 3000–4000px，视口只有 900px 上下。
     原来用 threshold:.35 / .3（要求章节"有 35% 面积可见"）永远达不到，
     所以进度轴圆点和导航高亮实际上从来没动过。
     改成按滚动位置判断"章节有没有穿过视口上方那条线"。 */
  var rail = document.getElementById('rail');
  var chapters = document.querySelectorAll('[data-ch]');
  var railDots = [];

  function buildRail() {
    if (!rail || !chapters.length) return;
    rail.innerHTML = '';
    chapters.forEach(function (ch, i) {
      var d = document.createElement('div');
      d.className = 'dot' + (i === 0 ? ' on' : '');
      d.title = ch.getAttribute('data-lab') || ('第' + i + '章');
      var tip = document.createElement('span');
      tip.className = 'tip';
      tip.textContent = ch.getAttribute('data-lab') || '';
      d.appendChild(tip);
      d.addEventListener('click', function () {
        ch.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      rail.appendChild(d);
    });
    railDots = Array.prototype.slice.call(rail.querySelectorAll('.dot'));
  }
  buildRail();

  var navLinks = document.querySelectorAll('.topnav .links a');
  var lastChapter = null;
  function setCurrent(ch) {
    if (!ch || ch === lastChapter) return;
    lastChapter = ch;
    var idx = Array.prototype.indexOf.call(chapters, ch);
    railDots.forEach(function (d, i) { d.classList.toggle('on', i === idx); });
    if (navLinks.length) {
      var href = '#' + ch.id;
      navLinks.forEach(function (a) {
        a.classList.toggle('on', a.getAttribute('href') === href);
      });
    }
    document.body.classList.toggle('at-cover', ch.id === 's0');
  }

  (function trackChapter() {
    if (!chapters.length) return;
    var ticking = false;
    function compute() {
      ticking = false;
      var line = window.innerHeight * 0.42;
      var best = null;
      chapters.forEach(function (ch) {
        var r = ch.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) best = ch;
      });
      if (!best) best = chapters[chapters.length - 1];
      setCurrent(best);
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    compute();
  })();

  /* ---------- 6. 附注折叠默认收起 ---------- */
  document.querySelectorAll('.footnote details').forEach(function (d) {
    d.removeAttribute('open');
  });

  /* ---------- 7. 内联 ECharts 渲染（根治 iframe 高度空白 bug） ---------- */
  var charts = []; // 已初始化的实例引用，供 resize
  var mapRegistered = false;
  function ensureMap() {
    if (mapRegistered) return;
    if (typeof window.CH_MAP !== 'object' || !window.CH_MAP.sz) return;
    echarts.registerMap('sz', window.CH_MAP.sz);
    mapRegistered = true;
  }
  function renderFigure(el) {
    var key = el.getAttribute('data-fig');
    if (!key || typeof echarts === 'undefined') return;
    if (typeof window.CH_OPTS !== 'object' || !window.CH_OPTS[key]) return;
    if (key === '图6') ensureMap();
    var chart = echarts.init(el);
    chart.setOption(window.CH_OPTS[key]);
    charts.push(chart);
  }
  var figureNodes = document.querySelectorAll('.fig-body[data-fig]');
  figureNodes.forEach(function (el) { renderFigure(el); });
  /* 滚动进入时校准尺寸（入场动画由 ECharts 自带，init 时已触发） */
  if (figureNodes.length) {
    var fio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && e.target.getAttribute('data-touched') !== '1') {
          e.target.setAttribute('data-touched', '1');
          var idx = Array.prototype.indexOf.call(figureNodes, e.target);
          if (charts[idx]) charts[idx].resize();
        }
      });
    }, { threshold: .05 });
    figureNodes.forEach(function (el) { fio.observe(el); });
  }

  /* 窗口 resize：防抖 + 全实例 resize */
  var rT = null;
  window.addEventListener('resize', function () {
    if (rT) return;
    rT = setTimeout(function () {
      rT = null;
      charts.forEach(function (ch) { if (ch && ch.resize) ch.resize(); });
    }, 120);
  });

  /* ---------- 8. 图5b：步行时间构成 · 时段切换 ---------- */
  (function () {
    var el = document.querySelector('.fig-body[data-fig="图5b"]');
    if (!el || typeof echarts === 'undefined') { return; }
    var idx = Array.prototype.indexOf.call(figureNodes, el);
    var chart = charts[idx];
    if (!chart) { return; }
    var BINS = ["0-5分钟", "5-10分钟", "10-15分钟", "15-20分钟", "20-25分钟", "25-30分钟", "30分钟以上"];
    var CN = ["0–5 分钟", "5–10 分钟", "10–15 分钟", "15–20 分钟", "20–25 分钟", "25–30 分钟", "30 分钟以上"];
    var PAL = ["#3FA98F", "#5FBFA5", "#3FA98F", "#E8A33D", "#E8A33D", "#E8616B", "#C5485C"];
    var DATA = [[193, 320, 168, 79, 22, 11, 8], [10, 22, 9, 5, 1, 1, 0], [35, 63, 49, 11, 7, 3, 4]];
    var YCAT = ["商品房小区\nn=801", "城中村\nn=48", "老旧社区\nn=172"];
    function singleOpt(si) {
      var arr = [];
      for (var t = 0; t < DATA.length; t++) { arr.push({ value: DATA[t][si], label: { show: true } }); }
      var mx = 0;
      for (var t2 = 0; t2 < DATA.length; t2++) { if (DATA[t2][si] > mx) mx = DATA[t2][si]; }
      return {
        backgroundColor: "transparent",
        textStyle: { fontFamily: "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif", color: "#3A3E45" },
        animationDuration: 600,
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, backgroundColor: "#FFFDF6", borderColor: "#E0D9C8", textStyle: { color: "#3A3E45", fontSize: 12 }, formatter: "{b}<br/>{a}：{c} 个小区" },
        legend: { show: false },
        grid: { left: 86, right: 118, top: 42, bottom: 30 },
        xAxis: { type: "value", max: Math.ceil(mx / 50) * 50 + 80, axisLine: { show: false }, axisTick: { show: false }, splitLine: { lineStyle: { color: "#E7E2D7" } }, axisLabel: { color: "#3A3E45", fontSize: 10.5 } },
        yAxis: { type: "category", data: YCAT.slice(), inverse: true, axisLine: { lineStyle: { color: "#D9D5CD" } }, axisTick: { show: false }, axisLabel: { color: "#3A3E45", fontSize: 12, fontWeight: "bold" } },
        series: [{ name: BINS[si], type: "bar", barWidth: 34, itemStyle: { color: PAL[si] }, label: { show: true, position: "right", color: "#3A3E45", fontSize: 11, fontWeight: "bold", formatter: "{c} 个小区" }, emphasis: { focus: "series" }, data: arr }]
      };
    }
    function apply(k) {
      k = Math.max(0, Math.min(BINS.length, k));
      if (k > 0) { chart.setOption(singleOpt(k - 1), true); }
      else { chart.setOption(JSON.parse(JSON.stringify(window.CH_OPTS['图5b'])), true); }
      var bs = bar.children;
      for (var j = 0; j < bs.length; j++) { bs[j].className = (j === k) ? "on" : ""; }
    }
    var bar = document.createElement('div');
    bar.className = 'chipbar';
    var labels0 = ["全部（构成）"].concat(CN);
    for (var b5 = 0; b5 <= BINS.length; b5++) {
      (function (k) {
        var btn = document.createElement('button');
        btn.type = 'button'; btn.textContent = labels0[k];
        btn.addEventListener('click', function () { apply(k); });
        bar.appendChild(btn);
      })(b5);
    }
    el.parentNode.insertBefore(bar, el);
    apply(0);
  })();

  /* ---------- 9. 图6b：不可达人口 · 排序 & 95% 区间开关 ---------- */
  (function () {
    var el = document.querySelector('.fig-body[data-fig="图6b"]');
    if (!el || typeof echarts === 'undefined') { return; }
    var idx = Array.prototype.indexOf.call(figureNodes, el);
    var chart = charts[idx];
    if (!chart) { return; }
    var UNR = { "福田区": 5.1, "罗湖区": 8.4, "龙华区": 10.4, "盐田区": 11.1, "宝安区": 12.8, "南山区": 14.4, "龙岗区": 14.9, "坪山区": 16.4, "光明区": 27.4, "大鹏新区": 76.2 };
    var base = JSON.parse(JSON.stringify(window.CH_OPTS['图6b']));
    var ORD = 'un', SHOWCI = true;
    function draw() {
      var items = base.series[0].data.slice();
      items.sort(function (a, b) {
        var av = ORD === 'un' ? a.value : (UNR[a.name] || 0);
        var bv = ORD === 'un' ? b.value : (UNR[b.name] || 0);
        return bv - av;
      });
      var o = JSON.parse(JSON.stringify(window.CH_OPTS['图6b']));
      o.yAxis.data = items.map(function (d) { return d.name; });
      o.series[0].data = items;
      o.series[0].markLine = SHOWCI ? JSON.parse(JSON.stringify(base.series[0].markLine)) : { data: [] };
      chart.setOption(o, true);
    }
    var bar = document.createElement('div');
    bar.className = 'chipbar';
    var defs = [["un", "按不可达人口", true], ["unr", "按不可达率", false], ["ci", "95% 区间", true]];
    defs.forEach(function (d) {
      var b64 = document.createElement('button');
      b64.type = 'button'; b64.textContent = d[1]; b64.dataset.o = d[0];
      b64.addEventListener('click', function () {
        if (this.dataset.o === 'ci') { SHOWCI = !SHOWCI; }
        else { ORD = this.dataset.o; }
        var all = bar.children;
        for (var j = 0; j < all.length; j++) {
          var key = all[j].dataset.o;
          all[j].className = (key === 'ci') ? (SHOWCI ? 'on' : '') : (key === ORD ? 'on' : '');
        }
        draw();
      });
      bar.appendChild(b64);
    });
    el.parentNode.insertBefore(bar, el);
    draw();
  })();

  /* ---------- 10. 图13 + 图11：逐小时可达 · 时间滑块联动 ---------- */
  (function () {
    if (typeof echarts === 'undefined') { return; }
    var el13 = document.querySelector('.fig-body[data-fig="图13"]');
    var el11 = document.querySelector('.fig-body[data-fig="图11"]');
    if (!el13) { return; }
    var i13 = Array.prototype.indexOf.call(figureNodes, el13);
    var c13 = charts[i13];
    var c11 = (el11) ? charts[Array.prototype.indexOf.call(figureNodes, el11)] : null;
    if (!c13) { return; }
    var full13 = JSON.parse(JSON.stringify(window.CH_OPTS['图13'].series[0].data));
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    var bar = document.createElement('div');
    bar.className = 'scrubbar';
    bar.innerHTML = '<span>只看某小时：</span>'
      + '<input type="range" min="0" max="23" value="0" class="scrub" aria-label="选择小时">'
      + '<span class="scrub-now">全时段</span>'
      + '<button type="button" class="scrub-all">全部时段</button>';
    var rng = bar.querySelector('.scrub');
    var now = bar.querySelector('.scrub-now');
    var allBtn = bar.querySelector('.scrub-all');
    function setHour(H) {
      H = Math.max(-1, Math.min(23, H));
      if (H < 0) {
        c13.setOption({ series: [{ data: full13 }] });
        now.textContent = '全时段';
      } else {
        var one = full13.filter(function (cell) { return cell[0] === H; });
        c13.setOption({ series: [{ data: one }] });
        now.textContent = pad(H) + ':00';
      }
      if (c11) {
        var ml = (H < 0) ? { data: [] } : {
          silent: true, symbol: 'none',
          lineStyle: { color: '#E8616B', type: 'solid', width: 2 },
          label: { show: true, position: 'end', formatter: pad(H) + ' 时', color: '#C5485C', fontSize: 11 },
          data: [{ xAxis: pad(H) }]
        };
        c11.setOption({ series: [{ markLine: ml }, { markLine: ml }, { markLine: ml }] });
      }
    }
    rng.addEventListener('input', function () { setHour(parseInt(this.value, 10)); });
    allBtn.addEventListener('click', function () { rng.value = 0; setHour(-1); });
    el13.parentNode.insertBefore(bar, el13);
    setHour(-1);
  })();

  /* ---------- 11. 三层视差滚动（背景慢 / 中景中 / 前景快） ---------- */
  (function () {
    var body = document.body;
    var toggle = document.getElementById('motionToggle');
    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var mobile = window.innerWidth <= 720;
    var userOverride = false; // BUG-6：用户手动开关后，resize 不再改写

    // 默认状态：系统偏好减少动态，或移动端 → 关闭视差；桌面端 → 开启
    var enabled = !prefersReduced && !mobile;
    function applyState() {
      body.classList.toggle('motion-off', !enabled);
      if (toggle) { toggle.setAttribute('aria-pressed', enabled ? 'false' : 'true'); }
    }
    applyState();
    if (toggle) {
      toggle.addEventListener('click', function () {
        userOverride = true;
        enabled = !enabled;
        applyState();
        if (!enabled) { elements.forEach(function (e) { e.el.style.transform = ''; }); }
      });
    }
    window.addEventListener('resize', function () {
      mobile = window.innerWidth <= 720;
      if (prefersReduced || userOverride) return;
      enabled = !mobile;
      applyState();
    });

    // 深度系数：bg 最慢（0.03），mid 中速（0.10），fg 最快（0.16）；移动端一律减半
    var DEPTH = { bg: .03, mid: .10, fg: .16 };
    var elements = [];
    var els = document.querySelectorAll('[data-px]');
    els.forEach(function (el) {
      var d = DEPTH[el.getAttribute('data-px')] || .1;
      elements.push({ el: el, depth: d, top: 0, h: 0 });
    });
    function measure() {
      elements.forEach(function (e) {
        var r = e.el.getBoundingClientRect();
        e.top = r.top + (window.pageYOffset || document.documentElement.scrollTop);
        e.h = r.height;
      });
    }
    measure();
    window.addEventListener('resize', measure);

    var ticking = false;
    function update() {
      ticking = false;
      if (!enabled) return;
      var y = window.pageYOffset || document.documentElement.scrollTop;
      var vh = window.innerHeight;
      var mult = mobile ? .45 : 1;
      for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        var center = e.top - y + e.h / 2 - vh / 2; // 元素中心距视口中心
        // 仅视口邻近区域生效，避免远处元素大幅位移
        if (Math.abs(center) > vh * 1.4) { if (e.el.style.transform !== '') e.el.style.transform = ''; continue; }
        var amount = -center * e.depth * mult;
        e.el.style.transform = 'translate3d(0,' + amount.toFixed(2) + 'px,0)';
      }
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
  })();
})();
