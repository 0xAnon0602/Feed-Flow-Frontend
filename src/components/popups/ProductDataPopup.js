import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateIonValue, updateParameter } from '../../redux/slices/productSlice';
import "../../css/ProductDataPopup.css";

const ProductDataPopup = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { ionValues, parameters } = useSelector(state => state.product);

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
                        value={ionValues.calcium} 
                        onChange={(e) => handleIonChange('calcium', e.target.value)}
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        value={ionValues.sulfate} 
                        onChange={(e) => handleIonChange('sulfate', e.target.value)}
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
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
                        readOnly
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="parameters-container">
              <div className="parameters-header">Parameters</div>

              <div className="parameter-row">
                <label>Feed Flow</label>
                <input 
                  type="text" 
                  value={parameters.feedFlow} 
                  onChange={(e) => handleParameterChange('ph', e.target.value)}
                  readOnly
                />
              </div>
              
              <div className="parameter-row">
                <label>Permeate TDS</label>
                <input 
                  type="text" 
                  value={parameters.tds} 
                  onChange={(e) => handleParameterChange('ph', e.target.value)}
                  readOnly
                />
              </div>
              
              <div className="parameter-row">
                <label>Specific Energy (kwh/m3)</label>
                <input 
                  type="text" 
                  value={parameters.specificEngergy} 
                  onChange={(e) => handleParameterChange('temperature', e.target.value)}
                  readOnly
                />
              </div>
              
              <div className="parameter-row">
                <label>Feed Pressure (bar)</label>
                <input 
                  type="text" 
                  value={parameters.feedPressure} 
                  onChange={(e) => handleParameterChange('tds', e.target.value)}
                  readOnly
                />
              </div>

              <div className="parameter-row">
                <label>Flux (lmh)</label>
                <input 
                  type="text" 
                  value={parameters.flux} 
                  onChange={(e) => handleParameterChange('tds', e.target.value)}
                  readOnly
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDataPopup;