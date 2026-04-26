/* ================================================================
   BIRTHDAY WEBSITE — SHARED APP SCRIPT
   Runs on every page. Handles: nav, loading, Three.js (landing),
   scroll-reveal, progress bar, lightbox, confetti, page transitions.
   ================================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────────
     1. NAVIGATION  (injected into every page)
  ────────────────────────────────────────────────────────────── */
  var name = (typeof siteData !== 'undefined' && siteData.name) ? siteData.name : 'Sumeet';
  var page = location.pathname.split('/').pop() || 'index.html';

  function navLink(href, label) {
    var cls = 'nav-link' + (page === href ? ' active' : '');
    return '<a href="' + href + '" class="' + cls + '">' + label + '</a>';
  }

  var navHTML =
    '<nav class="site-nav" id="site-nav">' +
      '<div class="nav-inner">' +
        '<a href="index.html" class="nav-brand">&#x2736;&nbsp;&nbsp;For ' + name + '</a>' +
        '<div class="nav-links">' +
          navLink('index.html',   'Home')    +
          navLink('wishes.html',  'Wishes')  +
          navLink('gallery.html', 'Gallery') +
        '</div>' +
        '<div class="nav-end">' +
          '<button class="nav-pill" id="nav-celebrate">&#x1F389;&nbsp; Celebrate</button>' +
          '<button class="nav-mob-toggle" id="mob-toggle" aria-label="Menu">&#x2630;</button>' +
        '</div>' +
      '</div>' +
    '</nav>' +
    '<div class="progress-bar" id="progress-bar"></div>';

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Mobile nav toggle
  document.getElementById('mob-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('mob-open');
  });
  // Close mobile nav when a link is clicked
  document.querySelector('.nav-links').addEventListener('click', function (e) {
    if (e.target.closest('.nav-link')) {
      document.querySelector('.nav-links').classList.remove('mob-open');
    }
  });

  // Confetti button (wrap so it resolves after window.fireConfetti is defined)
  document.getElementById('nav-celebrate').addEventListener('click', function () {
    if (typeof window.fireConfetti === 'function') window.fireConfetti();
  });

  /* ──────────────────────────────────────────────────────────────
     2. LOADING SCREEN
  ────────────────────────────────────────────────────────────── */
  var ls = document.getElementById('loading-screen');
  if (ls) {
    setTimeout(function () { ls.classList.add('out'); }, 900);
  }

  /* ──────────────────────────────────────────────────────────────
     3. PROGRESS BAR
  ────────────────────────────────────────────────────────────── */
  var pb = document.getElementById('progress-bar');
  window.addEventListener('scroll', function () {
    if (!pb) return;
    var scrolled = window.scrollY;
    var total    = document.documentElement.scrollHeight - window.innerHeight;
    pb.style.width = (total > 0 ? scrolled / total * 100 : 0) + '%';
  }, { passive: true });

  /* ──────────────────────────────────────────────────────────────
     4. SCROLL REVEAL  ([data-reveal] elements)
  ────────────────────────────────────────────────────────────── */
  var revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    revealIO.observe(el);
  });

  /* ──────────────────────────────────────────────────────────────
     5. LIGHTBOX
  ────────────────────────────────────────────────────────────── */
  var lbHTML =
    '<div class="lightbox" id="lightbox">' +
      '<button class="lb-close" id="lb-close">&#x2715;</button>' +
      '<button class="lb-prev"  id="lb-prev">&#x2190;</button>' +
      '<img    class="lb-img"   id="lb-img" src="" alt="">' +
      '<button class="lb-next"  id="lb-next">&#x2192;</button>' +
      '<p     class="lb-caption" id="lb-cap"></p>' +
    '</div>';
  document.body.insertAdjacentHTML('beforeend', lbHTML);

  var lb      = document.getElementById('lightbox');
  var lbImg   = document.getElementById('lb-img');
  var lbCap   = document.getElementById('lb-cap');
  var lbItems = [];
  var lbIdx   = 0;

  window.openLightbox = function (items, idx) {
    lbItems = items; lbIdx = idx;
    showLbSlide();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function showLbSlide() {
    var item  = lbItems[lbIdx] || {};
    lbImg.src = item.src || '';
    lbCap.textContent = item.cap || '';
    document.getElementById('lb-prev').style.visibility = lbItems.length > 1 ? 'visible' : 'hidden';
    document.getElementById('lb-next').style.visibility = lbItems.length > 1 ? 'visible' : 'hidden';
  }

  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(function () { lbImg.src = ''; }, 300);
  }

  document.getElementById('lb-close').addEventListener('click', closeLb);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.getElementById('lb-prev').addEventListener('click', function (e) {
    e.stopPropagation();
    lbIdx = (lbIdx - 1 + lbItems.length) % lbItems.length;
    showLbSlide();
  });
  document.getElementById('lb-next').addEventListener('click', function (e) {
    e.stopPropagation();
    lbIdx = (lbIdx + 1) % lbItems.length;
    showLbSlide();
  });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLb();
    if (e.key === 'ArrowLeft')  { lbIdx = (lbIdx - 1 + lbItems.length) % lbItems.length; showLbSlide(); }
    if (e.key === 'ArrowRight') { lbIdx = (lbIdx + 1) % lbItems.length; showLbSlide(); }
  });

  /* ──────────────────────────────────────────────────────────────
     6. CONFETTI
  ────────────────────────────────────────────────────────────── */
  window.fireConfetti = function () {
    if (typeof confetti === 'undefined') return;
    var opts = { colors: ['#fb7185', '#fda4af', '#fbbf24', '#fde68a', '#c084fc', '#ffffff'] };
    confetti(Object.assign({}, opts, { particleCount: 55, spread: 28, startVelocity: 55, origin: { y: 0.7 } }));
    confetti(Object.assign({}, opts, { particleCount: 44, spread: 70,  origin: { y: 0.7 } }));
    confetti(Object.assign({}, opts, { particleCount: 70, spread: 110, decay: 0.91, scalar: 0.8, origin: { y: 0.7 } }));
    confetti(Object.assign({}, opts, { particleCount: 22, spread: 130, startVelocity: 25, decay: 0.92, scalar: 1.2, origin: { y: 0.7 } }));
  };

  /* ──────────────────────────────────────────────────────────────
     7. THREE.JS STARFIELD (landing page only)
  ────────────────────────────────────────────────────────────── */
  var canvas = document.getElementById('bg-canvas');
  if (canvas && typeof THREE !== 'undefined') {
    var W = window.innerWidth, H = window.innerHeight;
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(W, H);

    var scene  = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(65, W / H, 0.1, 100);
    camera.position.z = 5;

    /* Particles */
    var COUNT = window.innerWidth < 600 ? 900 : 1800;
    var pos   = new Float32Array(COUNT * 3);
    var sizes = new Float32Array(COUNT);

    for (var i = 0; i < COUNT; i++) {
      var i3 = i * 3;
      pos[i3]     = (Math.random() - 0.5) * 26;
      pos[i3 + 1] = (Math.random() - 0.5) * 26;
      pos[i3 + 2] = (Math.random() - 0.5) * 14;
      sizes[i]    = Math.random() * 1.5 + 0.3;
    }

    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    var mat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xfff5f0,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });

    var stars = new THREE.Points(geo, mat);
    scene.add(stars);

    /* Subtle glow orbs */
    var orbDefs = [
      { color: 0xfb7185, x:  2, y:  1.2, z: -2.5, r: 0.9 },
      { color: 0xa78bfa, x: -2.5, y: -1, z: -3.5, r: 1.2 },
      { color: 0xfbbf24, x:  0.5, y: -2, z: -4,   r: 0.7 },
    ];
    var orbs = orbDefs.map(function (d) {
      var mesh = new THREE.Mesh(
        new THREE.SphereGeometry(d.r, 12, 12),
        new THREE.MeshBasicMaterial({ color: d.color, transparent: true, opacity: 0.06 })
      );
      mesh.position.set(d.x, d.y, d.z);
      scene.add(mesh);
      return mesh;
    });

    /* Mouse parallax */
    var mX = 0, mY = 0;
    document.addEventListener('mousemove', function (e) {
      mX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    /* Animate */
    var t = 0;
    (function tick() {
      requestAnimationFrame(tick);
      t += 0.004;
      stars.rotation.y += 0.00035;
      stars.rotation.x += 0.00015;
      camera.position.x += (mX * 0.35 - camera.position.x) * 0.035;
      camera.position.y += (-mY * 0.2  - camera.position.y) * 0.035;
      orbs.forEach(function (o, i) {
        o.position.y += Math.sin(t + i * 2.2) * 0.003;
      });
      renderer.render(scene, camera);
    })();

    window.addEventListener('resize', function () {
      W = window.innerWidth; H = window.innerHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    });
  }

  /* ──────────────────────────────────────────────────────────────
     8. PAGE LINK TRANSITIONS (smooth fade out before navigate)
  ────────────────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href');
    // Internal .html pages only
    if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto')) return;
    e.preventDefault();
    document.body.style.transition = 'opacity .28s ease';
    document.body.style.opacity    = '0';
    setTimeout(function () { location.href = href; }, 280);
  });

})();
