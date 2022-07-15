import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProductCarrito } from "../../../redux/actions";
import { Link } from "react-router-dom";
import FormAmount from "./FormAmount";

import "./CardShop.css";

export default function CardShop({
  key_value,
  id,
  nickname,
  price,
  img,
  stock,
  size,
  rating,
  brand,
  color,
  gender,
  amount,
}) {
  let arrRating = new Array(5).fill(0, 0).map((e, i) => {
    return i < rating ? (e = 1) : e;
  });

  const [heart, setheart] = useState(1);
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteProductCarrito(key_value));
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
        <Link to={`/productDetails/` + id}>
          <img src={img} alt={nickname} />
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
        <Link to={`/productDetails/` + id}>
          <h4>{nickname}</h4>
        </Link>
        <div className="amount">
          <label> Cantidad:</label>
          <FormAmount
            amountP={amount}
            key_value={key_value}
            dispatch={dispatch}
          />
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
          {color.name}
        </div>
        <div className="title">
          <p>Genero: </p>
          {gender.name}
        </div>
        <div className="title">
          <p>Marca: </p> {brand.name}
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
