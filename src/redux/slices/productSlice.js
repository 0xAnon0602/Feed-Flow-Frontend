import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ionValues: {
    calcium: "0.00",
    magnesium: "0.00",
    sodium: "0.00",
    potassium: "0.00",
    ammonia: "0.00",
    barium: "0.00",
    strontium: "0.00",
    iron: "0.00",
    manganese: "0.00",
    sulfate: "0.00",
    chloride: "0.00",
    fluoride: "0.00",
    nitrate: "0.00",
    bromide: "0.00",
    phosphate: "0.00",
    boron: "0.00",
    silica: "0.00",
    hydrogenSulfide: "0.00",
    bicarbonate: "0.00",
    carbonDioxide: "0.00",
    carbonate: "0.00"
  },
  parameters: {
    feedFlow: "0.00",
    tds: "0.00",
    specificEngergy: "0.0",
    feedPressure: "0.0",
    flux: "0.0",
  }
};

const productSlice = createSlice({
  name: 'product',
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
    updateProductData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetProductData: () => initialState
  }
});

export const { 
  updateIonValue, 
  updateParameter, 
  updateProductData,
  resetProductData
} = productSlice.actions;

export default productSlice.reducer;