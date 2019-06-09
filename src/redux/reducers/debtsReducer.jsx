import { LIST_DEBTS } from '../actions/types';



const initialState = [];

function reducer(state = initialState,{ type, payload}) {
 switch (type) {

  case ( LIST_DEBTS ): {
    console.log('reducer' + payload);
    return {...state,
      debts: payload.debts
    }
  }

   default:
     return state;
 }

}
export default reducer;