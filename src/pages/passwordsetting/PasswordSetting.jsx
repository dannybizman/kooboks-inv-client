import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./passwordSetting.css";
import React, {useState} from 'react'
import PasswordInput from "../../components/passwordInput/PasswordInput";


const initialState = {
    password: "",
    password2: ""
  };

const PasswordSetting = () => {
  const [formData, setFormData] = useState(initialState);
  const { password, password2 } = formData;


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  return (
    <>
      <div className="d-flex">
        <div className="w-auto">
          <Sidebar />
        </div>
        <div className="col overflow-auto">
          <Navbar />
          <div className="p-5">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Settings</h1>
      </div>
          </div>
          <div className="mb-4 container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="card border-3">
                  <div className="card-body">
                    <h5 className="card-title text-center">Change Password</h5>
                   
                    <form>
                      <PasswordInput
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        className="form-control"
                      />

                      <PasswordInput
                        placeholder="Confirm password"
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                      />

                      <div className="d-grid-none">
                        <button className="btn btn-auth btn-sm">
                          Reset Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
        </div>
        </div>
      </div>
      </>
  )
}

export default PasswordSetting