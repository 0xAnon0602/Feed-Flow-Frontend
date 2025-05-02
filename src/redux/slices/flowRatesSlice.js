import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  flowValues: {
    'Feed Flow (m3/hr)': "100",
  },
  selectedOption: "feed",
};

const flowRatesSlice = createSlice({
  name: 'flowRates',
  initialState,
  reducers: {
    updateFlowValue: (state, action) => {
      const { key, value } = action.payload;
      state.flowValues[key] = value;
    },
    updateSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    updateRecovery: (state, action) => {
      state.recovery = action.payload;
    },
    updateFlowRatesData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFlowRatesData: () => initialState
  }
});

export const { 
  updateFlowValue, 
  updateSelectedOption, 
  updateRecovery,
  updateFlowRatesData,
  resetFlowRatesData
} = flowRatesSlice.actions;

export default flowRatesSlice.reducer;