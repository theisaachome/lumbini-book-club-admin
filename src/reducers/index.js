import { combineReducers } from 'redux';
import auth from "./auth";
import author from "./authors";

export default combineReducers({
    auth,
    author,
})