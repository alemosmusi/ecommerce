import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCarrito } from '../../redux/actions'
import './Card.css'

export default function Card({ id, name, img, price, color, size_range, details, rating, stock, gender, brand_name }) {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(1)
  const [heart, setheart] = useState(1)

  const AddCar = () => {
    // if (addbag < 10) {
    //   setaddbag(addbag + 1);
    // }
    dispatch(
      addCarrito({
        id,
        name,
        brand_name,
        price,
        img,
        stock,
        color,
        size_range,
        gender,
        rating,
        amount,
      })
    )
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
            <Link to={`/getDetailsProduct/` + id}>
              <img src={img} className="card-img-top" alt="product.title" />
            </Link>

            <div className="label-top shadow-sm text-white">{brand_name}</div>

            <div className="card-body">
              <div className="clearfix mb-3">
                <span className="float-start badge rounded-pill bg-success">{price}$</span>

                <span className="float-end">
                  <Link to={`/getDetailsProduct/` + id} className="small text-muted text-uppercase aff-link">
                    See Details
                  </Link>
                </span>
              </div>
              <h5 className="card-title">{name}</h5>
              {/* <h4>Gender</h4>
              <div className="gender">
                <span>{gender}</span>
              </div> */}
              <div className="d-grid gap-2 my-4" onClick={AddCar}>
                <button className="btn btn-warning bold-btn">
                  <i className="fa-thin fa-cart-plus"></i>add to cart
                </button>
              </div>

              <div className="card-end d-flex justify-content-between">
                {/* Rating */}
                <div className="d-flex flex-row user-ratings">
                  <div className="ratings">
                    {arrRating &&
                      arrRating?.map((s, i) => (
                        <i key={i} className={`fa ${s === 1 ? 'fa-star' : 'fa-star grey'} `}></i>
                      ))}
                  </div>
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
      </div>
    </>
  )
}
