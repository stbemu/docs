---
id: profiles
title: Profile
sidebar_label: Profile
---

# Profile STB {/* #stb-profiles */}

**Profil STB** to zestaw opcji służących do emulowania dekodera w aplikacji. Przy pierwszym uruchomieniu aplikacja tworzy jeden profil.
Możesz go edytować lub dodać kolejne profile, aby wczytywać różne portale na tym samym urządzeniu.
Otwórz **Settings > Profiles** i wybierz **Add profile** lub wybierz istniejący profil, aby go edytować.
Przegląd grupuje opcje w sekcjach **Connection**, **Playback & device** oraz **Manage profile**.
Dostępne działania zależą od wydania aplikacji i ograniczeń profilu. Aktywnego profilu nie można usunąć;
przed jego usunięciem przełącz się na inny profil. Usunięcie wymaga potwierdzenia.

Zmiany tekstu i wyboru wymagają potwierdzenia; przełączniki zapisują się natychmiast. Zobacz [Zapisywanie zmian](/settings#saving-changes),
aby dowiedzieć się więcej o błędach walidacji, konfliktach edycji i zapisanych zmianach wymagających odświeżenia działającej aplikacji.

StbEmu nie dostarcza, nie udostępnia ani nie indeksuje żadnych multimediów ani list odtwarzania IPTV.
Użytkownicy muszą mieć prawo do treści, do których uzyskują dostęp za pomocą emulatora.

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
Nazwa profilu. Może to być dowolny niepusty ciąg znaków.

### Portal settings
Opcje dotyczące danego portalu.
##### Portal URL
Wprowadź bezwzględny adres URL **http://** lub **https://**. Obsługiwane są hosty sieci lokalnej, localhost, adresy IPv6 i międzynarodowe nazwy domen. Sieciowe adresy URL nie mogą zawierać białych znaków.
Dla portalu wewnętrznego akceptowana jest również bezwzględna ścieżka w systemie plików lub obsługiwany bezwzględny adres URL **file://**. Przeprojektowany edytor nie akceptuje adresów FTP.

##### Portal language
Domyślny język portalu określony dwuliterowym kodem języka [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Ustawienia serwera proxy HTTP.

##### Use HTTP proxy
Włącz, jeśli chcesz korzystać z serwera proxy HTTP.

##### Proxy host name
Host serwera proxy jest oddzielony od portu; domyślny host to 127.0.0.1.
##### Proxy port
Domyślnie: 3128. Edytory hosta i portu są dostępne tylko wtedy, gdy włączono **Use HTTP proxy**.

##### Portal is internal
Włącz tę opcję, aby korzystać z wewnętrznego portalu dla urządzeń MAG. Lokalny adres URL portalu włącza ją automatycznie i blokuje przełącznik. Zmiana na sieciowy adres URL wyłącza automatyczne ustawienie portalu wewnętrznego.

##### Internal portal URL
Użyj pola **Portal URL**, aby podać lokalną ścieżkę lub adres URL pliku; nie ma osobnego edytora wewnętrznego adresu URL.

Aby zainstalować portal, otwórz **Settings > Profiles > Twój profil > Portal settings**, użyj działania instalacji i wybierz archiwum portalu. Zaczekaj na rozpakowanie,
a następnie potwierdź proponowany lokalny adres URL. Instalowanie plików i akceptowanie adresu URL to osobne kroki.
Użyj działania usuwania w **Portal settings**, aby usunąć zainstalowany portal wewnętrzny.

### STB configuration
Główne ustawienia emulacji.

#### STB Model
Model STB do emulacji.

#### Firmware
Emulowane **firmware**; żadne rzeczywiste oprogramowanie układowe nie jest instalowane. Niektóre portale wymagają konkretnego oprogramowania układowego.
W takim przypadku wybierz je z listy, jeśli jest dostępne.
Większość obsługiwanych modeli STB oferuje tylko oprogramowanie **Generic**, które zwykle odpowiada najnowszej wersji.

Dostępne opcje oprogramowania układowego:
* Generic: zwykle najnowsze dostępne oprogramowanie układowe.
* Custom (tylko MAG 250): konfigurowalne oprogramowanie układowe. Użyj go, jeśli musisz zmienić konkretne ustawienia oprogramowania układowego.

Większość użytkowników powinna korzystać z oprogramowania **Generic** (wybranego domyślnie).

#### Firmware settings
Ta opcja jest dostępna tylko dla oprogramowania **Custom** (obecnie obsługiwanego wyłącznie w MAG 250).
Skonfiguruj wersje silnika odtwarzacza, JavaScript API i STB API oraz wersję, opis i datę obrazu.
Przed edycją własnego ciągu User Agent włącz używanie własnego User Agent.

#### User Agent
Ciąg User Agent przeglądarki internetowej aplikacji.

#### Screen resolution
Emulowana rozdzielczość ekranu; nie zmienia rzeczywistej rozdzielczości wyświetlacza.
Wybierz rozdzielczość obsługiwaną przez portal, zwykle **1280x720**.

#### MAC address
Adres MAC emulowanego urządzenia. Możesz użyć adresu MAC posiadanego rzeczywistego urządzenia MAG 250
lub 12 losowych cyfr szesnastkowych (0–9, A–F), pogrupowanych parami oddzielonymi dwukropkami. [^wrong_mac]

Większość portali wymaga, aby adres MAC zaczynał się od 00:1A:79.

[^wrong_mac]: Na niektórych urządzeniach obsługujących tylko Wi-Fi wygenerowany adres MAC może mieć wartość **00:1A:79:00:00:00**.
    Oznacza to, że aplikacja nie mogła go prawidłowo wykryć z powodu ograniczeń Androida.
    Zastąp część **00:00:00** losowymi cyframi szesnastkowymi, zachowując dwukropki między parami.

#### Serial number
Numer seryjny emulowanego urządzenia. Większość portali go nie sprawdza, więc zwykle wystarczy dowolny ciąg tekstowy.

#### Device ID
Ustawienia identyfikatora urządzenia.

##### Use MAC-based device ID
Generuj identyfikator urządzenia na podstawie jego adresu MAC. Po włączeniu lub
wyłączeniu tej opcji naciśnij **Reset device ID**, aby ponownie wygenerować identyfikator.

##### Send Device ID
Wysyłaj identyfikator urządzenia na żądanie portalu. Po wyłączeniu aplikacja wysyła pusty ciąg znaków.

##### Device ID random seed
Ziarno używane do generowania identyfikatora urządzenia. Używaj tego samego ziarna na wszystkich urządzeniach korzystających z tego samego adresu URL portalu i
adresu MAC. Potwierdzenie zmiany ziarna automatycznie generuje identyfikatory ponownie.
Nie naciskaj Reset, jeśli chcesz zachować ziarno: Reset je usuwa.

##### Device ID value
Identyfikator urządzenia. Użyj wygenerowanej wartości lub wpisz własną.

##### Custom device ID 2 and signature
Włącz tę opcję, aby edytować Device ID 2 i podpis.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Po potwierdzeniu usuń ziarno i ponownie wygeneruj **Device ID**, **Device ID 2** oraz podpis na podstawie bieżących wartości profilu. Pozostałe ustawienia profilu zostaną zachowane.

Ręczna edycja **Device ID** jest dostępna tylko wtedy, gdy włączono **Send Device ID** i wyłączono identyfikatory oparte na adresie MAC.
Edycja **Device ID 2** i **Signature** wymaga dodatkowo włączenia **Custom device ID 2 and signature**.
Wartości wyznaczane automatycznie pozostają widoczne, gdy edycja jest niedostępna.

#### Hardware settings
##### Vendor
##### Hardware version

Opcje urządzenia obejmują również zgodność z Ministra i przekierowania przeglądarki. Zmieniaj je tylko wtedy, gdy wymaga tego portal.

### Media player settings

Ustawienia odtwarzacza multimedialnego dla tego profilu.
#### Media player
Wybierz domyślny odtwarzacz multimedialny dla tego profilu.

Lista obejmuje wybór automatyczny, Exo, wewnętrzny odtwarzacz Androida i odtwarzacz zewnętrzny,
a także dodatkowe odtwarzacze dostępne w Twojej kompilacji. Wybierz jedną z opcji widocznych w aplikacji.
Obsługa kodeków przez wewnętrzny odtwarzacz zależy od Androida; odtwarzacze zewnętrzne otwierają strumienie w innej aplikacji.

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
Włącz UDPXY dopiero po wprowadzeniu prawidłowego adresu URL serwera HTTP/HTTPS.
##### UDPXY server URL
Adres URL można wpisać, gdy UDPXY jest wyłączone. Pusty adres jest dozwolony tylko wtedy, gdy UDPXY jest wyłączone; niepusty adres musi być prawidłowym adresem HTTP/HTTPS.
##### Overwrite stream protocol
Wybierz wymuszenie protokołu strumienia, gdy UDPXY jest włączone.
### Advanced settings
Opcje zgodności poszczególnych profili obejmują poprawki CSS, wykrywanie emulatora oraz poprawki koloru tła, plików lokalnych i AJAX,
a także zdarzenia powrotu i przycisków dla odtwarzaczy zewnętrznych. Opcje zdarzeń Back, Exit i OK zależą od opcji zdarzenia powrotu do listy kanałów.
Zmieniaj je tylko wtedy, gdy wymaga tego portal lub odtwarzacz zewnętrzny.
