import "./new.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productInputs } from "./formSource";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  createShoes,
  getAllGenders,
  getAllColors,
  getAllCategories,
  getAllBrands,
  // createBrands,
  // createCategories,
  // createColors,
  // createGenders,
} from "../../redux/actions/index.js";

const New = () => {
  // const [file, setFile] = useState("");
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllGenders());
      dispatch(getAllCategories());
      dispatch(getAllColors());
      dispatch(getAllBrands());
    }, [dispatch]);
    const Categories = useSelector((state) => state.Categories);
    const Brands = useSelector((state) => state.Brands);
    const Colors = useSelector((state) => state.Colors);
    const Genders = useSelector((state) => state.Genders);
    const inputs = productInputs;

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Agregar Nuevo Producto</h1>
        </div>
        <Formik 
        className="bottom"
        initialValues={{
          name: "",
          brand_name: "",
          description: "",
          price: 0,
          img: "",
          stock: 0,
          color: "",
          size_range: [],
          material: "",
          released: "",
          genders: [],
          designer: "",
          details: "",
          shoe_condition: "",
          rating: 0,
          category: "",
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          dispatch(createShoes(valores))
          console.log("Formulario enviado");
          // cambiarFormularioEnviado(true);
          //      setTimeout(() => cambiarFormularioEnviado(false), 5000);
          }}
        >
   {({ values, errors }) => (

          <Form>
          <div className="left">
            <img
              src={
                values.img
                  ? URL.createObjectURL(values.img)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <Field
                  type="file"
                  id="file"
                  name='img'
                  // onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <Field type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
          </Form>
   )}
        </Formik>
      </div>
    </div>
  );
};

export default New;

