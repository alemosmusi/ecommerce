import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShoes } from "../../../redux/actions";
import Total from "../Total/Total";
import ProductsContainer from "../Products/Products";
import "./CarshopContainer.scss";
import { getCarritoFromStorage } from "../../../redux/reducer/getLocalstorage";

export default function CarShopContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarritoFromStorage());
  }, [dispatch]);
  let carProducts = useSelector((state) => state.Carrito);
  // let localCarrito = JSON.parse(localStorage.getItem("username"));

  // console.log("localcarrito", localCarrito);
  // console.log(`Carrito en JSON ${localStorage.getItem("username")}`);
  // carProducts = carProducts.length
  //   ? carProducts
  //   : localCarrito && localCarrito.carrito && localCarrito.carrito?.length
  //   ? localCarrito?.carrito
  //   : [];
  // console.log(carProducts);
  const totalProducts = carProducts
    .map((product) => product.amount)
    .reduce((prev, curr) => prev + curr, 0);

  const totalPrice = carProducts
    .map((product) => product.price * product.amount)
    .reduce((prev, curr) => prev + curr, 0);

  useEffect(() => {
    dispatch(getAllShoes());
  }, [dispatch]);

  return (
    <div className="carshop container-fluid">
      <div className="top">
        <h1>CAR SHOP</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <ProductsContainer carProducts={carProducts} />
          {/* {carProducts && carProducts.length ? (
            carProducts?.map((s) => (
              <div key={s.key_value}>
                <CardShop
                  key_value={s.key_value}
                  id={s.id}
                  nickname={s.nickname}
                  price={s.price}
                  img={s.img}
                  rating={s.rating}
                  brand={s.brand}
                  stock={s.stock}
                  color={s.color}
                  gender={s.gender}
                  size_range={s.size_range}
                  amount={s.amount}
                  // material={s.material}
                  // released={s.released}
                  // designer={s.designer}
                  // details={s.details}
                  // shoe_condition={s.shoe_condition}
                  // categories={s.categories}
                />
                <hr />
              </div>
            ))
          ) : (
            <h1 className="text">El carrito está vacío</h1>
          )} */}
        </div>
        <div className="right">
          <Total totalProducts={totalProducts} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
}
