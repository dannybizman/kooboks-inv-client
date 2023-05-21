import "./login.css";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleInputChange = () => {};

    const loginUser = () => {};

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-dark">
    
    <div className="form_container p-5 rounded bg-white">
    <div>
      <NavLink  to="/" className="align-items-center d-flex justify-content-center">
        <img src="../../assets/img/koolboks-logo.png" alt="" className="logo-auth"/>
        </NavLink>
      </div>
        
    <form onSubmit={loginUser}>
        <h3 className="text-center">Login</h3>
        <div className="mb-2">
            <input 
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email" 
            className="form-control" />
        </div>

        <PasswordInput 
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleInputChange}
        />

        <p className="mt-2">
            Forgot <NavLink to="/forget/password">Password</NavLink> ?
        </p>

        <div className="d-grid">
            <button className="btn btn-auth btn-sm">Login</button>
        </div>
        <p className="text-center mt-2">Dont have an account ? <NavLink to="/register">Register</NavLink></p>
    </form>
    </div> 
    </div>
  )
}

export default Login; 