import "./piechart.css";
import React from 'react';
import Chart from 'chart.js/auto';
import { Pie } from "react-chartjs-2";


const PieChart = () => {
    const labels = ["January", "February", "March", "April",];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "My first dataset",
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                  ],
                borderColor: "	rgb(255,165,0)",
                data:[300, 50, 150, 200,],
                hoverOffset: 4
                
            },
        ],
    };

  return (
    <>
     <div className="bg-white border border-secondary">
        <Pie data={data} ></Pie>
    </div>
    </>
   

  )
}

export default PieChart;