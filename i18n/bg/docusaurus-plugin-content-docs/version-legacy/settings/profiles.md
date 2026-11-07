---
id: profiles
title: Профили
sidebar_label: Профили
---

# STB профили {/* #stb-profiles */}

**STB профилът** е набор от опции за емулация на приемник в приложението. При първото стартиране приложението създава един профил.
Можете да го редактирате или да добавите още профили, за да зареждате различни портали на едно и също устройство.
За да създадете профил, докоснете екрана два пъти, за да покажете менюто отгоре или отстрани [^1].
Изберете **Settings**, след това **Profiles**, където можете да добавяте или редактирате профили.

StbEmu не предоставя, хоства или индексира мултимедийно съдържание или IPTV плейлисти.
Потребителите трябва да имат законно право на достъп до съдържанието, което използват чрез емулатора.

[^1]: Ако използвате 3D дистанционно управление или мишка, преместете показалеца, щракнете върху екрана и отворете менюто на приложението отгоре.

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
Името на профила. Може да бъде произволен непразен низ.

### Portal settings
Опции, специфични за портала.
##### Portal URL
URL адресът на портала. Той трябва да започва със схема (**http://**, **https://**, **ftp://** и т.н.).

##### Portal language
Езикът на портала по подразбиране, зададен с двубуквен езиков код по [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
Настройки на HTTP прокси.

##### Use HTTP proxy
Включете, ако искате да използвате HTTP прокси.

##### Proxy host name
##### Proxy port

##### Portal is internal
Включете тази опция, за да използвате вътрешен портал за устройства MAG.

##### Internal portal URL

### STB configuration
Основните настройки за емулация.

#### STB Model
Моделът STB, който да се емулира.

#### Firmware
**Фърмуерът**, който да се емулира; не се инсталира действителен фърмуер. Някои портали изискват конкретен фърмуер.
В такъв случай го изберете от списъка, ако е наличен.
Повечето поддържани модели STB предлагат само фърмуер **Generic**, който обикновено представлява най-новата версия.

Налични опции за фърмуер:
* Generic: обикновено най-новият наличен фърмуер.
* Custom (само за MAG 250): фърмуер с възможност за персонализиране. Използвайте го, ако трябва да промените конкретни настройки на фърмуера.

Повечето потребители трябва да използват фърмуер **Generic** (избран по подразбиране).

#### Firmware settings
Тази опция е достъпна само с фърмуер **Custom** (понастоящем се поддържа само за MAG 250).
Използвайте я, за да зададете конкретни настройки на фърмуера, като версията или персонализиран низ User Agent.

#### User Agent
Низът User Agent за уеб браузъра на приложението.

#### Screen resolution
Разделителната способност на екрана за емулация; това не променя действителната разделителна способност на дисплея.
Изберете разделителна способност, която порталът ви поддържа, обикновено **1280x720**.

#### MAC address
MAC адресът на емулираното устройство. Можете да използвате MAC адреса на реално устройство MAG 250, което притежавате,
или 12 произволни шестнадесетични цифри (0–9, A–F), групирани по двойки, разделени с двоеточия. [^wrong_mac]

Повечето портали изискват MAC адресът да започва с 00:1A:79.

[^wrong_mac]: На някои устройства само с Wi-Fi генерираният MAC адрес може да бъде **00:1A:79:00:00:00**.
    Това означава, че приложението не е успяло да го разпознае правилно поради ограничения на Android.
    Заменете частта **00:00:00** с произволни шестнадесетични цифри, като запазите двоеточията между двойките.

#### Serial number
Серийният номер на емулираното устройство. Повечето портали не го проверяват, така че обикновено върши работа всеки текстов низ.

#### Device ID
Настройки на идентификатора на устройството.

##### Use MAC-based device ID
Генерира идентификатора на устройството от неговия MAC адрес. Натиснете **Reset device ID** след включване или
изключване на тази опция, за да генерирате идентификатора отново.

##### Send Device ID
Изпраща идентификатора на устройството, когато портал го поиска. Ако е изключено, приложението изпраща празен низ.

##### Device ID random seed
Началната стойност за генериране на идентификатора на устройството. Използвайте една и съща начална стойност на всички устройства с един и същ URL на портала и
MAC адрес. Натиснете **Reset device ID**, след като промените тази стойност.

##### Device ID value
Идентификаторът на устройството. Използвайте генерираната стойност или въведете своя.

##### Custom device ID 2 and signature
Включете тази опция, за да редактирате Device ID 2 и подписа.

##### Device ID 2
##### Signature
##### Reset device ID to default value
Генерирайте отново **Device ID**, **Device ID 2** и подписа.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
IP адресът, изпращан към портала при поискване. Това е емулиран адрес, а не действителният IP адрес на устройството.
Повечето портали не използват тази информация, затова обикновено не е нужно да я променяте.
### Media player settings

Настройки на мултимедийния плейър за този профил.
#### Media player
Изберете мултимедийния плейър по подразбиране за този профил.

| Плейър | Описание | Коментар |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo             | [GitHub](https://github.com/google/ExoPlayer)                                                                                                        | Плейърът по подразбиране, препоръчван за повечето устройства |
| VLC             | [Уебсайт](https://www.videolan.org) |                                                         |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk             | [GitHub](https://github.com/bilibili/ijkplayer)                                                                                                      | Не поддържа субтитри |
| Internal player | Използва плейъра на Android. Поддържаните кодеци зависят от версията на Android на устройството ви. | Не поддържа субтитри |
| External player | Използвайте почти всеки външен плейър. Няма интеграция с емулатора; мултимедийните потоци се отварят в друго приложение. |                                                         |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
