---
id: profiles
title: प्रोफ़ाइल
sidebar_label: प्रोफ़ाइल
---

# STB प्रोफ़ाइल {/* #stb-profiles */}

**STB प्रोफ़ाइल** ऐप में सेट-टॉप बॉक्स का अनुकरण करने के विकल्पों का एक समूह है। पहली बार शुरू होने पर ऐप एक प्रोफ़ाइल बनाता है।
आप उसे संपादित कर सकते हैं या उसी डिवाइस पर अलग-अलग पोर्टल लोड करने के लिए और प्रोफ़ाइल जोड़ सकते हैं।
**Settings > Profiles** खोलें और **Add profile** चुनें, या संपादित करने के लिए कोई मौजूदा प्रोफ़ाइल चुनें।
अवलोकन में विकल्प **Connection**, **Playback & device** और **Manage profile** के अंतर्गत हैं।
उपलब्ध कार्रवाइयाँ आपके ऐप के संस्करण और प्रोफ़ाइल की पाबंदियों पर निर्भर करती हैं। सक्रिय प्रोफ़ाइल हटाई नहीं जा सकती;
उसे हटाने से पहले दूसरी प्रोफ़ाइल पर जाएँ। हटाने के लिए पुष्टि ज़रूरी है।

टेक्स्ट और चयन के बदलावों के लिए पुष्टि ज़रूरी है; स्विच तुरंत सेव हो जाते हैं। सत्यापन की त्रुटियों, परस्पर विरोधी बदलावों और सेव हुए ऐसे बदलावों के बारे में,
जिन्हें चल रहे ऐप में ताज़ा करना पड़ता है, [बदलाव सेव करना](/settings#saving-changes) देखें।

StbEmu कोई मीडिया या IPTV प्लेलिस्ट उपलब्ध नहीं कराता, होस्ट नहीं करता और न ही उनकी सूची बनाता है।
एमुलेटर से उपयोग की जाने वाली सामग्री पर उपयोगकर्ताओं का कानूनी अधिकार होना चाहिए।

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
पूरा **http://** या **https://** URL दर्ज करें। स्थानीय नेटवर्क होस्ट, localhost, IPv6 पते और अंतरराष्ट्रीय डोमेन नाम समर्थित हैं। नेटवर्क URL में खाली स्थान नहीं होने चाहिए।
आंतरिक पोर्टल के लिए फ़ाइल सिस्टम का पूरा पथ या समर्थित पूरा **file://** URL भी स्वीकार किया जाता है। नए संपादक में FTP URL स्वीकार नहीं किए जाते।

##### Portal language
पोर्टल की डिफ़ॉल्ट भाषा, दो अक्षरों वाले [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) भाषा कोड के रूप में दी जाती है।

#### HTTP Proxy settings
HTTP प्रॉक्सी की सेटिंग्स।

##### Use HTTP proxy
HTTP प्रॉक्सी का उपयोग करने के लिए इसे चालू करें।

##### Proxy host name
प्रॉक्सी होस्ट और उसका पोर्ट अलग हैं; डिफ़ॉल्ट होस्ट 127.0.0.1 है।
##### Proxy port
डिफ़ॉल्ट: 3128। होस्ट और पोर्ट के संपादक केवल **Use HTTP proxy** चालू होने पर उपलब्ध होते हैं।

##### Portal is internal
MAG डिवाइस के लिए आंतरिक पोर्टल इस्तेमाल करने हेतु यह विकल्प चालू करें। स्थानीय पोर्टल URL इसे अपने आप चालू कर देता है और स्विच अनुपलब्ध हो जाता है। नेटवर्क URL पर बदलने से स्वचालित आंतरिक-पोर्टल सेटिंग हट जाती है।

##### Internal portal URL
स्थानीय पथ या फ़ाइल URL के लिए **Portal URL** फ़ील्ड का उपयोग करें; आंतरिक URL का अलग संपादक नहीं है।

पोर्टल इंस्टॉल करने के लिए **Settings > Profiles > आपकी प्रोफ़ाइल > Portal settings** खोलें, इंस्टॉल की कार्रवाई चुनें और उसका आर्काइव चुनें। फ़ाइलें निकालने की प्रक्रिया पूरी होने दें,
फिर दिए गए स्थानीय URL की पुष्टि करें। फ़ाइलें इंस्टॉल करना और URL स्वीकार करना अलग-अलग चरण हैं।
इंस्टॉल किए गए आंतरिक पोर्टल को हटाने के लिए **Portal settings** में हटाने की कार्रवाई का उपयोग करें।

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
प्लेयर इंजन, JavaScript API और STB API के संस्करण तथा इमेज का संस्करण, विवरण और तारीख कॉन्फ़िगर करें।
कस्टम User Agent टेक्स्ट संपादित करने से पहले कस्टम User Agent का उपयोग चालू करें।

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
उन सभी पर एक ही सीड रखें। बदले हुए सीड की पुष्टि करने पर ID अपने आप दोबारा बनते हैं।
सीड रखना चाहते हैं तो Reset न दबाएँ: Reset उसे मिटा देता है।

##### Device ID value
डिवाइस ID। बना हुआ मान इस्तेमाल करें या अपना मान दर्ज करें।

##### Custom device ID 2 and signature
Device ID 2 और सिग्नेचर संपादित करने के लिए यह विकल्प चालू करें।

##### Device ID 2
##### Signature
##### Reset device ID to default value
पुष्टि के बाद सीड मिटाएँ और प्रोफ़ाइल के मौजूदा मानों से **Device ID**, **Device ID 2** और सिग्नेचर दोबारा बनाएँ। प्रोफ़ाइल की दूसरी सेटिंग्स बनी रहती हैं।

**Device ID** को अपने हाथ से संपादित करना केवल **Send Device ID** चालू और MAC आधारित ID बंद होने पर उपलब्ध है।
**Device ID 2** और **Signature** संपादित करने के लिए **Custom device ID 2 and signature** भी ज़रूरी है।
संपादन उपलब्ध न होने पर भी अपने आप निकाले गए मान पढ़े जा सकते हैं।

#### Hardware settings
##### Vendor
##### Hardware version

डिवाइस विकल्पों में Ministra संगतता और ब्राउज़र रीडायरेक्शन भी शामिल हैं। इन्हें केवल अपने पोर्टल की ज़रूरत के अनुसार बदलें।

### Media player settings

इस प्रोफ़ाइल के मीडिया प्लेयर की सेटिंग्स।
#### Media player
इस प्रोफ़ाइल का डिफ़ॉल्ट मीडिया प्लेयर चुनें।

सूची में स्वचालित चयन, Exo, Android का आंतरिक प्लेयर और बाहरी प्लेयर शामिल हैं,
साथ ही आपके बिल्ड में उपलब्ध अतिरिक्त प्लेयर भी। ऐप में दिखने वाले विकल्पों में से चुनें।
आंतरिक प्लेयर का कोडेक समर्थन Android पर निर्भर है; बाहरी प्लेयर स्ट्रीम को दूसरे ऐप में खोलते हैं।

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
मान्य HTTP/HTTPS सर्वर URL दर्ज करने के बाद ही UDPXY चालू करें।
##### UDPXY server URL
UDPXY बंद होने पर भी आप URL दर्ज कर सकते हैं। खाली URL केवल बंद होने पर स्वीकार है; गैर-खाली URL मान्य HTTP/HTTPS होना चाहिए।
##### Overwrite stream protocol
UDPXY चालू होने पर स्ट्रीम प्रोटोकॉल को बदलने का विकल्प चुनें।
### Advanced settings
प्रोफ़ाइल की संगतता के विकल्पों में CSS पैच, एमुलेटर की पहचान, बैकग्राउंड रंग, स्थानीय फ़ाइल और AJAX के सुधार,
तथा बाहरी प्लेयर के लिए वापसी/कुंजी इवेंट शामिल हैं। Back, Exit और OK इवेंट के विकल्प चैनल सूची पर लौटने वाले इवेंट के विकल्प पर निर्भर हैं।
इन्हें केवल अपने पोर्टल या बाहरी प्लेयर की ज़रूरत पर बदलें।
