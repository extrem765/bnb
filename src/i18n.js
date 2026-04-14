import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',

  resources: {
    en: {
      translation: {
        nav: {
          stays: 'Stays',
          experiences: 'Experiences',
          online: 'Online Experiences',
        },

        header: {
          host: 'Airbnb your home',
        },

        dropdown: {
          helpCenter: 'Help Centre',
          becomeHost: 'Airbnb your home',
          becomeHostDesc: "It's easy to start hosting and earn extra income.",
          inviteHost: 'Refer a host',
          findCohost: 'Find a co-host',
          signIn: 'Log in or sign up',
        },

        modal: {
          langTab: 'Language',
          currencyTab: 'Currency',
          translateTitle: 'Translation',
          translateDesc: 'Automatically translate descriptions and reviews.',
          recommended: 'Recommended',
          allLangs: 'All languages',
        },
      },
    },

    uk: {
      translation: {
        nav: {
          stays: 'Житло',
          experiences: 'Враження',
          online: 'Онлайн-враження',
        },

        header: {
          host: 'Здати житло',
        },

        dropdown: {
          helpCenter: 'Довідковий центр',
          becomeHost: 'Стати господарем',
          becomeHostDesc:
            'Почати приймати гостей та отримувати додатковий дохід дуже просто.',
          inviteHost: 'Запросити господаря',
          findCohost: 'Знайти співгосподаря',
          signIn: 'Увійдіть або зареєструйтеся',
        },

        modal: {
          langTab: 'Мова',
          currencyTab: 'Валюта',
          translateTitle: 'Переклад',
          translateDesc:
            'Автоматично перекладати описи та відгуки.',
          recommended: 'Рекомендовано',
          allLangs: 'Усі мови',
        },
      },
    },

    de: {
      translation: {
        nav: {
          stays: 'Unterkünfte',
          experiences: 'Erlebnisse',
          online: 'Online-Erlebnisse',
        },

        header: {
          host: 'Vermiete dein Zuhause',
        },

        dropdown: {
          helpCenter: 'Hilfecenter',
          becomeHost: 'Vermiete dein Zuhause',
          becomeHostDesc:
            'Starte ganz einfach als Gastgeber und verdiene zusätzliches Einkommen.',
          inviteHost: 'Gastgeber empfehlen',
          findCohost: 'Co-Gastgeber finden',
          signIn: 'Anmelden oder registrieren',
        },

        modal: {
          langTab: 'Sprache',
          currencyTab: 'Währung',
          translateTitle: 'Übersetzung',
          translateDesc:
            'Beschreibungen und Bewertungen automatisch übersetzen.',
          recommended: 'Empfohlen',
          allLangs: 'Alle Sprachen',
        },
      },
    },
  },

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
})

export default i18n