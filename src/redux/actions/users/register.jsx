import axios from 'axios';
import { REGISTER, baseUrl} from '../types';

export const registerSuccess = (message) => {
    return {
      type: REGISTER,
      message
    }
  };
  
  export const register = () => {
    return (dispatch) => {
      return axios.get(baseUrl + '/users/signup')
        .then(response => {
          dispatch(registerSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };