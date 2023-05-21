import "./home.css";
import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/carousel";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
    <div className="">
      <Header />
      <div className="">
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="../assets/img/banner1.png" alt=""className=""/>
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
   <img src="../assets/img/banner2.png" alt=""className=""/>
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
           <img src="../assets/img/banner3.png" alt=""className=""/>
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
      {/* Custom cards */}

      
  <div className="container px-4 py-5" id="custom-cards">
    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-1.jpg')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('unsplash-photo-2.jpg')"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('unsplash-photo-3.jpg')"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* featurs with title */}
  <div className="container px-4 py-5">
    <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div className="col d-flex flex-column align-items-start gap-2">
        <h3 className="fw-bold">An Inventory Application with awesome features</h3>
        <p className="text-body-secondary">
          Manage all products stock in real time.
        </p>
        <NavLink to="/register" className="btn btn-primary btn-lg">Get Started</NavLink>
      </div>

      <div className="col">
        <div className="row row-cols-1 row-cols-sm-2 g-4">
          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <i className="bi bi-collection" width="1em" height="1em" />
            </div>
            <h4 className="fw-semibold mb-0">Featured title</h4>
            <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
          </div>

          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <i className="bi bi-gear-fill" width="1em" height="1em" />       
            </div>
            <h4 className="fw-semibold mb-0">Featured title</h4>
            <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
          </div>

          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <i className="bi bi-speedometer" width="1em" height="1em" />
            </div>
            <h4 className="fw-semibold mb-0">Featured title</h4>
            <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
          </div>

          <div className="col d-flex flex-column gap-2">
            <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              <i className="bi bi-table" width="1em" height="1em" />
            </div>
            <h4 className="fw-semibold mb-0">Featured title</h4>
            <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default Home;
