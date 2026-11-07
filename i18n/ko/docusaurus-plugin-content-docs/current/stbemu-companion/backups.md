---
title: "백업 및 복원"
sidebar_label: "백업 및 복원"
---

# 백업 및 복원 {/* #backups-and-restore */}

Companion의 **Backups** 라이브러리는 완료된 StbEmu JSON 백업을 휴대전화나 태블릿에 비공개로 저장합니다. 저장된 파일은 오프라인에서도 사용할 수 있습니다. 이 라이브러리는 Companion 자체 상태를 보호하는 [Android 시스템 백업](system-backup.md)과 별개입니다.

![백업 라이브러리와 기기 백업 생성](/img/companion/backup-library.png)

## 파일 저장 및 관리 {/* #save-and-manage-files */}

- **Create backup:** 연결된 페어링 기기의 **Create backup** 작업을 열고 **Backup name**을 입력한 다음 **Create backup**을 선택하세요. **Backup saved**를 기다리세요.
- **Import backup:** 앱 메뉴에서 **Backups**를 열고 **Import backup**을 선택한 다음 StbEmu JSON 파일을 선택하세요. 로컬 가져오기, 내보내기, 공유에는 연결된 StbEmu 기기가 필요하지 않습니다.
- **Export JSON:** 라이브러리의 백업 항목에서 이 작업을 선택한 후 외부 저장 위치를 선택하세요.
- **Share JSON:** 라이브러리의 백업 항목에서 이 작업을 선택하면 Android 공유 시트가 열립니다. 시트를 여는 것만으로 선택한 앱에 전달되었다고 확인할 수는 없습니다.
- **Delete local backup:** 해당 로컬 복사본의 삭제를 확인하세요. 원본 StbEmu 기기는 변경되지 않습니다.

JSON 제한은 **16 MiB(16,777,216바이트)**입니다. 가져온 파일은 검증되며 원본 바이트를 유지합니다. 가져온 파일에는 **Source device unknown** 레이블이 붙습니다. 무결성 검사로 작성자를 확인할 수는 없습니다. 외부 내보내기에 실패하면 대상에 불완전한 파일이 남을 수 있지만 기존 로컬 백업은 보존됩니다.

:::note
백업 파일에는 비밀번호, 포털 데이터, 기기 식별자가 포함될 수 있습니다. 내보내기와 공유에서도 이 값들이 유지되므로 이를 고려하여 저장 위치나 받는 사람을 선택하세요.
:::

## 백업 복원 {/* #restore-a-backup */}

1. 라이브러리 항목이나 기기 작업 페이지에서 **Restore backup**을 선택하세요.
2. **Destination device**, **Backup to restore**, 지원되는 **Restore mode**를 선택하세요.
3. **Review restore**를 선택하세요. 추가, 덮어쓰기, 제거되는 프로필, **Changed settings**, 리모컨 매핑, 제외되는 로컬 메타데이터, 호환되지 않거나 잠긴 필드를 확인하세요.
4. 확인란을 체크한 다음 **Apply restore**를 선택하세요.

![Merge 동작을 보여 주는 복원 화면](/img/companion/restore.png)

**Merge**는 UUID가 일치하는 프로필을 덮어쓰고 새 프로필을 추가하며 대상에만 있는 프로필은 유지합니다. **Replace all**은 백업에 없는 대상 프로필도 제거합니다. 일치 여부는 프로필 이름이 아닌 식별자로 판단합니다. 두 모드 모두 옮길 수 있는 앱 설정과 리모컨 매핑을 복원합니다. 로컬 행 ID, 앱 버전, 업데이트 디렉터리 같은 대상의 로컬 메타데이터는 제외됩니다.

:::warning
적용하기 전에 모든 덮어쓰기와 제거를 검토하세요. **Replace all**은 전체 프로필 집합을 교체하며, 선택한 프로필만 추가하는 방법이 아닙니다. 선택적으로 복사하려면 [프로필 전송](transferring-profiles.md)을 사용하세요.
:::

## 결과 및 저장된 설정 적용 {/* #results-and-applying-saved-settings */}

미리 보기가 만료되면 **Start a new attempt**와 새 검토가 필요합니다. 결과가 불확실하면 복원을 반복하기 전에 [작업 결과](profiles.md#operation-results)를 확인하세요. 결과 복구는 원본 백업을 더 이상 사용할 수 없더라도 대상에 조회할 수 있습니다.

설정 저장과 실행 중 적용은 별개입니다. 변경된 가상 리모컨 설정은 StbEmu의 다음 정상적인 일시 중지/재개 시 적용되며, 캐시 크기는 StbEmu 프로세스 재시작이 필요하고, 언어 변경은 액티비티를 다시 생성할 수 있습니다. UPnP 호환성 플래그는 재시작 후에도 현재 UPnP 실행 상태를 전환하지 않습니다. **Check result**는 이러한 실행 중 업데이트를 다시 시도하지 않습니다.
