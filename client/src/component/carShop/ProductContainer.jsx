import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../cardProduct/CardProduct";

import "./CarShop.css";

export default function CardsFiltered() {
  const carProducts = useSelector((state) => state.Filters);
  return (
    <div className="App">
      <div className="topPagination">
        <div className="Title">CAR SHOP</div>
      </div>
      <div
        className="container-fluid overflow-auto"
        style={{ height: "800px", width: "900px" }}
      >
        <div className="row">
          {carProducts && carProducts.length ? (
            carProducts?.map((s) => (
              <div
                key={s.id}
                className="col-12"
                style={{
                  minwidth: "300px",
                  // maxwidth: "350px",
                  maxheight: "120px",
                }}
              >
                <Card
                  key={s.id}
                  id={s.id}
                  name={s.name}
                  brand_name={s.brand_name}
                  description={s.description}
                  price={s.price}
                  img={s.img}
                  stock={s.stock}
                  color={s.color}
                  size_range={s.size_range}
                  material={s.material}
                  released={s.released}
                  gender={s.gender}
                  designer={s.designer}
                  details={s.details}
                  shoe_condition={s.shoe_condition}
                  rating={s.rating}
                  categories={s.categories}
                />
              </div>
            ))
          ) : (
            <h1>No hay coincidencias</h1>
          )}
        </div>
      </div>
    </div>
  );
}
