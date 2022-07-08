import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./component/home/home";
import Card from "./component/Card/card";
import Navbar from "./component/navbar/navbar";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/card" element={<Card />} />
        <Route exact path="/navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
