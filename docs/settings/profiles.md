---
id: profiles
title: Profiles
sidebar_label: Profiles
---

# STB profiles

An **STB profile** is a set of options for emulating a set-top box in the app. The app creates one profile on first launch.
You can edit it or add more profiles to load different portals on the same device.
To create a profile, double-tap the screen to display the menu at the top or side [^1].
Select **Settings**, then **Profiles**, where you can add or edit profiles.

StbEmu does not provide, host, or index any media or IPTV playlists. 
Users must have a legal right to the content they access via the emulator.

[^1]: If you use a 3D remote control or a mouse, move the pointer, click the screen, and open the app's menu at the top.

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

### Profile name
The profile name. This can be any non-empty string.

### Portal settings
Options specific to the portal.
##### Portal URL
The URL of the portal. It must start with a scheme (**http://**, **https://**, **ftp://**, etc.).

##### Portal language
The default portal language, specified as a two-letter [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code.

#### HTTP Proxy settings
HTTP proxy settings.

##### Use HTTP proxy
Enable if you want to use an HTTP proxy.

##### Proxy host name
##### Proxy port

##### Portal is internal
Enable this option to use an internal portal for MAG devices.

##### Internal portal URL

### STB configuration
The main emulation settings.

#### STB Model
The STB model to emulate.

#### Firmware
The **firmware** to emulate; no actual firmware is installed. Some portals require specific firmware.
If so, select it from the list if it is available.
Most supported STB models offer only **Generic** firmware, which usually represents the latest version.

Available firmware options:
* Generic: usually the latest available firmware.
* Custom (MAG 250 only): customizable firmware. Use this if you need to change specific firmware settings.

Most users should use **Generic** firmware (selected by default).

#### Firmware settings
This option is available only with **Custom** firmware (currently supported only for MAG 250).
Use it to configure specific firmware settings, such as the version or a custom User Agent string.

#### User Agent
The User Agent string for the app's web browser.

#### Screen resolution
The screen resolution to emulate; this does not change the actual display resolution.
Choose a resolution your portal supports, usually **1280x720**.

#### MAC address
The MAC address of the emulated device. You can use the MAC address of a real MAG 250 device you own,
or 12 random hexadecimal digits (0–9, A–F), grouped in pairs separated by colons. [^wrong_mac]

Most portals require the MAC address to start with 00:1A:79.

[^wrong_mac]: On some Wi-Fi-only devices, the generated MAC address may be **00:1A:79:00:00:00**.
    This means the app could not detect it correctly because of Android restrictions.
    Replace the **00:00:00** portion with random hexadecimal digits, keeping the colons between pairs.

#### Serial number
The serial number of the emulated device. Most portals do not check it, so any text string will usually work.

#### Device ID
Device ID settings.

##### Use MAC-based device ID
Generate the device ID from the device's MAC address. Press **Reset device ID** after enabling or
disabling this option to regenerate the ID.

##### Send Device ID
Send the device ID when a portal requests it. If disabled, the app sends an empty string.

##### Device ID random seed
The seed used to generate the device ID. Use the same seed on all devices that use the same portal URL and
MAC address. Press **Reset device ID** after changing this value.

##### Device ID value
The device ID. Use the generated value or enter your own.

##### Custom device ID 2 and signature
Enable this option to edit Device ID 2 and the signature.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Regenerate **Device ID**, **Device ID 2**, and the signature.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
The IP address sent to a portal on request. This is an emulated address, not the device's actual IP address.
Most portals do not use this information, so you usually do not need to change it.
### Media player settings

Media player settings for this profile.
#### Media player
Select the default media player for this profile.

| Player          | Description                                                                                                                                          | Comment                                                 |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo             | [GitHub](https://github.com/google/ExoPlayer)                                                                                                        | The default player, recommended for most devices |
| VLC             | [Website](https://www.videolan.org)                                                                                                                 |                                                         |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk             | [GitHub](https://github.com/bilibili/ijkplayer)                                                                                                      | Does not support subtitles                               |
| Internal player | Uses the Android player. Supported codecs depend on your device's Android version.                                                          | Does not support subtitles                               |
| External player | Use almost any external player. Integration with the emulator is unavailable; media streams open in another app. |                                                         |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
