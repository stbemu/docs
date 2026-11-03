---
id: faq
title: Sık sorulan sorular
sidebar_label: Sık sorulan sorular
---

import FAQ from '@site/src/components/FAQ';

# Sık sorulan sorular {/* #faq */}

<FAQ id="google-play-pay-again" question="Google Play'de StbEmu Pro için ödeme yaptım ancak indiremiyorum. Google Play yeniden ödeme yapmamı istiyor">
    Bu, Google Play'de bilinen bir sorundur. Google Play'in ödemenizi işlemesi ve cihazlarınızdaki verileri güncellemesi için 24 saate kadar bekleyin.
    Bilgisayarınızda veya mobil cihazınızda bir web tarayıcısı açıp [Google Play](https://play.google.com/store) sayfasına gidebilir,
    StbEmu Pro'yu bulabilir ([doğrudan bağlantı](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro))
    ve uygulamayı cihazlarınıza uzaktan yükleyebilirsiniz.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="Kanal değiştirdiğimde uygulama ses seviyesini sıfırlıyor">
    Bu, bazı Sony, Philips ve Xiaomi cihazlarında bilinen bir sorundur. Başka cihazları da etkileyebilir.

    Sorunu çözmek için uygulamayı sistemin (genel) ses seviyesini kullanacak şekilde yapılandırın:
    [Settings](/settings) > [Playback & behavior](/settings/common-settings#playback--behavior) yolunu izleyin ve ***Always use system volume level*** seçeneğini etkinleştirin.
    Değişikliklerin geçerli olması için uygulama menüsünden etkin portalı yeniden yükleyin.
</FAQ>

<FAQ id="customize-portal-ui" question="Portal arayüzünü nasıl özelleştirebilirim? Renkleri veya simgeleri beğenmiyorum">
    Portallar IPTV sağlayıcınızın sunucularında barındırılır. Arayüzü yalnızca sağlayıcınız bu seçeneği sunuyorsa özelleştirebilirsiniz.
    Çoğu portal arayüz özelleştirmesini desteklemez; bu nedenle görünümlerini yalnızca IPTV sağlayıcısı değiştirebilir.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="Portalı yeniden yüklediğimde kanallar Favorites listesinden kayboluyor veya sıralarını değiştiremiyorum">
    Favoriler dahil tüm kanal listeleri IPTV sağlayıcınızın sunucularında saklanır. Uygulama favorilerinizi yüklemiyorsa
    veya yanlış sırada yüklüyorsa portal IPTV sağlayıcınız tarafından doğru yapılandırılmamıştır.
    Bu sorunu yalnızca sağlayıcınız çözebilir.
</FAQ>

<FAQ id="channels-buffer" question="Kanallar oynatma sırasında sık sık arabelleğe alınıyor">
    Sık arabelleğe alma genellikle ağ bağlantınızın veya IPTV sağlayıcınızın bağlantısının yeterince güvenilir ya da hızlı olmadığı
    ve cihazınıza video akışı sağlayamadığı anlamına gelir. Bağlantınızın düzgün çalıştığından eminseniz sorunu IPTV sağlayıcınıza bildirin.
</FAQ>

<FAQ id="m3u-support" question="Uygulama M3U oynatma listelerini destekliyor mu?">
    StbEmu, M3U veya diğer oynatma listelerini desteklemez. Yalnızca MAG kutuları için tasarlanmış portalları destekler.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="Uygulamada yedek oluşturamıyorum veya geri yükleyemiyorum">
    Yeniden tasarlanan Settings arayüzünde [Backup & restore](/settings/backup-restore) bölümünü açın ve bir dosya veya kayıt konumu seçmek için Android'in belge seçicisini kullanın.
    Belge seçici yoksa uygulama erişilebilir yedek klasörlerini ve kendi dosya tarayıcısını kullanır.
    Cihaz izinlerini ve seçilen dosyaya erişimi kontrol edin. Geri yüklemeden önce yedek adını ve profil sayısını inceleyip işlemi onaylayın.
</FAQ>
