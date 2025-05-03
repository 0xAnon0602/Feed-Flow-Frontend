import React from "react";
import { useSelector } from 'react-redux';

const ConcentrateDataPopup = ({ isOpen, onClose }) => {
  const { ionValues, parameters } = useSelector(state => state.concentrate);



  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>Concentrate Water Data</h2>
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
                        value={ionValues.Ca_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Magnesium (Mg)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Mg_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Sodium (Na)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Na_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Potassium (K)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.K_C}
                        readOnly 
                      />
                    </td>
                  </tr> 
                  <tr>
                    <td>Ammonium - N (NH4)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.NH4_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Barium (Ba)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Ba_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Strontium (Sr)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Sr_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Hydrogen (H)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.H_C}
                        readOnly 
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
                        value={ionValues.SO4_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Chloride (Cl)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Cl_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Fluoride (F)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.F_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Nitrate (NO3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.NO3_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Hydroxide (OH)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.OH_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Phosphate (PO4)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.PO4_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Boron (B)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.B_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Silica (SiO2)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.SiO2_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Bicarbonate (HCO3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.HCO3_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Carbon Dioxide (CO2)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.CO2_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Carbonate (CO3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.CO3_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Ammonia (NH3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.NH3_C}
                        readOnly 
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="parameters-saturation-container" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="parameters-header">Parameters</div>
                
                <div className="parameter-row">
                  <label>Concentrate TDS</label>
                  <input 
                    type="text" 
                    value={parameters['Concentrate TDS']} 
                    readOnly
                  />
                </div>

              <div className="saturation-data">
                  <div className="saturation-header">Saturation Salts </div>
                  <div className="saturation-row">
                    <span>BaSO4</span>
                    <span>
                      <input
                        type="text"
                        value={ionValues['BaSO4 / ksp * 100, %_C'] || "0.00"}
                        readOnly
                        className="saturation-input"
                      /> 
                    </span>
                  </div>
                  <div className="saturation-row">
                    <span>CaF2</span>
                    <span>
                      <input
                        type="text"
                        value={ionValues['CaF2 / ksp * 100, %_C'] || "0.00"}
                        readOnly
                        className="saturation-input"
                      /> 
                    </span>
                  </div>
                  <div className="saturation-row">
                    <span>CaSO4</span>
                    <span>
                      <input
                        type="text"
                        value={ionValues['CaSO4 / ksp * 100, %_C'] || "0.00"}
                        readOnly
                        className="saturation-input"
                      /> 
                    </span>
                  </div>
                  <div className="saturation-row">
                    <span>SiO2</span>
                    <span>
                      <input
                        type="text"
                        value={ionValues['SiO2 saturation, %_C'] || "0.00"}
                        readOnly
                        className="saturation-input"
                      /> 
                    </span>
                  </div>
                  <div className="saturation-row">
                    <span>SrSO4</span>
                    <span>
                      <input
                        type="text"
                        value={ionValues['SrSO4 / ksp * 100, %_C'] || "0.00"}
                        readOnly
                        className="saturation-input"
                      /> 
                    </span>
                  </div>
              </div>

            </div>

          </div>

          <div className="reactor-button-row">
            <button className="reactor-ok-button" onClick={onClose}>OK</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConcentrateDataPopup;