---
title: Androids systemsikkerhetskopiering
sidebar_label: Androids systemsikkerhetskopiering
---

# Androids systemsikkerhetskopiering {/* #android-system-backup */}

Åpne **Settings > Backups > System backup**. Androids systemsikkerhetskopiering kan gjenopprette Companions innstillinger, lagrede enheter og navn, verifisert tillit og fortsatt gyldig sammenkoblingslegitimasjon etter en vellykket Android-gjenoppretting. Dette er atskilt fra å gjenopprette en [StbEmu-JSON-sikkerhetskopi](backups.md) til en sammenkoblet enhet.

## Inkludere lokale arkiver {/* #include-local-archives */}

**Include local archives** er aktivert som standard. Det inkluderer kvalifiserte fullførte StbEmu-sikkerhetskopier fra det lokale biblioteket i fremtidige systemsikkerhetskopier. Å slå det av beholder lokale filer og Companions innstillinger/enheter, men utelater arkiver fra fremtidige sikkerhetskopier. Eldre innhold i skyen slettes ikke.

Siden viser et anslag over valgt størrelse. Bruk **Refresh estimate** for å måle igjen, **Open Android settings** for å kontrollere Androids sikkerhetskopioppsett eller **Open archive library / manual export** for å eksportere filer selv.

## Tilgjengelighet og grenser {/* #availability-and-limits */}

Systemsikkerhetskopiering krever **Android 9 eller nyere**, selv om Companion selv støtter Android 8. Kryptert sikkerhetskopiering i skyen krever også en støttet konto, sikker skjermlås og Android-kryptering på klientsiden. Android styrer planlegging, om transportmekanismen kan brukes, og tilgjengeligheten av gjenoppretting.

Den nominelle skykvoten er **25 MiB**. Den faktiske tilgjengelige kvoten kan være lavere. Grensen på **256 MiB** mellom enheter er en appgrense, ikke et løfte om transportkapasitet. Hvis hele utvalget er for stort, utelat lokale arkiver eller eksporter dem manuelt. Companion sikkerhetskopierer ikke bare deler av utvalget i det stille.

Et anslag eller en melding om lokal klargjøring bekrefter ikke at Android har lagret en sikkerhetskopi i skyen. Et utilgjengelig anslag er ikke en sikkerhetskopi på null byte. Hvis siden melder at sikkerhetskopiering er deaktivert eller ikke støttes, bruk manuell arkiveksport i stedet for å anta at dataene er beskyttet.

## Etter at Android gjenoppretter Companion {/* #after-android-restores-companion */}

Gjenopprettede enheter må verifiseres før de vises som tilkoblet. Fortsatt autorisert sammenkoblingslegitimasjon kan koble til igjen uten ny sammenkobling, men gjenoppretting kan ikke angre tilbakekalling i StbEmu. Gjenopprettede kopier deler de samme tillatelsene. Tilbakekalling av en tillatelse påvirker også disse kopiene.

Biblioteket viser fullførte arkivfiler som faktisk ble gjenopprettet. Metadata alene gjenskaper ikke manglende filer. En ufullført operasjon sendes ikke automatisk på nytt. Koble til igjen og kontroller [operasjonsresultater](profiles.md#operation-results) når de er tilgjengelige.
