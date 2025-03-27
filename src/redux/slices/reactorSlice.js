import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    stage: 1,
    pressureVessels: 6,
    elementsPerVessel:6,
    elementModel: "",
    elementAge: 2.5,
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
        stage: state.length + 1,
        pressureVessels: 0,
        elementsPerVessel: 0,
        elementModel: "",
        elementAge: 0.00,
        application: "",
        elementGroup: "",
        fluxAnnualChange: 0.00
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