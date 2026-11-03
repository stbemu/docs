---
id: faq
title: FAQ
sidebar_label: FAQ
---

import FAQ from '@site/src/components/FAQ';

# FAQ

<FAQ id="google-play-pay-again" question="Zapłaciłem za StbEmu Pro w Google Play, ale nie mogę go pobrać. Google Play żąda ponownej zapłaty">
    To znany problem Google Play. Przetworzenie płatności i zaktualizowanie danych na urządzeniach przez Google Play może potrwać do 24 godzin.
    Możesz też otworzyć przeglądarkę na komputerze lub urządzeniu mobilnym, przejść do [Google Play](https://play.google.com/store),
    znaleźć StbEmu Pro ([bezpośredni link](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro))
    i zdalnie zainstalować aplikację na swoich urządzeniach.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="Aplikacja resetuje poziom głośności przy zmianie kanałów">
    To znany problem na niektórych urządzeniach Sony, Philips i Xiaomi. Może występować także na innych urządzeniach.

    Aby go rozwiązać, skonfiguruj aplikację tak, aby korzystała z systemowego (globalnego) poziomu głośności:
    przejdź do [Settings](/settings) > [Playback & behavior](/settings/common-settings#playback--behavior) i włącz ***Always use system volume level***.
    Ponownie załaduj aktywny portal z menu aplikacji, aby zastosować zmiany.
</FAQ>

<FAQ id="customize-portal-ui" question="Jak mogę dostosować interfejs portalu? Nie podobają mi się kolory lub ikony">
    Portale znajdują się na serwerach Twojego dostawcy IPTV. Możesz dostosować interfejs tylko wtedy, gdy dostawca udostępnia taką możliwość.
    Większość portali nie obsługuje dostosowywania interfejsu, więc ich wygląd może zmienić tylko dostawca IPTV.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="Kanały znikają z Favorites po ponownym załadowaniu portalu lub nie mogę zmienić ich kolejności">
    Wszystkie listy kanałów, w tym ulubione, są przechowywane na serwerach Twojego dostawcy IPTV. Jeśli aplikacja nie wczytuje ulubionych
    lub wczytuje je w niewłaściwej kolejności, portal nie został poprawnie skonfigurowany przez dostawcę IPTV.
    Tylko dostawca może rozwiązać ten problem.
</FAQ>

<FAQ id="channels-buffer" question="Kanały często się buforują podczas odtwarzania">
    Częste buforowanie zwykle oznacza, że Twoje połączenie sieciowe lub połączenie dostawcy IPTV nie jest wystarczająco stabilne lub szybkie,
    aby przesyłać wideo na Twoje urządzenie. Jeśli masz pewność, że Twoje połączenie działa prawidłowo, zgłoś problem dostawcy IPTV.
</FAQ>

<FAQ id="m3u-support" question="Czy aplikacja obsługuje listy odtwarzania M3U?">
    StbEmu nie obsługuje list odtwarzania M3U ani innych list. Obsługuje wyłącznie portale przeznaczone dla dekoderów MAG.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="Nie mogę utworzyć ani przywrócić kopii zapasowej w aplikacji">
    W przeprojektowanym interfejsie Settings otwórz [Backup & restore](/settings/backup-restore) i użyj systemowego okna wyboru dokumentów Androida, aby wybrać plik lub miejsce zapisu.
    Jeśli okno wyboru nie jest dostępne, aplikacja korzysta z dostępnych folderów kopii zapasowych i własnej przeglądarki plików.
    Sprawdź uprawnienia urządzenia i dostęp do wybranego pliku. Przed przywróceniem sprawdź nazwę kopii i liczbę profili, a następnie potwierdź operację.
</FAQ>
