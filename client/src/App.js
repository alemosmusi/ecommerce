import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/home/home';
import Navbar from './component/navbar/navbar.jsx'
import Footer from './component/footer/footer';
import { Questions } from './component/question/question';
import Copyright from './component/copyright/copyright';
import Terms from './component/terms/terms';

function App() {
  
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/questions' element={<Questions/>}/>
        <Route exact path='/copyright' element={<Copyright/>}/>
        <Route exact path='/terms' element={<Terms/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;