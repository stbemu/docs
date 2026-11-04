---
id: backup-restore
title: Säkerhetskopiering och återställning
sidebar_label: Säkerhetskopiering och återställning
---

# Säkerhetskopiering och återställning {/* #backup--restore */}

Öppna **Inställningar > Säkerhetskopiering och återställning**. Den här kategorin är bara tillgänglig när säkerhetskopiering är aktiverad för din app.

## Spara eller dela en säkerhetskopia {/* #save-or-share-a-backup */}

Välj **Spara inställningar och profiler…** och välj en plats i Androids dokumentväljare. Välj **Dela inställningar och profiler…** för att skapa en säkerhetskopia och skicka den via Androids delningsfunktion.

Om ingen dokumentväljare finns tillgänglig använder appen de åtkomliga säkerhetskopieringsmapparna och sin filbläddrare. **Bläddra bland sparade säkerhetskopior** visar säkerhetskopior som hittats i de tillgängliga mapparna. Enhetens behörigheter och tillgängliga filleverantörer kan begränsa vilka filer du kan komma åt.

## Återställa en säkerhetskopia {/* #restore-a-backup */}

1. Välj **Återställ inställningar och profiler…** och välj en säkerhetskopia, eller välj en i bläddraren för sparade säkerhetskopior.
2. Granska filnamnet, antalet profiler och de angivna effekterna av återställningen.
3. Bekräfta återställningen. Den startar inte om du avbryter väljaren eller nekar behörighet.

Återställningen uppdaterar matchande profiler, återställer appinställningar och ersätter fjärrkontrollens knappmappningar. Companion-tjänstens identitet, autentiseringsuppgifter, poster om återkallade enheter och åtgärdshistorik ingår inte i flyttbara säkerhetskopior.

:::warning
Återställningen genomför ändringar i flera steg. Om ett senare steg misslyckas kan tidigare ändringar redan vara sparade. Läs in inställningarna igen och granska den aktuella konfigurationen efter ett fel. I det här lokala återställningsflödet går det inte att ångra hela återställningen eller välja mellan att slå samman och ersätta.
:::
