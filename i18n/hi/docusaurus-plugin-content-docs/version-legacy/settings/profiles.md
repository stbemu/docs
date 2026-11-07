---
id: profiles
title: प्रोफ़ाइल
sidebar_label: प्रोफ़ाइल
---

# STB प्रोफ़ाइल {/* #stb-profiles */}

**STB प्रोफ़ाइल** ऐप में सेट-टॉप बॉक्स का अनुकरण करने के विकल्पों का एक समूह है। पहली बार शुरू होने पर ऐप एक प्रोफ़ाइल बनाता है।
आप उसे संपादित कर सकते हैं या उसी डिवाइस पर अलग-अलग पोर्टल लोड करने के लिए और प्रोफ़ाइल जोड़ सकते हैं।
प्रोफ़ाइल बनाने के लिए स्क्रीन पर दो बार टैप करें, जिससे ऊपर या बगल में मेनू दिखे [^1]।
**Settings**, फिर **Profiles** चुनें, जहाँ आप प्रोफ़ाइल जोड़ या संपादित कर सकते हैं।

StbEmu कोई मीडिया या IPTV प्लेलिस्ट उपलब्ध नहीं कराता, होस्ट नहीं करता और न ही उनकी सूची बनाता है।
एमुलेटर से उपयोग की जाने वाली सामग्री पर उपयोगकर्ताओं का कानूनी अधिकार होना चाहिए।

[^1]: अगर आप 3D रिमोट कंट्रोल या माउस का उपयोग करते हैं, तो पॉइंटर हिलाएँ, स्क्रीन पर क्लिक करें और ऊपर ऐप का मेनू खोलें।

