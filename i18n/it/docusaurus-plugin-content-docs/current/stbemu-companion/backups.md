---
title: Backup e ripristino
sidebar_label: Backup e ripristino
---

# Backup e ripristino {/* #backups-and-restore */}

La raccolta **Backups** di Companion conserva in modo privato i backup JSON completati di StbEmu sul telefono o tablet. I file salvati restano disponibili offline. Questa raccolta è separata dal [backup di sistema Android](system-backup.md), che protegge lo stato proprio di Companion.

![Raccolta dei backup e creazione di un backup del dispositivo](/img/companion/backup-library.png)

## Salvare e gestire i file {/* #save-and-manage-files */}

- **Create backup:** apri l’azione **Create backup** di un dispositivo associato collegato, inserisci **Backup name** e seleziona **Create backup**. Attendi **Backup saved**.
- **Import backup:** apri **Backups** dal menu dell’app, seleziona **Import backup** e scegli un file JSON di StbEmu. Importazione, esportazione e condivisione locali non richiedono un dispositivo StbEmu collegato.
- **Export JSON:** seleziona questa azione sulla voce del backup nella raccolta, poi scegli una destinazione esterna.
- **Share JSON:** seleziona questa azione sulla voce del backup per aprire il pannello di condivisione Android. Aprirlo non conferma la consegna all’app selezionata.
- **Delete local backup:** conferma l’eliminazione di quella copia locale. Il dispositivo StbEmu di origine rimane invariato.

Il limite JSON è **16 MiB (16,777,216 byte)**. I file importati vengono convalidati e conservano i byte originali. Un file importato ha l’etichetta **Source device unknown**; un controllo d’integrità non stabilisce chi lo ha creato. Un’esportazione esterna fallita può lasciare un file di destinazione incompleto mentre i backup locali esistenti vengono conservati.

:::note
I file di backup possono contenere password, dati dei portali e identificatori dei dispositivi. Esportazione e condivisione conservano questi valori; scegli di conseguenza la destinazione o il destinatario.
:::

## Ripristinare un backup {/* #restore-a-backup */}

1. Seleziona **Restore backup** da una voce della raccolta o dalla pagina delle azioni di un dispositivo.
2. Scegli **Destination device**, **Backup to restore** e un **Restore mode** supportato.
3. Seleziona **Review restore**. Controlla i profili aggiunti, sovrascritti e rimossi; **Changed settings**; le associazioni del telecomando; i metadati locali esclusi; e i campi incompatibili o bloccati.
4. Seleziona la casella di conferma, poi **Apply restore**.

![Schermata di ripristino che mostra il comportamento di Merge](/img/companion/restore.png)

**Merge** sovrascrive i profili con UUID corrispondenti, aggiunge nuovi profili e mantiene quelli presenti solo sulla destinazione. **Replace all** rimuove anche i profili della destinazione assenti nel backup. La corrispondenza usa gli identificatori, non i nomi dei profili. Entrambe le modalità ripristinano le impostazioni trasferibili dell’applicazione e le associazioni del telecomando. I metadati locali della destinazione, come ID locali di riga, versione dell’app e cartella degli aggiornamenti, sono esclusi.

:::warning
Verifica ogni sovrascrittura e rimozione prima di applicare. Replace all sostituisce l’insieme dei profili; non permette di aggiungere solo quelli selezionati. Per copie selettive, usa i [trasferimenti di profili](transferring-profiles.md).
:::

## Risultati e applicazione delle impostazioni salvate {/* #results-and-applying-saved-settings */}

Un’anteprima scaduta richiede **Start a new attempt** e una nuova verifica. Se il risultato è incerto, controlla i [risultati delle operazioni](profiles.md#operation-results) prima di ripetere un ripristino. Il recupero può interrogare la destinazione anche se il backup originale non è più disponibile.

Le impostazioni salvate e gli effetti durante l’esecuzione sono separati. Se modificate, le impostazioni del telecomando virtuale diventano effettive alla successiva pausa/ripresa normale di StbEmu, la dimensione della cache richiede il riavvio del processo StbEmu e la lingua può ricrearne l’attività. L’opzione di compatibilità UPnP non cambia lo stato operativo attuale di UPnP, neppure dopo il riavvio. **Check result** non ritenta questi aggiornamenti durante l’esecuzione.
