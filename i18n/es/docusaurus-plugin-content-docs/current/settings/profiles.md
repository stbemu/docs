---
id: profiles
title: Perfiles
sidebar_label: Perfiles
---

# Perfiles STB {/* #stb-profiles */}

Un **perfil STB** es un conjunto de opciones para emular un decodificador en la aplicación. La aplicación crea un perfil al iniciarse por primera vez.
Puedes editarlo o añadir más perfiles para cargar distintos portales en el mismo dispositivo.
Abre **Ajustes > Perfiles** y elige **Añadir perfil**, o selecciona un perfil existente para editarlo.
La vista general agrupa las opciones en **Conexión**, **Reproducción y dispositivo** y **Gestionar perfil**.
Las acciones disponibles dependen de la edición de la aplicación y de las restricciones del perfil. No se puede eliminar el perfil activo;
cambia a otro perfil antes de eliminarlo. La eliminación requiere confirmación.

Los cambios de texto y de selección requieren confirmación; los interruptores guardan inmediatamente. Consulta [Guardar los cambios](/settings#saving-changes)
para obtener información sobre errores de validación, cambios en conflicto y cambios guardados que requieren actualizar la aplicación en ejecución.

StbEmu no proporciona, aloja ni indexa contenido multimedia ni listas de reproducción IPTV.
Los usuarios deben tener derecho legal a acceder al contenido que consulten mediante el emulador.

- [Nombre del perfil](#profile-name)
- [Ajustes del portal](#portal-settings)
    - [URL del portal](#portal-url)
    - [Idioma del portal](#portal-language)
    - [Ajustes del proxy HTTP](#http-proxy-settings)
        - [Usar proxy HTTP](#use-http-proxy)
        - [Nombre del servidor proxy](#proxy-host-name)
        - [Puerto del proxy](#proxy-port)
    - [El portal es interno](#portal-is-internal)
    - [URL del portal (El portal es interno)](#internal-portal-url)
- [Configuración de STB](#stb-configuration)
    - [Modelo de STB](#stb-model)
    - [Firmware](#firmware)
    - [Ajustes del firmware](#firmware-settings)
    - [Agente de usuario](#user-agent)
    - [Resolución de pantalla](#screen-resolution)
    - [Dirección MAC](#mac-address)
    - [Número de serie](#serial-number)
    - [ID del dispositivo](#device-id)
        - [Usar ID del dispositivo basado en MAC](#use-mac-based-device-id)
        - [Enviar ID del dispositivo](#send-device-id)
        - [Semilla aleatoria del ID del dispositivo](#device-id-random-seed)
        - [ID del dispositivo](#device-id-value)
        - [ID2 del dispositivo y firma personalizados](#custom-device-id-2-and-signature)
        - [ID del dispositivo 2](#device-id-2)
        - [Firma](#signature)
        - [Restablecer el ID del dispositivo al valor predeterminado…](#reset-device-id-to-default-value)
    - [Ajustes del hardware](#hardware-settings)
        - [Fabricante](#vendor)
        - [Versión del hardware](#hardware-version)
- [Ajustes del reproductor multimedia](#media-player-settings)
    - [Reproductor multimedia](#media-player)
    - [Ajustes de UDPXY](#udpxy-settings)
        - [Activar la compatibilidad con UDPXY](#enable-udxpy-support)
        - [URL del servidor UDPXY](#udpxy-server-url)
        - [Sustituir el protocolo de transmisión](#overwrite-stream-protocol)
- [Ajustes avanzados](#advanced-settings)

### Nombre del perfil {/* #profile-name */}
El nombre del perfil. Puede ser cualquier cadena de texto que no esté vacía.

### Ajustes del portal {/* #portal-settings */}
Opciones específicas del portal.
##### URL del portal {/* #portal-url */}
Introduce una URL absoluta **http://** o **https://**. Se admiten servidores de la red local, localhost, direcciones IPv6 y nombres de dominio internacionales. Las URL de red no deben contener espacios en blanco.
Para un portal interno también se acepta una ruta absoluta del sistema de archivos o una URL absoluta **file://** compatible. El editor rediseñado no acepta URL FTP.

##### Idioma del portal {/* #portal-language */}
El idioma predeterminado del portal, especificado como un código de idioma de dos letras [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### Ajustes del proxy HTTP {/* #http-proxy-settings */}
Ajustes del proxy HTTP.

##### Usar proxy HTTP {/* #use-http-proxy */}
Actívalo si quieres usar un proxy HTTP.

##### Nombre del servidor proxy {/* #proxy-host-name */}
El servidor proxy se especifica por separado del puerto; el servidor predeterminado es 127.0.0.1.
##### Puerto del proxy {/* #proxy-port */}
Valor predeterminado: 3128. Los editores del servidor y del puerto solo están disponibles cuando **Usar proxy HTTP** está activado.

##### El portal es interno {/* #portal-is-internal */}
Activa esta opción para usar un portal interno para dispositivos MAG. Una URL de portal local la activa automáticamente y deshabilita el interruptor. Al cambiar a una URL de red se elimina el ajuste automático de portal interno.

##### URL del portal (El portal es interno) {/* #internal-portal-url */}
Usa el campo **URL del portal** para introducir la ruta local o la URL del archivo; no hay un editor independiente para la URL interna.

Para instalar un portal, abre **Ajustes > Perfiles > tu perfil > Ajustes del portal**, usa la acción de instalación y selecciona su archivo comprimido. Espera a que termine la extracción
y confirma la URL local que se ofrece. Instalar los archivos y aceptar la URL son pasos independientes.
Usa la acción de eliminación de **Ajustes del portal** para eliminar un portal interno instalado.

### Configuración de STB {/* #stb-configuration */}
Los ajustes principales de emulación.

#### Modelo de STB {/* #stb-model */}
El modelo de STB que se emulará.

#### Firmware {/* #firmware */}
El **Firmware** que se emulará; no se instala ningún Firmware real. Algunos portales requieren un Firmware concreto.
En ese caso, selecciónalo en la lista si está disponible.
La mayoría de los modelos de STB compatibles solo ofrecen el Firmware **Generic**, que suele representar la versión más reciente.

Opciones de Firmware disponibles:
* Generic: normalmente, el Firmware más reciente disponible.
* Custom (solo MAG 250): Firmware personalizable. Úsalo si necesitas cambiar ajustes específicos del Firmware.

La mayoría de los usuarios debería usar el Firmware **Generic** (seleccionado de forma predeterminada).

#### Ajustes del firmware {/* #firmware-settings */}
Esta opción solo está disponible con el Firmware **Custom** (actualmente compatible solo con MAG 250).
Configura las versiones del motor de reproducción, de la API de JavaScript y de la API del STB, así como la versión, la descripción y la fecha de la imagen.
Activa el uso de un Agente de usuario personalizado antes de editar la cadena Agente de usuario personalizada.

#### Agente de usuario {/* #user-agent */}
La cadena Agente de usuario del navegador web de la aplicación.

#### Resolución de pantalla {/* #screen-resolution */}
La resolución de pantalla que se emulará; no cambia la resolución real de la pantalla.
Elige una resolución compatible con tu portal, normalmente **1280x720**.

#### Dirección MAC {/* #mac-address */}
La dirección MAC del dispositivo emulado. Puedes usar la dirección MAC de un dispositivo MAG 250 real que te pertenezca,
o 12 dígitos hexadecimales aleatorios (0–9, A–F), agrupados en pares separados por dos puntos. [^wrong_mac]

La mayoría de los portales requiere que la dirección MAC comience por 00:1A:79.

[^wrong_mac]: En algunos dispositivos que solo tienen Wi-Fi, la dirección MAC generada puede ser **00:1A:79:00:00:00**.
    Esto significa que la aplicación no ha podido detectarla correctamente debido a las restricciones de Android.
    Sustituye la parte **00:00:00** por dígitos hexadecimales aleatorios, manteniendo los dos puntos entre los pares.

#### Número de serie {/* #serial-number */}
El número de serie del dispositivo emulado. La mayoría de los portales no lo comprueba, por lo que normalmente sirve cualquier cadena de texto.

#### ID del dispositivo {/* #device-id */}
Ajustes del ID del dispositivo.

##### Usar ID del dispositivo basado en MAC {/* #use-mac-based-device-id */}
Genera el ID del dispositivo a partir de su dirección MAC. Pulsa **Restablecer el ID del dispositivo al valor predeterminado…** después de activar o
desactivar esta opción para regenerar el ID.

##### Enviar ID del dispositivo {/* #send-device-id */}
Envía el ID del dispositivo cuando un portal lo solicita. Si se desactiva, la aplicación envía una cadena vacía.

##### Semilla aleatoria del ID del dispositivo {/* #device-id-random-seed */}
La semilla usada para generar el ID del dispositivo. Usa la misma semilla en todos los dispositivos que usen la misma URL de portal y
dirección MAC. Al confirmar un cambio de semilla, los ID se regeneran automáticamente.
No pulses **Restablecer el ID del dispositivo al valor predeterminado…** si quieres conservar la semilla: esta acción la borra.

##### ID del dispositivo {/* #device-id-value */}
El ID del dispositivo. Usa el valor generado o introduce uno propio.

##### ID2 del dispositivo y firma personalizados {/* #custom-device-id-2-and-signature */}
Activa esta opción para editar ID del dispositivo 2 y la firma.

##### ID del dispositivo 2 {/* #device-id-2 */}
##### Firma {/* #signature */}
##### Restablecer el ID del dispositivo al valor predeterminado… {/* #reset-device-id-to-default-value */}
Tras la confirmación, se borra la semilla y se regeneran **ID del dispositivo**, **ID del dispositivo 2** y la firma a partir de los valores actuales del perfil. Se conservan los demás ajustes del perfil.

La edición manual del campo **ID del dispositivo** solo está disponible cuando la opción **Enviar ID del dispositivo** está activada y los ID basados en la MAC están desactivados.
Para editar los campos **ID del dispositivo 2** y **Firma**, también debes activar la opción **ID2 del dispositivo y firma personalizados**.
Los valores calculados automáticamente se pueden seguir consultando cuando la edición no está disponible.

#### Ajustes del hardware {/* #hardware-settings */}
##### Fabricante {/* #vendor */}
##### Versión del hardware {/* #hardware-version */}

Las opciones del dispositivo también incluyen la compatibilidad con Ministra y la redirección del navegador. Cámbialas solo cuando lo requiera tu portal.

### Ajustes del reproductor multimedia {/* #media-player-settings */}

Ajustes del reproductor multimedia para este perfil.
#### Reproductor multimedia {/* #media-player */}
Selecciona el reproductor multimedia predeterminado para este perfil.

La lista incluye la selección automática, Exo, el reproductor interno de Android y un reproductor externo,
además de los reproductores adicionales disponibles en tu compilación. Elige entre las opciones que muestra la aplicación.
La compatibilidad del reproductor interno con los códecs depende de Android; los reproductores externos abren las transmisiones en otra aplicación.

#### Ajustes de UDPXY {/* #udpxy-settings */}
##### Activar la compatibilidad con UDPXY {/* #enable-udxpy-support */}
Activa UDPXY solo después de introducir una URL de servidor HTTP/HTTPS válida.
##### URL del servidor UDPXY {/* #udpxy-server-url */}
Puedes introducir la URL mientras UDPXY está desactivado. Solo se permite una URL vacía mientras esté desactivado; una URL no vacía debe ser HTTP/HTTPS válida.
##### Sustituir el protocolo de transmisión {/* #overwrite-stream-protocol */}
Elige la sustitución del protocolo de la transmisión cuando UDPXY esté activado.
### Ajustes avanzados {/* #advanced-settings */}
Las opciones de compatibilidad específicas del perfil incluyen parches CSS, detección del emulador, correcciones del color de fondo, de archivos locales y de AJAX,
y eventos de retorno y de teclas para reproductores externos. Las opciones de los eventos Atrás, Salir y OK dependen de la opción del evento de retorno a la lista de canales.
Cámbialas solo cuando lo requiera tu portal o reproductor externo.
