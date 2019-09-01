import { GET_INFO, baseUrl } from '../types';
import axios from 'axios';

export const getUserInfo = (user, token) => {
    return (dispatch) => {
      console.log(user);
      
      return axios({
        method: "GET",
        url:baseUrl + `/users/info/${user}`,
        headers: {
          Authorization: "Bearer " + token,
          type: "application/json",
        }
       })
        .then(response => {
          console.log(response.data);
          dispatch(infoSuccess(response.data));
        })
        .catch(error => {
          console.log("Error login " + error);
          throw(error);
        });
    };
  };
  
  export const infoSuccess = ({email, id, image, name, friends}) => {    
      return {
        type: GET_INFO,
        payload: {
            id,
            image,
            name,
            friends,
            online: true,
        }
      }
    }
