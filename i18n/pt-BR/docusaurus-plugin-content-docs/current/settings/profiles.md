---
id: profiles
title: Perfis
sidebar_label: Perfis
---

# Perfis de STB {/* #stb-profiles */}

Um **perfil de STB** é um conjunto de opções para emular um decodificador no aplicativo. O aplicativo cria um perfil na primeira inicialização.
Você pode editá-lo ou adicionar mais perfis para carregar portais diferentes no mesmo dispositivo.
Abra **Configurações > Perfis** e escolha **Adicionar perfil**, ou selecione um perfil existente para editá-lo.
A visão geral agrupa as opções em **Conexão**, **Reprodução e dispositivo** e **Gerenciar perfil**.
As ações disponíveis dependem da edição do aplicativo e das restrições do perfil. O perfil ativo não pode ser excluído;
mude para outro perfil antes de excluí-lo. A exclusão exige confirmação.

Alterações de texto e de seleção exigem confirmação; os interruptores salvam imediatamente. Consulte [Como salvar alterações](/settings#saving-changes)
para saber mais sobre erros de validação, conflitos de edição e alterações salvas que exigem uma atualização em tempo de execução.

O StbEmu não fornece, hospeda nem indexa mídia ou listas de reprodução IPTV.
Os usuários precisam ter o direito legal de acessar o conteúdo por meio do emulador.

- [Nome do perfil](#profile-name)
- [Configurações do portal](#portal-settings)
    - [URL do portal](#portal-url)
    - [Idioma do portal](#portal-language)
    - [Configurações do proxy HTTP](#http-proxy-settings)
        - [Usar proxy HTTP](#use-http-proxy)
        - [Nome do host do proxy](#proxy-host-name)
        - [Porta do proxy](#proxy-port)
    - [O portal é interno](#portal-is-internal)
    - [URL do portal (O portal é interno)](#internal-portal-url)
- [Configuração do STB](#stb-configuration)
    - [Modelo do STB](#stb-model)
    - [Firmware](#firmware)
    - [Configurações do firmware](#firmware-settings)
    - [Agente do usuário](#user-agent)
    - [Resolução da tela](#screen-resolution)
    - [Endereço MAC](#mac-address)
    - [Número de série](#serial-number)
    - [ID do dispositivo](#device-id)
        - [Usar ID do dispositivo baseado em MAC](#use-mac-based-device-id)
        - [Enviar ID do dispositivo](#send-device-id)
        - [Semente aleatória do ID do dispositivo](#device-id-random-seed)
        - [ID do dispositivo](#device-id-value)
        - [ID2 do dispositivo e assinatura personalizados](#custom-device-id-2-and-signature)
        - [ID do dispositivo 2](#device-id-2)
        - [Assinatura](#signature)
        - [Redefinir ID do dispositivo para o valor padrão…](#reset-device-id-to-default-value)
    - [Configurações do hardware](#hardware-settings)
        - [Fabricante](#vendor)
        - [Versão do hardware](#hardware-version)
- [Configurações do reprodutor de mídia](#media-player-settings)
    - [Reprodutor de mídia](#media-player)
    - [Configurações de UDPXY](#udpxy-settings)
        - [Ativar suporte a UDPXY](#enable-udxpy-support)
        - [URL do servidor UDPXY](#udpxy-server-url)
        - [Substituir protocolo de transmissão](#overwrite-stream-protocol)
- [Configurações avançadas](#advanced-settings)

### Nome do perfil {/* #profile-name */}
O nome do perfil. Pode ser qualquer sequência de texto não vazia.

### Configurações do portal {/* #portal-settings */}
Opções específicas do portal.
##### URL do portal {/* #portal-url */}
Digite uma URL absoluta **http://** ou **https://**. Há suporte para hosts da rede local, localhost, endereços IPv6 e nomes de domínio internacionais. URLs de rede não podem conter espaços em branco.
Para um portal interno, também é aceito um caminho absoluto do sistema de arquivos ou uma URL absoluta **file://** compatível. O editor reformulado não aceita URLs FTP.

##### Idioma do portal {/* #portal-language */}
O idioma padrão do portal, especificado como um código de idioma de duas letras da norma [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### Configurações do proxy HTTP {/* #http-proxy-settings */}
Configurações de proxy HTTP.

##### Usar proxy HTTP {/* #use-http-proxy */}
Ative se quiser usar um proxy HTTP.

##### Nome do host do proxy {/* #proxy-host-name */}
O host do proxy é separado da porta; o host padrão é 127.0.0.1.
##### Porta do proxy {/* #proxy-port */}
Padrão: 3128. Os editores de host e porta ficam disponíveis apenas quando **Usar proxy HTTP** está ativado.

##### O portal é interno {/* #portal-is-internal */}
Ative esta opção para usar um portal interno para dispositivos MAG. Uma URL de portal local ativa essa opção automaticamente e torna o interruptor indisponível. Mudar para uma URL de rede desativa a configuração automática de portal interno.

##### URL do portal (O portal é interno) {/* #internal-portal-url */}
Use o campo **URL do portal** para o caminho local ou a URL de arquivo; não há um editor separado para a URL interna.

Para instalar um portal, abra **Configurações > Perfis > seu perfil > Configurações do portal**, use a ação de instalação e selecione o arquivo compactado. Aguarde a extração,
e confirme a URL local oferecida. Instalar os arquivos e aceitar a URL são etapas separadas.
Use a ação de remoção em **Configurações do portal** para remover um portal interno instalado.

### Configuração do STB {/* #stb-configuration */}
As principais configurações de emulação.

#### Modelo do STB {/* #stb-model */}
O modelo de STB a emular.

#### Firmware
O **Firmware** a emular; nenhum Firmware real é instalado. Alguns portais exigem um Firmware específico.
Nesse caso, selecione-o na lista, se estiver disponível.
A maioria dos modelos de STB compatíveis oferece apenas o Firmware **Generic**, que geralmente representa a versão mais recente.

Opções de Firmware disponíveis:
* Generic: geralmente o Firmware mais recente disponível.
* Custom (apenas MAG 250): Firmware personalizável. Use se precisar alterar configurações específicas do Firmware.

A maioria dos usuários deve usar o Firmware **Generic** (selecionado por padrão).

#### Configurações do firmware {/* #firmware-settings */}
Esta opção está disponível apenas com o Firmware **Custom** (atualmente compatível apenas com o MAG 250).
Configure as versões do mecanismo do player, da API JavaScript e da API STB, além da versão, descrição e data da imagem.
Ative o uso de Agente do usuário personalizado antes de editar a sequência de texto do Agente do usuário personalizado.

#### Agente do usuário {/* #user-agent */}
A sequência de texto do Agente do usuário para o navegador da web do aplicativo.

#### Resolução da tela {/* #screen-resolution */}
A resolução de tela a emular; isso não altera a resolução real da tela.
Escolha uma resolução compatível com seu portal, geralmente **1280x720**.

#### Endereço MAC {/* #mac-address */}
O endereço MAC do dispositivo emulado. Você pode usar o endereço MAC de um dispositivo MAG 250 real que possua,
ou 12 dígitos hexadecimais aleatórios (0–9, A–F), agrupados em pares separados por dois-pontos. [^wrong_mac]

A maioria dos portais exige que o endereço MAC comece com 00:1A:79.

[^wrong_mac]: Em alguns dispositivos que usam apenas Wi-Fi, o endereço MAC gerado pode ser **00:1A:79:00:00:00**.
    Isso significa que o aplicativo não conseguiu detectá-lo corretamente devido a restrições do Android.
    Substitua a parte **00:00:00** por dígitos hexadecimais aleatórios, mantendo os dois-pontos entre os pares.

#### Número de série {/* #serial-number */}
O número de série do dispositivo emulado. A maioria dos portais não o verifica, portanto qualquer sequência de texto normalmente funciona.

#### ID do dispositivo {/* #device-id */}
Configurações do identificador do dispositivo.

##### Usar ID do dispositivo baseado em MAC {/* #use-mac-based-device-id */}
Gere o identificador do dispositivo a partir de seu endereço MAC. Pressione **Redefinir ID do dispositivo para o valor padrão…** depois de ativar ou
desativar esta opção para gerar o identificador novamente.

##### Enviar ID do dispositivo {/* #send-device-id */}
Envie o identificador do dispositivo quando um portal solicitá-lo. Se desativado, o aplicativo envia uma sequência de texto vazia.

##### Semente aleatória do ID do dispositivo {/* #device-id-random-seed */}
A semente usada para gerar o identificador do dispositivo. Use a mesma semente em todos os dispositivos que usam a mesma URL de portal e o mesmo
endereço MAC. Confirmar uma alteração na semente gera novamente os identificadores de forma automática.
Não pressione **Redefinir ID do dispositivo para o valor padrão…** se quiser manter a semente: esta ação a apaga.

##### ID do dispositivo {/* #device-id-value */}
O identificador do dispositivo. Use o valor gerado ou digite um valor próprio.

##### ID2 do dispositivo e assinatura personalizados {/* #custom-device-id-2-and-signature */}
Ative esta opção para editar ID do dispositivo 2 e a assinatura.

##### ID do dispositivo 2 {/* #device-id-2 */}
##### Assinatura {/* #signature */}
##### Redefinir ID do dispositivo para o valor padrão… {/* #reset-device-id-to-default-value */}
Após a confirmação, apague a semente e gere novamente **ID do dispositivo**, **ID do dispositivo 2** e a assinatura a partir dos valores atuais do perfil. As demais configurações do perfil são mantidas.

A edição manual do campo **ID do dispositivo** só fica disponível quando a opção **Enviar ID do dispositivo** está ativada e os identificadores baseados em MAC estão desativados.
A edição dos campos **ID do dispositivo 2** e **Assinatura** também exige que a opção **ID2 do dispositivo e assinatura personalizados** esteja ativada.
Os valores derivados automaticamente continuam visíveis quando a edição está indisponível.

#### Configurações do hardware {/* #hardware-settings */}
##### Fabricante {/* #vendor */}
##### Versão do hardware {/* #hardware-version */}

As opções do dispositivo também incluem compatibilidade com Ministra e redirecionamento do navegador. Altere-as apenas conforme as exigências do portal.

### Configurações do reprodutor de mídia {/* #media-player-settings */}

Configurações do player de mídia para este perfil.
#### Reprodutor de mídia {/* #media-player */}
Selecione o player de mídia padrão para este perfil.

A lista inclui seleção automática, Exo, o player interno do Android e um player externo,
além de outros players disponíveis na sua compilação. Selecione uma das opções exibidas no aplicativo.
Os codecs compatíveis com o player interno dependem do Android; players externos abrem os fluxos em outro aplicativo.

#### Configurações de UDPXY {/* #udpxy-settings */}
##### Ativar suporte a UDPXY {/* #enable-udxpy-support */}
Ative o UDPXY apenas depois de digitar uma URL de servidor HTTP/HTTPS válida.
##### URL do servidor UDPXY {/* #udpxy-server-url */}
Você pode digitar a URL enquanto o UDPXY está desativado. Uma URL vazia só é permitida quando ele está desativado; uma URL não vazia precisa ser HTTP/HTTPS válida.
##### Substituir protocolo de transmissão {/* #overwrite-stream-protocol */}
Escolha a substituição do protocolo de streaming quando o UDPXY estiver ativado.
### Configurações avançadas {/* #advanced-settings */}
As opções de compatibilidade específicas do perfil incluem correções de CSS, detecção do emulador, correções de cor de fundo, de arquivos locais e de AJAX,
além de eventos de retorno/tecla para players externos. As opções de eventos Voltar, Sair e OK dependem da opção de evento de retorno à lista de canais.
Altere-as apenas quando exigido pelo portal ou pelo player externo.
