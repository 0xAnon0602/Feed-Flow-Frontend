import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalinityChart = ({ finalSalinity }) => {
  // Create a simple straight line with just two points
  const data = {
    labels: ['', ''],  // Empty labels for x-axis
    datasets: [
      {
        data: [0, finalSalinity],
        borderColor: '#3498db',
        backgroundColor: 'transparent',
        borderWidth: 3,
        pointBackgroundColor: '#3498db',
        pointRadius: 5,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        tension: 0, // Straight line
        fill: false,
      },
    ],
  };

  // Options for the line chart
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#666',
          callback: function(value) {
            return value.toLocaleString();
          }
        }
      },
      x: {
        display: false, // Hide x-axis completely
        grid: {
          display: false
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false
      }
    },
  };

  return (
    <div className="salinity-chart-container" style={{ position: 'relative', height: '200px', width: '100%', marginTop: '20px' }}>
      <Line data={data} options={options} />
      <div style={{ 
        position: 'absolute', 
        bottom: '12px', 
        fontSize: '17px', 
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
      Salinity
      </div>
    </div>
  );
};

export default SalinityChart;