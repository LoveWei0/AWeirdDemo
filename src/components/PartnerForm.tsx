import React, { useState, useEffect } from 'react'
// I18
import { I18 } from '@utils/i18'
// antd
import { Form, Input, Button, message } from 'antd'
// components
import MainButton from '@/components/MainButton'
// store
import store from 'store'

const sentWaitTime = 20 * 1000

export default function PartnerForm() {
  const { t } = I18()
  const [form] = Form.useForm()
  const [sent, setSent] = useState(store.get('sent'))
  const [hasBeforeInput, setHasBeforeInput] = useState(false)

  const [enterEnable, setEnterEnable] = useState(false)
  const [expire, setExpire] = useState(Number(store.get('expire')))
  const [messageApi, contextHolder] = message.useMessage()
  console.log(setHasBeforeInput, setEnterEnable)
  console.log(messageApi, contextHolder)
  useEffect(() => {
    if (sent) {
      setTimeout(() => {
        setSent(false)
        store.set('sent', 0)
      }, expire - Date.now())
    }
  })
  const handleClick = async () => {
    store.set('sent', 1)
    store.set('expire', Date.now() + sentWaitTime)
    setSent(true)
    setExpire(Date.now() + sentWaitTime)
    setTimeout(() => {
      setSent(false)
      store.set('sent', 0)
    }, sentWaitTime)
  }
  return (
    <div className="flex justify-center pt-10 w-full">
      <div className="shadow w-full max-w-2xl rounded p-10 mb-10 bg-white">
        <div className="text-3xl font-bold main-color mb-5">
          {t('parter-interest')}
        </div>
        <div>
          <Form layout="vertical" form={form}>
            <Form.Item
              label={t('partner-form-first-name')}
              name="firstName"
              rules={[{ required: true }]}
            >
              <Input placeholder={t('partner-form-first-name')} />
            </Form.Item>
            <Form.Item
              label={t('partner-form-last-name')}
              name="lastName"
              rules={[{ required: true }]}
            >
              <Input placeholder={t('partner-form-last-name')} />
            </Form.Item>
            <Form.Item
              label={t('partner-form-email')}
              name="email"
              rules={[
                { type: 'email', message: 'Please input correct email' },
                { required: true, message: 'Please input your email' },
              ]}
            >
              <Input placeholder={t('partner-form-email')} />
            </Form.Item>
            <Form.Item name="entityName" label={t('entity-name')}>
              <Input placeholder={t('entity-name')} />
            </Form.Item>
            <MainButton
              disabled={sent || !hasBeforeInput}
              onClick={handleClick}
            >
              {sent ? t('sent-code') : t('get-code')}
            </MainButton>
            <Form.Item
              label={t('veri-code')}
              name="verify-code"
              rules={[{ required: true, message: 'Please input verify code' }]}
            >
              <div className="flex gap-5 items-center">
                <Input />
              </div>
            </Form.Item>
            <Form.Item className="text-center">
              <Button
                disabled={!enterEnable}
                size="large"
                style={
                  enterEnable
                    ? {
                        backgroundColor: '#F05523',
                        color: '#fff',
                      }
                    : void 0
                }
                className="w-1/2"
                htmlType="submit"
              >
                {t('enter')}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
