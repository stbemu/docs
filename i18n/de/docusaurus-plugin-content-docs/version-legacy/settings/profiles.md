---
id: profiles
title: Profile
sidebar_label: Profile
---

# STB-Profile {/* #stb-profiles */}

Ein **STB-Profil** ist eine Sammlung von Optionen zur Emulation einer Set-Top-Box in der App. Beim ersten Start erstellt die App ein Profil.
Sie können es bearbeiten oder weitere Profile hinzufügen, um verschiedene Portale auf demselben Gerät zu laden.
Tippen Sie zum Erstellen eines Profils doppelt auf den Bildschirm, um das Menü oben oder seitlich anzuzeigen [^1].
Wählen Sie **Settings** und dann **Profiles**, um Profile hinzuzufügen oder zu bearbeiten.

StbEmu stellt keine Medien oder IPTV-Wiedergabelisten bereit, hostet und indexiert sie auch nicht.
Benutzer müssen das Recht haben, auf die über den Emulator abgerufenen Inhalte zuzugreifen.

[^1]: Wenn Sie eine 3D-Fernbedienung oder eine Maus verwenden, bewegen Sie den Zeiger, klicken Sie auf den Bildschirm und öffnen Sie das App-Menü oben.

- [Profile name](#profile-name)
- [Portal settings](#portal-settings)
    - [Portal URL](#portal-url)
    - [Portal language](#portal-language)
    - [HTTP Proxy settings](#http-proxy-settings)
        - [Use HTTP proxy](#use-http-proxy)
        - [Proxy host name](#proxy-host-name)
        - [Proxy port](#proxy-port)
    - [Portal is internal](#portal-is-internal)
    - [Internal portal URL](#internal-portal-url)
- [STB configuration](#stb-configuration)
    - [STB Model](#stb-model)
    - [Firmware](#firmware)
    - [Firmware settings](#firmware-settings)
    - [User Agent](#user-agent)
    - [Screen resolution](#screen-resolution)
    - [MAC address](#mac-address)
    - [Serial number](#serial-number)
    - [Device ID](#device-id)
        - [Use MAC-based device ID](#use-mac-based-device-id)
        - [Send Device ID](#send-device-id)
        - [Device ID random seed](#device-id-random-seed)
        - [Device ID](#device-id-value)
        - [Custom device ID 2 and signature](#custom-device-id-2-and-signature)
        - [Device ID 2](#device-id-2)
        - [Signature](#signature)
        - [Reset device ID to default value](#reset-device-id-to-default-value)
    - [Hardware settings](#hardware-settings)
        - [Vendor](#vendor)
        - [Hardware version](#hardware-version)
    - [IP address](#ip-address)
- [Media player settings](#media-player-settings)
    - [Media player](#media-player)
    - [UDPXY settings](#udpxy-settings)
        - [Enable UDPXY support](#enable-udxpy-support)
        - [UDPXY server URL](#udpxy-server-url)
        - [Overwrite stream protocol](#overwrite-stream-protocol)
- [Advanced settings](#advanced-settings)

### Profile name {/* #profile-name */}
Der Profilname. Jede nicht leere Zeichenfolge ist zulässig.

### Portal settings {/* #portal-settings */}
Portalspezifische Optionen.
##### Portal URL {/* #portal-url */}
Die URL des Portals. Sie muss mit einem Schema beginnen (**http://**, **https://**, **ftp://** usw.).

##### Portal language {/* #portal-language */}
Die Standardsprache des Portals als zweistelliger Sprachcode nach [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings {/* #http-proxy-settings */}
Einstellungen für den HTTP-Proxy.

##### Use HTTP proxy {/* #use-http-proxy */}
Aktivieren Sie diese Option, wenn Sie einen HTTP-Proxy verwenden möchten.

##### Proxy host name {/* #proxy-host-name */}
##### Proxy port {/* #proxy-port */}

##### Portal is internal {/* #portal-is-internal */}
Aktivieren Sie diese Option, um ein internes Portal für MAG-Geräte zu verwenden.

##### Internal portal URL {/* #internal-portal-url */}

### STB configuration {/* #stb-configuration */}
Die wichtigsten Emulationseinstellungen.

#### STB Model {/* #stb-model */}
Das zu emulierende STB-Modell.

#### Firmware {/* #firmware */}
Die zu emulierende **Firmware**; es wird keine tatsächliche Firmware installiert. Einige Portale benötigen eine bestimmte Firmware.
Wählen Sie diese gegebenenfalls aus der Liste, sofern verfügbar.
Für die meisten unterstützten STB-Modelle ist nur die Firmware **Generic** verfügbar, die üblicherweise die neueste Version repräsentiert.

Verfügbare Firmware-Optionen:
* Generic: üblicherweise die neueste verfügbare Firmware.
* Custom (nur MAG 250): anpassbare Firmware. Verwenden Sie diese, wenn Sie bestimmte Firmware-Einstellungen ändern müssen.

Die meisten Benutzer sollten die Firmware **Generic** verwenden (standardmäßig ausgewählt).

#### Firmware settings {/* #firmware-settings */}
Diese Option ist nur mit der Firmware **Custom** verfügbar (derzeit nur für MAG 250 unterstützt).
Konfigurieren Sie damit bestimmte Firmware-Einstellungen wie die Version oder eine benutzerdefinierte User-Agent-Zeichenfolge.

#### User Agent {/* #user-agent */}
Die User-Agent-Zeichenfolge für den Webbrowser der App.

#### Screen resolution {/* #screen-resolution */}
Die zu emulierende Bildschirmauflösung; die tatsächliche Auflösung des Displays wird dadurch nicht geändert.
Wählen Sie eine von Ihrem Portal unterstützte Auflösung, üblicherweise **1280x720**.

#### MAC address {/* #mac-address */}
Die MAC-Adresse des emulierten Geräts. Sie können die MAC-Adresse eines eigenen echten MAG-250-Geräts verwenden
oder 12 zufällige Hexadezimalziffern (0–9, A–F), paarweise durch Doppelpunkte getrennt. [^wrong_mac]

Die meisten Portale verlangen eine MAC-Adresse, die mit 00:1A:79 beginnt.

[^wrong_mac]: Auf einigen Geräten mit ausschließlich WLAN lautet die generierte MAC-Adresse möglicherweise **00:1A:79:00:00:00**.
    Das bedeutet, dass die App sie aufgrund von Android-Beschränkungen nicht richtig erkennen konnte.
    Ersetzen Sie den Teil **00:00:00** durch zufällige Hexadezimalziffern und behalten Sie die Doppelpunkte zwischen den Paaren bei.

#### Serial number {/* #serial-number */}
Die Seriennummer des emulierten Geräts. Die meisten Portale prüfen sie nicht; daher funktioniert üblicherweise jede Zeichenfolge.

#### Device ID {/* #device-id */}
Einstellungen für die Geräte-ID.

##### Use MAC-based device ID {/* #use-mac-based-device-id */}
Die Geräte-ID aus der MAC-Adresse des Geräts erzeugen. Drücken Sie **Reset device ID** nach dem Aktivieren oder
Deaktivieren dieser Option, um die ID neu zu erzeugen.

##### Send Device ID {/* #send-device-id */}
Die Geräte-ID auf Anfrage eines Portals senden. Ist diese Option deaktiviert, sendet die App eine leere Zeichenfolge.

##### Device ID random seed {/* #device-id-random-seed */}
Der Startwert zur Erzeugung der Geräte-ID. Verwenden Sie auf allen Geräten mit derselben Portal-URL und
MAC-Adresse denselben Startwert. Drücken Sie nach einer Änderung dieses Werts **Reset device ID**.

##### Device ID value {/* #device-id-value */}
Die Geräte-ID. Verwenden Sie den generierten Wert oder geben Sie einen eigenen ein.

##### Custom device ID 2 and signature {/* #custom-device-id-2-and-signature */}
Aktivieren Sie diese Option, um Device ID 2 und die Signatur zu bearbeiten.

##### Device ID 2 {/* #device-id-2 */}
##### Signature {/* #signature */}
##### Reset device ID to default value {/* #reset-device-id-to-default-value */}
**Device ID**, **Device ID 2** und die Signatur neu erzeugen.

#### Hardware settings {/* #hardware-settings */}
##### Vendor {/* #vendor */}
##### Hardware version {/* #hardware-version */}

#### IP address {/* #ip-address */}
Die auf Anfrage an ein Portal gesendete IP-Adresse. Dies ist eine emulierte Adresse, nicht die tatsächliche IP-Adresse des Geräts.
Die meisten Portale verwenden diese Angabe nicht, daher müssen Sie sie üblicherweise nicht ändern.
### Media player settings {/* #media-player-settings */}

Media-Player-Einstellungen für dieses Profil.
#### Media player {/* #media-player */}
Wählen Sie den Standard-Media-Player für dieses Profil.

| Player | Beschreibung | Anmerkung |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo | [GitHub](https://github.com/google/ExoPlayer) | Der Standardplayer, empfohlen für die meisten Geräte |
| VLC             | [Website](https://www.videolan.org)                                                                                                                 |                                                         |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk | [GitHub](https://github.com/bilibili/ijkplayer) | Unterstützt keine Untertitel |
| Internal player | Verwendet den Android-Player. Unterstützte Codecs hängen von der Android-Version Ihres Geräts ab. | Unterstützt keine Untertitel |
| External player | Fast jeder externe Player ist nutzbar. Eine Integration mit dem Emulator ist nicht verfügbar; Medienstreams werden in einer anderen App geöffnet. | |

#### UDPXY settings {/* #udpxy-settings */}
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL {/* #udpxy-server-url */}
##### Overwrite stream protocol {/* #overwrite-stream-protocol */}
### Advanced settings {/* #advanced-settings */}
