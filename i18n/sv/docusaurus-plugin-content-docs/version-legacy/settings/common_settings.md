---
id: common-settings
title: Allmänna inställningar
sidebar_label: Allmänna inställningar
---

# Common settings

Dessa inställningar gäller appversion 0.8 och senare.

- [Settings](#settings)
    - [App Language](#app-language)
    - [Hide navigation bar](#hide-navigation-bar)
    - [Always show overlay buttons](#always-show-overlay-buttons)
    - [Screen configuration](#screen-configuration)
    - [Keyboard configuration](#keyboard-configuration)
- [Boot options](#boot-options)
    - [Auto start on device boot](#auto-start-on-device-boot)
- [Android TV](#android-tv)
    - [Enable recommendations](#enable-recommendations)
- [Browser settings](#browser-settings)
    - [Scaling method](#scaling-method)
- [Network settings](#network-settings)
    - [Enable network cache](#enable-network-cache)
    - [Cache size](#cache-size)

### Settings
#### App Language
Ändra appens språk. Som standard använder appen Androids systemspråk om det stöds.

#### Hide navigation bar
Dölj navigeringsfältet och dess knappar (fungerar kanske inte på vissa enheter). Om alternativet är aktiverat och du använder
en pekskärm kan du behöva trycka två gånger för att visa dolda skärmknappar.
Det första trycket visar navigeringsfältet; detta är en Android-begränsning.

#### Always show overlay buttons
Visa knappar på skärmen. Alternativet bör vanligtvis förbli aktiverat. På STB:er kan du inaktivera det om knapparna
visas när du trycker på en knapp på fjärrkontrollen.

#### Screen configuration
Aktivera eller inaktivera skärmrotation när enhetens orientering ändras.

#### Keyboard configuration
Fjärrkontrollsinställningar (inte tillgängliga i den kostnadsfria versionen).

Konfigurera fjärrkontrollsservern för att styra en portal med en programvarubaserad fjärrkontroll för MAG 250, AuraHD eller liknande enheter.

#### Boot options
##### Auto start on device boot

Starta appen när enheten startar. Detta fungerar bara om appen är installerad i det interna lagringsutrymmet.
Om enheten har en aktiverad låsskärm (till exempel en telefon eller surfplatta) startar appen efter att du har låst upp den.

#### Stop in the background
Pausa appen när du byter till en annan app.

#### Android TV
Alternativ som är specifika för Android TV.

##### Enable recommendations

Aktivera rekommendationskort på Androids startskärm. Appen visar ett kort för varje konfigurerad profil
så att du snabbt kan öppna den.

#### Browser settings
Webbläsarinställningar.

##### Scaling method
Välj en annan skalningsmetod för webbläsaren om portalen visas för stor eller för liten.
På de flesta enheter behöver inställningen inte ändras. Ett undantag är en enhet vars skärmupplösning är lägre
än portalens upplösning, som vanligtvis är 1280x720.

#### Network settings
Nätverksinställningar.

##### Enable network cache
Mellanlagra nätverksförfrågningar för att i de flesta fall snabba upp portalens inläsning. Inaktivera alternativet om du ofta
får autentiseringsfel eller andra nätverksproblem.

##### Cache size
Nätverkscachens storlek. Standard: 20 MB.
