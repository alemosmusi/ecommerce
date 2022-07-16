import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersUser } from "../../redux/actions"
// import Widget from "./dataWidget";
// import Featured from "../components/featured/Featured";
// import Chart from "../components/chart/Chart";
// import Table from "../components/table/Table";
// import { dataBalance, dataEarning, dataOrder, dataUser } from "./dataWidget";

const HomeUser = () => {
  const dispatch = useDispatch();
  const OrdersUser = useSelector((state)=> state.OrdersUser)
  useEffect(() => {
    dispatch(getAllOrdersUser(1));
  }, [dispatch]);
  // console.log (OrdersUser)
  // const users = {
  //   amount: 20,
  //   diff: 5,
  // };
  // const orders = {
  //   amount: 6,
  //   diff: 2,
  // };
  // const earnings = {
  //   amount: 500,
  //   diff: 20,
  // };
  // const balance = {
  //   amount: 100,
  //   diff: 13,
  // };

  return (
    <div className="home">
      <Sidebar dataUser={OrdersUser} />
      <div className="homeContainer">
        <Navbar dataUser={OrdersUser} />
        {/* <div className="widgets">
          <Widget data={{ ...dataUser, ...users }} />
          <Widget data={{ ...dataOrder, ...orders }} />
          <Widget data={{ ...dataEarning, ...earnings }} />
          <Widget data={{ ...dataBalance, ...balance }} />
        </div> */}
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          {/* <Table /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeUser;
