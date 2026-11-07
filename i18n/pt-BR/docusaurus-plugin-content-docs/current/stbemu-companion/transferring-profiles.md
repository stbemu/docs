---
title: Transferência de perfis e configurações
sidebar_label: Transferências de perfis
---

# Transferência de perfis e configurações {/* #transferring-profiles-and-settings */}

Use uma transferência para copiar conteúdo selecionado diretamente entre duas instalações diferentes do StbEmu pareadas. Ambas precisam estar conectadas e oferecer suporte às ações de origem e destino escolhidas. Para copiar na mesma instalação, use [Copy profile > This device](profiles.md#copy-a-profile).

![Tela de transferência aguardando um destino compatível](/img/companion/transfer.png)

## Selecionar e revisar {/* #select-and-review */}

1. Abra o dispositivo de origem e selecione **Transfer to another device**.
2. Escolha **Destination device**. Se nenhum estiver disponível, volte a **Devices**, conecte outro dispositivo pareado e tente novamente.
3. Selecione **Application settings and remote mappings**, perfis ou ambos. Para perfis, escolha **Do not copy profiles**, **All profiles** ou **Choose individual profiles**. Pelo menos uma categoria deve ser selecionada.
4. Selecione **Review transfer**. Confira perfis novos, mudanças de configurações, efeitos dos mapeamentos do controle, mudanças do perfil ativo, exclusões e incompatibilidades.
5. Selecione **I confirm these changes** e depois **Confirm transfer**.

A seleção individual exige uma lista completa e atual dos perfis de origem. Se um perfil selecionado desaparecer, use **Refresh** para verificar a lista e desmarque explicitamente os perfis que continuarem ausentes. Atualizar não remove nem substitui silenciosamente os perfis selecionados.

## O que muda {/* #what-changes */}

Os perfis transferidos são novas cópias com novas identidades no destino. Os perfis existentes no destino são mantidos. Endereços MAC, números de série, IDs de dispositivos e outros valores dos perfis são preservados; copiar não cria uma nova assinatura nem uma autorização do provedor. Esse procedimento não oferece **Merge**/**Replace all**; esses modos pertencem à [restauração de backup](backups.md#restore-a-backup).

Transferências apenas de perfis mantêm as configurações do aplicativo, os mapeamentos do controle e a seleção ativa do destino. Transferências apenas de configurações mantêm os perfis e a seleção ativa do destino. Ao copiar ambos, o perfil ativo da origem se torna ativo por sua nova cópia apenas se esse perfil estiver incluído; caso contrário, a seleção ativa do destino é mantida.

As configurações do aplicativo incluem preferências portáteis do StbEmu e mapeamentos de teclas do controle, não o idioma/tema do Companion, autorizações de pareamento, identidade do serviço nem histórico de operações. Valores incompatíveis são informados em vez de descartados silenciosamente. Revise configurações relacionadas a senhas e outras que serão sobrescritas antes de confirmar. Algumas configurações salvas exigem uma mudança de ciclo de vida ou reinicialização do StbEmu; consulte [aplicação das configurações salvas](backups.md#results-and-applying-saved-settings).

Depois que o Companion informar que a captura do estado da origem foi verificada, essa tentativa específica pode continuar se a origem desconectar. A transferência não cria uma entrada permanente na biblioteca de backups. Para resultados incertos ou cancelamento, use os [resultados das operações](profiles.md#operation-results).
