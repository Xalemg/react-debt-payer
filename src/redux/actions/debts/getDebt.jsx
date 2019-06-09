import axios from 'axios';
import { FETCH_DEBT, baseUrl} from '../types';

export const getDebt = (token, id) => {
  return (dispatch) => {
    
    return axios({
      method: "GET",
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
        dispatch(getDebtSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

  export const getDebtSuccess = (debt) => {
    
      return {
        type: FETCH_DEBT,
        payload: {
          debt,
        }
      }
    }