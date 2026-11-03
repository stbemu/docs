---
id: profiles
title: Profil
sidebar_label: Profil
---

# Profil STB {/* #stb-profiles */}

**Profil STB** adalah kumpulan opsi untuk mengemulasi set-top box dalam aplikasi. Aplikasi membuat satu profil saat pertama kali dijalankan.
Anda dapat mengeditnya atau menambahkan profil lain untuk memuat portal yang berbeda pada perangkat yang sama.
Untuk membuat profil, ketuk layar dua kali agar menu di bagian atas atau samping muncul [^1].
Pilih **Settings**, lalu **Profiles**, tempat Anda dapat menambah atau mengedit profil.

StbEmu tidak menyediakan, menghosting, atau mengindeks media maupun daftar putar IPTV apa pun.
Pengguna harus memiliki hak legal atas konten yang diakses melalui emulator.

[^1]: Jika Anda menggunakan remote 3D atau mouse, gerakkan penunjuk, klik layar, lalu buka menu aplikasi di bagian atas.

- [Profile name](#profile-name)
- [Portal settings](#portal-settings)
    - [Portal URL](#portal-url)
    - [Portal language](#portal-language)
    - [HTTP Proxy settings](#http-proxy-settings)
        - [Use HTTP proxy](#use-http-proxy)
        - [Proxy host name](#proxy-host-name)
        - [Proxy port](#proxy-port)
    - [Portal is internal](#portal-is-internal)
    - [Internal portal URL](#internal-portal-url)
- [STB configuration](#stb-configuration)
    - [STB Model](#stb-model)
    - [Firmware](#firmware)
    - [Firmware settings](#firmware-settings)
    - [User Agent](#user-agent)
    - [Screen resolution](#screen-resolution)
    - [MAC address](#mac-address)
    - [Serial number](#serial-number)
    - [Device ID](#device-id)
        - [Use MAC-based device ID](#use-mac-based-device-id)
        - [Send Device ID](#send-device-id)
        - [Device ID random seed](#device-id-random-seed)
        - [Device ID](#device-id-value)
        - [Custom device ID 2 and signature](#custom-device-id-2-and-signature)
        - [Device ID 2](#device-id-2)
        - [Signature](#signature)
        - [Reset device ID to default value](#reset-device-id-to-default-value)
    - [Hardware settings](#hardware-settings)
        - [Vendor](#vendor)
        - [Hardware version](#hardware-version)
    - [IP address](#ip-address)
- [Media player settings](#media-player-settings)
    - [Media player](#media-player)
    - [UDPXY settings](#udpxy-settings)
        - [Enable UDPXY support](#enable-udxpy-support)
        - [UDPXY server URL](#udpxy-server-url)
        - [Overwrite stream protocol](#overwrite-stream-protocol)
- [Advanced settings](#advanced-settings)

### Profile name
Nama profil. Isinya boleh berupa teks apa pun yang tidak kosong.

### Portal settings
Opsi khusus untuk portal.
##### Portal URL
URL portal. URL harus diawali skema (**http://**, **https://**, **ftp://**, dan sebagainya).

##### Portal language
Bahasa bawaan portal, ditentukan dengan kode bahasa dua huruf [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Pengaturan proksi HTTP.

##### Use HTTP proxy
Aktifkan jika Anda ingin menggunakan proksi HTTP.

##### Proxy host name
##### Proxy port

##### Portal is internal
Aktifkan opsi ini untuk menggunakan portal internal bagi perangkat MAG.

##### Internal portal URL

### STB configuration
Pengaturan utama emulasi.

#### STB Model
Model STB yang akan diemulasi.

#### Firmware
**firmware** yang akan diemulasi; tidak ada firmware sebenarnya yang diinstal. Beberapa portal memerlukan firmware tertentu.
Jika demikian, pilih firmware tersebut dari daftar jika tersedia.
Sebagian besar model STB yang didukung hanya menyediakan firmware **Generic**, yang biasanya mewakili versi terbaru.

Pilihan firmware yang tersedia:
* Generic: biasanya firmware terbaru yang tersedia.
* Custom (hanya MAG 250): firmware yang dapat disesuaikan. Gunakan jika Anda perlu mengubah pengaturan firmware tertentu.

Sebagian besar pengguna sebaiknya menggunakan firmware **Generic** (dipilih secara bawaan).

#### Firmware settings
Opsi ini hanya tersedia dengan firmware **Custom** (saat ini hanya didukung untuk MAG 250).
Gunakan untuk mengatur pengaturan firmware tertentu, misalnya versi atau teks User Agent khusus.

#### User Agent
Teks User Agent untuk peramban web aplikasi.

#### Screen resolution
Resolusi layar yang akan diemulasi; pengaturan ini tidak mengubah resolusi layar sebenarnya.
Pilih resolusi yang didukung portal Anda, biasanya **1280x720**.

#### MAC address
Alamat MAC perangkat yang diemulasi. Anda dapat menggunakan alamat MAC perangkat MAG 250 asli milik Anda,
atau 12 digit heksadesimal acak (0–9, A–F), dikelompokkan berpasangan dan dipisahkan dengan titik dua. [^wrong_mac]

Sebagian besar portal mengharuskan alamat MAC diawali dengan 00:1A:79.

[^wrong_mac]: Pada beberapa perangkat yang hanya memiliki Wi-Fi, alamat MAC yang dihasilkan mungkin **00:1A:79:00:00:00**.
    Artinya, aplikasi tidak dapat mendeteksinya dengan benar karena pembatasan Android.
    Ganti bagian **00:00:00** dengan digit heksadesimal acak, dan pertahankan titik dua di antara pasangan digit.

#### Serial number
Nomor seri perangkat yang diemulasi. Sebagian besar portal tidak memeriksanya, sehingga teks apa pun biasanya dapat digunakan.

#### Device ID
Pengaturan Device ID.

##### Use MAC-based device ID
Buat ID perangkat dari alamat MAC perangkat. Tekan **Reset device ID** setelah mengaktifkan atau
menonaktifkan opsi ini untuk membuat ulang ID.

##### Send Device ID
Kirim ID perangkat saat portal memintanya. Jika dinonaktifkan, aplikasi mengirim teks kosong.

##### Device ID random seed
Seed yang digunakan untuk membuat ID perangkat. Gunakan seed yang sama pada semua perangkat yang menggunakan URL portal dan
alamat MAC yang sama. Tekan **Reset device ID** setelah mengubah nilai ini.

##### Device ID value
ID perangkat. Gunakan nilai yang dihasilkan atau masukkan nilai Anda sendiri.

##### Custom device ID 2 and signature
Aktifkan opsi ini untuk mengedit Device ID 2 dan tanda tangan.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Buat ulang **Device ID**, **Device ID 2**, dan tanda tangan.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
Alamat IP yang dikirim ke portal saat diminta. Ini adalah alamat emulasi, bukan alamat IP sebenarnya dari perangkat.
Sebagian besar portal tidak menggunakan informasi ini, sehingga biasanya Anda tidak perlu mengubahnya.
### Media player settings

Pengaturan pemutar media untuk profil ini.
#### Media player
Pilih pemutar media bawaan untuk profil ini.

| Pemutar | Deskripsi | Keterangan |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo | [GitHub](https://github.com/google/ExoPlayer) | Pemutar bawaan, disarankan untuk sebagian besar perangkat |
| VLC             | [Situs web](https://www.videolan.org)                                                                                                                 |                                                         |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk | [GitHub](https://github.com/bilibili/ijkplayer) | Tidak mendukung subtitel |
| Internal player | Menggunakan pemutar Android. Codec yang didukung bergantung pada versi Android perangkat Anda. | Tidak mendukung subtitel |
| External player | Gunakan hampir semua pemutar eksternal. Integrasi dengan emulator tidak tersedia; streaming media dibuka di aplikasi lain. | |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
