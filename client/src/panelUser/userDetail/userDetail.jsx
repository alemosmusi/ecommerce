import "./single.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";

const UserDetail = () => {
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
              <h1 className="itemTitle">Jane Doe</h1>
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
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
                <span className="itemValue">janedoe@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Celular:</span>
                <span className="itemValue">+1 2345 67 89</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Dirección:</span>
                <span className="itemValue">
                  Elton St. 234 Garden Yd. NewYork
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">País:</span>
                <span className="itemValue">USA</span>
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
                  Elton St. 234 Garden Yd. NewYork
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
