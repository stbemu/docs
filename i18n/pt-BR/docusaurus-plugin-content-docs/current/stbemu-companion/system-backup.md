---
title: Backup do sistema Android
sidebar_label: Backup do sistema Android
---

# Backup do sistema Android {/* #android-system-backup */}

Abra **Settings > Backups > System backup**. O backup do sistema Android pode restaurar preferências do Companion, dispositivos e nomes salvos, confiança verificada e credenciais de pareamento ainda válidas após uma restauração bem-sucedida do Android. Ele é separado da restauração de um [backup JSON do StbEmu](backups.md) em um dispositivo pareado.

## Incluir arquivos locais {/* #include-local-archives */}

**Include local archives** é ativado por padrão. Ele inclui backups concluídos elegíveis do StbEmu da biblioteca local nos próximos backups do sistema. Desativá-lo mantém os arquivos locais e as configurações/dispositivos do Companion, mas exclui os arquivos dos próximos backups. Isso não exclui conteúdo antigo da nuvem.

A página mostra uma estimativa do tamanho selecionado. Use **Refresh estimate** para medir novamente, **Open Android settings** para verificar a configuração de backup do Android ou **Open archive library / manual export** para exportar os arquivos por conta própria.

## Disponibilidade e limites {/* #availability-and-limits */}

O backup do sistema exige **Android 9 ou posterior**, embora o próprio Companion ofereça suporte ao Android 8. O backup criptografado na nuvem também exige uma conta compatível, bloqueio de tela seguro e criptografia do lado do cliente do Android. O Android controla o agendamento, a elegibilidade do transporte e a disponibilidade de restauração.

A cota nominal na nuvem é **25 MiB**; a cota real disponível pode ser menor. O limite de **256 MiB** entre dispositivos é um limite do aplicativo, não uma garantia de capacidade do transporte. Se toda a seleção for grande demais, exclua os arquivos locais da seleção ou exporte-os manualmente. O Companion não faz backup silenciosamente de apenas parte da seleção.

Uma estimativa ou mensagem de preparação local não confirma que o Android armazenou um backup na nuvem. Uma estimativa indisponível não é um backup de tamanho zero. Se a página informar que o backup está desativado ou não é compatível, exporte os arquivos manualmente em vez de presumir que os dados estão protegidos.

## Depois que o Android restaurar o Companion {/* #after-android-restores-companion */}

Os dispositivos restaurados precisam ser verificados antes de aparecerem como conectados. Credenciais de pareamento ainda autorizadas podem reconectar sem novo pareamento, mas restaurar não desfaz uma revogação no StbEmu. Cópias restauradas compartilham as mesmas autorizações; revogar uma autorização também afeta essas cópias.

A biblioteca lista arquivos concluídos que foram realmente restaurados. Metadados sozinhos não recriam arquivos ausentes. Uma operação inacabada não é enviada novamente de forma automática; reconecte e confira os [resultados das operações](profiles.md#operation-results) quando disponíveis.
