---
id: faq
title: Česta pitanja
sidebar_label: Česta pitanja
---

import FAQ from '@site/src/components/FAQ';

# Česta pitanja {/* #faq */}

<FAQ id="google-play-pay-again" question="Platio/la sam StbEmu Pro na Google Playu, ali ga ne mogu preuzeti. Google Play traži da ponovno platim">
    To je poznat problem s Google Playom. Pričekajte do 24 sata da Google Play obradi uplatu i ažurira podatke na vašim uređajima.
    Možete i otvoriti web-preglednik na računalu ili mobilnom uređaju, posjetiti [Google Play](https://play.google.com/store),
    pronaći StbEmu Pro ([izravna poveznica](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro)),
    i instalirati ga na svoje uređaje na daljinu.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="Aplikacija vraća glasnoću na početnu razinu kada promijenim kanal">
    To je poznat problem na nekim uređajima Sony, Philips i Xiaomi. Može se pojaviti i na drugim uređajima.

    Da biste ga riješili, postavite aplikaciju da upotrebljava glasnoću sustava (globalnu glasnoću):
    otvorite [Postavke](/settings) > [Reprodukcija i ponašanje](/settings/common-settings#playback--behavior) i uključite ***Uvijek upotrijebi glasnoću sustava***.
    Ponovno učitajte aktivni portal iz izbornika aplikacije kako bi promjene stupile na snagu.
</FAQ>

<FAQ id="customize-portal-ui" question="Kako mogu prilagoditi sučelje portala? Ne sviđaju mi se boje ili ikone">
    Portali se nalaze na poslužiteljima vašeg davatelja IPTV usluge. Sučelje možete prilagoditi samo ako davatelj nudi tu mogućnost.
    Većina portala ne podržava prilagodbu sučelja, pa njihov izgled može promijeniti samo davatelj IPTV usluge.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="Kanali nestaju iz Favorites kada ponovno učitam portal ili im ne mogu promijeniti redoslijed">
    Svi popisi kanala, uključujući favorite, pohranjeni su na poslužiteljima vašeg davatelja IPTV usluge. Ako aplikacija ne učita favorite
    ili ih učita pogrešnim redoslijedom, vaš davatelj IPTV usluge nije ispravno konfigurirao portal.
    Taj problem može riješiti samo vaš davatelj usluge.
</FAQ>

<FAQ id="channels-buffer" question="Kanali često zastaju radi međuspremanja tijekom reprodukcije">
    Često međuspremanje obično znači da vaša mrežna veza ili veza vašeg davatelja IPTV usluge nije dovoljno pouzdana ili brza
    za prijenos videozapisa na vaš uređaj. Ako ste sigurni da vaša veza radi ispravno, prijavite problem davatelju IPTV usluge.
</FAQ>

<FAQ id="m3u-support" question="Podržava li aplikacija M3U popise za reprodukciju?">
    StbEmu ne podržava M3U ni druge popise za reprodukciju. Podržava samo portale namijenjene MAG prijamnicima.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="Ne mogu izraditi ili vratiti sigurnosnu kopiju u aplikaciji">
    U redizajniranom sučelju Postavke otvorite [Sigurnosno kopiranje i vraćanje](/settings/backup-restore) i upotrijebite Androidov alat za odabir dokumenata da odaberete datoteku ili mjesto spremanja.
    Ako alat za odabir nije dostupan, aplikacija upotrebljava dostupne mape sa sigurnosnim kopijama i vlastiti preglednik datoteka.
    Provjerite dopuštenja uređaja i pristup odabranoj datoteci. Prije vraćanja provjerite naziv sigurnosne kopije i broj profila te potvrdite radnju.
</FAQ>
