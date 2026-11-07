---
title: "Yedekleme ve geri yükleme"
sidebar_label: "Yedekleme ve geri yükleme"
---

# Yedekleme ve geri yükleme {/* #backups-and-restore */}

Companion'ın **Backups** kitaplığı, tamamlanmış StbEmu JSON yedeklerini telefon veya tabletinizde özel olarak saklar. Kaydedilen dosyalar çevrimdışı da kullanılabilir. Bu kitaplık, Companion'ın kendi durumunu koruyan [Android sistem yedeklemesinden](system-backup.md) ayrıdır.

![Yedek kitaplığı ve cihaz yedeği oluşturma](/img/companion/backup-library.png)

## Dosya kaydetme ve yönetme {/* #save-and-manage-files */}

- **Create backup:** bağlı ve eşleştirilmiş bir cihazın **Create backup** işlemini açın, **Backup name** girip **Create backup** seçeneğini seçin. **Backup saved** durumunu bekleyin.
- **Import backup:** uygulama menüsünden **Backups** bölümünü açın, **Import backup** seçeneğini seçip bir StbEmu JSON dosyası belirleyin. Yerel içe aktarma, dışa aktarma veya paylaşım için bağlı bir StbEmu cihazı gerekmez.
- **Export JSON:** yedeğin kitaplık kaydında bu işlemi seçip harici bir hedef belirleyin.
- **Share JSON:** Android paylaşım sayfasını açmak için yedeğin kitaplık kaydında bu işlemi seçin. Sayfayı açmak, seçilen uygulamaya teslimi doğrulamaz.
- **Delete local backup:** bu yerel kopyanın silinmesini onaylayın. Kaynak StbEmu cihazı değişmez.

JSON sınırı **16 MiB (16,777,216 bayt)** değerindedir. İçe aktarılan dosyalar doğrulanır ve özgün baytları korunur. İçe aktarılan dosya **Source device unknown** olarak etiketlenir; bütünlük kontrolü dosyayı kimin oluşturduğunu belirlemez. Başarısız bir harici dışa aktarma, hedefte eksik dosya bırakabilir; mevcut yerel yedekler korunur.

:::note
Yedek dosyaları parolalar, portal verileri ve cihaz tanımlayıcıları içerebilir. Dışa aktarma ve paylaşım bu değerleri korur; hedefi veya alıcıyı buna göre seçin.
:::

## Yedekten geri yükleme {/* #restore-a-backup */}

1. Bir kitaplık kaydından veya cihaz işlemleri sayfasından **Restore backup** seçeneğini seçin.
2. **Destination device**, **Backup to restore** ve desteklenen bir **Restore mode** seçin.
3. **Review restore** seçeneğini seçin. Eklenen, üzerine yazılan ve kaldırılan profilleri; **Changed settings** bölümünü; kumanda eşlemelerini; hariç tutulan yerel meta verileri; uyumsuz veya kilitli alanları kontrol edin.
4. Onay kutusunu işaretleyip **Apply restore** seçeneğini seçin.

![Merge davranışını gösteren geri yükleme ekranı](/img/companion/restore.png)

**Merge**, UUID'si eşleşen profillerin üzerine yazar, yeni profiller ekler ve yalnızca hedefte bulunan profilleri korur. **Replace all**, yedekte bulunmayan hedef profillerini de kaldırır. Eşleştirme profil adına değil tanımlayıcılara göre yapılır. Her iki mod da taşınabilir uygulama ayarlarını ve kumanda eşlemelerini geri yükler. Yerel satır kimlikleri, uygulama sürümü ve güncelleme dizini gibi hedefe özgü yerel meta veriler hariç tutulur.

:::warning
Uygulamadan önce üzerine yazılacak ve kaldırılacak her öğeyi inceleyin. Replace all, profil kümesinin tamamını değiştirir; yalnızca seçilen profilleri ekleme yöntemi değildir. Seçmeli kopyalar için [profil aktarımlarını](transferring-profiles.md) kullanın.
:::

## Sonuçlar ve kaydedilen ayarları uygulama {/* #results-and-applying-saved-settings */}

Süresi dolan önizleme için **Start a new attempt** ve yeni bir inceleme gerekir. Sonuç belirsizse geri yüklemeyi tekrarlamadan önce [işlem sonuçlarını](profiles.md#operation-results) kontrol edin. Kurtarma, özgün yedek artık bulunmasa bile hedefi sorgulayabilir.

Kaydedilen ayarlar ve çalışma zamanı etkileri ayrıdır. Değiştirilmişse sanal kumanda ayarları StbEmu'nun bir sonraki normal duraklatma/devam ettirme döngüsünde etkili olur, önbellek boyutu StbEmu işleminin yeniden başlatılmasını gerektirir ve dil, uygulama etkinliğinin yeniden oluşturulmasına yol açabilir. UPnP uyumluluk bayrağı, yeniden başlatmadan sonra bile geçerli UPnP çalışma durumunu değiştirmez. **Check result**, bu çalışma zamanı güncellemelerini tekrar denemez.
