// react-i18next
import { useTranslation } from 'react-i18next'

function I18() {
  const { t } = useTranslation('common')
  return t
}
export { I18 }
