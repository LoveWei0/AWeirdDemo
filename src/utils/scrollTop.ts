import { useEffect } from 'react'
// react-router-dom
import { useLocation } from 'react-router-dom'

const ScrollTop = (props: any) => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}

export default ScrollTop
