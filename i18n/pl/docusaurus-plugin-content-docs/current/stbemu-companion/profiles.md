---
title: Zarządzanie profilami
sidebar_label: Profile
---

# Zarządzanie profilami {/* #managing-profiles */}

Otwórz podłączone urządzenie i wybierz **Profiles**. Lista pokazuje nazwy profili, identyfikatory (UUID) i dostępne adresy portali. Wybierz profil, aby obejrzeć jego ustawienia. Użyj **Load more**, aby wczytać kolejne strony, i **Refresh**, aby uzyskać aktualne dane. Działania zależą od uprawnień obsługiwanych przez urządzenie.

## Tworzenie, edytowanie i usuwanie {/* #create-edit-and-delete */}

- Wybierz **Create profile** na liście. Obsługiwane pola tworzenia obejmują **Name** i **Portal URL**. Niezmienione pola używają wartości domyślnych StbEmu.
- Otwórz profil i wybierz **Edit profile**, aby zmienić obsługiwane pola edytowalne. Zmieniają się tylko edytowane pola; dodatkowe ustawienia przechowywane przez urządzenie pozostają zachowane.
- Wybierz **Delete profile**, aby przygotować usunięcie. Przed potwierdzeniem sprawdź zmianę aktywnego profilu lub profil zastępczy.

Wybierz **Review changes**, sprawdź podgląd i ostrzeżenia, a następnie wybierz **Confirm changes** lub **Confirm deletion**. Pierwsze działanie nie zapisuje ani nie usuwa profilu natychmiast. Niezgodnych zmian nie można potwierdzić. Jeśli profil lub dostępne pola zmienią się podczas edycji, odśwież i sprawdź ponownie.

Znaczenie pól profili StbEmu opisano w sekcji [Profile STB](../settings/profiles.md).

## Kopiowanie profilu {/* #copy-a-profile */}

Otwórz profil i wybierz **Copy profile**. Wybierz **This device**, aby utworzyć kopię na tym samym urządzeniu, a następnie sprawdź i potwierdź zmiany. Kopia ma nową tożsamość; nie identyfikuj jej wyłącznie po nazwie. **Edit copied profile**, jeśli dostępne po powodzeniu, otwiera zwróconą kopię zamiast oryginału.

Wybranie innego odpowiedniego sparowanego urządzenia otwiera [procedurę z poradnika przenoszenia](transferring-profiles.md) z zaznaczonym tym profilem.

## Wyniki operacji {/* #operation-results */}

Jeśli połączenie zawiedzie lub wynik jest niepewny, otwórz **Recent operation results** urządzenia i użyj **Check result** przed rozpoczęciem kolejnej zmiany. Sprawdzenie wyniku wymaga autoryzowanego połączenia i odpytuje pierwotną operację; nie wysyła ponownie zmiany. Dotyczy to również [przenoszenia](transferring-profiles.md) i [przywracania kopii zapasowych](backups.md).

Wygasły podgląd wymaga nowej, jawnej weryfikacji. Anulowanie może nastąpić równocześnie z zapisem, dlatego przeczytaj wynik końcowy zamiast zakładać, że **Cancel operation** cofnęło zmiany. **Changes saved on the device** potwierdza zapisanie danych; odświeżenie podczas działania może nadal oczekiwać. Sprawdzenie wyniku nie ponawia takiego odświeżenia, a usunięty skopiowany profil nigdy nie jest odtwarzany przez sprawdzenie historii.
