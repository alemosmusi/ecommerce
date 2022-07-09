import * as actionTypes from "../Actions/actions";

const initialState = {
  Shoes : [],
  Filters : [],
  Categories : [],
  Brands : [],
  Colors : [],
  Genders: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.GET_ALL_SHOES:
      return  {
        ...state,
        Shoes: action.payload,
        Filters: action.payload
      }
    case actionTypes.GET_ALL_BRANDS: 
      return {
        ...state,
        Brands: action.payload
      }
    case actionTypes.GET_ALL_CATEGORIES:
      return  {
        ...state,
        Categories: action.payload,
      }
    case actionTypes.GET_ALL_COLORS: 
      return {
        ...state,
        Colors: action.payload
      }
    case actionTypes.GET_ALL_GENDERS:
      return {
        ...state,
        Genders: action.payload
      }
    case actionTypes.GET_FILTERS_BRANDS:
      if (!action.payload || action.payload.length) return

      const Filters = Shoes.filter(value => {
        if (Array.isArray(action.payload)) {
          return action.payload.include(value.brand_name)
        } else {
          return value.brand_name === action.payload
        }
      })

      return {
        ...state,
        Filters
      }
    default : 
      return state
  } 
}

export default rootReducer;
