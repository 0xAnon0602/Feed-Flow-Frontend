import { createSlice } from '@reduxjs/toolkit';

// Validation rules for different fields
const validationRules = {
  ionValues: {
    Ca_FW: { min: 0, max: 100000000, unit: "mg/l" },
    Mg_FW: { min: 0, max: 100000000, unit: "mg/l" },
    Na_FW: { min: 0, max: 100000000, unit: "mg/l" },
    K_FW: { min: 0, max: 100000000, unit: "mg/l" },
    NH4_FW: { min: 0, max: 100000000, unit: "mg/l" },
    Ba_FW: { min: 0, max: 100000000, unit: "mg/l" },
    Sr_FW: { min: 0, max: 100000000, unit: "mg/l" },
    H_FW: { min: 0, max: 100000000, unit: "mg/l" },
    SO4_FW: { min: 0, max: 100000000, unit: "mg/l" },
    Cl_FW: { min: 0, max: 100000000, unit: "mg/l" },
    F_FW: { min: 0, max: 100000000, unit: "mg/l" },
    NO3_FW: { min: 0, max: 100000000, unit: "mg/l" },
    OH_FW: { min: 0, max: 100000000, unit: "mg/l" },
    PO4_FW: { min: 0, max: 100000000, unit: "mg/l" },
    B_FW: { min: 0, max: 100000000, unit: "mg/l" },
    SiO2_FW: { min: 0, max: 100000000, unit: "mg/l" },
    HCO3_FW: { min: 0, max: 100000000, unit: "mg/l" },
    CO2_FW: { min: 0, max: 100000000, unit: "mg/l" },
    CO3_FW: { min: 0, max: 100000000, unit: "mg/l" },
    NH3_FW: { min: 0, max: 100000000, unit: "mg/l" },
    'BaSO4 / ksp * 100, %_FW': { min: 0, max: 100000000, unit: "%" },
    'CaF2 / ksp * 100, %_FW': { min: 0, max: 100000000, unit: "%" },
    'CaSO4 / ksp * 100, %_FW': { min: 0, max: 100000000, unit: "%" },
    'SiO2 saturation, %_FW': { min: 0, max: 100000000, unit: "%" },
    'SrSO4 / ksp * 100, %_FW': { min: 0, max: 100000000, unit: "%" }
  },
  parameters: {
    'Feed Water TDS': { min: 0, max: 100000000, unit: "mg/l" },
    'Feed water pH': { min: 0, max: 14, unit: "" },
    'Feed Temperature': { min: 0, max: 100, unit: "°C" },
    'Recovery(%)': { min: 0, max: 100, unit: "%" }
  }
};

const initialState = {
  ionValues: {
    Ca_FW: "407.2",
    Mg_FW: "1295",
    Na_FW: "5000",
    K_FW: "395.2",
    NH4_FW: "0",
    Ba_FW: "0",
    Sr_FW: "0",
    H_FW: "0",
    SO4_FW: "2708",
    Cl_FW: "10000",
    F_FW: "0",
    NO3_FW: "0",
    OH_FW: "0.01",
    PO4_FW: "0",
    B_FW: "0",
    SiO2_FW: "5.01",
    HCO3_FW: "500",
    CO2_FW: "30.32",
    CO3_FW:"3.57",
    NH3_FW: "0",
    'BaSO4 / ksp * 100, %_FW': "0",
    'CaF2 / ksp * 100, %_FW': "0",
    'CaSO4 / ksp * 100, %_FW': "29",
    'SiO2 saturation, %_FW': "4",
    'SrSO4 / ksp * 100, %_FW': "0"
  },
  parameters: {
    'Feed Water TDS': "0",
    'Feed water pH': "7.5",
    'Feed Temperature': "25.00",
    'Recovery(%)': "45"
  },
  validationErrors: {}, // Track validation errors
  validationRules // Store validation rules in state
};

// Helper function to validate a value
const validateValue = (value, rules) => {
  const numValue = parseFloat(value);
  if (isNaN(numValue)) {
    return { isValid: false, message: "Please enter a valid number" };
  }
  
  if (numValue < rules.min) {
    return { isValid: false, message: `Value must be at least ${rules.min} ${rules.unit}` };
  }
  
  if (numValue > rules.max) {
    return { isValid: false, message: `Value must be no more than ${rules.max} ${rules.unit}` };
  }
  
  return { isValid: true, message: "" };
};

const feedWaterSlice = createSlice({
  name: 'feedWater',
  initialState,
  reducers: {
    updateIonValue: (state, action) => {
      const { key, value } = action.payload;
      state.ionValues[key] = value;
      
      // Validate the value
      const rules = validationRules.ionValues[key];
      if (rules) {
        const validation = validateValue(value, rules);
        if (validation.isValid) {
          delete state.validationErrors[key];
        } else {
          state.validationErrors[key] = validation.message;
        }
      }
    },
    updateParameter: (state, action) => {
      const { key, value } = action.payload;
      state.parameters[key] = value;
      
      // Validate the value
      const rules = validationRules.parameters[key];
      if (rules) {
        const validation = validateValue(value, rules);
        if (validation.isValid) {
          delete state.validationErrors[key];
        } else {
          state.validationErrors[key] = validation.message;
        }
      }
    },
    updateFeedWaterData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFeedWaterData: () => initialState,
    clearValidationError: (state, action) => {
      const { key } = action.payload;
      delete state.validationErrors[key];
    }
  }
});

export const { 
  updateIonValue, 
  updateParameter, 
  updateFeedWaterData,
  resetFeedWaterData,
  clearValidationError
} = feedWaterSlice.actions;

// Selector to get the count of validation errors
export const selectFeedWaterErrorCount = (state) =>
  Object.keys(state.feedWater.validationErrors || {}).length;

export default feedWaterSlice.reducer;