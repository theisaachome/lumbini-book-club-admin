import { useState } from "react";
import axios from "axios";
import './Login.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    email:"",
    password:""
  });
  const {email,password}=formData;
  const onChange =e=>setFormData({...formData, [e.target.name]:e.target.value});
  

  const onSubmit = async(e)=>{
    e.preventDefault();
    const credential = {email,password};
    try {
      const config={
        headers:{
          'Content-Type':"application/json"
        }
      }
      const result =  await axios.post("/api/v1/auth/login",JSON.stringify(credential),config);
    console.log(result.data);
    } catch (err) {
      console.error(err.response.data);
    }
  }
  return (
    <>
     <h3>Login Your Account</h3>
      <form onSubmit={e=>onSubmit(e)}>
        <input 
          type="email" 
          placeholder="Your email address"
          name="email"
          value={email}
          onChange={e=>onChange(e)}
           />
        <input 
          type="password" 
          placeholder="Your password "
          name="password"
          value={password}
          onChange={e=>onChange(e)}
           />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login