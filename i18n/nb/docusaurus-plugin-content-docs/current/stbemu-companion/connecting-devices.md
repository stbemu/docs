---
title: Koble til enheter
sidebar_label: Koble til enheter
---

# Koble til enheter {/* #connecting-devices */}

## Finne StbEmu {/* #discover-stbemu */}

1. Koble telefonen eller nettbrettet og StbEmu-enheten til det samme tilgjengelige lokale nettverket.
2. Åpne **Settings > Companion** i StbEmu, og aktiver tjenesten. Se [Companion-innstillingene i StbEmu](../settings/companion.md).
3. Åpne siden **Devices** i Companion. Verifiserte enheter vises som lagrede kort. Åpne kortet for StbEmu-installasjonen du vil administrere.

![Enhetssiden søker i det lokale nettverket](/img/companion/devices-empty.png)

Hvis ingenting vises, kontroller at Companion-tilgang er aktivert i StbEmu, og at Android tillater tilgang til det lokale nettverket. Velg **Retry**, eller koble til manuelt.

### Legge til en adresse manuelt {/* #add-an-address-manually */}

Velg **Add by IP address**. Skriv inn **IPv4 or IPv6 address** og porten som vises i StbEmu, og velg **Connect**. Hvis porten er tom, brukes **10000**. Skriv inn en IP-adresse, ikke en nettadresse eller et vertsnavn. Manuell inntasting omgår ikke verifisering eller sammenkobling. Enheter med gyldig lagret sammenkobling kan koble til igjen uten en ny kode.

![Lagret enhet som venter på sammenkobling](/img/companion/devices-saved.png)

## Koble sammen en enhet {/* #pair-a-device */}

1. Start sammenkobling i StbEmus **Settings > Companion** for å vise en kode.
2. Skriv inn koden i **Eight-digit pairing code** på enhetens handlingsside i Companion.
3. Velg **Pair device**, og vent på **Connected**.

![Inntasting av en sammenkoblingskode](/img/companion/pairing.png)

Hvis koden utløper, vis en ny i StbEmu. Hvis forsøkene er begrenset på grunn av hyppighet, vent før du prøver igjen. Sammenkoblingen lagres for senere tilkoblinger så lenge StbEmu fortsetter å tillate den. Tilbakekalling av tilgang i StbEmu hindrer også bruk av den lagrede tillatelsen.

## Koble til igjen, endre navn eller fjerne {/* #reconnect-rename-or-remove */}

**Disconnect** lukker tilkoblingen og beholder den lagrede enheten. Åpne kortet og velg **Connect** for å koble til igjen. Et nettverksbytte kan avbryte tilkoblinger. Koble til igjen når lokal tilkobling er gjenopprettet.

Bruk blyantknappen (**Rename device**) for å angi et lokalt navn. **Use app name** gjenoppretter navnet som StbEmu oppgir. Navneendringen her endrer ikke navnet på selve StbEmu.

Papirkurvknappen (**Remove device**) ber om bekreftelse. Den fjerner den lagrede tilkoblingen og sammenkoblingen fra denne telefonen, beholder sikkerhetskopifiler og endrer ingenting på StbEmu. Enheten som ble fjernet, dukker ikke automatisk opp igjen ved søk. Bruk **Add by IP address** og koble sammen på nytt for å legge den til igjen.
