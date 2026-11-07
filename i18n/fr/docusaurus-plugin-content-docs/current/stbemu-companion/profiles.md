---
title: Gestion des profils
sidebar_label: Profils
---

# Gestion des profils {/* #managing-profiles */}

Ouvrez un appareil connecté et sélectionnez **Profiles**. La liste affiche les noms des profils, leurs identifiants (UUID) et les adresses de portail disponibles. Sélectionnez un profil pour consulter ses paramètres. Utilisez **Load more** pour des pages supplémentaires et **Refresh** pour les données actuelles. Les actions dépendent des permissions prises en charge par l’appareil.

## Créer, modifier et supprimer {/* #create-edit-and-delete */}

- Sélectionnez **Create profile** dans la liste. Les champs de création pris en charge comprennent **Name** et **Portal URL**. Les champs non modifiés utilisent les valeurs par défaut de StbEmu.
- Ouvrez un profil et sélectionnez **Edit profile** pour changer les champs modifiables pris en charge. Seuls les champs modifiés changent ; les paramètres supplémentaires conservés par l’appareil sont préservés.
- Sélectionnez **Delete profile** pour préparer une suppression. Vérifiez tout changement du profil actif ou profil de remplacement avant de confirmer.

Sélectionnez **Review changes**, examinez l’aperçu et les avertissements, puis sélectionnez **Confirm changes** ou **Confirm deletion**. La première action n’enregistre ni ne supprime immédiatement le profil. Les changements incompatibles ne peuvent pas être confirmés. Si le profil ou les champs disponibles changent pendant la modification, actualisez et vérifiez de nouveau.

Pour connaître la signification des champs de profil StbEmu, consultez [Profils STB](../settings/profiles.md).

## Copier un profil {/* #copy-a-profile */}

Ouvrez un profil et sélectionnez **Copy profile**. Choisissez **This device** pour une copie sur le même appareil, puis vérifiez et confirmez les changements. La copie possède une nouvelle identité ; ne l’identifiez pas uniquement par son nom. **Edit copied profile**, si disponible après réussite, ouvre la copie renvoyée plutôt que l’original.

Choisir un autre appareil associé admissible ouvre la [procédure du guide de transfert](transferring-profiles.md) avec ce profil sélectionné.

## Résultats des opérations {/* #operation-results */}

Si la connexion échoue ou si le résultat est incertain, ouvrez **Recent operation results** de l’appareil et utilisez **Check result** avant de lancer un nouveau changement. La vérification nécessite une connexion autorisée et interroge l’opération d’origine ; elle n’envoie pas à nouveau le changement. Cela s’applique aussi aux [transferts](transferring-profiles.md) et aux [restaurations de sauvegardes](backups.md).

Un aperçu expiré exige une nouvelle vérification explicite. L’annulation peut coïncider avec l’enregistrement ; lisez donc le résultat final au lieu de supposer que **Cancel operation** a annulé les changements. **Changes saved on the device** confirme les données enregistrées ; l’actualisation à l’exécution peut encore être en attente. Vérifier un résultat ne relance pas cette actualisation, et un profil copié puis supprimé n’est jamais recréé par la consultation de son historique.
