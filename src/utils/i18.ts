// react-i18next
import { useTranslation } from 'react-i18next'

function I18() {
  const { t, i18n } = useTranslation('common')
  return { t, i18n }
}
export { I18 }
