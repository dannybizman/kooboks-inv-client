import "./header.css";
import React from 'react';
import "bootstrap/js/dist/collapse";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <>
     <div className="container">
    <header className="navbar navbar-expand-lg">
      <div className="col-md-3 mb-2 mb-md-0 mt-2">
        <NavLink to="/" className="d-inline-flex link-body-emphasis text-decoration-none bg-white">
        <img src="../assets/img/koolboks-logo.png" alt="" className="kb_logo"/>
        </NavLink>
      </div>
      <div className="container-fluid">
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
        <NavLink to="/login" className="btn btn-outline-dark me-2">
            Login
            </NavLink>
        <NavLink to="/register" className="btn btn-auth">Sign-up</NavLink>
      </div>
     </div>
     </div> 
     </div>
    </header>
  </div>
    </>
  )
}

export default Header;