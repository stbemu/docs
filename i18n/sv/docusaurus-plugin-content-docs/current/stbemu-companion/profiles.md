---
title: Hantera profiler
sidebar_label: Profiler
---

# Hantera profiler {/* #managing-profiles */}

Öppna en ansluten enhet och välj **Profiles**. Listan visar profilnamn, identifierare (UUID) och tillgängliga portaladresser. Välj en profil för att granska inställningarna. Använd **Load more** för fler sidor och **Refresh** för aktuella data. Åtgärder beror på behörigheterna som enheten stöder.

## Skapa, redigera och radera {/* #create-edit-and-delete */}

- Välj **Create profile** i listan. Fält som stöds vid skapande inkluderar **Name** och **Portal URL**. Orörda fält använder StbEmus standardvärden.
- Öppna en profil och välj **Edit profile** för att ändra redigerbara fält som stöds. Bara redigerade fält ändras. Andra inställningar som enheten behåller bevaras.
- Välj **Delete profile** för att förbereda radering. Granska eventuell ändring av aktiv profil eller ersättningsprofil innan du bekräftar.

Välj **Review changes**, granska förhandsvisningen och varningarna och välj sedan **Confirm changes** eller **Confirm deletion**. Den första åtgärden sparar eller raderar inte profilen direkt. Oförenliga ändringar kan inte bekräftas. Om profilen eller tillgängliga fält ändras under redigering, uppdatera och granska igen.

Se [STB-profiler](../settings/profiles.md) för betydelsen av StbEmus profilfält.

## Kopiera en profil {/* #copy-a-profile */}

Öppna en profil och välj **Copy profile**. Välj **This device** för en kopia på samma enhet, granska och bekräfta ändringarna. Kopian har en ny identitet. Identifiera den inte enbart genom namnet. **Edit copied profile**, när det är tillgängligt efter att kopieringen lyckats, öppnar den returnerade kopian i stället för originalet.

Om du väljer en annan lämplig parkopplad enhet öppnas [överföringsguidens arbetsflöde](transferring-profiles.md) med profilen vald.

## Åtgärdsresultat {/* #operation-results */}

Om anslutningen bryts eller resultatet är osäkert, öppna enhetens **Recent operation results** och använd **Check result** innan du påbörjar en ny ändring. Resultatkontrollen kräver en behörig anslutning och frågar efter den ursprungliga åtgärden. Den skickar inte ändringen igen. Detta gäller också [överföringar](transferring-profiles.md) och [återställning av säkerhetskopior](backups.md).

En utgången förhandsvisning kräver en ny uttrycklig granskning. Avbrytande kan sammanfalla med sparande, så läs slutresultatet i stället för att anta att **Cancel operation** ångrade ändringarna. **Changes saved on the device** bekräftar sparade data. Uppdatering under körning kan fortfarande vänta. Resultatkontroll försöker inte utföra den uppdateringen igen, och en raderad profilkopia återskapas aldrig genom kontroll av historiken.
