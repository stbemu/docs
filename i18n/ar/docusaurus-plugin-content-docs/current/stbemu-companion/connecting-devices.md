---
title: "الاتصال بالأجهزة"
sidebar_label: "الاتصال بالأجهزة"
---

# الاتصال بالأجهزة {/* #connecting-devices */}

## اكتشاف StbEmu {/* #discover-stbemu */}

1. صِل الهاتف أو الجهاز اللوحي وجهاز StbEmu بالشبكة المحلية نفسها بحيث يمكن لكل منهما الوصول إلى الآخر.
2. في StbEmu، افتح <bdi dir="ltr">**Settings > Companion**</bdi> وفعّل الخدمة. راجع [إعدادات Companion في StbEmu](../settings/companion.md).
3. افتح صفحة <bdi dir="ltr">**Devices**</bdi> في Companion. تظهر الأجهزة التي تم التحقق منها كبطاقات محفوظة. افتح بطاقة تثبيت StbEmu الذي تريد إدارته.

![صفحة الأجهزة أثناء البحث في الشبكة المحلية](/img/companion/devices-empty.png)

إذا لم يظهر شيء، فتحقق من تفعيل وصول Companion في StbEmu ومن سماح Android بالوصول إلى الشبكة المحلية. اختر <bdi dir="ltr">**Retry**</bdi>، أو اتصل يدويًا.

### إضافة عنوان يدويًا {/* #add-an-address-manually */}

اختر <bdi dir="ltr">**Add by IP address**</bdi>. أدخل <bdi dir="ltr">**IPv4 or IPv6 address**</bdi> والمنفذ المعروضين في StbEmu، ثم اختر <bdi dir="ltr">**Connect**</bdi>. إذا تركت المنفذ فارغًا فسيُستخدم **10000**. أدخل عنوان IP، وليس رابط موقع ويب أو اسم مضيف. لا يتجاوز الإدخال اليدوي التحقق أو الإقران. يمكن للأجهزة ذات الإقران المحفوظ الصالح إعادة الاتصال دون إدخال رمز جديد.

![جهاز محفوظ ينتظر الإقران](/img/companion/devices-saved.png)

## إقران جهاز {/* #pair-a-device */}

1. في <bdi dir="ltr">**Settings > Companion**</bdi> في StbEmu، ابدأ الإقران لعرض رمز.
2. في صفحة إجراءات الجهاز في Companion، أدخل الرمز في <bdi dir="ltr">**Eight-digit pairing code**</bdi>.
3. اختر <bdi dir="ltr">**Pair device**</bdi> وانتظر ظهور <bdi dir="ltr">**Connected**</bdi>.

![إدخال رمز الإقران](/img/companion/pairing.png)

إذا انتهت صلاحية الرمز، فاعرض رمزًا جديدًا في StbEmu. إذا فُرض حد على معدل المحاولات، فانتظر قبل المحاولة مجددًا. يُحفظ الإقران للاتصالات اللاحقة ما دام StbEmu يواصل السماح به. يؤدي إلغاء الوصول في StbEmu أيضًا إلى منع استخدام الإذن المحفوظ.

## إعادة الاتصال أو إعادة التسمية أو الإزالة {/* #reconnect-rename-or-remove */}

يغلق <bdi dir="ltr">**Disconnect**</bdi> الاتصال ويحتفظ بالجهاز المحفوظ. لإعادة الاتصال، افتح بطاقته واختر <bdi dir="ltr">**Connect**</bdi>. قد يؤدي تغيير الشبكة إلى قطع الاتصالات؛ أعد الاتصال بعد عودة الاتصال المحلي.

استخدم زر القلم (<bdi dir="ltr">**Rename device**</bdi>) لتعيين اسم محلي. يعيد <bdi dir="ltr">**Use app name**</bdi> الاسم الذي يبلّغ عنه StbEmu. لا تؤدي إعادة التسمية هنا إلى تغيير اسم StbEmu نفسه.

يطلب زر سلة المهملات (<bdi dir="ltr">**Remove device**</bdi>) التأكيد. يزيل الاتصال والإقران المحفوظين من هذا الهاتف، ويحتفظ بملفات النسخ الاحتياطي، ولا يغير شيئًا في StbEmu. لن يظهر الجهاز المُزال تلقائيًا مجددًا عبر الاكتشاف. لإضافته مرة أخرى، استخدم <bdi dir="ltr">**Add by IP address**</bdi> وأعد الإقران.
