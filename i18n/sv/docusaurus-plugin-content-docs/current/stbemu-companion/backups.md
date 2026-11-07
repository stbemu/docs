---
title: Säkerhetskopior och återställning
sidebar_label: Säkerhetskopior och återställning
---

# Säkerhetskopior och återställning {/* #backups-and-restore */}

Companions **Backups**-bibliotek lagrar slutförda StbEmu-JSON-säkerhetskopior privat på telefonen eller surfplattan. Sparade filer är tillgängliga offline. Biblioteket är separat från [Androids systemsäkerhetskopiering](system-backup.md), som skyddar Companions eget tillstånd.

![Säkerhetskopiebibliotek och skapande av en enhetssäkerhetskopia](/img/companion/backup-library.png)

## Spara och hantera filer {/* #save-and-manage-files */}

- **Create backup:** öppna **Create backup** för en ansluten parkopplad enhet, ange **Backup name** och välj **Create backup**. Vänta på **Backup saved**.
- **Import backup:** öppna **Backups** i appmenyn, välj **Import backup** och välj en StbEmu-JSON-fil. Lokal import, export eller delning kräver ingen ansluten StbEmu-enhet.
- **Export JSON:** välj åtgärden på säkerhetskopians bibliotekspost och välj sedan en extern destination.
- **Share JSON:** välj åtgärden på biblioteksposten för att öppna Androids delningspanel. Att öppna den bekräftar inte leverans till den valda appen.
- **Delete local backup:** bekräfta radering av den lokala kopian. StbEmu-källenheten ändras inte.

JSON-gränsen är **16 MiB (16,777,216 byte)**. Importerade filer valideras och behåller sina ursprungliga byte. En importerad fil märks **Source device unknown**. En integritetskontroll fastställer inte vem som skapade den. En misslyckad extern export kan lämna en ofullständig målfil medan befintliga lokala säkerhetskopior bevaras.

:::note
Säkerhetskopiefiler kan innehålla lösenord, portaldata och enhetsidentifierare. Export och delning bevarar dessa värden. Välj destination eller mottagare därefter.
:::

## Återställa en säkerhetskopia {/* #restore-a-backup */}

1. Välj **Restore backup** från en bibliotekspost eller enhetens åtgärdssida.
2. Välj **Destination device**, **Backup to restore** och ett **Restore mode** som stöds.
3. Välj **Review restore**. Kontrollera tillagda, överskrivna och borttagna profiler, **Changed settings**, fjärrkontrollsmappningar, undantagna lokala metadata samt oförenliga eller låsta fält.
4. Markera bekräftelserutan och välj **Apply restore**.

![Återställningsskärm som visar beteendet för Merge](/img/companion/restore.png)

**Merge** skriver över profiler med matchande UUID, lägger till nya profiler och behåller profiler som bara finns på målet. **Replace all** tar dessutom bort målprofiler som saknas i säkerhetskopian. Matchning använder identifierare, inte profilnamn. Båda lägen återställer flyttbara programinställningar och fjärrkontrollsmappningar. Målets lokala metadata, såsom lokala rad-ID:n, appversion och uppdateringskatalog, undantas.

:::warning
Granska varje överskrivning och borttagning före tillämpning. Replace all ersätter hela profiluppsättningen. Det är inget sätt att bara lägga till utvalda profiler. Använd [profilöverföringar](transferring-profiles.md) för selektiv kopiering.
:::

## Resultat och tillämpning av sparade inställningar {/* #results-and-applying-saved-settings */}

En utgången förhandsvisning kräver **Start a new attempt** och en ny granskning. Kontrollera [åtgärdsresultat](profiles.md#operation-results) vid osäkert resultat innan du upprepar en återställning. Återhämtning kan fråga målet även om den ursprungliga säkerhetskopian inte längre finns tillgänglig.

Sparade inställningar och effekter under körning är skilda saker. Vid ändring börjar inställningar för den virtuella fjärrkontrollen gälla vid nästa normala paus/återupptagning av StbEmu. Cachestorlek kräver omstart av StbEmu-processen och språk kan återskapa dess aktivitet. UPnP-kompatibilitetsflaggan växlar inte den aktuella UPnP-körningen, inte ens efter omstart. **Check result** försöker inte utföra dessa körningsuppdateringar igen.
