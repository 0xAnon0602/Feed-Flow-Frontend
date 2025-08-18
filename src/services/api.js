/**
 * API service for communicating with the backend
 */

const API_BASE_URL = 'https://0xanon.pythonanywhere.com/';

/**
 * Fetch the input schema from the backend
 * @returns {Promise} Promise object representing the input schema
 */
export const fetchInputSchema = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/input_schema`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching input schema:', error);
    throw error;
  }
};

/**
 * Send input data to the backend for prediction
 * @param {Object} inputData - The input data for prediction
 * @returns {Promise} Promise object representing the prediction results
 */
export const predictROPerformance = async (inputData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error making prediction:', error);
    throw error;
  }
};