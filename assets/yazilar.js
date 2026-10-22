/* CTF & Blog sayfalarının ortak yardımcıları */

const UI = {
  tr: {
    title: "Yazılar", sub: "CTF çözümlerim ve blog yazılarım.",
    all: "Tümü", ctf: "CTF", blog: "Blog", search: "ara: başlık, etiket, platform…",
    posts: "yazı", ctfCount: "CTF çözümü", blogCount: "blog yazısı", platforms: "platform",
    min: "dk okuma", back: "← tüm yazılar", prev: "← önceki", next: "sonraki →",
    toc: "İçindekiler", copy: "kopyala", copied: "kopyalandı ✓",
    platform: "Platform", category: "Kategori", difficulty: "Zorluk", date: "Tarih",
    empty: "Burada henüz yazı yok, ilk CTF çözümlerim yakında.", noMatch: "Aramana uyan yazı yok.",
    notFound: "Bu yazı bulunamadı.", tagFilter: "etiket:", clear: "✕ temizle",
    offline: "Yazılar yüklenemedi. Dosyayı çift tıklayarak açtıysan yazılar görünmez; siteyi bir sunucu üzerinden (GitHub Pages ya da yerel önizleme) açman gerekiyor.",
    cv: "☰ CV", net: "✦ Evren", built: "ile yapıldı",
  },
  en: {
    title: "Writing", sub: "My CTF write-ups and blog posts.",
    all: "All", ctf: "CTF", blog: "Blog", search: "search: title, tag, platform…",
    posts: "posts", ctfCount: "CTF write-ups", blogCount: "blog posts", platforms: "platforms",
    min: "min read", back: "← all posts", prev: "← previous", next: "next →",
    toc: "Contents", copy: "copy", copied: "copied ✓",
    platform: "Platform", category: "Category", difficulty: "Difficulty", date: "Date",
    empty: "Nothing here yet, my first CTF write-ups are coming soon.", noMatch: "No posts match your search.",
    notFound: "This post could not be found.", tagFilter: "tag:", clear: "✕ clear",
    offline: "Posts could not be loaded. If you opened the file by double-clicking, posts won't show; open the site through a server (GitHub Pages or the local preview).",
    cv: "☰ CV", net: "✦ Universe", built: "built with",
  },
};

let lang = null;
try { lang = localStorage.getItem("lang"); } catch (e) {}
if (lang !== "tr" && lang !== "en") lang = (navigator.language || "tr").toLowerCase().startsWith("en") ? "en" : "tr";
const u = () => UI[lang];

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* .md dosyasının başındaki --- ... --- bilgilerini okur (araclar/liste-olustur.js ile aynı kurallar). */
function parseFrontMatter(text) {
  text = text.replace(/^﻿/, "").replace(/\r\n/g, "\n");
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^\s*([\w-]+)\s*:\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (/^\[.*\]$/.test(v)) v = v.slice(1, -1).split(",").map((x) => x.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
    else if (v === "true" || v === "false") v = v === "true";
    else v = v.replace(/^["']|["']$/g, "");
    meta[kv[1].toLowerCase()] = v;
  }
  return { meta, body: text.slice(m[0].length) };
}

function fmtDate(iso, style = "long") {
  const d = new Date(iso + "T12:00:00");
  if (isNaN(d)) return iso || "";
  return d.toLocaleDateString(lang === "tr" ? "tr-TR" : "en-GB", style === "long"
    ? { day: "numeric", month: "long", year: "numeric" }
    : { day: "2-digit", month: "short" });
}

async function loadList() {
  const r = await fetch("yazilar/liste.json", { cache: "no-cache" });
  if (!r.ok) throw new Error(r.status);
  return r.json();
}

function navHtml(active) {
  return `
  <div class="wrap">
    <a class="logo" href="index.html">~/<span>doğukan</span>/yazılar</a>
    <div class="nav-right">
      <a class="switch on" href="yazilar.html">✎ CTF & Blog</a>
      <a class="switch" href="index.html">${u().cv}</a>
      <a class="switch hide-sm" href="evren.html">${u().net}</a>
      <button class="lang" id="lang-btn" aria-label="Dil / Language">${lang === "tr" ? "<b>TR</b> / EN" : "TR / <b>EN</b>"}</button>
    </div>
  </div>`;
}

function mountChrome(onLang) {
  document.documentElement.lang = lang;
  document.querySelector("nav").innerHTML = navHtml();
  document.querySelector("footer").textContent = `© ${new Date().getFullYear()} Doğukan Sansar — HTML + CSS ${u().built} ♥`;
  $("lang-btn").onclick = () => {
    lang = lang === "tr" ? "en" : "tr";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    mountChrome(onLang);
    onLang();
  };
}
