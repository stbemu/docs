---
title: Geräte verbinden
sidebar_label: Geräte verbinden
---

# Geräte verbinden {/* #connecting-devices */}

## StbEmu finden {/* #discover-stbemu */}

1. Verbinde dein Smartphone oder Tablet und das StbEmu-Gerät mit demselben erreichbaren lokalen Netzwerk.
2. Öffne in StbEmu **Settings > Companion** und aktiviere den Dienst. Siehe [Companion-Einstellungen von StbEmu](../settings/companion.md).
3. Öffne die Seite **Devices** in Companion. Verifizierte Geräte erscheinen als gespeicherte Karten. Öffne die Karte der StbEmu-Installation, die du verwalten möchtest.

![Geräteseite bei der Suche im lokalen Netzwerk](/img/companion/devices-empty.png)

Falls nichts erscheint, prüfe, ob der Companion-Zugriff in StbEmu aktiviert ist und Android den Zugriff auf das lokale Netzwerk erlaubt. Wähle **Retry** oder verbinde dich manuell.

### Eine Adresse manuell hinzufügen {/* #add-an-address-manually */}

Wähle **Add by IP address**. Gib **IPv4 or IPv6 address** und den in StbEmu angezeigten Port ein und wähle **Connect**. Ein leeres Portfeld verwendet **10000**. Gib eine IP-Adresse ein, keine Website-URL oder einen Hostnamen. Die manuelle Eingabe umgeht weder Verifizierung noch Kopplung. Geräte mit einer gültigen gespeicherten Kopplung können sich ohne neuen Code erneut verbinden.

![Gespeichertes Gerät wartet auf die Kopplung](/img/companion/devices-saved.png)

## Ein Gerät koppeln {/* #pair-a-device */}

1. Starte in StbEmu unter **Settings > Companion** die Kopplung, um einen Code anzuzeigen.
2. Gib auf der Aktionsseite des Geräts in Companion den Code unter **Eight-digit pairing code** ein.
3. Wähle **Pair device** und warte auf **Connected**.

![Eingabe eines Kopplungscodes](/img/companion/pairing.png)

Wenn der Code abläuft, zeige in StbEmu einen neuen an. Falls die Versuchsrate begrenzt wird, warte vor einem weiteren Versuch. Die Kopplung bleibt für spätere Verbindungen gespeichert, solange StbEmu sie weiterhin autorisiert. Ein Widerruf des Zugriffs in StbEmu verhindert auch die Nutzung der gespeicherten Berechtigung.

## Erneut verbinden, umbenennen oder entfernen {/* #reconnect-rename-or-remove */}

**Disconnect** schließt die Verbindung und behält das gespeicherte Gerät. Öffne zum erneuten Verbinden dessen Karte und wähle **Connect**. Ein Netzwerkwechsel kann Verbindungen unterbrechen; verbinde dich erneut, sobald die lokale Verbindung wieder verfügbar ist.

Mit der Stiftschaltfläche (**Rename device**) legst du einen lokalen Namen fest. **Use app name** stellt den von StbEmu gemeldeten Namen wieder her. Das Umbenennen hier benennt StbEmu selbst nicht um.

Die Papierkorbschaltfläche (**Remove device**) fordert eine Bestätigung an. Sie entfernt die gespeicherte Verbindung und Kopplung von diesem Smartphone, behält Sicherungsdateien und ändert nichts an StbEmu. Das entfernte Gerät erscheint nicht automatisch wieder durch die Gerätesuche. Verwende zum erneuten Hinzufügen **Add by IP address** und kopple es erneut.
