---
title: "Android 系统备份"
sidebar_label: "Android 系统备份"
---

# Android 系统备份 {/* #android-system-backup */}

打开 **Settings > Backups > System backup**。在 Android 成功恢复后，Android 系统备份可恢复 Companion 偏好设置、已保存设备及名称、已验证的信任关系，以及仍有效的配对凭据。此功能与向已配对设备恢复 [StbEmu JSON 备份](backups.md)相互独立。

## 包含本地归档文件 {/* #include-local-archives */}

**Include local archives** 默认开启。它会将本地库中符合条件且已完成的 StbEmu 备份包含在今后的系统备份中。关闭后会保留本地文件及 Companion 设置/设备，但未来备份将排除归档文件。它不会删除已有云端内容。

页面显示所选内容的估算大小。使用 **Refresh estimate** 重新测量，使用 **Open Android settings** 检查 Android 备份配置，或使用 **Open archive library / manual export** 自行导出文件。

## 可用性与限制 {/* #availability-and-limits */}

虽然 Companion 本身支持 Android 8，系统备份需要 **Android 9 或更高版本**。加密云备份还需要受支持的账号、安全屏幕锁和 Android 客户端加密。备份时间安排、传输资格和恢复可用性由 Android 控制。

标称云端配额为 **25 MiB**，实际可用配额可能更低。设备到设备的 **256 MiB** 上限是应用限制，并非传输容量保证。如果所选内容整体过大，请排除本地归档文件或手动导出。Companion 不会悄悄只备份部分所选内容。

估算结果或本地准备消息不能证明 Android 已在云端保存备份。无法估算不意味着备份大小为零。如果页面报告备份已禁用或不受支持，请手动导出归档文件，不要认为数据已受到保护。

## Android 恢复 Companion 之后 {/* #after-android-restores-companion */}

恢复的设备必须经过验证，才能显示为已连接。仍获得授权的配对凭据无需重新配对即可重连，但恢复无法撤销 StbEmu 中的授权撤销。恢复的副本共享相同授权；撤销某项授权也会影响这些副本。

备份库列出实际恢复的完整归档文件。仅凭元数据无法重建缺失文件。未完成的操作不会自动重新发送；请重新连接，并在可用时检查[操作结果](profiles.md#operation-results)。
