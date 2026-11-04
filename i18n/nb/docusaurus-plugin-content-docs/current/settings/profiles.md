---
id: profiles
title: Profiler
sidebar_label: Profiler
---

# STB-profiler {/* #stb-profiles */}

En **STB-profil** er et sett med alternativer for emulering av en TV-mottaker i appen. Appen oppretter én profil ved første oppstart.
Du kan redigere den eller legge til flere profiler for å laste inn ulike portaler på samme enhet.
Åpne **Innstillinger > Profiler** og velg **Legg til profil**, eller velg en eksisterende profil for å redigere den.
Oversikten grupperer alternativene under **Tilkobling**, **Avspilling og enhet** og **Administrer profil**.
Tilgjengelige handlinger avhenger av apputgaven og profilbegrensningene. Den aktive profilen kan ikke slettes;
bytt til en annen profil før du sletter den. Sletting krever bekreftelse.

Endringer i tekst- og valgfelt krever bekreftelse; brytere lagres umiddelbart. Se [Lagre endringer](/settings#saving-changes)
for valideringsfeil, motstridende endringer og lagrede endringer som krever oppdatering av den kjørende appen.

StbEmu tilbyr, lagrer eller indekserer ikke medieinnhold eller IPTV-spillelister.
Brukere må ha lovlig rett til innholdet de får tilgang til via emulatoren.

- [Profilnavn](#profile-name)
- [Portalinnstillinger](#portal-settings)
    - [Portal-URL](#portal-url)
    - [Portalspråk](#portal-language)
    - [HTTP-proxyinnstillinger](#http-proxy-settings)
        - [Bruk HTTP-proxy](#use-http-proxy)
        - [Proxyens vertsnavn](#proxy-host-name)
        - [Proxyport](#proxy-port)
    - [Portalen er intern](#portal-is-internal)
    - [Portal-URL (Portalen er intern)](#internal-portal-url)
- [STB-konfigurasjon](#stb-configuration)
    - [STB-modell](#stb-model)
    - [Fastvare](#firmware)
    - [Fastvareinnstillinger](#firmware-settings)
    - [User Agent](#user-agent)
    - [Skjermoppløsning](#screen-resolution)
    - [MAC-adresse](#mac-address)
    - [Serienummer](#serial-number)
    - [Enhets-ID](#device-id)
        - [Bruk MAC-basert enhets-ID](#use-mac-based-device-id)
        - [Send enhets-ID](#send-device-id)
        - [Tilfeldig startverdi for enhets-ID](#device-id-random-seed)
        - [Enhets-ID](#device-id-value)
        - [Egendefinert enhets-ID 2 og signatur](#custom-device-id-2-and-signature)
        - [Enhets-ID 2](#device-id-2)
        - [Signatur](#signature)
        - [Tilbakestill enhets-ID til standardverdi…](#reset-device-id-to-default-value)
    - [Maskinvareinnstillinger](#hardware-settings)
        - [Produsent](#vendor)
        - [Maskinvareversjon](#hardware-version)
- [Mediespillerinnstillinger](#media-player-settings)
    - [Mediespiller](#media-player)
    - [UDPXY-innstillinger](#udpxy-settings)
        - [Aktiver UDPXY-støtte](#enable-udxpy-support)
        - [URL til UDPXY-server](#udpxy-server-url)
        - [Overstyr strømprotokoll](#overwrite-stream-protocol)
- [Avanserte innstillinger](#advanced-settings)

### Profilnavn {/* #profile-name */}
Profilens navn. Dette kan være en hvilken som helst tekststreng som ikke er tom.

### Portalinnstillinger {/* #portal-settings */}
Alternativer som gjelder portalen.
##### Portal-URL {/* #portal-url */}
Skriv inn en absolutt **http://**- eller **https://**-adresse. Verter i lokalnettet, localhost, IPv6-adresser og internasjonale domenenavn støttes. Nettverksadresser må ikke inneholde mellomrom eller andre blanktegn.
For en intern portal godtas også en absolutt filsystembane eller en støttet absolutt **file://**-adresse. Det nye redigeringsgrensesnittet godtar ikke FTP-adresser.

##### Portalspråk {/* #portal-language */}
Portalens standardspråk, angitt som en språkkode med to bokstaver etter [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP-proxyinnstillinger {/* #http-proxy-settings */}
Innstillinger for HTTP-mellomtjener.

##### Bruk HTTP-proxy {/* #use-http-proxy */}
Aktiver dette hvis du vil bruke en HTTP-mellomtjener.

##### Proxyens vertsnavn {/* #proxy-host-name */}
Mellomtjenerens vert angis separat fra porten; standardverten er 127.0.0.1.
##### Proxyport {/* #proxy-port */}
Standard: 3128. Feltene for vert og port er bare tilgjengelige når **Bruk HTTP-proxy** er aktivert.

##### Portalen er intern {/* #portal-is-internal */}
Aktiver dette for å bruke en intern portal for MAG-enheter. En lokal portaladresse aktiverer det automatisk og gjør bryteren utilgjengelig. Bytter du til en nettverksadresse, fjernes den automatiske innstillingen for intern portal.

##### Portal-URL (Portalen er intern) {/* #internal-portal-url */}
Bruk feltet **Portal-URL** til den lokale banen eller filadressen; det finnes ikke noe eget felt for intern URL.

For å installere en portal åpner du **Innstillinger > Profiler > din profil > Portalinnstillinger**, bruker installasjonshandlingen og velger portalarkivet. Vent til det er pakket ut,
og bekreft deretter den foreslåtte lokale adressen. Installasjon av filer og godkjenning av adressen er separate trinn.
Bruk fjerningshandlingen i **Portalinnstillinger** for å fjerne en installert intern portal.

### STB-konfigurasjon {/* #stb-configuration */}
De viktigste emuleringsinnstillingene.

#### STB-modell {/* #stb-model */}
STB-modellen som skal emuleres.

#### Fastvare {/* #firmware */}
**Fastvaren** som skal emuleres; ingen faktisk fastvare installeres. Enkelte portaler krever en bestemt fastvare.
Velg i så fall denne fra listen hvis den er tilgjengelig.
De fleste støttede STB-modeller tilbyr bare **Generic**-fastvare, som vanligvis representerer den nyeste versjonen.

Tilgjengelige fastvarealternativer:
* Generic: vanligvis den nyeste tilgjengelige fastvaren.
* Custom (bare MAG 250): fastvare som kan tilpasses. Bruk dette hvis du må endre bestemte fastvareinnstillinger.

De fleste brukere bør bruke **Generic**-fastvare (valgt som standard).

#### Fastvareinnstillinger {/* #firmware-settings */}
Dette alternativet er bare tilgjengelig med **Custom**-fastvare (støttes for øyeblikket bare for MAG 250).
Konfigurer versjonene av avspillermotoren, JavaScript API og STB API, samt versjon, beskrivelse og dato for fastvareavbildningen.
Aktiver bruk av egendefinert User Agent før du redigerer den egendefinerte User Agent-strengen.

#### User Agent
User Agent-strengen for appens nettleser.

#### Skjermoppløsning {/* #screen-resolution */}
Skjermoppløsningen som skal emuleres; dette endrer ikke den faktiske skjermoppløsningen.
Velg en oppløsning portalen støtter, vanligvis **1280x720**.

#### MAC-adresse {/* #mac-address */}
MAC-adressen til den emulerte enheten. Du kan bruke MAC-adressen til en ekte MAG 250-enhet du eier,
eller 12 tilfeldige heksadesimale sifre (0–9, A–F), gruppert i par atskilt med kolon. [^wrong_mac]

De fleste portaler krever at MAC-adressen begynner med 00:1A:79.

[^wrong_mac]: På noen enheter som bare har Wi-Fi, kan den genererte MAC-adressen være **00:1A:79:00:00:00**.
    Dette betyr at appen ikke kunne registrere den riktig på grunn av Android-begrensninger.
    Erstatt delen **00:00:00** med tilfeldige heksadesimale sifre, og behold kolonene mellom parene.

#### Serienummer {/* #serial-number */}
Serienummeret til den emulerte enheten. De fleste portaler kontrollerer det ikke, så en hvilken som helst tekststreng fungerer vanligvis.

#### Enhets-ID {/* #device-id */}
Innstillinger for enhets-ID.

##### Bruk MAC-basert enhets-ID {/* #use-mac-based-device-id */}
Generer enhets-ID fra enhetens MAC-adresse. Trykk på **Tilbakestill enhets-ID til standardverdi…** etter at du har aktivert eller
deaktivert dette alternativet, for å generere ID-en på nytt.

##### Send enhets-ID {/* #send-device-id */}
Send enhets-ID når en portal ber om det. Hvis dette er deaktivert, sender appen en tom streng.

##### Tilfeldig startverdi for enhets-ID {/* #device-id-random-seed */}
Startverdien som brukes til å generere enhets-ID. Bruk samme startverdi på alle enheter som bruker samme portaladresse og
MAC-adresse. Når en endret startverdi bekreftes, genereres ID-ene automatisk på nytt.
Ikke trykk på **Tilbakestill enhets-ID til standardverdi…** hvis du vil beholde startverdien: denne handlingen fjerner den.

##### Enhets-ID {/* #device-id-value */}
Enhets-ID. Bruk den genererte verdien eller skriv inn din egen.

##### Egendefinert enhets-ID 2 og signatur {/* #custom-device-id-2-and-signature */}
Aktiver dette alternativet for å redigere Enhets-ID 2 og signaturen.

##### Enhets-ID 2 {/* #device-id-2 */}
##### Signatur {/* #signature */}
##### Tilbakestill enhets-ID til standardverdi… {/* #reset-device-id-to-default-value */}
Etter bekreftelse fjernes startverdien, og **Enhets-ID**, **Enhets-ID 2** og signaturen genereres på nytt fra profilens gjeldende verdier. Andre profilinnstillinger beholdes.

Manuell redigering av **Enhets-ID** er bare tilgjengelig når **Send enhets-ID** er aktivert og MAC-baserte ID-er er deaktivert.
Redigering av **Enhets-ID 2** og **Signatur** krever også **Egendefinert enhets-ID 2 og signatur**.
Automatisk avledede verdier kan fortsatt leses når redigering ikke er tilgjengelig.

#### Maskinvareinnstillinger {/* #hardware-settings */}
##### Produsent {/* #vendor */}
##### Maskinvareversjon {/* #hardware-version */}

Enhetsalternativene omfatter også Ministra-kompatibilitet og nettleseromdirigering. Endre dem bare når portalen krever det.

### Mediespillerinnstillinger {/* #media-player-settings */}

Innstillinger for medieavspiller for denne profilen.
#### Mediespiller {/* #media-player */}
Velg standard medieavspiller for denne profilen.

Listen omfatter automatisk valg, Exo, Androids interne avspiller og en ekstern avspiller,
samt eventuelle andre avspillere i appbygget ditt. Velg blant alternativene som vises i appen.
Den interne avspillerens kodekstøtte avhenger av Android; eksterne avspillere åpner strømmer i en annen app.

#### UDPXY-innstillinger {/* #udpxy-settings */}
##### Aktiver UDPXY-støtte {/* #enable-udxpy-support */}
Aktiver UDPXY først etter at du har angitt en gyldig HTTP/HTTPS-adresse til serveren.
##### URL til UDPXY-server {/* #udpxy-server-url */}
Du kan skrive inn adressen mens UDPXY er avslått. En tom adresse er bare tillatt mens det er avslått; en adresse som ikke er tom, må være gyldig HTTP/HTTPS.
##### Overstyr strømprotokoll {/* #overwrite-stream-protocol */}
Velg overstyring av strømmeprotokollen når UDPXY er aktivert.
### Avanserte innstillinger {/* #advanced-settings */}
Profilspesifikke kompatibilitetsalternativer omfatter CSS-justeringer, emulatorregistrering og rettelser for bakgrunnsfarge, lokale filer og AJAX,
og retur-/tastehendelser for eksterne avspillere. Alternativene for Tilbake-, Avslutt- og OK-hendelser avhenger av alternativet for hendelsen som returnerer til kanallisten.
Endre disse bare når portalen eller den eksterne avspilleren krever det.
