import React from 'react'
import {  Route, Routes, useLocation } from 'react-router-dom'

import Homecomponent from './components/homecompont/home'


import Caravancomponents from './components/caravan'

import Motor from './components/motor'
import Tuningcomponent from './components/tuning'
import Usedcarcomponent from './components/usedcar'

import Detailmotors from './components/motors/detail'
import DetailVmotors from './components/motors/vDetail'
import Detailtuning from './components/tuning/detail'
import DetailVtuning from './components/tuning/vDetail'
import Detailusedcar from './components/usedcar/detail'
import DetailVusedcar from './components/usedcar/vDetail'
import Detailcaravan from './components/caravan /detail'
import DetailVcaravan from './components/caravan /vDetail'
import Logincomponent from './components/login/login'
import Singupcomponent from './components/login/singup'
import Campingcomponent from './components/camping/camping'
import Campingdetail from './components/camping/campingdetail'
import KakaoMap from './components/map/kakaomap'
import Navbarcomponents from './components/navbar'
import Footercomponents from './components/footer'


const Routercomponent = () => {
  const location = useLocation(); 
  const hideNavbarFooter = location.pathname === '/' || location.pathname === '/sing-up';

  return (<>
    <>
    {!hideNavbarFooter && <Navbarcomponents />}
    
    <Routes>
      <Route path='/homepage' element={<Homecomponent/>}/>
      <Route path='/motor' element={<Motor/>}/>
      <Route path='/caravan' element={<Caravancomponents/>}/>
      <Route path='/tuning' element={<Tuningcomponent/>}/>
      <Route path='/usedcar' element={<Usedcarcomponent/>}/>
      <Route path='/camping' element={<Campingcomponent/>}/>
      <Route path='/motor-detail/:id' element={<Detailmotors/>}/>
      <Route path='/motor-detail/:id' element={<DetailVmotors/>}/>
      <Route path='/tuning-detail/:id' element={<Detailtuning/>}/>
      <Route path='/tuning-detail/:id' element={<DetailVtuning/>}/>
      <Route path='/used-car-detail/:id' element={<Detailusedcar/>}/>
      <Route path='/used-car-detail/:id' element={<DetailVusedcar/>}/>
      <Route path='/caravan-detail/:id' element={<Detailcaravan/>}/>
      <Route path='/caravan-detail/:id' element={<DetailVcaravan/>}/>
      <Route path='/' element={<Logincomponent/>}/>
      <Route path='/sing-up' element={<Singupcomponent/>}/>
      <Route path='/camping-place/:id' element={<Campingdetail/>}/>
      <Route path='/contact' element={<KakaoMap/>}/>
          </Routes>
          {!hideNavbarFooter && <Footercomponents />}

   </>
    
    </>
  )
}

export default Routercomponent