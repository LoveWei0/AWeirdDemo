import React from 'react'
// antd
import { Button } from 'antd'
// react-router-dom
import { Link } from 'react-router-dom'
// utils -> I18
import { I18 } from '@utils/i18'
// icons
import { RightOutlined } from '@ant-design/icons'

interface TitleType {
  title: string
  pathName: string
}

export default function ButtonCard({ title, pathName }: TitleType) {
  const t = I18()
  return (
    <Button type="link" className="flex">
      <Link
        to={pathName}
        style={{ color: '#f05622' }}
        className="sm:text-sm lg:text-xl flex justify-center items-center gap-2 font-bold"
      >
        {t(title)}
        <RightOutlined />
      </Link>
    </Button>
  )
}
