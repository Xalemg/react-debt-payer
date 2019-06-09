import axios from 'axios';
import { REGISTER, baseUrl, SIGN_UP_SUCCESS} from '../types';

export const register = (email, password, name) => {
  return (dispatch) => {
    
    return axios({
      method: "POST",
      url:baseUrl + "/users/signup",
      headers: {
        type: "application/json",
      },
      data: {
          email,
          password,
          name
      },
     })
      .then(response => {
        dispatch(registerSuccess(response.data, name))
      })
      .catch(error => {
        throw(error);
      });
  };
};

  export const registerSuccess = ({message, email, password}, name) => {
    if(message === SIGN_UP_SUCCESS) {
      return {
        type: REGISTER,
        payload: {
            message,
            email,
            password,
            name,
            online: true,
        }
      }
    } else {
      return {
        type: REGISTER,
        payload: {
            message,
        }
      }
    }

    }