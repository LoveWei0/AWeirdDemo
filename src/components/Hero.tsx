import React from 'react'
// antd
import { Carousel } from 'antd'
// components
import BannerCard from './BannerCard'
// banner -> image
import bannerOne from '../../public/images/banner/home_banner1.png'
import bannerTwo from '../../public/images/banner/home_banner2.png'
import bannerThree from '../../public/images/banner/home_banner3.png'

export interface BannerType {
  title: string
  imgPath: string
}

type BannerDataType = BannerType[]

const bannerData: BannerDataType = [
  { title: 'learn', imgPath: bannerOne },
  { title: 'grow', imgPath: bannerTwo },
  { title: 'excel', imgPath: bannerThree },
]

export default function Hero() {
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
    </>
  )
}
