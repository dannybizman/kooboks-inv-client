import React from "react";
import "./verify.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/carousel";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";

const Verify = () => {
  return (
    <>
      <div className="">
        <Header />

        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-dark">
          <div class="card bg-dark border-0 mb-7">
            <div className="row g-0">
              <div className="col-md-4 align-items-center d-flex justify-content-center">
                <img
                  src="../assets/img/verify-kb.jpeg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8 align-items-center d-flex justify-content-center">
                <div className="card-body">
                  <h2 className="card-title text-white text-center">
                    Account Verification
                  </h2>
                  <p className="card-text text-white text-center">
                    To verify your account, click on the button below.
                  </p>
                  <div className="align-items-center d-flex justify-content-center btn btn-success">
                    Verify Account
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

export default Verify;
