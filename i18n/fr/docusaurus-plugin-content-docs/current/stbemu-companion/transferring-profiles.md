---
title: Transfert de profils et de paramètres
sidebar_label: Transferts de profils
---

# Transfert de profils et de paramètres {/* #transferring-profiles-and-settings */}

Utilisez un transfert pour copier directement le contenu sélectionné entre deux installations StbEmu associées distinctes. Les deux doivent être connectées et prendre en charge les actions source et destination choisies. Pour une copie dans la même installation, utilisez [Copy profile > This device](profiles.md#copy-a-profile).

![Écran de transfert en attente d’une destination compatible](/img/companion/transfer.png)

## Sélectionner et vérifier {/* #select-and-review */}

1. Ouvrez l’appareil source et sélectionnez **Transfer to another device**.
2. Choisissez **Destination device**. Si aucun n’est disponible, revenez à **Devices**, connectez un autre appareil associé et réessayez.
3. Sélectionnez **Application settings and remote mappings**, des profils ou les deux. Pour les profils, choisissez **Do not copy profiles**, **All profiles** ou **Choose individual profiles**. Au moins une catégorie doit être sélectionnée.
4. Sélectionnez **Review transfer**. Examinez les nouveaux profils, les changements de paramètres, les effets des associations de télécommande, les changements de profil actif, les exclusions et les incompatibilités.
5. Sélectionnez **I confirm these changes**, puis **Confirm transfer**.

La sélection individuelle exige une liste complète et actuelle des profils source. Si un profil sélectionné disparaît, utilisez **Refresh** pour vérifier la liste, puis décochez explicitement les profils toujours absents. L’actualisation ne retire ni ne remplace silencieusement les profils sélectionnés.

## Ce qui change {/* #what-changes */}

Les profils transférés sont de nouvelles copies avec de nouvelles identités à destination. Les profils de destination existants sont conservés. Les adresses MAC, numéros de série, ID d’appareil et autres valeurs des profils sont préservés ; la copie ne crée donc ni nouvel abonnement ni autorisation du fournisseur. Cette procédure ne propose pas **Merge**/**Replace all** ; ces modes appartiennent à la [restauration de sauvegarde](backups.md#restore-a-backup).

Les transferts de profils seuls conservent les paramètres d’application, les associations de télécommande et la sélection active de la destination. Les transferts de paramètres seuls conservent les profils et la sélection active de la destination. Lorsque les deux sont copiés, le profil actif de la source devient actif via sa nouvelle copie uniquement s’il est inclus ; sinon la sélection active de la destination est conservée.

Les paramètres d’application comprennent les préférences portables de StbEmu et les associations de touches de télécommande, pas la langue/le thème de Companion, les autorisations d’association, l’identité du service ni l’historique des opérations. Les valeurs non prises en charge sont signalées au lieu d’être ignorées silencieusement. Vérifiez les paramètres liés aux mots de passe et les autres paramètres écrasés avant de confirmer. Certains paramètres enregistrés nécessitent un changement de cycle de vie ou un redémarrage de StbEmu ; consultez [application des paramètres enregistrés](backups.md#results-and-applying-saved-settings).

Une fois que Companion signale que l’instantané source est vérifié, cette tentative précise peut se poursuivre si la source se déconnecte. Le transfert ne crée pas d’entrée permanente dans la bibliothèque de sauvegardes. Pour les résultats incertains ou une annulation, utilisez les [résultats des opérations](profiles.md#operation-results).
