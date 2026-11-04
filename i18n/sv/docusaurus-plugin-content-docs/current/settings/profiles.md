---
id: profiles
title: Profiler
sidebar_label: Profiler
---

# STB-profiler {/* #stb-profiles */}

En **STB-profil** är en uppsättning alternativ för att emulera en digitalbox i appen. Appen skapar en profil vid första starten.
Du kan redigera den eller lägga till fler profiler för att läsa in olika portaler på samma enhet.
Öppna **Inställningar > Profiler** och välj **Lägg till profil**, eller välj en befintlig profil för att redigera den.
Översikten grupperar alternativen under **Anslutning**, **Uppspelning och enhet** och **Hantera profil**.
Tillgängliga åtgärder beror på apputgåvan och profilens begränsningar. Den aktiva profilen kan inte tas bort;
byt till en annan profil innan du tar bort den. Borttagning kräver bekräftelse.

Text- och valändringar kräver bekräftelse; reglage sparas direkt. Se [Spara ändringar](/settings#saving-changes)
för valideringsfel, motstridiga ändringar och sparade ändringar som kräver uppdatering i den körande appen.

StbEmu tillhandahåller, lagrar eller indexerar inga medier eller IPTV-spellistor.
Användare måste ha laglig rätt till innehållet som de öppnar via emulatorn.

- [Profilnamn](#profile-name)
- [Portalinställningar](#portal-settings)
    - [Portal-URL](#portal-url)
    - [Portalens språk](#portal-language)
    - [HTTP-proxyinställningar](#http-proxy-settings)
        - [Använd HTTP-proxy](#use-http-proxy)
        - [Proxyvärdnamn](#proxy-host-name)
        - [Proxyport](#proxy-port)
    - [Portalen är intern](#portal-is-internal)
    - [Portal-URL (Portalen är intern)](#internal-portal-url)
- [STB-konfiguration](#stb-configuration)
    - [STB-modell](#stb-model)
    - [Inbyggd programvara](#firmware)
    - [Firmwareinställningar](#firmware-settings)
    - [User Agent](#user-agent)
    - [Skärmupplösning](#screen-resolution)
    - [MAC-adress](#mac-address)
    - [Serienummer](#serial-number)
    - [Enhets-ID](#device-id)
        - [Använd MAC-baserat enhets-ID](#use-mac-based-device-id)
        - [Skicka enhets-ID](#send-device-id)
        - [Slumpfrö för enhets-ID](#device-id-random-seed)
        - [Enhets-ID](#device-id-value)
        - [Anpassat enhets-ID 2 och signatur](#custom-device-id-2-and-signature)
        - [Enhets-ID 2](#device-id-2)
        - [Signatur](#signature)
        - [Återställ enhets-ID till standardvärde…](#reset-device-id-to-default-value)
    - [Maskinvaruinställningar](#hardware-settings)
        - [Tillverkare](#vendor)
        - [Maskinvaruversion](#hardware-version)
- [Mediespelarinställningar](#media-player-settings)
    - [Mediespelare](#media-player)
    - [UDPXY-inställningar](#udpxy-settings)
        - [Aktivera UDPXY-stöd](#enable-udxpy-support)
        - [UDPXY-serverns URL](#udpxy-server-url)
        - [Åsidosätt strömprotokoll](#overwrite-stream-protocol)
- [Avancerade inställningar](#advanced-settings)

### Profilnamn {/* #profile-name */}
Profilens namn. Det kan vara vilken icke-tom sträng som helst.

### Portalinställningar {/* #portal-settings */}
Alternativ som är specifika för portalen.
##### Portal-URL {/* #portal-url */}
Ange en absolut **http://**- eller **https://**-URL. Värdar på det lokala nätverket, localhost, IPv6-adresser och internationella domännamn stöds. Nätverks-URL:er får inte innehålla blanktecken.
För en intern portal godtas även en absolut filsystemsökväg eller en stödd absolut **file://**-URL. FTP-URL:er godtas inte av den omarbetade redigeraren.

##### Portalens språk {/* #portal-language */}
Portalens standardspråk, angivet som en tvåbokstavskod enligt [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP-proxyinställningar {/* #http-proxy-settings */}
Inställningar för HTTP-proxy.

##### Använd HTTP-proxy {/* #use-http-proxy */}
Aktivera om du vill använda en HTTP-proxy.

##### Proxyvärdnamn {/* #proxy-host-name */}
Proxyvärden anges separat från porten; standardvärden är 127.0.0.1.
##### Proxyport {/* #proxy-port */}
Standard: 3128. Redigerarna för värd och port är bara tillgängliga när **Använd HTTP-proxy** är aktiverat.

##### Portalen är intern {/* #portal-is-internal */}
Aktivera det här alternativet för att använda en intern portal för MAG-enheter. En lokal portal-URL aktiverar det automatiskt och gör reglaget otillgängligt. Om du byter till en nätverks-URL tas den automatiska inställningen för intern portal bort.

##### Portal-URL (Portalen är intern) {/* #internal-portal-url */}
Använd fältet **Portal-URL** för den lokala sökvägen eller fil-URL:en; det finns ingen separat redigerare för interna URL:er.

För att installera en portal öppnar du **Inställningar > Profiler > din profil > Portalinställningar**, använder installationsåtgärden och väljer dess arkiv. Vänta tills uppackningen är klar,
och bekräfta sedan den föreslagna lokala URL:en. Installation av filer och godkännande av URL:en är separata steg.
Använd borttagningsåtgärden i **Portalinställningar** för att ta bort en installerad intern portal.

### STB-konfiguration {/* #stb-configuration */}
De huvudsakliga emuleringsinställningarna.

#### STB-modell {/* #stb-model */}
STB-modellen som ska emuleras.

#### Inbyggd programvara {/* #firmware */}
Den **Inbyggd programvara** som ska emuleras; ingen faktisk Inbyggd programvara installeras. Vissa portaler kräver specifik Inbyggd programvara.
Välj i så fall denna i listan om den är tillgänglig.
De flesta STB-modeller som stöds erbjuder bara **Generic**-Inbyggd programvara, som vanligtvis motsvarar den senaste versionen.

Tillgängliga firmwarealternativ:
* Generic: vanligtvis den senaste tillgängliga firmwaren.
* Custom (endast MAG 250): anpassningsbar Inbyggd programvara. Använd detta om du behöver ändra specifika firmwareinställningar.

De flesta användare bör använda **Generic**-Inbyggd programvara (valt som standard).

#### Firmwareinställningar {/* #firmware-settings */}
Det här alternativet är bara tillgängligt med **Custom**-Inbyggd programvara (stöds för närvarande endast för MAG 250).
Konfigurera versionerna av uppspelningsmotorn, JavaScript API och STB API samt avbildningens version, beskrivning och datum.
Aktivera användning av en anpassad User Agent innan du redigerar den anpassade User Agent-strängen.

#### User Agent
User Agent-strängen för appens webbläsare.

#### Skärmupplösning {/* #screen-resolution */}
Skärmupplösningen som ska emuleras; detta ändrar inte skärmens faktiska upplösning.
Välj en upplösning som portalen stöder, vanligtvis **1280x720**.

#### MAC-adress {/* #mac-address */}
MAC-adressen för den emulerade enheten. Du kan använda MAC-adressen för en riktig MAG 250-enhet som du äger,
eller 12 slumpmässiga hexadecimala tecken (0–9, A–F), grupperade i par avskilda med kolon. [^wrong_mac]

De flesta portaler kräver att MAC-adressen börjar med 00:1A:79.

[^wrong_mac]: På vissa enheter med enbart Wi-Fi kan den genererade MAC-adressen vara **00:1A:79:00:00:00**.
    Det betyder att appen inte kunde identifiera den korrekt på grund av Android-begränsningar.
    Ersätt delen **00:00:00** med slumpmässiga hexadecimala tecken och behåll kolonen mellan paren.

#### Serienummer {/* #serial-number */}
Serienumret för den emulerade enheten. De flesta portaler kontrollerar det inte, så vilken textsträng som helst brukar fungera.

#### Enhets-ID {/* #device-id */}
Inställningar för enhets-ID.

##### Använd MAC-baserat enhets-ID {/* #use-mac-based-device-id */}
Generera enhets-ID:t från enhetens MAC-adress. Tryck på **Återställ enhets-ID till standardvärde…** efter att du har aktiverat eller
inaktiverat det här alternativet för att generera ID:t på nytt.

##### Skicka enhets-ID {/* #send-device-id */}
Skicka enhets-ID:t när en portal begär det. Om alternativet är inaktiverat skickar appen en tom sträng.

##### Slumpfrö för enhets-ID {/* #device-id-random-seed */}
Startvärdet som används för att generera enhets-ID:t. Använd samma startvärde på alla enheter som använder samma portal-URL och
MAC-adress. När ett ändrat startvärde bekräftas genereras ID:na automatiskt på nytt.
Tryck inte på **Återställ enhets-ID till standardvärde…** om du vill behålla startvärdet: den här åtgärden raderar det.

##### Enhets-ID {/* #device-id-value */}
Enhets-ID:t. Använd det genererade värdet eller ange ett eget.

##### Anpassat enhets-ID 2 och signatur {/* #custom-device-id-2-and-signature */}
Aktivera det här alternativet för att redigera Enhets-ID 2 och signaturen.

##### Enhets-ID 2 {/* #device-id-2 */}
##### Signatur {/* #signature */}
##### Återställ enhets-ID till standardvärde… {/* #reset-device-id-to-default-value */}
Efter bekräftelse raderas startvärdet och **Enhets-ID**, **Enhets-ID 2** och signaturen genereras på nytt från de aktuella profilvärdena. Övriga profilinställningar behålls.

Manuell redigering av **Enhets-ID** är bara tillgänglig när **Skicka enhets-ID** är aktiverat och MAC-baserade ID:n är inaktiverade.
Redigering av **Enhets-ID 2** och **Signatur** kräver även **Anpassat enhets-ID 2 och signatur**.
Automatiskt härledda värden går fortfarande att läsa när redigering inte är tillgänglig.

#### Maskinvaruinställningar {/* #hardware-settings */}
##### Tillverkare {/* #vendor */}
##### Maskinvaruversion {/* #hardware-version */}

Enhetsalternativen omfattar även Ministra-kompatibilitet och omdirigering av webbläsaren. Ändra dem bara om portalen kräver det.

### Mediespelarinställningar {/* #media-player-settings */}

Mediespelarinställningar för den här profilen.
#### Mediespelare {/* #media-player */}
Välj standardmediespelare för den här profilen.

Listan omfattar automatiskt val, Exo, Androids interna spelare och en extern spelare,
samt eventuella ytterligare spelare som finns i ditt bygge. Välj bland alternativen som visas i appen.
Den interna spelarens kodekstöd beror på Android; externa spelare öppnar strömmar i en annan app.

#### UDPXY-inställningar {/* #udpxy-settings */}
##### Aktivera UDPXY-stöd {/* #enable-udxpy-support */}
Aktivera UDPXY först efter att du har angett en giltig HTTP/HTTPS-server-URL.
##### UDPXY-serverns URL {/* #udpxy-server-url */}
Du kan ange URL:en medan UDPXY är avstängt. En tom URL tillåts bara när det är avstängt; en icke-tom URL måste vara giltig HTTP/HTTPS.
##### Åsidosätt strömprotokoll {/* #overwrite-stream-protocol */}
Välj vilket strömningsprotokoll som ska åsidosätta det ordinarie när UDPXY är aktiverat.
### Avancerade inställningar {/* #advanced-settings */}
Profilspecifika kompatibilitetsalternativ omfattar CSS-korrigeringar, emulatoridentifiering, korrigeringar för bakgrundsfärg, lokala filer och AJAX,
och retur-/knapphändelser för externa spelare. Alternativen för Tillbaka-, Avsluta- och OK-händelser beror på händelsealternativet för återgång till kanallistan.
Ändra dem bara om portalen eller den externa spelaren kräver det.
