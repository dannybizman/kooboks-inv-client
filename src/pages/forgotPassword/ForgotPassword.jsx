import { NavLink } from "react-router-dom";
import "./forgotPassword.css";
import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-dark">
    <div className="form_container p-5 rounded bg-white">
    <NavLink  to="/" className="align-items-center d-flex justify-content-center">
        <img src="../../assets/img/koolboks-logo.png" alt="" className="logo-auth"/>
        </NavLink>
    <form>
        <h3 className="text-center">Forget Password</h3>
        <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email address" className="form-control" />
        </div>

        <div className="d-grid">
            <button className="btn btn-auth btn-sm">Reset Password</button>
        </div>
        
        <p className="text-center mt-2">Remember Password ? <NavLink to="/login">Login</NavLink></p>
    </form>
    </div>
    </div>
  )
}

export default ForgotPassword;