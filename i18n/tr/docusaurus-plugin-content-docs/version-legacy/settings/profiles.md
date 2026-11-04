---
id: profiles
title: Profiller
sidebar_label: Profiller
---

# STB profilleri {/* #stb-profiles */}

**STB profili**, uygulamada bir set üstü kutuyu emüle etmek için kullanılan seçenekler kümesidir. Uygulama ilk açılışta bir profil oluşturur.
Aynı cihazda farklı portalları yüklemek için bu profili düzenleyebilir veya yeni profiller ekleyebilirsiniz.
Profil oluşturmak için ekranın üstünde veya yanında menüyü görüntülemek üzere ekrana iki kez dokunun [^1].
**Settings**, ardından profil ekleyebileceğiniz veya düzenleyebileceğiniz **Profiles** seçeneğini seçin.

StbEmu herhangi bir medya veya IPTV oynatma listesi sağlamaz, barındırmaz ya da dizine eklemez.
Kullanıcıların emülatör aracılığıyla eriştikleri içerik için yasal hakka sahip olmaları gerekir.

[^1]: 3D uzaktan kumanda veya fare kullanıyorsanız işaretçiyi hareket ettirin, ekrana tıklayın ve üstteki uygulama menüsünü açın.

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
    - [IP address](#ip-address)
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
Portalın URL'si. Bir şemayla (**http://**, **https://**, **ftp://** vb.) başlamalıdır.

##### Portal language
İki harfli bir [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) dil koduyla belirtilen varsayılan portal dili.

#### HTTP Proxy settings
HTTP proxy ayarları.

##### Use HTTP proxy
HTTP proxy kullanmak istiyorsanız etkinleştirin.

##### Proxy host name
##### Proxy port

##### Portal is internal
MAG cihazları için dahili bir portal kullanmak üzere bu seçeneği etkinleştirin.

##### Internal portal URL

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
Sürüm veya özel User Agent metni gibi belirli cihaz yazılımı ayarlarını yapılandırmak için kullanın.

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
aynı tohum değerini kullanın. Bu değeri değiştirdikten sonra **Reset device ID** düğmesine basın.

##### Device ID value
Cihaz kimliği. Oluşturulan değeri kullanın veya kendi değerinizi girin.

##### Custom device ID 2 and signature
Device ID 2 ve imzayı düzenlemek için bu seçeneği etkinleştirin.

##### Device ID 2
##### Signature
##### Reset device ID to default value
**Device ID**, **Device ID 2** ve imzayı yeniden oluşturun.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
İstek üzerine portala gönderilen IP adresi. Bu, cihazın gerçek IP adresi değil, emüle edilen bir adrestir.
Çoğu portal bu bilgiyi kullanmadığı için genellikle değiştirmeniz gerekmez.
### Media player settings

Bu profilin medya oynatıcı ayarları.
#### Media player
Bu profil için varsayılan medya oynatıcıyı seçin.

| Oynatıcı | Açıklama | Yorum |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo | [GitHub](https://github.com/google/ExoPlayer) | Çoğu cihaz için önerilen varsayılan oynatıcı |
| VLC | [Web sitesi](https://www.videolan.org) | |
| MPV | [GitHub](https://github.com/mpv-android/mpv-android) | |
| Ijk | [GitHub](https://github.com/bilibili/ijkplayer) | Altyazıları desteklemez |
| Internal player | Android oynatıcısını kullanır. Desteklenen kodekler cihazınızın Android sürümüne bağlıdır. | Altyazıları desteklemez |
| External player | Neredeyse tüm harici oynatıcıları kullanabilirsiniz. Emülatör entegrasyonu kullanılamaz; medya akışları başka bir uygulamada açılır. | |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
