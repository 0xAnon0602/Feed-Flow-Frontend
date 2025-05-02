import React, { useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateIonValue, updateParameter } from '../../redux/slices/feedWaterSlice';
import "../../css/FeedWaterDataPopup.css";

const FeedWaterDataPopup = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { ionValues, parameters } = useSelector(state => state.feedWater);

    // Calculate Feed TDS as sum of all ion values
    const feedTds = useMemo(() => {
      return Object.values(ionValues).reduce((acc, val) => {
        const num = parseFloat(val);
        return acc + (isNaN(num) ? 0 : num);
      }, 0);
    }, [ionValues]);

  // Handle ion input changes
  const handleIonChange = (key, value) => {
    dispatch(updateIonValue({ key, value }));
  };

  // Handle parameter changes
  const handleParameterChange = (key, value) => {
    dispatch(updateParameter({ key, value }));
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
                    <td>Ammonium - N (NH4)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.ammonium} 
                        onChange={(e) => handleIonChange('ammonium', e.target.value)}
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
                    <td>Hydrogen (H)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.hydrogen} 
                        onChange={(e) => handleIonChange('hydrogen', e.target.value)}
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
                    <td>Hydroxide (OH)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.hydroxide} 
                        onChange={(e) => handleIonChange('hydroxide', e.target.value)}
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
                  <tr>
                    <td>Ammonia (NH3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.ammonia} 
                        onChange={(e) => handleIonChange('ammonia', e.target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="parameters-container">
              <div className="parameters-header">Parameters</div>
                  
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
              <div className="parameter-row">
                <label>Feed TDS </label>
                <input 
                  type="text" 
                  value={feedTds.toFixed(2)} 
                  readOnly
                />
              </div>
              
              <div className="saturation-data">
                <div className="saturation-header">Saturation Data (Feed Water)</div>
                <div className="saturation-row">
                  <span>BaSO4</span>
                  <span>
                    <input
                      type="text"
                      value={ionValues.baso4 || "0.00"}
                      onChange={(e) => handleIonChange('baso4', e.target.value)}
                      className="saturation-input"
                    /> 
                  </span>
                </div>
                <div className="saturation-row">
                  <span>CaF2</span>
                  <span>
                    <input
                      type="text"
                      value={ionValues.caf2 || "0.00"}
                      onChange={(e) => handleIonChange('caf2', e.target.value)}
                      className="saturation-input"
                    /> 
                  </span>
                </div>
                <div className="saturation-row">
                  <span>CaSO4</span>
                  <span>
                    <input
                      type="text"
                      value={ionValues.caso4 || "0.00"}
                      onChange={(e) => handleIonChange('caso4', e.target.value)}
                      className="saturation-input"
                    /> 
                  </span>
                </div>
                <div className="saturation-row">
                  <span>SiO2</span>
                  <span>
                    <input
                      type="text"
                      value={ionValues.sio2 || "0.00"}
                      onChange={(e) => handleIonChange('sio2', e.target.value)}
                      className="saturation-input"
                    /> 
                  </span>
                </div>
                <div className="saturation-row">
                  <span>SrSO4</span>
                  <span>
                    <input
                      type="text"
                      value={ionValues.srso4 || "0.00"}
                      onChange={(e) => handleIonChange('srso4', e.target.value)}
                      className="saturation-input"
                    /> 
                  </span>
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