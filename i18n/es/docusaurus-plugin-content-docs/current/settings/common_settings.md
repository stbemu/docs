---
id: common-settings
title: Ajustes de la aplicación
sidebar_label: Ajustes de la aplicación
---

# Application settings {/* #application-settings */}

Las opciones generales de la aplicación se agrupan en las siguientes categorías de [Settings](/settings). Las opciones específicas de cada perfil están en [Profiles](/settings/profiles).

## Appearance & controls {/* #appearance--controls */}

| Opción | Función |
|--------|---------|
| App language | Usa un idioma compatible o el predeterminado del sistema Android. |
| Hide navigation bar | Oculta los botones de navegación de Android cuando sea posible. En una pantalla táctil, el primer toque puede mostrar la navegación y puede ser necesario un segundo toque para mostrar los controles de la aplicación. |
| Always show overlay buttons | Muestra los controles en pantalla. Puedes desactivarlo en un dispositivo de TV si al pulsar las teclas del mando aparecen botones no deseados. |
| Hide controls after… (ms) | Establece en milisegundos el tiempo que tardan en ocultarse los controles en pantalla. Valor predeterminado: 5000 (5 segundos). |
| Screen orientation | Elige cómo se comporta la orientación de la aplicación. |
| Keyboard type | Elige el teclado que usa la aplicación. |
| Software keyboard input method | Elige cómo se procesa la entrada del teclado por software. |

## Playback & behavior {/* #playback--behavior */}

| Opción | Función |
|--------|---------|
| Pause media in background | Pausa la reproducción al cambiar a otra aplicación. Este control no está disponible mientras esté activado el modo automático de imagen en imagen. |
| Picture-in-picture | Usa el modo de imagen en imagen al salir de la aplicación, cuando Android y el dispositivo lo permitan. |
| Auto start on device boot | Inicia la aplicación tras el arranque del dispositivo. La aplicación debe estar instalada en el almacenamiento interno; una pantalla de bloqueo puede retrasar el inicio hasta que se desbloquee. |
| Always use system volume level | Usa el volumen del sistema en lugar de un volumen independiente para la aplicación. |
| Enable recommendations | Muestra tarjetas de recomendación de perfiles en las pantallas de inicio de Android TV compatibles. |
| Media sessions | Activa la integración con las sesiones multimedia de Android. |

## Network {/* #network */}

**Scaling method** cambia el escalado del navegador si un portal se ve demasiado grande o pequeño. La mayoría de los dispositivos pueden mantener el valor predeterminado; una pantalla de baja resolución puede necesitar otro método.

**Enable network cache** almacena en caché las solicitudes de red para mejorar la carga del portal. Desactívalo si encuentras problemas repetidos de autenticación u otros problemas de red.

El **Cache size** se introduce en KB. El valor predeterminado es **20480 KB (20 MB)**. Reinicia la aplicación cuando se te indique para aplicar el cambio de tamaño de la caché.

## Security {/* #security */}

Activa la protección de los ajustes mediante contraseña y establece la contraseña. Los ajustes protegidos requieren autenticación. El editor de contraseñas no conserva el valor secreto cuando se vuelve a crear la pantalla; introdúcelo de nuevo si es necesario.

## Legacy remote {/* #legacy-remote */}

Esta categoría configura el servicio antiguo de mando por software para MAG 250, AuraHD y aplicaciones de mando similares. Es independiente de [Companion](/settings/companion) y de la [asignación de teclas físicas](/settings/key-maps).

Activa el servicio y configura el nombre del dispositivo y la contraseña. El nombre y la contraseña admiten hasta 32 caracteres cada uno. Esta categoría solo está disponible en las ediciones de la aplicación que la habilitan.
