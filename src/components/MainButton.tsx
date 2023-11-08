import React from 'react'
// antd
import { Button } from 'antd'

export default function MainButton({ children, ...props }: any) {
  return (
    <Button
      className="bg-white lg:w-auto flex items-center"
      {...props}
      style={
        props.disabled
          ? {}
          : { background: '#f05622', color: '#fff', border: 'none' }
      }
    >
      {children}
    </Button>
  )
}
