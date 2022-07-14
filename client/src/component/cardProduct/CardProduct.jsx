import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCarrito } from '../../redux/actions'
import './Card.css'

export default function Card({ id, name, img, price, color, size_range, details, rating, stock_total, gender, brand }) {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(1)
  const [heart, setheart] = useState(1)
  const [añadido, setAñadido] = useState(false)

  const AddCar = () => {
    // if (addbag < 10) {
    //   setaddbag(addbag + 1);
    // }
    dispatch(
      addCarrito({
        id,
        name,
        brand,
        price,
        img,
        stock_total,
        color,
        size_range,
        gender,
        rating,
        amount,
      })
    )
    setAñadido(true)
    setTimeout(() => {
      setAñadido(false)
    }, 2000)
  }
  const DecBag = () => {
    if (amount >= 1) {
      setAmount(amount - 1)
    }
  }
  const Heart = () => {
    if (heart) {
      setheart(0)
    } else {
      setheart(1)
    }
  }
  let arrRating = new Array(5).fill(0, 0).map((e, i) => {
    return i < rating ? (e = 1) : e
  })

  return (
    <>
      <div className="container-fluid bg-trasparent my-4 p-3" style={{ position: 'relative' }}>
        {/* <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"> */}
        <div className="col hp">
          <div className="card h-100 shadow-sm">
            <Link to={`/productDetails/` + id}>
              <img src={img} className="card-img-top" alt="product.title" />
            </Link>

            <div className="label-top shadow-sm text-white">{brand}</div>

            <div className="card-body">
              <div className="clearfix mb-3">
                <span className="float-start badge rounded-pill bg-success">{price}$</span>

                <span className="float-end">
                  <Link to={`/productDetails/` + id} className="small text-muted text-uppercase aff-link">
                    See Details
                  </Link>
                </span>
              </div>
              <h5 className="card-title">{name}</h5>
              <div className="gender">
                <h6>Gender:</h6>
                <span>{gender}</span>
              </div>
              <div className="d-grid gap-2 my-4" onClick={AddCar}>
                <button className="btn btn-warning bold-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>{' '}
                  add to cart
                </button>
              </div>

              <div className="card-end d-flex justify-content-between">
                {/* Rating */}
                <div className="d-flex flex-row user-ratings">
                  <div className="ratings">{arrRating && arrRating?.map((s, i) => <i key={i} className={`fa ${s === 1 ? 'fa-star' : 'fa-star grey'} `}></i>)}</div>
                  <h6 className="text-muted ml-1">{rating}/5</h6>
                </div>
                {/* Heart */}
                <small className="float-end ">
                  <i onClick={Heart} className={`${heart ? 'far' : 'fa'} fa-heart`}></i>
                </small>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {!!añadido === false ? (
          <p> </p>
        ) : (
          <div className="alert alert-dark" role="alert">
            Se añadió el producto a carrito
          </div>
        )}
      </div>
    </>
  )
}
