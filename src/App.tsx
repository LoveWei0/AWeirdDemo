import React from 'react'
// react-router-dom
import { HashRouter } from 'react-router-dom'
// utils
import ScrollTop from './utils/scrollTop'

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollTop>App</ScrollTop>
      </HashRouter>
    </div>
  )
}
