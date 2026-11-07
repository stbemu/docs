---
title: "连接设备"
sidebar_label: "连接设备"
---

# 连接设备 {/* #connecting-devices */}

## 发现 StbEmu {/* #discover-stbemu */}

1. 将手机或平板电脑与 StbEmu 设备连接到同一个能够互相访问的本地网络。
2. 在 StbEmu 中打开 **Settings > Companion** 并启用服务。参见 [StbEmu 的 Companion 设置](../settings/companion.md)。
3. 打开 Companion 的 **Devices** 页面。已验证的设备会显示为已保存的卡片。打开您要管理的 StbEmu 安装实例对应的卡片。

![设备页面正在搜索本地网络](/img/companion/devices-empty.png)

如果没有显示任何设备，请检查 StbEmu 中是否已启用 Companion 访问，以及 Android 是否允许访问本地网络。选择 **Retry**，或手动连接。

### 手动添加地址 {/* #add-an-address-manually */}

选择 **Add by IP address**。输入 StbEmu 中显示的 **IPv4 or IPv6 address** 和端口，然后选择 **Connect**。端口留空时使用 **10000**。请输入 IP 地址，而非网站 URL 或主机名。手动输入不会跳过验证或配对。保存了有效配对的设备可以重新连接，无需输入新代码。

![等待配对的已保存设备](/img/companion/devices-saved.png)

## 配对设备 {/* #pair-a-device */}

1. 在 StbEmu 的 **Settings > Companion** 中开始配对，以显示代码。
2. 在 Companion 的设备操作页面，将代码输入 **Eight-digit pairing code**。
3. 选择 **Pair device**，等待出现 **Connected**。

![输入配对代码](/img/companion/pairing.png)

如果代码过期，请在 StbEmu 中显示新代码。如果尝试次数受到频率限制，请等待后再试。只要 StbEmu 仍授权该配对，配对信息就会保留，供以后连接使用。在 StbEmu 中撤销访问也会阻止使用已保存的授权。

## 重新连接、重命名或移除 {/* #reconnect-rename-or-remove */}

**Disconnect** 会关闭连接并保留已保存的设备。要重新连接，请打开其卡片并选择 **Connect**。网络变化可能中断连接；本地连接恢复后请重新连接。

使用铅笔按钮（**Rename device**）设置本地名称。**Use app name** 会恢复 StbEmu 报告的名称。在此重命名不会更改 StbEmu 本身的名称。

垃圾桶按钮（**Remove device**）会要求确认。它会从本手机移除已保存的连接和配对，保留备份文件，且不会更改 StbEmu。被移除的设备不会通过自动发现再次出现。要重新添加，请使用 **Add by IP address** 并再次配对。
