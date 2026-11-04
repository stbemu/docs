---
id: profiles
title: Profili
sidebar_label: Profili
---

# STB profili {/* #stb-profiles */}

**STB profil** je skup opcija za emulaciju televizijskog prijamnika u aplikaciji. Aplikacija stvara jedan profil pri prvom pokretanju.
Možete ga uređivati ili dodati više profila za učitavanje različitih portala na istom uređaju.
Otvorite **Postavke > Profili** i odaberite **Dodaj profil** ili odaberite postojeći profil za uređivanje.
Pregled grupira opcije pod **Veza**, **Reprodukcija i uređaj** i **Upravljaj profilom**.
Dostupne radnje ovise o izdanju aplikacije i ograničenjima profila. Aktivni profil nije moguće izbrisati;
prije brisanja prijeđite na drugi profil. Brisanje zahtijeva potvrdu.

Promjene teksta i odabira zahtijevaju potvrdu; prekidači se spremaju odmah. Pogledajte [Spremanje promjena](/settings#saving-changes)
za pogreške provjere valjanosti, sukobljene izmjene i spremljene promjene koje zahtijevaju osvježavanje tijekom rada.

StbEmu ne pruža, ne pohranjuje niti indeksira medijski sadržaj ni IPTV popise za reprodukciju.
Korisnici moraju imati zakonsko pravo na sadržaj kojem pristupaju putem emulatora.

- [Naziv profila](#profile-name)
- [Postavke portala](#portal-settings)
    - [URL portala](#portal-url)
    - [Jezik portala](#portal-language)
    - [Postavke HTTP proxyja](#http-proxy-settings)
        - [Upotrijebi HTTP proxy](#use-http-proxy)
        - [Naziv proxy računala](#proxy-host-name)
        - [Proxy priključak](#proxy-port)
    - [Portal je interni](#portal-is-internal)
    - [URL portala (Portal je interni)](#internal-portal-url)
- [Konfiguracija STB-a](#stb-configuration)
    - [Model STB-a](#stb-model)
    - [Firmver](#firmware)
    - [Postavke firmvera](#firmware-settings)
    - [User Agent](#user-agent)
    - [Razlučivost zaslona](#screen-resolution)
    - [MAC adresa](#mac-address)
    - [Serijski broj](#serial-number)
    - [ID uređaja](#device-id)
        - [Upotrijebi ID uređaja temeljen na MAC adresi](#use-mac-based-device-id)
        - [Šalji ID uređaja](#send-device-id)
        - [Nasumična početna vrijednost ID-a uređaja](#device-id-random-seed)
        - [ID uređaja](#device-id-value)
        - [Prilagođeni ID uređaja 2 i potpis](#custom-device-id-2-and-signature)
        - [ID uređaja 2](#device-id-2)
        - [Potpis](#signature)
        - [Vrati ID uređaja na zadanu vrijednost…](#reset-device-id-to-default-value)
    - [Postavke hardvera](#hardware-settings)
        - [Proizvođač](#vendor)
        - [Inačica hardvera](#hardware-version)
- [Postavke reproduktora medija](#media-player-settings)
    - [Reproduktor medija](#media-player)
    - [Postavke UDPXY-ja](#udpxy-settings)
        - [Omogući podršku za UDPXY](#enable-udxpy-support)
        - [URL UDPXY poslužitelja](#udpxy-server-url)
        - [Nadjačaj protokol toka](#overwrite-stream-protocol)
- [Napredne postavke](#advanced-settings)

### Naziv profila {/* #profile-name */}
Naziv profila. Može biti bilo koji niz znakova koji nije prazan.

### Postavke portala {/* #portal-settings */}
Opcije specifične za portal.
##### URL portala {/* #portal-url */}
Unesite apsolutni **http://** ili **https://** URL. Podržani su poslužitelji u lokalnoj mreži, localhost, IPv6 adrese i međunarodni nazivi domena. Mrežni URL-ovi ne smiju sadržavati bjeline.
Za interni portal prihvaća se i apsolutna putanja datotečnog sustava ili podržani apsolutni **file://** URL. Redizajnirani uređivač ne prihvaća FTP URL-ove.

##### Jezik portala {/* #portal-language */}
Zadani jezik portala, naveden dvoslovnim kodom jezika prema standardu [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### Postavke HTTP proxyja {/* #http-proxy-settings */}
Postavke HTTP proxyja.

##### Upotrijebi HTTP proxy {/* #use-http-proxy */}
Uključite ako želite upotrebljavati HTTP proxy.

##### Naziv proxy računala {/* #proxy-host-name */}
Adresa proxy poslužitelja odvojena je od porta; zadana adresa je 127.0.0.1.
##### Proxy priključak {/* #proxy-port */}
Zadano: 3128. Uređivači adrese i porta dostupni su samo dok je **Upotrijebi HTTP proxy** uključen.

##### Portal je interni {/* #portal-is-internal */}
Uključite ovu opciju za upotrebu internog portala za MAG uređaje. Lokalni URL portala automatski je uključuje i čini prekidač nedostupnim. Promjena na mrežni URL uklanja automatsku postavku internog portala.

##### URL portala (Portal je interni) {/* #internal-portal-url */}
Upotrijebite polje **URL portala** za lokalnu putanju ili URL datoteke; nema zasebnog uređivača internog URL-a.

Za instalaciju portala otvorite **Postavke > Profili > vaš profil > Postavke portala**, upotrijebite radnju instalacije i odaberite njegovu arhivu. Pričekajte raspakiravanje,
a zatim potvrdite ponuđeni lokalni URL. Instalacija datoteka i prihvaćanje URL-a zasebni su koraci.
Upotrijebite radnju uklanjanja u **Postavke portala** za uklanjanje instaliranog internog portala.

### Konfiguracija STB-a {/* #stb-configuration */}
Glavne postavke emulacije.

#### Model STB-a {/* #stb-model */}
Model STB uređaja koji se emulira.

#### Firmver {/* #firmware */}
**Firmver** koji se emulira; ne instalira se stvarni firmver. Neki portali zahtijevaju određeni firmver.
U tom slučaju odaberite ga s popisa ako je dostupan.
Većina podržanih STB modela nudi samo firmver **Generic**, koji obično predstavlja najnoviju verziju.

Dostupne opcije firmvera:
* Generic: obično najnoviji dostupni firmver.
* Custom (samo MAG 250): prilagodljivi firmver. Upotrijebite ga ako trebate promijeniti određene postavke firmvera.

Većina korisnika trebala bi upotrebljavati firmver **Generic** (zadano odabran).

#### Postavke firmvera {/* #firmware-settings */}
Ova je opcija dostupna samo uz firmver **Custom** (trenutačno podržan samo za MAG 250).
Konfigurirajte verzije reprodukcijskog mehanizma, JavaScript API-ja i STB API-ja te verziju, opis i datum slike firmvera.
Omogućite upotrebu prilagođenog User Agenta prije uređivanja prilagođenog niza User Agent.

#### User Agent
Niz User Agent za web-preglednik aplikacije.

#### Razlučivost zaslona {/* #screen-resolution */}
Razlučivost zaslona koja se emulira; time se ne mijenja stvarna razlučivost zaslona.
Odaberite razlučivost koju vaš portal podržava, obično **1280x720**.

#### MAC adresa {/* #mac-address */}
MAC adresa emuliranog uređaja. Možete upotrijebiti MAC adresu stvarnog MAG 250 uređaja koji posjedujete
ili 12 nasumičnih heksadekadskih znamenki (0–9, A–F), grupiranih u parove odvojene dvotočkama. [^wrong_mac]

Većina portala zahtijeva da MAC adresa počinje s 00:1A:79.

[^wrong_mac]: Na nekim uređajima koji imaju samo Wi-Fi generirana MAC adresa može biti **00:1A:79:00:00:00**.
    To znači da je aplikacija nije mogla ispravno otkriti zbog ograničenja Androida.
    Zamijenite dio **00:00:00** nasumičnim heksadekadskim znamenkama, zadržavajući dvotočke između parova.

#### Serijski broj {/* #serial-number */}
Serijski broj emuliranog uređaja. Većina portala ga ne provjerava, pa će obično raditi bilo koji tekstni niz.

#### ID uređaja {/* #device-id */}
Postavke ID-a uređaja.

##### Upotrijebi ID uređaja temeljen na MAC adresi {/* #use-mac-based-device-id */}
Generirajte ID uređaja iz MAC adrese uređaja. Pritisnite **Vrati ID uređaja na zadanu vrijednost…** nakon uključivanja ili
isključivanja ove opcije za ponovno generiranje ID-a.

##### Šalji ID uređaja {/* #send-device-id */}
Pošaljite ID uređaja kada ga portal zatraži. Ako je opcija isključena, aplikacija šalje prazan niz.

##### Nasumična početna vrijednost ID-a uređaja {/* #device-id-random-seed */}
Početna vrijednost za generiranje ID-a uređaja. Upotrijebite istu početnu vrijednost na svim uređajima koji upotrebljavaju isti URL portala i
MAC adresu. Potvrdom promijenjene početne vrijednosti ID-ovi se automatski ponovno generiraju.
Nemojte pritisnuti **Vrati ID uređaja na zadanu vrijednost…** ako želite zadržati početnu vrijednost: ova radnja je briše.

##### ID uređaja {/* #device-id-value */}
ID uređaja. Upotrijebite generiranu vrijednost ili unesite vlastitu.

##### Prilagođeni ID uređaja 2 i potpis {/* #custom-device-id-2-and-signature */}
Uključite ovu opciju za uređivanje polja **ID uređaja 2** i potpisa.

##### ID uređaja 2 {/* #device-id-2 */}
##### Potpis {/* #signature */}
##### Vrati ID uređaja na zadanu vrijednost… {/* #reset-device-id-to-default-value */}
Nakon potvrde briše se početna vrijednost te se **ID uređaja**, **ID uređaja 2** i potpis ponovno generiraju iz trenutačnih vrijednosti profila. Ostale postavke profila zadržavaju se.

Ručno uređivanje polja **ID uređaja** dostupno je samo kada je opcija **Šalji ID uređaja** uključena, a ID-ovi temeljeni na MAC adresi isključeni.
Za uređivanje polja **ID uređaja 2** i **Potpis** potrebno je uključiti i opciju **Prilagođeni ID uređaja 2 i potpis**.
Automatski izvedene vrijednosti ostaju čitljive kada uređivanje nije dostupno.

#### Postavke hardvera {/* #hardware-settings */}
##### Proizvođač {/* #vendor */}
##### Inačica hardvera {/* #hardware-version */}

Opcije uređaja uključuju i kompatibilnost s Ministrom te preusmjeravanje preglednika. Mijenjajte ih samo prema zahtjevima portala.

### Postavke reproduktora medija {/* #media-player-settings */}

Postavke reproduktora medija za ovaj profil.
#### Reproduktor medija {/* #media-player */}
Odaberite zadani reproduktor medija za ovaj profil.

Popis uključuje automatski odabir, Exo, interni reproduktor Androida i vanjski reproduktor,
kao i sve dodatne reproduktore dostupne u vašem izdanju. Odaberite jednu od mogućnosti prikazanih u aplikaciji.
Podrška internog reproduktora za kodeke ovisi o Androidu; vanjski reproduktori otvaraju prijenose u drugoj aplikaciji.

#### Postavke UDPXY-ja {/* #udpxy-settings */}
##### Omogući podršku za UDPXY {/* #enable-udxpy-support */}
Uključite UDPXY tek nakon unosa valjanog HTTP/HTTPS URL-a poslužitelja.
##### URL UDPXY poslužitelja {/* #udpxy-server-url */}
URL možete unijeti dok je UDPXY isključen. Prazan URL dopušten je samo dok je isključen; URL koji nije prazan mora biti valjan HTTP/HTTPS URL.
##### Nadjačaj protokol toka {/* #overwrite-stream-protocol */}
Odaberite zamjenski protokol prijenosa kada je UDPXY uključen.
### Napredne postavke {/* #advanced-settings */}
Opcije kompatibilnosti pojedinog profila uključuju CSS zakrpe, otkrivanje emulatora, ispravke boje pozadine, lokalnih datoteka i AJAX-a
te događaje povratka i tipki za vanjske reproduktore. Opcije događaja Natrag, Izlaz i OK ovise o opciji događaja povratka na popis kanala.
Mijenjajte ih samo ako to zahtijeva vaš portal ili vanjski reproduktor.
