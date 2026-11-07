---
title: Overføre profiler og innstillinger
sidebar_label: Profiloverføringer
---

# Overføre profiler og innstillinger {/* #transferring-profiles-and-settings */}

Bruk en overføring for å kopiere valgt innhold direkte mellom to ulike sammenkoblede StbEmu-installasjoner. Begge må være tilkoblet og støtte de valgte kilde- og målhandlingene. For en kopi på samme installasjon bruker du [Copy profile > This device](profiles.md#copy-a-profile).

![Overføringsskjerm som venter på et kompatibelt mål](/img/companion/transfer.png)

## Velge og se gjennom {/* #select-and-review */}

1. Åpne kildeenheten, og velg **Transfer to another device**.
2. Velg **Destination device**. Hvis ingen er tilgjengelig, gå tilbake til **Devices**, koble til en annen sammenkoblet enhet og prøv igjen.
3. Velg **Application settings and remote mappings**, profiler eller begge deler. For profiler velger du **Do not copy profiles**, **All profiles** eller **Choose individual profiles**. Minst én kategori må velges.
4. Velg **Review transfer**. Se gjennom nye profiler, innstillingsendringer, virkninger på fjernkontrolltilordninger, endringer av aktiv profil, utelatelser og uforenligheter.
5. Velg **I confirm these changes**, og deretter **Confirm transfer**.

Individuelt valg krever en fullstendig oppdatert liste over kildeprofiler. Hvis en valgt profil forsvinner, bruk **Refresh** for å kontrollere listen, og fjern uttrykkelig avmerkingen for profiler som fortsatt mangler. Oppdatering fjerner eller erstatter ikke valgte profiler i det stille.

## Hva som endres {/* #what-changes */}

Overførte profiler er nye kopier med nye identiteter på målet. Eksisterende målprofiler beholdes. MAC-adresser, serienumre, enhets-ID-er og andre profilverdier bevares, så kopiering oppretter ikke et nytt abonnement eller en leverandørtillatelse. Denne arbeidsflyten har ikke valget **Merge**/**Replace all**. Disse modusene hører til [gjenoppretting av sikkerhetskopi](backups.md#restore-a-backup).

Overføringer med bare profiler beholder målets appinnstillinger, fjernkontrolltilordninger og aktive valg. Overføringer med bare innstillinger beholder målets profiler og aktive valg. Ved kopiering av begge blir kildens aktive profil aktiv gjennom sin nye kopi bare hvis profilen er inkludert. Ellers beholdes målets aktive valg.

Appinnstillinger omfatter flyttbare StbEmu-innstillinger og tilordninger av fjernkontrollknapper, ikke Companions språk/tema, sammenkoblingstillatelser, tjenesteidentitet eller operasjonshistorikk. Verdier som ikke støttes, rapporteres i stedet for å forkastes i det stille. Se gjennom passordrelaterte og andre overskrevne innstillinger før du bekrefter. Noen lagrede innstillinger krever en livssyklusendring eller omstart av StbEmu. Se [ta i bruk lagrede innstillinger](backups.md#results-and-applying-saved-settings).

Etter at Companion melder at kildens øyeblikksbilde er verifisert, kan akkurat det forsøket fortsette hvis kilden kobles fra. Overføringen oppretter ingen permanent oppføring i sikkerhetskopibiblioteket. Bruk [operasjonsresultater](profiles.md#operation-results) ved usikre resultater eller avbryting.
