---
title: Profielen en instellingen overdragen
sidebar_label: Profieloverdrachten
---

# Profielen en instellingen overdragen {/* #transferring-profiles-and-settings */}

Gebruik een overdracht om geselecteerde inhoud rechtstreeks tussen twee verschillende gekoppelde StbEmu-installaties te kopiëren. Beide moeten verbonden zijn en de gekozen bron- en doelacties ondersteunen. Gebruik [Copy profile > This device](profiles.md#copy-a-profile) voor een kopie binnen dezelfde installatie.

![Overdrachtsscherm dat op een geschikt doel wacht](/img/companion/transfer.png)

## Selecteren en controleren {/* #select-and-review */}

1. Open het bronapparaat en kies **Transfer to another device**.
2. Kies **Destination device**. Is er geen beschikbaar, ga dan terug naar **Devices**, verbind een ander gekoppeld apparaat en probeer opnieuw.
3. Selecteer **Application settings and remote mappings**, profielen of beide. Kies voor profielen **Do not copy profiles**, **All profiles** of **Choose individual profiles**. Er moet minstens één categorie zijn geselecteerd.
4. Kies **Review transfer**. Controleer nieuwe profielen, gewijzigde instellingen, effecten op afstandsbedieningskoppelingen, wijzigingen van het actieve profiel, uitsluitingen en onverenigbaarheden.
5. Selecteer **I confirm these changes** en vervolgens **Confirm transfer**.

Afzonderlijke selectie vereist een volledige actuele lijst met bronprofielen. Verdwijnt een geselecteerd profiel, gebruik dan **Refresh** om de lijst te controleren en deselecteer expliciet alle nog ontbrekende profielen. Vernieuwen verwijdert of vervangt geselecteerde profielen niet stilzwijgend.

## Wat er verandert {/* #what-changes */}

Overgedragen profielen zijn nieuwe kopieën met nieuwe doelidentiteiten. Bestaande doelprofielen blijven behouden. MAC-adressen, serienummers, apparaat-ID's en andere profielwaarden blijven behouden; kopiëren maakt dus geen nieuw abonnement of nieuwe providermachtiging. Deze werkwijze heeft geen keuze **Merge**/**Replace all**; die modi horen bij [back-upherstel](backups.md#restore-a-backup).

Overdracht van alleen profielen behoudt de applicatie-instellingen, afstandsbedieningskoppelingen en actieve selectie van het doel. Overdracht van alleen instellingen behoudt de doelprofielen en actieve selectie. Bij beide wordt het actieve bronprofiel via de nieuwe kopie alleen actief als dat profiel is inbegrepen; anders blijft de actieve selectie van het doel behouden.

Applicatie-instellingen omvatten overdraagbare StbEmu-voorkeuren en koppelingen van afstandsbedieningstoetsen, niet de taal/het thema van Companion, koppelingsmachtigingen, dienstidentiteit of bewerkingsgeschiedenis. Niet-ondersteunde waarden worden gemeld en niet stilzwijgend weggelaten. Controleer wachtwoordgerelateerde en andere overschreven instellingen voordat u bevestigt. Sommige opgeslagen instellingen vereisen een wijziging in de levenscyclus van StbEmu of een herstart; zie [opgeslagen instellingen toepassen](backups.md#results-and-applying-saved-settings).

Nadat Companion meldt dat de bronmomentopname is geverifieerd, kan die specifieke poging doorgaan als de bron de verbinding verbreekt. De overdracht maakt geen blijvende vermelding in de back-upbibliotheek. Gebruik bij onzekere resultaten of annulering de [resultaten van bewerkingen](profiles.md#operation-results).
