---
title: Android-systeemback-up
sidebar_label: Android-systeemback-up
---

# Android-systeemback-up {/* #android-system-backup */}

Open **Settings > Backups > System backup**. Android-systeemback-up kan na een geslaagde Android-herstelprocedure Companion-voorkeuren, opgeslagen apparaten en namen, geverifieerd vertrouwen en nog geldige koppelingsreferenties herstellen. Dit staat los van het herstellen van een [StbEmu-JSON-back-up](backups.md) naar een gekoppeld apparaat.

## Lokale archieven opnemen {/* #include-local-archives */}

**Include local archives** staat standaard aan. Hiermee worden geschikte voltooide StbEmu-back-ups uit de lokale bibliotheek opgenomen in toekomstige systeemback-ups. Uitschakelen behoudt lokale bestanden en Companion-instellingen/apparaten, maar sluit archieven uit van toekomstige back-ups. Oudere cloudinhoud wordt niet verwijderd.

De pagina toont een schatting van de geselecteerde omvang. Gebruik **Refresh estimate** om opnieuw te meten, **Open Android settings** om de Android-back-upconfiguratie te controleren of **Open archive library / manual export** om zelf bestanden te exporteren.

## Beschikbaarheid en limieten {/* #availability-and-limits */}

Systeemback-up vereist **Android 9 of hoger**, hoewel Companion zelf Android 8 ondersteunt. Versleutelde cloudback-up vereist daarnaast een ondersteund account, een veilige schermvergrendeling en Android-versleuteling aan de clientzijde. Android bepaalt planning, geschiktheid van het transport en beschikbaarheid van herstel.

De nominale cloudruimte is **25 MiB**; het werkelijk beschikbare quotum kan lager zijn. De limiet van **256 MiB** voor overdracht tussen apparaten is een applicatielimiet, geen belofte over transportcapaciteit. Sluit lokale archieven uit of exporteer ze handmatig als de volledige selectie te groot is. Companion maakt niet stilzwijgend een back-up van slechts een deel van de selectie.

Een schatting of lokale voorbereidingsmelding bevestigt niet dat Android een cloudback-up heeft opgeslagen. Een onbeschikbare schatting is geen back-up van nul bytes. Meldt de pagina dat back-ups uitstaan of niet worden ondersteund, exporteer archieven dan handmatig in plaats van aan te nemen dat de gegevens beschermd zijn.

## Nadat Android Companion heeft hersteld {/* #after-android-restores-companion */}

Herstelde apparaten moeten worden geverifieerd voordat ze als verbonden verschijnen. Nog toegestane koppelingsreferenties kunnen zonder nieuwe koppeling opnieuw verbinden, maar herstel kan intrekking in StbEmu niet ongedaan maken. Herstelde kopieën delen dezelfde machtigingen; een machtiging intrekken beïnvloedt ook die kopieën.

De bibliotheek toont voltooide archiefbestanden die daadwerkelijk zijn hersteld. Metadata alleen maakt ontbrekende bestanden niet opnieuw. Een onvoltooide bewerking wordt niet automatisch opnieuw verzonden; verbind opnieuw en controleer indien beschikbaar de [resultaten van bewerkingen](profiles.md#operation-results).
