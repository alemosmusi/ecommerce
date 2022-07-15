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


import ListProductsAdmin from "./panelAdmin/listproducts/ListProductsAdmin";
import New from "./panelAdmin/new/New";

import ListClients from "./panelAdmin/listClients/ListClients";
import HomeAdmin from "./panelAdmin/homeAdmin/HomeAdmin";
import ListOrdersAdmin from "./panelAdmin/listOrders/ListOrdersAdmin";
import DetailAdmin from "./panelAdmin/single/DetailAdmin";


import ListOrders from "./panelUser/listOrders/ListOrdenes"



function App() {
  return (
    <div className="container-fluid text-center" >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/productDetails/:id"
          element={<ProductDetail />}
        />
        <Route exact path="/questions" element={<Questions />} />
        <Route exact path="/copyright" element={<Copyright />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/filters" element={<GeneralContainer />} />
        <Route exact path="/carshop" element={<CarShopContainer />} />
        <Route exact path="/infoperfil" element={<InfoProfile />} />
        <Route path="admin">
          {/* <Route index element={<DashBoard />} /> */}
          <Route index element={<HomeAdmin />} />
          <Route path="products/new" element={<New />} />
          <Route path="products" element={<ListProductsAdmin />} />
          <Route path="clients" element={<ListClients />} />
          <Route path="orders" element={<ListOrdersAdmin />} />
          <Route path="profile" element={<DetailAdmin />} />
        </Route>
        ; 
        <Route path="user">
          <Route index element={<ListOrders />} />
          <Route path="orders" element={<ListOrders />} />
       </Route>
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
