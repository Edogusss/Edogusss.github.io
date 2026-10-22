/* =========================================================================
   SİTENİN TÜM İÇERİĞİ — Bilgilerini güncellemek için yalnızca bu dosyayı düzenle.
   Klasik CV (index.html), Evren görünümü (evren.html) ve mobil sürümler buradan okur.
   Metinler { tr: "...", en: "..." } şeklinde ya da tek dilde düz yazı olabilir.
   ITEMS içindeki her öğe Evren görünümünde bir yıldızdır; "links" ile başka öğelere bağlanır.
   Yeteneklerin yılı otomatik hesaplanır (onu kullanan ilk öğenin yılı).
   ========================================================================= */
const PROFILE = {
  name: "Doğukan Sansar",
  role: { tr: "Junior Pentester", en: "Junior Penetration Tester" },
  summary: {
    tr: "Lise öğrencisiyim ve 2 yılı aşkın süredir ForDefence'ta junior pentester olarak çalışıyorum. Sızma testleri ve phishing farkındalık simülasyonları yapıyor, boş zamanlarımda kendi güvenlik ve yapay zekâ araçlarımı geliştiriyorum.",
    en: "I'm a high school student and have been working as a junior penetration tester at ForDefence for over two years. I run penetration tests and phishing awareness simulations, and in my spare time I build my own security and AI tools.",
  },
  email: "talhadogukansansar@gmail.com",
  socials: [
    { label: "GitHub",   url: "https://github.com/Edogusss" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/do%C4%9Fukan-sansar-b55b90273" },
  ],
  languages: { tr: "Türkçe (ana dil) · İngilizce (C1) · Almanca (B2)", en: "Turkish (native) · English (C1) · German (B2)" },
  cvPdf: "",   // örn. "cv.pdf"
};

const ITEMS = [
  // ---- Eğitim / Education
  { id: "school", type: "edu", year: 2023.7,
    title: { tr: "Lise Öğrenimi", en: "High School" },
    date: { tr: "Devam ediyor", en: "In progress" },
    desc: { tr: "Okulla birlikte profesyonel olarak siber güvenlik alanında çalışıyorum.", en: "Working professionally in cyber security alongside school." },
    links: ["linux"] },

  // ---- Deneyim / Experience
  { id: "fordefence", type: "job", year: 2024.35,
    title: { tr: "Junior Pentester", en: "Junior Penetration Tester" }, org: "ForDefence",
    date: { tr: "May 2024 — Günümüz", en: "May 2024 — Present" },
    points: {
      tr: ["Web uygulamaları ve ağ altyapıları için sızma testleri", "Bulguların raporlanması ve çözüm önerileri", "Kurumlar için phishing farkındalık simülasyonları", "Kendi kurduğum test laboratuvarını ekip içi pratik için paylaşma"],
      en: ["Penetration tests for web applications and network infrastructure", "Reporting findings with remediation advice", "Phishing awareness simulations for organisations", "Sharing my own test lab with the team for hands-on practice"],
    },
    links: ["pentest", "nmap", "kali", "websec", "phishing", "reporting", "linux"] },

  // ---- Projeler / Projects  (ilk link = projenin bağlı olduğu yer)
  { id: "testlab", type: "project", year: 2025.5, title: { tr: "Pentest Test Labı", en: "Pentest Test Lab" },
    desc: { tr: "Farklı zorluk seviyelerinde 4 test makinesi ve bir Active Directory laboratuvarından oluşan kendi test ortamım. Önce kendim için kurdum, herkesin işine yarayacağını fark edince ekip arkadaşlarımla paylaştım.",
            en: "My own test environment: 4 test machines of varying difficulty plus an Active Directory lab. I built it for myself first, then shared it with my teammates once I saw how useful it was." },
    links: ["me", "fordefence", "pentest", "ad", "linux", "kali"], url: "yazi.html?y=pentest-test-labi" },
  { id: "xsslab", type: "project", year: 2026.6, title: { tr: "XSS Akademi", en: "XSS Academy" },
    desc: { tr: "Kendi öğrenimim için yaptığım, teori ve uygulamayı birleştiren, seviye seviye ilerleyen bir XSS eğitim platformu. Her seviyede açıklama, savunmasız kod örneği, ipucu ve çözüm var.",
            en: "A level-based XSS training platform I built for my own learning, combining theory and practice. Each level has an explanation, vulnerable code sample, hint and solution." },
    links: ["me", "websec", "node", "js"], url: "yazi.html?y=xss-akademi" },
  { id: "orbit", type: "project", year: 2026.53, title: "Orbit",
    desc: { tr: "Kendi sunucumda çalışan, WhatsApp ve Telegram üzerinden konuşan, sesle uyanan ve sesimden beni tanıyan yapay zekâ asistanı. Takvim, mail, hatırlatma ve toplantı notlarını tek yerde topluyor.",
            en: "A self-hosted AI assistant that talks over WhatsApp and Telegram, wakes up by voice and recognises me by my voice. It brings calendar, mail, reminders and meeting notes together." },
    links: ["me", "python", "fastapi", "nextjs", "ts", "docker", "postgres", "redis", "llm", "voice"], url: "yazi.html?y=orbit" },
  { id: "site", type: "project", year: 2026.8, title: { tr: "Bu site", en: "This site" },
    desc: { tr: "Kariyerimi canlı bir ağ olarak gösteren etkileşimli özgeçmiş; CTF çözümlerim ve blog yazılarım için ayrı bir bölümü var.",
            en: "An interactive resume showing my career as a living network, with a section for my CTF write-ups and blog posts." },
    links: ["me", "js"], url: "yazi.html?y=bu-site" },
  { id: "reconsuite", type: "project", year: 2026.72, title: "ReconSuite",
    with: { name: "Mert Ergün", url: "https://github.com/Mert305" },
    desc: { tr: "Mert Ergün ile birlikte geliştirdiğimiz, bug bounty ve sızma testi sırasında keşiften rapora kadar yardımcı olan bir Chrome eklentisi. Aktif testler yalnızca kapsam listesindeki hedeflerde ve açık onayla çalışıyor.",
            en: "A Chrome extension we built with Mert Ergün that helps during bug bounty and penetration testing, from recon to reporting. Active tests only run on in-scope targets with explicit consent." },
    links: ["me", "websec", "pentest", "js", "chromeext", "reporting"], url: "yazi.html?y=reconsuite" },

  // ---- Yetenekler / Skills  (yılı otomatik)
  { id: "pentest", type: "skill", title: { tr: "Sızma Testi", en: "Penetration Testing" }, group: "sec" },
  { id: "websec", type: "skill", title: { tr: "Web Güvenliği", en: "Web Security" }, group: "sec" },
  { id: "phishing", type: "skill", title: { tr: "Phishing Simülasyonu", en: "Phishing Simulation" }, group: "sec" },
  { id: "ad", type: "skill", title: "Active Directory", group: "sec" },
  { id: "reporting", type: "skill", title: { tr: "Pentest Raporlama", en: "Pentest Reporting" }, group: "sec" },
  { id: "nmap", type: "skill", title: "Nmap", group: "tool" },
  { id: "kali", type: "skill", title: "Kali Linux", group: "tool" },
  { id: "linux", type: "skill", title: "Linux", group: "tool" },
  { id: "docker", type: "skill", title: "Docker", group: "tool" },
  { id: "python", type: "skill", title: "Python", group: "dev" },
  { id: "fastapi", type: "skill", title: "FastAPI", group: "dev" },
  { id: "js", type: "skill", title: "JavaScript", group: "dev" },
  { id: "ts", type: "skill", title: "TypeScript", group: "dev" },
  { id: "nextjs", type: "skill", title: "Next.js", group: "dev" },
  { id: "node", type: "skill", title: "Node.js", group: "dev" },
  { id: "chromeext", type: "skill", title: { tr: "Chrome Eklentisi (MV3)", en: "Chrome Extensions (MV3)" }, group: "dev" },
  { id: "postgres", type: "skill", title: "PostgreSQL", group: "dev" },
  { id: "redis", type: "skill", title: "Redis", group: "dev" },
  { id: "llm", type: "skill", title: { tr: "Yerel LLM (Ollama)", en: "Local LLMs (Ollama)" }, group: "ai" },
  { id: "voice", type: "skill", title: { tr: "Ses Tanıma (Whisper, Vosk)", en: "Speech (Whisper, Vosk)" }, group: "ai" },
];

/* ---- Ortak yardımcılar ---- */
let lang = null;
try { lang = localStorage.getItem("lang"); } catch (e) {}
if (lang !== "tr" && lang !== "en") lang = (navigator.language || "tr").toLowerCase().startsWith("en") ? "en" : "tr";
function setLang(l) { lang = l; try { localStorage.setItem("lang", l); } catch (e) {} document.documentElement.lang = l; }
const T = (v) => (v == null ? "" : typeof v === "object" && !Array.isArray(v) ? (v[lang] ?? v.tr ?? v.en) : v);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const byId = Object.fromEntries(ITEMS.map((x) => [x.id, x]));
const ofType = (t) => ITEMS.filter((x) => x.type === t);
const skillsOf = (item) => (item.links || []).map((l) => byId[l]).filter((x) => x && x.type === "skill");
// Ortak geliştirici etiketi: "Mert Ergün ile" (profil bağlantılı)
const withHtml = (x) => {
  if (!x.with) return "";
  const a = `<a href="${esc(x.with.url)}" target="_blank" rel="noopener">${esc(x.with.name)}</a>`;
  return lang === "tr" ? `${a} ile` : `with ${a}`;
};
const SKILL_GROUPS = { sec: { tr: "Güvenlik", en: "Security" }, tool: { tr: "Araçlar", en: "Tools" }, dev: { tr: "Yazılım", en: "Development" }, ai: { tr: "Yapay Zekâ", en: "AI" } };
// Sayfa mobil/ klasöründeyse site köküne giden bağlantıların başına ../ eklenir
const BASE = /\/mobil\//.test(location.pathname) ? "../" : "";
const rootUrl = (u) => (!u || /^(https?:|mailto:|\.\.\/|\/|#)/.test(u) ? u : BASE + u);
async function loadPosts() {
  try { const r = await fetch(BASE + "yazilar/liste.json", { cache: "no-cache" }); return r.ok ? await r.json() : []; } catch (e) { return []; }
}
