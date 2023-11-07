import React from 'react'
// components
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// I18
import { I18 } from '@utils/i18'

export default function About() {
  const { t } = I18()
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <img
          src={'/images/img/randomcoolpicshutterstock_2136407259.png'}
          alt="bg"
          className="w-full md:max-w-screen-xl rounded-lg"
        />
      </div>
      <div className="flex justify-center">
        <div className="md:flex w-5/6 md:max-w-screen-xl py-0 md:px-10 my-5 gap-10">
          <div className="hidden md:flex justify-center flex-shrink-0 items-center md:w-48">
            <img
              src={'/images/img/icon_icon_Get connected.png'}
              alt=""
              style={{ width: '0' }}
            />
          </div>
          <div className="pt-2">
            <div className="text-3xl font-bold main-color">{t('aboutUs')}</div>
            <div className="pt-2">{t('course-advise-desc')}</div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center pt-5 pb-20">
        <div className="w-full md:max-w-screen-xl flex pb-20">
          <div className="w-full md:max-w-screen-xl flex px-20">
            <div className="pr-0 md:pr-10">{t('about-us-content')}</div>
            <div className="hidden md:block" style={{ minWidth: '150px' }}>
              <img
                src={'/images/img/about_logo.png'}
                alt=""
                className="pb-12"
                width="130px"
              />
              <img src={'/images/img/View-logo@2x.png'} alt="" width="130px" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
