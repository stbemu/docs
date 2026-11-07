---
title: Sigurnosne kopije i vraćanje
sidebar_label: Sigurnosne kopije i vraćanje
---

# Sigurnosne kopije i vraćanje {/* #backups-and-restore */}

Biblioteka **Backups** u Companionu privatno pohranjuje dovršene JSON sigurnosne kopije StbEmua na telefonu ili tabletu. Spremljene datoteke ostaju dostupne izvan mreže. Biblioteka je odvojena od [sigurnosnog kopiranja sustava Android](system-backup.md), koje štiti vlastito stanje Companiona.

![Biblioteka sigurnosnih kopija i stvaranje kopije uređaja](/img/companion/backup-library.png)

## Spremanje i upravljanje datotekama {/* #save-and-manage-files */}

- **Create backup:** otvorite radnju **Create backup** povezanog uparenog uređaja, unesite **Backup name** i odaberite **Create backup**. Pričekajte **Backup saved**.
- **Import backup:** otvorite **Backups** iz izbornika aplikacije, odaberite **Import backup** i JSON datoteku StbEmua. Za lokalni uvoz, izvoz ili dijeljenje nije potreban povezani uređaj StbEmu.
- **Export JSON:** odaberite ovu radnju na zapisu kopije u biblioteci, a zatim odaberite vanjsko odredište.
- **Share JSON:** odaberite ovu radnju na zapisu kopije kako biste otvorili Androidov prozor za dijeljenje. Otvaranje ne potvrđuje dostavu odabranoj aplikaciji.
- **Delete local backup:** potvrdite brisanje te lokalne kopije. Izvorni uređaj StbEmu ostaje nepromijenjen.

Ograničenje JSON-a je **16 MiB (16,777,216 bajtova)**. Uvezene datoteke provjeravaju se i zadržavaju izvorne bajtove. Uvezena datoteka označava se s **Source device unknown**; provjera cjelovitosti ne utvrđuje tko ju je stvorio. Neuspješan vanjski izvoz može ostaviti nepotpunu odredišnu datoteku, a postojeće lokalne sigurnosne kopije ostaju sačuvane.

:::note
Datoteke sigurnosnih kopija mogu sadržavati lozinke, podatke portala i identifikatore uređaja. Izvoz i dijeljenje čuvaju te vrijednosti; odaberite odredište ili primatelja u skladu s time.
:::

## Vraćanje sigurnosne kopije {/* #restore-a-backup */}

1. Odaberite **Restore backup** na zapisu u biblioteci ili na stranici radnji uređaja.
2. Odaberite **Destination device**, **Backup to restore** i podržani **Restore mode**.
3. Odaberite **Review restore**. Provjerite dodane, prepisane i uklonjene profile, **Changed settings**, mapiranja daljinskog upravljača, izuzete lokalne metapodatke te nepodudarna ili zaključana polja.
4. Označite potvrdni okvir, a zatim odaberite **Apply restore**.

![Zaslon vraćanja koji prikazuje ponašanje načina Merge](/img/companion/restore.png)

**Merge** prepisuje profile s podudarnim UUID-ovima, dodaje nove profile i zadržava profile koji postoje samo na odredištu. **Replace all** također uklanja odredišne profile kojih nema u kopiji. Podudaranje koristi identifikatore, a ne nazive profila. Oba načina vraćaju prenosive postavke aplikacije i mapiranja daljinskog upravljača. Lokalni metapodaci odredišta, poput lokalnih identifikatora redaka, verzije aplikacije i mape za ažuriranje, izuzeti su.

:::warning
Pregledajte svako prepisivanje i uklanjanje prije primjene. Replace all zamjenjuje skup profila; nije način dodavanja samo odabranih profila. Za selektivno kopiranje upotrijebite [prijenos profila](transferring-profiles.md).
:::

## Rezultati i primjena spremljenih postavki {/* #results-and-applying-saved-settings */}

Istekli pretpregled zahtijeva **Start a new attempt** i novi pregled. Za nesiguran rezultat provjerite [rezultate operacija](profiles.md#operation-results) prije ponovnog vraćanja. Oporavak statusa može upitati odredište čak i ako izvorna sigurnosna kopija više nije dostupna.

Spremljene postavke i učinci tijekom rada odvojeni su. Ako su promijenjene, postavke virtualnog daljinskog upravljača stupaju na snagu pri sljedećoj uobičajenoj pauzi/nastavku StbEmua, veličina predmemorije zahtijeva ponovno pokretanje procesa StbEmua, a jezik može ponovno stvoriti njegovu aktivnost. Oznaka kompatibilnosti UPnP-a ne mijenja trenutačni rad UPnP-a, čak ni nakon ponovnog pokretanja. **Check result** ne pokušava ponovno ta ažuriranja tijekom rada.
