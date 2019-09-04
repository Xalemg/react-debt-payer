import { DELETE_FRIEND, baseUrl } from '../types';
import axios from 'axios';
import { getUserInfo } from './getUserInfo';

export const deleteFriend = (userId, mail, friendId, token) => {
  console.log(userId);
    return (dispatch) => {
      
      return axios({
        method: "DELETE",
        url:baseUrl + `/users/deleteFriend/${userId}`,
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
          dispatch(getUserInfo(mail,token));
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
        type: DELETE_FRIEND,
        payload: {
            message,
            friends,
            online: true,
        }
      }
    }
