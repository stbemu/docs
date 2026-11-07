---
title: Gestione dei profili
sidebar_label: Profili
---

# Gestione dei profili {/* #managing-profiles */}

Apri un dispositivo collegato e seleziona **Profiles**. L’elenco mostra nomi dei profili, identificatori (UUID) e indirizzi dei portali disponibili. Seleziona un profilo per esaminarne le impostazioni. Usa **Load more** per altre pagine e **Refresh** per i dati attuali. Le azioni dipendono dalle autorizzazioni supportate dal dispositivo.

## Creare, modificare ed eliminare {/* #create-edit-and-delete */}

- Seleziona **Create profile** nell’elenco. I campi di creazione supportati includono **Name** e **Portal URL**. I campi non modificati usano i valori predefiniti di StbEmu.
- Apri un profilo e seleziona **Edit profile** per cambiare i campi modificabili supportati. Cambiano solo i campi modificati; le impostazioni aggiuntive conservate dal dispositivo vengono mantenute.
- Seleziona **Delete profile** per preparare un’eliminazione. Prima di confermare, verifica eventuali cambi del profilo attivo o il profilo sostitutivo.

Seleziona **Review changes**, esamina l’anteprima e gli avvisi, poi seleziona **Confirm changes** o **Confirm deletion**. La prima azione non salva né elimina immediatamente il profilo. Le modifiche incompatibili non possono essere confermate. Se il profilo o i campi disponibili cambiano durante la modifica, aggiorna e verifica nuovamente.

Per il significato dei campi dei profili StbEmu, consulta [Profili STB](../settings/profiles.md).

## Copiare un profilo {/* #copy-a-profile */}

Apri un profilo e seleziona **Copy profile**. Scegli **This device** per una copia sullo stesso dispositivo, poi verifica e conferma le modifiche. La copia ha una nuova identità; non identificarla solo dal nome. **Edit copied profile**, se disponibile dopo il completamento, apre la copia restituita anziché l’originale.

Scegliere un altro dispositivo associato idoneo apre la [procedura della guida al trasferimento](transferring-profiles.md) con quel profilo selezionato.

## Risultati delle operazioni {/* #operation-results */}

Se la connessione fallisce o un risultato è incerto, apri **Recent operation results** del dispositivo e usa **Check result** prima di avviare un’altra modifica. La verifica richiede una connessione autorizzata e interroga l’operazione originale; non invia di nuovo la modifica. Ciò vale anche per i [trasferimenti](transferring-profiles.md) e i [ripristini dei backup](backups.md).

Un’anteprima scaduta richiede una nuova verifica esplicita. L’annullamento può coincidere con il salvataggio: leggi il risultato finale anziché presumere che **Cancel operation** abbia annullato le modifiche. **Changes saved on the device** conferma i dati salvati; l’aggiornamento durante l’esecuzione potrebbe essere ancora in attesa. Verificare un risultato non ritenta tale aggiornamento e un profilo copiato eliminato non viene mai ricreato consultandone la cronologia.
