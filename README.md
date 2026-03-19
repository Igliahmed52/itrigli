# 🌟 موقع جمعية إيتري إقلي — الموقع الكامل

## الصفحات (6 صفحات)
| الصفحة | الملف | المحتوى |
|--------|-------|---------|
| الرئيسية | `index.html` | Hero + إحصائيات + أحدث الأخبار + القيم + CTA |
| من نحن | `about.html` | القصة + الرؤية + المحاور الستة + الهوية البصرية |
| الأنشطة | `activities.html` | فلتر أنشطة + معرض صور + Lightbox |
| التقارير | `reports.html` | تحميل PDF + ملخص المحاور |
| الفريق | `team.html` | بطاقات الأعضاء + دعوة تطوع |
| تواصل | `contact.html` | نموذج Formspree + خريطة Google Maps |

## 🚀 تفعيل نموذج التواصل (Formspree)
1. اذهب إلى https://formspree.io وأنشئ حساباً مجانياً
2. أنشئ نموذجاً جديداً (New Form)
3. انسخ الـ Form ID (مثل: xpzvwkqr)
4. افتح `contact.html` — ابحث عن `YOUR_FORM_ID`
5. استبدله بـ ID نموذجك
✅ ستصلك رسائل التواصل مباشرة على بريدك الإلكتروني

## 🌐 النشر على GitHub Pages (مجاني)
1. أنشئ حساباً على github.com
2. أنشئ Repository جديد (Public)
3. ارفع جميع الملفات (مع المجلد assets/)
4. Settings → Pages → Branch: main → Save
5. موقعك: https://USERNAME.github.io/REPO-NAME

## 📁 هيكل المجلدات
```
itri-website/
├── index.html        ← الرئيسية
├── about.html        ← من نحن
├── activities.html   ← الأنشطة + معرض الصور
├── reports.html      ← التقارير
├── team.html         ← الفريق
├── contact.html      ← تواصل + خريطة + Formspree
├── README.md
└── assets/
    ├── css/style.css ← كل التنسيقات
    ├── js/app.js     ← كل الوظائف
    └── reports/
        └── تقرير-2025.pdf
```
