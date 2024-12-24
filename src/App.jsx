import React from 'react'
import Jumper from './pages/jumper/Jumper'
import Login from './pages/Login'
import Registration from './pages/Registration'
import LandingPage from './pages/LandingPage'
import ScrollToTop from '../src/services/ScrollToTop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFount from './pages/PageNotFount'

export default function App() {
  return (
    <Router>
      <ScrollToTop>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login/:user' element={<Login/>}/>
        <Route path='/register/:user' element={<Registration/>}/>
        <Route path='/jumper/*' element={<Jumper/>}/>
        <Route path='/*' element={<PageNotFount/>} />
      </Routes>
      </ScrollToTop>
    </Router>
  )
}

