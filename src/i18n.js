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