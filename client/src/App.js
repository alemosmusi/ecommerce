import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./component/home/home";
import Navbar from "./component/navbar/navbar.jsx";
import Footer from "./component/footer/footer";
import { Questions } from "./component/question/question";
import GeneralContainer from "./component/CardsFiltered/GeneralContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/questions" element={<Questions />} />
        <Route exact path="/filters" element={<GeneralContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
