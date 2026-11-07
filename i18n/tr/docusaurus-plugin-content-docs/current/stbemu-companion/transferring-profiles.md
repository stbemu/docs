---
title: "Profil ve ayar aktarımı"
sidebar_label: "Profil aktarımı"
---

# Profil ve ayar aktarımı {/* #transferring-profiles-and-settings */}

Seçtiğiniz içeriği iki farklı eşleştirilmiş StbEmu kurulumu arasında doğrudan kopyalamak için aktarımı kullanın. İkisinin de bağlı olması ve seçilen kaynak ve hedef işlemlerini desteklemesi gerekir. Aynı kurulumdaki kopyalama için [Copy profile > This device](profiles.md#copy-a-profile) seçeneğini kullanın.

![Uyumlu bir hedef bekleyen aktarım ekranı](/img/companion/transfer.png)

## Seçme ve inceleme {/* #select-and-review */}

1. Kaynak cihazı açıp **Transfer to another device** seçeneğini seçin.
2. **Destination device** alanından hedefi seçin. Uygun cihaz yoksa **Devices** bölümüne dönün, başka bir eşleştirilmiş cihazı bağlayıp tekrar deneyin.
3. **Application settings and remote mappings**, profiller veya her ikisini seçin. Profiller için **Do not copy profiles**, **All profiles** veya **Choose individual profiles** seçeneğini belirleyin. En az bir kategori seçilmelidir.
4. **Review transfer** seçeneğini seçin. Yeni profilleri, ayar değişikliklerini, kumanda eşlemelerinin etkilerini, etkin profil değişikliklerini, hariç tutulanları ve uyumsuzlukları inceleyin.
5. **I confirm these changes** seçeneğini işaretleyip **Confirm transfer** seçeneğini seçin.

Tek tek seçim, kaynağın eksiksiz ve güncel profil listesini gerektirir. Seçili bir profil kaybolursa **Refresh** ile listeyi kontrol edin, ardından hâlâ bulunmayan profillerin işaretini açıkça kaldırın. Yenileme, seçili profilleri sessizce kaldırmaz veya değiştirmez.

## Neler değişir {/* #what-changes */}

Aktarılan profiller, hedefte yeni kimliklere sahip yeni kopyalardır. Hedefin mevcut profilleri korunur. MAC adresleri, seri numaraları, cihaz kimlikleri ve diğer profil değerleri korunur; dolayısıyla kopyalama yeni abonelik veya sağlayıcı yetkisi oluşturmaz. Bu iş akışında **Merge**/**Replace all** seçimi yoktur; bu modlar [yedekten geri yüklemeye](backups.md#restore-a-backup) aittir.

Yalnızca profil aktarımı, hedefin uygulama ayarlarını, kumanda eşlemelerini ve etkin seçimini korur. Yalnızca ayar aktarımı, hedef profillerini ve etkin seçimini korur. İkisi birlikte kopyalanırken kaynak etkin profil, yalnızca aktarıma dahilse yeni kopyası üzerinden etkin olur; aksi halde hedefin etkin seçimi korunur.

Uygulama ayarları, taşınabilir StbEmu tercihlerini ve kumanda tuş eşlemelerini içerir; Companion'ın dilini/temasını, eşleştirme izinlerini, hizmet kimliğini veya işlem geçmişini içermez. Desteklenmeyen değerler sessizce atılmak yerine bildirilir. Onaylamadan önce parola ile ilgili ve üzerine yazılacak diğer ayarları inceleyin. Kaydedilen bazı ayarlar StbEmu yaşam döngüsü değişikliği veya yeniden başlatma gerektirir; [kaydedilen ayarları uygulama](backups.md#results-and-applying-saved-settings) bölümüne bakın.

Companion kaynak anlık görüntüsünün doğrulandığını bildirdikten sonra, kaynak bağlantısı kesilse bile tam olarak o deneme sürdürülebilir. Aktarım yedek kitaplığında kalıcı bir kayıt oluşturmaz. Belirsiz sonuçlar veya iptal için [işlem sonuçlarını](profiles.md#operation-results) kullanın.
