---
title: Povezivanje uređaja
sidebar_label: Povezivanje uređaja
---

# Povezivanje uređaja {/* #connecting-devices */}

## Otkrivanje StbEmua {/* #discover-stbemu */}

1. Povežite telefon ili tablet i uređaj StbEmu s istom dostupnom lokalnom mrežom.
2. U StbEmuu otvorite **Settings > Companion** i uključite uslugu. Pogledajte [postavke Companiona u StbEmuu](../settings/companion.md).
3. Otvorite stranicu **Devices** u Companionu. Provjereni uređaji prikazuju se kao spremljene kartice. Otvorite karticu instalacije StbEmua kojom želite upravljati.

![Stranica uređaja tijekom pretraživanja lokalne mreže](/img/companion/devices-empty.png)

Ako se ništa ne pojavi, provjerite je li pristup Companionu uključen u StbEmuu i dopušta li Android pristup lokalnoj mreži. Odaberite **Retry** ili se povežite ručno.

### Ručno dodavanje adrese {/* #add-an-address-manually */}

Odaberite **Add by IP address**. Unesite **IPv4 or IPv6 address** i priključak prikazane u StbEmuu, a zatim odaberite **Connect**. Ako priključak ostavite prazan, koristi se **10000**. Unesite IP adresu, a ne URL web-mjesta ili naziv računala. Ručni unos ne zaobilazi provjeru ni uparivanje. Uređaji s valjanim spremljenim uparivanjem mogu se ponovno povezati bez novog koda.

![Spremljeni uređaj koji čeka uparivanje](/img/companion/devices-saved.png)

## Uparivanje uređaja {/* #pair-a-device */}

1. U odjeljku **Settings > Companion** u StbEmuu pokrenite uparivanje kako bi se prikazao kod.
2. Na stranici radnji uređaja u Companionu unesite kod u **Eight-digit pairing code**.
3. Odaberite **Pair device** i pričekajte **Connected**.

![Unos koda za uparivanje](/img/companion/pairing.png)

Ako kod istekne, prikažite novi u StbEmuu. Ako su pokušaji ograničeni zbog učestalosti, pričekajte prije ponovnog pokušaja. Uparivanje se sprema za kasnije veze dok ga StbEmu i dalje odobrava. Opoziv pristupa u StbEmuu sprječava i uporabu spremljenog odobrenja.

## Ponovno povezivanje, preimenovanje ili uklanjanje {/* #reconnect-rename-or-remove */}

**Disconnect** zatvara vezu i zadržava spremljeni uređaj. Za ponovno povezivanje otvorite njegovu karticu i odaberite **Connect**. Promjena mreže može prekinuti veze; ponovno se povežite kada se lokalna povezanost uspostavi.

Gumbom s olovkom (**Rename device**) postavite lokalni naziv. **Use app name** vraća naziv koji prijavljuje StbEmu. Preimenovanje ovdje ne mijenja naziv samog StbEmua.

Gumb s košem (**Remove device**) traži potvrdu. Uklanja spremljenu vezu i uparivanje s ovog telefona, zadržava datoteke sigurnosnih kopija i ništa ne mijenja na StbEmuu. Uklonjeni uređaj neće se automatski ponovno pojaviti putem otkrivanja. Za ponovno dodavanje upotrijebite **Add by IP address** i ponovite uparivanje.
