---
title: "管理配置文件"
sidebar_label: "配置文件"
---

# 管理配置文件 {/* #managing-profiles */}

打开已连接设备并选择 **Profiles**。列表显示配置文件名称、标识符（UUID）和可用的门户地址。选择配置文件可查看其设置。使用 **Load more** 加载更多页面，使用 **Refresh** 获取最新数据。可用操作取决于设备支持的权限。

## 创建、编辑和删除 {/* #create-edit-and-delete */}

- 在列表中选择 **Create profile**。支持的创建字段包括 **Name** 和 **Portal URL**。未修改的字段使用 StbEmu 默认值。
- 打开配置文件，选择 **Edit profile**，更改受支持且可编辑的字段。仅修改过的字段会变化，设备保留的其他设置会得到保留。
- 选择 **Delete profile** 以准备删除。确认前，请检查活动配置文件的变化或替代配置文件。

选择 **Review changes**，检查预览和警告，然后选择 **Confirm changes** 或 **Confirm deletion**。第一步操作不会立即保存或删除配置文件。不兼容的更改无法确认。如果编辑时配置文件或可用字段发生变化，请刷新后重新检查。

有关 StbEmu 配置文件字段的含义，请参见 [STB 配置文件](../settings/profiles.md)。

## 复制配置文件 {/* #copy-a-profile */}

打开配置文件并选择 **Copy profile**。要在同一设备上复制，请选择 **This device**，然后检查并确认更改。副本具有新的身份标识，不要仅凭名称识别它。成功后如果出现 **Edit copied profile**，该操作会打开结果返回的副本，而非原配置文件。

选择另一台符合条件的已配对设备，会打开[传输指南中的流程](transferring-profiles.md)，并预选该配置文件。

## 操作结果 {/* #operation-results */}

如果连接失败或结果不确定，请打开设备的 **Recent operation results**，先使用 **Check result**，再开始其他更改。检查结果需要经过授权的连接，它查询的是原操作，不会重新发送更改。这同样适用于[传输](transferring-profiles.md)和[备份恢复](backups.md)。

预览过期后，需要重新明确检查。取消操作可能与保存同时发生，因此应阅读最终结果，不要认为 **Cancel operation** 已撤销更改。**Changes saved on the device** 确认数据已保存，但运行状态刷新可能仍未完成。检查结果不会重试运行状态刷新，也绝不会因为查看历史而重新创建已删除的配置文件副本。
