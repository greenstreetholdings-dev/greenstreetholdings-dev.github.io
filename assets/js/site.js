/* ============================================================
   GREEN STREET HOLDINGS — site behaviour
   ============================================================ */
(function () {
  "use strict";

  /* ---- sticky header ---- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- mobile menu ---- */
  var burger = document.querySelector(".burger");
  if (burger) {
    burger.addEventListener("click", function () {
      document.body.classList.toggle("menu-open");
      var open = document.body.classList.contains("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
      });
    });
  }

  /* ---- active nav link ---- */
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href) return;
    var target = href.replace("./", "");
    if (target === path || (path === "" && target === "index.html")) {
      a.classList.add("active");
    }
  });

  /* ---- language switcher (EN / ES) ---- */
  var STORE = "gsh-lang";
  function setText(el, lang) {
    var val = lang === "es" ? el.getAttribute("data-es") : el.getAttribute("data-en");
    if (val !== null && val !== undefined) el.textContent = val;
  }
  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-en]").forEach(function (el) {
      // store EN once so we can switch back
      if (!el.hasAttribute("data-en") || el.getAttribute("data-en") === "") {
        el.setAttribute("data-en", el.textContent.trim());
      }
      setText(el, lang);
    });
    document.querySelectorAll("[data-en-ph]").forEach(function (el) {
      el.setAttribute("placeholder", lang === "es" ? el.getAttribute("data-es-ph") : el.getAttribute("data-en-ph"));
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(STORE, lang); } catch (e) {}
  }
  var saved = "en";
  try { saved = localStorage.getItem(STORE) || "en"; } catch (e) {}
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });
  applyLang(saved);

  /* ---- scroll reveals ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- footer year ---- */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  /* ---- contact form (graceful Formspree submit) ---- */
  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      var btn = form.querySelector(".btn");
      if (btn) { btn.dataset.label = btn.textContent; }
      // allow native POST to Formspree; just reflect sending state
      if (btn) btn.textContent = btn.getAttribute("data-sending") || "Sending…";
    });
  }
})();
