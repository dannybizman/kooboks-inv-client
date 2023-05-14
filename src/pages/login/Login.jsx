import "./login.css";
import React from 'react';
import { NavLink } from "react-router-dom";


const Login = () => {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-dark">
    <div className="form_container p-5 rounded bg-white">
        <NavLink to="/"  className="align-items-center d-flex justify-content-center">
        <img src="../../assets/img/koolboks-logo.png" alt="" className="logo-auth"/>
        </NavLink>
        
    <form>
        <h3 className="text-center">Login</h3>
        <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email address" className="form-control" />
        </div>

        <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" className="form-control" />
        </div>
        <div className="mb-2">
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label ms-2">Remember me</label>
        </div>

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