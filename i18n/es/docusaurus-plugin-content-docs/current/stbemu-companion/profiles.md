---
title: Gestión de perfiles
sidebar_label: Perfiles
---

# Gestión de perfiles {/* #managing-profiles */}

Abre un dispositivo conectado y selecciona **Profiles**. La lista muestra nombres de perfiles, identificadores (UUID) y direcciones de portal disponibles. Selecciona un perfil para consultar sus ajustes. Usa **Load more** para ver más páginas y **Refresh** para obtener datos actuales. Las acciones dependen de los permisos que admita el dispositivo.

## Crear, editar y eliminar {/* #create-edit-and-delete */}

- Selecciona **Create profile** en la lista. Los campos de creación admitidos incluyen **Name** y **Portal URL**. Los campos que no toques usan los valores predeterminados de StbEmu.
- Abre un perfil y selecciona **Edit profile** para cambiar los campos editables admitidos. Solo cambian los campos editados; se conservan los ajustes adicionales retenidos por el dispositivo.
- Selecciona **Delete profile** para preparar una eliminación. Revisa cualquier cambio de perfil activo o perfil de sustitución antes de confirmar.

Selecciona **Review changes**, examina la vista previa y las advertencias y después selecciona **Confirm changes** o **Confirm deletion**. La primera acción no guarda ni elimina el perfil inmediatamente. Los cambios incompatibles no se pueden confirmar. Si el perfil o los campos disponibles cambian durante la edición, actualiza y revisa de nuevo.

Para conocer el significado de los campos de perfil de StbEmu, consulta [Perfiles STB](../settings/profiles.md).

## Copiar un perfil {/* #copy-a-profile */}

Abre un perfil y selecciona **Copy profile**. Elige **This device** para una copia en el mismo dispositivo y después revisa y confirma los cambios. La copia tiene una identidad nueva; no la identifiques solo por su nombre. **Edit copied profile**, cuando está disponible tras completarse, abre la copia devuelta en lugar del original.

Elegir otro dispositivo vinculado apto abre el [procedimiento de la guía de transferencia](transferring-profiles.md) con ese perfil seleccionado.

## Resultados de operaciones {/* #operation-results */}

Si falla la conexión o el resultado es incierto, abre **Recent operation results** del dispositivo y usa **Check result** antes de iniciar otro cambio. La consulta necesita una conexión autorizada y comprueba la operación original; no envía el cambio otra vez. Esto también se aplica a [transferencias](transferring-profiles.md) y [restauraciones de copias de seguridad](backups.md).

Una vista previa caducada exige una nueva revisión explícita. La cancelación puede coincidir con el guardado; lee el resultado final en vez de suponer que **Cancel operation** deshizo los cambios. **Changes saved on the device** confirma los datos guardados; su aplicación en ejecución puede seguir pendiente. Consultar un resultado no vuelve a intentar esa actualización, y consultar el historial nunca recrea una copia de perfil eliminada.
