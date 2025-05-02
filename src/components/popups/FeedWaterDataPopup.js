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
                        value={ionValues.Ca_FW} 
                        onChange={(e) => handleIonChange('Ca_FW', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Magnesium (Mg)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Mg_FW} 
                        onChange={(e) => handleIonChange('Mg_FW', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Sodium (Na)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Na_FW} 
                        onChange={(e) => handleIonChange('Na_FW', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Potassium (K)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.K_FW} 
                        onChange={(e) => handleIonChange('K_FW', e.target.value)}
                      />
                    </td>
                  </tr> 
                  <tr>
                    <td>Ammonium - N (NH4)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.NH4_FW} 
                        onChange={(e) => handleIonChange('ammonium', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Barium (Ba)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Ba_FW} 
                        onChange={(e) => handleIonChange('Ba_FW', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Strontium (Sr)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Sr_FW} 
                        onChange={(e) => handleIonChange('strontium', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Hydrogen (H)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.H_FW} 
                        onChange={(e) => handleIonChange('H_FW', e.target.value)}
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
                        value={ionValues.SO4_FW} 
                        onChange={(e) => handleIonChange('SO4_FW', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Chloride (Cl)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Cl_FW} 
                        onChange={(e) => handleIonChange('Cl_FW', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Fluoride (F)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.F_FW} 
                        onChange={(e) => handleIonChange('F_FW', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Nitrate (NO3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.NO3_FW} 
                        onChange={(e) => handleIonChange('NO3_FW', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Hydroxide (OH)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.OH_FW} 
                        onChange={(e) => handleIonChange('OH_FW', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Phosphate (PO4)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.PO4_FW} 
                        onChange={(e) => handleIonChange('PO4_FW', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Boron (B)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.B_FW} 
                        onChange={(e) => handleIonChange('boron', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Silica (SiO2)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.SiO2_FW} 
                        onChange={(e) => handleIonChange('SiO2_FW', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Bicarbonate (HCO3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.HCO3_FW} 
                        onChange={(e) => handleIonChange('bicarbonate', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Carbon Dioxide (CO2)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.CO2_FW} 
                        onChange={(e) => handleIonChange('CO2_FW', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Carbonate (CO3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.CO3_FW} 
                        onChange={(e) => handleIonChange('CO3_FW', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Ammonia (NH3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.NH3_FW} 
                        onChange={(e) => handleIonChange('NH3_FW', e.target.value)}
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
                  value={parameters['Feed water pH']} 
                  onChange={(e) => handleParameterChange('Feed water pH', e.target.value)}
                />
              </div>
              
              <div className="parameter-row">
                <label>Temperature (°C)</label>
                <input 
                  type="text" 
                  value={parameters['Feed Temperature']} 
                  onChange={(e) => handleParameterChange('Feed Temperature', e.target.value)}
                />
              </div>
              
              <div className="parameter-row">
                <label>Recovery (%)</label>
                <input 
                  type="text" 
                  value={parameters['Recovery(%)']} 
                  onChange={(e) => handleParameterChange('Recovery(%)', e.target.value)}
                />

              </div>
              <div className="parameter-row">
                <label>Feed TDS </label>
                <input 
                  type="text" 
                  value={feedTds.toFixed(2)} 
                  onChange={(e) => handleParameterChange('Feed Water TDS', feedTds)}
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
                      value={ionValues['BaSO4 / ksp * 100, %_FW'] || "0.00"}
                      onChange={(e) => handleIonChange('BaSO4 / ksp * 100, %_FW', e.target.value)}
                      className="saturation-input"
                    /> 
                  </span>
                </div>
                <div className="saturation-row">
                  <span>CaF2</span>
                  <span>
                    <input
                      type="text"
                      value={ionValues['CaF2 / ksp * 100, %_FW'] || "0.00"}
                      onChange={(e) => handleIonChange('CaF2 / ksp * 100, %_FW', e.target.value)}
                      className="saturation-input"
                    /> 
                  </span>
                </div>
                <div className="saturation-row">
                  <span>CaSO4</span>
                  <span>
                    <input
                      type="text"
                      value={ionValues['CaSO4 / ksp * 100, %_FW'] || "0.00"}
                      onChange={(e) => handleIonChange('CaSO4 / ksp * 100, %_FW', e.target.value)}
                      className="saturation-input"
                    /> 
                  </span>
                </div>
                <div className="saturation-row">
                  <span>SiO2</span>
                  <span>
                    <input
                      type="text"
                      value={ionValues['SiO2 saturation, %_FW'] || "0.00"}
                      onChange={(e) => handleIonChange('SiO2 saturation, %_FW', e.target.value)}
                      className="saturation-input"
                    /> 
                  </span>
                </div>
                <div className="saturation-row">
                  <span>SrSO4</span>
                  <span>
                    <input
                      type="text"
                      value={ionValues['SrSO4 / ksp * 100, %_FW'] || "0.00"}
                      onChange={(e) => handleIonChange('SrSO4 / ksp * 100, %_FW' , e.target.value)}
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