---
title: "Uzaktan kumanda"
sidebar_label: "Uzaktan kumanda"
---

# Uzaktan kumanda {/* #remote-control */}

Bağlı bir cihazı açıp **Remote control** seçeneğini seçin. Bu işlem yalnızca cihaz yetkili uzaktan girişi destekliyorsa görünür. Bu kontroller StbEmu'yu ve portalını yönetir; [Eski uzaktan kumanda](../settings/common_settings.md#legacy-remote) bölümünde anlatılan eski MAG kumanda hizmetinden ayrıdır.

![Renkli tuşlar ve yön pedi bulunan kaydırılabilir kumanda](/img/companion/remote-control.png)

Normal işlemi için düğmeye dokunun. Destekleniyorsa uzun işlem veya tekrarlanan basışlar için düğmeyi basılı tutun. Basılı tutmayı sonlandırmak için bırakın. Kullanılabilir düğmeler ve basılı tutma davranışı cihaza bağlıdır; her tuş tekrarlamayı desteklemez. Oynatma, ses, kanal ve sayı tuşları dahil diğer kontrollere ulaşmak için kaydırın.

Aynı anda yalnızca bir tuş hareketi etkin olabilir. Kumanda sayfasından veya uygulamadan çıkmak, bağlantıyı ya da yetkiyi kaybetmek etkin girişi iptal eder. Uzaktan giriş yeniden bağlanıldığında tekrarlanmaz: yeniden bağlanıp tuşa bilinçli olarak tekrar basın.

## Geri bildirimi okuma {/* #read-the-feedback */}

Yerel basma/basılı tutma geri bildirimi, Companion'ın hareketinizi algıladığını gösterir. **Awaiting device confirmation**, sonucun hâlâ beklendiği anlamına gelir. **Device accepted input**, StbEmu'nun girişi kabul ettiğini doğrular; kanal veya portal işleminin mutlaka tamamlandığını göstermez.

**Input target unavailable** durumunda bağlantıyı kontrol edin. **Authorization expired. Pair again.** durumunda StbEmu'da yeni bir kod görüntüleyip Companion'a girin. Bir işlem artık desteklenmiyorsa kullanmayı bırakın ve mevcut kontrolleri inceleyin. Giriş kullanılamaz durumda kalırsa yeniden bağlanın.

Kumanda titreşimini **Settings > Interface > Remote control haptic feedback** altında değiştirin. Bu ayar **UI haptic feedback** ayarından bağımsızdır; titreşim kapalıyken görsel geri bildirim kullanılabilir.
