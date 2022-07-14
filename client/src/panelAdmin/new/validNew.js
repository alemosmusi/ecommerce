import * as Yup from "yup";

export const validSchema = Yup.object({
    name: Yup.string().required("Debes colocar un nombre valido y unico"),
    brand_name: Yup.string().required("debes seleccionar una marca del calzado, si no se encuentra la marca puedes crearla"),
    description: Yup.string().required("colocar una breve descripcion"),
    price: Yup.number().min(1).required("debes colocar un precio y debe ser un numero"),
   material: Yup.string().required("debes colocar el material del cual esta hecho"),
   released: Yup.date().required("debes colocar la fecha de lanzamiento"),
   designer: Yup.string().required("Colocar el nombre del diseñador"),
   details: Yup.string().required("colocar los principales detalles"),
   shoe_condition: Yup.string().required("colocar la condición del producto"),
   category: Yup.string().required("colocar a que categoria pertenece"),
   color: Yup.string().required("Debes elegir un color, si no encuentras el correcto puedes crear uno"),
  //  size_range:Yup.required('debes elegir los talles disponibles con sus stock disponible'),
  //  genders: Yup.string().required('debes elegir el genero del talle, si no encuentras el correcto puedes crear uno'),



  });


export const initialValue ={
  name: "",
  brand_name: "",
  description: "",
  price: 0,
  img:'',
  color: "",
  size_range: [{size:'',stock:0}],
  material: "",
  released: "",
  genders: [],
  designer: "",
  details: "",
  shoe_condition: "",
  rating: 0,
  category: "",

}