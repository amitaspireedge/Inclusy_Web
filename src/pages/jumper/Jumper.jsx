import React from 'react'
import JumperDocument from './JumperDocument'
import ExploreJumper from './ExploreJumper'
import EngagementJumper from './EngagementJumper'
import ProfileJumper from './ProfileJumper'
import SettingJumper from './SettingJumper'
import { Outlet, Route, Routes } from 'react-router-dom'
import PageNotFount from '../PageNotFount'

export default function Jumper() {
  
  return (
    <>
    <Routes>
      <Route path='/explore' element={<ExploreJumper />} /> 
      <Route path='/upload-document' element={<JumperDocument/>} />
      <Route path='/profile/*' element={<ProfileJumper/>} />
      <Route path='/engagement' element={<EngagementJumper/>} />
      <Route path='/setting/*' element={<SettingJumper/>} />
      <Route path='/*' element={<PageNotFount/>}/>
    </Routes>
    <Outlet/>
    </>
  )
}
