import api from "../utils/api"
import { AUTHOR_ERROR, GET_AUTHORS } from "./types";



export const getAuthors = ()=> async (dispatch) =>{
   try {
       const res = await api.get("/authors");
       console.log(res.data);
       dispatch({
        type:GET_AUTHORS,
        payload:res.data
       });
   } catch (err) {
    dispatch({
        type: AUTHOR_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
   } 
}