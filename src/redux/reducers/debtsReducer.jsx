import { LIST_DEBTS, FETCH_DEBT, ADD_DEBT, DELETE_DEBT, UPDATE_DEBT } from '../actions/types';



const initialState = {
  message : null,
  debts: [],
  count: null
};

function reducer(state = initialState,{ type, payload}) {
 switch (type) {

  case ( LIST_DEBTS ): {
    return {...state,
      debts: payload.debts,
      count: payload.count
    }
  }
  case ( FETCH_DEBT ): {
    console.log('reducer' + payload);
    return {...state,
      debts:[ payload.debt]
    ,    
    count: 1
    }
  }
  case ( ADD_DEBT ): {
    console.log('reducer' + payload);
    return {...state,
      
        message: payload.message
      
    }
  }
  case ( DELETE_DEBT ): {
    console.log('reducer' + payload);
    return {...state,
      user: {
        message: payload.message
      },
    }
  }
  case ( UPDATE_DEBT ): {
    console.log('reducer' + payload);
    return {...state,
      user: {
        message: payload.message
      },
    }
  }
  
   default:
     return state;
 }

}
export default reducer;