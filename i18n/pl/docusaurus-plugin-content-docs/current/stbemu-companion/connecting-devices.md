---
title: Łączenie urządzeń
sidebar_label: Łączenie urządzeń
---

# Łączenie urządzeń {/* #connecting-devices */}

## Wyszukiwanie StbEmu {/* #discover-stbemu */}

1. Połącz telefon lub tablet oraz urządzenie StbEmu z tą samą dostępną siecią lokalną.
2. W StbEmu otwórz **Settings > Companion** i włącz usługę. Zobacz [ustawienia Companion w StbEmu](../settings/companion.md).
3. Otwórz stronę **Devices** w Companion. Zweryfikowane urządzenia pojawiają się jako zapisane karty. Otwórz kartę instalacji StbEmu, którą chcesz zarządzać.

![Strona urządzeń podczas przeszukiwania sieci lokalnej](/img/companion/devices-empty.png)

Jeśli nic się nie pojawia, sprawdź, czy dostęp Companion jest włączony w StbEmu i czy Android zezwala na dostęp do sieci lokalnej. Wybierz **Retry** lub połącz się ręcznie.

### Ręczne dodawanie adresu {/* #add-an-address-manually */}

Wybierz **Add by IP address**. Wprowadź **IPv4 or IPv6 address** oraz port widoczny w StbEmu, a następnie wybierz **Connect**. Puste pole portu oznacza użycie **10000**. Wprowadź adres IP, nie adres URL witryny ani nazwę hosta. Ręczne wprowadzanie nie omija weryfikacji ani parowania. Urządzenia z ważnym zapisanym parowaniem mogą połączyć się ponownie bez nowego kodu.

![Zapisane urządzenie oczekujące na parowanie](/img/companion/devices-saved.png)

## Parowanie urządzenia {/* #pair-a-device */}

1. W **Settings > Companion** w StbEmu rozpocznij parowanie, aby wyświetlić kod.
2. Na stronie działań urządzenia w Companion wprowadź kod w **Eight-digit pairing code**.
3. Wybierz **Pair device** i poczekaj na **Connected**.

![Wprowadzanie kodu parowania](/img/companion/pairing.png)

Jeśli kod wygaśnie, wyświetl nowy w StbEmu. Jeśli częstotliwość prób jest ograniczona, poczekaj przed kolejną próbą. Parowanie pozostaje zapisane na potrzeby kolejnych połączeń, dopóki StbEmu je autoryzuje. Cofnięcie dostępu w StbEmu uniemożliwia również użycie zapisanego upoważnienia.

## Ponowne łączenie, zmiana nazwy i usuwanie {/* #reconnect-rename-or-remove */}

**Disconnect** zamyka połączenie i zachowuje zapisane urządzenie. Aby połączyć się ponownie, otwórz jego kartę i wybierz **Connect**. Zmiana sieci może przerwać połączenia; połącz się ponownie po przywróceniu łączności lokalnej.

Przycisk ołówka (**Rename device**) pozwala ustawić nazwę lokalną. **Use app name** przywraca nazwę zgłaszaną przez StbEmu. Zmiana nazwy tutaj nie zmienia nazwy samego StbEmu.

Przycisk kosza (**Remove device**) wymaga potwierdzenia. Usuwa zapisane połączenie i parowanie z tego telefonu, zachowuje pliki kopii zapasowych i niczego nie zmienia w StbEmu. Usunięte urządzenie nie pojawi się automatycznie ponownie w wyniku wykrywania. Aby dodać je ponownie, użyj **Add by IP address** i ponów parowanie.
