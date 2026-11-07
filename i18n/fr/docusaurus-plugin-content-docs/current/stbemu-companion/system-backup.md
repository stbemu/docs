---
title: Sauvegarde système Android
sidebar_label: Sauvegarde système Android
---

# Sauvegarde système Android {/* #android-system-backup */}

Ouvrez **Settings > Backups > System backup**. La sauvegarde système Android peut restaurer les préférences de Companion, les appareils et noms enregistrés, la confiance vérifiée et les identifiants d’association encore valides après une restauration Android réussie. Elle est distincte de la restauration d’une [sauvegarde JSON StbEmu](backups.md) vers un appareil associé.

## Inclure les archives locales {/* #include-local-archives */}

**Include local archives** est activé par défaut. Cette option inclut les sauvegardes StbEmu terminées admissibles de la bibliothèque locale dans les futures sauvegardes système. La désactiver conserve les fichiers locaux et les paramètres/appareils de Companion, mais exclut les archives des futures sauvegardes. Cela ne supprime pas les anciens contenus du cloud.

La page affiche une estimation de la taille sélectionnée. Utilisez **Refresh estimate** pour refaire la mesure, **Open Android settings** pour vérifier la configuration de sauvegarde Android ou **Open archive library / manual export** pour exporter vous-même les fichiers.

## Disponibilité et limites {/* #availability-and-limits */}

La sauvegarde système nécessite **Android 9 ou version ultérieure**, bien que Companion prenne lui-même en charge Android 8. La sauvegarde chiffrée dans le cloud exige aussi un compte compatible, un verrouillage d’écran sécurisé et le chiffrement côté client d’Android. Android contrôle la planification, l’admissibilité du transport et la disponibilité de la restauration.

Le quota cloud nominal est de **25 MiB** ; le quota réellement disponible peut être inférieur. La limite de **256 MiB** entre appareils est une limite de l’application, pas une promesse de capacité du transport. Si la sélection complète est trop volumineuse, excluez les archives locales ou exportez-les manuellement. Companion ne sauvegarde pas silencieusement une partie seulement de la sélection.

Une estimation ou un message de préparation locale ne confirme pas qu’Android a stocké une sauvegarde dans le cloud. Une estimation indisponible n’est pas une sauvegarde de taille nulle. Si la page indique que la sauvegarde est désactivée ou non prise en charge, exportez les archives manuellement au lieu de supposer les données protégées.

## Après la restauration de Companion par Android {/* #after-android-restores-companion */}

Les appareils restaurés doivent être vérifiés avant d’être affichés comme connectés. Les identifiants d’association encore autorisés permettent une reconnexion sans nouvelle association, mais la restauration ne peut pas annuler une révocation dans StbEmu. Les copies restaurées partagent les mêmes autorisations ; révoquer une autorisation affecte aussi ces copies.

La bibliothèque répertorie les fichiers d’archive terminés effectivement restaurés. Les métadonnées seules ne recréent pas les fichiers manquants. Une opération inachevée n’est pas automatiquement renvoyée ; reconnectez-vous et consultez les [résultats des opérations](profiles.md#operation-results) lorsqu’ils sont disponibles.
