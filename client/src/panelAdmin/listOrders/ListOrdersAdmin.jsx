import "./list.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Datatable from "../components/dataTable/Datatable";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordersColumns } from "./ordersColumns";
import { getAllShoes } from "../../redux/actions";
const ListOrdersAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllShoes());
  }, [dispatch]);
  const productRows = useSelector((state) => state.Shoes);

  // Columnas adicionales aparte de la data
  let actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: ({ row }) => {
        return (
          <div className="cellAction">
            <Link
              to={`/admin/products/${row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              // onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable
          name={"Ordenes"}
          buttonName={false}
          pathButton={false}
          rows={productRows}
          columns={[...ordersColumns, ...actionColum]}
          rowsInPage={9}
        />
      </div>
    </div>
  );
};

export default ListOrdersAdmin;
