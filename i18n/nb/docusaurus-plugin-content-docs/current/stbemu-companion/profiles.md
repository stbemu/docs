---
title: Administrere profiler
sidebar_label: Profiler
---

# Administrere profiler {/* #managing-profiles */}

Åpne en tilkoblet enhet, og velg **Profiles**. Listen viser profilnavn, identifikatorer (UUID-er) og tilgjengelige portaladresser. Velg en profil for å undersøke innstillingene. Bruk **Load more** for flere sider og **Refresh** for gjeldende data. Handlinger avhenger av tillatelsene enheten støtter.

## Opprette, redigere og slette {/* #create-edit-and-delete */}

- Velg **Create profile** i listen. Støttede opprettingsfelt inkluderer **Name** og **Portal URL**. Urørte felt bruker StbEmus standardverdier.
- Åpne en profil, og velg **Edit profile** for å endre støttede redigerbare felt. Bare redigerte felt endres. Andre innstillinger som enheten beholder, bevares.
- Velg **Delete profile** for å forberede sletting. Se gjennom eventuell endring av aktiv profil eller erstatningsprofil før du bekrefter.

Velg **Review changes**, se gjennom forhåndsvisningen og advarslene, og velg så **Confirm changes** eller **Confirm deletion**. Den første handlingen lagrer eller sletter ikke profilen umiddelbart. Uforenlige endringer kan ikke bekreftes. Hvis profilen eller tilgjengelige felt endres under redigering, oppdater og se gjennom på nytt.

Se [STB-profiler](../settings/profiles.md) for betydningen av StbEmus profilfelt.

## Kopiere en profil {/* #copy-a-profile */}

Åpne en profil, og velg **Copy profile**. Velg **This device** for en kopi på samme enhet, og se deretter gjennom og bekreft endringene. Kopien har en ny identitet. Ikke identifiser den bare ut fra navnet. **Edit copied profile**, når tilgjengelig etter vellykket kopiering, åpner den returnerte kopien i stedet for originalen.

Hvis du velger en annen egnet sammenkoblet enhet, åpnes [arbeidsflyten i overføringsveiledningen](transferring-profiles.md) med denne profilen valgt.

## Operasjonsresultater {/* #operation-results */}

Hvis tilkoblingen svikter eller resultatet er usikkert, åpne enhetens **Recent operation results** og bruk **Check result** før du starter en ny endring. Resultatkontroll krever en autorisert tilkobling og spør etter den opprinnelige operasjonen. Den sender ikke endringen på nytt. Dette gjelder også [overføringer](transferring-profiles.md) og [gjenoppretting av sikkerhetskopier](backups.md).

En utløpt forhåndsvisning krever en ny uttrykkelig gjennomgang. Avbryting kan skje samtidig med lagring, så les sluttresultatet i stedet for å anta at **Cancel operation** angret endringene. **Changes saved on the device** bekrefter lagrede data. Oppdatering under kjøring kan fortsatt vente. Kontroll av resultat prøver ikke denne oppdateringen på nytt, og en slettet profilkopi opprettes aldri på nytt ved kontroll av historikken.
