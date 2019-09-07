import { ADD_FRIEND, LOGIN, GET_INFO, LOGOUT, REGISTER , UPDATE_USER} from '../actions/types';
const initialState = {
  message: "",
  online: false,
  id: localStorage.getItem("id"),
  email: localStorage.getItem("email"),
  avatar: null,
  name: null,
  friends: [],
  token: localStorage.getItem("token"),
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
        email: payload.email,
        friends: payload.friends
      };
    }
      case GET_INFO: {
        console.log(payload);
        
        return { ...state,
          online: payload.online,
          id: payload.id,
          image: payload.image,
          name: payload.name,
          friends: payload.friends
        };
      }
    case LOGOUT: {
      console.log(payload);
      
      return { ...state,
        message: payload.message,
        online: null,
        id: null,
        token: null,
        avatar: null,
        name: null,
        email: null,
        friends: null
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
    case ADD_FRIEND: {
      return { ...state,
        message: payload.message,
      };
    }
    default:
      return state;
  }

}
export default reducer;