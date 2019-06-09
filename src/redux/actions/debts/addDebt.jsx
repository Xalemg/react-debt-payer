import axios from 'axios';
import { ADD_DEBT, DEBT_ADDED_SUCCESS, baseUrl } from '../types';

export const addDebt = (email, password, name) => {
  return (dispatch) => {
    
    return axios({
      method: "POST",
      url:baseUrl + "/debts/",
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
        dispatch(addDebtSucces(response.data, name))
      })
      .catch(error => {
        throw(error);
      });
  };
};

  export const addDebtSucces = (message,debt) => {
    if(message === DEBT_ADDED_SUCCESS) {
      return {
        type: ADD_DEBT,
        payload: {
            message,
            debt,
            online: true,
        }
      }
    } else {
      return {
        type: ADD_DEBT,
        payload: {
            message,
        }
      }
    }

    }