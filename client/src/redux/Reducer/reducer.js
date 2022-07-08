import { GET_ALL_SHOES } from "../Actions/actions";

const initialState = {
Shoes:[]
  };
  
  const rootReducer = (state = initialState, action) => {

    switch (action.type){
      case GET_ALL_SHOES:
          return{
            ...state,
            Shoes:action.payload,
          }
          default : return state
        } 
}

export default rootReducer;
