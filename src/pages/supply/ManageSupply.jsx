import React from 'react';
import SupplyCard from "../../components/supplycard/SupplyCard";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";


const ManageSupply = () => {
  return (
    <>
    <div className="d-flex sidebar">
      <div className="w-auto">
        <Sidebar />
        
      </div>
      <div className="col overflow-auto">
        <Navbar />
        <SupplyCard />
        <div className="p-5">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Manage Store</h1>
          </div>
        </div>
        
   </ div>
   </ div>
  </>

  )
}

export default ManageSupply;