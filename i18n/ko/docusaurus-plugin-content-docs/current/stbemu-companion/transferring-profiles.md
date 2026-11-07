---
title: "프로필 및 설정 전송"
sidebar_label: "프로필 전송"
---

# 프로필 및 설정 전송 {/* #transferring-profiles-and-settings */}

전송 기능을 사용하여 서로 다른 두 페어링된 StbEmu 설치 간에 선택한 콘텐츠를 직접 복사할 수 있습니다. 둘 다 연결되어 있어야 하며 선택한 원본 및 대상 작업을 지원해야 합니다. 같은 설치 내에서 복사하려면 [Copy profile > This device](profiles.md#copy-a-profile)를 사용하세요.

![호환되는 대상을 기다리는 전송 화면](/img/companion/transfer.png)

## 선택 및 검토 {/* #select-and-review */}

1. 원본 기기를 열고 **Transfer to another device**를 선택하세요.
2. **Destination device**를 선택하세요. 사용 가능한 기기가 없으면 **Devices**로 돌아가 다른 페어링된 기기를 연결하고 다시 시도하세요.
3. **Application settings and remote mappings**, 프로필 또는 둘 다 선택하세요. 프로필의 경우 **Do not copy profiles**, **All profiles** 또는 **Choose individual profiles**를 선택하세요. 하나 이상의 범주를 선택해야 합니다.
4. **Review transfer**를 선택하세요. 새 프로필, 설정 변경, 리모컨 매핑의 영향, 활성 프로필 변경, 제외 항목, 비호환 항목을 살펴보세요.
5. **I confirm these changes**를 체크하고 **Confirm transfer**를 선택하세요.

개별 선택에는 완전한 최신 원본 프로필 목록이 필요합니다. 선택한 프로필이 사라지면 **Refresh**로 목록을 확인한 후 여전히 없는 프로필을 명시적으로 선택 해제하세요. 새로 고침은 선택한 프로필을 자동으로 제거하거나 대체하지 않습니다.

## 변경되는 내용 {/* #what-changes */}

전송된 프로필은 대상에서 새로운 식별 정보를 가진 새 복사본입니다. 대상의 기존 프로필은 유지됩니다. MAC 주소, 일련번호, 기기 ID와 기타 프로필 값이 보존되므로 복사해도 새로운 구독이나 제공업체 권한이 생성되지 않습니다. 이 절차에는 **Merge**/**Replace all** 선택이 없습니다. 이 모드들은 [백업 복원](backups.md#restore-a-backup)에 속합니다.

프로필만 전송하면 대상의 앱 설정, 리모컨 매핑, 활성 선택이 유지됩니다. 설정만 전송하면 대상의 프로필과 활성 선택이 유지됩니다. 둘 다 복사할 때는 원본의 활성 프로필이 포함된 경우에만 그 새 복사본이 활성화됩니다. 그렇지 않으면 대상의 활성 선택이 유지됩니다.

앱 설정에는 옮길 수 있는 StbEmu 환경설정과 리모컨 키 매핑이 포함되며, Companion의 언어/테마, 페어링 권한, 서비스 식별 정보, 작업 기록은 포함되지 않습니다. 지원되지 않는 값은 알림 없이 버리는 대신 보고됩니다. 확정 전에 비밀번호 관련 설정과 덮어쓸 다른 설정을 검토하세요. 일부 저장된 설정은 StbEmu 수명 주기 변경이나 재시작이 필요합니다. [저장된 설정 적용](backups.md#results-and-applying-saved-settings)을 참고하세요.

Companion이 원본 스냅샷의 검증 완료를 알린 후에는 원본의 연결이 끊어져도 바로 그 시도를 계속할 수 있습니다. 전송은 백업 라이브러리에 영구 항목을 만들지 않습니다. 결과가 불확실하거나 취소한 경우 [작업 결과](profiles.md#operation-results)를 사용하세요.
