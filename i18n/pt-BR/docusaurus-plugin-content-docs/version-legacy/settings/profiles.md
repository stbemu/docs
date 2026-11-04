---
id: profiles
title: Perfis
sidebar_label: Perfis
---

# Perfis de STB {/* #stb-profiles */}

Um **perfil de STB** é um conjunto de opções para emular um decodificador no aplicativo. O aplicativo cria um perfil na primeira inicialização.
Você pode editá-lo ou adicionar mais perfis para carregar portais diferentes no mesmo dispositivo.
Para criar um perfil, toque duas vezes na tela para exibir o menu na parte superior ou lateral [^1].
Selecione **Settings** e depois **Profiles**, onde você pode adicionar ou editar perfis.

O StbEmu não fornece, hospeda nem indexa mídia ou listas de reprodução IPTV.
Os usuários precisam ter o direito legal de acessar o conteúdo por meio do emulador.

[^1]: Se você usar um controle remoto 3D ou um mouse, mova o ponteiro, clique na tela e abra o menu do aplicativo na parte superior.

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
    - [IP address](#ip-address)
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
A URL do portal. Ela precisa começar com um esquema (**http://**, **https://**, **ftp://** etc.).

##### Portal language
O idioma padrão do portal, especificado como um código de idioma de duas letras da norma [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Configurações de proxy HTTP.

##### Use HTTP proxy
Ative se quiser usar um proxy HTTP.

##### Proxy host name
##### Proxy port

##### Portal is internal
Ative esta opção para usar um portal interno para dispositivos MAG.

##### Internal portal URL

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
Use-a para definir configurações específicas do firmware, como a versão ou uma sequência de texto personalizada do User Agent.

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
endereço MAC. Pressione **Reset device ID** depois de alterar este valor.

##### Device ID value
O identificador do dispositivo. Use o valor gerado ou digite um valor próprio.

##### Custom device ID 2 and signature
Ative esta opção para editar Device ID 2 e a assinatura.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Gere novamente **Device ID**, **Device ID 2** e a assinatura.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
O endereço IP enviado a um portal quando solicitado. Este é um endereço emulado, não o endereço IP real do dispositivo.
A maioria dos portais não usa essa informação, portanto geralmente não é necessário alterá-la.
### Media player settings

Configurações do player de mídia para este perfil.
#### Media player
Selecione o player de mídia padrão para este perfil.

| Player | Descrição | Comentário |
|--------|-----------|------------|
| Exo | [GitHub](https://github.com/google/ExoPlayer) | O player padrão, recomendado para a maioria dos dispositivos |
| VLC | [Site](https://www.videolan.org) | |
| MPV | [GitHub](https://github.com/mpv-android/mpv-android) | |
| Ijk | [GitHub](https://github.com/bilibili/ijkplayer) | Não aceita legendas |
| Internal player | Usa o player do Android. Os codecs compatíveis dependem da versão do Android do seu dispositivo. | Não aceita legendas |
| External player | Use praticamente qualquer player externo. A integração com o emulador não está disponível; os fluxos de mídia são abertos em outro aplicativo. | |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
