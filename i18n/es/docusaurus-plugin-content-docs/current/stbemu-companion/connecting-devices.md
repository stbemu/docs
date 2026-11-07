---
title: Conexión de dispositivos
sidebar_label: Conexión de dispositivos
---

# Conexión de dispositivos {/* #connecting-devices */}

## Buscar StbEmu {/* #discover-stbemu */}

1. Conecta el teléfono o la tableta y el dispositivo StbEmu a la misma red local accesible.
2. En StbEmu, abre **Settings > Companion** y activa el servicio. Consulta los [ajustes de Companion de StbEmu](../settings/companion.md).
3. Abre la página **Devices** de Companion. Los dispositivos verificados aparecen como tarjetas guardadas. Abre la tarjeta de la instalación de StbEmu que quieras gestionar.

![Página de dispositivos buscando en la red local](/img/companion/devices-empty.png)

Si no aparece nada, comprueba que el acceso de Companion esté activado en StbEmu y que Android permita acceder a la red local. Selecciona **Retry** o conéctate manualmente.

### Añadir una dirección manualmente {/* #add-an-address-manually */}

Selecciona **Add by IP address**. Introduce **IPv4 or IPv6 address** y el puerto mostrados en StbEmu y selecciona **Connect**. Si dejas el puerto vacío, se usa **10000**. Introduce una dirección IP, no una URL web ni un nombre de host. La entrada manual no evita la verificación ni la vinculación. Los dispositivos con una vinculación guardada válida pueden reconectarse sin introducir un código nuevo.

![Dispositivo guardado pendiente de vinculación](/img/companion/devices-saved.png)

## Vincular un dispositivo {/* #pair-a-device */}

1. En **Settings > Companion** de StbEmu, inicia la vinculación para mostrar un código.
2. En la página de acciones del dispositivo en Companion, introduce el código en **Eight-digit pairing code**.
3. Selecciona **Pair device** y espera a **Connected**.

![Introducción de un código de vinculación](/img/companion/pairing.png)

Si el código caduca, muestra uno nuevo en StbEmu. Si se limita la frecuencia de los intentos, espera antes de repetirlos. La vinculación se guarda para conexiones posteriores mientras StbEmu siga autorizándola. Revocar el acceso en StbEmu también impide usar la autorización guardada.

## Reconectar, renombrar o quitar {/* #reconnect-rename-or-remove */}

**Disconnect** cierra la conexión y conserva el dispositivo guardado. Para reconectarlo, abre su tarjeta y selecciona **Connect**. Un cambio de red puede interrumpir las conexiones; reconecta cuando vuelva la conectividad local.

Usa el botón del lápiz (**Rename device**) para asignar un nombre local. **Use app name** restablece el nombre comunicado por StbEmu. Este cambio no renombra el propio StbEmu.

El botón de la papelera (**Remove device**) pide confirmación. Quita la conexión y la vinculación guardadas de este teléfono, conserva los archivos de copia de seguridad y no cambia nada en StbEmu. El dispositivo quitado no reaparecerá automáticamente mediante la detección. Para añadirlo de nuevo, usa **Add by IP address** y vuelve a vincularlo.
