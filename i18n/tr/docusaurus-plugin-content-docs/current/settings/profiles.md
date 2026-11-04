---
id: profiles
title: Profiller
sidebar_label: Profiller
---

# STB profilleri {/* #stb-profiles */}

**STB profili**, uygulamada bir set üstü kutuyu emüle etmek için kullanılan seçenekler kümesidir. Uygulama ilk açılışta bir profil oluşturur.
Aynı cihazda farklı portalları yüklemek için bu profili düzenleyebilir veya yeni profiller ekleyebilirsiniz.
**Ayarlar > Profiller** bölümünü açıp **Profil ekle** seçeneğini seçin veya düzenlemek için mevcut bir profil seçin.
Genel bakış, seçenekleri **Bağlantı**, **Oynatma ve cihaz** ve **Profili yönet** altında gruplandırır.
Kullanılabilir eylemler uygulama sürümünüze ve profil kısıtlamalarına bağlıdır. Etkin profil silinemez;
silmeden önce başka bir profile geçin. Silme işlemi onay gerektirir.

Metin ve seçim değişiklikleri onay gerektirir; anahtarlar anında kaydedilir. Doğrulama hataları, çakışan düzenlemeler ve çalışma sırasında yenileme gerektiren
kayıtlı değişiklikler için [Değişiklikleri kaydetme](/settings#saving-changes) bölümüne bakın.

StbEmu herhangi bir medya veya IPTV oynatma listesi sağlamaz, barındırmaz ya da dizine eklemez.
Kullanıcıların emülatör aracılığıyla eriştikleri içerik için yasal hakka sahip olmaları gerekir.

- [Profil adı](#profile-name)
- [Portal ayarları](#portal-settings)
    - [Portal URL'si](#portal-url)
    - [Portal dili](#portal-language)
    - [HTTP vekil sunucusu ayarları](#http-proxy-settings)
        - [HTTP vekil sunucusu kullan](#use-http-proxy)
        - [Vekil sunucu ana bilgisayar adı](#proxy-host-name)
        - [Vekil sunucu bağlantı noktası](#proxy-port)
    - [Portal dahili](#portal-is-internal)
    - [Portal URL'si (Portal dahili)](#internal-portal-url)
- [STB yapılandırması](#stb-configuration)
    - [STB modeli](#stb-model)
    - [Donanım yazılımı](#firmware)
    - [Donanım yazılımı ayarları](#firmware-settings)
    - [Kullanıcı aracısı](#user-agent)
    - [Ekran çözünürlüğü](#screen-resolution)
    - [MAC adresi](#mac-address)
    - [Seri numarası](#serial-number)
    - [Cihaz kimliği](#device-id)
        - [MAC tabanlı cihaz kimliği kullan](#use-mac-based-device-id)
        - [Cihaz kimliğini gönder](#send-device-id)
        - [Cihaz kimliği rastgelelik tohumu](#device-id-random-seed)
        - [Cihaz kimliği](#device-id-value)
        - [Özel cihaz kimliği 2 ve imza](#custom-device-id-2-and-signature)
        - [Cihaz kimliği 2](#device-id-2)
        - [İmza](#signature)
        - [Cihaz kimliğini varsayılana sıfırla…](#reset-device-id-to-default-value)
    - [Donanım ayarları](#hardware-settings)
        - [Üretici](#vendor)
        - [Donanım sürümü](#hardware-version)
- [Medya oynatıcı ayarları](#media-player-settings)
    - [Medya oynatıcı](#media-player)
    - [UDPXY ayarları](#udpxy-settings)
        - [UDPXY desteğini etkinleştir](#enable-udxpy-support)
        - [UDPXY sunucu URL'si](#udpxy-server-url)
        - [Akış protokolünü değiştir](#overwrite-stream-protocol)
- [Gelişmiş ayarlar](#advanced-settings)

### Profil adı {/* #profile-name */}
Profil adı. Boş olmayan herhangi bir metin olabilir.

### Portal ayarları {/* #portal-settings */}
Portala özgü seçenekler.
##### Portal URL'si {/* #portal-url */}
Mutlak bir **http://** veya **https://** URL'si girin. Yerel ağ ana makineleri, localhost, IPv6 adresleri ve uluslararası alan adları desteklenir. Ağ URL'leri boşluk karakteri içeremez.
Dahili portal için mutlak bir dosya sistemi yolu veya desteklenen mutlak bir **file://** URL'si de kabul edilir. Yeniden tasarlanan düzenleyici FTP URL'lerini kabul etmez.

##### Portal dili {/* #portal-language */}
İki harfli bir [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) dil koduyla belirtilen varsayılan portal dili.

#### HTTP vekil sunucusu ayarları {/* #http-proxy-settings */}
HTTP proxy ayarları.

##### HTTP vekil sunucusu kullan {/* #use-http-proxy */}
HTTP proxy kullanmak istiyorsanız etkinleştirin.

##### Vekil sunucu ana bilgisayar adı {/* #proxy-host-name */}
Proxy ana makinesi portundan ayrıdır; varsayılan ana makine 127.0.0.1'dir.
##### Vekil sunucu bağlantı noktası {/* #proxy-port */}
Varsayılan: 3128. Ana makine ve port düzenleyicileri yalnızca **HTTP vekil sunucusu kullan** etkinken kullanılabilir.

##### Portal dahili {/* #portal-is-internal */}
MAG cihazları için dahili bir portal kullanmak üzere bu seçeneği etkinleştirin. Yerel bir portal URL'si seçeneği otomatik olarak etkinleştirir ve anahtarı kullanılamaz hale getirir. Ağ URL'sine geçmek otomatik dahili portal ayarını kaldırır.

##### Portal URL'si (Portal dahili) {/* #internal-portal-url */}
Yerel yol veya dosya URL'si için **Portal URL'si** alanını kullanın; ayrı bir dahili URL düzenleyicisi yoktur.

Portal yüklemek için **Ayarlar > Profiller > profiliniz > Portal ayarları** bölümünü açın, yükleme eylemini kullanıp portal arşivini seçin. Dosyaların çıkarılmasını bekleyin,
ardından önerilen yerel URL'yi onaylayın. Dosyaların yüklenmesi ve URL'nin kabul edilmesi ayrı adımlardır.
Yüklenmiş bir dahili portalı kaldırmak için **Portal ayarları** içindeki kaldırma eylemini kullanın.

### STB yapılandırması {/* #stb-configuration */}
Temel emülasyon ayarları.

#### STB modeli {/* #stb-model */}
Emüle edilecek STB modeli.

#### Donanım yazılımı {/* #firmware */}
Emüle edilecek **Donanım yazılımı**; gerçek bir cihaz yazılımı yüklenmez. Bazı portallar belirli bir cihaz yazılımı gerektirir.
Böyle bir durumda kullanılabiliyorsa listeden seçin.
Desteklenen STB modellerinin çoğu yalnızca genellikle en güncel sürümü temsil eden **Generic** cihaz yazılımını sunar.

Kullanılabilir cihaz yazılımı seçenekleri:
* Generic: genellikle mevcut en güncel cihaz yazılımı.
* Custom (yalnızca MAG 250): özelleştirilebilir cihaz yazılımı. Belirli cihaz yazılımı ayarlarını değiştirmeniz gerekiyorsa bunu kullanın.

Çoğu kullanıcı **Generic** cihaz yazılımını (varsayılan olarak seçili) kullanmalıdır.

#### Donanım yazılımı ayarları {/* #firmware-settings */}
Bu seçenek yalnızca **Custom** cihaz yazılımıyla kullanılabilir (şu anda yalnızca MAG 250 için desteklenir).
Oynatıcı motoru, JavaScript API ve STB API sürümleri ile görüntü sürümünü, açıklamasını ve tarihini yapılandırın.
Özel Kullanıcı aracısı metnini düzenlemeden önce özel Kullanıcı aracısı kullanımını etkinleştirin.

#### Kullanıcı aracısı {/* #user-agent */}
Uygulamanın web tarayıcısı için Kullanıcı aracısı metni.

#### Ekran çözünürlüğü {/* #screen-resolution */}
Emüle edilecek ekran çözünürlüğü; ekranın gerçek çözünürlüğünü değiştirmez.
Portalınızın desteklediği bir çözünürlük seçin; bu genellikle **1280x720**'dir.

#### MAC adresi {/* #mac-address */}
Emüle edilen cihazın MAC adresi. Sahip olduğunuz gerçek bir MAG 250 cihazının MAC adresini
veya iki nokta üst üste ile ayrılan ikili gruplar halinde 12 rastgele onaltılık basamağı (0–9, A–F) kullanabilirsiniz. [^wrong_mac]

Çoğu portal MAC adresinin 00:1A:79 ile başlamasını gerektirir.

[^wrong_mac]: Yalnızca Wi-Fi kullanan bazı cihazlarda oluşturulan MAC adresi **00:1A:79:00:00:00** olabilir.
    Bu, Android kısıtlamaları nedeniyle uygulamanın adresi doğru algılayamadığı anlamına gelir.
    İkili gruplar arasındaki iki nokta üst üste işaretlerini koruyarak **00:00:00** bölümünü rastgele onaltılık basamaklarla değiştirin.

#### Seri numarası {/* #serial-number */}
Emüle edilen cihazın seri numarası. Çoğu portal bunu kontrol etmediği için genellikle herhangi bir metin işe yarar.

#### Cihaz kimliği {/* #device-id */}
Cihaz kimliği ayarları.

##### MAC tabanlı cihaz kimliği kullan {/* #use-mac-based-device-id */}
Cihaz kimliğini cihazın MAC adresinden oluşturun. Bu seçeneği etkinleştirdikten veya
devre dışı bıraktıktan sonra kimliği yeniden oluşturmak için **Cihaz kimliğini varsayılana sıfırla…** düğmesine basın.

##### Cihaz kimliğini gönder {/* #send-device-id */}
Portal istediğinde cihaz kimliğini gönderin. Devre dışı bırakılırsa uygulama boş bir metin gönderir.

##### Cihaz kimliği rastgelelik tohumu {/* #device-id-random-seed */}
Cihaz kimliğini oluşturmak için kullanılan tohum değeri. Aynı portal URL'sini ve MAC adresini kullanan tüm cihazlarda
aynı tohum değerini kullanın. Değişen tohum değerinin onaylanması kimlikleri otomatik olarak yeniden oluşturur.
Tohum değerini korumak istiyorsanız **Cihaz kimliğini varsayılana sıfırla…** düğmesine basmayın: bu işlem bu değeri temizler.

##### Cihaz kimliği {/* #device-id-value */}
Cihaz kimliği. Oluşturulan değeri kullanın veya kendi değerinizi girin.

##### Özel cihaz kimliği 2 ve imza {/* #custom-device-id-2-and-signature */}
Cihaz kimliği 2 ve imzayı düzenlemek için bu seçeneği etkinleştirin.

##### Cihaz kimliği 2 {/* #device-id-2 */}
##### İmza {/* #signature */}
##### Cihaz kimliğini varsayılana sıfırla… {/* #reset-device-id-to-default-value */}
Onaydan sonra tohum değerini temizleyin ve mevcut profil değerlerinden **Cihaz kimliği**, **Cihaz kimliği 2** ve imzayı yeniden oluşturun. Diğer profil ayarları korunur.

**Cihaz kimliği** değerinin elle düzenlenmesi yalnızca **Cihaz kimliğini gönder** etkinken ve MAC tabanlı kimlikler devre dışıyken kullanılabilir.
**Cihaz kimliği 2** ve **İmza** alanlarını düzenlemek için **Özel cihaz kimliği 2 ve imza** seçeneğinin de etkin olması gerekir.
Düzenleme kullanılamadığında otomatik türetilen değerler okunabilir kalır.

#### Donanım ayarları {/* #hardware-settings */}
##### Üretici {/* #vendor */}
##### Donanım sürümü {/* #hardware-version */}

Cihaz seçenekleri ayrıca Ministra uyumluluğunu ve tarayıcı yönlendirmesini içerir. Bunları yalnızca portalınız gerektiriyorsa değiştirin.

### Medya oynatıcı ayarları {/* #media-player-settings */}

Bu profilin medya oynatıcı ayarları.
#### Medya oynatıcı {/* #media-player */}
Bu profil için varsayılan medya oynatıcıyı seçin.

Listede otomatik seçim, Exo, Android'in dahili oynatıcısı ve harici oynatıcı
ile derlemenizde kullanılabilen ek oynatıcılar bulunur. Uygulamada gösterilen seçenekler arasından seçim yapın.
Dahili oynatıcının kodek desteği Android'e bağlıdır; harici oynatıcılar akışları başka bir uygulamada açar.

#### UDPXY ayarları {/* #udpxy-settings */}
##### UDPXY desteğini etkinleştir {/* #enable-udxpy-support */}
UDPXY'yi yalnızca geçerli bir HTTP/HTTPS sunucu URL'si girdikten sonra etkinleştirin.
##### UDPXY sunucu URL'si {/* #udpxy-server-url */}
UDPXY kapalıyken URL'yi girebilirsiniz. Boş URL'ye yalnızca kapalıyken izin verilir; boş olmayan bir URL geçerli bir HTTP/HTTPS adresi olmalıdır.
##### Akış protokolünü değiştir {/* #overwrite-stream-protocol */}
UDPXY etkinken akış protokolünün yerine kullanılacak protokolü seçin.
### Gelişmiş ayarlar {/* #advanced-settings */}
Profile özgü uyumluluk seçenekleri CSS yamaları, emülatör algılama, arka plan rengi, yerel dosya ve AJAX düzeltmeleri
ile harici oynatıcılar için geri dönüş/tuş olaylarını içerir. Geri, Çıkış ve OK olay seçenekleri, kanal listesine dönüş olayı seçeneğine bağlıdır.
Bunları yalnızca portalınız veya harici oynatıcınız gerektiriyorsa değiştirin.
