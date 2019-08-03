import axios from 'axios';
import { FETCH_DEBT, baseUrl} from '../types';

export const getDebt = (id, token) => {
  return (dispatch) => {
    console.log(id, token);
    
    return axios({
      method: "GET",
      url:baseUrl + `/debts/${id}`,
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