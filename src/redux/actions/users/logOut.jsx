import { LOGOUT, LOG_OUT_MESSAGE } from '../types';

export const logOut =() => {
    return (dispatch) => {
      console.log("asdasdasd");
       logOutSuccess();
    }
    
}
export const logOutSuccess = () => {
    localStorage.removeItem('token', null);
    localStorage.removeItem('id', null);
    localStorage.removeItem('email', null);
    console.log(localStorage);
      return {
        type: LOGOUT,
        payload: {
            message: LOG_OUT_MESSAGE,
            online: false,
        }
      }
    }