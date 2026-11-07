---
title: Gerenciamento de perfis
sidebar_label: Perfis
---

# Gerenciamento de perfis {/* #managing-profiles */}

Abra um dispositivo conectado e selecione **Profiles**. A lista mostra nomes de perfis, identificadores (UUIDs) e endereços de portal disponíveis. Selecione um perfil para consultar suas configurações. Use **Load more** para páginas adicionais e **Refresh** para obter dados atuais. As ações dependem das permissões compatíveis com o dispositivo.

## Criar, editar e excluir {/* #create-edit-and-delete */}

- Selecione **Create profile** na lista. Os campos de criação compatíveis incluem **Name** e **Portal URL**. Os campos não alterados usam os padrões do StbEmu.
- Abra um perfil e selecione **Edit profile** para alterar os campos editáveis compatíveis. Apenas os campos editados mudam; as configurações adicionais mantidas pelo dispositivo são preservadas.
- Selecione **Delete profile** para preparar uma exclusão. Revise qualquer mudança do perfil ativo ou perfil substituto antes de confirmar.

Selecione **Review changes**, confira a prévia e os avisos e selecione **Confirm changes** ou **Confirm deletion**. A primeira ação não salva nem exclui o perfil imediatamente. Mudanças incompatíveis não podem ser confirmadas. Se o perfil ou os campos disponíveis mudarem durante a edição, atualize e revise novamente.

Para entender os campos de perfil do StbEmu, consulte [Perfis STB](../settings/profiles.md).

## Copiar um perfil {/* #copy-a-profile */}

Abra um perfil e selecione **Copy profile**. Escolha **This device** para uma cópia no mesmo dispositivo; depois revise e confirme as mudanças. A cópia tem uma nova identidade; não a identifique apenas pelo nome. **Edit copied profile**, quando disponível após o sucesso, abre a cópia retornada em vez do original.

Escolher outro dispositivo pareado elegível abre o [procedimento do guia de transferência](transferring-profiles.md) com esse perfil selecionado.

## Resultados das operações {/* #operation-results */}

Se a conexão falhar ou o resultado for incerto, abra **Recent operation results** do dispositivo e use **Check result** antes de iniciar outra mudança. A consulta exige uma conexão autorizada e verifica a operação original; não envia a mudança novamente. Isso também se aplica às [transferências](transferring-profiles.md) e [restaurações de backup](backups.md).

Uma prévia expirada exige uma nova revisão explícita. O cancelamento pode ocorrer ao mesmo tempo que o salvamento; leia o resultado final em vez de presumir que **Cancel operation** desfez as mudanças. **Changes saved on the device** confirma os dados salvos; a atualização em execução ainda pode estar pendente. Consultar um resultado não tenta novamente essa atualização, e um perfil copiado excluído nunca é recriado ao consultar seu histórico.
