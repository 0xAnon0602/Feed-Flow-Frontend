import React, { useState, useEffect } from 'react';
import { fetchInputSchema, predictROPerformance } from '../services/api';
import '../css/PredictionForm.css';

const PredictionForm = () => {
  const [schema, setSchema] = useState(null);
  const [formData, setFormData] = useState({});
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch input schema on component mount
  useEffect(() => {
    const getSchema = async () => { 
      try {
        setLoading(true);
        const schemaData = await fetchInputSchema();
        setSchema(schemaData);
        
        // Initialize form with example values
        if (schemaData.example_input) {
          setFormData(schemaData.example_input);
        }
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load input schema. Please try again later.');
        setLoading(false);
      }
    };
    
    getSchema();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value) || value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      setPredictions(null);
      
      // Define the correct order of keys
      const orderedKeys = [
        'Feed Flow (m3/hr)', 'Feed Temperature', 'Feed water pH', 'Pass Stage', 'Pressure Vessel', 
        'Elements', 'Element age(years)', 'Recovery(%)', 'Ca_FW', 'Mg_FW', 'Na_FW', 'K_FW', 
        'NH4_FW', 'Ba_FW', 'Sr_FW', 'H_FW', 'CO3_FW', 'HCO3_FW', 'SO4_FW', 'Cl_FW', 'F_FW',
        'NO3_FW', 'PO4_FW', 'OH_FW', 'SiO2_FW', 'B_FW', 'CO2_FW', 'NH3_FW', 'Feed Water TDS',
        'CaSO4 / ksp * 100, %_FW', 'SrSO4 / ksp * 100, %_FW', 'BaSO4 / ksp * 100, %_FW', 
        'SiO2 saturation, %_FW', 'CaF2 / ksp * 100, %_FW'
      ];
      
      // Create an ordered formData object
      const orderedFormData = {};
      orderedKeys.forEach(key => {
        if (formData.hasOwnProperty(key)) {
          orderedFormData[key] = formData[key];
        }
      });
      
      const result = await predictROPerformance(orderedFormData);
      setPredictions(result.predictions);
      setLoading(false);
    } catch (err) {
      setError(err.message || 'Failed to make prediction. Please try again.');
      setLoading(false);
    }
  };

  if (loading && !schema) {
    return <div className="loading">Loading input schema...</div>;
  }

  if (error && !schema) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="prediction-form-container">
      <h2>RO System Performance Prediction</h2>
      
      {schema && (
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {schema.required_inputs.map((input) => (
              console.log(formData[input]),
              <div key={input} className="form-group">
                <label htmlFor={input}>{input}</label>
                <input
                  type="number"
                  id={input}
                  name={input}
                  value={formData[input] !== undefined && formData[input] !== null ? formData[input] : ''}
                  onChange={handleInputChange}
                  step="any"
                  required
                />
              </div>
            ))}
          </div>
          
          <div className="form-actions">
            <button type="submit" disabled={loading}>
              {loading ? 'Predicting...' : 'Predict Performance'}
            </button>
          </div>
        </form>
      )}
      
      {error && <div className="error">{error}</div>}
      
      {predictions && (
        <div className="predictions-container">
          <h3>Prediction Results</h3>
          <div className="predictions-grid">
            {Object.entries(predictions).map(([key, value]) => (
              <div key={key} className="prediction-item">
                {console.log(key, value)}
                <span className="prediction-label">{key}:</span>
                <span className="prediction-value">{typeof value === 'number' ? value.toFixed(2) : value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;