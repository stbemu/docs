---
title: Kopie zapasowe i przywracanie
sidebar_label: Kopie zapasowe i przywracanie
---

# Kopie zapasowe i przywracanie {/* #backups-and-restore */}

Biblioteka **Backups** w Companion przechowuje ukończone kopie JSON StbEmu prywatnie na telefonie lub tablecie. Zapisane pliki pozostają dostępne offline. Ta biblioteka jest niezależna od [systemowej kopii zapasowej Androida](system-backup.md), która chroni własny stan Companion.

![Biblioteka kopii zapasowych i tworzenie kopii urządzenia](/img/companion/backup-library.png)

## Zapisywanie plików i zarządzanie nimi {/* #save-and-manage-files */}

- **Create backup:** otwórz działanie **Create backup** podłączonego sparowanego urządzenia, wprowadź **Backup name** i wybierz **Create backup**. Poczekaj na **Backup saved**.
- **Import backup:** otwórz **Backups** z menu aplikacji, wybierz **Import backup** i plik JSON StbEmu. Lokalny import, eksport i udostępnianie nie wymagają podłączonego urządzenia StbEmu.
- **Export JSON:** wybierz to działanie przy wpisie kopii w bibliotece, a następnie zewnętrzne miejsce docelowe.
- **Share JSON:** wybierz to działanie przy wpisie kopii, aby otworzyć panel udostępniania Androida. Jego otwarcie nie potwierdza dostarczenia do wybranej aplikacji.
- **Delete local backup:** potwierdź usunięcie tej lokalnej kopii. Źródłowe urządzenie StbEmu pozostaje bez zmian.

Limit JSON wynosi **16 MiB (16,777,216 bajtów)**. Importowane pliki są weryfikowane i zachowują oryginalne bajty. Importowany plik ma etykietę **Source device unknown**; kontrola integralności nie ustala autora. Nieudany eksport zewnętrzny może pozostawić niekompletny plik docelowy, podczas gdy istniejące kopie lokalne są zachowane.

:::note
Pliki kopii zapasowych mogą zawierać hasła, dane portali i identyfikatory urządzeń. Eksport i udostępnianie zachowują te wartości; odpowiednio wybierz miejsce docelowe lub odbiorcę.
:::

## Przywracanie kopii zapasowej {/* #restore-a-backup */}

1. Wybierz **Restore backup** przy wpisie w bibliotece lub na stronie działań urządzenia.
2. Wybierz **Destination device**, **Backup to restore** i obsługiwany **Restore mode**.
3. Wybierz **Review restore**. Sprawdź dodane, nadpisane i usunięte profile; **Changed settings**; mapowania pilota; wykluczone metadane lokalne; oraz niezgodne lub zablokowane pola.
4. Zaznacz pole potwierdzenia, a następnie wybierz **Apply restore**.

![Ekran przywracania pokazujący działanie Merge](/img/companion/restore.png)

**Merge** nadpisuje profile o zgodnych UUID, dodaje nowe i zachowuje profile obecne tylko na urządzeniu docelowym. **Replace all** usuwa także profile docelowe nieobecne w kopii. Dopasowanie używa identyfikatorów, nie nazw profili. Oba tryby przywracają przenośne ustawienia aplikacji i mapowania pilota. Metadane lokalne urządzenia docelowego, takie jak lokalne ID wierszy, wersja aplikacji i katalog aktualizacji, są wykluczone.

:::warning
Przed zastosowaniem sprawdź każde nadpisanie i usunięcie. Replace all zastępuje zestaw profili; nie służy do dodawania wyłącznie wybranych profili. Do wybiórczego kopiowania używaj [przenoszenia profili](transferring-profiles.md).
:::

## Wyniki i stosowanie zapisanych ustawień {/* #results-and-applying-saved-settings */}

Wygasły podgląd wymaga **Start a new attempt** i ponownej weryfikacji. Gdy wynik jest niepewny, sprawdź [wyniki operacji](profiles.md#operation-results) przed ponowieniem przywracania. Odzyskiwanie stanu operacji może odpytać urządzenie docelowe nawet wtedy, gdy pierwotna kopia nie jest już dostępna.

Zapisane ustawienia i ich skutki podczas działania są odrębne. Po zmianie ustawienia wirtualnego pilota zaczynają obowiązywać przy następnym zwykłym wstrzymaniu/wznowieniu StbEmu, rozmiar pamięci podręcznej wymaga ponownego uruchomienia procesu StbEmu, a język może odtworzyć jego aktywność. Flaga zgodności UPnP nie przełącza bieżącego działania UPnP, nawet po ponownym uruchomieniu. **Check result** nie ponawia tych aktualizacji podczas działania.
