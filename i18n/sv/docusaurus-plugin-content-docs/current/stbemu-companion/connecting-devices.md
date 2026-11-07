---
title: Ansluta enheter
sidebar_label: Ansluta enheter
---

# Ansluta enheter {/* #connecting-devices */}

## Hitta StbEmu {/* #discover-stbemu */}

1. Anslut telefonen eller surfplattan och StbEmu-enheten till samma nåbara lokala nätverk.
2. Öppna **Settings > Companion** i StbEmu och aktivera tjänsten. Se [StbEmus Companion-inställningar](../settings/companion.md).
3. Öppna sidan **Devices** i Companion. Verifierade enheter visas som sparade kort. Öppna kortet för den StbEmu-installation du vill hantera.

![Enhetssidan söker i det lokala nätverket](/img/companion/devices-empty.png)

Om inget visas, kontrollera att Companion-åtkomst är aktiverad i StbEmu och att Android tillåter åtkomst till det lokala nätverket. Välj **Retry** eller anslut manuellt.

### Lägga till en adress manuellt {/* #add-an-address-manually */}

Välj **Add by IP address**. Ange **IPv4 or IPv6 address** och porten som visas i StbEmu och välj **Connect**. Om porten lämnas tom används **10000**. Ange en IP-adress, inte en webbadress eller ett värdnamn. Manuell inmatning kringgår inte verifiering eller parkoppling. Enheter med giltig sparad parkoppling kan ansluta igen utan ny kod.

![Sparad enhet väntar på parkoppling](/img/companion/devices-saved.png)

## Parkoppla en enhet {/* #pair-a-device */}

1. Starta parkoppling i StbEmus **Settings > Companion** för att visa en kod.
2. Ange koden i **Eight-digit pairing code** på enhetens åtgärdssida i Companion.
3. Välj **Pair device** och vänta på **Connected**.

![Inmatning av en parkopplingskod](/img/companion/pairing.png)

Om koden går ut, visa en ny i StbEmu. Om antalet försök begränsas, vänta innan du försöker igen. Parkopplingen sparas för senare anslutningar så länge StbEmu fortsätter att tillåta den. Återkallad åtkomst i StbEmu hindrar även användning av den sparade behörigheten.

## Ansluta igen, byta namn eller ta bort {/* #reconnect-rename-or-remove */}

**Disconnect** stänger anslutningen men behåller den sparade enheten. Öppna dess kort och välj **Connect** för att ansluta igen. Ett nätverksbyte kan avbryta anslutningar. Anslut igen när den lokala anslutningen fungerar.

Använd pennknappen (**Rename device**) för att ange ett lokalt namn. **Use app name** återställer namnet som StbEmu rapporterar. Namnbytet här ändrar inte namnet på själva StbEmu.

Papperskorgsknappen (**Remove device**) ber om bekräftelse. Den tar bort den sparade anslutningen och parkopplingen från den här telefonen, behåller säkerhetskopiefiler och ändrar inget i StbEmu. Den borttagna enheten dyker inte automatiskt upp igen via upptäckt. Använd **Add by IP address** och parkoppla igen för att lägga till den på nytt.
