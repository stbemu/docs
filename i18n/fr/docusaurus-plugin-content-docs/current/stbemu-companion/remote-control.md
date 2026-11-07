---
title: Télécommande
sidebar_label: Télécommande
---

# Télécommande {/* #remote-control */}

Ouvrez un appareil connecté et sélectionnez **Remote control**. L’action n’apparaît que si l’appareil prend en charge les entrées distantes autorisées. Ces commandes pilotent StbEmu et son portail ; elles sont distinctes de l’ancien service de télécommande MAG décrit dans [Télécommande ancienne](../settings/common_settings.md#legacy-remote).

![Télécommande déroulante avec touches colorées et pavé directionnel](/img/companion/remote-control.png)

Touchez un bouton pour son action normale. Maintenez-le enfoncé pour une action longue ou des pressions répétées lorsque cela est pris en charge. Relâchez pour terminer le maintien. Les boutons disponibles et leur comportement lors d’un appui prolongé dépendent de l’appareil ; toutes les touches ne permettent pas la répétition. Faites défiler pour accéder aux autres commandes, notamment la lecture, le volume, les chaînes et les touches numériques.

Un seul geste de touche est actif à la fois. Quitter la page de télécommande ou l’application, perdre la connexion ou l’autorisation annule l’entrée active. Les entrées distantes ne sont pas rejouées après reconnexion : reconnectez-vous et appuyez à nouveau volontairement.

## Comprendre les retours {/* #read-the-feedback */}

Le retour local lors d’un appui simple ou prolongé signifie que Companion a reconnu votre geste. **Awaiting device confirmation** indique que le résultat est toujours en attente. **Device accepted input** confirme que StbEmu a accepté l’entrée, pas qu’une action de chaîne ou du portail est nécessairement terminée.

Pour **Input target unavailable**, vérifiez la connexion. Pour **Authorization expired. Pair again.**, affichez un nouveau code dans StbEmu et saisissez-le dans Companion. Si une action n’est plus prise en charge, cessez de l’utiliser et vérifiez les commandes disponibles. Reconnectez-vous si les entrées restent indisponibles.

Modifiez les vibrations de la télécommande dans **Settings > Interface > Remote control haptic feedback**. Ce réglage est indépendant de **UI haptic feedback** ; le retour visuel reste disponible lorsque les vibrations sont désactivées.
