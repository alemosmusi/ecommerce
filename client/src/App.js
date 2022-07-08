import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./component/home/home";
import Card from "./component/Card/Card";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
