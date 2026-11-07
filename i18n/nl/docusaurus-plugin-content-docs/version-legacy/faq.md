---
id: faq
title: Veelgestelde vragen
sidebar_label: Veelgestelde vragen
---

import FAQ from '@site/src/components/FAQ';

# Veelgestelde vragen {/* #faq */}

<FAQ id="google-play-pay-again" question="Ik heb voor StbEmu Pro betaald op Google Play, maar kan de app niet downloaden. Google Play vraagt me opnieuw te betalen">
    Dit is een bekend probleem met Google Play. Het kan tot 24 uur duren voordat Google Play uw betaling heeft verwerkt en de gegevens op uw apparaten heeft bijgewerkt.
    U kunt ook een webbrowser op uw computer of mobiele apparaat openen, naar [Google Play](https://play.google.com/store) gaan,
    StbEmu Pro zoeken ([directe link](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro)),
    en deze op afstand op uw apparaten installeren.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="De app stelt het volume opnieuw in wanneer ik van zender wissel">
    Dit is een bekend probleem op sommige apparaten van Sony, Philips en Xiaomi. Ook andere apparaten kunnen ermee te maken hebben.

    Stel de app als volgt in om het systeemvolume (het algemene volume) te gebruiken:
    ga naar [Settings](settings/index.md) > [Common settings](settings/common_settings.md) en schakel ***Always use system volume level*** in.
    Laad het actieve portaal opnieuw via het appmenu om de wijzigingen toe te passen.
</FAQ>

<FAQ id="customize-portal-ui" question="Hoe kan ik de interface van het portaal aanpassen? Ik vind de kleuren of pictogrammen niet mooi">
    Portalen worden gehost op de servers van uw IPTV-provider. U kunt de interface alleen aanpassen als uw provider die mogelijkheid biedt.
    De meeste portalen ondersteunen geen interfaceaanpassingen, dus alleen de IPTV-provider kan het uiterlijk ervan wijzigen.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="Zenders verdwijnen uit Favorites wanneer ik het portaal opnieuw laad, of ik kan de volgorde niet wijzigen">
    Alle zenderlijsten, inclusief favorieten, worden opgeslagen op de servers van uw IPTV-provider. Als de app uw favorieten niet laadt
    of ze in de verkeerde volgorde laadt, is het portaal niet correct geconfigureerd door uw IPTV-provider.
    Alleen uw provider kan dit probleem oplossen.
</FAQ>

<FAQ id="channels-buffer" question="Zenders bufferen vaak tijdens het afspelen">
    Veelvuldig bufferen betekent doorgaans dat uw netwerkverbinding of die van uw IPTV-provider niet betrouwbaar of snel genoeg is
    om video naar uw apparaat te streamen. Als u zeker weet dat uw verbinding goed werkt, meldt u het probleem aan uw IPTV-provider.
</FAQ>

<FAQ id="m3u-support" question="Ondersteunt de app M3U-afspeellijsten?">
    StbEmu ondersteunt geen M3U- of andere afspeellijsten. Het ondersteunt alleen portalen die voor MAG-boxen zijn ontworpen.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="Ik kan geen back-up maken of herstellen in de app">
    Deze functie werkt momenteel alleen goed op Android 10 en ouder. Vanaf Android 11 kunnen apps standaard alleen bestanden lezen en schrijven
    in hun eigen mappen. Apps kunnen toestemming vragen voor toegang tot andere mappen, maar dit werkt niet op sommige
    Android TV-apparaten en settopboxen (STB's). De onderliggende problemen worden niet opgelost:
    [1](https://issuetracker.google.com/issues/71327396), [2](https://issuetracker.google.com/issues/202985150).

    Als dit probleem op uw apparaat voorkomt, kunt u er geen back-ups op maken of herstellen.
</FAQ>
