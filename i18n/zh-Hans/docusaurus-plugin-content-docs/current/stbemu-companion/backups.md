---
title: "备份与恢复"
sidebar_label: "备份与恢复"
---

# 备份与恢复 {/* #backups-and-restore */}

Companion 的 **Backups** 库将已完成的 StbEmu JSON 备份私密地保存在手机或平板电脑上。保存的文件可离线使用。此库与保护 Companion 自身状态的 [Android 系统备份](system-backup.md)相互独立。

![备份库和设备备份创建](/img/companion/backup-library.png)

## 保存和管理文件 {/* #save-and-manage-files */}

- **Create backup**：打开已连接且已配对设备的 **Create backup** 操作，输入 **Backup name**，然后选择 **Create backup**。等待出现 **Backup saved**。
- **Import backup**：从应用菜单打开 **Backups**，选择 **Import backup** 并选择 StbEmu JSON 文件。本地导入、导出或分享不需要连接 StbEmu 设备。
- **Export JSON**：在备份库条目上选择此操作，然后选择外部保存位置。
- **Share JSON**：在备份库条目上选择此操作，以打开 Android 分享面板。打开面板不代表文件已送达所选应用。
- **Delete local backup**：确认删除该本地副本。源 StbEmu 设备不会改变。

JSON 大小上限为 **16 MiB（16,777,216 字节）**。导入文件会经过验证，并保留原始字节。导入文件标记为 **Source device unknown**；完整性检查不能确定创建者。外部导出失败可能在目标位置留下不完整文件，但已有本地备份会保留。

:::note
备份文件可能包含密码、门户数据和设备标识符。导出和分享会保留这些值，请据此选择目标位置或接收者。
:::

## 恢复备份 {/* #restore-a-backup */}

1. 从备份库条目或设备操作页面选择 **Restore backup**。
2. 选择 **Destination device**、**Backup to restore** 及支持的 **Restore mode**。
3. 选择 **Review restore**。检查新增、覆盖及移除的配置文件、**Changed settings**、遥控映射、排除的本地元数据，以及不兼容或锁定的字段。
4. 勾选确认复选框，然后选择 **Apply restore**。

![显示 Merge 行为的恢复页面](/img/companion/restore.png)

**Merge** 覆盖 UUID 相同的配置文件，添加新配置文件，并保留仅存在于目标端的配置文件。**Replace all** 还会移除备份中不存在的目标端配置文件。匹配依据是标识符，而非配置文件名称。两种模式都会恢复可移植的应用设置和遥控映射。目标端本地元数据（如本地行 ID、应用版本和更新目录）会被排除。

:::warning
应用前请检查每一项覆盖和移除。**Replace all** 会替换整套配置文件，并非仅添加所选配置文件的方法。要选择性复制，请使用[配置文件传输](transferring-profiles.md)。
:::

## 结果与应用已保存的设置 {/* #results-and-applying-saved-settings */}

预览过期后，需要选择 **Start a new attempt** 并重新检查。结果不确定时，请先检查[操作结果](profiles.md#operation-results)，再重复恢复。即使原备份已不可用，恢复查询仍可向目标端查询结果。

保存设置与运行时生效是两回事。发生更改时，虚拟遥控设置会在 StbEmu 下次正常暂停/恢复时生效，缓存大小需要重启 StbEmu 进程，语言可能导致其 Activity 重建。UPnP 兼容性标志不会切换当前 UPnP 运行状态，即使重启后也是如此。**Check result** 不会重试这些运行时更新。
