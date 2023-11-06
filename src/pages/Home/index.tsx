import React, { useEffect } from 'react'
// components
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
// I18
import { I18 } from '@/utils/i18'

export default function Home() {
  const { t } = I18()
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
      <SectionTitle pretitle="" align="left" title={t('slogan3')}>
        {t('value-desc')}
      </SectionTitle>
    </>
  )
}
