/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sidebar.css";
import React, { useState } from "react";
import "bootstrap/js/dist/dropdown";

const Sidebar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="sidebarA container-fluid d-flex jsutify-content-between flex-column bg-dark text-white p-2 vh-100">
      <div className="vh-100">
        <div className="fs-4 me-4 mt-4 bg-white pt-2">
          <NavLink to="/" className="p-3 text-decoration-none text-white">
            <img
              src="../assets/img/koolboks-logo.png"
              alt=""
              className="kb_logo"
            />
          </NavLink>
        </div>
        <hr className="text-secondary mt-2" />
        <ul className="nav nav-pills flex-column mt-2">
          <li
            className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(1)}
          >
            <NavLink
              to="/dashboard"
              className="text-decoration-none text-white p-2"
            >
              <i className="bi bi-speedometer2 me-3 fs-4"></i>
              <span className="fs-6">Overview</span>
            </NavLink>
          </li>

       

          <li
            className={active === 2 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(2)}
          >
            <NavLink
              to="/add/product"
              className="text-decoration-none text-white p-2"
            >
              <i className="bi bi-plus-circle me-3 fs-4"></i>
              <span className="fs-6">Add Product</span>
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link nav-item text-decoration-none text-white p-2 dropdown-toggle"
              href="#"
              id="sidebarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-shop me-3 fs-4" />
              <span className="fs-6">Store</span>
            </a>

            <ul className="dropdown-menu bg-dark" aria-labelledby="sidebarDropdown">
          <li
            className={active === 3 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(3)}
          >
            <NavLink
              to="/supply"
              className="text-decoration-none text-white p-2"
            >
              <i className="bi bi-truck me-3 fs-5"></i>
              <span className="fs-7">Supply</span>
            </NavLink>
          </li>

          <li
            className={active === 3 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(3)}
          >
            <NavLink
              to="/manage/store"
              className="text-decoration-none text-white p-2"
            >
              <i className="bi bi-boxes me-3 fs-7"></i>
              <span className="fs-12">Manage</span>
            </NavLink>
          </li>

          </ul>
          </li>
          
          <li className="nav-item dropdown">
            <a
              className="nav-link nav-item text-decoration-none text-white p-2 dropdown-toggle"
              href="#"
              id="sidebarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-tools me-3 fs-4" />
              <span className="fs-6">Settings</span>
            </a>

            <ul className="dropdown-menu bg-dark" aria-labelledby="sidebarDropdown">
              <li
                className={
                  active === 4 ? "active nav-item p-2 " : "nav-item p-2"
                }
                onClick={(e) => setActive(4)}
              >
                <NavLink
                  to="/user/profile"
                  className="text-decoration-none text-white p-2"
                >
                  <i className="bi bi-person-circle me-3 fs-7" />
                  <span className="fs-12">Edit Profile</span>
                </NavLink>
              </li>

              <li
                className={
                  active === 5 ? "active nav-item p-2" : "nav-item p-2"
                }
                onClick={(e) => setActive(5)}
              >
                <NavLink
                  to="/users"
                  className="text-decoration-none text-white p-2"
                >
                  <i className="bi bi-people me-3 fs-7" />
                  <span className="fs-12">Users</span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li
            className={active === 6 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => setActive(6)}
          >
            <NavLink
              to="/report"
              className="text-decoration-none text-white p-2"
            >
              <i className="bi bi-grid me-3 fs-4" />
              <span className="fs-6">Report</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-white" />

        <div className="nav-item p-2">
          <NavLink to="/user/profile" className="sb_nav_items p-1">
            <i className="bi bi-person-circle me-3 fs-3"></i>
            <span className="fs-4">
              <strong>Ayoola</strong>
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
