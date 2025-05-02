import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    'Pass Stage': 1,
    'Pressure Vessel': 6,
    'Elements':6,
    elementModel: "",
    'Element age(years)': 2.5,
  }
];

const reactorSlice = createSlice({
  name: 'reactor',
  initialState,
  reducers: {
    updateStage: (state, action) => {
      const { index, field, value } = action.payload;
      state[index][field] = value;
    },
    addStage: (state) => {
      const newStage = {
        'Pass Stage': state.length + 1,
        'Pressure Vessel': 0,
        'Elements': 0,
        elementModel: "",
        'Element age(years)': 0.00,
      };
      state.push(newStage);
    },
    removeStage: (state, action) => {
      const index = action.payload;
      if (state.length <= 1) return;
      state.splice(index, 1);
      // Update stage numbers
      state.forEach((stage, i) => {
        stage.stage = i + 1;
      });
    },
    updateReactorData: (state, action) => {
      return action.payload;
    },
    resetReactorData: () => initialState
  }
});

export const { 
  updateStage, 
  addStage, 
  removeStage,
  updateReactorData,
  resetReactorData
} = reactorSlice.actions;

export default reactorSlice.reducer;