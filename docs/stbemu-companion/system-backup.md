---
title: Android system backup
sidebar_label: Android system backup
---

# Android system backup

Open **Settings > Backups > System backup**. Android system backup can restore Companion preferences, saved devices and names, verified trust, and still-valid pairing credentials after a successful Android restore. It is separate from restoring a [StbEmu JSON backup](backups.md) to a paired device.

## Include local archives

**Include local archives** is enabled by default. It includes eligible completed StbEmu backups from the local library in future system backups. Turning it off keeps local files and Companion settings/devices, but excludes archives from future backups. It does not delete older cloud content.

The page shows an estimated selected size. Use **Refresh estimate** to measure again, **Open Android settings** to check the Android backup configuration, or **Open archive library / manual export** to export files yourself.

## Availability and limits

System backup requires **Android 9 or later**, even though Companion itself supports Android 8. Encrypted cloud backup also needs a supported account, secure screen lock, and Android client-side encryption. Android controls scheduling, transport eligibility, and restore availability.

The nominal cloud allowance is **25 MiB**; the actual available quota can be lower. The **256 MiB** device-to-device limit is an application limit, not a promise of transport capacity. If the complete selection is too large, exclude local archives or export them manually. Companion does not silently back up only part of the selection.

An estimate or local preparation message is not confirmation that Android stored a cloud backup. An unavailable estimate is not a zero-size backup. If the page reports that backup is disabled or unsupported, use manual archive export rather than assuming the data is protected.

## After Android restores Companion

Restored devices must be verified before being shown as connected. Still-authorized pairing credentials can reconnect without a new pairing, but restoring cannot undo revocation in StbEmu. Restored copies share the same grants; revoking a grant affects those copies too.

The library lists completed archive files actually restored. Metadata alone does not recreate missing files. An unfinished operation is not automatically sent again; reconnect and check [operation results](profiles.md#operation-results) when available.
