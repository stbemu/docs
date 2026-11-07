---
title: "Android sistem yedeklemesi"
sidebar_label: "Android sistem yedeklemesi"
---

# Android sistem yedeklemesi {/* #android-system-backup */}

**Settings > Backups > System backup** bölümünü açın. Başarılı bir Android geri yüklemesinden sonra Android sistem yedeklemesi, Companion tercihlerini, kayıtlı cihazları ve adlarını, doğrulanmış güveni ve hâlâ geçerli eşleştirme kimlik bilgilerini geri yükleyebilir. Bu işlem, eşleştirilmiş bir cihaza [StbEmu JSON yedeği](backups.md) geri yüklemekten ayrıdır.

## Yerel arşivleri dahil etme {/* #include-local-archives */}

**Include local archives** varsayılan olarak etkindir. Yerel kitaplıktaki uygun, tamamlanmış StbEmu yedeklerini gelecekteki sistem yedeklerine dahil eder. Kapatılması yerel dosyaları ve Companion ayarlarını/cihazlarını korur, ancak arşivleri gelecekteki yedeklerden çıkarır. Eski bulut içeriğini silmez.

Sayfa, seçilen verilerin tahmini boyutunu gösterir. Yeniden ölçmek için **Refresh estimate**, Android yedekleme yapılandırmasını kontrol etmek için **Open Android settings**, dosyaları kendiniz dışa aktarmak için **Open archive library / manual export** seçeneğini kullanın.

## Kullanılabilirlik ve sınırlar {/* #availability-and-limits */}

Companion'ın kendisi Android 8'i desteklese de sistem yedeklemesi **Android 9 veya üzerini** gerektirir. Şifreli bulut yedeklemesi için desteklenen bir hesap, güvenli ekran kilidi ve Android istemci tarafı şifrelemesi de gerekir. Zamanlamayı, aktarım uygunluğunu ve geri yüklemenin kullanılabilirliğini Android yönetir.

Nominal bulut kotası **25 MiB** değerindedir; gerçekte kullanılabilen kota daha düşük olabilir. Cihazdan cihaza aktarım için **256 MiB** sınırı bir uygulama sınırıdır; aktarım kapasitesi taahhüdü değildir. Seçimin tamamı çok büyükse yerel arşivleri hariç tutun veya elle dışa aktarın. Companion, seçimin yalnızca bir bölümünü sessizce yedeklemez.

Bir tahmin veya yerel hazırlık mesajı, Android'in buluta yedek kaydettiğinin doğrulaması değildir. Tahminin kullanılamaması, sıfır boyutlu bir yedek anlamına gelmez. Sayfa yedeklemenin kapalı veya desteklenmiyor olduğunu bildirirse verilerin korunduğunu varsaymak yerine elle arşiv dışa aktarmayı kullanın.

## Android Companion'ı geri yükledikten sonra {/* #after-android-restores-companion */}

Geri yüklenen cihazların bağlı olarak gösterilmeden önce doğrulanması gerekir. Hâlâ yetkili eşleştirme kimlik bilgileri yeni eşleştirme olmadan yeniden bağlanabilir, ancak geri yükleme StbEmu'daki iptali geri alamaz. Geri yüklenen kopyalar aynı izinleri paylaşır; bir iznin iptali bu kopyaları da etkiler.

Kitaplık gerçekten geri yüklenmiş, tamamlanmış arşiv dosyalarını listeler. Tek başına meta veriler eksik dosyaları yeniden oluşturmaz. Tamamlanmamış bir işlem otomatik olarak tekrar gönderilmez; yeniden bağlanıp varsa [işlem sonuçlarını](profiles.md#operation-results) kontrol edin.
