---
id: profiles
title: الملفات الشخصية
sidebar_label: الملفات الشخصية
---

# الملفات الشخصية لأجهزة STB {/* #stb-profiles */}

الملف الشخصي <bdi dir="ltr">**STB profile**</bdi> هو مجموعة خيارات لمحاكاة جهاز استقبال داخل التطبيق. ينشئ التطبيق ملفًا شخصيًا واحدًا عند تشغيله للمرة الأولى.
يمكنك تعديله أو إضافة ملفات شخصية أخرى لتحميل بوابات مختلفة على الجهاز نفسه.
افتح <span dir="ltr"><bdi dir="ltr">**Settings > Profiles**</bdi></span> واختر <bdi dir="ltr">**Add profile**</bdi>، أو اختر ملفًا شخصيًا موجودًا لتعديله.
تجمع صفحة النظرة العامة الخيارات ضمن <bdi dir="ltr">**Connection**</bdi> و<bdi dir="ltr">**Playback & device**</bdi> و<bdi dir="ltr">**Manage profile**</bdi>.
تعتمد الإجراءات المتاحة على إصدار التطبيق والقيود المفروضة على الملف الشخصي. لا يمكن حذف الملف الشخصي النشط؛
انتقل إلى ملف شخصي آخر قبل حذفه. يتطلب الحذف تأكيدًا.

