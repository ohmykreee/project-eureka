import Head from 'next/head'
import { siteConf } from '../site-config.js'

export const Header = ({title}) => (
    <Head>
    <title>{title}</title>

    <meta name="siteBaseUrl" content={siteConf.baseurl} />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Kreee" />
    <meta name="description" content="Project Eureka: We can create a new dimension, together. 🌌" />
    <meta name="keywords" content="eureka,project eureka,responsive,react" />
    <meta name="title" content="Project Eureka" />
    <meta itemProp="name" content="Project Eureka 🌌" />
    <meta itemProp="description" content="Project Eureka: We can create a new dimension, together. 🌌" />
    <meta property="og:title" content="Project Eureka" />
    <meta property="og:description" content="Project Eureka: We can create a new dimension, together. 🌌" />
    <meta property="og:image" content="/avatar.jpg" />
    <meta property="og:site_name" content="Project Eureka" />
    <meta property="og:type" content="website" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    </Head>
)