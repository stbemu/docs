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
    przejdź do [Settings](settings/index.md) > [Common settings](settings/common_settings.md) i włącz ***Always use system volume level***.
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
    Ta funkcja działa obecnie prawidłowo tylko na Androidzie 10 i starszym. Od Androida 11 aplikacje mogą domyślnie odczytywać i zapisywać pliki
    tylko we własnych folderach. Aplikacje mogą poprosić o dostęp do innych folderów, ale nie działa to na niektórych
    urządzeniach Android TV i dekoderach (STB). Problemy leżące u podstaw tego ograniczenia nie zostaną naprawione:
    [1](https://issuetracker.google.com/issues/71327396), [2](https://issuetracker.google.com/issues/202985150).

    Jeśli problem dotyczy Twojego urządzenia, nie będziesz mieć możliwości tworzenia ani przywracania na nim kopii zapasowych.
</FAQ>
