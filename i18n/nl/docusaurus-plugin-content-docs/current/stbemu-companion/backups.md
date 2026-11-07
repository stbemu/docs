---
title: Back-ups en herstellen
sidebar_label: Back-ups en herstellen
---

# Back-ups en herstellen {/* #backups-and-restore */}

De bibliotheek **Backups** van Companion bewaart voltooide StbEmu-JSON-back-ups privé op uw telefoon of tablet. Opgeslagen bestanden blijven offline beschikbaar. Deze bibliotheek staat los van [Android-systeemback-up](system-backup.md), die de eigen toestand van Companion beschermt.

![Back-upbibliotheek en een apparaatback-up maken](/img/companion/backup-library.png)

## Bestanden opslaan en beheren {/* #save-and-manage-files */}

- **Create backup:** open de actie **Create backup** van een verbonden gekoppeld apparaat, voer een **Backup name** in en kies **Create backup**. Wacht op **Backup saved**.
- **Import backup:** open **Backups** in het appmenu, kies **Import backup** en selecteer een StbEmu-JSON-bestand. Voor lokaal importeren, exporteren of delen is geen verbonden StbEmu-apparaat nodig.
- **Export JSON:** kies deze actie bij de back-upvermelding in de bibliotheek en kies een externe bestemming.
- **Share JSON:** kies deze actie bij de back-upvermelding om het Android-deelvenster te openen. Openen bevestigt niet dat de geselecteerde app het bestand heeft ontvangen.
- **Delete local backup:** bevestig verwijdering van die lokale kopie. Het StbEmu-bronapparaat blijft ongewijzigd.

De JSON-limiet is **16 MiB (16,777,216 bytes)**. Geïmporteerde bestanden worden gevalideerd en behouden hun oorspronkelijke bytes. Een geïmporteerd bestand krijgt het label **Source device unknown**; een integriteitscontrole stelt niet vast wie het heeft gemaakt. Een mislukte externe export kan een onvolledig doelbestand achterlaten; bestaande lokale back-ups blijven behouden.

:::note
Back-upbestanden kunnen wachtwoorden, portaalgegevens en apparaatidentificatoren bevatten. Exporteren en delen behouden deze waarden; kies de bestemming of ontvanger daarop.
:::

## Een back-up herstellen {/* #restore-a-backup */}

1. Kies **Restore backup** vanuit een bibliotheekvermelding of de actiepagina van een apparaat.
2. Kies **Destination device**, **Backup to restore** en een ondersteunde **Restore mode**.
3. Kies **Review restore**. Controleer toegevoegde, overschreven en verwijderde profielen, **Changed settings**, afstandsbedieningskoppelingen, uitgesloten lokale metadata en onverenigbare of vergrendelde velden.
4. Vink het bevestigingsvakje aan en kies **Apply restore**.

![Herstelscherm met het gedrag van Merge](/img/companion/restore.png)

**Merge** overschrijft profielen met overeenkomende UUID's, voegt nieuwe profielen toe en behoudt profielen die alleen op het doel bestaan. **Replace all** verwijdert daarnaast doelprofielen die ontbreken in de back-up. Overeenkomsten worden op identificatoren bepaald, niet op profielnamen. Beide modi herstellen overdraagbare applicatie-instellingen en afstandsbedieningskoppelingen. Lokale metadata van het doel, zoals lokale rij-ID's, appversie en updatemap, wordt uitgesloten.

:::warning
Controleer elke overschrijving en verwijdering voordat u toepast. Replace all vervangt de verzameling profielen; het is geen manier om uitsluitend geselecteerde profielen toe te voegen. Gebruik [profieloverdrachten](transferring-profiles.md) voor selectief kopiëren.
:::

## Resultaten en opgeslagen instellingen toepassen {/* #results-and-applying-saved-settings */}

Een verlopen voorbeeld vereist **Start a new attempt** en een nieuwe controle. Controleer bij een onzeker resultaat de [resultaten van bewerkingen](profiles.md#operation-results) voordat u opnieuw herstelt. Herstel van de bewerkingsstatus kan het doel opvragen, zelfs als de oorspronkelijke back-up niet meer beschikbaar is.

Opgeslagen instellingen en effecten tijdens uitvoering zijn afzonderlijk. Na wijziging worden instellingen van de virtuele afstandsbediening actief bij de volgende normale pauze/hervatting van StbEmu, vereist de cachegrootte een herstart van het StbEmu-proces en kan een taalwijziging de activiteit opnieuw maken. De UPnP-compatibiliteitsvlag schakelt de huidige UPnP-uitvoering niet om, ook niet na een herstart. **Check result** probeert deze updates tijdens uitvoering niet opnieuw.
