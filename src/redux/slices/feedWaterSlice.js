import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ionValues: {
    calcium: "80",
    magnesium: "30",
    sodium: "120",
    potassium: "10",
    ammonia: "0.5",
    barium: "0.05",
    strontium: "0.8",
    iron: "0.1",
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
    bicarbonate: "150",
    carbonDioxide: "5",
    baso4: "2",
    caf2: "3",
    caso4: "10",
    sio2: "15",
    srso4: "5"
  },
  parameters: {
    ph: "7.5",
    temperature: "25.00",
    recovery: "75"
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