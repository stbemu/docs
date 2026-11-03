---
id: profiles
title: Profili
sidebar_label: Profili
---

# STB profili {/* #stb-profiles */}

**STB profil** je skup opcija za emulaciju televizijskog prijamnika u aplikaciji. Aplikacija stvara jedan profil pri prvom pokretanju.
Možete ga uređivati ili dodati više profila za učitavanje različitih portala na istom uređaju.
Za stvaranje profila dvaput dodirnite zaslon kako biste prikazali izbornik na vrhu ili sa strane [^1].
Odaberite **Settings**, zatim **Profiles**, gdje možete dodavati ili uređivati profile.

StbEmu ne pruža, ne pohranjuje niti indeksira medijski sadržaj ni IPTV popise za reprodukciju.
Korisnici moraju imati zakonsko pravo na sadržaj kojem pristupaju putem emulatora.

[^1]: Ako upotrebljavate 3D daljinski upravljač ili miš, pomaknite pokazivač, kliknite zaslon i otvorite izbornik aplikacije na vrhu.

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
Naziv profila. Može biti bilo koji niz znakova koji nije prazan.

### Portal settings
Opcije specifične za portal.
##### Portal URL
URL portala. Mora počinjati shemom (**http://**, **https://**, **ftp://** itd.).

##### Portal language
Zadani jezik portala, naveden dvoslovnim kodom jezika prema standardu [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Postavke HTTP proxyja.

##### Use HTTP proxy
Uključite ako želite upotrebljavati HTTP proxy.

##### Proxy host name
##### Proxy port

##### Portal is internal
Uključite ovu opciju za upotrebu internog portala za MAG uređaje.

##### Internal portal URL

### STB configuration
Glavne postavke emulacije.

#### STB Model
Model STB uređaja koji se emulira.

#### Firmware
**Firmver** koji se emulira; ne instalira se stvarni firmver. Neki portali zahtijevaju određeni firmver.
U tom slučaju odaberite ga s popisa ako je dostupan.
Većina podržanih STB modela nudi samo firmver **Generic**, koji obično predstavlja najnoviju verziju.

Dostupne opcije firmvera:
* Generic: obično najnoviji dostupni firmver.
* Custom (samo MAG 250): prilagodljivi firmver. Upotrijebite ga ako trebate promijeniti određene postavke firmvera.

Većina korisnika trebala bi upotrebljavati firmver **Generic** (zadano odabran).

#### Firmware settings
Ova je opcija dostupna samo uz firmver **Custom** (trenutačno podržan samo za MAG 250).
Upotrijebite je za konfiguriranje određenih postavki firmvera, kao što su verzija ili prilagođeni niz User Agent.

#### User Agent
Niz User Agent za web-preglednik aplikacije.

#### Screen resolution
Razlučivost zaslona koja se emulira; time se ne mijenja stvarna razlučivost zaslona.
Odaberite razlučivost koju vaš portal podržava, obično **1280x720**.

#### MAC address
MAC adresa emuliranog uređaja. Možete upotrijebiti MAC adresu stvarnog MAG 250 uređaja koji posjedujete
ili 12 nasumičnih heksadekadskih znamenki (0–9, A–F), grupiranih u parove odvojene dvotočkama. [^wrong_mac]

Većina portala zahtijeva da MAC adresa počinje s 00:1A:79.

[^wrong_mac]: Na nekim uređajima koji imaju samo Wi-Fi generirana MAC adresa može biti **00:1A:79:00:00:00**.
    To znači da je aplikacija nije mogla ispravno otkriti zbog ograničenja Androida.
    Zamijenite dio **00:00:00** nasumičnim heksadekadskim znamenkama, zadržavajući dvotočke između parova.

#### Serial number
Serijski broj emuliranog uređaja. Većina portala ga ne provjerava, pa će obično raditi bilo koji tekstni niz.

#### Device ID
Postavke ID-a uređaja.

##### Use MAC-based device ID
Generirajte ID uređaja iz MAC adrese uređaja. Pritisnite **Reset device ID** nakon uključivanja ili
isključivanja ove opcije za ponovno generiranje ID-a.

##### Send Device ID
Pošaljite ID uređaja kada ga portal zatraži. Ako je opcija isključena, aplikacija šalje prazan niz.

##### Device ID random seed
Početna vrijednost za generiranje ID-a uređaja. Upotrijebite istu početnu vrijednost na svim uređajima koji upotrebljavaju isti URL portala i
MAC adresu. Pritisnite **Reset device ID** nakon promjene ove vrijednosti.

##### Device ID value
ID uređaja. Upotrijebite generiranu vrijednost ili unesite vlastitu.

##### Custom device ID 2 and signature
Uključite ovu opciju za uređivanje Device ID 2 i potpisa.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Ponovno generirajte **Device ID**, **Device ID 2** i potpis.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
IP adresa koja se šalje portalu na zahtjev. To je emulirana adresa, a ne stvarna IP adresa uređaja.
Većina portala ne upotrebljava ove podatke, pa ih obično ne trebate mijenjati.
### Media player settings

Postavke reproduktora medija za ovaj profil.
#### Media player
Odaberite zadani reproduktor medija za ovaj profil.

| Reproduktor | Opis | Napomena |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo             | [GitHub](https://github.com/google/ExoPlayer)                                                                                                        | Zadani reproduktor, preporučen za većinu uređaja |
| VLC             | [Web-stranica](https://www.videolan.org)                                                                                                                 |                                                         |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk             | [GitHub](https://github.com/bilibili/ijkplayer)                                                                                                      | Ne podržava titlove |
| Internal player | Upotrebljava Androidov reproduktor. Podržani kodeci ovise o verziji Androida na uređaju. | Ne podržava titlove |
| External player | Upotrijebite gotovo bilo koji vanjski reproduktor. Integracija s emulatorom nije dostupna; medijski prijenosi otvaraju se u drugoj aplikaciji. |                                                         |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
