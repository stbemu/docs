---
title: Controle remoto
sidebar_label: Controle remoto
---

# Controle remoto {/* #remote-control */}

Abra um dispositivo conectado e selecione **Remote control**. A ação só aparece quando o dispositivo oferece suporte à entrada remota autorizada. Esses controles operam o StbEmu e seu portal; são separados do antigo serviço de controle MAG descrito em [Controle remoto legado](../settings/common_settings.md#legacy-remote).

![Controle remoto rolável com teclas coloridas e direcional](/img/companion/remote-control.png)

Toque em um botão para executar sua ação normal. Mantenha-o pressionado para uma ação longa ou pressões repetidas, quando houver suporte. Solte para parar de segurar. Os botões disponíveis e o comportamento ao segurar dependem do dispositivo; nem toda tecla permite repetição. Role para acessar os demais controles, incluindo reprodução, volume, canal e teclas numéricas.

Apenas um gesto de tecla fica ativo por vez. Sair da página do controle ou do aplicativo, perder a conexão ou perder a autorização cancela a entrada ativa. A entrada remota não é repetida após a reconexão: reconecte e pressione novamente de forma deliberada.

## Interpretar as indicações {/* #read-the-feedback */}

A resposta local ao tocar ou segurar significa que o Companion reconheceu seu gesto. **Awaiting device confirmation** significa que o resultado ainda está pendente. **Device accepted input** confirma que o StbEmu aceitou a entrada, não que uma ação de canal ou portal necessariamente terminou.

Para **Input target unavailable**, verifique a conexão. Para **Authorization expired. Pair again.**, exiba um novo código no StbEmu e informe-o no Companion. Se uma ação não for mais compatível, pare de usá-la e verifique os controles disponíveis. Reconecte se a entrada continuar indisponível.

Altere a vibração do controle em **Settings > Interface > Remote control haptic feedback**. Ela é independente de **UI haptic feedback**; as indicações visuais continuam disponíveis com a vibração desativada.
