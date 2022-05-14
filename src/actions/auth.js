import api from "../utils/api";
import setAuthToken from "../utils/setAuthToken";
import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, USER_LOADED } from "./types";


// load user
export const loadUser = ()=>async(dispatch)=>{
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try {
        const res= await api.get("/auth/me");
        const {account} = res.data;
        dispatch({
            type:USER_LOADED,
            payload:account,
        })
    } catch (err) {
        console.log(err);
       dispatch({type:AUTH_ERROR})
    }
}

// login user
export const login = (email, password) => async (dispatch) => {
    const body = { email, password };
    try {
        const res = await api.post('/auth/login', body);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        // const errors = err.response.data.errors;
        console.log(err);
        dispatch({
            type: LOGIN_FAIL
        });
    }

}

// Logout
export const logout = () => ({ type: LOGOUT });
