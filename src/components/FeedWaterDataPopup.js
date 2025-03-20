import React, { useState, useEffect } from "react";
import "../css/FeedWaterDataPopup.css";

const FeedWaterDataPopup = ({ isOpen, onClose }) => {
  // Initial state for all ion values
  const [ionValues, setIonValues] = useState({
    calcium: "0.00",
    magnesium: "0.00",
    sodium: "0.00",
    potassium: "0.00",
    ammonia: "0.00",
    barium: "0.00",
    strontium: "0.00",
    iron: "0.00",
    manganese: "0.00",
    sulfate: "0.00",
    chloride: "0.00",
    fluoride: "0.00",
    nitrate: "0.00",
    bromide: "0.00",
    phosphate: "0.00",
    boron: "0.00",
    silica: "0.00",
    hydrogenSulfide: "0.00",
    bicarbonate: "0.00",
    carbonDioxide: "0.00",
    carbonate: "0.00"
  });

  // Parameters state
  const [parameters, setParameters] = useState({
    ph: "7.00",
    temperature: "25.00",
    recovery: "75"
  });

  // Handle ion input changes
  const handleIonChange = (key, value) => {
    setIonValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Handle parameter changes
  const handleParameterChange = (key, value) => {
    setParameters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>Feed Water Data</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="popup-content">
          <div className="popup-layout">
            <div className="ion-table-container">
              <table className="ion-table">
                <thead>
                  <tr className="table-header">
                    <th>Ion</th>
                    <th>mg/l</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Calcium (Ca)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.calcium} 
                        onChange={(e) => handleIonChange('calcium', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Magnesium (Mg)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.magnesium} 
                        onChange={(e) => handleIonChange('magnesium', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Sodium (Na)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.sodium} 
                        onChange={(e) => handleIonChange('sodium', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Potassium (K)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.potassium} 
                        onChange={(e) => handleIonChange('potassium', e.target.value)}
                      />
                    </td>
                  </tr> 
                  <tr>
                    <td>Ammonia - N (NH4)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.ammonia} 
                        onChange={(e) => handleIonChange('ammonia', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Barium (Ba)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.barium} 
                        onChange={(e) => handleIonChange('barium', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Strontium (Sr)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.strontium} 
                        onChange={(e) => handleIonChange('strontium', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Iron (Fe)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.iron} 
                        onChange={(e) => handleIonChange('iron', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Manganese (Mn)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.manganese} 
                        onChange={(e) => handleIonChange('manganese', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className="separator-row">
                    <td colSpan="2"></td>
                  </tr>
                  <tr>
                    <td>Sulfate (SO4)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.sulfate} 
                        onChange={(e) => handleIonChange('sulfate', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Chloride (Cl)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.chloride} 
                        onChange={(e) => handleIonChange('chloride', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Fluoride (F)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.fluoride} 
                        onChange={(e) => handleIonChange('fluoride', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Nitrate (NO3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.nitrate} 
                        onChange={(e) => handleIonChange('nitrate', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Bromide (Br)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.bromide} 
                        onChange={(e) => handleIonChange('bromide', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Phosphate (PO4)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.phosphate} 
                        onChange={(e) => handleIonChange('phosphate', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Boron (B)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.boron} 
                        onChange={(e) => handleIonChange('boron', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Silica (SiO2)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.silica} 
                        onChange={(e) => handleIonChange('silica', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Hydrogen Sulfide (H2S)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.hydrogenSulfide} 
                        onChange={(e) => handleIonChange('hydrogenSulfide', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Bicarbonate (HCO3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.bicarbonate} 
                        onChange={(e) => handleIonChange('bicarbonate', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Carbon Dioxide (CO2)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.carbonDioxide} 
                        onChange={(e) => handleIonChange('carbonDioxide', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Carbonate (CO3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.carbonate} 
                        onChange={(e) => handleIonChange('carbonate', e.target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="parameters-container">
              <div className="parameters-header">Parameters</div>
              
              <div className="parameter-row">
                <label>Input</label>
                <select>
                  <option>Alkalinity & pH</option>
                </select>
              </div>
              
              <div className="parameter-row">
                <label>pH</label>
                <input 
                  type="text" 
                  value={parameters.ph} 
                  onChange={(e) => handleParameterChange('ph', e.target.value)}
                />
              </div>
              
              <div className="parameter-row">
                <label>Temperature (°C)</label>
                <input 
                  type="text" 
                  value={parameters.temperature} 
                  onChange={(e) => handleParameterChange('temperature', e.target.value)}
                />
              </div>
              
              <div className="parameter-row">
                <label>Recovery (%)</label>
                <input 
                  type="text" 
                  value={parameters.recovery} 
                  onChange={(e) => handleParameterChange('recovery', e.target.value)}
                />
              </div>
              
              <div className="saturation-data">
                <div className="saturation-header">Saturation Data (Feed Water)</div>
                <div className="saturation-row">
                  <span>BaSO4</span>
                  <span>0.00 %</span>
                </div>
                <div className="saturation-row">
                  <span>CaF2</span>
                  <span>0.00 %</span>
                </div>
                <div className="saturation-row">
                  <span>CaSO4</span>
                  <span>0.00 %</span>
                </div>
                <div className="saturation-row">
                  <span>SiO2</span>
                  <span>0.00 %</span>
                </div>
                <div className="saturation-row">
                  <span>SrSO4</span>
                  <span>0.00 %</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedWaterDataPopup;