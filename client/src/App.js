import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;