import axios from 'axios';
import { URL_ALL_CATEGORIES, URL_ALL_SHOES } from '../URL/URL';
export const GET_ALL_SHOES= 'GET_ALL_SHOES'
export const GET_ALL_CATEGORIES= 'GET_ALL_CATEGORIES'

export const getAllShoes = () => {
    return async function (dispatch) {
       try {
          let info = await axios(URL_ALL_SHOES);
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
              let categories = await axios(URL_ALL_CATEGORIES);
              return dispatch({
                type: GET_ALL_CATEGORIES,
                payload: categories.data,
              });
            } catch (error) {
              console.log(error.response);
          };
        }
    }
    