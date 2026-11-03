---
id: faq
title: 常见问题
sidebar_label: 常见问题
---

import FAQ from '@site/src/components/FAQ';

# 常见问题 {/* #faq */}

<FAQ id="google-play-pay-again" question="我已经在 Google Play 上购买了 StbEmu Pro，但无法下载，Google Play 要求我再次付款">
    这是 Google Play 的一个已知问题。Google Play 处理您的付款并更新设备上的数据最多可能需要 24 小时，请耐心等待。
    您也可以在电脑或移动设备上打开浏览器，访问 [Google Play](https://play.google.com/store)，
    找到 StbEmu Pro（[直接链接](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro)），
    然后远程安装到您的设备上。
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="切换频道时，应用会重置音量">
    这是部分索尼、飞利浦和小米设备上的已知问题，其他设备也可能受到影响。

    要解决此问题，请将应用配置为使用系统（全局）音量：
    前往 [Settings](settings/index.md) > [Common settings](settings/common_settings.md)，启用 ***Always use system volume level***。
    在应用菜单中重新加载当前门户，使更改生效。
</FAQ>

<FAQ id="customize-portal-ui" question="如何自定义门户界面？我不喜欢它的颜色或图标">
    门户托管在您的 IPTV 提供商的服务器上，只有提供商提供相应选项时，您才能自定义界面。
    大多数门户不支持界面自定义，因此只有 IPTV 提供商才能更改其外观。
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="重新加载门户后，频道从 Favorites 中消失，或者无法调整频道顺序">
    所有频道列表（包括收藏列表）都存储在您的 IPTV 提供商的服务器上。如果应用未能加载您的收藏列表，
    或者加载后的顺序不正确，说明 IPTV 提供商未正确配置门户。
    只有您的提供商才能解决此问题。
</FAQ>

<FAQ id="channels-buffer" question="播放频道时频繁缓冲">
    频繁缓冲通常意味着您的网络连接或 IPTV 提供商的网络连接不够稳定或速度不足，
    无法顺畅地向您的设备传输视频。如果您确定自己的网络连接正常，请向 IPTV 提供商报告此问题。
</FAQ>

<FAQ id="m3u-support" question="该应用支持 M3U 播放列表吗？">
    StbEmu 不支持 M3U 或其他播放列表，仅支持为 MAG 机顶盒设计的门户。
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="我无法在应用中创建或还原备份">
    此功能目前仅在 Android 10 及更早版本上正常工作。从 Android 11 开始，应用默认只能在自己的文件夹中
    读写文件。应用可以申请访问其他文件夹的权限，但这在某些
    Android TV 设备和机顶盒（STB）上不起作用。相关底层问题将不会得到修复：
    [1](https://issuetracker.google.com/issues/71327396), [2](https://issuetracker.google.com/issues/202985150).

    如果您的设备受到影响，您将无法在该设备上创建或还原备份。
</FAQ>
