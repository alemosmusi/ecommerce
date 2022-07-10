import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShoes } from "../../../redux/Actions/actions";
import ProductsContainer from "../Products/ProductsContainer";
import Total from "../Total/Total";
import "./CarShopContainer.css";

import { useState } from "react";

export default function CarShopContainer() {
  const dispatch = useDispatch();
  const [prices, setPrices] = useState({
    amount: 0,
    totalPrice: 0,
  });
  let carProducts = useSelector((state) => state.Shoes);

  useEffect(() => {
    dispatch(getAllShoes());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>CAR SHOP</h1>
      <div className="container-fluid d-flex p-0 Container">
        <div className="Products">
          <ProductsContainer carProducts={carProducts} setPrices={setPrices} />
        </div>
        <div className="Total">
          <Total prices={prices} />
        </div>
      </div>
    </div>
  );
}
