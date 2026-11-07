---
title: Systemowa kopia zapasowa Androida
sidebar_label: Systemowa kopia zapasowa Androida
---

# Systemowa kopia zapasowa Androida {/* #android-system-backup */}

Otwórz **Settings > Backups > System backup**. Systemowa kopia zapasowa Androida może po udanym przywróceniu Androida odtworzyć preferencje Companion, zapisane urządzenia i nazwy, zweryfikowane zaufanie oraz nadal ważne dane uwierzytelniające parowania. Jest niezależna od przywracania [kopii JSON StbEmu](backups.md) na sparowanym urządzeniu.

## Dołączanie lokalnych archiwów {/* #include-local-archives */}

**Include local archives** jest domyślnie włączone. Uwzględnia kwalifikujące się ukończone kopie StbEmu z lokalnej biblioteki w przyszłych kopiach systemowych. Wyłączenie zachowuje lokalne pliki i ustawienia/urządzenia Companion, ale wyklucza archiwa z przyszłych kopii. Nie usuwa wcześniejszej zawartości chmury.

Strona pokazuje szacowany rozmiar zaznaczenia. Użyj **Refresh estimate**, aby zmierzyć ponownie, **Open Android settings**, aby sprawdzić konfigurację kopii Androida, lub **Open archive library / manual export**, aby samodzielnie wyeksportować pliki.

## Dostępność i ograniczenia {/* #availability-and-limits */}

Systemowa kopia zapasowa wymaga **Androida 9 lub nowszego**, mimo że sam Companion obsługuje Androida 8. Szyfrowana kopia w chmurze wymaga też obsługiwanego konta, bezpiecznej blokady ekranu i szyfrowania po stronie klienta Androida. Android kontroluje harmonogram, kwalifikowanie transportu i dostępność przywracania.

Nominalny limit w chmurze wynosi **25 MiB**; faktycznie dostępny limit może być mniejszy. Limit **256 MiB** między urządzeniami jest limitem aplikacji, a nie gwarancją pojemności transportu. Jeśli całe zaznaczenie jest zbyt duże, wyklucz lokalne archiwa lub wyeksportuj je ręcznie. Companion nie tworzy po cichu kopii tylko części zaznaczenia.

Oszacowanie lub komunikat o lokalnym przygotowaniu nie potwierdza zapisania kopii w chmurze przez Androida. Niedostępne oszacowanie nie oznacza kopii o rozmiarze zero. Jeśli strona informuje, że kopia jest wyłączona lub nieobsługiwana, wyeksportuj archiwa ręcznie zamiast zakładać, że dane są chronione.

## Po przywróceniu Companion przez Androida {/* #after-android-restores-companion */}

Przywrócone urządzenia muszą zostać zweryfikowane, zanim pojawią się jako podłączone. Nadal autoryzowane dane parowania pozwalają na ponowne połączenie bez nowego parowania, lecz przywrócenie nie cofa unieważnienia dostępu w StbEmu. Przywrócone kopie współdzielą te same upoważnienia; cofnięcie upoważnienia wpływa także na te kopie.

Biblioteka pokazuje ukończone pliki archiwów, które faktycznie przywrócono. Same metadane nie odtwarzają brakujących plików. Niedokończona operacja nie jest automatycznie wysyłana ponownie; połącz się ponownie i sprawdź [wyniki operacji](profiles.md#operation-results), gdy są dostępne.
