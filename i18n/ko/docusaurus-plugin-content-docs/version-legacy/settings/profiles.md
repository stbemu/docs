---
id: profiles
title: 프로필
sidebar_label: 프로필
---

# STB 프로필 {/* #stb-profiles */}

**STB 프로필**은 앱에서 셋톱박스를 에뮬레이션하기 위한 옵션 모음입니다. 앱은 처음 실행할 때 프로필 하나를 만듭니다.
이 프로필을 편집하거나 프로필을 추가하여 같은 기기에서 다른 포털을 불러올 수 있습니다.
프로필을 만들려면 화면을 두 번 터치하여 위쪽이나 옆쪽에 메뉴를 표시하세요. [^1]
**Settings**를 선택한 다음 **Profiles**를 선택하면 프로필을 추가하거나 편집할 수 있습니다.

StbEmu는 미디어나 IPTV 재생목록을 제공하거나 호스팅하거나 색인하지 않습니다.
사용자는 에뮬레이터를 통해 접근하는 콘텐츠에 대한 합법적인 이용 권한이 있어야 합니다.

[^1]: 3D 리모컨이나 마우스를 사용하는 경우 포인터를 움직이고 화면을 클릭한 뒤 위쪽의 앱 메뉴를 여세요.

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

### Profile name {/* #profile-name */}
프로필 이름입니다. 비어 있지 않은 문자열이면 무엇이든 사용할 수 있습니다.

