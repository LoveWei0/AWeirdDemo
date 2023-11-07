import React from 'react'
// components
import Container from './Container'
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
      <div
        className="w-full h-20 flex justify-center items-center gap-5"
        style={{ backgroundColor: '#0d7a98' }}
      >
        <span
          style={{ width: '50px', height: '2px', backgroundColor: '#fff' }}
        ></span>
        <span className="text-white font-bold">{t('feedback')}</span>
        <span
          style={{ width: '50px', height: '2px', backgroundColor: '#fff' }}
        ></span>
      </div>
      <Container className="md:max-w-screen-xl flex-wrap mb-5 lg:gap-10 lg:flex-nowrap">
        <div className="md:flex py-5">
          <div className="md:md-5 md:w-1/2">
            <img
              className="object-cover w-full h-full rounded relative md:left-5 md:bottom-5 -z-1"
              src={'/images/img/home-note1.png'}
              alt="note"
            />
          </div>
          <div className="shadow p-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded feedback-card-shadow">
            <QuoteIcon rightSide />
            <div
              className="px-5"
              dangerouslySetInnerHTML={{ __html: t('feedback-1') }}
            ></div>
          </div>
        </div>
        <div className="md:flex py-5">
          <div className="hidden md:block shadow p-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded feedback-card-shadow">
            <QuoteIcon />
            <div
              className="px-5"
              dangerouslySetInnerHTML={{ __html: t('feedback-2') }}
            ></div>
          </div>
          <div className="md:mb-5 md:w-1/2">
            <img
              src={'/images/img/home-note2.png'}
              alt="note"
              className="object-cover w-full h-full rounded relative md:left-5 md:bottom-5 -z-1"
            />
          </div>
          <div className="block shadow p-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded feedback-card-shadow md:hidden">
            <QuoteIcon />
            <div
              className="px-5"
              dangerouslySetInnerHTML={{ __html: t('feedback-2') }}
            ></div>
          </div>
        </div>
        <div className="md:flex py-5">
          <div className="md:md-5 md:w-1/2">
            <img
              className="object-cover w-full h-full rounded relative md:left-5 md:bottom-5 -z-1"
              src={'/images/img/home-note3.png'}
              alt="note"
            />
          </div>
          <div className="shadow p-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded feedback-card-shadow">
            <QuoteIcon rightSide />
            <div
              className="px-5"
              dangerouslySetInnerHTML={{ __html: t('feedback-3') }}
            ></div>
          </div>
        </div>
        <div className="md:flex py-5">
          <div className="hidden md:block shadow p-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded feedback-card-shadow">
            <QuoteIcon />
            <div
              className="px-5"
              dangerouslySetInnerHTML={{ __html: t('feedback-4') }}
            ></div>
          </div>
          <div className="md:mb-5 md:w-1/2">
            <img
              src={'/images/img/home-note4.png'}
              alt="note"
              className="object-cover w-full h-full rounded relative md:left-5 md:bottom-5 -z-1"
            />
          </div>
          <div className="block shadow p-5 md:w-1/2 mt-5 md:mt-0 relative md:p-10 bg-white rounded feedback-card-shadow md:hidden">
            <QuoteIcon />
            <div
              className="px-5"
              dangerouslySetInnerHTML={{ __html: t('feedback-4') }}
            ></div>
          </div>
        </div>
      </Container>
    </>
  )
}
