---
title: "Menghubungkan perangkat"
sidebar_label: "Menghubungkan perangkat"
---

# Menghubungkan perangkat {/* #connecting-devices */}

## Menemukan StbEmu {/* #discover-stbemu */}

1. Hubungkan ponsel atau tablet dan perangkat StbEmu ke jaringan lokal yang sama dan saling dapat dijangkau.
2. Di StbEmu, buka **Settings > Companion** dan aktifkan layanan. Lihat [pengaturan Companion StbEmu](../settings/companion.md).
3. Buka halaman **Devices** di Companion. Perangkat yang terverifikasi muncul sebagai kartu tersimpan. Buka kartu instalasi StbEmu yang ingin Anda kelola.

![Halaman perangkat sedang mencari di jaringan lokal](/img/companion/devices-empty.png)

Jika tidak ada yang muncul, pastikan akses Companion diaktifkan di StbEmu dan Android mengizinkan akses jaringan lokal. Pilih **Retry**, atau hubungkan secara manual.

### Menambahkan alamat secara manual {/* #add-an-address-manually */}

Pilih **Add by IP address**. Masukkan **IPv4 or IPv6 address** dan port yang ditampilkan di StbEmu, lalu pilih **Connect**. Port yang kosong menggunakan **10000**. Masukkan alamat IP, bukan URL situs web atau nama host. Entri manual tidak melewati verifikasi atau penyandingan. Perangkat dengan penyandingan tersimpan yang masih valid dapat terhubung kembali tanpa memasukkan kode baru.

![Perangkat tersimpan menunggu penyandingan](/img/companion/devices-saved.png)

## Menyandingkan perangkat {/* #pair-a-device */}

1. Di **Settings > Companion** StbEmu, mulai penyandingan untuk menampilkan kode.
2. Pada halaman tindakan perangkat di Companion, masukkan kode ke **Eight-digit pairing code**.
3. Pilih **Pair device** dan tunggu **Connected**.

![Memasukkan kode penyandingan](/img/companion/pairing.png)

Jika kode kedaluwarsa, tampilkan kode baru di StbEmu. Jika frekuensi percobaan dibatasi, tunggu sebelum mencoba lagi. Penyandingan disimpan untuk koneksi berikutnya selama StbEmu tetap mengizinkannya. Mencabut akses di StbEmu juga mencegah penggunaan izin yang tersimpan.

## Menghubungkan kembali, mengganti nama, atau menghapus {/* #reconnect-rename-or-remove */}

**Disconnect** menutup koneksi dan mempertahankan perangkat tersimpan. Untuk menghubungkan kembali, buka kartunya dan pilih **Connect**. Perubahan jaringan dapat memutus koneksi; hubungkan kembali setelah konektivitas lokal pulih.

Gunakan tombol pensil (**Rename device**) untuk menetapkan nama lokal. **Use app name** mengembalikan nama yang dilaporkan oleh StbEmu. Mengganti nama di sini tidak mengubah nama StbEmu itu sendiri.

Tombol tempat sampah (**Remove device**) meminta konfirmasi. Tindakan ini menghapus koneksi dan penyandingan tersimpan dari ponsel ini, mempertahankan berkas cadangan, dan tidak mengubah apa pun di StbEmu. Perangkat yang dihapus tidak otomatis muncul lagi melalui penemuan. Untuk menambahkannya lagi, gunakan **Add by IP address** dan sandingkan kembali.
