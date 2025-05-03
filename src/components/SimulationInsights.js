import React from 'react';
import { useSelector } from 'react-redux';
import RecoveryDonutChart from './charts/RecoveryDonutChart';
import '../css/SimulationInsights.css';

const SimulationInsights = () => {

  const recovery = useSelector(state => state.feedWater.parameters['Recovery(%)'])

  return (
    <div className="simulation-insights">
      <div className="chart-box">
        <h3>Salinity</h3>
        <div className="chart-wrapper">
          <svg viewBox="0 0 300 150" className="chart">
            <path 
              d="M0,140 C50,130 100,100 150,70 S250,20 300,10" 
              className="chart-line" 
            />
            <g className="y-axis">
              <text x="5" y="140">0</text>
              <text x="5" y="100">20</text>
              <text x="5" y="60">40</text>
              <text x="5" y="20">60</text>
            </g>
            <g className="x-axis">
              {/* <text x="0" y="145">0</text> */}
              <text x="300" y="145">100</text>
            </g>
          </svg>
        </div>
      </div>

    {/* Add the donut chart here */}
    <div className="parameter-row">
      <RecoveryDonutChart recovery={recovery} />
    </div>

      
      <div className="quick-tips">
        <h3>Quick Tips</h3>
        <div className="tip">
          <div className="lightbulb-icon"></div>
          <p>Ensure the feed water is properly pre-treated to prolong membrane life.</p>
        </div>
      </div>
    </div>
  );
};

export default SimulationInsights;