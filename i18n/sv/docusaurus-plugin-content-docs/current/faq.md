---
id: faq
title: Vanliga frågor
sidebar_label: Vanliga frågor
---

import FAQ from '@site/src/components/FAQ';

# Vanliga frågor {/* #faq */}

<FAQ id="google-play-pay-again" question="Jag har betalat för StbEmu Pro på Google Play men kan inte ladda ned appen. Google Play ber mig att betala igen">
    Detta är ett känt Google Play-problem. Det kan ta upp till 24 timmar för Google Play att behandla betalningen och uppdatera uppgifterna på dina enheter.
    Du kan också öppna en webbläsare på datorn eller mobilen, gå till [Google Play](https://play.google.com/store),
    leta upp StbEmu Pro ([direktlänk](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro)),
    och fjärrinstallera den på dina enheter.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="Appen återställer volymnivån när jag byter kanal">
    Detta är ett känt problem på vissa enheter från Sony, Philips och Xiaomi. Även andra enheter kan beröras.

    Åtgärda det genom att ställa in appen så att den använder systemets (globala) volymnivå:
    gå till [Inställningar](/settings) > [Uppspelning och beteende](/settings/common-settings#playback--behavior) och aktivera ***Använd alltid systemets volymnivå***.
    Läs in den aktiva portalen igen från appmenyn för att ändringarna ska träda i kraft.
</FAQ>

<FAQ id="customize-portal-ui" question="Hur kan jag anpassa portalens gränssnitt? Jag tycker inte om färgerna eller ikonerna">
    Portaler finns på din IPTV-leverantörs servrar. Du kan bara anpassa gränssnittet om leverantören erbjuder den möjligheten.
    De flesta portaler stöder inte anpassning av gränssnittet, så bara IPTV-leverantören kan ändra deras utseende.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="Kanaler försvinner från Favorites när jag läser in portalen igen, eller så kan jag inte ändra ordningen på dem">
    Alla kanallistor, inklusive favoriter, lagras på din IPTV-leverantörs servrar. Om appen inte läser in dina favoriter
    eller läser in dem i fel ordning har portalen inte konfigurerats korrekt av IPTV-leverantören.
    Bara leverantören kan åtgärda problemet.
</FAQ>

<FAQ id="channels-buffer" question="Kanaler buffrar ofta under uppspelning">
    Frekvent buffring innebär vanligtvis att din nätverksanslutning eller IPTV-leverantörens anslutning inte är tillförlitlig eller snabb nog
    för att strömma video till din enhet. Om du är säker på att din anslutning fungerar korrekt ska du rapportera problemet till IPTV-leverantören.
</FAQ>

<FAQ id="m3u-support" question="Stöder appen M3U-spellistor?">
    StbEmu stöder inte M3U eller andra spellistor. Appen stöder bara portaler avsedda för MAG-boxar.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="Jag kan inte skapa eller återställa en säkerhetskopia i appen">
    Öppna [Säkerhetskopiering och återställning](/settings/backup-restore) i det omarbetade Inställningar och använd Androids dokumentväljare för att välja en fil eller en plats att spara på.
    Om ingen väljare finns tillgänglig använder appen åtkomliga säkerhetskopieringsmappar och sin filbläddrare.
    Kontrollera enhetens behörigheter och åtkomsten till den valda filen. Granska säkerhetskopians namn och antalet profiler innan du återställer och bekräfta åtgärden.
</FAQ>
