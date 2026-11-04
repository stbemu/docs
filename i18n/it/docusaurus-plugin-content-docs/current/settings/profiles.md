---
id: profiles
title: Profili
sidebar_label: Profili
---

# Profili STB {/* #stb-profiles */}

Un **profilo STB** è un insieme di opzioni per emulare un decoder nell'app. Al primo avvio l'app crea un profilo. Puoi modificarlo o aggiungerne altri per caricare portali diversi sullo stesso dispositivo. Apri **Impostazioni > Profili** e scegli **Aggiungi profilo**, oppure seleziona un profilo esistente per modificarlo. La panoramica raggruppa le opzioni in **Connessione**, **Riproduzione e dispositivo** e **Gestisci profilo**. Le azioni disponibili dipendono dall'edizione dell'app e dalle restrizioni del profilo. Il profilo attivo non può essere eliminato: passa a un altro profilo prima di eliminarlo. L'eliminazione richiede conferma.

Le modifiche al testo e alle scelte richiedono conferma; gli interruttori salvano immediatamente. Vedi [Salvataggio delle modifiche](/settings#saving-changes) per errori di convalida, conflitti e modifiche salvate che richiedono un aggiornamento dell'app in esecuzione.

StbEmu non fornisce, ospita o indicizza contenuti multimediali o playlist IPTV. Gli utenti devono avere il diritto legale di accedere ai contenuti tramite l'emulatore.

- [Nome del profilo](#profile-name)
- [Impostazioni del portale](#portal-settings)
    - [URL del portale](#portal-url)
    - [Lingua del portale](#portal-language)
    - [Impostazioni del proxy HTTP](#http-proxy-settings)
        - [Usa proxy HTTP](#use-http-proxy)
        - [Nome host del proxy](#proxy-host-name)
        - [Porta del proxy](#proxy-port)
    - [Il portale è interno](#portal-is-internal)
    - [URL del portale (Il portale è interno)](#internal-portal-url)
- [Configurazione STB](#stb-configuration)
    - [Modello STB](#stb-model)
    - [Firmware](#firmware)
    - [Impostazioni del firmware](#firmware-settings)
    - [Agente utente](#user-agent)
    - [Risoluzione dello schermo](#screen-resolution)
    - [Indirizzo MAC](#mac-address)
    - [Numero di serie](#serial-number)
    - [ID del dispositivo](#device-id)
        - [Usa ID del dispositivo basato su MAC](#use-mac-based-device-id)
        - [Invia ID del dispositivo](#send-device-id)
        - [Seme casuale dell'ID del dispositivo](#device-id-random-seed)
        - [ID del dispositivo](#device-id-value)
        - [ID2 del dispositivo e firma personalizzati](#custom-device-id-2-and-signature)
        - [ID del dispositivo 2](#device-id-2)
        - [Firma](#signature)
        - [Reimposta l'ID del dispositivo al valore predefinito…](#reset-device-id-to-default-value)
    - [Impostazioni hardware](#hardware-settings)
        - [Produttore](#vendor)
        - [Versione hardware](#hardware-version)
- [Impostazioni del lettore multimediale](#media-player-settings)
    - [Lettore multimediale](#media-player)
    - [Impostazioni UDPXY](#udpxy-settings)
        - [Attiva il supporto UDPXY](#enable-udxpy-support)
        - [URL del server UDPXY](#udpxy-server-url)
        - [Sostituisci protocollo del flusso](#overwrite-stream-protocol)
- [Impostazioni avanzate](#advanced-settings)

### Nome del profilo {/* #profile-name */}
Il nome del profilo. Può essere qualsiasi stringa non vuota.

### Impostazioni del portale {/* #portal-settings */}
Opzioni specifiche del portale.
##### URL del portale {/* #portal-url */}
Inserisci un URL assoluto **http://** o **https://**. Sono supportati host della rete locale, localhost, indirizzi IPv6 e nomi di dominio internazionalizzati. Gli URL di rete non devono contenere spazi. Per un portale interno è accettato anche un percorso assoluto del filesystem o un URL assoluto **file://** supportato. Il nuovo editor non accetta URL FTP.

##### Lingua del portale {/* #portal-language */}
La lingua predefinita del portale, indicata con un codice di due lettere [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### Impostazioni del proxy HTTP {/* #http-proxy-settings */}
Impostazioni del proxy HTTP.

##### Usa proxy HTTP {/* #use-http-proxy */}
Abilita se vuoi usare un proxy HTTP.

##### Nome host del proxy {/* #proxy-host-name */}
L'host del proxy è separato dalla porta; l'host predefinito è 127.0.0.1.
##### Porta del proxy {/* #proxy-port */}
Valore predefinito: 3128. Gli editor di host e porta sono disponibili solo se **Usa proxy HTTP** è abilitato.

##### Il portale è interno {/* #portal-is-internal */}
Abilita questa opzione per usare un portale interno per dispositivi MAG. Un URL locale la abilita automaticamente e rende l'interruttore non disponibile. Passare a un URL di rete cancella l'impostazione automatica del portale interno.

##### URL del portale (Il portale è interno) {/* #internal-portal-url */}
Usa il campo **URL del portale** per il percorso locale o l'URL di file; non esiste un editor separato per l'URL interno.

Per installare un portale, apri **Impostazioni > Profili > il tuo profilo > Impostazioni del portale**, usa l'azione di installazione e seleziona l'archivio. Attendi l'estrazione e conferma l'URL locale proposto. Installare i file e accettare l'URL sono passaggi separati. Usa l'azione di rimozione in **Impostazioni del portale** per rimuovere un portale interno installato.

### Configurazione STB {/* #stb-configuration */}
Le impostazioni principali dell'emulazione.

#### Modello STB {/* #stb-model */}
Il modello di STB da emulare.

#### Firmware
Il **Firmware** da emulare; non viene installato alcun Firmware reale. Alcuni portali richiedono un Firmware specifico. In tal caso, selezionalo nell'elenco se disponibile. La maggior parte dei modelli STB supportati offre solo il Firmware **Generic**, che solitamente rappresenta la versione più recente.

Opzioni Firmware disponibili:
* Generic: solitamente il Firmware più recente disponibile.
* Custom (solo MAG 250): Firmware personalizzabile. Usalo se devi modificare impostazioni specifiche del Firmware.

La maggior parte degli utenti dovrebbe usare il Firmware **Generic**, selezionato per impostazione predefinita.

#### Impostazioni del firmware {/* #firmware-settings */}
Questa opzione è disponibile solo con il Firmware **Custom**, attualmente supportato solo per MAG 250. Configura le versioni del motore del lettore, delle API JavaScript e STB, oltre a versione, descrizione e data dell'immagine. Abilita l'uso di uno Agente utente personalizzato prima di modificarne la stringa.

#### Agente utente {/* #user-agent */}
La stringa Agente utente del browser web dell'app.

#### Risoluzione dello schermo {/* #screen-resolution */}
La risoluzione da emulare; non cambia la risoluzione reale dello schermo. Scegli una risoluzione supportata dal portale, solitamente **1280x720**.

#### Indirizzo MAC {/* #mac-address */}
L'indirizzo MAC del dispositivo emulato. Puoi usare l'indirizzo MAC di un MAG 250 reale di tua proprietà oppure 12 cifre esadecimali casuali (0–9, A–F), raggruppate in coppie separate da due punti. [^wrong_mac]

La maggior parte dei portali richiede che l'indirizzo MAC inizi con 00:1A:79.

[^wrong_mac]: Su alcuni dispositivi con solo Wi-Fi, l'indirizzo MAC generato può essere **00:1A:79:00:00:00**. Significa che l'app non ha potuto rilevarlo correttamente a causa delle restrizioni di Android. Sostituisci la parte **00:00:00** con cifre esadecimali casuali, mantenendo i due punti tra le coppie.

#### Numero di serie {/* #serial-number */}
Il numero di serie del dispositivo emulato. La maggior parte dei portali non lo controlla, quindi in genere va bene una stringa di testo qualsiasi.

#### ID del dispositivo {/* #device-id */}
Impostazioni dell'identificativo del dispositivo.

##### Usa ID del dispositivo basato su MAC {/* #use-mac-based-device-id */}
Genera l'identificativo a partire dall'indirizzo MAC del dispositivo. Premi **Reimposta l'ID del dispositivo al valore predefinito…** dopo aver abilitato o disabilitato questa opzione per rigenerarlo.

##### Invia ID del dispositivo {/* #send-device-id */}
Invia l'identificativo quando il portale lo richiede. Se disabilitato, l'app invia una stringa vuota.

##### Seme casuale dell'ID del dispositivo {/* #device-id-random-seed */}
Il valore iniziale usato per generare l'identificativo. Usa lo stesso valore su tutti i dispositivi con lo stesso URL del portale e indirizzo MAC. Confermare una modifica del valore rigenera automaticamente gli identificativi. Non premere **Reimposta l'ID del dispositivo al valore predefinito…** se vuoi conservarlo: questa operazione lo cancella.

##### ID del dispositivo {/* #device-id-value */}
L'identificativo del dispositivo. Usa il valore generato o inseriscine uno tuo.

##### ID2 del dispositivo e firma personalizzati {/* #custom-device-id-2-and-signature */}
Abilita questa opzione per modificare ID del dispositivo 2 e la firma.

##### ID del dispositivo 2 {/* #device-id-2 */}
##### Firma {/* #signature */}
##### Reimposta l'ID del dispositivo al valore predefinito… {/* #reset-device-id-to-default-value */}
Dopo la conferma, cancella il valore iniziale e rigenera **ID del dispositivo**, **ID del dispositivo 2** e la firma dai valori attuali del profilo. Le altre impostazioni del profilo vengono mantenute.

La modifica manuale del campo **ID del dispositivo** è disponibile solo con l'opzione **Invia ID del dispositivo** abilitata e gli identificativi basati su MAC disabilitati. Per modificare i campi **ID del dispositivo 2** e **Firma** occorre anche abilitare l'opzione **ID2 del dispositivo e firma personalizzati**. I valori derivati automaticamente rimangono leggibili quando la modifica non è disponibile.

#### Impostazioni hardware {/* #hardware-settings */}
##### Produttore {/* #vendor */}
##### Versione hardware {/* #hardware-version */}

Le opzioni del dispositivo includono anche la compatibilità Ministra e il reindirizzamento del browser. Modificale solo se richiesto dal portale.

### Impostazioni del lettore multimediale {/* #media-player-settings */}

Impostazioni del lettore multimediale per questo profilo.
#### Lettore multimediale {/* #media-player */}
Seleziona il lettore multimediale predefinito per questo profilo.

L'elenco include la selezione automatica, Exo, il lettore interno di Android e un lettore esterno, oltre agli altri lettori disponibili nella tua build. Scegli tra le opzioni visualizzate nell'app. I codec supportati dal lettore interno dipendono da Android; i lettori esterni aprono i flussi in un'altra app.

#### Impostazioni UDPXY {/* #udpxy-settings */}
##### Attiva il supporto UDPXY {/* #enable-udxpy-support */}
Abilita UDPXY solo dopo aver inserito un URL HTTP/HTTPS valido del server.
##### URL del server UDPXY {/* #udpxy-server-url */}
Puoi inserire l'URL mentre UDPXY è disattivato. Un URL vuoto è ammesso solo quando è disattivato; un URL non vuoto deve essere un indirizzo HTTP/HTTPS valido.
##### Sostituisci protocollo del flusso {/* #overwrite-stream-protocol */}
Scegli il protocollo da usare per il flusso quando UDPXY è abilitato.
### Impostazioni avanzate {/* #advanced-settings */}
Le opzioni di compatibilità del profilo comprendono patch CSS, rilevamento dell'emulatore, correzioni del colore di sfondo, dei file locali e del supporto AJAX, oltre agli eventi di ritorno e dei tasti per lettori esterni. Le opzioni degli eventi Indietro, Esci e OK dipendono dall'opzione dell'evento di ritorno all'elenco dei canali. Modificale solo se richiesto dal portale o dal lettore esterno.
