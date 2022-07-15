import { Toast } from "../../component/alerts";

// Obtener el estado del localstorage
export const getCarritoInStorage = () => {
  var local = JSON.parse(localStorage.getItem("username"));
  return local.carrito;
};
export const addToLocalStorage = (payload) => {
  var local = JSON.parse(localStorage.getItem("username"));
  //   Si no existe lo crea con un array vacío
  if (!local) {
    localStorage.setItem("username", JSON.stringify({ carrito: [] }));
    local = JSON.parse(localStorage.getItem("username"));
  }
  let existProduct = local.carrito?.filter(
    (p) => p.key_value === `${payload.id}${payload.size}`
  );

  if (!existProduct.length) {
    local.carrito.push(payload);
    var carritoJson = JSON.stringify(local); // serialise as string

    localStorage.setItem("username", carritoJson); // save string
    Toast.fire({
      icon: "success",
      title: "Producto añadido exitosamente",
    });
  } else {
    Toast.fire({
      icon: "warning",
      title: "El producto ya ha sido añadido",
    });
  }
  return local.carrito;
};
export const deleteFromLocalStorage = (payload) => {
  var local = JSON.parse(localStorage.getItem("username")); //Objeto
  //   console.log("Local Carrito:", local.carrito);
  local.carrito = local.carrito?.filter((p) => p.key_value !== payload);
  var carritoJson = JSON.stringify(local); // serialise as string
  localStorage.setItem("username", carritoJson); // save string
  return local.carrito;
};
export const changeAmountFromLocalStorage = (payload) => {
  var local = JSON.parse(localStorage.getItem("username")); //Objeto
  //   console.log("Local Carrito:", local.carrito);
  local.carrito = local.carrito?.map((p) => {
    if (p.key_value === payload.key_value) p.amount = payload.amount;
    return p;
  });
  var carritoJson = JSON.stringify(local); // serialise as string
  localStorage.setItem("username", carritoJson); // save string
  return local.carrito;
};
