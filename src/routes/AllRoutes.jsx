import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Swipers from '../components/swiper/Swiper'
import { Adm } from '../pages/adm/Adm'
import Events from '../pages/events/Events'

import Home from '../pages/Home/Home'

function AllRoutes() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/events' element={<Events />} />
      <Route path='/swiper' element={<Swipers />} />
      <Route path='/adm' element={<Adm />} />
    </Routes>
  )
}

export default AllRoutes