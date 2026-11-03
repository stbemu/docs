---
id: profiles
title: 프로필
sidebar_label: 프로필
---

# STB 프로필 {/* #stb-profiles */}

**STB 프로필**은 앱에서 셋톱박스를 에뮬레이션하기 위한 옵션 모음입니다. 앱은 처음 실행할 때 프로필 하나를 만듭니다.
이 프로필을 편집하거나 프로필을 추가하여 같은 기기에서 다른 포털을 불러올 수 있습니다.
**Settings > Profiles**를 열고 **Add profile**을 선택하거나 기존 프로필을 선택하여 편집하세요.
개요 화면에서는 옵션이 **Connection**, **Playback & device**, **Manage profile**로 나뉘어 있습니다.
사용할 수 있는 작업은 앱 에디션과 프로필 제한에 따라 다릅니다. 사용 중인 프로필은 삭제할 수 없으므로
삭제하기 전에 다른 프로필로 전환하세요. 삭제하려면 확인이 필요합니다.

텍스트 및 선택 항목 편집에는 확인이 필요하며 스위치는 즉시 저장됩니다. 입력 오류, 편집 충돌,
실행 중 새로고침이 필요한 저장된 변경 사항은 [변경 사항 저장](/settings#saving-changes)을 참고하세요.

StbEmu는 미디어나 IPTV 재생목록을 제공하거나 호스팅하거나 색인하지 않습니다.
사용자는 에뮬레이터를 통해 접근하는 콘텐츠에 대한 합법적인 이용 권한이 있어야 합니다.

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
**http://** 또는 **https://** 절대 URL을 입력하세요. 로컬 네트워크 호스트, localhost, IPv6 주소, 국제화 도메인 이름을 지원합니다. 네트워크 URL에는 공백이 포함되면 안 됩니다.
내부 포털에는 절대 파일 시스템 경로나 지원되는 **file://** 절대 URL도 사용할 수 있습니다. 새로 설계된 편집기에서는 FTP URL을 허용하지 않습니다.

##### Portal language {/* #portal-language */}
포털의 기본 언어를 두 글자로 된 [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) 언어 코드로 지정합니다.

#### HTTP Proxy settings {/* #http-proxy-settings */}
HTTP 프록시 설정입니다.

##### Use HTTP proxy {/* #use-http-proxy */}
HTTP 프록시를 사용하려면 켜세요.

##### Proxy host name {/* #proxy-host-name */}
프록시 호스트는 포트와 별도로 설정하며 기본 호스트는 127.0.0.1입니다.
##### Proxy port {/* #proxy-port */}
기본값: 3128. 호스트 및 포트 편집기는 **Use HTTP proxy**가 켜져 있을 때만 사용할 수 있습니다.

##### Portal is internal {/* #portal-is-internal */}
MAG 기기용 내부 포털을 사용하려면 이 옵션을 켜세요. 로컬 포털 URL을 사용하면 자동으로 켜지고 스위치는 사용할 수 없게 됩니다. 네트워크 URL로 변경하면 자동 내부 포털 설정이 해제됩니다.

##### Internal portal URL {/* #internal-portal-url */}
로컬 경로나 파일 URL은 **Portal URL** 필드에 입력하세요. 내부 URL용 별도 편집기는 없습니다.

포털을 설치하려면 **Settings > Profiles > 사용할 프로필 > Portal settings**를 열고 설치 동작을 사용하여 압축 파일을 선택하세요. 압축 해제가 끝날 때까지 기다린 뒤
제시된 로컬 URL을 확인하세요. 파일 설치와 URL 수락은 별개의 단계입니다.
설치된 내부 포털을 제거하려면 **Portal settings**의 제거 동작을 사용하세요.

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
플레이어 엔진, JavaScript API 및 STB API 버전과 이미지 버전, 설명, 날짜를 설정하세요.
사용자 지정 User Agent 문자열을 편집하기 전에 사용자 지정 User Agent 사용을 켜세요.

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
동일한 시드를 사용하세요. 변경한 시드를 확인하면 ID가 자동으로 다시 생성됩니다.
시드를 유지하려면 Reset을 누르지 마세요. Reset은 시드를 지웁니다.

##### Device ID value {/* #device-id-value */}
기기 ID입니다. 생성된 값을 사용하거나 직접 입력하세요.

##### Custom device ID 2 and signature {/* #custom-device-id-2-and-signature */}
Device ID 2와 서명을 편집하려면 이 옵션을 켜세요.

##### Device ID 2 {/* #device-id-2 */}
##### Signature {/* #signature */}
##### Reset device ID to default value {/* #reset-device-id-to-default-value */}
확인 후 시드를 지우고 현재 프로필 값을 바탕으로 **Device ID**, **Device ID 2**, 서명을 다시 생성합니다. 다른 프로필 설정은 유지됩니다.

**Device ID**는 **Send Device ID**가 켜져 있고 MAC 기반 ID가 꺼져 있을 때만 직접 편집할 수 있습니다.
**Device ID 2** 및 **Signature**를 편집하려면 **Custom device ID 2 and signature**도 켜져 있어야 합니다.
편집할 수 없을 때에도 자동으로 계산된 값은 읽을 수 있습니다.

#### Hardware settings {/* #hardware-settings */}
##### Vendor {/* #vendor */}
##### Hardware version {/* #hardware-version */}

기기 옵션에는 Ministra 호환성과 브라우저 리디렉션도 포함됩니다. 포털에서 요구하는 경우에만 변경하세요.

### Media player settings {/* #media-player-settings */}

이 프로필의 미디어 플레이어 설정입니다.
#### Media player {/* #media-player */}
이 프로필의 기본 미디어 플레이어를 선택하세요.

목록에는 자동 선택, Exo, Android 내부 플레이어, 외부 플레이어와 함께
빌드에서 지원하는 추가 플레이어가 표시됩니다. 앱에 표시된 항목 중에서 선택하세요.
내부 플레이어의 코덱 지원은 Android에 따라 다르며, 외부 플레이어는 다른 앱에서 스트림을 엽니다.

#### UDPXY settings {/* #udpxy-settings */}
##### Enable UDPXY support {/* #enable-udxpy-support */}
올바른 HTTP/HTTPS 서버 URL을 입력한 후에만 UDPXY를 켜세요.
##### UDPXY server URL {/* #udpxy-server-url */}
UDPXY가 꺼져 있어도 URL을 입력할 수 있습니다. URL은 꺼져 있을 때만 비워 둘 수 있으며, 비어 있지 않은 URL은 올바른 HTTP/HTTPS URL이어야 합니다.
##### Overwrite stream protocol {/* #overwrite-stream-protocol */}
UDPXY가 켜져 있을 때 스트림 프로토콜 재정의 설정을 선택하세요.
### Advanced settings {/* #advanced-settings */}
프로필별 호환성 옵션에는 CSS 패치, 에뮬레이터 감지, 배경색, 로컬 파일 및 AJAX 수정,
외부 플레이어의 복귀/키 이벤트가 포함됩니다. Back, Exit, OK 이벤트 옵션은 채널 목록으로 돌아가는 이벤트 옵션에 따라 달라집니다.
포털이나 외부 플레이어에서 요구하는 경우에만 변경하세요.
