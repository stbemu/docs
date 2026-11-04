---
id: faq
title: 자주 묻는 질문
sidebar_label: 자주 묻는 질문
---

import FAQ from '@site/src/components/FAQ';

# 자주 묻는 질문 {/* #faq */}

<FAQ id="google-play-pay-again" question="Google Play에서 StbEmu Pro를 구매했는데 다운로드할 수 없고 다시 결제하라고 합니다">
    이는 Google Play의 알려진 문제입니다. 결제를 처리하고 기기의 데이터를 업데이트하는 데 최대 24시간이 걸릴 수 있습니다.
    컴퓨터나 모바일 기기의 웹 브라우저에서 [Google Play](https://play.google.com/store)를 열어
    StbEmu Pro를 찾은 다음([바로 가기](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro)),
    기기에 원격으로 설치할 수도 있습니다.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="채널을 변경하면 앱에서 음량을 초기화합니다">
    이는 일부 Sony, Philips, Xiaomi 기기에서 알려진 문제이며, 다른 기기에서도 발생할 수 있습니다.

    해결하려면 앱에서 시스템 전체 음량을 사용하도록 설정하세요.
    [Settings](settings/index.md) > [Common settings](settings/common_settings.md)로 이동하여 ***Always use system volume level***을 켜세요.
    변경 사항을 적용하려면 앱 메뉴에서 현재 포털을 다시 로드하세요.
</FAQ>

<FAQ id="customize-portal-ui" question="포털 화면을 사용자 지정하려면 어떻게 해야 하나요? 색상이나 아이콘을 바꾸고 싶습니다">
    포털은 IPTV 제공업체의 서버에서 호스팅됩니다. 제공업체에서 해당 기능을 제공하는 경우에만 화면을 사용자 지정할 수 있습니다.
    대부분의 포털은 화면 사용자 지정을 지원하지 않으므로 IPTV 제공업체만 외관을 변경할 수 있습니다.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="포털을 다시 로드하면 Favorites에서 채널이 사라지거나 순서를 바꿀 수 없습니다">
    즐겨찾기를 포함한 모든 채널 목록은 IPTV 제공업체의 서버에 저장됩니다. 앱에서 즐겨찾기를 불러오지 못하거나
    잘못된 순서로 불러오는 경우 IPTV 제공업체의 포털 설정에 문제가 있는 것입니다.
    이 문제는 제공업체만 해결할 수 있습니다.
</FAQ>

<FAQ id="channels-buffer" question="재생 중에 버퍼링이 자주 발생합니다">
    버퍼링이 자주 발생한다면 대개 사용자 또는 IPTV 제공업체의 네트워크 연결이 불안정하거나 속도가 부족하여
    기기로 영상을 원활하게 전송하지 못하는 것입니다. 자신의 연결이 정상임을 확인했다면 IPTV 제공업체에 문제를 알리세요.
</FAQ>

<FAQ id="m3u-support" question="M3U 재생목록을 지원하나요?">
    StbEmu는 M3U를 비롯한 재생목록을 지원하지 않습니다. MAG 박스용으로 설계된 포털만 지원합니다.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="앱에서 백업을 만들거나 복원할 수 없습니다">
    현재 이 기능은 Android 10 이하에서만 정상적으로 작동합니다. Android 11부터는 앱이 기본적으로 파일을 읽고 쓸 수 있는 위치가
    자체 폴더로 제한됩니다. 앱에서 다른 폴더에 대한 접근 권한을 요청할 수 있지만 일부
    Android TV 기기와 셋톱박스(STB)에서는 작동하지 않습니다. 원인이 되는 다음 문제는 수정되지 않을 예정입니다.
    [1](https://issuetracker.google.com/issues/71327396), [2](https://issuetracker.google.com/issues/202985150).

    해당 문제가 있는 기기에서는 백업을 만들거나 복원할 수 없습니다.
</FAQ>
