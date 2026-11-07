---
id: profiles
title: الملفات الشخصية
sidebar_label: الملفات الشخصية
---

# الملفات الشخصية لأجهزة STB {/* #stb-profiles */}

الملف الشخصي <bdi dir="ltr">**STB profile**</bdi> هو مجموعة خيارات لمحاكاة جهاز استقبال داخل التطبيق. ينشئ التطبيق ملفًا شخصيًا واحدًا عند تشغيله للمرة الأولى.
يمكنك تعديله أو إضافة ملفات شخصية أخرى لتحميل بوابات مختلفة على الجهاز نفسه.
لإنشاء ملف شخصي، انقر مرتين على الشاشة لعرض القائمة في الأعلى أو على الجانب [^1].
اختر <bdi dir="ltr">**Settings**</bdi> ثم <bdi dir="ltr">**Profiles**</bdi>، حيث يمكنك إضافة الملفات الشخصية أو تعديلها.

لا يوفر StbEmu أي وسائط أو قوائم تشغيل IPTV، ولا يستضيفها أو يفهرسها.
يجب أن يكون للمستخدمين حق قانوني في الوصول إلى المحتوى الذي يستخدمونه عبر المحاكي.

[^1]: إذا كنت تستخدم جهاز تحكم ثلاثي الأبعاد أو فأرة، فحرّك المؤشر، وانقر على الشاشة، وافتح قائمة التطبيق في الأعلى.

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
اسم الملف الشخصي. يمكن أن يكون أي نص غير فارغ.

