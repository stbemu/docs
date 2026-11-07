---
title: Sigurnosno kopiranje sustava Android
sidebar_label: Sigurnosno kopiranje sustava Android
---

# Sigurnosno kopiranje sustava Android {/* #android-system-backup */}

Otvorite **Settings > Backups > System backup**. Nakon uspješnog vraćanja Androida, sigurnosno kopiranje sustava može vratiti postavke Companiona, spremljene uređaje i nazive, provjereno povjerenje i još valjane vjerodajnice uparivanja. Odvojeno je od vraćanja [JSON sigurnosne kopije StbEmua](backups.md) na upareni uređaj.

## Uključivanje lokalnih arhiva {/* #include-local-archives */}

**Include local archives** uključen je prema zadanim postavkama. U buduće sigurnosne kopije sustava uključuje prihvatljive dovršene sigurnosne kopije StbEmua iz lokalne biblioteke. Isključivanjem se zadržavaju lokalne datoteke i postavke/uređaji Companiona, ali se arhive izuzimaju iz budućih kopija. Stariji sadržaj u oblaku ne briše se.

Stranica prikazuje procijenjenu odabranu veličinu. Upotrijebite **Refresh estimate** za ponovno mjerenje, **Open Android settings** za provjeru postavki sigurnosnog kopiranja Androida ili **Open archive library / manual export** kako biste sami izvezli datoteke.

## Dostupnost i ograničenja {/* #availability-and-limits */}

Sigurnosno kopiranje sustava zahtijeva **Android 9 ili noviji**, iako Companion podržava Android 8. Šifrirano sigurnosno kopiranje u oblaku zahtijeva i podržani račun, sigurno zaključavanje zaslona i Androidovo šifriranje na strani klijenta. Android upravlja rasporedom, prihvatljivošću mehanizma prijenosa i dostupnošću vraćanja.

Nazivna kvota u oblaku iznosi **25 MiB**; stvarna dostupna kvota može biti manja. Ograničenje od **256 MiB** između uređaja ograničenje je aplikacije, a ne obećanje kapaciteta prijenosa. Ako je cijeli odabir prevelik, izuzmite lokalne arhive ili ih ručno izvezite. Companion ne kopira prešutno samo dio odabira.

Procjena ili poruka o lokalnoj pripremi ne potvrđuje da je Android spremio kopiju u oblaku. Nedostupna procjena nije kopija veličine nula. Ako stranica javlja da je sigurnosno kopiranje isključeno ili nepodržano, upotrijebite ručni izvoz arhiva umjesto da pretpostavite da su podaci zaštićeni.

## Nakon što Android vrati Companion {/* #after-android-restores-companion */}

Vraćeni uređaji moraju se provjeriti prije nego što se prikažu kao povezani. Još odobrene vjerodajnice uparivanja omogućuju ponovno povezivanje bez novog uparivanja, no vraćanje ne poništava opoziv u StbEmuu. Vraćene kopije dijele ista odobrenja; opoziv odobrenja utječe i na te kopije.

Biblioteka navodi dovršene arhivske datoteke koje su stvarno vraćene. Sami metapodaci ne stvaraju ponovno datoteke koje nedostaju. Nedovršena operacija ne šalje se automatski ponovno; povežite se i provjerite [rezultate operacija](profiles.md#operation-results) kada su dostupni.
