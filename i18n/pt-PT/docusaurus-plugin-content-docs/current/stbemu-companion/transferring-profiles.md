---
title: Transferir perfis e definições
sidebar_label: Transferências de perfis
---

# Transferir perfis e definições {/* #transferring-profiles-and-settings */}

Utilize uma transferência para copiar conteúdo selecionado diretamente entre duas instalações StbEmu diferentes e emparelhadas. Ambas têm de estar ligadas e suportar as ações de origem e destino escolhidas. Para copiar na mesma instalação, utilize [Copy profile > This device](profiles.md#copy-a-profile).

![Ecrã de transferência à espera de um destino compatível](/img/companion/transfer.png)

## Selecionar e rever {/* #select-and-review */}

1. Abra o dispositivo de origem e selecione **Transfer to another device**.
2. Escolha **Destination device**. Se não houver nenhum disponível, regresse a **Devices**, ligue outro dispositivo emparelhado e tente novamente.
3. Selecione **Application settings and remote mappings**, perfis ou ambos. Para os perfis, escolha **Do not copy profiles**, **All profiles** ou **Choose individual profiles**. É necessário selecionar pelo menos uma categoria.
4. Selecione **Review transfer**. Verifique os novos perfis, alterações de definições, efeitos nas associações do comando, alterações do perfil ativo, exclusões e incompatibilidades.
5. Selecione **I confirm these changes** e depois **Confirm transfer**.

A seleção individual exige uma lista completa e atual dos perfis de origem. Se um perfil selecionado desaparecer, utilize **Refresh** para verificar a lista e desmarque explicitamente os perfis que continuam em falta. A atualização não remove nem substitui silenciosamente os perfis selecionados.

## O que muda {/* #what-changes */}

Os perfis transferidos são cópias novas com novas identidades no destino. Os perfis existentes no destino são mantidos. Os endereços MAC, números de série, identificadores de dispositivo e outros valores dos perfis são preservados, pelo que copiar não cria uma nova subscrição nem autorização do fornecedor. Este procedimento não tem a opção **Merge**/**Replace all**; esses modos pertencem ao [restauro de cópias de segurança](backups.md#restore-a-backup).

As transferências apenas de perfis mantêm as definições da aplicação, as associações do comando e a seleção ativa do destino. As transferências apenas de definições mantêm os perfis e a seleção ativa do destino. Ao copiar ambos, o perfil ativo da origem torna-se ativo através da nova cópia apenas se estiver incluído; caso contrário, é mantida a seleção ativa do destino.

As definições da aplicação incluem preferências portáveis do StbEmu e associações das teclas do comando, não o idioma/tema do Companion, autorizações de emparelhamento, identidade do serviço ou histórico de operações. Os valores não suportados são indicados, em vez de descartados silenciosamente. Reveja as definições relacionadas com palavras-passe e outras definições substituídas antes de confirmar. Algumas definições guardadas exigem uma alteração do ciclo de vida ou reinício do StbEmu; consulte [aplicar definições guardadas](backups.md#results-and-applying-saved-settings).

Depois de o Companion indicar que a captura do estado da origem foi verificada, essa tentativa específica pode continuar se a origem se desligar. A transferência não cria uma entrada permanente na biblioteca de cópias de segurança. Para resultados incertos ou cancelamento, utilize os [resultados das operações](profiles.md#operation-results).
