import { DELETE_FRIEND, baseUrl } from '../types';
import axios from 'axios';

export const deleteFriend = (user, friendId, token) => {
    return (dispatch) => {
      console.log(user);
      
      return axios({
        method: "POST",
        url:baseUrl + `/users/info/${user}`,
        headers: {
          Authorization: "Bearer " + token,
          type: "application/json",
        },
        data: {
            friendId
        }
       })
        .then(response => {
          dispatch(deleteFriendSuccess(response.data));
        })
        .catch(error => {
          console.log("Error login " + error);
          throw(error);
        });
    };
  };
  
  export const deleteFriendSuccess = ({message, token, id, image, name, friends}) => {
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
