---
id: common-settings
title: 共通設定
sidebar_label: 共通設定
---

# Common settings {/* #common-settings */}

これらの設定は、アプリのバージョン 0.8 以降に適用されます。

- [Settings](#settings)
    - [App Language](#app-language)
    - [Hide navigation bar](#hide-navigation-bar)
    - [Always show overlay buttons](#always-show-overlay-buttons)
    - [Screen configuration](#screen-configuration)
    - [Keyboard configuration](#keyboard-configuration)
- [Boot options](#boot-options)
    - [Auto start on device boot](#auto-start-on-device-boot)
- [Android TV](#android-tv)
    - [Enable recommendations](#enable-recommendations)
- [Browser settings](#browser-settings)
    - [Scaling method](#scaling-method)
- [Network settings](#network-settings)
    - [Enable network cache](#enable-network-cache)
    - [Cache size](#cache-size)

### Settings {/* #settings */}
#### App Language {/* #app-language */}
アプリの言語を変更します。既定では、対応している場合は Android のシステム言語を使用します。

#### Hide navigation bar {/* #hide-navigation-bar */}
ナビゲーションバーとそのボタンを非表示にします（一部の端末では機能しない場合があります）。この設定が有効で、
タッチ画面を使用している場合、非表示の画面上のボタンを表示するために 2 回タップする必要がある場合があります。
最初のタップではナビゲーションバーが表示されます。これは Android の制限です。

#### Always show overlay buttons {/* #always-show-overlay-buttons */}
画面上のボタンを表示します。通常は有効のままにしてください。STB でリモコンのキーを押すたびにボタンが
表示される場合は、無効にできます。

#### Screen configuration {/* #screen-configuration */}
端末の向きが変わったときに画面を回転させるかどうかを設定します。

#### Keyboard configuration {/* #keyboard-configuration */}
リモコンの設定です（無料版では利用できません）。

MAG 250、AuraHD などの端末用ソフトウェアリモコンでポータルを操作するための、リモコンサーバーを設定します。

#### Boot options {/* #boot-options */}
##### Auto start on device boot {/* #auto-start-on-device-boot */}

端末の起動時にアプリを起動します。アプリが内部ストレージにインストールされている場合にのみ動作します。
スマートフォンやタブレットなどでロック画面が有効な場合、ロックを解除するとアプリが起動します。

#### Stop in the background {/* #stop-in-the-background */}
別のアプリに切り替えたときに一時停止します。

#### Android TV {/* #android-tv */}
Android TV 固有の設定です。

##### Enable recommendations {/* #enable-recommendations */}

Android のホーム画面におすすめカードを表示します。設定済みの各プロファイルのカードが表示され、
すばやくアクセスできます。

#### Browser settings {/* #browser-settings */}
ブラウザーの設定です。

##### Scaling method {/* #scaling-method */}
ポータルが大きすぎる、または小さすぎる場合は、別のブラウザー拡大縮小方法を選んでください。
ほとんどの端末では変更不要です。ただし、画面の解像度がポータルの解像度よりも低い端末は例外です。
ポータルの解像度は通常 1280x720 です。

#### Network settings {/* #network-settings */}
ネットワークの設定です。

##### Enable network cache {/* #enable-network-cache */}
ネットワークリクエストをキャッシュし、多くの場合にポータルの読み込みを高速化します。認証エラーやその他の
ネットワークの問題が頻発する場合は、無効にしてください。

##### Cache size {/* #cache-size */}
ネットワークキャッシュのサイズです。既定値：20 MB。
