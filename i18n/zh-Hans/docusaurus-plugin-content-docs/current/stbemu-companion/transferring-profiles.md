---
title: "传输配置文件和设置"
sidebar_label: "配置文件传输"
---

# 传输配置文件和设置 {/* #transferring-profiles-and-settings */}

使用传输功能，可在两个不同的已配对 StbEmu 安装实例间直接复制所选内容。两者必须保持连接，并支持所选的源端和目标端操作。要在同一安装实例中复制，请使用 [Copy profile > This device](profiles.md#copy-a-profile)。

![等待兼容目标设备的传输页面](/img/companion/transfer.png)

## 选择并检查 {/* #select-and-review */}

1. 打开源设备并选择 **Transfer to another device**。
2. 选择 **Destination device**。如果没有可用设备，请返回 **Devices**，连接另一台已配对设备后重试。
3. 选择 **Application settings and remote mappings**、配置文件或两者。对于配置文件，请选择 **Do not copy profiles**、**All profiles** 或 **Choose individual profiles**。必须至少选择一个类别。
4. 选择 **Review transfer**。检查新配置文件、设置更改、遥控映射的影响、活动配置文件变化、排除项和不兼容项。
5. 勾选 **I confirm these changes**，然后选择 **Confirm transfer**。

逐个选择需要完整且最新的源配置文件列表。如果所选配置文件消失，请使用 **Refresh** 检查列表，然后手动取消仍然缺失的配置文件。刷新不会悄悄移除或替换所选配置文件。

## 会发生哪些更改 {/* #what-changes */}

传输的配置文件是副本，在目标端具有新的身份标识。目标端现有配置文件会保留。MAC 地址、序列号、设备 ID 及其他配置文件值保持不变，因此复制不会创建新订阅或新的提供商授权。此流程没有 **Merge**/**Replace all** 选项；这些模式属于[备份恢复](backups.md#restore-a-backup)。

仅传输配置文件会保留目标端的应用设置、遥控映射和当前活动选择。仅传输设置会保留目标端的配置文件和当前活动选择。同时复制两者时，只有源端活动配置文件被包含在内，其新副本才会成为活动配置文件；否则保留目标端原来的活动选择。

应用设置包括可移植的 StbEmu 偏好设置和遥控按键映射，不包括 Companion 的语言/主题、配对授权、服务身份标识或操作历史。不支持的值会被报告，而非悄悄丢弃。确认前，请检查与密码相关的设置及其他将被覆盖的设置。部分已保存的设置需要 StbEmu 经历生命周期变化或重新启动才会生效；参见[应用已保存的设置](backups.md#results-and-applying-saved-settings)。

Companion 报告源快照已验证后，即使源端断开，该次尝试仍可继续。传输不会在备份库中创建永久条目。结果不确定或取消时，请使用[操作结果](profiles.md#operation-results)。
