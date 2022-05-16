import { AUTHOR_ERROR, GET_AUTHORS } from "../actions/types";



const initialState = {
    authors: [],
    author: null,
    loading: true,
    error: {}
  };
  


const  authorReducer=(state = initialState, action)=> {
    const { type, payload } = action;
    switch (type) {
        case GET_AUTHORS:
            return {
                ...state,
                authors: payload,
                loading: false
              };
        case AUTHOR_ERROR:
            return {
                ...state,
                error:payload,
                loading:false,
            }
        default:
            return state;
    }
}  

export default authorReducer;