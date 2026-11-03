---
id: common-settings
title: 应用设置
sidebar_label: 应用设置
---

# 应用设置 {/* #application-settings */}

适用于整个应用的选项在 [Settings](/settings) 中分为以下类别。特定配置文件的选项位于 [Profiles](/settings/profiles)。

## Appearance & controls

| 选项 | 用途 |
|--------|---------|
| App language | 使用应用支持的语言或 Android 系统默认语言。 |
| Hide navigation bar | 在受支持的设备上隐藏 Android 导航按钮。在触摸屏上，第一次点击可能仅显示导航栏，需要再次点击才能显示应用控件。 |
| Always show overlay buttons | 显示屏幕控件。如果在电视盒子上按遥控器按键时出现不需要的按钮，可以关闭此选项。 |
| Hide controls after… (ms) | 设置屏幕控件的显示超时时间，单位为毫秒。默认值：5000（5 秒）。 |
| Screen orientation | 选择应用的屏幕方向行为。 |
| Keyboard type | 选择应用使用的键盘。 |
| Software keyboard input method | 选择软件键盘处理输入的方式。 |

## Playback & behavior

| 选项 | 用途 |
|--------|---------|
| Pause media in background | 切换到其他应用时暂停播放。启用自动画中画后，此控件不可用。 |
| Picture-in-picture | 在 Android 和设备支持的情况下，离开应用时使用画中画。 |
| Auto start on device boot | 设备启动后启动应用。应用必须安装在内部存储空间中；如果设备有锁屏，可能需要解锁后才会启动。 |
| Always use system volume level | 使用系统音量，而非应用单独的音量。 |
| Enable recommendations | 在受支持的 Android TV 主屏幕上显示配置文件推荐卡片。 |
| Media sessions | 启用 Android 媒体会话集成。 |

## Network

**Scaling method** 用于在门户显示过大或过小时更改浏览器的缩放方式。大多数设备可以保留默认值；低分辨率显示屏可能需要其他缩放方式。

**Enable network cache** 会缓存网络请求，以改善门户加载体验。如果反复遇到身份验证或其他网络问题，请将其关闭。

**Cache size** 以 KB 为单位输入。默认值为 **20480 KB (20 MB)**。更改缓存大小后，请按提示重启应用以应用更改。

## Security

启用设置密码保护并设置密码。访问受保护的设置需要验证身份。屏幕重新创建时，密码编辑器不会保留输入的密码；如有需要，请重新输入。

## Legacy remote

此类别用于配置供 MAG 250、AuraHD 等遥控器应用使用的旧版软件遥控服务。它独立于 [Companion](/settings/companion) 和[实体按键映射](/settings/key-maps)。

启用服务并配置设备名称和密码。设备名称和密码各最多允许 32 个字符。此类别仅在启用了该功能的应用版本中可用。
