// i18next
import i18n from 'i18next'
// react-i18next
import { initReactI18next } from 'react-i18next'
// JSON zh File
import commonZh from './locales/zh/common.json'
// JSON en File
import commonEn from './locales/en/common.json'

const resources = {
  en: {
    common: commonEn,
  },
  zh: {
    common: commonZh,
  },
}
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
