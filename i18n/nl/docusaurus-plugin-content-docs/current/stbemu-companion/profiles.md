---
title: Profielen beheren
sidebar_label: Profielen
---

# Profielen beheren {/* #managing-profiles */}

Open een verbonden apparaat en kies **Profiles**. De lijst toont profielnamen, identificatoren (UUID's) en beschikbare portaaladressen. Kies een profiel om de instellingen te bekijken. Gebruik **Load more** voor extra pagina's en **Refresh** voor actuele gegevens. Acties hangen af van de machtigingen die het apparaat ondersteunt.

## Maken, bewerken en verwijderen {/* #create-edit-and-delete */}

- Kies **Create profile** in de lijst. Ondersteunde velden zijn onder meer **Name** en **Portal URL**. Ongewijzigde velden gebruiken de standaardwaarden van StbEmu.
- Open een profiel en kies **Edit profile** om ondersteunde bewerkbare velden te wijzigen. Alleen bewerkte velden veranderen; aanvullende instellingen die het apparaat bewaart blijven behouden.
- Kies **Delete profile** om verwijdering voor te bereiden. Controleer een eventuele wijziging van het actieve profiel of een vervangend profiel voordat u bevestigt.

Kies **Review changes**, bekijk het voorbeeld en de waarschuwingen en kies dan **Confirm changes** of **Confirm deletion**. De eerste actie slaat het profiel niet meteen op en verwijdert het ook niet meteen. Onverenigbare wijzigingen kunnen niet worden bevestigd. Veranderen het profiel of de beschikbare velden tijdens bewerken, vernieuw dan en controleer opnieuw.

Zie [STB-profielen](../settings/profiles.md) voor de betekenis van de profielvelden in StbEmu.

## Een profiel kopiëren {/* #copy-a-profile */}

Open een profiel en kies **Copy profile**. Kies **This device** voor een kopie op hetzelfde apparaat, controleer en bevestig de wijzigingen. De kopie krijgt een nieuwe identiteit; herken deze niet uitsluitend aan de naam. **Edit copied profile** opent, wanneer beschikbaar na voltooiing, de teruggegeven kopie in plaats van het origineel.

Een ander geschikt gekoppeld apparaat kiezen opent de [werkwijze uit de overdrachtshandleiding](transferring-profiles.md) met dit profiel geselecteerd.

## Resultaten van bewerkingen {/* #operation-results */}

Open bij een verbroken verbinding of onzeker resultaat **Recent operation results** van het apparaat en gebruik **Check result** voordat u een nieuwe wijziging start. Resultaatcontrole vereist een toegestane verbinding en vraagt de oorspronkelijke bewerking op; de wijziging wordt niet opnieuw verzonden. Dit geldt ook voor [overdrachten](transferring-profiles.md) en [back-upherstel](backups.md).

Een verlopen voorbeeld vereist een nieuwe expliciete controle. Annuleren kan tegelijk met opslaan plaatsvinden; lees daarom het eindresultaat in plaats van aan te nemen dat **Cancel operation** wijzigingen heeft teruggedraaid. **Changes saved on the device** bevestigt opgeslagen gegevens; vernieuwen tijdens uitvoering kan nog uitstaan. Een resultaat controleren probeert dat vernieuwen niet opnieuw en een verwijderde profielkopie wordt nooit opnieuw gemaakt door de geschiedenis te controleren.
