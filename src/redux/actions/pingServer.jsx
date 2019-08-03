import axios from 'axios';
import { PING_SERVER, baseUrl} from './types';

export const pingServer = () => {
    return (dispatch) => {
      return axios.post(baseUrl)
        .then(response => {
          dispatch(pingServerSucces(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  
  export const pingServerSucces =  (message) => {
    return {
      type: PING_SERVER,
      payload: {
      message,
      status: "online"
      }
    }
  };