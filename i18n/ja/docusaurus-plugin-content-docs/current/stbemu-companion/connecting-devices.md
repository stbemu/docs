---
title: "デバイスの接続"
sidebar_label: "デバイスの接続"
---

# デバイスの接続 {/* #connecting-devices */}

## StbEmu の検出 {/* #discover-stbemu */}

1. スマートフォンまたはタブレットと StbEmu デバイスを、相互に通信できる同じローカルネットワークに接続します。
2. StbEmu で **Settings > Companion** を開き、サービスを有効にします。[StbEmu の Companion 設定](../settings/companion.md)を参照してください。
3. Companion の **Devices** ページを開きます。検証済みのデバイスは保存済みカードとして表示されます。管理する StbEmu インストールのカードを開いてください。

![ローカルネットワークを検索しているデバイスページ](/img/companion/devices-empty.png)

何も表示されない場合は、StbEmu で Companion のアクセスが有効になっていることと、Android がローカルネットワークへのアクセスを許可していることを確認してください。**Retry** を選ぶか、手動で接続します。

### アドレスを手動で追加する {/* #add-an-address-manually */}

**Add by IP address** を選びます。StbEmu に表示されている **IPv4 or IPv6 address** とポートを入力し、**Connect** を選びます。ポートが空欄の場合は **10000** が使われます。ウェブサイトの URL やホスト名ではなく、IP アドレスを入力してください。手動入力でも、検証やペアリングは省略されません。有効なペアリングが保存されているデバイスは、新しいコードを入力せずに再接続できます。

![ペアリング待ちの保存済みデバイス](/img/companion/devices-saved.png)

## デバイスをペアリングする {/* #pair-a-device */}

1. StbEmu の **Settings > Companion** でペアリングを開始し、コードを表示します。
2. Companion のデバイス操作ページで、**Eight-digit pairing code** にコードを入力します。
3. **Pair device** を選び、**Connected** になるまで待ちます。

![ペアリングコードの入力](/img/companion/pairing.png)

コードの有効期限が切れた場合は、StbEmu で新しいコードを表示してください。試行回数の制限がかかった場合は、しばらく待ってから再試行します。StbEmu が許可し続けている間は、ペアリング情報が次回以降の接続用に保存されます。StbEmu でアクセスを取り消すと、保存済みの許可も使えなくなります。

## 再接続、名前の変更、削除 {/* #reconnect-rename-or-remove */}

**Disconnect** は接続を閉じ、保存済みデバイスを残します。再接続するには、そのカードを開いて **Connect** を選びます。ネットワークが変わると接続が切れることがあります。ローカル接続が回復してから再接続してください。

鉛筆ボタン（**Rename device**）で、この端末内で使う名前を設定します。**Use app name** は StbEmu が通知する名前に戻します。ここで名前を変更しても、StbEmu 自体の名前は変わりません。

ごみ箱ボタン（**Remove device**）では確認を求められます。このスマートフォンから保存済みの接続とペアリングが削除され、バックアップファイルは残ります。StbEmu 側には変更を加えません。削除したデバイスは自動検出では再表示されません。再度追加するには、**Add by IP address** を使い、もう一度ペアリングしてください。
