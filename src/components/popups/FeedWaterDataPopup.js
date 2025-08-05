import React, { useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateIonValue, updateParameter, clearValidationError } from '../../redux/slices/feedWaterSlice';
import "../../css/FeedWaterDataPopup.css";

const FeedWaterDataPopup = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { ionValues, parameters, validationErrors, validationRules } = useSelector(state => state.feedWater);

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

  // Handle input focus to clear validation error
  const handleInputFocus = (key) => {
    if (validationErrors[key]) {
      dispatch(clearValidationError({ key }));
    }
  };

  // Helper function to render input with validation
  const renderInputWithValidation = (key, value, onChange, placeholder = "", type = "text", readonly = false) => {
    const hasError = validationErrors[key];
    const rules = validationRules?.ionValues?.[key] || validationRules?.parameters?.[key];
    
    return (
      <div className="input-container">
        <input 
          type={type}
          value={value} 
          onChange={(e) => onChange(key, e.target.value)}
          onFocus={() => handleInputFocus(key)}
          placeholder={placeholder}
          className={hasError ? "input-error" : ""}
          readOnly={readonly}
        />
        {hasError && (
          <div className="validation-error">
            <span className="error-icon">⚠</span>
            {validationErrors[key]}
          </div>
        )}
      </div>
    );
  };

  handleParameterChange('Feed Water TDS', feedTds.toFixed(2))


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
                      {renderInputWithValidation('Ca_FW', ionValues.Ca_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Magnesium (Mg)</td>
                    <td>
                      {renderInputWithValidation('Mg_FW', ionValues.Mg_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Sodium (Na)</td>
                    <td>
                      {renderInputWithValidation('Na_FW', ionValues.Na_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Potassium (K)</td>
                    <td>
                      {renderInputWithValidation('K_FW', ionValues.K_FW, handleIonChange)}
                    </td>
                  </tr> 
                  <tr>
                    <td>Ammonium - N (NH4)</td>
                    <td>
                      {renderInputWithValidation('NH4_FW', ionValues.NH4_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Barium (Ba)</td>
                    <td>
                      {renderInputWithValidation('Ba_FW', ionValues.Ba_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Strontium (Sr)</td>
                    <td>
                      {renderInputWithValidation('Sr_FW', ionValues.Sr_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Hydrogen (H)</td>
                    <td>
                      {renderInputWithValidation('H_FW', ionValues.H_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr className="separator-row">
                    <td colSpan="2"></td>
                  </tr>
                  <tr>
                    <td>Sulfate (SO4)</td>
                    <td>
                      {renderInputWithValidation('SO4_FW', ionValues.SO4_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Chloride (Cl)</td>
                    <td>
                      {renderInputWithValidation('Cl_FW', ionValues.Cl_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Fluoride (F)</td>
                    <td>
                      {renderInputWithValidation('F_FW', ionValues.F_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Nitrate (NO3)</td>
                    <td>
                      {renderInputWithValidation('NO3_FW', ionValues.NO3_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Hydroxide (OH)</td>
                    <td>
                      {renderInputWithValidation('OH_FW', ionValues.OH_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Phosphate (PO4)</td>
                    <td>
                      {renderInputWithValidation('PO4_FW', ionValues.PO4_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Boron (B)</td>
                    <td>
                      {renderInputWithValidation('B_FW', ionValues.B_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Silica (SiO2)</td>
                    <td>
                      {renderInputWithValidation('SiO2_FW', ionValues.SiO2_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Bicarbonate (HCO3)</td>
                    <td>
                      {renderInputWithValidation('HCO3_FW', ionValues.HCO3_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Carbon Dioxide (CO2)</td>
                    <td>
                      {renderInputWithValidation('CO2_FW', ionValues.CO2_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Carbonate (CO3)</td>
                    <td>
                      {renderInputWithValidation('CO3_FW', ionValues.CO3_FW, handleIonChange)}
                    </td>
                  </tr>
                  <tr>
                    <td>Ammonia (NH3)</td>
                    <td>
                      {renderInputWithValidation('NH3_FW', ionValues.NH3_FW, handleIonChange)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="parameters-container">
              <div className="parameters-header">Parameters</div>
                  
              <div className="parameter-row">
                <label>pH</label>
                {renderInputWithValidation('Feed water pH', parameters['Feed water pH'], handleParameterChange)}
              </div>
              
              <div className="parameter-row">
                <label>Temperature (°C)</label>
                {renderInputWithValidation('Feed Temperature', parameters['Feed Temperature'], handleParameterChange)}
              </div>
              
              <div className="parameter-row">
                <label>Recovery (%)</label>
                {renderInputWithValidation('Recovery(%)', parameters['Recovery(%)'], handleParameterChange)}
              </div>
              
              <div className="parameter-row">
                <label>Feed TDS </label>
                {renderInputWithValidation('Feed Water TDS', feedTds.toFixed(2), handleParameterChange, "", "text", true)}
              </div>
              
              <div className="saturation-data">
                <div className="saturation-header">Saturation Data (Feed Water)</div>
                <div className="saturation-row">
                  <span>BaSO4</span>
                  <span>
                    {renderInputWithValidation('BaSO4 / ksp * 100, %_FW', ionValues['BaSO4 / ksp * 100, %_FW'] || "0.00", handleIonChange)}
                  </span>
                </div>
                <div className="saturation-row">
                  <span>CaF2</span>
                  <span>
                    {renderInputWithValidation('CaF2 / ksp * 100, %_FW', ionValues['CaF2 / ksp * 100, %_FW'] || "0.00", handleIonChange)}
                  </span>
                </div>
                <div className="saturation-row">
                  <span>CaSO4</span>
                  <span>
                    {renderInputWithValidation('CaSO4 / ksp * 100, %_FW', ionValues['CaSO4 / ksp * 100, %_FW'] || "0.00", handleIonChange)}
                  </span>
                </div>
                <div className="saturation-row">
                  <span>SiO2</span>
                  <span>
                    {renderInputWithValidation('SiO2 saturation, %_FW', ionValues['SiO2 saturation, %_FW'] || "0.00", handleIonChange)}
                  </span>
                </div>
                <div className="saturation-row">
                  <span>SrSO4</span>
                  <span>
                    {renderInputWithValidation('SrSO4 / ksp * 100, %_FW', ionValues['SrSO4 / ksp * 100, %_FW'] || "0.00", handleIonChange)}
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

export default FeedWaterDataPopup;