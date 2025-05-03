import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const RecoveryDonutChart = ({ recovery }) => {
  // Convert recovery from string to number and ensure it's between 0-100
  const recoveryValue = parseFloat(recovery) || 0;
  const remainingValue = 100 - recoveryValue;
  
  // Data for the donut chart
  const data = {
    labels: ['Recovery', 'Remaining'],
    datasets: [
      {
        data: [recoveryValue, remainingValue],
        backgroundColor: ['#3498db', '#ecf0f1'], // Blue for recovery, light gray for remaining
        borderColor: ['#2980b9', '#bdc3c7'],
        borderWidth: 1,
      },
    ],
  };
  
  // Options for the donut chart
  const options = {
    cutout: '70%', // Makes it a donut chart
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    },
  };
  
  return (
    <div className="recovery-chart-container">
      <div className="chart-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '150px', margin: '0 auto' }}>
        <Doughnut data={data} options={options} />
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{recoveryValue}%</div>
          <div style={{ fontSize: '0.8rem' }}>Recovery</div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryDonutChart;