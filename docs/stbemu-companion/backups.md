---
title: Backups and restore
sidebar_label: Backups and restore
---

# Backups and restore

Companion's **Backups** library stores completed StbEmu JSON backups privately on your phone or tablet. Saved files remain available offline. This library is separate from [Android system backup](system-backup.md), which protects Companion's own state.

![Backup library and device backup creation](/img/companion/backup-library.png)

## Save and manage files

- **Create backup:** open a connected paired device's **Create backup** action, enter a **Backup name**, and select **Create backup**. Wait for **Backup saved**.
- **Import backup:** open **Backups** from the app menu, select **Import backup**, and choose a StbEmu JSON file. A connected StbEmu device is not required for local import, export, or sharing.
- **Export JSON:** select this action on the backup’s library entry, then choose an external destination.
- **Share JSON:** select this action on the backup's library entry to open Android's share sheet. Opening it does not confirm delivery to the selected app.
- **Delete local backup:** confirm deletion of that local copy. The source StbEmu device is unchanged.

The JSON limit is **16 MiB (16,777,216 bytes)**. Imported files are validated and retain their original bytes. An imported file is labeled **Source device unknown**; an integrity check does not establish who created it. A failed external export may leave an incomplete destination file while existing local backups are preserved.

:::note
Backup files can contain passwords, portal data, and device identifiers. Export and share preserve these values; choose the destination or recipient accordingly.
:::

## Restore a backup

1. Select **Restore backup** from a library entry or a device's action page.
2. Choose **Destination device**, **Backup to restore**, and a supported **Restore mode**.
3. Select **Review restore**. Check added, overwritten, and removed profiles; **Changed settings**; remote mappings; excluded local metadata; and incompatible or locked fields.
4. Select the confirmation checkbox, then **Apply restore**.

![Restore screen showing Merge behavior](/img/companion/restore.png)

**Merge** overwrites profiles with matching UUIDs, adds new profiles, and keeps destination-only profiles. **Replace all** also removes destination profiles absent from the backup. Matching uses identifiers, not profile names. Both modes restore portable application settings and remote mappings. Destination-local metadata, such as local row IDs, app version, and update directory, is excluded.

:::warning
Review every overwrite and removal before applying. Replace all replaces the profile set; it is not a way to add only selected profiles. For selective copies, use [profile transfers](transferring-profiles.md).
:::

## Results and applying saved settings

An expired preview needs **Start a new attempt** and a fresh review. For an uncertain outcome, check [operation results](profiles.md#operation-results) before repeating a restore. Recovery can query the destination even if the original backup is no longer available.

Saved settings and runtime effects are separate. If changed, virtual remote settings take effect on StbEmu's next normal pause/resume, cache size needs a StbEmu process restart, and language may recreate its activity. The UPnP compatibility flag does not toggle the current UPnP runtime, even after restart. **Check result** does not retry these runtime updates.
