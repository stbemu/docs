---
id: common-settings
title: Application settings
sidebar_label: Application settings
---

# Application settings

App-wide options are grouped into the following categories in [Settings](/settings). Profile-specific options are under [Profiles](/settings/profiles).

## Appearance & controls

| Option | Purpose |
|--------|---------|
| App language | Use a supported app language or the Android system default. |
| Hide navigation bar | Hide Android's navigation buttons where supported. On a touchscreen, the first tap may reveal navigation and a second tap may be needed to reveal the app controls. |
| Always show overlay buttons | Show on-screen controls. You can turn this off on a TV box if remote key presses bring up unwanted buttons. |
| Hide controls after… (ms) | Set the on-screen control timeout in milliseconds. Default: 5000 (5 seconds). |
| Screen orientation | Choose the app's orientation behavior. |
| Keyboard type | Choose the keyboard used by the app. |
| Software keyboard input method | Choose how input is handled by the software keyboard. |

## Playback & behavior

| Option | Purpose |
|--------|---------|
| Pause media in background | Pause playback when switching to another app. This control is unavailable while automatic picture-in-picture is enabled. |
| Picture-in-picture | Use picture-in-picture when leaving the app, where supported by Android and the device. |
| Auto start on device boot | Start the app after device startup. The app must be installed in internal storage; a device lock screen can delay startup until it is unlocked. |
| Always use system volume level | Use the system volume rather than a separate app volume. |
| Enable recommendations | Show profile recommendation cards on supported Android TV home screens. |
| Media sessions | Enable Android media-session integration. |

## Network

**Scaling method** changes browser scaling if a portal appears too large or too small. Most devices can keep the default; a low-resolution display may need a different method.

**Enable network cache** caches network requests to improve portal loading. Disable it if you encounter repeated authentication or other network problems.

**Cache size** is entered in KB. The default is **20480 KB (20 MB)**. Restart the app when prompted to apply a changed cache size.

## Security

Enable settings password protection and set its password. Protected settings require authentication. The password editor does not retain its secret when the screen is recreated; enter it again if needed.

## Legacy remote

This category configures the older software remote-control service for MAG 250, AuraHD, and similar remote apps. It is separate from [Companion](/settings/companion) and [physical key mapping](/settings/key-maps).

Enable the service and configure its device name and password. The device name and password each allow up to 32 characters. This category is available only in app editions that enable it.
