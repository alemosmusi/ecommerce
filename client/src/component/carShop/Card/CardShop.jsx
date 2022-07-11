import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProductCarrito } from "../../../redux/actions";
import { Link } from "react-router-dom";
import FormAmount from "./FormAmount";

import "./CardShop.css";
export default function CardShop({
  id,
  name,
  brand_name,
  price,
  img,
  color,
  size_range,
  gender,
  rating,
  amount,
}) {
  let arrRating = new Array(5).fill(0, 0).map((e, i) => {
    return i < rating ? (e = 1) : e;
  });

  const [heart, setheart] = useState(1);
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteProductCarrito(id));
  }
  const Heart = () => {
    if (heart) {
      setheart(0);
    } else {
      setheart(1);
    }
  };

  return (
    <div className="container-fluid Card">
      <div className="image">
        <Link to={`/getDetailsProduct/` + id}>
          <img src={img} alt={name} />
        </Link>
        <div className="ratings">
          {arrRating &&
            arrRating?.map((s, i) => (
              <i
                key={i}
                className={`fa ${s === 1 ? "fa-star" : "fa-star grey"} `}
              ></i>
            ))}
        </div>
      </div>
      <div className="middleDetails">
        <Link to={`/getDetailsProduct/` + id}>
          <h4>{name.split("'")[1]}</h4>
        </Link>
        <div className="amount">
          <label> Cantidad:</label>

          <FormAmount amountP={amount} id={id} dispatch={dispatch} />
        </div>

        <div className="actions">
          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={() => handleDelete()}
          >
            Eliminar
          </i>

          <i onClick={Heart} className={`${heart ? "far" : "fa"} fa-heart`}>
            Favoritos
          </i>
        </div>
      </div>
      <div className="endDetails">
        <div className="title">
          <p>Color: </p>
          {color}
        </div>
        <div className="title">
          <p>Genero: </p>
          {gender}
        </div>
        <div className="title">
          <p>Marca: </p> {brand_name}
        </div>
      </div>
      <div className="prices">
        <div className="number">
          Precio Unitario:
          <p className="number">$./{price}</p>
        </div>
        <div className="numberTotal">
          Precio Total:
          <p>$./{price * amount}</p>
        </div>
      </div>
    </div>
  );
}
