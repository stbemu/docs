---
title: Transferring profiles and settings
sidebar_label: Profile transfers
---

# Transferring profiles and settings

Use a transfer to copy selected content directly between two different paired StbEmu installations. Both must be connected and support the chosen source and destination actions. For a copy on the same installation, use [Copy profile > This device](profiles.md#copy-a-profile).

![Transfer screen awaiting a compatible destination](/img/companion/transfer.png)

## Select and review

1. Open the source device and select **Transfer to another device**.
2. Choose the **Destination device**. If none is available, return to **Devices**, connect a different paired device, and try again.
3. Select **Application settings and remote mappings**, profiles, or both. For profiles, choose **Do not copy profiles**, **All profiles**, or **Choose individual profiles**. At least one category must be selected.
4. Select **Review transfer**. Inspect new profiles, settings changes, remote mapping effects, active-profile changes, exclusions, and incompatibilities.
5. Select **I confirm these changes**, then **Confirm transfer**.

Individual selection needs a complete current source profile list. If a selected profile disappears, use **Refresh** to check the list, then explicitly uncheck any profiles still missing. Refresh does not silently remove or substitute selected profiles.

## What changes

Transferred profiles are new copies with new destination identities. Existing destination profiles are kept. MAC addresses, serial numbers, device IDs, and other profile values are preserved, so copying does not create a new subscription or provider authorization. This workflow has no **Merge**/**Replace all** choice; those modes belong to [backup restore](backups.md#restore-a-backup).

Profiles-only transfers keep destination application settings, remote mappings, and active selection. Settings-only transfers keep destination profiles and active selection. When copying both, the source active profile becomes active through its new copy only if that profile is included; otherwise the destination's active selection is kept.

Application settings include portable StbEmu preferences and remote key mappings, not Companion's language/theme, pairing grants, service identity, or operation history. Unsupported values are reported rather than silently discarded. Review password-related and other overwritten settings before confirming. Some saved settings need a StbEmu lifecycle change or restart; see [applying saved settings](backups.md#results-and-applying-saved-settings).

After Companion reports that the source snapshot is verified, that exact attempt can continue if the source disconnects. The transfer does not create a permanent backup-library entry. For uncertain results or cancellation, use [operation results](profiles.md#operation-results).
