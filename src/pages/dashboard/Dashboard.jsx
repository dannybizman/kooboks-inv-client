import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./dashboard.css";
import React from "react";

const Dashboard = () => {
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
        <h1 className="h2">Inventory Items</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>
            <div className="table-responsive mx-auto mt-5">
              <table className="table table-hover table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Value</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>208 Litres Freezer </td>
                    <td>Freezer</td>
                    <td>₦200, 000</td>
                    <td>10</td>
                    <td>₦2,000, 000</td>
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
                    <td>1190 Litres Chillers</td>
                    <td>Fridge</td>
                    <td>₦200, 000</td>
                    <td>10</td>
                    <td>₦2,000, 000</td>
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
                    <td>538 Litres Freezer</td>
                    <td>Freezer</td>
                    <td>₦200, 000</td>
                    <td>10</td>
                    <td>₦2,000, 000</td>
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
                    <td>538 Litres Freezer</td>
                    <td>Freezer</td>
                    <td>₦200, 000</td>
                    <td>10</td>
                    <td>₦2,000, 000</td>
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
                    <td>538 Litres Freezer</td>
                    <td>Ice Maker</td>
                    <td>₦200, 000</td>
                    <td>10</td>
                    <td>₦2,000, 000</td>
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
                    <td>538 Litres Freezer</td>
                    <td>Fridge</td>
                    <td>₦200, 000</td>
                    <td>10</td>
                    <td>₦2,000, 000</td>
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
  );
};

export default Dashboard;
