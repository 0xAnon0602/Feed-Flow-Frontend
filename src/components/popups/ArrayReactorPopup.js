import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateStage, addStage, removeStage } from '../../redux/slices/reactorSlice';
import "../../css/ArrayReactorPopup.css";

const ArrayReactorPopup = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const stageData = useSelector(state => state.reactor);

  const handleStageChange = (index, field, value) => {
    dispatch(updateStage({ index, field, value }));
  };

  const handleAddStage = () => {
    dispatch(addStage());
  };

  const handleRemoveStage = (index) => {
    if (stageData.length <= 1) return;
    dispatch(removeStage(index));
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {stageData.map((stage, index) => (
                  <tr key={index}>
                    <td>{stage['Pass Stage']}</td>
                    <td>
                      <div className="number-input-container">
                        <input 
                          type="number" 
                          value={stage['Pressure Vessel']} 
                          onChange={(e) => handleStageChange(index, 'Pressure Vessel', parseInt(e.target.value) || 0)}
                          min="0"
                        />
                        <div className="number-controls">
                          <button onClick={() => handleStageChange(index, 'Pressure Vessel', stage['Pressure Vessel'] + 1)}>▲</button>
                          <button onClick={() => handleStageChange(index, 'Pressure Vessel', Math.max(0, stage['Pressure Vessel'] - 1))}>▼</button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="number-input-container">
                        <input 
                          type="number" 
                          value={stage['Elements']} 
                          onChange={(e) => handleStageChange(index, 'Elements', parseInt(e.target.value) || 0)}
                          min="0"
                        />
                        <div className="number-controls">
                          <button onClick={() => handleStageChange(index, 'Elements', stage['Elements'] + 1)}>▲</button>
                          <button onClick={() => handleStageChange(index, 'Elements', Math.max(0, stage['Elements'] - 1))}>▼</button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <select 
                        value={stage.elementModel} 
                        onChange={(e) => handleStageChange(index, 'elementModel', e.target.value)}
                      >
                        <option value="SWC5-LD">SWC5-LD</option>
                      </select>
                    </td>
                    <td>
                      <input 
                        type="number" 
                        value={stage['Element age(years)']} 
                        onChange={(e) => handleStageChange(index, 'Element age(years)', parseFloat(e.target.value) || 0)}
                        step="0.01"
                        min="0"
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
            <button className="reactor-ok-button" onClick={onClose}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrayReactorPopup;