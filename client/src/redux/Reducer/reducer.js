import * as actionTypes from "../Actions/actions";

var q = 1

const initialState = {
  Shoes : [],
  Filters : [],
  Categories : [],
  Brands : [],
  Colors : [],
  Genders: [],
  Questions: [],
  Qdelete: []
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

      const arrayBrands = state.Shoes.filter(value => {
        if (Array.isArray(action.payload)) {
          return action.payload.include(value.brand_name)
        } else {
          return value.brand_name === action.payload
        }
      })

      return {
        ...state,
        Filters: arrayBrands
      }
    case actionTypes.GET_FILTERS_CATEGORY: 
      const arrayCategorys = state.Shoes.filter(value => {
        return value.category === action.payload
      })

      return {
        ...state,
        Filters: arrayCategorys
      }
    case actionTypes.GET_FILTERS_COLORS: 
      const arrayColors = state.Shoes.filter(value => {
        if (Array.isArray(action.payload)) {
          return action.payload.include(value.color)
        } else {
          return value.color === action.payload
        }
      })

      return {
        ...state,
        Filters: arrayColors
      }
    case actionTypes.GET_FILTERS_GENDERS: 
      const arrayGenders = state.Shoes.filter(value => {
        if (Array.isArray(action.payload)) {
          return action.payload.include(value.genders.join(' '))
        } else {
          return value.color === action.payload
        }
      })

      return {
        ...state,
        Filters: arrayGenders
      }
    
    case actionTypes.GET_QUESTIONS:
        return  {
          ...state,
          Questions: action.payload,
        }
    
    case actionTypes.DELETE_QUESTIONS:
            
          return {
              ...state,
              Qdelete: q++
          
          }
    case actionTypes.CREATE_QUESTION:

            return{
                ...state,
                Qdelete: q++
                

            }


    default : 
      return state
  } 
}

export default rootReducer;
