---
title: Backup di sistema Android
sidebar_label: Backup di sistema Android
---

# Backup di sistema Android {/* #android-system-backup */}

Apri **Settings > Backups > System backup**. Il backup di sistema Android può ripristinare preferenze di Companion, dispositivi e nomi salvati, attendibilità verificata e credenziali di associazione ancora valide dopo un ripristino Android riuscito. È separato dal ripristino di un [backup JSON di StbEmu](backups.md) su un dispositivo associato.

## Includere archivi locali {/* #include-local-archives */}

**Include local archives** è attivo per impostazione predefinita. Include i backup StbEmu completati idonei della raccolta locale nei futuri backup di sistema. Disattivarlo conserva file locali e impostazioni/dispositivi di Companion, ma esclude gli archivi dai backup futuri. Non elimina i contenuti precedenti nel cloud.

La pagina mostra una stima delle dimensioni selezionate. Usa **Refresh estimate** per misurare di nuovo, **Open Android settings** per verificare la configurazione del backup Android o **Open archive library / manual export** per esportare autonomamente i file.

## Disponibilità e limiti {/* #availability-and-limits */}

Il backup di sistema richiede **Android 9 o successivo**, sebbene Companion supporti Android 8. Il backup cloud crittografato richiede anche un account supportato, un blocco schermo sicuro e la crittografia lato client di Android. Android controlla la pianificazione, l’idoneità del trasporto e la disponibilità del ripristino.

La quota cloud nominale è **25 MiB**; la quota effettivamente disponibile può essere inferiore. Il limite di **256 MiB** tra dispositivi è un limite dell’applicazione, non una promessa di capacità del trasporto. Se l’intera selezione è troppo grande, escludi gli archivi locali o esportali manualmente. Companion non esegue silenziosamente il backup solo di una parte della selezione.

Una stima o un messaggio di preparazione locale non conferma che Android abbia memorizzato un backup cloud. Una stima non disponibile non è un backup di dimensioni zero. Se la pagina segnala che il backup è disattivato o non supportato, esporta gli archivi manualmente anziché presumere che i dati siano protetti.

## Dopo il ripristino di Companion da parte di Android {/* #after-android-restores-companion */}

I dispositivi ripristinati devono essere verificati prima di essere mostrati come collegati. Le credenziali di associazione ancora autorizzate possono riconnettersi senza una nuova associazione, ma il ripristino non annulla una revoca in StbEmu. Le copie ripristinate condividono le stesse autorizzazioni; revocarne una riguarda anche tali copie.

La raccolta elenca i file di archivio completati effettivamente ripristinati. I soli metadati non ricreano i file mancanti. Un’operazione incompleta non viene inviata di nuovo automaticamente; riconnettiti e controlla i [risultati delle operazioni](profiles.md#operation-results), quando disponibili.
