---
id: backup-restore
title: Cópia de segurança e restauro
sidebar_label: Cópia de segurança e restauro
---

# Cópia de segurança e restauro {/* #backup--restore */}

Abra **Definições > Cópia de segurança e restauro**. Esta categoria está disponível apenas quando as operações de cópia de segurança estão habilitadas para a sua aplicação.

## Guardar ou partilhar uma cópia de segurança {/* #save-or-share-a-backup */}

Selecione **Guardar definições e perfis…** e escolha um destino no seletor de documentos do Android. Selecione **Partilhar definições e perfis…** para criar uma cópia de segurança e enviá-la pela interface de partilha do Android.

Se não houver um seletor de documentos disponível, a aplicação utilizará as pastas de cópia de segurança acessíveis e o seu navegador de ficheiros. **Procurar cópias de segurança guardadas** lista as cópias de segurança encontradas nas pastas disponíveis. As permissões do dispositivo e os fornecedores de ficheiros disponíveis podem limitar os ficheiros a que pode aceder.

## Restaurar uma cópia de segurança {/* #restore-a-backup */}

1. Selecione **Restaurar definições e perfis…** e escolha uma cópia de segurança ou selecione uma no navegador de cópias de segurança guardadas.
2. Verifique o nome do ficheiro, o número de perfis e os efeitos do restauro listados.
3. Confirme o restauro. Cancelar o seletor ou negar a permissão não inicia o restauro.

O restauro atualiza os perfis correspondentes, restaura as definições da aplicação e substitui os mapeamentos de teclas dos comandos. A identidade do serviço Companion, as credenciais, os registos de dispositivos revogados e o histórico de operações não são incluídos nas cópias de segurança portáteis.

:::warning
O restauro aplica as alterações em várias etapas. Se uma etapa posterior falhar, alterações anteriores já podem ter sido guardadas. Recarregue as definições e reveja a configuração atual após uma falha. Este fluxo de restauro local não oferece reversão do restauro completo nem um modo selecionável de combinação/substituição.
:::
