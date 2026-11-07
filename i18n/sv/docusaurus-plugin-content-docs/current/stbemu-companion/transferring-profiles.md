---
title: Överföra profiler och inställningar
sidebar_label: Profilöverföringar
---

# Överföra profiler och inställningar {/* #transferring-profiles-and-settings */}

Använd en överföring för att kopiera valt innehåll direkt mellan två olika parkopplade StbEmu-installationer. Båda måste vara anslutna och stödja valda käll- och målåtgärder. För en kopia inom samma installation använder du [Copy profile > This device](profiles.md#copy-a-profile).

![Överföringsskärm som väntar på ett kompatibelt mål](/img/companion/transfer.png)

## Välja och granska {/* #select-and-review */}

1. Öppna källenheten och välj **Transfer to another device**.
2. Välj **Destination device**. Om ingen finns, återgå till **Devices**, anslut en annan parkopplad enhet och försök igen.
3. Välj **Application settings and remote mappings**, profiler eller båda. För profiler väljer du **Do not copy profiles**, **All profiles** eller **Choose individual profiles**. Minst en kategori måste väljas.
4. Välj **Review transfer**. Granska nya profiler, inställningsändringar, effekter på fjärrkontrollsmappningar, ändringar av aktiv profil, undantag och oförenligheter.
5. Välj **I confirm these changes** och sedan **Confirm transfer**.

Enskilt urval kräver en fullständig aktuell lista över källprofiler. Om en vald profil försvinner, använd **Refresh** för att kontrollera listan och avmarkera uttryckligen profiler som fortfarande saknas. Uppdatering tar inte tyst bort eller ersätter valda profiler.

## Vad som ändras {/* #what-changes */}

Överförda profiler är nya kopior med nya identiteter på målet. Befintliga målprofiler behålls. MAC-adresser, serienummer, enhets-ID:n och andra profilvärden bevaras, så kopiering skapar inte ett nytt abonnemang eller leverantörsgodkännande. Arbetsflödet har inget val mellan **Merge**/**Replace all**. De lägena hör till [återställning av säkerhetskopior](backups.md#restore-a-backup).

Överföringar med enbart profiler behåller målets programinställningar, fjärrkontrollsmappningar och aktiva val. Överföringar med enbart inställningar behåller målets profiler och aktiva val. När båda kopieras blir källans aktiva profil aktiv genom sin nya kopia bara om den profilen ingår. Annars behålls målets aktiva val.

Programinställningar omfattar flyttbara StbEmu-inställningar och mappningar för fjärrkontrollknappar, inte Companions språk/tema, parkopplingsbehörigheter, tjänsteidentitet eller åtgärdshistorik. Värden som inte stöds rapporteras i stället för att tyst utelämnas. Granska lösenordsrelaterade och andra överskrivna inställningar innan du bekräftar. Vissa sparade inställningar kräver en livscykeländring eller omstart av StbEmu. Se [tillämpa sparade inställningar](backups.md#results-and-applying-saved-settings).

När Companion rapporterar att källans ögonblicksbild är verifierad kan just det försöket fortsätta om källan kopplas från. Överföringen skapar ingen permanent post i säkerhetskopiebiblioteket. Vid osäkra resultat eller avbrytande använder du [åtgärdsresultat](profiles.md#operation-results).
