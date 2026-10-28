---
id: faq
title: FAQ
sidebar_label: FAQ
---

import FAQ from '@site/src/components/FAQ';

# FAQ

<FAQ id="google-play-pay-again" question="I paid for StbEmu Pro on Google Play, but I cannot download it. Google Play asks me to pay again">
    This is a known Google Play issue. Allow up to 24 hours for Google Play to process your payment and update the data on your devices.
    You can also open a web browser on your computer or mobile device, go to [Google Play](https://play.google.com/store),
    find StbEmu Pro ([direct link](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro)),
    and install it remotely on your devices.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="The app resets the volume level when I change channels">
    This is a known issue on some Sony, Philips, and Xiaomi devices. It may also affect other devices.

    To fix it, configure the app to use the system (global) volume level:
    go to [Settings](/settings) > [Common settings](/settings/common-settings) and enable ***Always use system volume level***.
    Reload the active portal from the app's menu for the changes to take effect.
</FAQ>

<FAQ id="customize-portal-ui" question="How can I customize the portal's interface? I don't like the colors or icons">
    Portals are hosted on your IPTV provider's servers. You can customize the interface only if your provider offers that option.
    Most portals do not support interface customization, so only the IPTV provider can change their appearance.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="Channels disappear from Favorites when I reload the portal, or I cannot reorder them">
    All channel lists, including favorites, are stored on your IPTV provider's servers. If the app does not load your favorites
    or loads them in the wrong order, the portal has not been configured correctly by your IPTV provider.
    Only your provider can fix this issue.
</FAQ>

<FAQ id="channels-buffer" question="Channels frequently buffer during playback">
    Frequent buffering usually means that your network connection or your IPTV provider's connection is not reliable or fast enough
    to stream video to your device. If you are sure your connection is working properly, report the issue to your IPTV provider.
</FAQ>

<FAQ id="m3u-support" question="Does the app support M3U playlists?">
    StbEmu does not support M3U or other playlists. It only supports portals designed for MAG boxes.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="I cannot create or restore a backup in the app">
    This feature currently works properly only on Android 10 and earlier. Starting with Android 11, apps can read and write files
    only in their own folders by default. Apps can request permission to access other folders, but this does not work on some
    Android TV devices and set-top boxes (STBs). The underlying issues will not be fixed:
    [1](https://issuetracker.google.com/issues/71327396), [2](https://issuetracker.google.com/issues/202985150).

    If your device is affected, you will not be able to create or restore backups on it.
</FAQ>
