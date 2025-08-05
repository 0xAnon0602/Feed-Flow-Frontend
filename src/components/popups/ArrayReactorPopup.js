import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateStage, addStage, removeStage, clearValidationError } from '../../redux/slices/reactorSlice';
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

  // Handle input focus to clear validation error
  const handleInputFocus = (stageIndex, field) => {
    if (stageData[stageIndex]?.validationErrors?.[field]) {
      dispatch(clearValidationError({ stageIndex, field }));
    }
  };

  // Helper function to render input with validation
  const renderInputWithValidation = (stageIndex, field, value, onChange, type = "number", min = "0") => {
    const hasError = stageData[stageIndex]?.validationErrors?.[field];
    
    return (
      <div className="input-container">
        <input 
          type={type}
          value={value} 
          onChange={(e) => onChange(stageIndex, field, e.target.value)}
          onFocus={() => handleInputFocus(stageIndex, field)}
          min={min}
          className={hasError ? "input-error" : ""}
        />
        {hasError && (
          <div className="validation-error">
            <span className="error-icon">⚠</span>
            {stageData[stageIndex].validationErrors[field]}
          </div>
        )}
      </div>
    );
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
                        {renderInputWithValidation(
                          index, 
                          'Pressure Vessel', 
                          stage['Pressure Vessel'], 
                          (stageIndex, field, value) => handleStageChange(stageIndex, field, parseInt(value) || 0)
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="number-input-container">
                        {renderInputWithValidation(
                          index, 
                          'Elements', 
                          stage['Elements'], 
                          (stageIndex, field, value) => handleStageChange(stageIndex, field, parseInt(value) || 0)
                        )}
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
                      {renderInputWithValidation(
                        index, 
                        'Element age(years)', 
                        stage['Element age(years)'], 
                        (stageIndex, field, value) => handleStageChange(stageIndex, field, parseFloat(value) || 0),
                        "number",
                        "0"
                      )}
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