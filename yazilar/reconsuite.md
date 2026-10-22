---
baslik: "ReconSuite: Tarayıcıdan çıkmadan keşiften rapora"
tarih: 2026-09-30
tur: blog
ozet: Mert Ergün ile birlikte geliştirdiğimiz, bug bounty ve sızma testi sırasında keşiften rapora kadar yardımcı olan Chrome eklentisi. Neden yaptık, ne yapıyor ve güvenliği nasıl kurguladık.
etiketler: [reconsuite, web-güvenliği, bug-bounty, chrome-eklentisi]
---

> Bu proje [Mert Ergün](https://github.com/Mert305) ile birlikte geliştiriliyor.

## ReconSuite nedir?

ReconSuite, bir web hedefini incelerken ihtiyaç duyduğum küçük işleri tek bir yerde toplayan bir **Chrome eklentisi**. Bir bug bounty programına ya da izinli bir sızma testine baktığımda, açık olan sayfayı analiz etmek, geçmiş URL'lere bakmak, gizli parametreleri aramak ve sonuçları rapora dökmek için ayrı ayrı araçlar arasında gezinmek gerekiyordu. Bunların çoğunu tarayıcıdan hiç çıkmadan yapabilmek istedik.

Manifest V3 tabanlı; şu an **v0.11** sürümünde.

## Ne yapıyor?

- **Tek tıkla denetim.** "Denetimi başlat" dediğimde açık sayfayı, başlıklarını, `robots.txt` ve `sitemap`'i, sayfanın kullandığı JavaScript dosyalarını ve bağlantılı sayfaları sırayla inceliyor, bulguları tek bir rapora topluyor.
- **Pasif tarama.** Yansıyan parametreler, açık yönlendirme adayları, güvenlik başlığı eksikleri (CSP, HSTS, X-Frame-Options), HTTP üzerinden giden parolalar, JavaScript içinde unutulmuş API anahtarları ve sırlar.
- **Keşif.** Geçmiş URL'ler için Wayback, sertifika şeffaflığından subdomain listesi (crt.sh), JS dosyalarından endpoint ve sır çıkarımı.
- **Teknoloji parmak izi.** Sayfanın hangi teknolojilerle kurulduğunu çıkarıyor ve güvenlik başlıklarını denetliyor.
- **WordPress derin taraması.** WordPress tespit edilirse sürüm, eklenti ve tema envanteri çıkarıp bilinen açıklarla eşleştiriyor.
- **Yardımcı araçlar.** Base64 / URL / JWT çözme, cookie ve tarayıcı deposu (localStorage, IndexedDB) incelemesi, Burp/ZAP proxy'sine tek tıkla yönlendirme, canlı WebSocket izleme.
- **Rapor.** Bulguları JSON ve Markdown olarak dışa aktarıyor; raporu kaydetmeden önce URL'lerdeki ve metinlerdeki sır ve kişisel bilgileri maskeliyor.

## En çok önem verdiğimiz şey: sınırlar

Böyle bir araç kötüye kullanılmaya açık. O yüzden tasarımın merkezine "yalnızca yetkili hedefte, yalnızca izinle" kuralını koyduk:

- **Aktif testler kapsam listesine bağlı.** Payload gönderen hiçbir modül, hedef açıkça kapsam listesinde olmadan ve ayrıca "aktif test onayı" verilmeden çalışmıyor. Genel anahtar kapalı olsa bile bu iki şart aranıyor.
- **Ölçülü davranış.** Otomatik keşif aynı origin ile sınırlı; istek sayısı, süre ve yanıt boyutu için bütçeler var. İstekler çerez göndermiyor, yönlendirmeleri izlemiyor.
- **Kanıt etiketleri.** Her bulgu kanıt türüyle işaretleniyor: *aktif doğrulandı*, *sürüm-CVE eşleşmesi*, *kanıt gözlendi*, *pasif sinyal*. "Denetim tamamlandı" demek hedefin güvenli olduğu anlamına gelmiyor; otomatik akış, yetki ve iş mantığı gibi alanları kapsamadığını raporda açıkça söylüyor.

## Nasıl yaptık?

Eklentinin tamamı sade JavaScript (MV3), arayüz HTML ve CSS. Dışarıya bağımlılık yok. Sır tarama, parmak izi ve rapor üretimi gibi parçalar ortak kütüphaneler halinde; hem içerik betiği hem arka plan servisi aynı mantığı kullanıyor. Testler sahte Chrome API'leri ve yerel örnek verilerle çalışıyor, gerçek hedeflere hiç istek göndermiyor.

## Sırada ne var?

- Eski aktif modüllere ortak iptal / süre / boyut bütçesi
- Daha fazla kanıt-temelli kontrol, daha az yanlış pozitif
- Mağaza sürümü için son rötuşlar

Depo şimdilik gizli. Projeyi birlikte yürüttüğümüz Mert'in profili: [github.com/Mert305](https://github.com/Mert305).
