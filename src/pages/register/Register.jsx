import { NavLink } from "react-router-dom";
import "./register.css";
import React from 'react'

const Register = () => {
  return (
    <div className="register template d-flex justify-content-center align-items-center vh-100 bg-dark">
    <div className="form_container p-5 rounded bg-white">
    <NavLink to="/" className="align-items-center d-flex justify-content-center">
        <img src="../../assets/img/koolboks-logo.png" alt="" className="logo-auth"/>
        </NavLink>
    <form>
        <h3 className="text-center">Register</h3>
        <div className="mb-2">
            <label htmlFor="fname">First Name</label>
            <input type="text" placeholder="Enter your first name" className="form-control" />
        </div>
        <div className="mb-2">
            <label htmlFor="lname">Last Name</label>
            <input type="text" placeholder="Enter your last name" className="form-control" />
        </div>

        <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" className="form-control" />
        </div>
        
        <div className="d-grid mt-2">
            <button className="btn btn-auth btn-sm">Register</button>
        </div>
        <p className="text-center mt-2">Already created an account ? <NavLink to="/login">Login</NavLink></p>
    </form>
    </div>
    </div>
  )
}

export default Register;