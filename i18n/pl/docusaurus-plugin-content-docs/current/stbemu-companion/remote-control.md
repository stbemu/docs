---
title: Pilot
sidebar_label: Pilot
---

# Pilot {/* #remote-control */}

Otwórz podłączone urządzenie i wybierz **Remote control**. Działanie jest widoczne tylko wtedy, gdy urządzenie obsługuje autoryzowane zdalne wprowadzanie. Te elementy sterują StbEmu i jego portalem; są niezależne od starszej usługi pilota MAG opisanej w sekcji [Starszy pilot](../settings/common_settings.md#legacy-remote).

![Przewijany pilot z kolorowymi klawiszami i przyciskami kierunkowymi](/img/companion/remote-control.png)

Dotknij przycisku, aby wykonać zwykłe działanie. Przytrzymaj go, aby wykonać działanie długie lub powtarzane naciśnięcia, jeśli są obsługiwane. Puść, aby zakończyć przytrzymywanie. Dostępne przyciski i zachowanie przytrzymania zależą od urządzenia; nie każdy klawisz obsługuje powtarzanie. Przewiń, aby dotrzeć do pozostałych elementów, w tym odtwarzania, głośności, kanałów i klawiszy numerycznych.

Jednocześnie aktywny jest tylko jeden gest klawisza. Opuszczenie strony pilota lub aplikacji, utrata połączenia albo autoryzacji anuluje aktywne wprowadzanie. Zdalne wprowadzanie nie jest odtwarzane po ponownym połączeniu: połącz się i świadomie naciśnij ponownie.

## Interpretacja informacji zwrotnych {/* #read-the-feedback */}

Lokalna reakcja na naciśnięcie lub przytrzymanie oznacza, że Companion rozpoznał gest. **Awaiting device confirmation** oznacza, że wynik jest nadal oczekiwany. **Device accepted input** potwierdza przyjęcie wejścia przez StbEmu, ale niekoniecznie zakończenie działania kanału lub portalu.

Przy **Input target unavailable** sprawdź połączenie. Przy **Authorization expired. Pair again.** wyświetl nowy kod w StbEmu i wprowadź go w Companion. Jeśli działanie nie jest już obsługiwane, przestań z niego korzystać i sprawdź dostępne elementy sterujące. Połącz się ponownie, jeśli wprowadzanie nadal jest niedostępne.

Wibracje pilota zmienisz w **Settings > Interface > Remote control haptic feedback**. To ustawienie jest niezależne od **UI haptic feedback**; wizualne informacje zwrotne pozostają dostępne po wyłączeniu wibracji.
