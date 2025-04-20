import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ionValues: {
    calcium: "0.00",
    magnesium: "0.00",
    sodium: "0.00",
    potassium: "0.00",
    ammonium: "0.00",
    barium: "0.00",
    strontium: "0.00",
    hydrogen: "0.00",
    sulfate: "0.00",
    chloride: "0.00",
    fluoride: "0.00",
    nitrate: "0.00",
    hydroxide: "0.00",
    phosphate: "0.00",
    boron: "0.00",
    silica: "0.00",
    bicarbonate: "0.00",
    carbonDioxide: "0.00",
    carbonate: "0.00",
    ammonia: "0.00",
  },
  parameters: {
    feedFlow: "0.00",
    tds: "0.00",
    salts: "0.00"
  }
};

const concentrateSlice = createSlice({
  name: 'concentrate',
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
    updateConcentrateData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetConcentrateData: () => initialState
  }
});

export const { 
  updateIonValue, 
  updateParameter, 
  updateConcentrateData,
  resetConcentrateData
} = concentrateSlice.actions;

export default concentrateSlice.reducer;