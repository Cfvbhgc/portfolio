/* DigitalPr0 portfolio v3 — i18n, данные проектов, прелоадер, GSAP + Lenis */

(function () {
  'use strict';

  /* ---------- i18n ---------- */

  var I18N = {
    ru: {
      'preloader.label': 'загрузка',
      'nav.work': 'проекты',
      'nav.about': 'обо мне',
      'nav.contact': 'контакты',
      'hero.eyebrow': '// портфолио',
      'hero.sub': 'fullstack-разработчик',
      'hero.tagline': 'Собираю продукты целиком — от API и ботов до интерфейсов и анимаций.',
      'hero.stats': '40+ проектов в открытом коде · 6 живых демо',
      'featured.eyebrow': '// избранное',
      'featured.title': 'Избранные проекты',
      'grid.eyebrow': '// все проекты',
      'grid.title': 'Все проекты',
      'grid.note': 'Ещё 38 репозиториев в открытом доступе — бэкенд, боты, мобильные и системные.',
      'about.eyebrow': '// обо мне',
      'about.title': 'Обо мне',
      'about.text': 'Пишу код каждый день и люблю доводить продукты до состояния, когда ими приятно пользоваться. Работаю по всему стеку: проектирую API, собираю ботов, верстаю интерфейсы и анимирую их. Подробный рассказ скоро появится здесь.',
      'contact.eyebrow': '// контакты',
      'contact.cta': 'Напишите мне',
      'footer.made': 'чистый HTML / CSS / JS',
      'btn.demo': 'Демо',
      'btn.github': 'GitHub'
    },
    en: {
      'preloader.label': 'loading',
      'nav.work': 'work',
      'nav.about': 'about',
      'nav.contact': 'contact',
      'hero.eyebrow': '// portfolio',
      'hero.sub': 'fullstack developer',
      'hero.tagline': 'I build products end to end — from APIs and bots to interfaces and motion.',
      'hero.stats': '40+ open-source projects · 6 live demos',
      'featured.eyebrow': '// featured',
      'featured.title': 'Featured projects',
      'grid.eyebrow': '// all projects',
      'grid.title': 'All projects',
      'grid.note': '38 more public repositories — backends, bots, mobile and systems code.',
      'about.eyebrow': '// about',
      'about.title': 'About me',
      'about.text': 'I write code every day and enjoy polishing products until they feel great to use. I work across the whole stack: designing APIs, building bots, crafting interfaces and animating them. A longer story is coming here soon.',
      'contact.eyebrow': '// contact',
      'contact.cta': 'Get in touch',
      'footer.made': 'plain HTML / CSS / JS',
      'btn.demo': 'Demo',
      'btn.github': 'GitHub'
    }
  };

  /* ---------- данные проектов ---------- */

  var GH = 'https://github.com/Cfvbhgc/';
  var PAGES = 'https://cfvbhgc.github.io/';

  var FEATURED = [
    { slug: 'semiglobe-brasil', tag: 'Landing / Premium',
      ru: 'Премиум-лендинг кофейного бренда: горизонтальный скролл каталога, переключатель языка.',
      en: 'Premium coffee brand landing: horizontal catalog scroll, language switcher.' },
    { slug: 'shemberg-windows', tag: 'Web / 3D',
      ru: 'Сайт премиальных окон с 3D-конфигуратором на Three.js.',
      en: 'Premium windows site with a Three.js 3D configurator.' },
    { slug: 'hero-design', tag: 'Web / Studio',
      ru: 'Сайт дизайн-студии: кастомный курсор, GSAP-анимации, smooth scroll.',
      en: 'Design studio site: custom cursor, GSAP animations, smooth scroll.' },
    { slug: 'sales-dash', tag: 'Dashboard / Analytics',
      ru: 'Дашборд аналитики продаж: метрики, графики выручки, экспорт CSV.',
      en: 'Sales analytics dashboard: metrics, revenue charts, CSV export.' },
    { slug: 'mood-diary', tag: 'App / Wellness',
      ru: 'Дневник настроений: heatmap-календарь и графики эмоций.',
      en: 'Mood diary: heatmap calendar and emotion charts.' },
    { slug: 'devconf-landing', tag: 'Landing / Event',
      ru: 'Лендинг IT-конференции в неон-стиле: глитч-эффекты, countdown.',
      en: 'Neon-style IT conference landing: glitch effects, countdown.' }
  ];

  var ICONS = {
    backend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',
    bots: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"/><path d="M9 12h.01M13 12h.01M17 12h.01"/></svg>',
    fullstack: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>',
    mobile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/></svg>',
    desktop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>',
    cli: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m6 9 3 3-3 3M12 15h6"/></svg>'
  };

  var GROUPS = [
    { id: 'backend', ru: 'backend api', en: 'backend api', items: [
      ['auth-micro', 'FastAPI · PostgreSQL · Redis · JWT / 2FA'],
      ['booking-api', '.NET 8 · EF Core · PostgreSQL'],
      ['currency-x', 'Java 17 · Spring Boot · gRPC · Redis'],
      ['foodflow-api', 'Node.js · Express · MongoDB · Stripe'],
      ['img-processor', '.NET 8 · ImageSharp'],
      ['market-api', 'Python · Flask · PostgreSQL'],
      ['meet-room', 'Java · Spring Boot · JPA'],
      ['news-aggr', 'PHP 8.2 · Slim 4 · MySQL'],
      ['notify-hub', 'Node.js · RabbitMQ · WebSocket'],
      ['pdf-forge', 'Node.js · Puppeteer'],
      ['price-radar', 'FastAPI · Celery · Redis'],
      ['snaplink', 'TypeScript · Express · Redis']
    ]},
    { id: 'bots', ru: 'telegram-боты', en: 'telegram bots', items: [
      ['auto-poster', 'Python · aiogram 3 · Celery'],
      ['quiz-master', 'Python · aiogram 3 · PostgreSQL · Redis'],
      ['schedule-bot', 'Python · aiogram 3 · APScheduler'],
      ['server-watch', 'Python · psutil · matplotlib'],
      ['shop-bot', 'Python · aiogram 3 · PostgreSQL']
    ]},
    { id: 'fullstack', ru: 'fullstack', en: 'fullstack', items: [
      ['admin-pro', 'Laravel 11 · Vue 3 · MySQL'],
      ['blog-cms', 'PHP 8.2 · MVC · MySQL'],
      ['helpdesk', 'Laravel 11 · Livewire 3 · MySQL'],
      ['live-chat', 'Node.js · Socket.io · MongoDB'],
      ['shop-engine', 'Laravel 11 · Blade · MySQL'],
      ['stock-manager', '.NET 8 · Blazor Server · SQLite'],
      ['task-flow', 'Java · Spring Boot · Thymeleaf']
    ]},
    { id: 'mobile', ru: 'мобильные (android)', en: 'mobile (android)', items: [
      ['fit-log', 'Kotlin · Room · MVP'],
      ['habit-pulse', 'Kotlin · Jetpack Compose · Room'],
      ['note-keeper', 'Java · Android · Room'],
      ['quick-chat', 'Kotlin · Compose · Hilt'],
      ['split-pay', 'Kotlin · Compose · Clean Architecture'],
      ['weather-now', 'Kotlin · Compose · Retrofit']
    ]},
    { id: 'desktop', ru: 'десктоп и системное', en: 'desktop & systems', items: [
      ['fin-tracker', 'C# · WPF · SQLite'],
      ['particle-sim', 'C++17 · OpenGL · GLFW'],
      ['thread-serv', 'C++17 · POSIX threads']
    ]},
    { id: 'cli', ru: 'cli-инструменты', en: 'cli tools', items: [
      ['chess-engine', 'C++17 · UCI'],
      ['file-nav', 'C · ncurses'],
      ['huff-compress', 'C++ · Huffman'],
      ['log-analyzer', 'Java 17 · Picocli'],
      ['sheet-sync', 'Python · pandas · ReportLab']
    ]}
  ];

  /* ---------- рендер ---------- */

  var lang = localStorage.getItem('dp0-lang') || 'ru';

  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.ru[key] || key; }

  function pad2(n) { return n < 10 ? '0' + n : '' + n; }

  var arrowSvg = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function renderFeatured() {
    var host = document.getElementById('featuredList');
    host.innerHTML = FEATURED.map(function (p, i) {
      return '<article class="fcard reveal">' +
        '<a class="fcard-media" href="' + PAGES + p.slug + '/" target="_blank" rel="noopener" aria-label="' + p.slug + ' — ' + t('btn.demo') + '">' +
          '<img src="assets/previews/' + p.slug + '.jpg" alt="' + p.slug + ' — preview" loading="' + (i === 0 ? 'eager' : 'lazy') + '">' +
        '</a>' +
        '<div class="fcard-info">' +
          '<span class="fcard-index">' + pad2(i + 1) + '</span>' +
          '<span class="fcard-tag">' + p.tag + '</span>' +
          '<h3 class="fcard-name">' + p.slug + '</h3>' +
          '<p class="fcard-desc">' + p[lang] + '</p>' +
          '<div class="fcard-actions">' +
            '<a class="btn btn-fill" href="' + PAGES + p.slug + '/" target="_blank" rel="noopener">' + t('btn.demo') + ' ' + arrowSvg + '</a>' +
            '<a class="btn btn-line" href="' + GH + p.slug + '" target="_blank" rel="noopener">' + t('btn.github') + ' ' + arrowSvg + '</a>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  function renderGrid() {
    var host = document.getElementById('gridList');
    host.innerHTML = GROUPS.map(function (g) {
      return '<div class="grid-group reveal">' +
        '<div class="grid-group-head">' +
          '<span class="grid-group-name">// ' + g[lang] + '</span>' +
          '<span class="grid-group-count">' + g.items.length + '</span>' +
        '</div>' +
        '<div class="grid-cards">' +
        g.items.map(function (it) {
          return '<a class="gcard" data-cat="' + g.id + '" href="' + GH + it[0] + '" target="_blank" rel="noopener">' +
            '<span class="gcard-icon">' + ICONS[g.id] + '</span>' +
            '<span class="gcard-name">' + it[0] + '</span>' +
            '<span class="gcard-stack">' + it[1] + '</span>' +
            '<span class="gcard-gh">GitHub ↗</span>' +
          '</a>';
        }).join('') +
        '</div>' +
      '</div>';
    }).join('');
  }

  function applyStatic() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.documentElement.lang = lang;
    document.title = lang === 'ru' ? 'DigitalPr0 — fullstack-разработчик' : 'DigitalPr0 — fullstack developer';
    document.querySelectorAll('[data-lang-opt]').forEach(function (el) {
      el.classList.toggle('active', el.getAttribute('data-lang-opt') === lang);
    });
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem('dp0-lang', lang);
    applyStatic();
    renderFeatured();
    renderGrid();
    document.querySelectorAll('#featuredList .reveal, #gridList .reveal').forEach(function (el) {
      el.classList.add('is-in');
    });
    if (window.ScrollTrigger) { ScrollTrigger.refresh(); }
  }

  applyStatic();
  renderFeatured();
  renderGrid();

  document.getElementById('langToggle').addEventListener('click', function () {
    setLang(lang === 'ru' ? 'en' : 'ru');
  });

  /* ---------- движение ---------- */

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    new URLSearchParams(location.search).has('instant');
  var hasGsap = typeof window.gsap !== 'undefined';

  function showAll() {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
  }

  function finishPreloader(instant) {
    var pre = document.getElementById('preloader');
    if (instant || !hasGsap) {
      pre.style.display = 'none';
      document.querySelectorAll('.hero .reveal').forEach(function (el) { el.classList.add('is-in'); });
      document.querySelectorAll('.hero-word').forEach(function (el) { el.style.transform = 'none'; });
      return;
    }
    var tl = gsap.timeline();
    tl.to(pre, { yPercent: -100, duration: 0.9, ease: 'power3.inOut' })
      .set(pre, { display: 'none' })
      .to('.hero-word', { yPercent: 0, duration: 1, ease: 'power3.out', stagger: 0.12 }, '-=0.45')
      .add(function () {
        document.querySelectorAll('.hero .reveal').forEach(function (el) { el.classList.add('is-in'); });
      }, '-=0.6');
  }

  function runPreloader() {
    var counter = document.getElementById('preloaderCount');
    if (reduced) { finishPreloader(true); showAll(); return; }
    if (hasGsap) {
      gsap.set('.hero-word', { yPercent: 110 });
    }
    var start = performance.now();
    var dur = 1500;
    function tick(now) {
      var p = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      counter.textContent = Math.round(eased * 100) + '%';
      if (p < 1) { requestAnimationFrame(tick); }
      else { finishPreloader(false); initScroll(); }
    }
    requestAnimationFrame(tick);
  }

  function initScroll() {
    if (reduced || !hasGsap || typeof window.Lenis === 'undefined') {
      showAll();
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    var lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    // якорные ссылки через Lenis
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: 0 }); }
      });
    });

    // scroll-reveal для всего, кроме hero (им управляет прелоадер)
    var items = Array.prototype.filter.call(
      document.querySelectorAll('.reveal'),
      function (el) { return !el.closest('.hero'); }
    );
    ScrollTrigger.batch(items, {
      start: 'top 88%',
      once: true,
      onEnter: function (batch) {
        batch.forEach(function (el, i) {
          setTimeout(function () { el.classList.add('is-in'); }, i * 90);
        });
      }
    });
    ScrollTrigger.refresh();

    // лёгкий параллакс превью
    document.querySelectorAll('.fcard-media img').forEach(function (img) {
      gsap.fromTo(img, { yPercent: -3 }, {
        yPercent: 3, ease: 'none',
        scrollTrigger: { trigger: img.closest('.fcard'), start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runPreloader);
  } else {
    runPreloader();
  }
})();
