import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./userProfile.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";

const initialState = {
  password: "",
  password2: "",
};

const UserProfile = () => {
  const [formData, setFormData] = useState(initialState);

  const { password, password2 } = formData;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = () => {};

  return (
    <>
      <div className="d-flex sidebar">
        <div className="w-auto">
          <Sidebar />
        </div>
        <div className="col overflow-auto">
          <Navbar />
          <div className="p-5">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">My Profile</h1>
            </div>
          </div>
          <div className="container mb-4">
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card border-3">
                <img src="../assets/img/avatarr.png" className="profile-img mt-3" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title mb-3 text-center">Profile Details</h5>

                    <form>
                      <div className="mb-3">
                        <label
                          className="custom-file-label form-label"
                          for="inputGroupFile"
                        >
                         Profile Image
                        </label>
                        <span
                          action="/upload"
                          method="post"
                          enctype="multipart/form-data"
                        >
                          <div className="input-group form-control">
                            <input
                              type="file"
                              className="bi bi-images fs-7"
                              name="image"
                            />
                          </div>
                        </span>
                      </div>

                      <div className="mb-2">
                      <label className="form-label">Full Name:</label>
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleInputChange}
                          placeholder="Full name"
                          className="form-control"
                        />
                      </div>

                      <div className="mb-2">
                      <label className="form-label">Email:</label>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>

                      <div className="mb-2">
                      <label className="form-label">Phone Number:</label>
                        <input
                          type="text"
                          name="phone"
                          value={phone}
                          onChange={handleInputChange}
                          placeholder="Phone number"
                          className="form-control"
                        />
                      </div>

                      <div className="d-grid-none">
                      
                        <button className="btn btn-auth btn-sm">Update profile</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-3">
                  <div className="card-body">
                    <h5 className="card-title text-center">Change Password</h5>

                    <form>
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
      </div>
    </>
  );
};

export default UserProfile;
