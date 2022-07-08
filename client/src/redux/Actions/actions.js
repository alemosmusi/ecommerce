import axios from 'axios';

export const GET_ALL_SHOES= 'GET_ALL_SHOES'

export const getAllShoes = () => {
    return async function (dispatch) {
       try {
          let info = await axios(`http://localhost:3001/shoes`);
          return dispatch({
            type: GET_ALL_SHOES,
            payload: info.data,
          });
        } catch (error) {
          console.log(error.response);
        //   alert(
        //     error.response && error.response.data
        //       ? error.response.data
        //       : error.message
        //   );
        }
      };
    }
