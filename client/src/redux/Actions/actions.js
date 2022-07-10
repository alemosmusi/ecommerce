import axios from "axios";
export const GET_ALL_SHOES = "GET_ALL_SHOES";
export const GET_ALL_BRANDS = "GET_ALL_BRANDS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_SHOES_DETAILS = "GET_SHOES_DETAILS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_ALL_COLORS = "GET_ALL_COLORS";
export const GET_ALL_GENDERS = "GET_ALL_GENDERS";

export const GET_FILTERS_BRANDS = "GET_FILTERS_BRANDS";
export const GET_FILTERS_CATEGORY = "GET_FILTERS_CATEGORY";
export const GET_FILTERS_COLORS = "GET_FILTERS_COLORS";
export const GET_FILTERS_GENDERS = "GET_FILTERS_GENDERS";
export const GET_FILTERS_PRICE_RANGE = "GET_FILTERS_PRICE_RANGE";

export const GET_FILTERS_SEARCHBAR = "GET_FILTERS_SEARCHBAR";
export const GET_ADD_CARRITO= "GET_ADD_CARRITO";


export const GET_QUESTIONS = "GET_QUESTIONS";
export const DELETE_QUESTIONS = "DELETE_QUESTIONS";
export const CREATE_QUESTION = "CREATE_QUESTION";

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

export const getFilterBrands = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: GET_FILTERS_BRANDS,
      payload,
    });
  };
};

export const getFilterCategories = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: GET_FILTERS_CATEGORY,
      payload,
    });
  };
};

export const getFilterColors = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: GET_FILTERS_COLORS,
      payload,
    });
  };
};

export const getFilterGenders = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: GET_FILTERS_GENDERS,
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

export const getFiltersPriceRange = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: GET_FILTERS_PRICE_RANGE,
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
