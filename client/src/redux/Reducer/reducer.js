import { GET_ALL_SHOES ,  GET_ALL_CATEGORIES} from "../Actions/actions";

const initialState = {
Shoes:[],
categories:[]
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
          default : return state
        } 
}

export default rootReducer;
