import React from 'react'
// react-router-dom
import { HashRouter, Routes, Route } from 'react-router-dom'
// utils
import ScrollTop from './utils/scrollTop'
// pages
import Home from '@pages/Home/index'
import About from './pages/About'
import Partner from '@pages/Home/components/Partner'

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bout" element={<About />} />
            <Route path="/partner" element={<Partner />} />
          </Routes>
        </ScrollTop>
      </HashRouter>
    </div>
  )
}
