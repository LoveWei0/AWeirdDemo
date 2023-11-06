import React, { useEffect } from 'react'
// i18next
// import { useTranslation } from 'react-i18next'
// components
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  // const { t } = useTranslation('common')
  useEffect(() => {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = 'e60fe710-4049-471d-8dab-b61e41152145'
    const d = document
    const s = d.createElement('script')
    s.src = 'https://client.crisp.chat/l.js'
    s.async = Boolean(1)
    d.getElementsByTagName('head')[0].appendChild(s)
  }, [])
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}
