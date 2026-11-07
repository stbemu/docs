---
title: Sikkerhetskopier og gjenoppretting
sidebar_label: Sikkerhetskopier og gjenoppretting
---

# Sikkerhetskopier og gjenoppretting {/* #backups-and-restore */}

Companions **Backups**-bibliotek lagrer fullførte StbEmu-JSON-sikkerhetskopier privat på telefonen eller nettbrettet. Lagrede filer er tilgjengelige uten nett. Biblioteket er atskilt fra [Androids systemsikkerhetskopiering](system-backup.md), som beskytter Companions egen tilstand.

![Sikkerhetskopibibliotek og oppretting av en sikkerhetskopi av enheten](/img/companion/backup-library.png)

## Lagre og administrere filer {/* #save-and-manage-files */}

- **Create backup:** åpne **Create backup** for en tilkoblet sammenkoblet enhet, angi **Backup name**, og velg **Create backup**. Vent på **Backup saved**.
- **Import backup:** åpne **Backups** fra appmenyen, velg **Import backup**, og velg en StbEmu-JSON-fil. Lokal import, eksport eller deling krever ikke en tilkoblet StbEmu-enhet.
- **Export JSON:** velg handlingen på sikkerhetskopiens bibliotekoppføring, og velg deretter et eksternt mål.
- **Share JSON:** velg handlingen på bibliotekoppføringen for å åpne Androids delingspanel. At panelet åpnes, bekrefter ikke levering til den valgte appen.
- **Delete local backup:** bekreft sletting av den lokale kopien. StbEmu-kildeenheten endres ikke.

JSON-grensen er **16 MiB (16,777,216 byte)**. Importerte filer valideres og beholder de opprinnelige bytene. En importert fil merkes **Source device unknown**. En integritetskontroll fastslår ikke hvem som opprettet den. En mislykket ekstern eksport kan etterlate en ufullstendig målfil, mens eksisterende lokale sikkerhetskopier bevares.

:::note
Sikkerhetskopifiler kan inneholde passord, portaldata og enhetsidentifikatorer. Eksport og deling bevarer disse verdiene. Velg mål eller mottaker deretter.
:::

## Gjenopprette en sikkerhetskopi {/* #restore-a-backup */}

1. Velg **Restore backup** fra en bibliotekoppføring eller enhetens handlingsside.
2. Velg **Destination device**, **Backup to restore** og en støttet **Restore mode**.
3. Velg **Review restore**. Kontroller tillagte, overskrevne og fjernede profiler, **Changed settings**, fjernkontrolltilordninger, utelatte lokale metadata og uforenlige eller låste felt.
4. Merk av i bekreftelsesboksen, og velg **Apply restore**.

![Gjenopprettingsskjerm som viser virkemåten til Merge](/img/companion/restore.png)

**Merge** overskriver profiler med samsvarende UUID-er, legger til nye profiler og beholder profiler som bare finnes på målet. **Replace all** fjerner også målprofiler som mangler i sikkerhetskopien. Samsvar bruker identifikatorer, ikke profilnavn. Begge modusene gjenoppretter flyttbare appinnstillinger og fjernkontrolltilordninger. Målets lokale metadata, som lokale rad-ID-er, appversjon og oppdateringsmappe, utelates.

:::warning
Se gjennom hver overskriving og fjerning før du bruker endringene. Replace all erstatter profilsettet. Det er ikke en måte å legge til bare utvalgte profiler på. Bruk [profiloverføringer](transferring-profiles.md) for selektiv kopiering.
:::

## Resultater og bruk av lagrede innstillinger {/* #results-and-applying-saved-settings */}

En utløpt forhåndsvisning krever **Start a new attempt** og en ny gjennomgang. Kontroller [operasjonsresultater](profiles.md#operation-results) ved usikkert resultat før du gjentar en gjenoppretting. Gjenoppretting av operasjonsstatus kan spørre målet selv om den opprinnelige sikkerhetskopien ikke lenger er tilgjengelig.

Lagrede innstillinger og virkninger under kjøring er separate. Ved endring trer innstillinger for den virtuelle fjernkontrollen i kraft ved neste vanlige pause/gjenopptakelse av StbEmu, hurtigbufferstørrelse krever omstart av StbEmu-prosessen, og språk kan opprette aktiviteten på nytt. UPnP-kompatibilitetsflagget endrer ikke gjeldende UPnP-kjøring, heller ikke etter omstart. **Check result** prøver ikke disse kjøretidsoppdateringene på nytt.
