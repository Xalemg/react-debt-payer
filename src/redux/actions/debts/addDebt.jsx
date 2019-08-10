import axios from 'axios';
import {
  ADD_DEBT,
  DEBT_ADDED_SUCCESS,
  baseUrl
} from '../types';

export const addDebt = (debtor, reason, payer, amount, description, date, token) => {
  return (dispatch) => {
    
    return axios({
        method: "POST",
        url:baseUrl + "/debts",
        headers: {
          type: "application/json",
          Authorization: "Bearer " + token
        },
        data: {
          debtor,
          payer,
          reason,
          amount,
          description,
          date
        },
      })
      .then(response => {
        dispatch(addDebtSucces(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const addDebtSucces = (message, debt) => {
  if (message === DEBT_ADDED_SUCCESS) {
    return {
      type: ADD_DEBT,
      payload: {
        message,
      }
    }
  } else {
    return {
      type: ADD_DEBT,
      payload: {
        message
      }
    }
  }

}