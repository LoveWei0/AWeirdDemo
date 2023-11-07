import React from 'react'
// I18
import { I18 } from '@/utils/i18'
// react-router-dom
import { Link } from 'react-router-dom'
// icon
import fb from '../../public/logo/fb.png'
import ins from '../../public/logo/ins.png'
import twitter from '../../public/logo/twitter.png'
import tt from '../../public/logo/tt.png'

interface NavigationType {
  label: string
  route: string
}
interface ImgType {
  imgPath: string
}

type NavigationDataType = NavigationType[]
type ImgDataType = ImgType[]

const navigation: NavigationDataType = [
  {
    label: 'home',
    route: '/',
  },
  {
    label: 'oversea',
    route: '/studyOversea',
  },
  {
    label: 'master',
    route: '/masterclass',
  },
  {
    label: 'phd',
    route: '/phdReady',
  },
  {
    label: 'about',
    route: '/about',
  },
  {
    label: 'partner',
    route: '/partner',
  },
  {
    label: 'contact',
    route: '/contact',
  },
]

const imgData: ImgDataType = [
  { imgPath: fb },
  { imgPath: ins },
  { imgPath: twitter },
  { imgPath: tt },
]

export default function Footer() {
  const { t } = I18()
  return (
    <div
      className="relative"
      style={{ backgroundColor: '#383838', color: '#8e8e8e' }}
    >
      <div className="md:flex justify-center items-center gap-20 py-10">
        <div className="md:flex justify-center">
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-medium"
          >
            <img src={'/logo/View-logo.png'} alt="N" width="100" height="100" />
          </Link>
        </div>
        <div className="py-5 md:py-0">
          {navigation.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.route}
                className="text-center w-full md:px-4 py-1 md:py-2 md:-ml-4 rounded-md block md:inline"
              >
                {t(item.label)}
              </Link>
            )
          })}
        </div>
        <div className="flex gap-5 justify-center items-center">
          {imgData.map((imgItem, index) => {
            return (
              <div className="cursor-pointer" key={index}>
                <img src={imgItem.imgPath} alt="" width="30" />
              </div>
            )
          })}
        </div>
        <div className="py-5 text-sm md:flex justify-center border-t">
          <div className="flex justify-center">©{t('web-right')}</div>
          <div className="flex justify-center">
            <a className="px-2 cursor-pointer" href="/">
              {t('terms-conditions')}
            </a>{' '}
            |{' '}
            <a href="/privacy" className="px-2 cursor-pointer">
              {t('privacy-policy')}
            </a>
            |{' '}
            <a href="" className="px-2 cursor-pointer">
              {t('contact-us')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
