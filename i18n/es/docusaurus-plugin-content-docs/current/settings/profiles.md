---
id: profiles
title: Perfiles
sidebar_label: Perfiles
---

# Perfiles STB {/* #stb-profiles */}

Un **perfil STB** es un conjunto de opciones para emular un decodificador en la aplicación. La aplicación crea un perfil al iniciarse por primera vez.
Puedes editarlo o añadir más perfiles para cargar distintos portales en el mismo dispositivo.
Abre **Settings > Profiles** y elige **Add profile**, o selecciona un perfil existente para editarlo.
La vista general agrupa las opciones en **Connection**, **Playback & device** y **Manage profile**.
Las acciones disponibles dependen de la edición de la aplicación y de las restricciones del perfil. No se puede eliminar el perfil activo;
cambia a otro perfil antes de eliminarlo. La eliminación requiere confirmación.

Los cambios de texto y de selección requieren confirmación; los interruptores guardan inmediatamente. Consulta [Guardar los cambios](/settings#saving-changes)
para obtener información sobre errores de validación, cambios en conflicto y cambios guardados que requieren actualizar la aplicación en ejecución.

StbEmu no proporciona, aloja ni indexa contenido multimedia ni listas de reproducción IPTV.
Los usuarios deben tener derecho legal a acceder al contenido que consulten mediante el emulador.

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

### Profile name {/* #profile-name */}
El nombre del perfil. Puede ser cualquier cadena de texto que no esté vacía.

### Portal settings {/* #portal-settings */}
Opciones específicas del portal.
##### Portal URL {/* #portal-url */}
Introduce una URL absoluta **http://** o **https://**. Se admiten servidores de la red local, localhost, direcciones IPv6 y nombres de dominio internacionales. Las URL de red no deben contener espacios en blanco.
Para un portal interno también se acepta una ruta absoluta del sistema de archivos o una URL absoluta **file://** compatible. El editor rediseñado no acepta URL FTP.

##### Portal language {/* #portal-language */}
El idioma predeterminado del portal, especificado como un código de idioma de dos letras [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings {/* #http-proxy-settings */}
Ajustes del proxy HTTP.

##### Use HTTP proxy {/* #use-http-proxy */}
Actívalo si quieres usar un proxy HTTP.

##### Proxy host name {/* #proxy-host-name */}
El servidor proxy se especifica por separado del puerto; el servidor predeterminado es 127.0.0.1.
##### Proxy port {/* #proxy-port */}
Valor predeterminado: 3128. Los editores del servidor y del puerto solo están disponibles cuando **Use HTTP proxy** está activado.

##### Portal is internal {/* #portal-is-internal */}
Activa esta opción para usar un portal interno para dispositivos MAG. Una URL de portal local la activa automáticamente y deshabilita el interruptor. Al cambiar a una URL de red se elimina el ajuste automático de portal interno.

##### Internal portal URL {/* #internal-portal-url */}
Usa el campo **Portal URL** para introducir la ruta local o la URL del archivo; no hay un editor independiente para la URL interna.

Para instalar un portal, abre **Settings > Profiles > tu perfil > Portal settings**, usa la acción de instalación y selecciona su archivo comprimido. Espera a que termine la extracción
y confirma la URL local que se ofrece. Instalar los archivos y aceptar la URL son pasos independientes.
Usa la acción de eliminación de **Portal settings** para eliminar un portal interno instalado.

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
Configura las versiones del motor de reproducción, de la API de JavaScript y de la API del STB, así como la versión, la descripción y la fecha de la imagen.
Activa el uso de un User Agent personalizado antes de editar la cadena User Agent personalizada.

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
dirección MAC. Al confirmar un cambio de semilla, los ID se regeneran automáticamente.
No pulses Reset si quieres conservar la semilla: Reset la borra.

##### Device ID value {/* #device-id-value */}
El ID del dispositivo. Usa el valor generado o introduce uno propio.

##### Custom device ID 2 and signature {/* #custom-device-id-2-and-signature */}
Activa esta opción para editar Device ID 2 y la firma.

##### Device ID 2 {/* #device-id-2 */}
##### Signature {/* #signature */}
##### Reset device ID to default value {/* #reset-device-id-to-default-value */}
Tras la confirmación, se borra la semilla y se regeneran **Device ID**, **Device ID 2** y la firma a partir de los valores actuales del perfil. Se conservan los demás ajustes del perfil.

La edición manual de **Device ID** solo está disponible cuando **Send Device ID** está activado y los ID basados en la MAC están desactivados.
Para editar **Device ID 2** y **Signature** también se requiere **Custom device ID 2 and signature**.
Los valores calculados automáticamente se pueden seguir consultando cuando la edición no está disponible.

#### Hardware settings {/* #hardware-settings */}
##### Vendor {/* #vendor */}
##### Hardware version {/* #hardware-version */}

Las opciones del dispositivo también incluyen la compatibilidad con Ministra y la redirección del navegador. Cámbialas solo cuando lo requiera tu portal.

### Media player settings {/* #media-player-settings */}

Ajustes del reproductor multimedia para este perfil.
#### Media player {/* #media-player */}
Selecciona el reproductor multimedia predeterminado para este perfil.

La lista incluye la selección automática, Exo, el reproductor interno de Android y un reproductor externo,
además de los reproductores adicionales disponibles en tu compilación. Elige entre las opciones que muestra la aplicación.
La compatibilidad del reproductor interno con los códecs depende de Android; los reproductores externos abren las transmisiones en otra aplicación.

#### UDPXY settings {/* #udpxy-settings */}
##### Enable UDPXY support {/* #enable-udxpy-support */}
Activa UDPXY solo después de introducir una URL de servidor HTTP/HTTPS válida.
##### UDPXY server URL {/* #udpxy-server-url */}
Puedes introducir la URL mientras UDPXY está desactivado. Solo se permite una URL vacía mientras esté desactivado; una URL no vacía debe ser HTTP/HTTPS válida.
##### Overwrite stream protocol {/* #overwrite-stream-protocol */}
Elige la sustitución del protocolo de la transmisión cuando UDPXY esté activado.
### Advanced settings {/* #advanced-settings */}
Las opciones de compatibilidad específicas del perfil incluyen parches CSS, detección del emulador, correcciones del color de fondo, de archivos locales y de AJAX,
y eventos de retorno y de teclas para reproductores externos. Las opciones de los eventos Back, Exit y OK dependen de la opción del evento de retorno a la lista de canales.
Cámbialas solo cuando lo requiera tu portal o reproductor externo.
