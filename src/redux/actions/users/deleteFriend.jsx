import { ADD_FRIEND, baseUrl } from '../types';
import axios from 'axios';

export const addFriend = (user, friendId, token) => {
    return (dispatch) => {
      console.log(user);
      
      return axios({
        method: "GET",
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
          dispatch(addFriendSuccess(response.data));
        })
        .catch(error => {
          console.log("Error login " + error);
          throw(error);
        });
    };
  };
  
  export const addFriendSuccess = ({message, token, id, image, name, friends}) => {
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
