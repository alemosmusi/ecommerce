import { useState } from "react";
import "./Card.css";
let s = {
  box_condition: "good_condition",
  brand_name: "Air Jordan",
  category: ["basketball"],
  collection_slugs: [
    "air-jordan-1",
    "goat-clean",
    "jordan",
    "jordan-1",
    "rose-bowl-flea-market",
    "the-ones-that-started-it-all",
  ],
  color: "Black",
  designer: "Peter Moore",
  details: "Black/White-Medium Grey",
  gender: ["men"],
  grid_picture_url:
    "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
  has_picture: true,
  has_stock: true,
  id: 218099,
  keywords: [],
  main_picture_url:
    "https://image.goat.com/750/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
  midsole: "Air",
  name: "Air Jordan 1 Retro High OG 'Shadow' 2018",
  nickname: "Shadow",
  original_picture_url:
    "https://image.goat.com/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
  product_template_id: 218099,
  release_date: "2018-04-14T23:59:59.000Z",
  release_date_unix: 1523750399,
  release_year: 2018,
  retail_price_cents: 16000,
  shoe_condition: "used",
  silhouette: "Air Jordan 1",
  size_range: [
    10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17,
    17.5, 18, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5,
  ],
  sku: "555088 013",
  slug: "air-jordan-1-retro-high-og-shadow-2018-555088-013",
  status: "active",
  story_html:
    "<p>This Nike Air Jordan 1 Retro High OG &#39;Shadow&#39; 2018 is a retro re-release of an original 1985 colorway. The shoe features a black and medium grey leather upper with a white midsole and black outsole. It also features OG Nike Air branding on the tongue and the Wings logo on the ankle collar. It was last retroed in 2013, and a low-top version dropped in 2015.</p>\n",
  upper_material: "Leather",
};

console.log(s["color"]);
export default function Card({
  id = s.id,
  name = s.name,
  image = s.main_picture_url,
  category = s.category[0],
  description = s.story_html,
  gender = s.gender[0],
  price = s.retail_price_cents,
  color = s.color,
  details = s.details,
  stock = s.has_stock,
  material = s.upper_material,
}) {
  const [addbag, setaddbag] = useState(1);
  const [heart, setheart] = useState(1);

  const AddBag = () => {
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

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="top_part">
            <div className="circle">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <small>
              <i
                onClick={Heart}
                className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}
              ></i>
            </small>
          </div>
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <div className="vitamin">
            {name}
            <div className="rating">
              <input type="radio" name="rating" value="5" id="5" />
              <label htmlFor="5">☆</label>
              <input type="radio" name="rating" value="4" id="4" />
              <label htmlFor="4">☆</label>
              <input type="radio" name="rating" value="3" id="3" />
              <label htmlFor="3">☆</label>
              <input type="radio" name="rating" value="2" id="2" />
              <label htmlFor="2">☆</label>
              <input type="radio" name="rating" value="1" id="1" />
              <label htmlFor="1">☆</label>
            </div>
          </div>
          <div className="reviews">
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <u>144 Views</u>
          </div>
          <div className="size">
            <p>with Hyaluronic acid and Vitamin E</p>
            <h5>Size : 1 FL Oz</h5>
          </div>
          <div className="buttons">
            <button>
              1 FL Oz<p>1 option from $23</p>
            </button>
            <button>
              2 FL Oz<p>$43($21/FL Oz)</p>
            </button>
          </div>
          <h4>Select Gender</h4>
          <div className="gender">{gender}</div>
          <div className="last_buttons">
            <div className="qty_btn">
              <i onClick={DecBag} className="fa fa-minus"></i>
              <p>{addbag}</p>
              <i onClick={AddBag} className="fa fa-plus"></i>
            </div>
            <div className="money_bag">
              <h3>$23</h3>
              <button onClick={AddBag}>
                <i className="fa fa-shopping-bag"></i>Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
