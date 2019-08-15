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
          dispatch(infoSuccess(response.data));
        })
        .catch(error => {
          console.log("Error login " + error);
          throw(error);
        });
    };
  };
  
  export const infoSuccess = ({message, token, id, image, name, friends}) => {
    console.log("message " + JSON.stringify(message));
    
      return {
        type: GET_INFO,
        payload: {
            message,
            token,
            id,
            image,
            name,
            friends,
            online: true,
        }
      }
    }
