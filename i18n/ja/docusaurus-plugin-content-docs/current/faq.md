---
id: faq
title: よくある質問
sidebar_label: よくある質問
---

import FAQ from '@site/src/components/FAQ';

# よくある質問 {/* #faq */}

<FAQ id="google-play-pay-again" question="Google Play で StbEmu Pro を購入したのにダウンロードできず、再度支払いを求められます">
    これは Google Play の既知の問題です。支払いの処理と端末上のデータの更新には、最大 24 時間かかることがあります。
    パソコンやモバイル端末のブラウザーで [Google Play](https://play.google.com/store) を開き、
    StbEmu Pro を探して（[直接リンク](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro)）、
    お使いの端末にリモートでインストールすることもできます。
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="チャンネルを切り替えると、アプリが音量をリセットします">
    これは一部の Sony、Philips、Xiaomi 製端末で確認されている問題です。他の端末でも発生する可能性があります。

    解決するには、システム共通の音量を使用するようにアプリを設定してください。
    [設定](/settings) > [再生と動作](/settings/common-settings#playback--behavior) を開き、***常にシステムの音量を使用*** を有効にします。
    変更を反映するには、アプリのメニューから現在のポータルを再読み込みしてください。
</FAQ>

<FAQ id="customize-portal-ui" question="ポータルの画面をカスタマイズできますか？色やアイコンを変更したいです">
    ポータルは IPTV プロバイダーのサーバー上で動作しています。画面をカスタマイズできるのは、プロバイダーがその機能を提供している場合だけです。
    ほとんどのポータルは画面のカスタマイズに対応していないため、外観を変更できるのは IPTV プロバイダーだけです。
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="ポータルを再読み込みすると Favorites からチャンネルが消えたり、並べ替えができなかったりします">
    お気に入りを含むすべてのチャンネルリストは、IPTV プロバイダーのサーバーに保存されています。アプリでお気に入りが読み込まれない場合や、
    順番が正しくない場合は、IPTV プロバイダー側でポータルが正しく設定されていません。
    この問題を修正できるのはプロバイダーだけです。
</FAQ>

<FAQ id="channels-buffer" question="再生中に頻繁にバッファリングが発生します">
    バッファリングが頻発する場合、通常はお使いのネットワークか IPTV プロバイダーの接続が不安定、または速度不足のため、
    端末への動画配信に支障が生じています。ご自身の接続に問題がないことを確認できた場合は、IPTV プロバイダーに報告してください。
</FAQ>

<FAQ id="m3u-support" question="M3U プレイリストに対応していますか？">
    StbEmu は M3U などのプレイリストには対応していません。MAG ボックス向けに設計されたポータルにのみ対応しています。
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="アプリでバックアップを作成または復元できません">
    新しい 設定 では [バックアップと復元](/settings/backup-restore) を開き、Android のドキュメント選択画面でファイルまたは保存先を選びます。
    選択画面を利用できない場合は、アクセス可能なバックアップフォルダーとアプリ内ファイルブラウザーが使用されます。
    端末の権限と選択したファイルへのアクセスを確認してください。復元する前にバックアップ名とプロファイル数を確認し、操作を確定してください。
</FAQ>
