---
id: profiles
title: Profiles
sidebar_label: Profiles
---

# STB profiles

**STB profile** is a set of options to emulate an STB in the app. The app creates one profile by default on the first 
start, but you can always change it or add another profile to be able to load more portals on the same device. 
To create a new profile, double tap on the screen and the menu on the top (or on the side) should appear [^1], 
then select **Settings**. When the **Settings** open, select **Profiles** where you can add or update profiles. 

StbEmu does not provide, host, or index any media or IPTV playlists. 
Users must have a legal right to the content they access via the emulator.

[^1] if you use a 3D remote control or mouse, move the cursor pointer, click on the screen and open the app's
menu on top. 

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
        - [Enable UDXPY support](#enable-udxpy-support)
        - [UDPXY server URL](#udpxy-server-url)
        - [Overwrite stream protocol](#overwrite-stream-protocol)
- [Advanced settings](#advanced-settings)

### Profile name
A name of the profile. Should be any non-empty string.

### Portal settings
A set of portal-specific options.
##### Portal URL
A URL where the portal is located. It must start from a scheme (**http://**, **https://**, **ftp://**, etc.).

##### Portal language
A default language for a portal. Must be one of [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language codes (two-letter).

#### HTTP Proxy settings
HTTP proxy configuration

##### Use HTTP proxy
Enable if you want to use an HTTP proxy.

##### Proxy host name
##### Proxy port

##### Portal is internal
Check if you want to use an internal portal for MAG devices.

##### Internal portal URL

### STB configuration
Main configuration options.

#### STB Model
An STB model you want to emulate.

#### Firmware
A **firmware** (not a real one) you want to emulate. Some portals may require using specific firmware, 
so you have to choose it in the list if available.
Most of the supported STB models only have a **Generic** firmware, which is usually the most recent.

Available firmwares
* Generic. Usually the most recent firmware available.
* Custom (Mag 250 only). Customizable firmware. Use it if you need to configure some specific firmware options.

Most users should use **Generic** firmware (selected by default).

#### Firmware settings
This option is only available if you use **Custom** firmware (only available for MAG 250 for now).
Here you may configure some specific firmware options, like version, custom user agent, etc.

#### User Agent
A User Agent for the app's web browser.

#### Screen resolution
A screen resolution to emulate (not a real one!). Use one of the resolutions your portal supports
(usually **1280x720**).

#### MAC address
A MAC address of the emulated device. If you have a real MAG 250 device, you may use its MAC address, 
or just any random hexadecimal 12 digits (0–9, A-F), divided by colons. [^wrong_mac].

Most portals require MAC address to start from 00:1A:79.

[^wrong_mac]: On some devices that have only Wi-Fi connection, the default generated MAC address could 
be **00:1A:79:00:00:00** which means the app couldn't properly detect it because of Android restrictions. 
If you have such an issue, change the **00:00:00** part to any random hexadecimal digits.

#### Serial number
A serial number of the emulated device. Most portals don't check it, so any random text line should be good for use.

#### Device ID
Device ID configuration options.

##### Use MAC-based device ID
Enable to generate device ID based on your device's MAC address. Press **Reset device ID** after enabling or 
disabling this option to regenerate the ID.

##### Send Device ID
Send device ID if portals request it. Sends empty string if not enabled.

##### Device ID random seed
A seed for generating device ID. Use the same seed on all your devices that use the same portal URL and the same 
MAC address. Press **Reset device ID** after changing.

##### Device ID value
A device ID. You may either use a generated value or write your own.

##### Custom device ID 2 and signature
Enable to be able to change Device ID 2 and signature.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Regenerates **Device ID**, **Device ID 2** and signature.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
IP address that will be sent to a portal if requested. Not a real one.
Most portals never use this information, so you may not change it.
### Media player settings

Profile specific media player settings.
#### Media player
Select a default media player for profile

| Player          | Description                                                                                                                                          | Comment                                                 |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo             | [Github](https://github.com/google/ExoPlayer)                                                                                                        | The default player. Should be preferred on most devices |
| VLC             | [web site](https://www.videolan.org)                                                                                                                 |                                                         |
| MPV             | [Github](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk             | [Github](https://github.com/bilibili/ijkplayer)                                                                                                      | Doesn't support subtitles                               |
| Internal player | Uses Android's player. A list of supported codecs depends on your device's Android version.                                                          | Doesn't support subtitles                               |
| External player | You may use almost any external player, but no integration with the emulator is available (media streams will be opened in an external application). |                                                         |

#### UDPXY settings
##### Enable UDXPY support
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
