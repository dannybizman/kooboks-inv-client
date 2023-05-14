import "./product.css";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import React from "react";

const AddProduct = () => {
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
              <h1 className="h2">Add Product</h1>
            </div>
          </div>

          <div className="p-5 align-content-center mb-2 mt-4">
            <form className="row g-3">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Product Title
                </label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-3">
                <label for="inputPassword4" className="form-label">
                  Product quantity
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>

              <div className="col-md-3">
                <label for="inputCity" className="form-label">
                  Product Price
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>

              <div className="col-md-3">
                <label for="inputState" className="form-label">
                  Product Category
                </label>
                <input type="text" className="form-control" id="inputCity" />{" "}
              </div>
              <div className="col-sm-4">
                <label
                  className="custom-file-label form-label"
                  for="inputGroupFile"
                >
                  {" "}
                  Product Image
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
              <div className="col-md-12">
                <label for="inputState" className="form-label">
                  Stock Overview
                </label>
                <div class="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-chat-left-text-fill fs-4" />
                  </span>
                  <textarea
                    class="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </div>
              </div>

              <div className="col-12 mt-4">
                <button type="submit" className="btn btn-success">
                  <span className="p-2">
                    <i className="bi bi-cloud-plus-fill fs-5 p-2"></i>
                  </span>
                  <span className="fs-7">Save</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
