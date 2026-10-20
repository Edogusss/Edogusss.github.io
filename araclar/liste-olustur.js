// yazilar/ klasöründeki .md dosyalarını okuyup yazilar/liste.json dosyasını oluşturur.
// Elle çalıştırmana gerek yok: GitHub'a yüklediğinde otomatik çalışır,
// yerel önizlemede de her sayfa açılışında yeniden üretilir.
//
//   node araclar/liste-olustur.js
//
// "_" ile başlayan dosyalar (ör. _sablon.md) ve "taslak: true" olan yazılar listeye girmez.

const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "..", "yazilar");

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

function build() {
  const warnings = [];
  const posts = [];
  for (const file of fs.readdirSync(DIR)) {
    if (!file.endsWith(".md") || file.startsWith("_")) continue;
    const slug = file.slice(0, -3);
    if (!/^[\w.-]+$/.test(slug)) {
      warnings.push(`${file}: dosya adında yalnızca harf, rakam, - ve _ kullan (Türkçe karakter ve boşluk olmasın).`);
      continue;
    }
    const { meta, body } = parseFrontMatter(fs.readFileSync(path.join(DIR, file), "utf8"));
    if (meta.taslak === true) continue;
    if (!meta.baslik) warnings.push(`${file}: "baslik" eksik.`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.tarih || "")) warnings.push(`${file}: "tarih" YYYY-AA-GG biçiminde olmalı (ör. 2026-10-20).`);
    const tur = String(meta.tur || "blog").toLowerCase() === "ctf" ? "ctf" : "blog";
    const words = body.split(/\s+/).filter(Boolean).length;
    posts.push({
      slug,
      baslik: meta.baslik || slug,
      tarih: meta.tarih || "",
      tur,
      ozet: meta.ozet || "",
      etiketler: Array.isArray(meta.etiketler) ? meta.etiketler : meta.etiketler ? [meta.etiketler] : [],
      platform: meta.platform || "",
      kategori: meta.kategori || "",
      zorluk: meta.zorluk || "",
      dakika: Math.max(1, Math.round(words / 200)),
    });
  }
  posts.sort((a, b) => (b.tarih || "").localeCompare(a.tarih || "") || a.baslik.localeCompare(b.baslik, "tr"));
  return { posts, warnings };
}

module.exports = { build };

if (require.main === module) {
  const { posts, warnings } = build();
  fs.writeFileSync(path.join(DIR, "liste.json"), JSON.stringify(posts, null, 2) + "\n");
  warnings.forEach((w) => console.warn("⚠ " + w));
  console.log(`✓ ${posts.length} yazı listelendi → yazilar/liste.json`);
}
