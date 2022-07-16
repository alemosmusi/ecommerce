import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrdersUser } from "../../redux/actions"
// import Widget from "./dataWidget";
// import Featured from "../components/featured/Featured";
// import Chart from "../components/chart/Chart";
// import Table from "../components/table/Table";
// import { dataBalance, dataEarning, dataOrder, dataUser } from "./dataWidget";

const HomeUser = () => {
  // const dispatch = useDispatch();
  // const OrdersUser = useSelector((state)=> state.OrdersUser)
  // useEffect(() => {
  //   dispatch(getAllOrdersUser(1));
  // }, [dispatch]);
 
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
        </div>
      </div>
    </div>
  );
};

export default HomeUser;
