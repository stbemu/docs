---
id: common-settings
title: Configurações gerais
sidebar_label: Configurações gerais
---

# Common settings

Estas configurações se aplicam à versão 0.8 do aplicativo e posteriores.

- [Settings](#settings)
    - [App Language](#app-language)
    - [Hide navigation bar](#hide-navigation-bar)
    - [Always show overlay buttons](#always-show-overlay-buttons)
    - [Screen configuration](#screen-configuration)
    - [Keyboard configuration](#keyboard-configuration)
- [Boot options](#boot-options)
    - [Auto start on device boot](#auto-start-on-device-boot)
- [Android TV](#android-tv)
    - [Enable recommendations](#enable-recommendations)
- [Browser settings](#browser-settings)
    - [Scaling method](#scaling-method)
- [Network settings](#network-settings)
    - [Enable network cache](#enable-network-cache)
    - [Cache size](#cache-size)

### Settings
#### App Language
Altere o idioma do aplicativo. Por padrão, o aplicativo usa o idioma do sistema Android, se houver suporte.

#### Hide navigation bar
Oculte a barra de navegação e seus botões (pode não funcionar em alguns dispositivos). Se esta opção estiver ativada e você usar
uma tela sensível ao toque, talvez seja necessário tocar duas vezes para exibir os botões ocultos na tela.
O primeiro toque exibe a barra de navegação; essa é uma restrição do Android.

#### Always show overlay buttons
Mostre os botões na tela. Esta opção geralmente deve permanecer ativada. Em STBs, você pode desativá-la se os botões
aparecerem quando você pressionar uma tecla no controle remoto.

#### Screen configuration
Ative ou desative a rotação da tela quando a orientação do dispositivo mudar.

#### Keyboard configuration
Configurações do controle remoto (indisponíveis na versão gratuita).

Configure o servidor de controle remoto para controlar um portal usando um controle remoto por software para MAG 250, AuraHD ou dispositivos semelhantes.

#### Boot options
##### Auto start on device boot

Inicie o aplicativo quando o dispositivo inicializar. Isso só funciona se o aplicativo estiver instalado no armazenamento interno.
Se seu dispositivo tiver uma tela de bloqueio ativada (por exemplo, em um celular ou tablet), o aplicativo iniciará depois do desbloqueio.

#### Stop in the background
Pause o aplicativo quando mudar para outro aplicativo.

#### Android TV
Opções específicas do Android TV.

##### Enable recommendations

Ative cartões de recomendação na tela inicial do Android. O aplicativo mostra um cartão para cada perfil configurado
para que você possa acessá-lo rapidamente.

#### Browser settings
Configurações do navegador.

##### Scaling method
Selecione outro método de escala do navegador se o portal aparecer grande ou pequeno demais.
Na maioria dos dispositivos, não é necessário alterar esta configuração. Uma exceção é um dispositivo cuja resolução de tela é menor
que a resolução do portal, que geralmente é 1280x720.

#### Network settings
Configurações de rede.

##### Enable network cache
Armazene solicitações de rede em cache para acelerar o carregamento do portal na maioria dos casos. Desative esta opção se ocorrerem frequentemente
erros de autenticação ou outros problemas de rede.

##### Cache size
O tamanho do cache de rede. Padrão: 20 MB.
