---
id: backup-restore
title: Sichern und Wiederherstellen
sidebar_label: Sichern und Wiederherstellen
---

# Sichern & Wiederherstellen {/* #backup--restore */}

Öffnen Sie **Einstellungen > Sichern und Wiederherstellen**. Diese Kategorie ist nur verfügbar, wenn Sicherungsvorgänge für Ihre App aktiviert sind.

## Eine Sicherung speichern oder teilen {/* #save-or-share-a-backup */}

Wählen Sie **Einstellungen und Profile sichern…** und anschließend einen Zielort in der Android-Dokumentauswahl. Wählen Sie **Einstellungen und Profile teilen…**, um eine Sicherung zu erstellen und über die Android-Freigabeoberfläche zu versenden.

Ist keine Dokumentauswahl verfügbar, verwendet die App die zugänglichen Sicherungsordner und ihren Dateibrowser. **Gespeicherte Sicherungen durchsuchen** listet die in den verfügbaren Ordnern gefundenen Sicherungen auf. Geräteberechtigungen und verfügbare Dateianbieter können den Zugriff auf Dateien einschränken.

## Eine Sicherung wiederherstellen {/* #restore-a-backup */}

1. Wählen Sie **Einstellungen und Profile wiederherstellen…** und eine Sicherung aus oder wählen Sie eine im Browser für gespeicherte Sicherungen.
2. Prüfen Sie den Dateinamen, die Anzahl der Profile und die aufgeführten Auswirkungen der Wiederherstellung.
3. Bestätigen Sie die Wiederherstellung. Das Schließen der Auswahl oder Verweigern einer Berechtigung startet sie nicht.

Die Wiederherstellung aktualisiert passende Profile, stellt App-Einstellungen wieder her und ersetzt Fernbedienungs-Tastenbelegungen. Die Identität des Companion-Dienstes, Zugangsdaten, Datensätze widerrufener Geräte und der Vorgangsverlauf sind nicht in portablen Sicherungen enthalten.

:::warning
Die Wiederherstellung wendet Änderungen in mehreren Schritten an. Schlägt ein späterer Schritt fehl, können frühere Änderungen bereits gespeichert sein. Laden Sie nach einem Fehler die Einstellungen neu und prüfen Sie die aktuelle Konfiguration. Dieser lokale Wiederherstellungsablauf bietet weder eine vollständige Rücknahme noch einen wählbaren Zusammenführen-/Ersetzen-Modus.
:::
