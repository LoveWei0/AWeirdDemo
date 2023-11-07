import React from 'react'
// components
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// antd
import { Form, Input, Button } from 'antd'
// I18
import { I18 } from '@utils/i18'

const { TextArea } = Input

export default function Contact() {
  const [form] = Form.useForm()
  const { t } = I18()
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10 w-full">
        <div className="shadow w-full max-w-xl rounded p-10 mb-10">
          <div className="text-3xl font-bold main-color mb-5">
            {t('contact-title')}
          </div>
          <div>
            <Form form={form} layout="vertical">
              <Form.Item
                label={t('contact-form-name')}
                name="name"
                rules={[{ required: true }]}
              >
                <Input placeholder={t('contact-form-name')} />
              </Form.Item>
              <Form.Item
                label={t('contact-form-email')}
                name="email"
                rules={[{ required: true }]}
              >
                <Input placeholder={t('contact-form-email')} />
              </Form.Item>
              <Form.Item>
                <TextArea placeholder={t('contact-form-feedback')} />
              </Form.Item>
              <div></div>
              <Form.Item className="">
                <Button
                  className="w-1/3"
                  htmlType="submit"
                  size="large"
                  style={{ backgroundColor: '#F05523' }}
                >
                  {t('submit')}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="shadow w-full max-w-xl rounded p-10 mb-10 ">
          <div className="text-3xl font-bold main-color mt-10 mb-5">
            {t('contact-weChat-title')}
          </div>
          <div>
            <img src={'/images/qr/wechat.jpeg'} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
