---
id: faq
title: FAQ
sidebar_label: FAQ
---

# FAQ

#### I paid for StbEmu Pro on Google Play, but I cannot download it. Google Play asks me to pay again {/* #i-have-paid-for-stbemu-pro-on-google-play-but-cannot-download-it-google-play-asks-me-to-pay-again */}

:::info
This is a known Google Play issue. Allow up to 24 hours for Google Play to process your payment and update the data on your devices.
You can also open a web browser on your computer or mobile device, go to [Google Play](https://play.google.com/store),
find StbEmu Pro ([direct link](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro)),
and install it remotely on your devices.
:::

#### The app resets the volume level when I change channels

:::info
This is a known issue on some Sony, Philips, and Xiaomi devices. It may also affect other devices.

To fix it, configure the app to use the system (global) volume level:
go to [Settings](/settings) > [Common settings](/settings/common-settings) and enable ***Always use system volume level***.
Reload the active portal from the app's menu for the changes to take effect.
:::

#### How can I customize the portal's interface? I don't like the colors or icons {/* #how-can-i-customize-the-portal-ui-i-dont-like-the-colors-or-icons */}

:::info
Portals are hosted on your IPTV provider's servers. You can customize the interface only if your provider offers that option.
Most portals do not support interface customization, so only the IPTV provider can change their appearance.
:::

#### Channels disappear from Favorites when I reload the portal, or I cannot reorder them {/* #when-i-add-some-channels-to-favorites-and-reload-the-portal-they-disappear-i-cannot-move-favorite-channels-in-the-list */}

:::info
All channel lists, including favorites, are stored on your IPTV provider's servers. If the app does not load your favorites
or loads them in the wrong order, the portal has not been configured correctly by your IPTV provider.
Only your provider can fix this issue.
:::

#### Channels frequently buffer during playback {/* #when-i-play-channels-theres-a-lot-of-buffering */}

:::info
Frequent buffering usually means that your network connection or your IPTV provider's connection is not reliable or fast enough
to stream video to your device. If you are sure your connection is working properly, report the issue to your IPTV provider.
:::

#### How can I load M3U playlists in the app? {/* #how-can-i-load-m3u-playlists-in-the-app */}

:::info
StbEmu does not support M3U or other playlists. It only supports portals designed for MAG boxes.
:::

#### I cannot create or restore a backup in the app {/* #i-cannot-create-a-backup-or-restore-a-backup-in-the-application */}

:::info
This feature currently works properly only on Android 10 and earlier. Starting with Android 11, apps can read and write files
only in their own folders by default. Apps can request permission to access other folders, but this does not work on some
Android TV devices and set-top boxes (STBs). The underlying issues will not be fixed:
[1](https://issuetracker.google.com/issues/71327396), [2](https://issuetracker.google.com/issues/202985150).

If your device is affected, you will not be able to create or restore backups on it.
:::
