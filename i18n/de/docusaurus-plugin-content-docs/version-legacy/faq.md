---
id: faq
title: Häufige Fragen
sidebar_label: Häufige Fragen
---

import FAQ from '@site/src/components/FAQ';

# Häufige Fragen {/* #faq */}

<FAQ id="google-play-pay-again" question="Ich habe StbEmu Pro bei Google Play bezahlt, kann es aber nicht herunterladen. Google Play fordert mich erneut zur Zahlung auf">
    Dies ist ein bekanntes Problem von Google Play. Die Verarbeitung Ihrer Zahlung und die Aktualisierung der Daten auf Ihren Geräten können bis zu 24 Stunden dauern.
    Sie können auch auf Ihrem Computer oder Mobilgerät einen Webbrowser öffnen, [Google Play](https://play.google.com/store) aufrufen,
    StbEmu Pro suchen ([Direktlink](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro))
    und die Installation auf Ihren Geräten aus der Ferne starten.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="Die App setzt die Lautstärke beim Senderwechsel zurück">
    Dies ist ein bekanntes Problem einiger Geräte von Sony, Philips und Xiaomi. Es kann auch andere Geräte betreffen.

    Stellen Sie die App zur Behebung so ein, dass sie die systemweite Lautstärke verwendet:
    Öffnen Sie [Settings](settings/index.md) > [Common settings](settings/common_settings.md) und aktivieren Sie ***Always use system volume level***.
    Laden Sie das aktive Portal über das App-Menü neu, damit die Änderungen wirksam werden.
</FAQ>

<FAQ id="customize-portal-ui" question="Wie kann ich die Oberfläche des Portals anpassen? Mir gefallen die Farben oder Symbole nicht">
    Portale werden auf den Servern Ihres IPTV-Anbieters gehostet. Sie können die Oberfläche nur anpassen, wenn Ihr Anbieter diese Möglichkeit anbietet.
    Die meisten Portale unterstützen keine Anpassung der Oberfläche. Daher kann nur der IPTV-Anbieter ihr Aussehen ändern.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="Sender verschwinden beim Neuladen des Portals aus Favorites oder lassen sich nicht umsortieren">
    Alle Senderlisten, einschließlich der Favoriten, werden auf den Servern Ihres IPTV-Anbieters gespeichert. Wenn die App Ihre Favoriten nicht
    oder in falscher Reihenfolge lädt, hat Ihr IPTV-Anbieter das Portal nicht richtig konfiguriert.
    Nur Ihr Anbieter kann dieses Problem beheben.
</FAQ>

<FAQ id="channels-buffer" question="Die Wiedergabe der Sender wird häufig zum Puffern unterbrochen">
    Häufiges Puffern bedeutet meist, dass Ihre Netzwerkverbindung oder die Verbindung Ihres IPTV-Anbieters nicht zuverlässig oder schnell genug ist,
    um Videos auf Ihr Gerät zu streamen. Wenn Ihre Verbindung sicher ordnungsgemäß funktioniert, melden Sie das Problem Ihrem IPTV-Anbieter.
</FAQ>

<FAQ id="m3u-support" question="Unterstützt die App M3U-Wiedergabelisten?">
    StbEmu unterstützt weder M3U- noch andere Wiedergabelisten, sondern ausschließlich Portale für MAG-Boxen.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="Ich kann in der App keine Sicherung erstellen oder wiederherstellen">
    Diese Funktion arbeitet derzeit nur unter Android 10 und älter zuverlässig. Ab Android 11 können Apps standardmäßig Dateien
    nur in ihren eigenen Ordnern lesen und schreiben. Apps können die Berechtigung zum Zugriff auf andere Ordner anfordern, was jedoch auf einigen
    Android-TV-Geräten und Set-Top-Boxen (STBs) nicht funktioniert. Die zugrunde liegenden Probleme werden nicht behoben:
    [1](https://issuetracker.google.com/issues/71327396), [2](https://issuetracker.google.com/issues/202985150).

    Wenn Ihr Gerät betroffen ist, können Sie darauf keine Sicherungen erstellen oder wiederherstellen.
</FAQ>
