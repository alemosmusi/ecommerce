import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShoes } from "../../redux/Actions/actions";

const style = {
  margin: "5px 0 0 0",
};
export default function CarShopContainer() {
  const dispatch = useDispatch();

  let shoes = useSelector((state) => state.shoes);

  return (
    <div
      className="container-fluid justify-content-center d-flex p-0"
      style={style}
    ></div>
  );
}
