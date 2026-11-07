---
title: Connecting devices
sidebar_label: Connecting devices
---

# Connecting devices

## Discover StbEmu

1. Connect your phone or tablet and the StbEmu device to the same reachable local network.
2. In StbEmu, open **Settings > Companion** and enable the service. See [StbEmu's Companion settings](../settings/companion.md).
3. Open Companion's **Devices** page. Verified devices appear as saved cards. Open the card for the StbEmu installation you want to manage.

![Devices page searching the local network](/img/companion/devices-empty.png)

If nothing appears, check that Companion access is enabled in StbEmu and that Android permits local-network access. Select **Retry**, or connect manually.

### Add an address manually

Select **Add by IP address**. Enter the **IPv4 or IPv6 address** and port shown in StbEmu, then select **Connect**. An empty port uses **10000**. Enter an IP address, not a website URL or hostname. Manual entry does not bypass verification or pairing. Devices with a valid saved pairing can reconnect without entering a new code.

![Saved device awaiting pairing](/img/companion/devices-saved.png)

## Pair a device

1. In StbEmu's **Settings > Companion**, start pairing to display a code.
2. On the device's action page in Companion, enter the code in **Eight-digit pairing code**.
3. Select **Pair device** and wait for **Connected**.

![Entering a pairing code](/img/companion/pairing.png)

If the code expires, display a new one in StbEmu. If attempts are rate-limited, wait before trying again. Pairing is saved for later connections while StbEmu continues to authorize it. Revoking access in StbEmu also prevents use of the saved grant.

## Reconnect, rename, or remove

**Disconnect** closes the connection and keeps the saved device. To reconnect, open its card and select **Connect**. A network change can interrupt connections; reconnect after local connectivity returns.

Use the pencil button (**Rename device**) to set a local name. **Use app name** restores the name reported by StbEmu. Renaming here does not rename StbEmu itself.

The trash button (**Remove device**) asks for confirmation. It removes the saved connection and pairing from this phone, keeps backup files, and changes nothing on StbEmu. The removed device will not automatically reappear through discovery. To add it again, use **Add by IP address** and pair again.
