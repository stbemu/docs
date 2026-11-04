---
id: profiles
title: Perfiles
sidebar_label: Perfiles
---

# Perfiles STB {/* #stb-profiles */}

Un **perfil STB** es un conjunto de opciones para emular un decodificador en la aplicación. La aplicación crea un perfil al iniciarse por primera vez.
Puedes editarlo o añadir más perfiles para cargar distintos portales en el mismo dispositivo.
Para crear un perfil, toca dos veces la pantalla para mostrar el menú en la parte superior o en un lateral [^1].
Selecciona **Settings** y después **Profiles**, donde puedes añadir o editar perfiles.

StbEmu no proporciona, aloja ni indexa contenido multimedia ni listas de reproducción IPTV.
Los usuarios deben tener derecho legal a acceder al contenido que consulten mediante el emulador.

[^1]: Si usas un mando 3D o un ratón, mueve el puntero, haz clic en la pantalla y abre el menú de la aplicación en la parte superior.

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

### Profile name {/* #profile-name */}
El nombre del perfil. Puede ser cualquier cadena de texto que no esté vacía.

### Portal settings {/* #portal-settings */}
Opciones específicas del portal.
##### Portal URL {/* #portal-url */}
La URL del portal. Debe comenzar con un esquema (**http://**, **https://**, **ftp://**, etc.).

##### Portal language {/* #portal-language */}
El idioma predeterminado del portal, especificado como un código de idioma de dos letras [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings {/* #http-proxy-settings */}
Ajustes del proxy HTTP.

##### Use HTTP proxy {/* #use-http-proxy */}
Actívalo si quieres usar un proxy HTTP.

##### Proxy host name {/* #proxy-host-name */}
##### Proxy port {/* #proxy-port */}

##### Portal is internal {/* #portal-is-internal */}
Activa esta opción para usar un portal interno para dispositivos MAG.

##### Internal portal URL {/* #internal-portal-url */}

### STB configuration {/* #stb-configuration */}
Los ajustes principales de emulación.

#### STB Model {/* #stb-model */}
El modelo de STB que se emulará.

#### Firmware {/* #firmware */}
El **firmware** que se emulará; no se instala ningún firmware real. Algunos portales requieren un firmware concreto.
En ese caso, selecciónalo en la lista si está disponible.
La mayoría de los modelos de STB compatibles solo ofrecen el firmware **Generic**, que suele representar la versión más reciente.

Opciones de firmware disponibles:
* Generic: normalmente, el firmware más reciente disponible.
* Custom (solo MAG 250): firmware personalizable. Úsalo si necesitas cambiar ajustes específicos del firmware.

La mayoría de los usuarios debería usar el firmware **Generic** (seleccionado de forma predeterminada).

#### Firmware settings {/* #firmware-settings */}
Esta opción solo está disponible con el firmware **Custom** (actualmente compatible solo con MAG 250).
Úsala para configurar ajustes específicos del firmware, como la versión o una cadena User Agent personalizada.

#### User Agent {/* #user-agent */}
La cadena User Agent del navegador web de la aplicación.

#### Screen resolution {/* #screen-resolution */}
La resolución de pantalla que se emulará; no cambia la resolución real de la pantalla.
Elige una resolución compatible con tu portal, normalmente **1280x720**.

#### MAC address {/* #mac-address */}
La dirección MAC del dispositivo emulado. Puedes usar la dirección MAC de un dispositivo MAG 250 real que te pertenezca,
o 12 dígitos hexadecimales aleatorios (0–9, A–F), agrupados en pares separados por dos puntos. [^wrong_mac]

La mayoría de los portales requiere que la dirección MAC comience por 00:1A:79.

[^wrong_mac]: En algunos dispositivos que solo tienen Wi-Fi, la dirección MAC generada puede ser **00:1A:79:00:00:00**.
    Esto significa que la aplicación no ha podido detectarla correctamente debido a las restricciones de Android.
    Sustituye la parte **00:00:00** por dígitos hexadecimales aleatorios, manteniendo los dos puntos entre los pares.

#### Serial number {/* #serial-number */}
El número de serie del dispositivo emulado. La mayoría de los portales no lo comprueba, por lo que normalmente sirve cualquier cadena de texto.

#### Device ID {/* #device-id */}
Ajustes del ID del dispositivo.

##### Use MAC-based device ID {/* #use-mac-based-device-id */}
Genera el ID del dispositivo a partir de su dirección MAC. Pulsa **Reset device ID** después de activar o
desactivar esta opción para regenerar el ID.

##### Send Device ID {/* #send-device-id */}
Envía el ID del dispositivo cuando un portal lo solicita. Si se desactiva, la aplicación envía una cadena vacía.

##### Device ID random seed {/* #device-id-random-seed */}
La semilla usada para generar el ID del dispositivo. Usa la misma semilla en todos los dispositivos que usen la misma URL de portal y
dirección MAC. Pulsa **Reset device ID** después de cambiar este valor.

##### Device ID value {/* #device-id-value */}
El ID del dispositivo. Usa el valor generado o introduce uno propio.

##### Custom device ID 2 and signature {/* #custom-device-id-2-and-signature */}
Activa esta opción para editar Device ID 2 y la firma.

##### Device ID 2 {/* #device-id-2 */}
##### Signature {/* #signature */}
##### Reset device ID to default value {/* #reset-device-id-to-default-value */}
Regenera **Device ID**, **Device ID 2** y la firma.

#### Hardware settings {/* #hardware-settings */}
##### Vendor {/* #vendor */}
##### Hardware version {/* #hardware-version */}

#### IP address {/* #ip-address */}
La dirección IP que se envía a un portal cuando la solicita. Es una dirección emulada, no la dirección IP real del dispositivo.
La mayoría de los portales no usa esta información, por lo que normalmente no necesitas cambiarla.
### Media player settings {/* #media-player-settings */}

Ajustes del reproductor multimedia para este perfil.
#### Media player {/* #media-player */}
Selecciona el reproductor multimedia predeterminado para este perfil.

| Reproductor          | Descripción                                                                                                                                          | Comentario                                                 |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo | [GitHub](https://github.com/google/ExoPlayer)                                                                                                        | El reproductor predeterminado, recomendado para la mayoría de los dispositivos |
| VLC | [Sitio web](https://www.videolan.org)                                                                                                                 |                                                         |
| MPV | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk | [GitHub](https://github.com/bilibili/ijkplayer)                                                                                                      | No admite subtítulos                               |
| Internal player | Usa el reproductor de Android. Los códecs compatibles dependen de la versión de Android del dispositivo.                                                          | No admite subtítulos                               |
| External player | Permite usar casi cualquier reproductor externo. No hay integración con el emulador; las transmisiones multimedia se abren en otra aplicación. |                                                         |

#### UDPXY settings {/* #udpxy-settings */}
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL {/* #udpxy-server-url */}
##### Overwrite stream protocol {/* #overwrite-stream-protocol */}
### Advanced settings {/* #advanced-settings */}
