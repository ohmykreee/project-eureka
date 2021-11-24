import styles from '../styles/Components.module.css'
import { siteConf } from '../site-config.js'
import { useTranslation } from 'next-i18next'

export const Footer = () => {
  const { t } = useTranslation('components')

  return (
    <footer className={styles.footer} >
      <a href={siteConf.baseurl}>
      {t('footer')}
      </a>
    </footer>
  )
}