import React, { useState } from "react";
import "../css/ArrayReactorPopup.css";

const ArrayReactorPopup = ({ isOpen, onClose }) => {
  const [stageData, setStageData] = useState([
    {
      stage: 1,
      pressureVessels: 0,
      elementsPerVessel: 0,
      application: "",
      elementGroup: "",
      elementModel: "",
      elementAge: 0.00,
      fluxAnnualChange: 0.00
    },
    {
      stage: 2,
      pressureVessels: 0,
      elementsPerVessel: 0,
      application: "",
      elementGroup: "",
      elementModel: "",
      elementAge: 0.00,
      fluxAnnualChange: 0.00
    }
  ]);

  const handleStageChange = (index, field, value) => {
    const newStageData = [...stageData];
    newStageData[index][field] = value;
    setStageData(newStageData);
  };

  const handleAddStage = () => {
    const newStage = {
      stage: stageData.length + 1,
      pressureVessels: 0,
      elementsPerVessel: 0,
      application: "",
      elementGroup: "",
      elementModel: "",
      elementAge: 0.00,
      fluxAnnualChange: 0.00
    };
    setStageData([...stageData, newStage]);
  };

  const handleRemoveStage = (index) => {
    if (stageData.length <= 1) return;
    const newStageData = stageData.filter((_, i) => i !== index);
    // Update stage numbers
    newStageData.forEach((stage, i) => {
      stage.stage = i + 1;
    });
    setStageData(newStageData);
  };

  if (!isOpen) return null;

  return (
    <div className="reactor-popup-overlay">
      <div className="reactor-popup-container">
        <div className="reactor-popup-header">
          <h2>Array Reactor Configuration</h2>
          <button className="reactor-close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="reactor-popup-content">
          <div className="reactor-table-container">
            <table className="reactor-table">
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Pressure Vessels</th>
                  <th>Elements Per Vessel</th>
                  <th>Element Model</th>
                  <th>Element Age (yr)</th>
                  <th>Flux Annual % Change</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {stageData.map((stage, index) => (
                  <tr key={index}>
                    <td>{stage.stage}</td>
                    <td>
                      <div className="number-input-container">
                        <input 
                          type="number" 
                          value={stage.pressureVessels} 
                          onChange={(e) => handleStageChange(index, 'pressureVessels', parseInt(e.target.value) || 0)}
                          min="0"
                        />
                        <div className="number-controls">
                          <button onClick={() => handleStageChange(index, 'pressureVessels', stage.pressureVessels + 1)}>▲</button>
                          <button onClick={() => handleStageChange(index, 'pressureVessels', Math.max(0, stage.pressureVessels - 1))}>▼</button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="number-input-container">
                        <input 
                          type="number" 
                          value={stage.elementsPerVessel} 
                          onChange={(e) => handleStageChange(index, 'elementsPerVessel', parseInt(e.target.value) || 0)}
                          min="0"
                        />
                        <div className="number-controls">
                          <button onClick={() => handleStageChange(index, 'elementsPerVessel', stage.elementsPerVessel + 1)}>▲</button>
                          <button onClick={() => handleStageChange(index, 'elementsPerVessel', Math.max(0, stage.elementsPerVessel - 1))}>▼</button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <select 
                        value={stage.elementModel} 
                        onChange={(e) => handleStageChange(index, 'elementModel', e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="Model 1">Model 1</option>
                        <option value="Model 2">Model 2</option>
                        <option value="Model 3">Model 3</option>
                      </select>
                    </td>
                    <td>
                      <input 
                        type="number" 
                        value={stage.elementAge} 
                        onChange={(e) => handleStageChange(index, 'elementAge', parseFloat(e.target.value) || 0)}
                        step="0.01"
                        min="0"
                      />
                    </td>
                    <td>
                      <input 
                        type="number" 
                        value={stage.fluxAnnualChange} 
                        onChange={(e) => handleStageChange(index, 'fluxAnnualChange', parseFloat(e.target.value) || 0)}
                        step="0.01"
                      />
                    </td>
                    <td>
                      <button 
                        className="reactor-remove-button" 
                        onClick={() => handleRemoveStage(index)}
                        disabled={stageData.length <= 1}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="reactor-controls">
            <button className="reactor-add-button" onClick={handleAddStage}>
              Add Stage
            </button>
          </div>
          
          <div className="reactor-button-row">
            <button className="reactor-cancel-button" onClick={onClose}>Cancel</button>
            <button className="reactor-ok-button">OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrayReactorPopup;