import * as actionTypes from "../Actions/actions";

var q = 1;

const initialState = {
  Shoes: [],
  Filters: [],
  Categories: [],
  Brands: [],
  Colors: [],
  Genders: [],
  Questions: [],
  Qdelete: [],
  ShoesDetails: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_SHOES:
      return {
        ...state,
        Shoes: action.payload,
        Filters: action.payload,
      };
    case actionTypes.GET_ALL_BRANDS:
      return {
        ...state,
        Brands: action.payload,
      };
    case actionTypes.GET_ALL_CATEGORIES:
      return {
        ...state,
        Categories: action.payload,
      };
    case actionTypes.GET_ALL_COLORS:
      return {
        ...state,
        Colors: action.payload,
      };
    case actionTypes.GET_ALL_GENDERS:
      return {
        ...state,
        Genders: action.payload,
      };
    case actionTypes.GET_FILTERS_BRANDS:
      const arrayBrands = state.Shoes.filter(product => {
          if (!action.payload.length) return product
          if (typeof action.payload === "string") return product.brand_name === action.payload
          if (Array.isArray(action.payload)) return action.payload.includes(product.brand_name)
      });

      console.log(action.payload)

      return {
        ...state,
        Filters: arrayBrands,
      };
    case actionTypes.GET_FILTERS_CATEGORY:
      const arrayCategorys = state.Shoes.filter(product => {
        if (!action.payload.length) return product
        if (typeof action.payload === "string") return product.category === action.payload
        if (Array.isArray(action.payload)) return action.payload.includes(product.category)
      })

      return {
        ...state,
        Filters: arrayCategorys,
      };
    case actionTypes.GET_FILTERS_COLORS:
      const arrayColors = state.Shoes.filter(product => {
        if (!action.payload.length) return product
        if (typeof action.payload === "string") return product.category === action.payload
        if (Array.isArray(action.payload)) return action.payload.includes(product.color)
      })

      return {
        ...state,
        Filters: arrayColors,
      };
    case actionTypes.GET_FILTERS_GENDERS: 
      const arrayGenders = state.Shoes.filter((product) => {
        if (!action.payload.length) return product
        if (typeof action.payload === "string") return product.genders.includes(action.payload)
        if (Array.isArray(action.payload)) {
          const find = product.genders.find(value => action.payload.includes(value))
          return find && product
        }
      });

      return {
        ...state,
        Filters: arrayGenders,
      };

    case actionTypes.GET_FILTERS_PRICE_RANGE:
      const { min, max } = action.payload;

      const arraySizeRange = state.Shoes.filter((value) => {
        return value.price >= min && value.price <= max && value;
      });
      return {
        ...state,
        Filters: arraySizeRange,
      };
    case actionTypes.GET_FILTERS_SEARCHBAR:
      const arraySearch = state.Shoes.filter((value) => {
        return value.name.toLowerCase().includes(action.payload.toLowerCase());
      });

      return {
        ...state,
        Filters: arraySearch,
      };

    case actionTypes.GET_QUESTIONS:
      return {
        ...state,
        Questions: action.payload,
      };

    case actionTypes.DELETE_QUESTIONS:
      return {
        ...state,
        Qdelete: q++,
      };
    case actionTypes.CREATE_QUESTION:
      return {
        ...state,
        Qdelete: q++,
      };
    case actionTypes.GET_SHOES_DETAILS:
      return {
        ...state,
        ShoesDetails: action.payload,
      };
    case actionTypes.CLEAN_DETAIL:
      return {
        ...state,
        ShoesDetails: {},
      };

    default:
      return state;
  }
};

export default rootReducer;

