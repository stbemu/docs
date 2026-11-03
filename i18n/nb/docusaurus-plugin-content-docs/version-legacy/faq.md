---
id: faq
title: Ofte stilte spørsmål
sidebar_label: Ofte stilte spørsmål
---

import FAQ from '@site/src/components/FAQ';

# Ofte stilte spørsmål {/* #faq */}

<FAQ id="google-play-pay-again" question="Jeg har betalt for StbEmu Pro på Google Play, men får ikke lastet den ned. Google Play ber meg betale på nytt">
    Dette er et kjent problem med Google Play. Det kan ta opptil 24 timer før Google Play behandler betalingen og oppdaterer opplysningene på enhetene dine.
    Du kan også åpne en nettleser på datamaskinen eller mobilenheten, gå til [Google Play](https://play.google.com/store),
    finne StbEmu Pro ([direktelenke](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro)),
    og fjerninstallere den på enhetene dine.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="Appen tilbakestiller lydnivået når jeg bytter kanal">
    Dette er et kjent problem på enkelte enheter fra Sony, Philips og Xiaomi. Det kan også forekomme på andre enheter.

    Løs problemet ved å stille inn appen til å bruke systemets (globale) lydnivå:
    gå til [Settings](settings/index.md) > [Common settings](settings/common_settings.md) og aktiver ***Always use system volume level***.
    Last inn den aktive portalen på nytt fra appmenyen for at endringene skal tre i kraft.
</FAQ>

<FAQ id="customize-portal-ui" question="Hvordan kan jeg tilpasse portalens grensesnitt? Jeg liker ikke fargene eller ikonene">
    Portaler ligger på IPTV-leverandørens servere. Du kan bare tilpasse grensesnittet hvis leverandøren tilbyr dette.
    De fleste portaler støtter ikke tilpasning av grensesnittet, så bare IPTV-leverandøren kan endre utseendet.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="Kanaler forsvinner fra Favorites når jeg laster inn portalen på nytt, eller jeg kan ikke endre rekkefølgen">
    Alle kanallister, inkludert favoritter, lagres på IPTV-leverandørens servere. Hvis appen ikke laster inn favorittene dine
    eller laster dem inn i feil rekkefølge, har ikke IPTV-leverandøren konfigurert portalen riktig.
    Bare leverandøren kan løse dette problemet.
</FAQ>

<FAQ id="channels-buffer" question="Kanaler stopper ofte for bufring under avspilling">
    Hyppig bufring betyr vanligvis at nettverkstilkoblingen din eller IPTV-leverandørens tilkobling ikke er stabil eller rask nok
    til å strømme video til enheten din. Hvis du er sikker på at tilkoblingen fungerer som den skal, må du melde problemet til IPTV-leverandøren.
</FAQ>

<FAQ id="m3u-support" question="Støtter appen M3U-spillelister?">
    StbEmu støtter ikke M3U eller andre spillelister. Den støtter bare portaler laget for MAG-bokser.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="Jeg kan ikke opprette eller gjenopprette en sikkerhetskopi i appen">
    Denne funksjonen fungerer for øyeblikket bare riktig på Android 10 og eldre. Fra og med Android 11 kan apper som standard bare lese og skrive filer
    i sine egne mapper. Apper kan be om tillatelse til å få tilgang til andre mapper, men dette fungerer ikke på enkelte
    Android TV-enheter og TV-mottakere (STB-er). De underliggende problemene vil ikke bli rettet:
    [1](https://issuetracker.google.com/issues/71327396), [2](https://issuetracker.google.com/issues/202985150).

    Hvis enheten din er berørt, vil du ikke kunne opprette eller gjenopprette sikkerhetskopier på den.
</FAQ>
