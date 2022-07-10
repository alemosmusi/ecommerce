import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./component/home/home";
import Navbar from "./component/navbar/navbar.jsx";
import ProductDetail from "./component/productDetail/productDetail";
import Footer from "./component/footer/footer";
import { Questions } from "./component/question/question";
import GeneralContainer from "./component/CardsFiltered/GeneralContainer";
import "./App.css";
import CarShopContainer from "./component/carShop/Container/CarShopContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/getDetailsProduct/:id"
          element={<ProductDetail />}
        />
        <Route exact path="/questions" element={<Questions />} />
        <Route exact path="/filters" element={<GeneralContainer />} />
        <Route exact path="/c" element={<CarShopContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
