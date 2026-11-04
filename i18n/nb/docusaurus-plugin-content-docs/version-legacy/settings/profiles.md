---
id: profiles
title: Profiler
sidebar_label: Profiler
---

# STB-profiler {/* #stb-profiles */}

En **STB-profil** er et sett med alternativer for emulering av en TV-mottaker i appen. Appen oppretter én profil ved første oppstart.
Du kan redigere den eller legge til flere profiler for å laste inn ulike portaler på samme enhet.
Dobbelttrykk på skjermen for å vise menyen øverst eller på siden og opprette en profil [^1].
Velg **Settings** og deretter **Profiles**, der du kan legge til eller redigere profiler.

StbEmu tilbyr, lagrer eller indekserer ikke medieinnhold eller IPTV-spillelister.
Brukere må ha lovlig rett til innholdet de får tilgang til via emulatoren.

[^1]: Hvis du bruker en 3D-fjernkontroll eller mus, flytter du pekeren, klikker på skjermen og åpner appmenyen øverst.

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
Profilens navn. Dette kan være en hvilken som helst tekststreng som ikke er tom.

### Portal settings
Alternativer som gjelder portalen.
##### Portal URL
Portalens adresse. Den må begynne med en protokoll (**http://**, **https://**, **ftp://** osv.).

##### Portal language
Portalens standardspråk, angitt som en språkkode med to bokstaver etter [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Innstillinger for HTTP-mellomtjener.

##### Use HTTP proxy
Aktiver dette hvis du vil bruke en HTTP-mellomtjener.

##### Proxy host name
##### Proxy port

##### Portal is internal
Aktiver dette alternativet for å bruke en intern portal for MAG-enheter.

##### Internal portal URL

### STB configuration
De viktigste emuleringsinnstillingene.

#### STB Model
STB-modellen som skal emuleres.

#### Firmware
**Fastvaren** som skal emuleres; ingen faktisk fastvare installeres. Enkelte portaler krever en bestemt fastvare.
Velg i så fall denne fra listen hvis den er tilgjengelig.
De fleste støttede STB-modeller tilbyr bare **Generic**-fastvare, som vanligvis representerer den nyeste versjonen.

Tilgjengelige fastvarealternativer:
* Generic: vanligvis den nyeste tilgjengelige fastvaren.
* Custom (bare MAG 250): fastvare som kan tilpasses. Bruk dette hvis du må endre bestemte fastvareinnstillinger.

De fleste brukere bør bruke **Generic**-fastvare (valgt som standard).

#### Firmware settings
Dette alternativet er bare tilgjengelig med **Custom**-fastvare (støttes for øyeblikket bare for MAG 250).
Bruk dette til å konfigurere bestemte fastvareinnstillinger, som versjonen eller en egendefinert User Agent-streng.

#### User Agent
User Agent-strengen for appens nettleser.

#### Screen resolution
Skjermoppløsningen som skal emuleres; dette endrer ikke den faktiske skjermoppløsningen.
Velg en oppløsning portalen støtter, vanligvis **1280x720**.

#### MAC address
MAC-adressen til den emulerte enheten. Du kan bruke MAC-adressen til en ekte MAG 250-enhet du eier,
eller 12 tilfeldige heksadesimale sifre (0–9, A–F), gruppert i par atskilt med kolon. [^wrong_mac]

De fleste portaler krever at MAC-adressen begynner med 00:1A:79.

[^wrong_mac]: På noen enheter som bare har Wi-Fi, kan den genererte MAC-adressen være **00:1A:79:00:00:00**.
    Dette betyr at appen ikke kunne registrere den riktig på grunn av Android-begrensninger.
    Erstatt delen **00:00:00** med tilfeldige heksadesimale sifre, og behold kolonene mellom parene.

#### Serial number
Serienummeret til den emulerte enheten. De fleste portaler kontrollerer det ikke, så en hvilken som helst tekststreng fungerer vanligvis.

#### Device ID
Innstillinger for enhets-ID.

##### Use MAC-based device ID
Generer enhets-ID fra enhetens MAC-adresse. Trykk på **Reset device ID** etter at du har aktivert eller
deaktivert dette alternativet, for å generere ID-en på nytt.

##### Send Device ID
Send enhets-ID når en portal ber om det. Hvis dette er deaktivert, sender appen en tom streng.

##### Device ID random seed
Startverdien som brukes til å generere enhets-ID. Bruk samme startverdi på alle enheter som bruker samme portaladresse og
MAC-adresse. Trykk på **Reset device ID** etter at du har endret denne verdien.

##### Device ID value
Enhets-ID. Bruk den genererte verdien eller skriv inn din egen.

##### Custom device ID 2 and signature
Aktiver dette alternativet for å redigere Device ID 2 og signaturen.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Generer **Device ID**, **Device ID 2** og signaturen på nytt.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
IP-adressen som sendes til en portal på forespørsel. Dette er en emulert adresse, ikke enhetens faktiske IP-adresse.
De fleste portaler bruker ikke denne informasjonen, så du trenger vanligvis ikke endre den.
### Media player settings

Innstillinger for medieavspiller for denne profilen.
#### Media player
Velg standard medieavspiller for denne profilen.

| Avspiller | Beskrivelse | Kommentar |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo             | [GitHub](https://github.com/google/ExoPlayer)                                                                                                        | Standardavspilleren, anbefalt for de fleste enheter |
| VLC             | [Nettsted](https://www.videolan.org)                                                                                                                 |                                                         |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk             | [GitHub](https://github.com/bilibili/ijkplayer)                                                                                                      | Støtter ikke undertekster |
| Internal player | Bruker Android-avspilleren. Hvilke kodeker som støttes, avhenger av Android-versjonen på enheten din. | Støtter ikke undertekster |
| External player | Bruk nesten en hvilken som helst ekstern avspiller. Integrering med emulatoren er ikke tilgjengelig; mediestrømmer åpnes i en annen app. |                                                         |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
