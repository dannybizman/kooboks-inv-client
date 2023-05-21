import { NavLink } from "react-router-dom";
import "./register.css";
import React, { useEffect, useState } from "react";
import PasswordInput from "../../components/passwordInput/PasswordInput";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <i className="bi bi-x text-danger fs-6" />;
  const checkIcon = <i className="bi bi-check-all  text-success fs-6" />;

  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    }
    return timesIcon;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    //Check Lower and UpperCase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUCase(true);
    } else {
      setUCase(false);
    }

    // Check For Numbers
    if (password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }

    // Check For Special char

    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSChar(true);
    } else {
      setSChar(false);
    }

    // Check For Password Length
    if (password.length > 5) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

  const loginUser = () => {};

  return (
    <div className="register template d-flex justify-content-center align-items-center vh-100  bg-dark">
      <div className="form_container p-3 rounded bg-white">
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
          <h3 className="text-center">Register</h3>
          <div className="mb-2">
            <input
              type="text"
              required
              name="name"
              value={name}
              onChange={handleInputChange}
              placeholder="Full name"
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Email"
              className="form-control"
            />
          </div>

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

          {/* Password Strenght */}

          <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card px-4" style={{ width: "18rem" }}>
                  <ul className="list-group list-group-sm list-group-flush">
                    <li className="list-group-item">
                      <span>
                        {switchIcon(uCase)}
                        &nbsp; <small>Lowercase & upperCase</small>
                      </span>
                    </li>
                    <li className="list-group-item">
                      <span>
                        {switchIcon(num)}
                        &nbsp; <small>Number(0-9)</small>{" "}
                      </span>
                    </li>
                    <li className="list-group-item">
                      <span>
                        {switchIcon(sChar)}
                        &nbsp; <small>Special Character(!@3$%^*-)</small>
                      </span>
                    </li>
                    <li className="list-group-item">
                      <span>
                        {switchIcon(passLength)}
                        &nbsp; <small> At least (6) Character</small>{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="d-grid mt-2">
            <button className="btn btn-auth btn-sm">Register</button>
          </div>
          <p className="text-center mt-2">
            Already created an account ? <NavLink to="/login">Login</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
