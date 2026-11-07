---
title: "Mentransfer profil dan pengaturan"
sidebar_label: "Transfer profil"
---

# Mentransfer profil dan pengaturan {/* #transferring-profiles-and-settings */}

Gunakan transfer untuk menyalin konten yang dipilih langsung di antara dua instalasi StbEmu berbeda yang telah disandingkan. Keduanya harus terhubung dan mendukung tindakan sumber serta tujuan yang dipilih. Untuk menyalin pada instalasi yang sama, gunakan [Copy profile > This device](profiles.md#copy-a-profile).

![Layar transfer menunggu tujuan yang kompatibel](/img/companion/transfer.png)

## Memilih dan meninjau {/* #select-and-review */}

1. Buka perangkat sumber dan pilih **Transfer to another device**.
2. Pilih **Destination device**. Jika tidak ada yang tersedia, kembali ke **Devices**, hubungkan perangkat lain yang telah disandingkan, dan coba lagi.
3. Pilih **Application settings and remote mappings**, profil, atau keduanya. Untuk profil, pilih **Do not copy profiles**, **All profiles**, atau **Choose individual profiles**. Setidaknya satu kategori harus dipilih.
4. Pilih **Review transfer**. Periksa profil baru, perubahan pengaturan, efek pemetaan remote, perubahan profil aktif, pengecualian, dan ketidakcocokan.
5. Centang **I confirm these changes**, lalu pilih **Confirm transfer**.

Pemilihan satu per satu memerlukan daftar profil sumber yang lengkap dan terkini. Jika profil yang dipilih menghilang, gunakan **Refresh** untuk memeriksa daftar, lalu hapus centang secara eksplisit pada profil yang masih tidak ada. Penyegaran tidak menghapus atau mengganti profil yang dipilih secara diam-diam.

## Apa yang berubah {/* #what-changes */}

Profil yang ditransfer adalah salinan baru dengan identitas baru di tujuan. Profil tujuan yang sudah ada dipertahankan. Alamat MAC, nomor seri, ID perangkat, dan nilai profil lain dipertahankan, sehingga penyalinan tidak membuat langganan atau izin penyedia baru. Alur kerja ini tidak memiliki pilihan **Merge**/**Replace all**; mode tersebut adalah bagian dari [pemulihan cadangan](backups.md#restore-a-backup).

Transfer profil saja mempertahankan pengaturan aplikasi, pemetaan remote, dan pilihan aktif di tujuan. Transfer pengaturan saja mempertahankan profil tujuan dan pilihan aktifnya. Saat menyalin keduanya, profil aktif sumber menjadi aktif melalui salinan barunya hanya jika profil itu disertakan; jika tidak, pilihan aktif tujuan dipertahankan.

Pengaturan aplikasi mencakup preferensi StbEmu yang dapat dipindahkan dan pemetaan tombol remote, bukan bahasa/tema Companion, izin penyandingan, identitas layanan, atau riwayat operasi. Nilai yang tidak didukung dilaporkan, bukan dibuang secara diam-diam. Tinjau pengaturan terkait kata sandi dan pengaturan lain yang ditimpa sebelum mengonfirmasi. Beberapa pengaturan tersimpan memerlukan perubahan siklus hidup atau mulai ulang StbEmu; lihat [menerapkan pengaturan tersimpan](backups.md#results-and-applying-saved-settings).

Setelah Companion melaporkan bahwa snapshot sumber telah diverifikasi, percobaan yang sama tersebut dapat dilanjutkan jika sumber terputus. Transfer tidak membuat entri permanen di pustaka cadangan. Untuk hasil yang tidak pasti atau pembatalan, gunakan [hasil operasi](profiles.md#operation-results).
