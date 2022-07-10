import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './component/home/home'
import Navbar from './component/navbar/navbar.jsx'
import ProductDetail from './component/productDetail/productDetail'
import Footer from './component/footer/footer'
import { Questions } from './component/question/question'

// import GeneralContainer from './component/cardsFiltered/GeneralContainer'

import Copyright from './component/copyright/copyright'
import Terms from './component/terms/terms'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/getDetailsProduct/:id" element={<ProductDetail />} />
        <Route exact path="/questions" element={<Questions />} />
        <Route exact path="/copyright" element={<Copyright />} />
        <Route exact path="/terms" element={<Terms />} />
        {/* <Route exact path="/filters" element={<GeneralContainer />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
