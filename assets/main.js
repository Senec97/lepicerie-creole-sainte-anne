(function () {
  "use strict";

  // ── Mobile nav toggle ──────────────────────────────────────────────────────
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
    // Close on outside click
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });
  }

  // ── Cookie banner ──────────────────────────────────────────────────────────
  const banner = document.querySelector(".cookie-banner");
  if (banner) {
    const accepted = localStorage.getItem("cookies-accepted");
    if (accepted) {
      banner.hidden = true;
    }
    const acceptBtn = banner.querySelector(".cookie-btn--accept");
    const rejectBtn = banner.querySelector(".cookie-btn--reject");
    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookies-accepted", "true");
        banner.hidden = true;
      });
    }
    if (rejectBtn) {
      rejectBtn.addEventListener("click", function () {
        localStorage.setItem("cookies-accepted", "false");
        banner.hidden = true;
      });
    }
  }

  // ── Language switcher ──────────────────────────────────────────────────────
  const langBtns = document.querySelectorAll(".lang-switcher button");
  if (langBtns.length) {
    langBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const lang = this.dataset.lang;
        langBtns.forEach(function (b) { b.classList.remove("active"); });
        this.classList.add("active");
        document.documentElement.lang = lang;
        document.querySelectorAll("[data-lang-fr]").forEach(function (el) {
          el.hidden = (lang !== "fr");
        });
        document.querySelectorAll("[data-lang-en]").forEach(function (el) {
          el.hidden = (lang !== "en");
        });
      });
    });
    // Initialize: show FR by default
    document.querySelectorAll("[data-lang-en]").forEach(function (el) {
      el.hidden = true;
    });
    const frBtn = document.querySelector('[data-lang="fr"]');
    if (frBtn) frBtn.classList.add("active");
  }

  // ── Scroll-in animations (Intersection Observer) ──────────────────────────
  // Styles définis dans style.css (@media prefers-reduced-motion: no-preference)
  if ("IntersectionObserver" in window) {
    document.querySelectorAll(".card, .info-block, .review-card, .section-intro").forEach(function (el) {
      el.classList.add("fade-in");
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-in").forEach(function (el) {
      observer.observe(el);
    });
  }
})();
