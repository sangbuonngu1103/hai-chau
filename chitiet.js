/* =========================================================
   Hải Châu — Trang chi tiết
   Đọc ?id=<khoá> rồi dựng nội dung từ window.HC (data.js)
   ========================================================= */
(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const root = $("#detailRoot");
  if (!root) return;

  /* ---------- Tiện ích ---------- */
  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  // Nội dung do mình soạn (đã tin cậy) — cho phép thực thể HTML như &amp;
  const raw = (s) => String(s == null ? "" : s);

  const GROUPS = ["areas", "destinations", "festivals", "crafts", "foods"];
  const SECTION = {
    areas: "#areas",
    destinations: "#destinations",
    festivals: "#festivals",
    crafts: "#crafts",
    foods: "#food",
  };
  const GROUP_LABEL = {
    areas: "Vùng đất",
    destinations: "Điểm đến",
    festivals: "Lễ hội",
    crafts: "Làng nghề",
    foods: "Ẩm thực",
  };

  const store = window.HC || {};

  const findItem = (id) => {
    for (const g of GROUPS) {
      const bucket = store[g];
      if (bucket && Object.prototype.hasOwnProperty.call(bucket, id)) {
        return { group: g, key: id, item: bucket[id] };
      }
    }
    return null;
  };

  let fbSeq = 0;
  const fbSeed = (id) => `${id}-${++fbSeq}`;

  /* ---------- Lấy id từ URL ---------- */
  let id = "";
  try {
    id = new URLSearchParams(window.location.search).get("id") || "";
  } catch (e) {
    id = "";
  }

  const found = id ? findItem(id) : null;

  /* ---------- Trường hợp không tìm thấy ---------- */
  if (!found) {
    document.title = "Không tìm thấy nội dung — Hải Châu, Nghệ An";
    root.innerHTML = `
      <div class="container">
        <div class="detail-missing">
          <p class="detail-kind"><span>!</span> Hải Châu</p>
          <h1 class="detail-title">Không tìm thấy nội dung</h1>
          <p class="detail-lead">
            Đường dẫn không hợp lệ hoặc mục bạn tìm không còn tồn tại.
            Hãy quay lại trang chủ để tiếp tục khám phá Hải Châu.
          </p>
          <a class="btn btn-primary" href="index.html">← Về trang chủ</a>
        </div>
      </div>`;
    initPage();
    return;
  }

  const { group, key, item } = found;

  /* ---------- Dựng nội dung ---------- */
  document.title = `${item.title.replace(/&amp;/g, "&")} — Hải Châu, Nghệ An`;

  const secHref = `index.html${SECTION[group] || ""}`;
  const secName = GROUP_LABEL[group] || "Khám phá";

  /* Khối mở đầu: breadcrumb + hero */
  const crumb = `
    <nav class="container detail-crumb" aria-label="Đường dẫn">
      <a href="index.html">Trang chủ</a>
      <span aria-hidden="true">/</span>
      <a href="${secHref}">${esc(secName)}</a>
      <span aria-hidden="true">/</span>
      <b>${esc(item.title.replace(/&amp;/g, "&"))}</b>
    </nav>`;

  const hero = `
    <header class="detail-hero">
      <div class="container detail-hero-grid">
        <figure class="detail-hero-media reveal">
          <img src="${esc(item.hero)}" alt="${esc(item.heroAlt || item.title)}"
               data-fallback="${esc(fbSeed(key))}" fetchpriority="high" />
        </figure>
        <div class="detail-hero-copy reveal">
          <p class="detail-kind"><span>${esc(item.num || "")}</span> ${esc(item.kind || secName)}</p>
          <h1 class="detail-title">${raw(item.title)}</h1>
          ${item.subtitle ? `<p class="detail-sub">${raw(item.subtitle)}</p>` : ""}
          ${item.lead ? `<p class="detail-lead">${raw(item.lead)}</p>` : ""}
          <div class="detail-hero-actions">
            <a class="btn btn-primary" href="${secHref}">← Về ${esc(secName)}</a>
            <a class="btn btn-ghost" href="index.html">Trang chủ</a>
          </div>
        </div>
      </div>
    </header>`;

  /* Dải thông tin nhanh */
  const facts =
    Array.isArray(item.facts) && item.facts.length
      ? `
    <section class="container detail-facts reveal" aria-label="Thông tin nhanh">
      <dl class="facts-grid">
        ${item.facts
          .map(
            (f) => `
        <div class="fact">
          <dt>${esc(f[0])}</dt>
          <dd>${esc(f[1])}</dd>
        </div>`
          )
          .join("")}
      </dl>
    </section>`
      : "";

  /* Thân bài */
  const bodyBlocks =
    Array.isArray(item.body) && item.body.length
      ? item.body
          .map(
            (b) => `
      <section class="detail-block reveal">
        ${b.h ? `<h2 class="detail-h">${raw(b.h)}</h2>` : ""}
        ${Array.isArray(b.p) ? b.p.map((t) => `<p>${raw(t)}</p>`).join("") : ""}
        ${
          b.img
            ? `
        <figure class="detail-fig">
          <img src="${esc(b.img)}" alt="${esc(b.alt || b.h || item.title)}"
               data-fallback="${esc(fbSeed(key))}" loading="lazy" />
          ${b.cap ? `<figcaption>${raw(b.cap)}</figcaption>` : ""}
        </figure>`
            : ""
        }
      </section>`
          )
          .join("")
      : "";

  /* Thư viện ảnh */
  const gallery =
    Array.isArray(item.gallery) && item.gallery.length
      ? `
    <section class="detail-block reveal">
      <h2 class="detail-h">Thư viện ảnh</h2>
      <div class="detail-gallery">
        ${item.gallery
          .map(
            (g) => `
        <figure class="detail-shot">
          <img src="${esc(g.src)}" alt="${esc(g.alt || item.title)}"
               data-fallback="${esc(fbSeed(key))}" loading="lazy" />
          ${g.cap ? `<figcaption>${raw(g.cap)}</figcaption>` : ""}
        </figure>`
          )
          .join("")}
      </div>
    </section>`
      : "";

  /* Nguồn tham khảo */
  const sources =
    Array.isArray(item.sources) && item.sources.length
      ? `
    <section class="detail-block detail-sources reveal">
      <h2 class="detail-h">Nguồn tham khảo</h2>
      <ul>
        ${item.sources
          .map(
            (s) =>
              `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} <span aria-hidden="true">↗</span></a></li>`
          )
          .join("")}
      </ul>
    </section>`
      : "";

  /* Xem tiếp (related) */
  const relatedItems = (Array.isArray(item.related) ? item.related : [])
    .map((r) => findItem(r))
    .filter(Boolean);

  const related = relatedItems.length
    ? `
    <div class="detail-aside-card reveal">
      <h2 class="detail-h">Xem tiếp</h2>
      <ul class="related-list">
        ${relatedItems
          .map(
            (r) => `
        <li>
          <a href="chitiet.html?id=${encodeURIComponent(r.key)}">
            <span class="rel-media">
              <img src="${esc(r.item.hero)}" alt="${esc(r.item.heroAlt || r.item.title)}"
                   data-fallback="${esc(fbSeed(r.key))}" loading="lazy" />
            </span>
            <span class="rel-text">
              <small>${esc(r.item.kind || GROUP_LABEL[r.group] || "")}</small>
              <b>${raw(r.item.title)}</b>
            </span>
          </a>
        </li>`
          )
          .join("")}
      </ul>
    </div>`
    : "";

  root.innerHTML = `
    ${crumb}
    ${hero}
    ${facts}
    <div class="container detail-layout">
      <div class="detail-main">
        ${bodyBlocks}
        ${gallery}
        ${sources}
      </div>
      ${related ? `<aside class="detail-aside">${related}</aside>` : ""}
    </div>`;

  initPage();

  /* =========================================================
     Hành vi chung của trang
     ========================================================= */
  function initPage() {
    /* Ảnh dự phòng nếu link online lỗi */
    const fallback = (img) => {
      const seed = img.dataset.fallback || "haichau";
      img.src = `https://picsum.photos/seed/${encodeURIComponent(seed)}/1200/900`;
    };
    $$("img[data-fallback]", root).forEach((img) => {
      img.addEventListener("error", function handler() {
        img.removeEventListener("error", handler);
        fallback(img);
      });
      if (img.complete && img.naturalWidth === 0) fallback(img);
    });

    /* Năm hiện tại */
    const yearEl = $("#year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* Header khi cuộn + nút lên đầu trang */
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
      toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }

    /* Menu di động */
    const menuToggle = $("#menuToggle");
    const nav = $("#nav");
    const closeNav = () => {
      if (!nav || !menuToggle) return;
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

    /* Hiện dần khi cuộn */
    const reveals = $$(".reveal", root).concat(header ? [header] : []);
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
  }
})();
