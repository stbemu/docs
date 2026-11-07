---
id: common-settings
title: Appinställningar
sidebar_label: Appinställningar
---

# Appinställningar {/* #application-settings */}

Alternativ som gäller hela appen är grupperade i följande kategorier i [Inställningar](/settings). Profilspecifika alternativ finns under [Profiler](/settings/profiles).

## Utseende och reglage {/* #appearance--controls */}

| Alternativ | Funktion |
|--------|---------|
| Appens språk | Använd ett språk som appen stöder eller Androids standardspråk. |
| Dölj navigeringsfält | Dölj Androids navigeringsknappar där det stöds. På en pekskärm kan det första trycket visa navigeringen och ett andra tryck behövas för att visa appens kontroller. |
| Visa alltid överlagrade knappar | Visa kontroller på skärmen. Du kan stänga av detta på en tv-box om fjärrkontrollens knapptryckningar visar oönskade knappar. |
| Dölj reglage efter… (ms) | Ange tidsgränsen för skärmkontrollerna i millisekunder. Standard: 5000 (5 sekunder). |
| Skärmorientering | Välj hur appens skärmorientering ska fungera. |
| Tangentbordstyp | Välj vilket tangentbord appen ska använda. |
| Inmatningsmetod för skärmtangentbord | Välj hur inmatning hanteras av skärmtangentbordet. |

## Uppspelning och beteende {/* #playback--behavior */}

| Alternativ | Funktion |
|--------|---------|
| Stoppa i bakgrunden | Pausa uppspelningen när du byter till en annan app. Kontrollen är inte tillgänglig när automatiskt bild-i-bild-läge är aktiverat. |
| Byt till PiP-läge vid minimering | Använd bild-i-bild när du lämnar appen, där Android och enheten stöder det. |
| Starta automatiskt när enheten startas | Starta appen efter att enheten har startats. Appen måste vara installerad i det interna lagringsutrymmet; enhetens låsskärm kan fördröja starten tills den låses upp. |
| Använd alltid systemets volymnivå | Använd systemvolymen i stället för en separat appvolym. |
| Aktivera rekommendationer | Visa rekommendationskort för profiler på Android TV-startskärmar som stöds. |
| Skapa mediesession när uppspelning börjar | Aktivera integrering med Androids mediesessioner. |

## Nätverk {/* #network */}

**Skalningsmetod** ändrar webbläsarens skalning om en portal visas för stor eller för liten. På de flesta enheter kan standardvärdet behållas; en skärm med låg upplösning kan behöva en annan metod.

**Aktivera nätverkscache** mellanlagrar nätverksförfrågningar för att förbättra inläsningen av portalen. Inaktivera det om du får upprepade autentiseringsfel eller andra nätverksproblem.

**Cachestorlek (kbyte)** anges i KB. Standardvärdet är **20480 KB (20 MB)**. Starta om appen när du uppmanas att göra det för att tillämpa en ändrad cachestorlek.

## Säkerhet {/* #security */}

Aktivera lösenordsskydd för inställningarna och ange ett lösenord. Skyddade inställningar kräver autentisering. Lösenordsredigeraren behåller inte lösenordet när skärmen återskapas; ange det igen vid behov.

## Äldre fjärrstyrning {/* #legacy-remote */}

Den här kategorin konfigurerar den äldre tjänsten för programvarubaserade fjärrkontroller för MAG 250, AuraHD och liknande fjärrkontrollsappar. Den är separat från [Companion](/settings/companion) och [mappning av fysiska knappar](/settings/key-maps).

Aktivera tjänsten och ange dess enhetsnamn och lösenord. Enhetsnamnet och lösenordet får innehålla upp till 32 tecken vardera. Den här kategorin är bara tillgänglig i apputgåvor där den är aktiverad.
