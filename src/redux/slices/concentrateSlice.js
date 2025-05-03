import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ionValues: {
    Ca_C: "0.00",
    Mg_C: "0.00",
    Na_C: "0.00",
    K_C: "0.00",
    NH4_C: "0.00",
    Ba_C: "0.00",
    Sr_C: "0.00",
    H_C: "0.00",
    SO4_C: "0.00",
    Cl_C: "0.00",
    F_C: "0.00",
    NO3_C: "0.00",
    OH_C: "0.00",
    PO4_C: "0.00",
    B_C: "0.00",
    SiO2_C: "0.00",
    HCO3_C: "0.00",
    CO2_C: "0.00",
    CO3_C:"0.00",
    NH3_C: "0.00",
    "CaSO4 / ksp * 100, %_C": "0.00",
    "SrSO4 / ksp * 100, %_C": "0.00",
    "BaSO4 / ksp * 100, %_C": "0.00",
    "SiO2 saturation, %_C": "0.00",
    "CaF2 / ksp * 100, %_C": "0.00"
  },
  parameters: {
    'Concentrate TDS': "0.00",
  }
};

const concentrateSlice = createSlice({
  name: 'concentrate',
  initialState,
  reducers: {
    updateIonValueConcentrate: (state, action) => {
      const { key, value } = action.payload;
      state.ionValues[key] = value;
    },
    updateParameterConcentrate: (state, action) => {
      const { key, value } = action.payload;
      state.parameters[key] = value;
    },
    updateConcentrateData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetConcentrateData: () => initialState
  }
});

export const { 
  updateIonValueConcentrate, 
  updateParameterConcentrate, 
  updateConcentrateData,
  resetConcentrateData
} = concentrateSlice.actions;

export default concentrateSlice.reducer;