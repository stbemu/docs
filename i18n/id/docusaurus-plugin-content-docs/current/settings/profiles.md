---
id: profiles
title: Profil
sidebar_label: Profil
---

# Profil STB {/* #stb-profiles */}

**Profil STB** adalah kumpulan opsi untuk mengemulasi set-top box dalam aplikasi. Aplikasi membuat satu profil saat pertama kali dijalankan.
Anda dapat mengeditnya atau menambahkan profil lain untuk memuat portal yang berbeda pada perangkat yang sama.
Buka **Setelan > Profil**, lalu pilih **Tambah profil**, atau pilih profil yang sudah ada untuk mengeditnya.
Halaman ringkasan mengelompokkan opsi ke dalam **Koneksi**, **Pemutaran dan perangkat**, dan **Kelola profil**.
Tindakan yang tersedia bergantung pada edisi aplikasi dan pembatasan profil. Profil yang aktif tidak dapat dihapus;
beralihlah ke profil lain sebelum menghapusnya. Penghapusan memerlukan konfirmasi.

Perubahan teks dan pilihan memerlukan konfirmasi; perubahan sakelar langsung disimpan. Lihat [Menyimpan perubahan](/settings#saving-changes)
untuk kesalahan validasi, perubahan yang bertentangan, serta perubahan tersimpan yang perlu diterapkan ulang saat aplikasi berjalan.

StbEmu tidak menyediakan, menghosting, atau mengindeks media maupun daftar putar IPTV apa pun.
Pengguna harus memiliki hak legal atas konten yang diakses melalui emulator.

- [Nama profil](#profile-name)
- [Setelan portal](#portal-settings)
    - [URL portal](#portal-url)
    - [Bahasa portal](#portal-language)
    - [Setelan proxy HTTP](#http-proxy-settings)
        - [Gunakan proxy HTTP](#use-http-proxy)
        - [Nama host proxy](#proxy-host-name)
        - [Port proxy](#proxy-port)
    - [Portal internal](#portal-is-internal)
    - [URL portal (Portal internal)](#internal-portal-url)
- [Konfigurasi STB](#stb-configuration)
    - [Model STB](#stb-model)
    - [Firmware](#firmware)
    - [Setelan firmware](#firmware-settings)
    - [Agen pengguna](#user-agent)
    - [Resolusi layar](#screen-resolution)
    - [Alamat MAC](#mac-address)
    - [Nomor seri](#serial-number)
    - [ID perangkat](#device-id)
        - [Gunakan ID perangkat berbasis MAC](#use-mac-based-device-id)
        - [Kirim ID perangkat](#send-device-id)
        - [Seed acak ID perangkat](#device-id-random-seed)
        - [ID perangkat](#device-id-value)
        - [ID2 perangkat dan tanda tangan khusus](#custom-device-id-2-and-signature)
        - [ID perangkat 2](#device-id-2)
        - [Tanda tangan](#signature)
        - [Reset ID perangkat ke nilai bawaan…](#reset-device-id-to-default-value)
    - [Setelan perangkat keras](#hardware-settings)
        - [Produsen](#vendor)
        - [Versi perangkat keras](#hardware-version)
- [Setelan pemutar media](#media-player-settings)
    - [Pemutar media](#media-player)
    - [Setelan UDPXY](#udpxy-settings)
        - [Aktifkan dukungan UDPXY](#enable-udxpy-support)
        - [URL server UDPXY](#udpxy-server-url)
        - [Ganti protokol streaming](#overwrite-stream-protocol)
- [Setelan lanjutan](#advanced-settings)

### Nama profil {/* #profile-name */}
Nama profil. Isinya boleh berupa teks apa pun yang tidak kosong.

### Setelan portal {/* #portal-settings */}
Opsi khusus untuk portal.
##### URL portal {/* #portal-url */}
Masukkan URL **http://** atau **https://** absolut. Host jaringan lokal, localhost, alamat IPv6, dan nama domain internasional didukung. URL jaringan tidak boleh mengandung spasi atau karakter kosong lainnya.
Untuk portal internal, jalur sistem berkas absolut atau URL **file://** absolut yang didukung juga dapat digunakan. Editor yang didesain ulang tidak menerima URL FTP.

##### Bahasa portal {/* #portal-language */}
Bahasa bawaan portal, ditentukan dengan kode bahasa dua huruf [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### Setelan proxy HTTP {/* #http-proxy-settings */}
Pengaturan proksi HTTP.

##### Gunakan proxy HTTP {/* #use-http-proxy */}
Aktifkan jika Anda ingin menggunakan proksi HTTP.

##### Nama host proxy {/* #proxy-host-name */}
Host proksi diatur terpisah dari portnya; host bawaan adalah 127.0.0.1.
##### Port proxy {/* #proxy-port */}
Nilai bawaan: 3128. Editor host dan port hanya tersedia saat **Gunakan proxy HTTP** diaktifkan.

##### Portal internal {/* #portal-is-internal */}
Aktifkan opsi ini untuk menggunakan portal internal bagi perangkat MAG. URL portal lokal mengaktifkannya secara otomatis dan membuat sakelar tidak dapat digunakan. Mengganti URL menjadi URL jaringan menghapus pengaturan portal internal otomatis tersebut.

##### URL portal (Portal internal) {/* #internal-portal-url */}
Gunakan kolom **URL portal** untuk jalur lokal atau URL berkas; tidak ada editor URL internal terpisah.

Untuk menginstal portal, buka **Setelan > Profil > profil Anda > Setelan portal**, gunakan tindakan instalasi, lalu pilih arsipnya. Tunggu hingga ekstraksi selesai,
lalu konfirmasikan URL lokal yang ditawarkan. Menginstal berkas dan menerima URL adalah dua langkah terpisah.
Gunakan tindakan penghapusan di **Setelan portal** untuk menghapus portal internal yang sudah diinstal.

### Konfigurasi STB {/* #stb-configuration */}
Pengaturan utama emulasi.

#### Model STB {/* #stb-model */}
Model STB yang akan diemulasi.

#### Firmware
**Firmware** yang akan diemulasi; tidak ada Firmware sebenarnya yang diinstal. Beberapa portal memerlukan Firmware tertentu.
Jika demikian, pilih Firmware tersebut dari daftar jika tersedia.
Sebagian besar model STB yang didukung hanya menyediakan Firmware **Generic**, yang biasanya mewakili versi terbaru.

Pilihan Firmware yang tersedia:
* Generic: biasanya Firmware terbaru yang tersedia.
* Custom (hanya MAG 250): Firmware yang dapat disesuaikan. Gunakan jika Anda perlu mengubah pengaturan Firmware tertentu.

Sebagian besar pengguna sebaiknya menggunakan Firmware **Generic** (dipilih secara bawaan).

#### Setelan firmware {/* #firmware-settings */}
Opsi ini hanya tersedia dengan Firmware **Custom** (saat ini hanya didukung untuk MAG 250).
Atur versi mesin pemutar, JavaScript API, dan STB API, serta versi, deskripsi, dan tanggal citra.
Aktifkan penggunaan Agen pengguna khusus sebelum mengedit teks Agen pengguna khusus.

#### Agen pengguna {/* #user-agent */}
Teks Agen pengguna untuk peramban web aplikasi.

#### Resolusi layar {/* #screen-resolution */}
Resolusi layar yang akan diemulasi; pengaturan ini tidak mengubah resolusi layar sebenarnya.
Pilih resolusi yang didukung portal Anda, biasanya **1280x720**.

#### Alamat MAC {/* #mac-address */}
Alamat MAC perangkat yang diemulasi. Anda dapat menggunakan alamat MAC perangkat MAG 250 asli milik Anda,
atau 12 digit heksadesimal acak (0–9, A–F), dikelompokkan berpasangan dan dipisahkan dengan titik dua. [^wrong_mac]

Sebagian besar portal mengharuskan alamat MAC diawali dengan 00:1A:79.

[^wrong_mac]: Pada beberapa perangkat yang hanya memiliki Wi-Fi, alamat MAC yang dihasilkan mungkin **00:1A:79:00:00:00**.
    Artinya, aplikasi tidak dapat mendeteksinya dengan benar karena pembatasan Android.
    Ganti bagian **00:00:00** dengan digit heksadesimal acak, dan pertahankan titik dua di antara pasangan digit.

#### Nomor seri {/* #serial-number */}
Nomor seri perangkat yang diemulasi. Sebagian besar portal tidak memeriksanya, sehingga teks apa pun biasanya dapat digunakan.

#### ID perangkat {/* #device-id */}
Pengaturan ID perangkat.

##### Gunakan ID perangkat berbasis MAC {/* #use-mac-based-device-id */}
Buat ID perangkat dari alamat MAC perangkat. Tekan **Reset ID perangkat ke nilai bawaan…** setelah mengaktifkan atau
menonaktifkan opsi ini untuk membuat ulang ID.

##### Kirim ID perangkat {/* #send-device-id */}
Kirim ID perangkat saat portal memintanya. Jika dinonaktifkan, aplikasi mengirim teks kosong.

##### Seed acak ID perangkat {/* #device-id-random-seed */}
Seed yang digunakan untuk membuat ID perangkat. Gunakan seed yang sama pada semua perangkat yang menggunakan URL portal dan
alamat MAC yang sama. Mengonfirmasi perubahan seed akan membuat ulang ID secara otomatis.
Jangan tekan **Reset ID perangkat ke nilai bawaan…** jika ingin mempertahankan seed: tindakan ini menghapusnya.

##### ID perangkat {/* #device-id-value */}
ID perangkat. Gunakan nilai yang dihasilkan atau masukkan nilai Anda sendiri.

##### ID2 perangkat dan tanda tangan khusus {/* #custom-device-id-2-and-signature */}
Aktifkan opsi ini untuk mengedit ID perangkat 2 dan tanda tangan.

##### ID perangkat 2 {/* #device-id-2 */}
##### Tanda tangan {/* #signature */}
##### Reset ID perangkat ke nilai bawaan… {/* #reset-device-id-to-default-value */}
Setelah dikonfirmasi, hapus seed dan buat ulang **ID perangkat**, **ID perangkat 2**, serta tanda tangan dari nilai profil saat ini. Pengaturan profil lainnya dipertahankan.

Pengeditan **ID perangkat** secara manual hanya tersedia saat **Kirim ID perangkat** diaktifkan dan ID berbasis MAC dinonaktifkan.
Pengeditan **ID perangkat 2** dan **Tanda tangan** juga memerlukan **ID2 perangkat dan tanda tangan khusus**.
Nilai yang diturunkan secara otomatis tetap dapat dibaca saat pengeditan tidak tersedia.

#### Setelan perangkat keras {/* #hardware-settings */}
##### Produsen {/* #vendor */}
##### Versi perangkat keras {/* #hardware-version */}

Opsi perangkat juga mencakup kompatibilitas Ministra dan pengalihan peramban. Ubah hanya jika portal Anda memerlukannya.

### Setelan pemutar media {/* #media-player-settings */}

Pengaturan pemutar media untuk profil ini.
#### Pemutar media {/* #media-player */}
Pilih pemutar media bawaan untuk profil ini.

Daftar ini mencakup pemilihan otomatis, Exo, pemutar internal Android, dan pemutar eksternal,
serta pemutar tambahan yang tersedia dalam build aplikasi Anda. Pilih dari opsi yang ditampilkan dalam aplikasi.
Dukungan codec pemutar internal bergantung pada Android; pemutar eksternal membuka streaming di aplikasi lain.

#### Setelan UDPXY {/* #udpxy-settings */}
##### Aktifkan dukungan UDPXY {/* #enable-udxpy-support */}
Aktifkan UDPXY hanya setelah memasukkan URL server HTTP/HTTPS yang valid.
##### URL server UDPXY {/* #udpxy-server-url */}
Anda dapat memasukkan URL saat UDPXY dinonaktifkan. URL kosong hanya diperbolehkan saat UDPXY dinonaktifkan; URL yang tidak kosong harus berupa HTTP/HTTPS yang valid.
##### Ganti protokol streaming {/* #overwrite-stream-protocol */}
Pilih penggantian protokol streaming saat UDPXY diaktifkan.
### Setelan lanjutan {/* #advanced-settings */}
Opsi kompatibilitas khusus profil meliputi patch CSS, deteksi emulator, perbaikan warna latar, berkas lokal, dan AJAX,
serta kejadian kembali/tombol untuk pemutar eksternal. Opsi kejadian Kembali, Keluar, dan OK bergantung pada opsi kejadian kembali ke daftar saluran.
Ubah hanya jika portal atau pemutar eksternal Anda memerlukannya.
