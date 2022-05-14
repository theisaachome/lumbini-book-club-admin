
import { 
  REGISTER_SUCCESS,
  // REGISTER_FAIL, 
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGIN_FAIL,
  AUTH_ERROR,
  REGISTER_FAIL} from "../actions/types";



const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};
 

const authReducer =(state = initialState, action)=>{
    const { type, payload } = action;
    switch (type) {
      case USER_LOADED:
        return{
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload
        }
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem("token",payload.token);
        return{
          ...state,
          ...payload,
          isAuthenticated:true,
          loading:false,
        }
      case LOGIN_FAIL:
      case AUTH_ERROR:
      case REGISTER_FAIL:
        localStorage.removeItem("token");
        return{
          ...state,
          isAuthenticated:false,
          token:null,
          loading:false,
        }
      default:
        return state;
    }
}
export default authReducer;