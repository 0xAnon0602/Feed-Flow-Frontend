import React from 'react';
import { useSelector } from 'react-redux';
import RecoveryDonutChart from './charts/RecoveryDonutChart';
import SalinityChart from './charts/SalinityChart';
import '../css/SimulationInsights.css';

const SimulationInsights = () => {

  const recovery = useSelector(state => state.feedWater.parameters['Recovery(%)'])
  const salinity = useSelector(state => state.feedWater.parameters['Feed Water TDS'])

  return (


    <div className='simulation-insights'>

    <div className="parameter-row">
      <SalinityChart finalSalinity={salinity}/>
    </div>

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