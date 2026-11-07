---
id: common-settings
title: Ustawienia ogólne
sidebar_label: Ustawienia ogólne
---

# Ustawienia ogólne {/* #common-settings */}

Te ustawienia dotyczą wersji aplikacji 0.8 i nowszych.

- [Settings](#settings)
    - [App Language](#app-language)
    - [Hide navigation bar](#hide-navigation-bar)
    - [Always show overlay buttons](#always-show-overlay-buttons)
    - [Screen configuration](#screen-configuration)
    - [Keyboard configuration](#keyboard-configuration)
- [Boot options](#boot-options)
    - [Auto start on device boot](#auto-start-on-device-boot)
- [Android TV](#android-tv)
    - [Enable recommendations](#enable-recommendations)
- [Browser settings](#browser-settings)
    - [Scaling method](#scaling-method)
- [Network settings](#network-settings)
    - [Enable network cache](#enable-network-cache)
    - [Cache size](#cache-size)

### Settings
#### App Language
Zmień język aplikacji. Domyślnie aplikacja używa języka systemu Android, jeśli jest obsługiwany.

#### Hide navigation bar
Ukryj pasek nawigacji i jego przyciski (może nie działać na niektórych urządzeniach). Jeśli ta opcja jest włączona i korzystasz
z ekranu dotykowego, wyświetlenie ukrytych przycisków na ekranie może wymagać dwóch dotknięć.
Pierwsze dotknięcie pokazuje pasek nawigacji; to ograniczenie Androida.

#### Always show overlay buttons
Wyświetlaj przyciski na ekranie. Ta opcja zwykle powinna pozostać włączona. Na dekoderach STB można ją wyłączyć, jeśli przyciski
pojawiają się po naciśnięciu przycisku pilota.

#### Screen configuration
Włącz lub wyłącz obracanie ekranu po zmianie orientacji urządzenia.

#### Keyboard configuration
Ustawienia pilota (niedostępne w wersji bezpłatnej).

Skonfiguruj serwer pilota, aby sterować portalem za pomocą programowego pilota dla MAG 250, AuraHD lub podobnych urządzeń.

#### Boot options
##### Auto start on device boot

Uruchamiaj aplikację po włączeniu urządzenia. Działa to tylko wtedy, gdy aplikacja jest zainstalowana w pamięci wewnętrznej.
Jeśli urządzenie ma włączony ekran blokady (na przykład telefon lub tablet), aplikacja uruchomi się po jego odblokowaniu.

#### Stop in the background
Wstrzymaj aplikację przy przejściu do innej aplikacji.

#### Android TV
Opcje dotyczące Android TV.

##### Enable recommendations

Włącz karty rekomendacji na ekranie głównym Androida. Aplikacja wyświetla kartę dla każdego skonfigurowanego profilu,
aby można było szybko go otworzyć.

#### Browser settings
Ustawienia przeglądarki.

##### Scaling method
Wybierz inną metodę skalowania przeglądarki, jeśli portal jest zbyt duży lub zbyt mały.
Na większości urządzeń nie trzeba zmieniać tego ustawienia. Wyjątkiem jest urządzenie, którego rozdzielczość wyświetlacza jest niższa
niż rozdzielczość portalu, wynosząca zwykle 1280x720.

#### Network settings
Ustawienia sieci.

##### Enable network cache
Buforuj żądania sieciowe, aby w większości przypadków przyspieszyć wczytywanie portalu. Wyłącz tę opcję, jeśli często
występują błędy uwierzytelniania lub inne problemy sieciowe.

##### Cache size
Rozmiar sieciowej pamięci podręcznej. Domyślnie: 20 MB.
