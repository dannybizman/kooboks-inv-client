import { NavLink } from "react-router-dom";
import "./passwordReset.css";
import React, {useState} from 'react';
import PasswordInput from "../../components/passwordInput/PasswordInput";


const initialState = {
    password: "",
    password2: ""
  };
  

const PasswordReset = () => {
    const [formData, setFormData] = useState(initialState);
    const { password, password2 } = formData;


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-dark">
    <div className="form_container p-5 rounded bg-white">
    <div>
      <NavLink  to="/" className="align-items-center d-flex justify-content-center">
        <img src="../../assets/img/koolboks-logo.png" alt="" className="logo-auth"/>
        </NavLink>
      </div> 
    <form>
        <h3 className="text-center">Reset Password</h3>
        <PasswordInput
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />

          <PasswordInput
            placeholder="Confirm password"
            name="password2"
            value={password2}
            onChange={handleInputChange}
          />

        <div className="d-grid">
            <button className="btn btn-auth btn-sm">Reset Password</button>
        </div>
    </form>
    </div>
    </div>
  )
}

export default PasswordReset;