### Portal settings
الخيارات الخاصة بالبوابة.
##### Portal URL
عنوان URL الخاص بالبوابة. يجب أن يبدأ بمخطط (<bdi dir="ltr">**http://**</bdi> أو <bdi dir="ltr">**https://**</bdi> أو <bdi dir="ltr">**ftp://**</bdi>، وما إلى ذلك).

##### Portal language
لغة البوابة الافتراضية، وتُحدد برمز لغة من حرفين وفق معيار [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
إعدادات وكيل HTTP.

##### Use HTTP proxy
فعّل هذا الخيار إذا كنت تريد استخدام وكيل HTTP.

##### Proxy host name
##### Proxy port

##### Portal is internal
فعّل هذا الخيار لاستخدام بوابة داخلية لأجهزة MAG.

##### Internal portal URL

### STB configuration
إعدادات المحاكاة الرئيسية.

#### STB Model
طراز جهاز STB المراد محاكاته.

#### Firmware
البرنامج الثابت <bdi dir="ltr">**firmware**</bdi> المراد محاكاته؛ لا يُثبّت أي برنامج ثابت فعلي. تتطلب بعض البوابات برنامجًا ثابتًا معينًا.
في هذه الحالة، اختره من القائمة إذا كان متاحًا.
لا تتيح معظم طرز STB المدعومة سوى البرنامج الثابت <bdi dir="ltr">**Generic**</bdi>، الذي يمثل عادةً أحدث إصدار.

خيارات البرنامج الثابت المتاحة:
* Generic: عادةً أحدث برنامج ثابت متاح.
* Custom (لجهاز MAG 250 فقط): برنامج ثابت قابل للتخصيص. استخدمه إذا كنت بحاجة إلى تغيير إعدادات معينة للبرنامج الثابت.

يُنصح معظم المستخدمين باستخدام البرنامج الثابت <bdi dir="ltr">**Generic**</bdi> (المحدد افتراضيًا).

#### Firmware settings
يتوفر هذا الخيار فقط مع البرنامج الثابت <bdi dir="ltr">**Custom**</bdi> (المدعوم حاليًا لجهاز MAG 250 فقط).
استخدمه لضبط إعدادات معينة للبرنامج الثابت، مثل الإصدار أو نص User Agent مخصص.

#### User Agent
نص User Agent لمتصفح الويب الخاص بالتطبيق.

#### Screen resolution
دقة الشاشة المراد محاكاتها؛ لا يغيّر هذا دقة العرض الفعلية.
اختر دقة تدعمها بوابتك، وعادةً ما تكون <bdi dir="ltr">**1280x720**</bdi>.

#### MAC address
عنوان MAC للجهاز الذي تتم محاكاته. يمكنك استخدام عنوان MAC لجهاز MAG 250 حقيقي تملكه،
أو 12 رقمًا عشوائيًا بالنظام الست عشري (0–9، A–F)، مقسمة إلى أزواج تفصل بينها نقطتان رأسيتان. [^wrong_mac]

تتطلب معظم البوابات أن يبدأ عنوان MAC بـ 00:1A:79.

[^wrong_mac]: على بعض الأجهزة التي تعمل باتصال Wi-Fi فقط، قد يكون عنوان MAC المُولّد <bdi dir="ltr">**00:1A:79:00:00:00**</bdi>.
    يعني هذا أن التطبيق لم يستطع اكتشافه بصورة صحيحة بسبب قيود Android.
    استبدل الجزء **00:00:00** بأرقام عشوائية بالنظام الست عشري، مع الإبقاء على النقطتين الرأسيتين بين كل زوجين.

#### Serial number
الرقم التسلسلي للجهاز الذي تتم محاكاته. لا تتحقق منه معظم البوابات، لذا يمكن عادةً استخدام أي نص.

#### Device ID
إعدادات معرّف الجهاز.

##### Use MAC-based device ID
ولّد معرّف الجهاز من عنوان MAC الخاص به. اضغط <bdi dir="ltr">**Reset device ID**</bdi> بعد تفعيل هذا الخيار أو
تعطيله لإعادة توليد المعرّف.

##### Send Device ID
أرسل معرّف الجهاز عندما تطلبه البوابة. عند التعطيل، يرسل التطبيق نصًا فارغًا.

##### Device ID random seed
القيمة الأولية المستخدمة لتوليد معرّف الجهاز. استخدم القيمة الأولية نفسها على جميع الأجهزة التي تستخدم عنوان URL للبوابة نفسه
وعنوان MAC نفسه. اضغط <bdi dir="ltr">**Reset device ID**</bdi> بعد تغيير هذه القيمة.

##### Device ID value
معرّف الجهاز. استخدم القيمة المُولّدة أو أدخل قيمة تختارها.

##### Custom device ID 2 and signature
فعّل هذا الخيار لتعديل Device ID 2 والتوقيع.

##### Device ID 2
##### Signature
##### Reset device ID to default value
أعِد توليد <bdi dir="ltr">**Device ID**</bdi> و<bdi dir="ltr">**Device ID 2**</bdi> والتوقيع.

#### Hardware settings
##### Vendor
##### Hardware version

#### IP address
عنوان IP الذي يُرسل إلى البوابة عند طلبه. هذا عنوان محاكاة، وليس عنوان IP الفعلي للجهاز.
لا تستخدم معظم البوابات هذه المعلومات، لذا لا تحتاج عادةً إلى تغييره.
### Media player settings

إعدادات مشغل الوسائط لهذا الملف الشخصي.
#### Media player
اختر مشغل الوسائط الافتراضي لهذا الملف الشخصي.

| المشغل          | الوصف                                                                                                                                          | ملاحظة                                                 |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Exo             | [GitHub](https://github.com/google/ExoPlayer)                                                                                                        | المشغل الافتراضي، موصى به لمعظم الأجهزة |
| VLC             | [الموقع الإلكتروني](https://www.videolan.org)                                                                                                                 |                                                         |
| MPV             | [GitHub](https://github.com/mpv-android/mpv-android)                                                                                                 |                                                         |
| Ijk             | [GitHub](https://github.com/bilibili/ijkplayer)                                                                                                      | لا يدعم الترجمة النصية                               |
| Internal player | يستخدم مشغل Android. تعتمد برامج الترميز المدعومة على إصدار Android في جهازك.                                                          | لا يدعم الترجمة النصية                               |
| External player | استخدم أي مشغل خارجي تقريبًا. لا يتوفر التكامل مع المحاكي؛ وتُفتح تدفقات الوسائط في تطبيق آخر. |                                                         |

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
##### UDPXY server URL
##### Overwrite stream protocol
### Advanced settings
