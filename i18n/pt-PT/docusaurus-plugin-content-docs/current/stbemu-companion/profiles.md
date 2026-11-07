---
title: Gerir perfis
sidebar_label: Perfis
---

# Gerir perfis {/* #managing-profiles */}

Abra um dispositivo ligado e selecione **Profiles**. A lista apresenta nomes de perfis, identificadores (UUID) e endereços de portais disponíveis. Selecione um perfil para consultar as suas definições. Utilize **Load more** para páginas adicionais e **Refresh** para dados atuais. As ações dependem das permissões suportadas pelo dispositivo.

## Criar, editar e eliminar {/* #create-edit-and-delete */}

- Selecione **Create profile** na lista. Os campos de criação suportados incluem **Name** e **Portal URL**. Os campos não alterados usam os valores predefinidos do StbEmu.
- Abra um perfil e selecione **Edit profile** para alterar os campos editáveis suportados. Só mudam os campos editados; são mantidas as definições adicionais conservadas pelo dispositivo.
- Selecione **Delete profile** para preparar uma eliminação. Reveja qualquer alteração do perfil ativo ou perfil de substituição antes de confirmar.

Selecione **Review changes**, verifique a pré-visualização e os avisos e depois selecione **Confirm changes** ou **Confirm deletion**. A primeira ação não guarda nem elimina imediatamente o perfil. As alterações incompatíveis não podem ser confirmadas. Se o perfil ou os campos disponíveis mudarem durante a edição, atualize e reveja novamente.

Para saber o significado dos campos de perfil do StbEmu, consulte [perfis STB](../settings/profiles.md).

## Copiar um perfil {/* #copy-a-profile */}

Abra um perfil e selecione **Copy profile**. Escolha **This device** para uma cópia no mesmo dispositivo, depois reveja e confirme as alterações. A cópia tem uma nova identidade; não a identifique apenas pelo nome. **Edit copied profile**, quando disponível após o sucesso, abre a cópia devolvida, em vez do original.

Escolher outro dispositivo emparelhado elegível abre o [procedimento do guia de transferência](transferring-profiles.md) com esse perfil selecionado.

## Resultados das operações {/* #operation-results */}

Se a ligação falhar ou o resultado for incerto, abra **Recent operation results** do dispositivo e utilize **Check result** antes de iniciar outra alteração. A verificação exige uma ligação autorizada e consulta a operação original; não envia novamente a alteração. Isto também se aplica a [transferências](transferring-profiles.md) e [restauros de cópias de segurança](backups.md).

Uma pré-visualização expirada exige uma nova revisão explícita. O cancelamento pode coincidir com a gravação, por isso leia o resultado final em vez de presumir que **Cancel operation** anulou as alterações. **Changes saved on the device** confirma que os dados foram guardados; a atualização em execução pode ainda estar pendente. Verificar um resultado não volta a tentar essa atualização, e uma cópia de perfil eliminada nunca é recriada pela consulta do seu histórico.
