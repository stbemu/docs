---
title: Comando à distância
sidebar_label: Comando à distância
---

# Comando à distância {/* #remote-control */}

Abra um dispositivo ligado e selecione **Remote control**. A ação só aparece quando o dispositivo suporta comandos remotos autorizados. Estes controlos comandam o StbEmu e o seu portal; são independentes do serviço antigo de comando MAG descrito em [comando antigo](../settings/common_settings.md#legacy-remote).

![Comando com deslocamento, teclas coloridas e direcional](/img/companion/remote-control.png)

Toque num botão para executar a ação normal. Mantenha-o premido para uma ação prolongada ou pressões repetidas, quando suportadas. Solte para deixar de o manter premido. Os botões disponíveis e o comportamento da pressão prolongada dependem do dispositivo; nem todas as teclas suportam repetição. Desloque a página para chegar aos restantes controlos, incluindo reprodução, volume, canais e teclas numéricas.

Só pode estar ativo um gesto de tecla de cada vez. Sair da página do comando ou da aplicação, perder a ligação ou perder a autorização cancela o comando ativo. Os comandos remotos não são repetidos após voltar a ligar: volte a ligar e prima novamente de forma deliberada.

## Interpretar a resposta {/* #read-the-feedback */}

A resposta local à pressão normal ou prolongada significa que o Companion reconheceu o gesto. **Awaiting device confirmation** significa que o resultado ainda está pendente. **Device accepted input** confirma que o StbEmu aceitou o comando, não que uma ação de canal ou portal tenha necessariamente terminado.

Perante **Input target unavailable**, verifique a ligação. Perante **Authorization expired. Pair again.**, apresente um novo código no StbEmu e introduza-o no Companion. Se uma ação deixar de ser suportada, pare de a utilizar e verifique os controlos disponíveis. Volte a ligar se os comandos continuarem indisponíveis.

Altere a vibração do comando em **Settings > Interface > Remote control haptic feedback**. Esta é independente de **UI haptic feedback**; a resposta visual continua disponível com a vibração desligada.
