---
title: Fjärrkontroll
sidebar_label: Fjärrkontroll
---

# Fjärrkontroll {/* #remote-control */}

Öppna en ansluten enhet och välj **Remote control**. Åtgärden visas bara om enheten stöder behörig fjärrinmatning. Kontrollerna styr StbEmu och dess portal. De är separata från den äldre MAG-fjärrkontrolltjänsten som beskrivs under [äldre fjärrkontroll](../settings/common_settings.md#legacy-remote).

![Rullningsbar fjärrkontroll med färgknappar och riktningsknappar](/img/companion/remote-control.png)

Tryck på en knapp för dess vanliga åtgärd. Håll in en knapp för en lång åtgärd eller upprepade tryck där det stöds. Släpp knappen för att avsluta det långa trycket. Vilka knappar som finns och hur de fungerar när du håller dem nedtryckta beror på enheten. Inte alla knappar stöder upprepning. Rulla för att nå övriga kontroller, bland annat uppspelning, volym, kanaler och sifferknappar.

Bara en knappgest är aktiv åt gången. Om du lämnar fjärrkontrollsidan eller appen, förlorar anslutningen eller behörigheten avbryts aktiv inmatning. Fjärrinmatning spelas inte upp igen efter återanslutning: anslut igen och tryck medvetet på nytt.

## Förstå återkopplingen {/* #read-the-feedback */}

Lokal återkoppling när du trycker på eller håller en knapp nedtryckt betyder att Companion kände igen gesten. **Awaiting device confirmation** betyder att resultatet fortfarande väntar. **Device accepted input** bekräftar att StbEmu tog emot inmatningen, inte att en kanal- eller portalåtgärd nödvändigtvis slutfördes.

Kontrollera anslutningen vid **Input target unavailable**. Vid **Authorization expired. Pair again.**, visa en ny kod i StbEmu och ange den i Companion. Sluta använda en åtgärd som inte längre stöds och kontrollera tillgängliga kontroller. Anslut igen om inmatning fortfarande inte är tillgänglig.

Ändra fjärrkontrollens vibrationer under **Settings > Interface > Remote control haptic feedback**. Detta är oberoende av **UI haptic feedback**. Visuell återkoppling finns kvar när vibrationer är avstängda.
