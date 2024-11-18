import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbarcomponents from './components/navbar'
import Homecomponent from './components/homecompont/home'
import Footercomponents from './components/footer'

import Caravancomponents from './components/caravan'

import Motor from './components/motor'
import Tuningcomponent from './components/tuning'
import Usedcarcomponent from './components/usedcar'
import Campingcomponent from './components/camping'
import Detailmotors from './components/motors/detail'
import DetailVmotors from './components/motors/vDetail'
import Detailtuning from './components/tuning/detail'
import DetailVtuning from './components/tuning/vDetail'
import Detailusedcar from './components/usedcar/detail'
import DetailVusedcar from './components/usedcar/vDetail'
import Detailcaravan from './components/caravan /detail'
import DetailVcaravan from './components/caravan /vDetail'


const Routercomponent = () => {
  return (
    <BrowserRouter>
    <Navbarcomponents/>
    <Routes>
      <Route path='/' element={<Homecomponent/>}/>
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
          </Routes>
    <Footercomponents/>
    </BrowserRouter>
  )
}

export default Routercomponent