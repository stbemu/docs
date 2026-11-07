---
title: Connessione dei dispositivi
sidebar_label: Connessione dei dispositivi
---

# Connessione dei dispositivi {/* #connecting-devices */}

## Trovare StbEmu {/* #discover-stbemu */}

1. Collega il telefono o tablet e il dispositivo StbEmu alla stessa rete locale raggiungibile.
2. In StbEmu, apri **Settings > Companion** e attiva il servizio. Vedi le [impostazioni Companion di StbEmu](../settings/companion.md).
3. Apri la pagina **Devices** di Companion. I dispositivi verificati appaiono come schede salvate. Apri la scheda dell’installazione StbEmu che vuoi gestire.

![Pagina dei dispositivi durante la ricerca nella rete locale](/img/companion/devices-empty.png)

Se non appare nulla, verifica che l’accesso Companion sia attivato in StbEmu e che Android consenta l’accesso alla rete locale. Seleziona **Retry** oppure connettiti manualmente.

### Aggiungere un indirizzo manualmente {/* #add-an-address-manually */}

Seleziona **Add by IP address**. Inserisci **IPv4 or IPv6 address** e la porta mostrati in StbEmu, poi seleziona **Connect**. Lasciando la porta vuota viene usata **10000**. Inserisci un indirizzo IP, non l’URL di un sito o un nome host. L’inserimento manuale non evita la verifica o l’associazione. I dispositivi con un’associazione salvata valida possono riconnettersi senza inserire un nuovo codice.

![Dispositivo salvato in attesa di associazione](/img/companion/devices-saved.png)

## Associare un dispositivo {/* #pair-a-device */}

1. In **Settings > Companion** di StbEmu, avvia l’associazione per visualizzare un codice.
2. Nella pagina delle azioni del dispositivo in Companion, inserisci il codice in **Eight-digit pairing code**.
3. Seleziona **Pair device** e attendi **Connected**.

![Inserimento di un codice di associazione](/img/companion/pairing.png)

Se il codice scade, mostrane uno nuovo in StbEmu. Se la frequenza dei tentativi è limitata, attendi prima di riprovare. L’associazione viene salvata per le connessioni successive finché StbEmu continua ad autorizzarla. La revoca dell’accesso in StbEmu impedisce anche l’uso dell’autorizzazione salvata.

## Riconnettere, rinominare o rimuovere {/* #reconnect-rename-or-remove */}

**Disconnect** chiude la connessione e conserva il dispositivo salvato. Per riconnetterti, apri la sua scheda e seleziona **Connect**. Un cambio di rete può interrompere le connessioni; riconnettiti quando torna la connettività locale.

Usa il pulsante a matita (**Rename device**) per impostare un nome locale. **Use app name** ripristina il nome comunicato da StbEmu. Rinominare qui non rinomina StbEmu stesso.

Il pulsante del cestino (**Remove device**) richiede conferma. Rimuove da questo telefono la connessione e l’associazione salvate, conserva i file di backup e non cambia nulla in StbEmu. Il dispositivo rimosso non riapparirà automaticamente tramite il rilevamento. Per aggiungerlo nuovamente, usa **Add by IP address** e ripeti l’associazione.
