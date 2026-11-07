---
title: Sauvegardes et restauration
sidebar_label: Sauvegardes et restauration
---

# Sauvegardes et restauration {/* #backups-and-restore */}

La bibliothèque **Backups** de Companion conserve en privé les sauvegardes JSON StbEmu terminées sur votre téléphone ou tablette. Les fichiers enregistrés restent disponibles hors connexion. Cette bibliothèque est distincte de la [sauvegarde système Android](system-backup.md), qui protège le propre état de Companion.

![Bibliothèque de sauvegardes et création d’une sauvegarde d’appareil](/img/companion/backup-library.png)

## Enregistrer et gérer les fichiers {/* #save-and-manage-files */}

- **Create backup:** ouvrez l’action **Create backup** d’un appareil associé connecté, saisissez **Backup name** et sélectionnez **Create backup**. Attendez **Backup saved**.
- **Import backup:** ouvrez **Backups** dans le menu de l’application, sélectionnez **Import backup** et choisissez un fichier JSON StbEmu. L’importation, l’exportation et le partage locaux ne nécessitent pas d’appareil StbEmu connecté.
- **Export JSON:** sélectionnez cette action sur l’entrée de sauvegarde dans la bibliothèque, puis choisissez une destination externe.
- **Share JSON:** sélectionnez cette action sur l’entrée de sauvegarde pour ouvrir le panneau de partage Android. Son ouverture ne confirme pas la remise à l’application sélectionnée.
- **Delete local backup:** confirmez la suppression de cette copie locale. L’appareil StbEmu source reste inchangé.

La limite JSON est de **16 MiB (16,777,216 octets)**. Les fichiers importés sont validés et conservent leurs octets d’origine. Un fichier importé porte le libellé **Source device unknown** ; un contrôle d’intégrité ne détermine pas qui l’a créé. Une exportation externe échouée peut laisser un fichier de destination incomplet, tandis que les sauvegardes locales existantes sont conservées.

:::note
Les fichiers de sauvegarde peuvent contenir des mots de passe, des données de portail et des identifiants d’appareils. L’exportation et le partage conservent ces valeurs ; choisissez la destination ou le destinataire en conséquence.
:::

## Restaurer une sauvegarde {/* #restore-a-backup */}

1. Sélectionnez **Restore backup** dans une entrée de bibliothèque ou sur la page d’actions d’un appareil.
2. Choisissez **Destination device**, **Backup to restore** et un **Restore mode** pris en charge.
3. Sélectionnez **Review restore**. Vérifiez les profils ajoutés, écrasés et supprimés ; **Changed settings** ; les associations de touches de télécommande ; les métadonnées locales exclues ; ainsi que les champs incompatibles ou verrouillés.
4. Cochez la case de confirmation, puis sélectionnez **Apply restore**.

![Écran de restauration montrant le comportement de Merge](/img/companion/restore.png)

**Merge** écrase les profils dont les UUID correspondent, ajoute les nouveaux profils et conserve ceux présents uniquement sur la destination. **Replace all** supprime aussi les profils de destination absents de la sauvegarde. La correspondance utilise les identifiants, pas les noms de profil. Les deux modes restaurent les paramètres d’application portables et les associations de touches de télécommande. Les métadonnées propres à la destination, comme les ID locaux de ligne, la version de l’application et le répertoire de mise à jour, sont exclues.

:::warning
Vérifiez chaque écrasement et suppression avant d’appliquer. Replace all remplace l’ensemble des profils ; cela ne permet pas d’ajouter uniquement des profils sélectionnés. Pour des copies sélectives, utilisez les [transferts de profils](transferring-profiles.md).
:::

## Résultats et application des paramètres enregistrés {/* #results-and-applying-saved-settings */}

Un aperçu expiré nécessite **Start a new attempt** et une nouvelle vérification. Si le résultat est incertain, consultez les [résultats des opérations](profiles.md#operation-results) avant de répéter une restauration. La récupération peut interroger la destination même si la sauvegarde d’origine n’est plus disponible.

Les paramètres enregistrés et leurs effets à l’exécution sont distincts. S’ils sont modifiés, les paramètres de télécommande virtuelle prennent effet à la prochaine pause/reprise normale de StbEmu, la taille du cache nécessite le redémarrage du processus StbEmu et la langue peut recréer son activité. L’option de compatibilité UPnP ne bascule pas le fonctionnement actuel d’UPnP, même après redémarrage. **Check result** ne relance pas ces mises à jour à l’exécution.
