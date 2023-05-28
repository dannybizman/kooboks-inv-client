import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./userProfile.css";
import React, { useState } from "react";

const initialState = {
  name: "Jinadu Okon",
  email: "okon@koolboks.com",
  phone: "+33 xxxx-xxxx-xx",
  bio: "Store manager For Koolboks Warehouse",
  photo: "",
  role: "Store Manager",
  
  IsVerified: "false",
};

const UserProfile = () => {
  const [profile, setProfile] = useState(initialState);

  const {
    password, 
    password2 
  } = profile;

  const handleInputChange = () => {};

  const handleImageChange = () => {};

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
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card border-3">
                  <div className="bg-dark">
                    <img
                      src="../assets/img/avatarr.png"
                      className="profile-img mt-3"
                      alt="..."
                    />
                    <h4 className="text-white text-center">
                      Role: Super Admin
                    </h4>
                  </div>

                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label
                          className="custom-file-label form-label"
                          for="inputGroupFile"
                        >
                          Change Profile
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
                              accept="image/*"
                              name="image"
                              onChange={handleImageChange}
                            />
                          </div>
                        </span>
                      </div>

                      <div className="mb-2">
                        <label className="form-label">Full Name:</label>
                        <input
                          type="text"
                          name="name"
                          value={profile.name}
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
                          value={profile.email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          className="form-control"
                          disabled
                        />
                      </div>

                      <div className="mb-2">
                        <label className="form-label">Phone Number:</label>
                        <input
                          type="text"
                          name="phone"
                          value={profile.phone}
                          onChange={handleInputChange}
                          placeholder="Phone number"
                          className="form-control"
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          className="form-label"
                        >
                         Bio
                        </label>
                        <textarea
                          className="form-control"
                          name="bio"
                          value={profile.bio}
                          onChange={handleInputChange}
                          rows="3"
                        ></textarea>
                      </div>

                      <div className="d-grid-none">
                        <button className="btn btn-auth btn-sm">
                          Update profile
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
