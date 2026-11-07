---
title: Sicherungen und Wiederherstellung
sidebar_label: Sicherungen und Wiederherstellung
---

# Sicherungen und Wiederherstellung {/* #backups-and-restore */}

Die Bibliothek **Backups** von Companion speichert abgeschlossene StbEmu-JSON-Sicherungen privat auf deinem Smartphone oder Tablet. Gespeicherte Dateien bleiben offline verfügbar. Diese Bibliothek ist von der [Android-Systemsicherung](system-backup.md) getrennt, die den eigenen Zustand von Companion schützt.

![Sicherungsbibliothek und Erstellung einer Gerätesicherung](/img/companion/backup-library.png)

## Dateien speichern und verwalten {/* #save-and-manage-files */}

- **Create backup:** Öffne die Aktion **Create backup** eines verbundenen gekoppelten Geräts, gib **Backup name** ein und wähle **Create backup**. Warte auf **Backup saved**.
- **Import backup:** Öffne **Backups** im App-Menü, wähle **Import backup** und eine StbEmu-JSON-Datei. Für lokales Importieren, Exportieren oder Teilen ist kein verbundenes StbEmu-Gerät erforderlich.
- **Export JSON:** Wähle diese Aktion beim Bibliothekseintrag der Sicherung und anschließend einen externen Speicherort.
- **Share JSON:** Wähle diese Aktion beim Bibliothekseintrag, um den Android-Teilen-Dialog zu öffnen. Das Öffnen bestätigt keine Zustellung an die ausgewählte App.
- **Delete local backup:** Bestätige die Löschung dieser lokalen Kopie. Das ursprüngliche StbEmu-Gerät bleibt unverändert.

Die JSON-Grenze beträgt **16 MiB (16,777,216 Bytes)**. Importierte Dateien werden validiert und behalten ihre ursprünglichen Bytes. Eine importierte Datei trägt die Kennzeichnung **Source device unknown**; eine Integritätsprüfung stellt nicht fest, wer sie erstellt hat. Ein fehlgeschlagener externer Export kann eine unvollständige Zieldatei hinterlassen, während vorhandene lokale Sicherungen erhalten bleiben.

:::note
Sicherungsdateien können Passwörter, Portaldaten und Gerätekennungen enthalten. Exportieren und Teilen bewahren diese Werte; wähle den Speicherort oder Empfänger entsprechend.
:::

## Eine Sicherung wiederherstellen {/* #restore-a-backup */}

1. Wähle **Restore backup** bei einem Bibliothekseintrag oder auf der Aktionsseite eines Geräts.
2. Wähle **Destination device**, **Backup to restore** und einen unterstützten **Restore mode**.
3. Wähle **Review restore**. Prüfe hinzugefügte, überschriebene und entfernte Profile; **Changed settings**; Fernbedienungszuordnungen; ausgeschlossene lokale Metadaten sowie inkompatible oder gesperrte Felder.
4. Aktiviere das Bestätigungskästchen und wähle **Apply restore**.

![Wiederherstellungsseite mit dem Verhalten von Merge](/img/companion/restore.png)

**Merge** überschreibt Profile mit übereinstimmenden UUIDs, fügt neue Profile hinzu und behält Profile, die nur am Ziel vorhanden sind. **Replace all** entfernt zusätzlich Zielprofile, die in der Sicherung fehlen. Der Abgleich verwendet Kennungen, keine Profilnamen. Beide Modi stellen übertragbare Anwendungseinstellungen und Fernbedienungszuordnungen wieder her. Lokale Zielmetadaten wie lokale Zeilen-IDs, App-Version und Aktualisierungsverzeichnis werden ausgeschlossen.

:::warning
Prüfe jedes Überschreiben und Entfernen vor dem Anwenden. Replace all ersetzt den gesamten Profilsatz und eignet sich daher nicht zum gezielten Hinzufügen einzelner Profile. Verwende für ausgewählte Kopien [Profilübertragungen](transferring-profiles.md).
:::

## Ergebnisse und Anwenden gespeicherter Einstellungen {/* #results-and-applying-saved-settings */}

Eine abgelaufene Vorschau erfordert **Start a new attempt** und eine erneute Prüfung. Prüfe bei unklarem Ausgang die [Operationsergebnisse](profiles.md#operation-results), bevor du eine Wiederherstellung wiederholst. Die Wiederaufnahme kann das Ziel abfragen, auch wenn die ursprüngliche Sicherung nicht mehr verfügbar ist.

Gespeicherte Einstellungen und Auswirkungen zur Laufzeit sind getrennt. Geänderte Einstellungen der virtuellen Fernbedienung werden beim nächsten normalen Pausieren/Fortsetzen von StbEmu wirksam, die Cachegröße benötigt einen Neustart des StbEmu-Prozesses und die Sprache kann dessen Aktivität neu erstellen. Die UPnP-Kompatibilitätsoption schaltet die aktuelle UPnP-Laufzeit auch nach einem Neustart nicht um. **Check result** wiederholt diese Laufzeitaktualisierungen nicht.
