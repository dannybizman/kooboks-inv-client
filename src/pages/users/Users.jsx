import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./users.css";
import React from 'react'

const Users = () => {
  return (
    <>
    <div className="d-flex sidebar">
      <div className="w-auto">
        <Sidebar />
      </div>
      <div className="col overflow-auto">
        <Navbar />
        <Card />  
        <div className="p-5">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">All Users</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
          <span className="btn btn-success">
            Add User <span><i className="bi bi-people fs-7"/>+</span>
          </span>
          </div>
          
        </div>
      </div>
      <div className="table-responsive mx-auto mt-5">
              <table className="table table-hover table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">No of stock added</th>
                    <th scope="col">Last activity</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Shola  </td>
                    <td>Ebuka Nasiru</td>
                    <td>sen@gmail.com</td>
                    <td>Account Owner</td>
                    <td>100 Products</td>
                    <td>Online</td>
                    <td>
                      <span className="p-1">
                        <i className="bi bi-eye me-1 fs-7" />
                      <span><i className="bi bi-pencil-square me-1 fs-7" /></span>
                      <span><i className="bi bi-trash3 fs-7"/></span>
                    </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Shola  </td>
                    <td>Ebuka Nasiru</td>
                    <td>sen@gmail.com</td>
                    <td>Super Admin</td>
                    <td>100 Products</td>
                    <td>Online</td>
                    <td>
                      <span>
                        <i className="bi bi-eye me-1 fs-7" />
                      <span><i className="bi bi-pencil-square me-1 fs-7" /></span>
                      <span><i className="bi bi-trash3 fs-7"/></span>
                    </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Shola  </td>
                    <td>Ebuka Nasiru</td>
                    <td>sen@gmail.com</td>
                    <td>Admin</td>
                    <td>100 Products</td>
                    <td>Offline</td>
                    <td>
                      <span>
                        <i className="bi bi-eye me-1 fs-7" />
                      <span><i className="bi bi-pencil-square me-1 fs-7" /></span>
                      <span><i className="bi bi-trash3 fs-7"/></span>
                    </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Shola  </td>
                    <td>Ebuka Nasiru</td>
                    <td>sen@gmail.com</td>
                    <td>Super Admin</td>
                    <td>100 Products</td>
                    <td>login 5mins</td>
                    <td>
                      <span>
                        <i className="bi bi-eye me-1 fs-7" />
                      <span><i className="bi bi-pencil-square me-1 fs-7" /></span>
                      <span><i className="bi bi-trash3 fs-7"/></span>
                    </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Shola  </td>
                    <td>Ebuka Nasiru</td>
                    <td>sen@gmail.com</td>
                    <td>Admin</td>
                    <td>100 Products</td>
                    <td>login 5mins</td>
                    <td>
                      <span>
                        <i className="bi bi-eye me-1 fs-7" />
                      <span><i className="bi bi-pencil-square me-1 fs-7" /></span>
                      <span><i className="bi bi-trash3 fs-7"/></span>
                    </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Shola  </td>
                    <td>Ebuka Nasiru</td>
                    <td>sen@gmail.com</td>
                    <td>User</td>
                    <td>100 Products</td>
                    <td>login 5mins</td>
                    <td>
                      <span>
                        <i className="bi bi-eye me-1 fs-7" />
                      <span><i className="bi bi-pencil-square me-1 fs-7" /></span>
                      <span><i className="bi bi-trash3 fs-7"/></span>
                    </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
      </div>
    
    </div>
  </>

  )
}

export default Users;