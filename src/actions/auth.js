import api from "../utils/api";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./types";


// login user
export const loginUser = (email, password) => async (dispatch) => {
    const body = { email, password };

    try {
        const res = await api.post('/auth/login', body);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {

        const errors = err.response.data.errors;
        console.log(errors);
        dispatch({
            type: LOGIN_FAIL
        });
    }

}

// Logout
export const logout = () => ({ type: LOGOUT });
