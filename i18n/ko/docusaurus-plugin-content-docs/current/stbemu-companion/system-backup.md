---
title: "Android 시스템 백업"
sidebar_label: "Android 시스템 백업"
---

# Android 시스템 백업 {/* #android-system-backup */}

**Settings > Backups > System backup**을 여세요. Android 복원이 성공하면 Android 시스템 백업을 통해 Companion 환경설정, 저장된 기기와 이름, 검증된 신뢰 관계, 여전히 유효한 페어링 자격 증명을 복원할 수 있습니다. 이는 페어링된 기기에 [StbEmu JSON 백업](backups.md)을 복원하는 작업과 별개입니다.

## 로컬 보관 파일 포함 {/* #include-local-archives */}

**Include local archives**는 기본적으로 켜져 있습니다. 로컬 라이브러리의 적격한 완료된 StbEmu 백업을 향후 시스템 백업에 포함합니다. 이 설정을 꺼도 로컬 파일과 Companion 설정/기기는 유지되지만 향후 백업에서 보관 파일이 제외됩니다. 이전 클라우드 콘텐츠를 삭제하지는 않습니다.

페이지에 선택한 데이터의 예상 크기가 표시됩니다. 다시 측정하려면 **Refresh estimate**, Android 백업 구성을 확인하려면 **Open Android settings**, 파일을 직접 내보내려면 **Open archive library / manual export**를 사용하세요.

## 사용 조건 및 제한 {/* #availability-and-limits */}

Companion 자체는 Android 8을 지원하지만 시스템 백업에는 **Android 9 이상**이 필요합니다. 암호화된 클라우드 백업에는 지원되는 계정, 안전한 화면 잠금, Android 클라이언트 측 암호화도 필요합니다. 일정, 전송 방식의 적격성, 복원 가능 여부는 Android에서 제어합니다.

명목상 클라우드 허용량은 **25 MiB**이며 실제 사용 가능한 할당량은 더 적을 수 있습니다. 기기 간 **256 MiB** 제한은 앱의 제한이며 전송 용량을 보장하지 않습니다. 전체 선택 항목이 너무 크면 로컬 보관 파일을 제외하거나 수동으로 내보내세요. Companion은 알림 없이 선택 항목의 일부만 백업하지 않습니다.

예상 크기나 로컬 준비 메시지는 Android가 클라우드 백업을 저장했다는 확인이 아닙니다. 예상 크기를 알 수 없다고 해서 빈 백업이라는 뜻도 아닙니다. 페이지에서 백업이 꺼져 있거나 지원되지 않는다고 알리면 데이터가 보호된다고 가정하지 말고 보관 파일을 수동으로 내보내세요.

## Android에서 Companion을 복원한 후 {/* #after-android-restores-companion */}

복원된 기기를 연결됨으로 표시하려면 먼저 검증해야 합니다. 여전히 허가된 페어링 자격 증명은 새 페어링 없이 다시 연결할 수 있지만, 복원으로 StbEmu에서 취소한 권한을 되살릴 수는 없습니다. 복원된 복사본은 같은 권한을 공유하므로 권한을 취소하면 해당 복사본에도 영향을 줍니다.

라이브러리에는 실제로 복원된 완료된 보관 파일이 표시됩니다. 메타데이터만으로 없는 파일을 다시 만들지는 않습니다. 완료되지 않은 작업은 자동으로 다시 전송되지 않습니다. 다시 연결하고 가능한 경우 [작업 결과](profiles.md#operation-results)를 확인하세요.
