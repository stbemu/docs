---
title: "远程控制"
sidebar_label: "远程控制"
---

# 远程控制 {/* #remote-control */}

打开已连接设备并选择 **Remote control**。只有设备支持经过授权的远程输入时，才会显示此操作。这些控件用于操作 StbEmu 及其门户，与[旧版遥控器](../settings/common_settings.md#legacy-remote)中介绍的旧 MAG 遥控服务相互独立。

![带有彩色按键和方向键的可滚动遥控器](/img/companion/remote-control.png)

点按按钮执行普通操作。在支持的情况下，按住按钮可执行长按操作或重复按键。松开即可结束按住。可用按钮和按住行为取决于设备；并非所有按键都支持重复。滚动可访问其余控件，包括播放、音量、频道和数字按键。

同一时间只能有一个按键手势处于活动状态。离开遥控页面或应用、连接断开或授权失效都会取消当前输入。重新连接后不会重放远程输入：请重新连接，再主动按键。

## 理解反馈 {/* #read-the-feedback */}

本地按下或按住反馈表示 Companion 识别到了手势。**Awaiting device confirmation** 表示结果仍在等待中。**Device accepted input** 确认 StbEmu 已接受输入，并不保证频道或门户操作已经完成。

遇到 **Input target unavailable** 时，请检查连接。遇到 **Authorization expired. Pair again.** 时，请在 StbEmu 中显示新代码并输入 Companion。如果某项操作不再受支持，请停止使用并检查可用控件。如果输入仍不可用，请重新连接。

在 **Settings > Interface > Remote control haptic feedback** 下更改遥控振动。此项独立于 **UI haptic feedback**；关闭振动后仍有视觉反馈。
