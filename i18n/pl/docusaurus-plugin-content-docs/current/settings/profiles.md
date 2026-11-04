---
id: profiles
title: Profile
sidebar_label: Profile
---

# Profile STB {/* #stb-profiles */}

**Profil STB** to zestaw opcji służących do emulowania dekodera w aplikacji. Przy pierwszym uruchomieniu aplikacja tworzy jeden profil.
Możesz go edytować lub dodać kolejne profile, aby wczytywać różne portale na tym samym urządzeniu.
Otwórz **Ustawienia > Profile** i wybierz **Dodaj profil** lub wybierz istniejący profil, aby go edytować.
Przegląd grupuje opcje w sekcjach **Połączenie**, **Odtwarzanie i urządzenie** oraz **Zarządzaj profilem**.
Dostępne działania zależą od wydania aplikacji i ograniczeń profilu. Aktywnego profilu nie można usunąć;
przed jego usunięciem przełącz się na inny profil. Usunięcie wymaga potwierdzenia.

Zmiany tekstu i wyboru wymagają potwierdzenia; przełączniki zapisują się natychmiast. Zobacz [Zapisywanie zmian](/settings#saving-changes),
aby dowiedzieć się więcej o błędach walidacji, konfliktach edycji i zapisanych zmianach wymagających odświeżenia działającej aplikacji.

StbEmu nie dostarcza, nie udostępnia ani nie indeksuje żadnych multimediów ani list odtwarzania IPTV.
Użytkownicy muszą mieć prawo do treści, do których uzyskują dostęp za pomocą emulatora.

- [Nazwa profilu](#profile-name)
- [Ustawienia portalu](#portal-settings)
    - [URL portalu](#portal-url)
    - [Język portalu](#portal-language)
    - [Ustawienia proxy HTTP](#http-proxy-settings)
        - [Używaj proxy HTTP](#use-http-proxy)
        - [Nazwa hosta proxy](#proxy-host-name)
        - [Port proxy](#proxy-port)
    - [Portal wewnętrzny](#portal-is-internal)
    - [URL portalu (Portal wewnętrzny)](#internal-portal-url)
- [Konfiguracja STB](#stb-configuration)
    - [Model STB](#stb-model)
    - [Oprogramowanie sprzętowe](#firmware)
    - [Ustawienia oprogramowania sprzętowego](#firmware-settings)
    - [User Agent](#user-agent)
    - [Rozdzielczość ekranu](#screen-resolution)
    - [Adres MAC](#mac-address)
    - [Numer seryjny](#serial-number)
    - [Identyfikator urządzenia](#device-id)
        - [Identyfikator urządzenia oparty na MAC](#use-mac-based-device-id)
        - [Wysyłaj identyfikator urządzenia](#send-device-id)
        - [Losowe ziarno identyfikatora urządzenia](#device-id-random-seed)
        - [Identyfikator urządzenia](#device-id-value)
        - [Własny identyfikator urządzenia 2 i podpis](#custom-device-id-2-and-signature)
        - [Identyfikator urządzenia 2](#device-id-2)
        - [Podpis](#signature)
        - [Przywróć domyślny identyfikator urządzenia…](#reset-device-id-to-default-value)
    - [Ustawienia sprzętowe](#hardware-settings)
        - [Producent](#vendor)
        - [Wersja sprzętu](#hardware-version)
- [Ustawienia odtwarzacza](#media-player-settings)
    - [Odtwarzacz multimedialny](#media-player)
    - [Ustawienia UDPXY](#udpxy-settings)
        - [Włącz obsługę UDPXY](#enable-udxpy-support)
        - [URL serwera UDPXY](#udpxy-server-url)
        - [Zastąp protokół strumienia](#overwrite-stream-protocol)
- [Ustawienia zaawansowane](#advanced-settings)

### Nazwa profilu {/* #profile-name */}
Nazwa profilu. Może to być dowolny niepusty ciąg znaków.

### Ustawienia portalu {/* #portal-settings */}
Opcje dotyczące danego portalu.
##### URL portalu {/* #portal-url */}
Wprowadź bezwzględny adres URL **http://** lub **https://**. Obsługiwane są hosty sieci lokalnej, localhost, adresy IPv6 i międzynarodowe nazwy domen. Sieciowe adresy URL nie mogą zawierać białych znaków.
Dla portalu wewnętrznego akceptowana jest również bezwzględna ścieżka w systemie plików lub obsługiwany bezwzględny adres URL **file://**. Przeprojektowany edytor nie akceptuje adresów FTP.

##### Język portalu {/* #portal-language */}
Domyślny język portalu określony dwuliterowym kodem języka [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### Ustawienia proxy HTTP {/* #http-proxy-settings */}
Ustawienia serwera proxy HTTP.

##### Używaj proxy HTTP {/* #use-http-proxy */}
Włącz, jeśli chcesz korzystać z serwera proxy HTTP.

##### Nazwa hosta proxy {/* #proxy-host-name */}
Host serwera proxy jest oddzielony od portu; domyślny host to 127.0.0.1.
##### Port proxy {/* #proxy-port */}
Domyślnie: 3128. Edytory hosta i portu są dostępne tylko wtedy, gdy włączono **Używaj proxy HTTP**.

##### Portal wewnętrzny {/* #portal-is-internal */}
Włącz tę opcję, aby korzystać z wewnętrznego portalu dla urządzeń MAG. Lokalny adres URL portalu włącza ją automatycznie i blokuje przełącznik. Zmiana na sieciowy adres URL wyłącza automatyczne ustawienie portalu wewnętrznego.

##### URL portalu (Portal wewnętrzny) {/* #internal-portal-url */}
Użyj pola **URL portalu**, aby podać lokalną ścieżkę lub adres URL pliku; nie ma osobnego edytora wewnętrznego adresu URL.

Aby zainstalować portal, otwórz **Ustawienia > Profile > Twój profil > Ustawienia portalu**, użyj działania instalacji i wybierz archiwum portalu. Zaczekaj na rozpakowanie,
a następnie potwierdź proponowany lokalny adres URL. Instalowanie plików i akceptowanie adresu URL to osobne kroki.
Użyj działania usuwania w **Ustawienia portalu**, aby usunąć zainstalowany portal wewnętrzny.

### Konfiguracja STB {/* #stb-configuration */}
Główne ustawienia emulacji.

#### Model STB {/* #stb-model */}
Model STB do emulacji.

#### Oprogramowanie sprzętowe {/* #firmware */}
Emulowane **Oprogramowanie sprzętowe**; żadne rzeczywiste oprogramowanie układowe nie jest instalowane. Niektóre portale wymagają konkretnego oprogramowania układowego.
W takim przypadku wybierz je z listy, jeśli jest dostępne.
Większość obsługiwanych modeli STB oferuje tylko oprogramowanie **Generic**, które zwykle odpowiada najnowszej wersji.

Dostępne opcje oprogramowania układowego:
* Generic: zwykle najnowsze dostępne oprogramowanie układowe.
* Custom (tylko MAG 250): konfigurowalne oprogramowanie układowe. Użyj go, jeśli musisz zmienić konkretne ustawienia oprogramowania układowego.

Większość użytkowników powinna korzystać z oprogramowania **Generic** (wybranego domyślnie).

#### Ustawienia oprogramowania sprzętowego {/* #firmware-settings */}
Ta opcja jest dostępna tylko dla oprogramowania **Custom** (obecnie obsługiwanego wyłącznie w MAG 250).
Skonfiguruj wersje silnika odtwarzacza, JavaScript API i STB API oraz wersję, opis i datę obrazu.
Przed edycją własnego ciągu User Agent włącz używanie własnego User Agent.

#### User Agent
Ciąg User Agent przeglądarki internetowej aplikacji.

#### Rozdzielczość ekranu {/* #screen-resolution */}
Emulowana rozdzielczość ekranu; nie zmienia rzeczywistej rozdzielczości wyświetlacza.
Wybierz rozdzielczość obsługiwaną przez portal, zwykle **1280x720**.

#### Adres MAC {/* #mac-address */}
Adres MAC emulowanego urządzenia. Możesz użyć adresu MAC posiadanego rzeczywistego urządzenia MAG 250
lub 12 losowych cyfr szesnastkowych (0–9, A–F), pogrupowanych parami oddzielonymi dwukropkami. [^wrong_mac]

Większość portali wymaga, aby adres MAC zaczynał się od 00:1A:79.

[^wrong_mac]: Na niektórych urządzeniach obsługujących tylko Wi-Fi wygenerowany adres MAC może mieć wartość **00:1A:79:00:00:00**.
    Oznacza to, że aplikacja nie mogła go prawidłowo wykryć z powodu ograniczeń Androida.
    Zastąp część **00:00:00** losowymi cyframi szesnastkowymi, zachowując dwukropki między parami.

#### Numer seryjny {/* #serial-number */}
Numer seryjny emulowanego urządzenia. Większość portali go nie sprawdza, więc zwykle wystarczy dowolny ciąg tekstowy.

#### Identyfikator urządzenia {/* #device-id */}
Ustawienia identyfikatora urządzenia.

##### Identyfikator urządzenia oparty na MAC {/* #use-mac-based-device-id */}
Generuj identyfikator urządzenia na podstawie jego adresu MAC. Po włączeniu lub
wyłączeniu tej opcji naciśnij **Przywróć domyślny identyfikator urządzenia…**, aby ponownie wygenerować identyfikator.

##### Wysyłaj identyfikator urządzenia {/* #send-device-id */}
Wysyłaj identyfikator urządzenia na żądanie portalu. Po wyłączeniu aplikacja wysyła pusty ciąg znaków.

##### Losowe ziarno identyfikatora urządzenia {/* #device-id-random-seed */}
Ziarno używane do generowania identyfikatora urządzenia. Używaj tego samego ziarna na wszystkich urządzeniach korzystających z tego samego adresu URL portalu i
adresu MAC. Potwierdzenie zmiany ziarna automatycznie generuje identyfikatory ponownie.
Nie naciskaj **Przywróć domyślny identyfikator urządzenia…**, jeśli chcesz zachować ziarno: ta czynność je usuwa.

##### Identyfikator urządzenia {/* #device-id-value */}
Identyfikator urządzenia. Użyj wygenerowanej wartości lub wpisz własną.

##### Własny identyfikator urządzenia 2 i podpis {/* #custom-device-id-2-and-signature */}
Włącz tę opcję, aby edytować pole **Identyfikator urządzenia 2** i podpis.

##### Identyfikator urządzenia 2 {/* #device-id-2 */}
##### Podpis {/* #signature */}
##### Przywróć domyślny identyfikator urządzenia… {/* #reset-device-id-to-default-value */}
Po potwierdzeniu usuń ziarno i ponownie wygeneruj **Identyfikator urządzenia**, **Identyfikator urządzenia 2** oraz podpis na podstawie bieżących wartości profilu. Pozostałe ustawienia profilu zostaną zachowane.

Ręczna edycja pola **Identyfikator urządzenia** jest dostępna tylko wtedy, gdy włączono opcję **Wysyłaj identyfikator urządzenia** i wyłączono identyfikatory oparte na adresie MAC.
Edycja pól **Identyfikator urządzenia 2** i **Podpis** wymaga dodatkowo włączenia opcji **Własny identyfikator urządzenia 2 i podpis**.
Wartości wyznaczane automatycznie pozostają widoczne, gdy edycja jest niedostępna.

#### Ustawienia sprzętowe {/* #hardware-settings */}
##### Producent {/* #vendor */}
##### Wersja sprzętu {/* #hardware-version */}

Opcje urządzenia obejmują również zgodność z Ministra i przekierowania przeglądarki. Zmieniaj je tylko wtedy, gdy wymaga tego portal.

### Ustawienia odtwarzacza {/* #media-player-settings */}

Ustawienia odtwarzacza multimedialnego dla tego profilu.
#### Odtwarzacz multimedialny {/* #media-player */}
Wybierz domyślny odtwarzacz multimedialny dla tego profilu.

Lista obejmuje wybór automatyczny, Exo, wewnętrzny odtwarzacz Androida i odtwarzacz zewnętrzny,
a także dodatkowe odtwarzacze dostępne w Twojej kompilacji. Wybierz jedną z opcji widocznych w aplikacji.
Obsługa kodeków przez wewnętrzny odtwarzacz zależy od Androida; odtwarzacze zewnętrzne otwierają strumienie w innej aplikacji.

#### Ustawienia UDPXY {/* #udpxy-settings */}
##### Włącz obsługę UDPXY {/* #enable-udxpy-support */}
Włącz UDPXY dopiero po wprowadzeniu prawidłowego adresu URL serwera HTTP/HTTPS.
##### URL serwera UDPXY {/* #udpxy-server-url */}
Adres URL można wpisać, gdy UDPXY jest wyłączone. Pusty adres jest dozwolony tylko wtedy, gdy UDPXY jest wyłączone; niepusty adres musi być prawidłowym adresem HTTP/HTTPS.
##### Zastąp protokół strumienia {/* #overwrite-stream-protocol */}
Wybierz wymuszenie protokołu strumienia, gdy UDPXY jest włączone.
### Ustawienia zaawansowane {/* #advanced-settings */}
Opcje zgodności poszczególnych profili obejmują poprawki CSS, wykrywanie emulatora oraz poprawki koloru tła, plików lokalnych i AJAX,
a także zdarzenia powrotu i przycisków dla odtwarzaczy zewnętrznych. Opcje zdarzeń Wstecz, Wyjście i OK zależą od opcji zdarzenia powrotu do listy kanałów.
Zmieniaj je tylko wtedy, gdy wymaga tego portal lub odtwarzacz zewnętrzny.