### Portal settings {/* #portal-settings */}
포털별 옵션입니다.
##### Portal URL {/* #portal-url */}
포털의 URL입니다. 스킴(**http://**, **https://**, **ftp://** 등)으로 시작해야 합니다.

##### Portal language {/* #portal-language */}
포털의 기본 언어를 두 글자로 된 [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) 언어 코드로 지정합니다.

#### HTTP Proxy settings {/* #http-proxy-settings */}
HTTP 프록시 설정입니다.

##### Use HTTP proxy {/* #use-http-proxy */}
HTTP 프록시를 사용하려면 켜세요.

##### Proxy host name {/* #proxy-host-name */}
##### Proxy port {/* #proxy-port */}

##### Portal is internal {/* #portal-is-internal */}
MAG 기기용 내부 포털을 사용하려면 이 옵션을 켜세요.

##### Internal portal URL {/* #internal-portal-url */}

### STB configuration {/* #stb-configuration */}
에뮬레이션의 기본 설정입니다.

#### STB Model {/* #stb-model */}
에뮬레이션할 STB 모델입니다.

#### Firmware {/* #firmware */}
에뮬레이션할 **펌웨어**입니다. 실제 펌웨어를 설치하지는 않습니다. 일부 포털은 특정 펌웨어를 요구합니다.
그런 경우 목록에 해당 펌웨어가 있으면 선택하세요.
지원되는 STB 모델 대부분은 **Generic** 펌웨어만 제공하며 보통 최신 버전을 나타냅니다.

사용 가능한 펌웨어 옵션:
* Generic: 일반적으로 사용 가능한 최신 펌웨어입니다.
* Custom(MAG 250만 해당): 사용자 지정이 가능한 펌웨어입니다. 특정 펌웨어 설정을 변경해야 할 때 사용하세요.

대부분의 사용자는 기본으로 선택되는 **Generic** 펌웨어를 사용하면 됩니다.

#### Firmware settings {/* #firmware-settings */}
이 옵션은 **Custom** 펌웨어에서만 사용할 수 있습니다(현재 MAG 250만 지원).
버전이나 사용자 지정 User Agent 문자열 등 특정 펌웨어 설정을 구성할 때 사용하세요.

#### User Agent {/* #user-agent */}
앱 웹 브라우저의 User Agent 문자열입니다.

#### Screen resolution {/* #screen-resolution */}
에뮬레이션할 화면 해상도입니다. 실제 디스플레이 해상도는 변경되지 않습니다.
포털에서 지원하는 해상도를 선택하세요. 일반적으로 **1280x720**입니다.

#### MAC address {/* #mac-address */}
에뮬레이션하는 기기의 MAC 주소입니다. 소유한 실제 MAG 250 기기의 MAC 주소를 사용하거나,
임의의 16진수 12자리(0–9, A–F)를 두 자리씩 콜론으로 구분하여 사용할 수 있습니다. [^wrong_mac]

대부분의 포털에서는 MAC 주소가 00:1A:79로 시작해야 합니다.

[^wrong_mac]: Wi-Fi 전용 기기 중 일부에서는 생성된 MAC 주소가 **00:1A:79:00:00:00**일 수 있습니다.
    이는 Android 제한으로 인해 앱에서 올바르게 감지하지 못했다는 뜻입니다.
    두 자리마다 콜론을 유지하면서 **00:00:00** 부분을 임의의 16진수로 바꾸세요.

#### Serial number {/* #serial-number */}
에뮬레이션하는 기기의 일련번호입니다. 대부분의 포털에서는 확인하지 않으므로 보통 임의의 문자열을 사용해도 됩니다.

#### Device ID {/* #device-id */}
기기 ID 설정입니다.

##### Use MAC-based device ID {/* #use-mac-based-device-id */}
기기의 MAC 주소에서 기기 ID를 생성합니다. 이 옵션을 켜거나 끈 후
**Reset device ID**를 눌러 ID를 다시 생성하세요.

##### Send Device ID {/* #send-device-id */}
포털에서 요청할 때 기기 ID를 전송합니다. 꺼져 있으면 빈 문자열을 전송합니다.

##### Device ID random seed {/* #device-id-random-seed */}
기기 ID를 생성하는 데 사용하는 시드입니다. 포털 URL과 MAC 주소가 같은 모든 기기에서
동일한 시드를 사용하세요. 이 값을 변경한 후 **Reset device ID**를 누르세요.

##### Device ID value {/* #device-id-value */}
기기 ID입니다. 생성된 값을 사용하거나 직접 입력하세요.

##### Custom device ID 2 and signature {/* #custom-device-id-2-and-signature */}
Device ID 2와 서명을 편집하려면 이 옵션을 켜세요.

##### Device ID 2 {/* #device-id-2 */}
##### Signature {/* #signature */}
##### Reset device ID to default value {/* #reset-device-id-to-default-value */}
**Device ID**, **Device ID 2**, 서명을 다시 생성합니다.

#### Hardware settings {/* #hardware-settings */}
##### Vendor {/* #vendor */}
##### Hardware version {/* #hardware-version */}

#### IP address {/* #ip-address */}
포털에서 요청할 때 전송하는 IP 주소입니다. 에뮬레이션된 주소이며 기기의 실제 IP 주소가 아닙니다.
대부분의 포털에서는 이 정보를 사용하지 않으므로 보통 변경할 필요가 없습니다.
### Media player settings {/* #media-player-settings */}

이 프로필의 미디어 플레이어 설정입니다.
#### Media player {/* #media-player */}
이 프로필의 기본 미디어 플레이어를 선택하세요.

| 플레이어 | 설명 | 비고 |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo | [GitHub](https://github.com/google/ExoPlayer) | 기본 플레이어로 대부분의 기기에 권장됨 |
| VLC | [웹사이트](https://www.videolan.org) | |
| MPV | [GitHub](https://github.com/mpv-android/mpv-android) | |
| Ijk | [GitHub](https://github.com/bilibili/ijkplayer) | 자막 미지원 |
| Internal player | Android 플레이어를 사용합니다. 지원되는 코덱은 기기의 Android 버전에 따라 다릅니다. | 자막 미지원 |
| External player | 거의 모든 외부 플레이어를 사용할 수 있습니다. 에뮬레이터와 연동되지 않으며 미디어 스트림은 다른 앱에서 열립니다. | |

#### UDPXY settings {/* #udpxy-settings */}
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL {/* #udpxy-server-url */}
##### Overwrite stream protocol {/* #overwrite-stream-protocol */}
### Advanced settings {/* #advanced-settings */}
