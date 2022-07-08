import axios from 'axios';

export const GET_ALL_SHOES= 'GET_ALL_SHOES'
export const GET_ALL_CATEGORIES= 'GET_ALL_CATEGORIES'

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

    export const getAllCategories = () => {
        return async function (dispatch) {
           try {
              let categories = await axios(`http://localhost:3001/categories`);
              return dispatch({
                type: GET_ALL_CATEGORIES,
                payload: categories.data,
              });
            } catch (error) {
              console.log(error.response);
          };
        }
    }
    