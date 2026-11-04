---
id: profiles
title: Profiler
sidebar_label: Profiler
---

# STB-profiler {/* #stb-profiles */}

En **STB-profil** är en uppsättning alternativ för att emulera en digitalbox i appen. Appen skapar en profil vid första starten.
Du kan redigera den eller lägga till fler profiler för att läsa in olika portaler på samma enhet.
Skapa en profil genom att dubbeltrycka på skärmen för att visa menyn längst upp eller på sidan [^1].
Välj **Settings** och sedan **Profiles**, där du kan lägga till eller redigera profiler.

StbEmu tillhandahåller, lagrar eller indexerar inga medier eller IPTV-spellistor.
Användare måste ha laglig rätt till innehållet som de öppnar via emulatorn.

[^1]: Om du använder en 3D-fjärrkontroll eller en mus flyttar du pekaren, klickar på skärmen och öppnar appmenyn längst upp.

- [Profile name](#profile-name)
- [Portal settings](#portal-settings)
    - [Portal URL](#portal-url)
    - [Portal language](#portal-language)
    - [HTTP Proxy settings](#http-proxy-settings)
        - [Use HTTP proxy](#use-http-proxy)
        - [Proxy host name](#proxy-host-name)
        - [Proxy port](#proxy-port)
    - [Portal is internal](#portal-is-internal)
    - [Internal portal URL](#internal-portal-url)
- [STB configuration](#stb-configuration)
    - [STB Model](#stb-model)
    - [Firmware](#firmware)
    - [Firmware settings](#firmware-settings)
    - [User Agent](#user-agent)
    - [Screen resolution](#screen-resolution)
    - [MAC address](#mac-address)
    - [Serial number](#serial-number)
    - [Device ID](#device-id)
        - [Use MAC-based device ID](#use-mac-based-device-id)
        - [Send Device ID](#send-device-id)
        - [Device ID random seed](#device-id-random-seed)
        - [Device ID](#device-id-value)
        - [Custom device ID 2 and signature](#custom-device-id-2-and-signature)
        - [Device ID 2](#device-id-2)
        - [Signature](#signature)
        - [Reset device ID to default value](#reset-device-id-to-default-value)
    - [Hardware settings](#hardware-settings)
        - [Vendor](#vendor)
        - [Hardware version](#hardware-version)
    - [IP address](#ip-address)
- [Media player settings](#media-player-settings)
    - [Media player](#media-player)
    - [UDPXY settings](#udpxy-settings)
        - [Enable UDPXY support](#enable-udxpy-support)
        - [UDPXY server URL](#udpxy-server-url)
        - [Overwrite stream protocol](#overwrite-stream-protocol)
- [Advanced settings](#advanced-settings)

### Profile name
Profilens namn. Det kan vara vilken icke-tom sträng som helst.

### Portal settings
Alternativ som är specifika för portalen.
##### Portal URL
Portalens URL. Den måste börja med ett schema (**http://**, **https://**, **ftp://** osv.).

##### Portal language
Portalens standardspråk, angivet som en tvåbokstavskod enligt [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Inställningar för HTTP-proxy.

##### Use HTTP proxy
Aktivera om du vill använda en HTTP-proxy.

##### Proxy host name
##### Proxy port

##### Portal is internal
Aktivera det här alternativet för att använda en intern portal för MAG-enheter.

##### Internal portal URL

### STB configuration
De huvudsakliga emuleringsinställningarna.

#### STB Model
STB-modellen som ska emuleras.

#### Firmware
Den **firmware** som ska emuleras; ingen faktisk firmware installeras. Vissa portaler kräver specifik firmware.
Välj i så fall denna i listan om den är tillgänglig.
De flesta STB-modeller som stöds erbjuder bara **Generic**-firmware, som vanligtvis motsvarar den senaste versionen.

Tillgängliga firmwarealternativ:
* Generic: vanligtvis den senaste tillgängliga firmwaren.
* Custom (endast MAG 250): anpassningsbar firmware. Använd detta om du behöver ändra specifika firmwareinställningar.

De flesta användare bör använda **Generic**-firmware (valt som standard).

#### Firmware settings
Det här alternativet är bara tillgängligt med **Custom**-firmware (stöds för närvarande endast för MAG 250).
Använd det för att konfigurera specifika firmwareinställningar, till exempel versionen eller en anpassad User Agent-sträng.

#### User Agent
User Agent-strängen för appens webbläsare.

#### Screen resolution
Skärmupplösningen som ska emuleras; detta ändrar inte skärmens faktiska upplösning.
Välj en upplösning som portalen stöder, vanligtvis **1280x720**.

#### MAC address
MAC-adressen för den emulerade enheten. Du kan använda MAC-adressen för en riktig MAG 250-enhet som du äger,
eller 12 slumpmässiga hexadecimala tecken (0–9, A–F), grupperade i par avskilda med kolon. [^wrong_mac]

De flesta portaler kräver att MAC-adressen börjar med 00:1A:79.

[^wrong_mac]: På vissa enheter med enbart Wi-Fi kan den genererade MAC-adressen vara **00:1A:79:00:00:00**.
    Det betyder att appen inte kunde identifiera den korrekt på grund av Android-begränsningar.
    Ersätt delen **00:00:00** med slumpmässiga hexadecimala tecken och behåll kolonen mellan paren.

#### Serial number
Serienumret för den emulerade enheten. De flesta portaler kontrollerar det inte, så vilken textsträng som helst brukar fungera.

#### Device ID
Inställningar för enhets-ID.

##### Use MAC-based device ID
Generera enhets-ID:t från enhetens MAC-adress. Tryck på **Reset device ID** efter att du har aktiverat eller
inaktiverat det här alternativet för att generera ID:t på nytt.

##### Send Device ID
Skicka enhets-ID:t när en portal begär det. Om alternativet är inaktiverat skickar appen en tom sträng.

##### Device ID random seed
Startvärdet som används för att generera enhets-ID:t. Använd samma startvärde på alla enheter som använder samma portal-URL och
MAC-adress. Tryck på **Reset device ID** efter att du har ändrat värdet.

##### Device ID value
Enhets-ID:t. Använd det genererade värdet eller ange ett eget.

##### Custom device ID 2 and signature
Aktivera det här alternativet för att redigera Device ID 2 och signaturen.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Generera **Device ID**, **Device ID 2** och signaturen på nytt.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
IP-adressen som skickas till en portal på begäran. Detta är en emulerad adress, inte enhetens faktiska IP-adress.
De flesta portaler använder inte denna information, så du behöver vanligtvis inte ändra den.
### Media player settings

Mediespelarinställningar för den här profilen.
#### Media player
Välj standardmediespelare för den här profilen.

| Spelare | Beskrivning | Kommentar |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo | [GitHub](https://github.com/google/ExoPlayer) | Standardspelaren, rekommenderas för de flesta enheter |
| VLC | [Webbplats](https://www.videolan.org) | |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk | [GitHub](https://github.com/bilibili/ijkplayer) | Stöder inte undertexter |
| Internal player | Använder Androids spelare. Vilka kodekar som stöds beror på enhetens Android-version. | Stöder inte undertexter |
| External player | Använd nästan vilken extern spelare som helst. Integrering med emulatorn är inte tillgänglig; medieströmmar öppnas i en annan app. | |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
