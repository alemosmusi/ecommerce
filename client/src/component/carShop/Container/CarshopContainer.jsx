import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllShoes } from "../../../redux/actions";
import Total from "../Total/Total";
import ProductsContainer from "../Products/Products";
import "./CarshopContainer.css";

export default function CarShopContainer() {
  const dispatch = useDispatch();

  let carProducts = useSelector((state) => state.Carrito);
  // let totalProducts =
  //   carProducts && carProducts.length
  //     ? carProducts.reduce((a, b) => {
  //         return a.amount + b.amount;
  //       })
  //     : 0;
  const totalProducts = carProducts
    .map((product) => product.amount)
    .reduce((prev, curr) => prev + curr, 0);
  // let totalPrice =
  //   carProducts && carProducts.length
  //     ? carProducts.reduce((a, b) => {
  //         return a.amount * a.price + b.amount * b.price;
  //       })
  //     : 0;
  const totalPrice = carProducts
    .map((product) => product.price * product.amount)
    .reduce((prev, curr) => prev + curr, 0);


    dispatch(getAllShoes());
  }, [dispatch]);

  return (
    <div className="App container-fluid">
      <h1>CAR SHOP</h1>
      <div className=" d-flex Container">
        <ProductsContainer carProducts={carProducts} />
        <Total totalProducts={totalProducts} totalPrice={totalPrice} />
      </div>
    </div>
  );
}
