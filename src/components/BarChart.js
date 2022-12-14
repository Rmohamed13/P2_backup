import React from 'react'
import {Bar, Radar} from "react-chartjs-2"
import {Chart as ChartJS} from 'chart.js/auto'

function BarChart({chartData}) {
    
  return (
    <Radar data={chartData} />
  )
}

export default BarChart

