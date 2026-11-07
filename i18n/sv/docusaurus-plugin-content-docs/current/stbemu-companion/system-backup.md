---
title: Androids systemsäkerhetskopiering
sidebar_label: Androids systemsäkerhetskopiering
---

# Androids systemsäkerhetskopiering {/* #android-system-backup */}

Öppna **Settings > Backups > System backup**. Androids systemsäkerhetskopiering kan återställa Companions inställningar, sparade enheter och namn, verifierat förtroende och fortfarande giltiga parkopplingsuppgifter efter en lyckad Android-återställning. Detta är separat från att återställa en [StbEmu-JSON-säkerhetskopia](backups.md) till en parkopplad enhet.

## Inkludera lokala arkiv {/* #include-local-archives */}

**Include local archives** är aktiverat som standard. Det tar med kvalificerade slutförda StbEmu-säkerhetskopior från det lokala biblioteket i framtida systemsäkerhetskopior. Om det stängs av behålls lokala filer och Companions inställningar/enheter, men arkiv utesluts från framtida säkerhetskopior. Äldre molninnehåll raderas inte.

Sidan visar en uppskattning av vald storlek. Använd **Refresh estimate** för att mäta igen, **Open Android settings** för att kontrollera Androids säkerhetskopieringskonfiguration eller **Open archive library / manual export** för att exportera filer själv.

## Tillgänglighet och gränser {/* #availability-and-limits */}

Systemsäkerhetskopiering kräver **Android 9 eller senare**, även om Companion självt stöder Android 8. Krypterad molnsäkerhetskopiering kräver också ett konto som stöds, säkert skärmlås och Androids kryptering på klientsidan. Android styr schemaläggning, vilka överföringsmetoder som får användas och återställningens tillgänglighet.

Den nominella molnkvoten är **25 MiB**. Den faktiska tillgängliga kvoten kan vara lägre. Gränsen på **256 MiB** mellan enheter är en programgräns, inget löfte om överföringskapacitet. Om hela urvalet är för stort, uteslut lokala arkiv eller exportera dem manuellt. Companion säkerhetskopierar inte tyst bara en del av urvalet.

En uppskattning eller ett lokalt förberedelsemeddelande bekräftar inte att Android lagrat en molnsäkerhetskopia. En otillgänglig uppskattning är inte en säkerhetskopia med storlek noll. Om sidan rapporterar att säkerhetskopiering är avstängd eller inte stöds, exportera arkiv manuellt i stället för att anta att data är skyddade.

## Efter att Android återställt Companion {/* #after-android-restores-companion */}

Återställda enheter måste verifieras innan de visas som anslutna. Fortfarande godkända parkopplingsuppgifter kan ansluta igen utan ny parkoppling, men återställning kan inte ångra återkallad åtkomst i StbEmu. Återställda kopior delar samma behörigheter. Återkallande påverkar även dessa kopior.

Biblioteket listar slutförda arkivfiler som faktiskt återställdes. Enbart metadata återskapar inte saknade filer. En oavslutad åtgärd skickas inte automatiskt igen. Anslut igen och kontrollera [åtgärdsresultat](profiles.md#operation-results) när de finns tillgängliga.
