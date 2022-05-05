import { useState } from "react";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import axios from "axios";
import './Login.scss';
import { connect } from "react-redux";
import {  login} from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email:"",
    password:""
  });
  const {email,password}=formData;
  const onChange =e=>setFormData({...formData, [e.target.name]:e.target.value});
  

  const onSubmit = async(e)=>{
    e.preventDefault();
    login(email,password);
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

Login.propTypes={
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
const mapStateToProps = (state)=>({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{ login })(Login);