import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ionValues: {
    Ca_P: "0.00",
    Mg_P: "0.00",
    Na_P: "0.00",
    K_P: "0.00",
    NH4_P: "0.00",
    Ba_P: "0.00",
    Sr_P: "0.00",
    H_P: "0.00",
    SO4_P: "0.00",
    Cl_P: "0.00",
    F_P: "0.00",
    NO3_P: "0.00",
    OH_P: "0.00",
    PO4_P: "0.00",
    B_P: "0.00",
    SiO2_P: "0.00",
    HCO3_P: "0.00",
    CO2_P: "0.00",
    CO3_P:"0.00",
    NH3_P: "0.00",
  },
  parameters: {
    'Permeate TDS': "0.00",
    'Total Power Consumption(KW)': "0.0",
    'Feed Pressure(bar)': "0.0",
    'Flux(lmh)': "0.0",
  }
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateIonValueProduct: (state, action) => {
      const { key, value } = action.payload;
      state.ionValues[key] = value;
    },
    updateParameterProduct: (state, action) => {
      const { key, value } = action.payload;
      state.parameters[key] = value;
    },
    updateProductData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetProductData: () => initialState
  }
});

export const { 
  updateIonValueProduct, 
  updateParameterProduct, 
  updateProductData,
  resetProductData
} = productSlice.actions;

export default productSlice.reducer;