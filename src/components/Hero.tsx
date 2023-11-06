import React from 'react'
// antd
import { Carousel } from 'antd'
// components
import BannerCard from './BannerCard'
import ButtonCard from './ButtonCard'
// banner -> image
import bannerOne from '../../public/images/banner/home_banner1.png'
import bannerTwo from '../../public/images/banner/home_banner2.png'
import bannerThree from '../../public/images/banner/home_banner3.png'
// react-i18next
import { useTranslation } from 'react-i18next'

export interface BannerType {
  title: string
  imgPath: string
}

export interface ButtonType {
  title: string
  pathName: string
}

type BannerDataType = BannerType[]
type ButtonDataType = ButtonType[]

const bannerData: BannerDataType = [
  { title: 'learn', imgPath: bannerOne },
  { title: 'grow', imgPath: bannerTwo },
  { title: 'excel', imgPath: bannerThree },
]

const buttonData: ButtonDataType = [
  {
    title: 'become-partner',
    pathName: '/partner',
  },
  {
    title: 'course-advise',
    pathName: '/studyoversea/advise',
  },
  {
    title: 'find-my-university',
    pathName: '/studyoversea/university',
  },
]

export default function Hero() {
  const { t } = useTranslation('common')
  return (
    <>
      <Carousel
        style={{ minHeight: 'calc(100vw*0.20)' }}
        effect="fade"
        autoplay
        autoplaySpeed={4000}
        swipeToSlide
        draggable
      >
        {bannerData.map((banner, index) => {
          return (
            <BannerCard
              key={index}
              title={banner.title}
              imgPath={banner.imgPath}
            />
          )
        })}
      </Carousel>
      <p className="flex justify-center pt-5 md:pt-10">{t('more-about-gow')}</p>
      <div className="flex justify-center">
        <div className="flex lg:w-1/2 md:py-5 md:flex justify-between items-center">
          {buttonData.map((buttonItem, index) => {
            return (
              <ButtonCard
                key={index}
                title={buttonItem.title}
                pathName={buttonItem.pathName}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
