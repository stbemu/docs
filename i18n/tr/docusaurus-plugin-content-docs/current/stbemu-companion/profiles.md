---
title: "Profilleri yönetme"
sidebar_label: "Profiller"
---

# Profilleri yönetme {/* #managing-profiles */}

Bağlı bir cihazı açıp **Profiles** seçeneğini seçin. Listede profil adları, tanımlayıcılar (UUID'ler) ve mevcut portal adresleri gösterilir. Ayarlarını incelemek için bir profil seçin. Ek sayfalar için **Load more**, güncel veriler için **Refresh** seçeneğini kullanın. İşlemler, cihazın desteklediği izinlere bağlıdır.

## Oluşturma, düzenleme ve silme {/* #create-edit-and-delete */}

- Listeden **Create profile** seçeneğini seçin. Desteklenen oluşturma alanları arasında **Name** ve **Portal URL** bulunur. Dokunulmayan alanlar StbEmu'nun varsayılan değerlerini kullanır.
- Bir profili açıp desteklenen düzenlenebilir alanları değiştirmek için **Edit profile** seçeneğini seçin. Yalnızca düzenlenen alanlar değişir; cihazın sakladığı ek ayarlar korunur.
- Silmeyi hazırlamak için **Delete profile** seçeneğini seçin. Onaylamadan önce etkin profil değişikliğini veya yerine kullanılacak profili inceleyin.

**Review changes** seçeneğini seçip önizlemeyi ve uyarıları inceleyin, ardından **Confirm changes** veya **Confirm deletion** seçeneğini seçin. İlk işlem profili hemen kaydetmez veya silmez. Uyumsuz değişiklikler onaylanamaz. Düzenleme sırasında profil veya kullanılabilir alanlar değişirse yenileyip tekrar inceleyin.

StbEmu profil alanlarının anlamları için [STB profillerine](../settings/profiles.md) bakın.

## Profil kopyalama {/* #copy-a-profile */}

Bir profili açıp **Copy profile** seçeneğini seçin. Aynı cihazda kopyalama için **This device** seçeneğini seçin, ardından değişiklikleri inceleyip onaylayın. Kopyanın yeni bir kimliği olur; yalnızca adına göre tanımayın. Başarıdan sonra kullanılabiliyorsa **Edit copied profile**, asıl profil yerine döndürülen kopyayı açar.

Başka bir uygun eşleştirilmiş cihaz seçildiğinde, o profil seçili olarak [aktarım rehberindeki iş akışı](transferring-profiles.md) açılır.

## İşlem sonuçları {/* #operation-results */}

Bağlantı kesilir veya sonuç belirsiz olursa başka bir değişiklik başlatmadan önce cihazın **Recent operation results** bölümünü açıp **Check result** seçeneğini kullanın. Sonuç kontrolü yetkili bağlantı gerektirir ve özgün işlemi sorgular; değişikliği tekrar göndermez. Bu durum [aktarımlar](transferring-profiles.md) ve [yedekten geri yükleme](backups.md) için de geçerlidir.

Süresi dolan önizleme, açıkça yeniden inceleme gerektirir. İptal işlemi kaydetmeyle aynı anda gerçekleşebilir; bu nedenle **Cancel operation** seçeneğinin değişiklikleri geri aldığını varsaymak yerine nihai sonucu okuyun. **Changes saved on the device**, verilerin kaydedildiğini doğrular; çalışma zamanı yenilemesi hâlâ bekliyor olabilir. Sonuç kontrolü çalışma zamanı yenilemesini tekrar denemez ve silinmiş bir kopya profil, geçmişi kontrol edilerek asla yeniden oluşturulmaz.
