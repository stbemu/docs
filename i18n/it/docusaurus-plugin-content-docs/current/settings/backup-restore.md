---
id: backup-restore
title: Backup e ripristino
sidebar_label: Backup e ripristino
---

# Backup e ripristino {/* #backup--restore */}

Apri **Impostazioni > Backup e ripristino**. Questa categoria è disponibile solo se le operazioni di backup sono abilitate nella tua app.

## Salvare o condividere un backup {/* #save-or-share-a-backup */}

Seleziona **Salva impostazioni e profili…** e scegli una destinazione nel selettore di documenti di Android. Seleziona **Condividi impostazioni e profili…** per creare un backup e inviarlo tramite l'interfaccia di condivisione di Android.

Se non è disponibile un selettore di documenti, l'app usa le cartelle di backup accessibili e il proprio browser di file. **Sfoglia i backup salvati** elenca i backup trovati nelle cartelle disponibili. Le autorizzazioni del dispositivo e i fornitori di file disponibili possono limitare i file accessibili.

## Ripristinare un backup {/* #restore-a-backup */}

1. Seleziona **Ripristina impostazioni e profili…** e scegli un backup, oppure selezionane uno dal browser dei backup salvati.
2. Controlla il nome del file, il numero di profili e gli effetti del ripristino elencati.
3. Conferma il ripristino. Annullare il selettore o negare un'autorizzazione non lo avvia.

Il ripristino aggiorna i profili corrispondenti, ripristina le impostazioni dell'app e sostituisce le assegnazioni dei tasti dei telecomandi. L'identità del servizio Companion, le credenziali, i registri dei dispositivi revocati e la cronologia delle operazioni non sono inclusi nei backup portabili.

:::warning
Il ripristino applica le modifiche in più passaggi. Se un passaggio successivo fallisce, le modifiche precedenti potrebbero essere già state salvate. Ricarica le impostazioni e controlla la configurazione attuale dopo un errore. In questo flusso di ripristino locale non esistono né un annullamento dell'intero ripristino né una modalità selezionabile di unione/sostituzione.
:::
