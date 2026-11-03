---
id: common-settings
title: App-Einstellungen
sidebar_label: App-Einstellungen
---

# App-Einstellungen {/* #application-settings */}

App-weite Optionen sind in [Settings](/settings) in die folgenden Kategorien unterteilt. Profilspezifische Optionen finden Sie unter [Profiles](/settings/profiles).

## Appearance & controls {/* #appearance--controls */}

| Option | Zweck |
|--------|---------|
| App language | Eine unterstützte App-Sprache oder die Android-Systemsprache verwenden. |
| Hide navigation bar | Die Android-Navigationstasten ausblenden, soweit unterstützt. Auf einem Touchscreen zeigt die erste Berührung möglicherweise die Navigation an; für die App-Bedienelemente kann eine zweite Berührung nötig sein. |
| Always show overlay buttons | Bildschirm-Bedienelemente anzeigen. Auf einer TV-Box können Sie dies deaktivieren, wenn Fernbedienungstasten unerwünschte Bildschirmtasten einblenden. |
| Hide controls after… (ms) | Die Anzeigedauer der Bildschirm-Bedienelemente in Millisekunden festlegen. Standard: 5000 (5 Sekunden). |
| Screen orientation | Das Ausrichtungsverhalten der App wählen. |
| Keyboard type | Die von der App verwendete Tastatur wählen. |
| Software keyboard input method | Festlegen, wie die Softwaretastatur Eingaben verarbeitet. |

## Playback & behavior {/* #playback--behavior */}

| Option | Zweck |
|--------|---------|
| Pause media in background | Die Wiedergabe beim Wechsel zu einer anderen App anhalten. Diese Option ist bei aktiviertem automatischem Bild-in-Bild nicht verfügbar. |
| Picture-in-picture | Beim Verlassen der App Bild-in-Bild verwenden, sofern Android und das Gerät dies unterstützen. |
| Auto start on device boot | Die App nach dem Gerätestart starten. Sie muss im internen Speicher installiert sein; ein Sperrbildschirm kann den Start bis zum Entsperren verzögern. |
| Always use system volume level | Die Systemlautstärke anstelle einer separaten App-Lautstärke verwenden. |
| Enable recommendations | Profil-Empfehlungskarten auf unterstützten Android-TV-Startbildschirmen anzeigen. |
| Media sessions | Die Integration von Android-Mediensitzungen aktivieren. |

## Network {/* #network */}

**Scaling method** ändert die Browser-Skalierung, wenn ein Portal zu groß oder zu klein erscheint. Meist kann die Standardeinstellung bleiben; ein niedrig auflösendes Display benötigt eventuell eine andere Methode.

**Enable network cache** speichert Netzwerkanfragen zwischen, um das Laden des Portals zu verbessern. Deaktivieren Sie dies bei wiederholten Authentifizierungs- oder anderen Netzwerkproblemen.

**Cache size** wird in KB eingegeben. Der Standardwert ist **20480 KB (20 MB)**. Starten Sie die App auf Aufforderung neu, um eine geänderte Cachegröße anzuwenden.

## Security {/* #security */}

Aktivieren Sie den Passwortschutz für die Einstellungen und legen Sie ein Passwort fest. Geschützte Einstellungen erfordern eine Authentifizierung. Der Passworteditor behält das Passwort nicht, wenn die Ansicht neu erstellt wird; geben Sie es bei Bedarf erneut ein.

## Legacy remote {/* #legacy-remote */}

Diese Kategorie konfiguriert den älteren Software-Fernbedienungsdienst für MAG 250, AuraHD und ähnliche Fernbedienungs-Apps. Er ist von [Companion](/settings/companion) und der [Belegung physischer Tasten](/settings/key-maps) getrennt.

Aktivieren Sie den Dienst und konfigurieren Sie seinen Gerätenamen und sein Passwort. Beide dürfen jeweils bis zu 32 Zeichen lang sein. Diese Kategorie ist nur in App-Editionen verfügbar, in denen sie aktiviert ist.
