import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
import React from 'react'

const Setting = () => {
  return (
    <>
      <div className="d-flex">
        <div className="w-auto">
          <Sidebar />
        </div>
        <div className="col overflow-auto">
          <Navbar />
          <Card />  
          <div className="p-5">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Settings</h1>
      </div>
          </div>
        </div>
      
      </div>
      </>
  )
}

export default Setting