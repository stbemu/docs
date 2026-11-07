---
id: profiles
title: Профили
sidebar_label: Профили
---

# STB profiles

**Профиль STB** — набор параметров для эмуляции приставки в приложении. При первом запуске создаётся один профиль. Его можно изменить или добавить другие для загрузки разных порталов на одном устройстве. Для создания профиля дважды коснитесь экрана: сверху или сбоку появится меню [^1]. Выберите **Settings**, затем **Profiles**, где можно добавлять и изменять профили.

StbEmu не предоставляет, не размещает и не индексирует медиаконтент или списки воспроизведения IPTV. Пользователи должны иметь законное право на доступ к контенту через эмулятор.

[^1]: Если вы пользуетесь 3D-пультом или мышью, переместите указатель, щёлкните по экрану и откройте меню приложения сверху.

- [Profile name](#profile-name)
- [Portal settings](#portal-settings)
    - [Portal URL](#portal-url)
    - [Portal language](#portal-language)
    - [HTTP Proxy settings](#http-proxy-settings)
        - [Use HTTP proxy](#use-http-proxy)
        - [Proxy host name](#proxy-host-name)
        - [Proxy port](#proxy-port)
    - [Portal is internal](#portal-is-internal)
    - [Internal portal URL](#internal-portal-url)
- [STB configuration](#stb-configuration)
    - [STB Model](#stb-model)
    - [Firmware](#firmware)
    - [Firmware settings](#firmware-settings)
    - [User Agent](#user-agent)
    - [Screen resolution](#screen-resolution)
    - [MAC address](#mac-address)
    - [Serial number](#serial-number)
    - [Device ID](#device-id)
        - [Use MAC-based device ID](#use-mac-based-device-id)
        - [Send Device ID](#send-device-id)
        - [Device ID random seed](#device-id-random-seed)
        - [Device ID](#device-id-value)
        - [Custom device ID 2 and signature](#custom-device-id-2-and-signature)
        - [Device ID 2](#device-id-2)
        - [Signature](#signature)
        - [Reset device ID to default value](#reset-device-id-to-default-value)
    - [Hardware settings](#hardware-settings)
        - [Vendor](#vendor)
        - [Hardware version](#hardware-version)
    - [IP address](#ip-address)
- [Media player settings](#media-player-settings)
    - [Media player](#media-player)
    - [UDPXY settings](#udpxy-settings)
        - [Enable UDPXY support](#enable-udxpy-support)
        - [UDPXY server URL](#udpxy-server-url)
        - [Overwrite stream protocol](#overwrite-stream-protocol)
- [Advanced settings](#advanced-settings)

### Profile name
Имя профиля. Допускается любая непустая строка.

### Portal settings
Параметры конкретного портала.
##### Portal URL
Адрес портала. Он должен начинаться со схемы (**http://**, **https://**, **ftp://** и т. д.).

##### Portal language
Язык портала по умолчанию — двухбуквенный код языка по стандарту [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Параметры HTTP-прокси.

##### Use HTTP proxy
Включите, если хотите использовать HTTP-прокси.

##### Proxy host name
##### Proxy port

##### Portal is internal
Включите для использования внутреннего портала устройств MAG.

##### Internal portal URL

### STB configuration
Основные параметры эмуляции.

#### STB Model
Модель приставки для эмуляции.

#### Firmware
Эмулируемая **прошивка**; настоящая прошивка не устанавливается. Некоторые порталы требуют определённую прошивку. В таком случае выберите её из списка, если она доступна. Для большинства поддерживаемых моделей STB доступна только **Generic**, обычно соответствующая последней версии.

Доступные варианты прошивки:

* Generic: обычно последняя доступная прошивка.
* Custom (только MAG 250): настраиваемая прошивка. Используйте её, если нужно изменить отдельные параметры прошивки.

Большинству пользователей следует использовать прошивку **Generic**, выбранную по умолчанию.

#### Firmware settings
Параметр доступен только с прошивкой **Custom** (сейчас только для MAG 250). Здесь можно задать отдельные параметры прошивки, например версию или собственную строку User Agent.

#### User Agent
Строка User Agent веб-браузера приложения.

#### Screen resolution
Эмулируемое разрешение; фактическое разрешение экрана не меняется. Выберите поддерживаемое порталом значение, обычно **1280x720**.

#### MAC address
MAC-адрес эмулируемого устройства. Можно использовать адрес принадлежащего вам устройства MAG 250 или 12 случайных шестнадцатеричных цифр (0–9, A–F), сгруппированных попарно и разделённых двоеточиями. [^wrong_mac]

Большинство порталов требуют, чтобы MAC-адрес начинался с 00:1A:79.

[^wrong_mac]: На некоторых устройствах только с Wi-Fi созданный MAC-адрес может быть **00:1A:79:00:00:00**. Это значит, что приложению не удалось определить его из-за ограничений Android. Замените часть **00:00:00** случайными шестнадцатеричными цифрами, сохраняя двоеточия между парами.

#### Serial number
Серийный номер эмулируемого устройства. Большинство порталов его не проверяют, поэтому обычно подойдёт произвольная текстовая строка.

#### Device ID
Параметры идентификатора устройства.

##### Use MAC-based device ID
Создаёт идентификатор на основе MAC-адреса устройства. После включения или отключения нажмите **Reset device ID**, чтобы создать идентификатор заново.

##### Send Device ID
Отправляет идентификатор по запросу портала. Если выключено, отправляется пустая строка.

##### Device ID random seed
Начальное значение для генерации идентификатора. Используйте одинаковое значение на устройствах с одинаковыми URL портала и MAC-адресом. После изменения нажмите **Reset device ID**.

##### Device ID value
Идентификатор устройства. Используйте созданное значение или введите своё.

##### Custom device ID 2 and signature
Включите для изменения Device ID 2 и подписи.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Заново создаёт **Device ID**, **Device ID 2** и подпись.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
IP-адрес, отправляемый порталу по запросу. Это эмулируемый адрес, а не фактический IP-адрес устройства. Большинство порталов не используют эти сведения, поэтому обычно менять параметр не нужно.
### Media player settings

Параметры проигрывателя для этого профиля.
#### Media player
Выберите проигрыватель по умолчанию для этого профиля.

| Проигрыватель  | Описание                                                                                                                                          | Примечание                                                 |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo             | [GitHub](https://github.com/google/ExoPlayer)                                                                                                        | Проигрыватель по умолчанию, рекомендуется для большинства устройств |
| VLC             | [Сайт](https://www.videolan.org)                                                                                                                 |                                                         |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk             | [GitHub](https://github.com/bilibili/ijkplayer)                                                                                                      | Не поддерживает субтитры                               |
| Internal player | Использует проигрыватель Android. Кодеки зависят от версии Android на устройстве.                                                          | Не поддерживает субтитры                               |
| External player | Можно использовать почти любой внешний проигрыватель. Интеграция с эмулятором недоступна; потоки открываются в другом приложении. |                                                         |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
