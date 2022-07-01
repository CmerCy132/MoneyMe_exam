import rootReducer from './src/reducer';
import { configureStore } from "@reduxjs/toolkit";

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
