---
title: Fjernkontroll
sidebar_label: Fjernkontroll
---

# Fjernkontroll {/* #remote-control */}

Åpne en tilkoblet enhet, og velg **Remote control**. Handlingen vises bare når enheten støtter autorisert fjerninndata. Disse kontrollene styrer StbEmu og portalen. De er atskilt fra den eldre MAG-fjernkontrolltjenesten beskrevet under [eldre fjernkontroll](../settings/common_settings.md#legacy-remote).

![Rullbar fjernkontroll med fargeknapper og retningsknapper](/img/companion/remote-control.png)

Trykk på en knapp for vanlig handling. Hold inne en knapp for en lang handling eller gjentatte trykk der det støttes. Slipp for å avslutte holdingen. Tilgjengelige knapper og oppførsel ved holding avhenger av enheten. Ikke alle knapper støtter gjentakelse. Rull for å nå de øvrige kontrollene, blant annet avspilling, volum, kanal og tallknapper.

Bare én knappebevegelse er aktiv om gangen. Hvis du forlater fjernkontrollsiden eller appen, mister tilkoblingen eller mister tillatelsen, avbrytes aktive inndata. Fjerninndata gjentas ikke etter ny tilkobling: koble til igjen og trykk bevisst på nytt.

## Forstå tilbakemeldingene {/* #read-the-feedback */}

Lokal tilbakemelding ved trykk eller holding betyr at Companion gjenkjente bevegelsen. **Awaiting device confirmation** betyr at resultatet fortsatt venter. **Device accepted input** bekrefter at StbEmu godtok inndataene, ikke at en kanal- eller portalhandling nødvendigvis ble fullført.

Ved **Input target unavailable**, kontroller tilkoblingen. Ved **Authorization expired. Pair again.**, vis en ny kode i StbEmu og skriv den inn i Companion. Slutt å bruke en handling som ikke lenger støttes, og kontroller de tilgjengelige kontrollene. Koble til igjen hvis inndata fortsatt er utilgjengelige.

Endre fjernkontrollens vibrasjon under **Settings > Interface > Remote control haptic feedback**. Dette er uavhengig av **UI haptic feedback**. Synlige tilbakemeldinger er fortsatt tilgjengelige når vibrasjon er av.
