import Card from "../../components/card/Card";
import LineChart from "../../components/linechart/LineChart";
import Navbar from "../../components/navbar/Navbar";
import PieChart from "../../components/piechart/PieChart";
import Sidebar from "../../components/sidebar/Sidebar";
import "./report.css";
import React from 'react'

const Report = () => {
  return (
    <>
    <div className="d-flex sidebar">
        <div className="w-auto">
          <Sidebar />
        </div>
        <div className="col overflow-auto">
          <Navbar />
          <Card />  
          <div className="container-fluid">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Reports</h1>
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
          <div className="row">
          <div className="col-12 col-md-8 p-3">
          <LineChart />
          </div>
          <div className="col-12 col-md-4 p-3">
            <PieChart />
          </div>  
          </div> 
          </div>
        </div>
      
      </div>
    </>
  )
}

export default Report