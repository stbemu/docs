---
title: "Pencadangan dan pemulihan"
sidebar_label: "Pencadangan dan pemulihan"
---

# Pencadangan dan pemulihan {/* #backups-and-restore */}

Pustaka **Backups** Companion menyimpan cadangan JSON StbEmu yang telah selesai secara pribadi di ponsel atau tablet Anda. Berkas tersimpan tetap tersedia secara offline. Pustaka ini terpisah dari [pencadangan sistem Android](system-backup.md), yang melindungi keadaan Companion sendiri.

![Pustaka cadangan dan pembuatan cadangan perangkat](/img/companion/backup-library.png)

## Menyimpan dan mengelola berkas {/* #save-and-manage-files */}

- **Create backup:** buka tindakan **Create backup** pada perangkat tersanding yang terhubung, masukkan **Backup name**, dan pilih **Create backup**. Tunggu **Backup saved**.
- **Import backup:** buka **Backups** dari menu aplikasi, pilih **Import backup**, dan pilih berkas JSON StbEmu. Perangkat StbEmu yang terhubung tidak diperlukan untuk impor lokal, ekspor, atau berbagi.
- **Export JSON:** pilih tindakan ini pada entri cadangan di pustaka, lalu pilih tujuan eksternal.
- **Share JSON:** pilih tindakan ini pada entri cadangan di pustaka untuk membuka lembar berbagi Android. Membukanya tidak mengonfirmasi pengiriman ke aplikasi yang dipilih.
- **Delete local backup:** konfirmasikan penghapusan salinan lokal tersebut. Perangkat StbEmu sumber tidak berubah.

Batas JSON adalah **16 MiB (16,777,216 byte)**. Berkas yang diimpor divalidasi dan mempertahankan byte aslinya. Berkas impor diberi label **Source device unknown**; pemeriksaan integritas tidak menetapkan siapa pembuatnya. Ekspor eksternal yang gagal dapat meninggalkan berkas tujuan yang tidak lengkap, sementara cadangan lokal yang ada tetap dipertahankan.

:::note
Berkas cadangan dapat berisi kata sandi, data portal, dan pengenal perangkat. Ekspor dan berbagi mempertahankan nilai tersebut; pilih tujuan atau penerima dengan mempertimbangkan hal ini.
:::

## Memulihkan cadangan {/* #restore-a-backup */}

1. Pilih **Restore backup** dari entri pustaka atau halaman tindakan perangkat.
2. Pilih **Destination device**, **Backup to restore**, dan **Restore mode** yang didukung.
3. Pilih **Review restore**. Periksa profil yang ditambahkan, ditimpa, dan dihapus; **Changed settings**; pemetaan remote; metadata lokal yang dikecualikan; serta kolom yang tidak kompatibel atau terkunci.
4. Centang kotak konfirmasi, lalu pilih **Apply restore**.

![Layar pemulihan yang menunjukkan perilaku Merge](/img/companion/restore.png)

**Merge** menimpa profil dengan UUID yang cocok, menambahkan profil baru, dan mempertahankan profil yang hanya ada di tujuan. **Replace all** juga menghapus profil tujuan yang tidak ada dalam cadangan. Pencocokan memakai pengenal, bukan nama profil. Kedua mode memulihkan pengaturan aplikasi portabel dan pemetaan remote. Metadata lokal tujuan, seperti ID baris lokal, versi aplikasi, dan direktori pembaruan, dikecualikan.

:::warning
Tinjau setiap penimpaan dan penghapusan sebelum menerapkan. **Replace all** mengganti seluruh kumpulan profil; ini bukan cara untuk menambahkan profil tertentu saja. Untuk penyalinan selektif, gunakan [transfer profil](transferring-profiles.md).
:::

## Hasil dan penerapan pengaturan tersimpan {/* #results-and-applying-saved-settings */}

Pratinjau yang kedaluwarsa memerlukan **Start a new attempt** dan peninjauan baru. Untuk hasil yang tidak pasti, periksa [hasil operasi](profiles.md#operation-results) sebelum mengulangi pemulihan. Pemulihan hasil dapat menanyakan tujuan meskipun cadangan asli tidak lagi tersedia.

Pengaturan tersimpan dan efek saat berjalan adalah hal terpisah. Jika berubah, pengaturan remote virtual berlaku pada jeda/lanjut normal StbEmu berikutnya, ukuran cache memerlukan mulai ulang proses StbEmu, dan bahasa dapat membuat ulang aktivitasnya. Penanda kompatibilitas UPnP tidak mengubah keadaan UPnP yang sedang berjalan, bahkan setelah mulai ulang. **Check result** tidak mencoba ulang pembaruan saat berjalan tersebut.
