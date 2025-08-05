import { createSlice } from '@reduxjs/toolkit';

// Validation rules for reactor fields
const validationRules = {
  'Pressure Vessel': { min: 0, max: 100000000, unit: "vessels" },
  'Elements': { min: 0, max: 7, unit: "elements" },
  'Element age(years)': { min: 0, max: 3, unit: "years" },
  'Pass Stage': { min: 1, max: 100000000, unit: "stages" }
};

const initialState = [
  {
    'Pass Stage': 1,
    'Pressure Vessel': 6,
    'Elements': 6,
    elementModel: "SWC5-LD",
    'Element age(years)': 2.5,
  }
];

// Helper function to validate a value
const validateValue = (value, rules) => {
  const numValue = parseFloat(value);
  console.log(numValue);
  if (isNaN(numValue)) {
    return { isValid: false, message: "Please enter a valid number" };
  }
  
  if (numValue < rules.min) {
    return { isValid: false, message: `Value must be ≥ ${rules.min} ${rules.unit}` };
  }
  
  if (numValue > rules.max) {
    return { isValid: false, message: `Value must be ≤ ${rules.max} ${rules.unit}` };
  }
  
  return { isValid: true, message: "" };
};

const reactorSlice = createSlice({
  name: 'reactor',
  initialState,
  reducers: {
    updateStage: (state, action) => {
      const { index, field, value } = action.payload;
      state[index][field] = value;
      
      // Validate the value if it's a numeric field
      const rules = validationRules[field];
      if (rules) {
        const validation = validateValue(value, rules);
        if (validation.isValid) {
          // Clear validation error if it exists
          if (state[index].validationErrors && state[index].validationErrors[field]) {
            delete state[index].validationErrors[field];
          }
        } else {
          // Add validation error
          if (!state[index].validationErrors) {
            state[index].validationErrors = {};
          }
          state[index].validationErrors[field] = validation.message;
        }
      }
    },
    addStage: (state) => {
      const newStage = {
        'Pass Stage': state.length + 1,
        'Pressure Vessel': 0,
        'Elements': 0,
        elementModel: "SWC5-LD",
        'Element age(years)': 0.00,
        validationErrors: {}
      };
      state.push(newStage);
    },
    removeStage: (state, action) => {
      const index = action.payload;
      if (state.length <= 1) return;
      state.splice(index, 1);
      // Update stage numbers
      state.forEach((stage, i) => {
        stage['Pass Stage'] = i + 1;
      });
    },
    updateReactorData: (state, action) => {
      return action.payload;
    },
    resetReactorData: () => initialState,
    clearValidationError: (state, action) => {
      const { stageIndex, field } = action.payload;
      if (state[stageIndex] && state[stageIndex].validationErrors) {
        delete state[stageIndex].validationErrors[field];
      }
    }
  }
});

export const { 
  updateStage, 
  addStage, 
  removeStage,
  updateReactorData,
  resetReactorData,
  clearValidationError
} = reactorSlice.actions;

// Selector to get the count of validation errors across all stages
export const selectReactorErrorCount = (state) =>
  state.reactor.reduce(
    (acc, stage) =>
      acc + (stage.validationErrors ? Object.keys(stage.validationErrors).length : 0),
    0
  );

export default reactorSlice.reducer;