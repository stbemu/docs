---
title: Mando a distancia
sidebar_label: Mando a distancia
---

# Mando a distancia {/* #remote-control */}

Abre un dispositivo conectado y selecciona **Remote control**. La acción solo aparece si el dispositivo admite entrada remota autorizada. Estos controles manejan StbEmu y su portal; son independientes del antiguo servicio de mando MAG descrito en [Mando remoto antiguo](../settings/common_settings.md#legacy-remote).

![Mando desplazable con teclas de colores y cruceta](/img/companion/remote-control.png)

Toca un botón para su acción normal. Mantenlo pulsado para una acción prolongada o pulsaciones repetidas, si se admiten. Suéltalo para dejar de mantenerlo pulsado. Los botones disponibles y el comportamiento de pulsación prolongada dependen del dispositivo; no todas las teclas admiten repetición. Desplázate para llegar al resto de controles, incluidos reproducción, volumen, canal y teclas numéricas.

Solo hay un gesto de tecla activo a la vez. Salir de la página del mando o de la aplicación, perder la conexión o perder la autorización cancela la entrada activa. La entrada remota no se reproduce tras reconectar: reconecta y vuelve a pulsar deliberadamente.

## Interpretar las indicaciones {/* #read-the-feedback */}

La respuesta local a pulsaciones normales o prolongadas significa que Companion reconoció el gesto. **Awaiting device confirmation** indica que el resultado sigue pendiente. **Device accepted input** confirma que StbEmu aceptó la entrada, no que necesariamente haya terminado una acción de canal o portal.

Para **Input target unavailable**, comprueba la conexión. Para **Authorization expired. Pair again.**, muestra un código nuevo en StbEmu e introdúcelo en Companion. Si una acción ya no se admite, deja de usarla y comprueba los controles disponibles. Reconecta si la entrada sigue sin estar disponible.

Cambia la vibración del mando en **Settings > Interface > Remote control haptic feedback**. Es independiente de **UI haptic feedback**; las indicaciones visuales siguen disponibles con la vibración desactivada.
