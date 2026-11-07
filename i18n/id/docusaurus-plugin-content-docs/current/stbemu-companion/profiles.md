---
title: "Mengelola profil"
sidebar_label: "Profil"
---

# Mengelola profil {/* #managing-profiles */}

Buka perangkat yang terhubung dan pilih **Profiles**. Daftar menampilkan nama profil, pengenal (UUID), dan alamat portal yang tersedia. Pilih profil untuk memeriksa pengaturannya. Gunakan **Load more** untuk halaman tambahan dan **Refresh** untuk data terkini. Tindakan bergantung pada izin yang didukung perangkat.

## Membuat, mengedit, dan menghapus {/* #create-edit-and-delete */}

- Pilih **Create profile** dari daftar. Kolom pembuatan yang didukung mencakup **Name** dan **Portal URL**. Kolom yang tidak disentuh memakai nilai bawaan StbEmu.
- Buka profil dan pilih **Edit profile** untuk mengubah kolom yang didukung dan dapat diedit. Hanya kolom yang diedit yang berubah; pengaturan tambahan yang disimpan perangkat tetap dipertahankan.
- Pilih **Delete profile** untuk menyiapkan penghapusan. Tinjau perubahan profil aktif atau profil pengganti sebelum mengonfirmasi.

Pilih **Review changes**, periksa pratinjau dan peringatan, lalu pilih **Confirm changes** atau **Confirm deletion**. Tindakan pertama tidak langsung menyimpan atau menghapus profil. Perubahan yang tidak kompatibel tidak dapat dikonfirmasi. Jika profil atau kolom yang tersedia berubah saat mengedit, segarkan dan tinjau kembali.

Untuk arti kolom profil StbEmu, lihat [Profil STB](../settings/profiles.md).

## Menyalin profil {/* #copy-a-profile */}

Buka profil dan pilih **Copy profile**. Pilih **This device** untuk menyalin pada perangkat yang sama, lalu tinjau dan konfirmasikan perubahan. Salinan memiliki identitas baru; jangan mengenalinya berdasarkan nama saja. **Edit copied profile**, jika tersedia setelah berhasil, membuka salinan yang dikembalikan, bukan profil asli.

Memilih perangkat lain yang memenuhi syarat dan telah disandingkan akan membuka [alur kerja panduan transfer](transferring-profiles.md) dengan profil tersebut dipilih.

## Hasil operasi {/* #operation-results */}

Jika koneksi gagal atau hasil tidak pasti, buka **Recent operation results** perangkat dan gunakan **Check result** sebelum memulai perubahan lain. Pemeriksaan hasil memerlukan koneksi yang diizinkan dan menanyakan operasi awal; tindakan ini tidak mengirim perubahan lagi. Ini juga berlaku untuk [transfer](transferring-profiles.md) dan [pemulihan cadangan](backups.md).

Pratinjau yang kedaluwarsa memerlukan peninjauan baru secara eksplisit. Pembatalan dapat terjadi bersamaan dengan penyimpanan, jadi baca hasil akhir dan jangan menganggap **Cancel operation** membatalkan perubahan yang telah dibuat. **Changes saved on the device** mengonfirmasi data tersimpan; penyegaran saat berjalan mungkin masih tertunda. Memeriksa hasil tidak mencoba ulang penyegaran saat berjalan, dan profil salinan yang telah dihapus tidak pernah dibuat ulang dengan memeriksa riwayatnya.
