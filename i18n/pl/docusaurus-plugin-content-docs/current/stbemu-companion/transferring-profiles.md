---
title: Przenoszenie profili i ustawień
sidebar_label: Przenoszenie profili
---

# Przenoszenie profili i ustawień {/* #transferring-profiles-and-settings */}

Przenoszenie służy do kopiowania wybranej zawartości bezpośrednio między dwiema różnymi sparowanymi instalacjami StbEmu. Obie muszą być podłączone i obsługiwać wybrane działania źródła i celu. Do kopiowania w tej samej instalacji użyj [Copy profile > This device](profiles.md#copy-a-profile).

![Ekran przenoszenia oczekujący na zgodne urządzenie docelowe](/img/companion/transfer.png)

## Wybieranie i weryfikacja {/* #select-and-review */}

1. Otwórz urządzenie źródłowe i wybierz **Transfer to another device**.
2. Wybierz **Destination device**. Jeśli żadne nie jest dostępne, wróć do **Devices**, podłącz inne sparowane urządzenie i spróbuj ponownie.
3. Wybierz **Application settings and remote mappings**, profile lub obie opcje. Dla profili wybierz **Do not copy profiles**, **All profiles** lub **Choose individual profiles**. Należy wybrać co najmniej jedną kategorię.
4. Wybierz **Review transfer**. Sprawdź nowe profile, zmiany ustawień, skutki mapowań pilota, zmiany aktywnego profilu, wykluczenia i niezgodności.
5. Wybierz **I confirm these changes**, a następnie **Confirm transfer**.

Wybór pojedynczych profili wymaga pełnej aktualnej listy profili źródłowych. Jeśli wybrany profil zniknie, użyj **Refresh**, aby sprawdzić listę, a następnie jawnie odznacz profile, których nadal brakuje. Odświeżanie nie usuwa ani nie zastępuje po cichu wybranych profili.

## Co się zmienia {/* #what-changes */}

Przeniesione profile są nowymi kopiami z nowymi tożsamościami na urządzeniu docelowym. Istniejące profile docelowe są zachowywane. Adresy MAC, numery seryjne, ID urządzeń i inne wartości profili pozostają bez zmian, więc kopiowanie nie tworzy nowego abonamentu ani autoryzacji dostawcy. Ta procedura nie oferuje wyboru **Merge**/**Replace all**; te tryby należą do [przywracania kopii zapasowej](backups.md#restore-a-backup).

Przenoszenie samych profili zachowuje ustawienia aplikacji, mapowania pilota i aktywny wybór urządzenia docelowego. Przenoszenie samych ustawień zachowuje profile i aktywny wybór celu. Przy kopiowaniu obu kategorii aktywny profil źródłowy staje się aktywny poprzez nową kopię tylko wtedy, gdy go uwzględniono; w przeciwnym razie pozostaje aktywny wybór celu.

Ustawienia aplikacji obejmują przenośne preferencje StbEmu i mapowania klawiszy pilota, ale nie język/motyw Companion, upoważnienia parowania, tożsamość usługi ani historię operacji. Nieobsługiwane wartości są zgłaszane zamiast po cichu pomijane. Przed potwierdzeniem sprawdź ustawienia związane z hasłami i inne nadpisywane ustawienia. Niektóre zapisane ustawienia wymagają zmiany cyklu życia lub ponownego uruchomienia StbEmu; zobacz [stosowanie zapisanych ustawień](backups.md#results-and-applying-saved-settings).

Gdy Companion zgłosi, że migawka źródła została zweryfikowana, ta konkretna próba może być kontynuowana, jeśli źródło się rozłączy. Przenoszenie nie tworzy trwałego wpisu w bibliotece kopii zapasowych. W razie niepewnego wyniku lub anulowania użyj [wyników operacji](profiles.md#operation-results).
