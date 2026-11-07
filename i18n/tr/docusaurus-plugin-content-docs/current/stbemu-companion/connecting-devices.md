---
title: "Cihazlara bağlanma"
sidebar_label: "Cihazlara bağlanma"
---

# Cihazlara bağlanma {/* #connecting-devices */}

## StbEmu'yu keşfetme {/* #discover-stbemu */}

1. Telefon veya tabletinizi ve StbEmu cihazını birbirine erişebilen aynı yerel ağa bağlayın.
2. StbEmu'da **Settings > Companion** bölümünü açıp hizmeti etkinleştirin. [StbEmu'nun Companion ayarlarına](../settings/companion.md) bakın.
3. Companion'ın **Devices** sayfasını açın. Doğrulanmış cihazlar kayıtlı kartlar olarak görünür. Yönetmek istediğiniz StbEmu kurulumunun kartını açın.

![Yerel ağda arama yapan cihazlar sayfası](/img/companion/devices-empty.png)

Hiçbir şey görünmüyorsa StbEmu'da Companion erişiminin etkin olduğunu ve Android'in yerel ağ erişimine izin verdiğini kontrol edin. **Retry** seçeneğini kullanın veya elle bağlanın.

### Adresi elle ekleme {/* #add-an-address-manually */}

**Add by IP address** seçeneğini seçin. StbEmu'da gösterilen **IPv4 or IPv6 address** alanını ve bağlantı noktasını girip **Connect** seçeneğini seçin. Bağlantı noktası boş bırakılırsa **10000** kullanılır. Web sitesi URL'si veya ana makine adı yerine IP adresi girin. Elle giriş, doğrulamayı veya eşleştirmeyi atlamaz. Geçerli kayıtlı eşleştirmesi bulunan cihazlar yeni bir kod girmeden yeniden bağlanabilir.

![Eşleştirme bekleyen kayıtlı cihaz](/img/companion/devices-saved.png)

## Cihaz eşleştirme {/* #pair-a-device */}

1. StbEmu'nun **Settings > Companion** bölümünde bir kod görüntülemek için eşleştirmeyi başlatın.
2. Companion'daki cihaz işlemleri sayfasında kodu **Eight-digit pairing code** alanına girin.
3. **Pair device** seçeneğini seçip **Connected** durumunu bekleyin.

![Eşleştirme kodu girme](/img/companion/pairing.png)

Kodun süresi dolarsa StbEmu'da yeni bir kod görüntüleyin. Deneme sınırına ulaşırsanız tekrar denemeden önce bekleyin. StbEmu yetkilendirmeyi sürdürdüğü sürece eşleştirme sonraki bağlantılar için saklanır. StbEmu'da erişimi iptal etmek kayıtlı iznin kullanılmasını da engeller.

## Yeniden bağlanma, adlandırma veya kaldırma {/* #reconnect-rename-or-remove */}

**Disconnect**, bağlantıyı kapatır ve kayıtlı cihazı korur. Yeniden bağlanmak için kartını açıp **Connect** seçeneğini seçin. Ağ değişikliği bağlantıları kesebilir; yerel bağlantı geri geldiğinde yeniden bağlanın.

Yerel bir ad belirlemek için kalem düğmesini (**Rename device**) kullanın. **Use app name**, StbEmu'nun bildirdiği adı geri getirir. Burada ad değiştirmek StbEmu'nun kendi adını değiştirmez.

Çöp kutusu düğmesi (**Remove device**) onay ister. Bu telefondaki kayıtlı bağlantıyı ve eşleştirmeyi kaldırır, yedek dosyalarını korur ve StbEmu'da hiçbir şeyi değiştirmez. Kaldırılan cihaz keşif yoluyla otomatik olarak yeniden görünmez. Tekrar eklemek için **Add by IP address** seçeneğini kullanıp yeniden eşleştirin.
