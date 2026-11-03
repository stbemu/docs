---
id: profiles
title: Profili
sidebar_label: Profili
---

# Profili STB {/* #stb-profiles */}

Un **profilo STB** è un insieme di opzioni per emulare un decoder nell'app. Al primo avvio l'app crea un profilo. Puoi modificarlo o aggiungerne altri per caricare portali diversi sullo stesso dispositivo. Apri **Settings > Profiles** e scegli **Add profile**, oppure seleziona un profilo esistente per modificarlo. La panoramica raggruppa le opzioni in **Connection**, **Playback & device** e **Manage profile**. Le azioni disponibili dipendono dall'edizione dell'app e dalle restrizioni del profilo. Il profilo attivo non può essere eliminato: passa a un altro profilo prima di eliminarlo. L'eliminazione richiede conferma.

Le modifiche al testo e alle scelte richiedono conferma; gli interruttori salvano immediatamente. Vedi [Salvataggio delle modifiche](/settings#saving-changes) per errori di convalida, conflitti e modifiche salvate che richiedono un aggiornamento dell'app in esecuzione.

StbEmu non fornisce, ospita o indicizza contenuti multimediali o playlist IPTV. Gli utenti devono avere il diritto legale di accedere ai contenuti tramite l'emulatore.

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
Il nome del profilo. Può essere qualsiasi stringa non vuota.

### Portal settings
Opzioni specifiche del portale.
##### Portal URL
Inserisci un URL assoluto **http://** o **https://**. Sono supportati host della rete locale, localhost, indirizzi IPv6 e nomi di dominio internazionalizzati. Gli URL di rete non devono contenere spazi. Per un portale interno è accettato anche un percorso assoluto del filesystem o un URL assoluto **file://** supportato. Il nuovo editor non accetta URL FTP.

##### Portal language
La lingua predefinita del portale, indicata con un codice di due lettere [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Impostazioni del proxy HTTP.

##### Use HTTP proxy
Abilita se vuoi usare un proxy HTTP.

##### Proxy host name
L'host del proxy è separato dalla porta; l'host predefinito è 127.0.0.1.
##### Proxy port
Valore predefinito: 3128. Gli editor di host e porta sono disponibili solo se **Use HTTP proxy** è abilitato.

##### Portal is internal
Abilita questa opzione per usare un portale interno per dispositivi MAG. Un URL locale la abilita automaticamente e rende l'interruttore non disponibile. Passare a un URL di rete cancella l'impostazione automatica del portale interno.

##### Internal portal URL
Usa il campo **Portal URL** per il percorso locale o l'URL di file; non esiste un editor separato per l'URL interno.

Per installare un portale, apri **Settings > Profiles > il tuo profilo > Portal settings**, usa l'azione di installazione e seleziona l'archivio. Attendi l'estrazione e conferma l'URL locale proposto. Installare i file e accettare l'URL sono passaggi separati. Usa l'azione di rimozione in **Portal settings** per rimuovere un portale interno installato.

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
Questa opzione è disponibile solo con il firmware **Custom**, attualmente supportato solo per MAG 250. Configura le versioni del motore del lettore, delle API JavaScript e STB, oltre a versione, descrizione e data dell'immagine. Abilita l'uso di uno User Agent personalizzato prima di modificarne la stringa.

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
Il valore iniziale usato per generare l'identificativo. Usa lo stesso valore su tutti i dispositivi con lo stesso URL del portale e indirizzo MAC. Confermare una modifica del valore rigenera automaticamente gli identificativi. Non premere Reset se vuoi conservarlo: Reset lo cancella.

##### Device ID value
L'identificativo del dispositivo. Usa il valore generato o inseriscine uno tuo.

##### Custom device ID 2 and signature
Abilita questa opzione per modificare Device ID 2 e la firma.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Dopo la conferma, cancella il valore iniziale e rigenera **Device ID**, **Device ID 2** e la firma dai valori attuali del profilo. Le altre impostazioni del profilo vengono mantenute.

La modifica manuale di **Device ID** è disponibile solo con **Send Device ID** abilitato e gli identificativi basati su MAC disabilitati. Per modificare **Device ID 2** e **Signature** serve anche **Custom device ID 2 and signature**. I valori derivati automaticamente rimangono leggibili quando la modifica non è disponibile.

#### Hardware settings
##### Vendor
##### Hardware version

Le opzioni del dispositivo includono anche la compatibilità Ministra e il reindirizzamento del browser. Modificale solo se richiesto dal portale.

### Media player settings

Impostazioni del lettore multimediale per questo profilo.
#### Media player
Seleziona il lettore multimediale predefinito per questo profilo.

L'elenco include la selezione automatica, Exo, il lettore interno di Android e un lettore esterno, oltre agli altri lettori disponibili nella tua build. Scegli tra le opzioni visualizzate nell'app. I codec supportati dal lettore interno dipendono da Android; i lettori esterni aprono i flussi in un'altra app.

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
Abilita UDPXY solo dopo aver inserito un URL HTTP/HTTPS valido del server.
##### UDPXY server URL
Puoi inserire l'URL mentre UDPXY è disattivato. Un URL vuoto è ammesso solo quando è disattivato; un URL non vuoto deve essere un indirizzo HTTP/HTTPS valido.
##### Overwrite stream protocol
Scegli il protocollo da usare per il flusso quando UDPXY è abilitato.
### Advanced settings
Le opzioni di compatibilità del profilo comprendono patch CSS, rilevamento dell'emulatore, correzioni del colore di sfondo, dei file locali e del supporto AJAX, oltre agli eventi di ritorno e dei tasti per lettori esterni. Le opzioni degli eventi Back, Exit e OK dipendono dall'opzione dell'evento di ritorno all'elenco dei canali. Modificale solo se richiesto dal portale o dal lettore esterno.
