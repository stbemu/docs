---
title: Ligar dispositivos
sidebar_label: Ligar dispositivos
---

# Ligar dispositivos {/* #connecting-devices */}

## Encontrar o StbEmu {/* #discover-stbemu */}

1. Ligue o telemóvel ou tablet e o dispositivo StbEmu à mesma rede local acessível.
2. No StbEmu, abra **Settings > Companion** e ative o serviço. Consulte as [definições de Companion do StbEmu](../settings/companion.md).
3. Abra a página **Devices** do Companion. Os dispositivos verificados aparecem como cartões guardados. Abra o cartão da instalação do StbEmu que pretende gerir.

![Página de dispositivos a pesquisar na rede local](/img/companion/devices-empty.png)

Se nada aparecer, confirme que o acesso do Companion está ativado no StbEmu e que o Android permite o acesso à rede local. Selecione **Retry** ou estabeleça a ligação manualmente.

### Adicionar um endereço manualmente {/* #add-an-address-manually */}

Selecione **Add by IP address**. Introduza o **IPv4 or IPv6 address** e a porta apresentados no StbEmu e selecione **Connect**. Se deixar a porta vazia, é utilizada a **10000**. Introduza um endereço IP, não um URL de um sítio Web nem um nome de anfitrião. A introdução manual não dispensa a verificação nem o emparelhamento. Os dispositivos com um emparelhamento guardado válido podem voltar a ligar-se sem introduzir um novo código.

![Dispositivo guardado à espera de emparelhamento](/img/companion/devices-saved.png)

## Emparelhar um dispositivo {/* #pair-a-device */}

1. Em **Settings > Companion** do StbEmu, inicie o emparelhamento para apresentar um código.
2. Na página de ações do dispositivo no Companion, introduza o código em **Eight-digit pairing code**.
3. Selecione **Pair device** e aguarde por **Connected**.

![Introdução de um código de emparelhamento](/img/companion/pairing.png)

Se o código expirar, apresente um novo no StbEmu. Se as tentativas forem limitadas por frequência, aguarde antes de tentar novamente. O emparelhamento fica guardado para ligações futuras enquanto o StbEmu o continuar a autorizar. Revogar o acesso no StbEmu também impede a utilização da autorização guardada.

## Voltar a ligar, mudar o nome ou remover {/* #reconnect-rename-or-remove */}

**Disconnect** fecha a ligação e mantém o dispositivo guardado. Para voltar a ligar, abra o respetivo cartão e selecione **Connect**. Uma mudança de rede pode interromper as ligações; volte a ligar quando a conectividade local for restabelecida.

Utilize o botão do lápis (**Rename device**) para definir um nome local. **Use app name** repõe o nome comunicado pelo StbEmu. Mudar o nome aqui não muda o nome do próprio StbEmu.

O botão do caixote do lixo (**Remove device**) pede confirmação. Remove a ligação e o emparelhamento guardados deste telemóvel, mantém os ficheiros de cópia de segurança e não altera nada no StbEmu. O dispositivo removido não voltará a aparecer automaticamente através da deteção. Para o adicionar de novo, utilize **Add by IP address** e volte a emparelhar.
