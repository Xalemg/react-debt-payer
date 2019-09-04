import { ADD_FRIEND, baseUrl } from '../types';
import axios from 'axios';
import { getUserInfo } from './getUserInfo';


export const addFriend = (userId, mail, friendId, token) => {
  console.log("asdasd");
  
    return (dispatch) => {
      return axios({
        method: "POST",
        url:baseUrl + `/users/addFriend/${userId}`,
        headers: {
          Authorization: "Bearer " + token,
          type: "application/json",
        },
        params: {
          userId
        },
        data: {
            friendId
        }
       })
        .then(response => {
          dispatch(addFriendSuccess(response.data));
          dispatch(getUserInfo(mail,token));
        })
        .catch(error => {
          console.log("Error login " + error);
          throw(error);
        });
    };
  };
  
  export const addFriendSuccess = ({message, friends}) => {
    console.log("message " + JSON.stringify(message));
    
      return {
        type: ADD_FRIEND,
        payload: {
            message,
            friends,
            online: true,
        }
      }
    }
