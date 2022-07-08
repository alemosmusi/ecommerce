import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/home/home';
import Navbar from './component/navbar/navbar.jsx'
function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;