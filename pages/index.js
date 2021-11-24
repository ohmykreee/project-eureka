import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { siteConf } from '../site-config.js'
import Link from 'next/link'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Typed from 'react-typed'
import bwipjs from 'bwip-js'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import html2canvas from 'html2canvas'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['index', 'components'])),
      // Will be passed to the page component as props
    },
  }
}

export default function Home() {
  const { t } = useTranslation('index')

  return (
    <div className={styles.container}>
      <Header title={t('title')} />

      <Bgvideo />

      <main className={styles.main}>
      <Headline tGreet={t('greet')} tBarcode={t('barcodeAlt')}/>
      </main>

      <Footer />

    </div>
  )
}

class Bgvideo extends React.Component {
  constructor(props) {
    super(props)

    this.bgRef = React.createRef()
  }

  updateDimensions = () => {
    const bgVideo = this.bgRef.current
    bgVideo.style.top = `-${(bgVideo.clientHeight - window.innerHeight) / 2}px`
    bgVideo.style.left = `-${(bgVideo.clientWidth - window.innerWidth) / 2}px`
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
    this.bgRef.current.play()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {
    return(
      <>
      <img src='/ui/bgvideo.jpg' className={styles.bgvideo_img} />
      <video className={styles.bgvideo} poster='/ui/bgvideo.jpg' muted loop ref={this.bgRef} data-html2canvas-ignore>
        <source src='/ui/bgvideo.mp4' type='video/mp4' />
      </video>
      </>
    )
  }
}

class Headline extends React.Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
    this.barcodeRef = React.createRef()
  }

  handleInput = (e) => {
    if(e.key === 'Enter' || e.keyCode === 13) {
      const value = this.inputRef.current.value
      this.renderBarcodeImg('id:' + value, this.barcodeRef.current)
      html2canvas(document.body, {
        logging: false,
        windowHeight: '540',
        windowWidth: '360',
        scale: '8'
      }).then(function(canvas) {
        let downloader = document.createElement('a')
        downloader.download = `${value} - Access Card.png`
        downloader.href = canvas.toDataURL()
        downloader.target = '_blank'
        downloader.click()
      })
    }
  }

  limitInput = () => {
    this.inputRef.current.value = this.inputRef.current.value.replace(/[^a-zA-Z0-9_]/g, '')
  }
  
  renderBarcodeImg(text, ref) {
    let canvas = document.createElement('canvas')
    bwipjs.toCanvas(canvas, {
      bcid: 'code128',
      text: text,
      barcolor: 'ffffff',
      scale: 2,
      height: 3,
      rotate: 'L',
      includetext: false,
    })
    ref.src = canvas.toDataURL('image/png')
  }

  componentDidMount() {
    this.renderBarcodeImg('W0B00N00', this.barcodeRef.current)
    this.inputRef.current.addEventListener('keyup', this.handleInput)
    this.inputRef.current.addEventListener('input', this.limitInput)
  }

  componentWillUnmount() {
    this.inputRef.current.removeEventListener('keyup', this.handleInput)
    this.inputRef.current.removeEventListener('input', this.limitInput)
  }

  render()  {
    return(
      <>
      <img className={styles.barcode} ref={this.barcodeRef} alt={this.props.tBarcode}/>
      <div className={styles.headline}>
        <h1><Typed
          strings={[this.props.tGreet]}
          typeSpeed={50}
          cursorChar='_'
        /></h1>
        <p>ID: <input type="text" ref={this.inputRef} /></p>
      </div>
      </>
    )
  }
}