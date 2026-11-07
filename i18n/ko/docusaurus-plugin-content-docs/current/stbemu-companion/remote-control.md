---
title: "원격 제어"
sidebar_label: "원격 제어"
---

# 원격 제어 {/* #remote-control */}

연결된 기기를 열고 **Remote control**을 선택하세요. 기기가 허가된 원격 입력을 지원할 때만 이 작업이 표시됩니다. 이 컨트롤은 StbEmu와 해당 포털을 조작하며, [레거시 리모컨](../settings/common_settings.md#legacy-remote)에서 설명하는 이전 MAG 리모컨 서비스와는 별개입니다.

![색상 키와 방향 패드가 있는 스크롤 가능한 리모컨](/img/companion/remote-control.png)

일반 동작을 수행하려면 버튼을 탭하세요. 지원되는 경우 버튼을 누르고 있으면 길게 누르기 동작이나 반복 입력이 수행됩니다. 손을 떼면 누르고 있는 동작이 끝납니다. 사용 가능한 버튼과 길게 누르기 동작은 기기에 따라 다르며, 모든 키가 반복 입력을 지원하지는 않습니다. 스크롤하여 재생, 볼륨, 채널, 숫자 키 등 나머지 컨트롤에 접근하세요.

한 번에 하나의 키 제스처만 활성화됩니다. 리모컨 페이지나 앱을 떠나거나 연결 또는 권한을 잃으면 진행 중인 입력이 취소됩니다. 다시 연결한 후 원격 입력이 자동으로 재전송되지 않습니다. 다시 연결하고 의도적으로 키를 다시 누르세요.

## 피드백 이해하기 {/* #read-the-feedback */}

로컬 누르기/길게 누르기 피드백은 Companion이 제스처를 인식했다는 뜻입니다. **Awaiting device confirmation**은 결과를 아직 기다리고 있다는 뜻입니다. **Device accepted input**은 StbEmu가 입력을 수락했음을 확인하지만, 채널이나 포털 작업이 반드시 완료되었다는 뜻은 아닙니다.

**Input target unavailable**이 표시되면 연결을 확인하세요. **Authorization expired. Pair again.**이 표시되면 StbEmu에서 새 코드를 표시하고 Companion에 입력하세요. 더 이상 지원되지 않는 작업은 사용을 중단하고 사용 가능한 컨트롤을 확인하세요. 입력을 계속 사용할 수 없으면 다시 연결하세요.

리모컨 진동은 **Settings > Interface > Remote control haptic feedback**에서 변경하세요. 이 설정은 **UI haptic feedback**과 독립적이며, 진동이 꺼져 있어도 시각적 피드백은 제공됩니다.
