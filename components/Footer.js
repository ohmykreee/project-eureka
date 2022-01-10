import { siteConf } from '../site-config.js'
import { useTranslation } from 'next-i18next'

export const Footer = () => {
  const { t } = useTranslation('components')

  return (
    <footer>
      <a href={siteConf.baseurl}>
      {t('footer')}
      </a>
    </footer>
  )
}