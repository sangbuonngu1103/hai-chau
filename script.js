/* =========================================================
   Hải Châu — tương tác trang
   ========================================================= */
(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- 1. Năm hiện tại ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 2. Dựng thẻ bấm được từ kho dữ liệu (data.js) ---------- */
  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const HC = window.HC || {};

  // Nhãn ngắn hiển thị trên thẻ điểm đến
  const DEST_TAG = {
    "hon-cau-bai-bien": "Biển",
    "hon-cau-dao": "Đảo & biển",
    "kenh-nha-le": "Di tích",
    "den-trang": "Di tích",
    "den-tam-mai": "Di tích",
    "nha-tho-ho-vu": "Di tích",
    "vung-nuoi-tom": "Thủy sản",
    "cua-lach-van": "Cửa biển",
    "duong-ven-bien": "Cung đường",
  };

  // Điểm đến — lưới bento
  const bentoGrid = $("#bentoGrid");
  if (bentoGrid && HC.destinations) {
    bentoGrid.innerHTML = Object.keys(HC.destinations)
      .map((k, i) => {
        const d = HC.destinations[k];
        return `<a class="bento-item reveal${i === 0 ? " bento-item--tall" : ""}" href="chitiet.html?id=${encodeURIComponent(k)}">
          <img src="${esc(d.hero)}" alt="${esc(d.heroAlt || d.title)}" data-fallback="${esc(k)}" loading="lazy" />
          <div class="bento-cap">
            <span class="bento-tag">${esc(DEST_TAG[k] || d.kind || "Điểm đến")}</span>
            <h3>${d.title}</h3>
            <p>${d.subtitle || ""}</p>
          </div>
        </a>`;
      })
      .join("");
  }

  // Thẻ chung cho Lễ hội / Làng nghề
  const cardHTML = (k, item, kindClass) => `
    <a class="${kindClass} reveal" href="chitiet.html?id=${encodeURIComponent(k)}">
      <span class="fc-media">
        <img src="${esc(item.hero)}" alt="${esc(item.heroAlt || item.title)}" data-fallback="${esc(k)}" loading="lazy" />
        <span class="fc-no">${esc(item.num || "")}</span>
      </span>
      <span class="fc-body">
        <span class="fc-kind">${esc(item.kind || "")}</span>
        <span class="fc-title">${item.title}</span>
        <span class="fc-sub">${item.subtitle || ""}</span>
        <span class="fc-more">Đọc tiếp →</span>
      </span>
    </a>`;

  const festGrid = $("#festGrid");
  if (festGrid && HC.festivals) {
    festGrid.innerHTML = Object.keys(HC.festivals)
      .map((k) => cardHTML(k, HC.festivals[k], "fest-card"))
      .join("");
  }

  const craftGrid = $("#craftGrid");
  if (craftGrid && HC.crafts) {
    craftGrid.innerHTML = Object.keys(HC.crafts)
      .map((k) => cardHTML(k, HC.crafts[k], "craft-card"))
      .join("");
  }

  /* ---------- 3. Ảnh dự phòng nếu link online lỗi ---------- */
  const fallback = (img) => {
    const seed = img.dataset.fallback || "haichau";
    img.src = `https://picsum.photos/seed/${encodeURIComponent(seed)}/1200/900`;
  };
  $$("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", function handler() {
      img.removeEventListener("error", handler);
      fallback(img);
    });
    // Ảnh có thể đã lỗi trước khi JS chạy
    if (img.complete && img.naturalWidth === 0) fallback(img);
  });

  /* ---------- 4. Header khi cuộn ---------- */
  const header = $("#header");
  const toTop = $("#toTop");
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 40);
    if (toTop) toTop.classList.toggle("show", y > 600);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 5. Menu di động ---------- */
  const menuToggle = $("#menuToggle");
  const nav = $("#nav");
  const closeNav = () => {
    if (!nav) return;
    nav.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Mở menu");
    document.body.style.overflow = "";
  };
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuToggle.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
      document.body.style.overflow = open ? "hidden" : "";
    });
    $$("a", nav).forEach((a) => a.addEventListener("click", closeNav));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---------- 6. Hiện dần khi cuộn ---------- */
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    reveals.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 6, 5) * 70}ms`;
      io.observe(el);
    });
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---------- 7. Đếm số ở hero ---------- */
  const counters = $$("[data-count]");
  const runCounter = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (counters.length) {
    if ("IntersectionObserver" in window) {
      const co = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCounter(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => co.observe(el));
    } else {
      counters.forEach(runCounter);
    }
  }

  /* ---------- 8. Slider đánh giá ---------- */
  const track = $("#reviewTrack");
  const dotsWrap = $("#reviewDots");
  if (track && dotsWrap) {
    const slides = $$(".review", track);
    let index = 0;
    let timer = null;

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Đánh giá ${i + 1}`);
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => go(i));
      dotsWrap.appendChild(dot);
    });
    const dots = $$("button", dotsWrap);

    function go(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, di) => d.classList.toggle("active", di === index));
      restart();
    }
    function restart() {
      if (timer) clearInterval(timer);
      timer = setInterval(() => go(index + 1), 6000);
    }
    restart();

    // Vuốt trên điện thoại
    let startX = 0;
    track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    });
  }

  /* ---------- 9. Nút cuộn thư viện ảnh ---------- */
  const galTrack = $("#galleryTrack");
  const galPrev = $("#galPrev");
  const galNext = $("#galNext");
  if (galTrack) {
    const amount = () => Math.min(galTrack.clientWidth * 0.8, 420);
    if (galPrev) galPrev.addEventListener("click", () => galTrack.scrollBy({ left: -amount(), behavior: "smooth" }));
    if (galNext) galNext.addEventListener("click", () => galTrack.scrollBy({ left: amount(), behavior: "smooth" }));

    // Kéo bằng chuột trên desktop
    let down = false, startX = 0, startLeft = 0, moved = false;
    galTrack.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") return;
      down = true; moved = false;
      startX = e.clientX; startLeft = galTrack.scrollLeft;
      galTrack.style.cursor = "grabbing";
    });
    window.addEventListener("pointermove", (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      galTrack.scrollLeft = startLeft - dx;
    });
    window.addEventListener("pointerup", () => {
      down = false;
      galTrack.style.cursor = "";
    });
    galTrack.addEventListener("click", (e) => { if (moved) e.preventDefault(); }, true);
  }

  /* ---------- 10. Cuộn mượt có trừ offset header ---------- */
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

})();
