


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  };
  
const authReducer =(state = initialState, action)=>{
    const { type, payload } = action;

    

}