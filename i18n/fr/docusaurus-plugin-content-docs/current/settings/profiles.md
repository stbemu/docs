---
id: profiles
title: Profils
sidebar_label: Profils
---

# Profils STB {/* #stb-profiles */}

Un **profil STB** est un ensemble d’options permettant d’émuler un décodeur dans l’application. Celle-ci crée un profil au premier lancement.
Vous pouvez le modifier ou ajouter d’autres profils pour charger différents portails sur le même appareil.
Ouvrez **Settings > Profiles** et choisissez **Add profile**, ou sélectionnez un profil existant pour le modifier.
La vue d’ensemble regroupe les options sous **Connection**, **Playback & device** et **Manage profile**.
Les actions disponibles dépendent de l’édition de l’application et des restrictions du profil. Le profil actif ne peut pas être supprimé ;
passez à un autre profil avant de le supprimer. La suppression nécessite une confirmation.

Les modifications de texte et de sélection nécessitent une confirmation ; les interrupteurs enregistrent immédiatement. Consultez [Enregistrement des modifications](/settings#saving-changes)
pour les erreurs de validation, les modifications en conflit et les modifications enregistrées nécessitant une actualisation pendant l’exécution.

StbEmu ne fournit, n’héberge et n’indexe aucun média ni aucune liste de lecture IPTV.
Les utilisateurs doivent disposer des droits légaux sur les contenus auxquels ils accèdent via l’émulateur.

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
Saisissez une URL absolue **http://** ou **https://**. Les hôtes du réseau local, localhost, les adresses IPv6 et les noms de domaine internationalisés sont pris en charge. Les URL réseau ne doivent contenir aucun caractère d’espacement.
Pour un portail interne, un chemin absolu du système de fichiers ou une URL absolue **file://** prise en charge est également accepté. Le nouvel éditeur n’accepte pas les URL FTP.

##### Portal language {/* #portal-language */}
La langue par défaut du portail, indiquée par un code à deux lettres selon la norme [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings {/* #http-proxy-settings */}
Paramètres du proxy HTTP.

##### Use HTTP proxy {/* #use-http-proxy */}
Activez cette option pour utiliser un proxy HTTP.

##### Proxy host name {/* #proxy-host-name */}
L’hôte du proxy est distinct de son port ; l’hôte par défaut est 127.0.0.1.
##### Proxy port {/* #proxy-port */}
Valeur par défaut : 3128. Les champs d’hôte et de port sont disponibles uniquement lorsque **Use HTTP proxy** est activé.

##### Portal is internal {/* #portal-is-internal */}
Activez cette option pour utiliser un portail interne pour les appareils MAG. Une URL de portail locale l’active automatiquement et rend l’interrupteur indisponible. Le passage à une URL réseau désactive ce réglage automatique de portail interne.

##### Internal portal URL {/* #internal-portal-url */}
Utilisez le champ **Portal URL** pour le chemin local ou l’URL de fichier ; il n’existe pas d’éditeur distinct pour l’URL interne.

Pour installer un portail, ouvrez **Settings > Profiles > votre profil > Portal settings**, utilisez l’action d’installation et sélectionnez son archive. Attendez la fin de l’extraction,
puis confirmez l’URL locale proposée. L’installation des fichiers et l’acceptation de l’URL sont deux étapes distinctes.
Utilisez l’action de suppression dans **Portal settings** pour supprimer un portail interne installé.

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
Configurez les versions du moteur de lecture, de l’API JavaScript et de l’API STB, ainsi que la version, la description et la date de l’image du micrologiciel.
Activez l’utilisation d’un User Agent personnalisé avant de modifier sa chaîne.

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
la même adresse MAC. La confirmation d’une valeur modifiée régénère automatiquement les identifiants.
N’appuyez pas sur Reset si vous souhaitez conserver la valeur d’initialisation : Reset l’efface.

##### Device ID value {/* #device-id-value */}
L’identifiant de l’appareil. Utilisez la valeur générée ou saisissez la vôtre.

##### Custom device ID 2 and signature {/* #custom-device-id-2-and-signature */}
Activez cette option pour modifier Device ID 2 et la signature.

##### Device ID 2 {/* #device-id-2 */}
##### Signature {/* #signature */}
##### Reset device ID to default value {/* #reset-device-id-to-default-value */}
Après confirmation, la valeur d’initialisation est effacée et **Device ID**, **Device ID 2** ainsi que la signature sont régénérés à partir des valeurs actuelles du profil. Les autres paramètres du profil sont conservés.

La modification manuelle de **Device ID** est disponible uniquement si **Send Device ID** est activé et les identifiants basés sur l’adresse MAC sont désactivés.
La modification de **Device ID 2** et de **Signature** nécessite également **Custom device ID 2 and signature**.
Les valeurs calculées automatiquement restent lisibles lorsque la modification est indisponible.

#### Hardware settings {/* #hardware-settings */}
##### Vendor {/* #vendor */}
##### Hardware version {/* #hardware-version */}

Les options de l’appareil comprennent également la compatibilité Ministra et la redirection du navigateur. Ne les modifiez que si votre portail l’exige.

### Media player settings {/* #media-player-settings */}

Paramètres du lecteur multimédia pour ce profil.
#### Media player {/* #media-player */}
Sélectionnez le lecteur multimédia par défaut pour ce profil.

La liste comprend la sélection automatique, Exo, le lecteur interne Android et un lecteur externe,
ainsi que les lecteurs supplémentaires disponibles dans votre version. Choisissez parmi les options affichées dans l’application.
La prise en charge des codecs par le lecteur interne dépend d’Android ; les lecteurs externes ouvrent les flux dans une autre application.

#### UDPXY settings {/* #udpxy-settings */}
##### Enable UDPXY support {/* #enable-udxpy-support */}
N’activez UDPXY qu’après avoir saisi une URL de serveur HTTP/HTTPS valide.
##### UDPXY server URL {/* #udpxy-server-url */}
Vous pouvez saisir l’URL lorsque UDPXY est désactivé. Une URL vide est autorisée uniquement lorsqu’il est désactivé ; une URL non vide doit être une URL HTTP/HTTPS valide.
##### Overwrite stream protocol {/* #overwrite-stream-protocol */}
Choisissez le remplacement du protocole du flux lorsque UDPXY est activé.
### Advanced settings {/* #advanced-settings */}
Les options de compatibilité propres au profil comprennent des correctifs CSS, la détection de l’émulateur, des corrections de couleur d’arrière-plan, de fichiers locaux et d’AJAX,
ainsi que des événements de retour et de touches pour les lecteurs externes. Les options d’événements Back, Exit et OK dépendent de l’option d’événement de retour à la liste des chaînes.
Ne les modifiez que si votre portail ou lecteur externe l’exige.
