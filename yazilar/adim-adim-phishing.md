---
baslik: "Phishing Adım Adım Nasıl İlerler?"
tarih: 2026-07-17
tur: blog
ozet: Phishing nedir, kurumsal ve kişisel saldırıların farkı, bir saldırının adımları, phishing testleri nasıl yapılır ve yapay zekâ bu işi nasıl değiştiriyor?
etiketler: [phishing, sosyal-mühendislik, farkındalık, yapay-zeka]
---

Bir çalışan sabah mailini açar. "Fatura ödemesi gecikti, lütfen 24 saat içinde onaylayın" yazan bir e-posta görür. Gönderen adresi tanıdık görünür, logo doğrudur, dil akıcıdır. Tek bir tıklama sonrasında kurumun ağına bir saldırgan sızmış olabilir. İşte phishing tam olarak budur — teknik bir açık değil, insan güveninin istismar edilmesi.

Bu yazıda phishing nedir, kurumsal ve kişisel saldırıların farkı, saldırı nasıl yapılır, örnekler ve son olarak yapay zekâ bu işi nasıl değiştirir, bunları konuşuyoruz.

## 1. Phishing Nedir?

Phishing (oltalama), bir saldırganın kendisini güvenilir bir kaynak gibi göstererek kurbanı; şifre, kredi kartı bilgisi, kurumsal erişim bilgisi gibi hassas verileri paylaşmaya ya da zararlı bir bağlantıya/eklentiye tıklamaya ikna etmesidir. Adı "fishing" (balık avlama) kelimesinden gelir çünkü mantık aynıdır: geniş bir alana yem atılır, ısıran olursa avlanır.

Phishing'i başka siber saldırılardan ayıran en önemli şey, açıkların yazılımda değil, insanların hareketlerinde olmasıdır. En güçlü güvenlik duvarı bile, bir kişi linke tıklarsa işe yaramaz. Bu nedenle phishing, güvenlik alanında hâlâ en sık kullanılan ilk adım olarak bilinir. Birçok yeni sektör raporu, sorunların çoğunda sosyal mühendislik ve insan hatasının temel sebep olduğunu gösteriyor.

## 2. Kuruma Yönelik Saldırılar

Kurumsal hedefli phishing, tek bir çalışanı değil, o çalışan üzerinden tüm organizasyonu hedef alır. Genellikle şu şekillerde karşımıza çıkar:

- **CEO Fraud / BEC (Business Email Compromise):** Saldırgan, üst düzey bir yöneticinin kimliğine bürünerek finans departmanından acil bir para transferi talep eder.
- **Tedarikçi/Fatura Dolandırıcılığı:** Gerçek bir tedarikçi ile yazışma trafiğine sızılıp, ödeme bilgileri saldırganın hesabıyla değiştirilir.
- **IT/Yardım Masası Taklidi:** "Şifreniz süresi doldu, hemen yenileyin" mesajlarıyla kurumsal kimlik bilgileri toplanır.
- **Tedarik Zinciri Üzerinden Sızma:** Doğrudan hedef yerine, o kuruma erişimi olan daha zayıf güvenlikli bir iş ortağı hedeflenir.

Kurumsal saldırılarda amaç genellikle tek seferlik bir tıklama değil, ağda kalıcı erişim (persistence) kurmak, yanal hareket (lateral movement) yapmak ve sonunda fidye yazılımı ya da veri sızıntısına kadar uzanan bir zincir oluşturmaktır.

## 3. Kişiye Yönelik Saldırılar

Bireysel hedefli saldırılar daha kişisel, duygusal tetikleyicilere dayanır:

- **Spear Phishing:** Hedef hakkında LinkedIn, sosyal medya ve açık kaynaklardan (OSINT) toplanan bilgilerle son derece kişiselleştirilmiş mesajlar hazırlanır.
- **Smishing (SMS Phishing):** Kargo takip, banka uyarısı gibi kısa mesajlarla sahte sitelere yönlendirme yapılır.
- **Vishing (Sesli Phishing):** Telefonla arayıp banka veya kurum çalışanı gibi davranarak bilgi toplanır; ses klonlama teknolojileriyle bu yöntem son dönemde ciddi şekilde arttı.

