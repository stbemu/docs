---
id: common-settings
title: Common settings
sidebar_label: Common settings
---

# Common settings

These settings are for app version 0.8+.

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
Change application language (using Android's version by default, if available).

#### Hide navigation bar
Hide the navigation bar with buttons (may not work on some devices). If this option is selected, and you use 
a touchscreen to control the app, you may need to tap twice to show on-screen buttons if they are hidden.
(The first time is to show the navigation bar, it's an Android's restriction.)

#### Always show overlay buttons
Show on-screen buttons. Usually this option should be enabled. However, you may disable it on STBs if buttons 
appear when you press a key on your remote control.

#### Screen configuration
You may enable or disable screen rotating when device orientation is changed.
Keyboard configuration

#### Keyboard configuration
Remote control settings (not available in the free version).

Configuration for the remote control server to control a portal using software remote control for MAG-250/AuraHD/etc.
#### Boot options
##### Auto start on device boot

Start the app on the device boot. Only works if the app is installed on internal storage. If you have a lock screen 
enabled on your device (e.g., on phones or tablets), the app will be started after you unlock the device.
Services

#### Stop in the background
Pause the app if you switched to another app.

#### Android TV
Android TV-specific options

##### Enable recommendations

Enable recommendation cards on Android's main screen. The app will show cards for each profile you've configured for 
quick access to a profile.

#### Browser settings
Browser configuration

##### Scaling method
Select another scaling method for the browser if the portal is too big or too small. 
You don't need to change this option on most devices, except if your device has a low display resolution 
(less than portal's resolution, in most cases 1280x720).

#### Network settings
Change some network settings

##### Enable network cache
Enable caching of network requests. Speeds up portal loading in most cases. Disable if you get authentication error
too often or have other network-specific issues.

##### Cache size
A size of network cache. Default value: 20MB.
