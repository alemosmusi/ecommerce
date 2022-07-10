import axios from "axios";

const {
  GET_ALL_SHOES,
  GET_ALL_BRANDS,
  GET_ALL_CATEGORIES,
  GET_ALL_COLORS,
  GET_ALL_GENDERS,
  GET_SHOES_DETAILS,
  CLEAN_DETAIL,
  GET_FILTERS_BRANDS,
  GET_FILTERS_CATEGORY,
  UPDATE_FILTERS,
  GET_FILTERS_SEARCHBAR,
  GET_ADD_CARRITO,
  GET_QUESTIONS,
  DELETE_QUESTIONS,
  CREATE_QUESTION,
  CHANGE_AMOUNT_PRODUCT,
  DELETE_PRODUCT_CARRITO,
} = require("../action-types");

const URL = "http://localhost:3001";

export const getAllShoes = () => {
  return async function (dispatch) {
    try {
      let info = await axios(`${URL}/shoes`);
      return dispatch({
        type: GET_ALL_SHOES,
        payload: info.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const getAllBrands = () => {
  return async function (dispatch) {
    try {
      const response = await axios(`${URL}/brands`);
      const { data: payload } = response;

      return dispatch({
        type: GET_ALL_BRANDS,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllCategories = () => {
  return async function (dispatch) {
    try {
      let categories = await axios(`${URL}/categories`);
      return dispatch({
        type: GET_ALL_CATEGORIES,
        payload: categories.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const getAllColors = () => {
  return async function (dispatch) {
    try {
      const response = await axios(`${URL}/colors`);
      const { data: payload } = response;

      return dispatch({
        type: GET_ALL_COLORS,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllGenders = () => {
  return async function (dispatch) {
    try {
      const response = await axios(`${URL}/genders`);
      const { data: payload } = response;

      return dispatch({
        type: GET_ALL_GENDERS,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllDetails = (id) => {
  return async function (dispatch) {
    try {
      let categories = await axios(`${URL}/getDetailsProduct/${id}`);
      return dispatch({
        type: GET_SHOES_DETAILS,
        payload: categories.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export function CleanStateDetail(payload) {
  return {
    type: CLEAN_DETAIL,
    payload,
  };
}

export const getFilterCategories = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: GET_FILTERS_CATEGORY,
      payload,
    });
  };
};

export const getFilterBrands = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: GET_FILTERS_BRANDS,
      payload,
    });
  };
};

export const updateFilters = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: UPDATE_FILTERS,
      payload,
    });
  };
};

export const getFiltersSearchbar = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: GET_FILTERS_SEARCHBAR,
      payload,
    });
  };
};

export const getQuestions = () => {
  return async function (dispatch) {
    try {
      let info = await axios(`${URL}/questions`);
      return dispatch({
        type: GET_QUESTIONS,
        payload: info.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export function deleteQuestions(id) {
  return function (dispatch) {
    return axios.delete(`${URL}/questions/${id}`).then((response) => {
      dispatch({
        type: DELETE_QUESTIONS,
        payload: response.data,
      });
    });
  };
}

export function createQuestion(question) {
  return function (dispatch) {
    return axios.post(`${URL}/questions`, question).then((response) => {
      dispatch({
        type: CREATE_QUESTION,
        payload: response.data,
      });
    });
  };
}

export const addCarrito = (producto) => {
  return function (dispatch) {
    return dispatch({
      type: GET_ADD_CARRITO,
      payload: producto,
    });
  };
};
export const deleteProductCarrito = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: DELETE_PRODUCT_CARRITO,
      payload,
    });
  };
};

export const changeAmount = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: CHANGE_AMOUNT_PRODUCT,
      payload,
    });
  };
};
