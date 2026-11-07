---
title: Daljinski upravljač
sidebar_label: Daljinski upravljač
---

# Daljinski upravljač {/* #remote-control */}

Otvorite povezani uređaj i odaberite **Remote control**. Radnja se prikazuje samo kada uređaj podržava odobreni daljinski unos. Ove kontrole upravljaju StbEmuom i njegovim portalom; odvojene su od starije usluge daljinskog upravljanja MAG opisane u odjeljku [stariji daljinski upravljač](../settings/common_settings.md#legacy-remote).

![Daljinski upravljač s pomicanjem, tipkama u boji i tipkama za smjer](/img/companion/remote-control.png)

Dodirnite gumb za uobičajenu radnju. Držite gumb pritisnutim za dugu radnju ili ponovljene pritiske gdje su podržani. Otpustite ga kako biste prekinuli držanje. Dostupni gumbi i ponašanje pri držanju ovise o uređaju; ne podržava svaka tipka ponavljanje. Pomaknite prikaz do preostalih kontrola, uključujući reprodukciju, glasnoću, kanale i brojčane tipke.

Istodobno je aktivna samo jedna gesta tipke. Napuštanje stranice daljinskog upravljača ili aplikacije, gubitak veze ili odobrenja otkazuje aktivni unos. Daljinski unos ne ponavlja se nakon ponovnog povezivanja: ponovno se povežite i namjerno ponovno pritisnite tipku.

## Razumijevanje povratnih informacija {/* #read-the-feedback */}

Lokalna povratna informacija pri pritisku ili držanju znači da je Companion prepoznao vašu gestu. **Awaiting device confirmation** znači da se rezultat još čeka. **Device accepted input** potvrđuje da je StbEmu prihvatio unos, a ne da je radnja kanala ili portala nužno završena.

Za **Input target unavailable** provjerite vezu. Za **Authorization expired. Pair again.** prikažite novi kod u StbEmuu i unesite ga u Companion. Ako radnja više nije podržana, prestanite je koristiti i provjerite dostupne kontrole. Ponovno se povežite ako unos i dalje nije dostupan.

Vibraciju daljinskog upravljača promijenite u **Settings > Interface > Remote control haptic feedback**. Neovisna je o postavci **UI haptic feedback**; vizualne povratne informacije ostaju dostupne kada je vibracija isključena.
