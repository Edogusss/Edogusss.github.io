---
baslik: "Orbit: Kendi yapay zekâ asistanımı neden ve nasıl yaptım?"
tarih: 2026-10-20
tur: blog
ozet: Kendi sunucumda çalışan, sesle uyanan, sesimden beni tanıyan ve WhatsApp üzerinden konuşan asistanım Orbit'i; internetteki benzerlerinden farklarıyla anlatıyorum.
etiketler: [orbit, yapay-zeka, proje, gizlilik]
---

## Orbit nedir?

Orbit, kişisel kullanım için geliştirdiğim bir **yapay zekâ yönetici asistanı**. Takvimimi, maillerimi, hatırlatmalarımı ve toplantı notlarımı tek yerde topluyor. Onunla ayrı bir uygulama açmadan, zaten her gün kullandığım **WhatsApp ve Telegram** üzerinden ya da sesle konuşuyorum.

İlk hedef kendi işimi kolaylaştırmaktı. İleride küçük ekiplerin de kullanabileceği bir platforma dönüştürmeyi planlıyorum.

## Neler yapabiliyor?

- **"Orbit uyan" diyerek sesle başlatma.** Uyandırma kelimesi **cihazın kendisinde** algılanıyor. Ben bu kelimeyi söyleyene kadar hiçbir ses cihazdan dışarı çıkmıyor.
- **Sesimden beni tanıma.** Ses izim kayıtlıysa Orbit, konuşanın ben olduğumu doğrulamadan hiçbir işlem yapmıyor. Başkası telefonumu alıp "şu kişiye mesaj at" diyemiyor.
- **Hızlı sesli sohbet.** Konuşmamı bitirdikten sonra Orbit'in cevap vermeye başlaması ölçümlerimde **1,1–1,3 saniye** sürüyor. Sözünü kesebiliyorum, gerçek bir sohbet gibi akıyor.
- **Toplantı modu.** Toplantıyı fiziksel cihaz üzerinden kaydediyor ve önemli anları sesli komutla işaretleyebiliyorum. Toplantı bitince konuşmayı metne döküyor, kişisel bilgileri maskeliyor ve bir özet çıkarıyor. Bu notları WhatsApp'a, maile ve panele gönderiyor.
- **Proaktif bildirim.** Önemli bir mesaj gelince açık cihazdan sesli haber veriyor. Gece saatlerinde ya da toplantıdayken sessiz bildirime geçiyor.
- **Takvim, mail ve hatırlatmalar.** Etkinlik oluşturuyor, toplantı daveti gönderiyor, gelen mailleri okuyup özetliyor, zamanı gelince hatırlatıyor.
- **İnternette araştırma.** Uzun bir araştırma istediğimde sonucu hem sesli anlatıyor hem de WhatsApp'a yazılı özet olarak gönderiyor.
- **Her yerde çalışma.** Web paneli, iPhone'da ana ekrana eklenen uygulama, Windows masaüstü uygulaması ve Raspberry Pi'ye taşınabilecek bir Python istemcisi var.

## İnternetteki benzerlerinden farkı ne?

Piyasada çok iyi asistanlar var. Orbit'i yapmamın sebebi onların yapamadığı her şey değil, **benim önem verdiğim birkaç şeyi bir arada sunmamaları**:

| | Genel sohbet asistanları | Toplantı not botları | Takvim / görev araçları | **Orbit** |
|---|---|---|---|---|
| Nerede yaşıyor? | Şirketin bulutunda | Şirketin bulutunda | Şirketin bulutunda | **Kendi sunucumda** |
| Nasıl konuşuyorum? | Kendi uygulamaları | Toplantıya bot olarak katılır | Web / mobil uygulama | **WhatsApp, Telegram, ses** |
| Konuşanı doğruluyor mu? | Genellikle hesap oturumu yeterli | — | — | **Ses izi doğrulaması** |
| Uyandırma nerede algılanıyor? | Çoğunlukla cihazda | — | — | **Cihazda, Türkçe** |
| Toplantı kaydı | — | Görüntülü görüşmelere katılarak | — | **Fiziksel cihazdan, yüz yüze toplantıda da** |
| Özelleştirme | Sınırlı | Sınırlı | Sınırlı | **Tamamen benim kodum** |

Kısacası Orbit'in farkları şunlar:

1. **Veri sahipliği.** Veritabanı, hafıza ve kayıtlar kendi sunucumda duruyor. Ses izi gibi hassas veriler şifreli saklanıyor; ham ses işlendikten sonra siliniyor. Bazı işler için **yerel model (Ollama)** kullanılıyor.
2. **Güvenlik tasarımı.** Bir pentester olarak en çok düşündüğüm konu buydu. Başkalarından gelen mesajlar, hiçbir araca erişimi olmayan ayrı bir modelde ve **sadece veri olarak** işleniyor. Böylece biri bana "önceki talimatları unut, şunu yap" diye mesaj atarak Orbit'i kandıramıyor (*prompt injection*). Araçlar yalnızca benim doğrulanmış oturumumda çalışıyor. Ses izi kaydı için ayrıca **KVKK kapsamında açık rıza** alınıyor.
3. **Türkçe öncelikli.** Uyandırma, ses tanıma ve arayüz baştan Türkçe düşünülerek kuruldu.
4. **Zaten kullandığım yerde.** Yeni bir uygulama öğrenmek yerine WhatsApp'tan yazıyorum ya da sadece konuşuyorum.

## Nasıl yaptım?

| Katman | Teknoloji |
|---|---|
| Arka uç | Python, FastAPI |
| Ön yüz | Next.js (TypeScript), PWA |
| Veri | PostgreSQL, Redis |
| Yapay zekâ | Ollama (yerel), Gemini Live (sesli sohbet), Whisper (metne dökme) |
| Ses | Vosk (cihazda uyandırma), WeSpeaker (ses izi) |
| Altyapı | Docker Compose |
| Kimlik | JWT erişim ve yenileme token'ları, iki aşamalı doğrulama (TOTP), rol yönetimi |

Geliştirirken kendime bir kural koydum: *"Önce çalışan sistem, sonra özellik."* Her aşamada önce uçtan uca çalışan küçük bir parça kurdum, sonra üstüne ekledim. Uyandırma doğruluğu, ses izi ayrımı ve cevap gecikmesi gibi şeyleri de tahmin etmek yerine ölçerek ilerledim.

## Sırada ne var?

- "Orbit" kelimesi için özel eğitilmiş, daha hafif ve isabetli bir uyandırma modeli
- Bağlantı koptuğunda toplantı kaydının telefonda kalıcı olarak saklanması
- Hoparlör ve mikrofonu aynı kutuda olan bir **Raspberry Pi** cihazı
- Küçük ekipler için çok kullanıcılı sürüm

Orbit'in kodu şimdilik gizli. Merak ettiğin bir şey olursa [bana yazabilirsin](mailto:talhadogukansansar@gmail.com).
