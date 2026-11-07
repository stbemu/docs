---
id: profiles
title: Profielen
sidebar_label: Profielen
---

# STB-profielen {/* #stb-profiles */}

Een **STB-profiel** is een verzameling opties voor het emuleren van een settopbox in de app. Bij de eerste start maakt de app één profiel aan.
U kunt dit profiel bewerken of meer profielen toevoegen om verschillende portalen op hetzelfde apparaat te laden.
Tik tweemaal op het scherm om het menu aan de boven- of zijkant weer te geven en een profiel aan te maken [^1].
Selecteer **Settings** en vervolgens **Profiles**, waar u profielen kunt toevoegen of bewerken.

StbEmu biedt, host of indexeert geen media of IPTV-afspeellijsten.
Gebruikers moeten een wettelijk recht hebben op de inhoud die zij via de emulator openen.

[^1]: Als u een 3D-afstandsbediening of een muis gebruikt, beweegt u de aanwijzer, klikt u op het scherm en opent u het appmenu bovenaan.

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
De profielnaam. Dit mag elke niet-lege tekenreeks zijn.

### Portal settings
Opties die specifiek zijn voor het portaal.
##### Portal URL
De URL van het portaal. Deze moet beginnen met een schema (**http://**, **https://**, **ftp://**, enz.).

##### Portal language
De standaardtaal van het portaal, opgegeven als een [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)-taalcode van twee letters.

#### HTTP Proxy settings
Instellingen voor de HTTP-proxy.

##### Use HTTP proxy
Schakel dit in als u een HTTP-proxy wilt gebruiken.

##### Proxy host name
##### Proxy port

##### Portal is internal
Schakel deze optie in om een intern portaal voor MAG-apparaten te gebruiken.

##### Internal portal URL

### STB configuration
De belangrijkste emulatie-instellingen.

#### STB Model
Het te emuleren STB-model.

#### Firmware
De te emuleren **firmware**; er wordt geen echte firmware geïnstalleerd. Sommige portalen vereisen specifieke firmware.
Selecteer die in dat geval in de lijst als deze beschikbaar is.
De meeste ondersteunde STB-modellen bieden alleen **Generic**-firmware, die doorgaans de nieuwste versie vertegenwoordigt.

Beschikbare firmwareopties:
* Generic: doorgaans de nieuwste beschikbare firmware.
* Custom (alleen MAG 250): aanpasbare firmware. Gebruik dit als u specifieke firmware-instellingen moet wijzigen.

De meeste gebruikers kunnen het beste **Generic**-firmware gebruiken (standaard geselecteerd).

#### Firmware settings
Deze optie is alleen beschikbaar met **Custom**-firmware (momenteel alleen ondersteund voor MAG 250).
Gebruik dit om specifieke firmware-instellingen te configureren, zoals de versie of een aangepaste User Agent-tekenreeks.

#### User Agent
De User Agent-tekenreeks voor de webbrowser van de app.

#### Screen resolution
De te emuleren schermresolutie; dit wijzigt de werkelijke schermresolutie niet.
Kies een resolutie die uw portaal ondersteunt, doorgaans **1280x720**.

#### MAC address
Het MAC-adres van het geëmuleerde apparaat. U kunt het MAC-adres gebruiken van een echt MAG 250-apparaat dat u bezit,
of 12 willekeurige hexadecimale tekens (0–9, A–F), gegroepeerd in paren met dubbele punten ertussen. [^wrong_mac]

De meeste portalen vereisen dat het MAC-adres begint met 00:1A:79.

[^wrong_mac]: Op sommige apparaten met alleen wifi kan het gegenereerde MAC-adres **00:1A:79:00:00:00** zijn.
    Dit betekent dat de app het adres niet correct kon detecteren vanwege Android-beperkingen.
    Vervang het gedeelte **00:00:00** door willekeurige hexadecimale tekens en behoud de dubbele punten tussen de paren.

#### Serial number
Het serienummer van het geëmuleerde apparaat. De meeste portalen controleren dit niet, dus elke tekst werkt doorgaans.

#### Device ID
Instellingen voor de apparaat-ID.

##### Use MAC-based device ID
Genereer de apparaat-ID op basis van het MAC-adres van het apparaat. Druk op **Reset device ID** nadat u deze optie hebt ingeschakeld of
uitgeschakeld om de ID opnieuw te genereren.

##### Send Device ID
Verzend de apparaat-ID wanneer een portaal daarom vraagt. Als dit is uitgeschakeld, verzendt de app een lege tekenreeks.

##### Device ID random seed
De seed die wordt gebruikt om de apparaat-ID te genereren. Gebruik dezelfde seed op alle apparaten die dezelfde portaal-URL en
MAC-adres gebruiken. Druk op **Reset device ID** nadat u deze waarde hebt gewijzigd.

##### Device ID value
De apparaat-ID. Gebruik de gegenereerde waarde of voer uw eigen waarde in.

##### Custom device ID 2 and signature
Schakel deze optie in om Device ID 2 en de handtekening te bewerken.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Genereer **Device ID**, **Device ID 2** en de handtekening opnieuw.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
Het IP-adres dat op verzoek naar een portaal wordt verzonden. Dit is een geëmuleerd adres, niet het werkelijke IP-adres van het apparaat.
De meeste portalen gebruiken deze informatie niet, dus u hoeft deze doorgaans niet te wijzigen.
### Media player settings

Mediaspelerinstellingen voor dit profiel.
#### Media player
Selecteer de standaardmediaspeler voor dit profiel.

| Speler | Beschrijving | Opmerking |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo | [GitHub](https://github.com/google/ExoPlayer) | De standaardspeler, aanbevolen voor de meeste apparaten |
| VLC | [Website](https://www.videolan.org) | |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk | [GitHub](https://github.com/bilibili/ijkplayer) | Ondersteunt geen ondertiteling |
| Internal player | Gebruikt de Android-speler. Ondersteunde codecs zijn afhankelijk van de Android-versie van uw apparaat. | Ondersteunt geen ondertiteling |
| External player | Gebruik vrijwel elke externe speler. Integratie met de emulator is niet beschikbaar; mediastreams worden in een andere app geopend. | |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
