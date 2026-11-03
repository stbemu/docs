---
id: profiles
title: プロファイル
sidebar_label: プロファイル
---

# STB プロファイル {/* #stb-profiles */}

**STB プロファイル**は、アプリでセットトップボックスをエミュレートするための設定の集まりです。初回起動時に、1 つのプロファイルが作成されます。
このプロファイルを編集するほか、プロファイルを追加して同じ端末で異なるポータルを読み込むこともできます。
**Settings > Profiles** を開き、**Add profile** を選ぶか、既存のプロファイルを選んで編集します。
概要画面では、設定項目が **Connection**、**Playback & device**、**Manage profile** に分類されています。
利用できる操作は、アプリのエディションやプロファイルの制限によって異なります。使用中のプロファイルは削除できません。
削除する前に別のプロファイルに切り替えてください。削除には確認が必要です。

テキストや選択項目の編集には確認が必要です。スイッチは即座に保存されます。入力エラー、編集の競合、
実行時の更新が必要な保存済み変更については、[変更の保存](/settings#saving-changes)を参照してください。

StbEmu は、メディアや IPTV プレイリストの提供、ホスティング、インデックス作成を行いません。
利用者には、エミュレーターを通じてアクセスするコンテンツを合法的に利用する権利が必要です。

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

### Profile name {/* #profile-name */}
プロファイルの名前です。空でない任意の文字列を使用できます。

### Portal settings {/* #portal-settings */}
ポータル固有の設定です。
##### Portal URL {/* #portal-url */}
**http://** または **https://** の絶対 URL を入力します。ローカルネットワーク上のホスト、localhost、IPv6 アドレス、国際化ドメイン名に対応しています。ネットワーク URL に空白を含めることはできません。
内部ポータルでは、ファイルシステムの絶対パス、または対応する **file://** の絶対 URL も利用できます。新しい編集画面では FTP URL は利用できません。

##### Portal language {/* #portal-language */}
ポータルの既定の言語を、2 文字の [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) 言語コードで指定します。

#### HTTP Proxy settings {/* #http-proxy-settings */}
HTTP プロキシの設定です。

##### Use HTTP proxy {/* #use-http-proxy */}
HTTP プロキシを使用する場合は有効にします。

##### Proxy host name {/* #proxy-host-name */}
プロキシのホストとポートは別々に設定します。既定のホストは 127.0.0.1 です。
##### Proxy port {/* #proxy-port */}
既定値：3128。ホストとポートの編集は、**Use HTTP proxy** が有効な間のみ可能です。

##### Portal is internal {/* #portal-is-internal */}
MAG 端末用の内部ポータルを使用する場合は、この項目を有効にします。ローカルポータルの URL を指定すると自動的に有効になり、スイッチは操作できなくなります。ネットワーク URL に変更すると、内部ポータルの自動設定は解除されます。

##### Internal portal URL {/* #internal-portal-url */}
ローカルパスやファイル URL は **Portal URL** 欄に入力してください。内部 URL 専用の編集欄はありません。

ポータルをインストールするには、**Settings > Profiles > 対象のプロファイル > Portal settings** を開き、インストール操作でアーカイブを選びます。展開が完了するのを待ち、
提示されたローカル URL を確定します。ファイルのインストールと URL の確定は、別々の手順です。
インストール済みの内部ポータルを削除するには、**Portal settings** の削除操作を使用してください。

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
プレーヤーエンジン、JavaScript API、STB API のバージョンと、イメージのバージョン、説明、日付を設定します。
カスタム User Agent 文字列を編集する前に、カスタム User Agent の使用を有効にしてください。

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
同じシード値を使ってください。シード値の変更を確定すると、ID は自動的に再生成されます。
シード値を保持したい場合は Reset を押さないでください。Reset はシード値を消去します。

##### Device ID value {/* #device-id-value */}
デバイス ID です。生成された値を使うか、独自の値を入力します。

##### Custom device ID 2 and signature {/* #custom-device-id-2-and-signature */}
Device ID 2 と署名を編集する場合は、この項目を有効にします。

##### Device ID 2 {/* #device-id-2 */}
##### Signature {/* #signature */}
##### Reset device ID to default value {/* #reset-device-id-to-default-value */}
確認後、シード値を消去し、現在のプロファイルの値から **Device ID**、**Device ID 2**、署名を再生成します。他のプロファイル設定は保持されます。

**Device ID** を手動編集できるのは、**Send Device ID** が有効で、MAC ベースの ID が無効な場合だけです。
**Device ID 2** と **Signature** の編集には、**Custom device ID 2 and signature** も必要です。
編集できない場合でも、自動的に算出された値は参照できます。

#### Hardware settings {/* #hardware-settings */}
##### Vendor {/* #vendor */}
##### Hardware version {/* #hardware-version */}

端末設定には、Ministra 互換性やブラウザーのリダイレクトもあります。ポータルで必要な場合にのみ変更してください。

### Media player settings {/* #media-player-settings */}

このプロファイルのメディアプレーヤー設定です。
#### Media player {/* #media-player */}
このプロファイルの既定のメディアプレーヤーを選びます。

一覧には、自動選択、Exo、Android の内部プレーヤー、外部プレーヤーに加え、
ビルドで利用可能な追加のプレーヤーが表示されます。アプリに表示される選択肢から選んでください。
内部プレーヤーが対応するコーデックは Android に依存します。外部プレーヤーは別のアプリでストリームを開きます。

#### UDPXY settings {/* #udpxy-settings */}
##### Enable UDPXY support {/* #enable-udxpy-support */}
有効な HTTP/HTTPS サーバー URL を入力してから、UDPXY を有効にしてください。
##### UDPXY server URL {/* #udpxy-server-url */}
UDPXY が無効な間も URL を入力できます。URL を空にできるのは無効な間だけです。空でない URL は、有効な HTTP/HTTPS URL である必要があります。
##### Overwrite stream protocol {/* #overwrite-stream-protocol */}
UDPXY が有効な場合に、ストリームのプロトコルを上書きする設定を選びます。
### Advanced settings {/* #advanced-settings */}
プロファイル固有の互換性設定には、CSS パッチ、エミュレーター検出、背景色、ローカルファイルや AJAX の修正、
外部プレーヤーの戻り・キーイベントなどがあります。Back、Exit、OK のイベント設定は、チャンネルリストに戻るイベントの設定に依存します。
ポータルや外部プレーヤーで必要な場合にのみ変更してください。
