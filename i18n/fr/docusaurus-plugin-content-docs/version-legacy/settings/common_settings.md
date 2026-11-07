---
id: common-settings
title: Paramètres généraux
sidebar_label: Paramètres généraux
---

# Paramètres généraux {/* #common-settings */}

Ces paramètres s’appliquent à la version 0.8 de l’application et aux versions ultérieures.

- [Settings](#settings)
    - [App Language](#app-language)
    - [Hide navigation bar](#hide-navigation-bar)
    - [Always show overlay buttons](#always-show-overlay-buttons)
    - [Screen configuration](#screen-configuration)
    - [Keyboard configuration](#keyboard-configuration)
- [Boot options](#boot-options)
    - [Auto start on device boot](#auto-start-on-device-boot)
- [Android TV](#android-tv)
    - [Enable recommendations](#enable-recommendations)
- [Browser settings](#browser-settings)
    - [Scaling method](#scaling-method)
- [Network settings](#network-settings)
    - [Enable network cache](#enable-network-cache)
    - [Cache size](#cache-size)

### Settings {/* #settings */}
#### App Language {/* #app-language */}
Modifiez la langue de l’application. Par défaut, l’application utilise la langue du système Android si elle est prise en charge.

#### Hide navigation bar {/* #hide-navigation-bar */}
Masquez la barre de navigation et ses boutons (cela peut ne pas fonctionner sur certains appareils). Si cette option est activée et que vous utilisez
un écran tactile, il peut être nécessaire d’appuyer deux fois pour afficher les boutons masqués à l’écran.
Le premier appui affiche la barre de navigation ; il s’agit d’une restriction d’Android.

#### Always show overlay buttons {/* #always-show-overlay-buttons */}
Affichez les boutons à l’écran. Cette option devrait généralement rester activée. Sur les STB, vous pouvez la désactiver si les boutons
apparaissent lorsque vous appuyez sur une touche de votre télécommande.

#### Screen configuration {/* #screen-configuration */}
Activez ou désactivez la rotation de l’écran lorsque l’orientation de l’appareil change.

#### Keyboard configuration {/* #keyboard-configuration */}
Paramètres de télécommande (indisponibles dans la version gratuite).

Configurez le serveur de télécommande pour commander un portail à l’aide d’une télécommande logicielle pour MAG 250, AuraHD ou des appareils similaires.

#### Boot options {/* #boot-options */}
##### Auto start on device boot {/* #auto-start-on-device-boot */}

Lancez l’application au démarrage de l’appareil. Cela fonctionne uniquement si l’application est installée dans le stockage interne.
Si un écran de verrouillage est activé sur votre appareil (par exemple sur un téléphone ou une tablette), l’application démarre après le déverrouillage.

#### Stop in the background {/* #stop-in-the-background */}
Mettez l’application en pause lorsque vous passez à une autre application.

#### Android TV {/* #android-tv */}
Options propres à Android TV.

##### Enable recommendations {/* #enable-recommendations */}

Activez les cartes de recommandation sur l’écran d’accueil Android. L’application affiche une carte pour chaque profil configuré
afin de vous permettre d’y accéder rapidement.

#### Browser settings {/* #browser-settings */}
Paramètres du navigateur.

##### Scaling method {/* #scaling-method */}
Choisissez une autre méthode de mise à l’échelle du navigateur si le portail apparaît trop grand ou trop petit.
Il n’est pas nécessaire de modifier ce paramètre sur la plupart des appareils. Les appareils dont la résolution d’écran est inférieure
à celle du portail, généralement 1280x720, font exception.

#### Network settings {/* #network-settings */}
Paramètres réseau.

##### Enable network cache {/* #enable-network-cache */}
Mettez les requêtes réseau en cache pour accélérer le chargement du portail dans la plupart des cas. Désactivez cette option si vous rencontrez fréquemment
des erreurs d’authentification ou d’autres problèmes réseau.

##### Cache size {/* #cache-size */}
La taille du cache réseau. Valeur par défaut : 20 Mo.
