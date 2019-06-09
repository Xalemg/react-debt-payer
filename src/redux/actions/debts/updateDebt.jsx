import axios from 'axios';
import { UPDATE_DEBT, baseUrl} from '../types';

export const updateDebt = (token, id) => {
  return (dispatch) => {
    
    return axios({
      method: "PATCH",
      url:baseUrl + "/debts/:debtID",
      params: {
        debtID : id
      },
      headers: {
        Authorization: "Bearer " + token,
        type: "application/json",
      },
     })
      .then(response => {
        dispatch(updateDebtSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

  export const updateDebtSuccess = (messsage) => {
    
      return {
        type: UPDATE_DEBT,
        payload: {
            messsage,
        }
      }
    }