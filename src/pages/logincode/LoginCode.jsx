import { NavLink } from "react-router-dom";
import "./loginCode.css";
import React, {useState} from "react";

const LoginCode = () => {
    const [loginCode, setLoginCode] = useState("");
   

    
    const loginUser = () => {};

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="form_container p-5 rounded bg-white">
        <div>
          <NavLink
            to="/"
            className="align-items-center d-flex justify-content-center"
          >
            <img
              src="../../assets/img/koolboks-logo.png"
              alt=""
              className="logo-auth"
            />
          </NavLink>
        </div>

        <form onSubmit={loginUser}>
          <h3 className="text-center">Enter Access Code</h3>
          <div className="mb-2">
          <input 
            type="text"
            name="loginCode"
            value={loginCode}
            onChange={(e) => setLoginCode(e.target.value)}
            placeholder="Access Code" 
            className="form-control" />
          </div>

          <div className="d-grid">
            <button className="btn btn-auth btn-sm">Proceed To Login </button>
            <small className="text-center mb-3">
              Check your email for login access code
            </small>
          </div>

          <p className="text-center mt-2">
            No Code sent? <span>Resend Code</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginCode;
