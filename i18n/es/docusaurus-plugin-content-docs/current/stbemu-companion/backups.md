---
title: Copias de seguridad y restauración
sidebar_label: Copias de seguridad y restauración
---

# Copias de seguridad y restauración {/* #backups-and-restore */}

La biblioteca **Backups** de Companion guarda de forma privada copias JSON completas de StbEmu en el teléfono o la tableta. Los archivos guardados siguen disponibles sin conexión. Esta biblioteca es independiente de la [copia de seguridad del sistema Android](system-backup.md), que protege el propio estado de Companion.

![Biblioteca de copias de seguridad y creación de una copia del dispositivo](/img/companion/backup-library.png)

## Guardar y gestionar archivos {/* #save-and-manage-files */}

- **Create backup:** abre la acción **Create backup** de un dispositivo vinculado conectado, introduce **Backup name** y selecciona **Create backup**. Espera a **Backup saved**.
- **Import backup:** abre **Backups** desde el menú de la aplicación, selecciona **Import backup** y elige un archivo JSON de StbEmu. La importación, exportación y compartición locales no requieren un dispositivo StbEmu conectado.
- **Export JSON:** selecciona esta acción en la entrada de la copia en la biblioteca y elige un destino externo.
- **Share JSON:** selecciona esta acción en la entrada de la copia para abrir el panel para compartir de Android. Abrirlo no confirma la entrega a la aplicación elegida.
- **Delete local backup:** confirma la eliminación de esa copia local. El dispositivo StbEmu de origen no cambia.

El límite de JSON es **16 MiB (16,777,216 bytes)**. Los archivos importados se validan y conservan sus bytes originales. Un archivo importado lleva la etiqueta **Source device unknown**; una comprobación de integridad no determina quién lo creó. Una exportación externa fallida puede dejar un archivo de destino incompleto mientras se conservan las copias locales existentes.

:::note
Los archivos de copia pueden contener contraseñas, datos de portales e identificadores de dispositivos. Exportar y compartir conservan esos valores; elige el destino o destinatario en consecuencia.
:::

## Restaurar una copia de seguridad {/* #restore-a-backup */}

1. Selecciona **Restore backup** desde una entrada de la biblioteca o la página de acciones de un dispositivo.
2. Elige **Destination device**, **Backup to restore** y un **Restore mode** compatible.
3. Selecciona **Review restore**. Revisa perfiles añadidos, sobrescritos y eliminados; **Changed settings**; asignaciones del mando; metadatos locales excluidos; y campos incompatibles o bloqueados.
4. Marca la casilla de confirmación y selecciona **Apply restore**.

![Pantalla de restauración que muestra el comportamiento de Merge](/img/companion/restore.png)

**Merge** sobrescribe perfiles con UUID coincidentes, añade perfiles nuevos y conserva los perfiles que solo existen en el destino. **Replace all** también elimina perfiles del destino ausentes en la copia. La coincidencia usa identificadores, no nombres de perfil. Ambos modos restauran ajustes portátiles de la aplicación y asignaciones del mando. Se excluyen los metadatos locales del destino, como los ID locales de fila, la versión de la aplicación y el directorio de actualización.

:::warning
Revisa cada sobrescritura y eliminación antes de aplicar. Replace all sustituye el conjunto de perfiles; no permite añadir solo perfiles seleccionados. Para copias selectivas, usa [transferencias de perfiles](transferring-profiles.md).
:::

## Resultados y aplicación de ajustes guardados {/* #results-and-applying-saved-settings */}

Una vista previa caducada requiere **Start a new attempt** y una nueva revisión. Si el resultado es incierto, consulta los [resultados de operaciones](profiles.md#operation-results) antes de repetir una restauración. La recuperación puede consultar el destino aunque la copia original ya no esté disponible.

Los ajustes guardados y sus efectos en ejecución son cosas distintas. Si cambian, los ajustes del mando virtual se aplican en la siguiente pausa/reanudación normal de StbEmu, el tamaño de caché requiere reiniciar el proceso StbEmu y el idioma puede recrear su actividad. La opción de compatibilidad UPnP no activa ni desactiva el funcionamiento actual de UPnP, ni siquiera tras reiniciar. **Check result** no reintenta estas actualizaciones en ejecución.
