import axios from 'axios';
import { DELETE_DEBT, baseUrl} from '../types';
import { listDebts } from './listDebts';

export const deleteDebt = (token, id) => {
  return (dispatch) => {
    
    return axios({
      method: "DELETE",
      url:baseUrl +  `/debts/${id}`,
      params: {
        debtId : id
      },
      headers: {
        type: "application/json",
        Authorization: "Bearer " + token
      },
     })
      .then(response => {
        dispatch(deleteDebtSuccess(response.data, id));
        dispatch(listDebts(token));
      })
      .catch(error => {
        throw(error);
      });
  };
};

  export const deleteDebtSuccess = (messsage,) => {
    
      return {
        type: DELETE_DEBT,
        payload: {
            messsage,

        }
      }
    }