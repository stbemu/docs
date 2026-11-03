---
id: profiles
title: Profielen
sidebar_label: Profielen
---

# STB-profielen {/* #stb-profiles */}

Een **STB-profiel** is een verzameling opties voor het emuleren van een settopbox in de app. Bij de eerste start maakt de app één profiel aan.
U kunt dit profiel bewerken of meer profielen toevoegen om verschillende portalen op hetzelfde apparaat te laden.
Open **Settings > Profiles** en kies **Add profile**, of selecteer een bestaand profiel om het te bewerken.
Het overzicht groepeert opties onder **Connection**, **Playback & device** en **Manage profile**.
De beschikbare acties zijn afhankelijk van uw appeditie en profielbeperkingen. Het actieve profiel kan niet worden verwijderd;
schakel over naar een ander profiel voordat u het verwijdert. Verwijderen vereist bevestiging.

Tekst- en keuzewijzigingen vereisen bevestiging; schakelaars worden direct opgeslagen. Zie [Wijzigingen opslaan](/settings#saving-changes)
voor validatiefouten, conflicterende bewerkingen en opgeslagen wijzigingen waarvoor de actieve app moet worden vernieuwd.

StbEmu biedt, host of indexeert geen media of IPTV-afspeellijsten.
Gebruikers moeten een wettelijk recht hebben op de inhoud die zij via de emulator openen.

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
De profielnaam. Dit mag elke niet-lege tekenreeks zijn.

### Portal settings
Opties die specifiek zijn voor het portaal.
##### Portal URL
Voer een absolute **http://**- of **https://**-URL in. Hosts op het lokale netwerk, localhost, IPv6-adressen en internationale domeinnamen worden ondersteund. Netwerk-URL's mogen geen witruimte bevatten.
Voor een intern portaal wordt ook een absoluut bestandssysteempad of een ondersteunde absolute **file://**-URL geaccepteerd. De vernieuwde editor accepteert geen FTP-URL's.

##### Portal language
De standaardtaal van het portaal, opgegeven als een [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)-taalcode van twee letters.

#### HTTP Proxy settings
Instellingen voor de HTTP-proxy.

##### Use HTTP proxy
Schakel dit in als u een HTTP-proxy wilt gebruiken.

##### Proxy host name
De proxyhost staat los van de poort; de standaardhost is 127.0.0.1.
##### Proxy port
Standaard: 3128. De editors voor host en poort zijn alleen beschikbaar wanneer **Use HTTP proxy** is ingeschakeld.

##### Portal is internal
Schakel deze optie in om een intern portaal voor MAG-apparaten te gebruiken. Een lokale portaal-URL schakelt deze automatisch in en maakt de schakelaar onbeschikbaar. Als u een netwerk-URL invoert, wordt de automatische instelling voor een intern portaal gewist.

##### Internal portal URL
Gebruik het veld **Portal URL** voor het lokale pad of de bestands-URL; er is geen afzonderlijke editor voor interne URL's.

Om een portaal te installeren opent u **Settings > Profiles > uw profiel > Portal settings**, gebruikt u de installatieactie en selecteert u het archief. Wacht totdat het is uitgepakt,
en bevestig daarna de aangeboden lokale URL. Bestanden installeren en de URL accepteren zijn afzonderlijke stappen.
Gebruik de verwijderactie in **Portal settings** om een geïnstalleerd intern portaal te verwijderen.

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
Configureer de versies van de afspeelengine, JavaScript API en STB API, en de versie, beschrijving en datum van de image.
Schakel het gebruik van een aangepaste User Agent in voordat u de aangepaste User Agent-tekenreeks bewerkt.

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
MAC-adres gebruiken. Als u een gewijzigde seed bevestigt, worden de ID's automatisch opnieuw gegenereerd.
Druk niet op Reset als u de seed wilt behouden: Reset wist deze.

##### Device ID value
De apparaat-ID. Gebruik de gegenereerde waarde of voer uw eigen waarde in.

##### Custom device ID 2 and signature
Schakel deze optie in om Device ID 2 en de handtekening te bewerken.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Wis na bevestiging de seed en genereer **Device ID**, **Device ID 2** en de handtekening opnieuw op basis van de huidige profielwaarden. Andere profielinstellingen blijven behouden.

Handmatig bewerken van **Device ID** is alleen beschikbaar als **Send Device ID** is ingeschakeld en MAC-gebaseerde ID's zijn uitgeschakeld.
Voor het bewerken van **Device ID 2** en **Signature** is ook **Custom device ID 2 and signature** vereist.
Automatisch afgeleide waarden blijven leesbaar wanneer bewerken niet beschikbaar is.

#### Hardware settings
##### Vendor
##### Hardware version

Apparaatopties omvatten ook Ministra-compatibiliteit en browseromleiding. Wijzig ze alleen als uw portaal dit vereist.

### Media player settings

Mediaspelerinstellingen voor dit profiel.
#### Media player
Selecteer de standaardmediaspeler voor dit profiel.

De lijst bevat automatische selectie, Exo, de interne Android-speler en een externe speler,
en eventuele extra spelers die beschikbaar zijn in uw build. Maak een keuze uit de opties die in de app worden getoond.
De codec-ondersteuning van de interne speler is afhankelijk van Android; externe spelers openen streams in een andere app.

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
Schakel UDPXY pas in nadat u een geldige HTTP/HTTPS-server-URL hebt ingevoerd.
##### UDPXY server URL
U kunt de URL invoeren terwijl UDPXY is uitgeschakeld. Een lege URL is alleen toegestaan zolang het is uitgeschakeld; een niet-lege URL moet een geldige HTTP/HTTPS-URL zijn.
##### Overwrite stream protocol
Kies welk streamprotocol moet worden afgedwongen wanneer UDPXY is ingeschakeld.
### Advanced settings
Profielspecifieke compatibiliteitsopties omvatten CSS-patches, emulatordetectie, oplossingen voor achtergrondkleur, lokale bestanden en AJAX,
en terugkeer-/toetsgebeurtenissen voor externe spelers. De opties voor Back-, Exit- en OK-gebeurtenissen zijn afhankelijk van de gebeurtenisoptie voor terugkeren naar de zenderlijst.
Wijzig deze alleen als uw portaal of externe speler dit vereist.
