import '../styles/globals.css'
import '../styles/nprogress.css'
import NProgress from 'nprogress';
import Router from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { Navbar } from '../components/Navbar'

Router.events.on('routeChangeStart', (url) => {
  // console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <Navbar />
    </>
  )
}

export default appWithTranslation(MyApp)
