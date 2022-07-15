import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShoes } from "../../../redux/actions";
import Total from "../Total/Total";
import ProductsContainer from "../Products/Products";
import "./CarshopContainer.css";

export default function CarShopContainer() {
  const dispatch = useDispatch();
  let carProducts = useSelector((state) => state.Carrito);
  let localCarrito = JSON.parse(localStorage.getItem("username"));
  // console.log(
  //   `El carrito local parseado ${JSON.stringify(localCarrito)} length: ${
  //     localCarrito.carrito.length
  //   }, array?==> ${Array.isArray(localCarrito.carrito)}`
  // );
  console.log("localcarrito", localCarrito);
  console.log(`Carrito en JSON ${localStorage.getItem("username")}`);
  carProducts = carProducts.length
    ? carProducts
    : localCarrito && localCarrito.carrito && localCarrito.carrito?.length
    ? localCarrito?.carrito
    : [];
  console.log(carProducts);
  // console.log("nuevo producto:", JSON.stringify(carProducts));
  // const [localCar, setLocalCar] = useLocalStorage("username", "xd");
  // setLocalCar(carProducts);
  // setLocalCar(carProducts);
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

  useEffect(() => {
    dispatch(getAllShoes());
  }, [dispatch]);

  return (
    <div className="App container-fluid">
      <h1>CAR SHOP</h1>
      <div className="Container">
        <ProductsContainer
          carProducts={carProducts}
          // localCar={localCar}
          // setLocalCar={setLocalCar}
        />
        <Total totalProducts={totalProducts} totalPrice={totalPrice} />
      </div>
    </div>
  );
}
