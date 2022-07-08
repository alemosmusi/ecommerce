// import axios from 'axios';

export const GET_ALL_SHOES= 'GET_ALL_SHOES'

export const getAllShoes = () => {
    return async function (dispatch) {
      fetch('http://localhost:3001/shoes')
    .then(res => res.json())
    .then(info=>
     dispatch({
      type: GET_ALL_SHOES,
      payload: info
    }))
    
    };
}