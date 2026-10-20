# Yeni yazı nasıl eklenir?

Her yazı, `yazilar/` klasöründe bir `.md` (Markdown) dosyasıdır. Liste kendiliğinden güncellenir, başka hiçbir dosyaya dokunman gerekmez.

## 1. Dosyayı hazırla

1. `yazilar/_sablon.md` dosyasını kopyala.
2. Kopyanın adını değiştir, örneğin `htb-lame.md` ya da `ilk-blog-yazim.md`.
   - Dosya adında **Türkçe karakter ve boşluk olmasın**, kelimeler arasına tire koy.
   - Dosyanın adı, yazının adresi olur: `yazi.html?y=htb-lame`
3. En üstteki `---` arasındaki bilgileri doldur:

| Alan | Ne yazılır | Örnek |
|---|---|---|
| `baslik` | Yazının başlığı | `HackTheBox: Lame Çözümü` |
| `tarih` | YYYY-AA-GG biçiminde | `2026-10-20` |
| `tur` | `ctf` ya da `blog` | `ctf` |
| `ozet` | Listede görünen tek cümle | `SMB açığıyla root.` |
| `etiketler` | Köşeli parantez içinde, virgülle | `[linux, smb]` |
| `platform` | Sadece CTF için | `HackTheBox` |
| `kategori` | Sadece CTF için | `Pwn`, `Web`, `Crypto`… |
| `zorluk` | Sadece CTF için: `Kolay`, `Orta`, `Zor` | `Kolay` |
| `taslak` | `true` yazarsan sitede görünmez | `true` |

4. `---` satırının altına yazını Markdown ile yaz:
   - `## Başlık` ile bölüm başlığı. Sağdaki içindekiler listesi bu başlıklardan oluşur.
   - Kod bloğu için üç ters tırnak ve dil adı kullan. Kopyala butonu kendiliğinden gelir:
     ````
     ```python
     print("merhaba")
     ```
     ````
   - Flag'ini `` `flag{...}` `` ya da `` `HTB{...}` `` biçiminde yazarsan parlayan yeşil kutu olarak görünür.
   - Resimleri `yazilar/resimler/` klasörüne koy ve şöyle ekle: `![açıklama](resimler/dosya.png)`

## 2. Siteye yükle

### GitHub'dan (en kolayı, program gerekmez)
1. GitHub'da sitenin deposunu aç → `yazilar` klasörüne gir.
2. **Add file → Upload files** ile `.md` dosyanı (varsa resimleri de) sürükle bırak.
3. **Commit changes** butonuna bas.
4. 1–2 dakika içinde yazı sitede görünür. Yükleme durumunu deponun **Actions** sekmesinden takip edebilirsin.

GitHub'da yazıyı doğrudan da yazabilirsin: `yazilar` klasöründe **Add file → Create new file** de, dosyaya ad ver, içeriği yapıştır, **Commit changes** de.

### Bilgisayarından (git kullanıyorsan)
```bash
git add yazilar/
git commit -m "Yeni yazı: htb-lame"
git push
```

## Yayınlamadan önce bilgisayarında görmek istersen
Sitenin bulunduğu klasörde şu komutu çalıştır, sonra tarayıcıda `http://localhost:5173/yazilar.html` adresini aç:
```bash
node .claude/serve.js
```
Yeni yazı ekledikçe sayfayı yenilemen yeterli.

> `yazilar.html` dosyasını çift tıklayarak açarsan yazılar görünmez. Tarayıcılar güvenlik nedeniyle bu şekilde açılan sayfaların başka dosyaları okumasına izin vermiyor. Yazıları görmek için siteyi yukarıdaki komutla ya da GitHub Pages üzerinden açman gerekiyor.
