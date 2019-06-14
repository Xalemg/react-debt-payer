import { LOGIN, LOGOUT, REGISTER , UPDATE_USER} from '../actions/types';
const initialState = {
  message: "",
  online: false,
    id: null,
    email: null,
    avatar: null,
    name: null,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhY2Fmcml0YTEyQGhvdG1haWwuY29tIiwidXNlcklkIjoiNWNlOTAxN2IyOTgyODYwMDEzMTkwMTg0IiwiaWF0IjoxNTYwNTIwOTgyfQ.aUktBxct9pOKCwaA7DyAmB-VF4KN3viKinX4A3ts8DA"
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