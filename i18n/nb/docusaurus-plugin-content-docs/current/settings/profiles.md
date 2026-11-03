---
id: profiles
title: Profiler
sidebar_label: Profiler
---

# STB-profiler {/* #stb-profiles */}

En **STB-profil** er et sett med alternativer for emulering av en TV-mottaker i appen. Appen oppretter én profil ved første oppstart.
Du kan redigere den eller legge til flere profiler for å laste inn ulike portaler på samme enhet.
Åpne **Settings > Profiles** og velg **Add profile**, eller velg en eksisterende profil for å redigere den.
Oversikten grupperer alternativene under **Connection**, **Playback & device** og **Manage profile**.
Tilgjengelige handlinger avhenger av apputgaven og profilbegrensningene. Den aktive profilen kan ikke slettes;
bytt til en annen profil før du sletter den. Sletting krever bekreftelse.

Endringer i tekst- og valgfelt krever bekreftelse; brytere lagres umiddelbart. Se [Lagre endringer](/settings#saving-changes)
for valideringsfeil, motstridende endringer og lagrede endringer som krever oppdatering av den kjørende appen.

StbEmu tilbyr, lagrer eller indekserer ikke medieinnhold eller IPTV-spillelister.
Brukere må ha lovlig rett til innholdet de får tilgang til via emulatoren.

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
Skriv inn en absolutt **http://**- eller **https://**-adresse. Verter i lokalnettet, localhost, IPv6-adresser og internasjonale domenenavn støttes. Nettverksadresser må ikke inneholde mellomrom eller andre blanktegn.
For en intern portal godtas også en absolutt filsystembane eller en støttet absolutt **file://**-adresse. Det nye redigeringsgrensesnittet godtar ikke FTP-adresser.

##### Portal language
Portalens standardspråk, angitt som en språkkode med to bokstaver etter [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Innstillinger for HTTP-mellomtjener.

##### Use HTTP proxy
Aktiver dette hvis du vil bruke en HTTP-mellomtjener.

##### Proxy host name
Mellomtjenerens vert angis separat fra porten; standardverten er 127.0.0.1.
##### Proxy port
Standard: 3128. Feltene for vert og port er bare tilgjengelige når **Use HTTP proxy** er aktivert.

##### Portal is internal
Aktiver dette for å bruke en intern portal for MAG-enheter. En lokal portaladresse aktiverer det automatisk og gjør bryteren utilgjengelig. Bytter du til en nettverksadresse, fjernes den automatiske innstillingen for intern portal.

##### Internal portal URL
Bruk feltet **Portal URL** til den lokale banen eller filadressen; det finnes ikke noe eget felt for intern URL.

For å installere en portal åpner du **Settings > Profiles > din profil > Portal settings**, bruker installasjonshandlingen og velger portalarkivet. Vent til det er pakket ut,
og bekreft deretter den foreslåtte lokale adressen. Installasjon av filer og godkjenning av adressen er separate trinn.
Bruk fjerningshandlingen i **Portal settings** for å fjerne en installert intern portal.

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
Konfigurer versjonene av avspillermotoren, JavaScript API og STB API, samt versjon, beskrivelse og dato for fastvareavbildningen.
Aktiver bruk av egendefinert User Agent før du redigerer den egendefinerte User Agent-strengen.

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
MAC-adresse. Når en endret startverdi bekreftes, genereres ID-ene automatisk på nytt.
Ikke trykk på Reset hvis du vil beholde startverdien: Reset fjerner den.

##### Device ID value
Enhets-ID. Bruk den genererte verdien eller skriv inn din egen.

##### Custom device ID 2 and signature
Aktiver dette alternativet for å redigere Device ID 2 og signaturen.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Etter bekreftelse fjernes startverdien, og **Device ID**, **Device ID 2** og signaturen genereres på nytt fra profilens gjeldende verdier. Andre profilinnstillinger beholdes.

Manuell redigering av **Device ID** er bare tilgjengelig når **Send Device ID** er aktivert og MAC-baserte ID-er er deaktivert.
Redigering av **Device ID 2** og **Signature** krever også **Custom device ID 2 and signature**.
Automatisk avledede verdier kan fortsatt leses når redigering ikke er tilgjengelig.

#### Hardware settings
##### Vendor
##### Hardware version

Enhetsalternativene omfatter også Ministra-kompatibilitet og nettleseromdirigering. Endre dem bare når portalen krever det.

### Media player settings

Innstillinger for medieavspiller for denne profilen.
#### Media player
Velg standard medieavspiller for denne profilen.

Listen omfatter automatisk valg, Exo, Androids interne avspiller og en ekstern avspiller,
samt eventuelle andre avspillere i appbygget ditt. Velg blant alternativene som vises i appen.
Den interne avspillerens kodekstøtte avhenger av Android; eksterne avspillere åpner strømmer i en annen app.

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
Aktiver UDPXY først etter at du har angitt en gyldig HTTP/HTTPS-adresse til serveren.
##### UDPXY server URL
Du kan skrive inn adressen mens UDPXY er avslått. En tom adresse er bare tillatt mens det er avslått; en adresse som ikke er tom, må være gyldig HTTP/HTTPS.
##### Overwrite stream protocol
Velg overstyring av strømmeprotokollen når UDPXY er aktivert.
### Advanced settings
Profilspesifikke kompatibilitetsalternativer omfatter CSS-justeringer, emulatorregistrering og rettelser for bakgrunnsfarge, lokale filer og AJAX,
og retur-/tastehendelser for eksterne avspillere. Alternativene for Back-, Exit- og OK-hendelser avhenger av alternativet for hendelsen som returnerer til kanallisten.
Endre disse bare når portalen eller den eksterne avspilleren krever det.
