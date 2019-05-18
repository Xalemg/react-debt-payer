import { createStore, combineReducers } from "redux";
import debts from './reducers/debts';
import user from './reducers/user'

const reducer = combineReducers({
    debts,
    user
});

const store = createStore(reducer);

export default store;