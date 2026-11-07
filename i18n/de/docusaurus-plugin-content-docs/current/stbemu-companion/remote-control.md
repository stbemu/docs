---
title: Fernbedienung
sidebar_label: Fernbedienung
---

# Fernbedienung {/* #remote-control */}

Öffne ein verbundenes Gerät und wähle **Remote control**. Die Aktion erscheint nur, wenn das Gerät autorisierte Fernbedienungseingaben unterstützt. Diese Bedienelemente steuern StbEmu und dessen Portal; sie sind vom älteren MAG-Fernbedienungsdienst getrennt, der unter [Alte Fernbedienung](../settings/common_settings.md#legacy-remote) beschrieben wird.

![Scrollbare Fernbedienung mit Farbtasten und Steuerkreuz](/img/companion/remote-control.png)

Tippe für die normale Aktion auf eine Taste. Halte sie für eine lange Aktion oder wiederholte Tastendrücke gedrückt, soweit unterstützt. Lasse los, um das Halten zu beenden. Verfügbare Tasten und das Verhalten beim Halten hängen vom Gerät ab; nicht jede Taste unterstützt Wiederholung. Scrolle zu den übrigen Bedienelementen, einschließlich Wiedergabe, Lautstärke, Kanalwahl und Zifferntasten.

Es ist jeweils nur eine Tastengeste aktiv. Das Verlassen der Fernbedienungsseite oder App sowie der Verlust der Verbindung oder Autorisierung beenden aktive Eingaben. Fernbedienungseingaben werden nach dem erneuten Verbinden nicht wiederholt: Verbinde dich erneut und drücke bewusst noch einmal.

## Rückmeldungen verstehen {/* #read-the-feedback */}

Die lokale Rückmeldung beim Drücken oder Halten bedeutet, dass Companion deine Geste erkannt hat. **Awaiting device confirmation** bedeutet, dass das Ergebnis noch aussteht. **Device accepted input** bestätigt, dass StbEmu die Eingabe angenommen hat, nicht dass eine Kanal- oder Portalaktion unbedingt abgeschlossen wurde.

Prüfe bei **Input target unavailable** die Verbindung. Zeige bei **Authorization expired. Pair again.** einen neuen Code in StbEmu an und gib ihn in Companion ein. Wenn eine Aktion nicht mehr unterstützt wird, verwende sie nicht weiter und prüfe die verfügbaren Bedienelemente. Verbinde dich erneut, falls die Eingabe weiterhin nicht verfügbar ist.

Ändere die Vibration der Fernbedienung unter **Settings > Interface > Remote control haptic feedback**. Diese Einstellung ist unabhängig von **UI haptic feedback**; sichtbare Rückmeldungen bleiben bei ausgeschalteter Vibration verfügbar.
