/* UGrowth — interactions. Vanilla, dependency-free, 60fps-minded. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- loader ---------- */
  var loader = document.getElementById("loader");
  var pct = document.getElementById("pct");
  var p = 0;
  var tick = setInterval(function () {
    p = Math.min(100, p + Math.round(6 + Math.random() * 14));
    if (pct) pct.textContent = p + "%";
    if (p >= 100) clearInterval(tick);
  }, 90);
  function hideLoader() {
    if (pct) pct.textContent = "100%";
    setTimeout(function () {
      if (loader) loader.classList.add("done");
      var hero = document.getElementById("hero");
      if (hero) hero.classList.add("ready");
      document.body.classList.add("loaded");
    }, 500);
  }
  window.addEventListener("load", hideLoader);
  setTimeout(hideLoader, 2600); // failsafe

  /* ---------- reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- nav shrink + sticky mobile cta ---------- */
  var nav = document.getElementById("nav");
  var mcta = document.getElementById("mcta");
  function onScroll() {
    var y = window.pageYOffset;
    if (nav) nav.classList.toggle("shrink", y > 40);
    if (mcta) mcta.classList.toggle("show", y > window.innerHeight * 0.9);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu");
  function toggleMenu(force) {
    var open = force !== undefined ? force : !menu.classList.contains("open");
    menu.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (burger) burger.addEventListener("click", function () { toggleMenu(); });
  if (menu) menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { toggleMenu(false); });
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq__item").forEach(function (item) {
    var q = item.querySelector(".faq__q");
    var a = item.querySelector(".faq__a");
    q.addEventListener("click", function () {
      var open = item.classList.contains("open");
      document.querySelectorAll(".faq__item.open").forEach(function (o) {
        o.classList.remove("open"); o.querySelector(".faq__a").style.maxHeight = null;
      });
      if (!open) { item.classList.add("open"); a.style.maxHeight = a.scrollHeight + "px"; }
    });
  });

  /* ---------- count up ---------- */
  var counted = false;
  function runCounts() {
    if (counted) return; counted = true;
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10);
      if (reduce) { el.textContent = target; return; }
      var start = null, dur = 1400;
      function step(ts) {
        if (!start) start = ts;
        var prog = Math.min(1, (ts - start) / dur);
        var eased = 1 - Math.pow(1 - prog, 3);
        el.textContent = Math.round(target * eased);
        if (prog < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  var impact = document.querySelector(".impact");
  if (impact && "IntersectionObserver" in window) {
    new IntersectionObserver(function (e) {
      if (e[0].isIntersecting) runCounts();
    }, { threshold: 0.4 }).observe(impact);
  } else { runCounts(); }

  /* ---------- custom cursor ---------- */
  if (fine && !reduce) {
    var ring = document.querySelector(".cursor");
    var dot = document.querySelector(".cursor-dot");
    var label = ring ? ring.querySelector(".label") : null;
    var mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      if (dot) dot.style.transform = "translate(" + mx + "px," + my + "px) translate(-50%,-50%)";
    });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      if (ring) ring.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
      requestAnimationFrame(loop);
    })();
    var hoverSel = "a, button, .tile, [data-cursor]";
    document.querySelectorAll(hoverSel).forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        if (ring) ring.classList.add("is-hover");
        if (label) label.textContent = el.getAttribute("data-cursor") || "";
      });
      el.addEventListener("mouseleave", function () {
        if (ring) ring.classList.remove("is-hover");
      });
    });
  }

  /* ---------- magnetic buttons ---------- */
  if (fine && !reduce) {
    document.querySelectorAll("[data-mag]").forEach(function (el) {
      var strength = 22;
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
        var y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
        el.style.transform = "translate(" + x * strength + "px," + y * strength * 0.5 + "px)";
      });
      el.addEventListener("mouseleave", function () { el.style.transform = ""; });
    });
  }

  /* ---------- footer year ---------- */
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
})();
