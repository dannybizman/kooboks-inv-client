import { NavLink } from "react-router-dom";
import "./forgotPassword.css";
import React, {useState} from 'react'

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = () => {};
  
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-dark">
    <div className="form_container p-5 rounded bg-white">
      <div>
      <NavLink  to="/" className="align-items-center d-flex justify-content-center">
        <img src="../../assets/img/koolboks-logo.png" alt="" className="logo-auth"/>
        </NavLink>
      </div>
   
    <form>
        <h3 className="text-center">Forgot Password</h3>
        <div className="mb-2">
        <input 
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email" 
            className="form-control" />
        </div>

        <div className="d-grid">
            <button className="btn btn-auth btn-sm">Get Reset Email</button>
        </div>
        
        <p className="text-center mt-2">Remember Password ? <NavLink to="/login">Login</NavLink></p>
    </form>
    </div>
    </div>
  )
}

export default ForgotPassword;