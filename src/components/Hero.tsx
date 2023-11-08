import React from 'react'
// antd
import { Carousel, Form, Input, Checkbox, Button } from 'antd'
// components
import BannerCard from './BannerCard'
import ButtonCard from './ButtonCard'
// banner -> image
import bannerOne from '../assets/images/banner/home_banner1.png'
import bannerTwo from '../assets/images/banner/home_banner2.png'
import bannerThree from '../assets/images/banner/home_banner3.png'
// utils -> I18
import { I18 } from '@utils/i18'
// react-router-dom
import { Link } from 'react-router-dom'

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
  const { t, i18n } = I18()
  const local = i18n.language
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
      <div className="w-full" style={{ backgroundColor: '#0d7a98' }}>
        <div className="relative px-5 md:px-5 md:py-5 lg:p-0 flex gap-5">
          <div className="lg:block lg:w-60" style={{ width: '220px' }}>
            <img
              className="hidden absolute bottom-0 left-0 h-auto"
              src={'/images/img/robert.png'}
              alt="x"
              width="220"
              height="320"
            />
          </div>
          <div className="text-white right-0 py-5">
            {local === 'en' && (
              <div>
                <div className="flex flex-col items-center h-full max-w-2xl">
                  <div className="flex flex-col item-center h-full max-w-2xl">
                    <div
                      className="text-lg md:text-2xl my-2 font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: t('email-subscription'),
                      }}
                    ></div>
                    <div className="text-base">
                      {t('email-subscription-desc')}
                    </div>
                    <div className="text-base">{t('subscription-cancel')}</div>
                  </div>
                </div>
                <Form className="text-center lg:text-left text-white">
                  <div className="pt-5 gap-6">
                    <div className="md:flex gap-3">
                      <div>
                        <Form.Item name="first-name">
                          <Input
                            className="w-full md:w-48"
                            placeholder="Your first name"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item name="last-name">
                          <Input
                            className="w-full md:w-48"
                            placeholder="Your last name"
                          />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item name="email">
                          <Input
                            className="w-full md:w-48"
                            placeholder="Your email"
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="pb-5 md:flex items-center gap-1">
                      <Checkbox />I agree to the
                      <Link to="/terms" className="pl-1 md:pl-0 underline">
                        terms and conditions.
                      </Link>
                      <Button
                        className="bg-white w-full lg:w-auto md:ml-10 mt-5 md:mt-0"
                        htmlType="submit"
                        style={{ background: '#f05622', color: '#ffffff' }}
                      >
                        {'Subscribe now'}
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            )}
            {local === 'zh' && (
              <div className="py-1 lg:py-7 gap-6 lg:pl-10 h-full">
                <div className="text-xl font-bold lg:text-2xl">
                  扫码添加Robert教授微信
                </div>
                <div className="h-full p-5 flex justify-center">
                  <img
                    src={'/images/qr/wechat.jpeg'}
                    alt="c"
                    className="h-full lg:h-full"
                    style={{ width: '160px', height: '160px' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
