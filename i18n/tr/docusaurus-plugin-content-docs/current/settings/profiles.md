---
id: profiles
title: Profiller
sidebar_label: Profiller
---

# STB profilleri {/* #stb-profiles */}

**STB profili**, uygulamada bir set üstü kutuyu emüle etmek için kullanılan seçenekler kümesidir. Uygulama ilk açılışta bir profil oluşturur.
Aynı cihazda farklı portalları yüklemek için bu profili düzenleyebilir veya yeni profiller ekleyebilirsiniz.
**Settings > Profiles** bölümünü açıp **Add profile** seçeneğini seçin veya düzenlemek için mevcut bir profil seçin.
Genel bakış, seçenekleri **Connection**, **Playback & device** ve **Manage profile** altında gruplandırır.
Kullanılabilir eylemler uygulama sürümünüze ve profil kısıtlamalarına bağlıdır. Etkin profil silinemez;
silmeden önce başka bir profile geçin. Silme işlemi onay gerektirir.

Metin ve seçim değişiklikleri onay gerektirir; anahtarlar anında kaydedilir. Doğrulama hataları, çakışan düzenlemeler ve çalışma sırasında yenileme gerektiren
kayıtlı değişiklikler için [Değişiklikleri kaydetme](/settings#saving-changes) bölümüne bakın.

StbEmu herhangi bir medya veya IPTV oynatma listesi sağlamaz, barındırmaz ya da dizine eklemez.
Kullanıcıların emülatör aracılığıyla eriştikleri içerik için yasal hakka sahip olmaları gerekir.

- [Profile name](#profile-name)
- [Portal settings](#portal-settings)
    - [Portal URL](#portal-url)
    - [Portal language](#portal-language)
    - [HTTP Proxy settings](#http-proxy-settings)
        - [Use HTTP proxy](#use-http-proxy)
        - [Proxy host name](#proxy-host-name)
        - [Proxy port](#proxy-port)
    - [Portal is internal](#portal-is-internal)
    - [Internal portal URL](#internal-portal-url)
- [STB configuration](#stb-configuration)
    - [STB Model](#stb-model)
    - [Firmware](#firmware)
    - [Firmware settings](#firmware-settings)
    - [User Agent](#user-agent)
    - [Screen resolution](#screen-resolution)
    - [MAC address](#mac-address)
    - [Serial number](#serial-number)
    - [Device ID](#device-id)
        - [Use MAC-based device ID](#use-mac-based-device-id)
        - [Send Device ID](#send-device-id)
        - [Device ID random seed](#device-id-random-seed)
        - [Device ID](#device-id-value)
        - [Custom device ID 2 and signature](#custom-device-id-2-and-signature)
        - [Device ID 2](#device-id-2)
        - [Signature](#signature)
        - [Reset device ID to default value](#reset-device-id-to-default-value)
    - [Hardware settings](#hardware-settings)
        - [Vendor](#vendor)
        - [Hardware version](#hardware-version)
- [Media player settings](#media-player-settings)
    - [Media player](#media-player)
    - [UDPXY settings](#udpxy-settings)
        - [Enable UDPXY support](#enable-udxpy-support)
        - [UDPXY server URL](#udpxy-server-url)
        - [Overwrite stream protocol](#overwrite-stream-protocol)
- [Advanced settings](#advanced-settings)

### Profile name
Profil adı. Boş olmayan herhangi bir metin olabilir.

### Portal settings
Portala özgü seçenekler.
##### Portal URL
Mutlak bir **http://** veya **https://** URL'si girin. Yerel ağ ana makineleri, localhost, IPv6 adresleri ve uluslararası alan adları desteklenir. Ağ URL'leri boşluk karakteri içeremez.
Dahili portal için mutlak bir dosya sistemi yolu veya desteklenen mutlak bir **file://** URL'si de kabul edilir. Yeniden tasarlanan düzenleyici FTP URL'lerini kabul etmez.

##### Portal language
İki harfli bir [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) dil koduyla belirtilen varsayılan portal dili.

#### HTTP Proxy settings
HTTP proxy ayarları.

##### Use HTTP proxy
HTTP proxy kullanmak istiyorsanız etkinleştirin.

##### Proxy host name
Proxy ana makinesi portundan ayrıdır; varsayılan ana makine 127.0.0.1'dir.
##### Proxy port
Varsayılan: 3128. Ana makine ve port düzenleyicileri yalnızca **Use HTTP proxy** etkinken kullanılabilir.

##### Portal is internal
MAG cihazları için dahili bir portal kullanmak üzere bu seçeneği etkinleştirin. Yerel bir portal URL'si seçeneği otomatik olarak etkinleştirir ve anahtarı kullanılamaz hale getirir. Ağ URL'sine geçmek otomatik dahili portal ayarını kaldırır.

##### Internal portal URL
Yerel yol veya dosya URL'si için **Portal URL** alanını kullanın; ayrı bir dahili URL düzenleyicisi yoktur.

Portal yüklemek için **Settings > Profiles > profiliniz > Portal settings** bölümünü açın, yükleme eylemini kullanıp portal arşivini seçin. Dosyaların çıkarılmasını bekleyin,
ardından önerilen yerel URL'yi onaylayın. Dosyaların yüklenmesi ve URL'nin kabul edilmesi ayrı adımlardır.
Yüklenmiş bir dahili portalı kaldırmak için **Portal settings** içindeki kaldırma eylemini kullanın.

### STB configuration
Temel emülasyon ayarları.

#### STB Model
Emüle edilecek STB modeli.

#### Firmware
Emüle edilecek **firmware**; gerçek bir cihaz yazılımı yüklenmez. Bazı portallar belirli bir cihaz yazılımı gerektirir.
Böyle bir durumda kullanılabiliyorsa listeden seçin.
Desteklenen STB modellerinin çoğu yalnızca genellikle en güncel sürümü temsil eden **Generic** cihaz yazılımını sunar.

Kullanılabilir cihaz yazılımı seçenekleri:
* Generic: genellikle mevcut en güncel cihaz yazılımı.
* Custom (yalnızca MAG 250): özelleştirilebilir cihaz yazılımı. Belirli cihaz yazılımı ayarlarını değiştirmeniz gerekiyorsa bunu kullanın.

Çoğu kullanıcı **Generic** cihaz yazılımını (varsayılan olarak seçili) kullanmalıdır.

#### Firmware settings
Bu seçenek yalnızca **Custom** cihaz yazılımıyla kullanılabilir (şu anda yalnızca MAG 250 için desteklenir).
Oynatıcı motoru, JavaScript API ve STB API sürümleri ile görüntü sürümünü, açıklamasını ve tarihini yapılandırın.
Özel User Agent metnini düzenlemeden önce özel User Agent kullanımını etkinleştirin.

#### User Agent
Uygulamanın web tarayıcısı için User Agent metni.

#### Screen resolution
Emüle edilecek ekran çözünürlüğü; ekranın gerçek çözünürlüğünü değiştirmez.
Portalınızın desteklediği bir çözünürlük seçin; bu genellikle **1280x720**'dir.

#### MAC address
Emüle edilen cihazın MAC adresi. Sahip olduğunuz gerçek bir MAG 250 cihazının MAC adresini
veya iki nokta üst üste ile ayrılan ikili gruplar halinde 12 rastgele onaltılık basamağı (0–9, A–F) kullanabilirsiniz. [^wrong_mac]

Çoğu portal MAC adresinin 00:1A:79 ile başlamasını gerektirir.

[^wrong_mac]: Yalnızca Wi-Fi kullanan bazı cihazlarda oluşturulan MAC adresi **00:1A:79:00:00:00** olabilir.
    Bu, Android kısıtlamaları nedeniyle uygulamanın adresi doğru algılayamadığı anlamına gelir.
    İkili gruplar arasındaki iki nokta üst üste işaretlerini koruyarak **00:00:00** bölümünü rastgele onaltılık basamaklarla değiştirin.

#### Serial number
Emüle edilen cihazın seri numarası. Çoğu portal bunu kontrol etmediği için genellikle herhangi bir metin işe yarar.

#### Device ID
Cihaz kimliği ayarları.

##### Use MAC-based device ID
Cihaz kimliğini cihazın MAC adresinden oluşturun. Bu seçeneği etkinleştirdikten veya
devre dışı bıraktıktan sonra kimliği yeniden oluşturmak için **Reset device ID** düğmesine basın.

##### Send Device ID
Portal istediğinde cihaz kimliğini gönderin. Devre dışı bırakılırsa uygulama boş bir metin gönderir.

##### Device ID random seed
Cihaz kimliğini oluşturmak için kullanılan tohum değeri. Aynı portal URL'sini ve MAC adresini kullanan tüm cihazlarda
aynı tohum değerini kullanın. Değişen tohum değerinin onaylanması kimlikleri otomatik olarak yeniden oluşturur.
Tohum değerini korumak istiyorsanız Reset düğmesine basmayın: Reset bu değeri temizler.

##### Device ID value
Cihaz kimliği. Oluşturulan değeri kullanın veya kendi değerinizi girin.

##### Custom device ID 2 and signature
Device ID 2 ve imzayı düzenlemek için bu seçeneği etkinleştirin.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Onaydan sonra tohum değerini temizleyin ve mevcut profil değerlerinden **Device ID**, **Device ID 2** ve imzayı yeniden oluşturun. Diğer profil ayarları korunur.

**Device ID** değerinin elle düzenlenmesi yalnızca **Send Device ID** etkinken ve MAC tabanlı kimlikler devre dışıyken kullanılabilir.
**Device ID 2** ve **Signature** düzenlemek için ayrıca **Custom device ID 2 and signature** gerekir.
Düzenleme kullanılamadığında otomatik türetilen değerler okunabilir kalır.

#### Hardware settings
##### Vendor
##### Hardware version

Cihaz seçenekleri ayrıca Ministra uyumluluğunu ve tarayıcı yönlendirmesini içerir. Bunları yalnızca portalınız gerektiriyorsa değiştirin.

### Media player settings

Bu profilin medya oynatıcı ayarları.
#### Media player
Bu profil için varsayılan medya oynatıcıyı seçin.

Listede otomatik seçim, Exo, Android'in dahili oynatıcısı ve harici oynatıcı
ile derlemenizde kullanılabilen ek oynatıcılar bulunur. Uygulamada gösterilen seçenekler arasından seçim yapın.
Dahili oynatıcının kodek desteği Android'e bağlıdır; harici oynatıcılar akışları başka bir uygulamada açar.

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
UDPXY'yi yalnızca geçerli bir HTTP/HTTPS sunucu URL'si girdikten sonra etkinleştirin.
##### UDPXY server URL
UDPXY kapalıyken URL'yi girebilirsiniz. Boş URL'ye yalnızca kapalıyken izin verilir; boş olmayan bir URL geçerli bir HTTP/HTTPS adresi olmalıdır.
##### Overwrite stream protocol
UDPXY etkinken akış protokolünün yerine kullanılacak protokolü seçin.
### Advanced settings
Profile özgü uyumluluk seçenekleri CSS yamaları, emülatör algılama, arka plan rengi, yerel dosya ve AJAX düzeltmeleri
ile harici oynatıcılar için geri dönüş/tuş olaylarını içerir. Back, Exit ve OK olay seçenekleri, kanal listesine dönüş olayı seçeneğine bağlıdır.
Bunları yalnızca portalınız veya harici oynatıcınız gerektiriyorsa değiştirin.
