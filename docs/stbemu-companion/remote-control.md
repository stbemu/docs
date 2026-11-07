---
title: Remote control
sidebar_label: Remote control
---

# Remote control

Open a connected device and select **Remote control**. The action is shown only when the device supports authorized remote input. These controls operate StbEmu and its portal; they are separate from the older MAG remote service described under [Legacy remote](../settings/common_settings.md#legacy-remote).

![Scrollable remote control with colored keys and direction pad](/img/companion/remote-control.png)

Tap a button for its normal action. Hold a button for a long action or repeated presses where supported. Release to stop holding. Available buttons and hold behavior depend on the device; not every key supports repetition. Scroll to reach the remaining controls, including playback, volume, channel, and numeric keys.

Only one key gesture is active at a time. Leaving the remote page or app, losing the connection, or losing authorization cancels active input. Remote input is not replayed after reconnecting: reconnect and press again deliberately.

## Read the feedback

Local press/hold feedback means Companion recognized your gesture. **Awaiting device confirmation** means the result is still pending. **Device accepted input** confirms that StbEmu accepted the input, not that a channel or portal action necessarily completed.

For **Input target unavailable**, check the connection. For **Authorization expired. Pair again.**, show a new code in StbEmu and enter it in Companion. If an action is no longer supported, stop using it and check the available controls. Reconnect if input remains unavailable.

Change remote vibration under **Settings > Interface > Remote control haptic feedback**. This is independent of **UI haptic feedback**; visible feedback remains available when vibration is off.
