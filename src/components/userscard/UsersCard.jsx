import "./usersCard.css";
import React from "react";

const UsersCard = () => {
  return (
    <div className="container-fluid">
    <div className="p-3 bg-light">
      
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <span className="">
        <h5 className="">Inventory Status:</h5>
        <small className="">stock updated 5mins ago.</small></span>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <span className="">online <i className="bi bi-globe text-success"/></span>
          </div>
          <span className="border border-outline-secondary bg-dark text-white">
            08:00::04-13-2023
          </span>
        </div>
      </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-info border border-secondary shadow-sm">
              <i className="bi bi-people fs-1 text-white"/>
              <div className="text-white text-end">
                <span>Total Users</span>
                <h4>9</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-success border border-secondary shadow-sm">
              <i className="bi bi-person-check fs-1 text-white"/>
              <div className="text-white text-end">
                <span>Verified Users</span>
                <h4>4</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-warning border border-secondary shadow-sm">
              <i className="bi bi-person-exclamation fs-1 text-white"/>
              <div className="text-white text-end">
                <span>Pending Users</span>
                <h4>3</h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-danger border border-secondary shadow-sm">
              <i className="bi bi-person-dash fs-1 text-white"/>
              <div className="text-white text-end">
                <span>Deleted Users</span>
                <h4>2</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
