---
title: Cópia de segurança do sistema Android
sidebar_label: Cópia de segurança do sistema Android
---

# Cópia de segurança do sistema Android {/* #android-system-backup */}

Abra **Settings > Backups > System backup**. Após um restauro bem-sucedido do Android, a cópia de segurança do sistema pode restaurar preferências do Companion, dispositivos e nomes guardados, confiança verificada e credenciais de emparelhamento ainda válidas. É independente do restauro de uma [cópia JSON do StbEmu](backups.md) para um dispositivo emparelhado.

## Incluir arquivos locais {/* #include-local-archives */}

**Include local archives** está ativado por predefinição. Inclui as cópias completas elegíveis do StbEmu da biblioteca local em futuras cópias de segurança do sistema. Desativá-lo mantém os ficheiros locais e as definições/dispositivos do Companion, mas exclui os arquivos das futuras cópias. Não elimina conteúdo mais antigo na nuvem.

A página apresenta uma estimativa do tamanho selecionado. Utilize **Refresh estimate** para medir novamente, **Open Android settings** para verificar a configuração de cópia de segurança do Android ou **Open archive library / manual export** para exportar os ficheiros manualmente.

## Disponibilidade e limites {/* #availability-and-limits */}

A cópia de segurança do sistema requer **Android 9 ou posterior**, embora o Companion suporte Android 8. A cópia de segurança cifrada na nuvem também exige uma conta suportada, bloqueio de ecrã seguro e cifragem do lado do cliente do Android. O Android controla o agendamento, a elegibilidade do mecanismo de transporte e a disponibilidade do restauro.

A quota nominal na nuvem é de **25 MiB**; a quota efetivamente disponível pode ser inferior. O limite de **256 MiB** entre dispositivos é um limite da aplicação, não uma garantia da capacidade de transporte. Se a seleção completa for demasiado grande, exclua os arquivos locais ou exporte-os manualmente. O Companion não faz silenciosamente uma cópia de apenas parte da seleção.

Uma estimativa ou uma mensagem de preparação local não confirma que o Android guardou uma cópia na nuvem. Uma estimativa indisponível não corresponde a uma cópia de tamanho zero. Se a página indicar que a cópia de segurança está desativada ou não é suportada, utilize a exportação manual dos arquivos em vez de presumir que os dados estão protegidos.

## Depois de o Android restaurar o Companion {/* #after-android-restores-companion */}

Os dispositivos restaurados têm de ser verificados antes de aparecerem como ligados. As credenciais de emparelhamento ainda autorizadas permitem voltar a ligar sem novo emparelhamento, mas o restauro não anula uma revogação no StbEmu. As cópias restauradas partilham as mesmas autorizações; revogar uma autorização afeta também essas cópias.

A biblioteca lista os ficheiros de arquivo completos que foram efetivamente restaurados. Os metadados, por si só, não recriam ficheiros em falta. Uma operação inacabada não é automaticamente reenviada; volte a ligar e consulte os [resultados das operações](profiles.md#operation-results) quando disponíveis.
