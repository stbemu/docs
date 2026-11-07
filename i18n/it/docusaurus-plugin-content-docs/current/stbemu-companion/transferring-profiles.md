---
title: Trasferimento di profili e impostazioni
sidebar_label: Trasferimenti di profili
---

# Trasferimento di profili e impostazioni {/* #transferring-profiles-and-settings */}

Usa un trasferimento per copiare i contenuti selezionati direttamente tra due installazioni StbEmu associate diverse. Entrambe devono essere collegate e supportare le azioni di origine e destinazione scelte. Per una copia sulla stessa installazione, usa [Copy profile > This device](profiles.md#copy-a-profile).

![Schermata di trasferimento in attesa di una destinazione compatibile](/img/companion/transfer.png)

## Selezionare e verificare {/* #select-and-review */}

1. Apri il dispositivo di origine e seleziona **Transfer to another device**.
2. Scegli **Destination device**. Se non ne è disponibile alcuno, torna a **Devices**, collega un altro dispositivo associato e riprova.
3. Seleziona **Application settings and remote mappings**, profili o entrambi. Per i profili, scegli **Do not copy profiles**, **All profiles** o **Choose individual profiles**. Deve essere selezionata almeno una categoria.
4. Seleziona **Review transfer**. Esamina nuovi profili, modifiche delle impostazioni, effetti delle associazioni del telecomando, cambi del profilo attivo, esclusioni e incompatibilità.
5. Seleziona **I confirm these changes**, poi **Confirm transfer**.

La selezione individuale richiede un elenco completo e aggiornato dei profili di origine. Se un profilo selezionato scompare, usa **Refresh** per verificare l’elenco, poi deseleziona esplicitamente i profili ancora mancanti. L’aggiornamento non rimuove né sostituisce silenziosamente i profili selezionati.

## Cosa cambia {/* #what-changes */}

I profili trasferiti sono nuove copie con nuove identità sulla destinazione. I profili già presenti sulla destinazione vengono mantenuti. Indirizzi MAC, numeri di serie, ID dei dispositivi e altri valori dei profili vengono conservati; copiare non crea quindi un nuovo abbonamento o un’autorizzazione del fornitore. Questa procedura non offre **Merge**/**Replace all**; tali modalità appartengono al [ripristino dei backup](backups.md#restore-a-backup).

I trasferimenti di soli profili mantengono impostazioni dell’applicazione, associazioni del telecomando e selezione attiva della destinazione. I trasferimenti di sole impostazioni mantengono i profili e la selezione attiva della destinazione. Quando si copiano entrambi, il profilo attivo dell’origine diventa attivo tramite la sua nuova copia solo se incluso; altrimenti viene mantenuta la selezione attiva della destinazione.

Le impostazioni dell’applicazione includono preferenze trasferibili di StbEmu e associazioni dei tasti del telecomando, non lingua/tema di Companion, autorizzazioni di associazione, identità del servizio o cronologia delle operazioni. I valori non supportati vengono segnalati anziché scartati silenziosamente. Verifica le impostazioni relative alle password e le altre impostazioni sovrascritte prima di confermare. Alcune impostazioni salvate richiedono un cambiamento del ciclo di vita o un riavvio di StbEmu; vedi [applicazione delle impostazioni salvate](backups.md#results-and-applying-saved-settings).

Dopo che Companion segnala la verifica dell’istantanea dell’origine, quello specifico tentativo può continuare se l’origine si disconnette. Il trasferimento non crea una voce permanente nella raccolta dei backup. Per risultati incerti o annullamenti, usa i [risultati delle operazioni](profiles.md#operation-results).
