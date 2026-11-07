---
title: Apparaten verbinden
sidebar_label: Apparaten verbinden
---

# Apparaten verbinden {/* #connecting-devices */}

## StbEmu zoeken {/* #discover-stbemu */}

1. Verbind uw telefoon of tablet en het StbEmu-apparaat met hetzelfde bereikbare lokale netwerk.
2. Open in StbEmu **Settings > Companion** en schakel de dienst in. Zie de [Companion-instellingen van StbEmu](../settings/companion.md).
3. Open de pagina **Devices** in Companion. Geverifieerde apparaten verschijnen als opgeslagen kaarten. Open de kaart van de StbEmu-installatie die u wilt beheren.

![Apparatenpagina die het lokale netwerk doorzoekt](/img/companion/devices-empty.png)

Verschijnt er niets, controleer dan of Companion-toegang in StbEmu is ingeschakeld en Android toegang tot het lokale netwerk toestaat. Kies **Retry** of verbind handmatig.

### Handmatig een adres toevoegen {/* #add-an-address-manually */}

Kies **Add by IP address**. Voer de **IPv4 or IPv6 address** en poort in die StbEmu toont en kies **Connect**. Een lege poort gebruikt **10000**. Voer een IP-adres in, geen website-URL of hostnaam. Handmatige invoer omzeilt verificatie of koppeling niet. Apparaten met een geldige opgeslagen koppeling kunnen opnieuw verbinden zonder nieuwe code.

![Opgeslagen apparaat dat op koppeling wacht](/img/companion/devices-saved.png)

## Een apparaat koppelen {/* #pair-a-device */}

1. Start in **Settings > Companion** van StbEmu het koppelen om een code te tonen.
2. Voer op de actiepagina van het apparaat in Companion de code in bij **Eight-digit pairing code**.
3. Kies **Pair device** en wacht op **Connected**.

![Een koppelcode invoeren](/img/companion/pairing.png)

Laat een nieuwe code in StbEmu tonen als de code verloopt. Wacht bij een limiet op het aantal pogingen voordat u opnieuw probeert. De koppeling wordt voor latere verbindingen bewaard zolang StbEmu deze blijft toestaan. Toegang intrekken in StbEmu voorkomt ook het gebruik van de opgeslagen machtiging.

## Opnieuw verbinden, hernoemen of verwijderen {/* #reconnect-rename-or-remove */}

**Disconnect** sluit de verbinding en bewaart het opgeslagen apparaat. Open voor een nieuwe verbinding de kaart en kies **Connect**. Een netwerkwijziging kan verbindingen onderbreken; verbind opnieuw zodra de lokale verbinding is hersteld.

Gebruik de potloodknop (**Rename device**) om een lokale naam in te stellen. **Use app name** herstelt de naam die StbEmu doorgeeft. Hier hernoemen verandert de naam van StbEmu zelf niet.

De prullenbakknop (**Remove device**) vraagt om bevestiging. Deze verwijdert de opgeslagen verbinding en koppeling van deze telefoon, bewaart back-upbestanden en verandert niets in StbEmu. Het verwijderde apparaat verschijnt niet automatisch opnieuw via detectie. Voeg het opnieuw toe met **Add by IP address** en koppel opnieuw.
