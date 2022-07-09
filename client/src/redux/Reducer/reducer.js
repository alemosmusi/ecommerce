import { GET_ALL_SHOES ,  GET_ALL_CATEGORIES , GET_SHOES_DETAILS ,CLEAN_DETAIL } from "../Actions/actions";

const initialState = {
Shoes:[],
categories:[],
ShoesDetails:{}
  };
  
  const rootReducer = (state = initialState, action) => {

    switch (action.type){
      case GET_ALL_SHOES:
          return{
            ...state,
            Shoes:action.payload,
          }
      case  GET_ALL_CATEGORIES:
            return{
              ...state,
              categories:action.payload,
            }
      case  GET_SHOES_DETAILS:
              return{
                ...state,
                ShoesDetails:action.payload,
              }
      case CLEAN_DETAIL:
                 return{
                   ...state,
                   ShoesDetails:{}
                 }
          default : return state
        } 
}

export default rootReducer;
