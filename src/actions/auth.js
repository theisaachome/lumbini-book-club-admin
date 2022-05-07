import api from "../utils/api";
import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, USER_LOADED } from "./types";


// load user
export const loadUser = ()=>async(dispatch)=>{
    try {
        const res= await api.get("/auth/me");
        console.log(res);
        dispatch({
            type:USER_LOADED,
            payload:res.data,
        })
    } catch (err) {
        console.log(err.response.data.error);
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
        // dispatch(loadUser());
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
