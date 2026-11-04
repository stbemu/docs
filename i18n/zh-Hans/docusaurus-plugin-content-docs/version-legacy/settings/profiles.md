---
id: profiles
title: 配置文件
sidebar_label: 配置文件
---

# STB 配置文件 {/* #stb-profiles */}

一个 **STB 配置文件**是一组用于在应用中模拟机顶盒的选项。应用首次启动时会创建一个配置文件。
您可以编辑它，也可以添加更多配置文件，以便在同一设备上加载不同的门户。
要创建配置文件，请双击屏幕以显示顶部或侧边菜单 [^1]。
选择 **Settings**，然后选择 **Profiles**，即可在其中添加或编辑配置文件。

StbEmu 不提供、托管或索引任何媒体或 IPTV 播放列表。
用户必须对其通过模拟器访问的内容拥有合法使用权。

[^1]: 如果您使用 3D 遥控器或鼠标，请移动指针、点击屏幕，然后打开顶部的应用菜单。

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
配置文件的名称，可以是任意非空字符串。

### Portal settings
特定于门户的选项。
##### Portal URL
门户的 URL，必须以协议方案（**http://**、**https://**、**ftp://** 等）开头。

##### Portal language
门户的默认语言，使用两个字母的 [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) 语言代码指定。

#### HTTP Proxy settings
HTTP 代理设置。

##### Use HTTP proxy
如需使用 HTTP 代理，请启用此选项。

##### Proxy host name
##### Proxy port

##### Portal is internal
启用此选项可使用 MAG 设备的内部门户。

##### Internal portal URL

### STB configuration
主要的模拟设置。

#### STB Model
要模拟的机顶盒型号。

#### Firmware
要模拟的**固件**；不会安装实际固件。某些门户要求使用特定固件。
如果遇到这种情况，且列表中提供了相应固件，请选择它。
大多数受支持的机顶盒型号仅提供 **Generic** 固件，通常代表最新版本。

可用的固件选项：
* Generic：通常是最新的可用固件。
* Custom（仅限 MAG 250）：可自定义的固件。如需更改特定的固件设置，请使用此选项。

大多数用户应使用 **Generic** 固件（默认选中）。

#### Firmware settings
此选项仅在使用 **Custom** 固件时可用（目前仅支持 MAG 250）。
使用此选项可配置特定的固件设置，例如版本或自定义 User Agent 字符串。

#### User Agent
应用内网页浏览器使用的 User Agent 字符串。

#### Screen resolution
要模拟的屏幕分辨率；这不会更改实际显示分辨率。
请选择门户支持的分辨率，通常为 **1280x720**。

#### MAC address
模拟设备的 MAC 地址。您可以使用自己拥有的真实 MAG 250 设备的 MAC 地址，
也可以使用 12 个随机的十六进制数字（0–9、A–F），每两个数字为一组，用冒号分隔。[^wrong_mac]

大多数门户要求 MAC 地址以 00:1A:79 开头。

[^wrong_mac]: 在某些仅支持 Wi-Fi 的设备上，生成的 MAC 地址可能是 **00:1A:79:00:00:00**。
    这表示由于 Android 的限制，应用无法正确检测 MAC 地址。
    请将 **00:00:00** 部分替换为随机的十六进制数字，并保留各组之间的冒号。

#### Serial number
模拟设备的序列号。大多数门户不会检查此项，因此通常可以使用任意文本字符串。

#### Device ID
设备 ID 设置。

##### Use MAC-based device ID
根据设备的 MAC 地址生成设备 ID。启用或
禁用此选项后，请按 **Reset device ID** 重新生成 ID。

##### Send Device ID
门户请求时发送设备 ID。如果禁用此选项，应用会发送空字符串。

##### Device ID random seed
用于生成设备 ID 的种子。使用相同门户 URL 和
MAC 地址的所有设备都应使用相同的种子。更改此值后，请按 **Reset device ID**。

##### Device ID value
设备 ID。可使用生成的值，也可自行输入。

##### Custom device ID 2 and signature
启用此选项可编辑 Device ID 2 和签名。

##### Device ID 2
##### Signature
##### Reset device ID to default value
重新生成 **Device ID**、**Device ID 2** 和签名。

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
门户请求时发送的 IP 地址。这是模拟地址，并非设备的实际 IP 地址。
大多数门户不使用此信息，因此通常无需更改。
### Media player settings

此配置文件的媒体播放器设置。
#### Media player
选择此配置文件的默认媒体播放器。

| 播放器          | 说明                                                                                                                                          | 备注                                                 |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo             | [GitHub](https://github.com/google/ExoPlayer)                                                                                                        | 默认播放器，推荐大多数设备使用 |
| VLC             | [网站](https://www.videolan.org)                                                                                                                 |                                                         |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk             | [GitHub](https://github.com/bilibili/ijkplayer)                                                                                                      | 不支持字幕                               |
| Internal player | 使用 Android 播放器。支持的编解码器取决于设备的 Android 版本。                                                          | 不支持字幕                               |
| External player | 可使用几乎任何外部播放器。无法与模拟器集成；媒体流会在其他应用中打开。 |                                                         |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
