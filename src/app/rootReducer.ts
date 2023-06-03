import { combineReducers } from "@reduxjs/toolkit";
import destinationsReducer from "../features/destinations/destinationsSlice";
import destinationDetailReducer from "../features/destinationDetail/destinationDetailSlice";

const rootReducer = combineReducers({
  destinations: destinationsReducer,
  destinationDetail: destinationDetailReducer
});

export default rootReducer;
