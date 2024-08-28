import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import enTranslation from '/locales/en/translation.json';
// import urTranslation from '/locales/ur/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation:{
        "dashboard": "Dash Board",
        "Book Management": "Book Management",
        "User Management": "User Management",
        "Data Entry": "Data Entry",
        "Book Orders": "Book Orders",
        "QR Codes": "QR Codes",
        "Other Details": "Other Details",
        "Total Books": "Total Books",
        "Recent Additions": "Recent Additions",
        "Issues": "Issues",
        "Returns": "Returns"
      }},    //کتاب کا انتظام
      ur: { translation:{
        "dashboard": "ڈیش بورڈ",
        "Book Management": "کتاب کا انتظام",
        "User Management": "صارف کا انتظام",
        "Data Entry": "ڈیٹا انٹری",
        "Book Orders": "کتب کے احکام",
        "QR Codes": "کیو آر کوڈز",
        "Other Details": "دیگر تفصیلات",
        "Total Books": "کل کتابیں",
        "Recent Additions": "حال کی اضافات",
        "Issues": "مسائل",
        "Returns": "واپسی"
      }},
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;