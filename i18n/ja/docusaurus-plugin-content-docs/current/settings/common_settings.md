---
id: common-settings
title: アプリの設定
sidebar_label: アプリの設定
---

# アプリの設定 {/* #application-settings */}

アプリ全体の設定は、[Settings](/settings) の以下のカテゴリに分類されています。プロファイル固有の設定は [Profiles](/settings/profiles) にあります。

## Appearance & controls {/* #appearance--controls */}

| 設定項目 | 用途 |
|--------|---------|
| App language | 対応言語または Android のシステム既定の言語を使用します。 |
| Hide navigation bar | 対応端末で Android のナビゲーションボタンを非表示にします。タッチ画面では、最初のタップでナビゲーションが表示され、アプリの操作ボタンを表示するためにもう一度タップが必要になる場合があります。 |
| Always show overlay buttons | 画面上の操作ボタンを表示します。TV ボックスでリモコンのキーを押した際に不要なボタンが表示される場合は、無効にできます。 |
| Hide controls after… (ms) | 画面上の操作ボタンが消えるまでの時間をミリ秒で設定します。既定値：5000（5 秒）。 |
| Screen orientation | アプリの画面の向きの動作を選びます。 |
| Keyboard type | アプリで使用するキーボードを選びます。 |
| Software keyboard input method | ソフトウェアキーボードでの入力処理方法を選びます。 |

## Playback & behavior {/* #playback--behavior */}

| 設定項目 | 用途 |
|--------|---------|
| Pause media in background | 別のアプリに切り替えたときに再生を一時停止します。自動ピクチャーインピクチャーが有効な間は、この項目を操作できません。 |
| Picture-in-picture | Android と端末が対応している場合に、アプリを離れるとピクチャーインピクチャーを使用します。 |
| Auto start on device boot | 端末の起動後にアプリを起動します。アプリは内部ストレージにインストールされている必要があります。ロック画面がある端末では、解除されるまで起動が遅れる場合があります。 |
| Always use system volume level | アプリ独自の音量ではなく、システムの音量を使用します。 |
| Enable recommendations | 対応する Android TV のホーム画面に、プロファイルのおすすめカードを表示します。 |
| Media sessions | Android のメディアセッション連携を有効にします。 |

## Network {/* #network */}

**Scaling method** は、ポータルが大きすぎる、または小さすぎる場合にブラウザーの拡大縮小方法を変更します。ほとんどの端末では既定値のままで使用できますが、低解像度の画面では別の方法が必要になる場合があります。

**Enable network cache** は、ネットワークリクエストをキャッシュしてポータルの読み込みを改善します。認証などのネットワークの問題が繰り返し発生する場合は無効にしてください。

**Cache size** は KB 単位で入力します。既定値は **20480 KB (20 MB)** です。キャッシュサイズの変更を適用するために再起動を求められたら、アプリを再起動してください。

## Security {/* #security */}

設定のパスワード保護を有効にし、パスワードを設定します。保護された設定には認証が必要です。画面が再作成されるとパスワード入力欄の内容は保持されないため、必要に応じて再入力してください。

## Legacy remote {/* #legacy-remote */}

このカテゴリでは、MAG 250、AuraHD などの古いリモコンアプリ向けソフトウェアリモコンサービスを設定します。[Companion](/settings/companion) や[物理キーの割り当て](/settings/key-maps)とは別の機能です。

サービスを有効にし、端末名とパスワードを設定します。端末名とパスワードは、それぞれ最大 32 文字です。このカテゴリは、当該機能を有効にしたアプリのエディションでのみ利用できます。
