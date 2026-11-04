---
id: backup-restore
title: Backup e restauração
sidebar_label: Backup e restauração
---

# Backup e restauração {/* #backup--restore */}

Abra **Configurações > Backup e restauração**. Esta categoria está disponível apenas quando as operações de backup estão habilitadas para seu aplicativo.

## Salvar ou compartilhar um backup {/* #save-or-share-a-backup */}

Selecione **Salvar configurações e perfis…** e escolha um destino no seletor de documentos do Android. Selecione **Compartilhar configurações e perfis…** para criar um backup e enviá-lo pela interface de compartilhamento do Android.

Se não houver um seletor de documentos disponível, o aplicativo usará as pastas de backup acessíveis e seu navegador de arquivos. **Procurar backups salvos** lista os backups encontrados nas pastas disponíveis. As permissões do dispositivo e os provedores de arquivos disponíveis podem limitar os arquivos que você pode acessar.

## Restaurar um backup {/* #restore-a-backup */}

1. Selecione **Restaurar configurações e perfis…** e escolha um backup ou selecione um no navegador de backups salvos.
2. Confira o nome do arquivo, a quantidade de perfis e os efeitos da restauração listados.
3. Confirme a restauração. Cancelar o seletor ou negar a permissão não inicia a restauração.

A restauração atualiza os perfis correspondentes, restaura as configurações do aplicativo e substitui os mapeamentos de teclas dos controles remotos. A identidade do serviço Companion, as credenciais, os registros de dispositivos revogados e o histórico de operações não são incluídos nos backups portáteis.

:::warning
A restauração aplica as alterações em várias etapas. Se uma etapa posterior falhar, alterações anteriores já podem ter sido salvas. Recarregue as configurações e revise a configuração atual após uma falha. Este fluxo de restauração local não oferece reversão da restauração inteira nem um modo selecionável de mesclagem/substituição.
:::