Kişiye yönelik saldırılarda saldırgan genellikle aciliyet, korku, merak ya da otorite hissi uyandırarak kurbanın düşünmeden hareket etmesini sağlamaya çalışır.

## 4. Saldırının Adımları

Tipik bir phishing saldırısı şu aşamalardan geçer:

- **Keşif (Reconnaissance):** Hedef kurum veya kişi hakkında açık kaynaklardan bilgi toplanır — çalışan isimleri, unvanlar, kullanılan yazılımlar, e-posta formatı.
- **Senaryo Kurgusu:** Toplanan bilgilere göre inandırıcı bir hikâye (pretext) oluşturulur: fatura, kargo, IT uyarısı, İK bildirimi gibi.
- **Altyapı Hazırlığı:** Sahte alan adı (typosquatting), klon web sayfası, e-posta gönderim altyapısı ve bazen SMS/arama hattı kurulur.
- **Gönderim:** Hazırlanan mesaj hedefe veya geniş bir kitleye gönderilir; genellikle hafta sonuna yakın veya mesai bitimine denk gelen saatler tercih edilir çünkü dikkat daha düşüktür.
- **Etkileşim ve Veri Toplama:** Kurban linke tıklar, bilgi girer veya eki açar; bu bilgiler saldırganın sunucusuna iletilir.
- **Kalıcılık ve Yayılma:** Ele geçirilen hesap üzerinden kurum içi başka kişilere ikinci dalga mesajlar gönderilebilir, oturum anahtarları (session token) çalınarak çok faktörlü kimlik doğrulama bile atlatılabilir.
- **Sömürü (Exploitation):** Son aşamada veri sızdırma, fidye yazılımı yayma veya doğrudan finansal işlem gerçekleştirme yer alır.

Önemli bir nokta: Modern phishing artık klasik "bozuk Türkçe, tuhaf link" izlerini taşımıyor. Otomasyon platformları ve hazır kimlik avı kitleri (Phishing-as-a-Service) sayesinde, teknik bilgisi sınırlı kişiler bile son derece profesyonel görünen kampanyalar kurabiliyor.

## 5. Hangi Amaçla Yapılıyor?

Phishing'in arkasındaki motivasyon neredeyse her zaman şu kategorilerden birine girer:

- **Finansal kazanç:** Doğrudan para transferi, kredi kartı bilgisi, kripto varlık hırsızlığı.
- **Kimlik bilgisi hırsızlığı:** Kurumsal veya kişisel hesaplara erişim sağlayıp bunu satmak ya da kullanmak.
- **Casusluk ve istihbarat:** Devlet destekli gruplar tarafından yürütülen, stratejik bilgi toplamaya yönelik kampanyalar.
- **Fidye yazılımı için ilk erişim:** Phishing, genellikle daha büyük bir saldırı zincirinin sadece ilk kapısıdır.
- **İtibar zedeleme / sabotaj:** Rakip kurumları veya kişileri hedef alan, doğrudan finansal olmayan saldırılar.

## 6. Phishing Testleri Nasıl Yapılır?

Bir phishing simülasyonunun değeri, gerçek saldırıyı ne kadar iyi taklit ettiğinde değil, sonucunda kurumun ne kadar öğrendiğinde ortaya çıkar. Üç aşamalı bir yaklaşım işe yarıyor:

**Planlama ve Kapsam Belirleme:** Testin amacı net şekilde tanımlanır — farkındalık ölçümü mü, teknik kontrol testi mi, yoksa belirli bir departmanın (finans, İK, IT) risk seviyesini ölçmek mi? Hedef kitle, senaryo türü ve test süresi bu aşamada belirlenir; her zaman kurumun yazılı onayı ve yasal çerçevesi dahilinde ilerlenir.

