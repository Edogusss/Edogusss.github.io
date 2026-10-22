---
baslik: "XSS Akademi: XSS'i seviye seviye öğrenmek için yaptığım lab"
tarih: 2026-08-31
tur: blog
ozet: Kendi öğrenimim için yaptığım, teoriyi ve uygulamayı birleştiren, 12 seviyelik bir XSS eğitim platformu. Her seviyede açıklama, savunmasız bir kod örneği, ipucu ve çözüm var.
etiketler: [web-güvenliği, xss, node.js, kendi-kendine-öğrenme]
---

## Neden yaptım?

XSS'i (Cross-Site Scripting) gerçekten anlamak için önce **savunmasız kodu** görmek gerekiyor. "Şu girdi şuraya filtresiz yazılıyor, o yüzden çalışıyor" dediğinde iş oturuyor. Kendime bunu seviye seviye çalışabileceğim bir ortam istedim ve XSS Akademi'yi yaptım.

Bu bir öğrenme projesi; kendim için kurdum.

## Nasıl çalışıyor?

Node.js ve Express ile yazılmış küçük bir web uygulaması. **12 seviye** var ve her seviyede:

1. Konuyu anlatan kısa bir teori,
2. O açığı taşıyan savunmasız bir kod örneği,
3. Üzerinde deneme yapabileceğin bir uygulama alanı,
4. Takılırsan bir ipucu,
5. Ve çözüm.

İlerleme çubuğuyla kaç seviyeyi geçtiğin görünüyor.

## Seviyeler neyi öğretiyor?

Kolaydan zora doğru gerçek XSS senaryolarını kapsıyor:

| Seviye | Konu |
|---|---|
| 1 | Reflected XSS ve `<script>` etiketi |
| 2 | Stored (kalıcı) XSS |
| 3 | DOM tabanlı XSS ve `onerror` |
| 4 | Attribute içinden tırnakla kaçış, `onfocus` |
| 5 | Filtre atlama: büyük/küçük harf |
| 6 | JavaScript değişkeninin içinden çıkış |
| 7 | İç içe etiketle filtre kırma |
| 8 | `<script>` olmadan XSS |
| 9 | `javascript:` protokolü |
| 10 | ES6 backtick ile kod çalıştırma |
| 11 | `<` ve `>` olmadan XSS |
| 12 | Boşluk karakteri kullanmadan XSS |

## Ne öğrendim?

- Bir filtrenin neyi engelleyip neyi kaçırdığını, o filtreyi **kendin yazınca** çok daha net görüyorsun.
- "Script etiketini engelledim, güvendeyim" demenin neden yanlış olduğunu seviye 8-12 iyi gösteriyor.

Not: Bu uygulama bilerek savunmasız kodlar içeriyor; sadece kapalı bir ortamda, öğrenmek için kullanılmalı.
