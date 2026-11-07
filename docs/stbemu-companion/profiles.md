---
title: Managing profiles
sidebar_label: Profiles
---

# Managing profiles

Open a connected device and select **Profiles**. The list shows profile names, identifiers (UUIDs), and available portal addresses. Select a profile to inspect its settings. Use **Load more** for additional pages and **Refresh** for current data. Actions depend on the device's supported permissions.

## Create, edit, and delete

- Select **Create profile** from the list. Supported creation fields include **Name** and **Portal URL**. Untouched fields use StbEmu's defaults.
- Open a profile and select **Edit profile** to change supported editable fields. Only edited fields change; additional settings retained by the device are preserved.
- Select **Delete profile** to prepare a deletion. Review any active-profile change or replacement profile before confirming.

Select **Review changes**, inspect the preview and warnings, then select **Confirm changes** or **Confirm deletion**. The first action does not immediately save or delete the profile. Incompatible changes cannot be confirmed. If the profile or available fields change while editing, refresh and review again.

For the meanings of StbEmu profile fields, see [STB profiles](../settings/profiles.md).

## Copy a profile

Open a profile and select **Copy profile**. Choose **This device** for a same-device copy, then review and confirm the changes. The copy has a new identity; do not identify it by its name alone. **Edit copied profile**, when available after success, opens the returned copy rather than the original.

Choosing another eligible paired device opens the [transfer guide's workflow](transferring-profiles.md) with that profile selected.

## Operation results

If the connection fails or a result is uncertain, open the device's **Recent operation results** and use **Check result** before starting another change. Result checking needs an authorized connection and queries the original operation; it does not send the change again. This also applies to [transfers](transferring-profiles.md) and [backup restores](backups.md).

An expired preview needs a new explicit review. Cancellation can race with saving, so read the final result rather than assuming **Cancel operation** undid changes. **Changes saved on the device** confirms saved data; runtime refresh may still be pending. Checking a result does not retry runtime refresh, and a deleted copied profile is never recreated by checking its history.
