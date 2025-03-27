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
      
      const result = await predictROPerformance(formData);
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
              <div key={input} className="form-group">
                <label htmlFor={input}>{input}</label>
                <input
                  type="number"
                  id={input}
                  name={input}
                  value={formData[input] || ''}
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