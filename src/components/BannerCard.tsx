import React from 'react'
// react-i18next
import { useTranslation } from 'react-i18next'
// type
import type { BannerType } from '@/components/Hero'

// css
const labelStyle = {
  backgroundColor: 'rgba(0,0,0,0.4)',
  padding: '0.5rem 3rem',
  transform: 'translate(-50%,-50%)',
  borderRadius: '0.5rem',
}

export default function BannerCard({ title, imgPath }: BannerType) {
  const { t } = useTranslation('common')
  return (
    <div className="w-full flex flex-force justify-center">
      <div
        className="absolute top-1/2 left-1/2 text-xl text-white md:text-4px lg:text-8xl"
        style={labelStyle}
      >
        {t(title)}
      </div>
      <img
        src={imgPath}
        alt="Hero Illustration"
        className="md:max-w-screen-xl rounded-lg"
      />
    </div>
  )
}
