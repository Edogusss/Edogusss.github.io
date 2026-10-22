---
baslik: "Bu siteyi nasıl yaptım?"
tarih: 2026-10-20
tur: blog
ozet: Özgeçmişimi klasik bir CV, kariyerimi canlı bir evren ağı ve telefona özel dört farklı deneyim olarak gösteren bu sitenin arkasındaki fikirler.
etiketler: [web, javascript, canvas, tasarım]
---

## Neden sıradan bir CV değil?

Özgeçmişler genelde birbirine benziyor. Ben hem işe yarar, hem de yeteneklerimin birbirine nasıl bağlandığını gösteren bir şey istedim. O yüzden aynı içeriği birkaç farklı şekilde sundum.

## Üç masaüstü görünümü

- **Klasik CV.** Sade, iyi dizilmiş, yazdırınca düzgün bir kâğıt CV çıkan ana sayfa.
- **Evren.** Kariyerimi bir yıldız ağı olarak gösteriyor: deneyimlerim, projelerim ve yeteneklerim birbirine bağlı düğümler. Alttaki zaman çizelgesini kaydırınca ağ yıl yıl büyüyor. Hiçbir kütüphane kullanmıyor; fizik motorunu (düğümlerin birbirini itmesi, bağlantıların yay gibi davranması) kendim yazdım.
- **CTF & Blog.** Yazılarımın listesi, arama ve etiketlerle.

## Telefona özel dört deneyim

Telefondan girildiğinde rastgele dört farklı sürümden biri açılıyor:

1. **Sohbet** — WhatsApp gibi; sorulara dokunarak tanışıyorsun.
2. **Hikâye** — Instagram hikâyeleri gibi tam ekran kartlar.
3. **Kaydırdıkça büyüyen ağ** — evren görünümünün dikey, mobil hâli.
4. **Terminal** — komutlarla gezilen, gizli komutları da olan bir ekran.

## Nasıl çalışıyor?

Tüm site saf HTML, CSS ve JavaScript. Derleme adımı yok. Bütün içerik tek bir veri dosyasında duruyor; sayfalar bu dosyayı okuyor, yani bir bilgiyi bir kez güncelleyince her yerde değişiyor. Yazılar basit Markdown dosyaları; klasöre yeni bir dosya atınca listeye kendiliğinden ekleniyor. Site GitHub Pages'te yayında.

Evrendeki fizik şöyle çalışıyor — her kare, bağlı iki düğüm arasındaki mesafeyi ideal uzunluğa doğru çekiyor:

```js
const l = (d - L) / d * alpha * strength;
b.vx -= dx * l; b.vy -= dy * l;
a.vx += dx * l; a.vy += dy * l;
```

## Sırada ne var?

- Daha fazla CTF çözümü
- Projelerin ayrıntılı yazıları (bu da onlardan biri)
