---
id: profiles
title: Profiler
sidebar_label: Profiler
---

# STB-profiler {/* #stb-profiles */}

En **STB-profil** är en uppsättning alternativ för att emulera en digitalbox i appen. Appen skapar en profil vid första starten.
Du kan redigera den eller lägga till fler profiler för att läsa in olika portaler på samma enhet.
Öppna **Settings > Profiles** och välj **Add profile**, eller välj en befintlig profil för att redigera den.
Översikten grupperar alternativen under **Connection**, **Playback & device** och **Manage profile**.
Tillgängliga åtgärder beror på apputgåvan och profilens begränsningar. Den aktiva profilen kan inte tas bort;
byt till en annan profil innan du tar bort den. Borttagning kräver bekräftelse.

Text- och valändringar kräver bekräftelse; reglage sparas direkt. Se [Spara ändringar](/settings#saving-changes)
för valideringsfel, motstridiga ändringar och sparade ändringar som kräver uppdatering i den körande appen.

StbEmu tillhandahåller, lagrar eller indexerar inga medier eller IPTV-spellistor.
Användare måste ha laglig rätt till innehållet som de öppnar via emulatorn.

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
Profilens namn. Det kan vara vilken icke-tom sträng som helst.

### Portal settings
Alternativ som är specifika för portalen.
##### Portal URL
Ange en absolut **http://**- eller **https://**-URL. Värdar på det lokala nätverket, localhost, IPv6-adresser och internationella domännamn stöds. Nätverks-URL:er får inte innehålla blanktecken.
För en intern portal godtas även en absolut filsystemsökväg eller en stödd absolut **file://**-URL. FTP-URL:er godtas inte av den omarbetade redigeraren.

##### Portal language
Portalens standardspråk, angivet som en tvåbokstavskod enligt [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Inställningar för HTTP-proxy.

##### Use HTTP proxy
Aktivera om du vill använda en HTTP-proxy.

##### Proxy host name
Proxyvärden anges separat från porten; standardvärden är 127.0.0.1.
##### Proxy port
Standard: 3128. Redigerarna för värd och port är bara tillgängliga när **Use HTTP proxy** är aktiverat.

##### Portal is internal
Aktivera det här alternativet för att använda en intern portal för MAG-enheter. En lokal portal-URL aktiverar det automatiskt och gör reglaget otillgängligt. Om du byter till en nätverks-URL tas den automatiska inställningen för intern portal bort.

##### Internal portal URL
Använd fältet **Portal URL** för den lokala sökvägen eller fil-URL:en; det finns ingen separat redigerare för interna URL:er.

För att installera en portal öppnar du **Settings > Profiles > din profil > Portal settings**, använder installationsåtgärden och väljer dess arkiv. Vänta tills uppackningen är klar,
och bekräfta sedan den föreslagna lokala URL:en. Installation av filer och godkännande av URL:en är separata steg.
Använd borttagningsåtgärden i **Portal settings** för att ta bort en installerad intern portal.

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
Konfigurera versionerna av uppspelningsmotorn, JavaScript API och STB API samt avbildningens version, beskrivning och datum.
Aktivera användning av en anpassad User Agent innan du redigerar den anpassade User Agent-strängen.

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
MAC-adress. När ett ändrat startvärde bekräftas genereras ID:na automatiskt på nytt.
Tryck inte på Reset om du vill behålla startvärdet: Reset raderar det.

##### Device ID value
Enhets-ID:t. Använd det genererade värdet eller ange ett eget.

##### Custom device ID 2 and signature
Aktivera det här alternativet för att redigera Device ID 2 och signaturen.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Efter bekräftelse raderas startvärdet och **Device ID**, **Device ID 2** och signaturen genereras på nytt från de aktuella profilvärdena. Övriga profilinställningar behålls.

Manuell redigering av **Device ID** är bara tillgänglig när **Send Device ID** är aktiverat och MAC-baserade ID:n är inaktiverade.
Redigering av **Device ID 2** och **Signature** kräver även **Custom device ID 2 and signature**.
Automatiskt härledda värden går fortfarande att läsa när redigering inte är tillgänglig.

#### Hardware settings
##### Vendor
##### Hardware version

Enhetsalternativen omfattar även Ministra-kompatibilitet och omdirigering av webbläsaren. Ändra dem bara om portalen kräver det.

### Media player settings

Mediespelarinställningar för den här profilen.
#### Media player
Välj standardmediespelare för den här profilen.

Listan omfattar automatiskt val, Exo, Androids interna spelare och en extern spelare,
samt eventuella ytterligare spelare som finns i ditt bygge. Välj bland alternativen som visas i appen.
Den interna spelarens kodekstöd beror på Android; externa spelare öppnar strömmar i en annan app.

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
Aktivera UDPXY först efter att du har angett en giltig HTTP/HTTPS-server-URL.
##### UDPXY server URL
Du kan ange URL:en medan UDPXY är avstängt. En tom URL tillåts bara när det är avstängt; en icke-tom URL måste vara giltig HTTP/HTTPS.
##### Overwrite stream protocol
Välj vilket strömningsprotokoll som ska åsidosätta det ordinarie när UDPXY är aktiverat.
### Advanced settings
Profilspecifika kompatibilitetsalternativ omfattar CSS-korrigeringar, emulatoridentifiering, korrigeringar för bakgrundsfärg, lokala filer och AJAX,
och retur-/knapphändelser för externa spelare. Alternativen för Back-, Exit- och OK-händelser beror på händelsealternativet för återgång till kanallistan.
Ändra dem bara om portalen eller den externa spelaren kräver det.
