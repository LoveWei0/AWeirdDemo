import React, { useState } from 'react'
// components
import Navbar from '@/components/Navbar'
import HeadingBlock from '@/components/HeadingBlock'
import PartnerForm from '@/components/PartnerForm'
import PartnerDetail from '@/components/PartnerDetail'

// I18
import { I18 } from '@utils/i18'
// antd
import { Checkbox, Button } from 'antd'
// icons
import { RightOutlined } from '@ant-design/icons'

export default function Partner() {
  const { t } = I18()
  const [step, setStep] = useState<number>(1)
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false)
  console.log(setStep, setAgreeTerms)
  return (
    <>
      <Navbar />
      <HeadingBlock
        fullWidth
        smallIcon
        step={step}
        bg={'/images/img/course_advice.jpg'}
        img={'/images/img/WechatIMG1663.png'}
        header={t('partner-title')}
        desc={t('oversea-desc')}
      />
      {step === 1 && (
        <>
          <div className="text-center pb-10 px-10 md:flex-row flex items-center justify-center flex-wrap">
            <Checkbox className="mr-2 flex items-center" checked={agreeTerms}>
              {t('partner-pdf')}
              <Button
                type="link"
                className="aligin-midden px-1"
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }}
              >
                {t('terms-conditions')}
                <RightOutlined className="align-middle" />
              </Button>
            </Checkbox>
          </div>
        </>
      )}
      <div style={{ background: 'rgb(246,246,246)' }}>
        {step === 1 ? <PartnerForm /> : <PartnerDetail />}
      </div>
    </>
  )
}
