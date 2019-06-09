import axios from 'axios';
import { REGISTER, baseUrl, SIGN_UP_SUCCESS} from '../types';

export const getDebt = (token, id) => {
  return (dispatch) => {
    
    return axios({
      method: "POST",
      url:baseUrl + "/users/signup",
      headers: {
        type: "application/json",
      },
     })
      .then(response => {
        dispatch(getDebtSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

  export const getDebtSuccess = ({message, email, password}, name) => {
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