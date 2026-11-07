---
title: Telecomando
sidebar_label: Telecomando
---

# Telecomando {/* #remote-control */}

Apri un dispositivo collegato e seleziona **Remote control**. L’azione viene mostrata solo se il dispositivo supporta l’input remoto autorizzato. Questi comandi controllano StbEmu e il suo portale; sono separati dal vecchio servizio telecomando MAG descritto in [Telecomando precedente](../settings/common_settings.md#legacy-remote).

![Telecomando scorrevole con tasti colorati e tastierino direzionale](/img/companion/remote-control.png)

Tocca un pulsante per l’azione normale. Tienilo premuto per un’azione prolungata o pressioni ripetute, se supportate. Rilascia per interrompere la pressione. I pulsanti disponibili e il comportamento della pressione prolungata dipendono dal dispositivo; non tutti i tasti supportano la ripetizione. Scorri per raggiungere gli altri comandi, inclusi riproduzione, volume, canali e tasti numerici.

È attivo un solo gesto sui tasti alla volta. Uscire dalla pagina del telecomando o dall’app, perdere la connessione o l’autorizzazione annulla l’input attivo. L’input remoto non viene riprodotto dopo la riconnessione: riconnettiti e premi di nuovo intenzionalmente.

## Interpretare i riscontri {/* #read-the-feedback */}

Il riscontro locale alla pressione normale o prolungata indica che Companion ha riconosciuto il gesto. **Awaiting device confirmation** indica che il risultato è ancora in attesa. **Device accepted input** conferma che StbEmu ha accettato l’input, non che un’azione del canale o del portale sia necessariamente terminata.

Per **Input target unavailable**, controlla la connessione. Per **Authorization expired. Pair again.**, mostra un nuovo codice in StbEmu e inseriscilo in Companion. Se un’azione non è più supportata, smetti di usarla e controlla i comandi disponibili. Riconnettiti se l’input resta indisponibile.

Modifica la vibrazione del telecomando in **Settings > Interface > Remote control haptic feedback**. Questa impostazione è indipendente da **UI haptic feedback**; il riscontro visivo rimane disponibile quando la vibrazione è disattivata.
