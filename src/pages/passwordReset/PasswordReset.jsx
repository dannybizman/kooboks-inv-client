import { NavLink } from "react-router-dom";
import "./passwordReset.css";
import React from 'react'

const PasswordReset = () => {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-dark">
    <div className="form_container p-5 rounded bg-white">
    <NavLink  to="/" className="align-items-center d-flex justify-content-center">
        <img src="../../assets/img/koolboks-logo.png" alt="" className="logo-auth"/>
        </NavLink>
    <form>
        <h3 className="text-center">Reset Password</h3>
        <div className="mb-2">
            <label htmlFor="new password">New Password</label>
            <input type="email" placeholder="Enter a new password" className="form-control" />
        </div>

        <div className="mb-2">
            <label htmlFor="confirm password">Confrim Password</label>
            <input type="password" placeholder="Confirm new password" className="form-control" />
        </div>

        <div className="d-grid">
            <button className="btn btn-auth btn-sm">Change Password</button>
        </div>
    </form>
    </div>
    </div>
  )
}

export default PasswordReset;