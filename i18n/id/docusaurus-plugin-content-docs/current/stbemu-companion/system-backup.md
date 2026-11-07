---
title: "Pencadangan sistem Android"
sidebar_label: "Pencadangan sistem Android"
---

# Pencadangan sistem Android {/* #android-system-backup */}

Buka **Settings > Backups > System backup**. Pencadangan sistem Android dapat memulihkan preferensi Companion, perangkat dan nama tersimpan, kepercayaan terverifikasi, serta kredensial penyandingan yang masih valid setelah pemulihan Android berhasil. Ini terpisah dari memulihkan [cadangan JSON StbEmu](backups.md) ke perangkat yang disandingkan.

## Menyertakan arsip lokal {/* #include-local-archives */}

**Include local archives** aktif secara bawaan. Pengaturan ini menyertakan cadangan StbEmu yang memenuhi syarat dan telah selesai dari pustaka lokal dalam pencadangan sistem berikutnya. Mematikannya mempertahankan berkas lokal serta pengaturan/perangkat Companion, tetapi mengecualikan arsip dari cadangan berikutnya. Ini tidak menghapus konten cloud yang lebih lama.

Halaman menampilkan perkiraan ukuran pilihan. Gunakan **Refresh estimate** untuk mengukur lagi, **Open Android settings** untuk memeriksa konfigurasi pencadangan Android, atau **Open archive library / manual export** untuk mengekspor berkas sendiri.

## Ketersediaan dan batas {/* #availability-and-limits */}

Pencadangan sistem memerlukan **Android 9 atau lebih baru**, meskipun Companion sendiri mendukung Android 8. Pencadangan cloud terenkripsi juga memerlukan akun yang didukung, kunci layar yang aman, dan enkripsi sisi klien Android. Android mengendalikan penjadwalan, kelayakan transportasi, dan ketersediaan pemulihan.

Kuota cloud nominal adalah **25 MiB**; kuota yang benar-benar tersedia bisa lebih rendah. Batas antarperangkat **256 MiB** adalah batas aplikasi, bukan jaminan kapasitas transportasi. Jika seluruh pilihan terlalu besar, kecualikan arsip lokal atau ekspor secara manual. Companion tidak mencadangkan hanya sebagian pilihan secara diam-diam.

Perkiraan atau pesan persiapan lokal bukan konfirmasi bahwa Android menyimpan cadangan cloud. Perkiraan yang tidak tersedia bukan berarti cadangan berukuran nol. Jika halaman melaporkan bahwa pencadangan dinonaktifkan atau tidak didukung, gunakan ekspor arsip manual dan jangan menganggap data terlindungi.

## Setelah Android memulihkan Companion {/* #after-android-restores-companion */}

Perangkat yang dipulihkan harus diverifikasi sebelum ditampilkan sebagai terhubung. Kredensial penyandingan yang masih diizinkan dapat terhubung kembali tanpa penyandingan baru, tetapi pemulihan tidak dapat membatalkan pencabutan akses di StbEmu. Salinan yang dipulihkan berbagi izin yang sama; mencabut izin juga memengaruhi salinan tersebut.

Pustaka mencantumkan berkas arsip selesai yang benar-benar dipulihkan. Metadata saja tidak membuat ulang berkas yang hilang. Operasi yang belum selesai tidak otomatis dikirim lagi; hubungkan kembali dan periksa [hasil operasi](profiles.md#operation-results) jika tersedia.
