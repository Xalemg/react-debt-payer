import { LOGIN } from '../actions/types';
const initialState = {
  message: "",
  online: false,
    id: null,
    email: null,
    avatar: null,
    name: null,
    lasName: null,
    token: null
};

 function reducer(state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case LOGIN: {
      console.log(payload);
      
      return { ...state,
        message: payload.message,
        online: payload.online,
        id: payload.id,
        token: payload.token,
      };
    }
    default:
      return state;
  }

}
export default reducer;