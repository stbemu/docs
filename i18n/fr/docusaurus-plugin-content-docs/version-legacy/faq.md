---
id: faq
title: Questions fréquentes
sidebar_label: Questions fréquentes
---

import FAQ from '@site/src/components/FAQ';

# Questions fréquentes {/* #faq */}

<FAQ id="google-play-pay-again" question="J’ai payé StbEmu Pro sur Google Play, mais je ne peux pas le télécharger. Google Play me demande de payer à nouveau">
    Il s’agit d’un problème connu de Google Play. Le traitement du paiement et la mise à jour des données sur vos appareils peuvent prendre jusqu’à 24 heures.
    Vous pouvez également ouvrir un navigateur web sur votre ordinateur ou appareil mobile, accéder à [Google Play](https://play.google.com/store),
    rechercher StbEmu Pro ([lien direct](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro)),
    et lancer son installation à distance sur vos appareils.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="L’application réinitialise le volume lorsque je change de chaîne">
    Il s’agit d’un problème connu sur certains appareils Sony, Philips et Xiaomi. D’autres appareils peuvent également être concernés.

    Pour le résoudre, configurez l’application pour qu’elle utilise le volume global du système :
    Ouvrez [Settings](settings/index.md) > [Common settings](settings/common_settings.md) et activez ***Always use system volume level***.
    Rechargez le portail actif depuis le menu de l’application pour appliquer les modifications.
</FAQ>

<FAQ id="customize-portal-ui" question="Comment personnaliser l’interface du portail ? Je n’aime pas les couleurs ou les icônes">
    Les portails sont hébergés sur les serveurs de votre fournisseur IPTV. Vous pouvez personnaliser l’interface uniquement si votre fournisseur propose cette option.
    La plupart des portails ne permettent pas de personnaliser l’interface ; seul le fournisseur IPTV peut alors modifier leur apparence.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="Des chaînes disparaissent de Favorites lorsque je recharge le portail, ou je ne peux pas les réorganiser">
    Toutes les listes de chaînes, y compris les favoris, sont stockées sur les serveurs de votre fournisseur IPTV. Si l’application ne charge pas vos favoris
    ou les charge dans le mauvais ordre, votre fournisseur IPTV n’a pas correctement configuré le portail.
    Seul votre fournisseur peut résoudre ce problème.
</FAQ>

<FAQ id="channels-buffer" question="Les chaînes se mettent fréquemment en mémoire tampon pendant la lecture">
    Des mises en mémoire tampon fréquentes signifient généralement que votre connexion réseau ou celle de votre fournisseur IPTV n’est pas assez fiable ou rapide
    pour diffuser la vidéo vers votre appareil. Si vous êtes certain que votre connexion fonctionne correctement, signalez le problème à votre fournisseur IPTV.
</FAQ>

<FAQ id="m3u-support" question="L’application prend-elle en charge les listes de lecture M3U ?">
    StbEmu ne prend pas en charge les listes de lecture M3U ni les autres listes de lecture. Il prend uniquement en charge les portails conçus pour les boîtiers MAG.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="Je ne peux pas créer ou restaurer une sauvegarde dans l’application">
    Cette fonctionnalité ne fonctionne actuellement correctement que sous Android 10 et versions antérieures. À partir d’Android 11, les applications ne peuvent par défaut lire et écrire des fichiers
    que dans leurs propres dossiers. Elles peuvent demander l’autorisation d’accéder à d’autres dossiers, mais cela ne fonctionne pas sur certains
    appareils Android TV et décodeurs (STB). Les problèmes sous-jacents ne seront pas corrigés :
    [1](https://issuetracker.google.com/issues/71327396), [2](https://issuetracker.google.com/issues/202985150).

    Si votre appareil est concerné, vous ne pourrez pas y créer ou restaurer de sauvegardes.
</FAQ>
