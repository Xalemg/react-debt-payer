import { LOGOUT, LOG_OUT_MESSAGE } from '../types';

export const logOut =() => {
    return (dispatch) => {
      
        const logOutSuccess = {
           type: LOGOUT,
           payload: {
               message: LOG_OUT_MESSAGE,
           }
       }
       dispatch(logOutSuccess);
    }
    
}