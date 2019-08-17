import axios from 'axios';
import { UPDATE_DEBT, baseUrl} from '../types';

export const updateDebt = (userId, debtorId, id,debtor, payer, reason, amount, description, date, token) => {
  console.log(userId, debtorId, id,debtor, payer, reason, amount, description, date, token);
  return (dispatch) => {
    return axios({
      method: "PATCH",
      url:baseUrl + `/debts/${id}`,
      params: {
        debtId: id
      },
      data: {
        userId,
        debtorId,
        debtor,
        payer,
        reason,
        amount, 
        description,
        date
      },
      headers: {
        type: "application/json",
        Authorization: "Bearer " + token
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