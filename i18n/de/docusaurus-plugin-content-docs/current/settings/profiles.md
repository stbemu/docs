---
id: profiles
title: Profile
sidebar_label: Profile
---

# STB-Profile {/* #stb-profiles */}

Ein **STB-Profil** ist eine Sammlung von Optionen zur Emulation einer Set-Top-Box in der App. Beim ersten Start erstellt die App ein Profil.
Sie können es bearbeiten oder weitere Profile hinzufügen, um verschiedene Portale auf demselben Gerät zu laden.
Öffnen Sie **Einstellungen > Profile** und wählen Sie **Profil hinzufügen** oder ein vorhandenes Profil zur Bearbeitung aus.
Die Übersicht gruppiert Optionen unter **Verbindung**, **Wiedergabe und Gerät** und **Profil verwalten**.
Die verfügbaren Aktionen hängen von Ihrer App-Edition und den Profilbeschränkungen ab. Das aktive Profil kann nicht gelöscht werden;
wechseln Sie vor dem Löschen zu einem anderen Profil. Das Löschen erfordert eine Bestätigung.

Text- und Auswahländerungen erfordern eine Bestätigung; Schalter speichern sofort. Siehe [Änderungen speichern](/settings#saving-changes)
zu Validierungsfehlern, widersprüchlichen Änderungen und gespeicherten Änderungen, die eine Aktualisierung zur Laufzeit erfordern.

StbEmu stellt keine Medien oder IPTV-Wiedergabelisten bereit, hostet und indexiert sie auch nicht.
Benutzer müssen das Recht haben, auf die über den Emulator abgerufenen Inhalte zuzugreifen.

- [Profilname](#profile-name)
- [Portaleinstellungen](#portal-settings)
    - [Portal-URL](#portal-url)
    - [Portalsprache](#portal-language)
    - [HTTP-Proxy-Einstellungen](#http-proxy-settings)
        - [HTTP-Proxy verwenden](#use-http-proxy)
        - [Proxy-Hostname](#proxy-host-name)
        - [Proxy-Port](#proxy-port)
    - [Internes Portal](#portal-is-internal)
    - [Portal-URL (Internes Portal)](#internal-portal-url)
- [STB-Konfiguration](#stb-configuration)
    - [STB-Modell](#stb-model)
    - [Firmware](#firmware)
    - [Firmware-Einstellungen](#firmware-settings)
    - [User Agent](#user-agent)
    - [Bildschirmauflösung](#screen-resolution)
    - [MAC-Adresse](#mac-address)
    - [Seriennummer](#serial-number)
    - [Geräte-ID](#device-id)
        - [MAC-basierte Geräte-ID verwenden](#use-mac-based-device-id)
        - [Geräte-ID senden](#send-device-id)
        - [Zufallsstartwert der Geräte-ID](#device-id-random-seed)
        - [Geräte-ID](#device-id-value)
        - [Benutzerdefinierte Geräte-ID 2 und Signatur](#custom-device-id-2-and-signature)
        - [Geräte-ID 2](#device-id-2)
        - [Signatur](#signature)
        - [Geräte-ID auf Standardwert zurücksetzen…](#reset-device-id-to-default-value)
    - [Hardwareeinstellungen](#hardware-settings)
        - [Hersteller](#vendor)
        - [Hardwareversion](#hardware-version)
- [Medienplayer-Einstellungen](#media-player-settings)
    - [Medienplayer](#media-player)
    - [UDPXY-Einstellungen](#udpxy-settings)
        - [UDPXY-Unterstützung aktivieren](#enable-udxpy-support)
        - [URL des UDPXY-Servers](#udpxy-server-url)
        - [Streamprotokoll überschreiben](#overwrite-stream-protocol)
- [Erweiterte Einstellungen](#advanced-settings)

### Profilname {/* #profile-name */}
Der Profilname. Jede nicht leere Zeichenfolge ist zulässig.

### Portaleinstellungen {/* #portal-settings */}
Portalspezifische Optionen.
##### Portal-URL {/* #portal-url */}
Geben Sie eine absolute **http://**- oder **https://**-URL ein. Hosts im lokalen Netzwerk, localhost, IPv6-Adressen und internationale Domainnamen werden unterstützt. Netzwerk-URLs dürfen keine Leerzeichen oder anderen Leerraum enthalten.
Für ein internes Portal wird auch ein absoluter Dateisystempfad oder eine unterstützte absolute **file://**-URL akzeptiert. Der neu gestaltete Editor akzeptiert keine FTP-URLs.

##### Portalsprache {/* #portal-language */}
Die Standardsprache des Portals als zweistelliger Sprachcode nach [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP-Proxy-Einstellungen {/* #http-proxy-settings */}
Einstellungen für den HTTP-Proxy.

##### HTTP-Proxy verwenden {/* #use-http-proxy */}
Aktivieren Sie diese Option, wenn Sie einen HTTP-Proxy verwenden möchten.

##### Proxy-Hostname {/* #proxy-host-name */}
Der Proxy-Host wird getrennt vom Port angegeben; der Standard-Host ist 127.0.0.1.
##### Proxy-Port {/* #proxy-port */}
Standard: 3128. Die Editoren für Host und Port sind nur verfügbar, wenn **HTTP-Proxy verwenden** aktiviert ist.

##### Internes Portal {/* #portal-is-internal */}
Aktivieren Sie diese Option, um ein internes Portal für MAG-Geräte zu verwenden. Eine lokale Portal-URL aktiviert sie automatisch und macht den Schalter unverfügbar. Ein Wechsel zu einer Netzwerk-URL hebt die automatische Einstellung als internes Portal auf.

##### Portal-URL (Internes Portal) {/* #internal-portal-url */}
Verwenden Sie das Feld **Portal-URL** für den lokalen Pfad oder die Datei-URL; es gibt keinen separaten Editor für interne URLs.

Öffnen Sie zur Installation eines Portals **Einstellungen > Profile > Ihr Profil > Portaleinstellungen**, verwenden Sie die Installationsaktion und wählen Sie das Archiv aus. Warten Sie auf das Entpacken
und bestätigen Sie anschließend die vorgeschlagene lokale URL. Das Installieren der Dateien und das Übernehmen der URL sind getrennte Schritte.
Verwenden Sie die Entfernen-Aktion in **Portaleinstellungen**, um ein installiertes internes Portal zu entfernen.

### STB-Konfiguration {/* #stb-configuration */}
Die wichtigsten Emulationseinstellungen.

#### STB-Modell {/* #stb-model */}
Das zu emulierende STB-Modell.

#### Firmware {/* #firmware */}
Die zu emulierende **Firmware**; es wird keine tatsächliche Firmware installiert. Einige Portale benötigen eine bestimmte Firmware.
Wählen Sie diese gegebenenfalls aus der Liste, sofern verfügbar.
Für die meisten unterstützten STB-Modelle ist nur die Firmware **Generic** verfügbar, die üblicherweise die neueste Version repräsentiert.

Verfügbare Firmware-Optionen:
* Generic: üblicherweise die neueste verfügbare Firmware.
* Custom (nur MAG 250): anpassbare Firmware. Verwenden Sie diese, wenn Sie bestimmte Firmware-Einstellungen ändern müssen.

Die meisten Benutzer sollten die Firmware **Generic** verwenden (standardmäßig ausgewählt).

#### Firmware-Einstellungen {/* #firmware-settings */}
Diese Option ist nur mit der Firmware **Custom** verfügbar (derzeit nur für MAG 250 unterstützt).
Konfigurieren Sie die Versionen der Player-Engine, JavaScript-API und STB-API sowie Version, Beschreibung und Datum des Firmware-Abbilds.
Aktivieren Sie die Verwendung eines benutzerdefinierten User Agent, bevor Sie dessen Zeichenfolge bearbeiten.

#### User Agent {/* #user-agent */}
Die User-Agent-Zeichenfolge für den Webbrowser der App.

#### Bildschirmauflösung {/* #screen-resolution */}
Die zu emulierende Bildschirmauflösung; die tatsächliche Auflösung des Displays wird dadurch nicht geändert.
Wählen Sie eine von Ihrem Portal unterstützte Auflösung, üblicherweise **1280x720**.

#### MAC-Adresse {/* #mac-address */}
Die MAC-Adresse des emulierten Geräts. Sie können die MAC-Adresse eines eigenen echten MAG-250-Geräts verwenden
oder 12 zufällige Hexadezimalziffern (0–9, A–F), paarweise durch Doppelpunkte getrennt. [^wrong_mac]

Die meisten Portale verlangen eine MAC-Adresse, die mit 00:1A:79 beginnt.

[^wrong_mac]: Auf einigen Geräten mit ausschließlich WLAN lautet die generierte MAC-Adresse möglicherweise **00:1A:79:00:00:00**.
    Das bedeutet, dass die App sie aufgrund von Android-Beschränkungen nicht richtig erkennen konnte.
    Ersetzen Sie den Teil **00:00:00** durch zufällige Hexadezimalziffern und behalten Sie die Doppelpunkte zwischen den Paaren bei.

#### Seriennummer {/* #serial-number */}
Die Seriennummer des emulierten Geräts. Die meisten Portale prüfen sie nicht; daher funktioniert üblicherweise jede Zeichenfolge.

#### Geräte-ID {/* #device-id */}
Einstellungen für die Geräte-ID.

##### MAC-basierte Geräte-ID verwenden {/* #use-mac-based-device-id */}
Die Geräte-ID aus der MAC-Adresse des Geräts erzeugen. Drücken Sie **Geräte-ID auf Standardwert zurücksetzen…** nach dem Aktivieren oder
Deaktivieren dieser Option, um die ID neu zu erzeugen.

##### Geräte-ID senden {/* #send-device-id */}
Die Geräte-ID auf Anfrage eines Portals senden. Ist diese Option deaktiviert, sendet die App eine leere Zeichenfolge.

##### Zufallsstartwert der Geräte-ID {/* #device-id-random-seed */}
Der Startwert zur Erzeugung der Geräte-ID. Verwenden Sie auf allen Geräten mit derselben Portal-URL und
MAC-Adresse denselben Startwert. Das Bestätigen eines geänderten Startwerts erzeugt die IDs automatisch neu.
Drücken Sie nicht **Geräte-ID auf Standardwert zurücksetzen…**, wenn Sie den Startwert behalten möchten: diese Aktion löscht ihn.

##### Geräte-ID {/* #device-id-value */}
Die Geräte-ID. Verwenden Sie den generierten Wert oder geben Sie einen eigenen ein.

##### Benutzerdefinierte Geräte-ID 2 und Signatur {/* #custom-device-id-2-and-signature */}
Aktivieren Sie diese Option, um Geräte-ID 2 und die Signatur zu bearbeiten.

##### Geräte-ID 2 {/* #device-id-2 */}
##### Signatur {/* #signature */}
##### Geräte-ID auf Standardwert zurücksetzen… {/* #reset-device-id-to-default-value */}
Nach Bestätigung wird der Startwert gelöscht und **Geräte-ID**, **Geräte-ID 2** sowie die Signatur werden aus den aktuellen Profilwerten neu erzeugt. Andere Profileinstellungen bleiben erhalten.

Die manuelle Bearbeitung von **Geräte-ID** ist nur verfügbar, wenn **Geräte-ID senden** aktiviert und MAC-basierte IDs deaktiviert sind.
Die Bearbeitung von **Geräte-ID 2** und **Signatur** erfordert zusätzlich **Benutzerdefinierte Geräte-ID 2 und Signatur**.
Automatisch abgeleitete Werte bleiben lesbar, wenn die Bearbeitung nicht verfügbar ist.

#### Hardwareeinstellungen {/* #hardware-settings */}
##### Hersteller {/* #vendor */}
##### Hardwareversion {/* #hardware-version */}

Die Geräteoptionen umfassen auch Ministra-Kompatibilität und Browserumleitung. Ändern Sie diese nur, wenn Ihr Portal dies erfordert.

### Medienplayer-Einstellungen {/* #media-player-settings */}

Media-Player-Einstellungen für dieses Profil.
#### Medienplayer {/* #media-player */}
Wählen Sie den Standard-Media-Player für dieses Profil.

Die Liste enthält die automatische Auswahl, Exo, den internen Android-Player und einen externen Player
sowie weitere Player, die in Ihrem Build verfügbar sind. Wählen Sie aus den in der App angezeigten Möglichkeiten.
Die Codec-Unterstützung des internen Players hängt von Android ab; externe Player öffnen Streams in einer anderen App.

#### UDPXY-Einstellungen {/* #udpxy-settings */}
##### UDPXY-Unterstützung aktivieren {/* #enable-udxpy-support */}
Aktivieren Sie UDPXY erst nach Eingabe einer gültigen HTTP-/HTTPS-Server-URL.
##### URL des UDPXY-Servers {/* #udpxy-server-url */}
Sie können die URL bei deaktiviertem UDPXY eingeben. Eine leere URL ist nur zulässig, solange UDPXY deaktiviert ist; eine nicht leere URL muss eine gültige HTTP-/HTTPS-URL sein.
##### Streamprotokoll überschreiben {/* #overwrite-stream-protocol */}
Wählen Sie bei aktiviertem UDPXY das Protokoll, das für den Stream erzwungen werden soll.
### Erweiterte Einstellungen {/* #advanced-settings */}
Die profilspezifischen Kompatibilitätsoptionen umfassen CSS-Patches, Emulatorerkennung, Korrekturen für Hintergrundfarben, lokale Dateien und AJAX
sowie Rückkehr- und Tastenereignisse für externe Player. Die Optionen für Zurück-, Beenden- und OK-Ereignisse hängen von der Ereignisoption zur Rückkehr zur Senderliste ab.
Ändern Sie diese nur, wenn Ihr Portal oder externer Player dies erfordert.
