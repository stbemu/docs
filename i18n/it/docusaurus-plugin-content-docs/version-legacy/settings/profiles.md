---
id: profiles
title: Profili
sidebar_label: Profili
---

# Profili STB {/* #stb-profiles */}

Un **profilo STB** è un insieme di opzioni per emulare un decoder nell'app. Al primo avvio l'app crea un profilo. Puoi modificarlo o aggiungerne altri per caricare portali diversi sullo stesso dispositivo. Per creare un profilo, tocca due volte lo schermo per mostrare il menu in alto o a lato [^1]. Seleziona **Settings**, poi **Profiles**, dove puoi aggiungere o modificare i profili.

StbEmu non fornisce, ospita o indicizza contenuti multimediali o playlist IPTV. Gli utenti devono avere il diritto legale di accedere ai contenuti tramite l'emulatore.

[^1]: Se usi un telecomando 3D o un mouse, muovi il puntatore, fai clic sullo schermo e apri il menu dell'app in alto.

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
Il nome del profilo. Può essere qualsiasi stringa non vuota.

### Portal settings
Opzioni specifiche del portale.
##### Portal URL
L'URL del portale. Deve iniziare con uno schema (**http://**, **https://**, **ftp://**, ecc.).

##### Portal language
La lingua predefinita del portale, indicata con un codice di due lettere [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Impostazioni del proxy HTTP.

##### Use HTTP proxy
Abilita se vuoi usare un proxy HTTP.

##### Proxy host name
##### Proxy port

##### Portal is internal
Abilita questa opzione per usare un portale interno per dispositivi MAG.

##### Internal portal URL

### STB configuration
Le impostazioni principali dell'emulazione.

#### STB Model
Il modello di STB da emulare.

#### Firmware
Il **firmware** da emulare; non viene installato alcun firmware reale. Alcuni portali richiedono un firmware specifico. In tal caso, selezionalo nell'elenco se disponibile. La maggior parte dei modelli STB supportati offre solo il firmware **Generic**, che solitamente rappresenta la versione più recente.

Opzioni firmware disponibili:
* Generic: solitamente il firmware più recente disponibile.
* Custom (solo MAG 250): firmware personalizzabile. Usalo se devi modificare impostazioni specifiche del firmware.

La maggior parte degli utenti dovrebbe usare il firmware **Generic**, selezionato per impostazione predefinita.

#### Firmware settings
Questa opzione è disponibile solo con il firmware **Custom**, attualmente supportato solo per MAG 250. Usala per configurare impostazioni specifiche del firmware, come la versione o una stringa User Agent personalizzata.

#### User Agent
La stringa User Agent del browser web dell'app.

#### Screen resolution
La risoluzione da emulare; non cambia la risoluzione reale dello schermo. Scegli una risoluzione supportata dal portale, solitamente **1280x720**.

#### MAC address
L'indirizzo MAC del dispositivo emulato. Puoi usare l'indirizzo MAC di un MAG 250 reale di tua proprietà oppure 12 cifre esadecimali casuali (0–9, A–F), raggruppate in coppie separate da due punti. [^wrong_mac]

La maggior parte dei portali richiede che l'indirizzo MAC inizi con 00:1A:79.

[^wrong_mac]: Su alcuni dispositivi con solo Wi-Fi, l'indirizzo MAC generato può essere **00:1A:79:00:00:00**. Significa che l'app non ha potuto rilevarlo correttamente a causa delle restrizioni di Android. Sostituisci la parte **00:00:00** con cifre esadecimali casuali, mantenendo i due punti tra le coppie.

#### Serial number
Il numero di serie del dispositivo emulato. La maggior parte dei portali non lo controlla, quindi in genere va bene una stringa di testo qualsiasi.

#### Device ID
Impostazioni dell'identificativo del dispositivo.

##### Use MAC-based device ID
Genera l'identificativo a partire dall'indirizzo MAC del dispositivo. Premi **Reset device ID** dopo aver abilitato o disabilitato questa opzione per rigenerarlo.

##### Send Device ID
Invia l'identificativo quando il portale lo richiede. Se disabilitato, l'app invia una stringa vuota.

##### Device ID random seed
Il valore iniziale usato per generare l'identificativo. Usa lo stesso valore su tutti i dispositivi con lo stesso URL del portale e indirizzo MAC. Premi **Reset device ID** dopo averlo modificato.

##### Device ID value
L'identificativo del dispositivo. Usa il valore generato o inseriscine uno tuo.

##### Custom device ID 2 and signature
Abilita questa opzione per modificare Device ID 2 e la firma.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Rigenera **Device ID**, **Device ID 2** e la firma.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
L'indirizzo IP inviato a un portale su richiesta. È un indirizzo emulato, non l'indirizzo IP reale del dispositivo. La maggior parte dei portali non usa queste informazioni, quindi solitamente non serve modificarlo.
### Media player settings

Impostazioni del lettore multimediale per questo profilo.
#### Media player
Seleziona il lettore multimediale predefinito per questo profilo.

| Lettore         | Descrizione                                                                                                                                          | Nota                                                 |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo             | [GitHub](https://github.com/google/ExoPlayer)                                                                                                        | Il lettore predefinito, consigliato sulla maggior parte dei dispositivi |
| VLC             | [Sito web](https://www.videolan.org)                                                                                                                 |                                                         |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk             | [GitHub](https://github.com/bilibili/ijkplayer)                                                                                                      | Non supporta i sottotitoli                               |
| Internal player | Usa il lettore di Android. I codec supportati dipendono dalla versione Android del dispositivo.                                                          | Non supporta i sottotitoli                               |
| External player | Puoi usare quasi qualsiasi lettore esterno. L'integrazione con l'emulatore non è disponibile; i flussi si aprono in un'altra app. |                                                         |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
