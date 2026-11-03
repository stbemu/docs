---
id: common-settings
title: 공통 설정
sidebar_label: 공통 설정
---

# Common settings {/* #common-settings */}

이 설정은 앱 버전 0.8 이상에 적용됩니다.

- [Settings](#settings)
    - [App Language](#app-language)
    - [Hide navigation bar](#hide-navigation-bar)
    - [Always show overlay buttons](#always-show-overlay-buttons)
    - [Screen configuration](#screen-configuration)
    - [Keyboard configuration](#keyboard-configuration)
- [Boot options](#boot-options)
    - [Auto start on device boot](#auto-start-on-device-boot)
- [Android TV](#android-tv)
    - [Enable recommendations](#enable-recommendations)
- [Browser settings](#browser-settings)
    - [Scaling method](#scaling-method)
- [Network settings](#network-settings)
    - [Enable network cache](#enable-network-cache)
    - [Cache size](#cache-size)

### Settings {/* #settings */}
#### App Language {/* #app-language */}
앱 언어를 변경합니다. 기본적으로 지원되는 경우 Android 시스템 언어를 사용합니다.

#### Hide navigation bar {/* #hide-navigation-bar */}
탐색 표시줄과 버튼을 숨깁니다(일부 기기에서는 작동하지 않을 수 있습니다). 이 옵션을 켠 상태로
터치스크린을 사용하면 숨겨진 화면 버튼을 표시하기 위해 두 번 터치해야 할 수 있습니다.
첫 번째 터치에서는 탐색 표시줄이 나타납니다. 이는 Android의 제한 사항입니다.

#### Always show overlay buttons {/* #always-show-overlay-buttons */}
화면 버튼을 표시합니다. 일반적으로 켜 두는 것이 좋습니다. STB에서 리모컨 키를 누를 때 버튼이
나타나면 이 옵션을 끌 수 있습니다.

#### Screen configuration {/* #screen-configuration */}
기기 방향이 바뀔 때 화면을 회전할지 설정합니다.

#### Keyboard configuration {/* #keyboard-configuration */}
리모컨 설정입니다(무료 버전에서는 사용할 수 없음).

MAG 250, AuraHD 등의 기기용 소프트웨어 리모컨으로 포털을 제어할 수 있도록 리모컨 서버를 설정합니다.

#### Boot options {/* #boot-options */}
##### Auto start on device boot {/* #auto-start-on-device-boot */}

기기가 부팅될 때 앱을 시작합니다. 앱이 내부 저장소에 설치되어 있어야 작동합니다.
휴대전화나 태블릿 등에서 잠금 화면을 사용하는 경우 잠금을 해제한 후 앱이 시작됩니다.

#### Stop in the background {/* #stop-in-the-background */}
다른 앱으로 전환할 때 앱을 일시 정지합니다.

#### Android TV {/* #android-tv */}
Android TV 전용 옵션입니다.

##### Enable recommendations {/* #enable-recommendations */}

Android 홈 화면에 추천 카드를 표시합니다. 앱은 설정된 프로필마다 카드를 표시하여
빠르게 접근할 수 있도록 합니다.

#### Browser settings {/* #browser-settings */}
브라우저 설정입니다.

##### Scaling method {/* #scaling-method */}
포털이 너무 크거나 작게 표시되면 다른 브라우저 배율 조정 방식을 선택하세요.
대부분의 기기에서는 이 설정을 변경할 필요가 없습니다. 다만 기기의 디스플레이 해상도가 포털 해상도보다 낮은 경우는 예외입니다.
포털의 해상도는 일반적으로 1280x720입니다.

#### Network settings {/* #network-settings */}
네트워크 설정입니다.

##### Enable network cache {/* #enable-network-cache */}
네트워크 요청을 캐시하여 대부분의 경우 포털 로딩 속도를 높입니다. 인증 오류나 기타 네트워크 문제가
자주 발생하면 이 옵션을 끄세요.

##### Cache size {/* #cache-size */}
네트워크 캐시 크기입니다. 기본값: 20 MB.
