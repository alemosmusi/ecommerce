import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShoes, getAllCategories } from "../../redux/Actions/actions";
import { Wrapper } from "../wrapper/wrapper";
import Footer from "../footer/footer.jsx";
import Cards from "../cards/Cards";
// import Loading from "../loading/loading";

export function Questions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllShoes());
    dispatch(getAllCategories());
  }, [dispatch]);
  const shoes = useSelector((state) => state.Shoes);
  return (
    <div className="home">
      <Wrapper></Wrapper>
      
    </div>
  );
}
