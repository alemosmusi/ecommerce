import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getAllDetails,
  CleanStateDetail,
  addCarrito,
} from "../../redux/Actions";
import Loading from "../loading/loading.jsx";
import Footer from "../footer/footer";

export default function ProductDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const details = useSelector((state) => state.ShoesDetails);

  useEffect(() => {
    dispatch(getAllDetails(id));
    dispatch(CleanStateDetail());
  }, [dispatch, id]);

  const [addbag, setaddbag] = useState(1);
  const [heart, setheart] = useState(1);
  const [talle, setTalle] = useState("");

  const AddCar = () => {
    if (addbag < 10) {
      setaddbag(addbag + 1);
    }
  };
  const DecBag = () => {
    if (addbag >= 1) {
      setaddbag(addbag - 1);
    }
  };
  const Heart = () => {
    if (heart) {
      setheart(0);
    } else {
      setheart(1);
    }
  };
  let arrRating = new Array(5).fill(0, 0).map((e, i) => {
    return i < details.rating ? (e = 1) : e;
  });

  const AddCarro = (e) => {
    e.preventDefault();
    dispatch(
      addCarrito({
        ...details,
        size_range: talle,
      })
    );
  };
  const onChane = (e) => {
    e.preventDefault();
    setTalle(e.target.value);
  };

  return (
    <div>
      {Object.values(details).length > 0 ? (
        <div>
          <div className="col-xxl-10 col-xl-6 col-md-9 col-sm-9 mx-auto p-4">
            <div className="card shadow p-2 p-md-4">
              <div className="card-header border-0 bg-white p-0">
                <div className="post-meta">
                  <div className="media d-flex align-items-center justify-content-between">
                    <div className="post-group">
                      <div className="label-top shadow-sm text-white">
                        {details.brand_name}
                      </div>

                      <div className="col-md-9 abc ">
                        <h1>
                          <u className="display-4">{details.name}</u>
                        </h1>
                      </div>
                      <img
                        className="avatar-sm img-fluid rounded-circle"
                        src={details.img}
                        alt={details.name}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body py-4 px-0">
                <div className="dropdown">
                  <div
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    TALLES
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {details.size_range.length ? (
                      details.size_range.map((e, i) => {
                        return (
                          <div>
                            <input
                              type="checkbox"
                              className="checkbox"
                              id={i}
                              key={i}
                              value={e}
                              onChange={(e) => onChane(e)}
                            />
                            <label className="form-check-label">{e}</label>
                          </div>
                        );
                      })
                    ) : (
                      <div>j </div>
                    )}
                  </ul>
                </div>
                {/* <li><a className="dropdown-item" href="#">genero</a></li>
            <li><a className="dropdown-item" href="#">precios</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">algo mas</a></li> */}
                <h4 className="text-secondary bg-light">
                  DETALLES DEL PRODUCTO
                </h4>
                <ul className="list-group list-group-light list-group-small">
                  <li className="list-group border-0 text-start ">
                    <strong>
                      DESCRIPCION:{" "}
                      <small className="fst-normal">{details.details}</small>
                    </strong>
                  </li>
                  <li className="list-group border-0 text-start">
                    <strong>
                      DESIGNER:{" "}
                      <small className="fst-normal">{details.designer}</small>
                    </strong>
                  </li>
                  {/* <li className="list-group border-0 text-start"><p className='fw-bold'>COLOR: <small className='fst-normal'>{details.color}</small></p></li> */}
                  <li className="list-group border-0 text-start">
                    <strong>
                      COLOR:{" "}
                      <small className="fst-normal">{details.color}</small>
                    </strong>
                  </li>
                  <li className="list-group border-0 text-start">
                    <strong>
                      RELEASED:{" "}
                      <small className="fst-normal">{details.released}</small>
                    </strong>
                  </li>
                  <li className="list-group border-0 text-start">
                    <strong>
                      CATEGORIE:{" "}
                      <small className="fst-normal">{details.category}</small>
                    </strong>
                  </li>
                  <li className="list-group border-0 text-start">
                    <strong>
                      GENDER:{" "}
                      <small className="fst-normal">{details.genders[0]}</small>
                    </strong>
                  </li>
                </ul>
              </div>
              {/* </div> */}
              <div className="card-footer bg-white pb-0 px-0">
                <div className="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between">
                  <div className="card-end d-flex justify-content-between">
                    {/* Rating */}
                    <div className="d-flex flex-row user-ratings">
                      <div className="ratings">
                        {arrRating &&
                          arrRating?.map((s, i) => (
                            <i
                              key={i}
                              className={`fa ${
                                s === 1 ? "fa-star" : "fa-star grey"
                              } `}
                            ></i>
                          ))}
                      </div>
                      <h6 className="text-muted ml-1">{details.rating}/5</h6>
                    </div>
                    {/* Heart */}
                    <small className="float-end ">
                      <i
                        onClick={Heart}
                        className={`${heart ? "far" : "fa"} fa-heart`}
                      ></i>
                    </small>

                    <button
                      className="btn btn-warning bold-btn"
                      onClick={(e) => AddCarro(e)}
                    >
                      <i className="fa-thin fa-cart-plus"></i>add to cart
                    </button>
                  </div>
                  <span className="float-start badge rounded-pill bg-success">
                    {details.price}$
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      {/* <Footer/> */}
    </div>
  );
}
