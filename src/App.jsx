import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/services' element={<Services />}></Route>
        <Route exact path='/portfolio' element={<Portfolio />}></Route>
        <Route exact path='/contact-us' element={<Contact />}></Route>

        <Route path='/*' element={<Error />}></Route>
      </Routes>

    </div>
  )
}

export default App