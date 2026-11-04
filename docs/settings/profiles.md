---
id: profiles
title: Profiles
sidebar_label: Profiles
---

# STB profiles

An **STB profile** is a set of options for emulating a set-top box in the app. The app creates one profile on first launch.
You can edit it or add more profiles to load different portals on the same device.
Open **Settings > Profiles** and choose **Add profile**, or select an existing profile to edit it.
The overview groups options under **Connection**, **Playback & device**, and **Manage profile**.
Available actions depend on your app edition and profile restrictions. The active profile cannot be deleted;
switch to another profile before deleting it. Deletion requires confirmation.

Text and choice edits require confirmation; switches save immediately. See [Saving changes](/settings#saving-changes)
for validation errors, conflicting edits, and saved changes that require a runtime refresh.

StbEmu does not provide, host, or index any media or IPTV playlists.
Users must have a legal right to the content they access via the emulator.

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
Enter an absolute **http://** or **https://** URL. Local-network hosts, localhost, IPv6 addresses, and international domain names are supported. Network URLs must not contain whitespace.
For an internal portal, an absolute filesystem path or supported absolute **file://** URL is also accepted. FTP URLs are not accepted by the redesigned editor.

##### Portal language
The default portal language, specified as a two-letter [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code.

#### HTTP Proxy settings
HTTP proxy settings.

##### Use HTTP proxy
Enable if you want to use an HTTP proxy.

##### Proxy host name
The proxy host is separate from its port; the default host is 127.0.0.1.
##### Proxy port
Default: 3128. The host and port editors are available only while **Use HTTP proxy** is enabled.

##### Portal is internal
Enable this option to use an internal portal for MAG devices. A local portal URL enables it automatically and makes the switch unavailable. Changing to a network URL clears the automatic internal-portal setting.

##### Internal portal URL
Use the **Portal URL** field for the local path or file URL; there is no separate internal-URL editor.

To install a portal, open **Settings > Profiles > your profile > Portal settings**, use the install action, and select its archive. Wait for extraction,
then confirm the offered local URL. Installing files and accepting the URL are separate steps.
Use the remove action in **Portal settings** to remove an installed internal portal.

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
Configure player-engine, JavaScript API and STB API versions, plus the image version, description, and date.
Enable custom User Agent use before editing the custom User Agent string.

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
MAC address. Confirming a changed seed regenerates the IDs automatically.
Do not press Reset if you want to keep the seed: Reset clears it.

##### Device ID value
The device ID. Use the generated value or enter your own.

##### Custom device ID 2 and signature
Enable this option to edit Device ID 2 and the signature.

##### Device ID 2
##### Signature
##### Reset device ID to default value
After confirmation, clear the seed and regenerate **Device ID**, **Device ID 2**, and the signature from the current profile values. Other profile settings are retained.

Manual **Device ID** editing is available only when **Send Device ID** is enabled and MAC-based IDs are disabled.
Editing **Device ID 2** and **Signature** also requires **Custom device ID 2 and signature**.
Automatically derived values remain readable when editing is unavailable.

#### Hardware settings
##### Vendor
##### Hardware version

Device options also include Ministra compatibility and browser redirection. Change them only as required by your portal.

### Media player settings

Media player settings for this profile.
#### Media player
Select the default media player for this profile.

The list includes automatic selection, Exo, the Android internal player, and an external player,
plus any additional players available in your build. Select from the choices shown in the app.
The internal player's codec support depends on Android; external players open streams in another app.

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
Enable UDPXY only after entering a valid HTTP/HTTPS server URL.
##### UDPXY server URL
You can enter the URL while UDPXY is off. An empty URL is allowed only while it is off; a nonempty URL must be valid HTTP/HTTPS.
##### Overwrite stream protocol
Choose the stream protocol override when UDPXY is enabled.
### Advanced settings
Profile-specific compatibility options include CSS patches, emulator detection, background-color, local-file and AJAX fixes,
and return/key events for external players. Back, Exit, and OK event options depend on the return-to-channel-list event option.
Change these only when required by your portal or external player.
