---
title: Profile verwalten
sidebar_label: Profile
---

# Profile verwalten {/* #managing-profiles */}

Öffne ein verbundenes Gerät und wähle **Profiles**. Die Liste zeigt Profilnamen, Kennungen (UUIDs) und verfügbare Portaladressen. Wähle ein Profil, um seine Einstellungen anzusehen. Mit **Load more** lädst du weitere Seiten und mit **Refresh** aktuelle Daten. Aktionen hängen von den durch das Gerät unterstützten Berechtigungen ab.

## Erstellen, bearbeiten und löschen {/* #create-edit-and-delete */}

- Wähle **Create profile** in der Liste. Unterstützte Erstellungsfelder umfassen **Name** und **Portal URL**. Unberührte Felder verwenden die StbEmu-Standardwerte.
- Öffne ein Profil und wähle **Edit profile**, um unterstützte bearbeitbare Felder zu ändern. Nur bearbeitete Felder ändern sich; zusätzliche auf dem Gerät gespeicherte Einstellungen bleiben erhalten.
- Wähle **Delete profile**, um eine Löschung vorzubereiten. Prüfe vor der Bestätigung einen Wechsel des aktiven Profils oder das Ersatzprofil.

Wähle **Review changes**, prüfe die Vorschau und Warnungen und wähle dann **Confirm changes** oder **Confirm deletion**. Die erste Aktion speichert oder löscht das Profil nicht sofort. Inkompatible Änderungen können nicht bestätigt werden. Wenn sich das Profil oder verfügbare Felder während der Bearbeitung ändern, aktualisiere die Daten und prüfe erneut.

Die Bedeutungen der StbEmu-Profilfelder findest du unter [STB-Profile](../settings/profiles.md).

## Ein Profil kopieren {/* #copy-a-profile */}

Öffne ein Profil und wähle **Copy profile**. Wähle für eine Kopie auf demselben Gerät **This device**, prüfe anschließend die Änderungen und bestätige sie. Die Kopie hat eine neue Identität; identifiziere sie nicht nur anhand ihres Namens. **Edit copied profile** öffnet, falls nach erfolgreichem Kopieren verfügbar, die zurückgegebene Kopie statt des Originals.

Die Auswahl eines anderen geeigneten gekoppelten Geräts öffnet den [Ablauf der Übertragungsanleitung](transferring-profiles.md) mit diesem ausgewählten Profil.

## Operationsergebnisse {/* #operation-results */}

Wenn die Verbindung fehlschlägt oder ein Ergebnis unklar ist, öffne **Recent operation results** des Geräts und verwende **Check result**, bevor du eine weitere Änderung startest. Die Ergebnisprüfung benötigt eine autorisierte Verbindung und fragt die ursprüngliche Operation ab; sie sendet die Änderung nicht erneut. Das gilt auch für [Übertragungen](transferring-profiles.md) und [Sicherungswiederherstellungen](backups.md).

Eine abgelaufene Vorschau erfordert eine neue ausdrückliche Prüfung. Abbruch und Speichern können gleichzeitig erfolgen; lies daher das endgültige Ergebnis, statt anzunehmen, **Cancel operation** habe Änderungen rückgängig gemacht. **Changes saved on the device** bestätigt gespeicherte Daten; die Aktualisierung zur Laufzeit kann noch ausstehen. Die Ergebnisprüfung wiederholt diese Aktualisierung nicht, und ein gelöschtes kopiertes Profil wird durch die Prüfung seines Verlaufs niemals neu erstellt.
