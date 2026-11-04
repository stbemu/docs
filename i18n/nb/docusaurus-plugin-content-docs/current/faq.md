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
    gå til [Innstillinger](/settings) > [Avspilling og virkemåte](/settings/common-settings#playback--behavior) og aktiver ***Bruk alltid systemets volumnivå***.
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
    I det nye Innstillinger-grensesnittet åpner du [Sikkerhetskopiering og gjenoppretting](/settings/backup-restore) og bruker Androids dokumentvelger til å velge en fil eller et lagringssted.
    Hvis ingen dokumentvelger er tilgjengelig, bruker appen tilgjengelige sikkerhetskopimapper og sin egen filutforsker.
    Kontroller enhetens tillatelser og tilgangen til den valgte filen. Se gjennom navnet på sikkerhetskopien og antall profiler før du bekrefter gjenopprettingen.
</FAQ>
