import React from 'react'
// I18
import { I18 } from '@/utils/i18'
// images
import Feedback from '../assets/images/img/icons/Icon-Turnitin Feedback.png'
import Prep from '../assets/images/img/icons/Icon--Leader Prep.png'
import Preparation from '../assets/images/img/icons/icon_phD preparation@3x.png'
import WeChat from '../assets/images/img/icons/WechatIMG1663.png'
// icons
import { RightOutlined } from '@ant-design/icons'
// antd
import { Button } from 'antd'
// react-router-dom
import { Link } from 'react-router-dom'

interface LessonType {
  icon: string
  title: string
  desc: string
  link: string
  smallIcon: boolean
}
type LessonDataType = LessonType[]

const lessonData: LessonDataType = [
  {
    icon: Feedback,
    title: 'lesson-title1',
    desc: 'lesson-desc1',
    link: '/masterclass',
    smallIcon: false,
  },
  {
    icon: Prep,
    title: 'lesson-title2',
    desc: 'lesson-desc2',
    link: '/studyoversea',
    smallIcon: false,
  },
  {
    icon: Preparation,
    title: 'lesson-title3',
    desc: 'lesson-desc3',
    link: '/phdready',
    smallIcon: true,
  },
  {
    icon: WeChat,
    title: 'Become a partner',
    desc: 'lesson-desc4',
    link: '/partner',
    smallIcon: true,
  },
]
export const LessonItem = ({
  icon,
  title,
  desc,
  link,
  isCol,
  roundIcon,
  smallIcon,
}: any) => {
  const { t } = I18()
  return (
    <div className="flex justify-center mt-5 border rounded">
      <div
        className={`flex shadow rounded-lg bg-white ${
          isCol ? 'flex-col md:w-80 items-center' : ''
        }`}
      >
        <div
          style={{
            width: isCol ? '200px' : '410px',
            minWidth: isCol ? '200px' : '200px',
          }}
          className={`hidden md:flex justify-center items-center ${
            isCol ? 'flex justify-center p-5' : 'p-5 border-r'
          }`}
        >
          <img
            width={smallIcon ? '155' : roundIcon ? '140' : '130'}
            src={icon}
            className={`${roundIcon ? 'rounded-full' : ''}`}
            alt=""
          />
        </div>
        <div className={isCol ? 'p-8 pt-2' : 'p-10'}>
          <div className="text-xl font-bold main-color">{title}</div>
          <div>{desc}</div>
          <div className="pt-5">
            <Link to={link}>
              <Button
                style={{ background: '#f05622', color: '#fff' }}
                className="flex items-center"
              >
                {t('read-more')}
                <RightOutlined />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Lesson() {
  const { t } = I18()
  return (
    <div
      style={{ backgroundColor: '#f6f6f6' }}
      className="py-5 flex justify-center"
    >
      <div className="w-5/6 md:max-w-screen-lg">
        {lessonData.map((lessItem, index) => {
          return (
            <LessonItem
              smallIcon
              key={index}
              icon={lessItem.icon}
              title={t(lessItem.title)}
              desc={t(lessItem.desc)}
              link={lessItem.link}
            />
          )
        })}
      </div>
    </div>
  )
}
