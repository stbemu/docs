---
title: Copia de seguridad del sistema Android
sidebar_label: Copia de seguridad del sistema Android
---

# Copia de seguridad del sistema Android {/* #android-system-backup */}

Abre **Settings > Backups > System backup**. La copia del sistema Android puede restaurar preferencias de Companion, dispositivos y nombres guardados, confianza verificada y credenciales de vinculación aún válidas tras una restauración correcta de Android. Es independiente de restaurar una [copia JSON de StbEmu](backups.md) en un dispositivo vinculado.

## Incluir archivos locales {/* #include-local-archives */}

**Include local archives** está activado de forma predeterminada. Incluye las copias completas de StbEmu aptas de la biblioteca local en futuras copias del sistema. Desactivarlo conserva los archivos locales y los ajustes/dispositivos de Companion, pero excluye los archivos de futuras copias. No elimina contenido anterior de la nube.

La página muestra una estimación del tamaño seleccionado. Usa **Refresh estimate** para medir de nuevo, **Open Android settings** para comprobar la configuración de copia de Android o **Open archive library / manual export** para exportar los archivos por tu cuenta.

## Disponibilidad y límites {/* #availability-and-limits */}

La copia del sistema requiere **Android 9 o posterior**, aunque Companion admite Android 8. La copia cifrada en la nube también necesita una cuenta compatible, bloqueo de pantalla seguro y cifrado del lado del cliente de Android. Android controla la programación, la disponibilidad del transporte y la disponibilidad de restauración.

La cuota nominal en la nube es **25 MiB**; la cuota real disponible puede ser inferior. El límite de **256 MiB** entre dispositivos es un límite de la aplicación, no una promesa de capacidad del transporte. Si la selección completa es demasiado grande, excluye los archivos locales o expórtalos manualmente. Companion no copia silenciosamente solo parte de la selección.

Una estimación o un mensaje de preparación local no confirma que Android haya guardado una copia en la nube. Una estimación no disponible no es una copia de tamaño cero. Si la página indica que la copia está desactivada o no se admite, exporta los archivos manualmente en vez de suponer que los datos están protegidos.

## Después de que Android restaure Companion {/* #after-android-restores-companion */}

Los dispositivos restaurados deben verificarse antes de aparecer como conectados. Las credenciales de vinculación aún autorizadas permiten reconectar sin una vinculación nueva, pero restaurar no anula una revocación en StbEmu. Las copias restauradas comparten las mismas autorizaciones; revocar una autorización también afecta a esas copias.

La biblioteca muestra los archivos completos que realmente se restauraron. Los metadatos por sí solos no recrean archivos ausentes. Una operación sin terminar no se envía automáticamente otra vez; reconecta y consulta los [resultados de operaciones](profiles.md#operation-results) cuando estén disponibles.