**Senaryo Tasarımı:** Gerçekçi ama kuruma gerçekten zarar verecek şekilde değil, öğretici şekilde zorlayan senaryolar kurgulanır. Şirket içi iletişim tonuna, kullanılan araçlara uygun kimlik avı sayfaları hazırlanır. Kritik nokta: simülasyon, çalışanı küçük düşürmek için değil, gerçek bir tehdide hazırlamak için tasarlanır.

**Gönderim ve Ölçüm:** Kampanya kontrollü şekilde başlatılır; tıklama oranı, veri girme oranı, raporlama oranı (şüpheli e-postayı IT'ye bildiren çalışan yüzdesi) gibi metrikler takip edilir. Bilgi girme oranı tıklama oranından daha değerlidir çünkü asıl hedef, çalışanın "şüphelendiğinde doğru adımı atması"dır.

**Geri Bildirim ve Eğitim:** Test sonrası, tıklayan çalışanlara suçlayıcı değil öğretici bir yaklaşımla anlık geri bildirim verilir. Sonuçlar departman bazında anonimleştirilerek yönetimle paylaşılır ve bir sonraki eğitim döngüsüne girdi olur.

En önemli etik sınır: kimlik bilgisi hasadı yapan (gerçekten şifre çalan) senaryolar asla gerçek üretim ortamında, kurumun bilgisi ve onayı dışında çalıştırılmaz; test verileri izole ortamda tutulur ve gerçek kimlik bilgileriyle asla eşleştirilmez.

## 7. Örnekler

### Büyük Çaptaki Dolandırıcılıklar

Phishing kaynaklı BEC (İş E-postası Ele Geçirme) saldırıları, dünya genelinde milyar dolarlık zararlara yol açıyor. Güncel sektör raporlarına göre, BEC saldırılarına bağlı toplam kayıplar milyarlarca doları buluyor ve ortalama bir olay başına yaklaşık 160 bin dolar civarında zarar oluşuyor. Ayrıca phishing kaynaklı küresel kayıpların yıllık toplamının 25 milyar doları aştığı tahmin ediliyor.

2026'nın başında dikkat çeken bir örnek, devlet destekli bir grubun ABD'deki düşünce kuruluşları ve akademik kurumları hedef alan kampanyasıydı. FBI, bu grubun sahte QR kodlarını yüksek düzeyde hedeflenmiş kimlik avı e-postalarına gömdüğünü ve bu QR kodların taranmasıyla kurbanları kimlik bilgisi toplayan sahte sayfalara yönlendirdiğini açıkladı. Bu "quishing" operasyonları, çoğunlukla oturum anahtarı çalma ve tekrar oynatma yöntemiyle çok faktörlü kimlik doğrulamayı hiçbir başarısız giriş uyarısı tetiklemeden atlatmayı başardı.

### Yeni Örnekler (2026)

Bu yılın en dikkat çekici gelişmelerinden biri, "device code phishing" (cihaz kodu kimlik avı) saldırılarındaki patlama oldu. Güvenlik araştırmacıları, 2026'nın ilk dört ayında bu tür saldırılarda 2025'in ikinci yarısına kıyasla yaklaşık 14 kat artış gözlemledi. Bu artışın büyük kısmı, kimlik hırsızlığı altyapısını, hazır kimlik avı kitlerini ve yapay zekâ destekli iş akışlarını abonelik modeliyle sunan "phishing-as-a-service" platformlarına bağlandı.

Bir diğer çarpıcı bulgu ise yıl sonu tatil döneminde yaşanan yapay zekâ destekli phishing patlaması: Kasım ayında raporlanan phishing e-postalarının yalnızca yüzde 4'ünde yapay zekâ kullanıldığına dair belirti varken, bu oran Aralık ayında yüzde 56'ya sıçradı.

## 8. Phishing ve Yapay Zekânın Birleşimi

Yapay zekâ, phishing'i hem saldırgan hem savunmacı tarafında kökten değiştiriyor.

**Saldırgan tarafında ölçek ve kalite artıyor.** Geçmişte phishing'i ele veren en büyük ipucu bozuk dil bilgisi ve tuhaf cümle kurulumuydu. Artık büyük dil modelleri sayesinde bu izler büyük ölçüde ortadan kalktı. 2026 itibarıyla yazım hataları, garip dil kullanımı, tanıdık olmayan gönderenler ve tuhaf biçimlendirme, bu saldırılar için güvenilir uyarı işaretleri olmaktan çıktı.

**Kişiselleştirme otomatikleşti.** Saldırganlar artık binlerce hedef için tek tek senaryo yazmak yerine, yapay zekâya OSINT verisi vererek her kurbana özel, birbirinden farklı mesajlar ürettirebiliyor. Yüzlerce olay incelendiğinde, hiçbir iki kimlik avı tuzağının birebir aynı olmadığı görüldü.

**Ses ve görüntü klonlama yeni bir katman ekledi.** Artık sadece yazılı mesaj değil, telefon görüşmeleri de taklit edilebiliyor. Sadece birkaç saniyelik ses kaydından gerçekçi bir ses klonu üretmek mümkün hale geldi; bu da vishing saldırılarındaki dramatik artışın arkasındaki temel neden.

**Gelecek eğilim: uçtan uca otonom saldırılar.** Sektör raporları, hedefi araştıran, kişiselleştirilmiş mesajlar hazırlayan, yanıtlara gerçek zamanlı uyum sağlayan ve hatta ses klonlarıyla takip aramaları yapan otonom yapay zekâ ajanlarından söz ediyor. Bu yetenek henüz olgunlaşma aşamasında olsa da, gerekli bileşenlerin büyük kısmı zaten ticari olarak erişilebilir durumda.

**Savunma tarafında da fırsat var.** Aynı teknoloji, şüpheli e-postaları daha hızlı tespit etmek, çalışan davranışına göre kişiselleştirilmiş eğitim vermek ve simülasyon-gerçek tehdit verisini birleştirerek risk skorlaması yapmak için kullanılabiliyor. Yani yapay zekâ tek başına ne "kötü" ne "iyi" — kimin elinde, hangi hızla ve hangi amaçla kullanıldığı belirleyici.

## 9. Kullanıcı Farkındalığı

Phishing, teknik bir güvenlik açığından çok, insan davranışını hedef alan bir sosyal mühendislik sanatıdır. Bu yüzden en güçlü savunma hattı, güncel yazılımlar kadar; şüpheci, sorgulayan ve bildirimde bulunmaktan çekinmeyen bir kurum kültürüdür. Kullanıcı farkındalığını kalıcı hale getirmek, tek seferlik bir eğitimle değil, sürekli tekrarlanan, ölçülebilir bir alışkanlık haline getirilmiş güvenlik refleksiyle mümkündür.

## Sonuç

Phishing artık tek bir e-posta biçiminden çok daha karmaşık, çok kanallı ve giderek daha az iz bırakan bir saldırı sınıfına dönüştü. Klasik "dikkatli ol, linke tıklama" tavsiyesi hâlâ geçerli ama artık yeterli değil. Kurumların ihtiyacı olan şey; düzenli, gerçekçi ve öğretici simülasyonlar, hızlı raporlama kültürü ve teknik kontrollerle insan farkındalığının birlikte çalıştığı katmanlı bir savunma.

Yapay zekânın devreye girmesiyle saldırı tarafı hız kazandı, ama aynı teknoloji doğru kullanıldığında savunmayı da güçlendiriyor. Asıl fark yaratan, hangi tarafın bu araçları daha hızlı ve daha bilinçli şekilde entegre ettiği olacak.
