import "./single.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersUser } from "../../redux/actions"


const UserDetail = () => {
  const idUser = useSelector((state)=> state.UserLog)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersUser(idUser.id));
  }, [dispatch, idUser]);;
  const OrdersUser = useSelector((state)=> state.OrdersUser)

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <h1>Mi Perfil</h1>
          <div className="link">Editar</div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="item">
              <h1 className="itemTitle">{OrdersUser.name} {OrdersUser.lastname}</h1>
              <img
                src={idUser.avatar_url}
                alt="img"
                className="itemImg"
              />
            </div>
          </div>
          <div className="right">
            {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
            <div className="details">
              <h1 className="title">Información Personal</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">{OrdersUser.email}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Celular:</span>
                <span className="itemValue">{OrdersUser.phone}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Dirección:</span>
                <span className="itemValue">
                {OrdersUser.adress}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">País:</span>
                <span className="itemValue">{OrdersUser.country}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Ciudad:</span>
                <span className="itemValue">Narnia</span>
              </div>
            </div>
            <div className="details">
              <h1 className="title">Información De Compra</h1>
              <div className="detailItem">
                <span className="itemKey">Pago:</span>
                <span className="itemValue">PayPal</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Entrega en:</span>
                <span className="itemValue">
                {OrdersUser.adress}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Envío:</span>
                <span className="itemValue">Henry Courier</span>
              </div>
              {/* <div className="detailItem">
                <span className="itemKey">País:</span>
                <span className="itemValue">USA</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Ciudad:</span>
                <span className="itemValue">Narnia</span>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};
export default UserDetail;