- [Profile name](#profile-name)
- [Portal settings](#portal-settings)
    - [Portal URL](#portal-url)
    - [Portal language](#portal-language)
    - [HTTP Proxy settings](#http-proxy-settings)
        - [Use HTTP proxy](#use-http-proxy)
        - [Proxy host name](#proxy-host-name)
        - [Proxy port](#proxy-port)
    - [Portal is internal](#portal-is-internal)
    - [Internal portal URL](#internal-portal-url)
- [STB configuration](#stb-configuration)
    - [STB Model](#stb-model)
    - [Firmware](#firmware)
    - [Firmware settings](#firmware-settings)
    - [User Agent](#user-agent)
    - [Screen resolution](#screen-resolution)
    - [MAC address](#mac-address)
    - [Serial number](#serial-number)
    - [Device ID](#device-id)
        - [Use MAC-based device ID](#use-mac-based-device-id)
        - [Send Device ID](#send-device-id)
        - [Device ID random seed](#device-id-random-seed)
        - [Device ID](#device-id-value)
        - [Custom device ID 2 and signature](#custom-device-id-2-and-signature)
        - [Device ID 2](#device-id-2)
        - [Signature](#signature)
        - [Reset device ID to default value](#reset-device-id-to-default-value)
    - [Hardware settings](#hardware-settings)
        - [Vendor](#vendor)
        - [Hardware version](#hardware-version)
    - [IP address](#ip-address)
- [Media player settings](#media-player-settings)
    - [Media player](#media-player)
    - [UDPXY settings](#udpxy-settings)
        - [Enable UDPXY support](#enable-udxpy-support)
        - [UDPXY server URL](#udpxy-server-url)
        - [Overwrite stream protocol](#overwrite-stream-protocol)
- [Advanced settings](#advanced-settings)

### Profile name
प्रोफ़ाइल का नाम। यह कोई भी गैर-खाली टेक्स्ट हो सकता है।

### Portal settings
पोर्टल से संबंधित विकल्प।
##### Portal URL
पोर्टल का URL। इसकी शुरुआत किसी स्कीम (**http://**, **https://**, **ftp://** आदि) से होनी चाहिए।

##### Portal language
पोर्टल की डिफ़ॉल्ट भाषा, दो अक्षरों वाले [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) भाषा कोड के रूप में दी जाती है।

#### HTTP Proxy settings
HTTP प्रॉक्सी की सेटिंग्स।

##### Use HTTP proxy
HTTP प्रॉक्सी का उपयोग करने के लिए इसे चालू करें।

##### Proxy host name
##### Proxy port

##### Portal is internal
MAG डिवाइस के लिए आंतरिक पोर्टल का उपयोग करने हेतु यह विकल्प चालू करें।

##### Internal portal URL

### STB configuration
अनुकरण की मुख्य सेटिंग्स।

#### STB Model
जिस STB मॉडल का अनुकरण करना है।

#### Firmware
जिस **फ़र्मवेयर** का अनुकरण करना है; असली फ़र्मवेयर इंस्टॉल नहीं होता। कुछ पोर्टल के लिए विशेष फ़र्मवेयर ज़रूरी होता है।
ऐसी स्थिति में, उपलब्ध होने पर उसे सूची से चुनें।
अधिकांश समर्थित STB मॉडल केवल **Generic** फ़र्मवेयर देते हैं, जो आम तौर पर नवीनतम संस्करण होता है।

उपलब्ध फ़र्मवेयर विकल्प:
* Generic: आम तौर पर उपलब्ध नवीनतम फ़र्मवेयर।
* Custom (केवल MAG 250): अनुकूलित किया जा सकने वाला फ़र्मवेयर। फ़र्मवेयर की विशेष सेटिंग्स बदलनी हों, तो इसका उपयोग करें।

अधिकांश उपयोगकर्ताओं को **Generic** फ़र्मवेयर इस्तेमाल करना चाहिए (डिफ़ॉल्ट रूप से चुना होता है)।

#### Firmware settings
यह विकल्प केवल **Custom** फ़र्मवेयर के साथ उपलब्ध है (फ़िलहाल केवल MAG 250 समर्थित है)।
इससे फ़र्मवेयर की विशेष सेटिंग्स कॉन्फ़िगर करें, जैसे संस्करण या कस्टम User Agent टेक्स्ट।

#### User Agent
ऐप के वेब ब्राउज़र का User Agent टेक्स्ट।

#### Screen resolution
जिस स्क्रीन रिज़ॉल्यूशन का अनुकरण करना है; इससे डिस्प्ले का असली रिज़ॉल्यूशन नहीं बदलता।
अपने पोर्टल द्वारा समर्थित रिज़ॉल्यूशन चुनें, आम तौर पर **1280x720**।

#### MAC address
अनुकरण किए गए डिवाइस का MAC पता। आप अपने असली MAG 250 डिवाइस का MAC पता इस्तेमाल कर सकते हैं,
या 12 यादृच्छिक हेक्साडेसिमल अंक (0–9, A–F), जिन्हें कोलन से अलग किए गए जोड़ों में लिखा गया हो। [^wrong_mac]

अधिकांश पोर्टल के लिए MAC पता 00:1A:79 से शुरू होना ज़रूरी है।

[^wrong_mac]: कुछ केवल Wi-Fi वाले डिवाइस पर बना MAC पता **00:1A:79:00:00:00** हो सकता है।
    इसका मतलब है कि Android की पाबंदियों के कारण ऐप उसे सही ढंग से पहचान नहीं सका।
    **00:00:00** वाले हिस्से में यादृच्छिक हेक्साडेसिमल अंक रखें और जोड़ों के बीच कोलन बनाए रखें।

#### Serial number
अनुकरण किए गए डिवाइस का सीरियल नंबर। अधिकांश पोर्टल इसे नहीं जाँचते, इसलिए आम तौर पर कोई भी टेक्स्ट चलेगा।

#### Device ID
डिवाइस ID की सेटिंग्स।

##### Use MAC-based device ID
डिवाइस के MAC पते से डिवाइस ID बनाएँ। इस विकल्प को चालू या बंद करने के बाद
ID दोबारा बनाने के लिए **Reset device ID** दबाएँ।

##### Send Device ID
पोर्टल के माँगने पर डिवाइस ID भेजें। बंद होने पर ऐप खाली टेक्स्ट भेजता है।

##### Device ID random seed
डिवाइस ID बनाने में इस्तेमाल होने वाला सीड। जिन डिवाइस पर पोर्टल URL और MAC पता समान हैं,
उन सभी पर एक ही सीड रखें। यह मान बदलने के बाद **Reset device ID** दबाएँ।

##### Device ID value
डिवाइस ID। बना हुआ मान इस्तेमाल करें या अपना मान दर्ज करें।

##### Custom device ID 2 and signature
Device ID 2 और सिग्नेचर संपादित करने के लिए यह विकल्प चालू करें।

##### Device ID 2
##### Signature
##### Reset device ID to default value
**Device ID**, **Device ID 2** और सिग्नेचर दोबारा बनाएँ।

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
अनुरोध पर पोर्टल को भेजा जाने वाला IP पता। यह अनुकरण किया गया पता है, डिवाइस का असली IP पता नहीं।
अधिकांश पोर्टल इस जानकारी का उपयोग नहीं करते, इसलिए आम तौर पर इसे बदलने की ज़रूरत नहीं होती।
### Media player settings

इस प्रोफ़ाइल के मीडिया प्लेयर की सेटिंग्स।
#### Media player
इस प्रोफ़ाइल का डिफ़ॉल्ट मीडिया प्लेयर चुनें।

| प्लेयर | विवरण | टिप्पणी |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo             | [GitHub](https://github.com/google/ExoPlayer)                                                                                                        | डिफ़ॉल्ट प्लेयर, अधिकांश डिवाइस के लिए सुझाया गया |
| VLC             | [वेबसाइट](https://www.videolan.org) |                                                         |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk             | [GitHub](https://github.com/bilibili/ijkplayer)                                                                                                      | सबटाइटल का समर्थन नहीं करता |
| Internal player | Android प्लेयर का उपयोग करता है। समर्थित कोडेक आपके डिवाइस के Android संस्करण पर निर्भर करते हैं। | सबटाइटल का समर्थन नहीं करता |
| External player | लगभग कोई भी बाहरी प्लेयर इस्तेमाल करें। एमुलेटर के साथ एकीकरण उपलब्ध नहीं है; मीडिया स्ट्रीम दूसरे ऐप में खुलती हैं। |                                                         |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
