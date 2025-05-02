import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ionValues: {
    Ca_FW: "80",
    Mg_FW: "30",
    Na_FW: "120",
    K_FW: "10",
    NH4_FW: "0.5",
    Ba_FW: "0.05",
    Sr_FW: "0.8",
    H_FW: "0.1",
    SO4_FW: "90",
    Cl_FW: "130",
    F_FW: "1",
    NO3_FW: "5",
    OH_FW: "0.01",
    PO4_FW: "2",
    B_FW: "0.5",
    SiO2_FW: "20",
    HCO3_FW: "150",
    CO2_FW: "5",
    CO3_FW:"5",
    NH3_FW: "0.2",
    'BaSO4 / ksp * 100, %_FW': "2",
    'CaF2 / ksp * 100, %_FW': "3",
    'CaSO4 / ksp * 100, %_FW': "10",
    'SiO2 saturation, %_FW': "15",
    'SrSO4 / ksp * 100, %_FW': "5"
  },
  parameters: {
    'Feed Water TDS': "0",
    'Feed water pH': "7.5",
    'Feed Temperature': "25.00",
    'Recovery(%)': "75"
  }
};

const feedWaterSlice = createSlice({
  name: 'feedWater',
  initialState,
  reducers: {
    updateIonValue: (state, action) => {
      const { key, value } = action.payload;
      state.ionValues[key] = value;
    },
    updateParameter: (state, action) => {
      const { key, value } = action.payload;
      state.parameters[key] = value;
    },
    updateFeedWaterData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFeedWaterData: () => initialState
  }
});

export const { 
  updateIonValue, 
  updateParameter, 
  updateFeedWaterData,
  resetFeedWaterData
} = feedWaterSlice.actions;

export default feedWaterSlice.reducer;