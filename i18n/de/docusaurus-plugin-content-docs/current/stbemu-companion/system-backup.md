---
title: Android-Systemsicherung
sidebar_label: Android-Systemsicherung
---

# Android-Systemsicherung {/* #android-system-backup */}

Öffne **Settings > Backups > System backup**. Die Android-Systemsicherung kann nach einer erfolgreichen Android-Wiederherstellung Companion-Einstellungen, gespeicherte Geräte und Namen, verifiziertes Vertrauen und weiterhin gültige Kopplungsdaten wiederherstellen. Sie ist von der Wiederherstellung einer [StbEmu-JSON-Sicherung](backups.md) auf einem gekoppelten Gerät getrennt.

## Lokale Archive einschließen {/* #include-local-archives */}

**Include local archives** ist standardmäßig aktiviert. Es nimmt geeignete abgeschlossene StbEmu-Sicherungen aus der lokalen Bibliothek in künftige Systemsicherungen auf. Das Ausschalten behält lokale Dateien und Companion-Einstellungen/Geräte, schließt Archive aber aus künftigen Sicherungen aus. Es löscht keine älteren Cloud-Inhalte.

Die Seite zeigt eine geschätzte Größe der Auswahl. Verwende **Refresh estimate** zum erneuten Messen, **Open Android settings** zum Prüfen der Android-Sicherungskonfiguration oder **Open archive library / manual export**, um Dateien selbst zu exportieren.

## Verfügbarkeit und Grenzen {/* #availability-and-limits */}

Die Systemsicherung erfordert **Android 9 oder neuer**, obwohl Companion selbst Android 8 unterstützt. Verschlüsselte Cloud-Sicherungen benötigen außerdem ein unterstütztes Konto, eine sichere Bildschirmsperre und die clientseitige Android-Verschlüsselung. Android steuert Zeitplanung, Transporteignung und Wiederherstellungsverfügbarkeit.

Das nominelle Cloud-Kontingent beträgt **25 MiB**; das tatsächlich verfügbare Kontingent kann geringer sein. Die Grenze von **256 MiB** zwischen Geräten ist eine Anwendungsgrenze und kein Versprechen über die Transportkapazität. Wenn die gesamte Auswahl zu groß ist, schließe lokale Archive aus oder exportiere sie manuell. Companion sichert nicht stillschweigend nur einen Teil der Auswahl.

Eine Schätzung oder Meldung zur lokalen Vorbereitung bestätigt nicht, dass Android eine Cloud-Sicherung gespeichert hat. Eine nicht verfügbare Schätzung ist keine Sicherung mit Größe null. Wenn die Seite meldet, dass die Sicherung deaktiviert oder nicht unterstützt ist, exportiere Archive manuell, statt davon auszugehen, die Daten seien geschützt.

## Nach der Android-Wiederherstellung von Companion {/* #after-android-restores-companion */}

Wiederhergestellte Geräte müssen verifiziert werden, bevor sie als verbunden erscheinen. Noch autorisierte Kopplungsdaten können eine erneute Verbindung ohne neue Kopplung ermöglichen, doch die Wiederherstellung kann einen Widerruf in StbEmu nicht aufheben. Wiederhergestellte Kopien teilen dieselben Berechtigungen; ein Widerruf betrifft auch diese Kopien.

Die Bibliothek zeigt abgeschlossene Archivdateien, die tatsächlich wiederhergestellt wurden. Metadaten allein erstellen fehlende Dateien nicht neu. Eine unvollendete Operation wird nicht automatisch erneut gesendet; verbinde dich erneut und prüfe die [Operationsergebnisse](profiles.md#operation-results), soweit verfügbar.
