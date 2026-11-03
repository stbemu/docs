---
id: backup-restore
title: Copia de seguridad y restauración
sidebar_label: Copia de seguridad y restauración
---

# Backup & restore {/* #backup--restore */}

Abre **Settings > Backup & restore**. Esta categoría solo está disponible cuando las operaciones de copia de seguridad están habilitadas en tu aplicación.

## Guardar o compartir una copia de seguridad {/* #save-or-share-a-backup */}

Selecciona **Save settings and profiles…** y elige un destino en el selector de documentos de Android. Selecciona **Share settings and profiles…** para crear una copia de seguridad y enviarla a través de la interfaz de compartir de Android.

Si no hay un selector de documentos disponible, la aplicación usa las carpetas de copias de seguridad accesibles y su explorador de archivos. **Browse saved backups** muestra las copias encontradas en las carpetas disponibles. Los permisos del dispositivo y los proveedores de archivos disponibles pueden limitar los archivos a los que puedes acceder.

## Restaurar una copia de seguridad {/* #restore-a-backup */}

1. Selecciona **Restore settings and profiles…** y elige una copia de seguridad, o selecciónala en el explorador de copias guardadas.
2. Revisa el nombre del archivo, el número de perfiles y los efectos de la restauración indicados.
3. Confirma la restauración. Cancelar el selector o denegar el permiso no la inicia.

La restauración actualiza los perfiles coincidentes, restaura los ajustes de la aplicación y sustituye las asignaciones de teclas del mando. La identidad del servicio Companion, las credenciales, los registros de dispositivos revocados y el historial de operaciones no se incluyen en las copias de seguridad portátiles.

:::warning
La restauración aplica los cambios en varios pasos. Si falla un paso posterior, es posible que los cambios anteriores ya se hayan guardado. Vuelve a cargar los ajustes y revisa la configuración actual después de un fallo. Este proceso de restauración local no permite deshacer toda la restauración ni elegir entre combinar o sustituir.
:::
