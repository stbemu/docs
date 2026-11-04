---
id: profiles
title: Profielen
sidebar_label: Profielen
---

# STB-profielen {/* #stb-profiles */}

Een **STB-profiel** is een verzameling opties voor het emuleren van een settopbox in de app. Bij de eerste start maakt de app één profiel aan.
U kunt dit profiel bewerken of meer profielen toevoegen om verschillende portalen op hetzelfde apparaat te laden.
Open **Instellingen > Profielen** en kies **Profiel toevoegen**, of selecteer een bestaand profiel om het te bewerken.
Het overzicht groepeert opties onder **Verbinding**, **Afspelen en apparaat** en **Profiel beheren**.
De beschikbare acties zijn afhankelijk van uw appeditie en profielbeperkingen. Het actieve profiel kan niet worden verwijderd;
schakel over naar een ander profiel voordat u het verwijdert. Verwijderen vereist bevestiging.

Tekst- en keuzewijzigingen vereisen bevestiging; schakelaars worden direct opgeslagen. Zie [Wijzigingen opslaan](/settings#saving-changes)
voor validatiefouten, conflicterende bewerkingen en opgeslagen wijzigingen waarvoor de actieve app moet worden vernieuwd.

StbEmu biedt, host of indexeert geen media of IPTV-afspeellijsten.
Gebruikers moeten een wettelijk recht hebben op de inhoud die zij via de emulator openen.

- [Profielnaam](#profile-name)
- [Portaalinstellingen](#portal-settings)
    - [Portaal-URL](#portal-url)
    - [Portaaltaal](#portal-language)
    - [HTTP-proxyinstellingen](#http-proxy-settings)
        - [HTTP-proxy gebruiken](#use-http-proxy)
        - [Hostnaam proxy](#proxy-host-name)
        - [Proxypoort](#proxy-port)
    - [Portaal is intern](#portal-is-internal)
    - [Portaal-URL (Portaal is intern)](#internal-portal-url)
- [STB-configuratie](#stb-configuration)
    - [STB-model](#stb-model)
    - [Firmware](#firmware)
    - [Firmware-instellingen](#firmware-settings)
    - [User Agent](#user-agent)
    - [Schermresolutie](#screen-resolution)
    - [MAC-adres](#mac-address)
    - [Serienummer](#serial-number)
    - [Apparaat-ID](#device-id)
        - [Apparaat-ID op basis van MAC gebruiken](#use-mac-based-device-id)
        - [Apparaat-ID verzenden](#send-device-id)
        - [Willekeurige startwaarde voor apparaat-ID](#device-id-random-seed)
        - [Apparaat-ID](#device-id-value)
        - [Aangepaste apparaat-ID 2 en handtekening](#custom-device-id-2-and-signature)
        - [Apparaat-ID 2](#device-id-2)
        - [Handtekening](#signature)
        - [Apparaat-ID herstellen naar standaardwaarde…](#reset-device-id-to-default-value)
    - [Hardware-instellingen](#hardware-settings)
        - [Fabrikant](#vendor)
        - [Hardwareversie](#hardware-version)
- [Instellingen mediaspeler](#media-player-settings)
    - [Mediaspeler](#media-player)
    - [UDPXY-instellingen](#udpxy-settings)
        - [UDPXY-ondersteuning inschakelen](#enable-udxpy-support)
        - [URL van UDPXY-server](#udpxy-server-url)
        - [Streamprotocol overschrijven](#overwrite-stream-protocol)
- [Geavanceerde instellingen](#advanced-settings)

### Profielnaam {/* #profile-name */}
De profielnaam. Dit mag elke niet-lege tekenreeks zijn.

### Portaalinstellingen {/* #portal-settings */}
Opties die specifiek zijn voor het portaal.
##### Portaal-URL {/* #portal-url */}
Voer een absolute **http://**- of **https://**-URL in. Hosts op het lokale netwerk, localhost, IPv6-adressen en internationale domeinnamen worden ondersteund. Netwerk-URL's mogen geen witruimte bevatten.
Voor een intern portaal wordt ook een absoluut bestandssysteempad of een ondersteunde absolute **file://**-URL geaccepteerd. De vernieuwde editor accepteert geen FTP-URL's.

##### Portaaltaal {/* #portal-language */}
De standaardtaal van het portaal, opgegeven als een [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)-taalcode van twee letters.

#### HTTP-proxyinstellingen {/* #http-proxy-settings */}
Instellingen voor de HTTP-proxy.

##### HTTP-proxy gebruiken {/* #use-http-proxy */}
Schakel dit in als u een HTTP-proxy wilt gebruiken.

##### Hostnaam proxy {/* #proxy-host-name */}
De proxyhost staat los van de poort; de standaardhost is 127.0.0.1.
##### Proxypoort {/* #proxy-port */}
Standaard: 3128. De editors voor host en poort zijn alleen beschikbaar wanneer **HTTP-proxy gebruiken** is ingeschakeld.

##### Portaal is intern {/* #portal-is-internal */}
Schakel deze optie in om een intern portaal voor MAG-apparaten te gebruiken. Een lokale portaal-URL schakelt deze automatisch in en maakt de schakelaar onbeschikbaar. Als u een netwerk-URL invoert, wordt de automatische instelling voor een intern portaal gewist.

##### Portaal-URL (Portaal is intern) {/* #internal-portal-url */}
Gebruik het veld **Portaal-URL** voor het lokale pad of de bestands-URL; er is geen afzonderlijke editor voor interne URL's.

Om een portaal te installeren opent u **Instellingen > Profielen > uw profiel > Portaalinstellingen**, gebruikt u de installatieactie en selecteert u het archief. Wacht totdat het is uitgepakt,
en bevestig daarna de aangeboden lokale URL. Bestanden installeren en de URL accepteren zijn afzonderlijke stappen.
Gebruik de verwijderactie in **Portaalinstellingen** om een geïnstalleerd intern portaal te verwijderen.

### STB-configuratie {/* #stb-configuration */}
De belangrijkste emulatie-instellingen.

#### STB-model {/* #stb-model */}
Het te emuleren STB-model.

#### Firmware
De te emuleren **Firmware**; er wordt geen echte Firmware geïnstalleerd. Sommige portalen vereisen specifieke Firmware.
Selecteer die in dat geval in de lijst als deze beschikbaar is.
De meeste ondersteunde STB-modellen bieden alleen **Generic**-Firmware, die doorgaans de nieuwste versie vertegenwoordigt.

Beschikbare firmwareopties:
* Generic: doorgaans de nieuwste beschikbare Firmware.
* Custom (alleen MAG 250): aanpasbare Firmware. Gebruik dit als u specifieke Firmware-instellingen moet wijzigen.

De meeste gebruikers kunnen het beste **Generic**-Firmware gebruiken (standaard geselecteerd).

#### Firmware-instellingen {/* #firmware-settings */}
Deze optie is alleen beschikbaar met **Custom**-Firmware (momenteel alleen ondersteund voor MAG 250).
Configureer de versies van de afspeelengine, JavaScript API en STB API, en de versie, beschrijving en datum van de image.
Schakel het gebruik van een aangepaste User Agent in voordat u de aangepaste User Agent-tekenreeks bewerkt.

#### User Agent
De User Agent-tekenreeks voor de webbrowser van de app.

#### Schermresolutie {/* #screen-resolution */}
De te emuleren schermresolutie; dit wijzigt de werkelijke schermresolutie niet.
Kies een resolutie die uw portaal ondersteunt, doorgaans **1280x720**.

#### MAC-adres {/* #mac-address */}
Het MAC-adres van het geëmuleerde apparaat. U kunt het MAC-adres gebruiken van een echt MAG 250-apparaat dat u bezit,
of 12 willekeurige hexadecimale tekens (0–9, A–F), gegroepeerd in paren met dubbele punten ertussen. [^wrong_mac]

De meeste portalen vereisen dat het MAC-adres begint met 00:1A:79.

[^wrong_mac]: Op sommige apparaten met alleen wifi kan het gegenereerde MAC-adres **00:1A:79:00:00:00** zijn.
    Dit betekent dat de app het adres niet correct kon detecteren vanwege Android-beperkingen.
    Vervang het gedeelte **00:00:00** door willekeurige hexadecimale tekens en behoud de dubbele punten tussen de paren.

#### Serienummer {/* #serial-number */}
Het serienummer van het geëmuleerde apparaat. De meeste portalen controleren dit niet, dus elke tekst werkt doorgaans.

#### Apparaat-ID {/* #device-id */}
Instellingen voor de apparaat-ID.

##### Apparaat-ID op basis van MAC gebruiken {/* #use-mac-based-device-id */}
Genereer de apparaat-ID op basis van het MAC-adres van het apparaat. Druk op **Apparaat-ID herstellen naar standaardwaarde…** nadat u deze optie hebt ingeschakeld of
uitgeschakeld om de ID opnieuw te genereren.

##### Apparaat-ID verzenden {/* #send-device-id */}
Verzend de apparaat-ID wanneer een portaal daarom vraagt. Als dit is uitgeschakeld, verzendt de app een lege tekenreeks.

##### Willekeurige startwaarde voor apparaat-ID {/* #device-id-random-seed */}
De seed die wordt gebruikt om de apparaat-ID te genereren. Gebruik dezelfde seed op alle apparaten die dezelfde portaal-URL en
MAC-adres gebruiken. Als u een gewijzigde seed bevestigt, worden de ID's automatisch opnieuw gegenereerd.
Druk niet op **Apparaat-ID herstellen naar standaardwaarde…** als u de seed wilt behouden: deze handeling wist deze.

##### Apparaat-ID {/* #device-id-value */}
De apparaat-ID. Gebruik de gegenereerde waarde of voer uw eigen waarde in.

##### Aangepaste apparaat-ID 2 en handtekening {/* #custom-device-id-2-and-signature */}
Schakel deze optie in om Apparaat-ID 2 en de handtekening te bewerken.

##### Apparaat-ID 2 {/* #device-id-2 */}
##### Handtekening {/* #signature */}
##### Apparaat-ID herstellen naar standaardwaarde… {/* #reset-device-id-to-default-value */}
Wis na bevestiging de seed en genereer **Apparaat-ID**, **Apparaat-ID 2** en de handtekening opnieuw op basis van de huidige profielwaarden. Andere profielinstellingen blijven behouden.

Handmatig bewerken van **Apparaat-ID** is alleen beschikbaar als **Apparaat-ID verzenden** is ingeschakeld en MAC-gebaseerde ID's zijn uitgeschakeld.
Voor het bewerken van **Apparaat-ID 2** en **Handtekening** is ook **Aangepaste apparaat-ID 2 en handtekening** vereist.
Automatisch afgeleide waarden blijven leesbaar wanneer bewerken niet beschikbaar is.

#### Hardware-instellingen {/* #hardware-settings */}
##### Fabrikant {/* #vendor */}
##### Hardwareversie {/* #hardware-version */}

Apparaatopties omvatten ook Ministra-compatibiliteit en browseromleiding. Wijzig ze alleen als uw portaal dit vereist.

### Instellingen mediaspeler {/* #media-player-settings */}

Mediaspelerinstellingen voor dit profiel.
#### Mediaspeler {/* #media-player */}
Selecteer de standaardmediaspeler voor dit profiel.

De lijst bevat automatische selectie, Exo, de interne Android-speler en een externe speler,
en eventuele extra spelers die beschikbaar zijn in uw build. Maak een keuze uit de opties die in de app worden getoond.
De codec-ondersteuning van de interne speler is afhankelijk van Android; externe spelers openen streams in een andere app.

#### UDPXY-instellingen {/* #udpxy-settings */}
##### UDPXY-ondersteuning inschakelen {/* #enable-udxpy-support */}
Schakel UDPXY pas in nadat u een geldige HTTP/HTTPS-server-URL hebt ingevoerd.
##### URL van UDPXY-server {/* #udpxy-server-url */}
U kunt de URL invoeren terwijl UDPXY is uitgeschakeld. Een lege URL is alleen toegestaan zolang het is uitgeschakeld; een niet-lege URL moet een geldige HTTP/HTTPS-URL zijn.
##### Streamprotocol overschrijven {/* #overwrite-stream-protocol */}
Kies welk streamprotocol moet worden afgedwongen wanneer UDPXY is ingeschakeld.
### Geavanceerde instellingen {/* #advanced-settings */}
Profielspecifieke compatibiliteitsopties omvatten CSS-patches, emulatordetectie, oplossingen voor achtergrondkleur, lokale bestanden en AJAX,
en terugkeer-/toetsgebeurtenissen voor externe spelers. De opties voor Terug-, Afsluiten- en OK-gebeurtenissen zijn afhankelijk van de gebeurtenisoptie voor terugkeren naar de zenderlijst.
Wijzig deze alleen als uw portaal of externe speler dit vereist.
