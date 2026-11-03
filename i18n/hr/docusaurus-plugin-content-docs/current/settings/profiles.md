---
id: profiles
title: Profili
sidebar_label: Profili
---

# STB profili {/* #stb-profiles */}

**STB profil** je skup opcija za emulaciju televizijskog prijamnika u aplikaciji. Aplikacija stvara jedan profil pri prvom pokretanju.
Možete ga uređivati ili dodati više profila za učitavanje različitih portala na istom uređaju.
Otvorite **Settings > Profiles** i odaberite **Add profile** ili odaberite postojeći profil za uređivanje.
Pregled grupira opcije pod **Connection**, **Playback & device** i **Manage profile**.
Dostupne radnje ovise o izdanju aplikacije i ograničenjima profila. Aktivni profil nije moguće izbrisati;
prije brisanja prijeđite na drugi profil. Brisanje zahtijeva potvrdu.

Promjene teksta i odabira zahtijevaju potvrdu; prekidači se spremaju odmah. Pogledajte [Spremanje promjena](/settings#saving-changes)
za pogreške provjere valjanosti, sukobljene izmjene i spremljene promjene koje zahtijevaju osvježavanje tijekom rada.

StbEmu ne pruža, ne pohranjuje niti indeksira medijski sadržaj ni IPTV popise za reprodukciju.
Korisnici moraju imati zakonsko pravo na sadržaj kojem pristupaju putem emulatora.

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
Naziv profila. Može biti bilo koji niz znakova koji nije prazan.

### Portal settings
Opcije specifične za portal.
##### Portal URL
Unesite apsolutni **http://** ili **https://** URL. Podržani su poslužitelji u lokalnoj mreži, localhost, IPv6 adrese i međunarodni nazivi domena. Mrežni URL-ovi ne smiju sadržavati bjeline.
Za interni portal prihvaća se i apsolutna putanja datotečnog sustava ili podržani apsolutni **file://** URL. Redizajnirani uređivač ne prihvaća FTP URL-ove.

##### Portal language
Zadani jezik portala, naveden dvoslovnim kodom jezika prema standardu [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Postavke HTTP proxyja.

##### Use HTTP proxy
Uključite ako želite upotrebljavati HTTP proxy.

##### Proxy host name
Adresa proxy poslužitelja odvojena je od porta; zadana adresa je 127.0.0.1.
##### Proxy port
Zadano: 3128. Uređivači adrese i porta dostupni su samo dok je **Use HTTP proxy** uključen.

##### Portal is internal
Uključite ovu opciju za upotrebu internog portala za MAG uređaje. Lokalni URL portala automatski je uključuje i čini prekidač nedostupnim. Promjena na mrežni URL uklanja automatsku postavku internog portala.

##### Internal portal URL
Upotrijebite polje **Portal URL** za lokalnu putanju ili URL datoteke; nema zasebnog uređivača internog URL-a.

Za instalaciju portala otvorite **Settings > Profiles > vaš profil > Portal settings**, upotrijebite radnju instalacije i odaberite njegovu arhivu. Pričekajte raspakiravanje,
a zatim potvrdite ponuđeni lokalni URL. Instalacija datoteka i prihvaćanje URL-a zasebni su koraci.
Upotrijebite radnju uklanjanja u **Portal settings** za uklanjanje instaliranog internog portala.

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
Konfigurirajte verzije reprodukcijskog mehanizma, JavaScript API-ja i STB API-ja te verziju, opis i datum slike firmvera.
Omogućite upotrebu prilagođenog User Agenta prije uređivanja prilagođenog niza User Agent.

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
MAC adresu. Potvrdom promijenjene početne vrijednosti ID-ovi se automatski ponovno generiraju.
Nemojte pritisnuti Reset ako želite zadržati početnu vrijednost: Reset je briše.

##### Device ID value
ID uređaja. Upotrijebite generiranu vrijednost ili unesite vlastitu.

##### Custom device ID 2 and signature
Uključite ovu opciju za uređivanje Device ID 2 i potpisa.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Nakon potvrde briše se početna vrijednost te se **Device ID**, **Device ID 2** i potpis ponovno generiraju iz trenutačnih vrijednosti profila. Ostale postavke profila zadržavaju se.

Ručno uređivanje **Device ID** dostupno je samo kada je **Send Device ID** uključen, a ID-ovi temeljeni na MAC adresi isključeni.
Za uređivanje **Device ID 2** i **Signature** potreban je i **Custom device ID 2 and signature**.
Automatski izvedene vrijednosti ostaju čitljive kada uređivanje nije dostupno.

#### Hardware settings
##### Vendor
##### Hardware version

Opcije uređaja uključuju i kompatibilnost s Ministrom te preusmjeravanje preglednika. Mijenjajte ih samo prema zahtjevima portala.

### Media player settings

Postavke reproduktora medija za ovaj profil.
#### Media player
Odaberite zadani reproduktor medija za ovaj profil.

Popis uključuje automatski odabir, Exo, interni reproduktor Androida i vanjski reproduktor,
kao i sve dodatne reproduktore dostupne u vašem izdanju. Odaberite jednu od mogućnosti prikazanih u aplikaciji.
Podrška internog reproduktora za kodeke ovisi o Androidu; vanjski reproduktori otvaraju prijenose u drugoj aplikaciji.

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
Uključite UDPXY tek nakon unosa valjanog HTTP/HTTPS URL-a poslužitelja.
##### UDPXY server URL
URL možete unijeti dok je UDPXY isključen. Prazan URL dopušten je samo dok je isključen; URL koji nije prazan mora biti valjan HTTP/HTTPS URL.
##### Overwrite stream protocol
Odaberite zamjenski protokol prijenosa kada je UDPXY uključen.
### Advanced settings
Opcije kompatibilnosti pojedinog profila uključuju CSS zakrpe, otkrivanje emulatora, ispravke boje pozadine, lokalnih datoteka i AJAX-a
te događaje povratka i tipki za vanjske reproduktore. Opcije događaja Back, Exit i OK ovise o opciji događaja povratka na popis kanala.
Mijenjajte ih samo ako to zahtijeva vaš portal ili vanjski reproduktor.
