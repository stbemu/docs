---
title: Prijenos profila i postavki
sidebar_label: Prijenos profila
---

# Prijenos profila i postavki {/* #transferring-profiles-and-settings */}

Upotrijebite prijenos za izravno kopiranje odabranog sadržaja između dviju različitih uparenih instalacija StbEmua. Obje moraju biti povezane i podržavati odabrane radnje izvora i odredišta. Za kopiranje na istoj instalaciji upotrijebite [Copy profile > This device](profiles.md#copy-a-profile).

![Zaslon prijenosa koji čeka kompatibilno odredište](/img/companion/transfer.png)

## Odabir i pregled {/* #select-and-review */}

1. Otvorite izvorni uređaj i odaberite **Transfer to another device**.
2. Odaberite **Destination device**. Ako nijedan nije dostupan, vratite se na **Devices**, povežite drugi upareni uređaj i pokušajte ponovno.
3. Odaberite **Application settings and remote mappings**, profile ili oboje. Za profile odaberite **Do not copy profiles**, **All profiles** ili **Choose individual profiles**. Mora biti odabrana barem jedna kategorija.
4. Odaberite **Review transfer**. Pregledajte nove profile, promjene postavki, učinke na mapiranja daljinskog upravljača, promjene aktivnog profila, izuzimanja i nepodudarnosti.
5. Odaberite **I confirm these changes**, a zatim **Confirm transfer**.

Pojedinačni odabir zahtijeva potpun aktualan popis izvornih profila. Ako odabrani profil nestane, upotrijebite **Refresh** za provjeru popisa, a zatim izričito poništite odabir svih profila koji i dalje nedostaju. Osvježavanje ne uklanja ni zamjenjuje odabrane profile prešutno.

## Što se mijenja {/* #what-changes */}

Preneseni profili nove su kopije s novim odredišnim identitetima. Postojeći profili na odredištu zadržavaju se. MAC adrese, serijski brojevi, identifikatori uređaja i druge vrijednosti profila ostaju sačuvani, stoga kopiranje ne stvara novu pretplatu ni odobrenje pružatelja usluge. Ovaj postupak nema izbor **Merge**/**Replace all**; ti načini pripadaju [vraćanju sigurnosne kopije](backups.md#restore-a-backup).

Prijenos samo profila zadržava postavke aplikacije, mapiranja daljinskog upravljača i aktivni odabir odredišta. Prijenos samo postavki zadržava profile i aktivni odabir odredišta. Pri kopiranju obojega aktivni profil izvora postaje aktivan putem svoje nove kopije samo ako je taj profil uključen; inače se zadržava aktivni odabir odredišta.

Postavke aplikacije uključuju prenosive postavke StbEmua i mapiranja tipki daljinskog upravljača, a ne jezik/temu Companiona, odobrenja za uparivanje, identitet usluge ili povijest operacija. Nepodržane vrijednosti prijavljuju se umjesto da se prešutno odbace. Prije potvrde pregledajte postavke povezane s lozinkama i druge postavke koje se prepisuju. Neke spremljene postavke zahtijevaju promjenu životnog ciklusa ili ponovno pokretanje StbEmua; pogledajte [primjenu spremljenih postavki](backups.md#results-and-applying-saved-settings).

Nakon što Companion javi da je snimka stanja izvora provjerena, taj se konkretni pokušaj može nastaviti ako se izvor odspoji. Prijenos ne stvara trajni zapis u biblioteci sigurnosnih kopija. Za nesigurne rezultate ili otkazivanje upotrijebite [rezultate operacija](profiles.md#operation-results).
