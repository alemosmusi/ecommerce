import { useState } from "react";
import Card from "../cardProduct/CardProduct";
const style = {
  padding: "0 5% 0 5%",
};
export default function Cards({ shoes }) {
  shoes = shoes.slice(0, 4);
  return (
    <div className="container-fluid" style={style}>
      <div className="row m-2">
        <h1>OUR PRODUCTS</h1>
      </div>
      <div className="row">
        {shoes &&
          shoes?.map((s) => (
            <div key={s.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card
                key={s.id}
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
                gender={s.genders}
                designer={s.designer}
                details={s.details}
                shoe_condition={s.shoe_condition}
                rating={s.rating}
                categories={s.categories}
                id={s.id}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
