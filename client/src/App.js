import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./component/home/home";
import Navbar from "./component/navbar/navbar.jsx";
import ProductDetail from "./component/productDetail/productDetail";
import Footer from "./component/footer/footer";
import { Questions } from "./component/question/question";
import Copyright from "./component/copyright/copyright";

import Terms from "./component/terms/terms";
import CarShopContainer from "./component/carShop/Container/CarshopContainer";
import GeneralContainer from "./component/cardFilters/GeneralContainer";
import { InfoProfile } from "./component/infoProfile/infoProfile";

import ListProducts from "./panelAdmin/listproducts/ListProducts";
import New from "./panelAdmin/new/New";
function App() {
  return (
    <div className="container-fluid text-center">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/getDetailsProduct/:id"
          element={<ProductDetail />}
        />
        <Route exact path="/questions" element={<Questions />} />
        <Route exact path="/copyright" element={<Copyright />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/filters" element={<GeneralContainer />} />
        <Route exact path="/carshop" element={<CarShopContainer />} />
        <Route exact path="/infoperfil" element={<InfoProfile />} />
        <Route path="admin">
          <Route index element={<ListProducts />} />
          <Route path="products" element={<ListProducts />} />
          <Route path="products/new" element={<New />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
