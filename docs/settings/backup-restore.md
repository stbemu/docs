---
id: backup-restore
title: Backup & restore
sidebar_label: Backup & restore
---

# Backup & restore

Open **Settings > Backup & restore**. This category is available only when backup operations are enabled for your app.

## Save or share a backup

Select **Save settings and profiles…** and choose a destination in Android's document picker. Select **Share settings and profiles…** to create a backup and send it through Android's sharing interface.

If no document picker is available, the app uses the accessible backup folders and its file browser. **Browse saved backups** lists backups found in the available folders. Device permissions and available file providers can limit which files you can access.

## Restore a backup

1. Select **Restore settings and profiles…** and choose a backup, or select one from the saved-backup browser.
2. Review the file name, profile count, and listed restore effects.
3. Confirm the restore. Canceling the picker or denying permission does not start it.

Restoring updates matching profiles, restores app settings, and replaces remote key mappings. Companion service identity, credentials, revoked-device records, and operation history are not included in portable backups.

:::warning
Restore applies changes in several steps. If a later step fails, earlier changes may already be saved. Reload settings and review the current configuration after a failure. There is no whole-restore rollback or selectable merge/replace mode in this local restore flow.
:::
