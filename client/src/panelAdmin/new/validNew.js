import * as Yup from "yup";
 Yup.addMethod(Yup.array, 'unique', function(categories, mapper = a => a) {
  return this.test('unique', categories, function(list) {
      return list.length  === new Set(list.map(mapper)).size;
  });
});

 export const validSchema = Yup.object().shape({
    name: Yup.string().min(4,"minimum 4 characters").required("You must enter a valid and unique name"),
    brandID: Yup.string().required("you must select a shoe brand, if the brand is not found you can create it"),
    description: Yup.string().min(10,"minimum 10 characters ").required("put a brief description"),
    price: Yup.number().min(1).required("you must put a price"),
   material: Yup.string().required("you must place the material from which it is made"),
   released: Yup.date().required("you must put the release date"),
   designer: Yup.string().required("Enter the name of the designer"),
   details: Yup.string().min(5,"minimum 5 characters").required("put the main details"),
   shoe_condition: Yup.string().required("place the condition in which the product is found"),
   categories: Yup.array().of(Yup.string().required("place which category it belongs to")).unique('check there are duplicate values'),
   colorID: Yup.string().required("You must choose a color"),
   genderID: Yup.string().required("you must choose the gender of the size"),
   img:Yup.string().required('is requerid url of img'),
   
});

  
export const initialValue ={
  name: "",
  nickname:"",
  brandID: "",
  description: "",
  price: 0,
  img:"",
  colorID: "",
  size_range: [{size:'',stock:0}],
  material: "",
  released: "",
  genderID: "",
  designer: "",
  details: "",
  shoe_condition: "",
  rating: 0,
  categories: [''],

}