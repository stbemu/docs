---
title: Connexion des appareils
sidebar_label: Connexion des appareils
---

# Connexion des appareils {/* #connecting-devices */}

## Rechercher StbEmu {/* #discover-stbemu */}

1. Connectez votre téléphone ou tablette et l’appareil StbEmu au même réseau local accessible.
2. Dans StbEmu, ouvrez **Settings > Companion** et activez le service. Consultez les [paramètres Companion de StbEmu](../settings/companion.md).
3. Ouvrez la page **Devices** de Companion. Les appareils vérifiés apparaissent sous forme de fiches enregistrées. Ouvrez celle de l’installation StbEmu que vous souhaitez gérer.

![Page des appareils recherchant sur le réseau local](/img/companion/devices-empty.png)

Si rien n’apparaît, vérifiez que l’accès Companion est activé dans StbEmu et qu’Android autorise l’accès au réseau local. Sélectionnez **Retry** ou connectez-vous manuellement.

### Ajouter une adresse manuellement {/* #add-an-address-manually */}

Sélectionnez **Add by IP address**. Saisissez **IPv4 or IPv6 address** et le port affichés dans StbEmu, puis sélectionnez **Connect**. Un port laissé vide utilise **10000**. Saisissez une adresse IP, pas une URL de site ni un nom d’hôte. La saisie manuelle ne contourne ni la vérification ni l’association. Les appareils disposant d’une association enregistrée valide peuvent se reconnecter sans nouveau code.

![Appareil enregistré en attente d’association](/img/companion/devices-saved.png)

## Associer un appareil {/* #pair-a-device */}

1. Dans **Settings > Companion** de StbEmu, lancez l’association pour afficher un code.
2. Sur la page d’actions de l’appareil dans Companion, saisissez le code dans **Eight-digit pairing code**.
3. Sélectionnez **Pair device** et attendez **Connected**.

![Saisie d’un code d’association](/img/companion/pairing.png)

Si le code expire, affichez-en un nouveau dans StbEmu. Si la fréquence des tentatives est limitée, patientez avant de réessayer. L’association est enregistrée pour les connexions suivantes tant que StbEmu continue de l’autoriser. Révoquer l’accès dans StbEmu empêche aussi l’utilisation de l’autorisation enregistrée.

## Reconnecter, renommer ou retirer {/* #reconnect-rename-or-remove */}

**Disconnect** ferme la connexion et conserve l’appareil enregistré. Pour vous reconnecter, ouvrez sa fiche et sélectionnez **Connect**. Un changement de réseau peut interrompre les connexions ; reconnectez-vous après le rétablissement de la connectivité locale.

Utilisez le bouton en forme de crayon (**Rename device**) pour définir un nom local. **Use app name** rétablit le nom communiqué par StbEmu. Ce renommage ne renomme pas StbEmu lui-même.

Le bouton de corbeille (**Remove device**) demande confirmation. Il retire la connexion et l’association enregistrées de ce téléphone, conserve les fichiers de sauvegarde et ne change rien dans StbEmu. L’appareil retiré ne réapparaîtra pas automatiquement lors de la détection. Pour l’ajouter de nouveau, utilisez **Add by IP address** et associez-le à nouveau.
