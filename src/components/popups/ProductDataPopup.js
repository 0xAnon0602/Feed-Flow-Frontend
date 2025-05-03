import React from "react";
import { useSelector } from 'react-redux';
import "../../css/ProductDataPopup.css";

const ProductDataPopup = ({ isOpen, onClose }) => {
  const { ionValues, parameters } = useSelector(state => state.product);


  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>Product Water Data</h2>
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
                        value={ionValues.Ca_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Magnesium (Mg)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Mg_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Sodium (Na)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Na_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Potassium (K)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.K_P} 
                      />
                    </td>
                  </tr> 
                  <tr>
                    <td>Ammonium - N (NH4)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.NH4_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Barium (Ba)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Ba_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Strontium (Sr)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Sr_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Hydrogen (H)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.H_P} 
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
                        value={ionValues.SO4_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Chloride (Cl)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.Cl_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Fluoride (F)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.F_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Nitrate (NO3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.NO3_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Hydroxide (OH)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.OH_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Phosphate (PO4)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.PO4_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Boron (B)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.B_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Silica (SiO2)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.SiO2_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Bicarbonate (HCO3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.HCO3_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Carbon Dioxide (CO2)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.CO2_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Carbonate (CO3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.CO3_P} 
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Ammonia (NH3)</td>
                    <td>
                      <input 
                        type="text" 
                        value={ionValues.NH3_P} 
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="parameters-container">
              <div className="parameters-header">Parameters</div>

              
              <div className="parameter-row">
                <label>Permeate TDS</label>
                <input 
                  type="text" 
                  value={parameters['Permeate TDS']} 
                  readOnly
                />
              </div>
              
              <div className="parameter-row">
                <label>Specific Energy (kwh/m3)</label>
                <input 
                  type="text" 
                  value={parameters['Specific Energy(kwh/m3)']} 
                  readOnly
                />
              </div>
              
              <div className="parameter-row">
                <label>Feed Pressure (bar)</label>
                <input 
                  type="text" 
                  value={parameters['Feed Pressure(bar)']} 
                  readOnly
                />
              </div>

              <div className="parameter-row">
                <label>Flux (lmh)</label>
                <input 
                  type="text" 
                  value={parameters['Flux(lmh)']} 
                  readOnly
                />
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

export default ProductDataPopup;