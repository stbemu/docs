---
id: profiles
title: Profile
sidebar_label: Profile
---

# Profile STB {/* #stb-profiles */}

**Profil STB** to zestaw opcji służących do emulowania dekodera w aplikacji. Przy pierwszym uruchomieniu aplikacja tworzy jeden profil.
Możesz go edytować lub dodać kolejne profile, aby wczytywać różne portale na tym samym urządzeniu.
Aby utworzyć profil, dotknij dwukrotnie ekranu, aby wyświetlić menu u góry lub z boku [^1].
Wybierz **Settings**, a następnie **Profiles**, gdzie można dodawać i edytować profile.

StbEmu nie dostarcza, nie udostępnia ani nie indeksuje żadnych multimediów ani list odtwarzania IPTV.
Użytkownicy muszą mieć prawo do treści, do których uzyskują dostęp za pomocą emulatora.

[^1]: Jeśli korzystasz z pilota 3D lub myszy, porusz wskaźnikiem, kliknij ekran i otwórz menu aplikacji u góry.

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
Nazwa profilu. Może to być dowolny niepusty ciąg znaków.

### Portal settings
Opcje dotyczące danego portalu.
##### Portal URL
Adres URL portalu. Musi zaczynać się od schematu (**http://**, **https://**, **ftp://** itd.).

##### Portal language
Domyślny język portalu określony dwuliterowym kodem języka [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Ustawienia serwera proxy HTTP.

##### Use HTTP proxy
Włącz, jeśli chcesz korzystać z serwera proxy HTTP.

##### Proxy host name
##### Proxy port

##### Portal is internal
Włącz tę opcję, aby korzystać z wewnętrznego portalu dla urządzeń MAG.

##### Internal portal URL

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
Użyj jej, aby skonfigurować konkretne ustawienia oprogramowania układowego, takie jak wersja lub własny ciąg User Agent.

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
adresu MAC. Po zmianie tej wartości naciśnij **Reset device ID**.

##### Device ID value
Identyfikator urządzenia. Użyj wygenerowanej wartości lub wpisz własną.

##### Custom device ID 2 and signature
Włącz tę opcję, aby edytować Device ID 2 i podpis.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Wygeneruj ponownie **Device ID**, **Device ID 2** i podpis.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
Adres IP wysyłany do portalu na żądanie. To adres emulowany, a nie rzeczywisty adres IP urządzenia.
Większość portali nie korzysta z tych danych, więc zazwyczaj nie trzeba ich zmieniać.
### Media player settings

Ustawienia odtwarzacza multimedialnego dla tego profilu.
#### Media player
Wybierz domyślny odtwarzacz multimedialny dla tego profilu.

| Odtwarzacz | Opis | Komentarz |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo | [GitHub](https://github.com/google/ExoPlayer) | Domyślny odtwarzacz, zalecany dla większości urządzeń |
| VLC | [Strona internetowa](https://www.videolan.org) | |
| MPV | [GitHub](https://github.com/mpv-android/mpv-android) | |
| Ijk | [GitHub](https://github.com/bilibili/ijkplayer) | Nie obsługuje napisów |
| Internal player | Korzysta z odtwarzacza Androida. Obsługiwane kodeki zależą od wersji Androida na urządzeniu. | Nie obsługuje napisów |
| External player | Użyj niemal dowolnego odtwarzacza zewnętrznego. Integracja z emulatorem jest niedostępna; strumienie multimedialne otwierają się w innej aplikacji. | |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
