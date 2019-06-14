import { LOGIN, LOGOUT, REGISTER , UPDATE_USER} from '../actions/types';
const initialState = {
  message: "",
  online: false,
    id: null,
    email: null,
    avatar: null,
    name: null,
    //token: null,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InhhbGVtZ0BnbWFpbC5jb20iLCJ1c2VySWQiOiI1Y2ZjZDk1Yjc0OTdiOTAwMTQwNWMzNGIiLCJpYXQiOjE1NjA1MjUwNDN9.1Du9S1A0VX-6lney8db_TjVgogX61ok2EI440iIC3qs'
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
        image: payload.image,
        name: payload.name,
      };
    }
    case LOGOUT: {
      console.log(payload);
      
      return { ...state,
        message: payload.message,
        online: true,
        id: null,
        token: null,
        avatar: null,
        name: null,
      };
    }
    case REGISTER: {
      return { ...state,
        message: payload.message,
        online: payload.online,
        id: payload.id,
        token: payload.token,
        avatar: payload.image,
        name: payload.name,
      };
    }
    case UPDATE_USER: {
      return { ...state,
        message: payload.message,
        online: payload.online,
        id: payload.id,
        token: payload.token,
        avatar: payload.image,
        name: payload.name,
      };
    }
    default:
      return state;
  }

}
export default reducer;