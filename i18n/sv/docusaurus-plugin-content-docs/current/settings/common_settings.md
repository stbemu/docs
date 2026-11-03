---
id: common-settings
title: Appinställningar
sidebar_label: Appinställningar
---

# Appinställningar {/* #application-settings */}

Alternativ som gäller hela appen är grupperade i följande kategorier i [Settings](/settings). Profilspecifika alternativ finns under [Profiles](/settings/profiles).

## Appearance & controls

| Alternativ | Funktion |
|--------|---------|
| App language | Använd ett språk som appen stöder eller Androids standardspråk. |
| Hide navigation bar | Dölj Androids navigeringsknappar där det stöds. På en pekskärm kan det första trycket visa navigeringen och ett andra tryck behövas för att visa appens kontroller. |
| Always show overlay buttons | Visa kontroller på skärmen. Du kan stänga av detta på en tv-box om fjärrkontrollens knapptryckningar visar oönskade knappar. |
| Hide controls after… (ms) | Ange tidsgränsen för skärmkontrollerna i millisekunder. Standard: 5000 (5 sekunder). |
| Screen orientation | Välj hur appens skärmorientering ska fungera. |
| Keyboard type | Välj vilket tangentbord appen ska använda. |
| Software keyboard input method | Välj hur inmatning hanteras av skärmtangentbordet. |

## Playback & behavior

| Alternativ | Funktion |
|--------|---------|
| Pause media in background | Pausa uppspelningen när du byter till en annan app. Kontrollen är inte tillgänglig när automatiskt bild-i-bild-läge är aktiverat. |
| Picture-in-picture | Använd bild-i-bild när du lämnar appen, där Android och enheten stöder det. |
| Auto start on device boot | Starta appen efter att enheten har startats. Appen måste vara installerad i det interna lagringsutrymmet; enhetens låsskärm kan fördröja starten tills den låses upp. |
| Always use system volume level | Använd systemvolymen i stället för en separat appvolym. |
| Enable recommendations | Visa rekommendationskort för profiler på Android TV-startskärmar som stöds. |
| Media sessions | Aktivera integrering med Androids mediesessioner. |

## Network

**Scaling method** ändrar webbläsarens skalning om en portal visas för stor eller för liten. På de flesta enheter kan standardvärdet behållas; en skärm med låg upplösning kan behöva en annan metod.

**Enable network cache** mellanlagrar nätverksförfrågningar för att förbättra inläsningen av portalen. Inaktivera det om du får upprepade autentiseringsfel eller andra nätverksproblem.

**Cache size** anges i KB. Standardvärdet är **20480 KB (20 MB)**. Starta om appen när du uppmanas att göra det för att tillämpa en ändrad cachestorlek.

## Security

Aktivera lösenordsskydd för inställningarna och ange ett lösenord. Skyddade inställningar kräver autentisering. Lösenordsredigeraren behåller inte lösenordet när skärmen återskapas; ange det igen vid behov.

## Legacy remote

Den här kategorin konfigurerar den äldre tjänsten för programvarubaserade fjärrkontroller för MAG 250, AuraHD och liknande fjärrkontrollsappar. Den är separat från [Companion](/settings/companion) och [mappning av fysiska knappar](/settings/key-maps).

Aktivera tjänsten och ange dess enhetsnamn och lösenord. Enhetsnamnet och lösenordet får innehålla upp till 32 tecken vardera. Den här kategorin är bara tillgänglig i apputgåvor där den är aktiverad.
