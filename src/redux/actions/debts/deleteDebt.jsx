import axios from 'axios';
import { DELETE_DEBT, baseUrl} from '../types';

export const deleteDebt = (token, id) => {
  return (dispatch) => {
    
    return axios({
      method: "DELETE",
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
        dispatch(deleteDebtSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

  export const deleteDebtSuccess = (messsage) => {
    
      return {
        type: DELETE_DEBT,
        payload: {
            messsage,
        }
      }
    }