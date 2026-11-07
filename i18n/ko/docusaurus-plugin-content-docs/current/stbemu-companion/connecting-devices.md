---
title: "기기 연결"
sidebar_label: "기기 연결"
---

# 기기 연결 {/* #connecting-devices */}

## StbEmu 검색 {/* #discover-stbemu */}

1. 휴대전화 또는 태블릿과 StbEmu 기기를 서로 통신할 수 있는 동일한 로컬 네트워크에 연결하세요.
2. StbEmu에서 **Settings > Companion**을 열고 서비스를 켜세요. [StbEmu의 Companion 설정](../settings/companion.md)을 참고하세요.
3. Companion의 **Devices** 페이지를 여세요. 검증된 기기가 저장된 카드로 표시됩니다. 관리하려는 StbEmu 설치의 카드를 여세요.

![로컬 네트워크를 검색하는 기기 페이지](/img/companion/devices-empty.png)

아무것도 표시되지 않으면 StbEmu에서 Companion 접근이 켜져 있고 Android에서 로컬 네트워크 접근을 허용했는지 확인하세요. **Retry**를 선택하거나 수동으로 연결하세요.

### 주소 수동 추가 {/* #add-an-address-manually */}

**Add by IP address**를 선택하세요. StbEmu에 표시된 **IPv4 or IPv6 address**와 포트를 입력하고 **Connect**를 선택하세요. 포트를 비워 두면 **10000**을 사용합니다. 웹사이트 URL이나 호스트 이름이 아닌 IP 주소를 입력하세요. 수동으로 입력해도 검증이나 페어링을 건너뛰지 않습니다. 유효한 페어링이 저장된 기기는 새 코드를 입력하지 않고 다시 연결할 수 있습니다.

![페어링을 기다리는 저장된 기기](/img/companion/devices-saved.png)

## 기기 페어링 {/* #pair-a-device */}

1. StbEmu의 **Settings > Companion**에서 페어링을 시작하여 코드를 표시하세요.
2. Companion의 기기 작업 페이지에서 **Eight-digit pairing code**에 코드를 입력하세요.
3. **Pair device**를 선택하고 **Connected**가 표시될 때까지 기다리세요.

![페어링 코드 입력](/img/companion/pairing.png)

코드가 만료되면 StbEmu에서 새 코드를 표시하세요. 시도 빈도가 제한되면 기다린 후 다시 시도하세요. StbEmu에서 계속 허용하는 동안 페어링은 이후 연결을 위해 저장됩니다. StbEmu에서 접근을 취소하면 저장된 권한도 사용할 수 없게 됩니다.

## 다시 연결, 이름 변경 또는 제거 {/* #reconnect-rename-or-remove */}

**Disconnect**는 연결을 닫고 저장된 기기는 유지합니다. 다시 연결하려면 해당 카드를 열고 **Connect**를 선택하세요. 네트워크 변경으로 연결이 끊어질 수 있으므로 로컬 연결이 복구된 후 다시 연결하세요.

연필 버튼(**Rename device**)으로 로컬 이름을 설정하세요. **Use app name**은 StbEmu에서 보고하는 이름을 복원합니다. 여기서 이름을 바꿔도 StbEmu 자체 이름은 바뀌지 않습니다.

휴지통 버튼(**Remove device**)은 확인을 요청합니다. 이 휴대전화에서 저장된 연결과 페어링을 제거하고 백업 파일은 유지하며 StbEmu에는 아무것도 변경하지 않습니다. 제거된 기기는 자동 검색을 통해 다시 나타나지 않습니다. 다시 추가하려면 **Add by IP address**를 사용하고 다시 페어링하세요.
