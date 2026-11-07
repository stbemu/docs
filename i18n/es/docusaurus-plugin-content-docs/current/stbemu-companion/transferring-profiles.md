---
title: Transferencia de perfiles y ajustes
sidebar_label: Transferencias de perfiles
---

# Transferencia de perfiles y ajustes {/* #transferring-profiles-and-settings */}

Usa una transferencia para copiar contenido seleccionado directamente entre dos instalaciones StbEmu vinculadas distintas. Ambas deben estar conectadas y admitir las acciones elegidas de origen y destino. Para una copia en la misma instalación, usa [Copy profile > This device](profiles.md#copy-a-profile).

![Pantalla de transferencia esperando un destino compatible](/img/companion/transfer.png)

## Seleccionar y revisar {/* #select-and-review */}

1. Abre el dispositivo de origen y selecciona **Transfer to another device**.
2. Elige **Destination device**. Si no hay ninguno disponible, vuelve a **Devices**, conecta otro dispositivo vinculado y reinténtalo.
3. Selecciona **Application settings and remote mappings**, perfiles o ambos. Para los perfiles, elige **Do not copy profiles**, **All profiles** o **Choose individual profiles**. Debes seleccionar al menos una categoría.
4. Selecciona **Review transfer**. Examina perfiles nuevos, cambios de ajustes, efectos de las asignaciones del mando, cambios del perfil activo, exclusiones e incompatibilidades.
5. Selecciona **I confirm these changes** y después **Confirm transfer**.

La selección individual requiere una lista completa y actual de perfiles del origen. Si desaparece un perfil seleccionado, usa **Refresh** para comprobar la lista y después desmarca explícitamente los perfiles que sigan ausentes. Actualizar no elimina ni sustituye silenciosamente los perfiles seleccionados.

## Qué cambia {/* #what-changes */}

Los perfiles transferidos son copias nuevas con identidades nuevas en el destino. Se conservan los perfiles existentes del destino. Se mantienen direcciones MAC, números de serie, ID de dispositivo y otros valores de perfil; copiar no crea una suscripción nueva ni una autorización del proveedor. Este procedimiento no ofrece **Merge**/**Replace all**; esos modos pertenecen a la [restauración de copias](backups.md#restore-a-backup).

Las transferencias solo de perfiles conservan los ajustes de la aplicación, las asignaciones del mando y la selección activa del destino. Las transferencias solo de ajustes conservan los perfiles y la selección activa del destino. Al copiar ambos, el perfil activo del origen se activa mediante su nueva copia solo si está incluido; en caso contrario, se conserva la selección activa del destino.

Los ajustes de la aplicación incluyen preferencias portátiles de StbEmu y asignaciones de teclas del mando, no el idioma/tema de Companion, autorizaciones de vinculación, identidad del servicio ni historial de operaciones. Los valores no admitidos se notifican en lugar de descartarse silenciosamente. Revisa los ajustes relacionados con contraseñas y otros que se sobrescriban antes de confirmar. Algunos ajustes guardados requieren un cambio de ciclo de vida o reinicio de StbEmu; consulta [aplicación de ajustes guardados](backups.md#results-and-applying-saved-settings).

Cuando Companion informa de que la instantánea del origen está verificada, ese intento concreto puede continuar aunque el origen se desconecte. La transferencia no crea una entrada permanente en la biblioteca de copias. Para resultados inciertos o cancelaciones, usa los [resultados de operaciones](profiles.md#operation-results).
