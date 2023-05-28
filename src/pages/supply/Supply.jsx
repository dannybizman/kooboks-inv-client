import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Supply = () => {
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
              <h1 className="h2">Supply</h1>
            </div>
          </div>

          <div className=" container row row-cols-1 row-cols-md-3 g-4 mb-4">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <img
                    src="../assets/img/product-bg-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">158 Litres</h5>
                  <p className="card-text">Product description goes here...</p>
                 
                </div>
                <div className="card-footer d-flex flex-column h-100 justify-content-center align-items-center">
                  <div className="row">
                    <div className="col"> 
                    <button type="button" className="btn btn-success">
                   <span className="badge text-bg-secondary">4</span>
                  </button>
                  </div>
                    <div className="col">
                      <button className="btn btn-primary"><i className="bi bi-cart-fill"/></button>
                    </div>
                    <div className="col">
                      <button className="btn btn-secondary">
                       <i className="bi bi-eye-fill"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <img
                    src="../assets/img/product-bg-2.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">Battery</h5>
                  <p className="card-text">Product description goes here...</p>
                </div>
                <div className="card-footer d-flex flex-column h-100 justify-content-center align-items-center">
                  <div className="row">
                  <div className="col"> 
                    <button type="button" className="btn btn-danger">
                   <span className="badge text-bg-secondary">0</span>
                  </button>
                  </div>
                    <div className="col">
                      <button className="btn btn-primary"><i className="bi bi-cart-fill"/></button>
                    </div>
                    <div className="col">
                      <button className="btn btn-secondary">
                       <i className="bi bi-eye-fill"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <img
                    src="../assets/img/product-bg-3.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">Solar Pannels</h5>
                  <p className="card-text">Product description goes here...</p>
                </div>
                <div className="card-footer d-flex flex-column h-100 justify-content-center align-items-center">
                  <div className="row">
                  <div className="col"> 
                    <button type="button" className="btn btn-success">
                   <span className="badge text-bg-secondary">4</span>
                  </button>
                  </div>
                    <div className="col">
                      <button className="btn btn-primary"><i className="bi bi-cart-fill"/></button>
                    </div>
                    <div className="col">
                      <button className="btn btn-secondary">
                       <i className="bi bi-eye-fill"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <img
                    src="../assets/img/product-bg-4.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">LED Bulb</h5>
                  <p className="card-text">Product description goes here...</p>
                </div>
                <div className="card-footer d-flex flex-column h-100 justify-content-center align-items-center">
                  <div className="row">
                  <div className="col"> 
                    <button type="button" className="btn btn-danger">
                   <span className="badge text-bg-secondary">0</span>
                  </button>
                  </div>
                    <div className="col">
                      <button className="btn btn-primary"><i className="bi bi-cart-fill"/></button>
                    </div>
                    <div className="col">
                      <button className="btn btn-secondary">
                       <i className="bi bi-eye-fill"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-body">
                  <img
                    src="../assets/img/product-bg-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">208 Litres</h5>
                  <p className="card-text">Product description goes here...</p>
                </div>
                <div className="card-footer d-flex flex-column h-100 justify-content-center align-items-center">
                  <div className="row">
                  <div className="col"> 
                    <button type="button" className="btn btn-success">
                   <span className="badge text-bg-secondary">4</span>
                  </button>
                  </div>
                    <div className="col">
                      <button className="btn btn-primary"><i className="bi bi-cart-fill"/></button>
                    </div>
                    <div className="col">
                      <button className="btn btn-secondary">
                       <i className="bi bi-eye-fill"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-body">
                  <img
                    src="../assets/img/product-bg-2.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">Battery</h5>
                  <p className="card-text">Product description goes here...</p>
               
                </div>
                <div className="card-footer d-flex flex-column h-100 justify-content-center align-items-center">
                  <div className="row">
                  <div className="col"> 
                    <button type="button" className="btn btn-success">
                   <span className="badge text-bg-secondary">4</span>
                  </button>
                  </div>
                    <div className="col">
                      <button className="btn btn-primary"><i className="bi bi-cart-fill"/></button>
                    </div>
                    <div className="col">
                      <button className="btn btn-secondary">
                       <i className="bi bi-eye-fill"/>
                      </button>
                    </div>
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

export default Supply;
