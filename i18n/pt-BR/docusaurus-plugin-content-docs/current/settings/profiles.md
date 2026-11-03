---
id: profiles
title: Perfis
sidebar_label: Perfis
---

# Perfis de STB {/* #stb-profiles */}

Um **perfil de STB** é um conjunto de opções para emular um decodificador no aplicativo. O aplicativo cria um perfil na primeira inicialização.
Você pode editá-lo ou adicionar mais perfis para carregar portais diferentes no mesmo dispositivo.
Abra **Settings > Profiles** e escolha **Add profile**, ou selecione um perfil existente para editá-lo.
A visão geral agrupa as opções em **Connection**, **Playback & device** e **Manage profile**.
As ações disponíveis dependem da edição do aplicativo e das restrições do perfil. O perfil ativo não pode ser excluído;
mude para outro perfil antes de excluí-lo. A exclusão exige confirmação.

Alterações de texto e de seleção exigem confirmação; os interruptores salvam imediatamente. Consulte [Como salvar alterações](/settings#saving-changes)
para saber mais sobre erros de validação, conflitos de edição e alterações salvas que exigem uma atualização em tempo de execução.

O StbEmu não fornece, hospeda nem indexa mídia ou listas de reprodução IPTV.
Os usuários precisam ter o direito legal de acessar o conteúdo por meio do emulador.

- [Profile name](#profile-name)
- [Portal settings](#portal-settings)
    - [Portal URL](#portal-url)
    - [Portal language](#portal-language)
    - [HTTP Proxy settings](#http-proxy-settings)
        - [Use HTTP proxy](#use-http-proxy)
        - [Proxy host name](#proxy-host-name)
        - [Proxy port](#proxy-port)
    - [Portal is internal](#portal-is-internal)
    - [Internal portal URL](#internal-portal-url)
- [STB configuration](#stb-configuration)
    - [STB Model](#stb-model)
    - [Firmware](#firmware)
    - [Firmware settings](#firmware-settings)
    - [User Agent](#user-agent)
    - [Screen resolution](#screen-resolution)
    - [MAC address](#mac-address)
    - [Serial number](#serial-number)
    - [Device ID](#device-id)
        - [Use MAC-based device ID](#use-mac-based-device-id)
        - [Send Device ID](#send-device-id)
        - [Device ID random seed](#device-id-random-seed)
        - [Device ID](#device-id-value)
        - [Custom device ID 2 and signature](#custom-device-id-2-and-signature)
        - [Device ID 2](#device-id-2)
        - [Signature](#signature)
        - [Reset device ID to default value](#reset-device-id-to-default-value)
    - [Hardware settings](#hardware-settings)
        - [Vendor](#vendor)
        - [Hardware version](#hardware-version)
- [Media player settings](#media-player-settings)
    - [Media player](#media-player)
    - [UDPXY settings](#udpxy-settings)
        - [Enable UDPXY support](#enable-udxpy-support)
        - [UDPXY server URL](#udpxy-server-url)
        - [Overwrite stream protocol](#overwrite-stream-protocol)
- [Advanced settings](#advanced-settings)

### Profile name
O nome do perfil. Pode ser qualquer sequência de texto não vazia.

### Portal settings
Opções específicas do portal.
##### Portal URL
Digite uma URL absoluta **http://** ou **https://**. Há suporte para hosts da rede local, localhost, endereços IPv6 e nomes de domínio internacionais. URLs de rede não podem conter espaços em branco.
Para um portal interno, também é aceito um caminho absoluto do sistema de arquivos ou uma URL absoluta **file://** compatível. O editor reformulado não aceita URLs FTP.

##### Portal language
O idioma padrão do portal, especificado como um código de idioma de duas letras da norma [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Configurações de proxy HTTP.

##### Use HTTP proxy
Ative se quiser usar um proxy HTTP.

##### Proxy host name
O host do proxy é separado da porta; o host padrão é 127.0.0.1.
##### Proxy port
Padrão: 3128. Os editores de host e porta ficam disponíveis apenas quando **Use HTTP proxy** está ativado.

##### Portal is internal
Ative esta opção para usar um portal interno para dispositivos MAG. Uma URL de portal local ativa essa opção automaticamente e torna o interruptor indisponível. Mudar para uma URL de rede desativa a configuração automática de portal interno.

##### Internal portal URL
Use o campo **Portal URL** para o caminho local ou a URL de arquivo; não há um editor separado para a URL interna.

Para instalar um portal, abra **Settings > Profiles > seu perfil > Portal settings**, use a ação de instalação e selecione o arquivo compactado. Aguarde a extração,
e confirme a URL local oferecida. Instalar os arquivos e aceitar a URL são etapas separadas.
Use a ação de remoção em **Portal settings** para remover um portal interno instalado.

### STB configuration
As principais configurações de emulação.

#### STB Model
O modelo de STB a emular.

#### Firmware
O **firmware** a emular; nenhum firmware real é instalado. Alguns portais exigem um firmware específico.
Nesse caso, selecione-o na lista, se estiver disponível.
A maioria dos modelos de STB compatíveis oferece apenas o firmware **Generic**, que geralmente representa a versão mais recente.

Opções de firmware disponíveis:
* Generic: geralmente o firmware mais recente disponível.
* Custom (apenas MAG 250): firmware personalizável. Use se precisar alterar configurações específicas do firmware.

A maioria dos usuários deve usar o firmware **Generic** (selecionado por padrão).

#### Firmware settings
Esta opção está disponível apenas com o firmware **Custom** (atualmente compatível apenas com o MAG 250).
Configure as versões do mecanismo do player, da API JavaScript e da API STB, além da versão, descrição e data da imagem.
Ative o uso de User Agent personalizado antes de editar a sequência de texto do User Agent personalizado.

#### User Agent
A sequência de texto do User Agent para o navegador da web do aplicativo.

#### Screen resolution
A resolução de tela a emular; isso não altera a resolução real da tela.
Escolha uma resolução compatível com seu portal, geralmente **1280x720**.

#### MAC address
O endereço MAC do dispositivo emulado. Você pode usar o endereço MAC de um dispositivo MAG 250 real que possua,
ou 12 dígitos hexadecimais aleatórios (0–9, A–F), agrupados em pares separados por dois-pontos. [^wrong_mac]

A maioria dos portais exige que o endereço MAC comece com 00:1A:79.

[^wrong_mac]: Em alguns dispositivos que usam apenas Wi-Fi, o endereço MAC gerado pode ser **00:1A:79:00:00:00**.
    Isso significa que o aplicativo não conseguiu detectá-lo corretamente devido a restrições do Android.
    Substitua a parte **00:00:00** por dígitos hexadecimais aleatórios, mantendo os dois-pontos entre os pares.

#### Serial number
O número de série do dispositivo emulado. A maioria dos portais não o verifica, portanto qualquer sequência de texto normalmente funciona.

#### Device ID
Configurações do identificador do dispositivo.

##### Use MAC-based device ID
Gere o identificador do dispositivo a partir de seu endereço MAC. Pressione **Reset device ID** depois de ativar ou
desativar esta opção para gerar o identificador novamente.

##### Send Device ID
Envie o identificador do dispositivo quando um portal solicitá-lo. Se desativado, o aplicativo envia uma sequência de texto vazia.

##### Device ID random seed
A semente usada para gerar o identificador do dispositivo. Use a mesma semente em todos os dispositivos que usam a mesma URL de portal e o mesmo
endereço MAC. Confirmar uma alteração na semente gera novamente os identificadores de forma automática.
Não pressione Reset se quiser manter a semente: Reset a apaga.

##### Device ID value
O identificador do dispositivo. Use o valor gerado ou digite um valor próprio.

##### Custom device ID 2 and signature
Ative esta opção para editar Device ID 2 e a assinatura.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Após a confirmação, apague a semente e gere novamente **Device ID**, **Device ID 2** e a assinatura a partir dos valores atuais do perfil. As demais configurações do perfil são mantidas.

A edição manual de **Device ID** só fica disponível quando **Send Device ID** está ativado e os identificadores baseados em MAC estão desativados.
A edição de **Device ID 2** e **Signature** também exige **Custom device ID 2 and signature**.
Os valores derivados automaticamente continuam visíveis quando a edição está indisponível.

#### Hardware settings
##### Vendor
##### Hardware version

As opções do dispositivo também incluem compatibilidade com Ministra e redirecionamento do navegador. Altere-as apenas conforme as exigências do portal.

### Media player settings

Configurações do player de mídia para este perfil.
#### Media player
Selecione o player de mídia padrão para este perfil.

A lista inclui seleção automática, Exo, o player interno do Android e um player externo,
além de outros players disponíveis na sua compilação. Selecione uma das opções exibidas no aplicativo.
Os codecs compatíveis com o player interno dependem do Android; players externos abrem os fluxos em outro aplicativo.

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
Ative o UDPXY apenas depois de digitar uma URL de servidor HTTP/HTTPS válida.
##### UDPXY server URL
Você pode digitar a URL enquanto o UDPXY está desativado. Uma URL vazia só é permitida quando ele está desativado; uma URL não vazia precisa ser HTTP/HTTPS válida.
##### Overwrite stream protocol
Escolha a substituição do protocolo de streaming quando o UDPXY estiver ativado.
### Advanced settings
As opções de compatibilidade específicas do perfil incluem correções de CSS, detecção do emulador, correções de cor de fundo, de arquivos locais e de AJAX,
além de eventos de retorno/tecla para players externos. As opções de eventos Back, Exit e OK dependem da opção de evento de retorno à lista de canais.
Altere-as apenas quando exigido pelo portal ou pelo player externo.
