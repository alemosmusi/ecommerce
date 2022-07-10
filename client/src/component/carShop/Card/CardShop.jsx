import { useState } from "react";
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
}) {
  let arrRating = new Array(5).fill(0, 0).map((e, i) => {
    return i < rating ? (e = 1) : e;
  });

  const [heart, setheart] = useState(1);
  const Heart = () => {
    if (heart) {
      setheart(0);
    } else {
      setheart(1);
    }
  };
  const [numberProducts, setNumberProducts] = useState(1);
  function handleOnchange(e) {
    e.preventDefault();
    setNumberProducts(e.target.value);
  }
  return (
    <div className="container-fluid General">
      <div className="image">
        <img src={img} alt={name} />
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
        <h4>{name.split("'")[1]}</h4>
        <div className="amount">
          <label> Cantidad:</label>
          <input
            type="text"
            value={numberProducts}
            onChange={(e) => handleOnchange(e)}
            className="input"
          />
        </div>

        <div className="actions">
          <i class="fa fa-trash" aria-hidden="true">
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
          Precio Unitario:
          <p>$./{price * numberProducts}</p>
        </div>
      </div>
    </div>
  );
}
