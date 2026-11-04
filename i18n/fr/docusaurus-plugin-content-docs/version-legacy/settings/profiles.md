---
id: profiles
title: Profils
sidebar_label: Profils
---

# Profils STB {/* #stb-profiles */}

Un **profil STB** est un ensemble d’options permettant d’émuler un décodeur dans l’application. Celle-ci crée un profil au premier lancement.
Vous pouvez le modifier ou ajouter d’autres profils pour charger différents portails sur le même appareil.
Pour créer un profil, appuyez deux fois sur l’écran afin d’afficher le menu en haut ou sur le côté [^1].
Sélectionnez **Settings**, puis **Profiles**, où vous pouvez ajouter ou modifier des profils.

StbEmu ne fournit, n’héberge et n’indexe aucun média ni aucune liste de lecture IPTV.
Les utilisateurs doivent disposer des droits légaux sur les contenus auxquels ils accèdent via l’émulateur.

[^1]: Si vous utilisez une télécommande 3D ou une souris, déplacez le pointeur, cliquez sur l’écran et ouvrez le menu de l’application en haut.

- [Profile name](#profile-name)
- [Portal settings](#portal-settings)
    - [Portal URL](#portal-url)
    - [Portal language](#portal-language)
    - [HTTP Proxy settings](#http-proxy-settings)
        - [Use HTTP proxy](#use-http-proxy)
        - [Proxy host name](#proxy-host-name)
        - [Proxy port](#proxy-port)
    - [Portal is internal](#portal-is-internal)
    - [Internal portal URL](#internal-portal-url)
- [STB configuration](#stb-configuration)
    - [STB Model](#stb-model)
    - [Firmware](#firmware)
    - [Firmware settings](#firmware-settings)
    - [User Agent](#user-agent)
    - [Screen resolution](#screen-resolution)
    - [MAC address](#mac-address)
    - [Serial number](#serial-number)
    - [Device ID](#device-id)
        - [Use MAC-based device ID](#use-mac-based-device-id)
        - [Send Device ID](#send-device-id)
        - [Device ID random seed](#device-id-random-seed)
        - [Device ID](#device-id-value)
        - [Custom device ID 2 and signature](#custom-device-id-2-and-signature)
        - [Device ID 2](#device-id-2)
        - [Signature](#signature)
        - [Reset device ID to default value](#reset-device-id-to-default-value)
    - [Hardware settings](#hardware-settings)
        - [Vendor](#vendor)
        - [Hardware version](#hardware-version)
    - [IP address](#ip-address)
- [Media player settings](#media-player-settings)
    - [Media player](#media-player)
    - [UDPXY settings](#udpxy-settings)
        - [Enable UDPXY support](#enable-udxpy-support)
        - [UDPXY server URL](#udpxy-server-url)
        - [Overwrite stream protocol](#overwrite-stream-protocol)
- [Advanced settings](#advanced-settings)

### Profile name {/* #profile-name */}
Le nom du profil. Il peut s’agir de n’importe quelle chaîne non vide.

### Portal settings {/* #portal-settings */}
Options propres au portail.
##### Portal URL {/* #portal-url */}
L’URL du portail. Elle doit commencer par un schéma (**http://**, **https://**, **ftp://**, etc.).

##### Portal language {/* #portal-language */}
La langue par défaut du portail, indiquée par un code à deux lettres selon la norme [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings {/* #http-proxy-settings */}
Paramètres du proxy HTTP.

##### Use HTTP proxy {/* #use-http-proxy */}
Activez cette option pour utiliser un proxy HTTP.

##### Proxy host name {/* #proxy-host-name */}
##### Proxy port {/* #proxy-port */}

##### Portal is internal {/* #portal-is-internal */}
Activez cette option pour utiliser un portail interne pour les appareils MAG.

##### Internal portal URL {/* #internal-portal-url */}

### STB configuration {/* #stb-configuration */}
Les principaux paramètres d’émulation.

#### STB Model {/* #stb-model */}
Le modèle de STB à émuler.

#### Firmware {/* #firmware */}
Le **micrologiciel** à émuler ; aucun micrologiciel réel n’est installé. Certains portails nécessitent un micrologiciel précis.
Dans ce cas, sélectionnez-le dans la liste s’il est disponible.
La plupart des modèles de STB pris en charge proposent uniquement le micrologiciel **Generic**, qui correspond généralement à la version la plus récente.

Options de micrologiciel disponibles :
* Generic : généralement le micrologiciel disponible le plus récent.
* Custom (MAG 250 uniquement) : micrologiciel personnalisable. Utilisez-le si vous devez modifier des paramètres précis du micrologiciel.

La plupart des utilisateurs devraient utiliser le micrologiciel **Generic** (sélectionné par défaut).

#### Firmware settings {/* #firmware-settings */}
Cette option est disponible uniquement avec le micrologiciel **Custom** (actuellement pris en charge uniquement pour MAG 250).
Utilisez-la pour configurer des paramètres précis du micrologiciel, comme la version ou une chaîne User Agent personnalisée.

#### User Agent {/* #user-agent */}
La chaîne User Agent du navigateur web de l’application.

#### Screen resolution {/* #screen-resolution */}
La résolution d’écran à émuler ; cela ne modifie pas la résolution réelle de l’écran.
Choisissez une résolution prise en charge par votre portail, généralement **1280x720**.

#### MAC address {/* #mac-address */}
L’adresse MAC de l’appareil émulé. Vous pouvez utiliser l’adresse MAC d’un véritable appareil MAG 250 vous appartenant,
ou 12 chiffres hexadécimaux aléatoires (0–9, A–F), regroupés par paires séparées par des deux-points. [^wrong_mac]

La plupart des portails exigent que l’adresse MAC commence par 00:1A:79.

[^wrong_mac]: Sur certains appareils uniquement Wi-Fi, l’adresse MAC générée peut être **00:1A:79:00:00:00**.
    Cela signifie que l’application n’a pas pu la détecter correctement en raison des restrictions d’Android.
    Remplacez la partie **00:00:00** par des chiffres hexadécimaux aléatoires en conservant les deux-points entre les paires.

#### Serial number {/* #serial-number */}
Le numéro de série de l’appareil émulé. La plupart des portails ne le vérifient pas ; n’importe quelle chaîne de texte convient donc généralement.

#### Device ID {/* #device-id */}
Paramètres de l’identifiant de l’appareil.

##### Use MAC-based device ID {/* #use-mac-based-device-id */}
Générer l’identifiant de l’appareil à partir de son adresse MAC. Appuyez sur **Reset device ID** après avoir activé ou
désactivé cette option pour régénérer l’identifiant.

##### Send Device ID {/* #send-device-id */}
Envoyer l’identifiant de l’appareil lorsqu’un portail le demande. Si cette option est désactivée, l’application envoie une chaîne vide.

##### Device ID random seed {/* #device-id-random-seed */}
La valeur d’initialisation utilisée pour générer l’identifiant de l’appareil. Utilisez la même valeur sur tous les appareils qui utilisent la même URL de portail et
la même adresse MAC. Appuyez sur **Reset device ID** après avoir modifié cette valeur.

##### Device ID value {/* #device-id-value */}
L’identifiant de l’appareil. Utilisez la valeur générée ou saisissez la vôtre.

##### Custom device ID 2 and signature {/* #custom-device-id-2-and-signature */}
Activez cette option pour modifier Device ID 2 et la signature.

##### Device ID 2 {/* #device-id-2 */}
##### Signature {/* #signature */}
##### Reset device ID to default value {/* #reset-device-id-to-default-value */}
Régénérer **Device ID**, **Device ID 2** et la signature.

#### Hardware settings {/* #hardware-settings */}
##### Vendor {/* #vendor */}
##### Hardware version {/* #hardware-version */}

#### IP address {/* #ip-address */}
L’adresse IP envoyée à un portail sur demande. Il s’agit d’une adresse émulée, pas de l’adresse IP réelle de l’appareil.
La plupart des portails n’utilisent pas cette information ; il n’est donc généralement pas nécessaire de la modifier.
### Media player settings {/* #media-player-settings */}

Paramètres du lecteur multimédia pour ce profil.
#### Media player {/* #media-player */}
Sélectionnez le lecteur multimédia par défaut pour ce profil.

| Lecteur | Description | Remarque |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo | [GitHub](https://github.com/google/ExoPlayer) | Lecteur par défaut, recommandé pour la plupart des appareils |
| VLC             | [Site web](https://www.videolan.org)                                                                                                                 |                                                         |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk | [GitHub](https://github.com/bilibili/ijkplayer) | Ne prend pas en charge les sous-titres |
| Internal player | Utilise le lecteur Android. Les codecs pris en charge dépendent de la version Android de votre appareil. | Ne prend pas en charge les sous-titres |
| External player | Permet d’utiliser presque n’importe quel lecteur externe. L’intégration à l’émulateur est indisponible ; les flux multimédias s’ouvrent dans une autre application. | |

#### UDPXY settings {/* #udpxy-settings */}
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL {/* #udpxy-server-url */}
##### Overwrite stream protocol {/* #overwrite-stream-protocol */}
### Advanced settings {/* #advanced-settings */}
