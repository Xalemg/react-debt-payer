import { LOGOUT, LOG_OUT_MESSAGE } from '../types';

export const logOut =() => {
    return (dispatch) => {
        console.log('eeeee1');
      
        const logOutSuccess = {
           type: LOGOUT,
           payload: {
               message: LOG_OUT_MESSAGE,
           }
       }
       dispatch(logOutSuccess);
    }
    
}