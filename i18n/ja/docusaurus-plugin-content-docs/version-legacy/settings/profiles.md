---
id: profiles
title: プロファイル
sidebar_label: プロファイル
---

# STB プロファイル {/* #stb-profiles */}

**STB プロファイル**は、アプリでセットトップボックスをエミュレートするための設定の集まりです。初回起動時に、1 つのプロファイルが作成されます。
このプロファイルを編集するほか、プロファイルを追加して同じ端末で異なるポータルを読み込むこともできます。
プロファイルを作成するには、画面をダブルタップし、上部または側面にメニューを表示します。[^1]
**Settings**、**Profiles** の順に選ぶと、プロファイルを追加・編集できます。

StbEmu は、メディアや IPTV プレイリストの提供、ホスティング、インデックス作成を行いません。
利用者には、エミュレーターを通じてアクセスするコンテンツを合法的に利用する権利が必要です。

[^1]: 3D リモコンやマウスを使用する場合は、ポインターを動かして画面をクリックし、上部のアプリメニューを開いてください。

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

### Profile name {/* #profile-name */}
プロファイルの名前です。空でない任意の文字列を使用できます。

### Portal settings {/* #portal-settings */}
ポータル固有の設定です。
##### Portal URL {/* #portal-url */}
ポータルの URL です。スキーム（**http://**、**https://**、**ftp://** など）で始まる必要があります。

##### Portal language {/* #portal-language */}
ポータルの既定の言語を、2 文字の [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) 言語コードで指定します。

#### HTTP Proxy settings {/* #http-proxy-settings */}
HTTP プロキシの設定です。

##### Use HTTP proxy {/* #use-http-proxy */}
HTTP プロキシを使用する場合は有効にします。

##### Proxy host name {/* #proxy-host-name */}
##### Proxy port {/* #proxy-port */}

##### Portal is internal {/* #portal-is-internal */}
MAG 端末用の内部ポータルを使用する場合は、この項目を有効にします。

##### Internal portal URL {/* #internal-portal-url */}

### STB configuration {/* #stb-configuration */}
エミュレーションの基本設定です。

#### STB Model {/* #stb-model */}
エミュレートする STB のモデルです。

#### Firmware {/* #firmware */}
エミュレートする**ファームウェア**です。実際のファームウェアがインストールされるわけではありません。特定のファームウェアを必要とするポータルもあります。
その場合は、一覧にある対応するファームウェアを選んでください。
対応するほとんどの STB モデルでは **Generic** ファームウェアのみ利用でき、通常は最新バージョンを表します。

利用できるファームウェア：
* Generic：通常、利用可能な最新のファームウェアです。
* Custom（MAG 250 のみ）：カスタマイズ可能なファームウェアです。特定のファームウェア設定を変更する必要がある場合に使用します。

ほとんどの場合、既定で選択される **Generic** ファームウェアを使用してください。

#### Firmware settings {/* #firmware-settings */}
この設定は **Custom** ファームウェアでのみ利用できます（現在は MAG 250 のみ対応）。
バージョンやカスタム User Agent 文字列など、特定のファームウェア設定を変更する際に使用します。

#### User Agent {/* #user-agent */}
アプリの Web ブラウザーの User Agent 文字列です。

#### Screen resolution {/* #screen-resolution */}
エミュレートする画面解像度です。実際のディスプレイの解像度は変更されません。
ポータルが対応する解像度を選んでください。通常は **1280x720** です。

#### MAC address {/* #mac-address */}
エミュレートする端末の MAC アドレスです。所有する実機の MAG 250 の MAC アドレス、
またはランダムな 12 桁の 16 進数（0–9、A–F）を 2 桁ずつコロンで区切ったものを使用できます。[^wrong_mac]

ほとんどのポータルでは、MAC アドレスが 00:1A:79 で始まる必要があります。

[^wrong_mac]: Wi-Fi のみの一部の端末では、生成された MAC アドレスが **00:1A:79:00:00:00** になる場合があります。
    これは Android の制限により、アプリが正しく検出できなかったことを意味します。
    **00:00:00** の部分をランダムな 16 進数に置き換え、2 桁ごとのコロンは残してください。

#### Serial number {/* #serial-number */}
エミュレートする端末のシリアル番号です。ほとんどのポータルでは確認されないため、通常は任意の文字列で問題ありません。

#### Device ID {/* #device-id */}
デバイス ID の設定です。

##### Use MAC-based device ID {/* #use-mac-based-device-id */}
端末の MAC アドレスからデバイス ID を生成します。この項目の有効・無効を切り替えた後は、
**Reset device ID** を押して ID を再生成してください。

##### Send Device ID {/* #send-device-id */}
ポータルから要求されたときにデバイス ID を送信します。無効の場合は空の文字列を送信します。

##### Device ID random seed {/* #device-id-random-seed */}
デバイス ID の生成に使うシード値です。同じポータル URL と MAC アドレスを使用するすべての端末で、
同じシード値を使ってください。この値を変更した後は、**Reset device ID** を押してください。

##### Device ID value {/* #device-id-value */}
デバイス ID です。生成された値を使うか、独自の値を入力します。

##### Custom device ID 2 and signature {/* #custom-device-id-2-and-signature */}
Device ID 2 と署名を編集する場合は、この項目を有効にします。

##### Device ID 2 {/* #device-id-2 */}
##### Signature {/* #signature */}
##### Reset device ID to default value {/* #reset-device-id-to-default-value */}
**Device ID**、**Device ID 2**、署名を再生成します。

#### Hardware settings {/* #hardware-settings */}
##### Vendor {/* #vendor */}
##### Hardware version {/* #hardware-version */}

#### IP address {/* #ip-address */}
ポータルの要求に応じて送信する IP アドレスです。これはエミュレートされたアドレスで、端末の実際の IP アドレスではありません。
ほとんどのポータルではこの情報を使用しないため、通常は変更不要です。
### Media player settings {/* #media-player-settings */}

このプロファイルのメディアプレーヤー設定です。
#### Media player {/* #media-player */}
このプロファイルの既定のメディアプレーヤーを選びます。

| プレーヤー | 説明 | 備考 |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo | [GitHub](https://github.com/google/ExoPlayer) | 既定のプレーヤー。ほとんどの端末で推奨されます |
| VLC | [Web サイト](https://www.videolan.org) | |
| MPV | [GitHub](https://github.com/mpv-android/mpv-android) | |
| Ijk | [GitHub](https://github.com/bilibili/ijkplayer) | 字幕には対応していません |
| Internal player | Android のプレーヤーを使用します。対応コーデックは端末の Android バージョンによって異なります。 | 字幕には対応していません |
| External player | ほぼすべての外部プレーヤーを利用できます。エミュレーターとの連携はなく、メディアストリームは別のアプリで開かれます。 | |

#### UDPXY settings {/* #udpxy-settings */}
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL {/* #udpxy-server-url */}
##### Overwrite stream protocol {/* #overwrite-stream-protocol */}
### Advanced settings {/* #advanced-settings */}
