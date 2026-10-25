---
id: common-settings
title: Common settings
sidebar_label: Common settings
---

# Common settings

These settings apply to app version 0.8 and later.

- [Settings](#settings)
    - [App Language](#app-language)
    - [Hide navigation bar](#hide-navigation-bar)
    - [Always show overlay buttons](#always-show-overlay-buttons)
    - [Screen configuration](#screen-configuration)
    - [Keyboard configuration](#keyboard-configuration)
- [Boot options](#boot-options)
    - [Auto start on device boot](#auto-start-on-device-boot)
- [Android TV](#android-tv)
    - [Enable recommendations](#enable-recommendations)
- [Browser settings](#browser-settings)
    - [Scaling method](#scaling-method)
- [Network settings](#network-settings)
    - [Enable network cache](#enable-network-cache)
    - [Cache size](#cache-size)

### Settings
#### App Language
Change the app language. By default, the app uses the Android system language if it is supported.

#### Hide navigation bar
Hide the navigation bar and its buttons (may not work on some devices). If this option is enabled and you use
a touchscreen, you may need to tap twice to show hidden on-screen buttons.
The first tap shows the navigation bar; this is an Android restriction.

#### Always show overlay buttons
Show on-screen buttons. This option should usually remain enabled. On STBs, you can disable it if the buttons
appear when you press a key on your remote control.

#### Screen configuration
Enable or disable screen rotation when the device orientation changes.

#### Keyboard configuration
Remote control settings (not available in the free version).

Configure the remote control server to control a portal using a software remote control for MAG 250, AuraHD, or similar devices.

#### Boot options
##### Auto start on device boot

Start the app when the device boots. This works only if the app is installed in internal storage.
If your device has a lock screen enabled (for example, on a phone or tablet), the app starts after you unlock it.

#### Stop in the background
Pause the app when you switch to another app.

#### Android TV
Options specific to Android TV.

##### Enable recommendations

Enable recommendation cards on the Android home screen. The app shows a card for each configured profile
so you can access it quickly.

#### Browser settings
Browser settings.

##### Scaling method
Select a different browser scaling method if the portal appears too large or too small.
Most devices do not need this setting changed. An exception is a device whose display resolution is lower
than the portal's resolution, which is usually 1280x720.

#### Network settings
Network settings.

##### Enable network cache
Cache network requests to speed up portal loading in most cases. Disable this option if you frequently
encounter authentication errors or other network issues.

##### Cache size
The size of the network cache. Default: 20 MB.
