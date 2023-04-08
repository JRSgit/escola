import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'

import AllRoutes from './routes/AllRoutes'

function App() {


  return (
    <BrowserRouter>
      {/* <Header /> */}
      <AllRoutes />
    </BrowserRouter>
  )
}

export default App
