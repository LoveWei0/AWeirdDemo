import React from 'react'
// components
import Navbar from '@/components/Navbar'
import Container from '@/components/Container'
import Footer from '@/components/Footer'
// I18
import { I18 } from '@/utils/i18'

interface RightSideType {
  rightSide?: boolean
}

const QuoteIcon = ({ rightSide }: RightSideType) => {
  return (
    <img
      src="/images/img/home-marks2.png"
      alt="marks"
      className={`absolute w-7 h-7 ${rightSide ? 'right-10' : 'left-10'}`}
      style={{
        top: '-10px',
        transform: rightSide ? 'rotateY(180deg)' : 'null',
      }}
    />
  )
}

export default function Feedback() {
  const { t } = I18()
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <img
          src={'/images/img/imge00.png'}
          alt="bg"
          className="w-full md:max-w-screen-xl rounded-lg"
        />
      </div>
      <div className="flex justify-center">
        <div className="md:flex w-5/6 md:max-w-screen-xl py-0 md:px-10 my-5 gap-10 justify-center">
          <div className="md:flex justify-center flex-shrink-0 items-center md:w-48 hidden">
            <img
              src={'/images/img/icons/Icon-Performance Coaching@2x.png'}
              style={{ width: '0px' }}
              alt=""
            />
          </div>
          <div className="pt-2">
            <div className="text-3xl font-bold main-color">{t('feedback')}</div>
            <div className="pt-2">{t('course-advise-desc')}</div>
          </div>
        </div>
      </div>
      <Container className="md:max-w-screen-xl flex-wrap mb-5 lg:gap-10 lg:flex-nowrap">
        <div className="md:flex py-5">
          <div className="md:mb-5 md:w-1/2">
            <img
              src={'/images/img/testimonials1.png'}
              alt="note"
              className="object-cover w-full h-full rounded relative md:left-5 md:bottom-5 -z-1"
            />
          </div>
          <div className="feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
            <QuoteIcon rightSide />
            <div className="px-5">{t('testimonials-1')}</div>
          </div>
        </div>
        <div className="md:flex py-5">
          <div className="hidden md:block feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
            <QuoteIcon />
            <div className="px-5">{t('testimonials-2')}</div>
          </div>
          <div className="md:mb-5 md:w-1/2">
            <img
              src={'/images/img/testimonials2.png'}
              alt="note"
              className="object-cover w-full h-full rounded relative md:right-5 md:bottom-5 -z-1"
            />
          </div>
          <div className="block md:hidden feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
            <QuoteIcon />
            <div className="px-5">{t('testimonials-2')}</div>
          </div>
        </div>
        <div className="md:flex py-5">
          <div className="md:mb-5 md:w-1/2">
            <img
              src={'/images/img/testimonials3.png'}
              alt="note"
              className="object-cover w-full h-full rounded relative md:left-5 md:bottom-5 -z-1"
            />
          </div>
          <div className="feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
            <QuoteIcon rightSide />
            <div className="px-5">{t('testimonials-3')}</div>
          </div>
        </div>
        <div className="md:flex py-5">
          <div className="hidden md:block feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
            <QuoteIcon />
            <div className="px-5">{t('testimonials-4')}</div>
          </div>
          <div className="md:mb-5 md:w-1/2">
            <img
              src={'/images/img/testimonials4.png'}
              alt="note"
              className="object-cover w-full h-full rounded relative md:right-5 md:bottom-5 -z-1"
            />
          </div>
          <div className="block md:hidden feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
            <QuoteIcon />
            <div className="px-5">{t('testimonials-4')}</div>
          </div>
        </div>
        <div className="md:flex py-5">
          <div className="md:mb-5 md:w-1/2">
            <img
              src={'/images/img/testimonials5.png'}
              alt="note"
              className="object-cover w-full h-full rounded relative md:left-5 md:bottom-5 -z-1"
            />
          </div>
          <div className="feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
            <QuoteIcon rightSide />
            <div className="px-5">{t('testimonials-5')}</div>
          </div>
        </div>
        <div className="md:flex py-5">
          <div className="hidden md:block feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
            <QuoteIcon />
            <div className="px-5">{t('testimonials-6')}</div>
          </div>
          <div className="md:mb-5 md:w-1/2">
            <img
              src={'/images/img/testimonials6.png'}
              alt="note"
              className="object-cover w-full h-full rounded relative md:right-5 md:bottom-5 -z-1"
            />
          </div>
          <div className="block md:hidden feedback-card-shadow p-5 md:mb-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded">
            <QuoteIcon />
            <div className="px-5">{t('testimonials-6')}</div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
