---
title: Backups e restauração
sidebar_label: Backups e restauração
---

# Backups e restauração {/* #backups-and-restore */}

A biblioteca **Backups** do Companion armazena de forma privada backups JSON concluídos do StbEmu no celular ou tablet. Os arquivos salvos continuam disponíveis offline. Essa biblioteca é separada do [backup do sistema Android](system-backup.md), que protege o próprio estado do Companion.

![Biblioteca de backups e criação de backup de dispositivo](/img/companion/backup-library.png)

## Salvar e gerenciar arquivos {/* #save-and-manage-files */}

- **Create backup:** abra a ação **Create backup** de um dispositivo pareado conectado, informe **Backup name** e selecione **Create backup**. Aguarde **Backup saved**.
- **Import backup:** abra **Backups** no menu do aplicativo, selecione **Import backup** e escolha um arquivo JSON do StbEmu. Não é necessário um dispositivo StbEmu conectado para importar, exportar ou compartilhar localmente.
- **Export JSON:** selecione essa ação na entrada do backup na biblioteca e escolha um destino externo.
- **Share JSON:** selecione essa ação na entrada do backup para abrir o painel de compartilhamento do Android. Abri-lo não confirma a entrega ao aplicativo selecionado.
- **Delete local backup:** confirme a exclusão dessa cópia local. O dispositivo StbEmu de origem não muda.

O limite de JSON é **16 MiB (16,777,216 bytes)**. Arquivos importados são validados e mantêm seus bytes originais. Um arquivo importado recebe o rótulo **Source device unknown**; uma verificação de integridade não identifica quem o criou. Uma exportação externa com falha pode deixar um arquivo de destino incompleto, enquanto os backups locais existentes são preservados.

:::note
Arquivos de backup podem conter senhas, dados de portais e identificadores de dispositivos. Exportar e compartilhar preservam esses valores; escolha o destino ou destinatário de acordo.
:::

## Restaurar um backup {/* #restore-a-backup */}

1. Selecione **Restore backup** em uma entrada da biblioteca ou na página de ações de um dispositivo.
2. Escolha **Destination device**, **Backup to restore** e um **Restore mode** compatível.
3. Selecione **Review restore**. Confira perfis adicionados, sobrescritos e removidos; **Changed settings**; mapeamentos do controle; metadados locais excluídos; e campos incompatíveis ou bloqueados.
4. Marque a caixa de confirmação e selecione **Apply restore**.

![Tela de restauração mostrando o comportamento de Merge](/img/companion/restore.png)

**Merge** sobrescreve perfis com UUIDs correspondentes, adiciona perfis novos e mantém os perfis que existem apenas no destino. **Replace all** também remove os perfis do destino ausentes no backup. A correspondência usa identificadores, não nomes de perfis. Os dois modos restauram configurações portáteis do aplicativo e mapeamentos do controle. Metadados locais do destino, como IDs locais de linha, versão do aplicativo e diretório de atualização, são excluídos.

:::warning
Revise cada sobrescrita e remoção antes de aplicar. Replace all substitui o conjunto de perfis; não é uma forma de adicionar apenas perfis selecionados. Para cópias seletivas, use [transferências de perfis](transferring-profiles.md).
:::

## Resultados e aplicação das configurações salvas {/* #results-and-applying-saved-settings */}

Uma prévia expirada exige **Start a new attempt** e uma nova revisão. Se o resultado for incerto, confira os [resultados das operações](profiles.md#operation-results) antes de repetir a restauração. A recuperação pode consultar o destino mesmo que o backup original não esteja mais disponível.

As configurações salvas e seus efeitos em execução são separados. Se alteradas, as configurações do controle virtual entram em vigor na próxima pausa/retomada normal do StbEmu, o tamanho do cache exige reiniciar o processo do StbEmu e o idioma pode recriar sua atividade. A opção de compatibilidade UPnP não ativa nem desativa o funcionamento atual de UPnP, mesmo após reiniciar. **Check result** não tenta novamente essas atualizações em execução.
