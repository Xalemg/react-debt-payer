import {  combineReducers } from "redux";
import debts from './debts';
import user from './loginReducer'
import utils from './utils'


export const reducer = combineReducers({
    debts,
    utils,
    user,
});