تتطلب تعديلات النصوص والاختيارات تأكيدًا؛ أما تغييرات المفاتيح فتُحفظ فورًا. راجع [حفظ التغييرات](/settings#saving-changes)
للتعرف على أخطاء التحقق من المدخلات وتعارض التعديلات والتغييرات المحفوظة التي تتطلب تحديث التطبيق قيد التشغيل.

لا يوفر StbEmu أي وسائط أو قوائم تشغيل IPTV، ولا يستضيفها أو يفهرسها.
يجب أن يكون للمستخدمين حق قانوني في الوصول إلى المحتوى الذي يستخدمونه عبر المحاكي.

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
اسم الملف الشخصي. يمكن أن يكون أي نص غير فارغ.

### Portal settings
الخيارات الخاصة بالبوابة.
##### Portal URL
أدخل عنوان URL مطلقًا يبدأ بـ <bdi dir="ltr">**http://**</bdi> أو <bdi dir="ltr">**https://**</bdi>. تُدعم مضيفات الشبكة المحلية وlocalhost وعناوين IPv6 وأسماء النطاقات الدولية. يجب ألا تحتوي عناوين URL للشبكة على مسافات بيضاء.
بالنسبة إلى البوابة الداخلية، يُقبل أيضًا مسار مطلق في نظام الملفات أو عنوان URL مطلق مدعوم يبدأ بـ <bdi dir="ltr">**file://**</bdi>. لا يقبل المحرر الجديد عناوين FTP.

##### Portal language
لغة البوابة الافتراضية، وتُحدد برمز لغة من حرفين وفق معيار [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

#### HTTP Proxy settings
إعدادات وكيل HTTP.

##### Use HTTP proxy
فعّل هذا الخيار إذا كنت تريد استخدام وكيل HTTP.

##### Proxy host name
مضيف الوكيل منفصل عن منفذه؛ والمضيف الافتراضي هو 127.0.0.1.
##### Proxy port
القيمة الافتراضية: 3128. لا يتوفر محررا المضيف والمنفذ إلا عند تفعيل <bdi dir="ltr">**Use HTTP proxy**</bdi>.

##### Portal is internal
فعّل هذا الخيار لاستخدام بوابة داخلية لأجهزة MAG. يؤدي عنوان URL محلي للبوابة إلى تفعيله تلقائيًا وتعطيل إمكانية تغيير المفتاح. يؤدي التغيير إلى عنوان URL للشبكة إلى إلغاء الإعداد التلقائي للبوابة الداخلية.

##### Internal portal URL
استخدم حقل <bdi dir="ltr">**Portal URL**</bdi> للمسار المحلي أو عنوان URL للملف؛ لا يوجد محرر منفصل لعنوان URL الداخلي.

لتثبيت بوابة، افتح <span dir="ltr"><bdi dir="ltr">**Settings > Profiles > ملفك الشخصي > Portal settings**</bdi></span>، واستخدم إجراء التثبيت، وحدد أرشيف البوابة. انتظر اكتمال الاستخراج،
ثم أكد عنوان URL المحلي المقترح. تثبيت الملفات وقبول عنوان URL خطوتان منفصلتان.
استخدم إجراء الإزالة في <bdi dir="ltr">**Portal settings**</bdi> لإزالة بوابة داخلية مثبتة.

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
اضبط إصدارات محرك المشغل وJavaScript API وSTB API، إلى جانب إصدار صورة النظام ووصفها وتاريخها.
فعّل استخدام User Agent مخصص قبل تعديل نص User Agent المخصص.

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
وعنوان MAC نفسه. يؤدي تأكيد تغيير القيمة الأولية إلى إعادة توليد المعرّفات تلقائيًا.
لا تضغط Reset إذا كنت تريد الاحتفاظ بالقيمة الأولية: إذ يمسحها Reset.

##### Device ID value
معرّف الجهاز. استخدم القيمة المُولّدة أو أدخل قيمة تختارها.

##### Custom device ID 2 and signature
فعّل هذا الخيار لتعديل Device ID 2 والتوقيع.

##### Device ID 2
##### Signature
##### Reset device ID to default value
بعد التأكيد، امسح القيمة الأولية وأعِد توليد <bdi dir="ltr">**Device ID**</bdi> و<bdi dir="ltr">**Device ID 2**</bdi> والتوقيع من قيم الملف الشخصي الحالية. يُحتفظ بإعدادات الملف الشخصي الأخرى.

لا يتوفر التعديل اليدوي لـ <bdi dir="ltr">**Device ID**</bdi> إلا عند تفعيل <bdi dir="ltr">**Send Device ID**</bdi> وتعطيل المعرّفات المستندة إلى MAC.
يتطلب تعديل <bdi dir="ltr">**Device ID 2**</bdi> و<bdi dir="ltr">**Signature**</bdi> أيضًا تفعيل <bdi dir="ltr">**Custom device ID 2 and signature**</bdi>.
تظل القيم المشتقة تلقائيًا قابلة للقراءة عندما لا يتوفر التعديل.

#### Hardware settings
##### Vendor
##### Hardware version

تتضمن خيارات الجهاز أيضًا التوافق مع Ministra وإعادة توجيه المتصفح. لا تغيّرها إلا وفقًا لمتطلبات بوابتك.

### Media player settings

إعدادات مشغل الوسائط لهذا الملف الشخصي.
#### Media player
اختر مشغل الوسائط الافتراضي لهذا الملف الشخصي.

تتضمن القائمة الاختيار التلقائي وExo ومشغل Android الداخلي ومشغلًا خارجيًا،
بالإضافة إلى أي مشغلات أخرى متاحة في نسختك. اختر من الخيارات المعروضة في التطبيق.
يعتمد دعم برامج الترميز في المشغل الداخلي على Android؛ وتفتح المشغلات الخارجية البث في تطبيق آخر.

#### UDPXY settings
##### Enable UDPXY support {/* #enable-udxpy-support */}
لا تفعّل UDPXY إلا بعد إدخال عنوان URL صالح لخادم HTTP/HTTPS.
##### UDPXY server URL
يمكنك إدخال عنوان URL عندما يكون UDPXY معطلًا. يُسمح بعنوان URL فارغ فقط عند التعطيل؛ ويجب أن يكون العنوان غير الفارغ عنوان HTTP/HTTPS صالحًا.
##### Overwrite stream protocol
اختر بروتوكول البث البديل عند تفعيل UDPXY.
### Advanced settings
تتضمن خيارات التوافق الخاصة بالملف الشخصي تصحيحات CSS واكتشاف المحاكي وإصلاحات لون الخلفية والملفات المحلية وAJAX،
وأحداث الرجوع والأزرار للمشغلات الخارجية. تعتمد خيارات أحداث Back وExit وOK على خيار حدث العودة إلى قائمة القنوات.
لا تغيّر هذه الخيارات إلا إذا تطلبت بوابتك أو المشغل الخارجي ذلك.
