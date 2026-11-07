---
title: Profile und Einstellungen übertragen
sidebar_label: Profilübertragungen
---

# Profile und Einstellungen übertragen {/* #transferring-profiles-and-settings */}

Mit einer Übertragung kopierst du ausgewählte Inhalte direkt zwischen zwei verschiedenen gekoppelten StbEmu-Installationen. Beide müssen verbunden sein und die gewählten Quell- und Zielaktionen unterstützen. Verwende für eine Kopie innerhalb derselben Installation [Copy profile > This device](profiles.md#copy-a-profile).

![Übertragungsseite wartet auf ein kompatibles Ziel](/img/companion/transfer.png)

## Auswählen und prüfen {/* #select-and-review */}

1. Öffne das Quellgerät und wähle **Transfer to another device**.
2. Wähle **Destination device**. Wenn keines verfügbar ist, kehre zu **Devices** zurück, verbinde ein anderes gekoppeltes Gerät und versuche es erneut.
3. Wähle **Application settings and remote mappings**, Profile oder beides. Wähle für Profile **Do not copy profiles**, **All profiles** oder **Choose individual profiles**. Mindestens eine Kategorie muss ausgewählt sein.
4. Wähle **Review transfer**. Prüfe neue Profile, Einstellungsänderungen, Auswirkungen der Fernbedienungszuordnungen, Änderungen des aktiven Profils, Ausschlüsse und Inkompatibilitäten.
5. Wähle **I confirm these changes** und dann **Confirm transfer**.

Die Einzelauswahl benötigt eine vollständige aktuelle Quellprofilliste. Wenn ein ausgewähltes Profil verschwindet, prüfe die Liste mit **Refresh** und entferne dann ausdrücklich die Auswahl weiterhin fehlender Profile. Das Aktualisieren entfernt oder ersetzt ausgewählte Profile nicht stillschweigend.

## Was sich ändert {/* #what-changes */}

Übertragene Profile sind neue Kopien mit neuen Identitäten am Ziel. Vorhandene Zielprofile bleiben erhalten. MAC-Adressen, Seriennummern, Geräte-IDs und andere Profilwerte werden beibehalten; das Kopieren erstellt daher kein neues Abonnement und keine Anbieterautorisierung. Dieser Ablauf bietet keine Auswahl **Merge**/**Replace all**; diese Modi gehören zur [Sicherungswiederherstellung](backups.md#restore-a-backup).

Reine Profilübertragungen behalten Anwendungseinstellungen, Fernbedienungszuordnungen und aktive Auswahl des Ziels. Reine Einstellungsübertragungen behalten Zielprofile und aktive Auswahl. Beim Kopieren beider Kategorien wird das aktive Quellprofil über seine neue Kopie nur aktiv, wenn dieses Profil enthalten ist; andernfalls bleibt die aktive Zielauswahl erhalten.

Anwendungseinstellungen umfassen übertragbare StbEmu-Einstellungen und Fernbedienungs-Tastenzuordnungen, nicht Sprache/Design von Companion, Kopplungsberechtigungen, Dienstidentität oder Operationsverlauf. Nicht unterstützte Werte werden gemeldet statt stillschweigend verworfen. Prüfe passwortbezogene und andere überschriebene Einstellungen vor der Bestätigung. Einige gespeicherte Einstellungen benötigen eine Änderung im StbEmu-Lebenszyklus oder einen Neustart; siehe [Anwenden gespeicherter Einstellungen](backups.md#results-and-applying-saved-settings).

Nachdem Companion den Quellschnappschuss als verifiziert meldet, kann genau dieser Versuch fortgesetzt werden, wenn die Quelle die Verbindung trennt. Die Übertragung erstellt keinen dauerhaften Eintrag in der Sicherungsbibliothek. Verwende bei unklaren Ergebnissen oder Abbruch die [Operationsergebnisse](profiles.md#operation-results).
