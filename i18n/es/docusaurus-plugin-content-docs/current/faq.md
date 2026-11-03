---
id: faq
title: Preguntas frecuentes
sidebar_label: Preguntas frecuentes
---

import FAQ from '@site/src/components/FAQ';

# Preguntas frecuentes {/* #faq */}

<FAQ id="google-play-pay-again" question="He pagado StbEmu Pro en Google Play, pero no puedo descargarlo. Google Play me pide que vuelva a pagar">
    Este es un problema conocido de Google Play. Espera hasta 24 horas para que Google Play procese el pago y actualice los datos en tus dispositivos.
    También puedes abrir un navegador web en tu ordenador o dispositivo móvil, ir a [Google Play](https://play.google.com/store),
    buscar StbEmu Pro ([enlace directo](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro))
    e instalarlo a distancia en tus dispositivos.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="La aplicación restablece el nivel de volumen cuando cambio de canal">
    Este es un problema conocido de algunos dispositivos Sony, Philips y Xiaomi. También puede afectar a otros dispositivos.

    Para solucionarlo, configura la aplicación para que use el nivel de volumen del sistema (global):
    ve a [Settings](/settings) > [Playback & behavior](/settings/common-settings#playback--behavior) y activa ***Always use system volume level***.
    Vuelve a cargar el portal activo desde el menú de la aplicación para aplicar los cambios.
</FAQ>

<FAQ id="customize-portal-ui" question="¿Cómo puedo personalizar la interfaz del portal? No me gustan los colores o los iconos">
    Los portales se alojan en los servidores de tu proveedor de IPTV. Solo puedes personalizar la interfaz si tu proveedor ofrece esa opción.
    La mayoría de los portales no permiten personalizar la interfaz, por lo que solo el proveedor de IPTV puede cambiar su aspecto.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="Los canales desaparecen de Favorites cuando vuelvo a cargar el portal o no puedo cambiar su orden">
    Todas las listas de canales, incluidos los favoritos, se almacenan en los servidores de tu proveedor de IPTV. Si la aplicación no carga tus favoritos
    o los carga en un orden incorrecto, tu proveedor de IPTV no ha configurado correctamente el portal.
    Solo tu proveedor puede solucionar este problema.
</FAQ>

<FAQ id="channels-buffer" question="Los canales se interrumpen con frecuencia para almacenar datos en búfer durante la reproducción">
    Las interrupciones frecuentes por almacenamiento en búfer suelen indicar que tu conexión de red o la de tu proveedor de IPTV no es lo bastante estable o rápida
    para transmitir vídeo a tu dispositivo. Si estás seguro de que tu conexión funciona correctamente, informa del problema a tu proveedor de IPTV.
</FAQ>

<FAQ id="m3u-support" question="¿La aplicación admite listas de reproducción M3U?">
    StbEmu no admite M3U ni otras listas de reproducción. Solo admite portales diseñados para dispositivos MAG.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="No puedo crear ni restaurar una copia de seguridad en la aplicación">
    En la interfaz de ajustes rediseñada, abre [Backup & restore](/settings/backup-restore) y usa el selector de documentos de Android para elegir un archivo o una ubicación donde guardarlo.
    Si no hay un selector disponible, la aplicación usa las carpetas de copias de seguridad accesibles y su explorador de archivos.
    Comprueba los permisos del dispositivo y el acceso al archivo seleccionado. Antes de restaurar, revisa el nombre de la copia de seguridad y el número de perfiles y confirma la operación.
</FAQ>
