import { configureStore } from '@reduxjs/toolkit';
import feedWaterReducer from './slices/feedWaterSlice';
import flowRatesReducer from './slices/flowRatesSlice';
import reactorReducer from './slices/reactorSlice';
import productReducer from './slices/productSlice';
import concentrateReducer from './slices/concentrateSlice';

export const store = configureStore({
  reducer: {
    feedWater: feedWaterReducer,
    flowRates: flowRatesReducer,
    reactor: reactorReducer,
    product: productReducer,
    concentrate: concentrateReducer,
  },
});