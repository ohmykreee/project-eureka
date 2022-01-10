import { siteConf } from '../site-config'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export const Navbar = () => {
  const router = useRouter()
  const { t } = useTranslation('components')
  const currPage = siteConf.routers.filter(item => item.url == router.pathname)
  const otherPage = siteConf.routers.filter(item => item.url != router.pathname)

  return(
    <div className='navbar' data-html2canvas-ignore>
      {/* <span className='navbar_current'>{t(currPage[0].name)}</span> */}
      <Link href={router.pathname} locale={router.locale === 'en-US' ? 'zh-CN' : 'en-US'}><span className="material-icons">translate</span></Link>
    </div>
  )
}