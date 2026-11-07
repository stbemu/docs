---
id: profiles
title: Profils
sidebar_label: Profils
---

# Profils STB {/* #stb-profiles */}

Un **profil STB** est un ensemble d’options permettant d’émuler un décodeur dans l’application. Celle-ci crée un profil au premier lancement.
Vous pouvez le modifier ou ajouter d’autres profils pour charger différents portails sur le même appareil.
Ouvrez **Paramètres > Profils** et choisissez **Ajouter un profil**, ou sélectionnez un profil existant pour le modifier.
La vue d’ensemble regroupe les options sous **Connexion**, **Lecture et appareil** et **Gérer le profil**.
Les actions disponibles dépendent de l’édition de l’application et des restrictions du profil. Le profil actif ne peut pas être supprimé ;
passez à un autre profil avant de le supprimer. La suppression nécessite une confirmation.

Les modifications de texte et de sélection nécessitent une confirmation ; les interrupteurs enregistrent immédiatement. Consultez [Enregistrement des modifications](/settings#saving-changes)
pour les erreurs de validation, les modifications en conflit et les modifications enregistrées nécessitant une actualisation pendant l’exécution.

StbEmu ne fournit, n’héberge et n’indexe aucun média ni aucune liste de lecture IPTV.
Les utilisateurs doivent disposer des droits légaux sur les contenus auxquels ils accèdent via l’émulateur.

- [Nom du profil](#profile-name)
- [Paramètres du portail](#portal-settings)
    - [URL du portail](#portal-url)
    - [Langue du portail](#portal-language)
    - [Paramètres du proxy HTTP](#http-proxy-settings)
        - [Utiliser un proxy HTTP](#use-http-proxy)
        - [Nom d'hôte du proxy](#proxy-host-name)
        - [Port du proxy](#proxy-port)
    - [Le portail est interne](#portal-is-internal)
    - [URL du portail (Le portail est interne)](#internal-portal-url)
- [Configuration STB](#stb-configuration)
    - [Modèle STB](#stb-model)
    - [Micrologiciel](#firmware)
    - [Paramètres du micrologiciel](#firmware-settings)
    - [Agent utilisateur](#user-agent)
    - [Résolution de l'écran](#screen-resolution)
    - [Adresse MAC](#mac-address)
    - [Numéro de série](#serial-number)
    - [ID de l'appareil](#device-id)
        - [Utiliser un ID d'appareil basé sur l'adresse MAC](#use-mac-based-device-id)
        - [Envoyer l'ID de l'appareil](#send-device-id)
        - [Graine aléatoire de l'ID de l'appareil](#device-id-random-seed)
        - [ID de l'appareil](#device-id-value)
        - [ID2 de l'appareil et signature personnalisés](#custom-device-id-2-and-signature)
        - [ID de l'appareil 2](#device-id-2)
        - [Signature](#signature)
        - [Rétablir la valeur par défaut de l'ID de l'appareil…](#reset-device-id-to-default-value)
    - [Paramètres du matériel](#hardware-settings)
        - [Fabricant](#vendor)
        - [Version du matériel](#hardware-version)
- [Paramètres du lecteur multimédia](#media-player-settings)
    - [Lecteur multimédia](#media-player)
    - [Paramètres UDPXY](#udpxy-settings)
        - [Activer la prise en charge d'UDPXY](#enable-udxpy-support)
        - [URL du serveur UDPXY](#udpxy-server-url)
        - [Remplacer le protocole du flux](#overwrite-stream-protocol)
- [Paramètres avancés](#advanced-settings)

### Nom du profil {/* #profile-name */}
Le nom du profil. Il peut s’agir de n’importe quelle chaîne non vide.

### Paramètres du portail {/* #portal-settings */}
Options propres au portail.
##### URL du portail {/* #portal-url */}
Saisissez une URL absolue **http://** ou **https://**. Les hôtes du réseau local, localhost, les adresses IPv6 et les noms de domaine internationalisés sont pris en charge. Les URL réseau ne doivent contenir aucun caractère d’espacement.
Pour un portail interne, un chemin absolu du système de fichiers ou une URL absolue **file://** prise en charge est également accepté. Le nouvel éditeur n’accepte pas les URL FTP.

##### Langue du portail {/* #portal-language */}
La langue par défaut du portail, indiquée par un code à deux lettres selon la norme [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### Paramètres du proxy HTTP {/* #http-proxy-settings */}
Paramètres du proxy HTTP.

##### Utiliser un proxy HTTP {/* #use-http-proxy */}
Activez cette option pour utiliser un proxy HTTP.

##### Nom d'hôte du proxy {/* #proxy-host-name */}
L’hôte du proxy est distinct de son port ; l’hôte par défaut est 127.0.0.1.
##### Port du proxy {/* #proxy-port */}
Valeur par défaut : 3128. Les champs d’hôte et de port sont disponibles uniquement lorsque **Utiliser un proxy HTTP** est activé.

##### Le portail est interne {/* #portal-is-internal */}
Activez cette option pour utiliser un portail interne pour les appareils MAG. Une URL de portail locale l’active automatiquement et rend l’interrupteur indisponible. Le passage à une URL réseau désactive ce réglage automatique de portail interne.

##### URL du portail (Le portail est interne) {/* #internal-portal-url */}
Utilisez le champ **URL du portail** pour le chemin local ou l’URL de fichier ; il n’existe pas d’éditeur distinct pour l’URL interne.

Pour installer un portail, ouvrez **Paramètres > Profils > votre profil > Paramètres du portail**, utilisez l’action d’installation et sélectionnez son archive. Attendez la fin de l’extraction,
puis confirmez l’URL locale proposée. L’installation des fichiers et l’acceptation de l’URL sont deux étapes distinctes.
Utilisez l’action de suppression dans **Paramètres du portail** pour supprimer un portail interne installé.

### Configuration STB {/* #stb-configuration */}
Les principaux paramètres d’émulation.

#### Modèle STB {/* #stb-model */}
Le modèle de STB à émuler.

#### Micrologiciel {/* #firmware */}
Le **micrologiciel** à émuler ; aucun micrologiciel réel n’est installé. Certains portails nécessitent un micrologiciel précis.
Dans ce cas, sélectionnez-le dans la liste s’il est disponible.
La plupart des modèles de STB pris en charge proposent uniquement le micrologiciel **Generic**, qui correspond généralement à la version la plus récente.

Options de micrologiciel disponibles :
* Generic : généralement le micrologiciel disponible le plus récent.
* Custom (MAG 250 uniquement) : micrologiciel personnalisable. Utilisez-le si vous devez modifier des paramètres précis du micrologiciel.

La plupart des utilisateurs devraient utiliser le micrologiciel **Generic** (sélectionné par défaut).

#### Paramètres du micrologiciel {/* #firmware-settings */}
Cette option est disponible uniquement avec le micrologiciel **Custom** (actuellement pris en charge uniquement pour MAG 250).
Configurez les versions du moteur de lecture, de l’API JavaScript et de l’API STB, ainsi que la version, la description et la date de l’image du micrologiciel.
Activez l’utilisation d’un Agent utilisateur personnalisé avant de modifier sa chaîne.

#### Agent utilisateur {/* #user-agent */}
La chaîne Agent utilisateur du navigateur web de l’application.

#### Résolution de l'écran {/* #screen-resolution */}
La résolution d’écran à émuler ; cela ne modifie pas la résolution réelle de l’écran.
Choisissez une résolution prise en charge par votre portail, généralement **1280x720**.

#### Adresse MAC {/* #mac-address */}
L’adresse MAC de l’appareil émulé. Vous pouvez utiliser l’adresse MAC d’un véritable appareil MAG 250 vous appartenant,
ou 12 chiffres hexadécimaux aléatoires (0–9, A–F), regroupés par paires séparées par des deux-points. [^wrong_mac]

La plupart des portails exigent que l’adresse MAC commence par 00:1A:79.

[^wrong_mac]: Sur certains appareils uniquement Wi-Fi, l’adresse MAC générée peut être **00:1A:79:00:00:00**.
    Cela signifie que l’application n’a pas pu la détecter correctement en raison des restrictions d’Android.
    Remplacez la partie **00:00:00** par des chiffres hexadécimaux aléatoires en conservant les deux-points entre les paires.

#### Numéro de série {/* #serial-number */}
Le numéro de série de l’appareil émulé. La plupart des portails ne le vérifient pas ; n’importe quelle chaîne de texte convient donc généralement.

#### ID de l'appareil {/* #device-id */}
Paramètres de l’identifiant de l’appareil.

##### Utiliser un ID d'appareil basé sur l'adresse MAC {/* #use-mac-based-device-id */}
Générer l’identifiant de l’appareil à partir de son adresse MAC. Appuyez sur **Rétablir la valeur par défaut de l'ID de l'appareil…** après avoir activé ou
désactivé cette option pour régénérer l’identifiant.

##### Envoyer l'ID de l'appareil {/* #send-device-id */}
Envoyer l’identifiant de l’appareil lorsqu’un portail le demande. Si cette option est désactivée, l’application envoie une chaîne vide.

##### Graine aléatoire de l'ID de l'appareil {/* #device-id-random-seed */}
La valeur d’initialisation utilisée pour générer l’identifiant de l’appareil. Utilisez la même valeur sur tous les appareils qui utilisent la même URL de portail et
la même adresse MAC. La confirmation d’une valeur modifiée régénère automatiquement les identifiants.
N’appuyez pas sur **Rétablir la valeur par défaut de l'ID de l'appareil…** si vous souhaitez conserver la valeur d’initialisation : cette action l’efface.

##### ID de l'appareil {/* #device-id-value */}
L’identifiant de l’appareil. Utilisez la valeur générée ou saisissez la vôtre.

##### ID2 de l'appareil et signature personnalisés {/* #custom-device-id-2-and-signature */}
Activez cette option pour modifier le champ **ID de l'appareil 2** et la signature.

##### ID de l'appareil 2 {/* #device-id-2 */}
##### Signature {/* #signature */}
##### Rétablir la valeur par défaut de l'ID de l'appareil… {/* #reset-device-id-to-default-value */}
Après confirmation, la valeur d’initialisation est effacée et les valeurs des champs **ID de l'appareil** et **ID de l'appareil 2** ainsi que la signature sont régénérées à partir des valeurs actuelles du profil. Les autres paramètres du profil sont conservés.

La modification manuelle du champ **ID de l'appareil** est disponible uniquement si l’option **Envoyer l'ID de l'appareil** est activée et les identifiants basés sur l’adresse MAC sont désactivés.
La modification des champs **ID de l'appareil 2** et **Signature** nécessite également l’activation de l’option **ID2 de l'appareil et signature personnalisés**.
Les valeurs calculées automatiquement restent lisibles lorsque la modification est indisponible.

#### Paramètres du matériel {/* #hardware-settings */}
##### Fabricant {/* #vendor */}
##### Version du matériel {/* #hardware-version */}

Les options de l’appareil comprennent également la compatibilité Ministra et la redirection du navigateur. Ne les modifiez que si votre portail l’exige.

### Paramètres du lecteur multimédia {/* #media-player-settings */}

Paramètres du lecteur multimédia pour ce profil.
#### Lecteur multimédia {/* #media-player */}
Sélectionnez le lecteur multimédia par défaut pour ce profil.

La liste comprend la sélection automatique, Exo, le lecteur interne Android et un lecteur externe,
ainsi que les lecteurs supplémentaires disponibles dans votre version. Choisissez parmi les options affichées dans l’application.
La prise en charge des codecs par le lecteur interne dépend d’Android ; les lecteurs externes ouvrent les flux dans une autre application.

#### Paramètres UDPXY {/* #udpxy-settings */}
##### Activer la prise en charge d'UDPXY {/* #enable-udxpy-support */}
N’activez UDPXY qu’après avoir saisi une URL de serveur HTTP/HTTPS valide.
##### URL du serveur UDPXY {/* #udpxy-server-url */}
Vous pouvez saisir l’URL lorsque UDPXY est désactivé. Une URL vide est autorisée uniquement lorsqu’il est désactivé ; une URL non vide doit être une URL HTTP/HTTPS valide.
##### Remplacer le protocole du flux {/* #overwrite-stream-protocol */}
Choisissez le remplacement du protocole du flux lorsque UDPXY est activé.
### Paramètres avancés {/* #advanced-settings */}
Les options de compatibilité propres au profil comprennent des correctifs CSS, la détection de l’émulateur, des corrections de couleur d’arrière-plan, de fichiers locaux et d’AJAX,
ainsi que des événements de retour et de touches pour les lecteurs externes. Les options d’événements Retour, Quitter et OK dépendent de l’option d’événement de retour à la liste des chaînes.
Ne les modifiez que si votre portail ou lecteur externe l’exige.
