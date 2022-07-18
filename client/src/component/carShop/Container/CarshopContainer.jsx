import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { createOrden, getAllShoes } from '../../../redux/actions'

import Total from '../Total/Total'
import ProductsContainer from '../Products/Products'
import { getCarritoFromStorage } from '../../../redux/reducer/getLocalstorage'

import './CarshopContainer.scss'

export default function CarShopContainer() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCarritoFromStorage())
  }, [dispatch])

  let carProducts = useSelector(state => state.Carrito)
  const userDetails = useSelector(store => store.UserLog)

  // let localCarrito = JSON.parse(localStorage.getItem("username"));

  // console.log("localcarrito", localCarrito);
  // console.log(`Carrito en JSON ${localStorage.getItem("username")}`);
  // carProducts = carProducts.length
  //   ? carProducts
  //   : localCarrito && localCarrito.carrito && localCarrito.carrito?.length
  //   ? localCarrito?.carrito
  //   : [];
  // console.log(carProducts);

  const totalProducts = carProducts.map(product => product.amount).reduce((prev, curr) => prev + curr, 0)
  const totalPrice = carProducts.map(product => product.price * product.amount).reduce((prev, curr) => prev + curr, 0)

  useEffect(() => {
    dispatch(getAllShoes())
  }, [dispatch])

  const handleBuy = () => {
    if (!isAuthenticated) return loginWithRedirect

    const details = carProducts.map(obj => {
      return {
        productID: obj.id,
        size: obj.size,
        amount: obj.amount,
        priceUnit: obj.price,
        priceTotal: obj.price * obj.amount,
      }
    })

    const orden = {
      details,
      price_total: totalPrice,
      amount_total: totalProducts,
    }

    dispatch(createOrden(orden, userDetails.id))
  }

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
        <div className="d-flex flex-column right">
          <Total totalProducts={totalProducts} totalPrice={totalPrice} />
          <button className="mx-auto p-3 px-5 btn btn-success" onClick={() => handleBuy()}>
            PAGAR
          </button>
        </div>
      </div>
    </div>
  )
}
