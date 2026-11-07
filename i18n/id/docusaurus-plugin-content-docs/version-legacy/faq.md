---
id: faq
title: Pertanyaan umum
sidebar_label: Pertanyaan umum
---

import FAQ from '@site/src/components/FAQ';

# Pertanyaan umum {/* #faq */}

<FAQ id="google-play-pay-again" question="Saya sudah membayar StbEmu Pro di Google Play, tetapi tidak dapat mengunduhnya. Google Play meminta saya membayar lagi">
    Ini adalah masalah Google Play yang sudah diketahui. Tunggu hingga 24 jam agar Google Play memproses pembayaran dan memperbarui data di perangkat Anda.
    Anda juga dapat membuka peramban web di komputer atau perangkat seluler, mengunjungi [Google Play](https://play.google.com/store),
    mencari StbEmu Pro ([tautan langsung](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro)),
    dan menginstalnya dari jarak jauh pada perangkat Anda.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="Aplikasi mengatur ulang tingkat volume saat saya mengganti saluran">
    Ini adalah masalah yang sudah diketahui pada beberapa perangkat Sony, Philips, dan Xiaomi. Perangkat lain juga mungkin terpengaruh.

    Untuk mengatasinya, atur aplikasi agar menggunakan tingkat volume sistem (global):
    buka [Settings](settings/index.md) > [Common settings](settings/common_settings.md), lalu aktifkan ***Always use system volume level***.
    Muat ulang portal yang aktif dari menu aplikasi agar perubahan diterapkan.
</FAQ>

<FAQ id="customize-portal-ui" question="Bagaimana cara menyesuaikan antarmuka portal? Saya tidak menyukai warna atau ikonnya">
    Portal dihosting pada server penyedia IPTV Anda. Anda hanya dapat menyesuaikan antarmuka jika penyedia menawarkan opsi tersebut.
    Sebagian besar portal tidak mendukung penyesuaian antarmuka, sehingga hanya penyedia IPTV yang dapat mengubah tampilannya.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="Saluran menghilang dari Favorites saat saya memuat ulang portal, atau saya tidak dapat mengubah urutannya">
    Semua daftar saluran, termasuk favorit, disimpan pada server penyedia IPTV Anda. Jika aplikasi tidak memuat favorit Anda
    atau memuatnya dalam urutan yang salah, portal belum dikonfigurasi dengan benar oleh penyedia IPTV Anda.
    Hanya penyedia Anda yang dapat mengatasi masalah ini.
</FAQ>

<FAQ id="channels-buffer" question="Saluran sering mengalami buffering saat diputar">
    Buffering yang sering terjadi biasanya berarti koneksi jaringan Anda atau koneksi penyedia IPTV Anda tidak cukup andal atau cepat
    untuk melakukan streaming video ke perangkat Anda. Jika Anda yakin koneksi Anda berfungsi dengan baik, laporkan masalah ini kepada penyedia IPTV Anda.
</FAQ>

<FAQ id="m3u-support" question="Apakah aplikasi mendukung daftar putar M3U?">
    StbEmu tidak mendukung M3U atau daftar putar lainnya. Aplikasi ini hanya mendukung portal yang dirancang untuk perangkat MAG.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="Saya tidak dapat membuat atau memulihkan cadangan dalam aplikasi">
    Fitur ini saat ini hanya berfungsi dengan baik pada Android 10 dan yang lebih lama. Mulai Android 11, aplikasi dapat membaca dan menulis berkas
    hanya di foldernya sendiri secara bawaan. Aplikasi dapat meminta izin untuk mengakses folder lain, tetapi hal ini tidak berfungsi pada beberapa
    perangkat Android TV dan set-top box (STB). Masalah yang mendasarinya tidak akan diperbaiki:
    [1](https://issuetracker.google.com/issues/71327396), [2](https://issuetracker.google.com/issues/202985150).

    Jika perangkat Anda terpengaruh, Anda tidak akan dapat membuat atau memulihkan cadangan pada perangkat tersebut.
</FAQ>
