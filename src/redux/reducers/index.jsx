import {  combineReducers } from "redux";
import debts from './debtsReducer';
import user from './userReducer'
import utils from './utils'


export const reducer = combineReducers({
    utils,
    user,
    debts
});
