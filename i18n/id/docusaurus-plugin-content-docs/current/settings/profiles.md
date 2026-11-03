---
id: profiles
title: Profil
sidebar_label: Profil
---

# Profil STB {/* #stb-profiles */}

**Profil STB** adalah kumpulan opsi untuk mengemulasi set-top box dalam aplikasi. Aplikasi membuat satu profil saat pertama kali dijalankan.
Anda dapat mengeditnya atau menambahkan profil lain untuk memuat portal yang berbeda pada perangkat yang sama.
Buka **Settings > Profiles**, lalu pilih **Add profile**, atau pilih profil yang sudah ada untuk mengeditnya.
Halaman ringkasan mengelompokkan opsi ke dalam **Connection**, **Playback & device**, dan **Manage profile**.
Tindakan yang tersedia bergantung pada edisi aplikasi dan pembatasan profil. Profil yang aktif tidak dapat dihapus;
beralihlah ke profil lain sebelum menghapusnya. Penghapusan memerlukan konfirmasi.

Perubahan teks dan pilihan memerlukan konfirmasi; perubahan sakelar langsung disimpan. Lihat [Menyimpan perubahan](/settings#saving-changes)
untuk kesalahan validasi, perubahan yang bertentangan, serta perubahan tersimpan yang perlu diterapkan ulang saat aplikasi berjalan.

StbEmu tidak menyediakan, menghosting, atau mengindeks media maupun daftar putar IPTV apa pun.
Pengguna harus memiliki hak legal atas konten yang diakses melalui emulator.

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
Masukkan URL **http://** atau **https://** absolut. Host jaringan lokal, localhost, alamat IPv6, dan nama domain internasional didukung. URL jaringan tidak boleh mengandung spasi atau karakter kosong lainnya.
Untuk portal internal, jalur sistem berkas absolut atau URL **file://** absolut yang didukung juga dapat digunakan. Editor yang didesain ulang tidak menerima URL FTP.

##### Portal language
Bahasa bawaan portal, ditentukan dengan kode bahasa dua huruf [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Pengaturan proksi HTTP.

##### Use HTTP proxy
Aktifkan jika Anda ingin menggunakan proksi HTTP.

##### Proxy host name
Host proksi diatur terpisah dari portnya; host bawaan adalah 127.0.0.1.
##### Proxy port
Nilai bawaan: 3128. Editor host dan port hanya tersedia saat **Use HTTP proxy** diaktifkan.

##### Portal is internal
Aktifkan opsi ini untuk menggunakan portal internal bagi perangkat MAG. URL portal lokal mengaktifkannya secara otomatis dan membuat sakelar tidak dapat digunakan. Mengganti URL menjadi URL jaringan menghapus pengaturan portal internal otomatis tersebut.

##### Internal portal URL
Gunakan kolom **Portal URL** untuk jalur lokal atau URL berkas; tidak ada editor URL internal terpisah.

Untuk menginstal portal, buka **Settings > Profiles > profil Anda > Portal settings**, gunakan tindakan instalasi, lalu pilih arsipnya. Tunggu hingga ekstraksi selesai,
lalu konfirmasikan URL lokal yang ditawarkan. Menginstal berkas dan menerima URL adalah dua langkah terpisah.
Gunakan tindakan penghapusan di **Portal settings** untuk menghapus portal internal yang sudah diinstal.

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
Atur versi mesin pemutar, JavaScript API, dan STB API, serta versi, deskripsi, dan tanggal citra.
Aktifkan penggunaan User Agent khusus sebelum mengedit teks User Agent khusus.

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
alamat MAC yang sama. Mengonfirmasi perubahan seed akan membuat ulang ID secara otomatis.
Jangan tekan Reset jika ingin mempertahankan seed: Reset menghapusnya.

##### Device ID value
ID perangkat. Gunakan nilai yang dihasilkan atau masukkan nilai Anda sendiri.

##### Custom device ID 2 and signature
Aktifkan opsi ini untuk mengedit Device ID 2 dan tanda tangan.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Setelah dikonfirmasi, hapus seed dan buat ulang **Device ID**, **Device ID 2**, serta tanda tangan dari nilai profil saat ini. Pengaturan profil lainnya dipertahankan.

Pengeditan **Device ID** secara manual hanya tersedia saat **Send Device ID** diaktifkan dan ID berbasis MAC dinonaktifkan.
Pengeditan **Device ID 2** dan **Signature** juga memerlukan **Custom device ID 2 and signature**.
Nilai yang diturunkan secara otomatis tetap dapat dibaca saat pengeditan tidak tersedia.

#### Hardware settings
##### Vendor
##### Hardware version

Opsi perangkat juga mencakup kompatibilitas Ministra dan pengalihan peramban. Ubah hanya jika portal Anda memerlukannya.

### Media player settings

Pengaturan pemutar media untuk profil ini.
#### Media player
Pilih pemutar media bawaan untuk profil ini.

Daftar ini mencakup pemilihan otomatis, Exo, pemutar internal Android, dan pemutar eksternal,
serta pemutar tambahan yang tersedia dalam build aplikasi Anda. Pilih dari opsi yang ditampilkan dalam aplikasi.
Dukungan codec pemutar internal bergantung pada Android; pemutar eksternal membuka streaming di aplikasi lain.

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
Aktifkan UDPXY hanya setelah memasukkan URL server HTTP/HTTPS yang valid.
##### UDPXY server URL
Anda dapat memasukkan URL saat UDPXY dinonaktifkan. URL kosong hanya diperbolehkan saat UDPXY dinonaktifkan; URL yang tidak kosong harus berupa HTTP/HTTPS yang valid.
##### Overwrite stream protocol
Pilih penggantian protokol streaming saat UDPXY diaktifkan.
### Advanced settings
Opsi kompatibilitas khusus profil meliputi patch CSS, deteksi emulator, perbaikan warna latar, berkas lokal, dan AJAX,
serta kejadian kembali/tombol untuk pemutar eksternal. Opsi kejadian Back, Exit, dan OK bergantung pada opsi kejadian kembali ke daftar saluran.
Ubah hanya jika portal atau pemutar eksternal Anda memerlukannya.
