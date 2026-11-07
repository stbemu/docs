---
title: Upravljanje profilima
sidebar_label: Profili
---

# Upravljanje profilima {/* #managing-profiles */}

Otvorite povezani uređaj i odaberite **Profiles**. Popis prikazuje nazive profila, identifikatore (UUID) i dostupne adrese portala. Odaberite profil kako biste pregledali njegove postavke. Za dodatne stranice upotrijebite **Load more**, a za aktualne podatke **Refresh**. Radnje ovise o dopuštenjima koja uređaj podržava.

## Stvaranje, uređivanje i brisanje {/* #create-edit-and-delete */}

- Odaberite **Create profile** s popisa. Podržana polja pri stvaranju uključuju **Name** i **Portal URL**. Nepromijenjena polja koriste zadane vrijednosti StbEmua.
- Otvorite profil i odaberite **Edit profile** kako biste promijenili podržana polja koja se mogu uređivati. Mijenjaju se samo uređena polja; dodatne postavke koje uređaj čuva ostaju sačuvane.
- Odaberite **Delete profile** za pripremu brisanja. Prije potvrde pregledajte eventualnu promjenu aktivnog profila ili zamjenski profil.

Odaberite **Review changes**, pregledajte pretpregled i upozorenja, a zatim odaberite **Confirm changes** ili **Confirm deletion**. Prva radnja ne sprema niti briše profil odmah. Nepodudarne promjene ne mogu se potvrditi. Ako se profil ili dostupna polja promijene tijekom uređivanja, osvježite i ponovno pregledajte.

Za značenje polja profila u StbEmuu pogledajte [STB profile](../settings/profiles.md).

## Kopiranje profila {/* #copy-a-profile */}

Otvorite profil i odaberite **Copy profile**. Odaberite **This device** za kopiranje na isti uređaj, a zatim pregledajte i potvrdite promjene. Kopija ima novi identitet; nemojte je prepoznavati samo po nazivu. **Edit copied profile**, kada je dostupan nakon uspjeha, otvara vraćenu kopiju umjesto izvornika.

Odabirom drugog prikladnog uparenog uređaja otvara se [postupak iz vodiča za prijenos](transferring-profiles.md) s odabranim tim profilom.

## Rezultati operacija {/* #operation-results */}

Ako veza ne uspije ili rezultat nije siguran, otvorite **Recent operation results** uređaja i upotrijebite **Check result** prije pokretanja druge promjene. Provjera zahtijeva odobrenu vezu i upituje izvornu operaciju; ne šalje promjenu ponovno. To vrijedi i za [prijenose](transferring-profiles.md) i [vraćanje sigurnosnih kopija](backups.md).

Istekli pretpregled zahtijeva novi izričiti pregled. Otkazivanje se može dogoditi istodobno sa spremanjem, stoga pročitajte konačni rezultat umjesto da pretpostavite da je **Cancel operation** poništio promjene. **Changes saved on the device** potvrđuje spremljene podatke; osvježavanje tijekom rada još može biti na čekanju. Provjera rezultata ne pokušava ponovno to osvježavanje, a izbrisana kopija profila nikada se ponovno ne stvara provjerom njezine povijesti.
