import React from 'react'
// react-router-dom
import { HashRouter, Routes, Route } from 'react-router-dom'
// utils
import ScrollTop from './utils/scrollTop'
// pages
import Home from '@pages/Home/index'
import About from './pages/About'

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bout" element={<About />} />
          </Routes>
        </ScrollTop>
      </HashRouter>
    </div>
  )
}
