import { NavLink } from "react-router-dom";
import "./navbar.css";
import React from "react";
import "bootstrap/js/dist/collapse";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a href="" className="d-block d-md-none">
          <i className="bi bi-justify fs-3"/></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0"> 
          <div className="mx-2">
          <button className="btn btn-md btn-outline-secondary text-white">
                Account <span><i className="bi bi-person-circle"/></span>
            </button>
          </div>
          <div>
          <button className="btn btn-md btn-outline-danger text-white">
                Logout <span><i className="bi bi-box-arrow-right"/></span>
            </button>
          </div>

          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
