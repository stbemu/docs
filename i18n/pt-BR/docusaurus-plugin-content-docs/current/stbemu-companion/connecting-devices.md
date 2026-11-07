---
title: Conexão de dispositivos
sidebar_label: Conexão de dispositivos
---

# Conexão de dispositivos {/* #connecting-devices */}

## Encontrar o StbEmu {/* #discover-stbemu */}

1. Conecte seu celular ou tablet e o dispositivo StbEmu à mesma rede local acessível.
2. No StbEmu, abra **Settings > Companion** e ative o serviço. Consulte as [configurações do Companion no StbEmu](../settings/companion.md).
3. Abra a página **Devices** do Companion. Os dispositivos verificados aparecem como cartões salvos. Abra o cartão da instalação do StbEmu que deseja gerenciar.

![Página de dispositivos pesquisando na rede local](/img/companion/devices-empty.png)

Se nada aparecer, verifique se o acesso do Companion está ativado no StbEmu e se o Android permite acesso à rede local. Selecione **Retry** ou conecte manualmente.

### Adicionar um endereço manualmente {/* #add-an-address-manually */}

Selecione **Add by IP address**. Informe **IPv4 or IPv6 address** e a porta exibidos no StbEmu e selecione **Connect**. Uma porta vazia usa **10000**. Informe um endereço IP, não uma URL de site nem um nome de host. A entrada manual não ignora a verificação nem o pareamento. Dispositivos com pareamento salvo válido podem se reconectar sem informar um novo código.

![Dispositivo salvo aguardando pareamento](/img/companion/devices-saved.png)

## Parear um dispositivo {/* #pair-a-device */}

1. Em **Settings > Companion** no StbEmu, inicie o pareamento para exibir um código.
2. Na página de ações do dispositivo no Companion, informe o código em **Eight-digit pairing code**.
3. Selecione **Pair device** e aguarde **Connected**.

![Digitação de um código de pareamento](/img/companion/pairing.png)

Se o código expirar, exiba um novo no StbEmu. Se houver limitação de tentativas, aguarde antes de tentar novamente. O pareamento fica salvo para conexões posteriores enquanto o StbEmu continuar autorizando-o. Revogar o acesso no StbEmu também impede o uso da autorização salva.

## Reconectar, renomear ou remover {/* #reconnect-rename-or-remove */}

**Disconnect** encerra a conexão e mantém o dispositivo salvo. Para reconectar, abra seu cartão e selecione **Connect**. Uma mudança de rede pode interromper as conexões; reconecte quando a conectividade local voltar.

Use o botão de lápis (**Rename device**) para definir um nome local. **Use app name** restaura o nome informado pelo StbEmu. Renomear aqui não renomeia o próprio StbEmu.

O botão de lixeira (**Remove device**) solicita confirmação. Ele remove a conexão e o pareamento salvos deste celular, mantém os arquivos de backup e não altera nada no StbEmu. O dispositivo removido não reaparecerá automaticamente pela descoberta. Para adicioná-lo novamente, use **Add by IP address** e faça o pareamento de novo.
