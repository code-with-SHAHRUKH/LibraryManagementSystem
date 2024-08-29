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
        "Returns": "Returns",
        // add new book english content
    "bookForm": {
        "title": "Add New Book",
        "Booktitle": "Book Title",
        "author": "Author Name",
        "language": "Language",
        "subject": "Subject",
        "publisher": "Publisher Name",
        "translator": "Translator",
        "publicationLocation": "Publication Location",
        "qrCodeNumber": "QR Code Number",
        "isbn": "ISBN",
        "sect": "Sect",
        "save":"Save",
        "cancel":"Cancel"
      },
       // User Management english content
       "UserManagement": {
        "title": "User Roles & Access Management",
        "ManageLibrary": {
          "Civil Department": "Civil Department",
          "Electrical Department": "Electrical Department",
          "Mechanical Department": "Mechanical Department",
          "Computer Science": "Computer Science",
          "Chemical Engineering": "Chemical Engineering"
        },
        "Role": {
          "Admin": "Admin",
          "Librarian": "Librarian",
          "Operator": "Operator"
        },
        "Name": {
          "Shazain": "Shazain",
          "Hassan": "Hassan",
          "Ali": "Ali",
          "Ahmed": "Ahmed",
          "Fahad": "Fahad"
        }
      }
   ,
      "userForm": {
        "title": "Add New User",
        "name": "Name",
        "user":"User",
        "manageLibrary": "Manage Library",
        "roleAssign": "Role Assign",
        "actions":"Actions",
         "save":"Save",
        "cancel":"Cancel"
      }
      }},
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
        "Returns": "واپسی",
            "save":"محفوظ کریں",
        "cancel":"منسوخ کریں",
        //add new book urdu content
        "bookForm": {
          "title": "نئی کتاب شامل کریں",
          "Booktitle": "کتاب کا عنوان",
          "author": "مصنف کا نام",
          "language": "زبان",
          "subject": "موضوع",
          "publisher": "ناشر کا نام",
          "translator": "مترجم",
          "publicationLocation": "اشاعت کا مقام",
          "qrCodeNumber": "کیو آر کوڈ نمبر",
          "isbn": "آئی ایس بی این",
          "sect": "فرقہ",
          "save":"محفوظ کریں",
          "cancel":"منسوخ کریں",
        },
        "userForm":{

           "title": "نیا صارف شامل کریں",
           "user":"صارف",
          "name": "نام",
          "manageLibrary": "کتب خانہ منظم کریں",
          "roleAssign": "کردار تفویض کریں",
          "actions":"ایکشن",
          "save":"محفوظ کریں",
          "cancel":"منسوخ کریں",
        },
        "UserManagement":{
          
          "title": "صارف کے کردار اور رسائی کا انتظام",
          "ManageLibrary":{
          "Civil Department": "شہری محکمہ",
          "Electrical Department": "برقی محکمہ",
          "Mechanical Department": "مشینری محکمہ",
          "Computer Science": "کمپیوٹر سائنس",
          "Chemical Engineering": "کیمیائی انجینئرنگ"
        },
        "Role":{
          "Admin": "منتظم",
          "Librarian": "کتب خانہ دار",
          "Operator": "آپریٹر"
        },
        "Name": {
          "Shazain": "شزین",
          "Hassan": "حسن",
          "Ali": "علی",
          "Ahmed": "احمد",
          "Fahad": "فہد"
        }
      }
        
      }},
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;