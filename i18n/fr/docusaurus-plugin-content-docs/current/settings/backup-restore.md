---
id: backup-restore
title: Sauvegarde et restauration
sidebar_label: Sauvegarde et restauration
---

# Sauvegarde et restauration {/* #backup--restore */}

Ouvrez **Paramètres > Sauvegarde et restauration**. Cette catégorie est disponible uniquement si les opérations de sauvegarde sont activées pour votre application.

## Enregistrer ou partager une sauvegarde {/* #save-or-share-a-backup */}

Sélectionnez **Enregistrer les paramètres et profils…**, puis une destination dans le sélecteur de documents Android. Sélectionnez **Partager les paramètres et profils…** pour créer une sauvegarde et l’envoyer via l’interface de partage Android.

Si aucun sélecteur de documents n’est disponible, l’application utilise les dossiers de sauvegarde accessibles et son navigateur de fichiers. **Parcourir les sauvegardes enregistrées** affiche les sauvegardes trouvées dans les dossiers disponibles. Les autorisations de l’appareil et les fournisseurs de fichiers disponibles peuvent limiter l’accès aux fichiers.

## Restaurer une sauvegarde {/* #restore-a-backup */}

1. Sélectionnez **Restaurer les paramètres et profils…**, puis une sauvegarde, ou choisissez-en une dans le navigateur des sauvegardes enregistrées.
2. Vérifiez le nom du fichier, le nombre de profils et les effets de la restauration indiqués.
3. Confirmez la restauration. L’annulation du sélecteur ou le refus d’une autorisation ne la lance pas.

La restauration met à jour les profils correspondants, restaure les paramètres de l’application et remplace les affectations des touches de télécommande. L’identité du service Companion, les identifiants d’accès, les enregistrements des appareils révoqués et l’historique des opérations ne sont pas inclus dans les sauvegardes portables.

:::warning
La restauration applique les modifications en plusieurs étapes. Si une étape ultérieure échoue, les modifications précédentes peuvent déjà être enregistrées. Après un échec, rechargez les paramètres et vérifiez la configuration actuelle. Ce processus de restauration locale ne permet ni d’annuler toute la restauration ni de choisir un mode de fusion ou de remplacement.
:::
