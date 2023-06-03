import { combineReducers } from "@reduxjs/toolkit";
import destinationsReducer from "../features/destinations/destinationsSlice";

const rootReducer = combineReducers({
  destinations: destinationsReducer
});

export default rootReducer;
