---
id: profiles
title: 配置文件
sidebar_label: 配置文件
---

# STB 配置文件 {/* #stb-profiles */}

一个 **STB 配置文件**是一组用于在应用中模拟机顶盒的选项。应用首次启动时会创建一个配置文件。
您可以编辑它，也可以添加更多配置文件，以便在同一设备上加载不同的门户。
打开 **设置 > 配置文件** 并选择 **添加配置文件**，或选择已有的配置文件进行编辑。
概览中的选项分为 **连接**、**播放与设备** 和 **管理配置文件** 三组。
可用操作取决于您的应用版本和配置文件限制。无法删除当前使用的配置文件；
删除前请先切换到其他配置文件。删除操作需要确认。

文本和选项的编辑需要确认；开关的更改会立即保存。有关验证错误、编辑冲突，
以及已保存但需要刷新运行状态的更改，请参阅[保存更改](/settings#saving-changes)。

StbEmu 不提供、托管或索引任何媒体或 IPTV 播放列表。
用户必须对其通过模拟器访问的内容拥有合法使用权。

- [配置文件名称](#profile-name)
- [门户设置](#portal-settings)
    - [门户 URL](#portal-url)
    - [门户语言](#portal-language)
    - [HTTP 代理设置](#http-proxy-settings)
        - [使用 HTTP 代理](#use-http-proxy)
        - [代理主机名](#proxy-host-name)
        - [代理端口](#proxy-port)
    - [内部门户](#portal-is-internal)
    - [门户 URL (内部门户)](#internal-portal-url)
- [STB 配置](#stb-configuration)
    - [STB 型号](#stb-model)
    - [固件](#firmware)
    - [固件设置](#firmware-settings)
    - [用户代理](#user-agent)
    - [屏幕分辨率](#screen-resolution)
    - [MAC 地址](#mac-address)
    - [序列号](#serial-number)
    - [设备 ID](#device-id)
        - [使用基于 MAC 的设备 ID](#use-mac-based-device-id)
        - [发送设备 ID](#send-device-id)
        - [设备 ID 随机种子](#device-id-random-seed)
        - [设备 ID](#device-id-value)
        - [自定义设备 ID2 和签名](#custom-device-id-2-and-signature)
        - [设备 ID 2](#device-id-2)
        - [签名](#signature)
        - [将设备 ID 重置为默认值…](#reset-device-id-to-default-value)
    - [硬件设置](#hardware-settings)
        - [制造商](#vendor)
        - [硬件版本](#hardware-version)
- [媒体播放器设置](#media-player-settings)
    - [媒体播放器](#media-player)
    - [UDPXY 设置](#udpxy-settings)
        - [启用 UDPXY 支持](#enable-udxpy-support)
        - [UDPXY 服务器 URL](#udpxy-server-url)
        - [替换流协议](#overwrite-stream-protocol)
- [高级设置](#advanced-settings)

### 配置文件名称 {/* #profile-name */}
配置文件的名称，可以是任意非空字符串。

### 门户设置 {/* #portal-settings */}
特定于门户的选项。
##### 门户 URL {/* #portal-url */}
请输入绝对 **http://** 或 **https://** URL。支持本地网络主机、localhost、IPv6 地址和国际化域名。网络 URL 不能包含空白字符。
对于内部门户，也接受绝对文件系统路径或受支持的绝对 **file://** URL。重新设计的编辑器不接受 FTP URL。

##### 门户语言 {/* #portal-language */}
门户的默认语言，使用两个字母的 [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) 语言代码指定。

#### HTTP 代理设置 {/* #http-proxy-settings */}
HTTP 代理设置。

##### 使用 HTTP 代理 {/* #use-http-proxy */}
如需使用 HTTP 代理，请启用此选项。

##### 代理主机名 {/* #proxy-host-name */}
代理主机与端口分别设置；默认主机为 127.0.0.1。
##### 代理端口 {/* #proxy-port */}
默认值：3128。仅在启用 **使用 HTTP 代理** 时，主机和端口编辑器才可用。

##### 内部门户 {/* #portal-is-internal */}
启用此选项可使用 MAG 设备的内部门户。本地门户 URL 会自动启用该选项，并使开关不可操作。更改为网络 URL 后，会清除自动设置的内部门户选项。

##### 门户 URL (内部门户) {/* #internal-portal-url */}
请在 **门户 URL** 字段中填写本地路径或文件 URL；没有单独的内部 URL 编辑器。

要安装门户，请打开 **设置 > 配置文件 > 您的配置文件 > 门户设置**，使用安装操作并选择门户压缩包。等待解压完成，
然后确认显示的本地 URL。安装文件和接受 URL 是两个独立的步骤。
使用 **门户设置** 中的移除操作可移除已安装的内部门户。

### STB 配置 {/* #stb-configuration */}
主要的模拟设置。

#### STB 型号 {/* #stb-model */}
要模拟的机顶盒型号。

#### 固件 {/* #firmware */}
要模拟的**固件**；不会安装实际固件。某些门户要求使用特定固件。
如果遇到这种情况，且列表中提供了相应固件，请选择它。
大多数受支持的机顶盒型号仅提供 **Generic** 固件，通常代表最新版本。

可用的固件选项：
* Generic：通常是最新的可用固件。
* Custom（仅限 MAG 250）：可自定义的固件。如需更改特定的固件设置，请使用此选项。

大多数用户应使用 **Generic** 固件（默认选中）。

#### 固件设置 {/* #firmware-settings */}
此选项仅在使用 **Custom** 固件时可用（目前仅支持 MAG 250）。
配置播放器引擎、JavaScript API 和 STB API 的版本，以及镜像的版本、描述和日期。
编辑自定义 用户代理 字符串前，请先启用自定义 用户代理。

#### 用户代理 {/* #user-agent */}
应用内网页浏览器使用的 用户代理 字符串。

#### 屏幕分辨率 {/* #screen-resolution */}
要模拟的屏幕分辨率；这不会更改实际显示分辨率。
请选择门户支持的分辨率，通常为 **1280x720**。

#### MAC 地址 {/* #mac-address */}
模拟设备的 MAC 地址。您可以使用自己拥有的真实 MAG 250 设备的 MAC 地址，
也可以使用 12 个随机的十六进制数字（0–9、A–F），每两个数字为一组，用冒号分隔。[^wrong_mac]

大多数门户要求 MAC 地址以 00:1A:79 开头。

[^wrong_mac]: 在某些仅支持 Wi-Fi 的设备上，生成的 MAC 地址可能是 **00:1A:79:00:00:00**。
    这表示由于 Android 的限制，应用无法正确检测 MAC 地址。
    请将 **00:00:00** 部分替换为随机的十六进制数字，并保留各组之间的冒号。

#### 序列号 {/* #serial-number */}
模拟设备的序列号。大多数门户不会检查此项，因此通常可以使用任意文本字符串。

#### 设备 ID {/* #device-id */}
设备 ID 设置。

##### 使用基于 MAC 的设备 ID {/* #use-mac-based-device-id */}
根据设备的 MAC 地址生成设备 ID。启用或
禁用此选项后，请按 **将设备 ID 重置为默认值…** 重新生成 ID。

##### 发送设备 ID {/* #send-device-id */}
门户请求时发送设备 ID。如果禁用此选项，应用会发送空字符串。

##### 设备 ID 随机种子 {/* #device-id-random-seed */}
用于生成设备 ID 的种子。使用相同门户 URL 和
MAC 地址的所有设备都应使用相同的种子。确认更改种子后，ID 会自动重新生成。
如果您希望保留种子，请不要按 **将设备 ID 重置为默认值…**：此操作 会清除种子。

##### 设备 ID {/* #device-id-value */}
设备 ID。可使用生成的值，也可自行输入。

##### 自定义设备 ID2 和签名 {/* #custom-device-id-2-and-signature */}
启用此选项可编辑 设备 ID 2 和签名。

##### 设备 ID 2 {/* #device-id-2 */}
##### 签名 {/* #signature */}
##### 将设备 ID 重置为默认值… {/* #reset-device-id-to-default-value */}
确认后，清除种子并根据当前配置文件的值重新生成 **设备 ID**、**设备 ID 2** 和签名。其他配置文件设置会保留。

只有在启用 **发送设备 ID** 且禁用基于 MAC 的 ID 时，才能手动编辑 **设备 ID**。
编辑 **设备 ID 2** 和 **签名** 还需要启用 **自定义设备 ID2 和签名**。
即使无法编辑，仍然可以查看自动生成的值。

#### 硬件设置 {/* #hardware-settings */}
##### 制造商 {/* #vendor */}
##### 硬件版本 {/* #hardware-version */}

设备选项还包括 Ministra 兼容性和浏览器重定向。仅在门户要求时更改这些选项。

### 媒体播放器设置 {/* #media-player-settings */}

此配置文件的媒体播放器设置。
#### 媒体播放器 {/* #media-player */}
选择此配置文件的默认媒体播放器。

列表包括自动选择、Exo、Android 内置播放器、外部播放器，
以及您的构建版本中提供的其他播放器。请从应用显示的选项中选择。
内置播放器支持的编解码器取决于 Android；外部播放器会在其他应用中打开媒体流。

#### UDPXY 设置 {/* #udpxy-settings */}
##### 启用 UDPXY 支持 {/* #enable-udxpy-support */}
输入有效的 HTTP/HTTPS 服务器 URL 后，才能启用 UDPXY。
##### UDPXY 服务器 URL {/* #udpxy-server-url */}
UDPXY 关闭时也可以输入 URL。仅在关闭时允许 URL 为空；非空 URL 必须是有效的 HTTP/HTTPS URL。
##### 替换流协议 {/* #overwrite-stream-protocol */}
启用 UDPXY 时，选择要覆盖使用的媒体流协议。
### 高级设置 {/* #advanced-settings */}
特定配置文件的兼容性选项包括 CSS 补丁、模拟器检测、背景颜色、本地文件和 AJAX 修复，
以及外部播放器的返回/按键事件。返回、退出 和 OK 事件选项取决于返回频道列表事件选项。
仅在门户或外部播放器要求时更改这些设置。
