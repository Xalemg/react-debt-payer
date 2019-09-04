import { ADD_FRIEND, LOGIN, GET_INFO, LOGOUT, REGISTER , UPDATE_USER} from '../actions/types';
const initialState = {
  message: "",
  online: false,
  id: "5cfcd95b7497b9001405c34b",
  //id: null
  email: "xalemg@gmail.com",
  //email: null,
  avatar: null,
  name: null,
  friends: [],
  //token: null,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InhhbGVtZ0BnbWFpbC5jb20iLCJ1c2VySWQiOiI1Y2ZjZDk1Yjc0OTdiOTAwMTQwNWMzNGIiLCJpYXQiOjE1NjAwNzcwNzd9.UR5wKCh-PZKNEn2XpDLafHLT4n03vyadD5dDwuBZ6WM'
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