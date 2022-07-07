const initialState = {

  };
  
  const rootReducer = (state = initialState, action) => {

    switch (action.type){
        case ALGO:
          return{
            ...state,
          }
    }
}

export default rootReducer;
