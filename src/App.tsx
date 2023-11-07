import React from 'react'
// react-router-dom
import { HashRouter, Routes, Route } from 'react-router-dom'
// utils
import ScrollTop from './utils/scrollTop'
// pages
import Home from '@pages/Home/index'
import About from '@pages/Home/components/About'
import Contact from '@pages/Home/components/Contact'
import Feedback from '@pages/Home/components/Feedback'
import Partner from '@pages/Home/components/Partner'
import Privacy from '@pages/Home/components/Privacy'
import Subscribe from '@pages/Home/components/Subscribe'
import Terms from '@pages/Home/components/Terms'
import PhdReady from '@pages/Home/components/PhdReady'
import Masterclass from '@pages/Home/components/Masterclass'
import StudyOversea from '@pages/Home/components/StudyOversea'

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/phdReady" element={<PhdReady />} />
            <Route path="/masterclass" element={<Masterclass />} />
            <Route path="/studyOversea" element={<StudyOversea />} />
          </Routes>
        </ScrollTop>
      </HashRouter>
    </div>
  )
}
