---
id: common-settings
title: Definições gerais
sidebar_label: Definições gerais
---

# Common settings

Estas definições aplicam-se à versão 0.8 da aplicação e posteriores.

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
Altere o idioma da aplicação. Por predefinição, a aplicação utiliza o idioma do sistema Android, se houver suporte.

#### Hide navigation bar
Oculte a barra de navegação e seus botões (pode não funcionar em alguns dispositivos). Se esta opção estiver ativada e usar
um ecrã tátil, talvez seja necessário tocar duas vezes para mostrar os botões ocultos no ecrã.
O primeiro toque mostra a barra de navegação; esta é uma restrição do Android.

#### Always show overlay buttons
Mostre os botões no ecrã. Esta opção normalmente deve permanecer ativada. Em STBs, pode desativá-la se os botões
aparecerem quando o utilizador premir uma tecla no comando.

#### Screen configuration
Ative ou desative a rotação do ecrã quando a orientação do dispositivo mudar.

#### Keyboard configuration
Definições do comando (indisponíveis na versão gratuita).

Configure o servidor de comando para controlar um portal usando um comando por software para MAG 250, AuraHD ou dispositivos semelhantes.

#### Boot options
##### Auto start on device boot

Inicie a aplicação quando o dispositivo arrancar. Isso só funciona se a aplicação estiver instalada no armazenamento interno.
Se o seu dispositivo tiver um ecrã de bloqueio ativado (por exemplo, num telemóvel ou tablet), a aplicação iniciará depois do desbloqueio.

#### Stop in the background
Coloque em pausa a aplicação quando mudar para outra aplicação.

#### Android TV
Opções específicas do Android TV.

##### Enable recommendations

Ative cartões de recomendação no ecrã inicial do Android. A aplicação mostra um cartão para cada perfil configurado
para que possa aceder ao mesmo rapidamente.

#### Browser settings
Definições do navegador.

##### Scaling method
Selecione outro método de escala do navegador se o portal aparecer demasiado grande ou pequeno.
Na maioria dos dispositivos, não é necessário alterar esta configuração. Uma exceção é um dispositivo cuja resolução de ecrã é menor
que a resolução do portal, que normalmente é 1280x720.

#### Network settings
Definições de rede.

##### Enable network cache
Armazene pedidos de rede em cache para acelerar o carregamento do portal na maioria dos casos. Desative esta opção se ocorrerem frequentemente
erros de autenticação ou outros problemas de rede.

##### Cache size
O tamanho do cache de rede. Predefinição: 20 MB.
