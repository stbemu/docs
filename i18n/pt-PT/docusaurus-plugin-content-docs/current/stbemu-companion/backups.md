---
title: Cópias de segurança e restauro
sidebar_label: Cópias de segurança e restauro
---

# Cópias de segurança e restauro {/* #backups-and-restore */}

A biblioteca **Backups** do Companion guarda cópias de segurança JSON completas do StbEmu de forma privada no telemóvel ou tablet. Os ficheiros guardados continuam disponíveis sem ligação à rede. Esta biblioteca é independente da [cópia de segurança do sistema Android](system-backup.md), que protege o estado do próprio Companion.

![Biblioteca de cópias de segurança e criação de uma cópia do dispositivo](/img/companion/backup-library.png)

## Guardar e gerir ficheiros {/* #save-and-manage-files */}

- **Create backup:** abra a ação **Create backup** de um dispositivo emparelhado e ligado, introduza um **Backup name** e selecione **Create backup**. Aguarde por **Backup saved**.
- **Import backup:** abra **Backups** no menu da aplicação, selecione **Import backup** e escolha um ficheiro JSON do StbEmu. A importação, exportação e partilha locais não exigem um dispositivo StbEmu ligado.
- **Export JSON:** selecione esta ação na entrada da cópia na biblioteca e escolha um destino externo.
- **Share JSON:** selecione esta ação na entrada da cópia para abrir o painel de partilha do Android. A sua abertura não confirma a entrega à aplicação selecionada.
- **Delete local backup:** confirme a eliminação dessa cópia local. O dispositivo StbEmu de origem permanece inalterado.

O limite JSON é de **16 MiB (16,777,216 bytes)**. Os ficheiros importados são validados e mantêm os bytes originais. Um ficheiro importado recebe a indicação **Source device unknown**; uma verificação de integridade não estabelece quem o criou. Uma exportação externa falhada pode deixar um ficheiro de destino incompleto, preservando as cópias locais existentes.

:::note
Os ficheiros de cópia de segurança podem conter palavras-passe, dados de portais e identificadores de dispositivos. A exportação e a partilha preservam estes valores; escolha o destino ou destinatário em conformidade.
:::

## Restaurar uma cópia de segurança {/* #restore-a-backup */}

1. Selecione **Restore backup** numa entrada da biblioteca ou na página de ações de um dispositivo.
2. Escolha **Destination device**, **Backup to restore** e um **Restore mode** suportado.
3. Selecione **Review restore**. Verifique os perfis adicionados, substituídos e removidos, **Changed settings**, associações do comando, metadados locais excluídos e campos incompatíveis ou bloqueados.
4. Marque a caixa de confirmação e selecione **Apply restore**.

![Ecrã de restauro que mostra o comportamento de Merge](/img/companion/restore.png)

**Merge** substitui perfis com UUID coincidentes, adiciona novos perfis e mantém os que existem apenas no destino. **Replace all** também remove perfis do destino ausentes da cópia. A correspondência utiliza identificadores, não nomes de perfis. Ambos os modos restauram definições portáveis da aplicação e associações do comando. São excluídos metadados locais do destino, como identificadores locais de linhas, versão da aplicação e diretório de atualizações.

:::warning
Reveja cada substituição e remoção antes de aplicar. Replace all substitui o conjunto de perfis; não serve para adicionar apenas perfis selecionados. Para cópias seletivas, utilize [transferências de perfis](transferring-profiles.md).
:::

## Resultados e aplicação de definições guardadas {/* #results-and-applying-saved-settings */}

Uma pré-visualização expirada exige **Start a new attempt** e uma nova revisão. Perante um resultado incerto, consulte os [resultados das operações](profiles.md#operation-results) antes de repetir um restauro. A recuperação pode consultar o destino mesmo que a cópia original já não esteja disponível.

As definições guardadas e os efeitos em execução são distintos. Quando alteradas, as definições do comando virtual produzem efeito na próxima pausa/retoma normal do StbEmu, o tamanho da cache exige reiniciar o processo do StbEmu e o idioma pode recriar a respetiva atividade. A opção de compatibilidade UPnP não altera o funcionamento atual do UPnP, mesmo após um reinício. **Check result** não volta a tentar estas atualizações em execução.
