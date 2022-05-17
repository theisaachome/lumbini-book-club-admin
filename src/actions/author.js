import api from "../utils/api"
import { ADD_AUTHOR, AUTHOR_ERROR, GET_AUTHORS } from "./types";


// get authors
export const getAuthors = ()=> async (dispatch) =>{
   try {
       const res = await api.get("/authors");
       const {data} =res.data; 
       dispatch({
        type:GET_AUTHORS,
        payload:data
       });
   } catch (err) {
    dispatch({
        type: AUTHOR_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
   } 
}

// add new author
export const addAuthor = (formData)=>async (dispatch)=>{
    try {
        
        const res = await api.post('/authors',formData);
        dispatch({
            type:ADD_AUTHOR,
            payload:res.data.data,
        })
    } catch (err) {
         dispatch({
        type: AUTHOR_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
}