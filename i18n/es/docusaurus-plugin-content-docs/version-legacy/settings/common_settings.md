---
id: common-settings
title: Ajustes generales
sidebar_label: Ajustes generales
---

# Common settings {/* #common-settings */}

Estos ajustes se aplican a la versión 0.8 de la aplicación y posteriores.

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

### Settings {/* #settings */}
#### App Language {/* #app-language */}
Cambia el idioma de la aplicación. De forma predeterminada, la aplicación usa el idioma del sistema Android si es compatible.

#### Hide navigation bar {/* #hide-navigation-bar */}
Oculta la barra de navegación y sus botones (puede que no funcione en algunos dispositivos). Si esta opción está activada y usas
una pantalla táctil, puede que tengas que tocar dos veces para mostrar los botones ocultos en pantalla.
El primer toque muestra la barra de navegación; es una restricción de Android.

#### Always show overlay buttons {/* #always-show-overlay-buttons */}
Muestra los botones en pantalla. Normalmente conviene dejar esta opción activada. En los STB, puedes desactivarla si los botones
aparecen al pulsar una tecla del mando.

#### Screen configuration {/* #screen-configuration */}
Activa o desactiva la rotación de la pantalla cuando cambia la orientación del dispositivo.

#### Keyboard configuration {/* #keyboard-configuration */}
Ajustes del mando (no disponibles en la versión gratuita).

Configura el servidor de mando para controlar un portal mediante un mando por software para MAG 250, AuraHD o dispositivos similares.

#### Boot options {/* #boot-options */}
##### Auto start on device boot {/* #auto-start-on-device-boot */}

Inicia la aplicación al arrancar el dispositivo. Solo funciona si la aplicación está instalada en el almacenamiento interno.
Si tu dispositivo tiene activada una pantalla de bloqueo (por ejemplo, en un teléfono o una tableta), la aplicación se inicia después de desbloquearlo.

#### Stop in the background {/* #stop-in-the-background */}
Pausa la aplicación cuando cambias a otra aplicación.

#### Android TV {/* #android-tv */}
Opciones específicas de Android TV.

##### Enable recommendations {/* #enable-recommendations */}

Activa las tarjetas de recomendación en la pantalla de inicio de Android. La aplicación muestra una tarjeta para cada perfil configurado
para que puedas acceder a él rápidamente.

#### Browser settings {/* #browser-settings */}
Ajustes del navegador.

##### Scaling method {/* #scaling-method */}
Selecciona otro método de escalado del navegador si el portal se ve demasiado grande o pequeño.
En la mayoría de los dispositivos no es necesario cambiar este ajuste. Una excepción son los dispositivos cuya resolución de pantalla es inferior
a la del portal, que suele ser 1280x720.

#### Network settings {/* #network-settings */}
Ajustes de red.

##### Enable network cache {/* #enable-network-cache */}
Almacena en caché las solicitudes de red para acelerar la carga del portal en la mayoría de los casos. Desactiva esta opción si encuentras con frecuencia
errores de autenticación u otros problemas de red.

##### Cache size {/* #cache-size */}
El tamaño de la caché de red. Valor predeterminado: 20 MB.
